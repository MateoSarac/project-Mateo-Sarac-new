import { Component } from '@angular/core';
import { IActors } from './movies-actors';

@Component({
  selector: 'app-movies-actors',
  templateUrl: './movies-actors.component.html',
  styleUrls: ['./movies-actors.component.css'],
})
export class MoviesActorsComponent {
  actors: IActors[] = [
    {
      naziv: 'Marlon Brando',
      film: 'The Godfather',
      godina: 1924,
      grad: 'Omaha',
      visina: 1.75,
      slika: 'assets/img/Marlon_Brando.png',
    },
    {
      naziv: 'Matthew McConaughey',
      film: 'Interstellar',
      godina: 1969,
      grad: 'Texas',
      visina: 1.82,
      slika: 'assets/img/Matthew-McConaughey.jpg',
    },
    {
      naziv: 'Russell Crowe',
      film: 'Gladiator',
      godina: 2000,
      grad: 'Wellington',
      visina: 1.82,
      slika: 'assets/img/RussellCrowe.jpg',
    },
    {
      naziv: 'Keanu Reeves',
      film: 'The Matrix',
      godina: 1999,
      grad: 'Toronto',
      visina: 1.86,
      slika: 'assets/img/KeanuReeves.jpg',
    },
    {
      naziv: 'Brad Pitt',
      film: 'Seven',
      godina: 1995,
      grad: 'Oklahoma',
      visina: 1.8,
      slika: 'assets/img/BradPitt.webp',
    },
    {
      naziv: 'Peter Geddis',
      film: 'Star Wars',
      godina: 1977,
      grad: 'London',
      visina: 1.85,
      slika: 'assets/img/PeterGeddis.jpg',
    },
  ];

  imageWidth: number = 130;
  rowWidth: number = 100 / 6;
}
