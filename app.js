console.log('app.js is connected');

function createParagraph() {
    console.log("create paragraph has been logged")
    var wordOne = document.getElementById("text-one").value;
    var wordTwo = document.getElementById("text-two").value;
    var wordThree = document.getElementById("text-three").value;
    var wordFour = document.getElementById("text-four").value;
    var wordFive = document.getElementById("text-five").value;
    var wordSix = document.getElementById("text-six").value;
    var wordSeven = document.getElementById("text-seven").value;
    var wordEight = document.getElementById("text-eight").value;
    var wordNine = document.getElementById("text-nine").value;
    var wordTen = document.getElementById("text-ten").value;
    var wordEleven = document.getElementById("text-eleven").value;
    var wordTwelve = document.getElementById("text-twelve").value;
    var wordThirteen = document.getElementById("text-thirteen").value;
    var wordFourteen = document.getElementById("text-fourteen").value;
    var wordFifteen = document.getElementById("text-fifteen").value;
    var wordSixteen = document.getElementById("text-sixteen").value;
    var wordSeventeen = document.getElementById("text-seventeen").value;
    var wordEighteen = document.getElementById("text-eighteen").value;
    var wordNineteen = document.getElementById("text-nineteen").value;
    var wordTwenty = document.getElementById("text-twenty").value;
    var wordTwentyOne = document.getElementById("text-twenty-one").value;
    var wordTwentyTwo = document.getElementById("text-twenty-two").value;

    console.log(wordOne,wordTwo,wordThree,wordFour,wordFive,wordSix,wordSeven,wordEight,wordNine,wordTen,wordEleven,wordTwelve,wordThirteen,wordFourteen,wordFifteen,wordSixteen,wordSeventeen,wordEighteen,wordNineteen,wordTwenty,wordTwentyOne,wordTwentyTwo);

    var paragraph = "<p> The zoo is a(n) " + wordOne + " place to learn about different types of "  + wordTwo + " There are " + wordThree + " animals and " + wordFour + " animals there. Some of the animals are as" + wordFive + " as a(n) " + wordSix + " ! There are baby " + wordSeven + " who were born " + wordEight + " day(s), a petting zoo where you can feed the , "
     + wordNine + " " + wordTen  + " and a(n) " + wordEleven + " pool where " + wordTwelve + " go swimming. There are " + wordThirteen + " and " + wordFourteen  +  wordFifteen  + " in the " + wordSixteen + " " +  wordSeventeen  + " forest habitat, and you can watch the zookeepers feed the " + wordEighteen + " " +  wordNineteen  + " The gift shop has " + wordTwelve + " to wear, picturs of " + wordTwentyOne + " and even snacks like " + wordTwentyTwo + " you can bring home to remember your day at the zoo. </p> "

     console.log(paragraph);

    document.getElementById("answer").innerHTML = paragraph;
}