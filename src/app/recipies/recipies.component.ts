import { Component , OnInit} from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.component.html',
  styleUrls: ['./recipies.component.scss']
})
export class RecipiesComponent   implements OnInit{
  Data:any=[]
constructor( private _ApiService:ApiService){}

ngOnInit(): void {
  this._ApiService.getData().subscribe({
    next:(response)=>{
  this.Data=response.meals.slice(0, 3);
  
    }
  })
  
}
}