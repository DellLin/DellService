import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Line',
                items: [
                    // { label: 'LineNotify', icon: 'pi pi-fw pi-comment', routerLink: ['/main/line/line-notify'] },
                    { label: 'LineBot', icon: 'pi pi-fw pi-comment', routerLink: ['/main/line/line-bot'] }
                ]
            },
            {
                label: 'Ptt',
                items: [
                    { label: 'Spider', icon: 'pi pi-fw pi-comment', routerLink: ['/main/ptt/search-rule'] },
                    { label: 'Match', icon: 'pi pi-fw pi-comment', routerLink: ['/main/ptt/match-history'] }
                ]
            },
        ];
    }
}
