package com.freddon.android.app.kiwivmware.model;

import java.util.Map;

/**
 * Created by fred on 2017/3/15.
 */
public class VPSInfo {


//    hostname: Hostname of the VPS
//    node_ip: IP address of the physical node
//    node_alias: Internal nickname of the physical node
//    node_location: Physical location (country, state)
//    location_ipv6_ready: Whether IPv6 is supported at the current location
//    plan: Name of plan
//    plan_monthly_data: Allowed monthly data transfer (bytes)
//    plan_disk: Disk quota (bytes)
//    plan_ram: RAM (bytes)
//    plan_swap: SWAP (bytes)
//    os: Operating system
//    email: Primary e-mail address of the account
//    data_counter: Data transfer used in the current billing month
//    data_next_reset: Date and time of transfer counter reset (UNIX timestamp)
//    ip_addresses: IPv4 and IPv6 addresses assigned to VPS (Array)
//    plan_max_ipv6s: Maximum number of IPv6 addresses allowed by plan
//    rdns_api_available: Whether or not rDNS records can be set via API
//    ptr: rDNS records (Array of two-dimensional arrays: ip=>value)
//    suspended: Whether VPS is suspended

    private String hostname;// "localhost.localdomain",
    private String node_ip;// "104.194.76.14",
    private String node_alias;// "v804",
    private String node_location;// "US, California",
    private String location_ipv6_ready;// true,
    private String plan;// "wagonv2-10g",
    private long plan_monthly_data;// 590558003200,
    private long plan_disk;// 12884901888,
    private long plan_ram;// 268435456,
    private long plan_swap;// 134217728,
    private long plan_max_ipv6s;// 5,
    private String os;// "centos-6-x86_64",
    private String email;// "gsiner@live.com",
    private long data_counter;// 2501583106,
    private long data_next_reset;// 1490414400,
    private String[] ip_addresses;//
    private String rdns_api_available;// true,
    private Map<String, String> ptr;
    private String suspended;// false,
    private String error;// 0


    //addition parameters

    private VZStatus vz_status;
    private VZQuota vz_quota;

    private String vm_type;// "ovz",
    private String is_cpu_throttled;// "",
    private String ssh_port;// 29751,


    private String vpsId;


    public VPSInfo() {
    }


    public String getHostname() {
        return hostname;
    }

    public void setHostname(String hostname) {
        this.hostname = hostname;
    }

    public String getNode_ip() {
        return node_ip;
    }

    public void setNode_ip(String node_ip) {
        this.node_ip = node_ip;
    }

    public String getNode_alias() {
        return node_alias;
    }

    public void setNode_alias(String node_alias) {
        this.node_alias = node_alias;
    }

    public String getNode_location() {
        return node_location;
    }

    public void setNode_location(String node_location) {
        this.node_location = node_location;
    }

    public String getLocation_ipv6_ready() {
        return location_ipv6_ready;
    }

    public void setLocation_ipv6_ready(String location_ipv6_ready) {
        this.location_ipv6_ready = location_ipv6_ready;
    }

    public String getPlan() {
        return plan;
    }

    public void setPlan(String plan) {
        this.plan = plan;
    }

    public long getPlan_monthly_data() {
        return plan_monthly_data;
    }

    public void setPlan_monthly_data(long plan_monthly_data) {
        this.plan_monthly_data = plan_monthly_data;
    }

    public long getPlan_disk() {
        return plan_disk;
    }

    public void setPlan_disk(long plan_disk) {
        this.plan_disk = plan_disk;
    }

    public long getPlan_ram() {
        return plan_ram;
    }

    public void setPlan_ram(long plan_ram) {
        this.plan_ram = plan_ram;
    }

    public long getPlan_swap() {
        return plan_swap;
    }

    public void setPlan_swap(long plan_swap) {
        this.plan_swap = plan_swap;
    }

    public long getPlan_max_ipv6s() {
        return plan_max_ipv6s;
    }

    public void setPlan_max_ipv6s(long plan_max_ipv6s) {
        this.plan_max_ipv6s = plan_max_ipv6s;
    }

    public String getOs() {
        return os;
    }

    public void setOs(String os) {
        this.os = os;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public long getData_counter() {
        return data_counter;
    }

    public void setData_counter(long data_counter) {
        this.data_counter = data_counter;
    }

    public long getData_next_reset() {
        return data_next_reset;
    }

    public void setData_next_reset(long data_next_reset) {
        this.data_next_reset = data_next_reset;
    }

    public String[] getIp_addresses() {
        return ip_addresses;
    }

    public void setIp_addresses(String[] ip_addresses) {
        this.ip_addresses = ip_addresses;
    }

    public String getRdns_api_available() {
        return rdns_api_available;
    }

    public void setRdns_api_available(String rdns_api_available) {
        this.rdns_api_available = rdns_api_available;
    }

    public Map<String, String> getPtr() {
        return ptr;
    }

    public void setPtr(Map<String, String> ptr) {
        this.ptr = ptr;
    }

    public String getVm_type() {
        return vm_type;
    }

    public void setVm_type(String vm_type) {
        this.vm_type = vm_type;
    }

    public String getIs_cpu_throttled() {
        return is_cpu_throttled;
    }

    public void setIs_cpu_throttled(String is_cpu_throttled) {
        this.is_cpu_throttled = is_cpu_throttled;
    }

    public String getSsh_port() {
        return ssh_port;
    }

    public void setSsh_port(String ssh_port) {
        this.ssh_port = ssh_port;
    }

    public String getSuspended() {
        return suspended;
    }

    public void setSuspended(String suspended) {
        this.suspended = suspended;
    }

    public String getError() {
        return error;
    }

    public void setError(String error) {
        this.error = error;
    }

    public String getVpsId() {
        return vpsId;
    }

    public void setVpsId(String vpsId) {
        this.vpsId = vpsId;
    }

    public VZStatus getVz_status() {
        return vz_status;
    }

    public void setVz_status(VZStatus vz_status) {
        this.vz_status = vz_status;
    }

    public VZQuota getVz_quota() {
        return vz_quota;
    }

    public void setVz_quota(VZQuota vz_quota) {
        this.vz_quota = vz_quota;
    }
}
