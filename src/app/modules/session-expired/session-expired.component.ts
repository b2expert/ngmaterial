import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-session-expired',
  templateUrl: './session-expired.component.html',
  styleUrls: ['./session-expired.component.scss']
})
export class SessionExpiredComponent implements OnInit {

  constructor(private _dialogContext: MatDialog) { }

  ngOnInit(): void {
    this._dialogContext.open(LoginComponent, {
      autoFocus: false,
      disableClose: true
    });
  }

}
