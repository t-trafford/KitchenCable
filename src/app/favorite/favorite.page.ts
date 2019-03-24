import { Component, OnInit } from '@angular/core';
import { FavoriteService } from '../_services';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.page.html',
  styleUrls: ['./favorite.page.scss'],
})
export class FavoritePage implements OnInit {
  recipes: any = [];

  constructor(private favoriteService: FavoriteService) { }

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

}
