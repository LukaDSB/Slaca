import { Component } from '@angular/core';
import { faEllipsisV, faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DevChuva';
  verticalElipsis = faEllipsisV;
  heart = faHeart;
}
