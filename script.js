function no(id) {
    var yes = document.getElementById('btn_yes')
    var i = Math.floor(Math.random()*300)+1
    var j = Math.floor(Math.random()*100)+yes.offsetTop
    id.style.left = i+'px'
    id.style.top = j+'px'
  }

  function gantiTampilan() {
    document.querySelector('.a').style.display = 'none';
    document.querySelector('.hbd-gift').style.display = 'block';
  }

