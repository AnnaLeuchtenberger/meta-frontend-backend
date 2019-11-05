const tl = document.getElementById("leftimage");
const tr = document.getElementById("rightimage");
const ml = document.getElementById("middleleft");
const mr = document.getElementById("middleright");
const bl = document.getElementById("bottomleft");
const br = document.getElementById("bottomright");


const frontends = { 
                    "rose.jpg": ["ro", "se"],
                    "clownfish.jpeg": ["clown", "fish"],
                    "hummingbird.jpeg": [ "hum", "mingbird"],
                    "hedgehog.jpeg": [ "hedge", "hog"],
                    "macaw.jpeg": [ "par", "rot"],
                    "horse.jpg": [ "ho", "rse"],
                    "nebula.jpg": ["ne", "bula"],
                }

let global_var = "horse.jpeg";

function stackTrace() {
    var err = new Error();
    return err.stack;
}

function frontender() {
    animal_list = Object.keys(frontends);
    currentindex = animal_list.indexOf(global_var);
    global_var = animal_list[(currentindex +5) % 7];
    tl.src = "static/images/" + global_var;
    ml.innerHTML = frontends[global_var][0];
    bl.innerHTML = stackTrace();
}

function backendtext() { 
    let rightimage = document.getElementById("rightimage")
    let imagename = rightimage.src
}

function backender() {
    animal_list = Object.keys(frontends);
    currentindex = animal_list.indexOf(global_var);
    global_var = animal_list[(currentindex +5) % 6];
    tr.src = "static/images/" + global_var;
    mr.innerHTML = frontends[global_var][1];
    br.innerHTML = stackTrace();

}

/* LOOK UP FETCH - for the back end */
