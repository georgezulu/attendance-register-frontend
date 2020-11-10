import { Component, OnInit } from '@angular/core';
import { Register } from '../Register';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-quarterly-report',
  templateUrl: './quarterly-report.component.html',
  styleUrls: ['./quarterly-report.component.css']
})
export class QuarterlyReportComponent implements OnInit {
  registers : Register[];

  constructor(private registerService: RegisterService) { }

  ngOnInit(): void {
    this.getRegisters();
  }
  private getRegisters() {
 
    console.log('data');
    this.registerService.getRegistersListByTerm().subscribe(data => {
      console.log(data);
      this.registers = data;
    });
  }
}
