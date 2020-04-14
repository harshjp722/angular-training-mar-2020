import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'about', loadChildren: () => import('./modules/about/about.module')
      .then(m => m.AboutModule)
  },
  {
    path: 'elements', loadChildren: () => import('./modules/elements/elements.module')
      .then(m => m.ElementsModule)
  },
  {
    path: 'test', loadChildren: () => import('./modules/test/test.module')
      .then(m => m.TestModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
