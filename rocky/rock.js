const getUserChoice = (userInput) => {
  if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
        return userInput;

  }else{
        console.log('Error message: please type: rock, paper or scissors')
  }
};
getUserChoice();

const  getcomputerChoice = () => {
     const randomNum = Math.floor(Math.random() * 3);
     switch(randomNum){
           case 0:
                 return 'rock';
            case 1:
                 return 'paper';
            case 2:
                  return 'scissors';
     }
};

console.log(getcomputerChoice());
console.log(getcomputerChoice());
console.log(getcomputerChoice());

const determineWinner = (userChoice, computerChoice) => {
      if(userChoice === computerChoice){
            return 'The game is tie!';
      }
      if(userChoice === 'rock'){
        if(computerChoice === 'paper'){
           'Computer won!';
      }else{
            return 'User won!'; 
      }

      if(userChoice === 'paper'){
            if(computerChoice === 'scissors')
            return 'Computer won!';
      }else{
            return 'you won!';
      }

       if(userChoice === 'scissors'){
            if(computerChoice === 'rock')
            return 'Computer won!';
      }else{
            return 'you won!';
      }
}
}; 

console.log(determineWinner('rock', 'scissors'));
console.log(determineWinner('rock', 'rock'));
console.log(determineWinner('paper', 'rock'));


const playGame = () => {
  const userChoice = getUserChoice('paper');
  const computerChoice = getcomputerChoice();
  console.log('user ' + userChoice);
  console.log('computer ' + computerChoice);

  console.log(determineWinner(userChoice, computerChoice))
};

playGame();