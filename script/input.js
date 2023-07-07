function filter() {
    let search = document.getElementById("search").value.toLowerCase();
    let probox = document.getElementsByClassName("probox");

    for (let i = 0; i < probox.length; i++) {
      ev_tit = probox[i].getElementsByClassName("pro_tit");
      medical_tit = probox[i].getElementsByClassName("medical_tit");
      if (ev_tit[0].innerHTML.toLowerCase().indexOf(search) != -1 ||
        medical_tit[0].innerHTML.toLowerCase().indexOf(search) != -1
      ) {
        probox[i].style.display = "flex"
      } else {
        probox[i].style.display = "none"
      }
    }
  }