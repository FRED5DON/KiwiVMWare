package com.freddon.android.app.kiwivmware.presenter.composer;

import android.content.Context;

import com.freddon.android.app.kiwivmware.model.KiwiVPSRecord;

import java.util.List;

/**
 * Created by fred on 2017/3/15.
 */
public interface IVPSRecordComposer {


    //    显示层回调
    interface View extends IBaseView<Presenter> {

        void on_getVpsRecords(List<KiwiVPSRecord> kiwiVPSRecord);
        void refresh();

    }


    //    保持层
    interface Presenter extends IBasePresenter<View> {
        //接口服务

        void getVpsRecords(Context context);

    }
}
