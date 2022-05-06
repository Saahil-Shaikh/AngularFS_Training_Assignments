import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators  } from '@angular/forms';

@Component({
  selector: 'app-vehicle-reg-form',
  templateUrl: './vehicle-reg-form.component.html',
  styleUrls: ['./vehicle-reg-form.component.css']
})
export class VehicleRegFormComponent {

  validatePattern = "^[A-Z0-9]{10}$";

  vehicle_reg_form:FormGroup = new FormGroup({
    owner_name : new FormControl("", Validators.required),
    contact_number : new FormControl("", [Validators.required , Validators.pattern("\\d{10}")]),
    owner_email : new FormControl("", Validators.email),
    vehicle_reg_number : new FormControl("", Validators.pattern(this.validatePattern)),
    address : new FormControl("",Validators.required),
    model : new FormControl("", [Validators.maxLength(10) , Validators.minLength(10)]),
    color : new FormControl("", Validators.required),
    year : new FormControl("",[Validators.min(2012) , Validators.max(2022) , Validators.maxLength(4) , Validators.minLength(4)])
  }
  )

  submit_click(){
    alert("Form Submitted!")
  }

}
