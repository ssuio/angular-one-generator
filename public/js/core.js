import config from './config.js'
global.Core = config || {
    moduleName: 'myApp'
};

require('../css/base.scss')

angular.module(Core.moduleName, []);
require('./controller/root-ctrl');
require('./controller/utils');

angular = undefined;