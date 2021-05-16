function isTouching(){

      if( fixedRect.x - movingRect.x <= (movingRect.width/2 + fixedRect.width/2) &&
      movingRect.x - fixedRect.x <=(movingRect.width/2 + fixedRect.width/2)  &&
      fixedRect.y - movingRect.y <= (movingRect.height/2 + fixedRect.height/2)  &&
      movingRect.y - fixedRect.y <=  (movingRect.height/2 + fixedRect.height/2)  ){
         
        movingRect.shapeColor = "red";
        fixedRect.shapeColor = "red";
    
    }
    else {
      movingRect.shapeColor = "green";
      fixedRect.shapeColor = "green";
    }
    }

    // file has been created with name =myLibrary.js ;
    // that myLibrary.js file has been included in index.html file
    // that file can vbe used anywhere
    