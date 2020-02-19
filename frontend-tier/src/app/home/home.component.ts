import { Component, OnInit } from '@angular/core';
import { HealthService } from './health.service';
import { Health } from './health';
import * as io from 'socket.io-client';
import { ToastrService } from 'ngx-toastr';
import * as consul from 'consul'

export interface Flag {
  status: string
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private socket; 

  public healthData: Health = <Health>{}

  public isEnabled: Flag = <Flag>{};

  private url = 'http://' + window.location.host

  public interval: any;

  public connect: boolean;

  public showCards:boolean = false;

  public showText:boolean = true;

  constructor(private hs: HealthService, private toastr: ToastrService) {}

  ngOnInit() {
    this.interval = setInterval(() => {
      this.hs.getHealth().subscribe((data: Health) => {
        this.healthData = data;
        this.showCards = true;
        if (this.connect == false) {
          this.showSuccess()
        }
        this.connect = true;
      }, err => this.handleError());
    }, 4000);
    this.socket = io(this.url);
    this.socket.on('health event', (healthData)=> {
      this.showCards = true;
    })
  }

  handleError() {
    this.toastr.error('Unable to reach backend services', 'Connection Error');
    this.showCards = false;
    this.connect = false;
  }


  showSuccess() {
    this.toastr.success('Socket communication enabled with backend service', 'Connection Established');
  }

  showFailure() {
    this.toastr.error('Unable to reach backend services', 'Connection Error');
  }

}
