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

    const formatOne=formatString("Hello");
    console.log(formatOne);

    const formatTwo=formatString("Hello",true);
    console.log(formatTwo);

    const formatThree=formatString("Hello", false);
    console.log(formatThree);

//problem-2

const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 }
  ]; 

  function filterByRating(
    items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
    

    function overRate(books: { title: string; rating: number }): boolean {
        return books.rating >= 4;
    }
    return items.filter(overRate);
}


   
  const finalRate=filterByRating(books);
  console.log(finalRate);

//problem-3
concatenateArrays(["a", "b"], ["c"]);       
concatenateArrays([1, 2], [3, 4], [5]); 

function concatenateArrays<T>(...arrays: T[][]): T[] {
    const result: T[] = [];
    for (const array of arrays) {
        result.push(...array);
    }
    return result;
    console.log(result);
}

//problem-4
class Vehicle {
    private make: string;
    private year: number;
  
    constructor(make: string, year: number) {
      this.make = make;
      this.year = year;
    }
  
    public getInfo(): void {
      console.log(`Make: ${this.make}, Year: ${this.year}`);
    }
  }
  class Car extends Vehicle {
    private model: string;
  
    constructor(make: string, year: number, model: string) {
      super(make, year);
      this.model = model;
    }
    getModel(): void {
      console.log(`Model: ${this.model}`);
    }
  }

  //problem-5
  function processValue(value: string | number): number{
    if (typeof value== 'string') {
        return value.length
    }
    else{
        return value*2
    }
  }
  processValue("hello"); // Output: 5
 processValue(10);      // Output: 20

//problem-6
interface Product {
    name: string;
    price: number;
  }
  
  function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length === 0) return null;
    
    let mostExpensive = products[0];
    
    for (let i = 1; i < products.length; i++) {
      if (products[i].price > mostExpensive.price) {
        mostExpensive = products[i];
      }
    }
    
    return mostExpensive;
  }
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
    if (day === Day.Friday) {
      return "Weekend";
    } else {
      return "Weekday";
    }
  }
   //problem-8
   
   async function squareAsync(n: number): Promise<number> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (n < 0) {
                reject(new Error("Negative number not allowed"));
            } else {
                resolve(n * n);
            }
        }, 1000);
    });
}

}


