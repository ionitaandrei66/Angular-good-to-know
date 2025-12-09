import {Observable} from "rxjs";

export interface NotificationChannel {
  send(message: string): Observable<void>;
}

export enum NotificationType {
  EMAIL = 'EMAIL',
  SMS = 'SMS',
  PUSH = 'PUSH',
}
