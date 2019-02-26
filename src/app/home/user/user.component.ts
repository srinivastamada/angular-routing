import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ValidateService } from './../../services/validate.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnDestroy {
  username: string;
  id: string;
  private sub: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private validateService: ValidateService,
    private router: Router
  ) {}

  ngOnInit() {
    this.sub = this.activatedRoute.paramMap.subscribe(params => {
      this.verifyUsername(params.get('username'));
      this.verifyID(params.get('id'));
    });
  }

  verifyUsername(data: string) {
    if (data && this.validateService.checkUsername(data)) {
      this.username = data;
    } else {
      this.router.navigate(['noPage']);
    }
  }

  verifyID(data: string) {
    if (data) {
      if (this.validateService.checkID(data)) {
        this.id = data;
      } else {
        this.router.navigate(['noPage']);
      }
    }
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
