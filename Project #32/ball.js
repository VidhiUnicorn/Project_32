class Ball {
    constructor (x,y,radius){
        var props = {
            isStatic : true
        }

        this.ball = Bodies.circle (x,y,radius,props);
        this.radius = radius;
       
        World.add (world,this.ball);

    }

    show (){
        push ();
        translate (this.ball.position.x,this.ball.position.y);
        ellipseMode(RADIUS);
        ellipse (0,0,this.radius,this.radius);
        pop ();
    }
}