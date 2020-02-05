import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatService } from './services/chat.service';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ChatComponent } from './chat/chat.component';
import { SettingsComponent } from './settings/settings.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { MessageComponent } from './message/message.component';
import { ChatListComponent } from './chat-list/chat-list.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [];

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    SettingsComponent,
    MessageComponent,
    ChatListComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes, {
      useHash: true
    }),
    BrowserAnimationsModule
  ],
  providers: [ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
