import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RegisterComponent } from './Register/Register.component';
import { LoginComponent } from './Login/Login.component';
import { HomeComponent } from './Home/Home.component';
import { NavbarComponent } from './Components/Navbar/Navbar.component';
import { SearchbarComponent } from './Components/Searchbar/Searchbar.component';
import { NewChatButtonComponent } from './Components/NewChatButton/NewChatButton.component';
import { ChatBoxComponent } from './Components/ChatBox/ChatBox.component';
import { ErrorNotFoundComponent } from './Components/ErrorNotFound/ErrorNotFound.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddChatRoomComponent } from './Components/AddChatRoom/AddChatRoom.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ChatRoomService } from './Services/ChatRoom/ChatRoom.service';
import { ChatComponent } from './Components/Chat/Chat.component';
import { TokenInterseptorService } from './Services/User/Auth/TokenInterseptor/TokenInterseptor.service';
import { DropdownMenuComponent } from './Components/DropdownMenu/DropdownMenu.component';


@NgModule({
  declarations: [			
    AppComponent,
      RegisterComponent,
      LoginComponent,
      HomeComponent,
      NavbarComponent,
      SearchbarComponent,
      ChatComponent,
      NewChatButtonComponent,
      AddChatRoomComponent,
      ChatBoxComponent,
      ErrorNotFoundComponent,
      DropdownMenuComponent
      
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule ,
    Ng2SearchPipeModule 
    
  
  ],
  providers: [ChatRoomService,{provide:HTTP_INTERCEPTORS,useClass:TokenInterseptorService,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
