import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nombre: string = 'Wayne Rooney';

  nombre2: string = 'fERnaNdo rAmiREZ oBANdo';

  arreglo = [1,2,3,4,5,6,7,8,9,10];

  PI: number = Math.PI;

  porcentaje: number = 0.234;

  salario: number = 1234;

  fecha: Date= new Date ();


  videoUrl: string = 'https://www.youtube.com/embed/7BrcfBUlVu8';


  valorPromesa= new Promise<string>((resolve,reject)=>{

    setTimeout(()=>{
      resolve('LLego la data');
    },3500)
  })


  heroe={
    nombre: 'Fernando',
    clave: 'Front end developer',
    edad: 30,
    direccion: {
      calle: 'bajondillo',
      ciudad: 'torremolinos'
    }
  }

}
