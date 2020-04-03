import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EqViewItemsBoxComponent } from './eq-view-items-box/eq-view-items-box.component';
import { ItemViewInfoComponent } from './item-view-info/item-view-info.component';

@NgModule({
  declarations: [
    AppComponent,
    EqViewItemsBoxComponent,
    ItemViewInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
