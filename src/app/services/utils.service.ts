import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  urlPattern = (/\b(http|https)?:\/\/\S+/gi);
  constructor() {

  }
/* TODO: Check if message is having an anchor link */

}
