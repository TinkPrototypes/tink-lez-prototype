'use strict';

angular.module('tinkApp')
  .controller('tableDetailHotlistsCtrl',['$scope','$timeout',function (scope,timeout) {

    scope.data = {};
    // Override default items per page
    scope.pages = '5, 10, 25';

    scope.changed = function(data,next){
      console.log(data,scope.nums);

      timeout(function(){
        // Data model
        scope.data = [
        ];
        scope.totalitems = 200;
        next();
      },300);
    };
    scope.changed = function(type,value,fn){
      fn();
    };

    scope.totalitems = 200;
    scope.chan = function(prop,or,typ){
      console.log('changed',prop,or,typ);
      timeout(function(){
      // Data model
      scope.data = [
        {
          datum: '21/08/2015',
          wlbl: 'Whitelist',
          naam: 'LNE',
          aangemaaktopbo: '10/09/2015 - 23:02:06',
          recordsactief: '8010000',
          recordspassief: '2',
          aangemaaktopext: '10/09/2015 - 21:08:26'
        },
        {
          datum: '21/08/2015',
          wlbl: 'Whitelist',
          naam: 'LNE',
          aangemaaktopbo: '10/09/2015 - 23:02:06',
          recordsactief: '8010000',
          recordspassief: '2',
          aangemaaktopext: '10/09/2015 - 21:08:26'
        },
        {
          datum: '21/08/2015',
          wlbl: 'Whitelist',
          naam: 'LNE',
          aangemaaktopbo: '10/09/2015 - 23:02:06',
          recordsactief: '8010000',
          recordspassief: '2',
          aangemaaktopext: '10/09/2015 - 21:08:26'
        },
        {
          datum: '21/08/2015',
          wlbl: 'Whitelist',
          naam: 'LNE',
          aangemaaktopbo: '10/09/2015 - 23:02:06',
          recordsactief: '8010000',
          recordspassief: '2',
          aangemaaktopext: '10/09/2015 - 21:08:26'
        }
      ];
    },300);
    };

    timeout(function(){
    // Data model
      scope.data.content = [
        {
          nummerplaat: '1-AZE-567',
          land: 'België',
          actief: 'true',
          gewijzigdop: '10/09/2015 - 23:02:06',
          gewijzigddoor: 'Luc De Backer',
          reden: 'Correctie programmafout'
        },
        {
          nummerplaat: '1-AZE-567',
          land: 'België',
          actief: 'true',
          gewijzigdop: '10/09/2015 - 23:02:06',
          gewijzigddoor: 'Luc De Backer',
          reden: 'Correctie programmafout'
        },
        {
          nummerplaat: '1-AZE-567',
          land: 'België',
          actief: 'false',
          gewijzigdop: '10/09/2015 - 23:02:06',
          gewijzigddoor: 'Luc De Backer',
          reden: 'Correctie programmafout'
        },
        {
          nummerplaat: '1-AZE-567',
          land: 'België',
          actief: 'true',
          gewijzigdop: '10/09/2015 - 23:02:06',
          gewijzigddoor: 'Luc De Backer',
          reden: 'Correctie programmafout'
        },
        {
          nummerplaat: '1-AZE-567',
          land: 'België',
          actief: 'true',
          gewijzigdop: '10/09/2015 - 23:02:06',
          gewijzigddoor: 'Luc De Backer',
          reden: 'Correctie programmafout'
        },
        {
          nummerplaat: '1-AZE-567',
          land: 'België',
          actief: 'true',
          gewijzigdop: '10/09/2015 - 23:02:06',
          gewijzigddoor: 'Luc De Backer',
          reden: 'Correctie programmafout'
        },
        {
          nummerplaat: '1-AZE-567',
          land: 'België',
          actief: 'false',
          gewijzigdop: '10/09/2015 - 23:02:06',
          gewijzigddoor: 'Chantal De Backer',
          reden: 'Correctie programmafout'
        },
        {
          nummerplaat: '1-AZE-567',
          land: 'België',
          actief: 'false',
          gewijzigdop: '10/09/2015 - 23:02:06',
          gewijzigddoor: 'Luc De Backer',
          reden: 'Correctie programmafout'
        },
        {
          nummerplaat: '1-AZE-567',
          land: 'België',
          actief: 'true',
          gewijzigdop: '10/09/2015 - 23:02:06',
          gewijzigddoor: 'Luc De Backer',
          reden: 'Correctie programmafout'
        },
        {
          nummerplaat: '1-AZE-567',
          land: 'België',
          actief: 'true',
          gewijzigdop: '10/09/2015 - 23:02:06',
          gewijzigddoor: 'Luc De Backer',
          reden: 'Correctie programmafout'
        },
        {
          nummerplaat: '1-AZE-567',
          land: 'België',
          actief: 'true',
          gewijzigdop: '10/09/2015 - 23:02:06',
          gewijzigddoor: 'Luc De Backer',
          reden: 'Correctie programmafout'
        },
        {
          nummerplaat: '1-AZE-567',
          land: 'België',
          actief: 'true',
          gewijzigdop: '10/09/2015 - 23:02:06',
          gewijzigddoor: 'Luc De Backer',
          reden: 'Correctie programmafout'
        }
      ];
    },700);

    // The headers you want to show and whether they are already visible in the table
    scope.headers = [
      {
        field: 'nummerplaat',
        alias: 'Nummerplaat',
        checked: true,
        sort:true
      },
      {
        field: 'land',
        alias: 'Land',
        checked: true,
        sort:true
      },
      {
        field: 'actief',
        alias: 'Actief',
        checked: true,
        sort:true
      },
      {
        field: 'gewijzigdop',
        alias: 'Gewijzigd op',
        checked: true,
        sort:true
      },
      {
        field: 'gewijzigddoor',
        alias: 'Gewijzigd door',
        checked: true,
        sort:true
      },
      {
        field: 'reden',
        alias: 'Reden',
        checked: true,
        sort:true
      }
    ];
    scope.nums=0;
    scope.changenums = function(){
      scope.nums = scope.nums+1;
    };
    scope.perpageValue=[10,20,25,30,45];


      scope.actions = [
      {
          name: 'Detaillijn wijzigen',
          callback: function(items) {
            angular.forEach(items, function(val) {
              scope.data.content.splice(scope.data.content.indexOf(val),1);
            });
          },
          order:0, //orde of the button
          master:true, //required !
          icon:'fa-check', //the icon required.
          single:true // only when one checkbox is selected
        }
    ];
}]);
