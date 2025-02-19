import { Component } from '@angular/core';
import { SearchBarComponent } from '../../../components/search-bar/search-bar.component';
import { SteamBarComponent } from '../../../components/steam-bar/steam-bar.component';
import { SteamStoreComponent } from "../../../components/steam-store/steam-store.component";

@Component({
  selector: 'app-home',
  imports: [SearchBarComponent, SteamBarComponent, SteamStoreComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
