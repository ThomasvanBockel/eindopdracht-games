import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode, Keyboard, Font, FontUnit, Color, Label, Keys } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Background } from './background.js'
import { SmallFish } from './small_fish.js'
import { MediumFish } from './medium_fish.js'
import { Tire } from './tire.js'
import { Dobber } from './dobber.js'
import { Cloud } from './cloud.js'
import { Sun } from './sun.js'
import { UI } from './ui.js'
import { Highscore } from './highscore.js'
import { Days } from './days.js'
import { GoldenFish } from './golden_fish.js'
import { Gameover } from './gameover.js'

export class Game extends Engine {

    ui
    days
    highscore
    gameover

    constructor() {
        super({
            width: 1280,
            height: 720,
            maxFps: 60,
            displayMode: DisplayMode.FitScreen
        })
        this.start(ResourceLoader).then(() => this.startGame())

    }

    startGame() {
        this.showDebug(true)
        this.gameover = false
        const bg = new Background()
        this.add(bg)



        const sun = new Sun()
        this.add(sun)

        for (let i = 0; i < 8; i++) {
            const cloud = new Cloud()
            this.add(cloud)
        }

        for (let i = 0; i < 16; i++) {

            const smallFish = new GoldenFish()
            this.add(smallFish)

        }

        const goldenFish = new GoldenFish()
        this.add(goldenFish)

        for (let i = 0; i < 7; i++) {
            const mediumFish = new MediumFish()
            this.add(mediumFish)
        }
        for (let i = 0; i < 2; i++) {
            const mediumFish = new Tire()
            this.add(mediumFish)
        }

        const dobber = new Dobber(this.highscore)
        this.add(dobber)

        this.days = new Days()
        this.add(this.days)

        this.ui = new UI()
        this.add(this.ui)


       

        this.highscore = new Highscore()
        this.add(this.highscore)
        if (this.ui > this.highscore) {
            this.highscore = this.ui
            console.log(this.highscore + "dfnskj")
        }
    }
    onPostUpdate(engine) {
        if (engine.input.keyboard.wasPressed(Keys.Enter) && this.gameover === true) {
           this.restartTheGame()
        }
    }

    stopTheGame(){
        this.gameover = true
        console.log("game over ")
        this.gameOverLabel = new Gameover();
        this.add(this.gameOverLabel)
    }

    restartTheGame(engine){
        this.currentScene.clear()
        this.startGame()
    }
}

new Game()
