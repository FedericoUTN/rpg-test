import { Component, OnInit } from '@angular/core';
import { item } from '../classes/item';
import { InventarioService } from '../services/inventario.service';
import { CombatIAService } from '../services/combat-ia.service';
import { Heroe } from '../classes/heroe';
import { Quest } from '../classes/quest';
import { MissionsService } from '../missions.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.sass']
})
export class InventoryComponent implements OnInit {
  currentMoney : number = 0
  items : item[] = []
  Hero : Heroe;
  Quests : Quest[] = []
  constructor(private inventarioLogic : InventarioService, private combatLogic : CombatIAService,
    private questLogic : MissionsService) { 
    this.items = inventarioLogic.equipo;
    this.Hero = combatLogic.heroe
    this.Quests = questLogic.Quests
  }

  ngOnInit(): void {
  }
  vender(id : number){
    this.inventarioLogic.venderItem(id);
    this.items = this.inventarioLogic.equipo;
    this.currentMoney = this.inventarioLogic.money
  }
  completarQuestTest(){
          this.questLogic.completarPreMission()
          this.currentMoney = this.inventarioLogic.money
  }

}
