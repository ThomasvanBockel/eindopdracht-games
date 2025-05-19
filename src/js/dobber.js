import { Actor, Vector, randomInRange, Keys, Keyboard,  } from "excalibur"
import { Resources } from './resources.js'
import { SmallFish} from './small_fish.js'
import { MediumFish } from './medium_fish.js'
import { Tire } from './tire.js'


export class Dobber extends Actor {
    constructor() {
        super({ width: 150, height: 150 })
       
        this.graphics.use(Resources.Dobber.toSprite())

        this.pos = new Vector(700, 650)
        // max pos (1250, 650)
        // max pos (1250, 710)
        this.scale = new Vector(0.1, 0.1)
        this.vel = new Vector(0, 0)
        
    }

    onInitialize(engine){
        this.on('collisionstart', (event) => this.hitSomething(event))
    }

    hitSomething(event) {
        if(event.other.owner instanceof SmallFish || event.other.owner instanceof MediumFish || event.other.owner instanceof Tire) {
            event.other.owner.kill() 
        
         this.scene.engine.addscore()   
           
       }
    }

    onPostUpdate(engine) {
        let xspeed = 0;
        let yspeed = 0
        if (engine.input.keyboard.isHeld(Keys.Left)) {
            if (this.pos.x < 7) {
                xspeed = 0
            } else{
            xspeed = -100;
            }
        }
        if (engine.input.keyboard.isHeld(Keys.Right)) {
            if (this.pos.x > 1272) {
                xspeed = 0
            } else{
            xspeed = 100;
            }
        }
        if (engine.input.keyboard.isHeld(Keys.Up)) {
            if (this.pos.y < 655) {
                yspeed = 0
            }
            else {
                yspeed = -100;
            }
        }
        if (engine.input.keyboard.isHeld(Keys.Down)) {
            if (this.pos.y > 712) {
                yspeed = 0
            } else{
            yspeed = 100;
            }
        }
        this.vel = new Vector(xspeed, yspeed);
    }

}