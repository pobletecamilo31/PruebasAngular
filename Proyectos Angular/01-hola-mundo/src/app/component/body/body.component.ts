import { Component } from "@angular/core";


@Component ({
    selector:'app-body',
    templateUrl: './body.component.html'

})
export class BodyComponent {
 
 
    mostrar= true;

    //objeto
    frase: any = {

        mensaje: 'Jugar a la pelota' , 
        autor: 'Camilo Poblete'

    };

    personajes : string[] = ['Messi' , 'Cristiano' ,  'Alexis'  ];

    
}