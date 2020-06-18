//classes
export class item {
    id : number;
    name : string;
    description : string;
    rarity : itemRarity;
    imgURL : string; 
    value : number;         //cuanto vale el item  
}
export class potion extends item {
    power : number;       //indica cuanto afecta
    type : potionType;
}

export class weapon extends item{
    power : number;
    upgradeLvl : number = 0;        //mejora
    type : weaponType;
    
}
export class armor extends item {
    def : number        //reduccion de daño
    upgradeLvl : number = 0;        //mejora
    type : armorType;
}
export class questItem extends item {
    questId : number;               // id de mision a la cual esta ligada
}

//enum's
export enum weaponType {
    sword,
    dagger,
    bow,
    wand,
    shield,
    axe,
    spear
}
export enum armorType {
    light,
    medium,
    heavy
}
export enum itemRarity {
    defectuoso,
    normal,
    mejorado,
    raro,
    epico,
    legendario
}
export enum potionType {
    hpRegeneration,
    mpRegeneration,
    powerUP,
    expUP
}