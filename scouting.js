function pswitch(){
 document.getElementById('high-ball-score').innerHTML = Number(document.getElementById('high-ball-score').innerHTML)+1;
}
function mswitch(){
 document.getElementById('high-ball-score').innerHTML = Number(document.getElementById('high-ball-score').innerHTML)-1;
}
function pscale(){
 document.getElementById('mid-ball-score').innerHTML = Number(document.getElementById('mid-ball-score').innerHTML)+1;
}
function mscale(){
 document.getElementById('mid-ball-score').innerHTML = Number(document.getElementById('mid-ball-score').innerHTML)-1;
}
function pvault(){
 document.getElementById('low-ball-score').innerHTML = Number(document.getElementById('low-ball-score').innerHTML)+1;
}
function mvault(){
 document.getElementById('low-ball-score').innerHTML = Number(document.getElementById('low-ball-score').innerHTML)-1;
}
function paswitch(){
 document.getElementById('auto-switch-score').innerHTML = Number(document.getElementById('auto-switch-score').innerHTML)+1;
}
function maswitch(){
 document.getElementById('auto-switch-score').innerHTML = Number(document.getElementById('auto-switch-score').innerHTML)-1;
}
function pascale(){
 document.getElementById('auto-scale-score').innerHTML = Number(document.getElementById('auto-scale-score').innerHTML)+1;
}
function mascale(){
 document.getElementById('auto-scale-score').innerHTML = Number(document.getElementById('auto-scale-score').innerHTML)-1;
}
function pfoul(){
 document.getElementById('foul').innerHTML = Number(document.getElementById('foul').innerHTML)+1;
}
function mfoul(){
 document.getElementById('foul').innerHTML = Number(document.getElementById('foul').innerHTML)-1;
}
//function ptfoul(){
// document.getElementById('tfoul').innerHTML = Number(document.getElementById('tfoul').innerHTML)+1;
//}
//function mtfoul(){
// document.getElementById('tfoul').innerHTML = Number(document.getElementById('tfoul').innerHTML)-1;
//}
function pycard(){
 document.getElementById('ycard').innerHTML = Number(document.getElementById('ycard').innerHTML)+1;
}
function mycard(){
 document.getElementById('ycard').innerHTML = Number(document.getElementById('ycard').innerHTML)-1;
}
function prcard(){
 document.getElementById('rcard').innerHTML = Number(document.getElementById('rcard').innerHTML)+1;
}
function mrcard(){
 document.getElementById('rcard').innerHTML = Number(document.getElementById('rcard').innerHTML)-1;
}
function pground(){
 document.getElementById('groundcube').innerHTML = Number(document.getElementById('groundcube').innerHTML)+1;
}
function mground(){
 document.getElementById('groundcube').innerHTML = Number(document.getElementById('groundcube').innerHTML)-1;
}
function pportal(){
 document.getElementById('portalcube').innerHTML = Number(document.getElementById('portalcube').innerHTML)+1;
}
function mportal(){
 document.getElementById('portalcube').innerHTML = Number(document.getElementById('portalcube').innerHTML)-1;
}
function ppile(){
 document.getElementById('pilecube').innerHTML = Number(document.getElementById('pilecube').innerHTML)+1;
}
function mpile(){
 document.getElementById('pilecube').innerHTML = Number(document.getElementById('pilecube').innerHTML)-1;
}

function toggle(event) {
  document.getElementById(event.target.attributes['id'].value.slice(1)).innerHTML = Number(document.getElementById(event.target.attributes['id'].value.slice(1)).innerHTML) + 1;
};
document.querySelectorAll('.toggle').forEach(cell=>cell.addEventListener('click', toggle))

document.getElementById("aleft").addEventListener('click', (event)=>{
  if (event.target.style.background == 'cyan') {
      document.getElementById("aleft").style.background = 'white';
  } else {
    document.getElementById("aleft").style.background = 'cyan';
  };
});

