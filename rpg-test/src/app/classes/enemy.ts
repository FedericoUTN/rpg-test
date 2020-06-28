import { estados } from './heroe';

export class Enemy {
    id : number;
    name : string;
    hp : number;
    mp : number;
    exp : number;       //esta es la experiencia que da al morir
    lvl : number;
    power : number;     //poder del enemigo
    armor : number;     //resistencia al daño
    speed : number;     //permite saber el orden de los turnos
    rarity : rareza;
    state : estados = estados.good;
    IC : number = 0;        //indica el turno, al llegar a 100 es su turno
    changeState(estado : estados){      //cambia al estado pasado por parametro
        this.state = estado
    }
    preLlenado(){
        this.id = 101;
        this.name = 'Kobol'
        this.hp = 30
        this.mp = 30
        this.exp = 10
        this.lvl = 1
        this.power = 8
        this.armor = 2
        this.speed = 20
        this.rarity = rareza.normal
        this.state = estados.good
        this.IC = 0
    }

}
enum rareza {
    normal,
    raro,
    epico,
    jefe
}