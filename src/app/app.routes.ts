import { Routes } from '@angular/router';
import { List } from './list/list';
import { Userdetails } from './userdetails/userdetails';
import { EditUserdetails } from './edit-userdetails/edit-userdetails';
import { Reactiveforms } from './reactiveforms/reactiveforms';
import { ListingPage } from './listing-page/listing-page';

export const routes: Routes = [
    { path: 'todo', component: List },
    { path: 'user', component: Userdetails },
    { path: 'user-details', component: EditUserdetails },
    { path: 'forms', component: Reactiveforms },
    { path: 'list-page', component: ListingPage },

];
