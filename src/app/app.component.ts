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
import {UtilService} from './services/util.service';
import {environment} from '../environments/environment';
import {
  NgcCookieConsentService,
  NgcStatusChangeEvent
} from 'ngx-cookieconsent';
import {Subscription} from 'rxjs';
import {SwUpdate} from '@angular/service-worker';
import {PartnerConfig} from './classes/partner.config';
import {LoopBackConfig} from '@md-app/md-core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  private _isLoader: boolean;

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
    // LoopBackConfig.setBaseURL(environment.apiUrl);
    //
    // const mesDocteurs: any = environment.mesDocteurs;
    //
    // PartnerConfig.setId(mesDocteurs.id);
    // PartnerConfig.setImagePath(environment.commonImagePath + environment.partnerImagePath + mesDocteurs.imagePath + '/');
    // PartnerConfig.setLogo(mesDocteurs.logo ? mesDocteurs.logo : null);
    // PartnerConfig.setLabel(mesDocteurs.label ? mesDocteurs.label : null);
    // PartnerConfig.setIsTeleconsult(mesDocteurs.isTeleconsult ? mesDocteurs.isTeleconsult : null);
    // PartnerConfig.setHasCode(mesDocteurs.hasCode ? mesDocteurs.hasCode : null);
    // PartnerConfig.setCanRegister(mesDocteurs.canRegister ? mesDocteurs.canRegister : null);
    // PartnerConfig.setUrl(mesDocteurs.url ? mesDocteurs.url : null);

    // this.router.events.subscribe(
    //   (event: RouterEvent) => {
    //     if (event instanceof NavigationStart) {
    //       this._isLoader = true;
    //     }
    //     if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError
    //       || GuardsCheckEnd) {
    //       this._isLoader = false;
    //       if (event instanceof NavigationEnd) {
    //         window.scrollTo(0, 0);
    //       }
    //     }
    //   }
    );

    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(event => {
        // console.log('current version is', event.current);
        // console.log('available version is', event.available);
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

  public get isLoader(): boolean {
    return this._isLoader;
  }
}
