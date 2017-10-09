package com.freddon.android.app.kiwivmware.ui.fragment;

import android.os.Bundle;
import android.support.annotation.NonNull;
import android.support.v4.app.FragmentManager;
import android.support.v4.app.FragmentTransaction;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.TextView;

import com.freddon.android.app.kiwivmware.R;

import butterknife.BindView;
import butterknife.ButterKnife;

/**
 * Created by fred on 2016/11/13.
 */

public class BottomDialog extends BaseModalDialogFragment {
    private static final String DIALOG_TITLE = "DIALOG_TITLE";
    @BindView(R.id.title)
    TextView titleView;
    @BindView(R.id.positive)
    View positive;
    @BindView(R.id.negative)
    View negative;

    private BottomSheetDialogEvent callBack;

    //    // TODO: Customize parameter initialization
    @SuppressWarnings("unused")
    public static BottomDialog newInstance(CharSequence title) {
        BottomDialog fragment = new BottomDialog();
        Bundle args = new Bundle();
        args.putCharSequence(DIALOG_TITLE, title);
        fragment.setArguments(args);
        return fragment;
    }

    public interface BottomSheetDialogEvent {
        void onPositive(BottomDialog dialog);

        boolean onNegative(BottomDialog dialog);
    }


    public BottomDialog callBack(BottomSheetDialogEvent bottomSheetDialogEvent) {
        this.callBack = bottomSheetDialogEvent;
        return this;
    }

    public BottomDialog show(@NonNull FragmentManager manager) {
        FragmentTransaction ft = manager.beginTransaction();
        ft.add(this, BottomDialog.class.getSimpleName());
        ft.commitAllowingStateLoss();
        return this;
    }


    @Override
    protected int getLayout() {
        return R.layout.p_dialog_view;
    }

    @Override
    protected void initView(LayoutInflater inflater) {
        if (getArguments() != null) {
            CharSequence title = getArguments().getCharSequence(DIALOG_TITLE);
            titleView.setText(title);
        }
        if(null!=callBack){
            positive.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View v) {
                    callBack.onPositive(BottomDialog.this);
                }
            });
            negative.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View v) {
                    callBack.onNegative(BottomDialog.this);
                }
            });
        }

    }

    @Override
    protected void lazyFetchData() {

    }

    @Override
    public void onResume() {
        super.onResume();
    }

    @Override
    public void onPause() {
        super.onPause();
    }


    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
        // TODO: inflate a fragment view
        View rootView = super.onCreateView(inflater, container, savedInstanceState);
        ButterKnife.bind(this, rootView);
        return rootView;
    }

    @Override
    public void onDestroyView() {
        super.onDestroyView();
    }

    public BottomDialog setCanceledOnTouchOutside(boolean cancelable) {
        if (getDialog() != null) getDialog().setCanceledOnTouchOutside(cancelable);
        return this;
    }

    public BottomDialog setCanCanceled(boolean cancelable) {
        setCancelable(cancelable);
        return this;
    }


}
