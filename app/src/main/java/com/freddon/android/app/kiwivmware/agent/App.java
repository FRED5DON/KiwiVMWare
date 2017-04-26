package com.freddon.android.app.kiwivmware.agent;

import android.support.multidex.MultiDexApplication;

/**
 * Created by fred on 2017/3/15.
 */

public class App extends MultiDexApplication {

    @Override
    public void onCreate() {
        super.onCreate();
        _app = this;
    }


    private static App _app;

    public static App getInstance() {
        return _app;
    }
}
