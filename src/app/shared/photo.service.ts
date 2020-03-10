import { Injectable, ɵConsole } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Plugins, CameraPhoto , CameraResultType, CameraSource, FilesystemDirectory} from '@capacitor/core';

import { PhotoModel } from './photo.model';

const { Camera } = Plugins;

@Injectable({
    providedIn: 'root'
})
export class PhotoService {

    photos: PhotoModel[] = [];
    private PHOTO_STORAGE = 'photos';

    constructor(private platform: Platform) { }

    async loadSavedImages() {
        // Retrieve cached photo array data
        const photosInStorage = await Plugins.Storage.get({ key: this.PHOTO_STORAGE });
        this.photos = JSON.parse(photosInStorage.value) || [];

        if (!this.platform.is('hybrid')) {
            for (const photo of this.photos) {
                // Read each saved photo's data from the Filesystem
                const readFile = await Plugins.Filesystem.readFile({
                    path: photo.filepath,
                    directory: FilesystemDirectory.Data
                });

                // Web platform only: Save the photo into the base64 field
                photo.base64 = `data:image/jpeg;base64,${readFile.data}`;
              }

            console.log(this.photos);
        }
    }

    async saveToGallery() {

        const capturedPhoto = await Camera.getPhoto({
            resultType: CameraResultType.Uri,
            source: CameraSource.Camera, // automatically take a new photo with the camera
            quality: 100
        });

        console.log(capturedPhoto);


    }

}
