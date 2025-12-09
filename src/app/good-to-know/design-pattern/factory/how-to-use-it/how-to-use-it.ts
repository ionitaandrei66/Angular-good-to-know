import {Component} from "@angular/core";
import {NotificationFactoryService} from "../factory-service/factory-service";
import {NotificationType} from "../models/common-interface-service.model";

// @Component()
export class SettingsComponent {
  constructor(
    private readonly notificationFactory: NotificationFactoryService
  ) {}

  notifyUser(): void {
    const channel = this.notificationFactory.getChannel(NotificationType.EMAIL);

    channel.send('Profile updated successfully').subscribe();
  }
}
