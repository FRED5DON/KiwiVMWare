package com.freddon.android.app.kiwivmware.model;

/**
 * Created by fred on 2017/3/15.
 */

public class VZQuota {

    private long occupied_kb;// "2026676",
    private long softlimit_kb;// "12582912",
    private long hardlimit_kb;// "13211648",
    private long occupied_inodes;// "83009",
    private long softlimit_inodes;// "12288000",
    private long hardlimit_inodes;// "12902400"

    public VZQuota() {
    }

    public long getOccupied_kb() {
        return occupied_kb;
    }

    public void setOccupied_kb(long occupied_kb) {
        this.occupied_kb = occupied_kb;
    }

    public long getSoftlimit_kb() {
        return softlimit_kb;
    }

    public void setSoftlimit_kb(long softlimit_kb) {
        this.softlimit_kb = softlimit_kb;
    }

    public long getHardlimit_kb() {
        return hardlimit_kb;
    }

    public void setHardlimit_kb(long hardlimit_kb) {
        this.hardlimit_kb = hardlimit_kb;
    }

    public long getOccupied_inodes() {
        return occupied_inodes;
    }

    public void setOccupied_inodes(long occupied_inodes) {
        this.occupied_inodes = occupied_inodes;
    }

    public long getSoftlimit_inodes() {
        return softlimit_inodes;
    }

    public void setSoftlimit_inodes(long softlimit_inodes) {
        this.softlimit_inodes = softlimit_inodes;
    }

    public long getHardlimit_inodes() {
        return hardlimit_inodes;
    }

    public void setHardlimit_inodes(long hardlimit_inodes) {
        this.hardlimit_inodes = hardlimit_inodes;
    }
}
