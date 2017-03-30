//创建应用主模块
var App = angular.module('App', ['ngRoute', 'Contrllers']);

//配置路由
//传入配置路由的服务
App.config(['$routeProvider', function($routeProvider) {
    //配置路由信息
    $routeProvider.when(
        //路由地址
        '/today', {
            //路由页面
            templateUrl: './views/today.html',
            //这个路由的控制器
            controller: 'todayCtrl'
        }
    ).when('/older', {
        templateUrl: '/project/myYike/views/older.html',
        controller: 'olderCtrl'
    });
}]);

//定义全局变量
App.run(['$rootScope', '$filter', function($rootScope, $filter) {

    //设置一个全局变量 用来控制现在的状态
    $rootScope.collapsed = false;

    //单击后改变状态
    $rootScope.toggle = function() {
        $rootScope.collapsed = !$rootScope.collapsed;

        //获取所有的nav
        let navs = document.querySelectorAll('.navs dd');
        //然后为每一个小的导航条设置应有的状态
        if ($rootScope.collapsed) {
            for (let i = 0; i < navs.length; i++) {
                navs[i].style.transform = 'translate(0)';
                navs[i].style.transitionDuration = 0.15 * (i + 1) + 's';
                navs[i].style.transitionDelay = '0.35s';
            }
        } else {
            for (let j = navs.length - 1; j >= 0; j--) {
                navs[j].style.transform = 'translate(-100%)';
                navs[j].style.transitionDuration = (navs.length - j) * 0.15 + 's';
                navs[j].style.transitionDelay = '';
            }
        }
    };


    //获取当前系统时间
    $rootScope.now = $filter('date')(new Date, 'yyyy-MM-dd');

}])