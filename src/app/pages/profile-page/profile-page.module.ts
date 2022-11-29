import { NgModule } from '@angular/core';
import { ProfilePageComponent } from './profile-page.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared.module';

@NgModule({
  declarations: [
    ProfilePageComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([{ path: '', component: ProfilePageComponent }])
  ]
})
export class ProfilePageModule { }
