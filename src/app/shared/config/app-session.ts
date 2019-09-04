

import { ACLService } from '@delon/acl';
import { MenuService, _HttpClient } from '@delon/theme';
import { TokenService, JWTTokenModel } from '@delon/auth';

import { AppMenus } from '@shared/AppMenus';

import { URLConfig } from './host';
import { Injectable, Injector } from '@angular/core';

@Injectable()
export class AppSessionService {


  constructor(
    injector: Injector
  ) {

    this._ACLService = injector.get(ACLService);
    this.menuService = injector.get(MenuService);

    this.tokenService = injector.get(TokenService);

    this.http = injector.get(_HttpClient);

  }


  _ACLService: ACLService;
  menuService: MenuService;
  tokenService: TokenService;
  http: _HttpClient;
  user = {
    merchantId: "",
    merchantName: "",
    id: "",
    head: "",
    eid: "",
    eName: "",
    mobile: "",
    organizationsId: "",
    organizationsName: "",
    sex: "",
    roleId: "",
    roleName: "",
    isLocked: "",
    lockBeginTime: "",
    lockEndTime: "",
    registerTime: "",
    currentLoginIp: "",
    currentLoginTime: "",
    lastLoginIp: "",
    lastLoginTime: "",
    visibilityOrganizationsIds: "",
    positionIds: "",
    creatorId: "",
    creationTime: "",
    lastModifierId: "",
    lastModificationTime: "",
  };


  getUser(): any {
    return this.user;
  }

  getShownLoginName(): string {
    return this.user.eName;
  }



  getAccessToken(): string {
    return this.tokenService.get().token;
  }
  public clearToken() {
    this.tokenService.clear();
  }

  public clearAccessToken() {
    this.tokenService.set({

      token: null
    });
  }
  setAccessToken(tokenSrc) {
    return this.tokenService.set({
      // key: "access_token",
      token: tokenSrc
    });
  }

  init(): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {

      if (this.getAccessToken()) {

        this.initUserInfo(() => {
          resolve(true);
        }, err => {
          location.href = URLConfig.getInstance().APP_URL + '/#/account/login';
          // reject(err);
          resolve(true);
        });
        return;
      } else {
        resolve(true);
        location.href = URLConfig.getInstance().APP_URL + '/#/account/login';
      }

    });
  }

  public initUserInfo(finallyCallback: () => void, errCallback: (e) => void) {
    finallyCallback = finallyCallback || (() => { });

    errCallback = errCallback || ((e) => { });
    return this.http.post(
      URLConfig.getInstance().REGISTER_URL + "/api/services/app/Login/GetCurrentLoginUserInfoByUserId"
    ).subscribe
      (
        result => {

          this.user = result;

          this.menuService.clear();
          switch (result.roleName) {
            case '系统管理员':
              this._ACLService.setFull(true);
              this.menuService.add(AppMenus.Menus);
              break;
            case '管理员':
              this._ACLService.setRole([AppMenus.aclSys]);
              this.menuService.add(AppMenus.Menus);
              break;
            case '单位管理员':
              this._ACLService.setRole([AppMenus.orgManager]);
              this.menuService.add(AppMenus.Menus);
              break;
            case '大厅窗口受理':
              this._ACLService.setRole([AppMenus.aclOrg]);
              this.menuService.add(AppMenus.MenusOrg);
              break;
            case '业务审批负责人（主要领导）':
              this._ACLService.setRole([AppMenus.aclOrg]);
              this.menuService.add(AppMenus.MenusOrg);
              break;
            case '业务审批负责人（分管领导）':
              this._ACLService.setRole([AppMenus.aclOrg]);
              this.menuService.add(AppMenus.MenusOrg);
              break;
            case '业务审批负责人':
              this._ACLService.setRole([AppMenus.aclOrg]);
              this.menuService.add(AppMenus.MenusOrg);
              break;
            case '业务承办人':
              this._ACLService.setRole([AppMenus.aclOrg]);
              this.menuService.add(AppMenus.MenusOrg);
              break;
            case '窗口受理':
              this._ACLService.setRole([AppMenus.aclOrg]);
              this.menuService.add(AppMenus.MenusOrg);
              break;
            case '审批负责人':
              this._ACLService.setRole([AppMenus.aclOrg]);
              this.menuService.add(AppMenus.MenusOrg);
              break;
            case '备案抽查审批负责人':
              this._ACLService.setRole([AppMenus.aclOrg]);
              this.menuService.add(AppMenus.MenusOrg);
              break;
            case '业务审批负责人（局主要领导）':
              this._ACLService.setRole([AppMenus.aclOrg]);
              this.menuService.add(AppMenus.MenusOrg);
              break;
            case '业务审批负责人（股长）':
              this._ACLService.setRole([AppMenus.aclOrg]);
              this.menuService.add(AppMenus.MenusOrg);
              break;
            case '企业用户':
              this._ACLService.setRole([AppMenus.aclCompany]);
              this.menuService.add(AppMenus.MenusOrg);
              break;
            default:
              this._ACLService.setRole([AppMenus.aclCompany]);
              this.menuService.add(AppMenus.MenusOrg);

              break;
          }



          this.menuService.resume();


          finallyCallback();
        },
        err => {
          errCallback(err);


        }
      );
  }


}
