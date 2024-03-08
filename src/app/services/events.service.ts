import { Injectable } from '@angular/core';
import { Observable, Subject, filter, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  private subject = new Subject<any>();

  constructor() { }

  emitEvent(eventName: string, data?: any) {
    this.subject.next({ eventName, data });
  }

  on(eventName: string): Observable<any> {
    return this.subject.asObservable().pipe(
      filter(event => event.eventName === eventName),
      map(event => event.data)
    );
  }

}
