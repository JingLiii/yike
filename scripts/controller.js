angular.module('Contrllers', [])

//导航栏控制器
.controller('NavCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {
    $scope.navs = [
        { text: '今日一刻', icon: 'icon-home', link: '#!/today' },
        { text: '往期内容', icon: 'icon-file-empty', link: '#!/older' },
        { text: '热门作者', icon: 'icon-pencil', link: '#!/author' },
        { text: '栏目浏览', icon: 'icon-menu', link: '#!/category' },
        { text: '设置', icon: 'icon-cog', link: '#!/settings' },
    ];
    $rootScope.title = '一刻';

}])

//今日一刻控制器
.controller('todayCtrl', ['$scope', '$http', '$rootScope', function($scope, $http, $rootScope) {
    $rootScope.title = '今日一刻';
    //获取时间
    $scope.date = $rootScope.getTime();
    //通过控制器获取数据
    $http({
        //向我们自己的php获取数据
        url: '/project/myYike/api/today.php',
        medthod: 'get',
        params: {
            //把当前时间带过去
            todayDate: $scope.date
        }
        //获取返回的数据
    }).then(function(data) {
        //处理数据
        $scope.posts = data.data.posts;
    });
}])

//往期内容控制器
.controller('olderCtrl', ['$scope', '$http', '$rootScope', function($scope, $http, $rootScope) {
    $rootScope.title = '往期内容';
    $scope.date = $rootScope.getTime(-1);
    //通过控制器获取数据
    $http({
        //向我们自己的php获取数据
        url: '/project/myYike/api/today.php',
        medthod: 'get',
        params: {
            //把当前时间带过去
            todayDate: $scope.date
        }
        //获取返回的数据
    }).then(function(data) {
        console.log(data)
            //处理数据
        $scope.posts = data.data.posts;
    });

}])