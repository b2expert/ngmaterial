import { NgModule } from '@angular/core';
import { SessionExpiredComponent } from './session-expired.component';
import { SharedModule } from 'src/app/shared.module';
import { RouterModule } from '@angular/router';
import { LoginPageComponent } from '../login-page/login-page.component';


@NgModule({
  declarations: [
    SessionExpiredComponent,
    LoginPageComponent
  ],
  
  imports: [
    SharedModule,
    RouterModule.forChild([{path: '', component: SessionExpiredComponent}])
  ]
})
export class SessionExpiredModule { }
