import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css'],
})
export class GenresComponent implements OnInit {
  genres: any;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.fetchGenres();
  }

  fetchGenres() {
    this.dataService.getGenres().subscribe((response: any) => {
      this.genres = response.results;
      console.log(this.genres);
    });
  }
}
