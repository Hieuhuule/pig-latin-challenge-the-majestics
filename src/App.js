import React, { useState } from 'react'
import './App.css'
import butcherPigImage from './assets/butcherPig.jpeg'

const App = () => {

  // ACTION ITEM: to make the development process easier there are some preassigned words in the input field, when you are ready for your full user experience delete the test words passed to useState and pass an empty string
  const [userInput, setUserInput] = useState("apple through queen squeal fry fluent") // creates a default value for the userInput and allows you to change it with setUserInput
  const [inputTranslated, setInputTranslated] = useState("") // creates an empty string as the value for inputTranslated and allows you to change it wtih setUserInput

  // ACTION ITEM: the "myPigLatinCodeHere" function is where you will put your logic to translate the sentence entered by the user into Pig Latin
  const myPigLatinCodeHere = () => { // declares the function 

    // NO MODIFICATION NEEDED: the variable "arrayOfUserInput" will contain the text input from the user split into an array of words
    const arrayOfUserInput = userInput.split(" ") // takes a string and splits it into an array of strings and stores it in arrayOfUserInput
    console.log("arrayOfUserInput:", arrayOfUserInput) // console logs the array name and the stored array in arrayOfUserInput

    // NO MODIFICATION NEEDED: now that we have an array of words, we can map over the array and look at each word
    const translatedWordsArray = arrayOfUserInput.map(eachWord => { // iterates over each element in arrayOfUserInput and stores the new array in translatedWordsArray
      console.log("eachWord:", eachWord) // console logs each element of the translatedWordsArray as it iterates, value of eachWord is an array

      // NO MODIFICATION NEEDED: this code will look at each word and identify the vowels
      const vowelsArray = eachWord.split("").filter(vowel => { // splits the element at each iteration into single string characters and then returns a new array of vowels
        return (
          vowel === "a" ||
          vowel === "e" ||
          vowel === "i" ||
          vowel === "o" ||
          vowel === "u"
        )
      })
      console.log("vowelsArray:", vowelsArray) // console logs the vowels in eachWord as an array

      // ACTION ITEM: your Pig Latin logic goes here!
      // 4 conditional statements
      
      let firstIndexOfVowel = eachWord.indexOf(vowelsArray[0])

      if (vowelsArray.includes(eachWord[0])){
        eachWord = eachWord + "way"
      } else if (eachWord[firstIndexOfVowel] === "u" && eachWord[firstIndexOfVowel - 1] === "q") {
        let beforeQu = eachWord.slice(0, firstIndexOfVowel + 1)
        let afterQu = eachWord.slice(firstIndexOfVowel + 1)
        eachWord = afterQu + beforeQu + "ay"
      }
       else if (firstIndexOfVowel > 0) {  // if there are multiple consonants in front of vowel
        let firstPart = eachWord.slice(0, firstIndexOfVowel)
        let secondPart = eachWord.slice(firstIndexOfVowel)
        eachWord = secondPart + firstPart + "ay"
      } else if (eachWord[0] !== "y" && eachWord.includes("y")) { // first letter is not y, but there is a y present ---- solves "fry"
        let yIndex = eachWord.indexOf("y")
        let beforeY = eachWord.slice(0, yIndex)
        let afterY = eachWord.slice(yIndex)
        eachWord = afterY + beforeY + "ay"
        console.log("first:", eachWord)
      }
      


      
      // ACTION ITEM: this return will be the output of your Pig Latin'd code
      return eachWord
    })


    // NO MODIFICATION NEEDED: once the code has been modified it gets joined from an array back to a string
    const translatedWords = translatedWordsArray.join(" ")
    console.log("translatedWords:", translatedWords)

    // NO MODIFICATION NEEDED: this will update the inputTranslated variable in state
    setInputTranslated(translatedWords)
  }

  // ACTION ITEM: this method restarts the game by setting the original state, when you are ready for your full user experience delete the test words in setUserInput and pass an empty string
  const restartGame = () => {
    setUserInput("apple through queen squeal fry fluent")
    setInputTranslated("")
  }

  // NO MODIFICATION NEEDED: this method prevents React from refreshing the page unnecessarily
  const setUpPreventDefault = (e) => {
    e.preventDefault()
    myPigLatinCodeHere()
  }

  // NO MODIFICATION NEEDED: this method takes the value of the input and saves it in state
  const handleInput = (e) => {
    setUserInput(e.target.value)
  }

  return (
    <>
      <h1>Pig Latin Translator</h1>
      <img
        src={butcherPigImage}
        alt="pig with butcher cut names in pig latin"
        className="butcher-pig-image"
      />
      <div className="input-section">
        <h4>Enter phrase to be translated:</h4>
        <input
          type="text"
          className="user-input"
          onChange={handleInput}
          value={userInput}
        />
        <br />
        <button onClick={setUpPreventDefault}>Submit</button>
        <button onClick={restartGame}>Clear</button>
      </div>
      <p>{inputTranslated}</p>
      <footer>&copy; 2022 | Coded by: Your Names Here!</footer>
    </>
  )
}

export default App