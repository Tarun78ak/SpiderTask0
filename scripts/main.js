var myimage =document.querySelector('img');
myimage.onclick = function(){
    var mysrc = myimage.getAttribute('src');
    if(mysrc=='images/MARK-I.jpg'){
        myimage.setAttribute('src','images/MARK-III.jpg');
    }
    else if(mysrc=='images/MARK-III.jpg'){
        myimage.setAttribute('src','images/MARK-V.jpg');
    }
    else if(mysrc=='images/MARK-V.jpg'){
        myimage.setAttribute('src','images/MARK-VII.jpg');
    }
    else if(mysrc=='images/MARK-VII.jpg'){
        myimage.setAttribute('src','images/MARK-VIII.jpg');
    }
    else if(mysrc=='images/MARK-VIII.jpg'){
        myimage.setAttribute('src','images/MARK-XLIII.jpg');
    }
    else if(mysrc=='images/MARK-XLIII.jpg'){
        myimage.setAttribute('src','images/MARK-XLIV.jpg');
    }
    else if(mysrc=='images/MARK-XLIV.jpg'){
        myimage.setAttribute('src','images/MARK-XLVI.jpg');
    }
    else if(mysrc=='images/MARK-XLVI.jpg'){
        myimage.setAttribute('src','images/MARK-XLVII.jpg');
    }
    else if(mysrc=='images/MARK-XLVII.jpg'){
        myimage.setAttribute('src','images/MARK-XLVIII.jpg');
    }
    else if(mysrc=='images/MARK-XLVIII.jpg'){
        myimage.setAttribute('src','images/MARK-I.jpg');
    }
}    
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}
function topFunction() {
    document.documentElement.scrollTop = 0;
  }