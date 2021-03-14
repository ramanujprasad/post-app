import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { PostErrorComponent } from './components/post-error/post-error.component';

const routes: Routes = [
  { path: 'posts', component: PostDetailsComponent },
  { path: '', redirectTo: 'posts', pathMatch: 'full' },
  { path: '**', component: PostErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
