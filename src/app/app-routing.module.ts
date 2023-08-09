import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderFooterComponent } from './header-footer/header-footer.component';
const routes: Routes = [{path:'header&footer',component:HeaderFooterComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
