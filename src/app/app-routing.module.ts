import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { AboutUsComponent } from "./pages/about-us/about-us.component";
import { MainComponent } from "./pages/main/main.component";
import { AllItemsComponent } from "./pages/all-items/all-items.component";
import { DiscountItemsComponent } from "./pages/discount-items/discount-items.component";
import { NewItemsComponent } from "./pages/new-items/new-items.component";
import { BlogNewsComponent } from "./pages/blog/blog-news/blog-news.component";
import { InformationComponent } from "./pages/information/information.component";
import { BloqNewComponent } from "./pages/blog/bloq-new/bloq-new.component";
import { GoodComponent } from "./pages/good/good.component";
import { BasketPageComponent } from "./pages/basket-page/basket-page.component";
import { ContactsComponent } from "./pages/contacts/contacts.component";
import { PaymentComponent } from "./pages/payment/payment.component";


const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'main', component: MainComponent },
  { path: 'catalog/all', component: AllItemsComponent },
  { path: 'catalog/discount', component: DiscountItemsComponent },
  { path: 'catalog/new', component: NewItemsComponent },
  { path: 'blog', component: BlogNewsComponent },
  { path: 'information', component: InformationComponent },
  { path: 'blog/:id', component: BloqNewComponent },
  { path: 'catalog/good/:id', component: GoodComponent },
  { path: 'basket', component: BasketPageComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'basket/payment', component: PaymentComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled',
    onSameUrlNavigation: 'reload'
  }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
