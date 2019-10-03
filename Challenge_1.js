let i;
let t;

function numberAdder() {
  t = 0;
  let n = prompt("Introduce any integer from 1-1000000");
  let boolean = Number.isInteger(n*1);
  if (n > 1000000 || n < 1) {
      alert("A number in between the given boundaries please!");
  } else if (boolean === false) {
    alert("No decimals please!");
  } else {
    for(i=0; i<n; i++) {
      if (i%3 == 0) {
        t = t + i;
      } else if (i%5 == 0) {
        t = t + i;
      }
    }
    console.log(t);
  }
}
