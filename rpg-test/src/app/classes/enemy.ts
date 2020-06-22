import { estados } from './heroe';

export class enemy {
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

}
enum rareza {
    normal,
    raro,
    epico,
    jefe
}