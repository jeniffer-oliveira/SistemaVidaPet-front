import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Credenciais } from 'src/app/models/Credenciais';
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

  validaCampos(): boolean{
    if(this.loginForm){
      return true;
    }else{
      return false;
    }
  }

  submit(){
    console.log(this.loginForm.getRawValue())
  }

}
