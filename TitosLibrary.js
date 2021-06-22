      //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////                                                                                           
     //                                                                                                                                      //
    //                                                                                                                                      //
   //   This is my own library I am making this because I am too Lazy to do all of this code again and also because DONT REPEAT YOURSELF   //
  //                                                                                                                                      //
 //                                                                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//MUST HAVE "matter.js" FOR THIS LIBRARY
//MUST HAVE "matter.js" FOR THIS LIBRARY
//MUST HAVE "matter.js" FOR THIS LIBRARY
//MUST HAVE "matter.js" FOR THIS LIBRARY


///////////////////////////////////////////////////////////////
//   This is the Chain function it is for Constraints        //
//                                                           //
/*how to use :*/ "chain = new Chain(body1.body,body2.body);" //
//                                                           //
//   This is the Chain function it is for Constraints        //
///////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////
//                                                                                      //
class Chain{                                                                            //
constructor(bodyA,bodyB){                                                               //
    var opt={                                                                           //
        bodyA : bodyA,                                                                  //
        bodyB : bodyB,                                                                  //
        length : 10,                                                                    //
        stiffness : 0.1                                                                 //
    }                                                                                   //
    this.chain = Matter.Constraint.create(opt);                                         //
    Matter.World.add(world,this.chain);                                                 //
}                                                                                       //
    display(){                                                                          //
    var pointA = this.chain.bodyA.position;var pointB = this.chain.bodyB.position;      //
    strokeWeight(4);line(pointA.x,pointA.y,pointB.x,pointB.y);                          //
    }                                                                                   //
}                                                                                       //
//                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////
//   This is the Chain function it is for Constraints           //
//                                                              //
/*how to use :*/"Attach = new Attach(body1.body,{x: x , y: y});"//
//                                                              //
//   This is the Chain function it is for Constraints           //
//////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////
//                                                                                      //
class Attach{                                                                           //
constructor(bodyA,pointB,Stiff,Length){                                                 //
    var opt={                                                                           //
        bodyA : bodyA,                                                                  //
        pointB : pointB,                                                                //
        stiffness : Stiff,                                                              //
        length : Length                                                                 //
    }                                                                                   //
    this.pointB = pointB;                                                               //
    this.bodyA = bodyA;                                                                 //
    this.chain = Matter.Constraint.create(opt);                                         //
    Matter.World.add(world,this.chain);                                                 //
}                                                                                       //
    display(){                                                                          //
        strokeWeight(4);                                                                //
        line(this.bodyA.position.x,this.bodyA.position.y,this.pointB.x,this.pointB.y);  //
    }                                                                                   //
}                                                                                       //
//                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////
                                                                                            


///////////////////////////////////////////////////////////////////
//
//
//
//
//
///////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////
//
class Base{
    constructor(x, y, width, height, opt, angle) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
        }
        this.body = Bodies.rectangle(x, y, width, height, opt);
        this.width = width;
        this.height = height;
        Matter.World.add(world,this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        fill(255);
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
      }
}
//
/////////////////////////////////////////////////////////////////////////