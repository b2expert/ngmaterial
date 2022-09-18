import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.scss']
})
export class DataGridComponent implements OnInit {

  implType: string;
  constructor() { 
    this.implType = '';
  }

  ngOnInit(): void {
  }

}
