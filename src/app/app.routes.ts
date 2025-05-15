import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import {RegisterComponent} from './pages/register/register.component';
import { RoomWatcherComponent } from './pages/roomWatcher/room.wacher.component';
import { RoomComponent } from './pages/room/room.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},   
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent}, 
    { path: 'hotel/luxury/rooms', component: RoomWatcherComponent },
    { path: 'room/:id', component: RoomComponent },
];
