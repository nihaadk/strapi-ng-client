import { MenuItem } from 'primeng/api';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  posts$: any = [];
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

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    console.log(environment.api);

    this.posts$ = this.http
      .get(environment.api + 'posts')
      .pipe(map((posts: any) => posts.data));
  }
}
