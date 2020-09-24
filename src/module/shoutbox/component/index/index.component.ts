import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { environment } from '@env';
import { GroupService } from '@module/data/service/group.service';
import { timer } from 'rxjs';
import { timeout } from 'rxjs/operators';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  public messages: any[];
  public shout: FormControl = new FormControl('');

  constructor(
    private groupService: GroupService
  ) {
    timer(environment.refresh * 1000, environment.refresh * 1000).subscribe(time => {
      this.groupService.getMessages().subscribe((data: any) => {
        this.messages = data.data;
      });
    },
    error => alert('An unexpected error occurred'));
  }

  ngOnInit(): void {
    this.groupService.join().subscribe(subscription => {
      this.groupService.getMessages().subscribe((data: any) => {
        this.messages = data.data;
      });
    },
    error => alert('An unexpected error occurred'));
  }

  public doShout(): void {
    this.groupService.postMessage(this.shout.value).subscribe(post => {
      this.groupService.getMessages().subscribe((data: any) => {
        this.messages = data.data;
      });
    },
    error => alert('An unexpected error occurred'));
  }
}
