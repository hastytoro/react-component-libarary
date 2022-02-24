## Basic Login Form

With `styled-components` the styles are bound to the React component created. In a component-driven framework like React this is exactly what you want most of the time.

But what about global styles? Well we applying a **CSS reset** as a (baseline) for all html elements.
And `styled-components` provide this specific API for creating global styles from GlobalStyles.js:

Now when we render _GlobalStyles_ as a styled component, it will inject all of its CSS into the <head> of the document, applying those (baseline) styles. It doesn't really matter where you render this component as there is no significant advantage to putting it above or below the rest of your <App /> content.

We normally include it as a **top-level** App component so that it's always being rendered, and we place it below the rest of the JSX in that component so that it's out of the way.

> Remember these are not component specific styles but rather a (baseline) for your general application. At no point are we reaching into a component and applying styles.
