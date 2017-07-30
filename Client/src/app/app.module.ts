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
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ValidateService } from './services/validate.service';
import { StatsService } from './services/stats.service';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { ListProductComponent } from './sub-components/list-product/list-product.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ProductsService } from './services/products.service';
import { SearchComponent } from './sub-components/search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ListProductComponent,
    AllProductsComponent,
    AddProductComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterializeModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    ApiService,
    AuthHelperService,
    AuthService,
    ToastService,
    ValidateService,
    StatsService,
    ProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
