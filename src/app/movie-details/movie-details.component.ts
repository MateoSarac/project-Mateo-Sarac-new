import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
  parameter: any = '';
  genres: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.parameter = this.route.snapshot.paramMap.get('id');
    this.fetchGenres();
  }

  fetchGenres() {
    this.dataService.getGenres().subscribe((response) => {
      this.genres = response;
      // console.log(this.genres);
    });
  }
}
