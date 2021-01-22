import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MakeReservationComponent } from './pages/make-reservation/make-reservation.component';
import { ReservationFormComponent } from './component/reservation-form/reservation-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ManageInventoryComponent } from './pages/manage-inventory/manage-inventory.component';
import { EditInventoryComponent } from './components/edit-inventory/edit-inventory.component';
import { ViewInventoryComponent } from './components/view-inventory/view-inventory.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ViewMenuComponent } from './pages/view-menu/view-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    MakeReservationComponent,
    ReservationFormComponent,
    ManageInventoryComponent,
    EditInventoryComponent,
    ViewInventoryComponent,
    HeaderComponent,
    FooterComponent,
    AboutUsComponent,
    ViewMenuComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
