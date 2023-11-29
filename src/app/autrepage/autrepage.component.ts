import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FruitsService} from "../fruits.service";
import {FruitComponent} from "../fruit/fruit.component";
import {Fruit} from "../fruit";

@Component({
  selector: 'app-autrepage',
  standalone: true,
  imports: [CommonModule, FruitComponent],
  templateUrl: './autrepage.component.html',
  styleUrl: './autrepage.component.css'
})
export class AutrepageComponent {

  fruitsService : FruitsService = inject(FruitsService)

  fruits: Fruit[] = this.fruitsService.getFruits()

}
