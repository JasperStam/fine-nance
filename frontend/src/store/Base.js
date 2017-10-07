import {
    Model as BModel,
    Store as BStore,
    BinderApi,
    Casts as BCasts,
} from 'mobx-spine';

class MyApi extends BinderApi {
    baseUrl = '/api/';
}

const myApi = new MyApi();

export class Model extends BModel {
    api = myApi;
}

export class Store extends BStore {
    api = myApi;
}

export const api = myApi;

export const Casts = {
    ...BCasts,
    currency: {
        parse(attr, value) {
            if (value === null) {
                return null;
            }
            return value / 100;
        },
        toJS(attr, value) {
            if (value === null || value === '') {
                return null;
            }
            return value * 100;
        },
    },
};
