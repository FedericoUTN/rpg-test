import { Component, OnInit } from '@angular/core';
import { CombatIAService } from 'src/app/services/combat-ia.service';


@Component({
  selector: 'app-combat',
  templateUrl: './combat.component.html',
  styleUrls: ['./combat.component.sass']
})
export class CombatComponent implements OnInit {

  constructor(private combatIA : CombatIAService) { }

  ngOnInit(): void {
  }

}
