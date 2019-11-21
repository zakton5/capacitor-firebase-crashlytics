package com.jsharpe.capacitorfirebasecrashlytics;

import android.Manifest;

import com.getcapacitor.JSObject;
import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;

import com.crashlytics.android.Crashlytics;

@NativePlugin(
    permissions = {
        Manifest.permission.ACCESS_NETWORK_STATE,
        Manifest.permission.INTERNET,
        Manifest.permission.WAKE_LOCK
    }
)
public class FirebaseCrashlytics extends Plugin {

     @PluginMethod()
     public void crash(PluginCall call) {
         Crashlytics.getInstance().crash();
     }

     @PluginMethod()
     public void logUser(PluginCall call) {
         String id = call.getString("id");
         String name = call.getString("name");
         String email = call.getString("email");

         if (id == null) {
             call.reject("missing id property");
         }

         if (name == null) {
             call.reject("missing name property");
         }

         if (email == null) {
             call.reject("missing email property");
         }

         Crashlytics.setUserIdentifier(id);
         Crashlytics.setUserEmail(email);
         Crashlytics.setUserName(name);

         call.success();
     }

     @PluginMethod()
     public void logError(PluginCall call) {
         String errorMessage = call.getString("error");
         String errorDomain = call.getString("domain");

         if (errorMessage == null) {
             call.reject("missing error property");
         }

         if (errorDomain == null) {
             call.reject("missing domain property");
         }

         Exception ex = new Exception(errorMessage);
         Crashlytics.logException(ex);

         call.success();
     }
}

