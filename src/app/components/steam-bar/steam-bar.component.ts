import { Component } from '@angular/core';
import { SteamBarImgComponent } from './steam-bar-img/steam-bar-img.component';
import { SteamBarContentComponent } from './steam-bar-content/steam-bar-content.component';
import { SteamBarHolderComponent } from "./steam-bar-holder/steam-bar-holder.component";

@Component({
  selector: 'app-steam-bar',
  imports: [SteamBarImgComponent, SteamBarImgComponent, SteamBarContentComponent, SteamBarHolderComponent],
  templateUrl: './steam-bar.component.html',
  styleUrl: './steam-bar.component.css'
})
export class SteamBarComponent {

}
