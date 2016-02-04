'use strict';

xdescribe('Controller: src/js/controller/main-ctrl', function() {

    var $rootScope, $scope, $controller;

    beforeEach(module('studentActivityReports.home'));
    beforeEach(inject(function(_$rootScope_, _$controller_) {
        $rootScope = _$rootScope_;
        $scope = $rootScope.$new();
        $controller = _$controller_;
         $controller('MainCtrl', {'$rootScope' : $rootScope, '$scope': $scope});
    }));

     it('should check the length of the array', function() {
        expect($scope.teacherArr.length).toEqual(3);
     });
 }); 

// xdescribe("A suite is just a function", function() {
//   var a;
//
//   it("and so is a spec", function() {
//     a = true;
//
//     expect(a).toBe(true);
//   });
// });
//
// xdescribe("The 'toEqual' matcher", function() {
//
//     it("works for simple literals and variables", function() {
//       var a = 12;
//       expect(a).not.toEqual(12);
//     });
//
//     it("should work for objects", function() {
//       var foo = {
//         a: 12,
//         b: 34
//       };
//       var bar = {
//         a: 12,
//         b: 34
//       };
//       expect(foo).toEqual(bar);
//     });
//   });


// describe("test suite example", function() {
//
//     describe("test suite example2", function() {
//
//         var foo = function(x, callBack) {
//             if (x) {
//                 callBack();
//             }
//         };
//
//         it("should not call the callBack", function() {
//             foo(false, function() {
//                 fail("Callback has been called");
//             });
//         });
//
//     });
//
// });


describe("A spy", function() {
    var foo, bar = null;

    beforeEach(function() {
        foo = {
            setBar: function(value) {
                bar = value;
            }
        };

        spyOn(foo, 'setBar');

        foo.setBar(123);
        foo.setBar(456, 'another param');
    });

    it("tracks that the spy was called", function() {
        expect(foo.setBar).toHaveBeenCalled();
    });

    it("tracks all the arguments of its calls", function() {
        expect(foo.setBar).toHaveBeenCalledWith(123);
        expect(foo.setBar).toHaveBeenCalledWith(456, 'another param');
    });

    it("stops all execution on a function", function() {
        expect(bar).toBeNull();
    });
});
