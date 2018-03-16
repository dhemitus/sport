package com.weresport;

import android.content.Intent;
import android.os.Bundle;
//import com.facebook.react.ReactActivity;
import com.reactnativenavigation.controllers.SplashActivity;

import com.facebook.CallbackManager;
import com.facebook.FacebookSdk;
import com.facebook.reactnative.androidsdk.FBSDKPackage;

import android.content.Intent;
import android.support.v4.content.ContextCompat;
import android.widget.LinearLayout;
import android.graphics.Color;
//import android.widget.TextView;
import android.view.Gravity;
import android.widget.ImageView;
//import android.util.TypedValue;
//public class MainActivity extends ReactActivity {
public class MainActivity extends SplashActivity {

    CallbackManager mCallbackManager;

    @Override
    public LinearLayout createSplashLayout() {
        LinearLayout view = new LinearLayout(this);
        ImageView imageView = new ImageView(this);
//        TextView textView = new TextView(this);

        view.setBackgroundColor(Color.parseColor("#222222"));
        view.setGravity(Gravity.CENTER);

        LinearLayout.LayoutParams layoutParams = new LinearLayout.LayoutParams(565, 190);
        layoutParams.gravity = Gravity.CENTER;
        imageView.setLayoutParams(layoutParams);
        imageView.setImageDrawable(ContextCompat.getDrawable(this.getApplicationContext(), R.drawable.logo));
        view.addView(imageView);
        return view;
    }

    @Override
    public void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        MainApplication.getCallbackManager().onActivityResult(requestCode, resultCode, data);
    }

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
//    @Override
  protected String getMainComponentName() {
      return "WeReSport";
  }
}
