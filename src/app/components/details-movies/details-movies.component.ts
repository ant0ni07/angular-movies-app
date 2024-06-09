import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-movies',
  templateUrl: './details-movies.component.html',
  styleUrls: ['./details-movies.component.css']
})
export class DetailsMoviesComponent implements OnInit{

  movies: any[] = [
    {
      imageUrl: '../../../assets/images/deathmark.png',
      title: 'Movie Title 1',
      rate: 8.5,
      
    },
    {
      imageUrl: '../../../assets/images/deathmark.png',
      title: 'Movie Title 2',
      rate: 9.5,
    
    },
   
  ]
  ngOnInit(): void {
   
  }

}
