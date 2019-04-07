import { Component, OnInit } from "@angular/core";
import { UserService } from "../_services";
import { User } from '../_models';

@Component({
  selector: "app-weekly",
  templateUrl: "./weekly.page.html",
  styleUrls: ["./weekly.page.scss"]
})
export class WeeklyPage implements OnInit {
  user: User = <User>{};

  selectedDate;
  weekDays = [];

  constructor(private userService: UserService) {}

  setData(date) {
    let d = this.getMonday(date);
    d = new Date(d.setHours(0,0,0,0));
    this.selectedDate = d;

    this.weekDays.push(d.toISOString());
    this.user.mealPlanner = this.user.mealPlanner || {};
    this.user.mealPlanner[d.toISOString()] = this.user.mealPlanner[d.toISOString()] || {};

    for (let index = 0; index < 6; index++) {
      const t = new Date(d.setDate(d.getDate()+ 1));
      this.weekDays.push(t.toISOString());
      this.user.mealPlanner[t.toISOString()] = this.user.mealPlanner[t.toISOString()] || {};
    }
  }

  onChangeWeek(days){
    const date = this.selectedDate.setDate(this.selectedDate.getDate() + days);
    this.weekDays = [];
    this.fetch_user_details(date);
  }

  getMonday(d) {
    d = new Date(d);
    var day = d.getDay(),
        diff = d.getDate() - day + (day == 0 ? -6:1); // adjust when day is sunday
    return new Date(d.setDate(diff));
  }

  ngOnInit() {
    this.fetch_user_details(new Date());
  }

  fetch_user_details(date) {
    this.userService.profile().subscribe(
      res => {
        if (res) {
          this.user = res;
          this.setData(date);
        }
      },
      err => {
        // TODO: Error code
      }
    );
  }
}
