import { registerWebPlugin, WebPlugin } from '@capacitor/core';
import { CrashlyticsErrorOptions, CrashlyticsUserOptions, FirebaseCrashlyticsPlugin } from './definitions';

export class FirebaseCrashlyticsWeb extends WebPlugin implements FirebaseCrashlyticsPlugin {
  constructor() {
    super({
      name: 'FirebaseCrashlytics',
      platforms: ['web']
    });
  }

  async crash(): Promise<void> {
    console.warn("Crashlytics.crash is not implemented on web");
  }

  async logUser(options: CrashlyticsUserOptions): Promise<void> {
    console.warn("Crashlytics.logUser is not implemented on web");
    console.log(options);
  }

  async logError(options: CrashlyticsErrorOptions): Promise<void> {
    console.warn("Crashlytics.logError is not implemented on web");
    console.log(options);
  }
}

const FirebaseCrashlytics = new FirebaseCrashlyticsWeb();

export { FirebaseCrashlytics };

registerWebPlugin(FirebaseCrashlytics);
