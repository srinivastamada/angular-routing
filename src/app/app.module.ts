import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { routes } from './app.routing';
import { AuthGuard } from './guards/auth.guard';
import { HomeModule } from './home/home.module';
import { IndexModule } from './index/index.module';
import { NoPageModule } from './no-page/no-page.module';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    IndexModule,
    NoPageModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
