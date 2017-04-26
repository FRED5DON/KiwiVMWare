package com.freddon.android.app.kiwivmware.ui.fragment;

import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v4.widget.NestedScrollView;
import android.view.LayoutInflater;
import android.view.Menu;
import android.view.MenuInflater;
import android.view.MenuItem;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.FrameLayout;
import android.widget.ProgressBar;
import android.widget.TableLayout;
import android.widget.TextView;

import com.freddon.android.app.extension.viewlibs.widget.container.LayersLayout;
import com.freddon.android.app.kiwivmware.R;
import com.freddon.android.app.kiwivmware.model.VPSInfo;
import com.freddon.android.app.kiwivmware.model.VZQuota;
import com.freddon.android.app.kiwivmware.model.VZStatus;
import com.freddon.android.app.kiwivmware.presenter.composer.IKiwiComposer;
import com.freddon.android.app.kiwivmware.tools.DateRender;
import com.freddon.android.app.kiwivmware.tools.RegexHelper;
import com.freddon.android.app.kiwivmware.ui.activity.ShellActivity;
import com.freddon.android.app.kiwivmware.ui.activity.VPSRecordsActivity;

import java.util.Arrays;
import java.util.Locale;
import java.util.Map;

import butterknife.BindView;
import butterknife.ButterKnife;

/**
 * A placeholder fragment containing a simple view.
 */
public class MainActivityFragment extends BaseFragment<IKiwiComposer.Presenter> implements IKiwiComposer.View {


    @BindView(R.id.layers)
    LayersLayout layers;
    @BindView(R.id.tv_title)
    TextView tvTitle;
    @BindView(R.id.tv_kiwi_physical_location)
    TextView tvKiwiPhysicalLocation;
    @BindView(R.id.tv_kiwi_ip_addr)
    TextView tvKiwiIpAddr;
    @BindView(R.id.tv_kiwi_ssh_port)
    TextView tvKiwiSshPort;
    @BindView(R.id.tv_kiwi_status)
    TextView tvKiwiStatus;
    @BindView(R.id.btn_kiwi_ssh_start)
    Button btnKiwiSshStart;
    @BindView(R.id.btn_kiwi_ssh_stop)
    Button btnKiwiSshStop;
    @BindView(R.id.btn_kiwi_ssh_reboot)
    Button btnKiwiSshReboot;
    @BindView(R.id.progress_kiwi_ram)
    ProgressBar progressKiwiRam;
    @BindView(R.id.tv_kiwi_ram)
    TextView tvKiwiRam;
    @BindView(R.id.progress_kiwi_swap)
    ProgressBar progressKiwiSwap;
    @BindView(R.id.tv_kiwi_swap)
    TextView tvKiwiSwap;
    @BindView(R.id.progress_kiwi_disk_usage)
    ProgressBar progressKiwiDiskUsage;
    @BindView(R.id.tv_kiwi_disk_usage)
    TextView tvKiwiDiskUsage;
    @BindView(R.id.progress_kiwi_bandwidth_usage)
    ProgressBar progressKiwiBandwidthUsage;
    @BindView(R.id.tv_kiwi_bandwidth_usage)
    TextView tvKiwiBandwidthUsage;
    @BindView(R.id.tv_kiwi_bandwidth_resets)
    TextView tvKiwiBandwidthResets;
    @BindView(R.id.tv_kiwi_os)
    TextView tvKiwiOs;
    @BindView(R.id.tv_kiwi_hostname)
    TextView tvKiwiHostname;
    @BindView(R.id.table_ptr_records)
    TableLayout tablePtrRecords;
    @BindView(R.id.ns_main_kiwi)
    NestedScrollView nsMainKiwi;
    @BindView(R.id.content_main)
    FrameLayout contentMain;

    public MainActivityFragment() {
    }


