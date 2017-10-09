package com.freddon.android.app.kiwivmware.ui.container.adapter;

import android.content.Context;
import android.view.ViewGroup;

import com.freddon.android.app.kiwivmware.model.KiwiVPSRecord;
import com.freddon.android.app.kiwivmware.ui.container.viewholder.BaseRecyclerViewHolder;
import com.freddon.android.app.kiwivmware.ui.container.viewholder.VPSRecordsViewHolder;

/**
 * Created by fred on 2017/3/17.
 */

public class VPSRecordsAdapter extends BaseRecyclerViewAdapter<KiwiVPSRecord> {



    public VPSRecordsAdapter(Context context) {
        super(context);
    }

    @Override
    public BaseRecyclerViewHolder OnCreateViewHolder(ViewGroup parent, int viewType) {
        return new VPSRecordsViewHolder(parent);
    }
}
