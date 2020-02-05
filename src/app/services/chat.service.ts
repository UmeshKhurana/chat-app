import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { throwError as observableThrowError, Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ChatService {
  // port configured for server
  private url = 'http://localhost:3000';
  private socket;
  constructor() {
    this.socket = io(this.url);
  }

  public sendMessage(message) {
    this.socket.emit('new-message', message);
  }
// Observable to subscribe in case of new message is received
  public getMessages = () => {
    return Observable.create((observer) => {
      this.socket.on('new-message', (message) => {
        observer.next(message);
      });
    });
  }



}
