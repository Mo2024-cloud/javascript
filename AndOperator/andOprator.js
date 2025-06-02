console.log("Hello" && 44);
console.log(undefined && 5);
console.log(undefined && 0);
console.log(0 && "hello");

// true && true => Will Return Last True Value
// False && true => Will Return Frist False Value

// ---------------------------------------------------------------------------

console.log("Hello" || 44);
console.log(undefined || 5);
console.log(undefined || 0);
console.log(1 || "hello");

// true || true => Will Return Frist True Value
// False || true => Will Will Search Untill Find True Value