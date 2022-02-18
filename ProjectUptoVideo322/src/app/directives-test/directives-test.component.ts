import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-test',
  templateUrl: './directives-test.component.html',
  styleUrls: ['./directives-test.component.css']
})
export class DirectivesTestComponent implements OnInit {
  ngOnInit() {
  }
  onlyOdd: boolean = false;
  oddNumbers: number[] = [1, 3, 5];
  evenNumbers: number[] = [2, 4, 6];
  value: number = 2;
}
