const homeButton = document.querySelector('#home')
const aboutButton = document.querySelector('#about')
const shareButton = document.querySelector('#share')

const libs = [
    {
        Title: "Rudolph's Not So Red Nose"
    },
    {
        Title: "Elves Party"
    },
    {
        Title: "Santa's Accident"
    },
    {
        Title: "Cookie Heist"
    },
    {
        Title: "Present Scramble"
    }
]

function createLibButton(obj) {
    let lib = document.createElement('button')
    lib.setAttribute('class', 'libbutton')
    lib.innerHTML = obj.Title

    return lib
}

function loadHome(list) {
    const mainDiv = document.querySelector('#main') 
    
    for (let i=0; i < list.length; i++) {
        let singleLib = createLibButton(list[i])
        mainDiv.appendChild(singleLib)
    }
    
}

function clearMain() {
    const mainDiv = document.querySelector('#main') 

    while (mainDiv.lastChild) {
        mainDiv.removeChild(mainDiv.lastChild)
    }
}

homeButton.addEventListener('click', (e) => {
    clearHome()
    loadHome(libs)
})