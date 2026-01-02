import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { ContentGrid } from './components/content-grid/content-grid';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Header,ContentGrid],
  //templateUrl: './app.html',
  template: `
    <main>
      <app-header/>
      <content-grid/>
    </main>
  `,
  styleUrl: './app.css',
  //template:"<h1>hello world<.h1>"
})
export class App {
  //protected readonly title = signal('Lalala');
  title = 'app1ang';
}
