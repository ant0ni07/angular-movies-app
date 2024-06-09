import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/details/details.component';
import { DetailsActorsComponent } from './components/details-actors/details-actors.component';
import { DetailsMoviesComponent } from './components/details-movies/details-movies.component';
import { DetailsReviewsComponent } from './components/details-reviews/details-reviews.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { SearchComponent } from './components/search/search.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CarouselComponent } from './components/carousel/carousel.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


export const routes: Routes = [
{path:'', redirectTo:'home', pathMatch:'full'},
{path:'home', component: HomeComponent},
{path:'details/:id', component: DetailsComponent},
{path:'details/actors/:id', component: DetailsActorsComponent},
{path:'details/movies/:id', component: DetailsMoviesComponent},
{path:'details/reviews/:id', component: DetailsReviewsComponent},
{path:'feedback', component: FeedbackComponent},
{path:'search/:movieTitle', component: SearchComponent},
{path:'carousel', component: CarouselComponent},

// Start Nested Routes
// {path:'details', component: DetailsComponent, children:[
//     {path:'actors', component: DetailsActorsComponent},
//  {path:'movies', component: DetailsMoviesComponent},
//  {path:'reviews', component: DetailsReviewsComponent},
// ]},
// // End Nested Routes
// 404 page for not found
{path:'**', component: NotFoundComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes,{
        scrollPositionRestoration:'enabled'
    })],exports: [RouterModule]
})
export class AppRoutes {}