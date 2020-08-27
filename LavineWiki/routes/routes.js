import EngineApp from '../../Framework/engine.js'
import homePage from "../pages/home.js"
import docs from '../pages/docs.js'
import AboutPage from '../pages/about.js'

var isCreate=false
var eng=new EngineApp()

class routes{
    routesCreated(){
        
        //sistemas De rotas
        if(isCreate==false){
            eng.routesEngine.registerRoute("https://lavine.netlify.app/#homePage",this.teste)
            eng.routesEngine.registerRoute("https://lavine.netlify.app/index.html#docs",this.docc) 
            eng.routesEngine.registerRoute("https://lavine.netlify.app/index.html#about",this.aboutRoute)  
        }
        isCreate=true
        eng.routesEngine.runRoute("https://lavine.netlify.app","https://lavine.netlify.app/#homePage")
        eng.routesEngine.whenUpdate(eng.routesEngine.runRoute("https://lavine.netlify.app","https://lavine.netlify.app/#homePage"))
    
    }
    teste(){
        eng.renderEngine.pageDynamic="dinamic-Article"
        eng.renderEngine.clearPage()
        homePage()
    }
    docc(){
    eng.renderEngine.pageDynamic="dinamic-Article"
    eng.renderEngine.clearPage()
    docs()
    }
    aboutRoute(){
        eng.renderEngine.pageDynamic="dinamic-Article"
        eng.renderEngine.clearPage()
        AboutPage()
    }
    doc(){
        eng.routesEngine.goToLink("https://lavine.netlify.app/index.html#docs")
    }
    about(){
        eng.routesEngine.goToLink("https://lavine.netlify.app/index.html#about")
    }
}


export default routes
