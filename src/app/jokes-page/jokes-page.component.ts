import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Joke} from "../joke";
import {JokeComponent} from "../joke/joke.component";
import {JokeService} from "../joke.service";

@Component({
  selector: 'app-jokes-page',
  standalone: true,
  imports: [CommonModule, JokeComponent],
  templateUrl: './jokes-page.component.html',
  styleUrl: './jokes-page.component.css'
})
export class JokesPageComponent {

  jokes: Joke[] = []

  jokesService : JokeService = inject(JokeService)

  constructor() {

    this.jokesService.getMeFiveJokes().then((jokesFromApi:Joke[])=>{
      this.jokes = jokesFromApi

    })
  }


}
