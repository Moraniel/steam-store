
import { Component } from '@angular/core';
import { Carousel } from 'primeng/carousel';
import { BigCardComponent } from "./big-card/big-card.component";
import { SmallCardComponent } from "./small-card/small-card.component";
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-store-offers',
  imports: [Carousel, BigCardComponent, SmallCardComponent],
  templateUrl: './store-offers.component.html',
  styleUrl: './store-offers.component.css'
})
export class StoreOffersComponent {
  
  game_data:any = {
    "id":0,
    "card":"big",
    "name": "Baldur's Gate 3",
    "shopURL":"https://store.steampowered.com/app/1086940/Baldurs_Gate_3/",
    "images": {
      "front_img":"./../imgs/games/bg3/bg3-front.jpg",
        "cover": "./../imgs/games/f1/cover.jpg",
        "screenshots": [
            "./../imgs/games/bg3/bg3-extra.jpg",
            "./../imgs/games/bg3/bg3-extra-1.jpg",
            "./../imgs/games/bg3/bg3-extra-2.jpg",
            "./../imgs/games/bg3/bg3-extra-3.jpg"
        ]
    },
    "status": "Já Disponível",
    "tag": "Popular",
    "preco":"R$ 230,00"
}
games:any[]=[this.game_data];

  constructor(){
    this.games.push({
      "id":1,
      "card":"big",
      "name": "Sea of Thieves",
      "shopURL":"https://store.steampowered.com/app/1172620/Sea_of_Thieves_2024_Edition/",
      "images": {
        "front_img":"./../imgs/games/sot/sot-front.jpg",
          "cover": "./../imgs/games/sot/sot-front.jpg",
          "screenshots": [
              "./../imgs/games/sot/sot-extra.jpg",
              "./../imgs/games/sot/sot-extra-1.jpg",
              "./../imgs/games/sot/sot-extra-2.jpg",
              "./../imgs/games/sot/sot-extra-3.jpg"
          ]
      },
      "status": "Já Disponível",
      "tag": "Popular",
      "preco":"R$ 230,00"
  },{
    "id":2,
    "card":"big",
    "name": "Sea of 2",
    "shopURL":"https://store.steampowered.com/app/1172620/Sea_of_Thieves_2024_Edition/",
    "images": {
      "front_img":"./../imgs/games/sot/sot-front.jpg",
        "cover": "./../imgs/games/sot/sot-front.jpg",
        "screenshots": [
            "./../imgs/games/sot/sot-extra.jpg",
            "./../imgs/games/sot/sot-extra-1.jpg",
            "./../imgs/games/sot/sot-extra-2.jpg",
            "./../imgs/games/sot/sot-extra-3.jpg"
        ]
    },
    "status": "Já Disponível",
    "tag": "Popular",
    "preco":"R$ 230,00"
},{
  "id":3,
  "card":"big",
  "name": "Sea of 3",
  "shopURL":"https://store.steampowered.com/app/1172620/Sea_of_Thieves_2024_Edition/",
  "images": {
    "front_img":"./../imgs/games/sot/sot-front.jpg",
      "cover": "./../imgs/games/sot/sot-front.jpg",
      "screenshots": [
          "./../imgs/games/sot/sot-extra.jpg",
          "./../imgs/games/sot/sot-extra-1.jpg",
          "./../imgs/games/sot/sot-extra-2.jpg",
          "./../imgs/games/sot/sot-extra-3.jpg"
      ]
  },
  "status": "Já Disponível",
  "tag": "Popular",
  "preco":"R$ 230,00"
},
)
  }
}
