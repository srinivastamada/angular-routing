import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {
  constructor() {}

  checkUsername(data: string) {
    const pattern = /^[a-zA-Z0-9]{3,25}$/i;
    return pattern.test(data);
  }

  checkID(id: string) {
    const pattern = /^[0-9]$/i;
    return pattern.test(id);
  }
}
