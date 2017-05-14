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

	var _connection = __webpack_require__(9);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/* eslint-disable global-require, import/first, no-unused-expressions */
	!global._babelPolyfill && __webpack_require__(16);

	module.exports.graphql = function (event, context, cb) {
	  (0, _runGraphQL2.default)(event, function (error, response) {
	    return (0, _connection.closeDB)(function () {
	      if (error) {
	        console.log('\nERROR:', error);
	        context.error && context.error(error);
	        cb(null, error);
	      }
	      console.log('\nRESULT: ', response);
	      context.succeed && context.succeed(response);
	      cb(null, response);
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

	  (0, _graphql.graphql)(_schema2.default, query, null, {}, variables).then(function (result) {
	    return cb(null, result);
	  }).catch(function (error) {
	    return cb(error);
	  });
	};
	exports.default = runGraphQL;

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

	var _userTypes = __webpack_require__(13);

	var _userTypes2 = _interopRequireDefault(_userTypes);

	var _product = __webpack_require__(6);

	var _product2 = _interopRequireDefault(_product);

	var _user = __webpack_require__(14);

	var _user2 = _interopRequireDefault(_user);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var query = new _graphql.GraphQLObjectType({
	  name: 'RootQueryType',
	  description: 'The primary query object type.',
	  fields: function fields() {
	    return {
	      popularProducts: _productTypes2.default.queries.popularProducts
	    };
	  }
	});

	var mutation = new _graphql.GraphQLObjectType({
	  name: 'RootMutationType',
	  fields: {
	    // createUser: {
	    //   type: UserTypes.rootType,
	    //   description: 'Create new user.',
	    //   args: UserTypes.mutations.createUser.args,
	    //   resolve: (_, args) => Promise.fromCallback(cb => UserModel.createUser(args, cb)),
	    // },
	    createProduct: {
	      type: _productTypes2.default.rootType,
	      description: 'Create new Product',
	      args: _productTypes2.default.mutations.createProduct.args,
	      resolve: function resolve(_, args) {
	        return _bluebird2.default.fromCallback(function (cb) {
	          return _product2.default.createProduct(args, cb);
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

	var _product = __webpack_require__(6);

	var _product2 = _interopRequireDefault(_product);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var rootType = new _graphql.GraphQLObjectType({
	  name: 'Product',
	  description: 'A store product.',
	  fields: {
	    _id: {
	      description: 'The ID of the Product.',
	      type: new _graphql.GraphQLNonNull(_graphql.GraphQLID)
	    },
	    product: {
	      description: 'Object: All the important details for the product.',
	      type: new _graphql.GraphQLObjectType({
	        name: 'ProductObject',
	        fields: function fields() {
	          return {
	            mainTitle: {
	              description: 'The title for the Single Product page - e.g. You may not want it to be the name of the product but a "Category" of products.',
	              type: _graphql.GraphQLString
	            },
	            title: {
	              description: 'The title of the product.',
	              type: _graphql.GraphQLString
	            },
	            flavor: {
	              description: 'The flavor of the product.',
	              type: _graphql.GraphQLString
	            },
	            price: {
	              description: 'The price of the product. - WARNING: Do not add $ signs, Do not add (.) decimals.',
	              type: _graphql.GraphQLString
	            },
	            sku: {
	              description: 'The unique code for the product.',
	              type: _graphql.GraphQLString
	            },
	            sizes: {
	              description: 'The available sizes for the product.',
	              type: new _graphql.GraphQLList(new _graphql.GraphQLEnumType({
	                name: 'ProductAvailableSizes',
	                /* eslint-disable quote-props */
	                values: {
	                  small: {
	                    value: 30,
	                    description: '30 milliter bottle.'
	                  },
	                  medium: {
	                    value: 60,
	                    description: '60 milliliter bottle.'
	                  },
	                  large: {
	                    value: 120,
	                    description: '120 milliliter bottle'
	                  }
	                }
	              }))
	            },
	            nicotine_strengths: {
	              description: 'The nicotine strength for the Product.',
	              type: new _graphql.GraphQLList(new _graphql.GraphQLEnumType({
	                name: 'ProductNicotineStrengthsEnum',
	                values: {
	                  two: {
	                    value: 2,
	                    description: '2mg of Nicotine.'
	                  },
	                  four: {
	                    value: 4,
	                    description: '4mg of Nicotine.'
	                  },
	                  six: {
	                    value: 6,
	                    description: '6mg of Nicotine'
	                  },
	                  eight: {
	                    value: 8,
	                    description: '8mg of Nicotine.'
	                  },
	                  ten: {
	                    value: 10,
	                    description: '8mg of Nicotine.'
	                  },
	                  twelve: {
	                    value: 12,
	                    description: '8mg of Nicotine.'
	                  },
	                  fourteen: {
	                    value: 14,
	                    description: '8mg of Nicotine.'
	                  },
	                  sixteen: {
	                    value: 16,
	                    description: '8mg of Nicotine.'
	                  },
	                  eighteen: {
	                    value: 18,
	                    description: '8mg of Nicotine.'
	                  }
	                }
	              }))
	            },
	            images: {
	              description: 'Images array for the new Product.',
	              type: new _graphql.GraphQLList(new _graphql.GraphQLObjectType({
	                name: 'ProductImageObject',
	                fields: function fields() {
	                  return {
	                    purpose: { type: _graphql.GraphQLString },
	                    url: { type: _graphql.GraphQLString }
	                  };
	                }
	              }))
	            },
	            routeTag: {
	              description: 'The name of the route for the product.',
	              type: _graphql.GraphQLString
	            },
	            vendor: {
	              description: 'The name of manufacturer of the new product.',
	              type: _graphql.GraphQLString
	            },
	            dates: {
	              description: 'Important clerical dates regarding the product.',
	              type: new _graphql.GraphQLObjectType({
	                name: 'ProductDateObject',
	                fields: function fields() {
	                  return {
	                    added_to_store: {
	                      description: 'The Date the product was first added to the store.',
	                      type: _graphql.GraphQLString
	                    },
	                    removed_from_store: {
	                      description: 'The Date the product was removed from the store.',
	                      type: _graphql.GraphQLString
	                    }
	                  };
	                }
	              })
	            },
	            quantities: {
	              description: 'Availability stats for this product.',
	              type: new _graphql.GraphQLObjectType({
	                name: 'ProductQuantityInfo',
	                fields: function fields() {
	                  return {
	                    available: {
	                      description: 'The available quanitty for this product.',
	                      type: _graphql.GraphQLInt
	                    },
	                    in_cart: {
	                      description: 'The quantity for products currently in customers\' carts.',
	                      type: _graphql.GraphQLInt
	                    }
	                  };
	                }
	              })
	            }
	          };
	        }
	      })
	    }
	  }
	});
	var queries = {
	  popularProducts: {
	    type: new _graphql.GraphQLList(rootType),
	    args: {
	      qty: {
	        type: _graphql.GraphQLInt,
	        description: 'The quantity of popular products to return.'
	      }
	    },
	    resolve: function resolve(_, args) {
	      return _product2.default.getPopularProducts(args);
	    }
	  }
	};
	var mutations = {
	  createProduct: {
	    args: {
	      product: {
	        description: 'Object: All the important details for the product.',
	        type: new _graphql.GraphQLNonNull(new _graphql.GraphQLInputObjectType({
	          name: 'NewProductObject',
	          fields: function fields() {
	            return {
	              mainTitle: {
	                description: 'The main title for the Single Product page for the new product - e.g. The "Cateogry" of the new product.',
	                type: new _graphql.GraphQLNonNull(_graphql.GraphQLString)
	              },
	              title: {
	                description: 'The title of the new product.',
	                type: new _graphql.GraphQLNonNull(_graphql.GraphQLString)
	              },
	              flavor: {
	                description: 'The flavor of the new product.',
	                type: new _graphql.GraphQLNonNull(_graphql.GraphQLString)
	              },
	              price: {
	                description: 'The price of the new product. - WARNING: Do not add $ signs, Do not add (.) decimals.',
	                type: new _graphql.GraphQLNonNull(_graphql.GraphQLString)
	              },
	              sku: {
	                description: 'The unique code for the new product.',
	                type: new _graphql.GraphQLNonNull(_graphql.GraphQLString)
	              },
	              sizes: {
	                description: 'The available sizes for the new product.',
	                type: new _graphql.GraphQLNonNull(new _graphql.GraphQLList(new _graphql.GraphQLEnumType({
	                  name: 'NewProductSize',
	                  /* eslint-disable quote-props */
	                  values: {
	                    small: {
	                      value: 30,
	                      description: '30 milliliter bottle.'
	                    },
	                    medium: {
	                      value: 60,
	                      description: '60 milliliter bottle.'
	                    },
	                    large: {
	                      value: 120,
	                      description: '120 milliliter bottle'
	                    }
	                  }
	                })))
	              },
	              nicotine_strengths: {
	                description: 'The nicotine strength for the new product.',
	                type: new _graphql.GraphQLNonNull(new _graphql.GraphQLList(new _graphql.GraphQLEnumType({
	                  name: 'NewProductNicotineStrengthsEnum',
	                  values: {
	                    two: {
	                      value: 2,
	                      description: '2mg of Nicotine.'
	                    },
	                    four: {
	                      value: 4,
	                      description: '4mg of Nicotine.'
	                    },
	                    six: {
	                      value: 6,
	                      description: '6mg of Nicotine'
	                    },
	                    eight: {
	                      value: 8,
	                      description: '8mg of Nicotine.'
	                    },
	                    ten: {
	                      value: 10,
	                      description: '8mg of Nicotine.'
	                    },
	                    twelve: {
	                      value: 12,
	                      description: '8mg of Nicotine.'
	                    },
	                    fourteen: {
	                      value: 14,
	                      description: '8mg of Nicotine.'
	                    },
	                    sixteen: {
	                      value: 16,
	                      description: '8mg of Nicotine.'
	                    },
	                    eighteen: {
	                      value: 18,
	                      description: '8mg of Nicotine.'
	                    }
	                  }
	                })))
	              },
	              images: {
	                description: 'Images array for the new Product.',
	                type: new _graphql.GraphQLNonNull(new _graphql.GraphQLList(new _graphql.GraphQLInputObjectType({
	                  name: 'NewProductImageObject',
	                  fields: function fields() {
	                    return {
	                      purpose: {
	                        description: 'What this specific image will be used for - e.g. "Juice Card"',
	                        type: new _graphql.GraphQLNonNull(_graphql.GraphQLString)
	                      },
	                      url: {
	                        description: 'The S3 url for this image.',
	                        type: new _graphql.GraphQLNonNull(_graphql.GraphQLString)
	                      }
	                    };
	                  }
	                })))
	              },
	              routeTag: {
	                description: 'The name of the route for the new product.',
	                type: new _graphql.GraphQLNonNull(_graphql.GraphQLString)
	              },
	              vendor: {
	                description: 'The name of manufacturer of the new product.',
	                type: _graphql.GraphQLString
	              },
	              dates: {
	                description: 'Important clerical dates regarding the new product.',
	                type: new _graphql.GraphQLNonNull(new _graphql.GraphQLInputObjectType({
	                  name: 'NewProductDateObject',
	                  fields: function fields() {
	                    return {
	                      added_to_store: {
	                        description: 'The Date the product was first added to the store.',
	                        type: new _graphql.GraphQLNonNull(_graphql.GraphQLString)
	                      },
	                      removed_from_store: {
	                        description: 'The Date the product was removed from the store.',
	                        type: _graphql.GraphQLString
	                      }
	                    };
	                  }
	                }))
	              },
	              quantities: {
	                description: 'Availability stats for this new product.',
	                type: new _graphql.GraphQLInputObjectType({
	                  name: 'NewProductQuantityInfo',
	                  fields: function fields() {
	                    return {
	                      available: {
	                        description: 'The available quanitty for this product.',
	                        type: _graphql.GraphQLInt
	                      },
	                      in_cart: {
	                        description: 'The quantity for products currently in customers\' carts.',
	                        type: _graphql.GraphQLInt
	                      }
	                    };
	                  }
	                })
	              }
	            };
	          }
	        }))
	      }
	    }
	  }
	};

	exports.default = {
	  rootType: rootType,
	  queries: queries,
	  mutations: mutations
	};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _stringify = __webpack_require__(7);

	var _stringify2 = _interopRequireDefault(_stringify);

	var _promise = __webpack_require__(8);

	var _promise2 = _interopRequireDefault(_promise);

	var _bluebird = __webpack_require__(4);

	var _connection = __webpack_require__(9);

	var _connection2 = _interopRequireDefault(_connection);

	var _productSchema = __webpack_require__(12);

	var _productSchema2 = _interopRequireDefault(_productSchema);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_productSchema2.default.statics.createProduct = function (productObj) {
	  return new _promise2.default(function (resolve, reject) {
	    _bluebird.Promise.fromCallback(function (cb) {
	      return Product.create(productObj, cb);
	    }).then(resolve).catch(function (error) {
	      return reject({
	        problem: 'Could not create a new product with this product object: ' + (0, _stringify2.default)(productObj, null, 2) + '\n    Mongoose Error = ' + error
	      });
	    });
	  });
	}; /* eslint-disable no-use-before-define */


	_productSchema2.default.statics.getPopularProducts = function (_ref) {
	  var qty = _ref.qty;
	  return new _promise2.default(function (resolve, reject) {
	    Product.find({}).then(function (dbProducts) {
	      return resolve(dbProducts.slice(0, qty));
	    }).catch(function (error) {
	      return reject({
	        problem: 'Could not fetch the ' + qty + ' products you requested.\n    Mongo Error = ' + error
	      });
	    });
	  });
	};
	var Product = _connection2.default.model('Product', _productSchema2.default);
	exports.default = Product;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	module.exports = require("babel-runtime/core-js/json/stringify");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	module.exports = require("babel-runtime/core-js/promise");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.closeDB = undefined;

	var _promise = __webpack_require__(8);

	var _promise2 = _interopRequireDefault(_promise);

	var _mongoose = __webpack_require__(10);

	var _mongoose2 = _interopRequireDefault(_mongoose);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_mongoose2.default.Promise = _promise2.default;
	var dotenv = __webpack_require__(11).config({ silent: true }); //eslint-disable-line
	var MONGO_DB = process.env.AWS_MONGO_URI_DEV;
	console.log('\nMONGO_DB: ', MONGO_DB);

	var options = {
	  server: {
	    socketOptions: {
	      keepAlive: 30000,
	      connectTimeoutMS: 30000
	    }
	  }
	};
	var db = _mongoose2.default.createConnection(MONGO_DB, options, function (err) {
	  return console.log(err || 'Mongo Connected @ ' + MONGO_DB);
	});
	var closeDB = exports.closeDB = function closeDB(cb) {
	  return db.close(function () {
	    return cb();
	  });
	};
	exports.default = db;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	module.exports = require("mongoose");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	module.exports = require("dotenv");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var Schema = __webpack_require__(10).Schema;

	var ObjectId = Schema.Types.ObjectId;
	var productSchema = new Schema({
	  product: {
	    mainTitle: {
	      type: String,
	      required: true
	    },
	    title: {
	      type: String,
	      required: true
	    },
	    flavor: {
	      type: String,
	      required: true
	    },
	    price: {
	      type: String,
	      required: true,
	      default: 30
	    },
	    sku: {
	      type: String,
	      required: true
	    },
	    sizes: [{
	      type: Number,
	      enum: [30, 60, 120],
	      required: true
	    }],
	    nicotine_strengths: [{
	      type: Number,
	      enum: [2, 4, 6, 8, 12, 14, 16, 18],
	      required: true
	    }],
	    images: [{
	      purpose: {
	        type: String,
	        required: true
	      },
	      url: {
	        type: String,
	        required: true
	      }
	    }],
	    routeTag: {
	      type: String,
	      required: true
	    },
	    vendor: { type: String },
	    dates: {
	      added_to_store: {
	        type: Date,
	        default: Date.now,
	        required: true
	      },
	      removed_from_store: {
	        type: Date,
	        default: Date.now
	      }
	    },
	    quantities: {
	      available: { type: Number },
	      in_cart: { type: Number }
	    }
	  },
	  reviews: [{
	    reviews_id: { type: ObjectId, ref: 'Reviews' },
	    user_id: { type: ObjectId, ref: 'User' }
	  }],
	  distribution: {
	    restock_threshold: {
	      type: Number,
	      default: 500
	    },
	    restock_amount: {
	      type: Number,
	      default: 500
	    },
	    last_replenishment: [{
	      date: {
	        type: Date
	      },
	      amount: {
	        type: Number,
	        default: 500
	      }
	    }],
	    wholesale_price: { type: Number }
	  },
	  statistics: {
	    adds_to_cart: { type: Number },
	    completed_checkouts: { type: Number },
	    transactions: [{
	      transaction_id: { type: ObjectId, ref: 'Transaction' },
	      user_id: { type: ObjectId, ref: 'User' }
	    }]
	  }
	});
	exports.default = productSchema;

/***/ }),
/* 13 */
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
	        _id: {
	          description: 'The ID of the User.',
	          type: new _graphql.GraphQLNonNull(_graphql.GraphQLID)
	        },
	        name: {
	          description: 'Object: The First & Last name for the User.',
	          type: new _graphql.GraphQLObjectType({
	            name: 'UserNameObject',
	            fields: function fields() {
	              return {
	                first: {
	                  description: 'The first name of the user.',
	                  type: _graphql.GraphQLString
	                },
	                last: {
	                  description: 'The last name of the user.',
	                  type: _graphql.GraphQLString
	                },
	                display: {
	                  description: 'The display name of the user.',
	                  type: _graphql.GraphQLString
	                }
	              };
	            }
	          })
	        },
	        authentication: {
	          description: 'Authentication information for user.',
	          type: new _graphql.GraphQLObjectType({
	            name: 'UserAuthenticationObject',
	            fields: function fields() {
	              return {
	                lastLogin: {
	                  description: 'The last time this user logged in.',
	                  type: _graphql.GraphQLString
	                },
	                signedUp: {
	                  description: 'The date this user first signed up for newsletters - Typically coincides with users first purchase.',
	                  type: _graphql.GraphQLString
	                },
	                registered: {
	                  description: 'The date this user first became a member.',
	                  type: _graphql.GraphQLString
	                },
	                password: {
	                  description: 'This user\'s password if using email signup.',
	                  type: _graphql.GraphQLString
	                },
	                avatar: {
	                  description: 'This user\'s profile avatar.',
	                  type: _graphql.GraphQLString
	                }
	              };
	            }
	          })
	        },
	        contactInfo: {
	          description: 'Contact info & GeoLocation info for user.',
	          type: new _graphql.GraphQLObjectType({
	            name: 'UserContanctInfoObject',
	            fields: function fields() {
	              return {
	                email: {
	                  description: 'The email for this user.',
	                  type: _graphql.GraphQLString
	                },
	                phone: {
	                  description: 'The phone number for this user.',
	                  type: _graphql.GraphQLString
	                },
	                location: {
	                  description: 'IP address, lat, long, & country code. for this user from their last login.',
	                  type: new _graphql.GraphQLObjectType({
	                    name: 'UserGeolocationObject',
	                    fields: function fields() {
	                      return {
	                        ipAddress: {
	                          description: 'IP address this user last used.',
	                          type: _graphql.GraphQLString
	                        },
	                        lat: {
	                          description: 'Latitude coord. this user last logged in from.',
	                          type: _graphql.GraphQLString
	                        },
	                        long: {
	                          description: 'Longitude coord. this user last logged in from.',
	                          type: _graphql.GraphQLString
	                        },
	                        country: {
	                          description: 'Country code this user last logged in from.',
	                          type: _graphql.GraphQLString
	                        }
	                      };
	                    }
	                  })
	                }
	              };
	            }
	          })
	        },
	        permissions: {
	          description: 'Authorization permissions granted for user.',
	          type: new _graphql.GraphQLObjectType({
	            name: 'UserPermissionsObject',
	            fields: function fields() {
	              return {
	                role: {
	                  description: 'The authorization role for this user.',
	                  type: _graphql.GraphQLString
	                }
	              };
	            }
	          })
	        },
	        userStory: {
	          description: 'Object: Bio information for new user.',
	          type: new _graphql.GraphQLObjectType({
	            name: 'UserInputStoryObject',
	            fields: function fields() {
	              return {
	                age: {
	                  description: 'The age of this new user.',
	                  type: _graphql.GraphQLInt
	                },
	                birthday: {
	                  description: 'The birthday of this new user.',
	                  type: _graphql.GraphQLString
	                },
	                bio: {
	                  description: 'The biography of this new user.',
	                  type: _graphql.GraphQLString
	                }
	              };
	            }
	          })
	        }
	      };
	    }
	  }),
	  mutations: {
	    createUser: {
	      args: {
	        name: {
	          description: 'Object: The First & Last name for the new user.',
	          type: new _graphql.GraphQLNonNull(new _graphql.GraphQLInputObjectType({
	            name: 'NewUserNameObject',
	            fields: function fields() {
	              return {
	                first: {
	                  description: 'The first name of the new user.',
	                  type: _graphql.GraphQLString
	                },
	                last: {
	                  description: 'The last name of the new user.',
	                  type: _graphql.GraphQLString
	                },
	                display: {
	                  description: 'The display name of the new user.',
	                  type: _graphql.GraphQLString
	                }
	              };
	            }
	          }))
	        },
	        authentication: {
	          description: 'Authentication information for new user.',
	          type: new _graphql.GraphQLNonNull(new _graphql.GraphQLInputObjectType({
	            name: 'NewUserAuthenticationObject',
	            fields: function fields() {
	              return {
	                lastLogin: {
	                  description: 'The last time this new user logged in.',
	                  type: _graphql.GraphQLString
	                },
	                signedUp: {
	                  description: 'The date this new user first signed up for newsletters - Typically coincides with users first purchase.',
	                  type: _graphql.GraphQLString
	                },
	                registered: {
	                  description: 'The date this new user first became a member.',
	                  type: new _graphql.GraphQLNonNull(_graphql.GraphQLString)
	                },
	                password: {
	                  description: 'This new user\'s password if using email signup.',
	                  type: _graphql.GraphQLString
	                },
	                avatar: {
	                  description: 'This new user\'s profile avatar.',
	                  type: _graphql.GraphQLString
	                }
	              };
	            }
	          }))
	        },
	        contactInfo: {
	          description: 'Contact info & GeoLocation info for new user.',
	          type: new _graphql.GraphQLNonNull(new _graphql.GraphQLInputObjectType({
	            name: 'NewUserContanctInfoObject',
	            fields: function fields() {
	              return {
	                email: {
	                  description: 'The email for this new user.',
	                  type: _graphql.GraphQLString
	                },
	                phone: {
	                  description: 'The phone number for this new user.',
	                  type: _graphql.GraphQLString
	                },
	                location: {
	                  description: 'IP address, lat, long, & country code. for this new user from their current login.',
	                  type: new _graphql.GraphQLNonNull(new _graphql.GraphQLInputObjectType({
	                    name: 'NewUserGeolocationObject',
	                    fields: function fields() {
	                      return {
	                        ipAddress: {
	                          description: 'IP address for this new user.',
	                          type: _graphql.GraphQLString
	                        },
	                        lat: {
	                          description: 'Latitude coord. for this new user.',
	                          type: _graphql.GraphQLString
	                        },
	                        long: {
	                          description: 'Longitude coord. for this new user.',
	                          type: _graphql.GraphQLString
	                        },
	                        country: {
	                          description: 'Country code for this new user.',
	                          type: _graphql.GraphQLString
	                        }
	                      };
	                    }
	                  }))
	                }
	              };
	            }
	          }))
	        },
	        permissions: {
	          description: 'Authorization permissions for this new user.',
	          type: new _graphql.GraphQLNonNull(new _graphql.GraphQLInputObjectType({
	            name: 'NewUserInputPermissionsObject',
	            fields: function fields() {
	              return {
	                role: {
	                  description: 'Authorization role for this new user.',
	                  type: _graphql.GraphQLString
	                }
	              };
	            }
	          }))
	        },
	        userStory: {
	          description: 'Object: Bio information for new user.',
	          type: new _graphql.GraphQLNonNull(new _graphql.GraphQLInputObjectType({
	            name: 'NewUserInputStoryObject',
	            fields: function fields() {
	              return {
	                age: {
	                  description: 'The age of this new user.',
	                  type: _graphql.GraphQLInt
	                },
	                birthday: {
	                  description: 'The birthday of this new user.',
	                  type: _graphql.GraphQLString
	                },
	                bio: {
	                  description: 'The biography of this new user.',
	                  type: _graphql.GraphQLString
	                }
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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _promise = __webpack_require__(8);

	var _promise2 = _interopRequireDefault(_promise);

	var _bluebird = __webpack_require__(4);

	var _connection = __webpack_require__(9);

	var _connection2 = _interopRequireDefault(_connection);

	var _userSchema = __webpack_require__(15);

	var _userSchema2 = _interopRequireDefault(_userSchema);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_userSchema2.default.statics.createUser = function (userObj) {
	  return new _promise2.default(function (resolve, reject) {
	    _bluebird.Promise.fromCallback(function (cb) {
	      return User.create(userObj, cb);
	    }).then(resolve).catch(function (error) {
	      return reject({ problem: 'Could not create user with this user object: ' + userObj + '\n  Mongo Error = ' + error });
	    });
	  });
	}; /* eslint-disable no-use-before-define */

	var User = _connection2.default.model('User', _userSchema2.default);
	exports.default = User;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var Schema = __webpack_require__(10).Schema;

	var ObjectId = Schema.Types.ObjectId;
	var userSchema = new Schema({
	  name: {
	    first: { type: String },
	    last: { type: String },
	    display: { type: String }
	  },
	  authentication: {
	    lastLogin: { type: Date },
	    signedUp: { type: Date },
	    registered: { type: Date },
	    password: { type: String },
	    avatar: {
	      type: String,
	      default: 'https://s3-ap-northeast-1.amazonaws.com/nj2jp-react/default-user.png'
	    }
	  },
	  contactInfo: {
	    email: { type: String },
	    phone: { type: Number },
	    location: {
	      ipAddress: { type: String },
	      lat: { type: String },
	      long: { type: String },
	      country: { type: String }
	    }
	  },
	  transactions: {
	    orders: [{
	      type: { type: ObjectId, ref: 'Transaction' }
	    }]
	  },
	  permissions: {
	    role: {
	      type: String,
	      enum: ['user', 'admin', 'devAdmin', 'wholeseller', 'distributor'],
	      required: true
	    }
	  },
	  userStory: {
	    age: { type: Number },
	    birthday: { type: Date },
	    bio: { type: String }
	  },
	  socialProfileBlob: {}
	});
	exports.default = userSchema;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

	module.exports = require("babel-polyfill");

/***/ })
/******/ ])));