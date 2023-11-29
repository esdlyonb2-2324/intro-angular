import { Injectable } from '@angular/core';
import {Fruit} from "./fruit";

@Injectable({
  providedIn: 'root'
})
export class FruitsService {

  constructor() { }

  tableauFruits : Fruit[] = [
    {
      name:"banane",
      couleur : "jaune"
    },
    {
      name:"pomme",
      couleur:"rouge"
    }
  ]

  getFruits() : Fruit[]
  {
    return this.tableauFruits
  }

}
