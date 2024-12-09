import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CreateContactComponent } from './components/create-contact/create-contact.component';
import { ViewContactComponent } from './components/view-contact/view-contact.component';
import { UpdateContactComponent } from './components/update-contact/update-contact.component';

export const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "contacts", component: HomeComponent },
    { path: "create-contact", component: CreateContactComponent },
    { path: "view-contact/:id", component: ViewContactComponent },
    { path: "update-contact/:id", component: UpdateContactComponent }
];
