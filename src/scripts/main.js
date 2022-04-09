import { SinkRepair } from "./SinkRepair.js"


const mainContainer = document.querySelector("#container")

const render = () => {
    mainContainer.innerHTML = SinkRepair()
}

render()

const testFetch = () => {
    fetch("http://localhost:3030/database.json", {headers: {'Access-Control-Allow-Origin': 'http://localhost:3030'}})
    .then(response => console.log(response.body))
    // .then(data => console.log(data))
}



testFetch()