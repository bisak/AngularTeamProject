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
import { NotFoundComponent } from './components/not-found/not-found.component';

import { AdminGuard } from './guards/admin.guard';
import { AuthGuard } from './guards/auth.guard';

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
        component: DeletedProductsComponent,
        canActivate: [ AdminGuard ]
      },
      {
        path: 'add',
        component: AddProductComponent,
        canActivate: [ AdminGuard ]
      },
      {
        path: 'bought',
        component: BoughtProductsComponent,
        canActivate: [ AuthGuard ]
      },
      {
        path: ':id',
        component: SingleProductComponent,
        canActivate: [ AuthGuard ]
      },
      {
        path: ':id/edit',
        component: EditProductComponent,
        canActivate: [ AdminGuard ]
      }
    ]
  },
  {
    path: 'admins',
    children: [
      {
        path: 'add',
        component: AddAdminComponent,
        canActivate: [ AuthGuard ]
      },
      {
        path: 'all',
        component: AllAdminsComponent,
        canActivate: [ AuthGuard ]
      }
    ]
  },
  {
    path: 'users/ban',
    component: BanUserComponent,
    canActivate: [ AuthGuard ]
  },
  {
    path: 'statistics',
    component: StatsComponent,
    canActivate: [ AuthGuard ]
  },
  {
    path: 'profile/:username',
    component: ProfileComponent,
    canActivate: [ AuthGuard ]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
