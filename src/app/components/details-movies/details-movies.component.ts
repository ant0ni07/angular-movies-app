import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-details-movies',
  templateUrl: './details-movies.component.html',
  styleUrls: ['./details-movies.component.css']
})
export class DetailsMoviesComponent implements OnInit{

  movies: any[] = []

  constructor(private movieService: MovieService){

  }
  getMovies(){
    this.movieService.getMovies().subscribe((data: any[])=>
    {
      this.movies = data;
    })
  }
  ngOnInit(): void {
   this.getMovies();
  }

}
