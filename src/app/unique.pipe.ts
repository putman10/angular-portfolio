import { Pipe, PipeTransform } from '@angular/core';
import { Project } from './models/project.model'
import * as _ from 'lodash';

@Pipe({
  name: 'unique',
  pure: false
})

export class UniquePipe implements PipeTransform {
  transform(input: Project[]){
    let filteredArray = [];
    if(input != null){
      input.forEach(function(element){
          if(filteredArray.includes(element.category)){
            filteredArray.push(element.category);
          } else {
            return;
          }
    return filteredArray;
  })
}
}
}
