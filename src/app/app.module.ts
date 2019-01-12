import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/core';
import {AlertsService} from './alert-service/alerts.service'
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { HighlightDirective } from './highlight.directive';
import { DateCountPipe } from './date-count.pipe';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { QuoteLikeComponent } from './quote-like/quote-like.component';
import { QuotesDetailsDirective } from './quotes-details.directive';
import { QuotesDirective } from './quotes.directive';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    QuoteDetailsComponent,
    HighlightDirective,
    DateCountPipe,
    QuoteFormComponent,
    QuoteLikeComponent,
    QuotesDetailsDirective,
    QuotesDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
    AppRoutingModule
  ],
  providers: [AlertsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
