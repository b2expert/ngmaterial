import { Component } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';
import { APP_CONSTS } from './models';
import { AuthService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  activeNav: string = '';
  constructor(
    private _router: Router,
    public authContext: AuthService
  ) {
    this._router.events
      .subscribe(e => {
        if (e instanceof RoutesRecognized) {
          this.activeNav = e.state.root.firstChild?.data['activeNav'];
          this.authContext.loadAuthDetails().subscribe();
        }
      });
  }

  logout() {
    this.authContext.logout().subscribe(response => {
      if (response.id > 0) {
        localStorage.removeItem(APP_CONSTS.loginToken);
        this._router.navigate(['session/expired']);
      }
    })
  }

}
