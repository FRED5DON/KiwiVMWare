package com.freddon.android.app.kiwivmware.tools;

import java.util.ArrayList;
import java.util.Collection;

/**
 * Created by fred on 2017/3/19.
 */

public class QueryOrderedList<E> extends ArrayList<E> {

    private boolean accessOrder = false;

    public QueryOrderedList(int initialCapacity) {
        super(initialCapacity);
    }

    public QueryOrderedList() {
    }

    public QueryOrderedList(Collection c) {
        super(c);
    }

    public QueryOrderedList(boolean accessOrder) {
        this.accessOrder = accessOrder;
    }

    @Override
    public E get(int index) {
        E ob = super.get(index);
        if (accessOrder) {
            add(remove(index));
        }
        return ob;
    }

    @Override
    public boolean add(E e) {
        if (contains(e)) {
            remove(e);
        }
        return super.add(e);
    }
}
