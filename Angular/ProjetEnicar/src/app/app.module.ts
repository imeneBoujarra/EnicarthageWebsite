import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserModule } from '@angular/platform-browser';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { EnseignantComponent } from './enseignant/enseignant.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InfComponent } from './inf/inf.component';
import { CompteEnsComponent } from './compte-ens/compte-ens.component';
import { HeaderEnsComponent } from './header-ens/header-ens.component';
import { CourComponent } from './cour/cour.component';
import { EmploiStageComponent } from './emploi-stage/emploi-stage.component';
import { QuatCComponent } from './quat-c/quat-c.component';
import { BourceComponent } from './bource/bource.component';
import { GestionEmploiComponent } from './gestion-emploi/gestion-emploi.component';
import { GestionBourseComponent } from './gestion-bourse/gestion-bourse.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { HeaderAdminComponent } from './header-admin/header-admin.component';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    EnseignantComponent,
    HomeComponent,
    InfComponent,
    CompteEnsComponent,
    HeaderEnsComponent,
    CourComponent,
    EmploiStageComponent,
    QuatCComponent,
    BourceComponent,
    GestionEmploiComponent,
    GestionBourseComponent,
    LoginComponent,
    HeaderAdminComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
    MdbCheckboxModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot()  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
