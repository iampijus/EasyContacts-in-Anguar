import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-create-contact',
  standalone: true,
  imports: [ReactiveFormsModule,NgClass],
  templateUrl: './create-contact.component.html',
  styleUrl: './create-contact.component.css'
})
export class CreateContactComponent {
  form: any;
  mobileRegex: string = '[6789][0-9]{9}';
  emailRegex: string = '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$';

  constructor(private router: Router) {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(5)]),
      photo: new FormControl('', [Validators.required]),
      mobile: new FormControl('', [Validators.required, Validators.pattern(this.mobileRegex)]),
      email: new FormControl('', [Validators.pattern(this.emailRegex)]),
      company: new FormControl('')
    })
  }

  get name() {
    return this.form.get('name');
  }
  get photo() {
    return this.form.get('photo');
  }

  get mobile() {
    return this.form.get('mobile');
  }

  get email() {
    return this.form.get('email');
  }

  onSubmit() {
    console.log(this.form.value);
  }

  onCancel() {
    this.router.navigate(['/contacts']);
  }
}
