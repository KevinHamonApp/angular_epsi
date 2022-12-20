import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit{
  isLoggedIn: boolean = false;

  constructor(private userService: UserService){}

  ngOnInit(): void {
    this.userService.isLoggedIn().subscribe(
      (data) => this.isLoggedIn=data
    )
  }

}
