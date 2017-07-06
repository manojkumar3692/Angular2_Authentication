
import { dashboardModule } from './dashboard/dashboard.module';
import { ResidentGuard } from './core/resident-guard.service';
import { AdminGuard } from './core/admin-guard.service';
import { AuthService } from './core/auth.service';
import { AuthGuard } from './auth-guard.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SearchModule } from './search/search.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {CoreModule} from './core/core.module';
import { AppComponent } from './app.component';
import {LoginModule} from './login/login.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
     CoreModule,
     LoginModule,
     SearchModule,
     dashboardModule
  ],
  providers: [AuthGuard,AuthService,AdminGuard,ResidentGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
