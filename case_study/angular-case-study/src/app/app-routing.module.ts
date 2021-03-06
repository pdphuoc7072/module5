import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'position',
    loadChildren: () => import('./position/position.module').then(module => module.PositionModule)
  },
  {
    path: 'education-degree',
    loadChildren: () => import('./education-degree/education-degree.module').then(module => module.EducationDegreeModule)
  },
  {
    path: 'division',
    loadChildren: () => import('./division/division.module').then(module => module.DivisionModule)
  },
  {
    path: 'employee',
    loadChildren: () => import('./employee/employee.module').then(module => module.EmployeeModule)
  },
  {
    path: 'customer-type',
    loadChildren: () => import('./customer-type/customer-type.module').then(module => module.CustomerTypeModule)
  },
  {
    path: 'customer',
    loadChildren: () => import('./customer/customer.module').then(module => module.CustomerModule)
  },
  {
    path: 'rent-type',
    loadChildren: () => import('./rent-type/rent-type.module').then(module => module.RentTypeModule)
  },
  {
    path: 'services',
    loadChildren: () => import('./services/services.module').then(module => module.ServicesModule)
  },
  {
    path: 'contract',
    loadChildren: () => import('./contract/contract.module').then(module => module.ContractModule)
  },
  {
    path: 'attach-service',
    loadChildren: () => import('./attach-service/attach-service.module').then(module => module.AttachServiceModule)
  },
  {
    path: 'contract-detail',
    loadChildren: () => import('./contract-detail/contract-detail.module').then(module => module.ContractDetailModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
