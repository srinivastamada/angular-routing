import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './app.routing';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';
import { IndexModule } from './index/index.module';
import { LogoComponent } from './components/logo/logo.component';
import { NoPageComponent } from './no-page/no-page.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HomeComponent,
    LogoComponent,
    NoPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    IndexModule,
   RouterModule.forRoot(routes, { useHash: true })
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
