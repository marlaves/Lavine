import EngineApp from '../../../Framework/engine.js'

//render obj
var compRender = new EngineApp()
var comp = [
    "<div id='card0'>"+"<br>"+
    "<div id='header0' class='card-header'></div>"+
    "<div id='card1' class='card-body'>"+
    "<p id='contentBody'></p>"+
    "<br> <button id='clBt'>Consultar Dados</button> "
    +"</div"
]
//renderização de objeto tipo 'card'
function cards(){
    compRender.componentsEngine.createComponent("card",comp)
    compRender.componentsEngine.renderComponent("dinamicType","card")
}

export default cards