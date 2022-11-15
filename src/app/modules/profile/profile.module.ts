import { NgModule } from '@angular/core';
import { ProfileComponent } from './profile.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared.module';



@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([{ path: '', component: ProfileComponent }])
  ]
})
export class ProfileModule { }
