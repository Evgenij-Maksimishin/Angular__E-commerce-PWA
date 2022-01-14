import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './shared/admin-layout/admin-layout.component';
import { RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { AddPageComponent } from './add-page/add-page.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { EditPageComponent } from './edit-page/edit-page.component';



@NgModule({
  declarations: [
    AdminLayoutComponent,
    AddPageComponent,
    DashboardPageComponent,
    EditPageComponent
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
