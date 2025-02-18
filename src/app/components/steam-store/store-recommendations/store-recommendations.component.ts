import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-store-recommendations',
  imports: [NgFor],
  templateUrl: './store-recommendations.component.html',
  styleUrl: './store-recommendations.component.css'
})
export class StoreRecommendationsComponent {
  
  game_data:any = {
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



  frontBack(){
    setTimeout(() => {
      this.game_data.images.cover = this.game_data.images.front_img;
    }, 280);
  }
  changeFront(img:string){

    this.game_data.images.cover = img
  }
}
