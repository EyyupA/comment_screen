import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScreenComponent } from './screen/screen.component';
import { MobileComponent } from './mobile/mobile.component';

const routes: Routes = [
  {path: "dashboard", component: ScreenComponent},
  {path: "**", component: MobileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
