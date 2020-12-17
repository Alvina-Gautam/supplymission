class place {
    constructor(x,y,width,height){
        var options = {
            setStatic:1 
        }
        this.body=Bodies.rectangle(x,y,width,height);
        World.add(world,this.body);
    }
        display(){
            var pos = this.body.position;
            rectMode(CENTER);
            fill(34,139,34);
            rect(pos.x,pos.y,this.width,this.height);
        }
    }