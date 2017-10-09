package com.freddon.android.app.kiwivmware.ui.container.viewholder;

import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.RadioButton;
import android.widget.TextView;

import com.freddon.android.app.kiwivmware.R;
import com.freddon.android.app.kiwivmware.model.KiwiVPSRecord;
import com.freddon.android.app.kiwivmware.tools.RegexHelper;

/**
 * Created by fred on 2017/3/17.
 */
public class VPSRecordsViewHolder extends BaseRecyclerViewHolder<KiwiVPSRecord> {
    private TextView name;
    private View view;

    public VPSRecordsViewHolder(ViewGroup parent) {
        super(parent, R.layout.item_list_vps_record);
        name = F(R.id.name);
        view =  F(R.id.img_chose);
    }

    @Override
    public void update(KiwiVPSRecord data) {
        if (RegexHelper.isEmpty(data.getRemark())) {
            name.setText("VEID: "+data.getVeid());
            name.append("\nAPI_KEY: "+data.getApiKey());
        } else {
            name.setText(data.getRemark());
            name.append("\nVEID: "+data.getVeid());
            name.append("\nAPI_KEY: "+data.getApiKey());
        }
        view.setVisibility(data.isChose()?View.VISIBLE:View.INVISIBLE);
    }
}
