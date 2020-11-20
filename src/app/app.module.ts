import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { CalendarComponent } from './calendar/calendar.component';
import { PagenofoundComponent } from './pagenofound/pagenofound.component'; 
import { from } from 'rxjs';
import { FirebaseService } from './services/firebase.service';

const appRoutes: Routes = [
  { path: 'users', component: UserComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'home', component: HomeComponent },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: PagenofoundComponent }
];
 
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    CalendarComponent,
    PagenofoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only set true
    ),
    AngularFireModule.initializeApp({
    authDomain: "test-au-aaa0a.firebaseapp.com",
    databaseURL: "https://test-au-aaa0a.firebaseio.com",
    projectId: "test-au-aaa0a",
    storageBucket: "test-au-aaa0a.appspot.com",
    messagingSenderId: "522581604876",
    appId: "1:522581604876:web:a40175a833f2091e6c0c29",
    measurementId: "G-G8M6XSJ1KF"
    }),
    AngularFireAuthModule,
    AngularFirestoreModule,
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
