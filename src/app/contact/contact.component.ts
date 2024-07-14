import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { FormControl, FormControlOptions, FormGroup, Validators } from '@angular/forms'
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
constructor(private _ApiService:ApiService){}

regesterform:FormGroup=new FormGroup({
  name:new FormControl(),
  email:new FormControl(),
  phone:new FormControl(),
}
)

handelbtn():void{
  this._ApiService.regsterform(this.regesterform.value).subscribe({
 next:(response)=>{
  
        console.log(response)
      
     
    },
   
  
  
  
  })
}



}
