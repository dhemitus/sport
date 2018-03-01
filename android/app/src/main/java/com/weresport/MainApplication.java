package com.weresport;

import android.app.Application;
import android.content.Intent;
import android.support.annotation.NonNull;

import com.facebook.CallbackManager;
import com.facebook.appevents.AppEventsLogger;
import com.facebook.react.ReactApplication;
import com.imagepicker.ImagePickerPackage;
import com.facebook.reactnative.androidsdk.FBSDKPackage;
import com.wix.reactnativenotifications.RNNotificationsPackage;
import com.oblador.vectoricons.VectorIconsPackage;
//import com.reactnativenavigation.NavigationReactPackage;
import com.airbnb.android.react.maps.MapsPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.reactnativenavigation.controllers.ActivityCallbacks;
import com.facebook.FacebookSdk;

import java.util.Arrays;
import java.util.List;

import com.reactnativenavigation.NavigationApplication;
import com.wix.reactnativenotifications.RNNotificationsPackage;

//public class MainApplication extends Application implements ReactApplication {
public class MainApplication extends NavigationApplication {
/*  private static CallbackManager mCallbackManager = CallbackManager.Factory.create();

  protected static CallbackManager getCallbackManager() {
    return mCallbackManager;
  }*/

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

//    @NonNull
    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
          new ImagePickerPackage(),
//          new FBSDKPackage(mCallbackManager),
          new VectorIconsPackage(),
          new RNNotificationsPackage(MainApplication.this),
          new MapsPackage()
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
/*    setActivityCallbacks(new ActivityCallbacks() {
        @Override
        public void onActivityResult(int requestCode, int resultCode, Intent data) {
            mCallbackManager.onActivityResult(requestCode, resultCode, data);
        }
    });
    FacebookSdk.sdkInitialize(getApplicationContext());*/
    SoLoader.init(this, /* native exopackage */ false);
  }

  @Override
  public boolean isDebug() {
      // Make sure you are using BuildConfig from your own application
      return BuildConfig.DEBUG;
  }

  protected List<ReactPackage> getPackages() {
      // Add additional packages you require here
      // No need to add RnnPackage and MainReactPackage
      return Arrays.<ReactPackage>asList(
        new MainReactPackage(),
//        new FBSDKPackage(mCallbackManager),
        new ImagePickerPackage(),
        new VectorIconsPackage(),
//        new RNNotificationsPackage(MainApplication.this),
        new MapsPackage()
      );
  }

  //@NonNull
  @Override
  public List<ReactPackage> createAdditionalReactPackages() {
      return getPackages();
  }

  @Override
  public String getJSMainModuleName() {
      return "index";
  }
}