import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActorDetailsComponent } from './actor-details/actor-details.component';
import { GenresComponent } from './genres/genres.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MoviesActorsComponent } from './movies-actors/movies-actors.component';
import { MoviesComponent } from './movies/movies.component';

const routes: Routes = [
  { path: 'movies', component: MoviesComponent },
  { path: 'actors', component: MoviesActorsComponent },
  { path: 'genres', component: GenresComponent },
  { path: 'moviedetails/:id', component: MovieDetailsComponent },
  { path: 'actordetails/:id', component: ActorDetailsComponent },
  { path: '', redirectTo: '/movies', pathMatch: 'full' },
  { path: '**', redirectTo: '/movies' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
