import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { IActors } from './movies-actors';

@Component({
  selector: 'app-movies-actors',
  templateUrl: './movies-actors.component.html',
  styleUrls: ['./movies-actors.component.css'],
})
export class MoviesActorsComponent implements OnInit {
  actors: any[] = [];

  imageWidth: number = 130;
  rowWidth: number = 100 / 7;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.fetchActors();
  }

  fetchActors() {
    this.dataService.getActors().subscribe((response: any) => {
      this.actors = response.results;
      //console.log(this.actors);
    });
  }
}
