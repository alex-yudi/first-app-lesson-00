import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-entry-data',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './entry-data.component.html',
  styleUrl: './entry-data.component.css'
})
export class EntryDataComponent {
  placeholder: string = "Digite seu nome";
  value1: string = "";
  value2: string = "";

  onChangeEvent(event: any) {
    console.log(event)
  }
}
