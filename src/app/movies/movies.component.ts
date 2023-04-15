import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { IMovie } from './movies';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  movies: any;
  imageWidth: number = 130;
  rowWidth: number = 100 / 8;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.fetchMovies();
  }

  fetchMovies() {
    this.dataService.getMovies().subscribe((response: any) => {
      this.movies = response.results;
      //console.log(this.movies);
    });
  }
}
