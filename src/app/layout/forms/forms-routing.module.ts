import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsComponent } from './forms.component';

const routes: Routes = [
  {
    path: '',
    component: FormsComponent,
    children: [
        {
            path: '',
            redirectTo: 'dashboard'
        },
        {
            path: 'forms',
            loadChildren: () => import('./forms.component').then(m => m.FormsComponent)
        }
    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
