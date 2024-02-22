//word vs keywords(done)
    // words are those which dont have any meaning in java we can also make it variable
    //keywords are those which have a specific functionality within in the programming language
//var const let(done)
    const dulha ="rizwan";
    const dulhan ="sara";
//hoisting(done)
    //variable and function are hoisted which means there decleration is moved at the top of the code
    //javascript iss concept ko undefined and defined kay basis per evaluate kerti hai
    //which means kay app variable declere kernay say pehlay hi print kara saktay ho tou error nai aee ga because varible declere kertay hi variable decleration autmaticlly top of the code move hogae gi so variable decleration say pehlay print karanay per indefined aee ga!!
    console.log(a);
    console.log(a);
    // var a; //decleration
    // a = 12;//intialization
    var a = 12;
//tyoes in js(Done)
    //primitive
    //reference [] {} ()
    //aesi koi bhi value jisko copy kernay per real copy nai hota hai
    //balkay uski main value ks reference pass hojata hai usse hum reference value kehtay hai
    //aur jiska copy kernay per real value copy hojae wo primitive hotq 
    
    //primitive
        a = 12;
        b = 2+a;
        //it will not affect the vsalue of "a"
    //reference
        var aa = [1 , 2, 3, 4];
        var bb = aa;
        bb.pop();
// Conditionals- if else else-if (Done)
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

// Loops for and while(Done)
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
//Functions(Done)
    // FUnction is mainly for three purposes
    // 1)jab appp apna code foran nai chalana chahtay future may chalana chahtay ho
    // 2)when you have to reuse the code
    // 3)when you have to run the code with different values


    // function hellobolo(){
    //     console.log("hello world");
    // }

    // hellobolo();

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

//Objects(Done)
    var car = {
        color: "white",  //these all are the properties of the object
        model: "maruti",
        digitel: false,
        car_sound: function(){console.log("raaaaattaaaaratatatattttaaaaaaaaaa")}
    }