import { Component, OnInit } from '@angular/core';
import { HealthService } from './health.service';
import { Health } from './health';
import * as io from 'socket.io-client';
import { ToastrService } from 'ngx-toastr';
import { fadeInOnEnterAnimation } from 'angular-animations';

export interface Flag {
  status: string
}

export interface DBData {
  data: string[]
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    fadeInOnEnterAnimation({ duration: 1000, delay: 200 })
  ]

})
export class HomeComponent implements OnInit {
  private socket; 

  public healthData: Health = <Health>{}

  public dbHealthData: DBData = <DBData>{}

  public isEnabled: Flag = <Flag>{};

  private url = 'http://' + window.location.host

  public interval: any;

  public connect: boolean;

  public showCards:boolean = false;

  public dbHealth:boolean = false;

  public showText:boolean = true;


  constructor(private hs: HealthService, private toastr: ToastrService) {
  }

  ngOnInit() {
    this.interval = setInterval(() => {
      this.hs.getHealth().subscribe((data: Health) => {
        this.healthData = data;
        this.showCards = true;
        if (this.connect == false) {
          this.showAPISuccess()
        }
        this.connect = true;
      }, err => this.apiError());
    }, 4000);
    this.interval = setInterval(() => {
      this.hs.getDBHealth().subscribe((dbdata: DBData) => {
        this.dbHealthData = dbdata;
        this.dbHealth = true;
      }, err => this.dbError());
    }, 4000);
    this.socket = io(this.url, {transports: ['polling']});
    this.socket.on('health event', (healthData)=> {
      this.showCards = true;
    })
  }

  apiError() {
    this.toastr.error('Unable to reach API service', 'Connection Error');
    this.showCards = false;
    this.connect = false;
  }

  dbError() {
    this.toastr.error('Unable to reach database service', 'Connection Error');
    this.dbHealth = false;
  }


  showAPISuccess() {
    this.toastr.success('API Connectivity Healthy', 'Connection Established');
  }

  showDBSuccess() {
    this.toastr.success('Database Connectivity Healthy', 'Connection Established');
  }

  showFailure() {
    this.toastr.error('Unable to reach backend services', 'Connection Error');
  }

}
