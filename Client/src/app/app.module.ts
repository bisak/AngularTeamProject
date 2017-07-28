import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ApiService } from './services/api.service';
import { AuthHelperService } from './services/auth-helper.service';
import { ToastService } from './services/toast.service';
import { AuthService } from './services/auth.service';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterializeModule
  ],
  providers: [
    ApiService,
    AuthHelperService,
    AuthService,
    ToastService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
