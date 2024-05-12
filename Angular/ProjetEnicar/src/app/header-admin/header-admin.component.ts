import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.css']
})
export class HeaderAdminComponent implements OnInit {

  constructor(private router:Router, public toastr: ToastrService) { }

  ngOnInit(): void {
  }

  logOut() {
    localStorage.removeItem("username");
    localStorage.clear();
    this.toastr.warning("Vous êtes déconnecté");
    this.router.navigate(['/']);

  }

}
