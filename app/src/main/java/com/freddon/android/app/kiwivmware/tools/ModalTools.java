package com.freddon.android.app.kiwivmware.tools;

import android.content.Context;
import android.support.annotation.NonNull;
import android.support.design.widget.Snackbar;
import android.view.View;
import android.widget.Toast;

/**
 * Created by fred on 2016/11/2.
 */

public class ModalTools {

    public static void showToast(Context context, String content) {
        Toast.makeText(context, content, Toast.LENGTH_SHORT).show();
    }

    public static void showToast(Context context, int res) {
        Toast.makeText(context, res, Toast.LENGTH_SHORT).show();
    }

    public static void showSnackbar(View view, String msg) {
        Snackbar.make(view, msg, Snackbar.LENGTH_SHORT).show();
    }

    public static void showSnackbar(View view, String msg, @NonNull String action, @NonNull View.OnClickListener clickListener) {
        Snackbar.make(view, msg, Snackbar.LENGTH_LONG).setAction(action, clickListener).show();
    }

    public static void showSnackbar(View view, int res) {
        Snackbar.make(view, res, Snackbar.LENGTH_SHORT).show();
    }

}
