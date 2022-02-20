import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from 'app/seguranca/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( @Inject( AuthService ) private auth) { }

  ngOnInit() {
  }

  criarNovoAccessToken(){
    this.auth.obterNovoAccessToken();
  }

}
