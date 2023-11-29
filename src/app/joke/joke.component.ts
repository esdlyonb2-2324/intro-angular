import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Joke} from "../joke";

@Component({
  selector: 'app-joke',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './joke.component.html',
  styleUrl: './joke.component.css'
})
export class JokeComponent {

 @Input() joke!:Joke
  aShortJoke : string = "Chuck Norris can access the DB from the UI"

  //mesurer cette chaine de caracteres

  //donner une classe rouge si sa value est plus longue
  //que la chaine de caracteres au dessus


}
