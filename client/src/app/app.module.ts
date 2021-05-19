import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailsComponent } from './details/details.component';
import { StudentLineComponent } from './student-line/student-line.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentLineHeaderComponent } from './student-line-header/student-line-header.component';
import { ConfigurationsComponent } from './configurations/configurations.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    StudentLineComponent,
    StudentListComponent,
    StudentLineHeaderComponent,
    ConfigurationsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
