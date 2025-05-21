function userMove(userOption){
    let computerOption=computerMove();
    let result;
    if(userOption===computerOption){
        result='Tie';
    }
    else if((userOption==='paper' &&computerOption==='rock')||(userOption==='rock'&&computerOption==='scissors')||(userOption==='scissors' && computerOption==='paper')){
        result='You win mamey';
    }
    else{
        result='You lost mameyy';
    }
    document.querySelector('.user-result').innerHTML=`<img src="${userOption}-emoji.png" class="result-img">
                <p>User</p>`;
    document.querySelector('.computer-result').innerHTML=`<img src="${computerOption}-emoji.png" class="result-img">
                <p>Computer</p>`;
    document.querySelector('#result-display').innerHTML=`<b>Result:${result}</b>`;
    if(result==='You win mamey'){
        document.querySelector('#result-display').style.color='green';
    }
    else if(result==='Tie')
    {
        document.querySelector('#result-display').style.color='blue';
    }
    else{
        document.querySelector('#result-display').style.color='red';

    }

    
}
function computerMove(){
    let randomNumber=Math.floor(Math.random()*3);
    let options=["paper","rock","scissors"];
    return options[randomNumber];
}
