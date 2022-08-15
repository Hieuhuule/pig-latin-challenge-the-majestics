      // PSUEDO CODE:
      // create a conditional that determines if the first letter in the word is the first vowel from the vowelsArray
      // split the word into an array of single string characters and store in a variable, singleChars
      // remove the first character of singleChars array
      // add the first vowel of the vowelsArray to the end of the singleChars array
      // add the string "way" to the end of the singleChars array
      // combine singleChars back into a string and reassign it as the value of eachWord


      // /* FIRST CHARACTER IS A VOWEL */
      // if (eachWord[0] === vowelsArray[0]) { // if beginning of string is the same as first vowel character in vowelsArray is TRUE
      //   let singleChars = eachWord.split(""); // turns the string array element into an array of single string characters
      //   // singleChars.shift() // removes the first letter in the word
      //   // singleChars.push(vowelsArray[0]) // add the first vowel to the end of the singleChars Array
      //   singleChars.push("way") // adds the string way to end of singleChars Array
      //   eachWord = singleChars.join("")// convert eachWord to a string
      // }

      /* QU FUNCTIONALITY */

      // - Can type any word that has a "qu" in the first syllable in the text input(e.g.squeal)
      //   - Can hit the submit button
      //     - Can see the words that have a "qu" in the first syllable translated to Pig Latin and rendered to the page(e.g.ealsquay)


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