    @Override
    public void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setHasOptionsMenu(true);
    }

    @Override
    protected int getLayout() {
        return R.layout.fragment_main;
    }


    @Override
    public void onCreateOptionsMenu(Menu menu, MenuInflater inflater) {
        inflater.inflate(R.menu.menu_main, menu);
        super.onCreateOptionsMenu(menu, inflater);
    }


    @Override
    public boolean onOptionsItemSelected(MenuItem item) {

        switch (item.getItemId()) {
            case R.id.action_settings_add_vps:
                KiwiVPSRecorderDialog.newInstance()
                        .show(getActivity().getSupportFragmentManager());
                break;
            case R.id.action_settings_select_vps:
                startActivity(VPSRecordsActivity.newIntent(getActivity()));
                break;
            case R.id.action_settings_refresh:
                if (mPresenter != null)
                    mPresenter.getLiveServiceInfo();
                break;
            case R.id.action_settings_shell:
                startActivity(ShellActivity.newIntent(getActivity()));
                break;
            default:
                break;
        }


        return super.onOptionsItemSelected(item);
    }

    @Override
    public void setPresenter(IKiwiComposer.Presenter presenter) {
        mPresenter = presenter;
    }

    @Override
    public void error(CharSequence errorMsg) {

    }

    @Override
    public void loading(boolean isShowLoading) {
        if (isShowLoading) {
            nsMainKiwi.setVisibility(View.GONE);
            layers.setVisibility(View.VISIBLE);
            layers.showLayer(LayersLayout.LAYER_LOADING);
        } else {
            layers.setVisibility(View.GONE);
            nsMainKiwi.setVisibility(View.VISIBLE);
        }
    }

    @Override
    public void on_getLiveServiceInfo(VPSInfo vpsInfo) {
        if (vpsInfo == null) return;
        tvTitle.setText(vpsInfo.getHostname() + " [" + vpsInfo.getPlan() + "] " + vpsInfo.getVm_type());

        tvKiwiPhysicalLocation.setText(String.format(Locale.ENGLISH, "%s    Node ID: %s    VPS ID: %s",
                vpsInfo.getNode_location(),
                vpsInfo.getNode_alias(),
                vpsInfo.getVpsId()));
        if (RegexHelper.isEmpty(vpsInfo.getIp_addresses())) {
            tvKiwiIpAddr.setText("");
        } else {
            tvKiwiIpAddr.setText(Arrays.toString(vpsInfo.getIp_addresses()));
        }
        tvKiwiSshPort.setText(vpsInfo.getSsh_port());

        VZStatus status = vpsInfo.getVz_status();
        VZQuota quota = vpsInfo.getVz_quota();
        if (status == null || quota == null) {
//                ModalTools.showToast(getActivity(),);
            return;
        }
        tvKiwiStatus.setText(String.format(Locale.ENGLISH, "%s (%s processes;LA: %s)",
                status.getStatus(),
                status.getNproc(),
                status.getLoad_average()));


        //RAM
        tvKiwiRam.setText(String.format(Locale.ENGLISH, "%.2f/%d MB",
                status.getOomguarpages() * 4.0 / 1024,
                vpsInfo.getPlan_ram() >> 20));
        progressKiwiRam.setProgress((int) (quota.getSoftlimit_kb() * 100 / vpsInfo.getPlan_ram()));


        //swap
        //一个page为4KB
        tvKiwiSwap.setText(String.format(Locale.ENGLISH, "%.2f/%d MB",
                status.getSwappages() * 4.0 / 1024,
                vpsInfo.getPlan_swap() >> 20));

        progressKiwiSwap.setProgress((int) (quota.getHardlimit_kb() * 100 / vpsInfo.getPlan_ram()));

        //disk
        tvKiwiDiskUsage.setText(String.format(Locale.ENGLISH, "%.2f/%d GB",
                quota.getOccupied_kb() * 1.0 / 1024 / 1024,
                vpsInfo.getPlan_disk() >> 30));
        progressKiwiDiskUsage.setProgress((int) (quota.getOccupied_kb() * 100 / vpsInfo.getPlan_ram()));


        progressKiwiBandwidthUsage.setProgress((int) (vpsInfo.getData_counter() / vpsInfo.getPlan_monthly_data() * 100));

        tvKiwiBandwidthUsage.setText(
                String.format(Locale.ENGLISH, "%.2f/%d GB",
                        vpsInfo.getData_counter() * 1D / 1024 / 1024 / 1024,
                        vpsInfo.getPlan_monthly_data() >> 30));
        String resets = getResources().getString(R.string.kiwi_bandwidth_usage_resets) + " : " + DateRender.stringDate(vpsInfo.getData_next_reset() * 1000);
        tvKiwiBandwidthResets.setText(resets);
        tvKiwiOs.setText(vpsInfo.getOs());
        tvKiwiHostname.setText(vpsInfo.getHostname());

        //PTR
        Map<String, String> map = vpsInfo.getPtr();
        if (tablePtrRecords.getChildCount() > 0) tablePtrRecords.removeAllViews();
        String emptyText = getResources().getString(R.string.kiwi_ptr_record_not_set);
        for (Map.Entry<String, String> entry : map.entrySet()) {
            View tr = View.inflate(getContext(), R.layout.tr_vps, null);
            TextView title = (TextView) tr.findViewById(R.id.tr_title);
            TextView value = (TextView) tr.findViewById(R.id.tr_value);
            title.setText(entry.getKey());
            value.setText(entry.getValue() == null ? emptyText : entry.getValue());
            tablePtrRecords.addView(tr);
        }
    }

    @Override
    public void on_stop() {

    }

    @Override
    public void on_restart() {

    }

    @Override
    public void on_start() {

    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
        // TODO: inflate a fragment view
        View rootView = super.onCreateView(inflater, container, savedInstanceState);
        ButterKnife.bind(this, rootView);
        return rootView;
    }
}
