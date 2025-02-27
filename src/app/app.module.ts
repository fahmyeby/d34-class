import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExampleComponent } from './component/example.component';
import { FileUploadComponent } from './component/file-upload.component';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { GalleryComponent } from './component/gallery.component';
import { CreateEmployeeComponent } from './crud/create-employee.component';
import { ListEmployeeComponent } from './crud/list-employee.component';
import { DetailsEmployeeComponent } from './crud/details-employee.component';
import { UpdateEmployeeComponent } from './crud/update-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    FileUploadComponent,
    GalleryComponent,
    CreateEmployeeComponent,
    ListEmployeeComponent,
    DetailsEmployeeComponent,
    UpdateEmployeeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
