import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigurationsComponent } from './configurations/configurations.component';
import { DetailsComponent } from './details/details.component';
import { StudentListComponent } from './student-list/student-list.component';

const routes: Routes = [
  {path: '', component: StudentListComponent},
  {path: 'details/:studentId', component: DetailsComponent},
  {path: 'configuration', component: ConfigurationsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
