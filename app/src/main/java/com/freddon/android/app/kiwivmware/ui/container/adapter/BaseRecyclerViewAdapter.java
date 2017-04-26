package com.freddon.android.app.kiwivmware.ui.container.adapter;

import android.content.Context;
import android.support.v7.widget.RecyclerView;
import android.view.MotionEvent;
import android.view.View;
import android.view.ViewGroup;


import com.freddon.android.app.kiwivmware.ui.container.viewholder.BaseRecyclerViewHolder;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

/**
 * Created by fred on 2016/11/2.
 */

public abstract class BaseRecyclerViewAdapter<T> extends RecyclerView.Adapter<BaseRecyclerViewHolder> {

    private Context mContext;
    private List<T> mValues;

    public T getItem(int position) {
        if (mValues == null) {
            return null;
        }
        return mValues.get(position);
    }


    public BaseRecyclerViewAdapter(Context context) {
        init(context, new ArrayList<T>());
    }

    public BaseRecyclerViewAdapter(Context context, T[] objects) {
        init(context, Arrays.asList(objects));
    }

    private void init(Context context, List<T> objects) {
        mContext = context;
        mValues = objects;
    }


    @Override
    public final BaseRecyclerViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {
        final BaseRecyclerViewHolder viewHolder = OnCreateViewHolder(parent, viewType);
        return viewHolder;
    }

    @Override
    public final void onBindViewHolder(BaseRecyclerViewHolder holder, int position) {
        final int pos = position;
        holder.itemView.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                if (onBaseRecyclerAdapterEvent!=null)
                    onBaseRecyclerAdapterEvent.onItemClick(pos);
            }
        });
        holder.itemView.setOnLongClickListener(new View.OnLongClickListener() {
            @Override
            public boolean onLongClick(View view) {
                if (onBaseRecyclerAdapterEvent!=null)
                onBaseRecyclerAdapterEvent.onItemLongClick(pos);
                return true;
            }
        });
        OnBindViewHolder(holder, position);
    }

    abstract public BaseRecyclerViewHolder OnCreateViewHolder(ViewGroup parent, int viewType);

    public void OnBindViewHolder(BaseRecyclerViewHolder holder, final int position) {
        T item = getItem(position);
        holder.update(item,position,this);
    }

    @Override
    public int getItemCount() {
        return mValues == null ? 0 : mValues.size();
    }


    public List<T> getmValues() {
        if (mValues == null) {
            mValues = new ArrayList<>();
        }
        return mValues;
    }

    public void notity(List<T> datas) {
        if (datas == null || datas.size() == 0) {
            if (mValues != null) {
                mValues.clear();
            }
        } else {
            mValues = datas;
        }
        notifyDataSetChanged();
    }


    @Override
    public long getItemId(int position) {
        return position;
    }

    @Override
    public void setHasStableIds(boolean hasStableIds) {
        super.setHasStableIds(true);
    }

    public void setOnBaseRecyclerAdapterEvent(OnBaseRecyclerAdapterEvent onBaseRecyclerAdapterEvent) {
        this.onBaseRecyclerAdapterEvent = onBaseRecyclerAdapterEvent;
    }

    OnBaseRecyclerAdapterEvent<T> onBaseRecyclerAdapterEvent;

    public interface OnBaseRecyclerAdapterEvent<T> {
        void onItemClick(int position);
        void onItemLongClick(int position);
    }
}
