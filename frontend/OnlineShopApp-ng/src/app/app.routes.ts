import { Routes } from '@angular/router';
import { App } from './app';
import { LoginPage } from './components/login-page/login-page';
import { Home } from './components/home/home';

export const routes: Routes = [
    {
        path:'',
        component:Home,
},
{
    path:'login',
    component:LoginPage
}
];
