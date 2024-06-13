import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-details-actors',
  templateUrl: './details-actors.component.html',
  styleUrls: ['./details-actors.component.css']
})
export class DetailsActorsComponent implements OnInit {

  constructor(private movieService: MovieService) {
    
  }
  actors: any[] = []

  getActors(){
    this.movieService.getActors().subscribe((data:any[])=> {
      this.actors = data;
    })
  }
  ngOnInit(): void {
   this.getActors();
  }

}
