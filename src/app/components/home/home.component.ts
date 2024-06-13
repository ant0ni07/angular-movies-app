import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  
  fanFavouriteMovies: any[] = [];
  topMovies: any[] = []
  
  constructor(private movieService: MovieService){

  }
  
  getFanFavouriteMovies() {
    this.movieService.getFanFavouriteMovies().subscribe({
      next: (data)=> {
      console.log("fans " + data);
      this.fanFavouriteMovies = data;
    },
    error: (error) => {
      console.log("error ", error)
    },
    complete: ()=> {
      console.log("completed")
    }
  }
)}
  getTopMovies() {
    this.movieService.getTopMovies().subscribe((data:any[])=> {
      console.log("tops " + data);
      this.topMovies = data;
    })

  }
  ngOnInit(): void {
    
    this.getFanFavouriteMovies();
    this.getTopMovies();
  }
 

}
