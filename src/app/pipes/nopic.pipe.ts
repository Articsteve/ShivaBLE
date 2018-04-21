import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nopic'
})
export class NopicPipe implements PipeTransform {

  transform(value: any): any {

    let noPicture = 'assets/img/noimage.png';

    if (!value){
      return noPicture;
    }
    return ( value.length > 0)? value[1].url : noPicture;
  }

}
