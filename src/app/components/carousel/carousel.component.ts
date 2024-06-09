import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent {
  isVisible = false;
  isActive = true;
  fanFavouriteMovies: any[] = [
    {
      imageUrl: '../../../assets/images/deathmark.png',
      title: 'Movie Title 1',
      actors: 'Movie Actors 1',
      year: 2023,
      rate: 8.5,
      rank: 2,
    },
    {
      imageUrl: '../../../assets/images/deathmark.png',
      title: 'Movie Title 2',
      actors: 'Movie Actors 2',
      year: 2022,
      rate: 9.5,
      rank: 1,
    },
    {
      imageUrl: '../../../assets/images/deathmark.png',
      title: 'Movie Title 3',
      actors: 'Movie Actors 3',
      year: 2021,
      rate: 7.5,
      rank: 3,
    },
  ];

  topMovies: any[] = [
    {
      imageUrl: '../../../assets/images/deathmark.png',
      title: 'Movie Title 1',
      actors: 'Movie Actors 1',
      year: 2023,
      rate: 8.5,
      rank: 2,
    },
    {
      imageUrl: '../../../assets/images/deathmark.png',
      title: 'Movie Title 2',
      actors: 'Movie Actors 2',
      year: 2022,
      rate: 9.5,
      rank: 1,
    },
   
  ]
}
