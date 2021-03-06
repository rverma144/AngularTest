import { Component } from '@angular/core';
import { NgxPendoService } from 'ngx-pendo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private ngxPendoService: NgxPendoService) {
    this.test()
  }

  private test() {
    this.ngxPendoService.initialize({
      id: '1234',
      name: 'test1234'
    }, {
      id: '1234'
    });
  }

}



/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
