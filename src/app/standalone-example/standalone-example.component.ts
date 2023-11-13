import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-standalone-example',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  template: `
    <h1>Hello, this is standalone component!</h1>
    <div class="container">Test styles in component decorator</div>
    <div class="btn-container">
      <button class="col" mat-raised-button color="primary">Primary Raised Button</button>
      <button class="col" mat-stroked-button color="primary">Primary Stroked Button</button>
      <button class="col" mat-flat-button color="accent">Primary Flat Button</button>
      <button class="col" mat-fab color="warn">Fab</button>
    </div>
  `,
  styles: `
    .container {
      width: 500px;
      height: 200px;
      background-color: red;
      align-items: center;
      border-radius: 32px;
      display: flex;
      place-content: center;
      color: #fff;
      font-size: 24px;
    }

    .btn-container {
      padding: 8px;
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    .col {
      margin-right: 1rem;
    }
    `,
})
export class StandaloneExampleComponent {
}
