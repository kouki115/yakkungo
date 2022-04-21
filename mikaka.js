// mikakaApp
//
// みかか変換
// Author: Noon1004
// Date: 2022-04-21


;(function() {
    'use strict';

    var APP_NAME = 'mikakaApp';
    var app = angular.module(APP_NAME, []);

    var encodeMap = {
        'あ': '3',
        'い': 'e',
        'う': '4',
        'え': '5',
        'お': '6',
        'か': 't',
        'き': 'g',
        'く': 'h',
        'け': ':',
        'こ': 'b',
        'さ': 'x',
        'し': 'd',
        'す': 'r',
        'せ': 'p',
        'そ': 'c',
        'た': 'q',
        'ち': 'a',
        'つ': 'z',
        'て': 'w',
        'と': 's',
        'な': 'u',
        'に': 'i',
        'ぬ': '1',
        'ね': ',',
        'の': 'k',
        'は': 'f',
        'ひ': 'v',
        'ふ': '2',
        'へ': '^',
        'ほ': '-',
        'ま': 'j',
        'み': 'n',
        'む': ']',
        'め': '/',
        'も': 'm',
        'や': "7",
        'ゆ': '8',
        'よ': '9',
        'ら': 'o',
        'り': '|',
        'る': '.',
        'れ': ';',
        'ろ': '/',
        'ん': 'y',
        'わ': '0',
        'を': '['
    };

    var decodeMap = {};
    for (var k in encodeMap) {
        decodeMap[encodeMap[k]] = k;
    };
    //console.log(encodeMap);
    //console.log(decodeMap);

    app.controller('mikakaAppController', ['$scope', function($scope) {
        // Initial value
        // Another way: <div ng-controller="..." ng-init="input=''">
        $scope.input = '';
        $scope.fallbackCharacter = '';
        $scope.isEncodeMode = true;

        $scope.getFallbackCharacter = function() {
            if (this.fallbackCharacter === '') {
                return '□';
            }
            return this.fallbackCharacter;
        }

        $scope.encode = function(str) {
            return str.split('').map(function(c) {
                if (c in encodeMap) {
                    return encodeMap[c];
                }
                return $scope.getFallbackCharacter();
            }).join('');
        }

        $scope.decode = function(str) {
            return str.split('').map(function(c) {
                c = c.toUpperCase();
                if (c in decodeMap) {
                    return decodeMap[c];
                }
                return $scope.getFallbackCharacter();
            }).join('');
        }

        $scope.mikaka = function(input) {
            if (this.isEncodeMode) {
                return this.encode(input);
            }
            return this.decode(input);
        }
    }]);

    app.filter('reverse', function() {
        return function(str) {
            return str.split('').reverse().join('');
        }
    });

})();


// vim: set et ts=4 sts=4 sw=4 :
// __END__
