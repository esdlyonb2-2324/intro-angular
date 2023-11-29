import { Injectable } from '@angular/core';
import {Joke} from "./joke";

@Injectable({
  providedIn: 'root'
})
export class JokeService {
//fetch 5 jokes depuis l'api
  //nouveau component et route qui affiche les 5 blagues

  url : string = "https://api.chucknorris.io/jokes/random"

  async getMeFiveJokes()
  {
    let jokes : Joke[] =[]

    for(let i=0;i<5;i++){

      let jokeJson = await fetch(this.url)
      let joke = await jokeJson.json()
      jokes.push(joke)
      console.log(joke)


    }


    return jokes
  }

  constructor() { }
}

