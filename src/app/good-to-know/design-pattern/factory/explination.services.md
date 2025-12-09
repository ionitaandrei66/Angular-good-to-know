Factory pattern in Angular
We use a NotificationFactoryService as a factory that encapsulates the creation and selection of notification handlers. The factory receives all concrete implementations through Angular DI (Email, SMS, Push), registers them in an internal map keyed by NotificationType, and exposes a getChannel(type) method.

Client code depends only on the NotificationChannel interface and the NotificationType enum, not on the concrete services, which improves decoupling and makes it easy to add new notification channels without touching all consumers.
