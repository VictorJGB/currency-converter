import { Component, OnInit } from '@angular/core';

import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'angular-icon',
  templateUrl: './angular-icon.component.html',
  styleUrls: ['./angular-icon.component.scss'],
})
export class AngularIconComponent implements OnInit {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'angularjs',
      sanitizer.bypassSecurityTrustResourceUrl(
        '../../../assets/svg/angularjs.svg'
      )
    );
  }

  ngOnInit() {}
}
