import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FruitsService} from "../fruits.service";
import {FruitComponent} from "../fruit/fruit.component";
import {Fruit} from "../fruit";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-autrepage',
  standalone: true,
  imports: [CommonModule, FruitComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './autrepage.component.html',
  styleUrl: './autrepage.component.css'
})
export class AutrepageComponent {

  fruitForm = new FormGroup({
    name : new FormControl(''),
    couleur: new FormControl('une couleur')
  })

  sendFruit(){
    this.fruitsService.addFruit(this.fruitForm.value.name ?? '', this.fruitForm.value.couleur ?? '')
  this.fruitForm.reset({
    name:'un autre fruit peut etre ?',
    couleur:"avec une autre couleur ?"
  })
  }

  fruitsService : FruitsService = inject(FruitsService)

  fruits: Fruit[] = this.fruitsService.getFruits()

  filteredFruits : Fruit[] = []


  fruitFilter(occurence:string)
  {
    if(!occurence)
    {
      this.filteredFruits = this.fruits
    }else{
       this.filteredFruits = this.fruits.filter((unFruit:Fruit)=>{
          unFruit?.couleur.toLowerCase().includes(occurence.toLowerCase())
        })

    }
  }

  constructor() {
    console.log(this.fruitsService.getFruitById(2))
    localStorage.setItem('COUCOU', "COUCOU COUCOU")

  }
}
