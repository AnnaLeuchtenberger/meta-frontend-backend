

const thing = document.querySelector("div.box.topleft")
const tl = document.getElementById("leftimage")
const bl = document.getElementById("bottomleft")

const frontends = { "butterfly.jpeg": ["butter", "fly"],
                    "clownfish.jpeg": ["clown", "fish"],
                    "hummingbird.jpeg": [ "humming", "bird"],
                    "hedgehog.jpeg": [ "hedge", "hog"],
                    "macaw.jpeg": [ "macaw", "macaw"],
                    "horse.jpg": [ "horse", "horse"],
                }

let global_var = "horse.jpeg"

function frontendme() {
    animal_list = Object.keys(frontends)
    currentindex = animal_list.indexOf(global_var)
    global_var = animal_list[(currentindex +5) % 6]
    tl.src = "images/" + global_var
    bl.innerHTML = frontends[global_var][0]
}

/* LOOK UP FETCH - for the back end */
