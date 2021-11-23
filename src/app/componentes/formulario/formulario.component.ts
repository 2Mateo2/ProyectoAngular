
import { Component, OnInit } from '@angular/core';
import { RegisterObj } from 'src/app/interfaz/register';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  mostrar: boolean=false;
  userList:RegisterObj[] = [];
  btnDisabled = true;
  selectedRegisterObj: RegisterObj = new RegisterObj(); 

  ngOnInit(): void {
  } 

  agregar(){
    this.selectedRegisterObj.id = this.userList.length + 1;
    this.userList.push(this.selectedRegisterObj);
    this.selectedRegisterObj = new RegisterObj();     
    this.mostrar=true; 
    this.guardarDatos();
  }
  
  editar(register: RegisterObj){
   this.selectedRegisterObj = register; 
   this.btnDisabled = !this.btnDisabled;
  }

  guardarEdit(){
    this.selectedRegisterObj = new RegisterObj(); 
    this.btnDisabled = !this.btnDisabled;
  }

  eliminar(index: number){
  if(confirm("Seguro que deseas eliminar este registro?")){
    this.userList.splice(index,1); 
    localStorage.setItem('registrados', JSON.stringify(this.userList));
   }
   if(this.userList.length < 1){
    this.mostrar=false;
   } 
  }

  guardarDatos(){   
  localStorage.setItem('registrados',JSON.stringify(this.userList));
  console.log(this.userList);
  }
  
}
