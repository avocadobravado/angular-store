import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { StorePipePipe } from './store-pipe.pipe';
import { AboutComponent } from './about/about.component';
import { routing } from './app.routing';
import { MarketplaceComponent } from './marketplace/marketplace.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    StorePipePipe,
    AboutComponent,
    MarketplaceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
