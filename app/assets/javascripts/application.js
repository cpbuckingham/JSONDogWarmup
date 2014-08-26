// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(document).ready(function () {
  var gschoolDogs = {
    "dogs": [
      {
        "owner": "Kinsey",
        "name": "Harliegh",
        "preferences": [
          {"favoriteFood": "steak"},
          {"favoriteToy": "Frog"}
        ]
      },
      {
        "owner": "Bobby",
        "name": "I don't know",
        "preferences": [
          {"favoriteFood": "children"},
          {"favoriteToy": "children"}
        ]
      },
      {
        "owner": "Evan",
        "name": "Trixie",
        "preferences": [
          {"favoriteFood": "protien"},
          {"favoriteToy": "weights"}
        ]
      }
    ]

  };
// str = JSON.stringify(gschoolDogs, null, " ");

  $(gschoolDogs.dogs).each(function(index, element){
    $('#dogs').append('<tr>'+
    '<td>'+element.owner+'</td>'+
        '<td> '+element.name+' </td>' +
        '<td> '+element.preferences[0].favoriteFood+' </td>' +
        '<td> '+element.preferences[1].favoriteToy+' </td>'
    );

  });


//  var gschoolDogs = JSON.parse(text);
//  document.getElementById("demo").innerHTML =
//    gschoolDogs.name + "<br>" +
//    gschoolDogs.owner + "<br>" +
//    gschoolDogs.preferences;
//  function printData(gschoolDogs) {
//    var str = '';
//    for (var key in gschoolDogs) {
//      if (typeof gschoolDogs[key] == 'object') str += key + printData(gschoolDogs[key]) + ' ';
//      else str += key + ' => ' + gschoolDogs[key] + ' ';
//    }
//    return str;
//  };
});
