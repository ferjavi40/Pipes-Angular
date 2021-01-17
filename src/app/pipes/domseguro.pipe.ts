//este es un pipe que nos permite pasar los enlances que son de confianza, osea que angular le permita

import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer,SafeResourceUrl } from '@angular/platform-browser';// este se usa para que angular verifique los enlaces IFRAME


@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {


  constructor(private domSanitizer : DomSanitizer){

  }

  transform(value: string, ...args: unknown[]): SafeResourceUrl {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(value);
  }

}
