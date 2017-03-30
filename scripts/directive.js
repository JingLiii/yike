//自定义的指令

angular.module('Directives', [])

//遮盖内容

.directive('yikeLoading', function() {
    //返回一个对象, 即是该指令
    return {
        //指令的使用方法
        restrict: 'A',
        template: '<img ng-if="loaded" src="/project/myYike/public/images/loading.gif"/>'
    }
})