package com.freddon.android.app.kiwivmware.tools;

import android.content.Context;
import android.content.SharedPreferences;

import com.alibaba.fastjson.JSON;

import java.util.List;

/**
 * Created by fred on 2016/11/5.
 */

public class SPBase {

    private static SPBase _sPBase;
    private static SharedPreferences sharedPreferences;

    public static SPBase builder(Context context) {
        if (_sPBase == null) {
            _sPBase = new SPBase(context);
        }
        return _sPBase;
    }

    private SPBase(Context outContext) {
        sharedPreferences = outContext.getSharedPreferences(SPKey.APP_KIWIVPS, Context.MODE_PRIVATE);
    }

    public void putString(String key, String value) {
        synchronized (SharedPreferences.class) {
            sharedPreferences.edit().putString(key, value).apply();
        }
    }

    public String getString(String key, String defValue) {
        synchronized (SharedPreferences.class) {
            return sharedPreferences.getString(key, defValue);
        }
    }


    public boolean hasKey(String key) {
        synchronized (SharedPreferences.class) {
            return sharedPreferences.contains(key);
        }
    }


    public void clear(String key) {
        synchronized (SharedPreferences.class) {
            if (sharedPreferences.contains(key)) {
                sharedPreferences.edit().remove(key).apply();
            }
        }
    }

    public void clearAllInfo() {
        synchronized (SharedPreferences.class) {
            sharedPreferences.edit().clear().apply();
        }
    }


    public void putObject(String key, Object obj) {
        String toSave = JSON.toJSONString(obj);
        putString(key, toSave);
    }


    public <T> T getObject(String key, Class<T> clazz) {
        String temp = getString(key, null);
        if (temp == null || temp.trim().length() == 0) {
            return null;
        }
        return JSON.parseObject(temp, clazz);
    }

    public <T> List<T> getList(String key, Class<T> clazz) {
        String temp = getString(key, null);
        if (temp == null || temp.trim().length() == 0) {
            return null;
        }
        return JSON.parseArray(temp, clazz);
    }
}
