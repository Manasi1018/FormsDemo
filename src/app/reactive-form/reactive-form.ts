import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { passwordMatchValidator } from '../validators/password-match.validator';


@Component({
  selector: 'app-reactive-form',
  imports: [RouterLink,CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-form.html',
  styleUrl: './reactive-form.css',
})

export class ReactiveForm {

  signupform!:FormGroup;
  constructor(private fb:FormBuilder){
    this.signupform = this.fb.group({
      name:['',[Validators.required,Validators.minLength(2)]],
      email:['',[Validators.email,Validators.required]],
      gender:['',[Validators.required]],
      password:['',[Validators.required]],
      confirmPassword:['',Validators.required],
      country:['',[Validators.required]],

      phones:this.fb.array([
        this.fb.control('')
      ]),


      address:this.fb.group({
        street:['',[Validators.required]],
        city:['',[Validators.required]],
        pincode:['',[Validators.pattern('^[0-9]*$')]]
      })

    },{
        validators: passwordMatchValidator
    }
  )
  }

 

  onSave(){
    if(this.signupform.valid){
      console.log("Form Submitted!!",this.signupform.value);
      alert("Signup Successfull");
      this.signupform.reset();
    }
    else{
       this.signupform.markAllAsTouched();
      
    }
  }
      
   checkUser(){
    const control = this.signupform.get('name');

    if(control?.value === 'admin'){
      control.setErrors({ usernameTaken: true });
    }}

  fillData(){
    this.signupform.patchValue({
      name:'Manasi',
       
      email:'manasi@gmail.com',
      password:'123456',
      gender:'Female',

    address:{
      city:'Mumbai'
      }
    })
  }

  get phones(){
    return this.signupform.get('phones') as FormArray;
  }

  addPhones(){
    this.phones.push(this.fb.control(''));
  }

  removePhones(i:number){
    this.phones.removeAt(i);
  }



}
