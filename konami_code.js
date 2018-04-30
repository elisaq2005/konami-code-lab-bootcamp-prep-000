const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
  let index = 0;
  function oneKeyDownHandler(e) {
    const key = parseInt(e.detail || e.which);
    if (key === code[index]) {
      index++;
      if (index === code.length) {
        code.addEventListener('keydown',function(event) {
          alert("Hurray!");
          })
        }
    } else {
      index = 0;
    }
  }
}