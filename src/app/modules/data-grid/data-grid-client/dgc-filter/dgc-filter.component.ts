import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataGridService, IDataFilter } from '../../data-grid.service';

@Component({
  selector: 'app-dgc-filter',
  templateUrl: './dgc-filter.component.html',
  styleUrls: ['./dgc-filter.component.scss']
})
export class DgcFilterComponent implements OnInit {

  inputFilter: IDataFilter = {searchString: ''};

  constructor(private _gridContext: DataGridService) { }

  ngOnInit(): void {
  }

  handleFilterSubmit() {
    this._gridContext.filter = this.inputFilter;
  }

}
