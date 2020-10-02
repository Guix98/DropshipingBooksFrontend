import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { LoginComponent } from './components/login/login.component';
import { ProductComponent } from './components/product/product.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { RegistryComponent } from './components/registry/registry.component';
import { InitformComponent } from './components/initform/initform.component';



export const ROUTES: Routes = [
    { path: 'home', component: HomepageComponent },
    { path: 'product/:id', component: ProductComponent },
    { path: 'registry', component: InitformComponent },
    { path: 'registry/:username', component: RegistryComponent },
    { path: 'login', component: LoginComponent },
    { path: '', component: HomepageComponent },
    { path: '**', component: LoginComponent },

    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];
