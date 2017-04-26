package com.freddon.android.app.kiwivmware.agent;

import com.freddon.android.app.kiwivmware.presenter.composer.IBasePresenter;

import rx.Subscription;
import rx.subscriptions.CompositeSubscription;

/**
 * Created by fred on 2016/11/2.
 */

public class RxJavaMiddleWare<T>  implements IBasePresenter<T> {

    protected T mView;
    protected CompositeSubscription mCompositeSubscription;

    public void subscribe(Subscription subscription) {
        if (mCompositeSubscription == null) {
            mCompositeSubscription = new CompositeSubscription();
        }
        mCompositeSubscription.add(subscription);
    }

    public void unSubscribe() {
        if (mCompositeSubscription != null) {
            mCompositeSubscription.unsubscribe();
        }
    }


    @Override
    public void attachView(T view) {
        this.mView = view;
    }


    @Override
    public void detachView() {
        this.mView = null;
        unSubscribe();
    }




    // region : @fred 公共方法 [2017/1/10]

//    protected void setActionNeedLogin() {
//        if (!App.getInstance().isNotShowAuth) {
//            Subscription authSubscription = RxEventBus.prepareObservable(AuthEvent.class)
//                    .subscribe(new Action1<AuthEvent>() {
//                        @Override
//                        public void call(AuthEvent authEvent) {
//                            needLoginCalled(authEvent);
//                        }
//                    }, new Action1<Throwable>() {
//                        @Override
//                        public void call(Throwable throwable) {
//
//                        }
//                    });
//            subscribe(authSubscription);
//        }
//    }



    // endregion
}
