package com.freddon.android.app.kiwivmware.agent;

import com.freddon.android.app.kiwivmware.agent.api.KiwiApi;

/**
 * Created by fred on 2017/3/15.
 */

public class ApiHelper {

    private static KiwiApi _KiwiApi;


    /**
     * 获取retrofit kiwiapi的接口访问器
     * @return
     */
    public static KiwiApi getKiwiApi() {
        if (_KiwiApi == null) {
            _KiwiApi = RetrofitBuilder.build(KiwiApi.class);
        }
        return _KiwiApi;
    }

}
