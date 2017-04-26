package com.freddon.android.app.kiwivmware.config;

import android.content.Context;
import android.support.annotation.NonNull;

import com.freddon.android.app.kiwivmware.model.KiwiVPSRecord;
import com.freddon.android.app.kiwivmware.tools.SPBase;
import com.freddon.android.app.kiwivmware.tools.SPKey;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by fred on 2017/3/16.
 */

public class VPSRecordMaker {

    public static List<KiwiVPSRecord> all(@NonNull Context context) {
        return SPBase.builder(context).getList(SPKey.KIWIVPSRECORD, KiwiVPSRecord.class);
    }


    public static void checked(@NonNull Context context, KiwiVPSRecord kiwiVPSRecord) {
        SPBase.builder(context).putObject(SPKey.KIWIVPSRECORD_CHECKED, kiwiVPSRecord);
    }

    public static KiwiVPSRecord getChecked(@NonNull Context context) {
        return SPBase.builder(context).getObject(SPKey.KIWIVPSRECORD_CHECKED, KiwiVPSRecord.class);
    }


    public static void putAll(@NonNull Context context, List<KiwiVPSRecord> kiwiVPSRecords) {
        if (kiwiVPSRecords == null || kiwiVPSRecords.size() == 0) return;
        List<KiwiVPSRecord> list = SPBase.builder(context).getList(SPKey.KIWIVPSRECORD, KiwiVPSRecord.class);
        if (list == null) {
            list = new ArrayList<>();
        } else {
            list.clear();
            list.addAll(kiwiVPSRecords);
        }
        SPBase.builder(context).putObject(SPKey.KIWIVPSRECORD, list);
    }


    public static void put(@NonNull Context context, KiwiVPSRecord kiwiVPSRecord) {
        List<KiwiVPSRecord> list = SPBase.builder(context).getList(SPKey.KIWIVPSRECORD, KiwiVPSRecord.class);
        if (list == null) {
            list = new ArrayList<>();
        }
        list.add(kiwiVPSRecord);
        SPBase.builder(context).putObject(SPKey.KIWIVPSRECORD, list);
    }

    public static void delete(@NonNull Context context, KiwiVPSRecord kiwiVPSRecord) {
        List<KiwiVPSRecord> list = SPBase.builder(context).getList(SPKey.KIWIVPSRECORD, KiwiVPSRecord.class);
        if (list == null || list.size() == 0) {
            return;
        }
        for (int i = 0; i < list.size(); i++) {
            KiwiVPSRecord vpsRecord = list.get(i);
            if (vpsRecord.getTimemills() == kiwiVPSRecord.getTimemills()) {
                list.remove(i);
                break;
            }
        }
        SPBase.builder(context).putObject(SPKey.KIWIVPSRECORD, list);
    }
}
