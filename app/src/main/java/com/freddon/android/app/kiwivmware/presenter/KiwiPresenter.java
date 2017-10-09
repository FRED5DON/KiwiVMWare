package com.freddon.android.app.kiwivmware.presenter;

import android.support.annotation.NonNull;

import com.freddon.android.app.kiwivmware.R;
import com.freddon.android.app.kiwivmware.agent.ApiHelper;
import com.freddon.android.app.kiwivmware.agent.App;
import com.freddon.android.app.kiwivmware.agent.RxJavaMiddleWare;
import com.freddon.android.app.kiwivmware.agent.RxJavaUtils;
import com.freddon.android.app.kiwivmware.config.VPSRecordMaker;
import com.freddon.android.app.kiwivmware.model.KiwiVPSRecord;
import com.freddon.android.app.kiwivmware.model.VPSInfo;
import com.freddon.android.app.kiwivmware.presenter.composer.IKiwiComposer;

import rx.Subscription;
import rx.functions.Action1;

/**
 * Created by fred on 2017/3/15.
 */

public class KiwiPresenter extends RxJavaMiddleWare<IKiwiComposer.View> implements IKiwiComposer.Presenter {


    public KiwiPresenter(@NonNull IKiwiComposer.View mView) {
        this.mView = mView;
        this.mView.setPresenter(this);
    }


    @Override
    public void getLiveServiceInfo() {
        //取上一次的veid与key 如果只有一个则默认选择
        KiwiVPSRecord vps = VPSRecordMaker.getChecked(App.getInstance());
        //如果没有 提示需要添加主机记录
        if (vps == null) {
            //显示添加按钮
            mView.error(App.getInstance().getResources().getString(R.string.err_no_vps_record));
        } else {
            requestApi_getLiveServiceInfo(vps);
        }
    }

    @Override
    public void restart() {
//取上一次的veid与key 如果只有一个则默认选择
        KiwiVPSRecord vps = VPSRecordMaker.getChecked(App.getInstance());
        //如果没有 提示需要添加主机记录
        if (vps == null) {
            //显示添加按钮
            mView.error(App.getInstance().getResources().getString(R.string.err_no_vps_record));
        } else {
            requestApi_restart(vps);
        }
    }

    @Override
    public void start() {
//取上一次的veid与key 如果只有一个则默认选择
        KiwiVPSRecord vps = VPSRecordMaker.getChecked(App.getInstance());
        //如果没有 提示需要添加主机记录
        if (vps == null) {
            //显示添加按钮
            mView.error(App.getInstance().getResources().getString(R.string.err_no_vps_record));
        } else {
            requestApi_start(vps);
        }
    }

    @Override
    public void stop() {
//取上一次的veid与key 如果只有一个则默认选择
        KiwiVPSRecord vps = VPSRecordMaker.getChecked(App.getInstance());
        //如果没有 提示需要添加主机记录
        if (vps == null) {
            //显示添加按钮
            mView.error(App.getInstance().getResources().getString(R.string.err_no_vps_record));
        } else {
            requestApi_stop(vps);
        }
    }

    // region : @fred  [2017/3/15]

    private void requestApi_getLiveServiceInfo(final KiwiVPSRecord vps) {
        mView.loading(true);
        Subscription rxSubscription = ApiHelper.getKiwiApi().getLiveServiceInfo(vps.getVeid(), vps.getApiKey())
                .compose(RxJavaUtils.<VPSInfo>schedulerHelper())
                .compose(RxJavaUtils.<VPSInfo>handleHttpResult())
                .subscribe(new Action1<VPSInfo>() {
                    @Override
                    public void call(VPSInfo vpsInfo) {
                        mView.loading(false);
                        vpsInfo.setVpsId(vps.getVeid());
                        mView.on_getLiveServiceInfo(vpsInfo);
                        mView.error(vpsInfo.getMessage());
                    }
                }, new Action1<Throwable>() {
                    @Override
                    public void call(Throwable throwable) {
                        mView.error(App.getInstance().getResources().getString(R.string.internet_error));
                        mView.loading(false);
                    }
                });
        subscribe(rxSubscription);
    }

    private void requestApi_start(final KiwiVPSRecord vps) {
        mView.loading(true);
        Subscription rxSubscription = ApiHelper.getKiwiApi().start(vps.getVeid(), vps.getApiKey())
                .compose(RxJavaUtils.<VPSInfo>schedulerHelper())
                .compose(RxJavaUtils.<VPSInfo>handleHttpResult())
                .subscribe(new Action1<VPSInfo>() {
                    @Override
                    public void call(VPSInfo vpsInfo) {
                        if ("0".equals(vpsInfo.getError())) {
                            mView.error(App.getInstance().getResources().getString(R.string.operation_success));
                            getLiveServiceInfo();
                        } else {
                            mView.loading(false);
                            mView.error(App.getInstance().getResources().getString(R.string.operation_failure) + "：" + vpsInfo.getMessage());
                        }
                    }
                }, new Action1<Throwable>() {
                    @Override
                    public void call(Throwable throwable) {
                        mView.loading(false);
                        mView.error(App.getInstance().getResources().getString(R.string.internet_error));
                    }
                });
        subscribe(rxSubscription);
    }

    private void requestApi_stop(final KiwiVPSRecord vps) {
        mView.loading(true);
        Subscription rxSubscription = ApiHelper.getKiwiApi().stop(vps.getVeid(), vps.getApiKey())
                .compose(RxJavaUtils.<VPSInfo>schedulerHelper())
                .compose(RxJavaUtils.<VPSInfo>handleHttpResult())
                .subscribe(new Action1<VPSInfo>() {
                    @Override
                    public void call(VPSInfo vpsInfo) {
                        if ("0".equals(vpsInfo.getError())) {
                            mView.error(App.getInstance().getResources().getString(R.string.operation_success));
                            getLiveServiceInfo();
                        } else {
                            mView.loading(false);
                            mView.error(App.getInstance().getResources().getString(R.string.operation_failure) + "：" + vpsInfo.getMessage());
                        }
                    }
                }, new Action1<Throwable>() {
                    @Override
                    public void call(Throwable throwable) {
                        mView.loading(false);
                        mView.error(App.getInstance().getResources().getString(R.string.internet_error));
                    }
                });
        subscribe(rxSubscription);
    }

    private void requestApi_restart(final KiwiVPSRecord vps) {
        mView.loading(true);
        Subscription rxSubscription = ApiHelper.getKiwiApi().restart(vps.getVeid(), vps.getApiKey())
                .compose(RxJavaUtils.<VPSInfo>schedulerHelper())
                .compose(RxJavaUtils.<VPSInfo>handleHttpResult())
                .subscribe(new Action1<VPSInfo>() {
                    @Override
                    public void call(VPSInfo vpsInfo) {
                        if ("0".equals(vpsInfo.getError())) {
                            mView.error(App.getInstance().getResources().getString(R.string.operation_success));
                            getLiveServiceInfo();
                        } else {
                            mView.loading(false);
                            mView.error(App.getInstance().getResources().getString(R.string.operation_failure) + "：" + vpsInfo.getMessage());
                        }
                    }
                }, new Action1<Throwable>() {
                    @Override
                    public void call(Throwable throwable) {
                        mView.loading(false);
                        mView.error(App.getInstance().getResources().getString(R.string.internet_error));
                    }
                });
        subscribe(rxSubscription);
    }

    // endregion
}
