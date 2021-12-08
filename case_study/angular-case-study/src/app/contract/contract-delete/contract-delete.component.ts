import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Employee} from '../../model/employee';
import {Customer} from '../../model/customer';
import {Services} from '../../model/services';
import {ContractService} from '../../service/contract.service';
import {EmployeeService} from '../../service/employee.service';
import {CustomerService} from '../../service/customer.service';
import {ServicesService} from '../../service/services.service';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Router} from '@angular/router';

@Component({
  selector: 'app-contract-delete',
  templateUrl: './contract-delete.component.html',
  styleUrls: ['./contract-delete.component.css']
})
export class ContractDeleteComponent implements OnInit {

  contractForm = new FormGroup({
    id: new FormControl(),
    startDate: new FormControl(),
    endDate: new FormControl(),
    deposit: new FormControl(),
    total: new FormControl(),
    employee: new FormControl(),
    customer: new FormControl(),
    services: new FormControl()
  });
  id: number;
  employeeList: Employee[] = [];
  customerList: Customer[] = [];
  servicesList: Services[] = [];

  constructor(private contractService: ContractService,
              private employeeService: EmployeeService,
              private customerService: CustomerService,
              private servicesService: ServicesService,
              @Inject(MAT_DIALOG_DATA) id: number,
              private router: Router) {
    this.id = id;
    this.getContract(id);
  }

  ngOnInit(): void {
    this.getAllEmployee();
    this.getAllCustomer();
    this.getAllServices();
  }

  getContract(id: number) {
    return this.contractService.findById(id).subscribe(contract => {
      this.contractForm.setValue(contract);
    });
  }

  compareEmployee(c1: Employee, c2: Employee): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }

  compareCustomer(c1: Customer, c2: Customer): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }

  compareServices(c1: Services, c2: Services): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }

  deleteContract(id: number) {
    this.contractService.delete(id).subscribe(() => {
      this.router.navigate(['contract']);
    }, error => {
      console.log(error);
    });
  }

  getAllEmployee() {
    this.employeeService.getAll().subscribe(employeeList => {
      this.employeeList = employeeList;
    });
  }

  getAllCustomer() {
    this.customerService.getAll().subscribe(customerList => {
      this.customerList = customerList;
    });
  }

  getAllServices() {
    this.servicesService.getAll().subscribe(servicesList => {
      this.servicesList = servicesList;
    });
  }

}