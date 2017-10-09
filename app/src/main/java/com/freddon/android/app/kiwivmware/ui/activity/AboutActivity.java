package com.freddon.android.app.kiwivmware.ui.activity;

import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v7.widget.Toolbar;
import android.view.MenuItem;
import android.widget.TextView;

import com.freddon.android.app.kiwivmware.BaseActivity;
import com.freddon.android.app.kiwivmware.R;

import butterknife.BindView;
import butterknife.ButterKnife;

/**
 * Created by fred on 16/8/8.
 */
public class AboutActivity extends BaseActivity {


    @BindView(R.id.about)
    TextView about;

    public static Intent newIntent(Context context) {
        Intent intent = new Intent();
        intent.setClass(context, AboutActivity.class);
        return intent;
    }

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_about);
        ButterKnife.bind(this);
        Toolbar toolbar = (Toolbar) findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);
        if (getSupportActionBar() != null)
            getSupportActionBar().setDisplayHomeAsUpEnabled(true);
//        about.setText("kiwivm 简版Android客户端\n主要功能：\n1 查看主机基本信息 \n2 添加切换查看主机 \n3 shell命令模拟 \n4 主机操作（启动或停止主机）\n");
    }


    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        switch (item.getItemId()) {
            case android.R.id.home:
                onBackPressed();
                return true;
            default:
                break;
        }
        return super.onOptionsItemSelected(item);
    }
}
