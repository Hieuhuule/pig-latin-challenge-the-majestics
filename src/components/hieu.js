

      /* IF FIRST CHARACTER IS A VOWEL */
      if (eachWord[0] === vowelsArray[0]) { // if beginning of string is the same as first vowel character in vowelsArray is TRUE
        let singleChars = eachWord.split(""); // turns the string array element into an array of single string characters
        singleChars.push("way") // adds the string way to end of singleChars Array
         eachWord = singleChars.join("")// convert eachWord to a string


      /* IF FIRST CHARACTER STARTS WITH "S" AND QU */  
      } else if (eachWord[0] === "s" && eachWord[1] === "q" && eachWord[2] === "u") {
        let singleChars = eachWord.split(""); // turns the string array element into an array of single string characters
        singleChars.push(singleChars[0]) // adds s to the end
        singleChars.push(singleChars[1]) // adds q to the end
        singleChars.shift() // removes the first letter (s) in the word
        singleChars.shift() // removes the first letter (q)
        singleChars.push("ay") // adds the string way to end of singleChars Array
        eachWord = singleChars.join("")// convert eachWord to a string

      /* IF FIRST CHARACTER IS "Q" */
      } else if (eachWord[0] === "q" && eachWord [1] === "u") {
        let singleChars = eachWord.split(""); // turns the string array element into an array of single string characters
        singleChars.push(singleChars[0]) // adds q to the end
        singleChars.shift() // removes the first letter (q)
        singleChars.push("ay") // adds the string way to end of singleChars Array
        eachWord = singleChars.join("")// convert eachWord to a string
      }