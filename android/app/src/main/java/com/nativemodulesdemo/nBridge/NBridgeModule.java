package com.nativebridgedemo.nBridge;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeMap;

public class NBridgeModule extends ReactContextBaseJavaModule {
    /**
     * Member Variables
     */

    private final ReactApplicationContext reactContext;
    /**
     * Constructor
     *
     * @param reactContext ReactApplicationContext
     */

    public NBridgeModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
    }

    @Override
    public String getName() {
        return "NBridge";
    }

    @ReactMethod
    public void resolvePromiseWithString(String name, Promise promise) {
        promise.resolve("Supplied name \"" + name + "\" meets the criteria");
    }

    @ReactMethod
    public void rejectPromise(String name, Promise promise) {
        promise.reject("Error", "Supplied name \"" + name + "\" does not meet the criteria");
    }

    @ReactMethod
    public void resolvePromiseWithJson(ReadableMap options, Promise promise) {
        try {
            WritableMap resultMap = new WritableNativeMap();

            resultMap.merge(options);
            resultMap.putInt("age", 20);
            promise.resolve(resultMap);
        } catch (Exception e) {
            promise.reject("Error", e.toString());
        }
    }
}