import { Component, OnInit } from '@angular/core';
import { PuestoObj } from 'src/app/interfaz/puesto';

@Component({
  selector: 'app-formulario3',
  templateUrl: './formulario3.component.html',
  styleUrls: ['./formulario3.component.css']
})
export class Formulario3Component implements OnInit {
  mostrar: boolean=false;
  puestoArray:PuestoObj[] = [];
  btnDisabled = true;

  selectedPuestoObj: PuestoObj = new PuestoObj(); 

  ngOnInit(): void {
  } 
  agregar(){
    this.selectedPuestoObj.id = this.puestoArray.length + 1;
    this.puestoArray.push(this.selectedPuestoObj);  
    this.selectedPuestoObj = new PuestoObj();    
    this.mostrar=true; 
    this.guardarDatos();
  }
  
  editar(puesto: PuestoObj){
   this.selectedPuestoObj = puesto; 
   this.btnDisabled = !this.btnDisabled;
  }

  guardarEdit(){
    this.selectedPuestoObj = new PuestoObj(); 
    this.btnDisabled = !this.btnDisabled;
  }

  eliminar(index: number){
  if(confirm("Seguro que desea eliminar esta solicitud de apartar un lugar?")){
    this.puestoArray.splice(index,1); 
    localStorage.setItem('puesto', JSON.stringify(this.puestoArray));
   }
   if(this.puestoArray.length < 1){
    this.mostrar=false;
   }     
  }
  guardarDatos(){   
    localStorage.setItem('puesto',JSON.stringify(this.puestoArray));
    console.log(this.puestoArray);
    }
}
