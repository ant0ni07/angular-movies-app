import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  constructor(private httpClient: HttpClient) { }

  getFanFavouriteMovies() {
    return this.httpClient.get<any[]>('assets/data/fanFavouriteMovies.json');
  }

  getTopMovies(){
    return this.httpClient.get<any[]>('/assets/data/movies.json');
  }

  getMovies(){
    return this.httpClient.get<any[]>('assets/data/movies.json');
  }
  getActors() {
    return this.httpClient.get<any[]>('assets/data/actors.json');
  }

  getReviews(){
    return this.httpClient.get<any[]>('assets/data/reviews.json');
  }
}
