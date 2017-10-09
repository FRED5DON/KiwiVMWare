package com.freddon.android.app.kiwivmware.ui.activity;

import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.support.v7.widget.Toolbar;
import android.view.Menu;
import android.view.MenuItem;

import com.freddon.android.app.extension.viewlibs.widget.CROSWebView;
import com.freddon.android.app.kiwivmware.BaseActivity;
import com.freddon.android.app.kiwivmware.R;
import com.freddon.android.app.kiwivmware.config.VPSRecordMaker;
import com.freddon.android.app.kiwivmware.model.KiwiResponse;
import com.freddon.android.app.kiwivmware.model.KiwiVPSRecord;
import com.freddon.android.app.kiwivmware.presenter.KiwiShellPresenter;
import com.freddon.android.app.kiwivmware.presenter.composer.IKiwiShellComposer;

import java.util.ArrayList;

import butterknife.BindView;
import butterknife.ButterKnife;

/**
 * Created by fred on 2017/3/18.
 */

public class ShellActivity extends BaseActivity<IKiwiShellComposer.Presenter> implements IKiwiShellComposer.View {


    @BindView(R.id.webview)
    CROSWebView webview;
//    @BindView(R.id.et_messages)
//    EditText etMessages;
//    @BindView(R.id.et_cmd)
//    EditText etCmd;
//    @BindView(R.id.tv_run)
//    TextView tvRun;
//
//    String choseCmdFromHistory = "";
//    @BindView(R.id.iv_up)
//    ImageView ivUp;
//    @BindView(R.id.iv_down)
//    ImageView ivDown;

    public static final String HTML_URL = "file:///android_asset/index.html?veid=%s&api_key=%s#/kiwi/console";


    public static Intent newIntent(Context context) {
        Intent intent = new Intent();
        intent.setClass(context, ShellActivity.class);
        return intent;
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_webview);
        ButterKnife.bind(this);
        Toolbar toolbar = (Toolbar) findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);
        if (getSupportActionBar() != null)
            getSupportActionBar().setDisplayHomeAsUpEnabled(true);
//        mPresenter = new KiwiShellPresenter(this);
        KiwiVPSRecord current = VPSRecordMaker.getChecked(this);
        if (current == null) {
            finish();
            return;
        }
        webview.loadUrl(String.format(HTML_URL, current.getVeid(), current.getApiKey()));
    }
//
//    @OnClick({R.id.tv_run, R.id.iv_up, R.id.iv_down})
//    public void onClick(View view) {
//        switch (view.getId()) {
//            case R.id.tv_run:
//                String cmd = etCmd.getText().toString().trim();
//                if (RegexHelper.isEmpty(cmd)) return;
//                etMessages.append("# ");
//                if (mPresenter != null) {
//                    commands.add(cmd);
//                    etMessages.append(cmd);
//                    selectedIndex = commands.size() - 1;
//                    mPresenter.execShellCmd(this, cmd);
//                }
//                break;
//            case R.id.iv_up:
//                if (selectedIndex > 0) {
//                    selectedIndex--;
//                }
//                if (selectedIndex < 0) return;
//                ivUp.setEnabled(selectedIndex == 0);
//                ivDown.setEnabled(selectedIndex + 1 < commands.size());
//                String hisCmd = commands.get(selectedIndex);
//                if (!RegexHelper.isEmpty(hisCmd)) {
//                    etCmd.setText(hisCmd);
//                }
//                break;
//            case R.id.iv_down:
//                if (selectedIndex != -1 && selectedIndex + 1 < commands.size()) {
//                    selectedIndex++;
//                }
//                if (selectedIndex < 0) return;
//                ivUp.setEnabled(selectedIndex > 0);
//                ivDown.setEnabled(selectedIndex + 1 == commands.size());
//                String hisCmd2 = commands.get(selectedIndex);
//                if (!RegexHelper.isEmpty(hisCmd2)) {
//                    etCmd.setText(hisCmd2);
//                }
//                break;
//        }
//
//    }


    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        switch (item.getItemId()) {
            case android.R.id.home:
                onBackPressed();
                return true;
            case R.id.action_settings_cmds:
                break;
            default:
                break;
        }
        return super.onOptionsItemSelected(item);
    }

    @Override
    public void onMessage(KiwiResponse kiwiResponse) {
//        etMessages.append("\n");
//        int len = kiwiResponse.getMessage().length();
//        if (kiwiResponse.getError() != 0) {
//            SpannableString spanString = new SpannableString(kiwiResponse.getMessage());
//            ForegroundColorSpan span = new ForegroundColorSpan(Color.RED);
//            spanString.setSpan(span, 0, len, Spannable.SPAN_EXCLUSIVE_EXCLUSIVE);
//            etMessages.append(spanString);
//        } else {
//            etMessages.append(kiwiResponse.getMessage());
//        }
    }

    @Override
    public void setPresenter(IKiwiShellComposer.Presenter presenter) {

    }

    @Override
    public void error(CharSequence errorMsg) {

    }

    @Override
    public void loading(boolean isShowLoading) {
//        tvRun.setEnabled(!isShowLoading);
//        if (isShowLoading) {
//            tvRun.setText("wait");
//        } else {
//            tvRun.setText("Run");
//        }
    }
}
