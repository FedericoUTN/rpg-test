import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.scss']
})
export class WorldComponent implements OnInit {

  grid : string[]
  constructor() {
    this.grid = ['A','B','C','D','E','F','G','H','I']
   }

  ngOnInit(): void {
  }

}
