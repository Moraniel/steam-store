import { Component } from '@angular/core';
import { StoreRecommendationsComponent } from "./store-recommendations/store-recommendations.component";
import { GlutterComponent } from './glutter/glutter.component';
import { StoreOffersComponent } from "./store-offers/store-offers.component";

@Component({
  selector: 'app-steam-store',
  imports: [StoreRecommendationsComponent, 
    GlutterComponent, 
    StoreOffersComponent,
  ],
  templateUrl: './steam-store.component.html',
  styleUrl: './steam-store.component.css'
})
export class SteamStoreComponent {

}
