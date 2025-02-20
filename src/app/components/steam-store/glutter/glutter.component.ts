import { Component } from '@angular/core';
import { SectionsComponent } from "./sections/sections.component";

@Component({
  selector: 'app-glutter',
  imports: [SectionsComponent,SectionsComponent],
  templateUrl: './glutter.component.html',
  styleUrl: './glutter.component.css'
})
export class GlutterComponent {
  recomendado = [
    { title: "GTA V", url: "https://store.steampowered.com/app/271590/Grand_Theft_Auto_V/" },
    { title: "Sea of Thieves", url: "https://store.steampowered.com/app/1172620/Sea_of_Thieves/" }
  ];
  categoria = [
    { title: "Mais vendidos", url: "https://store.steampowered.com/search/?filter=topsellers&snr=1_4_4__125" },
    { title: "Lançamentos", url: "https://store.steampowered.com/explore/new/?snr=1_4_4__125" },
    { title: "Em breve", url: "https://store.steampowered.com/explore/upcoming/?snr=1_4_4__125" },
    { title: "Ofertas", url: "https://store.steampowered.com/specials?snr=1_4_4__125#tab=TopSellers" },
    { title: "Titulo de RV", url: "https://store.steampowered.com/vr/?snr=1_4_4__125" },
    { title: "Compativeis com Controle", url: "https://store.steampowered.com/controller/?snr=1_4_4__125" },
  ];

}
