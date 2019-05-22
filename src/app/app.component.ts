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
    private swUpdate: SwUpdate
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
        // you can use this.ccService.getConfig() to do stuff...
      });
  }

  ngOnDestroy() {
    // unsubscribe to cookieconsent observables to prevent memory leaks
    this.popupCloseSubscription.unsubscribe();
    this.statusChangeSubscription.unsubscribe();
  }

}
