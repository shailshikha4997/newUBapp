import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegistrationService } from './registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
 register!:FormGroup;
  constructor(private registerService:RegistrationService) {
    
    }

  ngOnInit(): void {
    this.register = new FormGroup({
      'name': new FormControl('', Validators.required),
      'email': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.required)
    })
    this.getUserRegister();
  }

  onSubmit(){
    console.log(this.register.value);
  }

getUserRegister(){
this.registerService.getRegisterData(this.register.value).subscribe((resp:any) => {
  console.log(resp)
})
  }

}
