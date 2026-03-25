import { Routes } from '@angular/router';
import path from 'path';
import { Templateform } from './templateform/templateform';
import { ReactiveForm } from './reactive-form/reactive-form';
import { ParentComponent } from './parent-component/parent-component';

export const routes: Routes = [
    {path:'templateform',component:Templateform},
    {path:'reactiveform' , component:ReactiveForm},
    { path: 'parent', component: ParentComponent }
];
