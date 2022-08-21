import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user!:FormGroup;
  constructor(private logService: LoginService) { }

  ngOnInit(): void {
   this.user = new FormGroup ({
    'email':new FormControl('',Validators.required),
    'password':new FormControl('',Validators.required),
    })
    this.loginUser();
  }

  onSubmit(){
   console.log(this.user.value); 
  }

  loginUser(){
    this.logService.getUserLogin().subscribe((response:any) => {
      console.log(response)
    })
  }


}
