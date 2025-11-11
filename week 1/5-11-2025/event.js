 function showChange() {
      const val = document.getElementById("nameInput").value;
      document.getElementById("changeOutput").innerHTML = "You typed: " + val;
    }

    // onclick
    function showClick() {
      document.getElementById("clickOutput").innerHTML = "Button clicked!";
    }

    // onmouseover
    function hoverMe() {
      alert("You hovered over the box!");
    }

    // onmouseout
    function mouseOut() {
      alert("Mouse moved out!");
    }

    // onkeydown
    function keyPressed(event) {
      document.getElementById("keyOutput").innerHTML = "Key pressed: " + event.key;
    }

    // onload
    function pageLoaded() {
      alert("Page has fully loaded!");
    }