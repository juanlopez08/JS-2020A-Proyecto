import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from "@angular/router";
import {AuthService} from "../auth/auth.service";
import {Observable} from "rxjs";


@Injectable()
export class EsAdminGuard implements CanActivate{

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
    const esAdmin = this._authService.usuarioAutenticado.usuarioTieneRoles[0].rol
    const rolAdmin = 1
    if(esAdmin === rolAdmin){
      return true
    }else{
      if(esAdmin === 2){
      return false
      }
    }
      // .some(
      //   (rol)=>{
      //     return rol === 'admin'
      //   }
      // )
    // console.log('EsADMIN',esAdmin)
    // return esAdmin;
  }

}
