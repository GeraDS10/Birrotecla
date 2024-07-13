import { Routes } from '@angular/router';
import { BirroteclaBeersComponent } from './birrotecla-beers/birrotecla-beers.component';
import { BirrroteclaAboutComponent } from './birrrotecla-about/birrrotecla-about.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'beers',
        pathMatch:'full'
    },
    {
        path: 'beers',
        component: BirroteclaBeersComponent
    },
    {
        path: 'about',
        component: BirrroteclaAboutComponent
    }
];
