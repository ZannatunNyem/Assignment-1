# Assignment-1
//What are some differences between interfaces and types in TypeScript?//

An interface shows us what properties and types an object should have. On the other hand, a type is similar to an interface but more flexible. There are many differences between type and interface:

An interface can be extended, but a type is fixed. Types cannot be changed once defined.

We cannot use the same name for a type, but we can define multiple interfaces with the same name .

Types can be extended using intersection [&]. On the other hand, interfaces can be extended using the extends keyword.

We use type when we need to define unions, tuples, a type alias for a primitive, or a function signature. We use interface to define the shape of an object.


//What is the use of the keyof keyword in TypeScript? Provide an example.

The keyof operator gives us the names of the properties of an object. We use the keyof operator to create new types from the keys of an existing object type.

type books={
  math:'string';
  english:'string';
  bangla:'string'
}
type exam=keyof books;