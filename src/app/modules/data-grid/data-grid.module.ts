import { NgModule } from '@angular/core';
import { DataGridComponent } from './data-grid.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared.module';
import { DataGridService } from './data-grid.service';
import { DataGridClientComponent } from './data-grid-client/data-grid-client.component';
import { DataGridServerComponent } from './data-grid-server/data-grid-server.component';
import { DataGridDynamicComponent } from './data-grid-dynamic/data-grid-dynamic.component';
import { CustFormComponent } from './data-grid-client/cust-form/cust-form.component';

@NgModule({
  declarations: [
    DataGridComponent,
    DataGridClientComponent,
    DataGridServerComponent,
    DataGridDynamicComponent,
    CustFormComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([{path: '', component: DataGridComponent}])
  ],
  providers: [DataGridService]
})
export class DataGridModule { }
