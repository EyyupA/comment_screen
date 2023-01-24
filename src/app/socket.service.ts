import { Injectable } from '@angular/core';
import { Message } from 'interfaces/hizmet.interface';
import { io, Socket } from 'socket.io-client';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  private socket: Socket;
  public comments: Message[] = [];

  constructor() {
    this.socket = io(environment.wsUrl, {});

    this.socket.on('message', (value) => {
      this.comments.unshift(value);
      console.log(this.comments);
    });
  }

  public sendMessage(message: string) {
    this.socket.emit('message', message);
  }
}