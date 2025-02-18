import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';



@Component({
  selector: 'app-store-recommendations',
  imports: [NgFor,CarouselModule],
  templateUrl: './store-recommendations.component.html',
  styleUrl: './store-recommendations.component.css'
})
export class StoreRecommendationsComponent {
  
  game_data:any = {
    "id":0,
    "name": "Baldur's Gate 3",
    "shopURL":"https://store.steampowered.com/app/1086940/Baldurs_Gate_3/",
    "images": {
      "front_img":"./../imgs/games/bg3/bg3-front.jpg",
        "cover": "./../imgs/games/bg3/bg3-front.jpg",
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
  frontBack(id:number){
    
    this.games[id].images.cover = this.games[id].images.front_img;
    
  }
  changeFront(img:string,id:number){
    this.games[id].images.cover = img
  }
}
