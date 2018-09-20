// Enemies our player must avoid

/*
ENEMY ---------------------------------------------------
*/
// const Enemy = function() {
class Enemy{
    constructor(sprite = 'enemy-bug'){
        this.sprite = `images/${sprite}.png`;
        this.x0 = 0; // 1st row=0; next row=1st row+101; so on
        this.y0 = 60; // 1st line=60; next line=1st line+83; so on
        this.xMove = 101;
        this.x = this.x0;
        this.y = this.y0;
    }

    // Update the enemy's position
    // Parameter: dt, a time delta between ticks
    update(dt){ 
        // You should multiply any movement by the dt parameter
        // which will ensure the game runs at the same speed for
        // all computers.
        if(this.x < 101 + 4*this.xMove){
            this.x += 100*dt;
        }else{
            this.x = this.x0;
        }       
    }

    // Draw the enemy on the screen, required method for game
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    };

}








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
class Player {
    constructor(sprite = 'char-cat-girl'){
        this.sprite = `images/${sprite}.png`;
        this.xMove = 101;
        this.yMove = 83;
        this.x0 = 0+this.xMove*2;
        this.y0 = 60+this.yMove*4;
        this.x = this.x0; // 1st row=0; next row=1st row+101; so on
        this.y = this.y0; // 1st line=60; next line=1st line+83; so on
    }
    // a handleInput() method.
    handleInput(key){
        switch(key){
            case 'left':
                if(this.x===0){
                    break;
                }else{
                    this.x -= this.xMove;
                    break;
                }

            case 'up':
                if(this.y===60){
                    break; //this should be winner -- remember to change it to winner condition
                }else{
                    this.y -= this.yMove;
                    break;
                }

            case 'right':
                if(this.x===this.xMove*4){
                    break;
                }else{
                    this.x += this.xMove;
                    break;
                }

            case 'down':
                if(this.y===this.y0){
                    break;
                }else{
                    this.y += this.yMove;
                    break;
                }
        }
    }
    // This class requires an update()
    update(dt){}

    // This class requires an render()
    render(){
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }


}

// This class requires an update(), render() and
// Player.prototype.update = function(dt){
// };  

// Player.prototype.render = function(){
//     ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
// };


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
let enemy = new Enemy();
let allEnemies = [];
allEnemies.push(enemy);

// Place the player object in a variable called player
let player = new Player();
// let player = new Player('char-pink-girl'); // Customize player sprite

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
