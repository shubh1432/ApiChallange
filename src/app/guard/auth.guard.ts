import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from '../Services/users.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  isManagerLogIn : boolean = false;
  isUserLogin: boolean = false;

  constructor(private userService: UsersService, private router: Router){} 


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        
       if(this.isUserLogin == true && this.isManagerLogIn == false){
        return false;

       }else if(this.isUserLogin == false && this.isManagerLogIn == true){
        return true;
       }else{
        alert("Access Denied !!! ");
        this.router.navigate(['/datadashboard'])
        return false;
       }
    
  }
  
}
