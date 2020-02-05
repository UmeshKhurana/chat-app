import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  unseenCount = 0;
  unSeenMsgChange: Subject<number> = new Subject<number>();
  constructor() { }
  
  //Update counter on Chat tab to shoe unseen messages 
   updateUnseen() {
        this.unseenCount++;
        this.unSeenMsgChange.next(this.unseenCount);
    }
}
