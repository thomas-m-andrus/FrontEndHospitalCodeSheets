import { Component, OnInit } from '@angular/core';
import { PatientService } from "../shared-services/patient.service";
import { ActivatedRoute, Router } from "@angular/router";
import { RouteConverterService } from "../shared-services/route-converter.service";

@Component({
  selector: 'navbar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})

export class NavBarComponent implements OnInit {
  links: string[] = [ 'Welcome','Anaphylactic', 'Seizure', 'PICU', 'NICU', 'OR', 'Test']

  constructor(
    public p: PatientService 
    ,public route: ActivatedRoute 
    ,public router: Router
    ,public rcs: RouteConverterService
  ) { }

  ngOnInit() {
    this.p.changeInfoAll(
      this.route.snapshot.params['FName'],
      this.route.snapshot.params['LName'],
      this.rcs.parsePToPeriod(this.route.snapshot.params['Weight']),
      this.rcs.parsePToPeriod(this.route.snapshot.params['Height']),
      this.route.snapshot.params['MM'],
      this.route.snapshot.params['DD'],
      this.route.snapshot.params['YYYY'],
      this.rcs.calcAge(this.route.snapshot.params['YYYY']),
      this.rcs.calcBSA(
        this.rcs.parsePToPeriod(this.route.snapshot.params['Weight'])
        ,this.rcs.parsePToPeriod(this.route.snapshot.params['Height'])
        )
      );
  }

}
