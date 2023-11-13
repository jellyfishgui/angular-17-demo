import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.scss'
})
export class DemoComponent {

  hasLoggedIn = false;

  username = 'Administrator';

  animal = 'DOG';

  studentsList = [
    {
      name: 'Alex',
      age: 16
    },
    {
      name: 'John',
      age: 18
    },
    {
      name: 'Annie',
      age: 22
    }
  ];
}
