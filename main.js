var number;

$('.image').hide();
$('.previous').hide();
$('.next').hide();

$('.start').on('click', doSearch);
$('.previous').on('click', goPrevious);
$('.next').on('click', goNext);

document.addEventListener('keydown', function(e) {
  if (e.key === 'ArrowLeft') {
    goPrevious();
  }else if (e.key === 'ArrowRight') {
    goNext();
  }
});

function doSearch()
{
  $('.image').show();
  $('.previous').show();
  $('.next').show();

  var date = document.getElementById("date");

  switch(date.value)
  {
    case "1":
      document.getElementById('title').innerHTML = "2024.06.29 高雄→臺北→馬祖北竿";
      break;
    case "2":
      document.getElementById('title').innerHTML = "2024.06.30 馬祖北竿";
      break;
    case "3":
      document.getElementById('title').innerHTML = "2024.07.01 馬祖北竿";
      break;
    case "4":
      document.getElementById('title').innerHTML = "2024.07.02 馬祖北竿→馬祖南竿→臺北";
      break;
    case "5":
      document.getElementById('title').innerHTML = "2024.07.03 臺北→高雄";
      break;
    default:
      return;
  }

  number = 1

  initialization();
  showPicture();
}

function showPicture()
{
  var date = document.getElementById("date");
  var image = document.getElementById("image");

  switch(date.value)
  {
    case "1":
      image.src = "./picture/20240629 (" + number + ").jpg";
      break;
    case "2":
      image.src = "./picture/20240630 (" + number + ").jpg";
      break;
    case "3":
      image.src = "./picture/20240701 (" + number + ").jpg";
      break;
    case "4":
      image.src = "./picture/20240702 (" + number + ").jpg";
      break;
    case "5":
      image.src = "./picture/20240703 (" + number + ").jpg";
      break;
    default:
      return;
  }

  document.getElementById('descript').innerHTML = Description[date.value][number];

  console.log(date.value + " " + number);
}

function goPrevious()
{
  if(number > 1)
  {
    number--;
  }

  showPicture();
}

function goNext()
{
  var date = document.getElementById("date");

  switch(date.value)
  {
    case "1":
      if(number < 59)
      {
        number++;
      }
      break;
    case "2":
      if(number < 1)
      {
        number++;
      }
      break;
    case "3":
      if(number < 13)
      {
        number++;
      }
      break;
    case "4":
      if(number < 57)
      {
        number++;
      }
      break;
    case "5":
      if(number < 11)
      {
        number++;
      }
      break;
    default:
      return;
  }

  showPicture();
}
