import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'unique',
  pure: false
})

export class UniquePipe implements PipeTransform {

    transform(value: any, args?: any): any {
    let categories = [];

      value.forEach(function(project){
        if (categories.includes(project.category)) {

        } else{
          categories.push(project.category);
        }
      });
      return categories;

    }
  }
