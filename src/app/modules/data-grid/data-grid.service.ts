import { Injectable } from "@angular/core";
import { CustomerService } from "src/app/services/customer.service";

@Injectable()
export class DataGridService {

    constructor(public customer: CustomerService) {}

}