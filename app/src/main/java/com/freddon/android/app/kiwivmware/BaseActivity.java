package com.freddon.android.app.kiwivmware;

import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;

import com.freddon.android.app.kiwivmware.presenter.composer.IBasePresenter;

public class BaseActivity<T extends IBasePresenter> extends AppCompatActivity {

    protected T mPresenter;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
    }


    @Override
    protected void onDestroy() {
        super.onDestroy();
        mPresenter=null;
    }
}
