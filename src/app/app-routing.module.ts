import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MovingBoxComponent } from './moving-box/moving-box.component';
import { HomePageComponent } from './home-page/home-page.component';
const routes: Routes = [{path:'header',component: HeaderComponent},
{path:"movebox",component:MovingBoxComponent},
{path:"home",component:HomePageComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
