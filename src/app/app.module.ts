import { ChoosePageModule } from './../pages/choose/choose.module';
import { SpeakersPageModule } from './../pages/speakers/speakers.module';

import { ErrorHandler, NgModule, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Camera } from '@ionic-native/camera';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { DataProvider } from '../providers/data/data';
// Import the AF2 Module
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { TabsPage } from '../pages/tabs/tabs';
import { TabsPageModule } from '../pages/tabs/tabs.module';
import { AuthProvider } from '../providers/auth/auth';
import firebase from 'firebase';
import { LoginPage } from '../pages/login/login';
import { LoginPageModule } from '../pages/login/login.module';
// import { AngularFireModule } from '@angular/fire';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';
import { SignupPage } from '../pages/signup/signup';
import { NgxErrorsModule } from '@ultimate/ngxerrors';
import { ImagePicker } from '@ionic-native/image-picker';
import { HttpClientModule } from '@angular/common/http';


import { FcmProvider } from '../providers/fcm/fcm';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { Firebase } from '@ionic-native/firebase';
import { Crop } from '@ionic-native/crop';
import { SpeakersPage } from '../pages/speakers/speakers';
import { IntroPage } from '../pages/intro/intro';
import { IntroPageModule } from '../pages/intro/intro.module';
import { Signup2Page } from '../pages/signup2/signup2';
import { Signup2PageModule } from '../pages/signup2/signup2.module';
import { DatePicker } from '@ionic-native/date-picker/ngx';

// import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';



export const firebaseConfig = {
  apiKey: "AIzaSyCgG3bsOrdH5yjMr0GW6O0wGNn461bYsqY",
    authDomain: "keti-1d31b.firebaseapp.com",
    databaseURL: "https://keti-1d31b.firebaseio.com",
    projectId: "keti-1d31b",
    storageBucket: "keti-1d31b.appspot.com",
    messagingSenderId: "212359239652"
  };

firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    MyApp,
    SignupPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      platforms:{
        ios: {
          backButtonText:''
        }
      }
    }),
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    TabsPageModule,
    LoginPageModule,
    SpeakersPageModule,
    Signup2PageModule,
    ChoosePageModule,
    IntroPageModule,
    NgxErrorsModule ,
    HttpClientModule,
    AngularFirestoreModule,


    // SearchPipe.forRoot()
  ],
  // exports: [ IonTextAvatar ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    LoginPage,
    SpeakersPage,
    SignupPage,
    IntroPage,
    Signup2Page

  ],
  providers: [
    Camera,
    SplashScreen,
    StatusBar,
    // Keep this to enable Ionic's runtime error handling during development
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    DataProvider,
    AuthProvider,
    AngularFireAuth,
    ImagePicker,
    FcmProvider,
    Firebase,
    Crop,

    // FCM

  ]
})
export class AppModule { }

enableProdMode();

