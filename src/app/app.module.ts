import { LoginGuard } from './servicios/login-guard.service';
import { AuthGuard } from './servicios/auth-guard.service';
import { AuthService } from './servicios/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from "app/app-routing.module";
import { ReactiveFormsModule } from "@angular/forms";
import { HeaderComponent } from './header/header.component';
import { HttpModule } from "@angular/http";
import { CuposManagerComponent } from './cupos-manager/cupos-manager.component';
import { CocheraService } from "app/servicios/cochera.service";
import { ModalLoadingComponent } from './modal-loading/modal-loading.component';
import { UpdateService } from "app/servicios/update.service";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    CuposManagerComponent,
    ModalLoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [AuthService, CocheraService, LoginGuard, UpdateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
