import { Component, OnInit } from '@angular/core';
import { AuthService, UtilityService } from 'src/app/services';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(public authContext: AuthService, private _utilityContext: UtilityService) { }

  ngOnInit(): void {
  }

  async onFileChange(e: any) {
    const file = e.target.files[0];
    try {
      const _64String: any = await this._utilityContext.toBase64(file);
      console.info(_64String);
      this.authContext.user = { ...this.authContext.user, profilePic: _64String };
    } catch (error) {
      console.info(error);
    }
  }

}
