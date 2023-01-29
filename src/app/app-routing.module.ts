import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountDetailsComponent } from './Components/AccountDetails/AccountDetails.component';
import { AddChatRoomComponent } from './Components/AddChatRoom/AddChatRoom.component';
import { ChatBoxComponent } from './Components/ChatBox/ChatBox.component';
import { ErrorNotFoundComponent } from './Components/ErrorNotFound/ErrorNotFound.component';
import { SelectChatFirstComponent } from './Components/SelectChatFirst/SelectChatFirst.component';
import { SettingsMenuComponent } from './Components/SettingsMenu/SettingsMenu.component';
import { HomeComponent } from './Home/Home.component';
import { LoginComponent } from './Login/Login.component';
import { RegisterComponent } from './Register/Register.component';
import { AuthGuardService } from './Services/User/Auth/AuthGuard.service';

const routes: Routes = [
  { path : '' , component:HomeComponent,canActivate:[AuthGuardService] ,children:[
    { path : '' , component:SelectChatFirstComponent },
    { path : 'Chat' , component:ChatBoxComponent  },
    { path : 'Settings' , component: SettingsMenuComponent },
    { path : 'AccountDetails' , component: AccountDetailsComponent  },
    { path : 'AddChat' , component:AddChatRoomComponent }
    
  ]},

  { path : 'Login', component:LoginComponent },
  { path : 'Register' , component:RegisterComponent},
  { path: '**', component: ErrorNotFoundComponent },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
