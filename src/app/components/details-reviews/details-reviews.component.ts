import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-reviews',
  templateUrl: './details-reviews.component.html',
  styleUrls: ['./details-reviews.component.css']
})
export class DetailsReviewsComponent implements OnInit {

  movieReviews: any[] = [
    {
      rate: 7.5,
      review: "sdaffsf",
      author: "Author Name 1",
      usefulCount: 100,
      totalCount: 120
    },
    {
      rate: 8.5,
      review: "sdaffsf",
      author: "Author Name 2",
      usefulCount: 100,
      totalCount: 150
    },
    {
      rate: 9.5,
      review: "sdaffsf",
      author: "Author Name 3",
      usefulCount: 100,
      totalCount: 160
    }
  ]
  ngOnInit(): void {
    
  }



}
