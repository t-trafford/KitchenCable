import { Component, OnInit } from '@angular/core';
import { RecipeService, LocalDataService } from '../_services';
import { LoadingController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.page.html',
  styleUrls: ['./steps.page.scss'],
})
export class StepsPage implements OnInit {
  recipe_steps: any = [];
  params: any = {};
  constructor(private recipe: RecipeService, public loadingCtrl: LoadingController,
    private route: ActivatedRoute, private localDataService: LocalDataService) {}

  ngOnInit(): void {
    this.params = this.localDataService.getAllParams(this.route.snapshot);
    if (this.params.id) {
      this.get_details();
    } else {
      window.history.back();
    }
  }

  get_details() {
    this.recipe.getRecipesSteps(this.params.id).subscribe(
      res => {
        this.recipe_steps = res;
      },
      err => {
        console.log(err);
      }
    );
  }
}
