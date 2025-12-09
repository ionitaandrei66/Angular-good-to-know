import {Injectable} from "@angular/core";
import {NotificationChannel, NotificationType} from "../models/common-interface-service.model";
import {EmailNotificationService, PushNotificationService, SmsNotificationService} from "../servicies";

@Injectable({ providedIn: 'root' })
export class NotificationFactoryService {
  private handlers: Map<NotificationType, NotificationChannel>;

  constructor(
    email: EmailNotificationService,
    sms: SmsNotificationService,
    push: PushNotificationService
  ) {
    this.handlers = new Map<NotificationType, NotificationChannel>([
      [NotificationType.EMAIL, email],
      [NotificationType.SMS, sms],
      [NotificationType.PUSH, push],
    ]);
  }

  public getChannel(type: NotificationType): NotificationChannel {
    const handler = this.handlers.get(type);

    if (!handler) {
      throw new Error(`No notification handler registered for type: ${type}`);
    }

    return handler;
  }
}
