import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from "@angular/router";
import {AuthService} from "../auth/auth.service";
import {Observable} from "rxjs";


@Injectable()
export class EstaLogeadoGuard implements CanActivate{

  constructor(
    private readonly _authService:AuthService
  ) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean |
    UrlTree {
    //LOGICA BOOLEAN
    if(this._authService.estaAutenticado){
      return true
    }else{
      return false;
    }
  }

}
