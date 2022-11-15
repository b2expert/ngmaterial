import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UtilityService {
  constructor() { }

  /**
   * 
   * @param input Object type
   * @returns query string (ex. name=biswajit&id=123)
   */
  serialize(input: any) {
    var str = [];
    for (const p in input)
      if (input.hasOwnProperty(p)) {
        str.push(encodeURIComponent(p) + '=' + encodeURIComponent(input[p]));
      }
    return str.join('&');
  }

  toBase64(file: any) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }
}
