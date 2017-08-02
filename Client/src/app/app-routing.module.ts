import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { SingleProductComponent } from './components/single-product/single-product.component';
import { StatsComponent } from './components/stats/stats.component';
import { ProfileComponent } from './components/profile/profile.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { DeletedProductsComponent } from './components/deleted-products/deleted-products.component';
import { BoughtProductsComponent } from './components/bought-products/bought-products.component';
import { AddAdminComponent } from './components/add-admin/add-admin.component';
import { AllAdminsComponent } from './components/all-admins/all-admins.component';
import { BanUserComponent } from './components/ban-user/ban-user.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'products',
    children: [
      {
        path: 'all',
        component: AllProductsComponent
      },
      {
        path: 'deleted',
        component: DeletedProductsComponent
      },
      {
        path: 'add',
        component: AddProductComponent
      },
      {
        path: 'bought',
        component: BoughtProductsComponent
      },
      {
        path: ':id',
        component: SingleProductComponent
      },
      {
        path: ':id/edit',
        component: EditProductComponent
      }
    ]
  },
  {
    path: 'admins',
    children: [
      {
        path: 'add',
        component: AddAdminComponent
      },
      {
        path: 'all',
        component: AllAdminsComponent
      }
    ]
  },
  {
    path: 'users/ban',
    component: BanUserComponent
  },
  {
    path: 'statistics',
    component: StatsComponent
  },
  {
    path: 'profile/:username',
    component: ProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
