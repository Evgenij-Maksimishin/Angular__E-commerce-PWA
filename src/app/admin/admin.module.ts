import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './shared/admin-layout/admin-layout.component';
import { RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';



@NgModule({
  declarations: [
    AdminLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: AdminLayoutComponent, children: [
          { path: '', redirectTo: 'admin/login', pathMatch: 'full' },
          { path: 'login', component: LoginPageComponent }
        ]
      }
    ])
  ]
})
export class AdminModule { }
