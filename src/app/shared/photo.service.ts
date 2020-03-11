import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Plugins , CameraResultType, CameraSource} from '@capacitor/core';

@Injectable({
    providedIn: 'root'
})
export class PhotoService {

    inspectUrl = 'http://smart-miniral-api.herokuapp.com/inspect';

    constructor(private http: HttpClient) { }

    async inspectImage() {

        const capturedPhoto = await Plugins.Camera.getPhoto({
            resultType: CameraResultType.Uri,
            source: CameraSource.Camera, // automatically take a new photo with the camera
            quality: 100
        });

        const response = await fetch(capturedPhoto.webPath);
        const blob = await response.blob();
        await this.getMetalInfo(blob);
    }

    private async getMetalInfo(imageBlob: Blob) {

        const formData = new FormData();
        formData.append('inspect', imageBlob, 'inspect.jpeg');

        this.http.post(this.inspectUrl, formData).subscribe(
            (res) => console.log(res),
            (errRes) => {
                console.log(errRes);
              }
          );
    }

}
