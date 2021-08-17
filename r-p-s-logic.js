const buttons = document.querySelectorAll('input');
        buttons.forEach(button => button.addEventListener('click',checkHand));
        
        playerscore = 0;
        enemscore = 0;

        function checkHand(e) {
                var hands = ["paper", "scissors", "rock"];
                var enem_selection = hands[(Math.floor(Math.random()*3))];
                var player_selection = this.getAttribute("hand")
                var myMove = document.getElementById("my-move");
                var enemImg = document.getElementById("enemy");

                changeImage(enemImg, `assets/enemy-${enem_selection}.png`);
                changeImage(myMove, (`assets/player-${player_selection}.png`));
                setTimeout(function() {
                    changeImage(enemImg, `assets/enemy-rock.png`);
                    changeImage(myMove, (`assets/player-rock.png`));
                }, 800);
                console.log(checkWin(player_selection, enem_selection));
        }
        function score(player) {
            if(player === 'player'){playerscore++;}else{enemscore++;}
            
            console.log(playerscore);
            console.log(enemscore);
            renderScore(playerscore, enemscore);
            if(playerscore == 5 || enemscore == 5) {
                win(player);
                playerscore = 0;
                enemscore = 0;
                renderScore(playerscore, enemscore);
            }
        }
        function win(player) {
            alert(`${player} wins!`);
        }

        function renderScore(score1,score2) {
            if(score1 >5){score1 =5;}
            if(score2 >5){score2 =5;}
            changeImage(document.getElementById('tally1'), `assets/tally player/tallyplayer${score1}.png`);
            changeImage(document.getElementById('tally2'), `assets/tally enemy/tallyenemy${score2}.png`);
        }

        function checkWin(p1, p2) {
            if(p1===p2){
                return "its a tie!";
            }
            if(p1==='paper'){
                if(p2==='scissors'){
                    score('enemy');
                    return "enemy wins!";
                } else {
                    score('player');
                    return "you win!";
                }
            }
            if(p1==='scissors'){
                if(p2==='rock'){
                    score('enemy');
                    return "enemy wins!";
                } else {
                    score('player');
                    return "you win!";
                }
            }
            if(p1==='rock'){
                if(p2==='paper'){
                    score('enemy');
                    return "enemy wins!";
                } else {
                    score('player');
                    return "you win!";
                }
            }
        }
        
        function changeImage(src, img) {
            src.setAttribute('src', img);
        }