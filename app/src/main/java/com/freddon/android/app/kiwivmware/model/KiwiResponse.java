package com.freddon.android.app.kiwivmware.model;

/**
 * Created by fred on 2017/3/19.
 */

public class KiwiResponse {

    private int error;
    private String message;

    public KiwiResponse() {
    }

    public int getError() {
        return error;
    }

    public void setError(int error) {
        this.error = error;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
