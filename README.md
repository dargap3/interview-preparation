# JS INTERVIEW PREPARATION

## BIG O

- Big O notation is the language we use for talking about how long an algorithm takes to run.

- Good code can be described in two points or the three pillars of programming:

  1. **Readability:** Can others understand your code?
  2. Scalability: Can your system handle growth?
     - **Speed:** Time complexity
     - **Memory:** Space complexity

- ### Big O's

  1. O(1) Constant Time: No loops. (Excellent)
  2. O(n) Linear Time: loops through n items. (Fair)
  3. O(n^2) Quadratic time: every element in a collection needs to be compared to every other element. Two nested loops (Horrible)
  4. O(n!) Factorial time: you are adding a loop for every element. Oh no! (Horrible)

  Iterating through half a collection is still O(n).

  Two separate collections: O(a \* b)

- ### What Can Cause Time in a Function?

  - Operations (+,-, \*, /)
  - Comparisons (<, >, ===)
  - Looping
  - Outside Function call

- ### Rule Book

  1. We always care about what is the worst Case.
  2. Remove constants.
  3. Different inputs should have different variables:

  - O(a + b) --> For steps in the same order
  - O(a \* b) --> For nested steps

  4. Drop Non Dominants

## USEFUL RESOURCES

- [replit](https://replit.com/) --> Your own automated app developer
- [glot](https://glot.io/) --> an open source pastebin with runnable snippets and API.
- [Big O Cheat Sheet](https://www.bigocheatsheet.com/)
- [ZTM Big O Cheat Sheet](https://zerotomastery.io/cheatsheets/big-o-cheat-sheet/?utm_source=udemy&utm_medium=coursecontent)
- [Performance interface](https://developer.mozilla.org/en-US/docs/Web/API/Performance) --> When we use JS the browser has a method called 'perfomance' that could be useful.
