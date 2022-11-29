import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
import { APP_CONSTS, ILogin } from 'src/app/models';
import { AuthService } from 'src/app/services';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  loginInput: ILogin;
  loginState: { progress: boolean, message?: string, id: number };

  constructor(
    private _authContext: AuthService,
    private _router: Router,
    private _dialogContext: MatDialogRef<LoginPageComponent>
  ) {
    this.loginInput = { userName: '', password: '' };
    this.loginState = { progress: false, message: '', id: 0 };
  }

  ngOnInit(): void {
  }

  login() {
    this.loginState = { ...this.loginState, progress: true };
    this._authContext.login(this.loginInput)
      .pipe(catchError(error => {
        this.loginState = { ...this.loginState, progress: false, message: error.message };
        throw new Error(error);
      }))
      .subscribe(response => {
        this.loginState = { ...this.loginState, progress: false, message: response.message, id: response.id };
        if (response.id > 0) {
          localStorage.setItem(APP_CONSTS.loginToken, response.data);
          this._dialogContext.close();
          this._router.navigate(['']);
        }
      })
  }
}
