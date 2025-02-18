import { Component } from '@angular/core';
import { StoreRecommendationsComponent } from "./store-recommendations/store-recommendations.component";

@Component({
  selector: 'app-steam-store',
  imports: [StoreRecommendationsComponent],
  templateUrl: './steam-store.component.html',
  styleUrl: './steam-store.component.css'
})
export class SteamStoreComponent {

}
