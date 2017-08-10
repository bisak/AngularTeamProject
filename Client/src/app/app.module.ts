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
import { PaginationComponent } from './sub-components/pagination/pagination.component';
import { SingleProductComponent } from './components/single-product/single-product.component';
import { StatsComponent } from './components/stats/stats.component';
import { DateAgoPipe } from './pipes/date-ago.pipe';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileService } from './services/profile.service';
import { ModalConfirmComponent } from './sub-components/modal-confirm/modal-confirm.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { DeletedProductsComponent } from './components/deleted-products/deleted-products.component';
import { BoughtProductsComponent } from './components/bought-products/bought-products.component';
import { AddAdminComponent } from './components/add-admin/add-admin.component';
import { AllAdminsComponent } from './components/all-admins/all-admins.component';
import { ListUserComponent } from './sub-components/list-user/list-user.component';
import { UsersService } from './services/users.service';
import { BanUserComponent } from './components/ban-user/ban-user.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AdminGuard } from './guards/admin.guard';
import { AuthGuard } from './guards/auth.guard';

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
    SearchComponent,
    PaginationComponent,
    SingleProductComponent,
    StatsComponent,
    DateAgoPipe,
    ProfileComponent,
    ModalConfirmComponent,
    EditProductComponent,
    DeletedProductsComponent,
    BoughtProductsComponent,
    AddAdminComponent,
    AllAdminsComponent,
    ListUserComponent,
    BanUserComponent,
    NotFoundComponent
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
    ProductsService,
    ProfileService,
    UsersService,
    AuthGuard,
    AdminGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
