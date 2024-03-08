import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { AppBarComponent } from './components/app-bar/app-bar.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { UtilService } from './services/util.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    AppBarComponent,
    SideBarComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'customer-asset-management-console-prototype';

  pageTitle: string = 'Dashboard';

  breakpoints: any = {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1540
  };

  constructor(
    private utilService: UtilService,
    private router: Router
  ) { }

  onPageChange(e: string) {
    this.pageTitle = e.replace(/-/g, ' ');
  }
  setPageHeader() {
    let path = this.router.url.split('/')[1];
    this.onPageChange(decodeURIComponent(path))
  }

  handleResize = (options: any) => {
    // if (window.innerWidth > this.breakpoints[item]) {
    //   //chart.setOption(options[item]);
    // }
  };

  ngOnInit(): void {
    this.utilService.changeTheme(document.body);
  }

}
