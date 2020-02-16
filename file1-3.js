function reverseStringLong(str) {
    // Step 1. Use the split() method to return a new array
    var splitString = str.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]
 
    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]
 
    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"
    
    //Step 4. Return the reversed string
    return joinArray; // "olleh"
}

function reverseStringCourt(str) {
    return str.split("").reverse().join("");
}

function verifNomRev2(string) {
    let stringRev=reverseStringLong(string)
    if(stringRev===string){
        return true;
    }else{
        return false;
    }
}
function verifNomRev3(str) {
    // hihihi kakaka
    // hohoho
    let strRev=reverseStringCourt(str)
    if(strRev===str){
        return true;
    }else{
        return false;
    }
}
