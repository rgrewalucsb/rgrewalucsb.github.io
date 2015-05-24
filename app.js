var app = angular.module('randy',['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');
  $stateProvider
    .state('main',{
      url: '/',
      abstract: true,
      views: {
        'main': {
          templateUrl: 'templates/home.html'
        }
      },
      data: {tog: 1}
    })
    .state('home',{
      url: '/home',
      views: {
        'home': {
          templateUrl: 'templates/home.html'
        }
      },
      data: {tog: 1}
    })
    .state('resume', {
      url: '/resume',
      views: {
        'resume': {
          templateUrl: 'templates/resume.html',
        }
      },
      data: {tog: 2}
    })
    .state('blog', {
      url: '/blog',
      views: {
        'blog': {
          templateUrl: 'templates/blog.html',
        }
      },
      data: {tog: 3}
    })
    .state('blog.post1', {
      url: '/technical_1',
      views: {
        'blog.post1': {
          templateUrl: 'templates/posts/t_post1.html',
        }
      },
      data: {tog: 3}
    })
    .state('blog.t_post2', {
      url: '/technical_2',
      views: {
        'blog.t_post2': {
          templateUrl: 'templates/posts/t_post2.html',
        }
      },
      data: {tog: 3}
    })
    .state('blog.t_post3', {
      url: '/technical_3',
      views: {
        'blog.t_post3': {
          templateUrl: 'templates/posts/t_post3.html',
        }
      },
      data: {tog: 3}
    })
    .state('blog.t_post4', {
      url: '/technical_4',
      views: {
        'blog.t_post4': {
          templateUrl: 'templates/posts/t_post4.html',
        }
      },
      data: {tog: 3}
    })
    .state('blog.t_post5', {
      url: '/technical_5',
      views: {
        'blog.t_post5': {
          templateUrl: 'templates/posts/t_post5.html',
        }
      },
      data: {tog: 3}
    })
    .state('blog.t_post6', {
      url: '/technical_6',
      views: {
        'blog.t_post6': {
          templateUrl: 'templates/posts/t_post6.html',
        }
      },
      data: {tog: 3}
    })
    .state('blog.t_post7', {
      url: '/technical_7',
      views: {
        'blog.t_post7': {
          templateUrl: 'templates/posts/t_post7.html',
        }
      },
      data: {tog: 3}
    })
    .state('blog.t_post8', {
      url: '/technical_8',
      views: {
        'blog.t_post8': {
          templateUrl: 'templates/posts/t_post8.html',
        }
      },
      data: {tog: 3}
    })
    .state('blog.t_post9', {
      url: '/technical_9',
      views: {
        'blog.t_post9': {
          templateUrl: 'templates/posts/t_post9.html',
        }
      },
      data: {tog: 3}
    })
    .state('blog.c_post1', {
      url: '/cultural_1',
      views: {
        'blog.c_post1': {
          templateUrl: 'templates/posts/c_post1.html',
        }
      },
      data: {tog: 3}
    })
    .state('blog.c_post2', {
      url: '/cultural_2',
      views: {
        'blog.c_post2': {
          templateUrl: 'templates/posts/c_post2.html',
        }
      },
      data: {tog: 3}
    })
    .state('blog.c_post3', {
      url: '/cultural_3',
      views: {
        'blog.c_post3': {
          templateUrl: 'templates/posts/c_post3.html',
        }
      },
      data: {tog: 3}
    })
    .state('blog.c_post4', {
      url: '/cultural_4',
      views: {
        'blog.c_post4': {
          templateUrl: 'templates/posts/c_post4.html',
        }
      },
      data: {tog: 3}
    })
    .state('project', {
      url: '/project',
      views: {
        'project': {
          templateUrl: 'templates/projects.html',
        }
      },
      data: {tog: 4}
    })     
});
