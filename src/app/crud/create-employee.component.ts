import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Employee } from '../employee';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-create-employee',
  standalone: false,
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.css',
})
export class CreateEmployeeComponent implements OnInit {
  form!: FormGroup;
  employee!: Employee;

  constructor(private employeeSvc: EmployeeService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      emailId: new FormControl(''),
    });
  }

  postEmployee() {
    this.employee = this.form.value;
    console.log('Posted: ', this.employee);
    this.saveEmployee();
  }

  saveEmployee() {
    this.employeeSvc.create(this.employee).subscribe((data) => {
      console.log('Data saved');
    });
  }
}
