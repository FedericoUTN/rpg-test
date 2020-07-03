import { Injectable } from '@angular/core';
import { Quest, estadoQuest } from '../app/classes/quest';
import { item, potion, itemRarity, potionType, weapon, weaponType, armor, questItem, armorType} from './classes/item';
import { InventarioService } from './services/inventario.service';
import { CombatIAService } from './services/combat-ia.service';
import { element } from 'protractor';


@Injectable({
  providedIn: 'root'
})
export class MissionsService {

  Quests : Quest [] = []
  constructor(private Inventario : InventarioService, private Hero : CombatIAService) {
    this.preQuest();
   }
  activarQuest(quest : Quest){
    if (quest.isActivo == false){
      quest.toggleActivo();
      console.log('mision activada')
    }
}
completarQuest(quest : Quest){
  if(this.checkRequeriment(quest, this.getQuestItems())){
    console.log('se cumple los requerimientos')
  }
  
  
  //premios
  this.Hero.obtenerExperiencia(quest.rewards.experienceReward)
  this.Inventario.agregarDinero(quest.rewards.moneyReward)
  this.Inventario.agregarEquipo(quest.rewards.itemReward)
  
  console.log('se entregaron las recompensas')
  //eliminar Quest
  this.removeItem(quest.requeriment)
  this.removerQuest(quest)
}
//regresa true si se posee los items requeridos en la misions, falso de lo contrario
checkRequeriment(quest : Quest, items: (item | questItem)): boolean{
if(quest.requeriment === items){
  return true;
}
else return false

}
removeItem(item : questItem){
  const index = this.Inventario.equipo.findIndex((element) => element.id === item.id)
  console.log('es el ' + index + ' item removido')
  this.Inventario.equipo.splice(index, 1)

  /*const index = this.equipo.findIndex((element) => element.id === id);
      console.log('es el ' + index)
      this.money += this.equipo[index].value
      this.equipo.splice(index, 1);*/
}

getQuestItems():(item | questItem) {
  let questItems : (item | questItem)
  for (let q of this.Inventario.equipo){
    //los quest items tienen id mayor a 100
    if(q.id > 300){
      questItems = q 
    }    
  }
  return questItems;
}
//remueve una mision de la quest pasada
removerQuest(quest : Quest){
  for (let i in this.Quests){
    if(quest.id === this.Quests[i].id){
      this.Quests.splice(Number(i),1)
      console.log('removido la quest '+ quest.titulo + ' indice ' + i)
    }
  }

}

//hardcodes

preQuest(){
  let mission1 : Quest = new Quest(1,'Matar al Kobol', 'Debes matar al Kobol', estadoQuest.onProgress,
  1, true);
  mission1.fillRewards(this.coraza, 200, 60);
  mission1.fillRequeriment(this.Inventario.getKbol())
  this.Quests.push(mission1)
}

coraza : armor = {
  id : 21,
  name : 'Coraza',
  description : 'Coraza de acero',
  rarity : itemRarity.normal,
  imgURL : '',
  value : 130,
  def : 8,
  upgradeLvl : 1,
  type : armorType.heavy
}

completarPreMission(){
  let mision = this.Quests[0];
  this.completarQuest(mision)
}
  

  
}
