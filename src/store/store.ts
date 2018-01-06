export class Store {
    private subscribers: Function[];
    private reducers: { [key: string]: Function};
    private state : { [key: string]: any };

    constructor(reducers : any = {}, initialState : any = {} ) {
        this.state = initialState;
    }

    // use a typescript get property
    // usage: console.log(store.value);
    get value(): any {
        return this.state;
    }

    dispatch(action: any) {
        // create a new object, add the existing state, then append on the new data
        this.state = {
            ...this.state, 
            todos: [...this.state.todos, action.payload]
        }
        console.log(this.state);
    } 
}