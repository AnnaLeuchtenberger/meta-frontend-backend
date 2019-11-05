const tl = document.getElementById("leftimage");
const tr = document.getElementById("rightimage");
const ml = document.getElementById("middleleft");
const mr = document.getElementById("middleright");
const bl = document.getElementById("bottomleft");
const br = document.getElementById("bottomright");

const frontends = { 
                    "sandwich.jpg": ["sand", "wich"],
                    "clownfish.jpeg": ["clown", "fish"],
                    "hummingbird.jpeg": [ "hum", "mingbird"],
                    "hedgehog.jpeg": [ "hedge", "hog"],
                    "macaw.jpeg": [ "par", "rot"],
                    "horse.jpg": [ "ho", "rse"],
                    "nebula.jpg": ["ne", "bula"],
                    "cuttlefish.jpg": ["cut", "tlefish"]
                }

let global_var = "horse.jpeg";

function stackTrace() {
    var err = new Error();
    return err.stack;
}

function frontender() {
    animal_list = Object.keys(frontends);
    currentindex = animal_list.indexOf(global_var);
    global_var = animal_list[(currentindex +5) % 8];
    tl.src = "static/images/" + global_var;
    ml.innerHTML = frontends[global_var][0];
    const frontendstring = "JavaScript"
    bl.innerHTML += frontendstring}

/* Javascript-only test function

function testbackend() { 
    animal_list = Object.keys(frontends);
    currentindex = animal_list.indexOf(global_var);
    global_var = animal_list[(currentindex +5) % 7];
    tr.src = "static/images/" + global_var;
    mr.innerHTML = frontends[global_var][1];
    br.innerHTML = stackTrace();
}*/

function getBackendText() { // this is working 
    fetch(`/piccy?current=${tr.src.split("/images/").pop()}`) 
    .then(res => res.text())
    .then(
        function (data) {
        tr.src = "static/images/" + data;
        mr.innerHTML = frontends[data][1];
        }
    )}

function backender() {
    getBackendText()
    const backendstring = "Flask"
    br.innerHTML += backendstring

    // write a string
    // have it count the number of elements already on br.innerhtml
    // have it slice the remaining string and give the next character 
    // modulo, so no index error 
}



/* LOOK UP FETCH - for the back end */
