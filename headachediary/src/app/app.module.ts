import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadachesComponent } from './headaches/headaches.component';
import { HeadacheDetailsComponent } from './headache-details/headache-details.component';
import { NewHeadacheComponent } from './new-headache/new-headache.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadachesComponent,
    HeadacheDetailsComponent,
    NewHeadacheComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
