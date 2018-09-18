// Enemies our player must avoid

/*
ENEMY ---------------------------------------------------
*/
// const Enemy = function() {
function Enemy(){
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = 0; // 1st row=0; next row=1st row+101; so on
    this.y = 60; // 1st line=60; next line=1st line+83; so on
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

/*
PLAYER -----------------------------------------------------------

Player class:
    Constructor:
        Properties:
            - x pos
            - y pos
            - sprite img
        Methods:
            - Update position:
                - Check if collide: did Player x & y cross with enemies?
                - Check if win: did Player reach water?
            - Render:
                - Move Player to current x & y coordinates
            - Handle keyboard inputs:
                - Update Player's x & y property according to input
            - Reset Player
                - Set x & y to their starting coordinates
*/

// Now write your own player class
// const Player = function() {
function Player(){

    this.sprite = 'images/char-cat-girl.png';
    this.x0 = 0+101*2;
    this.y0 = 60+83*4;
    this.x = this.x0; // 1st row=0; next row=1st row+101; so on
    this.y = this.y0; // 1st line=60; next line=1st line+83; so on
}

// This class requires an update(), render() and
Player.prototype.update = function(dt){

};  

Player.prototype.render = function(){
    
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// a handleInput() method.
Player.prototype.handleInput = function(key){
    switch(key){
        case 'left':
            if(this.x===0){
                break;
            }else{
                this.x -= 101;
                break;
            }

        case 'up':
            if(this.y===60){
                break; //this should be winner -- remember to change it to winner condition
            }else{
                this.y -= 83;
                break;
            }

        case 'right':
            if(this.x===404){
                break;
            }else{
                this.x += 101;
                break;
            }

        case 'down':
            if(this.y===this.y0){
                break;
            }else{
                this.y += 83;
                break;
            }
    }
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
let allEnemies = [new Enemy()];

// Place the player object in a variable called player
let player = new Player();


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    const allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
