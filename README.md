## Redux

---

- Redux is a state management tool
- It contains state outside of our component
- Though redux has so much boilerplates it helps to avoid cumbersome works e.g. we may use a state in a component but if we realize later that this state also needs to pass to its sibling component, then we need to lift our state up to its parent component.

**Summary:**

- React is a library to build UI
- Redux is a library for managing state in a predictable way in JS application
- React-Redux is library that provides bindings to use React and Redux together in an application

---

**3 core concepts in redux**

- store: _holds the state_
- action: _describe the changes in the state of the application_
- reducer: _what ties store and action_

Let's assume we have a cake shop contains 10 cake._(store)_

```js
store: {
  number_of_cake: 10;
}
```

Now the amount of will be reduced if only any customer comes to buy and describe what he wants._(action)_

```js
action: {
  type: BUY_CAKE;
}
```

How the state/number of cake will be changed depending on the order and then updates the number of cake.

> (previousState, action) => newState

```js
const reducer = (state = 10, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};
```
