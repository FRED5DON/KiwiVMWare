package com.freddon.android.app.kiwivmware.ui.activity;

import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.support.v7.widget.Toolbar;
import android.view.Menu;
import android.view.MenuItem;

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
import com.freddon.android.app.kiwivmware.ui.fragment.BottomDialog;
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
    private int choseItemPos = -1;


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
        menu.setGroupVisible(0, isEditMode);
        menu.setGroupVisible(1, !isEditMode);
        return super.onCreateOptionsMenu(menu);
    }

    @Override
    public boolean onPrepareOptionsMenu(Menu menu) {
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
        recyclerLayers.getSwfreshView().stopNestedScroll();
        adapter.setOnBaseRecyclerAdapterEvent(new BaseRecyclerViewAdapter.OnBaseRecyclerAdapterEvent() {
            @Override
            public void onItemClick(int position) {
                KiwiVPSRecord current = adapter.getmValues().get(position);
                if (lastKiwiVPSRecord != null) {
                    lastKiwiVPSRecord.setChose(false);
                }
                for(int i=0;i<adapter.getmValues().size();i++){
                    adapter.getmValues().get(i).setChose(false);
                }
                current.setChose(true);
                lastKiwiVPSRecord = current;
                VPSRecordMaker.checked(VPSRecordsActivity.this, current);
                adapter.notity(adapter.getmValues());
            }

            @Override
            public void onItemLongClick(int position) {
                isEditMode = !isEditMode;
                choseItemPos = position;
                deleteQuery();
            }
        });
    }


    private void deleteQuery() {
        BottomDialog.newInstance("确认要删除此条记录？")
                .setCanCanceled(true)
                .setCanceledOnTouchOutside(true)
                .callBack(new BottomDialog.BottomSheetDialogEvent() {
                    @Override
                    public void onPositive(BottomDialog view) {
                        view.dismiss();
                        if (choseItemPos > 0) {
                            VPSRecordMaker.delete(VPSRecordsActivity.this, adapter.getmValues().remove(choseItemPos));
                            adapter.notifyDataSetChanged();
                        }
                    }

                    @Override
                    public boolean onNegative(BottomDialog view) {
                        view.dismiss();
                        return false;
                    }
                }).show(this.getSupportFragmentManager());
    }

    @Override
    public void on_getVpsRecords(List<KiwiVPSRecord> kiwiVPSRecords) {
        if (RegexHelper.isEmpty(kiwiVPSRecords)) {
            recyclerLayers.showLayer(LayersLayout.LAYER_DATA_EMPTY);
        } else {
            recyclerLayers.showLayer(LayersLayout.LAYER_CUSTOM);
            KiwiVPSRecord current = VPSRecordMaker.getChecked(this);
            if (current == null) {
                lastKiwiVPSRecord = kiwiVPSRecords.get(0);
                lastKiwiVPSRecord.setChose(true);
                VPSRecordMaker.checked(VPSRecordsActivity.this, lastKiwiVPSRecord);
            }else{
               for (int i=0;i<kiwiVPSRecords.size();i++){
                   KiwiVPSRecord kp = kiwiVPSRecords.get(i);
                   if(current.getApiKey().equals(kp.getApiKey())
                           && current.getVeid().equals(kp.getVeid())){
                       kp.setChose(true);
                       break;
                   }
               }
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

    @Override
    protected void onDestroy() {
        super.onDestroy();
    }
}
