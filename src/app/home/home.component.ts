import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  message : string ='salut'
  tableau : string[] = ['un', 'deux', 'trois', 'quatre']
  contenuInput : string = ""

  discoucou(){
    console.log("coucou")
  }

}
