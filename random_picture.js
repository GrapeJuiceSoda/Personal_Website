var random_image = ["http://9front.org/img/9community01.png", "http://9front.org/img/9community02.png", "http://9front.org/img/9community05.png", "http://9front.org/img/9community10.png", "http://9front.org/img/9communitybowie.png", "http://9front.org/img/9direction01.png", "http://9front.org/img/9frontsystem.jfk.png", "http://9front.org/img/9frontsystem03.png", "http://9front.org/img/9frontsystem04.png", "http://9front.org/img/9frontsystem06.png", "http://9front.org/img/9frontsystem07.png", "http://9front.org/img/9frontsystem10.png", "http://9front.org/img/9frontsystem11.png", "http://9front.org/img/9frontsystempoland1946.png", "http://9front.org/img/9bunny.png", "http://9front.org/img/9alps.png", "http://9front.org/img/9boot01.png", "http://9front.org/img/9clock.jpg"];

function getRandomImg(img_arr) {
  var random_int = Math.floor(Math.random() * img_arr.length);
  var img = img_arr[random_int];
  var imgStr = '<img src="' + img + '"/>';
  document.write(imgStr);
  document.close();
}
