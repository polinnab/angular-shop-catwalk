import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { AngularCountdownDateTimeModule } from 'angular-countdown-date-time';

import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import {MatFormFieldModule} from '@angular/material/form-field';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import {MatBadgeModule} from '@angular/material/badge';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDialogModule} from '@angular/material/dialog';
import {MatPaginatorModule} from '@angular/material/paginator';

import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { HeaderComponent } from './header-footer/header/header.component';
import { FooterComponent } from './header-footer/footer/footer.component';
import { LogoComponent } from './header-footer/header/logo/logo.component';
import { SearchComponent } from './header-footer/header/search/search.component';
import { BasketComponent } from './header-footer/header/basket/basket.component';
import { NavigationComponent } from './header-footer/header/navigation/navigation.component';
import { SubscribeComponent } from './header-footer/footer/subscribe/subscribe.component';
import { GoodComponent, GoodModalComponent } from './pages/good/good.component';
import { CardComponent } from './cards/card/card.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { MainComponent } from './pages/main/main.component';
import { BlogNewsComponent } from './pages/blog/blog-news/blog-news.component';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { FiltersComponent } from './pages/catalog/filters/filters.component';
import { BloqNewComponent } from './pages/blog/bloq-new/bloq-new.component';
import { InformationComponent } from './pages/information/information.component';
import { BasketPageComponent, BasketModalComponent } from './pages/basket-page/basket-page.component';
import { AppRoutingModule } from './app-routing.module';
import { DiscountItemsComponent } from './pages/discount-items/discount-items.component';
import { NewItemsComponent } from './pages/new-items/new-items.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AllItemsComponent } from './pages/all-items/all-items.component';
import { BadgecountDirective } from './badgecount.directive';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { PaymentComponent, PaymentModalComponent } from './pages/payment/payment.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    SearchComponent,
    BasketComponent,
    NavigationComponent,
    SubscribeComponent,
    GoodComponent,
    GoodModalComponent,
    CardComponent,
    AboutUsComponent,
    MainComponent,
    BlogNewsComponent,
    CatalogComponent,
    FiltersComponent,
    BloqNewComponent,
    InformationComponent,
    BasketPageComponent,
    BasketModalComponent,
    DiscountItemsComponent,
    NewItemsComponent,
    AllItemsComponent,
    BadgecountDirective,
    ContactsComponent,
    PaymentComponent,
    PaymentModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    MatInputModule,
    MatBadgeModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatSelectModule,
    IvyCarouselModule,
    AppRoutingModule, 
    NgxImageZoomModule, BrowserAnimationsModule,
    MatDialogModule,
    MatPaginatorModule,
    AngularCountdownDateTimeModule
  ],
  providers: [  ],
  bootstrap: [AppComponent],

  entryComponents: [
    GoodComponent, GoodModalComponent, BasketPageComponent, BasketModalComponent, PaymentComponent, PaymentModalComponent
  ]
})
export class AppModule { }
