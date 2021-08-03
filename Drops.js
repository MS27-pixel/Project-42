class Drops {
    constructor(x,y){
        var options = {
            isStatic: true,
            friction =0.1
        }

        this.drops= Bodies.circle(x,y,5,options);
        World.add(world, this.drops);
    }
    update(){
        if(this.rain.position.y > height){
            Matter.Body.setPosition(this.drops, {x:random(0,400), y:random(0,400)});
        }
    }
}