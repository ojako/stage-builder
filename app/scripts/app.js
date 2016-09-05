'use strict';

/**
* @ngdoc overview
* @name stageBuilderApp
* @description
* # stageBuilderApp
*
* Main module of the application.
*/
angular
.module('stageBuilderApp', [
  'ngAnimate',
  'ngAria',
  'ngCookies',
  'ngMessages',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ui.bootstrap',
  'ngTouch',
  'sticky',
  'ng-sortable',
])
.config(function ($routeProvider, $interpolateProvider) {
  $interpolateProvider.startSymbol('{$');
  $interpolateProvider.endSymbol('$}');
  $routeProvider
  .when('/', {
    templateUrl: 'views/main.html',
    controller: 'MainCtrl',
    controllerAs: 'main'
  })
  .when('/challenge', {
    templateUrl: 'views/challenge.html',
    controller: 'ChallengeCtrl',
    controllerAs: 'challenge'
  })
  .when('/about', {
    templateUrl: 'views/about.html',
    controller: 'AboutCtrl',
    controllerAs: 'about'
  })
  .otherwise({
    redirectTo: '/'
  });
})
.value('users',
[
  {
    '_id': '57cd40c757cbe43af3b0c239',
    'name': 'Isabel Nelson',
    'email': 'isabelnelson@idealis.com',
  },
  {
    '_id': '57cd40c71f14caddacf3c9cb',
    'name': 'Hodges Payne',
    'email': 'hodgespayne@idealis.com',
  },
  {
    '_id': '57cd40c707f32a5211e696ec',
    'name': 'Bowers Bryan',
    'email': 'bowersbryan@idealis.com',
  },
  {
    '_id': '57cd40c79686ed2b1fad4e05',
    'name': 'Mae Valdez',
    'email': 'maevaldez@idealis.com',
  },
  {
    '_id': '57cd40c76b2adcc71ac073b5',
    'name': 'Santana Bryant',
    'email': 'santanabryant@idealis.com',
  },
  {
    '_id': '57cd40c7e1d41797d94626f2',
    'name': 'Richards Blackwell',
    'email': 'richardsblackwell@idealis.com',
  },
  {
    '_id': '57cd40c70ef520cb4fe2db1d',
    'name': 'Darcy Boone',
    'email': 'darcyboone@idealis.com',
  },
  {
    '_id': '57cd40c71d4808bb4c95530b',
    'name': 'Marian Willis',
    'email': 'marianwillis@idealis.com',
  },
  {
    '_id': '57cd40c7c9c859ebaebc9136',
    'name': 'Finch Sosa',
    'email': 'finchsosa@idealis.com',
  },
  {
    '_id': '57cd40c7d2aae1954e907e2c',
    'name': 'Desiree Ortega',
    'email': 'desireeortega@idealis.com',
  },
  {
    '_id': '57cd40c746123fe3ccd7bc11',
    'name': 'Jenkins Lindsay',
    'email': 'jenkinslindsay@idealis.com',
  },
  {
    '_id': '57cd40c70204a6f2703525bd',
    'name': 'Ingrid Davenport',
    'email': 'ingriddavenport@idealis.com',
  },
  {
    '_id': '57cd40c732e66345fb84ed0a',
    'name': 'Montoya Levy',
    'email': 'montoyalevy@idealis.com',
  },
  {
    '_id': '57cd40c7d45073bdc3f23de8',
    'name': 'Whitfield Cooley',
    'email': 'whitfieldcooley@idealis.com',
  },
  {
    '_id': '57cd40c7802f6305a8a78f04',
    'name': 'Jody Blankenship',
    'email': 'jodyblankenship@idealis.com',
  },
  {
    '_id': '57cd40c77f8ed4326d8c4fe3',
    'name': 'Spencer Middleton',
    'email': 'spencermiddleton@idealis.com',
  },
  {
    '_id': '57cd40c7b979d98e1209cecd',
    'name': 'Bird David',
    'email': 'birddavid@idealis.com',
  },
  {
    '_id': '57cd40c7e9bc06a7f76ea9b6',
    'name': 'Tammie Miles',
    'email': 'tammiemiles@idealis.com',
  },
  {
    '_id': '57cd40c7faa133fec0c26516',
    'name': 'Sabrina Glenn',
    'email': 'sabrinaglenn@idealis.com',
  },
  {
    '_id': '57cd40c725ea87e6a9ca01a4',
    'name': 'Amelia Ayala',
    'email': 'ameliaayala@idealis.com',
  },
  {
    '_id': '57cd40c72bd1b171832d6f32',
    'name': 'Dona Harvey',
    'email': 'donaharvey@idealis.com',
  },
  {
    '_id': '57cd40c76f63f26aa6e886a5',
    'name': 'Rosanna Leonard',
    'email': 'rosannaleonard@idealis.com',
  },
  {
    '_id': '57cd40c79f6da4b2770b53b1',
    'name': 'Mcdonald Carney',
    'email': 'mcdonaldcarney@idealis.com',
  },
  {
    '_id': '57cd40c722129122bbbc48e4',
    'name': 'Mcfadden Stevens',
    'email': 'mcfaddenstevens@idealis.com',
  },
  {
    '_id': '57cd40c7a23c20bf462d2c5d',
    'name': 'Kim Parks',
    'email': 'kimparks@idealis.com',
  },
  {
    '_id': '57cd40c791eb387114cba6eb',
    'name': 'Lowery Riddle',
    'email': 'loweryriddle@idealis.com',
  },
  {
    '_id': '57cd40c78b2f767c30474ab0',
    'name': 'Dickson Floyd',
    'email': 'dicksonfloyd@idealis.com',
  },
  {
    '_id': '57cd40c719d590a8e4192b4a',
    'name': 'Noelle Fletcher',
    'email': 'noellefletcher@idealis.com',
  },
  {
    '_id': '57cd40c70525ff1994372df0',
    'name': 'Leblanc Duran',
    'email': 'leblancduran@idealis.com',
  },
  {
    '_id': '57cd40c7ccb7f88871cf654d',
    'name': 'Hill Cash',
    'email': 'hillcash@idealis.com',
  },
  {
    '_id': '57cd40c7388bea9c6e81d5b3',
    'name': 'Freda Richardson',
    'email': 'fredarichardson@idealis.com',
  },
  {
    '_id': '57cd40c72ef6f834a6f687fd',
    'name': 'Rodriguez Butler',
    'email': 'rodriguezbutler@idealis.com',
  },
  {
    '_id': '57cd40c7dbe20dfcd034dc09',
    'name': 'Cochran Mercado',
    'email': 'cochranmercado@idealis.com',
  },
  {
    '_id': '57cd40c705b5b4bf77ff1edb',
    'name': 'Stefanie Wallace',
    'email': 'stefaniewallace@idealis.com',
  },
  {
    '_id': '57cd40c75f47a85cb0a25152',
    'name': 'Felicia Bishop',
    'email': 'feliciabishop@idealis.com',
  },
  {
    '_id': '57cd40c79fef048ca3d6ba0b',
    'name': 'Joanne Whitney',
    'email': 'joannewhitney@idealis.com',
  },
  {
    '_id': '57cd40c7350f04d57d4ee3eb',
    'name': 'Hazel Frank',
    'email': 'hazelfrank@idealis.com',
  },
  {
    '_id': '57cd40c712066a7e9074e06a',
    'name': 'Luann Malone',
    'email': 'luannmalone@idealis.com',
  },
  {
    '_id': '57cd40c74ccc035760d42991',
    'name': 'Crosby Cruz',
    'email': 'crosbycruz@idealis.com',
  },
  {
    '_id': '57cd40c7598a8e3a214d7665',
    'name': 'Saunders Browning',
    'email': 'saundersbrowning@idealis.com',
  },
  {
    '_id': '57cd40c7a445964cc7d9cb1a',
    'name': 'Annette Clayton',
    'email': 'annetteclayton@idealis.com',
  },
  {
    '_id': '57cd40c74084e0248fe1f763',
    'name': 'Ella Whitley',
    'email': 'ellawhitley@idealis.com',
  },
  {
    '_id': '57cd40c72f8be76ac42a4e86',
    'name': 'Rachael Bowen',
    'email': 'rachaelbowen@idealis.com',
  },
  {
    '_id': '57cd40c730cda5705c701650',
    'name': 'Wise Norris',
    'email': 'wisenorris@idealis.com',
  },
  {
    '_id': '57cd40c7908d5e86fd0733f3',
    'name': 'Isabelle Rollins',
    'email': 'isabellerollins@idealis.com',
  },
  {
    '_id': '57cd40c70500c9dfdbf94338',
    'name': 'Peck Garner',
    'email': 'peckgarner@idealis.com',
  },
  {
    '_id': '57cd40c70c062e270e0738ee',
    'name': 'Fleming Morton',
    'email': 'flemingmorton@idealis.com',
  },
  {
    '_id': '57cd40c72a864c4bcd262ef6',
    'name': 'Amber Fischer',
    'email': 'amberfischer@idealis.com',
  },
  {
    '_id': '57cd40c73128edda7adbe94f',
    'name': 'Delia Castro',
    'email': 'deliacastro@idealis.com',
  },
  {
    '_id': '57cd40c77bf081b9f42d3698',
    'name': 'Aguirre Sweeney',
    'email': 'aguirresweeney@idealis.com',
  },
  {
    '_id': '57cd40c751f367aa7b32da6e',
    'name': 'King England',
    'email': 'kingengland@idealis.com',
  },
  {
    '_id': '57cd40c784754eba6b9bbd2d',
    'name': 'Robyn Albert',
    'email': 'robynalbert@idealis.com',
  },
  {
    '_id': '57cd40c7acbace3435719789',
    'name': 'Dawn Maxwell',
    'email': 'dawnmaxwell@idealis.com',
  },
  {
    '_id': '57cd40c70d734bcad3c08f2d',
    'name': 'Beryl Kirkland',
    'email': 'berylkirkland@idealis.com',
  },
  {
    '_id': '57cd40c792d15043ef643488',
    'name': 'Tessa Solis',
    'email': 'tessasolis@idealis.com',
  },
  {
    '_id': '57cd40c7f2d8f50f685bd16f',
    'name': 'Moses Mcneil',
    'email': 'mosesmcneil@idealis.com',
  },
  {
    '_id': '57cd40c777498206fc26fc90',
    'name': 'Rosario York',
    'email': 'rosarioyork@idealis.com',
  },
  {
    '_id': '57cd40c74e75e209aab1453c',
    'name': 'Victoria Montoya',
    'email': 'victoriamontoya@idealis.com',
  },
  {
    '_id': '57cd40c7cb3a93560aaa4353',
    'name': 'Keri Vaughan',
    'email': 'kerivaughan@idealis.com',
  },
  {
    '_id': '57cd40c712055b1cb6979f92',
    'name': 'Kay Solomon',
    'email': 'kaysolomon@idealis.com',
  },
  {
    '_id': '57cd40c716891d8eb7463cfc',
    'name': 'Dorothea Cleveland',
    'email': 'dorotheacleveland@idealis.com',
  },
  {
    '_id': '57cd40c7f65a1fd8733b0db5',
    'name': 'Briggs Lang',
    'email': 'briggslang@idealis.com',
  },
  {
    '_id': '57cd40c723241c3c64d79dd6',
    'name': 'Roberts Mays',
    'email': 'robertsmays@idealis.com',
  },
  {
    '_id': '57cd40c7be1dd2704d7eaa3e',
    'name': 'Mccoy Acevedo',
    'email': 'mccoyacevedo@idealis.com',
  },
  {
    '_id': '57cd40c72b252a1a89734454',
    'name': 'Bettye Lynn',
    'email': 'bettyelynn@idealis.com',
  },
  {
    '_id': '57cd40c76345418735d4ff38',
    'name': 'Martina Harrington',
    'email': 'martinaharrington@idealis.com',
  },
  {
    '_id': '57cd40c7dda8ab2cb93de9fd',
    'name': 'Gentry Munoz',
    'email': 'gentrymunoz@idealis.com',
  },
  {
    '_id': '57cd40c7b11c6b27d51843a8',
    'name': 'Selena Skinner',
    'email': 'selenaskinner@idealis.com',
  },
  {
    '_id': '57cd40c775fae39023b20bcc',
    'name': 'Case Hayden',
    'email': 'casehayden@idealis.com',
  },
  {
    '_id': '57cd40c781d187704b7191b6',
    'name': 'Walls Richards',
    'email': 'wallsrichards@idealis.com',
  },
  {
    '_id': '57cd40c76caff2209a21452e',
    'name': 'Serena Bailey',
    'email': 'serenabailey@idealis.com',
  },
  {
    '_id': '57cd40c78b7eeeafad0e6bed',
    'name': 'Molly Torres',
    'email': 'mollytorres@idealis.com',
  },
  {
    '_id': '57cd40c7e8a5880236a6e7cf',
    'name': 'Diana Henderson',
    'email': 'dianahenderson@idealis.com',
  },
  {
    '_id': '57cd40c7e60b5da460a7c6e2',
    'name': 'Woodard Bradford',
    'email': 'woodardbradford@idealis.com',
  },
  {
    '_id': '57cd40c7ed424f1a0c5f8ba4',
    'name': 'Kaitlin Freeman',
    'email': 'kaitlinfreeman@idealis.com',
  },
  {
    '_id': '57cd40c73c58bcc7df296524',
    'name': 'Valerie Gay',
    'email': 'valeriegay@idealis.com',
  },
  {
    '_id': '57cd40c79f366672620f03a0',
    'name': 'Summer Forbes',
    'email': 'summerforbes@idealis.com',
  },
  {
    '_id': '57cd40c768d8daf997766234',
    'name': 'Knox Robbins',
    'email': 'knoxrobbins@idealis.com',
  },
  {
    '_id': '57cd40c796650f7408b5e987',
    'name': 'Mccormick Rowe',
    'email': 'mccormickrowe@idealis.com',
  },
  {
    '_id': '57cd40c7b0b0b47c28b40170',
    'name': 'Joyce Holder',
    'email': 'joyceholder@idealis.com',
  },
  {
    '_id': '57cd40c7527abb21eaf61193',
    'name': 'Jaime Dominguez',
    'email': 'jaimedominguez@idealis.com',
  },
  {
    '_id': '57cd40c775db07c73545f4b7',
    'name': 'Williams Simpson',
    'email': 'williamssimpson@idealis.com',
  },
  {
    '_id': '57cd40c7105c545c9c0151d3',
    'name': 'Erna King',
    'email': 'ernaking@idealis.com',
  },
  {
    '_id': '57cd40c74cb5667d0366eaa1',
    'name': 'Robertson Burks',
    'email': 'robertsonburks@idealis.com',
  },
  {
    '_id': '57cd40c76973ac7a864b5252',
    'name': 'Kemp Mccray',
    'email': 'kempmccray@idealis.com',
  },
  {
    '_id': '57cd40c7530efd944300c9eb',
    'name': 'Brown Daniel',
    'email': 'browndaniel@idealis.com',
  },
  {
    '_id': '57cd40c7bf2cd97decdbe3cc',
    'name': 'Cantu Burgess',
    'email': 'cantuburgess@idealis.com',
  },
  {
    '_id': '57cd40c73435cf3a75ecf2ff',
    'name': 'Mia Doyle',
    'email': 'miadoyle@idealis.com',
  },
  {
    '_id': '57cd40c78f9e68702d9b8750',
    'name': 'Martinez Calderon',
    'email': 'martinezcalderon@idealis.com',
  },
  {
    '_id': '57cd40c7dd1978425e52b3d3',
    'name': 'Ingram Sherman',
    'email': 'ingramsherman@idealis.com',
  },
  {
    '_id': '57cd40c7ca6371d413654932',
    'name': 'Montgomery Harding',
    'email': 'montgomeryharding@idealis.com',
  },
  {
    '_id': '57cd40c760515c491235868a',
    'name': 'Patton Lara',
    'email': 'pattonlara@idealis.com',
  },
  {
    '_id': '57cd40c7413def341e1d50af',
    'name': 'Cannon Green',
    'email': 'cannongreen@idealis.com',
  },
  {
    '_id': '57cd40c7cfa5bf480b96c544',
    'name': 'Phyllis Gibson',
    'email': 'phyllisgibson@idealis.com',
  },
  {
    '_id': '57cd40c72b9694b6fc136697',
    'name': 'Julia Flynn',
    'email': 'juliaflynn@idealis.com',
  },
  {
    '_id': '57cd40c7e1489b010df5a9df',
    'name': 'Carol Holman',
    'email': 'carolholman@idealis.com',
  },
  {
    '_id': '57cd40c744b6277cdf55eda1',
    'name': 'Joy Herman',
    'email': 'joyherman@idealis.com',
  },
  {
    '_id': '57cd40c79395f5d5f3697b54',
    'name': 'Rowland Mcfadden',
    'email': 'rowlandmcfadden@idealis.com',
  },
  {
    '_id': '57cd40c7695fcf703a2f66ac',
    'name': 'Marva Burris',
    'email': 'marvaburris@idealis.com',
  },
  {
    '_id': '57cd40c7efd7e8d755007cc9',
    'name': 'Elizabeth Raymond',
    'email': 'elizabethraymond@idealis.com',
  }
]
)

;
