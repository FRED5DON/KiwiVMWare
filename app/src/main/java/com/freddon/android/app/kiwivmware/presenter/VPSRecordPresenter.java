package com.freddon.android.app.kiwivmware.presenter;

import android.content.Context;
import android.support.annotation.NonNull;

import com.freddon.android.app.kiwivmware.agent.RxJavaMiddleWare;
import com.freddon.android.app.kiwivmware.config.VPSRecordMaker;
import com.freddon.android.app.kiwivmware.presenter.composer.IVPSRecordComposer;

/**
 * Created by fred on 2017/3/17.
 */

public class VPSRecordPresenter extends RxJavaMiddleWare<IVPSRecordComposer.View> implements IVPSRecordComposer.Presenter {

    public VPSRecordPresenter(@NonNull IVPSRecordComposer.View mView) {
        this.mView = mView;
        this.mView.setPresenter(this);
    }


    @Override
    public void getVpsRecords(Context context) {
        this.mView.on_getVpsRecords(VPSRecordMaker.all(context));
    }
}
