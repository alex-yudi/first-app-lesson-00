import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { Button } from './components/button.component';
import { EntryDataComponent } from './components/entry-data/entry-data.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, Button, EntryDataComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'homes';
  buttonLabel: string = "Texto do Pai";
  buttonSecond: string = "Outro texto do Pai"
}
