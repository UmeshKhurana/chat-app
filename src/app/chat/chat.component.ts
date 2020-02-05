import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked, Input } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  @Input() selectedIndex: number;
  @Input() clock:string ;
  @Input() userName:string;
  constructor() {
  }

  ngOnInit() {
  }
  
}
