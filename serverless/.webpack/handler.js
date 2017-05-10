(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _runGraphQL = __webpack_require__(1);

	var _runGraphQL2 = _interopRequireDefault(_runGraphQL);

	var _connection = __webpack_require__(7);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/* eslint-disable global-require */
	module.exports.graphql = function (event, context, cb) {
	  (0, _runGraphQL2.default)(event, function (err, res) {
	    return (0, _connection.closeDB)(function () {
	      if (err) {
	        context.error(err);
	        return cb({ err: err });
	      }
	      context.succeed(res);
	      return cb(null, res);
	    });
	  });
	};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _graphql = __webpack_require__(2);

	var _schema = __webpack_require__(3);

	var _schema2 = _interopRequireDefault(_schema);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var runGraphQL = function runGraphQL(event, cb) {
	  var _event$body = event.body,
	      query = _event$body.query,
	      variables = _event$body.variables;

	  (0, _graphql.graphql)(_schema2.default, query, null, {}, variables).then(function (res) {
	    return cb(null, res);
	  }).catch(cb);
	};
	exports.default = runGraphQL;
	/*
	graphql(
	  schema: GraphQLSchema,
	  requestString: string,
	  rootValue?: ?any,
	  contextValue?: ?any,
	  variableValues?: ?{[key: string]: any},
	  operationName?: ?string
	): Promise<GraphQLResult>
	*/

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = require("graphql");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _bluebird = __webpack_require__(4);

	var _bluebird2 = _interopRequireDefault(_bluebird);

	var _graphql = __webpack_require__(2);

	var _productTypes = __webpack_require__(5);

	var _productTypes2 = _interopRequireDefault(_productTypes);

	var _userTypes = __webpack_require__(6);

	var _userTypes2 = _interopRequireDefault(_userTypes);

	var _product = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../mongo/product\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _product2 = _interopRequireDefault(_product);

	var _user = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../mongo/user\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _user2 = _interopRequireDefault(_user);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var query = new _graphql.GraphQLObjectType({
	  name: 'RootQueryType',
	  description: 'The primary query object type.',
	  fields: {
	    popularProducts: {
	      type: _productTypes2.default.rootType,
	      args: {
	        qty: {
	          type: _graphql.GraphQLInt,
	          description: 'The quantity of popular products to return.'
	        }
	      },
	      resolve: function resolve(_, args) {
	        console.log('2) popularProducts');
	        _bluebird2.default.fromCallback(function (cb) {
	          return _product2.default.getPopularProducts(args, cb);
	        });
	      }
	    }
	  }
	});

	var mutation = new _graphql.GraphQLObjectType({
	  name: 'RootMutationType',
	  fields: {
	    createUser: {
	      type: _userTypes2.default.rootType,
	      description: 'Create new user.',
	      args: _userTypes2.default.mutation.createUser.args,
	      resolve: function resolve(_, args) {
	        return _bluebird2.default.fromCallback(function (cb) {
	          return _user2.default.createUser(args, cb);
	        });
	      }
	    }
	  }
	});

	exports.default = new _graphql.GraphQLSchema({
	  query: query,
	  mutation: mutation
	});

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	module.exports = require("bluebird");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _graphql = __webpack_require__(2);

	var ProductTypes = {
	  rootType: new _graphql.GraphQLObjectType({
	    name: 'Product',
	    description: 'A store product.',
	    fields: {
	      title: {
	        type: _graphql.GraphQLString,
	        description: 'Name of the product.'
	      },
	      flavor: {
	        type: _graphql.GraphQLString,
	        description: 'The flavor for the product (if applicable).'
	      },
	      price: {
	        type: _graphql.GraphQLString,
	        description: 'The price of the product.'
	      },
	      routeTag: {
	        type: _graphql.GraphQLString,
	        description: 'The name of the unique route for the product'
	      },
	      images: {
	        type: new _graphql.GraphQLList(new _graphql.GraphQLObjectType({
	          name: 'ProductImageType',
	          fields: function fields() {
	            return {
	              purpose: { type: _graphql.GraphQLString },
	              url: { type: _graphql.GraphQLString }
	            };
	          }
	        })),
	        description: 'Product images.'
	      }
	    }
	  })
	};
	exports.default = ProductTypes;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _graphql = __webpack_require__(2);

	var UserTypes = {
	  rootType: new _graphql.GraphQLObjectType({
	    name: 'RootUserType',
	    description: 'A User.',
	    fields: function fields() {
	      return {
	        name: {
	          type: new _graphql.GraphQLObjectType({
	            name: 'UserNameObject',
	            description: 'Users name object.',
	            fields: {
	              first: { type: _graphql.GraphQLString },
	              last: { type: _graphql.GraphQLString },
	              display: { type: _graphql.GraphQLString }
	            }
	          })
	        },
	        authentication: {
	          type: new _graphql.GraphQLObjectType({
	            name: 'UserAuthenticationObject',
	            description: 'Authentication information for user.',
	            fields: function fields() {
	              return {
	                lastLogin: { type: _graphql.GraphQLString },
	                signedUp: { type: _graphql.GraphQLString },
	                registered: { type: _graphql.GraphQLString },
	                password: { type: _graphql.GraphQLString },
	                avatar: { type: _graphql.GraphQLString }
	              };
	            }
	          })
	        },
	        contactInfo: {
	          type: new _graphql.GraphQLObjectType({
	            name: 'UserContanctInfoObject',
	            description: 'Geolocation information for user.',
	            fields: function fields() {
	              return {
	                email: { type: _graphql.GraphQLString },
	                phone: { type: _graphql.GraphQLString },
	                location: {
	                  type: new _graphql.GraphQLObjectType({
	                    name: 'UserGeolocationObject',
	                    fields: {
	                      ipAddress: { type: _graphql.GraphQLString },
	                      lat: { type: _graphql.GraphQLString },
	                      long: { type: _graphql.GraphQLString },
	                      country: { type: _graphql.GraphQLString }
	                    }
	                  })
	                }
	              };
	            }
	          })
	        },
	        permissions: {
	          type: new _graphql.GraphQLObjectType({
	            name: 'UserPermissionsObject',
	            description: 'Permissions granted for user.',
	            fields: function fields() {
	              return {
	                role: { type: _graphql.GraphQLString }
	              };
	            }
	          })
	        },
	        userStory: {
	          type: new _graphql.GraphQLObjectType({
	            name: 'UserStoryObject',
	            description: 'Bio information for user.',
	            fields: function fields() {
	              return {
	                age: { type: _graphql.GraphQLInt },
	                birthday: { type: _graphql.GraphQLString },
	                bio: { type: _graphql.GraphQLString }
	              };
	            }
	          })
	        }
	      };
	    }
	  }),
	  mutation: {
	    createUser: {
	      args: {
	        name: {
	          description: 'Object: Users name.',
	          type: new _graphql.GraphQLNonNull(new _graphql.GraphQLInputObjectType({
	            name: 'UserInputNameObject',
	            fields: function fields() {
	              return {
	                first: { type: _graphql.GraphQLString },
	                last: { type: _graphql.GraphQLString },
	                display: { type: _graphql.GraphQLString }
	              };
	            }
	          }))
	        },
	        authentication: {
	          description: 'Object: Auth info for user.',
	          type: new _graphql.GraphQLNonNull(new _graphql.GraphQLInputObjectType({
	            name: 'UserInputAuthenticationObject',
	            fields: function fields() {
	              return {
	                lastLogin: { type: _graphql.GraphQLString },
	                signedUp: { type: _graphql.GraphQLString },
	                registered: { type: _graphql.GraphQLString },
	                password: { type: _graphql.GraphQLString },
	                avatar: { type: _graphql.GraphQLString }
	              };
	            }
	          }))
	        },
	        contactInfo: {
	          description: 'Object: Contanct info for user.',
	          type: new _graphql.GraphQLNonNull(new _graphql.GraphQLInputObjectType({
	            name: 'UserInputContactInfoObject',
	            fields: function fields() {
	              return {
	                email: { type: _graphql.GraphQLString },
	                phone: { type: _graphql.GraphQLString },
	                location: {
	                  type: new _graphql.GraphQLNonNull(new _graphql.GraphQLInputObjectType({
	                    name: 'UserInputGeolocationObject',
	                    description: 'Object: Geolocation information for user.',
	                    fields: function fields() {
	                      return {
	                        ipAddress: { type: _graphql.GraphQLString },
	                        lat: { type: _graphql.GraphQLString },
	                        long: { type: _graphql.GraphQLString },
	                        country: { type: _graphql.GraphQLString }
	                      };
	                    }
	                  }))
	                }
	              };
	            }
	          }))
	        },
	        permissions: {
	          description: 'Object: Permissions granted for user.',
	          type: new _graphql.GraphQLNonNull(new _graphql.GraphQLInputObjectType({
	            name: 'UserInputPermissionsObject',
	            fields: function fields() {
	              return {
	                role: { type: _graphql.GraphQLString }
	              };
	            }
	          }))
	        },
	        userStory: {
	          description: 'Object: Bio information for user.',
	          type: new _graphql.GraphQLNonNull(new _graphql.GraphQLInputObjectType({
	            name: 'UserInputStoryObject',
	            fields: function fields() {
	              return {
	                age: { type: _graphql.GraphQLInt },
	                birthday: { type: _graphql.GraphQLString },
	                bio: { type: _graphql.GraphQLString }
	              };
	            }
	          }))
	        }
	      }
	    }
	  }
	};
	exports.default = UserTypes;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.closeDB = undefined;

	var _mongoose = __webpack_require__(8);

	var _mongoose2 = _interopRequireDefault(_mongoose);

	var _bluebird = __webpack_require__(4);

	var _bluebird2 = _interopRequireDefault(_bluebird);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(9).load({ silent: true });

	_mongoose2.default.Promise = _bluebird2.default;
	var MONGO_DB = process.env.AWS_MONGO_URI_DEV;
	var options = {
	  server: {
	    socketOptions: {
	      keepAlive: 30000,
	      connectTimeoutMS: 30000
	    }
	  }
	};
	var db = _mongoose2.default.createConnection(MONGO_DB, options);
	var closeDB = exports.closeDB = function closeDB(cb) {
	  return db.close(function () {
	    return cb();
	  });
	};
	exports.default = db;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	module.exports = require("mongoose");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	module.exports = require("dotenv");

/***/ })
/******/ ])));