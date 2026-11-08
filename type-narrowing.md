*Type Narrowing in TypeScript*
When working with flexible data types like unions in TypeScript, the compiler often needs help figuring out the specific type of a variable at runtime. This process of filtering down a broad type to a specific one is called type narrowing.

Without type narrowing, TypeScript will throw errors if you try to call methods that don't exist on all possible types in a union. We can use standard JavaScript checks to safely narrow down these types inside conditional blocks.

The most common approach is using the typeof operator for primitive values like strings, numbers, or booleans. For instance, checking typeof value === "string" lets TypeScript know that inside that block, the variable is strictly a string.

Type narrowing makes your code type-safe without needing unsafe type assertions like as. It keeps runtime code clean while ensuring TypeScript catches type mismatches before your code even runs.