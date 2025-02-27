
import { Component } from '@angular/core';
import { Carousel } from 'primeng/carousel';

@Component({
  selector: 'app-store-offers',
  imports: [Carousel],
  templateUrl: './store-offers.component.html',
  styleUrl: './store-offers.component.css'
})
export class StoreOffersComponent {
  
  game_data:any = {
    "id":0,
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
  })
  }
}
