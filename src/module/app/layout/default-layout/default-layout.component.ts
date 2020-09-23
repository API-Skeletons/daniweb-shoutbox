import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/auth/auth.service';

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss']
})
export class DefaultLayoutComponent implements OnInit {
  public user: any;

  constructor(
    private authService: AuthService
  ) {
    this.authService.user$.subscribe(user => this.user = user);
  }

  ngOnInit(): void {
  }

}
