package com.freddon.android.app.kiwivmware.ui.fragment;

import android.os.Bundle;
import android.support.annotation.NonNull;
import android.support.v4.app.FragmentManager;
import android.support.v4.app.FragmentTransaction;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.EditText;
import android.widget.TextView;

import com.freddon.android.app.kiwivmware.R;
import com.freddon.android.app.kiwivmware.agent.RxEventBus;
import com.freddon.android.app.kiwivmware.config.VPSRecordMaker;
import com.freddon.android.app.kiwivmware.model.KiwiVPSRecord;
import com.freddon.android.app.kiwivmware.tools.ModalTools;
import com.freddon.android.app.kiwivmware.tools.RegexHelper;

import butterknife.BindView;
import butterknife.ButterKnife;
import butterknife.OnClick;

/**
 * Created by fred on 2017/3/16.
 */

public class KiwiVPSRecorderDialog extends BaseDialogFragment {
    private static final String DIALOG_SEGUE_RECORD = "DIALOG_SEGUE_RECORD";
    @BindView(R.id.negative)
    TextView negative;
    @BindView(R.id.title)
    TextView title;
    @BindView(R.id.positive)
    TextView positive;
    @BindView(R.id.et_veid)
    EditText etVeid;
    @BindView(R.id.et_apikey)
    EditText etApikey;
    @BindView(R.id.et_mark)
    EditText etMark;



    //    // TODO: Customize parameter initialization
    @SuppressWarnings("unused")
    public static KiwiVPSRecorderDialog newInstance() {
        KiwiVPSRecorderDialog fragment = new KiwiVPSRecorderDialog();
        Bundle args = new Bundle();
        fragment.setArguments(args);
        return fragment;
    }

    public KiwiVPSRecorderDialog segue(KiwiVPSRecord kiwiVPSRecord){
        if (getArguments()!=null){
            getArguments().putParcelable(DIALOG_SEGUE_RECORD,kiwiVPSRecord);
        }
        return this;
    }
    

    @Override
    protected int getLayout() {
        return R.layout.fragment_kiwi_recorder;
    }


    @Override
    protected void initView(LayoutInflater inflater) {
        super.initView(inflater);
        if (getArguments()!=null){
            KiwiVPSRecord kiwiVPSRecord=getArguments().getParcelable(DIALOG_SEGUE_RECORD);
            renderer(kiwiVPSRecord);
        }
//        FrameLayout bottomSheet = (FrameLayout) rootView.findViewById(android.support.design.R.id.design_bottom_sheet);
//        if (bottomSheet != null)
//            BottomSheetBehavior.from(bottomSheet).setState(BottomSheetBehavior.STATE_EXPANDED);
    }

    /**
     * ui渲染
     * @param kiwiVPSRecord
     */
    private void renderer(KiwiVPSRecord kiwiVPSRecord) {
        if (kiwiVPSRecord==null)return;
        etVeid.setText(kiwiVPSRecord.getVeid());
        etApikey.setText(kiwiVPSRecord.getApiKey());
        etMark.setText(kiwiVPSRecord.getRemark());
    }


    @OnClick({R.id.positive,R.id.negative})
    public void onClick(View view){
        switch (view.getId()){
            case R.id.positive:
                if (!isValid()){
                    return;
                }
                ModalTools.showToast(getActivity(),"如果不知道什么是VEID，请查看首页的'关于'");
                KiwiVPSRecord record=new KiwiVPSRecord();
                record.setApiKey(etApikey.getText().toString().trim());
                record.setVeid(etVeid.getText().toString().trim());
                if (RegexHelper.isEmpty(etMark.getText().toString().trim())){
                    record.setRemark(etVeid.getText().toString());
                }else{
                    record.setRemark(etMark.getText().toString().trim());
                }
                record.setTimemills(System.currentTimeMillis());
                VPSRecordMaker.put(getContext(),record);
                RxEventBus.post(record);
                break;
            default:
                break;
        }
        dismiss();
    }

    private boolean isValid() {
        if (RegexHelper.isEmpty(etVeid.getText().toString().trim())){
            return false;
        }
        if (RegexHelper.isEmpty(etApikey.getText().toString().trim())){
            return false;
        }
        return true;
    }


    @Override
    protected void initEvent() {
        super.initEvent();
    }


    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
        // TODO: inflate a fragment view
        View rootView = super.onCreateView(inflater, container, savedInstanceState);
        ButterKnife.bind(this, rootView);
        return rootView;
    }

    @Override
    public void onDestroy() {
        super.onDestroy();
    }

    public KiwiVPSRecorderDialog show(@NonNull FragmentManager manager) {
        FragmentTransaction ft = manager.beginTransaction();
        ft.add(this, KiwiVPSRecorderDialog.class.getSimpleName());
        ft.commitAllowingStateLoss();
        return this;
    }

}
