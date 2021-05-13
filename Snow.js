class Snow
{
    constructor(x,y,width,height)
    {
        var options={
            restitution:0.8,
            friction:1,
            density:2,
        }
        this.body = Bodies.rectangle(x,y,width,height,options)
        this.height = height;
        this.width = width;
        this.image=loadImage("snow4.webp");
        World.add(world,this.body)
    }

    display()
        {

            if (frameCount % 35 === 0) {
                snow = createSprite(random(1, 1600), 0, 1000, 1000);
                snow.velocityY = 6;
                //snow.scale(0.2)
                var rand = Math.round(random(1,2));
                switch(rand){
                    case 1: 
                    
                    snow.addImage("snow1",snow1Img);
                    break;
                    case 2: snow.addImage("snow2", snow2Img);
                    break;
                }
                snow.scale= 0.2
            }

var pos = this.body.position;
var angle = this.body.angle;
push()
translate(pos.x, pos.y)
imageMode(CENTER);
image(this.image, 0,0,this.height, this.width)
//rect(0,0,this.width,this.height)
pop()
        
    } 
}

