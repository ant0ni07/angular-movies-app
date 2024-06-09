import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-actors',
  templateUrl: './details-actors.component.html',
  styleUrls: ['./details-actors.component.css']
})
export class DetailsActorsComponent implements OnInit {

  actors: any[] = [
    {
      imageUrl: "../../../assets/images/sloth1.jpg",
      name: "Actor Name 1",
      role: "Role"
    },
    {
      imageUrl: "../../../assets/images/sloth1.jpg",
      name: "Actor Name 2",
      role: "Role"
    },
    {
      imageUrl: "../../../assets/images/sloth1.jpg",
      name: "Actor Name 3",
      role: "Role"
    },
  ]

  ngOnInit(): void {
   
  }

}
