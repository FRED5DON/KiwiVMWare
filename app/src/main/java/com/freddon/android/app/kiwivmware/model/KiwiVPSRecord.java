package com.freddon.android.app.kiwivmware.model;

import android.os.Parcel;
import android.os.Parcelable;

/**
 * Created by fred on 2017/3/16.
 */

public class KiwiVPSRecord implements Parcelable {


    private String veid;

    private String apiKey;

    private String remark;

    private long timemills;


    private boolean isChose;


    public KiwiVPSRecord() {
    }


    protected KiwiVPSRecord(Parcel in) {
        veid = in.readString();
        apiKey = in.readString();
        remark = in.readString();
        timemills = in.readLong();
        isChose = in.readByte() != 0;
    }

    public static final Creator<KiwiVPSRecord> CREATOR = new Creator<KiwiVPSRecord>() {
        @Override
        public KiwiVPSRecord createFromParcel(Parcel in) {
            return new KiwiVPSRecord(in);
        }

        @Override
        public KiwiVPSRecord[] newArray(int size) {
            return new KiwiVPSRecord[size];
        }
    };

    public String getVeid() {
        return veid==null?"":veid;
    }

    public void setVeid(String veid) {
        this.veid = veid;
    }

    public String getApiKey() {
        return apiKey==null?"":apiKey;
    }

    public void setApiKey(String apiKey) {
        this.apiKey = apiKey;
    }

    public String getRemark() {
        return remark==null?"":remark;
    }

    public void setRemark(String remark) {
        this.remark = remark;
    }

    public long getTimemills() {
        return timemills;
    }

    public void setTimemills(long timemills) {
        this.timemills = timemills;
    }

    public boolean isChose() {
        return isChose;
    }

    public void setChose(boolean chose) {
        isChose = chose;
    }

    @Override
    public int describeContents() {
        return 0;
    }

    @Override
    public void writeToParcel(Parcel parcel, int i) {
        parcel.writeString(veid);
        parcel.writeString(apiKey);
        parcel.writeString(remark);
        parcel.writeLong(timemills);
        parcel.writeByte((byte) (isChose ? 1 : 0));
    }
}
