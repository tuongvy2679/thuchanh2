import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './baimau/menu/menu.component';
import { ManufacturerComponent } from './baimau/manufacturer/manufacturer.component';
import { ProductComponent } from './baimau/product/product.component';
import { Bai1Component } from './bai1/bai1.component';
import { HeaderComponent } from './bai1/header/header.component';
import { FooterComponent } from './bai1/footer/footer.component';
import { MainComponent } from './bai1/main/main.component';
import { Bai2Component } from './bai2/bai2.component';
import { SliderComponent } from './slider/slider.component';
import { CategoryComponent } from './category/category.component';
import { Footer2Component } from './footer2/footer2.component';
import { Header2Component } from './header2/header2.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ManufacturerComponent,
    ProductComponent,
    Bai1Component,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    Bai2Component,
    SliderComponent,
    CategoryComponent,
    Footer2Component,
    Header2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
