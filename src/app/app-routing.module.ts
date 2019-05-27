import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {path: 'search', component: HomepageComponent},
    {path: '', component: HomepageComponent, pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
