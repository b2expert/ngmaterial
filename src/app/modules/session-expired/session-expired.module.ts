import { NgModule } from '@angular/core';
import { SessionExpiredComponent } from './session-expired.component';
import { SharedModule } from 'src/app/shared.module';
import { RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login.component';


@NgModule({
  declarations: [
    SessionExpiredComponent,
    LoginComponent
  ],
  
  imports: [
    SharedModule,
    RouterModule.forChild([{path: '', component: SessionExpiredComponent}])
  ]
})
export class SessionExpiredModule { }
