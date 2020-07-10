import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor() { }

  /**
   * Transforma uma string base64 em um blob
   * https://stackoverflow.com/questions/16245767/creating-a-blob-from-a-base64-string-in-javascript
   */
  base64toBlob(b64Data: string, contentType: string, sliceSize = 512) {
    const byteCharacters = atob(b64Data);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);

      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }

    const blob = new Blob(byteArrays, { type: contentType });
    return blob;
  }

  /**
   * Transforma um arquivo em uma string url base64
   * https://stackoverflow.com/questions/36280818/how-to-convert-file-to-base64-in-javascript
   */
  fileToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result.toString());
      reader.onerror = error => reject(error);
    });
  }
}
