import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'github-icon',
  templateUrl: './github-icon.component.html',
  styleUrls: ['./github-icon.component.scss'],
})
export class GithubIconComponent implements OnInit {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'github',
      sanitizer.bypassSecurityTrustResourceUrl('../../../assets/svg/github.svg')
    );
  }

  ngOnInit() {}
}
