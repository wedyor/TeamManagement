import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashComponent } from './dash/dash.component';
import { NewReqComponent } from './new-req/new-req.component';
import { RequestsComponent } from './requests/requests.component';
const routes: Routes = [
  { path: 'dashboard', component: DashComponent },
  { path: 'requests', component: RequestsComponent },
  { path: 'newReq', component: NewReqComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
