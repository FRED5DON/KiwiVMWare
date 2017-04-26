package com.freddon.android.app.kiwivmware.ui.activity;

import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.support.v7.widget.Toolbar;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;

import com.freddon.android.app.extension.viewlibs.widget.container.LayersLayout;
import com.freddon.android.app.kiwivmware.BaseActivity;
import com.freddon.android.app.kiwivmware.R;
import com.freddon.android.app.kiwivmware.config.VPSRecordMaker;
import com.freddon.android.app.kiwivmware.model.KiwiVPSRecord;
import com.freddon.android.app.kiwivmware.presenter.VPSRecordPresenter;
import com.freddon.android.app.kiwivmware.presenter.composer.IVPSRecordComposer;
import com.freddon.android.app.kiwivmware.tools.RegexHelper;
import com.freddon.android.app.kiwivmware.ui.container.RecyclerLayersLayout;
import com.freddon.android.app.kiwivmware.ui.container.adapter.BaseRecyclerViewAdapter;
import com.freddon.android.app.kiwivmware.ui.container.adapter.VPSRecordsAdapter;
import com.freddon.android.app.kiwivmware.ui.fragment.KiwiVPSRecorderDialog;

import java.util.List;

import butterknife.BindView;
import butterknife.ButterKnife;

public class VPSRecordsActivity extends BaseActivity<IVPSRecordComposer.Presenter> implements IVPSRecordComposer.View {


    @BindView(R.id.recycler_layers)
    RecyclerLayersLayout recyclerLayers;
    private VPSRecordsAdapter adapter;
    private boolean isEditMode;
    private KiwiVPSRecord lastKiwiVPSRecord;


    public static Intent newIntent(Context context) {
        Intent intent = new Intent();
        intent.setClass(context, VPSRecordsActivity.class);
        return intent;
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_vps_records);
        ButterKnife.bind(this);
        Toolbar toolbar = (Toolbar) findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);
        if (getSupportActionBar() != null)
            getSupportActionBar().setDisplayHomeAsUpEnabled(true);
        initViews();
        mPresenter = new VPSRecordPresenter(this);
        mPresenter.getVpsRecords(this);
    }


    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        getMenuInflater().inflate(R.menu.menu_records_manager, menu);
        return super.onCreateOptionsMenu(menu);
    }

    @Override
    public boolean onPrepareOptionsMenu(Menu menu) {
        menu.setGroupVisible(0, isEditMode);
        menu.setGroupVisible(1, !isEditMode);
        return super.onPrepareOptionsMenu(menu);
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        switch (item.getItemId()) {
            case android.R.id.home:
                onBackPressed();
                return true;
            case R.id.action_settings_add_vps:
                KiwiVPSRecorderDialog.newInstance()
                        .show(getSupportFragmentManager());
            default:
                break;
        }
        return super.onOptionsItemSelected(item);
    }

    private void initViews() {
        adapter = new VPSRecordsAdapter(this);
        recyclerLayers.getRvDataView().setAdapter(adapter);
        recyclerLayers.showLayer(LayersLayout.LAYER_LOADING);
        recyclerLayers.getRvDataView().setOnLongClickListener(new View.OnLongClickListener() {
            @Override
            public boolean onLongClick(View view) {
                return false;
            }
        });

        adapter.setOnBaseRecyclerAdapterEvent(new BaseRecyclerViewAdapter.OnBaseRecyclerAdapterEvent() {
            @Override
            public void onItemClick(int position) {
                KiwiVPSRecord current = adapter.getmValues().get(position);
                if (lastKiwiVPSRecord != null) {
                    lastKiwiVPSRecord.setChose(false);
                }
                current.setChose(true);
                lastKiwiVPSRecord = current;
                VPSRecordMaker.checked(VPSRecordsActivity.this, current);
                adapter.notity(adapter.getmValues());
            }

            @Override
            public void onItemLongClick(int position) {

            }
        });
    }

    @Override
    public void on_getVpsRecords(List<KiwiVPSRecord> kiwiVPSRecords) {
        if (RegexHelper.isEmpty(kiwiVPSRecords)) {
            recyclerLayers.showLayer(LayersLayout.LAYER_DATA_EMPTY);
        } else {
            recyclerLayers.showLayer(LayersLayout.LAYER_CUSTOM);
            if (VPSRecordMaker.getChecked(this) == null) {
                lastKiwiVPSRecord = kiwiVPSRecords.get(0);
                lastKiwiVPSRecord.setChose(true);
                VPSRecordMaker.checked(VPSRecordsActivity.this, lastKiwiVPSRecord);
            }
            adapter.notity(kiwiVPSRecords);
        }
    }

    @Override
    public void setPresenter(IVPSRecordComposer.Presenter presenter) {

    }

    @Override
    public void error(CharSequence errorMsg) {

    }

    @Override
    public void loading(boolean isShowLoading) {

    }
}
