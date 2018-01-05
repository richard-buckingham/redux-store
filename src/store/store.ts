export class Store {
    private subscribers: Function[];
    private reducers: { [key: string]: Function};
    private state : { [key: string]: any };

    constructor(reducers = {}, initialState = {} ) {
        this.state = initialState;
    }

    // use a typescript get property
    // usage: console.log(store.value);
    get value() : any {
        return this.state;
    }
}