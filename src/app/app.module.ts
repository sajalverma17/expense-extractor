import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KeywordsComponent } from './keywords/keywords.component';
import { ResultComponent } from './result/result.component';
import { ExtractComponent } from './extract/extract.component';

@NgModule({
  declarations: [
    AppComponent,
    KeywordsComponent,
    ResultComponent,
    ExtractComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
