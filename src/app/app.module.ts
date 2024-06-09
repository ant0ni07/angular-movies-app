import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppRoutes} from './app.routes';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { DetailsComponent } from './components/details/details.component';
import { DetailsMoviesComponent } from './components/details-movies/details-movies.component';
import { DetailsReviewsComponent } from './components/details-reviews/details-reviews.component';
import { NotAuthorizedComponent } from './components/not-authorized/not-authorized.component';
import { SearchComponent } from './components/search/search.component';
import { LoaderComponent } from './components/loader/loader.component';
import { ModalComponent } from './components/modal/modal.component';
import { ProfitPipe } from './pipes/profit.pipe';
import { FormsModule } from '@angular/forms';
import { DetailsActorsComponent } from './components/details-actors/details-actors.component';
import { RouterModule } from '@angular/router';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MyIfDirective } from './directives/my-if.directive';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    DetailsComponent,
    DetailsMoviesComponent,
    DetailsReviewsComponent,
    NotAuthorizedComponent,
    SearchComponent,
    LoaderComponent,
    ModalComponent,
    ProfitPipe,
    DetailsActorsComponent,
    FeedbackComponent,
    CarouselComponent,
    NotFoundComponent,
    MyIfDirective
  ],
  imports: [
    BrowserModule,
    AppRoutes,
    FormsModule,
    RouterModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