document.getElementById("aright").addEventListener('click', (event)=>{
  if (event.target.style.background == 'cyan') {
      document.getElementById("aright").style.background = 'white';
  } else {
    document.getElementById("aright").style.background = 'cyan';
  };
});

document.getElementById("amiddle").addEventListener('click', (event)=>{
  if (event.target.style.background == 'cyan') {
      document.getElementById("amiddle").style.background = 'white';
  } else {
    document.getElementById("amiddle").style.background = 'cyan';
  };
});

document.getElementById("midbar").addEventListener('click', (event)=>{
  if (event.target.style.background == 'cyan') {
      document.getElementById("midbar").style.background = 'white';
  } else {
    document.getElementById("midbar").style.background = 'cyan';
  };
});

document.getElementById("sidebar").addEventListener('click', (event)=>{
  if (event.target.style.background == 'cyan') {
      document.getElementById("sidebar").style.background = 'white';
  } else {
    document.getElementById("sidebar").style.background = 'cyan';
  };
});

document.getElementById("otherrob").addEventListener('click', (event)=>{
  if (event.target.style.background == 'cyan') {
      document.getElementById("otherrob").style.background = 'white';
  } else {
    document.getElementById("otherrob").style.background = 'cyan';
  };
});

document.getElementById("onerob").addEventListener('click', (event)=>{
  if (event.target.style.background == 'cyan') {
      document.getElementById("onerob").style.background = 'white';
  } else {
    document.getElementById("onerob").style.background = 'cyan';
  };
});

document.getElementById("tworob").addEventListener('click', (event)=>{
  if (event.target.style.background == 'cyan') {
      document.getElementById("tworob").style.background = 'white';
  } else {
    document.getElementById("tworob").style.background = 'cyan';
  };
});

document.getElementById("ownfault").addEventListener('click', (event)=>{
  if (event.target.style.background == 'cyan') {
      document.getElementById("ownfault").style.background = 'white';
  } else {
    document.getElementById("ownfault").style.background = 'cyan';
  };
});

document.getElementById("otherfault").addEventListener('click', (event)=>{
  if (event.target.style.background == 'cyan') {
      document.getElementById("otherfault").style.background = 'white';
  } else {
    document.getElementById("otherfault").style.background = 'cyan';
  };
});

document.getElementById("hasramp").addEventListener('click', (event)=>{
  if (event.target.style.background == 'cyan') {
      document.getElementById("hasramp").style.background = 'white';
  } else {
    document.getElementById("hasramp").style.background = 'cyan';
  };
});

document.getElementById("canclimbramp").addEventListener('click', (event)=>{
  if (event.target.style.background == 'cyan') {
      document.getElementById("canclimbramp").style.background = 'white';
  } else {
    document.getElementById("canclimbramp").style.background = 'cyan';
  };
});

document.getElementById("successonramp").addEventListener('click', (event)=>{
  if (event.target.style.background == 'cyan') {
      document.getElementById("successonramp").style.background = 'white';
  } else {
    document.getElementById("successonramp").style.background = 'cyan';
  };
});

document.getElementById("yeslift").addEventListener('click', (event)=>{
  if (event.target.style.background == 'cyan') {
      document.getElementById("yeslift").style.background = 'white';
  } else {
    document.getElementById("yeslift").style.background = 'cyan';
  };
});

document.getElementById("nolift").addEventListener('click', (event)=>{
  if (event.target.style.background == 'cyan') {
      document.getElementById("nolift").style.background = 'white';
  } else {
    document.getElementById("nolift").style.background = 'cyan';
  };
});

document.getElementById("autoline").addEventListener('click', (event)=>{
  if (event.target.style.background == 'cyan') {
      document.getElementById("autoline").style.background = 'white';
  } else {
    document.getElementById("autoline").style.background = 'cyan';
  };
});


function eliasisdumb(){
  setTimeout(function(){alert("elias is super, very, very stinky"); }, 0);
}
