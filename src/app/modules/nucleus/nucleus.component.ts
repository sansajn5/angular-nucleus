import { Component, OnInit } from '@angular/core';
import { NbMenuService } from '@nebular/theme';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nucleus',
  templateUrl: './nucleus.component.html',
  styleUrls: ['./nucleus.component.scss']
})
export class NucleusComponent implements OnInit {

  protected menuItems: any[] = [];

  constructor(
    private nbMenuService: NbMenuService,
    private translateService: TranslateService,
  ) { }

  ngOnInit() {
    this.setupEventListener();
    this.setupMenu();
  }

  private setupEventListener() {
    this.nbMenuService.onItemClick()
    .subscribe((event) =>
      this.handleClicik(event.item))
  }

  private handleClicik(menuItem) {
    switch(menuItem.name) {
      case 'logout':
        localStorage.clear();
      break;
    }
  }

  private async setupMenu() {
    this.menuItems = 
      [
        {
          title: await this.translateService.get('MENU.PROFILE').toPromise(),
          expanded: false,
          children: [
            {
              title: await this.translateService.get('MENU.PROFILE_CHILDREN.INFO').toPromise(),
              link: 'profileInfo'
            },
            {
              title: await this.translateService.get('MENU.PROFILE_CHILDREN.CHANGE_PASSWORD').toPromise(),
              link: 'changePassword'
            },
            {
              title: await this.translateService.get('MENU.PROFILE_CHILDREN.DEACTIVE').toPromise(),
              link: 'deactiveAccount'
            }
          ],
          icon: 'nb-person',
        },
        {
          title: await this.translateService.get('MENU.CLIENTS').toPromise(),
          expanded: false,
          icon: 'ion-briefcase',
          children: [
            {
              title: await this.translateService.get('MENU.CLIENTS_CHILDREN.SHOW').toPromise(),
              name: 'cilents',
              icon: 'ion-folder',
              link: 'clients'
            },
            {
              title: await this.translateService.get('MENU.CLIENTS_CHILDREN.ADD').toPromise(),
              name: 'addClients',
              icon: 'ion-person-add',
              link: 'clients/new'
            }
          ],
        },
        {
          title: await this.translateService.get('MENU.USERS').toPromise(),
          name: 'users',
          icon: 'fas fa-users'
        },
        {
          title: await this.translateService.get('MENU.LOGOUT').toPromise(),
          icon: 'ion-log-out',
          name: 'logout'
        }
      ];
  }

}
