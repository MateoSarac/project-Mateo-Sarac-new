import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { MoviesActorsComponent } from './movies-actors/movies-actors.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { ActorDetailsComponent } from './actor-details/actor-details.component';
import { DataService } from './data.service';
import { GenresComponent } from './genres/genres.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MoviesActorsComponent,
    NavigationComponent,
    MovieDetailsComponent,
    ActorDetailsComponent,
    GenresComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
