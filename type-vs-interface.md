*Type Aliases vs Interfaces in TypeScript*
When building projects with TypeScript, one of the first design decisions you run into is deciding between type aliases and interfaces. Both let you define data shapes, but they behave differently under the hood.

An interface is mainly used to describe the shape of an object or a class. The cool thing about interfaces is that they support declaration merging. If you declare two interfaces with the same name, TypeScript automatically merges their properties together. This makes interfaces great for public APIs or object-oriented structures where you might want to extend types later.

Example:
interface User {
  name: string;
  age: number;
}

On the other hand, a type alias is much more flexible. You can use types for primitives, union types, tuples, and function signatures not just objects. However, once you declare a type, you cannot open it back up to add new properties.

I usually pick interfaces when writing object structures or class contracts. But if I need union types, quick tuples, or primitive aliases, I go with types. Both are core tools, so picking the right one just comes down to what data structure you are trying to represent.
