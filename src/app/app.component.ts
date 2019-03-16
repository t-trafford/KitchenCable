import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Manage Ingredients',
      url: '/list',
      icon: 'cart'
    },{
      title: 'Recipes',
      url: '/recipe',
      icon: 'pizza'
    },{
      title: 'Meal Planner',
      url: '/mealplanner',
      icon: 'alarm'
    },{
      title: 'Profile',
      url: '/profile',
      icon: 'person'
    },
    {
      title: 'My Recipes',
      url: '/myrecipe',
      icon: 'pizza'
    },{
      title: 'Logout',
      url: '/login',
      icon: 'key'
    },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
