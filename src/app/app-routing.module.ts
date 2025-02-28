import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEmployeeComponent } from './crud/list-employee.component';
import { CreateEmployeeComponent } from './crud/create-employee.component';
import { DetailsEmployeeComponent } from './crud/details-employee.component';
import { ExampleComponent } from './component/example.component';
import { FileUploadComponent } from './component/file-upload.component';
import { GalleryComponent } from './component/gallery.component';

const routes: Routes = [
  { path: 'employeeList', component: ListEmployeeComponent },
  { path: 'employeeCreate', component: CreateEmployeeComponent },
  { path: 'employeeDetails', component: DetailsEmployeeComponent },
  { path: 'example', component: ExampleComponent },
  { path: 'fileUpload', component: FileUploadComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
