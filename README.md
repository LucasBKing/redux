## Basic CRUD App - React/Redux

I'm learning the basics of Redux doing the hard way, coding.

### Things I've learned with this project:

#### What is Redux?
 - State management library that gives me access to state anywhere in my components without the need to pass props. 
#### Store
 - It's where the entire state of application will live.
 - Is an object which has some methods in it that allow me to get the current state of application.
 - I don't have to pass down data from the parent component.
 - method createStore() that needs a special argument, called reducer.

#### Reducer
 - A function that takes the current state and an action that was dispatched as it’s parameters and returns the new state.
 - A function that gives a new state for components.

#### Actions
 - JS objects with a type property. This type property describes the event that is taking place in the application.
 - This dispatch method accepts an object as it’s argument and this object is what we call as 'action'/'dispatch an action'.

#### Provider
 - Component that use something called React Context which allows me to pass the store object to any components without the need to pass props.

#### connect()
 - Get access to the dispatch method as a prop.
 - Returns a function which takes in my current component as an argument and returns a new component with dispatch method as it's props.
 - To get access to my state, I need to use a special function called mapStateToProps(), that does exactly what it is named, map the state from the store object to the props object in your components.
