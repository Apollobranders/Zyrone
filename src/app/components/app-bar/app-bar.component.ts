import { AsyncPipe, CommonModule, Location } from '@angular/common';
import { AfterViewInit, Component, Input, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { DarkLightThemeComponent } from './dark-light-theme/dark-light-theme.component';
import { ProfileComponent } from './profile/profile.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UtilService } from '../../services/util.service';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable, filter, map, startWith } from 'rxjs';
import { ActivatedRoute, NavigationEnd, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-app-bar',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatCheckboxModule,
    AsyncPipe,
    RouterModule,
    DarkLightThemeComponent,
    NotificationsComponent,
    ProfileComponent,
  ],
  templateUrl: './app-bar.component.html',
  styleUrl: './app-bar.component.scss'
})
export class AppBarComponent implements OnInit, AfterViewInit {

  @Input() title = '';
  pageTitle = '';
  control = new FormControl('');
  streets: string[] = ['Ahmedabad', 'Ahmedabad', 'Ahmedabad', 'Ahmedabad'];
  filteredStreets!: Observable<string[]>;
  assetDetailID: any;


  constructor(
    private utilService: UtilService,
    public router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) {

  }

  ngOnInit() {

    this.filteredStreets = this.control.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  ngOnChanges(change: SimpleChanges){
    if(change['title']) {
      this.pageTitle = this.title;
      if(this.router.url.match(/\/assets\/detail\/(.*)/)) {
        this.pageTitle = 'Asset Detail';
      }
      if(this.router.url == '/services/book-service') {
        this.pageTitle = 'Book Service';
      }
      if(this.router.url == '/services/cart') {
        this.pageTitle = 'cart';
      }
    }
  }

  ngAfterViewInit(): void {
    this.handleNavbarVerticalCollapsed();
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
  )
      .subscribe((e: any) => {

        if(e.url == '/assets/card-view') {
          this.pageTitle = 'assets';
        }

        if(e.url.match(/\/assets\/detail\/(.*)/)){
          this.pageTitle = 'Asset Detail';
          let parts = e.url.split('/');
          this.assetDetailID = parts[parts.length - 1];
        }

        if(e.url == '/services/book-service') {
          this.pageTitle = 'Book Service';
        }
        if(this.router.url == '/services/cart') {
          this.pageTitle = 'cart';
        }

      });
  }

  private _filter(value: string): string[] {
    const filterValue = this._normalizeValue(value);
    return this.streets.filter(street => this._normalizeValue(street).includes(filterValue));
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }

  handleNavbarVerticalCollapsed = () => {

    const { getItemFromStore, setItemToStore, resize } = this.utilService;
    const Selector = {
      HTML: 'html',
      BODY: 'body',
      NAVBAR_VERTICAL: '.navbar-vertical',
      NAVBAR_VERTICAL_TOGGLE: '.navbar-vertical-toggle',
      NAVBAR_VERTICAL_COLLAPSE: '.navbar-vertical .navbar-collapse',
      ACTIVE_NAV_LINK: '.navbar-vertical .nav-link.active'
    };

    const Events = {
      CLICK: 'click',
      MOUSE_OVER: 'mouseover',
      MOUSE_LEAVE: 'mouseleave',
      NAVBAR_VERTICAL_TOGGLE: 'navbar.vertical.toggle'
    };
    const ClassNames = {
      NAVBAR_VERTICAL_COLLAPSED: 'navbar-vertical-collapsed'
    };
    const navbarVerticalToggle = document.querySelector(
      Selector.NAVBAR_VERTICAL_TOGGLE
    ) as HTMLDivElement;
    // const html = document.querySelector(Selector.HTML);
    const navbarVerticalCollapse = document.querySelector(
      Selector.NAVBAR_VERTICAL_COLLAPSE
    );
    const activeNavLinkItem = document.querySelector(Selector.ACTIVE_NAV_LINK);
    const isNavbarVerticalCollapsed = getItemFromStore(
      'isNavbarVerticalCollapsed',
      ''
    );
    if (navbarVerticalToggle) {
      navbarVerticalToggle.addEventListener(Events.CLICK, e => {
        navbarVerticalToggle.blur();
        document.documentElement.classList.toggle(
          ClassNames.NAVBAR_VERTICAL_COLLAPSED
        );

        // Set collapse state on localStorage
        setItemToStore(
          'isNavbarVerticalCollapsed',
          !isNavbarVerticalCollapsed
        );

        const event = new CustomEvent(Events.NAVBAR_VERTICAL_TOGGLE);
        e.currentTarget?.dispatchEvent(event);
      });
    }
    if (navbarVerticalCollapse) {
      if (activeNavLinkItem && !isNavbarVerticalCollapsed) {
        activeNavLinkItem.scrollIntoView({ behavior: 'smooth' });
      }
    }
    const setDocumentMinHeight = () => {
      const bodyHeight: any = document.querySelector(Selector.BODY);
      const navbarVerticalHeight: any = document.querySelector(
        Selector.NAVBAR_VERTICAL
      );

      if (
        document.documentElement.classList.contains(
          ClassNames.NAVBAR_VERTICAL_COLLAPSED
        ) &&
        (bodyHeight.offsetHeight) < navbarVerticalHeight.offsetHeight
      ) {
        document.documentElement.style.minHeight = `${navbarVerticalHeight}px`;
      } else {
        document.documentElement.removeAttribute('style');
      }
    };

    // set document min height for collapse vertical nav
    setDocumentMinHeight();
    resize(() => {
      setDocumentMinHeight();
    });
    if (navbarVerticalToggle) {
      navbarVerticalToggle.addEventListener('navbar.vertical.toggle', () => {
        setDocumentMinHeight();
      });
    }
  };

  goBack(): void {
    this.location.back();
  }

}
