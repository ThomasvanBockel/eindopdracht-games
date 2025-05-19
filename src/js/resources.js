import { ImageSource, Sound, Resource, Loader } from 'excalibur'

// voeg hier jouw eigen resources toe
const Resources = {
    Background: new ImageSource('images/background.png'),
    Shadow: new ImageSource('images/shadow.png'),
    Dobber: new ImageSource('images/dobber.png'),
    Cloud: new ImageSource('images/cloud.png'),
    Sun: new ImageSource('images/sun.png')
}




const ResourceLoader = new Loader()
for (let res of Object.values(Resources)) {
    ResourceLoader.addResource(res)
}

export { Resources, ResourceLoader }