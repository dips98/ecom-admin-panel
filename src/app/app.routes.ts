import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { OrdersComponent } from './components/orders/orders.component';
import { CustomersComponent } from './components/customers/customers.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { SalesComponent } from './components/sales/sales.component';

export const routes: Routes = [
    { path: 'register', component: RegisterComponent },
    { path: '', component: LoginComponent },
    {
        path: 'dashboard',
        component: DashboardComponent,
        children: [
            { path: '', component: HomeComponent },
            { path: 'products', component: ProductsComponent },
            { path: 'orders', component: OrdersComponent },
            { path: 'customers', component: CustomersComponent },
            { path: 'inventory', component: InventoryComponent },
            { path: 'sales', component: SalesComponent }
        ]

    }
];
