
// const shareButton = document.querySelector('#share')

const libs = [
    {
        Title: "Rudolph's Not So Red Nose",
        Story: function loadRudolph() {
            clearMain()
            
            const mainDiv = document.querySelector('#main')
            
            const libdiv = document.createElement('div')
            libdiv.classList.add('libdiv')
            mainDiv.appendChild(libdiv)
        
            const libtitle = document.createElement('h3')
            libtitle.classList.add('libtitle') 
            libtitle.innerHTML = "Rudolph's Not So Red Nose"
            libdiv.appendChild(libtitle)

            const instructions = document.createElement('h2')
            instructions.innerHTML = "Fill out these fields to generate your own silly mad libs story instantly!"
            instructions.setAttribute('class', 'instructions')
            libdiv.appendChild(instructions)
        
            const input1 = '<input id="r1" class="libinput" type="text" placeholder="Adjective (Colour)">'
            const input2 = '<input id="r2" class="libinput" type="text" placeholder="Noun (Body Part)">'
            const input3 = '<input id="r3" class="libinput" type="text" placeholder="Noun (Location)">'
            const input4 = '<input id="r4" class="libinput" type="text" placeholder="Adjective (Emotion)">'
        
            const paragraph = document.createElement('p')
            paragraph.classList.add('libparagraph')
            paragraph.innerHTML = `${input1}<br>${input2}<br>${input3}<br>${input4}`
            libdiv.appendChild(paragraph)
        
            const buttondiv = document.createElement('div')
            buttondiv.classList.add('buttondiv')
            libdiv.appendChild(buttondiv)
        
            const submitButton = document.createElement('button')
            submitButton.classList.add('bottombutton')
            submitButton.setAttribute('id', 'submit')
            submitButton.innerHTML = 'Submit'
            buttondiv.appendChild(submitButton)

            submitButton.addEventListener('click', (e) => {
                const r1 = document.querySelector('#r1')
                r1.classList.add('inputwords')
                const r2 = document.querySelector('#r2').value
                const r3 = document.querySelector('#r3').value
                const r4 = document.querySelector('#r4').value
                
                paragraph.innerHTML = `There once was a reindeer named Rudolph who had a big ${r1.value} ${r2}. <br>
                When Rudolph would go to the ${r3} everyone would tease him. <br> This made him very ${r4}.`

                buttondiv.removeChild(submitButton)
            })
        
            const returnButton = document.createElement('button')
            returnButton.classList.add('bottombutton')
            returnButton.setAttribute('id', 'return')
            returnButton.innerHTML = 'Return'
            buttondiv.appendChild(returnButton)

            returnButton.addEventListener('click', (e) => {
                loadHome(libs)
            })
        }
    },
    {
        Title: "An Elf Party",
        Story: null
    },
    {
        Title: "Santa's Accident",
        Story: null
    },
    {
        Title: "The Cookie Heist",
        Story: null
    },
    {
        Title: "Scrambling For Presents",
        Story: null
    }
]

function clearMain() {
    const mainDiv = document.querySelector('#main') 

    while (mainDiv.lastChild) {
        mainDiv.removeChild(mainDiv.lastChild)
    }
}

function createLibButton(obj) {
    let lib = document.createElement('button')
    lib.setAttribute('class', 'libbutton')
    lib.innerHTML = obj.Title

    lib.addEventListener('click', (e)=> {
        createdName = lib.innerHTML
        e.preventDefault()
  
        for (let i = 0; i < libs.length; i++) {
          if (createdName == libs[i].Title){
            libs[i].Story()
          }
        }
      })

    return lib
}

function loadHome(list) {
    clearMain()
    
    const mainDiv = document.querySelector('#main') 

    for (let i=0; i < list.length; i++) {
        let singleLib = createLibButton(list[i])
        mainDiv.appendChild(singleLib)
    }
    
}

const homeButton = document.querySelector('#home')
homeButton.addEventListener('click', (e) => {
    loadHome(libs)
})

function loadAbout() {
    clearMain()

    const mainDiv = document.querySelector('#main')

    
}

const aboutButton = document.querySelector('#about')
aboutButton.addEventListener('click', (e) => {
    loadAbout()
})