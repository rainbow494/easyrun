"use strict";

var ezDataServices = angular.module("ezDataServices", ['ngResource']);
/*
ezDataServices.factory('getDecalsGoods', ['$resource',
  function($resource){
    return $resource('data_source/:dataId.json', {}, {
      query: {method:'GET', params:{dataId:'er-data-test'}, isArray:true}
    });
  }]);

  */

ezDataServices.factory("getDecalsGoods", [
		function () {
		    return [
    {'hot': true,
     'SKU': 1,
     'name':'8pcs Big Combo Lunar Eclipse Glowing Moon',
     'category':'decals',
     'length':30,
     'width':20,
     'effectId':'3D',
     'meteraiaId':'paper',
     'applicationId':'Bedroom'},
    {'hot': true,
     'SKU': 2,
     'name':'Combo Glowing Moons with 10 Stars as Bonus',
     'category':'decals',
     'length':10,
     'width':50,
     'effectId':'Light in glow',
     'meteraiaId':'plastic',
     'applicationId':'Living room'},
     {'hot': true,
     'SKU': 3,
     'name':'Luminous Moonlight Sticker 4 Sizes Available',
     'category':'decals',
     'length':90,
     'width':80,
     'effectId':'3D',
     'meteraiaId':'paper',
     'applicationId':'Dining room'},
     {'hot': true,
     'SKU': 4,
     'name':'3D Wall Sticker - Black Dinosaur',
     'category':'decals',
     'length':50,
     'width':60,
     'effectId':'Light in glow',
     'meteraiaId':'plastic',
     'applicationId':'Nursery room'},
     {'hot': true,
     'SKU': 5,
     'name':'Black Flower 3D Wall Sticker',
     'category':'decals',
     'length':70,
     'width':80,
     'effectId':'3D',
     'meteraiaId':'paper',
     'applicationId':'Bedroom'},
    {'hot': true,
     'SKU': 6,
     'name':'Feather mirror sticker',
     'category':'decals',
     'length':30,
     'width':50,
     'effectId':'Light in glow',
     'meteraiaId':'plastic',
     'applicationId':'Living room'},
     {'hot': true,
     'SKU': 7,
     'name':'Mosaic Mirror Sticker',
     'category':'decals',
     'length':20,
     'width':20,
     'effectId':'3D',
     'meteraiaId':'paper',
     'applicationId':'Dining room'},
     {'hot': true,
     'SKU': 8,
     'name':'Flower Design Golden Mirror Sticker',
     'category':'decals',
     'length':90,
     'width':100,
     'effectId':'Light in glow',
     'meteraiaId':'plastic',
     'applicationId':'Nursery room'}
  ];
		}
	]);


    