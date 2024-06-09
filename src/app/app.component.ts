import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'This is the movies app';

  today = new Date();

  imageUrl = 'https://dotnethow.net/images/movies/movie-1.jpg';

  sellingPrice = 15.50;

  attributeValue="boo";

  isSampleApplied=true;

  multipleClasses = 'sample-bgcolor sample-color';
  multipleStyles = 'background-color: green; color: orange';

  timeNow = new Date();

  setTimeToNow(){
    console.log(new Date())
    this.timeNow = new Date();
  }

  name="Antonio"
  bColor = "";
  setColor(_color: string){
    this.bColor = _color;
  }
  
}
