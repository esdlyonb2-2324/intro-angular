import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Joke} from "../joke";
import {MauricePipe} from "../maurice.pipe";

@Component({
  selector: 'app-joke',
  standalone: true,
  imports: [CommonModule, MauricePipe],
  templateUrl: './joke.component.html',
  styleUrl: './joke.component.css'
})
export class JokeComponent {

 @Input() joke!:Joke
  aShortJoke : string = "Chuck Norris can access the DB from the UI blablablabla blablabalalab blablaba"


  constructor() {

  }



}

