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
      title: 'My Ingredients',
      url: '/list',
      icon: 'list'
    },{
      title: 'Recipes',
      url: '/recipe',
      icon: 'list'
    },{
      title: 'Meal Planner',
      url: '/mealplanner',
      icon: 'list'
    },{
      title: 'Profile',
      url: '/profile',
      icon: 'list'
    },{
      title: 'Logout',
      url: '/login',
      icon: 'list'
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
