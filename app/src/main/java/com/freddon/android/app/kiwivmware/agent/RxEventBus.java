package com.freddon.android.app.kiwivmware.agent;

import rx.Observable;
import rx.Subscription;
import rx.android.schedulers.AndroidSchedulers;
import rx.functions.Action1;
import rx.schedulers.Schedulers;

/**
 * Created by fred on 2016/12/1.
 */

public class RxEventBus {


    /**
     * 订阅原子事件
     *
     * @param userEventClass
     * @param <T>
     * @return Observable
     */
    public static <T> Observable<T> prepareObservable(Class<T> userEventClass) {
        return RxBus.getBus()
                .toObserverable(userEventClass)
                .subscribeOn(Schedulers.io())
                .observeOn(AndroidSchedulers.mainThread());

    }


    public static <T> Observable<T> prepareDBObservable(Class<T> userEventClass) {
        return RxBus.getBus()
                .toObserverable(userEventClass)
                .subscribeOn(Schedulers.io())
                .observeOn(Schedulers.io());

    }


    /**
     * 订阅原子事件
     *
     * @param userEventClass
     * @param <T>
     * @return Subscription
     */
    public static <T> Subscription subscribeEvent(Class<T> userEventClass, Action1<T> action1, Action1<Throwable> throwable) {
        return prepareObservable(userEventClass).subscribe(action1, throwable);

    }


    /**
     * 取消订阅
     *
     * @param subscription
     */
    public static void unsubscribeEvent(Subscription subscription) {
        if (subscription != null && !subscription.isUnsubscribed()) {
            subscription.unsubscribe();
        }
    }


    /**
     * 发送原子
     *
     * @param event
     */
    public static void post(Object event) {
        if (event == null) return;
        RxBus.getBus().post(event);
    }
}
