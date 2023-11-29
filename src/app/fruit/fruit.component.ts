import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Fruit} from "../fruit";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-fruit',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './fruit.component.html',
  styleUrl: './fruit.component.css'
})
export class FruitComponent {
  @Input() leFruit! : Fruit



}
