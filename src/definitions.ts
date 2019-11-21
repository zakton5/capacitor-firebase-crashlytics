declare module "@capacitor/core" {
  interface PluginRegistry {
    FirebaseCrashlytics: FirebaseCrashlyticsPlugin;
  }
}

export type CrashlyticsUserOptions = {
  email: string;
  id: string;
  name: string;
};

export type CrashlyticsErrorOptions = {
  /** The error message associated with this event */
  error: string;
  /** The error domain used to group events in Crashlytics */
  domain: string;
};

export interface FirebaseCrashlyticsPlugin {
  crash(): Promise<void>;
  logUser(options: CrashlyticsUserOptions): Promise<void>;
  logError(options: CrashlyticsErrorOptions): Promise<void>;
}
