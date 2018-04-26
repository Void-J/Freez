import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { AuthGuard } from './_guards/index';
import { EntrepriseComponent } from './entreprise/entreprise.component';
import { Header2Component } from './header2/header2.component';
import { NavComponent } from './nav/nav.component';
import { MainComponent } from './main/main.component';
import { VlogComponent } from './vlog/vlog.component';
import { VlogbisComponent } from './vlogbis/vlogbis.component';
import { FromationsComponent } from './fromations/fromations.component';

const appRoutes: Routes = [
    { path: 'accueil', component: MainComponent},
    { path: '',   redirectTo: '/accueil', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'entreprise', component: EntrepriseComponent},
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
    { path: 'vlog', component: VlogComponent},
    { path: 'vlogs', component: VlogbisComponent, canActivate: [AuthGuard]},
    { path: 'formations', component: FromationsComponent},
    { path: '**', redirectTo: '' },

];

export const routing = RouterModule.forRoot(appRoutes);