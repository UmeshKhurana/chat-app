import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../services/notification.service';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  selectedIndex:number=0;
  clock:string='12';
  userName:string='';
  constructor(private notification: NotificationService, private localStorage:LocalStorageService){}

  private changeTab(event){
  this.selectedIndex = event.index;
  this.notification.unseenCount = (event.index ===0) ? 0 : this.notification.unseenCount
  this.clock = this.localStorage.readRecord('clock');
  this.userName = this.localStorage.readRecord('userName');
  }
  ngOnInit(){
    
  }
}
