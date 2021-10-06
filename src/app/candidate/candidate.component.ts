import { Component, OnInit } from '@angular/core';
import { AuthenticationService, UserService } from '../Login/services';
import { User } from '../_models';
@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css']
})
export class CandidateComponent implements OnInit {
  public currentUser: User;
  public user: User[];
  constructor(private authenticationService: AuthenticationService, private userService: UserService) { }

  ngOnInit(): void {
    this.currentUser = this.authenticationService.currentUserValue;
  }

}
