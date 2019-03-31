import { Component, OnInit } from "@angular/core";
import { UserService, AlertMessageService } from "../_services";
import { User } from "../_models";

@Component({
  selector: "app-daily",
  templateUrl: "./daily.page.html",
  styleUrls: ["./daily.page.scss"]
})
export class DailyPage implements OnInit {
  user: User = <User>{};

  selectedDate = new Date();

  constructor(
    private userService: UserService,
    private alertService: AlertMessageService
  ) {}

  ngOnInit() {
    this.fetch_user_details();
  }

  initMealPlanner() {
    this.user.mealPlanner = this.user.mealPlanner || {
      breackfast: {},
      lunch: {},
      dinner: {}
    };
  }

  fetch_user_details() {
    this.userService.profile().subscribe(
      res => {
        if (res) {
          this.user = res;
        }
      },
      err => {
        // TODO: Error code
      }
    );
  }

  save() {
    this.userService
      .update(this.user._id || this.user["id"], this.user)
      .subscribe(usr => {
        this.alertService.presentToast("Profile saved Successfully!");
        this.fetch_user_details();
      });
  }
}
