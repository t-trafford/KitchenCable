import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../_services/recipe.service';
import { LoadingController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { LocalDataService } from '../_services';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.page.html',
  styleUrls: ['./overview.page.scss'],
})
export class OverviewPage implements OnInit {
  recipe_overview: any = {};
  params: any = {};
  constructor(private recipe: RecipeService, public loadingCtrl: LoadingController,
    private localDataService: LocalDataService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.params = this.localDataService.getAllParams(this.route.snapshot);
    if (this.params.id) {
      this.get_details();
    } else {
      window.history.back();
    }
  }

  get_details() {
    this.recipe.getRecipesOverview(this.params.id).subscribe(
      res => {
        this.recipe_overview = res;
      },
      err => {
        console.log(err);
      }
    );
  }
}