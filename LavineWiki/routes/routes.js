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
            eng.routesEngine.registerRoute("http:///Lavine/index.html#pageInitial",this.teste)
            eng.routesEngine.registerRoute("http:///Lavine/index.html#docs",this.docc) 
            eng.routesEngine.registerRoute("http:///Lavine/index.html#about",this.aboutRoute)  
        }
        isCreate=true
        eng.routesEngine.runRoute("http:///Lavine/index.html","http:///Lavine/index.html#pageInitial")
        eng.routesEngine.whenUpdate(eng.routesEngine.runRoute("http:///Lavine/index.html","http:///Lavine/index.html#pageInitial"))
    
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
        eng.routesEngine.goToLink("http:///Lavine/index.html#docs")
    }
    about(){
        eng.routesEngine.goToLink("http:///Lavine/index.html#about")
    }
}


export default routes
