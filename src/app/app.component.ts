import {Component, OnDestroy, OnInit} from '@angular/core';
import {
  ActivatedRoute,
  GuardsCheckEnd,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
  RouterEvent
} from '@angular/router';
import {
  NgcCookieConsentService,
  NgcStatusChangeEvent
} from 'ngx-cookieconsent';
import {Subscription} from 'rxjs';
import {SwUpdate} from '@angular/service-worker';
import {LoopBackConfig, MdConfig} from '@md-app/md-core';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'md-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  isLoader: boolean;

  private popupCloseSubscription: Subscription;
  private statusChangeSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ccService: NgcCookieConsentService,
    private swUpdate: SwUpdate,
    private cookieService: CookieService
  ) {
  }

  ngOnInit() {
    LoopBackConfig.setBaseURL(MdConfig.getApiUrl());

    this.router.events.subscribe(
      (event: RouterEvent) => {
        if (event instanceof NavigationStart) {
          this.isLoader = true;
        }
        if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError
          || GuardsCheckEnd) {
          this.isLoader = false;
          if (event instanceof NavigationEnd) {
            window.scrollTo(0, 0);
          }
        }
      }
    );

    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(event => {
        if (confirm('Une nouvelle version est disponible, recharger ?')) {
          window.location.reload();
        }
      });

      this.swUpdate.activated.subscribe(event => {
        // console.log('old version was', event.previous);
        // console.log('new version is', event.current);
      });
    }

    this.popupCloseSubscription = this.ccService.popupClose$.subscribe();

    this.statusChangeSubscription = this.ccService.statusChange$.subscribe(
      (event: NgcStatusChangeEvent) => {
        this._initScriptGTM();
      });

    if (this.cookieService.get('cookieconsent_status') === 'dismiss') {
      this._initScriptGTM();
    }
  }

  ngOnDestroy() {
    // unsubscribe to cookieconsent observables to prevent memory leaks
    this.popupCloseSubscription.unsubscribe();
    this.statusChangeSubscription.unsubscribe();
  }

  private _initScriptGTM() {
    const script = document.createElement('script');
    script.innerHTML = `
      (function(w,d,s,l,i){
        w[l]=w[l]||[];
        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
        var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
        j.async=true;
        j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl+'&gtm_auth=CHyi_tm3HjTxZmw_1duiAg&gtm_preview=env-126&gtm_cookies_win=x';
        f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-TJL4LWV');
    `;
    document.head.appendChild(script);
  }
}
