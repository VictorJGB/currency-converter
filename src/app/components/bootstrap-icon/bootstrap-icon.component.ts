import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'bootstrap-icon',
  templateUrl: './bootstrap-icon.component.html',
  styleUrls: ['./bootstrap-icon.component.scss'],
})
export class BootstrapIconComponent implements OnInit {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'bootstrap',
      sanitizer.bypassSecurityTrustResourceUrl(
        '../../../assets/svg/bootstrap.svg'
      )
    );
  }

  ngOnInit() {}
}
