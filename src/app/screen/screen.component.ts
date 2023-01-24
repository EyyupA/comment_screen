import { Component } from '@angular/core';
import { SocketService } from '../socket.service';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.scss']
})
export class ScreenComponent {

  constructor(public socketio: SocketService) {}

}
