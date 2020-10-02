const Engine = Matter.Engine;
 const World= Matter.World; 
 const Bodies = Matter.Bodies;
  var engine, world;
   var box1; var pig1 
   function setup()
   { var canvas = createCanvas(500,500);
     engine = Engine.create();
      world = engine.world;
       //creating boxes
        box1 = new Box(320,468,10,40,); 
        box2 = new Box(407,468,10,40);
         box3 = new Box(365,488,100,10); 
         //creating paper 
         paper1 = new paper(100,100,10) 
         World.add(world, box1);
          World.add(world, box2); 
          World.add(world, box3); 
          ground = new Ground(250,height,500,20) 
          
          
          Engine.run(engine); 
        }
        
        function draw(){ 
     rectMode(CENTER)
    background(0);
     Engine.update(engine);
     paper1.display()
     box1.display();
     box2.display();
     box3.display();
    ground .display();
                 
    //keyPressed();
     } 
     function keyPressed()
     { 
    if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper1.body,paper1.body.positon,{x:1.5,y:-5}) 
  World.add(world, paper1); } } 