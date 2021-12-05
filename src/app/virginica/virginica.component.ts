import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-virginica',
  templateUrl: './virginica.component.html',
  styleUrls: ['./virginica.component.scss']
})
export class VirginicaComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }
  ngOnInit() {
    //this.route.snapshot.data['name']
    console.log("Data via params: ",this.route.snapshot.data['name']);
  }



}
