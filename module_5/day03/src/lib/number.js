

 export default {
    abc: () => {
        console.log('hello');
    },
    sum: (num1, num2) => {
        let total = num1 + num2; 
        return total;
     },
     
     sub: (num1, num2) => {
         return num1 - num2; 
      },
     
      calculate: (num1, num2, action) => {
         if (action == '+') {
             return this.sum(num1, num2);
         }
     
         return this.sub(num1, num2);
      }
 }