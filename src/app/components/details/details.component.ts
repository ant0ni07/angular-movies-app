import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit, OnChanges, AfterContentInit, AfterViewInit{

  movieId = "";

  stars = ['Star #1 Name', 'Star #2 Name', 'Star #3 Name']
  genres = ['Genre #1', 'Genre #2', 'Genre #3']
  directors = ['Actor #1', 'Actor #2', 'Actor #3']

  constructor(private activatedRoute: ActivatedRoute){

    this.activatedRoute.params.subscribe((p) => {
      this.movieId = p["id"];
    })

    console.log("the movie id is : " + this.movieId)
  }
 
  ngOnChanges(changes: SimpleChanges): void {
      console.log("ngOnChanges called")
  }
  ngOnInit(): void {
    console.log("ngOnInit called")
      
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContent called")
  }
  ngAfterViewInit(): void {
    console.log("ngAfterView called")
  }

  
}
