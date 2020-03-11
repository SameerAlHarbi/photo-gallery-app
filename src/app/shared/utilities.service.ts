import { Injectable } from '@angular/core';
import { CameraPhoto, Filesystem } from '@capacitor/core';
import { Platform } from '@ionic/angular';
import { promise } from 'protractor';
import { async } from '@angular/core/testing';

@Injectable({
    providedIn: 'root'
})
export class UtilitiesService {

    constructor(private platform: Platform) { }

    async readAsBase64(cameraPhoto: CameraPhoto) {
        if (this.platform.is('hybrid')) {
            const file = await Filesystem.readFile({
                path: cameraPhoto.path
            });
            return file.data;
        } else {
            const response = await fetch(cameraPhoto.webPath!);
            const blob = await response.blob();
            return await this.convertBlobToBase64(blob) as string;
    }
  }

    convertBlobToBase64(blob: Blob) {
        const convertResult = new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onerror = reject;
            reader.onload = () => {
                resolve(reader.result);
            };
            reader.readAsDataURL(blob);
        });

        return convertResult;
    }

    //   async convertBlobToBase64(blob: Blob) {
//       const reader = new FileReader();
//       try {
//         reader.onload = async () => {
//             const x = await reader.result;
//             return x;
//         };
//         reader.readAsDataURL(blob);
//       } catch ( e) {
//           throw new Error(e);
//       }
//   }
}
