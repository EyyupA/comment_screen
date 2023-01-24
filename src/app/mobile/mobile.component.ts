import { Component } from '@angular/core';
import { SocketService } from '../socket.service';
declare var device: any;

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.scss']
})
export class MobileComponent {
  public message: String = '';

  constructor(private socketio: SocketService) {
  }

  public sendMessage() {
    if(this.message == '') return;
    this.socketio.sendMessage(this.message.toString());
    this.message = '';
  }

}
