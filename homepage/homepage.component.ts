import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  user:any;
  
  HttpClient: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getCharacter();
  }

  getCharacter(){
    this.http.get<any>('https://swapi.dev/api/people/3/')
      .subscribe(data => {
            this.user = data.name;
        })
  }
}
