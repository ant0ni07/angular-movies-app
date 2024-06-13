import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-details-reviews',
  templateUrl: './details-reviews.component.html',
  styleUrls: ['./details-reviews.component.css']
})
export class DetailsReviewsComponent implements OnInit {

  constructor(private movieService: MovieService){
    
  }
  movieReviews: any[] = [];

  getReviews() {
    this.movieService.getReviews().subscribe((data:any[])=>{
      this.movieReviews = data;
    })
  }
  ngOnInit(): void {

    this.getReviews();
    
  }



}
