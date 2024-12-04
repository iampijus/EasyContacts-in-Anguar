import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Contact } from '../../models/contact';

@Component({
  selector: 'app-view-contact',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './view-contact.component.html',
  styleUrl: './view-contact.component.css'
})
export class ViewContactComponent implements OnInit {
  contact: Contact | undefined;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {

    // get the id from the router
    this.route.paramMap.subscribe((value) => {
      let id = value.get('id');
    })

    // get the contact details by id
    

  }



}
