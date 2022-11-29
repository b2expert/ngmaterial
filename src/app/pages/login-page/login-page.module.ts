import { NgModule } from '@angular/core';
import { LoginPageComponent } from './login-page.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared.module';

@NgModule({
  declarations: [
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([{path: '', component: LoginPageComponent}])
  ]
})
export class LoginModule { }
