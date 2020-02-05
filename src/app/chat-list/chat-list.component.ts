import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { ChatService } from './../services/chat.service';
import { UtilsService } from '../services/utils.service';
import { NotificationService } from '../services/notification.service';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss']
})
export class ChatListComponent implements OnInit {
  @ViewChild('scrollMe') scrollMe: ElementRef;
  @Input() selectedIndex: number;
  @Input() clock:string;
  @Input() userName:string;
  messages: Array<any> = [];
  constructor(private chatService: ChatService, private utils: UtilsService, private notification: NotificationService, private localStorage:LocalStorageService) {
  }
  
  ngOnInit() {
    this.userName = this.localStorage.readRecord('userName');
    this.chatService
      .getMessages()
      .subscribe((message: string) => {
        let _tempObj = JSON.parse(message);
        let temp = {
          user: _tempObj.user,
          text: _tempObj.message,
          time: new Date(),
        }
        this.messages.push(temp);
        this.scrollToBottom();
        (this.selectedIndex !== 0) ? this.notification.updateUnseen() : null;
      });
  }

  private scrollToBottom(): void {
    try {
      let tabHeight = 48;
      window.scrollTo(0,this.scrollMe.nativeElement.scrollHeight + tabHeight);
  } catch(err) { }
}
}
