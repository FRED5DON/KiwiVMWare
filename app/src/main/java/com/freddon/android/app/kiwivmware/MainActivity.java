package com.freddon.android.app.kiwivmware;

import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.support.v7.widget.Toolbar;
import android.view.View;

import com.freddon.android.app.extension.viewlibs.widget.LoadingDialog;
import com.freddon.android.app.kiwivmware.presenter.KiwiPresenter;
import com.freddon.android.app.kiwivmware.presenter.composer.IKiwiComposer;
import com.freddon.android.app.kiwivmware.ui.fragment.MainActivityFragment;

import butterknife.BindView;
import butterknife.ButterKnife;

public class MainActivity extends BaseActivity<IKiwiComposer.Presenter> {

    // Used to load the 'native-lib' library on application startup.
    static {
        System.loadLibrary("native-lib");
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        Toolbar toolbar = (Toolbar) findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);
        MainActivityFragment fragment = (MainActivityFragment) getSupportFragmentManager().findFragmentById(R.id.fragment);
        mPresenter = new KiwiPresenter(fragment);
        mPresenter.getLiveServiceInfo();
        LoadingDialog dialog= LoadingDialog.build("Loading...");
        dialog.setCancelable(true);
        dialog.show(getSupportFragmentManager(),this.getLocalClassName());
    }


    /**
     * A native method that is implemented by the 'native-lib' native library,
     * which is packaged with this application.
     */
    public native String stringFromJNI();
}
