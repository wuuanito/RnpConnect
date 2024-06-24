import { Routes } from '@angular/router';
import path from 'node:path';
import { LoginComponent } from './paginas/login/login.component';

export const routes: Routes = [

    //Ruta por defecto login
    {
        path: '',
        component: LoginComponent,
        pathMatch: 'full'
        
    }



];
