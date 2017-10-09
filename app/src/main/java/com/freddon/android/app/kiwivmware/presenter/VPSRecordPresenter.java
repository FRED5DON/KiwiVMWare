package com.freddon.android.app.kiwivmware.presenter;

import android.content.Context;
import android.support.annotation.NonNull;

import com.freddon.android.app.kiwivmware.agent.RxEventBus;
import com.freddon.android.app.kiwivmware.agent.RxJavaMiddleWare;
import com.freddon.android.app.kiwivmware.config.VPSRecordMaker;
import com.freddon.android.app.kiwivmware.model.KiwiVPSRecord;
import com.freddon.android.app.kiwivmware.presenter.composer.IVPSRecordComposer;

import rx.Subscription;
import rx.functions.Action1;

/**
 * Created by fred on 2017/3/17.
 */

public class VPSRecordPresenter extends RxJavaMiddleWare<IVPSRecordComposer.View> implements IVPSRecordComposer.Presenter {

    private Subscription atomKiwiVPSRecord;

    public VPSRecordPresenter(@NonNull final IVPSRecordComposer.View mView) {
        this.mView = mView;
        this.mView.setPresenter(this);
        atomKiwiVPSRecord=RxEventBus.subscribeEvent(KiwiVPSRecord.class, new Action1<KiwiVPSRecord>() {
            @Override
            public void call(KiwiVPSRecord kiwiVPSRecord) {
                mView.refresh();
            }
        }, new Action1<Throwable>() {
            @Override
            public void call(Throwable throwable) {

            }
        });
    }


    @Override
    public void detachView() {
        super.detachView();
        RxEventBus.unsubscribeEvent(atomKiwiVPSRecord);
    }

    @Override
    public void getVpsRecords(Context context) {
        this.mView.on_getVpsRecords(VPSRecordMaker.all(context));
    }
}
