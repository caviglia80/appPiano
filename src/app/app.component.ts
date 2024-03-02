import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  aplicarSonido(sonido: number): void {
    const audio = new Audio();
    audio.src = `../assets/sonidos/note${sonido}.wav`;
    audio.load();
    audio.play();
  }
}
