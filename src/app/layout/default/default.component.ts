import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.less']
})
export class DefaultComponent implements OnInit {
  isCollapsed = false;
  triggerTemplate = null;
  date: any;
  constructor() { }
  launchSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }
  ngOnInit() {
    const date = new Date();
    this.date = date.getFullYear();
  }

}
