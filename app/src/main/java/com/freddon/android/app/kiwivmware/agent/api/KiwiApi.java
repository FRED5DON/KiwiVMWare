package com.freddon.android.app.kiwivmware.agent.api;

import com.freddon.android.app.kiwivmware.model.KiwiResponse;
import com.freddon.android.app.kiwivmware.model.VPSInfo;

import retrofit2.http.GET;
import retrofit2.http.Path;
import retrofit2.http.Query;
import rx.Observable;

/**
 * Created by fred on 2017/3/15.
 */

public interface KiwiApi {


    static String api_version = "v1/";


    /**
     * 获取VPS主机信息
     *
     * @param veid
     * @param api_key
     * @return
     */
//    @FormUrlEncoded
    @GET(api_version + "getServiceInfo")
    Observable<VPSInfo> getServiceInfo(@Query("veid") String veid, @Query("api_key") String api_key);



    @GET(api_version + "getLiveServiceInfo")
    Observable<VPSInfo> getLiveServiceInfo(@Query("veid") String veid, @Query("api_key") String api_key);


    /**
     * Create a snapshot
     */
    @GET(api_version + "snapshot/create?description=Automatic_Snapshot")
    Observable<VPSInfo> createSnapshot(@Query("veid") String veid, @Query("api_key") String api_key);


    @GET(api_version + "snapshot/list")
    Observable<VPSInfo> listSnapshot(@Query("veid") String veid, @Query("api_key") String api_key);


    /**
     * Restart VPS
     */
    @GET(api_version + "restart")
    Observable<VPSInfo> restart(@Query("veid") String veid, @Query("api_key") String api_key);

    /**
     * stop VPS
     */
    @GET(api_version + "stop")
    Observable<VPSInfo> stop(@Query("veid") String veid, @Query("api_key") String api_key);

    /**
     * start VPS
     */
    @GET(api_version + "start")
    Observable<VPSInfo> start(@Query("veid") String veid, @Query("api_key") String api_key);

    /**
     * Set PTR record
     * 域名反向解析 即 ip => 域名
     */
    @GET(api_version + "setPTR")
    Observable<VPSInfo> setPtr(@Query("veid") String veid, @Query("api_key") String api_key, @Query("ip") String ip, @Query("ptr") String ptr);



    @GET(api_version + "setHostname")
    Observable<VPSInfo> setHostname(@Query("veid") String veid, @Query("api_key") String api_key, @Query("newHostname") String newHostname);


    /**
     * 获取可用的操作系统
     *
     * @param veid
     * @param api_key
     * @return
     */
    @GET(api_version + "getAvailableOS")
    Observable<VPSInfo> getAvailableOS(@Query("veid") String veid, @Query("api_key") String api_key);


    @GET(api_version + "reinstallOS")
    Observable<VPSInfo> reinstallOS(@Query("veid") String veid, @Query("api_key") String api_key, @Query("os") String os);


    /**
     * 设置系统root密码 会更改ssh密码
     * @param veid
     * @param api_key
     * @return
     */
    @GET(api_version + "resetRootPassword")
    Observable<VPSInfo> resetRootPassword(@Query("veid") String veid, @Query("api_key") String api_key);

    /**
     * 获取使用情况统计
     *
     * @param veid
     * @param api_key
     * @return
     */
    @GET(api_version + "getRawUsageStats")
    Observable<VPSInfo> getRawUsageStats(@Query("veid") String veid, @Query("api_key") String api_key);



    @GET(api_version + "getRateLimitStatus")
    Observable<VPSInfo> getRateLimitStatus(@Query("veid") String veid, @Query("api_key") String api_key);

    @GET(api_version + "basicShell/exec")
    Observable<KiwiResponse> basicShellExec(@Query("veid") String veid, @Query("api_key") String api_key, @Query("command") String command);


}
