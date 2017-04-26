package com.freddon.android.app.kiwivmware.agent;


import rx.Observable;
import rx.Subscriber;
import rx.android.schedulers.AndroidSchedulers;
import rx.functions.Func1;
import rx.schedulers.Schedulers;

/**
 * Created by fred on 2016/11/2.
 */

public class RxJavaUtils {

    /**
     * 统一线程处理
     *
     * @param <T>
     * @return
     */
    public static <T> Observable.Transformer<T, T> schedulerHelper() {
        return new Observable.Transformer<T, T>() {
            @Override
            public Observable<T> call(Observable<T> observable) {
                return observable.subscribeOn(Schedulers.io())
                        .observeOn(AndroidSchedulers.mainThread());
//                        .unsubscribeOn(Schedulers.io());
            }
        };
    }

    /**
     * 生成Observable
     *
     * @param <T>
     * @return
     */
    public static <T> Observable<T> createData(final T t) {
        return Observable.create(new Observable.OnSubscribe<T>() {
            @Override
            public void call(Subscriber<? super T> subscriber) {
                try {
                    subscriber.onNext(t);
                    subscriber.onCompleted();
                } catch (Exception e) {
                    subscriber.onError(e);
                }
            }
        });
    }

    public static <T> Observable<T> getResponse(final T t) {
        return Observable.create(new Observable.OnSubscribe<T>() {
            @Override
            public void call(Subscriber<? super T> subscriber) {
                try {
                    subscriber.onNext(t);
                    subscriber.onCompleted();
                } catch (Exception e) {
                    subscriber.onError(e);
                }
            }
        });
    }


    /**
     * 获取articles
     *
     * @param <T>
     * @return
     */
    public static <T> Observable.Transformer<T, T> handleHttpResult() {   //compose判断结果
        return new Observable.Transformer<T, T>() {
            @Override
            public Observable<T> call(Observable<T> httpResponseObservable) {
                return httpResponseObservable.flatMap(new Func1<T, Observable<T>>() {
                    @Override
                    public Observable<T> call(T httpResponse) {
                        if (httpResponse != null) {
                            return getResponse(httpResponse);
                        } else {
                            return Observable.error(new ApiException("服务器返回error"));
                        }
                    }
                });
            }
        };
    }


}
