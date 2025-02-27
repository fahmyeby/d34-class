import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-example',
  standalone: false,
  templateUrl: './example.component.html',
  styleUrl: './example.component.css',
})
export class ExampleComponent implements OnInit {
  numbersArray = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  foodArray = from(["Pizza", "Burger", "Sandwich", "Pasta"]);

  nameArray = from([
    {fname: "John", lname: "Doe"},
    {fname: "Jane", lname: "Doe"}
  ])

  concatToFullName() {
    this.nameArray.pipe(map(data => '${data.fname} ${data.lname'))
    .subscribe(data => console.log(data));
  }

  toUpperCase() {
    this.foodArray
    .pipe(map(data => {return data.toUpperCase() }))
    .subscribe(data => {console.log(data);});
  }

  multiplyBy3() {
    this.numbersArray
      .pipe(map((data) => {return data * 3; }))
      .subscribe((data) => {console.log(data);});
  }

  constructor() {}

  ngOnInit(): void {}
}
