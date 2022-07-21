import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  users:any;

  vehicles:any;

  planets:any;

  HttpClient: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getCharacters();
    this.getVehicles();
    this.getPlanets();
  }
  // ************ etre vivants
  getCharacters(){
    this.http.get<any>('https://swapi.dev/api/people/')
      .subscribe(data => {
            this.users = data.count;
        })
  }
  // ********** véhicule recensés
  getVehicles(){
    this.http.get<any>('https://swapi.dev/api/vehicles/')
      .subscribe(data => {
            this.vehicles = data.count;
        })
  }
  // ********* planetes recensées
  getPlanets(){
    this.http.get<any>('https://swapi.dev/api/planets/')
      .subscribe(data => {
            this.planets = data.count;
        })
  }

}
