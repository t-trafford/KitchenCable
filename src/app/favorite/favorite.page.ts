import { Component, OnInit } from '@angular/core';
import { FavoriteService } from '../_services';
import { LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

import { LocalDataService, AlertMessageService } from '../_services';
import { Favorite} from '../_models';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.page.html',
  styleUrls: ['./favorite.page.scss'],
})
export class FavoritePage implements OnInit {
  recipes: any = [];
  favorite: Favorite = <Favorite>{};

  constructor(private favoriteService: FavoriteService, private alertService: AlertMessageService, private router: Router) { }

  ngOnInit() {
    this.get_favorite_recipes();
  }

  get_favorite_recipes() {
    this.favoriteService.details().subscribe(
      res => {
        this.recipes = res;
      },
      err => {
        console.log(err);
      }
    );
  }

  viewDeatils(recipe: any) {
    this.router.navigate(['/recipe', recipe.id]);
    console.log(recipe.id);
  }




  remove_favorite_recipes(id: string, recipe): void {
    this.favorite.recipe = id;
    this.alertService.presentToast('Recipe Removed From Favorite!');
    this.favoriteService.remove(this.favorite.recipe).subscribe(
      res => {
        console.log('Removed Successfully!!');
        this.get_favorite_recipes();
      },
      err => {
        console.log(err);
      }
    );
  }

  // addFavorite(id: string, recipe): void {
  //   recipe.isFavorite = true;
  //   this.favorite.recipe = id;
  //   this.alertService.presentToast('Recipe Added As Favorite!');
  //   this.favoriteService.post(this.favorite).subscribe(
  //     res => {
  //       console.log('Added Successfully!!');
  //     },
  //     err => {
  //       console.log(err);
  //     }
  //   );
  // }

}
