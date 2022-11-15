import { Component, OnInit } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';
import { ActivatedRoute, Router } from '@angular/router';
import { DataGridService } from './data-grid.service';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.scss']
})
export class DataGridComponent implements OnInit {

  implType: string;
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _gridContext: DataGridService
  ) {
    this.implType = this._activatedRoute.snapshot.queryParams['option'] || 'client';

    _gridContext.filter$.subscribe(filter => {
      console.info(filter);
    });
  }

  ngOnInit(): void {
    this.onOptionChange();
  }

  onOptionChange(event?: MatRadioChange) {
    this._router.navigate([], {
      relativeTo: this._activatedRoute,
      queryParams: { option: event?.value ?? this.implType }
    });
  }

}
