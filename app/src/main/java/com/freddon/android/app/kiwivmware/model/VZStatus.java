package com.freddon.android.app.kiwivmware.model;

/**
 * Created by fred on 2017/3/15.
 */

public class VZStatus {

    private String status;// "running",
    private String hostname;// "localhost.localdomain",
    private String load_average;// "0.00/0.00/0.00",
    private String nproc;// "34",
    private int nproc_b;// "200",
    private String kmemsize;// "8282863",
    private long kmemsize_b;// "134217728",
    private String privvmpages;// "114810",
    private long privvmpages_b;// "262144",
    private String oomguarpages;// "33960",
    private long oomguarpages_b;// "65536",
    private String numtcpsock;// "7",
    private int numtcpsock_b;// "1670",
    private String numfile;// "319",
    private int numfile_b;// "10240",
    private String swappages;// "11833",
    private long swappages_b;// "32768",
    private String physpages;// "33290",
    private long physpages_l;// "65536"

    public VZStatus() {
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getHostname() {
        return hostname;
    }

    public void setHostname(String hostname) {
        this.hostname = hostname;
    }

    public String getLoad_average() {
        return load_average;
    }

    public void setLoad_average(String load_average) {
        this.load_average = load_average;
    }

    public String getNproc() {
        return nproc;
    }

    public void setNproc(String nproc) {
        this.nproc = nproc;
    }

    public int getNproc_b() {
        return nproc_b;
    }

    public void setNproc_b(int nproc_b) {
        this.nproc_b = nproc_b;
    }

    public String getKmemsize() {
        return kmemsize;
    }

    public void setKmemsize(String kmemsize) {
        this.kmemsize = kmemsize;
    }

    public long getKmemsize_b() {
        return kmemsize_b;
    }

    public void setKmemsize_b(long kmemsize_b) {
        this.kmemsize_b = kmemsize_b;
    }

    public String getPrivvmpages() {
        return privvmpages;
    }

    public void setPrivvmpages(String privvmpages) {
        this.privvmpages = privvmpages;
    }

    public long getPrivvmpages_b() {
        return privvmpages_b;
    }

    public void setPrivvmpages_b(long privvmpages_b) {
        this.privvmpages_b = privvmpages_b;
    }

    public String getOomguarpages() {
        return oomguarpages;
    }

    public void setOomguarpages(String oomguarpages) {
        this.oomguarpages = oomguarpages;
    }

    public long getOomguarpages_b() {
        return oomguarpages_b;
    }

    public void setOomguarpages_b(long oomguarpages_b) {
        this.oomguarpages_b = oomguarpages_b;
    }

    public String getNumtcpsock() {
        return numtcpsock;
    }

    public void setNumtcpsock(String numtcpsock) {
        this.numtcpsock = numtcpsock;
    }

    public int getNumtcpsock_b() {
        return numtcpsock_b;
    }

    public void setNumtcpsock_b(int numtcpsock_b) {
        this.numtcpsock_b = numtcpsock_b;
    }

    public String getNumfile() {
        return numfile;
    }

    public void setNumfile(String numfile) {
        this.numfile = numfile;
    }

    public int getNumfile_b() {
        return numfile_b;
    }

    public void setNumfile_b(int numfile_b) {
        this.numfile_b = numfile_b;
    }

    public String getSwappages() {
        return swappages;
    }

    public void setSwappages(String swappages) {
        this.swappages = swappages;
    }

    public long getSwappages_b() {
        return swappages_b;
    }

    public void setSwappages_b(long swappages_b) {
        this.swappages_b = swappages_b;
    }

    public String getPhyspages() {
        return physpages;
    }

    public void setPhyspages(String physpages) {
        this.physpages = physpages;
    }

    public long getPhyspages_l() {
        return physpages_l;
    }

    public void setPhyspages_l(long physpages_l) {
        this.physpages_l = physpages_l;
    }
}
