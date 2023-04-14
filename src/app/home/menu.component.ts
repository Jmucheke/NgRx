import { getCurrentUser } from './../user/state/users.selectors';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { State } from '../state/app.state';

import { AuthService } from '../user/auth.service';
import { User } from '../user/user';

@Component({
  selector: 'pm-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {
  pageTitle = 'Acme Product Management';
  user:User;

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  get userName(): string {
    if (this.authService.currentUser) {
      return this.authService.currentUser.userName;
    }
    return '';
  }

  constructor(private router: Router, private authService: AuthService, private store:Store<State>) { }

  ngOnInit() {
    this.store.select(getCurrentUser).subscribe(
      currentUser => this.user.userName = currentUser.userName
    )
    // console.log(this.user.userName);

  }

  logOut(): void {
    this.authService.logout();
    this.router.navigate(['/welcome']);
  }
}
