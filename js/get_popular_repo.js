(function(){

  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Basic 3e57ac2f902f1be604a07321bc64e564afcd2341");
  var colors = ["#DC4C46", "#672E3B", "#F3D6E4", "#C48F65", "#223A5E", "#898E8C", "#005960", "#9C9A40", "#4F84C4", "#D2691E"]
  var requestObj = {
    method: 'GET',
    headers: myHeaders
  }
  var api_url = "https://api.github.com/users/knoldus/repos";
  var base_url = "//github.com/knoldus";

  fetch(api_url, requestObj)
    .then(function(data){
      return data.json();
    })
    .then(function(result){
      // var scalaRepo = result.sort(function(a){
      //   if(a.language === 'Scala' && a.language !== 'Java'){
      //     // console.log(a.language)
      //     return a;
      //   };
      // });
      var topTen = getTopRepo(result);
      generateList(topTen);

      // getTopRepo(result)
      // console.log(result);
    });



    function getTopRepo(a, cb) {
      var swapped;
      var arr = [];
      do {
          swapped = false;
          for (var i=0; i < a.length-1; i++) {
              if (a[i].forks_count < a[i+1].forks_count) {
                  var temp = a[i];
                  a[i] = a[i+1];
                  a[i+1] = temp;
                  swapped = true;
              }
          }
      } while (swapped);

      for(var j = 0; j < a.length; j++) {
        if(a[j].language === "Scala") {
          arr.push(a[j]);
        }
      }
      return arr.splice(0, 10);
}

   var addCounter = (function () {
        var counter = 0;
        return function () {
        return counter += 1;
       }
    })()

    function generateList (result) {
      var el = document.getElementById("container");
      var temp = [];
      // console.log(result)

      var count;
      for(var i = 0; i < result.length; i++) {
        // count= addCounter()
        var contributors_link = result[i].contributors_url.replace("https://api.github.com/repos/knoldus", base_url);
        var stargazers = result[i].stargazers_url.replace("https://api.github.com/repos/knoldus", base_url);

        elChild = document.createElement('li');
        var tags = '<div class="wrapper"><div class="repo-name"><a target="_blank" href="'+result[i].html_url + '">' + result[i].full_name  + '</a>' + '</div> <div class="repo-desc"> ' + result[i].description + '</div><div class="f6"> <span class="d-inline-block"> <span class="repo-language-color" style="background-color:'+colors[i] + '"></span> <span class="programmingLanguage"> ' + result[i].language + ' </span> </span> <a target="_blank" class="" href="' + stargazers + '"> <svg aria-label="star" class="" height="16" role="img" version="1.1" viewBox="0 0 14 12" width="14"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"></path></svg> <span class="stargazers_num">' +  result[i].stargazers_count + '</span> </a><span class="d-inline-block mr-3"> Built by <a target="_blank" href="' + contributors_link + '" class="no-underline avatar" id="listOfContributors_'+addCounter()+'"/> </a> </span></div></div>';
        elChild.innerHTML = '<h3>#'+ (i+1) + '</h3> ' + tags;
         el.appendChild(elChild);
         // setTimeout(function(){
          fetch(result[i].contributors_url, requestObj)
          .then(function(data){
            return data.json();
          })
          .then(function(contributorsIMG){
            // console.log(addCounter(), contributorsIMG)
            var sss = addCounter()-(10)

            for(var j = 0; j < contributorsIMG.length; j++) {
            var listOfContributors = document.getElementById("listOfContributors_" + sss)
              var imgTag = document.createElement('img')
              imgTag.src = contributorsIMG[j].avatar_url;
              imgTag.width = 20;
              imgTag.height = 20
              imgTag.title = contributorsIMG[j].login
              listOfContributors.appendChild(imgTag);
              // console.log(listOfContributors)
            }
          })
        // }, 1000)
      }
    }
})();
