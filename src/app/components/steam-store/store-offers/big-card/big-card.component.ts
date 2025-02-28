import { NgIf } from '@angular/common';
import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-big-card',
  imports: [NgIf],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent {
  @Input() game_data:any;
  contador:number=0
  big_card:boolean=true
  constructor(){
    
  }
  
}
