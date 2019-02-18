$("#search").on("keyup", function() {// call input field and key event function
    const $userInput = $("#search").val().toLowerCase();//convert user input to lower case
    const $gallery = $("a");//identify group for looping
  
    for(let i=0; i< $gallery.length; i+=1) { //start loop to cycle through gallery
      const $caption = $($gallery[i]).attr("data-title").toLowerCase(); //select att of item and convert to lower. alwyas put in variable
      const $photos = $(".photos");//grab each li item for comparison
      if ($caption.indexOf($userInput) > -1) {//setup the captions to compare user input for display
        $photos[i].style.display = "";
      } else {
        $photos[i].style.display = "none";
      }
      console.log($userInput);// log input to console to compare
    }
  });