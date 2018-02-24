function toggle(event) {
  document.getElementById(event.target.attributes['id'].value.slice(1)).innerHTML = Number(document.getElementById(event.target.attributes['id'].value.slice(1)).innerHTML) + 1;
};

document.querySelectorAll('.toggle').forEach(cell=>cell.addEventListener('click', toggle))

function toggledown(event) {
  document.getElementById(event.target.attributes['id'].value.slice(1)).innerHTML = Number(document.getElementById(event.target.attributes['id'].value.slice(1)).innerHTML) - 1;
};

document.querySelectorAll('.toggledown').forEach(cell=>cell.addEventListener('click', toggledown))



document.getElementById("aleft").addEventListener('click', (event)=>{
  if (event.target.style.background == 'lightgrey') {
      document.getElementById("aleft").style.background = 'white';
  } else {
    document.getElementById("aleft").style.background = 'lightgrey';
  };
});

document.getElementById("aright").addEventListener('click', (event)=>{
  if (event.target.style.background == 'lightgrey') {
      document.getElementById("aright").style.background = 'white';
  } else {
    document.getElementById("aright").style.background = 'lightgrey';
  };
});

document.getElementById("amiddle").addEventListener('click', (event)=>{
  if (event.target.style.background == 'lightgrey') {
      document.getElementById("amiddle").style.background = 'white';
  } else {
    document.getElementById("amiddle").style.background = 'lightgrey';
  };
});

document.getElementById("midbar").addEventListener('click', (event)=>{
  if (event.target.style.background == 'lightgrey') {
      document.getElementById("midbar").style.background = 'white';
  } else {
    document.getElementById("midbar").style.background = 'lightgrey';
  };
});

document.getElementById("sidebar").addEventListener('click', (event)=>{
  if (event.target.style.background == 'lightgrey') {
      document.getElementById("sidebar").style.background = 'white';
  } else {
    document.getElementById("sidebar").style.background = 'lightgrey';
  };
});

document.getElementById("otherrob").addEventListener('click', (event)=>{
  if (event.target.style.background == 'lightgrey') {
      document.getElementById("otherrob").style.background = 'white';
  } else {
    document.getElementById("otherrob").style.background = 'lightgrey';
  };
});

document.getElementById("onerob").addEventListener('click', (event)=>{
  if (event.target.style.background == 'lightgrey') {
      document.getElementById("onerob").style.background = 'white';
  } else {
    document.getElementById("onerob").style.background = 'lightgrey';
  };
});

document.getElementById("tworob").addEventListener('click', (event)=>{
  if (event.target.style.background == 'lightgrey') {
      document.getElementById("tworob").style.background = 'white';
  } else {
    document.getElementById("tworob").style.background = 'lightgrey';
  };
});

document.getElementById("ownfault").addEventListener('click', (event)=>{
  if (event.target.style.background == 'lightgrey') {
      document.getElementById("ownfault").style.background = 'white';
  } else {
    document.getElementById("ownfault").style.background = 'lightgrey';
  };
});

document.getElementById("otherfault").addEventListener('click', (event)=>{
  if (event.target.style.background == 'lightgrey') {
      document.getElementById("otherfault").style.background = 'white';
  } else {
    document.getElementById("otherfault").style.background = 'lightgrey';
  };
});

document.getElementById("hasramp").addEventListener('click', (event)=>{
  if (event.target.style.background == 'lightgrey') {
      document.getElementById("hasramp").style.background = 'white';
  } else {
    document.getElementById("hasramp").style.background = 'lightgrey';
  };
});

document.getElementById("canclimbramp").addEventListener('click', (event)=>{
  if (event.target.style.background == 'lightgrey') {
      document.getElementById("canclimbramp").style.background = 'white';
  } else {
    document.getElementById("canclimbramp").style.background = 'lightgrey';
  };
});

document.getElementById("successonramp").addEventListener('click', (event)=>{
  if (event.target.style.background == 'lightgrey') {
      document.getElementById("successonramp").style.background = 'white';
  } else {
    document.getElementById("successonramp").style.background = 'lightgrey';
  };
});

document.getElementById("yeslift").addEventListener('click', (event)=>{
  if (event.target.style.background == 'lightgrey') {
      document.getElementById("yeslift").style.background = 'white';
  } else {
    document.getElementById("yeslift").style.background = 'lightgrey';
  };
});

document.getElementById("nolift").addEventListener('click', (event)=>{
  if (event.target.style.background == 'lightgrey') {
      document.getElementById("nolift").style.background = 'white';
  } else {
    document.getElementById("nolift").style.background = 'lightgrey';
  };
});

document.getElementById("autoline").addEventListener('click', (event)=>{
  if (event.target.style.background == 'lightgrey') {
      document.getElementById("autoline").style.background = 'white';
  } else {
    document.getElementById("autoline").style.background = 'lightgrey';
  };
});


function eliasisdumb(){
  setTimeout(function(){alert("elias is super, very, very stinky"); }, 0);
}


