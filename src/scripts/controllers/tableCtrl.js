'use strict';

angular.module('tinkApp')
  .controller('tableCtrl',['$scope','$timeout',function (scope,timeout) {

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
          aanvraagnr: '2015.34034',
          nummerplaat: '1 - AAA - 123',
          aangevraagdop: '15/02/2015',
          status: 'in behandeling',
          type: 'Vrijstelling',
          soort: 'Soort 1',
          looptijdstart: '15/02/2015',
          looptijdeinde: '10/03/2015',
        },
        {
          aanvraagnr: '2015.94893',
          nummerplaat: '1 - OAJ - 123',
          aangevraagdop: '23/09/2015',
          status: 'in behandeling',
          type: 'Vrijstelling',
          soort: 'Oldtimer',
          looptijdstart: '23/09/2015',
          looptijdeinde: '25/09/2015',
        },
        {
          aanvraagnr: '2015.19847',
          nummerplaat: '1 - TXA - 123',
          aangevraagdop: '12/06/2015',
          status: 'in behandeling',
          type: 'Vrijstelling',
          soort: 'Soort 1',
          looptijdstart: '12/06/2015',
          looptijdeinde: '12/06/2015',
        },
        {
          aanvraagnr: '2015.40392',
          nummerplaat: '1 - DDD - 123',
          aangevraagdop: '11/02/2015',
          status: 'in behandeling',
          type: 'Vrijstelling',
          soort: 'Soort 1',
          looptijdstart: '15/02/2015',
          looptijdeinde: '10/03/2015',
        }
      ];
    },300);
    };

    timeout(function(){
    // Data model
      scope.data.content = [
        {
          aanvraagnr: '2015.34034',
          nummerplaat: '1 - AAA - 123',
          aangevraagdop: '15/02/2015',
          status: 'in behandeling',
          type: 'Vrijstelling',
          soort: 'Soort 1',
          looptijdstart: '15/02/2015',
          looptijdeinde: '10/03/2015',
        },
        {
          aanvraagnr: '2015.94893',
          nummerplaat: '1 - OAJ - 123',
          aangevraagdop: '23/09/2015',
          status: 'in behandeling',
          type: 'Vrijstelling',
          soort: 'Oldtimer',
          looptijdstart: '23/09/2015',
          looptijdeinde: '25/09/2015',
        },
        {
          aanvraagnr: '2015.19847',
          nummerplaat: '1 - TXA - 123',
          aangevraagdop: '12/06/2015',
          status: 'in behandeling',
          type: 'Vrijstelling',
          soort: 'Soort 1',
          looptijdstart: '12/06/2015',
          looptijdeinde: '12/06/2015',
        },
        {
          aanvraagnr: '2015.40392',
          nummerplaat: '1 - DDD - 123',
          aangevraagdop: '11/02/2015',
          status: 'in behandeling',
          type: 'Vrijstelling',
          soort: 'Soort 1',
          looptijdstart: '15/02/2015',
          looptijdeinde: '10/03/2015',
        },
        {
          aanvraagnr: '2015.98763',
          nummerplaat: '1 - FDS - 123',
          aangevraagdop: '01/04/2015',
          status: 'ingediend',
          type: 'Vrijstelling',
          soort: 'Soort 1',
          looptijdstart: '01/04/2015',
          looptijdeinde: '19/06/2015',
        },
        {
          aanvraagnr: '2015.45678',
          nummerplaat: '1 - AZE - 123',
          aangevraagdop: '10/02/2015',
          status: 'opnieuw ingediend',
          type: 'Vrijstelling',
          soort: 'Oldtimer',
          looptijdstart: '10/02/2015',
          looptijdeinde: '28/03/2015',
        },
        {
          aanvraagnr: '2015.36738',
          nummerplaat: '1 - EDR - 123',
          aangevraagdop: '06/07/2015',
          status: 'afgekeurd',
          type: 'Vrijstelling',
          soort: 'Soort 4',
          looptijdstart: '06/07/2015',
          looptijdeinde: '17/09/2015',
        },
        {
          aanvraagnr: '2015.76378',
          nummerplaat: '1 - ABC - 123',
          aangevraagdop: '19/04/2015',
          status: 'goedgekeurd',
          type: 'Vrijstelling',
          soort: 'Soort 4',
          looptijdstart: '19/04/2015',
          looptijdeinde: '10/06/2015',
        },
        {
          aanvraagnr: '2015.87639',
          nummerplaat: '1 - JHZ - 123',
          aangevraagdop: '21/04/2015',
          status: 'in behandeling',
          type: 'Vrijstelling',
          soort: 'Soort 7',
          looptijdstart: '21/04/2015',
          looptijdeinde: '23/06/2015',
        },
        {
          aanvraagnr: '2015.95673',
          nummerplaat: '1 - KSH - 123',
          aangevraagdop: '09/03/2015',
          status: 'goedgekeurd',
          type: 'Vrijstelling',
          soort: 'Soort 4',
          looptijdstart: '09/03/2015',
          looptijdeinde: '13/05/2015',
        },
        {
          aanvraagnr: '2015.34563',
          nummerplaat: '1 - FSG - 123',
          aangevraagdop: '16/05/2015',
          status: 'in behandeling',
          type: 'Vrijstelling',
          soort: 'Soort 4',
          looptijdstart: '16/05/2015',
          looptijdeinde: '17/08/2015',
        },
        {
          aanvraagnr: '2015.34567',
          nummerplaat: '1 - SJS - 123',
          aangevraagdop: '31/01/2015',
          status: 'goedgekeurd',
          type: 'Vrijstelling',
          soort: 'Oldtimer',
          looptijdstart: '31/01/2015',
          looptijdeinde: '13/03/2015',
        },
      ];
    },700);

    // The headers you want to show and whether they are already visible in the table
    scope.headers = [
      {
        field: 'aanvraagnr',
        alias: 'Aanvraagnr',
        checked: true,
        sort:true
      },
      {
        field: 'nummerplaat',
        alias: 'Nummerplaat',
        checked: true,
        sort:true
      },
      {
        field: 'aangevraagdop',
        alias: 'Aangevraagd op',
        checked: true,
        sort:true
      },
      {
        field: 'status',
        alias: 'Status',
        checked: true,
        sort:true
      },
      {
        field: 'type',
        alias: 'Type',
        checked: true,
        sort:true
      },
      {
        field: 'soort',
        alias: 'Soort',
        checked: true,
        sort:true
      },
      {
        field: 'looptijdstart',
        alias: 'Looptijd start',
        checked: true,
        sort:true
      },
      {
        field: 'looptijdeinde',
        alias: 'Looptijd einde',
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
          name: 'remove',
          callback: function(items) {
            angular.forEach(items, function(val) {
              scope.data.content.splice(scope.data.content.indexOf(val),1);
            });
          },
          order:0, //orde of the button
          master:true, //required !
          icon:'fa-close', //the icon required.
          single:true // only when one checkbox is selected
        }
    ];
}]);
