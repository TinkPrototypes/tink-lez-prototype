'use strict';

angular.module('tinkApp')
  .controller('tableHotlistsCtrl',['$scope','$timeout',function (scope,timeout) {

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
      ];
    },700);

    // The headers you want to show and whether they are already visible in the table
    scope.headers = [
      {
        field: 'datum',
        alias: 'Datum',
        checked: true,
        sort:true
      },
      {
        field: 'wlbl',
        alias: 'WL/BL',
        checked: true,
        sort:true
      },
      {
        field: 'naam',
        alias: 'Naam',
        checked: true,
        sort:true
      },
      {
        field: 'aangemaaktopbo',
        alias: 'Aangemaakt op (BO)',
        checked: true,
        sort:true
      },
      {
        field: 'recordsactief',
        alias: 'Records actief',
        checked: true,
        sort:true
      },
      {
        field: 'recordspassief',
        alias: 'Records passief',
        checked: true,
        sort:true
      },
      {
        field: 'aangemaaktopext',
        alias: 'Aangemaakt op (EXT)',
        checked: true,
        sort:true
      }
    ];
    scope.nums=0;
    scope.changenums = function(){
      scope.nums = scope.nums+1;
    };
    scope.perpageValue=[10,20,25,30,45];


      scope.actions = [];
}]);
