import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent {
  title = 'angular';
  constructor(private meta: Meta) {
    this.meta.addTag({ name: 'description', content: 'How to use Angular 4 meta service' });
    this.meta.addTag({ name: 'author', content: 'talkingdotnet' });
    this.meta.addTag({ name: 'keywords', content: 'Angular, Meta Service' });
  }
}
