package com.freddon.android.app.kiwivmware.ui.container.viewholder;

import android.content.Context;
import android.support.annotation.IdRes;
import android.support.annotation.LayoutRes;
import android.support.v7.widget.RecyclerView;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import com.freddon.android.app.kiwivmware.ui.container.adapter.BaseRecyclerViewAdapter;


/**
 * Created by fred on 2016/11/2.
 */

public class BaseRecyclerViewHolder<M> extends RecyclerView.ViewHolder {
    public BaseRecyclerViewHolder(View itemView) {
        super(itemView);
    }

    public BaseRecyclerViewHolder(ViewGroup parent, @LayoutRes int res) {
        super(LayoutInflater.from(parent.getContext()).inflate(res, parent, false));
    }

    public void update(M data) {
    }

    public void update(M data, int position) {
        update(data);
    }


    protected <T extends View> T F(@IdRes int id) {
        return (T) itemView.findViewById(id);
    }

    protected Context getContext() {
        return itemView.getContext();
    }

    public void update(M item, int position, BaseRecyclerViewAdapter tBaseRecyclerViewAdapter) {
        update(item, position);
    }
}
