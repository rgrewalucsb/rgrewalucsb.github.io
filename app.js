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
      url: '/1',
      views: {
        'blog.post1': {
          templateUrl: 'templates/posts/post1.html',
        }
      },
      data: {tog: 3}
    })
    .state('blog.post2', {
      url: '/2',
      views: {
        'blog.post2': {
          templateUrl: 'templates/posts/post2.html',
        }
      },
      data: {tog: 3}
    })
    .state('blog.post3', {
      url: '/3',
      views: {
        'blog.post3': {
          templateUrl: 'templates/posts/post3.html',
        }
      },
      data: {tog: 3}
    })
    .state('blog.post4', {
      url: '/4',
      views: {
        'blog.post4': {
          templateUrl: 'templates/posts/post4.html',
        }
      },
      data: {tog: 3}
    })
    .state('blog.post5', {
      url: '/5',
      views: {
        'blog.post5': {
          templateUrl: 'templates/posts/post5.html',
        }
      },
      data: {tog: 3}
    })
    .state('blog.post6', {
      url: '/6',
      views: {
        'blog.post6': {
          templateUrl: 'templates/posts/post6.html',
        }
      },
      data: {tog: 3}
    })
    .state('blog.post7', {
      url: '/7',
      views: {
        'blog.post7': {
          templateUrl: 'templates/posts/post7.html',
        }
      },
      data: {tog: 3}
    })
    .state('blog.post8', {
      url: '/8',
      views: {
        'blog.post8': {
          templateUrl: 'templates/posts/post8.html',
        }
      },
      data: {tog: 3}
    })
    .state('blog.post9', {
      url: '/9',
      views: {
        'blog.post9': {
          templateUrl: 'templates/posts/post9.html',
        }
      },
      data: {tog: 3}
    })
    .state('blog.post10', {
      url: '/10',
      views: {
        'blog.post10': {
          templateUrl: 'templates/posts/post10.html',
        }
      },
      data: {tog: 3}
    })
    .state('blog.post11', {
      url: '/11',
      views: {
        'blog.post11': {
          templateUrl: 'templates/posts/post11.html',
        }
      },
      data: {tog: 3}
    })
    .state('blog.post12', {
      url: '/12',
      views: {
        'blog.post12': {
          templateUrl: 'templates/posts/post12.html',
        }
      },
      data: {tog: 3}
    })
    .state('blog.post13', {
      url: '/13',
      views: {
        'blog.post13': {
          templateUrl: 'templates/posts/post13.html',
        }
      },
      data: {tog: 3}
    })
    .state('blog.post14', {
      url: '/14',
      views: {
        'blog.post14': {
          templateUrl: 'templates/posts/post14.html',
        }
      },
      data: {tog: 3}
    })
    .state('blog.post15', {
      url: '/15',
      views: {
        'blog.post15': {
          templateUrl: 'templates/posts/post15.html',
        }
      },
      data: {tog: 3}
    })
    .state('blog.post16', {
      url: '/16',
      views: {
        'blog.post16': {
          templateUrl: 'templates/posts/post16.html',
        }
      },
      data: {tog: 3}
    })
    .state('blog.post17', {
      url: '/17',
      views: {
        'blog.post17': {
          templateUrl: 'templates/posts/post17.html',
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
