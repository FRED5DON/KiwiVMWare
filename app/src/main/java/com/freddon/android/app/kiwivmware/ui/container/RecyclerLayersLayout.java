package com.freddon.android.app.kiwivmware.ui.container;

import android.content.Context;
import android.support.v4.widget.SwipeRefreshLayout;
import android.support.v7.widget.LinearLayoutManager;
import android.util.AttributeSet;
import android.view.View;
import android.view.ViewGroup;

import com.freddon.android.app.extension.viewlibs.widget.container.LayersLayout;
import com.freddon.android.app.kiwivmware.R;

/**
 * Created by fred on 2016/11/5.
 */

public class RecyclerLayersLayout extends LayersLayout {


    //    @BindView(R.id.rv_data_view)
    ScrollingBoundsRecycleView rvDataView;
    //    @BindView(R.id.swfresh_view)
    SwipeRefreshLayout swfreshView;

    public SwipeRefreshLayout getSwfreshView() {
        return swfreshView;
    }

    public ScrollingBoundsRecycleView getRvDataView() {
        return rvDataView;
    }


    public RecyclerLayersLayout(Context context) {
        this(context, null);
    }

    public RecyclerLayersLayout(Context context, AttributeSet attrs) {
        this(context, attrs, 0);
    }

    public RecyclerLayersLayout(Context context, AttributeSet attrs, int defStyleAttr) {
        super(context, attrs, defStyleAttr);
        init(context);
    }

    private void init(Context context) {
        ViewGroup swfreshView = (ViewGroup) View.inflate(context, R.layout.recyler_layers_layout_item, null);
        setCustomerView(swfreshView);
        rvDataView = (ScrollingBoundsRecycleView) swfreshView.findViewById(R.id.rv_data_view);
        rvDataView.setLayoutManager(new LinearLayoutManager(context));
        this.swfreshView = (SwipeRefreshLayout) swfreshView.findViewById(R.id.swfresh_view);
        this.swfreshView.setColorSchemeResources(R.color.colorAccent,R.color.colorAccentAlpha);
    }


    @Override
    protected void initChild() {

    }

}
