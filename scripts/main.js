import { FoodTruck } from "./FoodTruck.js"
import { addListeners } from "./Listeners.js"
import { changeFunction, placeOrder } from "./TransientState.js"

const mainContainer = document.querySelector("#container")

const renderAllHTML = async () => {
    mainContainer.innerHTML = await FoodTruck()
}

renderAllHTML()
addListeners(changeFunction, placeOrder, renderAllHTML)