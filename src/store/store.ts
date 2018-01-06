export class Store {
    private subscribers: Function[];
    private reducers: { [key: string]: Function };
    private state: { [key: string]: any };

    constructor(reducers: any = {}, initialState: any = {}) {
        this.subscribers = [];
        this.reducers = reducers;
        this.state = this.reduce(initialState, {});
    }

    get value(): any {
        return this.state;
    }

    subscribe(fn) {
        this.subscribers = [...this.subscribers, fn];
        this.notify();
    }

    private notify() {
        // loop through each subscriber, passing in the state
        console.log('about to motify all subscribers...');
        this.subscribers.forEach(fn => fn(this.value));
    }

    dispatch(action: any) {
        // create a new object, add the existing state, then append on the new data
        console.log('dispatching an action..');
        this.state = this.reduce(this.state, action);
        this.notify();
    }


    private reduce(state, action) {

        const newState = {};

        //  compose the new state by iterating over all of the reducers. 
        //  each reducer will update the appropriate state
        for (const prop in this.reducers) {
            // equivalent to newState.todos = this.reducers.todos; 
            newState[prop] = this.reducers[prop](state[prop], action);
        }

        //console.log('newState = ', newState);
        return newState;
    }
}