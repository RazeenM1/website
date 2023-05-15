document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Get search input
  let answer1 = document.getElementById("Answer-1").value.toLowerCase();
  let answer2 = document.getElementById("Answer-2").value.toLowerCase();
  let answer3 = document.getElementById("Answer-3").value.toLowerCase();
  let answer4 = document.getElementById("Answer-4").value.toLowerCase();
  let Final = 0;

  // Answer incorrect or correct checker

  if (answer1 === "raspberry") {
    document.getElementById("output").innerHTML = `
        
        <h7><b>Correct</b></h7>
`;
    Final++;
  } else {
    document.getElementById("output").innerHTML = `
    
    <h8><b>Incorrect</b></h8>
    `;
  }
  if (answer2 === "orange") {
    document.getElementById("output2").innerHTML = `
        
        <h7><b>Correct</b></h7>
`;
    Final++;
  } else {
    document.getElementById("output2").innerHTML = `
    
    <h8><b>Incorrect</b></h8>
    `;
  }

  if (answer3 === "c") {
    document.getElementById("output3").innerHTML = `
        
        <h7><b>Correct</b></h7>
`;
    Final++;
  } else {
    document.getElementById("output3").innerHTML = `
    
    <h8><b>Incorrect</b></h8>
    `;
  }

  if (answer4 === "strawberry" || answer4 === "raspberry") {
    document.getElementById("output4").innerHTML = `
        
        <h7><b>Correct</b></h7>
`;
    Final++;
  } else {
    document.getElementById("output4").innerHTML = `
    
    <h8><b>Incorrect</b></h8>
    `;
  }

  //total score and feedback on test results

  let percentage = Math.round((Final / 4) * 100);
  document.getElementById("output-final").innerHTML = `
  <h9><b><i>Your Final score is ${Final}/4 (${percentage}%)</i></b></h9>
`;

  if (Final === 4)
    document.getElementById("feedback").innerHTML = `
<h10><b><i>Nice job! you got every question correct!</i></b></h10>
`;

  if (Final === 2 || Final === 3)
    document.getElementById("feedback").innerHTML = `
<h10><b><i>Good try! You're close to getting a perfect score!</i></b></h10>
`;

  if (Final <= 1)
    document.getElementById("feedback").innerHTML = `
<h10><b><i>Unlucky! Try again and maybe you'll do better next time!</i></b></h10>
`;
}
