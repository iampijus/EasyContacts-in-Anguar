import { Component } from '@angular/core';
import contactsData from "../../../assets/contactlist.json";
import { Contact } from '../../models/contact';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css'
})
export class ContactListComponent {
  contacts: Contact []=contactsData;
}
