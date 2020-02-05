import { Component, OnInit } from '@angular/core';
import { ChatService } from '../services/chat.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LocalStorageService } from '../services/local-storage.service';
const KEY_CODES = {
  ENTER: 'Enter',
  CTRL: 'Control'
};
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  messageFormGroup: FormGroup;
  private pressedKeysMap: {} = {};
  userName: string = '';
  constructor(private fb: FormBuilder, private chatService: ChatService, private localStorage: LocalStorageService) { }

  ngOnInit() {
    this.messageFormGroup = this.fb.group({
      message: ['', Validators.required]
    });
  }
  private sendMessage() {
    this.userName = this.localStorage.readRecord('userName');
    let messageControl = this.messageFormGroup.controls.message;
    let _tempObj = {
      user: this.userName,
      message: messageControl.value,
    };
    this.chatService.sendMessage(JSON.stringify(_tempObj));
    this.clearMessage();
  }

  private isFormInvalid() {
    return this.messageFormGroup.invalid;
  }
  private clearMessage() {
    this.messageFormGroup.controls.message.reset();
  }
  private keyUpEvent() {
    this.pressedKeysMap = {};
  };

  private keyPressEvent(e: KeyboardEvent) {
    this.pressedKeysMap[e.key] = e.type === 'keydown';
    if (this.localStorage.readRecord('messageBehaviour') !== 'on') {
      this.handleOnPressEnter();
    } else {
      this.handleOnPressCtrlEnter();
    }
  }

  private handleOnPressEnter() {
    if (KEY_CODES.ENTER in this.pressedKeysMap && !(KEY_CODES.CTRL in this.pressedKeysMap)) {
      this.sendMessage();
      this.clearMessage();
    } else {
      return;
    }
  }

  private handleOnPressCtrlEnter() {
    if (KEY_CODES.CTRL in this.pressedKeysMap && KEY_CODES.ENTER in this.pressedKeysMap) {
      this.sendMessage();
      this.clearMessage();
    } else {
      return;
    }
  }
}
