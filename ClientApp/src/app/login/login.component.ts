import { Component, ContentChild, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Model } from '../Model/Model';
import Swal from 'sweetalert2';
import { IonInput } from '@ionic/angular';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  user = new Model();
  constructor(
    private _formBuilder: FormBuilder,
    private router: Router,

  ) {
  }
  ngOnInit(): void {
    this.loginForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

  }
  login() {
    const { email, password } = this.loginForm.value;

    if (email === 'admin@gmail.com' && password === 'admin123') {
      this.router.navigateByUrl('home')
    }
    else if (email === 'res@gmail.com' && password === 'admin123') {
      this.router.navigateByUrl('homeresponsable')
    }
    else
      Swal.fire('Non connecté', 'Login ou mot de passe incorrecte!', 'error');

  }


  // this.router.navigate(['/home'])
}


