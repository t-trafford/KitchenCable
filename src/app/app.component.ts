import { Component, AfterViewInit, OnInit, ChangeDetectorRef } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthenticationService } from './_services';
import { User } from './_models';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements AfterViewInit, OnInit {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Ingredients',
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
      icon: 'key',
      click: () => {
        this.authenticationService.logout();
        location.reload();
      }
    },
  ];
  user: User;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public authenticationService: AuthenticationService,
    private cd: ChangeDetectorRef
  ) {
    this.initializeApp();
  }
  ngOnInit() {
    this.user = this.authenticationService.currentUserValue;
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  ngAfterViewInit() {
    this.cd.detectChanges();
  }
}
