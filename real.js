//word vs keywords(demonstrated above)
    // words are those which dont have any meaning in java we can also make it variable
    //keywords are those which have a specific functionality within in the programming language

//(types of variable decleration)var const let(demonstrated above)
    // var: Variables declared with var have function scope or global scope, and can be redeclared and reassigned.
    var age = 30; // Declaring a variable 'age' with value 30

    /* let: Variables declared with let have block scope,
    meaning they are limited to the block in which they are declared, and can be reassigned but not redeclared.*/
    let name = "John"; // Declaring a variable 'name' with value "John"

    /* const: Variables declared with const are block-scoped like let,
    but their values cannot be reassigned after initialization.*/
    const isStudent = "true"; // Declaring a constant variable 'isStudent' with value true

//hoisting(demonstrated)
    /*Variables and functions in JavaScript are hoisted,
    meaning their declarations are moved to the top of the code during the compilation phase.
    JavaScript evaluates expressions based on whether variables have been declared yet (resulting in `undefined`)
    or have been assigned a value (resulting in being `defined`). This means you can print a variable before declaring
    it without encountering an error because variable declarations are automatically moved to the top of the code.
    However, attempting to print a variable before its declaration will yield `undefined` since only the declaration, 
    not the assignment, is hoisted.*/
    console.log(a);
    var a; //decleration
    a = 12;//intialization
    
// Values in JavaScript can be categorized into two main types: primitive and reference.
    /* (1) Reference values in JavaScript include arrays ([]), objects ({}), and functions ().
    These values are not copied directly when assigned or passed to a variable or function.
    Instead, their reference, or memory address, is passed. Therefore, when you copy a reference value,
    you're actually copying a reference to the original value rather than creating a new independent copy.
    This is why changes made to the copied value affect the original value as well.
    For example:*/
    var originalArray = [1, 2, 3];
    var copiedArray = originalArray; // Now 'copiedArray' points to the same memory location as 'originalArray'

    copiedArray.push(4); // This will also modify 'originalArray'

    // console.log(originalArray);  Output: [1, 2, 3, 4]
    //console.log(copiedArray);   Output: [1, 2, 3, 4]

    // (2) Primitive
    // Primitive values include numbers, strings, booleans, null, and undefined.
    /*When you copy a primitive value, you are creating an entirely new copy of that value.
    Changes made to the copied value do not affect the original value.
    For example: */ 
    var a = 12;
    var b = 2 + a; // 'b' now holds the value 14, and it does not affect the value of 'a'

    console.log(a); // Output: 12
    console.log(b); // Output: 14


// Conditionals- if else else-if (demonstrated above)
    // jab bhu baat ager mager ya phir aesa waisa ager aesa howa tou yae karo waea howa tou yae karo
    if(12>10){
    }
    // else if(){

    // }
    // else if(){

    // }
    else{
        console.log("yeah");
    }

// Loops for and while(demonstrated above)
    // for(start;end;change){    //pattren

    // }
    // var i = 0;
    // for(i; i<11; i++){
    //     console.log(i);
    // }

    // while(contition){         //pattren
    //     working
    // }

    // var a = 12;

    // while( a< 20){
    //     a++;
    // }

//Functions(demonstrated above)
    // FUnction is mainly for three purposes
    // 1)jab appp apna code foran nai chalana chahtay future may chalana chahtay ho
    // 2)when you have to reuse the code
    // 3)when you have to run the code with different values

    // function sayhello(){
    //     console.log("hello world");
    // }

    // sayhello();

    // function yooo(a,b,c){  //parametarized fucntion
    //     console.log(a,b,c);
    // }

    // yooo(22,33,44); //argument passing


//Arrays(Done)
    //if you have to store more than on value in a variable then you have to use array
    // push pop shift unshift theses are the methods of array

    var arr = [1,2,3,4,5,6,7];
    // arr.push(8);  //for adding value in the end of the array
    // arr.pop();  //for last item of the array
    // arr.unshift(0); //for adding value in the starting of the array
    //arr.shift(); //for removing one value from the starting
    //arr.splice(2,1); //for removing specific value from the array
    //splice pattern array.splice(index, how many values)
    // console.log(arr);

//Objects(demonstrated above)
    var car = {
        color: "white",  //these all are the properties of the object
        model: "maruti",
        digitel: false,
        car_sound: function(){console.log("starting engine")}
    }