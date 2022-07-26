
const Numbers = () => {

    (() => {
        console.groupCollapsed("Random integer from -3 to 3");
            const ranNumA = Math.floor(Math.random() * 7) - 3;//gives me a random integer from -3 to 3
            for(let i = 0; i < 20; i++) {//this is the test for ^
                console.log(`${i}: ${Math.floor(Math.random() * 7) - 3}`);
            }
        console.groupEnd();
    })();

    (() => {//function that gives a random integer from min to max. (inculusive, inclusive)
        console.groupCollapsed("Function that accepts two parameters; (min, max). returns a random int");
            const getRndInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
            console.log(`getRndInteger: ${getRndInteger(-3, 3)}`);
    
        console.groupEnd();
    })();

    /*6. Create a function that takes an array of strings and returns an array with only the strings that have numbers in them
        If there are no strings containing numbers, return an empty array*/
        (() => {
            console.groupCollapsed('metacharacter. selects a string that has numbers');
                const numsOnly = (array) => {
                    console.log(array);
                    const r = /\d+/;//metacharacter. matches digits.
                    for(let item of array) {
                        // console.log(item);
                        if(item.match(r)) {
                            console.log(item);
                            
                        }
                        
                        // var r = /\d+/;
                        // var s = "you can enter maximum 500 choices";
                        // alert (s.match(r));
                    }
                };
    
                const randString = "129jkwk949ry9gwn19103nfg94ho9w4you9are8mothers1maiden1979fun";
                const randString2 = randString.split("9");//splits the string where the number 9 is
                // console.log(randString2);
                numsOnly(randString2);
            console.groupEnd()
        })();

        (() => {
            console.group("Given an array of integers that < 40. Add values such that no sum can be > than 40. Place those values in an array of thier own, then an array that holds those arrays. example: [[20, 5, 10, 1], [35]]");
                //this will give me a random integer from min to max
                const getRndInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
            
                //push into an array
                let a;
                let b = [];
                for (let i = 0; i <= 25; i++) {
                    const a = getRndInteger(1, 40);//call the function and get the random integer
                    b.push(a);//push to an array 
                };
                console.log(b);

                //I have a randomized array that I can do the math on now. I want to add up the values and get as close to 40 as possible without going over
                // for (const value of b) {
                //     // console.log(value);
                    
                // }
                let x = 0;
                let weight;
                let airCraft = [];
                for (let j = 0; j < b.length; j++) {
                    // console.log(b[j]);
                    weight = x += b[j];
                    // console.log(weight);
                    if (weight <=40) {
                        
                        airCraft.push[weight];
                        console.log(weight);
                        console.log(airCraft);
                    };
                };

                console.log(weight);
            console.groupEnd();
        })();

        (() => {
            const luggageLoading = (input) => {
                console.log("Array of comma seperated integers:", input)
                
                //convert the string of comma seperated integers into an array of integers.
                let join = input.join(",");
                let split = join.split(",");
                let parsInt = [];
                for (let element of split) {
                    parsInt.push(parseInt(element));
                };
                input = parsInt;
                console.log("Converted into an array of integers", input);
                
                // 2. When weight is full, container is loaded into the aircraft (max 40lbs.)
                let x = 0;
                let weight = 0;
                let container = [];
                let airCraft = [];
            
                for (let i = 0; i < input.length; i++) {
                    weight += input[i];
            
                    if (weight <= 40) {
                        container.push(input[i]);
                    } else if (weight > 40) {
                        airCraft.push(container);//the weight is > 40. throw the container on the airCraft
                        weight = 0;//reset the weight
                        container = [];//reset the container
                        container.push(input[i]);//push this value in the container. this value is the value that caused the container to be > 40
                        weight += input[i];//add it to the weight
            
                        //so it works alright, but what if the last number can be added to another array
                    };
            
                };
                airCraft.push(container);
                console.log("Containers of 40lbs or less loaded into aircraft", airCraft);
                
                // 3. Reorder containers LIFO order. The first for loop reorders the conrtainers.
                let reorderedArray = [];
                for (let k = airCraft.length -1; k >= 0; k--) {
                    console.log("Container removed lifo", airCraft[k]);
                    for (let l = airCraft[k].length -1; l >= 0; l--) {//the second for loop reorders the elements in the container
                        // console.log(airCraft[k][l]);
                        reorderedArray.push(airCraft[k][l])
                    };
                };
            
                // 4. Return new reordered array of integers
                return (reorderedArray);
            };
            
            const luggageArray = ["30, 5, 6, 20, 40"];
            
            const b = luggageLoading(luggageArray);
            console.log("Luggage in containers. lifo", b);
            
        })();
};


export {Numbers};