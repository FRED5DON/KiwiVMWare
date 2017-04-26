package com.freddon.android.app.kiwivmware.presenter;

import android.content.Context;
import android.support.annotation.NonNull;

import com.freddon.android.app.kiwivmware.R;
import com.freddon.android.app.kiwivmware.agent.ApiHelper;
import com.freddon.android.app.kiwivmware.agent.App;
import com.freddon.android.app.kiwivmware.agent.RxJavaMiddleWare;
import com.freddon.android.app.kiwivmware.agent.RxJavaUtils;
import com.freddon.android.app.kiwivmware.config.VPSRecordMaker;
import com.freddon.android.app.kiwivmware.model.KiwiResponse;
import com.freddon.android.app.kiwivmware.model.KiwiVPSRecord;
import com.freddon.android.app.kiwivmware.presenter.composer.IKiwiShellComposer;

import rx.Subscription;
import rx.functions.Action1;

/**
 * Created by fred on 2017/3/17.
 */

public class KiwiShellPresenter extends RxJavaMiddleWare<IKiwiShellComposer.View> implements IKiwiShellComposer.Presenter {

    public KiwiShellPresenter(@NonNull IKiwiShellComposer.View mView) {
        this.mView = mView;
        this.mView.setPresenter(this);
    }


    @Override
    public void execShellCmd(Context context, String cmd) {
        KiwiVPSRecord vps = VPSRecordMaker.getChecked(App.getInstance());
        //如果没有 提示需要添加主机记录
        if (vps==null){
            //显示添加按钮
            mView.error(App.getInstance().getResources().getString(R.string.err_no_vps_record));
        }else{
            requestApi_execShellCmd(vps,cmd);
        }
    }


    // region : @fred  [2017/3/15]

    private void requestApi_execShellCmd(final KiwiVPSRecord vps,String cmd) {
        mView.loading(true);
        Subscription rxSubscription = ApiHelper.getKiwiApi().basicShellExec(vps.getVeid(), vps.getApiKey(),cmd)
                .compose(RxJavaUtils.<KiwiResponse>schedulerHelper())
                .compose(RxJavaUtils.<KiwiResponse>handleHttpResult())
                .subscribe(new Action1<KiwiResponse>() {
                    @Override
                    public void call(KiwiResponse kiwiResponse) {
                        mView.onMessage(kiwiResponse);
                        mView.loading(false);
                    }
                }, new Action1<Throwable>() {
                    @Override
                    public void call(Throwable throwable) {
                        mView.loading(false);
                    }
                });
        subscribe(rxSubscription);
    }


    // endregion
}
