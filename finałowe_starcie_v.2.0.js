/ Create your own game!
// gra "finałowe starcie"v.2.0
// Spawn a player with spawnPlayerXY(type, x, y)
var player = game.spawnPlayerXY('samurai', 73, 60);
player.maxHealth = 1000;
player.maxDamage = 1000;
// Add at last one goal!
game.addSurviveGoal();
game.addCollectGoal();
game.addDefeatGoal();
// Spawn objects into the game with spawnXY(type, x, y)
var generator1 = game.spawnXY("generator", 35, 55);
generator1.maxHealth = 20;
generator1.maxDamage = 10;
generator1.spawnDelay = 10;
var generator2 = game.spawnXY("generator", 35, 10);
generator2.spawnType = "archer";
generator2.spawnDelay = 2.5;
game.spawnXY("chest", 35, 60);

game.spawnXY("forest", 65, 60);
game.spawnXY("forest", 57, 60);
game.spawnXY("forest", 48, 60);

var colRightRowOne = game.spawnXY("x-mark-stone", 65, 52);
var colLeftRowOne = game.spawnXY("x-mark-stone", 48, 52);

game.spawnXY("forest", 65, 45);
game.spawnXY("forest", 57, 45);
game.spawnXY("forest", 48, 45);

var colRightRowTwo = game.spawnXY("x-mark-stone", 65, 37);
var colLeftRowTwo = game.spawnXY("x-mark-stone", 48, 37);

game.spawnXY("forest", 65, 30);
game.spawnXY("forest", 57, 30);
game.spawnXY("forest", 48, 30);

var colRightRowThre = game.spawnXY("x-mark-stone", 65, 22);
var colLefttRowThre = game.spawnXY("x-mark-stone", 48, 22);

game.spawnXY("forest", 65, 15);
game.spawnXY("forest", 57, 15);
game.spawnXY("forest", 48, 15);

var colRightRowFour = game.spawnXY("x-mark-stone", 65, 7);
var colLeftRowFour = game.spawnXY("x-mark-stone", 48, 7);

game.spawnXY("forest", 25, 8);
game.spawnXY("forest", 25, 17);
game.spawnXY("forest", 25, 25);
game.spawnXY("forest", 25, 44);
game.spawnXY("forest", 25, 53);
game.spawnXY("forest", 25, 62);
game.spawnXY("forest", 8, 25);
game.spawnXY("forest", 8, 43);
game.spawnXY("chest", 8, 15);
game.spawnXY("chest", 8, 33);
game.spawnXY("chest", 8, 49);
// var game.spawnXY("generator", 36, 6);
game.spawnXY("potion-large", 15, 10);
game.spawnXY("potion-large", 15, 60);
var spewer = game.spawnXY("fire-spewer", 40, 60);
spewer.direction = "vertical";
var spewer2 = game.spawnXY("fire-spewer", 30, 60);
spewer2.direction = "vertical";
ui.track(player, "health");
ui.track(game, "time" );
function entry(xMark, item){
    
    if(player.distanceTo(xMark) <= 2){
        game.spawnXY("forest", xMark.pos.x + 2, xMark.pos.y); 
        game.spawnXY(item, 56, xMark.pos.y);
    }    
}
function exit(xMark){
    if(player.distanceTo(xMark) <=1){    
        game.spawnXY("forest", xMark.pos.x, xMark.pos.y);
    }
}
while(true){
    entry(colRightRowOne, "gold-coin");
    entry(colRightRowTwo, "skeleton");
    entry(colRightRowThre, "munchkin");
    entry(colRightRowFour, "chest");
    
    exit(colLeftRowOne);
    exit(colLeftRowTwo);
    exit(colLefttRowThre);
    exit(colLeftRowFour);
    
}    

