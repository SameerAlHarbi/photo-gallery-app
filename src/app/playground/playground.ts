// async loadSavedImages() {
//     // Retrieve cached photo array data
//     const photosInStorage = await Plugins.Storage.get({ key: this.PHOTO_STORAGE });
//     this.photos = JSON.parse(photosInStorage.value) || [];

//     if (!this.platform.is('hybrid')) {
//         for (const photo of this.photos) {
//             // Read each saved photo's data from the Filesystem
//             const readFile = await Plugins.Filesystem.readFile({
//                 path: photo.filepath,
//                 directory: FilesystemDirectory.Data
//             });

//             // Web platform only: Save the photo into the base64 field
//             photo.base64 = `data:image/jpeg;base64,${readFile.data}`;
//           }

//         console.log(this.photos);
//     }
// }    async loadSavedImages() {
//     // Retrieve cached photo array data
//     const photosInStorage = await Plugins.Storage.get({ key: this.PHOTO_STORAGE });
//     this.photos = JSON.parse(photosInStorage.value) || [];

//     if (!this.platform.is('hybrid')) {
//         for (const photo of this.photos) {
//             // Read each saved photo's data from the Filesystem
//             const readFile = await Plugins.Filesystem.readFile({
//                 path: photo.filepath,
//                 directory: FilesystemDirectory.Data
//             });

//             // Web platform only: Save the photo into the base64 field
//             photo.base64 = `data:image/jpeg;base64,${readFile.data}`;
//           }

//         console.log(this.photos);
//     }
// }