import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/servicios/productos/producto.service';

@Component({
  selector: 'app-productos-usuarios',
  templateUrl: './productos-usuarios.component.html',
  styleUrls: ['./productos-usuarios.component.scss']
})
export class ProductosUsuariosComponent implements OnInit{
  public Productos: any

  constructor(
    private poSe: ProductoService
  ) { }
    ngOnInit(): void {
      this.product();
    }

    product(){
      this.Productos = [];
      this.poSe.obtenerPoductos().subscribe((resp: any)=>{
        if (resp){
          this.Productos = resp;
          console.log('=>', this.Productos);
          console.log('=>', resp);
        }
      })
    }
}
