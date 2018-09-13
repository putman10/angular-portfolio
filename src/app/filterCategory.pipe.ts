import { Pipe, PipeTransform } from '@angular/core';
import { Project } from './models/project.model'
import * as _ from 'lodash';

@Pipe({
  name: 'filterCategory',
  pure: false
})

export class FilterCategoryPipe implements PipeTransform {
  transform(input: Project[], filterCategory: string){
      let filteredArray = [];

        input.forEach(function(element){
            if(element.category == filterCategory || filterCategory == "View All"){
              filteredArray.push(element);
            } else {
              return;
            }
      });
      return filteredArray;
    }
  }
