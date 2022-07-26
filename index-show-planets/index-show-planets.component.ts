import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-index-show-planets',
  templateUrl: './index-show-planets.component.html',
  styleUrls: ['./index-show-planets.component.scss']
})
export class IndexShowPlanetsComponent implements OnInit {

  planets:any;
  gender:any;
  HttpClient: any;

  constructor(private Http: HttpClient ) { }

  // envoie de la requette
  ngOnInit(): void {
    this.getPlanets();
  }
// fonction de récupération de l'api
  getPlanets(){
    this.Http.get<any>('https://swapi.dev/api/people')
      .subscribe(data => {
            this.planets = data.name;
            
        })
  }

}
