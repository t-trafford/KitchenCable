import { Component, OnInit, Input } from "@angular/core";
import { UserService, AlertMessageService, RecipeService } from "../_services";
import { User } from "../_models";
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.component';

@Component({
  selector: "app-daily",
  templateUrl: "./daily.page.html",
  styleUrls: ["./daily.page.scss"]
})
export class DailyPage implements OnInit {
  user: User = <User>{};

  selectedDate;

   mealPlanner = {
      breackfast: [],
      lunch: [],
      dinner: []
    };

  constructor(
    private userService: UserService,
    private alertService: AlertMessageService,
    public modalController: ModalController
  ) {}

  setData(date){
    this.selectedDate = new Date(new Date(date).setHours(0,0,0,0)).toISOString();

      this.mealPlanner = this.user.mealPlanner[this.selectedDate] || {
        breackfast: [],
        lunch: [],
        dinner: []
      }
  }

  async presentModal(type) {
    const modal = await this.modalController.create({
      component: ModalPage,
      componentProps: { value: 123 }
    });

    await modal.present();

    const { data } = await modal.onDidDismiss();

    this.mealPlanner[type].push({
      id: data.result.id,
      title: data.result.title,
      image: data.result.image
    });
    this.save();

    return data;
  }

  onChangeDate(event){
    this.setData(event.detail.value);
  }


  ngOnInit() {
    this.fetch_user_details();
  }

  fetch_user_details() {
    this.userService.profile().subscribe(
      res => {
        if (res) {
          this.user = res;
          this.setData(this.selectedDate || new Date());
        }
      },
      err => {
        // TODO: Error code
      }
    );
  }

  save() {
    this.user.mealPlanner = this.user.mealPlanner || {};
    this.user.mealPlanner[this.selectedDate] = this.mealPlanner;

    this.userService
      .update(this.user._id || this.user["id"], this.user)
      .subscribe(usr => {
        this.alertService.presentToast("Profile saved Successfully!");
        this.fetch_user_details();
      });
  }
}
