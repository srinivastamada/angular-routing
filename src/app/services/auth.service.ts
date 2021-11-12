import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() {}

  public isAuthenticated(): boolean {
    const userData: any = sessionStorage.getItem('userData') || null
    const userJsonData = JSON.parse(userData);
    console.log(userJsonData);
    if (userJsonData?.email) {
      return true;
    } else {
      return false;
    }
  }

  public getUserData(): any {
    const userData: any = sessionStorage.getItem('userData');
    return JSON.parse(userData);
  }

  public async login(postData: any) {
    const loginApiResponce = {
      email: postData.email,
      uid: 1,
      token: '2323523523DFSWERWERWER'
    };
    await sessionStorage.setItem('userData', JSON.stringify(loginApiResponce));
    return true;
  }

  public async logout() {
    await sessionStorage.removeItem('userData');
    await sessionStorage.clear();
    return true;
  }
}
