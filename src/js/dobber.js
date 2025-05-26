import { Actor, Vector, randomInRange, Keys, Keyboard, } from "excalibur"
import { Resources } from './resources.js'
import { SmallFish } from './small_fish.js'
import { MediumFish } from './medium_fish.js'
import { Tire } from './tire.js'


export class Dobber extends Actor {

    fishCapture   // set to true if we are currently trying to catch
    score
    highScore
    frameCounter
    tryingToCapture // the fish object we are currently trying to capture. set to undefined if none
    gameStart // set to true if the dopper is in the water, set to false if fish has been catched

    constructor() {
        super({ width: 150, height: 150 })
        this.gameStart = false
        // this.frameCounter = 0
        // this.graphics.use(Resources.Dobber.toSprite())
        // this.fishCapture = false
        // this.pos = new Vector(700, 652)

        // // max pos (1250, 650)
        // // max pos (1250, 710)
        // this.scale = new Vector(0.1, 0.1)
        // this.vel = new Vector(0, 0)
         this.score = 0
     this.highScore = localStorage.getItem("highscore", this.highScore)
     console.log(this.highScore)
      
    }

    onInitialize(engine) {
        this.on('collisionstart', (event) => this.hitSomething(event))
    }

    hitSomething(event) {

        if (event.other.owner instanceof SmallFish || event.other.owner instanceof MediumFish || event.other.owner instanceof Tire) {
            let chance = Math.ceil(randomInRange(1, 5))


            console.log(chance)
            if (chance === 3 && this.fishCapture === false) {
                this.graphics.use(Resources.DopperUnderWater.toSprite())
                this.fishCapture = true
                this.tryingToCapture = event.other.owner
                this.frameCounter = 0
                event.other.owner.vel = new Vector(0, 0)

                

            }
        }
    }

    capturedFish() {
console.log(this.score + " dsisfjsKJ")
        this.score = this.score + 1
        console.log(this.score + " sdf")
        this.scene.engine.ui.addscore(this.score)
        if(this.score > this.highScore){
            this.highScore = this.score
            localStorage.setItem("highscore", this.highScore)
            this.scene.engine.highscore.addHighScore(this.score)
        }
        this.frameCounter = 0
        this.tryingToCapture.kill()
        this.gameStart = false
     this.scale = new Vector(0,0)
       

        console.log(this.fishCapture)
        this.graphics.use(Resources.Dobber.toSprite())
        this.fishCapture = false
        this.tryingToCapture = undefined
    }

    escapedFish() {
        this.tryingToCapture.vel = new Vector(-100, 0)
        this.graphics.use(Resources.Dobber.toSprite())
        this.fishCapture = false
        this.tryingToCapture = undefined
    }

    

    onPostUpdate(engine) {
        if (engine.input.keyboard.wasPressed(Keys.Space) && this.gameStart === false) {
            // super({ width: 150, height: 150 })
        
            this.gameStart = true
            this.frameCounter = 0
            this.graphics.use(Resources.Dobber.toSprite())
            this.fishCapture = false
            this.pos = new Vector(700, 652)

            // max pos (1250, 650)
            // max pos (1250, 710)
            this.scale = new Vector(0.1, 0.1)
            this.vel = new Vector(0, 0)
          
        }

        let xspeed = 0
        let yspeed = 0
        if (this.fishCapture) {
            this.frameCounter++

            if (this.frameCounter < 100 && engine.input.keyboard.wasPressed(Keys.Space)) {
                console.log("je hebde vis gevangen")
                this.captured = true
                this.capturedFish()
                this.fishCapture = false
                this.tryingToCapture = undefined
            }
            if (this.frameCounter >= 100) {
                console.log("je heb te lang gewacht")
                this.escapedFish()
                this.fishCapture = false
                this.tryingToCapture = undefined
            }
        }


        if (engine.input.keyboard.isHeld(Keys.Left) && this.fishCapture === false) {
            if (this.pos.x < 7) {
                xspeed = 0
            } else {
                xspeed = -100;
            }
        }
        if (engine.input.keyboard.isHeld(Keys.Right) && this.fishCapture === false) {
            if (this.pos.x > 1272) {
                xspeed = 0
            } else {
                xspeed = 100;
            }
        }
        if (engine.input.keyboard.isHeld(Keys.Up) && this.fishCapture === false) {
            if (this.pos.y < 653) {
                yspeed = 0
            }
            else {
                yspeed = -100;
            }
        }
        if (engine.input.keyboard.isHeld(Keys.Down) && this.fishCapture === false) {
            if (this.pos.y > 712) {
                yspeed = 0
            } else {
                yspeed = 100;
            }
        }
        this.vel = new Vector(xspeed, yspeed);
    }

}