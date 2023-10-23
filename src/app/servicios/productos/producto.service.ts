import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APi33 } from 'src/app/config/config';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(
    private http:HttpClient,
  ) { }

  obtenerPoductos(){
    let url = APi33+'/products';
    return this.http.get(url).pipe(map((resp:any)=>{
      return resp;
    }));
  }

}
