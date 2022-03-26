import React from 'react';
import './Question.css';

const Question = () => {
    return (
        <div className='question'>
            <h3>How react works?</h3>
            <p>Answer: React is a Javascript library that was created by Facebook (in around 2013) to create dynamic user interfaces for the web.The key word here is dynamic, which means content on the page can change dynamically while you interact with it. In other words, the page doesn’t render just static HTML.React is a library that allows you to write JavaScript code that can do that.What it does is it stores a virtual copy of the current DOM. When you try to change some contents on the webpage, it creates a new virtual DOM with those changes.What React does is it compares the virtual copy of the DOM (before changes were made to the page) with a new virtual copy of the DOM (with the new changes), and only reloads parts of the page that have changed.React uses virtual copies of the DOM at different stages to only reload parts of the page that have changed, giving the user a dynamic experience with the webpage.</p>
            <h3>How useState works?</h3>
            <p>Answer: useState enables you to add state to function components. Calling React.useState inside a function component generates a single piece of state associated with that component.Whereas the state in a class is always an object, with Hooks, the state can be any type. Each piece of state holds a single value, which can be an object, an array, a boolean, or any other type you can imagine.So when should you use the useState Hook? It’s especially useful for local component state, but larger projects might require additional state management solutions.useState is a Hook (function) that allows you to have state variables in functional components. You pass the initial state to this function and it returns a variable with the current state value (not necessarily the initial state) and another function to update this value.</p>
        </div>
    );
};

export default Question;