import { Injectable } from '@angular/core';

interface NumberMap { [index: number]: boolean };
let lastTime = '';
let lastNumbers: NumberMap = {};

@Injectable({
  providedIn: 'root'
})
export class IdServiceService {

  constructor() { }

  generateId() {
    const time = Date.now().toString();
    let offset = Math.floor(Math.random() * 65535);
    if (time === lastTime) {
      while (!lastNumbers[offset]) {
        offset = Math.floor(Math.random() * 65535);
      }
      lastNumbers[offset] = true;
    } else {
      lastTime = '';
      lastNumbers = {};
    }
    let post = offset.toString(16);
    while (post.length < 4) {
      post = '0' + post;
    }
    return time + post;
  }
}
