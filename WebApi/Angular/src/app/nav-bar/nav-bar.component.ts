import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterdetailService } from '../Services/registerdetail.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  public email = this.service.loginFormModel.value.Email;

  constructor(private router:Router,public service :RegisterdetailService) { }

  
  ngOnInit(): void {
  }
  isMenuOpen = true;
  contentMargin = 240;

  
  onToolbarMenuToggle() {
    console.log('On toolbar toggled', this.isMenuOpen);
    this.isMenuOpen = !this.isMenuOpen;

    if(!this.isMenuOpen) {
      this.contentMargin = 70;
    } else {
      this.contentMargin = 240;
    }
  }
  Logout()
  {
    localStorage.removeItem('username');
    this.router.navigate(['/login']);
  }
  showEmployee(){
    this.router.navigate(['/Menu/Employee']);
  }
}
