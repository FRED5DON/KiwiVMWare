package com.freddon.android.app.extension.viewlibs.widget;

import android.content.Context;
import android.content.res.TypedArray;
import android.graphics.drawable.Drawable;
import android.support.annotation.DrawableRes;
import android.text.Html;
import android.util.AttributeSet;
import android.view.View;
import android.view.animation.Animation;
import android.widget.FrameLayout;
import android.widget.ImageView;
import android.widget.TextView;

import com.freddon.android.app.extension.animation.AnimationCenter;
import com.freddon.android.app.kiwivmware.R;

import butterknife.BindView;
import butterknife.ButterKnife;

/**
 * Created by fred on 2016/11/5.
 */

public class MaskLayoutView extends FrameLayout {
    @BindView(R.id.iv_icon_mask_layers)
    ImageView ivIconMaskLayers;
    @BindView(R.id.tv_msg_mask_layers)
    TextView tvMsgMaskLayers;

    public MaskLayoutView(Context context) {
        this(context, null);
    }

    public MaskLayoutView(Context context, AttributeSet attrs) {
        this(context, attrs, 0);
    }

    public MaskLayoutView(Context context, AttributeSet attrs, int defStyleAttr) {
        super(context, attrs, defStyleAttr);
        initLayout(context);
        if (attrs != null) {
            TypedArray a = context.obtainStyledAttributes(attrs,
                    R.styleable.MaskLayoutView);
            int n = a.getIndexCount();
            for (int i = 0; i < n; i++) {
                int attr = a.getIndex(i);
                switch (attr) {
                    case R.styleable.MaskLayoutView_maskIcon:
                        setIcon(a.getDrawable(attr));
                        break;
                    case R.styleable.MaskLayoutView_maskText:
                        setText(a.getString(attr));
                        break;
                    default:
                        break;
                }
            }
            a.recycle();
        }
    }

    private void initLayout(Context context) {
        View.inflate(context, R.layout.mask_layers_layout, this);
        ButterKnife.bind(this);
        ivIconMaskLayers.setScaleType(ImageView.ScaleType.FIT_CENTER);
    }


    // region : @fred  [2016/11/5]

    public void setIcon(@DrawableRes int resId) {
        ivIconMaskLayers.setImageResource(resId);
    }

    public void setIcon(Drawable drawable) {
        ivIconMaskLayers.setImageDrawable(drawable);
    }

    public void setText(CharSequence charSequence) {
        if (charSequence == null) {
            charSequence = "";
        }
        tvMsgMaskLayers.setText(charSequence);
    }

    public void setText(String str) {
        if (str == null) {
            str = "";
        }
        setText(Html.fromHtml(str));
    }

    public void showWithAnimation(Animation animation){
        if (animation==null){
            AnimationCenter.showAnimation(this,400);
        }else{
            this.startAnimation(animation);
        }
    }


    // endregion
}
