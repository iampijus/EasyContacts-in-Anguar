import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-update-contact',
  standalone: true,
  imports: [],
  templateUrl: './update-contact.component.html',
  styleUrl: './update-contact.component.css'
})
export class UpdateContactComponent implements OnInit{

  constructor(private router:Router, private route:ActivatedRoute){

  }
  ngOnInit(): void {
    
    // get the id from the route
    this.route.paramMap.subscribe((value)=>{
      let id=value.get('id');
      console.log(id);
    })

    // fetch the contact details by id
  }



  onCancel(){
    this.router.navigate(['/contacts']);
  }

}
