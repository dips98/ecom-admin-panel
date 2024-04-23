import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {path:'register', component:RegisterComponent},
    {path:'', component:LoginComponent},
    {path:'dashboard',
     component: DashboardComponent,
     children: [{path:'',component: HomeComponent}]

    }
];
