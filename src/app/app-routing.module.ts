import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentsService } from './departments.service';
import { DepartmentDetilsComponent } from './department-detils/department-detils.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { DepartmentContactComponent } from './department-contact/department-contact.component';
import { EmployeeOverviewComponent } from './employee-overview/employee-overview.component';
import { EmployeeContactComponent } from './employee-contact/employee-contact.component';


const routes: Routes = [
  { path: '', component: DepartmentListComponent },
  { path: 'departments', component: DepartmentListComponent },
  { path: 'employees', component: EmployeeListComponent },
  {
    path: 'departments/:id',
    component: DepartmentDetilsComponent,
    children: [
      { path: 'overview', component: DepartmentOverviewComponent },
      { path: 'contact', component: DepartmentContactComponent }
    ]
  },
  {
    path: 'employees/:id',
    component: EmployeeDetailsComponent,
    children: [
      { path: 'overview', component: EmployeeOverviewComponent },
      { path: 'contact', component: EmployeeContactComponent }
    ]
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  DepartmentListComponent,
  EmployeeListComponent,
  PageNotFoundComponent,
  DepartmentDetilsComponent,
  EmployeeDetailsComponent,
  DepartmentOverviewComponent,
  DepartmentContactComponent,
  EmployeeOverviewComponent,
  EmployeeContactComponent]