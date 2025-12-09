import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";
import {NotificationChannel} from "./models/common-interface-service.model";

@Injectable()
export class EmailNotificationService implements NotificationChannel {
  send(message: string): Observable<void> {
    console.log('Sending EMAIL:', message);
    return of(void 0);
  }
}

@Injectable()
export class SmsNotificationService implements NotificationChannel {
  send(message: string): Observable<void> {
    console.log('Sending SMS:', message);
    return of(void 0);
  }
}

@Injectable()
export class PushNotificationService implements NotificationChannel {
  send(message: string): Observable<void> {
    console.log('Sending PUSH:', message);
    return of(void 0);
  }
}
