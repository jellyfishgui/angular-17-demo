import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DemoComponent } from './demo.component';
import { StandaloneExampleComponent } from '../standalone-example/standalone-example.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: DemoComponent
      },
      {
        path: 'standalone',
        component: StandaloneExampleComponent
      }
    ])
  ]
})
export class DemoModule { }
