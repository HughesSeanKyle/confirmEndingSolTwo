// Basic Algorithm Scripting: Confirm the Ending
// Check if a string (first argument, str) ends with the given target string (second argument, target).

// This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

// Solution 2 (Using Regex)

function confirmEnding(str, target) {                          //1

  let regex = new RegExp(target + "$", "i");                   //2

  return regex.test(str);                                      //3
}

console.log(confirmEnding("He has to give me a new name", "name"));

// Notes
/*/

    //1 Initializes function that takes in two strings as an argument
        The first string will be the sample data to be analysed 
        the second string will be the target to identify from the sample data

    
    //2 The RegExp constructor creates a regular expression object for matching text with a pattern.
        Source - [https://devdocs.io/javascript/global_objects/regexp]

        The '$' character class	
        Matches end of input. If the multiline flag is set to true, also matches immediately before a line break character.
        For example, /t$/ does not match the "t" in "eater", but does match it in "eat".

        Source - [https://devdocs.io/javascript/global_objects/regexp].

        The documentation above (regarding the $ sign) basically says it will match an Input(which is the "target" argument in this case and more specifically the string "name") to the end of the sample data (which is the "str" argument and more specifically the string "He has to give me a new name" in this case). The condition is though that it will only match the input at the end of a given sample and before a line break character. 

        The 'i' character class

        The 'i' flag will ignore case. For example if "name" in this example were to be typed as "NAME" the solution would still yield a true output. 


    //3 The return ends function execution and specifies a value to be returned to the function caller.
        Source - [https://devdocs.io/javascript/statements/return]
    
        The test() method executes a search for a match between a regular expression and a specified string. Returns true or false.
        Source - [https://devdocs.io/javascript/global_objects/regexp/test]

        The test method will take in the sample data or "str" in as an argument to compare to the Regexp constructor in //2 and yield either a true or false result. In this case "true" takes first place in the Regex games :). 

  // "Never give up and good luck will find you."
  // -- Falcor
                                */