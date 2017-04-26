package com.freddon.android.app.kiwivmware.presenter.composer;

/**
 *
 * 公共的展示层协议
 * Created by fred on 2017/3/15.
 */

public interface IBaseView<P> {


    //桥梁 默认向展示层传递Presenter
    void setPresenter(P presenter);


    void error(CharSequence errorMsg);


    void loading(boolean isShowLoading);
}
