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


function concatenateArrays<T>(...arrays: T[][]): T[] {
    const result: T[] = [];
    for (const array of arrays) {
        result.push(...array);
    }
    return result;
    
}
const fullArray=concatenateArrays(["a", "b"], ["c"]);       

console.log(fullArray);

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
  const lengthOfValue=processValue("hello"); 
  console.log(lengthOfValue);
      



}


