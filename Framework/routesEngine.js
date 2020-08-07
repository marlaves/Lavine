class routesEngine {
    routeIndex = window.location.href
    routeLine = ""
    routeVars = []
    routePath = []
    routeComp = []
    listenersEvents = [0, 1]
    listenerAwaitEvents = ""
    //Define Routes
    goToLink(link) {
        let verifyRoute = false
        let varsRoute = []
        let routeStr=[]
        let countRoutesValid = 0
        //Verify if route is exist in context
        //Add verificação exata do componente, para executar ou rederizar a rota
        //correta dentro do contexto
        varsRoute = this.getRoutesOutside(link)
        this.routePath.forEach(element => {
            //collect vars outside 
            routeStr=this.getRoutesOutside(element)
            for(let indexVars=0;indexVars<routeStr.length;indexVars++){
                if(routeStr[indexVars].includes(this.routeVars[indexVars])){
                    countRoutesValid++
                }
                else{
                    countRoutesValid=-2
                }
            }
            if(countRoutesValid == routeStr.length && this.routeVars.length == routeStr.length){
                verifyRoute =true
            }
            countRoutesValid=0
        });
        if (verifyRoute == true) {
            //for (let indexComp = 0; indexComp < this.routePath.length; indexComp += 1) {
                //if (this.routePath[indexComp].includes(link)) {
              //      console.log(this.routeComp[indexComp])
              //  }
            //}
            console.log(link+" redirect to page")
            if (window.location.href != link) {
                history.pushState(link, link)
                this.routeIndex = link
                window.location.href = link
            }
        }
        else {
            document.getElementById("app").innerText = "404 route dont found"
        }
    }

    getUpdateRoutes() {
        let routeStr=[]
        let countRoutesValid=0
        let FindRoute=""
        //verify exact route
        this.getRouteVars()
        this.routePath.forEach(element => {
            //collect vars outside 
            routeStr=this.getRoutesOutside(element)
            for(let indexVars=0;indexVars<routeStr.length;indexVars++){
                if(routeStr[indexVars].includes(this.routeVars[indexVars])){
                    countRoutesValid++
                }
                else{
                    countRoutesValid=-2
                }
            }
            if(countRoutesValid == routeStr.length && this.routeVars.length == routeStr.length){
                FindRoute=element
                this.goToLink(FindRoute)
            }
            countRoutesValid=0
        });
    }

    getRouteVars() {
        this.routeVars = []
        let countVars = this.routeIndex.length
        let varA = this.routeIndex
        let varB = ""
        for (let index = 0; index < countVars; index++) {
            //include especific vars for search
            if (varA[index] != '/') {
                varB += varA[index]
            }
            else {
                this.routeVars.push(varB)
                varB = ""
            }
        }
        this.routeVars.push(varB)
    }
    getRoutesOutside(routetarget) {
        let TargetRouteVars = []
        let countVars = routetarget.length
        let varA = routetarget
        let varB = ""
        for (let index = 0; index < countVars; index++) {
            if (varA[index] != '/') {
                varB += varA[index]
            }
            else {
                TargetRouteVars.push(varB)
                varB = ""
            }
        }
        TargetRouteVars.push(varB)
        return TargetRouteVars
    }
    removeVarsOfRoute(route){
        let IndexRouteLength=0
        let newRoute=""
        while(IndexRouteLength<route.length){
            if(route[IndexRouteLength]=='='){
                console.log("aaaff")
                for (let index = IndexRouteLength; index < route.length; index++) {
                    if(route[IndexRouteLength]=="/"){
                        break
                    }
                    IndexRouteLength++
                }
            }
            if(route[IndexRouteLength]!=undefined){
            newRoute+=route[IndexRouteLength]
            }
            IndexRouteLength++
        }
        console.log(newRoute)
        return newRoute
    }
    registerRoute(routePathRegister, compEvent) {
        this.routePath.push(routePathRegister)
        this.routeComp.push(compEvent)

    }
    //When executes update event in page
    whenUpdate(eventClass) {
        this.listenersEvents[0] = eventClass
        window.addEventListener("load", () => this.listenersEvents[0], false)
    }
    whenChange(eventClass, object) {
        document.getElementById(object).addEventListener('change', eventClass, false)
    }
    whenChangeRoute(eventClass) {
        this.listenersEvents[1] = eventClass
        window.addEventListener("popstate", this.listenersEvents[1])
    }

    addEventSync() {
        this.resolveAwait()
        this.listenerAwaitEvents()
    }
    resolveAwait() {
        return new Promise(() => {
            setTimeout(() => { this.addEventSync() }, 2000)
        })
    }
    async whenAwait(eventClass) {
        let functionType = eventClass
        this.listenerAwaitEvents = functionType
        let functionA = this.resolveAwait()
    }
}

export default routesEngine
