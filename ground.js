class Ground{
  constructor(){
    var options = {
        isStatic : true
    }
    this.body = Bodies.rectangle(600,560,1200,10,options);
    World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        fill("yellow");
        rect(0,0,1200,10);
        pop();
    }
}