// Prime Numbers
Number.prototype.isPrime = function () {
  for (let i = 2; i < this; i++) {
    if (this % i === 0) {
      return false;
    }
  }
  return true;
};

// Fibonnaci

// recursive
function rFib(n) {
  if (n < 2) {
    return n;
  }
  return rFib(n - 1) + rFib(n - 2);
}
rFib(20);
// iterative
function iFib(n) {
  const vals = [0, 1];
  while (vals.length - 1 < n) {
    let len = vals.length;
    vals.push(vals[len - 1] + vals[len - 2]);
  }
  return vals[n];
}
iFib(20);

// Reverse a string

const story =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";

 const fun = 
    story.split("").reverse().join("");
  console.log(fun);