class BlowerMouth {
    constructor (x,y,width,height){
        var props = {
            isStatic : true
        }

        this.body = Bodies.rectangle (x,y,width,height,props);
        this.width = width;
        this.height = height;
       
        World.add (world,this.body);

    }

    show (){
        push ();
        translate (this.body.position.x,this.body.position.y);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop ();
    }
}