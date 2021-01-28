Question 1: It will print out the value of i (which is equal to prices.length) because i was initialized with a var type which means it ignores code blocks so therefore, the value of i is present in the whole function of discountPrice. <br />
<br />
Question 2: At line 12, it will print out the last calculated value of discountedPrice which is prices[prices.length-1] * (1 - discount) because discountedPrice is type var so its scope is anywhere in the function discountPrice. <br />
<br />
Question 3: At line 3, it will print out the last calculated value of finalPrice which is the rounded answer of discountedPrice on iteration i = prices[prices.length-1]. Since finalPrice was declared as a var in the beginning of the function, its scope it the whole function so it it present at the log statement and print out the last calculated value. <br />
<br />
Question 4: discountPrices([100, 200, 300], .5) will log the following lines into the console: 3, 150, and 150. This is because since the prices.length is equal to 3, the for-loop iterates and when i is equal to 3, it fails the condition to loop through it again so i breaks the for-loop with a value of 3 so 3 is printed. Then, one the last iteration the for-loop had which was i=2, it calculated discountedPrice which is prices[2] * (1 - 0.5) which is equal to 150, and since the value did not get updated and it is type var, it outputted 150. Lastly, on the last iteration of the for-loop for i=2, we see that finalPrice had its value updated a final time by rounding the value of discountedPrice calculated in the previous step. So in this case, finalPrice had a value of 150 and that is what's printed. Overall, it will return the discounted list which has values of finalPrice as it was updated. It will give us [50,100,150].<br />
<br />
Question 5: Line 11 will cause an error because i was initialized as a "let" which means its scope is only in the for-loop and since we are calling is outside the for-loop, it is not accessible in that scope so an error will be caused. <br />
<br />
Question 6: Line 12 will cause an error because discountedPrice was initialized as a "let" variable inside the for-loop so it is only accessible inside the for-loop. So calling it outside the for-loop will cause an error.  <br />
<br />
Question 7: Line 13 will correctly output the value of finalPrice because finalPrice was declared as a "let" variable in the function discountPrices but outside the for-loop which means it is function-scoped so it can be called upon anytime in the function without an error. <br />
<br />
Question 8: Assuming there are no errors with the console.log() statements, the discounted list is initialized as "let" and has function-scope of discountPrices so it will be correctly returned with the discounted values in it. It will give us [50,100,150]<br />
<br />
Question 9-12 answered as if the const error was fixed <br />
<br />
Question 9: Since i was initialized in the for-loop with type "let", its scope is only in the for-loop so when you need to print it, it will throw an error because it is not accessible. <br />
<br />
Question 10: At line 12, printing discountedPrice will cause an error because it was initialized as a const inside the for-loop so its scope is in the for-loop and not outside of it so there will be an error. <br />
<br />
Question 11: At line 13, finalPrice will be printed because the scope of it is the function as finalPrice was declared as a const inside the function but outside the for-loop so it will be printed; however, only 0 will be printed. <br />
<br />
Question 12: The function will return a list of 0's of size equal to prices.length because finalPrice is 0 and it cannot be updated so it will constantly be adding 0's. <br />
<br />
Question 13a: student.name <br />
<br />
Question 13b: student["Grad Year"] <br />
<br />
Question 13c: student.greeting() <br />
<br />
Question 13d: student['Favorite Teacher'].name <br />
<br />
Question 13e: student.courseLoad[0] <br />
<br />
Question 14a: '32' - Since the first element was a literal string, it assumed that the + is for string concatenation and therefore, it printed out 32. <br />
<br />
Question 14b: 1 - Since we have the subtraction sign, it assumes we are not doing string concatenation despite seeing a '3' and instead, subtracts the integer 3 and the integer 2 to get 1. <br />
<br />
Question 14c: 3 - A null becomes converted into a 0 so it is 3 + 0 which is 3. <br />
<br />
Question 14d: '3null' - Since the first element was a literal string, it assumed that the + is for string concatenation and therefore, it printed out 3null. <br />
<br />
Question 14e: 4 - true gets converted into a numeric value of 1 so it becomes 1 + 3 which is 4. <br />
<br />
Question 14f: 0 - Since false and null are different types, it converts them into numeric types in which both are 0 so therefore it is 0+0=0. <br />
<br />
Question 14g: '3undefined' - Since the first element was a literal string, it assumed that the + is for string concatenation and therefore, it printed out '3undefined'. <br />
<br />
Question 14h: NaN - Since we have the subtraction sign, it assumes we are not doing string concatenation despite seeing a '3' and instead, subtraction. So, the second value is converted into a numerical value of NaN which means the overall answer will be NaN. <br />
<br />

Question 15a: True - The String 2 becomes a numeric value of 2 which is greater than 1. <br />
<br />
Question 15b: False - Since both are strings, it compares starting at the first index and since "2" is not less than "1", it will return false. <br />
<br />
Question 15c: True - It converts the string to a numeric answer in which 2 is equal to 2. <br />
<br />
Question 15d: False - Since it is three equals, it will check to see if they are equal without type converting and since one is a number and the other is a string, it will not be equal. <br />
<br />
Question 15e: False - true has a numeric value of 1 which is not equal to 2. <br />
<br />
Question 15f: True - Since we explicitly call Boolean, it sees that 2 is not a 0 so it will be equal to true. Then we check without auto conversion if true === true which is true. <br />
<br />
Question 16: == allows for auto conversion between types where as === does not and it must be exactly the same value in the same type for it to return true. <br />
<br />

Question 17: It will print "How  are you?". In the first if statement, it checks if 2==true and with type conversion, true gets converted into a value of 1 so it checks to see if 2==1 which is does not so it does not enter that condition. Since 2 is not empty (0), not an empty string, not null, not undefined, and not Nan, it is converted into true and therefore, it enters that condition statement and prints out "How  are you?". <br />
<br />

Question 18: JavaScript File <br />
<br />

Question 19: The result is [6,8,10]. We enter the for-loop and start at i = 0. We see that our callback function is doSomething and we pass it with array[i] = 1 and out function(x) which returns x times 2. In doSomething, you add 2 to the value which is 3 and then the function(x) multiplies it by 2 which leads us with 6. The loop continues for all values in the array so it adds 2, then multiplies by 2, and adds it to the newArr. <br />
<br />

Question 20: JavaScript File <br />
<br />

Question 21: It outputs: 1 4 3 2 <br />
<br />
