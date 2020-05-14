import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { AppComponent } from './app.component'
import { HomeComponent } from './home/home.component';
import { MessagingComponent } from './messaging/messaging.component';
import { ServiceMeshComponent } from './service-mesh/service-mesh.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'messaging', component: MessagingComponent },
  { path: 'home', component: HomeComponent },
  { path: 'service-mesh', component: ServiceMeshComponent }
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}