// we cann keep more than one data in a variable and that is called as an array.array is a collection of data.
var friend = ["i", "me", "you", "myself", "yourself"];
console.log(friend);

// we can know about an array length
var arrayLength = friend.length;
console.log(arrayLength);

// Index number start with 0.we can find specific index data
var specificData = friend[0];
console.log(specificData);
var specificData2 = friend[4];
console.log(specificData2);

// We can find out specific data's index number also
var indexNo = friend.indexOf("you");
console.log(indexNo);
var indexNum = friend.indexOf("me");
console.log(indexNum);


// If we want to find any datas index num which is not exsist then it will give output as -1.
var specificData3 = friend.indexOf("they");
console.log(specificData3);

// we can find the array's specific data by using index no
var oneElement = friend[0];
console.log(oneElement);
var oneElement2 = friend[3];
console.log(oneElement2);

// We can change an array data 
friend[4] = "thyself";
console.log(friend);
friend[3] = "Hi";
console.log(friend);

// we can push data in an array
var arrayNum = [1, 2, 3, 4, 5];
arrayNum.push(7);
console.log(arrayNum);
arrayNum.push(10);
console.log(arrayNum);

// we can pop data as well
var popData = arrayNum.pop();
console.log(arrayNum);
console.log(popData);
