import { MenuItem } from 'primeng/api';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  items: MenuItem[] = [
    {
      label: 'Home',
      routerLink: '/',
    },
    {
      label: 'About',
      routerLink: '/about',
    },
  ];
}
