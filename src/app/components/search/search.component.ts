import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  movieTitle = "";
  constructor(private _activatedRoute: ActivatedRoute, private httpClient: HttpClient){
    this._activatedRoute.params.subscribe((p) => {
      console.log(p)
      this.movieTitle = p["movieTitle"]
    })
  }

  searchResult: any[] =  [];
  
  searchMovies() {
    this.httpClient.get<any[]>('/assets/data/search.json').subscribe((data:any[])=> {
      this.searchResult = data;
    })
  }
  ngOnInit(): void {
      this.searchMovies();
  }

}
