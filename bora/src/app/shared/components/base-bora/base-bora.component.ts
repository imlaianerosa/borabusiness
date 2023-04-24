import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-base-bora',
  templateUrl: './base-bora.component.html',
  styleUrls: ['./base-bora.component.scss']
})
export class BaseBoraComponent {
  public ngUnsubscribe$ = new Subject<void>();


  public onDestroy(){
    this.ngUnsubscribe$.next();
    this.ngUnsubscribe$.complete();
  }
}
