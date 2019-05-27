import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// module imports
import { AppRoutingModule } from './app-routing.module';

// 3rd party library imports
import { NgxUiLoaderModule } from 'ngx-ui-loader'; // progress bar
import { NgxPaginationModule } from 'ngx-pagination'; // pagination module
import { ToastrModule } from 'ngx-toastr'; // toastr module

// component imports
import { AppComponent } from './app.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { HomepageComponent } from './homepage/homepage.component';

// config imports
import { progressBarConfig, toastrConfig } from './libraries.config';

@NgModule({
  declarations: [
    AppComponent,
    SearchResultsComponent,
    SearchBarComponent,
    MovieDetailsComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgxUiLoaderModule.forRoot(progressBarConfig),
    ToastrModule.forRoot(toastrConfig),
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
