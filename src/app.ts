import * as fromStore from './store';

import { renderTodos } from './utils';

const input = document.querySelector('input') as HTMLInputElement;
const button = document.querySelector('button') as HTMLButtonElement;
const destroy = document.querySelector('.unsubscribe') as HTMLButtonElement;
const todoList = document.querySelector('.todos') as HTMLLIElement;

// create the reducer
const reducers = {
  todo: fromStore.reducer // todo: is simply referencing a function (reducer)...
}

// create an instnce of our store, passing in our reducer
const store = new fromStore.Store(reducers);

// check the store value
console.log(store.value);

button.addEventListener(
  'click',
  () => {
    if (!input.value.trim()) { return; }

    const payload = { label: input.value, complete: false };

    // dispatch action
    store.dispatch({
        type: "ADD_TODO",
        payload
      }
    )

    //console.log(store.value);

    input.value = "";
  },
  false
);

// allow for unsubscribe, to prevent memory leaks
const unsubscribe = store.subscribe(state => {
  renderTodos(state.todo.data);
})

todoList.addEventListener("click", function(event) {
  const target = event.target as HTMLButtonElement;
  if (target.nodeName.toLowerCase() === "button") {
    console.log(target);
  }
});

store.subscribe(state => {
  console.log('STATE:::', state);
})
