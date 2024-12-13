import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BookServiceComponent } from './book-service/book-service.component';
import { ChainServiceComponent } from './chain-service/chain-service.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { OilChangeComponent } from './oil-change/oil-change.component';
import { TireCheckComponent } from './tire-check/tire-check.component';


export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'book-service', component: BookServiceComponent},
    { path: 'chain-service', component: ChainServiceComponent},
    { path: 'maintenance', component: MaintenanceComponent},
    { path: 'oil-change', component: OilChangeComponent},
    { path: 'tire-check', component: TireCheckComponent}
  ];
  
