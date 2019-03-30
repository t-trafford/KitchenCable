import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

import { UserService, LocalDataService, AlertMessageService } from '../_services';
import { User, TitleModel } from '../_models';
import { CompleteTestService } from '../_services/autocomplete.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  diets: TitleModel[];
  intolerances: TitleModel[];
  user: User = <User>{};

  constructor(private userService: UserService,
    private alertService: AlertMessageService,
    private localDataService: LocalDataService,
    public completeTestService: CompleteTestService) { }

  ngOnInit() {
    this.get_models();
    this.fetch_user_details();
  }

  fetch_user_details() {
    this.userService.profile().subscribe(res => {
      if (res) {
        this.user = res;
        this.map_models();
      }
    }, err => {
      // TODO: Error code
    });
  }

  get_models() {
    this.diets = this.localDataService.getAllDiets();
    this.intolerances = this.localDataService.getAllIntolerances();
  }

  map_models() {
    this.diets.forEach(diet => {
      diet.isChecked = this.user.diets.some(a => a === diet.title);
    });
    this.intolerances.forEach(intolerance => {
      intolerance.isChecked = this.user.intolerances.some(a => a === intolerance.title);
    });
  }

  save() {
    this.user.diets = this.diets.filter(a => a.isChecked).map(a => a.title);
    this.user.intolerances = this.intolerances.filter(a => a.isChecked).map(a => a.title);
    this.userService.update((this.user._id || this.user['id']), this.user)
    .subscribe(usr => {
      this.alertService.presentToast('Profile saved Successfully!');
      this.fetch_user_details();
    });
  }
}
