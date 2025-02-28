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
import { MaterialModule } from './module/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

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
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
