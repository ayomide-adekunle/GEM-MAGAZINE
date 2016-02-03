// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('gemApp', ['ionic','ngCordova','gemApp.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })


  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })

  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
        }
      }
    })
    .state('home', {
      url: '/home',
      templateUrl: 'templates/home.html',
      controller: 'HomeCtrl'
            
    })
    .state('mainpage', {
      url: '/mainpage',
      templateUrl: 'templates/mainpage.html',
      controller: 'mainpageCtrl'
            
    })
    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })

    .state('app.fatherhood', {
      url: '/fatherhood',
      views: {
        'menuContent': {
          templateUrl: 'templates/m_fatherhood.html',
          controller: 'FatherhoodCtrl'
        }
      }
    })

    .state('app.mhealth', {
      url: '/mhealth',
      views: {
        'menuContent': {
          templateUrl: 'templates/m_health.html',
          controller: 'MHealthCtrl'
        }
      }
    })
    .state('app.sport', {
      url: '/sport',
      views: {
        'menuContent': {
          templateUrl: 'templates/m_sport.html',
          controller: 'SportCtrl'
        }
      }
    })
    .state('app.mrelationship', {
      url: '/mrelationship',
      views: {
        'menuContent': {
          templateUrl: 'templates/m_relationship.html',
          controller: 'MRelationshipCtrl'
        }
      }
    })
    .state('app.mrealtalk', {
      url: '/mrealtalk',
      views: {
        'menuContent': {
          templateUrl: 'templates/m_realtalk.html',
          controller: 'MRealtalkCtrl'
        }
      }
    })
    .state('app.mlifestyle', {
      url: '/mlifestyle',
      views: {
        'menuContent': {
          templateUrl: 'templates/m_lifestyle.html',
          controller: 'MLifestyleCtrl'
        }
      }
    })
    .state('app.minspiration', {
      url: '/minspiration',
      views: {
        'menuContent': {
          templateUrl: 'templates/m_inspiration.html',
          controller: 'MInspirationCtrl'
        }
      }
    })

    .state('app.mfinance', {
      url: '/mfinance',
      views: {
        'menuContent': {
          templateUrl: 'templates/m_finance.html',
          controller: 'MFinanceCtrl'
        }
      }
    })

    .state('app.mfashion', {
      url: '/mfashion',
      views: {
        'menuContent': {
          templateUrl: 'templates/m_fashion.html',
          controller: 'MFashionCtrl'
        }
      }
    })

   .state('app.emotional-iq', {
      url: '/emotional-iq',
      views: {
        'menuContent': {
          templateUrl: 'templates/m_emotional-iq.html',
          controller: 'EmotionalIqCtrl'
        }
      }
    })


    .state('app.autos', {
      url: '/autos',
      views: {
        'menuContent': {
          templateUrl: 'templates/m_autos.html',
          controller: 'AutosCtrl'
        }
      }
    })


    .state('app.beauty', {
      url: '/beauty',
      views: {
        'menuContent': {
          templateUrl: 'templates/w_beauty.html',
          controller: 'BeautyCtrl'
        }
      }
    })

   
    .state('app.wisdom_series', {
      url: '/wisdom_series',
      views: {
        'menuContent': {
          templateUrl: 'templates/w_wisdom_series.html',
          controller: 'WisdomSeriesCtrl'
        }
      }
    })
   
    .state('app.whats_new', {
      url: '/whats_new',
      views: {
        'menuContent': {
          templateUrl: 'templates/w_whats_new.html',
          controller: 'WhatsNewCtrl'
        }
      }
    })
    .state('app.parenting', {
      url: '/parenting',
      views: {
        'menuContent': {
          templateUrl: 'templates/w_parenting.html',
          controller: 'ParentingCtrl'
        }
      }
    })
    
    .state('app.motivational', {
      url: '/motivational',
      views: {
        'menuContent': {
          templateUrl: 'templates/w_motivational.html',
          controller: 'MotivationalCtrl'
        }
      }
    })
  
    .state('app.marthas_place', {
      url: '/marthas_place',
      views: {
        'menuContent': {
          templateUrl: 'templates/w_marthas_place.html',
          controller: 'MarthasPlaceCtrl'
        }
      }
    })

    .state('app.light_reflections', {
      url: '/light_reflections',
      views: {
        'menuContent': {
          templateUrl: 'templates/w_light_reflections.html',
          controller: 'LightReflectionsCtrl'
        }
      }
    })

   
    .state('app.home_you', {
      url: '/home_you',
      views: {
        'menuContent': {
          templateUrl: 'templates/w_home_you.html',
          controller: 'HomeYouCtrl'
        }
      }
    })

    
    .state('app.lifestyle', {
      url: '/lifestyle',
      views: {
        'menuContent': {
          templateUrl: 'templates/w_lifestyle.html',
          controller: 'LifestyleCtrl'
        }
      }
    })

   
    .state('app.health_fitness', {
      url: '/health_fitness',
      views: {
        'menuContent': {
          templateUrl: 'templates/w_health_fitness.html',
          controller: 'HealthFitnessCtrl'
        }
      }
    })

   
    .state('app.food', {
      url: '/food',
      views: {
        'menuContent': {
          templateUrl: 'templates/w_food.html',
          controller: 'FoodCtrl'
        }
      }
    })

    
    .state('app.finance', {
      url: '/finance',
      views: {
        'menuContent': {
          templateUrl: 'templates/w_finance.html',
          controller: 'FinanceCtrl'
        }
      }
    })

   
    .state('app.fashion', {
      url: '/fashion',
      views: {
        'menuContent': {
          templateUrl: 'templates/w_fashion.html',
          controller: 'FashionCtrl'
        }
      }
    })

    
    .state('app.khealth', {
      url: '/khealth',
      views: {
        'menuContent': {
          templateUrl: 'templates/k_health.html',
          controller: 'KHealthCtrl'
        }
      }
    })

    
    
    .state('app.contact', {
      url: '/contact',
      views: {
        'menuContent': {
          templateUrl: 'templates/contact.html',
          controller: 'ContactCtrl'
        }
      }
    })

     
    
    .state('app.bss', {
      url: '/bss',
      views: {
        'menuContent': {
          templateUrl: 'templates/bss.html',
          controller: 'BssCtrl'
        }
      }
    })

   
    .state('app.publisher', {
      url: '/publisher',
      views: {
        'menuContent': {
          templateUrl: 'templates/publisher.html',
          controller: 'PublisherCtrl'
        }
      }
    })

    
    .state('app.kstories', {
      url: '/kstories',
      views: {
        'menuContent': {
          templateUrl: 'templates/k_stories.html',
          controller: 'KStoriesCtrl'
        }
      }
    })

    
    .state('app.kfinance', {
      url: '/kfinance',
      views: {
        'menuContent': {
          templateUrl: 'templates/k_finance.html',
          controller: 'KFinanceCtrl'
        }
      }
    })

    
    
    .state('app.cartoon', {
      url: '/cartoon',
      views: {
        'menuContent': {
          templateUrl: 'templates/k_cartoon.html',
          controller: 'CartoonCtrl'
        }
      }
    })

      
    .state('app.entertainment', {
      url: '/entertainment',
      views: {
        'menuContent': {
          templateUrl: 'templates/w_entertainment.html',
          controller: 'EntertainmentCtrl'
        }
      }
    })

    
    .state('app.controversial', {
      url: '/controversial',
      views: {
        'menuContent': {
          templateUrl: 'templates/w_controversial.html',
          controller: 'ControversialCtrl'
        }
      }
    })

    .state('app.career', {
      url: '/career',
      views: {
        'menuContent': {
          templateUrl: 'templates/w_career.html',
          controller: 'CareerCtrl'
        }
      }
    })

   
    .state('app.auntykk', {
      url: '/auntykk',
      views: {
        'menuContent': {
          templateUrl: 'templates/w_aunty_kk.html',
          controller: 'AuntyKkCtrl'
        }
      }
    })

    .state('app.gemkidz', {
      url: '/gemkidz',
      views: {
        'menuContent': {
          templateUrl: 'templates/gemkidz.html',
          controller: 'gemkidzCtrl'
        }
      }
    })
    .state('app.ghai', {
      url: '/ghai',
      views: {
        'menuContent': {
          templateUrl: 'templates/ghai.html',
          controller: 'ghaiCtrl'
        }
      }
    })
    .state('app.singleladies', {
      url: '/singleladies',
      views: {
        'menuContent': {
          templateUrl: 'templates/singleladies.html',
          controller: 'singleladiesCtrl'
        }
      }
    })
    .state('app.gemstone', {
      url: '/gemstone',
      views: {
        'menuContent': {
          templateUrl: 'templates/gemstone.html',
          controller: 'gemstoneCtrl'
        }
      }
    })
    .state('app.gemman', {
      url: '/gemman',
      views: {
        'menuContent': {
          templateUrl: 'templates/gemman.html',
          controller: 'gemmanCtrl'
        }
      }
    })

    .state('app.gemwoman', {
      url: '/gemwoman',
      views: {
        'menuContent': {
          templateUrl: 'templates/gemwoman.html',
          controller: 'gemwomanCtrl'
        }
      }
    })

  .state('app.ksingle', {
    url: '/kplaylists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/kplaylist.html',
        controller: 'KPlaylistCtrl'
      }
    }
  })
  .state('app.msingle', {
    url: '/mplaylists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/mplaylist.html',
        controller: 'MPlaylistCtrl'
      }
    }
  })
  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/home');
});
