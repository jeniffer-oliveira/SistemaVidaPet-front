import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup

  constructor(private fb: FormBuilder, private authService: AuthService) { 
    this.loginForm = fb.group(
      {
        email:['',[Validators.email, Validators.required]],
        password: ['', [Validators.required, Validators.minLength(6)]]
      }
    )
  }

  ngOnInit(): void {
  }

  submit(){
    console.log(this.loginForm.getRawValue())
  }

}
