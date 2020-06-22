import { Component, OnInit } from '@angular/core';
import { World } from 'src/app/classes/world';


@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.scss']
})
export class WorldComponent implements OnInit {

  grid : string[];
  // ActualWorld : World
ActualWorld = {
    title : 'Valle Boscoso',
    description : 'Es un valle repleto de bosques, pobre pero con un pueblo trabajador, hay monstruos debiles en sus arrededores.'
  }
  constructor() {
    this.grid = ['<^','^','^>','<','R','>','<v','v','v>'];
    
    
   }

  ngOnInit(): void {
    
  }
  // WorldData(){
  //   this.ActualWorld.title = 'Valle Boscoso'
  //   this.ActualWorld.description = 'Es un valle repleto de bosques, pobre pero con un pueblo trabajador, hay monstruos debiles en sus arrededores.'
  //     }

}
