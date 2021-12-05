import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './components/table/table.component';

const routes: Routes = [
  { path: 'setose', component: TableComponent,  data:{  name:'Iris-setosa' }},
  { path: 'versicolor', component: TableComponent, data:{  name:'Iris-versicolor' }},
  { path: 'virginica', component: TableComponent, data:{  name:'Iris-virginica' }},
  //{ path: 'home', component: TableComponent },
  { path: '**', redirectTo: 'setose' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
