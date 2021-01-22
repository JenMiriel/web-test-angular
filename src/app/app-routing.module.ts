import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {MakeReservationComponent} from './pages/make-reservation/make-reservation.component';
import {ViewMenuComponent} from './pages/view-menu/view-menu.component';
import {AboutUsComponent} from './pages/about-us/about-us.component';
import {LoginComponent} from './pages/login/login.component';
import {AdminComponent} from './pages/admin/admin.component';
import {ManageInventoryComponent} from './pages/manage-inventory/manage-inventory.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'make-reservation',
    component: MakeReservationComponent,
  },
  {
    path: 'menu',
    component: ViewMenuComponent,
  },
  {
    path: 'about',
    component: AboutUsComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
  },
  {
    path: 'manage-inventory',
    component: ManageInventoryComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
