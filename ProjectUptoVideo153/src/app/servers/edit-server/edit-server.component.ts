import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CanComponentDeactivateService } from './can-component-deactivate.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanComponentDeactivateService {
  server: { id: number, name: string, status: string };
  serverName = '';
  serverStatus = '';
  allowToEdit: boolean = false;
  changesSaved: boolean = false;

  constructor(private serversService: ServersService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.activatedRoute.snapshot.fragment;
    this.activatedRoute.fragment.subscribe;

    this.activatedRoute.params.subscribe((params: Params) => {
      this.server = this.serversService.getServer(+params['id']);
    });

    this.serverName = this.server.name;
    this.serverStatus = this.server.status;

    this.activatedRoute.queryParams.subscribe((queryParams: Params) => {
      this.allowToEdit = queryParams['allowToEdit'] === '1' ? true : false;
      console.log(queryParams['allowToEdit'] + ' this.allowToEdit: ' + this.allowToEdit);
    });

  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, { name: this.serverName, status: this.serverStatus });
    this.changesSaved = true;
    this.router.navigate(['../'], { relativeTo: this.activatedRoute });
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.allowToEdit) {
      return true;
    }

    if ((this.serverName !== this.server.name || this.serverStatus !== this.server.status)
      && !this.changesSaved) {
      confirm("Do you want to discard the changes?");
    } else {
      return true;
    }

  }
}
