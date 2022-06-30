import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { AboutUsComponent} from './about-us/about-us.component';
import {UserComponent} from './user/user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserPostComponent } from './user-post/user-post.component';
import { UserInformationComponent } from './user-information/user-information.component';

const routes: Routes = [
 {path: 'home', component: HomeComponent},
 {path: 'aboutUs', component: AboutUsComponent},
 {path: 'user', component:UserComponent,
  children: [{
    path:"details/:id", component:UserDetailsComponent,
    children: [{path:'details', component:UserDetailsComponent},
              {path:'post', component:UserPostComponent},
              {path:'Information', component:UserInformationComponent},
              { path: '', redirectTo: 'details', pathMatch: 'full' }

  ]
  },

]
},
{ path: '', redirectTo: 'home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
