import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsItemComponent } from './components/products-item/products-item.component';
import { ProductsListComponent } from './components/products-list/products-list.component';

const routes: Routes = [
  {path:"" , redirectTo:'products' ,pathMatch:'full'},
  {path:"products" , component:ProductsListComponent,pathMatch:'full'},
  {path:"product-details/:id" , component:ProductsItemComponent,pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
