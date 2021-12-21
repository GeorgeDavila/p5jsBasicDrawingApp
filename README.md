# p5jsBasicDrawingApp
Basic drawing interface using p5.js + simple html. Mainly made because sometime in computer vision we want to draw on image. E.g. in the alteration of semantic segmentation masks to be ran through GANs. Python interfaced for such tasks are generally horrendous. So Flask + p5.js sketchpad can be used to get a much prettier interface (without having to shift the backend to Tensorflow.js). E.g. rather than drawing on a python gui (which I've seen some researchers do, it's very ugly) just draw in js and save the image for processing on the python backend. Also convieniently makes it easier to port to the web. 

In production you can simply save the altered image and send via api call through your flask server to the A.I. algorithm. 

all HTML, CSS, js scripts just crammed into the pjsDraw.html file in the templates directory. Basic Flask script also provided if you want to run it on python. Only python requirement should be flask (pip install flask) and just do python flaskServer.py to run. Or you can just run the html directly in your browser. All resources (p5js + images) called from web for ease.  
