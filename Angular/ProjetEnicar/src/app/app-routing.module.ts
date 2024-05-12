import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BourceComponent } from './bource/bource.component';
import { CompteEnsComponent } from './compte-ens/compte-ens.component';
import { CourComponent } from './cour/cour.component';
import { EmploiStageComponent } from './emploi-stage/emploi-stage.component';
import { EnseignantComponent } from './enseignant/enseignant.component';
import { GestionBourseComponent } from './gestion-bourse/gestion-bourse.component';
import { GestionEmploiComponent } from './gestion-emploi/gestion-emploi.component';
import { HomeComponent } from './home/home.component';
import { InfComponent } from './inf/inf.component';
import { LoginComponent } from './login/login.component';
import { QuatCComponent } from './quat-c/quat-c.component';
import { AuthGaurdServiceService } from './service/auth-gaurd-service.service';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'Enseignant', component: EnseignantComponent},
  {path: 'Information', component: InfComponent },
  {path: 'Compte', component: CompteEnsComponent,canActivate:[AuthGaurdServiceService] },
  {path: 'Cour', component: CourComponent},
  {path: 'EmploiStages', component: EmploiStageComponent},
  {path: 'Bourse', component: BourceComponent },
  {path: '4C', component: QuatCComponent },
  {path: 'gBourse', component: GestionBourseComponent,canActivate:[AuthGaurdServiceService] },
  {path: 'gEmploi', component: GestionEmploiComponent,canActivate:[AuthGaurdServiceService] },

{path: 'login', component: LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    { enableTracing: true } // <-- debugging purposes only
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
