{
    //problem-1

    function formatString(input: string, toUpper?: boolean): string{
        if (toUpper===true || toUpper===undefined) {
            return input.toUpperCase();
        }
        else{
            return input.toLowerCase();
        }
    }

    const firstOutput=formatString("Hello");   //output//
    console.log(firstOutput);

    const secondOutput=formatString("Hello",true);    //output//
    console.log(secondOutput);

    const thirdOutput=formatString("Hello", false);    //output//
    console.log(thirdOutput);

//problem-2

const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 }
  ]; 

  function filterByRating(
    items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
    

    function highRate(books: { title: string; rating: number }): boolean {
        return books.rating >= 4;
    }
    return items.filter(highRate);
}

 
  const finalRating=filterByRating(books);  //output//
  console.log(finalRating);

//problem-3


function concatenateArrays<T>(...arrays: T[][]): T[] {
    const result: T[] = [];
    for (const array of arrays) {
        result.push(...array);
    }
    return result;
    
}

const fullArray=concatenateArrays(["a", "b"], ["c"]);    //output// 
console.log(fullArray);


//problem-4

  


  //problem-5
  function processValue(value: string | number): number{
    if (typeof value== 'string') {
        return value.length
    }
    else{
        return value*2
    }
  }

  const finalValue=processValue("hello");    //output//
  console.log(finalValue);
      

//problem-6
const products = [
  { name: "Pen", price: 10 },
  { name: "Notebook", price: 25 },
  { name: "Bag", price: 50 }
];

interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  if (products.length === 0) return null;
  
  let highPrice = products[0];
  for (const item of products) {
    if (item.price > highPrice.price) {
      highPrice = item;
    }
  }
  return highPrice;
}

const expensiveProduct = getMostExpensiveProduct(products);  //output//
console.log(expensiveProduct);

  //problem-7
  enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }
  
  function getDayType(day: Day): string {
    if (day===Day.Sunday) {
      return "Weekend";
    } else {
      return "Weekday";
    }
  }

  const dayOfWeek=getDayType(Day.Monday);   //output//
  console.log(dayOfWeek);

  
   //problem-8
   

async function squareAsync(n: number): Promise<number>{
  return new Promise<number>((resolve,reject)=>{
      if(n>0){
        setTimeout(() => {
          return resolve(n*n)}, 1000);
      } 
      else{
          reject(
              Error("Negative number not allowed")
          )
      }
  })
}
squareAsync(4).then(console.log);  //output//

}


