import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgxCsvParser } from 'ngx-csv-parser';
import { DataService } from 'src/app/services/data/data.service';
import { Papa } from 'ngx-papaparse';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, AfterViewInit {
  dataToFilter: any;
  displayedColumns: string[] = ['weight'];
  dataSource!: any;
  sepalLengthAverage!: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  jsonData: any = [];

  constructor(private dataService: DataService, private papa: Papa, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.dataToFilter= this.route.snapshot.data['name'];
    this.dataService.getData().subscribe((data: any): any => {
      let csvToRowArray = data.split("\n");
      this.displayedColumns = csvToRowArray[0].split(",");
      this.convertToJson(csvToRowArray);
      //console.log(csvToRowArray);


    });
    this.dataSource = new MatTableDataSource<any>(this.jsonData);

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    
  }

  convertToJson(csvToRowArray: any) {
    let firstRow = csvToRowArray[0].split(",");
    for (let index = 1; index < csvToRowArray.length - 1; index++) {
      let row = csvToRowArray[index].split(",");
      const newObject = row.reduce((result: any, item: any, index: any) => {
        result[firstRow[index]] = item
        return result
      }, {})
      if(newObject.Species == this.dataToFilter) {
        this.jsonData.push(newObject);
      }
      //console.log(newObject);
    }
    //this.jsonData = this.jsonData.filter((data: any)=> {data.Species== this.dataToFilter})
    
    this.findSepalLengthAverage();

  }

  findSepalLengthAverage(): any {
  
    this.sepalLengthAverage = this.jsonData.map((data: any) => {return data.SepalLengthCm}).reduce((prev: any, next: any) =>  parseFloat(prev)+ parseFloat(next))
    //console.log(this.sepalLengthAverage);
    this.sepalLengthAverage = this.sepalLengthAverage / this.jsonData.length;
  }

  isSepalLengthAbove(sepalLength: any): boolean {
    return sepalLength > this.sepalLengthAverage ? true: false;
  }

}


