//átalakítani következőképpen:
//ide jópár rövid feladatot összegyűjtök, ami array methodra vonatkozik, meg array kezelésre úgy egyáltalán javascriptben
//1-1 gyakorlat/feladat array methodra kommentelve
//hogy csináljunk arrayból stringet és vissza
//egyéb array dolgok?
//wesbosos array practice is ide? meg javascrip.info meg freecodecamp
//minden, amit arrayokról tudni kell
//egy mappán belül

//selecting snippet content from html
const myArrayString = document.querySelector("#snippet2-array");
const myArray = myArrayString.textContent.split(",").map(Number);
console.log("teszting");
console.log(myArray);

/* Use arrow function syntax to compute the square
of only the positive integers
(decimal numbers are not integers)
in the array realNumberArray and store the new array
in the variable squaredIntegers.*/

//solution
const squareList = (arr) => {
  const squaredIntegers = arr
    //selecting positive integers only
    .filter((elem) => elem > 0 && elem % 1 === 0)
    //computing the square
    .map((elem) => elem * elem);

  return squaredIntegers;
};
//solution end

// test your code
const squaredIntegers = squareList(myArray);
console.log(squaredIntegers);
console.log(typeof squaredIntegers);

//display the result in actual result paragraph in html
const resultBox = document.querySelector("#snippet2 .actual-result");
resultBox.innerHTML = squaredIntegers.join(", ");
