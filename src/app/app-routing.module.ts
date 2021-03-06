import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
    {
        path: 'comp1',
        component: Comp1Component
    },
    {
        path: 'comp2',
        component: Comp2Component
    },
    {
        path: 'notfound',
        component: NotFoundComponent
    },
    {
        path: '',
        redirectTo: 'comp1',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: Comp1Component
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
