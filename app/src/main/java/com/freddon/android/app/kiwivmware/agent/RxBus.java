package com.freddon.android.app.kiwivmware.agent;

import rx.Observable;
import rx.subjects.PublishSubject;
import rx.subjects.SerializedSubject;
import rx.subjects.Subject;

/**
 * Created by fred on 2016/11/12.
 */

public class RxBus {

    private static volatile RxBus mRxBus = null;
    /**
     * PublishSubject只会把在订阅发生的时间点之后来自原始Observable的数据发射给观察者
     */

    private Subject<Object, Object> mRxBusObserverable = new SerializedSubject<>(PublishSubject.create());

    public  static synchronized RxBus getBus() {
        if (mRxBus == null) {
            mRxBus = new RxBus();
        }
        return mRxBus;
    }

    public void post(Object o) {
        if (hasObservers())
            mRxBusObserverable.onNext(o);
    }

    public <T> Observable<T> toObserverable(Class<T> eventType) {
        return mRxBusObserverable.ofType(eventType);
    }

    /**
     * 判断是否有订阅者
     */
    private boolean hasObservers() {
        return mRxBusObserverable.hasObservers();
    }
}
