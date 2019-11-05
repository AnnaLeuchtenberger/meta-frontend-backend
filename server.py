from flask import Flask, make_response, render_template, request
import os
from random import randint

app = Flask(__name__)

backends = { 
                    "sandwich.jpg": ["sand", "wich"],
                    "clownfish.jpeg": ["clown", "fish"],
                    "hummingbird.jpeg": [ "hum", "mingbird"],
                    "hedgehog.jpeg": [ "hedge", "hog"],
                    "macaw.jpeg": [ "par", "rot"],
                    "horse.jpg": [ "ho", "rse"],
                    "nebula.jpg": ["ne", "bula"],
                    "cuttlefish.jpg": ["cut", "tlefish"],
                }

    

@app.route('/', methods=['GET', 'POST']) # methods - correct? 
def home(): 
    app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0
    # if request.method == 'POST': 
        # file_name = "horse.jpg" # frontends[randint(0, 5)][0]
        # full_path = "static/images/horse.jpg" # os.path.join(app.root_path, 'static/images/', file_name)
        # return full_path
    return render_template("index.html")

@app.route('/piccy', methods=['GET', 'POST']) # this isn't reading the javascript element
def get_piccy():
    current=request.args.get('current', 'hedgehog.jpeg') # keeps selecting second "error" condition
    animal_list = list(backends.keys())
    currentindex = animal_list.index(current)
    current = animal_list[(currentindex + 5 ) % 8]
    return current

    # velociraptor, centipede (so: velocipede), barbell, baguette, galaxy, weasel, 

port = int(os.environ.get("PORT", 5000))

if __name__ == "__main__":
    app.run(host='127.0.0.1', port=port) 

