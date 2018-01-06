export class Store {
    private subscribers: Function[];
    private reducers: { [key: string]: Function };
    private state: { [key: string]: any };

    constructor(reducers: any = {}, initialState: any = {}) {
        console.log('despatching an action for initialState');
        this.state = this.reduce(initialState, {});
        this.reducers = reducers;
    }

    get value(): any {
        return this.state;
    }

    dispatch(action: any) {
        // create a new object, add the existing state, then append on the new data
        console.log('dispatching an action..');
        this.state = this.reduce(this.state, action);
    }

    private reduce(state, action) {
        console.log('reducing..');
        console.log('state = ', state);
        console.log('action = ', action);
        console.log('this.reducers = ', this.reducers);

        const newState = {};

        //  compose the new state by iterating over all of the reducers. 
        //  each reducer will update the appropriate state
        for (const prop in this.reducers) {
            // equivalent to newState.todos = this.reducers.todos; 
            newState[prop] = this.reducers[prop](state[prop], action);
        }

        console.log('newState = ', newState);
        return newState;
    }
}