# family-calendar.github.io
Use HTML only to create a Family Calendar (by loading the &lt;family-calender> Web Component)

For me learning to program has a preferred order. Alas many Web Components start by shopwing you JavaScript code, and tell you HOW to build Web Components.

* WHY - Motivation and purpose
* WHAT - Concepts, ideas and building blocks
* HOW - Syntax and implementation

# Web Components history

In the previous millenium Microsoft started with HTC... Mozilla took a stab in 2006 with XBL. It wasn't until 2011 Alex russell presented the first inclination of **standard** Web Components to the world.
Over the following years the Browser-vendors used Web Componnts technology to implement complex tag like <input> and <video>
Web Components technology enaled them to use a common API without having to standardize the inner workings of these tags; each vendor could write their own interpretation.
It wasn't until 2016 this Web Component API became available to us mortal developers in Chromium browsers. FireFox followed in 2017 and Safari in 2018


# Early Web Component specs

* [Microsoft <component> W3C proposal from **1998**](https://www.w3.org/TR/NOTE-HTMLComponents)

# The 14 KB sweetsize

[Why your website should be under 14kb in size]([text](https://endtimes.dev/why-your-website-should-be-under-14kb-in-size/))


# Styling shadowDOM
* Inheritable styles
* CSS properties
* ::part
    * [Part,Theme explainer](https://meowni.ca/posts/part-theme-explainer/)
* (::scheme)
* appending <style> to shadowRoot
* adopted StyleSheet
* <slot>


[Web Component patterns](https://chatgpt.com/s/t_6960c28e2a788191b20e0da4fae1aa46)
[Component API design](https://seanogrady.me/posts/component-api-design/)

## Security
[React 10 CVE](https://react.dev/blog/2025/12/03/critical-security-vulnerability-in-react-server-components)

# AI prompts analyzing the code

* How many createElement function calls append DOM Nodes in the 3rd attribute array
* Why does the <dialog> close with a click but not opens on the click
> <dialog> was opened but in same event cycle closed again by global onclick handler added evt.stopPropagatian

Read [](file:///c%3A/www/engelman/meister/family-calendar.github.io/customElements/define/family-calendar.source.js#1-1), lines 1 to 100

Read [](file:///c%3A/www/engelman/meister/family-calendar.github.io/customElements/define/family-calendar.source.js#100-100), lines 100 to 300

Read [](file:///c%3A/www/engelman/meister/family-calendar.github.io/customElements/define/family-calendar.source.js#300-300), lines 300 to 500

Read [](file:///c%3A/www/engelman/meister/family-calendar.github.io/customElements/define/family-calendar.source.js#700-700), lines 700 to 800

Read [](file:///c%3A/www/engelman/meister/family-calendar.github.io/customElements/define/family-calendar.source.js#1000-1000), lines 1000 to 1100

Based on reading this Web Components code, here are educational questions you could ask AI:

## **Architecture & Lifecycle**
1. Why is the entire component logic inside `connectedCallback()` instead of using separate lifecycle methods?
2. What are the performance implications of defining methods on instances rather than prototypes?
3. How does this component handle re-connection after disconnection?
4. Why use a custom tag name prefix system via URL parameters?

## **Shadow DOM & Styling**
5. Does this component use Shadow DOM? What are the implications of that choice?
6. How do `::part()` CSS selectors work and why are they used here instead of custom attributes?
7. What's the difference between `:host()` and regular CSS selectors in this context?
8. How can CSS variables be overridden from outside the component?
9. Why store CSS properties in `localStorage`?

## **Template & Slots**
10. How does the `<slot>` element system work for content projection?
11. What's the purpose of named slots like `createSLOTElement("header", ...)`?
12. Could this component use `<template>` tags instead of `createElement()`?

## **Dynamic Content & Data**
13. How does the async file loading system work with multiple family tree files?
14. What is the `__data` property pattern used on DOM nodes?
15. How are branch names tracked and used for filtering events?
16. Why use `.part.add()` for setting CSS parts dynamically?

## **Event Handling**
17. How does the click handler system work for toggling visibility?
18. Why store toggle states in both `localStorage` and element attributes?
19. What's the advantage of using `toggleAttribute()` over boolean properties?

## **Custom Elements API**
20. Why use `customElements.define()` with a class expression instead of a class declaration?
21. How does attribute reflection work with `getAttribute()` and `hasAttribute()`?
22. What's the difference between properties and attributes in this component?

## **Performance & Optimization**
23. Why are string constants obfuscated and stored in variables?
24. How does the minification strategy affect code readability vs. file size?
25. What's the purpose of the recursive tree transformation function?
26. Why use `Arrayfrom()` instead of `Array.from()`?

## **Advanced Patterns**
27. How does the component implement filtering by family branches?
28. What's the strategy for handling deceased persons and ex-partners?
29. How are dates calculated and compared for age/birthday logic?
30. Why create style elements dynamically instead of static CSS?

These questions cover core Web Components concepts while being specific to real implementation patterns in your code.