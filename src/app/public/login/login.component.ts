import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  constructor(private userService: UserService, private router: Router){}
  
  ngOnInit(): void {
    this.userService.isLoggedIn().subscribe(
      (data) => {
        if(data){
          this.router.navigateByUrl('/admin')
        }
      }
    )
  }

  onSubmit(credentials: any){
    
    this.userService.login(credentials).subscribe({
      next: (data) => {
        
        localStorage.setItem('token', data['access_token'])
        this.router.navigateByUrl('/admin')
      }, 
      error: (error) => {
        console.log(error)
        alert("Authentification failed. Please check your credentials.")
      }
  })
  }
}
