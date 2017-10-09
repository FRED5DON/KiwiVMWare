package com.freddon.android.app.kiwivmware.tools;

import android.text.TextUtils;
import java.util.Map;

/**
 * Created by fred on 2016/11/1.
 */

public class RegexHelper {


    public static String replaceSpace(String str){
        if (str!=null){
            return str.replaceAll("\\s","");
        }
        return str;
    }


    /**
     * 验证Host
     *
     * @param str
     * @return
     */
    public static boolean isHost(String str) {
        if (isEmpty(str)) {
            return false;
        }
        return str.matches("[0-9a-zA-Z\\.]+[a-zA-Z]+");
    }

    /**
     * 验证IP
     *
     * @param str
     * @return
     */
    public static boolean isIP(String str) {
        if (isEmpty(str)) {
            return false;
        }
        return str.matches("([0-1]?\\d{1,2}|2[0-4]\\d|25[0-5])\\.([0-1]?\\d{1,2}|2[0-4]\\d|25[0-5])\\.([0-1]?\\d{1,2}|2[0-4]\\d|25[0-5])\\.([0-1]?\\d{1,2}|2[0-4]\\d|25[0-5])");
    }


    /**
     * 验证包含字母数字
     *
     * @param str
     * @return
     */
    public static boolean email(String str) {
        if (isEmpty(str)) {
            return false;
        }
        return str.matches("[0-9a-zA-Z\\.]*[0-9a-zA-Z]+@[0-9a-zA-Z]+[\\.a-zA-Z]+");
    }


    /**
     * 长度判定
     *
     * @param str
     * @param minCount
     * @param maxCount
     * @return
     */
    public static boolean strLen(String str, int minCount, int maxCount) {
        if (str == null) {
            return false;
        }
        if (minCount > maxCount) return false;
        return str.length() >= minCount && str.length() <= maxCount;
    }


    /**
     * 判断两组字符串是否相等
     *
     * @param l
     * @param r
     * @return
     */
    public static boolean eq(String l, String r) {
        if (r == null && l == null) {
            return true;
        }
        if (null != r && null != l) {
            return r.equals(l);
        } else {
            return false;
        }
    }

    /**
     * 密码判定
     *
     * @param str
     * @return
     */
    public static boolean password(String str) {
        if (isEmpty(str)) {
            return false;
        }
        return str.matches("[0-9a-zA-Z@\\-_\\.!]+");
    }


    /**
     * 验证包含字母数字
     *
     * @param str
     * @return
     */
    public static boolean alpha(String str) {
        if (isEmpty(str)) {
            return false;
        }
        return str.matches("[0-9a-zA-Z]+");
    }

    /**
     * @param str
     * @return
     */
    public static boolean alpha_undlerline(String str) {
        if (isEmpty(str)) {
            return false;
        }
        return str.matches("[0-9a-zA-Z_]+");
    }


    /**
     * 验证手机号码格式是否正确，只验证以1开头的11位数字
     *
     * @param phone
     * @return
     */
    public static boolean phoneValidate(String phone) {
        if (phone == null) {
            return false;
        }

        return phone.matches("^1\\d{10}");
    }


    /**
     * 验证是否位数字
     * 支持科学技术法
     * by fred
     *
     * @param str
     * @return
     */
    public static boolean isNumber(String str) {
        if (str == null) {
            return false;
        }
        if (TextUtils.isDigitsOnly(str)) {
            return true;
        }
        boolean isNumber = str.matches("\\d+(.\\d*)?");
        if (isNumber) {
            return isNumber;
        }
        //科学计数法
        //形如 1000 1,133 0,133 0.133 13,133.133,133
        isNumber = str.matches("(\\d{1,3}(,\\d{3})*)?(.(\\d{1,3}|(\\d{3},)*\\d{1,3}))?");
        if (isNumber) {
            return isNumber;
        }
        return false;
    }


    /**
     * 判断空
     *
     * @param t
     * @param <T>
     * @return
     */
    public static <T> boolean isEmpty(T t) {
        if (t == null) return true;
        if (t instanceof CharSequence) {
            return TextUtils.isEmpty((CharSequence) t);
        }
        if (t instanceof Map) {
            Map map = (Map) t;
            return map.entrySet().size() == 0;
        }
        if (t instanceof Iterable) {
            return !((Iterable) t).iterator().hasNext();
        }
        if (t instanceof Object[]) {
            return ((Object[]) t).length == 0;
        }
        return false;
    }
}
