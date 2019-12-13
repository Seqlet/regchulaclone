import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { filter, map } from 'rxjs/operators';
import { ActiveTab } from './core/interfaces/enum';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  hasTab = false;
  activeTab: ActiveTab;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.initializeApp();
    this.router
    .events.pipe(
    filter(event => event instanceof NavigationEnd),
    map(() => {
      let child = this.activatedRoute.firstChild;
      while (child) {
        if (child.firstChild) {
          child = child.firstChild;
        } else if (child.snapshot.data && child.snapshot.data) {
          return child.snapshot.data;
        } else {
          return null;
        }
      }
      return null;
    })).subscribe( (data: {hasTab: boolean, activeTab: ActiveTab}) => {
      console.log(data);
      this.hasTab = data.hasTab;
      this.activeTab = data.activeTab;
   });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
