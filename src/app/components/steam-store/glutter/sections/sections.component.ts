import { NgFor, NgForOf } from '@angular/common';
import { Component, Inject, Input } from '@angular/core';

@Component({
  selector: 'app-sections',
  imports: [NgFor,NgForOf],
  templateUrl: './sections.component.html',
  styleUrl: './sections.component.css'
})
export class SectionsComponent {
  @Input() title:string=""
  
  @Input() linkList: { title: string; url: string }[] = [];
  
}
