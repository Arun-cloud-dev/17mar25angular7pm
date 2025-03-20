import { Component } from '@angular/core';

import { HeaderComponent } from './header.component';


@Component({
  selector: 'app-ar',
  standalone: true,
  imports: [HeaderComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})


  
export class AppComponent {}
