import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-templateform',
  imports: [FormsModule,CommonModule, RouterOutlet,RouterLink],
  templateUrl: './templateform.html',
  styleUrl: './templateform.css',
})
export class Templateform {


  useradd={
    road:'',
    pincode:'',
    build:''
  }
  onSubmit(form:any){
    console.log(form.value);
  }

}
