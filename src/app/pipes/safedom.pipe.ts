import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safedom'
})
export class SafedomPipe implements PipeTransform {

  constructor( private domSanitizer:DomSanitizer ){

  }
  transform(value: string, Url: string): any {

    return this.domSanitizer.bypassSecurityTrustResourceUrl( Url + value);
  }

}
