import { Ingredient } from './../_models/ingredient';
import { Component, OnInit } from '@angular/core';
import * as XLSX from 'ts-xlsx';
import { IngredientService } from '../_services/ingredient.service';
import { Router } from '@angular/router';
import { AlertMessageService } from '../_services';

@Component({
  selector: 'app-parseingredient',
  templateUrl: './parseingredient.page.html',
  styleUrls: ['./parseingredient.page.scss'],
})
export class ParseingredientPage implements OnInit {
  arrayBuffer: any;
  file: File;
  file_model: any;
  ingredients: string[];
  constructor(private ingredientService: IngredientService, private router: Router,
    private alertService: AlertMessageService) { }

  ngOnInit() {
  }

  onUploadFile(event) {
    this.file= event.target.files[0];
  }

  parseFile() {
    const fileReader = new FileReader();
    fileReader.onload = (e) => {
      this.arrayBuffer = fileReader.result;
      const data = new Uint8Array(this.arrayBuffer);
      const arr = new Array();
      for (let i = 0; i !== data.length; ++i) {
        arr[i] = String.fromCharCode(data[i]);
      }
      const bstr = arr.join('');
      const workbook = XLSX.read(bstr, { type: 'binary' });
      const first_sheet_name = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[first_sheet_name];
      const parsedData = XLSX.utils.sheet_to_json(worksheet, { raw: true });
      this.ingredients = parsedData.map(a => {
        return a[Object.keys(a)[0]];
      });
    };
    fileReader.readAsArrayBuffer(this.file);
    this.file_model = undefined;
  }

  save() {
    if (this.ingredients && this.ingredients.length) {
      this.ingredientService.parse({ingredientText: this.ingredients.join(' ')}).subscribe(
        res => {
          console.log(res);
          delete this.arrayBuffer;
          delete this.file;
          delete this.ingredients;
          delete this.file_model;
          this.router.navigate(['/list/tabs/tab2']);
        },
        err => {
          console.log(err);
          this.alertService.presentToast('Not able to add ingredients!', 'danger');
        }
      );
    } else {
      this.alertService.presentToast('No ingredients to add! Please add/parse valid ingredient list file.', 'danger');
    }
  }

}
