import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule , Injectable, Injector } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Pro } from '@ionic/pro';
import { HttpClientModule } from '@angular/common/http';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';
import { HttpModule } from '@angular/http';

//Services
import { SpotifyService } from './services/spotify.service';
import { MusicService } from './services/music.service';
import { TextService } from './services/text.service';
import { FirebaseService } from './services/firebase.service';

//Components
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { DetailComponent } from '../pages/details/details.component';
import { LandingpageComponent } from '../pages/landingpage/landingpage';
import { SettingsPage } from '../pages/settings/settings';
import { BluetoothPage } from '../pages/bluetooth/bluetooth';

//Pipes
import { NopicPipe } from './pipes/nopic.pipe';
import { SafedomPipe } from './pipes/safedom.pipe';

Pro.init('8f0b3c89', {
  appVersion: '0.0.1'
})

@Injectable()
export class MyErrorHandler implements ErrorHandler {
  ionicErrorHandler: IonicErrorHandler;

  constructor(injector: Injector) {
    try {
      this.ionicErrorHandler = injector.get(IonicErrorHandler);
    } catch(e) {
      // Unable to get the IonicErrorHandler provider, ensure
      // IonicErrorHandler has been added to the providers list below
    }
  }

  handleError(err: any): void {
    Pro.monitoring.handleNewError(err);
    // Remove this if you want to disable Ionic's auto exception handling
    // in development mode.
    this.ionicErrorHandler && this.ionicErrorHandler.handleError(err);
  }
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NopicPipe,
    SafedomPipe,
    SettingsPage,
    TabsPage,
    DetailComponent,
    LandingpageComponent,
    BluetoothPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    SettingsPage,
    DetailComponent,
    LandingpageComponent,
    BluetoothPage
  ],
  providers: [
    SpotifyService,
    MusicService,
    StatusBar,
    SplashScreen,
    IonicErrorHandler,
    BluetoothSerial,
    TextService,
    FirebaseService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
