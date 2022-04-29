import { Component, OnInit ,Output , EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();


  constructor(
    private auth: AuthService,
    private route: Router,
  ) { }

  ngOnInit(): void {
  }

  toggleSideBar() {
    this.toggleSideBarForMe.emit();
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }

  logout(){
    this.auth.Logout().subscribe(success=>{
      localStorage.clear();
      this.route.navigate(['/logout']).then(x=>{window.location.reload();});
    }, err=>console.log(err) );
  }

}
