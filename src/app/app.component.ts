import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { Component } from '@angular/core';
import { GithubServiceService } from './services/github-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('openClose', [
      // ...
      state(
        'open',
        style({
          height: '200px',
          opacity: 1,
          backgroundColor: 'yellow',
        })
      ),
      state(
        'closed',
        style({
          height: '100px',
          opacity: 0.8,
          backgroundColor: 'blue',
        })
      ),
      transition('open => closed', [animate('1s')]),
      transition('closed => open', [animate('0.5s')]),
    ]),
  ],
})
export class AppComponent {
  repoList$ = this.githubService.getAllRepos();
  constructor(private githubService: GithubServiceService) {}
  title = 'shane-taylor-profile-v2';

  isOpen = true;

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
