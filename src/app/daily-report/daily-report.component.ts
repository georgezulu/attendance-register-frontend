import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';
import { Register } from '../Register';

@Component({
  selector: 'app-daily-report',
  templateUrl: './daily-report.component.html',
  styleUrls: ['./daily-report.component.css']
})
export class DailyReportComponent implements OnInit {

  registers : Register[];

  constructor(private registerService: RegisterService) { }

  ngOnInit(): void {
    this.getRegisters();
  }
  private getRegisters() {
 
    console.log('data');
    this.registerService.getRegistersList().subscribe(data => {
      console.log(data);
      this.registers = data;
    });
  }
}
