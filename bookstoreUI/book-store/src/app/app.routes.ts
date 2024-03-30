import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
   // { path: '', component: , },
    { path: 'login',  loadChildren:() =>  import('./modules/login/login.module').then(m => m.LoginModule)  },
    { path: 'mybooks', loadChildren:() =>  import('./modules/reservation-history/reservation-history.module').then(m => m.ReservationHistoryModule)  },
    { path: 'logout',  loadChildren:() =>  import('./modules/logout/logout.module').then(m => m.LogoutModule)  },
    { path: 'home', loadChildren:() =>  import('./modules/books-list/books-list.module').then(m => m.BooksListModule) },
   { path: 'reserve/:id', loadChildren:() =>  import('./modules/reservation/reservation.module').then(m => m.ReservationModule)  },
   // { path: '**', component: NotFoundComponent }
];
