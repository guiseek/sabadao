import { Component, inject } from '@angular/core';
import { AppProgressService } from './app-progress.service';

@Component({
  selector: 'sabadao-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular';

  progress = inject(AppProgressService)
}
