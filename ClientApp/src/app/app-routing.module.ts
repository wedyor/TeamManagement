import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { DashComponent } from './dash/dash.component';
import { NewReqComponent } from './new-req/new-req.component';
import { ProfileComponent } from './profile/profile.component';
import { RequestsComponent } from './requests/requests.component';

const routes: Routes = [
  { path: '' , component: LoginComponent},
  { path: 'profile', component: ProfileComponent, canActivate : [AuthGuard]  },
  // { path: 'dashboard', component: DashComponent, canActivate : [AuthGuard] },
  { path: 'admin', component: AdminComponent , canActivate : [AuthGuard] },
  { path: 'requests', component: RequestsComponent, canActivate : [AuthGuard]  },
  { path: 'newReq', component: NewReqComponent, canActivate : [AuthGuard]  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
