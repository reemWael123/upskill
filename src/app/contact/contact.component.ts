import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { FormControl, FormControlOptions, FormGroup, Validators } from '@angular/forms'
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  erroMsg:string="";
constructor(private _ApiService:ApiService){}

regesterforms:FormGroup=new FormGroup({
  name:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
  email:new FormControl('',[Validators.required,Validators.email]),
  phone:new FormControl('',[Validators.required]),
}
)

handelbtn():void{
  this._ApiService.regsterform(this.regesterforms.value).subscribe({
 next:(response)=>{
  
        console.log(response)
      
     
    },
    error:(err)=>{
  
      this.erroMsg=err.error.message;
      
     }
   
  
  
  
  })
}



}
