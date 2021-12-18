import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  posts$: any= [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    console.log(environment.api);
    
    this.posts$ = this.http.get(environment.api+'posts');
  }

}
