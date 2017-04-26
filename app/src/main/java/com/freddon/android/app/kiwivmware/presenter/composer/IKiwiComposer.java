package com.freddon.android.app.kiwivmware.presenter.composer;

import com.freddon.android.app.kiwivmware.model.VPSInfo;

/**
 * Created by fred on 2017/3/15.
 */
public interface IKiwiComposer {


    //    显示层回调
    interface View extends IBaseView<Presenter> {

        void on_getLiveServiceInfo(VPSInfo vpsInfo);

        void on_stop();

        void on_restart();

        void on_start();

    }


    //    保持层
    interface Presenter extends IBasePresenter<View> {
        //接口服务

        void getLiveServiceInfo();

        void restart();

        void start();

        void stop();

    }
}
