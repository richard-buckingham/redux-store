// the initial state can be passed into the reducer, but for now we'll created it here.
export const initialState = {
    loaded: false,
    loading: false,
    data: [{ label: "have a herbal tea, set in the reducer", complete: false }]
};

export function reducer(state = initialState,
    action: { type: string, payload: any }) {

    console.log('in the reducer');
    console.log('state = ', state);
    console.log('action = ', action);

    switch (action.type) {
        case 'ADD_TODO': {
            // get the new todo
            const todo = action.payload;
            // construct the updated data array
            const data = [...state.data, todo];
            return {
                ...this.state,
                data: data
            }
        }
    }

    // if action.type is not matched, just return the unaltered state
    return state;
}