import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient: HttpClient) { }

  private baseURL = 'http://localhost:8080/api/v1/employees';

  getAll(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(this.baseURL);
  }

  getById(id:number): Observable<Employee>{
    return this.httpClient.get<Employee>(this.baseURL + '/' + id);
  }

  create(employee:Employee): Observable<Object> {
    return this.httpClient.post<Employee>(this.baseURL, employee);
  }

  // update 
  update(id:number, employee:Employee): Observable<Object>{
    return this.httpClient.put<Employee>(this.baseURL + '/' + id, employee);
  }
  // delete
  delete(id:number): Observable<Object> {
    return this.httpClient.delete<Employee>(this.baseURL + '/' + id);
  }
}
