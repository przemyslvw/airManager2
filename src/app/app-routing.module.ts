import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'src/app/core/login/login.component';
import { DashboardComponent } from 'src/app/core/dashboard/dashboard.component';
import { FlightsComponent } from './flights/flights.component';

const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    {
        path: 'dashboard',
        component: DashboardComponent,
        children: [
            { path: '', redirectTo: 'flights', pathMatch: 'full' },
            { path: 'flights', component: FlightsComponent },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutnigModule { }