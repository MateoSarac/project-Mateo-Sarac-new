import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getGenres() {
    var header = new HttpHeaders()
      .set(
        'X-RapidAPI-Key',
        '86b6da0543msh2e9c2dc36d537c9p14fcf1jsn9cfa92ba5e49'
      )
      .set('X-RapidAPI-Host', 'moviesdatabase.p.rapidapi.com');

    var options = { headers: header };

    return this.http.get(
      'https://moviesdatabase.p.rapidapi.com/titles/utils/genres',
      options
    );
  }

  getMovies() {
    var header = new HttpHeaders()
      .set(
        'X-RapidAPI-Key',
        '86b6da0543msh2e9c2dc36d537c9p14fcf1jsn9cfa92ba5e49'
      )
      .set('X-RapidAPI-Host', 'moviesdatabase.p.rapidapi.com');

    var options = { headers: header };

    return this.http.get(
      'https://moviesdatabase.p.rapidapi.com/titles',
      options
    );
  }
}
