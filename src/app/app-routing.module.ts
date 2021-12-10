import { UsertipsComponent } from './usertips/usertips.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path: 'usertips',
    component: UsertipsComponent
  },
  {
    path: 'auth', loadChildren: () =>
      import('./auth/auth.module')
        .then(f => f.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
