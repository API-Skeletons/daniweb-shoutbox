import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/auth/auth.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  public user: any;

  constructor(
    private authService: AuthService
  ) {
    this.authService.user$.subscribe(user => this.user = user);
  }

  ngOnInit(): void {
  }

}
