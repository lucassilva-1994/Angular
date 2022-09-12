import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatChipsModule, MatGridListModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppComponent } from './app.component';
import { ButtonDirective } from './dashboard/card/button.diretive';
import { CardComponent } from './dashboard/card/card.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FakeApiService } from './fake-api.service';
import { HelloComponent } from './hello.component';



@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatChipsModule, 
    MatCardModule,
    MatGridListModule,
    HttpClientModule, 
    FlexLayoutModule,
    InMemoryWebApiModule.forRoot(FakeApiService, 
    {delay: 200}) ],
  declarations: [ 
    AppComponent, 
    HelloComponent, 
    DashboardComponent, 
    CardComponent, 
    ButtonDirective ],
  bootstrap:    [ AppComponent ]

})
export class AppModule { }
