import { Component, OnInit } from '@angular/core';
import { item } from '../classes/item';
import { InventarioService } from '../services/inventario.service';
import { CombatIAService } from '../services/combat-ia.service';
import { Heroe } from '../classes/heroe';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.sass']
})
export class InventoryComponent implements OnInit {
  currentMoney : number = 0
  items : item[] = []
  Hero : Heroe;
  constructor(private inventarioLogic : InventarioService, private combatLogic : CombatIAService) { 
    this.items = inventarioLogic.equipo;
    this.Hero = combatLogic.heroe
  }

  ngOnInit(): void {
  }
  vender(id : number){
    this.inventarioLogic.venderItem(id);
    this.items = this.inventarioLogic.equipo;
    this.currentMoney = this.inventarioLogic.money
  }

}
