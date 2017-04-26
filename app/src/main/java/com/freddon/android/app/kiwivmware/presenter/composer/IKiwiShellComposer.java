package com.freddon.android.app.kiwivmware.presenter.composer;

import android.content.Context;

import com.freddon.android.app.kiwivmware.model.KiwiResponse;

/**
 * Created by fred on 2017/3/15.
 */
public interface IKiwiShellComposer {


    //    显示层回调
    interface View extends IBaseView<Presenter> {
        void onMessage(KiwiResponse kiwiResponse);
    }


    //    保持层
    interface Presenter extends IBasePresenter<View> {
        //接口服务
        void execShellCmd(Context context,String cmd);
    }
}
