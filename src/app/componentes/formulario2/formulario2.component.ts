import { Component, OnInit } from '@angular/core';
import { LibrosObj } from 'src/app/interfaz/libro';

@Component({
  selector: 'app-formulario2',
  templateUrl: './formulario2.component.html',
  styleUrls: ['./formulario2.component.css']
})
export class Formulario2Component implements OnInit {
  mostrar: boolean=false;
  libroArray:LibrosObj[] = [];
  btnDisabled = true;

  selectedLibrosObj: LibrosObj = new LibrosObj(); 

  ngOnInit(): void {
  } 
  agregar(){
    this.selectedLibrosObj.id = this.libroArray.length + 1;
    this.libroArray.push(this.selectedLibrosObj);  
    this.selectedLibrosObj = new LibrosObj();    
    this.mostrar=true; 
    this.guardarDatos();
  }
  
  editar(libro: LibrosObj){
   this.selectedLibrosObj = libro; 
   this.btnDisabled = !this.btnDisabled;
  }

  guardarEdit(){
    this.selectedLibrosObj = new LibrosObj(); 
    this.btnDisabled = !this.btnDisabled;
  }

  eliminar(index: number){
  if(confirm("Seguro que deseas eliminar esta solicitud de prestamo?")){
    this.libroArray.splice(index,1); 
    localStorage.setItem('prestamo', JSON.stringify(this.libroArray));
   }
   if(this.libroArray.length < 1){
    this.mostrar=false;
  }  

  }
  guardarDatos(){   
    localStorage.setItem('prestamo',JSON.stringify(this.libroArray));
    console.log(this.libroArray);
    }

}
