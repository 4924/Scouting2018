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
