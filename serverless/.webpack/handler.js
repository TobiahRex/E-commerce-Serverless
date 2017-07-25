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

	var _extends2 = __webpack_require__(1);

	var _extends3 = _interopRequireDefault(_extends2);

	var _runGraphQL = __webpack_require__(2);

	var _runGraphQL2 = _interopRequireDefault(_runGraphQL);

	var _connection = __webpack_require__(9);

	var _connection2 = _interopRequireDefault(_connection);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/* eslint-disable global-require, import/first, no-unused-expressions, no-console */
	if (!global._babelPolyfill) __webpack_require__(20);

	module.exports.graphql = function (event, context) {
	  console.log('\nEVENT: ', event);

	  (0, _connection2.default)().then(function (dbResults) {
	    return (0, _runGraphQL2.default)((0, _extends3.default)({ event: event }, dbResults));
	  }).then(function (GraphQLResponse) {
	    console.log('\n//Final Lambda SUCCESS Response: ', GraphQLResponse);
	    context.succeed && context.succeed(GraphQLResponse);
	  }).catch(function (error) {
	    console.log('\n//Final Lambda ERROR: ', error);
	    context.error && context.error(error);
	  });
	};

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	module.exports = require("babel-runtime/helpers/extends");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _stringify = __webpack_require__(3);

	var _stringify2 = _interopRequireDefault(_stringify);

	var _promise = __webpack_require__(4);

	var _promise2 = _interopRequireDefault(_promise);

	var _graphql = __webpack_require__(5);

	var _schema = __webpack_require__(6);

	var _schema2 = _interopRequireDefault(_schema);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// import { closeDB } from '../mongo/connection';

	/* eslint-disable no-console */
	var runGraphQL = function runGraphQL(_ref) {
	  var event = _ref.event,
	      dbModels = _ref.dbModels;
	  return new _promise2.default(function (resolve, reject) {
	    var _event$body = event.body,
	        variables = _event$body.variables,
	        query = _event$body.query;


	    (0, _graphql.graphql)(_schema2.default, query, null, dbModels, variables).then(function (dbResponse) {
	      console.log('\n    (runGraphQL.js @ graphql.catch)\n    Results = ' + (0, _stringify2.default)(dbResponse, null, 2) + '\n    ');
	      // return closeDB(db, dbResponse);
	      resolve(dbResponse);
	    }).catch(function (error) {
	      console.log('\n    (runGraphQL.js @ graphql.catch)\n    Error = ' + error + '\n    ');
	      reject(error);
	    });
	  });
	};
	exports.default = runGraphQL;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = require("babel-runtime/core-js/json/stringify");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	module.exports = require("babel-runtime/core-js/promise");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	module.exports = require("graphql");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _graphql = __webpack_require__(5);

	var _productTypes = __webpack_require__(7);

	var _productTypes2 = _interopRequireDefault(_productTypes);

	var _userTypes = __webpack_require__(8);

	var _userTypes2 = _interopRequireDefault(_userTypes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var query = new _graphql.GraphQLObjectType({
	  name: 'RootQueryType',
	  description: 'The primary query object.',
	  fields: function fields() {
	    return {
	      FetchUserProfile: _userTypes2.default.queries.FetchUserProfile,
	      FindProductById: _productTypes2.default.queries.FindProductById,
	      FindProductsByFlavor: _productTypes2.default.queries.FindProductsByFlavor,
	      PopularProducts: _productTypes2.default.queries.PopularProducts,
	      FetchMultipleProducts: _productTypes2.default.queries.FetchMultipleProducts
	    };
	  }
	});

	var mutation = new _graphql.GraphQLObjectType({
	  name: 'RootMutationType',
	  description: 'The primary mutation object.',
	  fields: function fields() {
	    return {
	      CreateProduct: _productTypes2.default.mutations.CreateProduct,
	      LoginOrRegister: _userTypes2.default.mutations.LoginOrRegister,
	      AddToMemberCart: _userTypes2.default.mutations.AddToMemberCart,
	      EditToMemberCart: _userTypes2.default.mutations.EditToMemberCart,
	      DeleteFromMemberCart: _userTypes2.default.mutations.DeleteFromMemberCart,
	      FindProductAndUpdate: _productTypes2.default.mutations.FindProductAndUpdate,
	      FindProductByIdAndDelete: _productTypes2.default.mutations.FindProductByIdAndDelete
	    };
	  }
	});

	exports.default = new _graphql.GraphQLSchema({
	  query: query,
	  mutation: mutation
	});

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _graphql = __webpack_require__(5);

	var rootType = new _graphql.GraphQLObjectType({
	  name: 'Product',
	  description: 'A store product.',
	  fields: {
	    _id: {
	      description: 'The ID of the Product.',
	      type: new _graphql.GraphQLNonNull(_graphql.GraphQLID)
	    },
	    error: {
	      description: 'Any errors that occur during a backend operation will be flagged and provided a message within this object.',
	      type: new _graphql.GraphQLObjectType({
	        name: 'ProductError',
	        fields: function fields() {
	          return {
	            hard: {
	              description: 'Boolean flag for a hard failure. Operations should not continue until action by user has been taken.',
	              type: _graphql.GraphQLBoolean
	            },
	            soft: {
	              description: 'Boolean flag for a soft failure.  Operations should be allowed to continue.',
	              type: _graphql.GraphQLBoolean
	            },
	            message: {
	              description: 'Amplifying information about error.  Should be written for user readibility.',
	              type: _graphql.GraphQLString
	            }
	          };
	        }
	      })
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
	            size: {
	              description: 'The available sizes for the product.',
	              type: new _graphql.GraphQLEnumType({
	                name: 'ProductAvailableSizes',
	                /* eslint-disable quote-props */
	                values: {
	                  'small': {
	                    value: 30,
	                    description: '30 milliter bottle.'
	                  },
	                  'medium': {
	                    value: 60,
	                    description: '60 milliliter bottle.'
	                  },
	                  'large': {
	                    value: 120,
	                    description: '120 milliliter bottle'
	                  }
	                }
	              })
	            },
	            nicotineStrength: {
	              description: 'The nicotine strength for the new product.',
	              type: new _graphql.GraphQLEnumType({
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
	              })
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
	            slug: {
	              description: 'The name of the route for the product.',
	              type: _graphql.GraphQLString
	            },
	            vendor: {
	              description: 'The name of manufacturer of the new product.',
	              type: _graphql.GraphQLString
	            },
	            blurb: {
	              description: 'A description of the product.',
	              type: _graphql.GraphQLString
	            },
	            dates: {
	              description: 'Important clerical dates regarding the product.',
	              type: new _graphql.GraphQLObjectType({
	                name: 'ProductDateObject',
	                fields: function fields() {
	                  return {
	                    addedToStore: {
	                      description: 'The Date the product was first added to the store.',
	                      type: _graphql.GraphQLString
	                    },
	                    removedFromStore: {
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
	                    inCart: {
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
	    },
	    statistics: {
	      description: 'Statistics on purchases for this item.',
	      type: new _graphql.GraphQLObjectType({
	        name: 'ProductStatistics',
	        fields: function fields() {
	          return {
	            addsToCart: {
	              description: 'The amount of times someone has added this product to their cart.',
	              type: _graphql.GraphQLInt
	            },
	            completedCheckouts: {
	              description: 'The amount of times this item has been successfully purchased.',
	              type: _graphql.GraphQLInt
	            },
	            transactions: {
	              description: 'A list of transactions for this product.',
	              type: new _graphql.GraphQLList(new _graphql.GraphQLObjectType({
	                name: 'ProductTransaction',
	                fields: function fields() {
	                  return {
	                    transactionId: {
	                      description: 'The Mongo ID for transactions.',
	                      type: _graphql.GraphQLID
	                    },
	                    userId: {
	                      description: 'The mongo ID for users.',
	                      type: _graphql.GraphQLID
	                    }
	                  };
	                }
	              }))
	            }
	          };
	        }
	      })
	    }
	  }
	});
	var queryTypes = {
	  popularProductsType: new _graphql.GraphQLObjectType({
	    name: 'PopularProductType',
	    description: 'The return fields for querying popular products.',
	    fields: function fields() {
	      return {
	        _id: {
	          description: 'The unique identification for this popular product.  Default value is a unique product category.',
	          type: new _graphql.GraphQLNonNull(_graphql.GraphQLString)
	        },
	        docId: {
	          description: 'The Mongo ID for the underlying Product.',
	          type: new _graphql.GraphQLNonNull(_graphql.GraphQLString)
	        },
	        title: {
	          description: 'The main Title for this Product.',
	          type: new _graphql.GraphQLNonNull(_graphql.GraphQLString)
	        },
	        slug: {
	          description: 'The route tag (slug) for this product.',
	          type: new _graphql.GraphQLNonNull(_graphql.GraphQLString)
	        },
	        images: {
	          description: 'The images for Popular Products.',
	          type: new _graphql.GraphQLNonNull(new _graphql.GraphQLList(new _graphql.GraphQLObjectType({
	            name: 'PopularProductImages',
	            fields: function fields() {
	              return {
	                purpose: {
	                  description: 'The intended purpose for this image.',
	                  type: _graphql.GraphQLString
	                },
	                url: {
	                  description: 'The url for this image.',
	                  type: _graphql.GraphQLString
	                }
	              };
	            }
	          })))
	        },
	        quantities: {
	          description: 'The total number of products available for purchase.',
	          type: new _graphql.GraphQLNonNull(new _graphql.GraphQLObjectType({
	            name: 'PopularProductQuantities',
	            fields: function fields() {
	              return {
	                available: {
	                  description: 'The Total number of products available for purchase.',
	                  type: _graphql.GraphQLInt
	                },
	                inCart: {
	                  description: 'The total number of this product that are in the global product cart.',
	                  type: _graphql.GraphQLInt
	                }
	              };
	            }
	          }))
	        },
	        completedCheckouts: {
	          description: 'The number of times this product has been successfully purchased.',
	          type: _graphql.GraphQLInt
	        }
	      };
	    }
	  })
	};

	var queries = {
	  FetchMultipleProducts: {
	    type: new _graphql.GraphQLList(rootType),
	    args: {
	      ids: {
	        description: 'An array of Product Mongo Ids.',
	        type: new _graphql.GraphQLNonNull(new _graphql.GraphQLList(_graphql.GraphQLID))
	      }
	    },
	    resolve: function resolve(_, _ref, _ref2) {
	      var ids = _ref.ids;
	      var Product = _ref2.Product;
	      return Product.fetchMultiple(ids);
	    }
	  },
	  FindProductsByFlavor: {
	    type: new _graphql.GraphQLList(rootType),
	    args: {
	      flavor: {
	        description: 'The Mongo flavor of the products.',
	        type: new _graphql.GraphQLNonNull(_graphql.GraphQLString)
	      }
	    },
	    resolve: function resolve(_, _ref3, _ref4) {
	      var flavor = _ref3.flavor;
	      var Product = _ref4.Product;
	      return Product.findProductsByFlavor(flavor);
	    }
	  },
	  FindProductById: {
	    type: rootType,
	    args: {
	      _id: {
	        description: 'The Mongo _id of the product.',
	        type: new _graphql.GraphQLNonNull(_graphql.GraphQLID)
	      }
	    },
	    resolve: function resolve(_, _ref5, _ref6) {
	      var _id = _ref5._id;
	      var Product = _ref6.Product;
	      return Product.findProductById(_id);
	    }
	  },
	  PopularProducts: {
	    type: new _graphql.GraphQLList(queryTypes.popularProductsType),
	    args: {
	      qty: {
	        type: new _graphql.GraphQLNonNull(_graphql.GraphQLInt),
	        description: 'The quantity of popular products to return.'
	      }
	    },
	    resolve: function resolve(_, _ref7, _ref8) {
	      var qty = _ref7.qty;
	      var Product = _ref8.Product;
	      return Product.getPopularProducts(qty);
	    }
	  }
	};
	var mutations = {
	  CreateProduct: { // This is only used from GraphiQL to seed database.
	    type: rootType,
	    description: 'Create new Product.',
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
	              size: {
	                description: 'The available sizes for the product.',
	                type: new _graphql.GraphQLNonNull(new _graphql.GraphQLEnumType({
	                  name: 'NewProductAvailableSizesInput',
	                  /* eslint-disable quote-props */
	                  values: {
	                    'small': {
	                      value: 30,
	                      description: '30 milliter bottle.'
	                    },
	                    'medium': {
	                      value: 60,
	                      description: '60 milliliter bottle.'
	                    },
	                    'large': {
	                      value: 120,
	                      description: '120 milliliter bottle'
	                    }
	                  }
	                }))
	              },
	              nicotineStrength: {
	                description: 'The nicotine strength for the new product.',
	                type: new _graphql.GraphQLNonNull(new _graphql.GraphQLEnumType({
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
	                }))
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
	              slug: {
	                description: 'The name of the route for the new product.',
	                type: new _graphql.GraphQLNonNull(_graphql.GraphQLString)
	              },
	              vendor: {
	                description: 'The name of manufacturer of the new product.',
	                type: _graphql.GraphQLString
	              },
	              blurb: {
	                description: 'A description of the new product.',
	                type: new _graphql.GraphQLNonNull(_graphql.GraphQLString)
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
	                      inCart: {
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
	      },
	      statistics: {
	        description: 'Statistics on purchases for this item.',
	        type: new _graphql.GraphQLInputObjectType({
	          name: 'NewProductStatisticsInput',
	          fields: function fields() {
	            return {
	              addsToCart: {
	                description: 'The amount of times someone has added this product to their cart.',
	                type: _graphql.GraphQLInt
	              },
	              completedCheckouts: {
	                description: 'The amount of times this item has been successfully purchased.',
	                type: _graphql.GraphQLInt
	              },
	              transactions: {
	                description: 'A list of transactions for this product.',
	                type: new _graphql.GraphQLList(new _graphql.GraphQLInputObjectType({
	                  name: 'NewProductTransactionInput',
	                  fields: function fields() {
	                    return {
	                      transactionId: {
	                        description: 'The Mongo ID for transactions.',
	                        type: _graphql.GraphQLID
	                      },
	                      userId: {
	                        description: 'The mongo ID for users.',
	                        type: _graphql.GraphQLID
	                      }
	                    };
	                  }
	                }))
	              }
	            };
	          }
	        })
	      }
	    },
	    resolve: function resolve(_, _ref9, _ref10) {
	      var product = _ref9.product,
	          statistics = _ref9.statistics;
	      var Product = _ref10.Product;
	      return Product.createProduct(product, statistics);
	    }
	  },
	  FindProductAndUpdate: {
	    type: rootType,
	    description: 'Find product by ID and update.',
	    args: {
	      _id: {
	        description: 'The mongo _id of the product to update.',
	        type: new _graphql.GraphQLNonNull(_graphql.GraphQLID)
	      },
	      newProduct: {
	        description: 'Object: The updated product info.',
	        type: new _graphql.GraphQLNonNull(new _graphql.GraphQLInputObjectType({
	          name: 'UpdateProductObject',
	          fields: function fields() {
	            return {
	              mainTitle: {
	                description: 'The main title for the Single Product page for the new product - e.g. The "Cateogry" of the new product.',
	                type: _graphql.GraphQLString
	              },
	              title: {
	                description: 'The title of the new product.',
	                type: _graphql.GraphQLString
	              },
	              flavor: {
	                description: 'The flavor of the new product.',
	                type: _graphql.GraphQLString
	              },
	              price: {
	                description: 'The price of the new product. - WARNING: Do not add $ signs, Do not add (.) decimals.',
	                type: _graphql.GraphQLString
	              },
	              sku: {
	                description: 'The unique code for the new product.',
	                type: _graphql.GraphQLString
	              },
	              size: {
	                description: 'The available sizes for the product.',
	                type: new _graphql.GraphQLEnumType({
	                  name: 'ProductAvailableSizesInput',
	                  /* eslint-disable quote-props */
	                  values: {
	                    'small': {
	                      value: 30,
	                      description: '30 milliter bottle.'
	                    },
	                    'medium': {
	                      value: 60,
	                      description: '60 milliliter bottle.'
	                    },
	                    'large': {
	                      value: 120,
	                      description: '120 milliliter bottle'
	                    }
	                  }
	                })
	              },
	              nicotineStrength: {
	                description: 'The nicotine strength for the new product.',
	                type: new _graphql.GraphQLEnumType({
	                  name: 'UpdateProductNicotineStrengthsEnum',
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
	                })
	              },
	              images: {
	                description: 'Images array for the new Product.',
	                type: new _graphql.GraphQLList(new _graphql.GraphQLInputObjectType({
	                  name: 'UpdateProductImageObject',
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
	                }))
	              },
	              slug: {
	                description: 'The name of the route for the new product.',
	                type: _graphql.GraphQLString
	              },
	              vendor: {
	                description: 'The name of manufacturer of the new product.',
	                type: _graphql.GraphQLString
	              },
	              blurb: {
	                description: 'A description of the new product.',
	                type: _graphql.GraphQLString
	              },
	              quantities: {
	                description: 'Availability stats for this new product.',
	                type: new _graphql.GraphQLInputObjectType({
	                  name: 'UpdateProductQuantityInfo',
	                  fields: function fields() {
	                    return {
	                      available: {
	                        description: 'The available quanitty for this product.',
	                        type: _graphql.GraphQLInt
	                      },
	                      inCart: {
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
	    },
	    resolve: function resolve(_, _ref11, _ref12) {
	      var _id = _ref11._id,
	          newProduct = _ref11.newProduct;
	      var Product = _ref12.Product;
	      return Product.findProductAndUpdate(_id, newProduct);
	    }
	  },
	  FindProductByIdAndDelete: {
	    type: rootType,
	    description: 'Find product by ID and delete the product.',
	    args: {
	      _id: {
	        description: 'The Mongo _id of the product.',
	        type: new _graphql.GraphQLNonNull(_graphql.GraphQLID)
	      }
	    },
	    resolve: function resolve(_, _ref13, _ref14) {
	      var _id = _ref13._id;
	      var Product = _ref14.Product;
	      return Product.findProductByIdAndDelete(_id);
	    }
	  }
	};

	exports.default = {
	  rootType: rootType,
	  queries: queries,
	  mutations: mutations
	};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _graphql = __webpack_require__(5);

	var rootType = new _graphql.GraphQLObjectType({
	  name: 'RootUserType',
	  description: 'A User.',
	  fields: function fields() {
	    return {
	      _id: {
	        description: 'The ID of the User.',
	        type: new _graphql.GraphQLNonNull(_graphql.GraphQLID)
	      },
	      error: {
	        description: 'Any errors that occur during a backend operation will be flagged and provided a message within this object.',
	        type: new _graphql.GraphQLObjectType({
	          name: 'UserError',
	          fields: function fields() {
	            return {
	              hard: {
	                description: 'Boolean flag for a hard failure. Operations should not continue until action by user has been taken.',
	                type: _graphql.GraphQLBoolean
	              },
	              soft: {
	                description: 'Boolean flag for a soft failure.  Operations should be allowed to continue.',
	                type: _graphql.GraphQLBoolean
	              },
	              message: {
	                description: 'Amplifying information about error.  Should be written for user readibility.',
	                type: _graphql.GraphQLString
	              }
	            };
	          }
	        })
	      },
	      name: {
	        description: 'The Given, Family, & Display name for the user.',
	        type: new _graphql.GraphQLObjectType({
	          name: 'UserName',
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
	      pictures: {
	        description: 'Pictures of the user in different sizes.',
	        type: new _graphql.GraphQLObjectType({
	          name: 'UserPicture',
	          fields: function fields() {
	            return {
	              small: {
	                description: 'Small user image used for the Navbar avatar.',
	                type: _graphql.GraphQLString
	              },
	              large: {
	                description: 'Large user image used for the user dashboard.',
	                type: _graphql.GraphQLString
	              },
	              default: {
	                description: 'The default user avatar if none is supplied.',
	                type: _graphql.GraphQLString
	              }
	            };
	          }
	        })
	      },
	      authentication: {
	        description: 'Authentication information for user.',
	        type: new _graphql.GraphQLObjectType({
	          name: 'UserAuthentication',
	          fields: function fields() {
	            return {
	              signedUp: {
	                description: 'The Date this user first signed up for newsletters.',
	                type: _graphql.GraphQLString
	              },
	              password: {
	                description: 'This user\'s password if using email signup.',
	                type: _graphql.GraphQLString
	              },
	              createdAt: {
	                description: 'The date this user was created.',
	                type: _graphql.GraphQLString
	              },
	              totalLogins: {
	                description: 'The number of times this user has logged in.',
	                type: _graphql.GraphQLInt
	              },
	              logins: {
	                description: 'The last time this user logged in.',
	                type: new _graphql.GraphQLList(new _graphql.GraphQLObjectType({
	                  name: 'UserLastLogin',
	                  fields: function fields() {
	                    return {
	                      date: {
	                        description: 'The Date the user last logged in.',
	                        type: _graphql.GraphQLString
	                      },
	                      device: {
	                        description: 'The type of device the user logged in with.',
	                        type: _graphql.GraphQLString
	                      }
	                    };
	                  }
	                }))
	              },
	              ageVerified: {
	                description: 'Verification if the user is at least 20 years of age.',
	                type: _graphql.GraphQLBoolean
	              },
	              auth0Identities: {
	                description: 'An array of identity object from Auth0 for each different type of login used by the user.',
	                type: new _graphql.GraphQLList(new _graphql.GraphQLObjectType({
	                  name: 'UserAuth0Identities',
	                  fields: function fields() {
	                    return {
	                      provider: {
	                        description: 'The Social-Login Provider.',
	                        type: _graphql.GraphQLString
	                      },
	                      user_id: {
	                        description: 'The Auth0 User ID for this login type.',
	                        type: _graphql.GraphQLString
	                      },
	                      connection: {
	                        description: 'The type of Auth0 connection that was used.',
	                        type: _graphql.GraphQLString
	                      },
	                      isSocial: {
	                        description: 'Verifies that a Social Login type was used.',
	                        type: _graphql.GraphQLBoolean
	                      }
	                    };
	                  }
	                }))
	              }
	            };
	          }
	        })
	      },
	      contactInfo: {
	        description: 'Contact info & GeoLocation info for user.',
	        type: new _graphql.GraphQLObjectType({
	          name: 'UserContanctInfo',
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
	              locale: {
	                description: 'The users language of choice as determined by the Social Login provider or their preference.',
	                type: _graphql.GraphQLString
	              },
	              timezone: {
	                description: 'The users local Time Zone - Retrieved from Social Login Provider.',
	                type: _graphql.GraphQLInt
	              },
	              location: {
	                description: 'IP address, lat, long, & country code. for this user from their last login.',
	                type: new _graphql.GraphQLObjectType({
	                  name: 'UserGeolocation',
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
	              },
	              devices: {
	                description: 'The mobile devices used by a user to connect to Social Apps - From Social Login Providers Meta Data.',
	                type: new _graphql.GraphQLList(new _graphql.GraphQLObjectType({
	                  name: 'UserDevices',
	                  fields: function fields() {
	                    return {
	                      hardware: {
	                        description: 'The mobile Phone type.',
	                        type: _graphql.GraphQLString
	                      },
	                      os: {
	                        description: 'The operating system for the mobile device.',
	                        type: _graphql.GraphQLString
	                      }
	                    };
	                  }
	                }))
	              },
	              socialNetworks: {
	                description: 'An array of Social Networks used by the user + their respective account links.',
	                type: new _graphql.GraphQLList(new _graphql.GraphQLObjectType({
	                  name: 'UserSocialNetwork',
	                  fields: function fields() {
	                    return {
	                      name: {
	                        description: 'The name of the Social Network.',
	                        type: _graphql.GraphQLString
	                      },
	                      link: {
	                        description: 'The Social Network Link for this users account.',
	                        type: _graphql.GraphQLString
	                      }
	                    };
	                  }
	                }))
	              }
	            };
	          }
	        })
	      },
	      shopping: {
	        description: 'The Users Shopping Details: What\'s currently in the Users cart. What transactions have they made.',
	        type: new _graphql.GraphQLObjectType({
	          name: 'UserShopping',
	          fields: function fields() {
	            return {
	              cart: {
	                description: 'The Users shopping cart.',
	                type: new _graphql.GraphQLList(new _graphql.GraphQLObjectType({
	                  name: 'UserCart',
	                  fields: function fields() {
	                    return {
	                      qty: {
	                        description: 'The quantity of items of this product.',
	                        type: _graphql.GraphQLInt
	                      },
	                      productId: {
	                        description: 'The Mongo ObjectID for this product.',
	                        type: _graphql.GraphQLID
	                      }
	                    };
	                  }
	                }))
	              },
	              transactions: {
	                description: 'The date this user first signed up for newsletters - Typically coincides with users first purchase.',
	                type: new _graphql.GraphQLList(_graphql.GraphQLString)
	              }
	            };
	          }
	        })
	      },
	      permissions: {
	        description: 'Authorization permissions granted for user.',
	        type: new _graphql.GraphQLObjectType({
	          name: 'UserPermissions',
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
	        description: 'Bio information for new user.',
	        type: new _graphql.GraphQLObjectType({
	          name: 'UserInputStory',
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
	              },
	              gender: {
	                description: 'The User\'s gender.',
	                type: _graphql.GraphQLString
	              }
	            };
	          }
	        })
	      },
	      marketHero: {
	        description: 'The User\'s Market Hero Meta-Data.',
	        type: new _graphql.GraphQLObjectType({
	          name: 'UserMarketHero',
	          fields: function fields() {
	            return {
	              tags: {
	                description: 'Array of objects, containing all the "Tags" that have been added to this User\'s Market Hero profile, and the respective date.',
	                type: new _graphql.GraphQLList(new _graphql.GraphQLObjectType({
	                  name: 'UserMarketHeroTags',
	                  fields: function fields() {
	                    return {
	                      name: {
	                        description: 'The name of the "Tag".',
	                        type: _graphql.GraphQLString
	                      },
	                      date: {
	                        description: 'The Date this "Tag" was added the User\'s Market Hero profile.',
	                        type: _graphql.GraphQLString
	                      }
	                    };
	                  }
	                }))
	              }
	            };
	          }
	        })
	      },
	      socialProfileBlob: {
	        description: 'The social network profile information for this user.  Captured at Registration.',
	        type: new _graphql.GraphQLObjectType({
	          name: 'UserSocialProfileBlob',
	          fields: function fields() {
	            return {
	              line: {
	                description: 'The Social Profile for the User\'s LINE account.',
	                type: _graphql.GraphQLString
	              },
	              facebook: {
	                description: 'The Social Profile for the User\'s Facebook account.',
	                type: _graphql.GraphQLString
	              },
	              google: {
	                description: 'The Social Profile for the User\'s Google account.',
	                type: _graphql.GraphQLString
	              },
	              twitter: {
	                description: 'The Social Profile for the User\'s Twitter account.',
	                type: _graphql.GraphQLString
	              },
	              linkedin: {
	                description: 'The Social Profile for the User\'s Linkedin account.',
	                type: _graphql.GraphQLString
	              }
	            };
	          }
	        })
	      }
	    };
	  }
	});
	var queries = {
	  FetchUserProfile: {
	    type: rootType,
	    args: {
	      id: {
	        description: 'The Users Mongo ID. ',
	        type: new _graphql.GraphQLNonNull(_graphql.GraphQLID)
	      }
	    },
	    resolve: function resolve(_, _ref, _ref2) {
	      var id = _ref.id;
	      var User = _ref2.User;
	      return User.fetchUserProfile(id);
	    }
	  }
	};
	var mutations = {
	  LoginOrRegister: {
	    type: rootType,
	    description: 'Create new User.',
	    args: {
	      auth0Id: {
	        description: 'The Auth0 User ID to cross check with all Mongo User ID\'s to Login and if no match is found, create a new User.',
	        type: new _graphql.GraphQLNonNull(_graphql.GraphQLString)
	      },
	      loginType: {
	        description: 'The Social Network used to login or register.',
	        type: new _graphql.GraphQLNonNull(_graphql.GraphQLString)
	      },
	      name: {
	        description: 'The Given, Family, & Display name for the new user.',
	        type: new _graphql.GraphQLNonNull(new _graphql.GraphQLInputObjectType({
	          name: 'UserNameInput',
	          fields: function fields() {
	            return {
	              first: {
	                description: 'The first name of the new user.',
	                type: new _graphql.GraphQLNonNull(_graphql.GraphQLString)
	              },
	              last: {
	                description: 'The last name of the new user.',
	                type: new _graphql.GraphQLNonNull(_graphql.GraphQLString)
	              },
	              display: {
	                description: 'The display name of the new user.',
	                type: new _graphql.GraphQLNonNull(_graphql.GraphQLString)
	              }
	            };
	          }
	        }))
	      },
	      pictures: {
	        description: 'Pictures of the user in different sizes.',
	        type: new _graphql.GraphQLNonNull(new _graphql.GraphQLInputObjectType({
	          name: 'UserPictureInput',
	          fields: function fields() {
	            return {
	              small: {
	                description: 'Small user image used for the Navbar avatar.',
	                type: _graphql.GraphQLString
	              },
	              large: {
	                description: 'Large user image used for the user dashboard.',
	                type: _graphql.GraphQLString
	              }
	            };
	          }
	        }))
	      },
	      authentication: {
	        description: 'Authentication information for user.',
	        type: new _graphql.GraphQLNonNull(new _graphql.GraphQLInputObjectType({
	          name: 'UserAuthenticationInput',
	          fields: function fields() {
	            return {
	              signedUp: {
	                description: 'The Date this new user first signed up for newsletters.',
	                type: _graphql.GraphQLString
	              },
	              password: {
	                description: 'This new user\'s password if using email signup.',
	                type: _graphql.GraphQLString
	              },
	              createdAt: {
	                description: 'The date this new user was created.',
	                type: _graphql.GraphQLString
	              },
	              totalLogins: {
	                description: 'The number of times this new user has logged in.',
	                type: _graphql.GraphQLInt
	              },
	              ageVerified: {
	                description: 'Verification if the user is at least 20 years of age.',
	                type: new _graphql.GraphQLNonNull(_graphql.GraphQLBoolean)
	              }
	            };
	          }
	        }))
	      },
	      authenticationLogins: {
	        description: 'The last time this new user logged in.',
	        type: new _graphql.GraphQLNonNull(new _graphql.GraphQLList(new _graphql.GraphQLInputObjectType({
	          name: 'UserLastLoginInput',
	          fields: function fields() {
	            return {
	              date: {
	                description: 'The Date the user last logged in.',
	                type: _graphql.GraphQLString
	              },
	              device: {
	                description: 'The type of device the user logged in with.',
	                type: _graphql.GraphQLString
	              }
	            };
	          }
	        })))
	      },
	      authenticationAuth0Identities: {
	        description: 'An array of identity object from Auth0 for each different type of login used by the user.',
	        type: new _graphql.GraphQLNonNull(new _graphql.GraphQLList(new _graphql.GraphQLInputObjectType({
	          name: 'UserAuth0IdentitiesInput',
	          fields: function fields() {
	            return {
	              provider: {
	                description: 'The Social-Login Provider.',
	                type: _graphql.GraphQLString
	              },
	              user_id: {
	                description: 'The Auth0 User ID for this login type.',
	                type: _graphql.GraphQLString
	              },
	              connection: {
	                description: 'The type of Auth0 connection that was used.',
	                type: _graphql.GraphQLString
	              },
	              isSocial: {
	                description: 'Verifies that a Social Login type was used.',
	                type: _graphql.GraphQLBoolean
	              }
	            };
	          }
	        })))
	      },
	      contactInfo: {
	        description: 'Contact info & GeoLocation info for user.',
	        type: new _graphql.GraphQLNonNull(new _graphql.GraphQLInputObjectType({
	          name: 'UserContactInfoInput',
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
	              locale: {
	                description: 'The users language of choice as determined by the Social Login provider or their preference.',
	                type: _graphql.GraphQLString
	              },
	              timezone: {
	                description: 'The users local Time Zone - Retrieved from Social Login Providers.',
	                type: _graphql.GraphQLInt
	              }
	            };
	          }
	        }))
	      },
	      contactInfoLocation: {
	        description: 'IP address, lat, long, & country code. for this user from their last login.',
	        type: new _graphql.GraphQLNonNull(new _graphql.GraphQLInputObjectType({
	          name: 'UserLocationInput',
	          fields: function fields() {
	            return {
	              ipAddress: {
	                description: 'IP address this user last used.',
	                type: new _graphql.GraphQLNonNull(_graphql.GraphQLString)
	              },
	              lat: {
	                description: 'Latitude coord. this user last logged in from.',
	                type: new _graphql.GraphQLNonNull(_graphql.GraphQLString)
	              },
	              long: {
	                description: 'Longitude coord. this user last logged in from.',
	                type: new _graphql.GraphQLNonNull(_graphql.GraphQLString)
	              },
	              country: {
	                description: 'Country code this user last logged in from.',
	                type: new _graphql.GraphQLNonNull(_graphql.GraphQLString)
	              }
	            };
	          }
	        }))
	      },
	      contactInfoDevices: {
	        description: 'The mobile devices used by a user to connect to Social Apps - From Social Login Providers Meta Data.',
	        type: new _graphql.GraphQLList(new _graphql.GraphQLInputObjectType({
	          name: 'UserDevicesInput',
	          fields: function fields() {
	            return {
	              hardware: {
	                description: 'The mobile Phone type.',
	                type: _graphql.GraphQLString
	              },
	              os: {
	                description: 'The operating system for the mobile device.',
	                type: _graphql.GraphQLString
	              }
	            };
	          }
	        }))
	      },
	      contactInfoSocialNetworks: {
	        description: 'An array of Social Networks used by the user + their respective account links.',
	        type: new _graphql.GraphQLNonNull(new _graphql.GraphQLList(new _graphql.GraphQLInputObjectType({
	          name: 'UserSocialNetworkInput',
	          fields: function fields() {
	            return {
	              name: {
	                description: 'The name of the Social Network.',
	                type: _graphql.GraphQLString
	              },
	              link: {
	                description: 'The Social Network Link for this users account.',
	                type: _graphql.GraphQLString
	              }
	            };
	          }
	        })))
	      },
	      shopping: {
	        description: 'The Users Shopping Details: What\'s currently in the Users cart. What transactions have they made.',
	        type: new _graphql.GraphQLNonNull(new _graphql.GraphQLInputObjectType({
	          name: 'UserShoppingInput',
	          fields: function fields() {
	            return {
	              transactions: {
	                description: 'The date this user first signed up for newsletters - Typically coincides with users first purchase.',
	                type: new _graphql.GraphQLList(_graphql.GraphQLString)
	              }
	            };
	          }
	        }))
	      },
	      shoppingCart: {
	        description: 'The Users shopping cart.',
	        type: new _graphql.GraphQLNonNull(new _graphql.GraphQLList(new _graphql.GraphQLInputObjectType({
	          name: 'UserCartInput',
	          fields: function fields() {
	            return {
	              qty: {
	                description: 'The quantity of items of this product.',
	                type: _graphql.GraphQLInt
	              },
	              productId: {
	                description: 'The Mongo ObjectID for this product.',
	                type: _graphql.GraphQLID
	              }
	            };
	          }
	        })))
	      },
	      permissions: {
	        description: 'Authorization permissions granted for user.',
	        type: new _graphql.GraphQLNonNull(new _graphql.GraphQLInputObjectType({
	          name: 'UserPermissionsInput',
	          fields: function fields() {
	            return {
	              role: {
	                description: 'The authorization role for this user.',
	                type: new _graphql.GraphQLNonNull(_graphql.GraphQLString)
	              }
	            };
	          }
	        }))
	      },
	      userStory: {
	        description: 'Bio information for new user.',
	        type: new _graphql.GraphQLNonNull(new _graphql.GraphQLInputObjectType({
	          name: 'UserStoryInput',
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
	              },
	              gender: {
	                description: 'The User\'s gender.',
	                type: _graphql.GraphQLString
	              }
	            };
	          }
	        }))
	      },
	      socialProfileBlob: {
	        description: 'The users collection of social profiles from their Social Login accounts.',
	        type: new _graphql.GraphQLNonNull(new _graphql.GraphQLInputObjectType({
	          name: 'UserSocialProfileBlobInput',
	          fields: function fields() {
	            return {
	              line: {
	                description: 'The Social Profile for the User\'s LINE account.',
	                type: _graphql.GraphQLString
	              },
	              facebook: {
	                description: 'The Social Profile for the User\'s Facebook account.',
	                type: _graphql.GraphQLString
	              },
	              google: {
	                description: 'The Social Profile for the User\'s Google account.',
	                type: _graphql.GraphQLString
	              },
	              twitter: {
	                description: 'The Social Profile for the User\'s Twitter account.',
	                type: _graphql.GraphQLString
	              },
	              linkedin: {
	                description: 'The Social Profile for the User\'s Linkedin account.',
	                type: _graphql.GraphQLString
	              }
	            };
	          }
	        }))
	      }
	    },
	    resolve: function resolve(_, args, _ref3) {
	      var User = _ref3.User;
	      return User.loginOrRegister(args);
	    }
	  },
	  AddToMemberCart: {
	    type: rootType,
	    description: 'Add products to the members cart.',
	    args: {
	      userId: {
	        description: 'The User\'s Mongo ObjectId.',
	        type: new _graphql.GraphQLNonNull(_graphql.GraphQLID)
	      },
	      qty: {
	        description: 'The quantity of products to add.',
	        type: new _graphql.GraphQLNonNull(_graphql.GraphQLInt)
	      },
	      product: {
	        description: 'The Mongo ObjectId of the product to add.',
	        type: new _graphql.GraphQLNonNull(_graphql.GraphQLID)
	      }
	    },
	    resolve: function resolve(_, args, _ref4) {
	      var User = _ref4.User;
	      return User.addToMemberCart(args);
	    }
	  },
	  DeleteFromMemberCart: {
	    type: rootType,
	    description: 'Delete a Product from the Users cart.',
	    args: {
	      productId: {
	        description: 'The Product Mongo Id to delete.',
	        type: new _graphql.GraphQLNonNull(_graphql.GraphQLID)
	      },
	      userId: {
	        description: 'The User Mongo Id to perform the operation on.',
	        type: new _graphql.GraphQLNonNull(_graphql.GraphQLID)
	      }
	    },
	    resolve: function resolve(_, args, _ref5) {
	      var User = _ref5.User;
	      return User.deleteFromCart(args);
	    }
	  },
	  EditToMemberCart: {
	    type: rootType,
	    description: 'Update products in the members cart.',
	    args: {
	      userId: {
	        description: 'The User\'s Mongo ObjectId.',
	        type: new _graphql.GraphQLNonNull(_graphql.GraphQLID)
	      },
	      products: {
	        description: 'A list of Products to be inserted into the users DB cart.',
	        type: new _graphql.GraphQLList(new _graphql.GraphQLInputObjectType({
	          name: 'ProductsInput',
	          fields: function fields() {
	            return {
	              qty: {
	                description: 'The quantity of products to update.',
	                type: new _graphql.GraphQLNonNull(_graphql.GraphQLInt)
	              },
	              product: {
	                description: 'The Mongo ObjectId of the product to update.',
	                type: new _graphql.GraphQLNonNull(_graphql.GraphQLID)
	              }
	            };
	          }
	        }))
	      }
	    },
	    resolve: function resolve(_, args, _ref6) {
	      var User = _ref6.User;
	      return User.editToMemberCart(args);
	    }
	  }
	};
	var UserTypes = {
	  rootType: rootType,
	  queries: queries,
	  mutations: mutations
	};
	exports.default = UserTypes;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _promise = __webpack_require__(4);

	var _promise2 = _interopRequireDefault(_promise);

	var _mongoose = __webpack_require__(10);

	var _mongoose2 = _interopRequireDefault(_mongoose);

	var _product = __webpack_require__(11);

	var _product2 = _interopRequireDefault(_product);

	var _user = __webpack_require__(17);

	var _user2 = _interopRequireDefault(_user);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_mongoose2.default.Promise = _promise2.default; /* eslint-disable no-console, no-constant-condition, no-unused-vars */

	var dotenv = __webpack_require__(19).config({ silent: true }); //eslint-disable-line
	var MONGO_DB = process.env.MONGO_URI;

	if (!MONGO_DB) throw new Error('MONGO_DB URI value is: ' + (MONGO_DB.length ? MONGO_DB : 'undefined'));

	var cachedDb = {
	  connection: null,
	  dbModels: {
	    User: null,
	    Product: null
	  }
	};
	/**
	 * 1) Checks for previous instance of database - "cachedDb".
	 * 2) If instance has been found - checks state of connection.
	 * 3a) If state === 1 ("connected") then return previous connection.
	 * 3b) If state !== 1 (most likely "2" - "connecting") then use new connection.
	 * 4) If making new connection: Connect to Mongo Cluster - set the size of available connections to the replica set to 100 concurrent connections.
	 * 5) Assign new connection to "cachedDb" and return result to handler.js
	 *
	 *
	 * @return {object} - Promise resolved with db connection.
	*/
	var verifyDb = function verifyDb() {
	  return new _promise2.default(function (resolve) {
	    if (cachedDb.connection && cachedDb.connection._readyState === 1) {
	      console.log('cachedDb.connection._readyState: ', cachedDb.connection._readyState, '\nFOUND PREVIOUS CONNECTION\n', '\nCurrent Connections: ', cachedDb.connection.base.connections);
	      resolve(cachedDb);
	    } else {
	      var connection = _mongoose2.default.createConnection(MONGO_DB, { replset: { poolSize: 100 } });

	      console.log('CREATED NEW CONNECTION: ', connection, '\nmongoose.connection.readyState: ', connection._readyState, '\nAll Connections:', connection.base);

	      cachedDb = {
	        connection: connection,
	        dbModels: {
	          User: (0, _user2.default)(connection),
	          Product: (0, _product2.default)(connection)
	        }
	      };
	      console.log('\n\nCACHED Connection: \n\n', cachedDb.connection);
	      resolve(cachedDb);
	    }
	  });
	};

	exports.default = verifyDb;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	module.exports = require("mongoose");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _stringify = __webpack_require__(3);

	var _stringify2 = _interopRequireDefault(_stringify);

	var _defineProperty2 = __webpack_require__(12);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _keys = __webpack_require__(13);

	var _keys2 = _interopRequireDefault(_keys);

	var _toConsumableArray2 = __webpack_require__(14);

	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

	var _promise = __webpack_require__(4);

	var _promise2 = _interopRequireDefault(_promise);

	var _bluebird = __webpack_require__(15);

	var _productSchema = __webpack_require__(16);

	var _productSchema2 = _interopRequireDefault(_productSchema);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/* eslint-disable no-use-before-define, no-console */
	exports.default = function (db) {
	  /**
	  * Locates all products with matching flavor.
	  *
	  * 1) Queries Products collection by input argument "flavor".
	  * 2) Resolves || Rejects with result.
	  *
	  * @param {string} flavor - Product flavor.
	  *
	  * @return {object} - Promise resolved with array of matching Product docs.
	  */
	  _productSchema2.default.statics.findProductsByFlavor = function (flavor) {
	    return new _promise2.default(function (resolve, reject) {
	      Product.find({ 'product.flavor': flavor }).exec().then(function (dbProducts) {
	        console.log('Found ' + dbProducts.length + ' popular product(s) with Flavor: "' + flavor + '"!');
	        resolve(dbProducts);
	      }).catch(function (error) {
	        console.log('Error trying to find products by flavor "' + flavor + '". ERROR = ' + error);
	        reject('Error trying to find products by flavor "' + flavor + '". ERROR = ' + error);
	      });
	    });
	  };

	  /**
	  * Fetches multiple products by id.
	  * 1) Finds procuts by Mongo _id.
	  * 2) Resolves || Rejects with result.
	  *
	  * @param {array} ids - Array of Product Mongo _ids.
	  *
	  * @return {object} - Promise resolved with array of Product Documents.
	  */
	  _productSchema2.default.statics.fetchMultiple = function (ids) {
	    return new _promise2.default(function (resolve, reject) {
	      if (!ids.length) {
	        resolve([]);
	      } else {
	        Product.find({ _id: { $in: [].concat((0, _toConsumableArray3.default)(ids)) } }).exec().then(function (dbProducts) {
	          console.log('Found multiple Products.: ', dbProducts);
	          resolve(dbProducts);
	        }).catch(function (error) {
	          console.log('Error qurying for multiple products with ids "' + ids + '". ERROR = ' + error);
	          reject('Error qurying for multiple products with ids "' + ids + '". ERROR = ' + error);
	        });
	      }
	    });
	  };

	  /**
	  * 1) Removes product by id.
	  * 2) Resolves || Rejects with result.
	  *
	  * @param {string} _id - Mongo _id of Product to delete.
	  *
	  * @return {object} - Promise resolved with deleted Product Document.
	  */
	  _productSchema2.default.statics.findProductByIdAndDelete = function (_id) {
	    return new _promise2.default(function (resolve, reject) {
	      Product.findByIdAndRemove(_id).exec().then(resolve).catch(function (error) {
	        console.log('Error trying to delete product with id "' + _id + '".  ERROR = ' + error + '.');
	        reject('Error trying to delete product with id "' + _id + '".  ERROR = ' + error + '.');
	      });
	    });
	  };

	  /**
	  * 1) Creates new Product.
	  * 2) Resolves || Rejects with result.
	  *
	  * @param {object} product  - Product details.
	  * @param {object} statistics  - Product statistic details.
	  *
	  * @return {object} - Promise resolved with new Product Document.
	  */
	  _productSchema2.default.statics.createProduct = function (product, statistics) {
	    return new _promise2.default(function (resolve, reject) {
	      _bluebird.Promise.fromCallback(function (cb) {
	        return Product.create({ product: product, statistics: statistics }, cb);
	      }).then(function (newProduct) {
	        console.log('Created new Product document. DOC = ' + newProduct);
	        resolve(newProduct);
	      }).catch(function (error) {
	        console.log('Error trying to create new product.  ERROR = ' + error);
	        reject('Error trying to create new product.  ERROR = ' + error);
	      });
	    });
	  };

	  /**
	  * 1) Finds product by Mongo _id.
	  * 2) Resolves || Rejects with result.
	  *
	  * @param {string} _id  - Mongo _id.
	  *
	  * @return {object} - Promise resolved with found Product Document.
	  */
	  _productSchema2.default.statics.findProductById = function (_id) {
	    return new _promise2.default(function (resolve, reject) {
	      Product.findById(_id).exec().then(function (dbProduct) {
	        console.log('Found product.  DOC = ' + dbProduct);
	        resolve(dbProduct);
	      }).catch(function (error) {
	        console.log('Error trying to find product with id "' + _id + '".  ERROR = ' + error);
	        reject('Error trying to find product with id "' + _id + '".  ERROR = ' + error);
	      });
	    });
	  };

	  /**
	  * 1) Finds product by _id.
	  * 2) Updates product with new productObj info.
	  * 3) Saves changes.
	  * 4) Resolves || Rejects with result.
	  *
	  * @param {string} _id  - Mongo _id.
	  * @param {object} productObj  - Product details.
	  *
	  * @return {object} - Promise resolved with updated Product Document.
	  */
	  _productSchema2.default.statics.findProductAndUpdate = function (_id, productObj) {
	    return new _promise2.default(function (resolve, reject) {
	      var newProductObj = {};

	      /**
	      * 1) Map over each key for "productObj"
	      * 2a) If the current key is "images" then map over each image in nested loop.
	      * 2b) For each image - create a location reference in dot notation, casted as a string, to be used later.
	      * 2c) For each image - push the actual image object containing the "href" image addresses into a new array.
	      * 2d) For each key generated in step 2b), return a new array, containing an object: The key of that new object is dynamically generated using the string-casted-dot-notation value created in step 2b.  The value of that key, is dynamically assigned from the "imageObjs" array using the same index as the "imageKeys" array.  The final result is a "zipped" array from 2 seperate arrays.
	      * 3) If the current key is NOT "images" - then dynamically assign the key it's new value from the input argument "productObj".
	      * 4) For each new object returned from iterating over the old product keys, dynamically assign the empty object "newObject" it's key value pairs.
	      *
	      * @param {string} _id  - Mongo _id.
	      * @param {object} productObj  - Product details.
	      *
	      * @return {object} - Promise resolved with updated Product Document.
	      */
	      (0, _keys2.default)(productObj).map(function (key) {
	        // 2)
	        if (key === 'images') {
	          var imageKeys = [];
	          var imageObjs = [];

	          productObj.images.forEach(function (imageObj, i) {
	            imageKeys.push('product.images[' + i + ']');
	            imageObjs.push(imageObj);
	          });

	          return imageKeys.map(function (newKey, i) {
	            return (0, _defineProperty3.default)({}, newKey, imageObjs[i]);
	          });
	        } // else 3)
	        var newKey = 'product.' + key;
	        var value = productObj[key];
	        return (0, _defineProperty3.default)({}, newKey, value);
	      }) // 4)
	      .forEach(function (object) {
	        var key = (0, _keys2.default)(object)[0];
	        newProductObj[key] = object[key];
	      });

	      console.log('\nnewProductObj: ', newProductObj);

	      Product.findByIdAndUpdate(_id, { $set: newProductObj }, { new: true }).exec().then(function (updatedProduct) {
	        console.log('Updated Product!: ' + _id + '.');
	        resolve(updatedProduct);
	      }).catch(function (error) {
	        console.log('Error while tring to update Product _id "' + _id + '".  ERROR = ' + error + '.');
	        reject('Error while tring to update Product _id "' + _id + '".  ERROR = ' + error + '.');
	      });
	    });
	  };

	  /**
	  * 1) Find popoular X number of popular products - popularity is based on the total number of completed purchases.
	  * 2) Resolve || Reject with results.
	  *
	  * @param {number} qty  - Number of desired results.
	  *
	  * @return {object} - Promise resolved with found Product Document(s).
	  */
	  _productSchema2.default.statics.getPopularProducts = function (qty) {
	    return new _promise2.default(function (resolve, reject) {
	      Product.aggregate([{ $group: {
	          _id: '$product.flavor',
	          docId: { $first: '$_id' },
	          title: { $first: '$product.title' },
	          slug: { $first: '$product.slug' },
	          images: { $first: '$product.images' },
	          completedCheckouts: { $first: '$statistics.completed_checkouts' }
	        } }, { $sort: { completedCheckouts: -1 } }, { $limit: qty }]).exec().then(function (dbProducts) {
	        console.log('Found the following products: ' + (0, _stringify2.default)(dbProducts, null, 2));
	        resolve(dbProducts);
	      }).catch(function (error) {
	        console.log('Error trying to find popular products. ERROR = ' + error + '.');
	        reject('Error trying to find popular products. ERROR = ' + error + '.');
	      });
	    });
	  };

	  var Product = db.model('Product', _productSchema2.default);
	  return Product;
	};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	module.exports = require("babel-runtime/helpers/defineProperty");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	module.exports = require("babel-runtime/core-js/object/keys");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	module.exports = require("babel-runtime/helpers/toConsumableArray");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

	module.exports = require("bluebird");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var Schema = __webpack_require__(10).Schema;

	var ObjectId = exports.ObjectId = Schema.Types.ObjectId;
	var productSchema = new Schema({
	  error: {
	    hard: {
	      type: Boolean,
	      default: false
	    },
	    soft: {
	      type: Boolean,
	      default: false
	    },
	    message: {
	      type: String,
	      default: ''
	    }
	  },
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
	    size: {
	      type: Number,
	      enum: [30, 60, 120],
	      required: true
	    },
	    nicotineStrength: {
	      type: Number,
	      enum: [2, 4, 6, 8, 10, 12, 14, 16, 18],
	      required: true
	    },
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
	    slug: {
	      type: String,
	      required: true
	    },
	    vendor: { type: String },
	    blurb: {
	      type: String,
	      required: true
	    },
	    dates: {
	      addedToStore: {
	        type: Date,
	        default: Date.now
	      },
	      removedFromStore: {
	        type: Date
	      }
	    },
	    quantities: {
	      available: { type: Number, default: 500 },
	      inCart: { type: Number }
	    }
	  },
	  reviews: [{
	    reviewsId: { type: ObjectId, ref: 'Reviews' },
	    userId: { type: ObjectId, ref: 'User' }
	  }],
	  distribution: {
	    restockThreshold: {
	      type: Number,
	      default: 500
	    },
	    restockAmount: {
	      type: Number,
	      default: 500
	    },
	    lastReplenishment: [{
	      date: {
	        type: Date
	      },
	      amount: {
	        type: Number,
	        default: 500
	      }
	    }],
	    wholesalePrice: { type: Number }
	  },
	  statistics: {
	    addsToCart: { type: Number },
	    completedCheckouts: { type: Number },
	    transactions: [{
	      transactionId: { type: ObjectId, ref: 'Transaction' },
	      userId: { type: ObjectId, ref: 'User' }
	    }]
	  }
	}, {
	  bufferCommands: true
	});
	exports.default = productSchema;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _toConsumableArray2 = __webpack_require__(14);

	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

	var _extends2 = __webpack_require__(1);

	var _extends3 = _interopRequireDefault(_extends2);

	var _promise = __webpack_require__(4);

	var _promise2 = _interopRequireDefault(_promise);

	var _bluebird = __webpack_require__(15);

	var _userSchema = __webpack_require__(18);

	var _userSchema2 = _interopRequireDefault(_userSchema);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/* eslint-disable no-use-before-define, no-console */
	exports.default = function (db) {
	  /**
	  * 1) Query User collection using input argument "userId".
	  * 2) Resolves || Rejects with result.
	  *
	  * @param {string} userId - the user's Mongo _id.
	  *
	  * @return {object} - Promise resolved with found User document.
	  */
	  _userSchema2.default.statics.fetchUserProfile = function (userId) {
	    return new _promise2.default(function (resolve, reject) {
	      User.findById(userId).exec().then(function (dbUser) {
	        console.log('User Found: ' + dbUser._id + '. Sending updated profile to Client.  ');
	        resolve(dbUser);
	      }).catch(function (error) {
	        console.log('Could Not find a user with this is: ' + userId + '. Mongo ERROR: ' + error);
	        reject('Could Not find a user with this is: ' + userId + '. Mongo ERROR: ' + error);
	      });
	    });
	  };

	  /**
	  * Checks for previous user matching the input auth0 id.  If found, logs user in. If not found, registers user.
	  *
	  * 1) Saves "auth0Id" & "loginType" to external variables and removes those from input "args" arguments.  By removing from args input, register user can cleanly create new instance with 1 input, "args".
	  * 2) Queries User Collection with "auth0Id".
	  * 3a) If found - calls "loginUser" with loginType, found user & remaining args.
	  * 3b) If not found - calls "registerUser" with input args.
	  * 4) Resolves || Rejects with final result.
	  *
	  * @param {string} userId - the user's Mongo _id.
	  *
	  * @return {object} - Promise resolved with updated User document.
	  */
	  _userSchema2.default.statics.loginOrRegister = function (args) {
	    return new _promise2.default(function (resolve, reject) {
	      var auth0Id = args.auth0Id;
	      var loginType = args.loginType;
	      delete args.auth0Id;
	      delete args.loginType;

	      User.findOne({ 'authentication.auth0Identities.userId': auth0Id }).exec().then(function (dbUser) {
	        if (!dbUser) return User.registerUser(args);
	        return User.loginUser(loginType, dbUser, args);
	      }).then(resolve).catch(function (error) {
	        return reject({ problem: error });
	      });
	    });
	  };

	  /**
	  * 1) Modifies dbUser document values based on new successful login and saves result.
	  * 2) Resolves || Rejects with result.
	  *
	  * @param {string} loginType - the Social Auth provider used to login.
	  * @param {object} dbUser - the Mongo User Document to modify.
	  * @param {object} userObj - the new values to update Mongo User Document.
	  *
	  * @return {object} - Promise resolved with updates User Document.
	  */
	  _userSchema2.default.statics.loginUser = function (loginType, dbUser, userObj) {
	    return new _promise2.default(function (resolve) {
	      console.log('Found Existing User.\n');
	      dbUser.authentication.totalLogins += 1;
	      dbUser.authentication.logins.push(userObj.authenticationLogins.pop());
	      dbUser.contactInfo.location = (0, _extends3.default)({}, userObj.contactInfoLocation);
	      dbUser.socialProfileBlob[loginType] = userObj.socialProfileBlob[loginType];

	      var savedOldCart = [].concat((0, _toConsumableArray3.default)(dbUser.shopping.cart));
	      var newCart = [].concat((0, _toConsumableArray3.default)(savedOldCart), (0, _toConsumableArray3.default)(userObj.shoppingCart));

	      if (!!newCart.length) {
	        var newQty = newCart.reduce(function (accum, next) {
	          return accum += next.qty;
	        }, 0);

	        if (newQty > 4) {
	          dbUser.error.soft = true;
	          dbUser.error.hard = false;
	          dbUser.error.msg = 'You have old items still saved in your cart from your last login.  Please purchase or delete these items before adding new ones.  Thanks for visiting us again. 🙂';
	        } else {
	          dbUser.shopping.cart = [].concat((0, _toConsumableArray3.default)(newCart));
	        }
	      }

	      dbUser.save({ validateBeforeSave: true }).then(resolve);
	    });
	  };

	  /**
	  * 1) Creates new Mongo User Document.
	  * 2) Resolves || Rejects with result.
	  *
	  * @param {object} userObj - New user info.
	  *
	  * @return {object} - Promise resolved with new User Document.
	  */
	  _userSchema2.default.statics.registerUser = function (userObj) {
	    return new _promise2.default(function (resolve, reject) {
	      var name = userObj.name,
	          pictures = userObj.pictures,
	          authentication = userObj.authentication,
	          authenticationLogins = userObj.authenticationLogins,
	          authenticationAuth0Identities = userObj.authenticationAuth0Identities,
	          contactInfo = userObj.contactInfo,
	          contactInfoLocation = userObj.contactInfoLocation,
	          contactInfoDevices = userObj.contactInfoDevices,
	          contactInfoSocialNetworks = userObj.contactInfoSocialNetworks,
	          shopping = userObj.shopping,
	          shoppingCart = userObj.shoppingCart,
	          permissions = userObj.permissions,
	          userStory = userObj.userStory,
	          socialProfileBlob = userObj.socialProfileBlob;


	      _bluebird.Promise.fromCallback(function (cb) {
	        return User.create({
	          name: name,
	          pictures: pictures,
	          authentication: (0, _extends3.default)({}, authentication, {
	            logins: [].concat((0, _toConsumableArray3.default)(authenticationLogins)),
	            auth0Identities: [].concat((0, _toConsumableArray3.default)(authenticationAuth0Identities))
	          }),
	          contactInfo: (0, _extends3.default)({}, contactInfo, {
	            email: contactInfo.email ? contactInfo.email : '',
	            location: (0, _extends3.default)({}, contactInfoLocation),
	            devices: [].concat((0, _toConsumableArray3.default)(contactInfoDevices)),
	            socialNetworks: [].concat((0, _toConsumableArray3.default)(contactInfoSocialNetworks))
	          }),
	          shopping: (0, _extends3.default)({}, shopping, {
	            cart: [].concat((0, _toConsumableArray3.default)(shoppingCart))
	          }),
	          permissions: permissions,
	          userStory: userStory,
	          socialProfileBlob: socialProfileBlob
	        }, cb);
	      }).then(function (newUser) {
	        console.log('\nNew User created!: ', newUser._id, '\nName: ', newUser.name.display, '\n');
	        resolve(newUser);
	      }).catch(reject);
	    });
	  };

	  /**
	  * Updates User Document's shopping cart with product information.
	  * 1) Finds user by Mongo _id.
	  * 2) Populates found document's shopping cart with product info.
	  * 3) Saves changes.
	  * 4) Resolves || Rejects with result.
	  *
	  * @param {object} cartObj - userId {string}, qty {number}, product {object}.
	  *
	  * @return {object} - Promise resolved with updated User Document.
	  */
	  _userSchema2.default.statics.addToMemberCart = function (_ref) {
	    var userId = _ref.userId,
	        qty = _ref.qty,
	        productId = _ref.productId;
	    return new _promise2.default(function (resolve, reject) {
	      User.findById(userId).exec().then(function (dbUser) {
	        dbUser.shopping.cart.push({ qty: qty, productId: productId });
	        return dbUser.save({ validateBeforeSave: true });
	      }).then(function (savedUser) {
	        console.log('Saved product to the User\'s Shopping Cart!');
	        resolve(savedUser);
	      }).catch(function (error) {
	        console.log('Could not save product to Users shopping cart. ERROR = ' + error);
	        reject('Could not save product to Users shopping cart. ERROR = ' + error);
	      });
	    });
	  };

	  /**
	  * Deletes product from users shopping cart.
	  * 1) Finds user by Mongo _id.
	  * 2) filters users shopping cart by productId.
	  * 3) Saves changes.
	  * 4) Resolves || Rejects with result.
	  *
	  * @param {object} cartObj - userId {string}, productId {string}.
	  *
	  * @return {object} - Promise resolved with updated User Document.
	  */
	  _userSchema2.default.statics.deleteFromCart = function (_ref2) {
	    var userId = _ref2.userId,
	        productId = _ref2.productId;
	    return new _promise2.default(function (resolve, reject) {
	      User.findById(userId).exec().then(function (dbUser) {
	        dbUser.shopping.cart = dbUser.shopping.cart.filter(function (cartObj) {
	          return String(cartObj.productId) !== String(productId);
	        });
	        return dbUser.save({ validateBeforeSave: true });
	      }).then(function (savedUser) {
	        console.log('Deleted Product: ' + productId + ' from User: ' + savedUser._id + '.');
	        resolve(savedUser);
	      }).catch(function (error) {
	        console.log('Could not Delete Product: ' + productId + ' from User: ' + userId + '. ERROR = ' + error);
	        reject('Could not Delete Product: ' + productId + ' from User: ' + userId + '. ERROR = ' + error);
	      });
	    });
	  };

	  /**
	  * Modifies product(s) in user's shopping cart.
	  * 1) Finds user by Mongo _id.
	  * 2) Replaces shopping cart with new products array.
	  * 3) Saves changes.
	  * 4) Resolves || Rejects with result.
	  *
	  * @param {object} cartObj - userId {string}, products {array}.
	  *
	  * @return {object} - Promise resolved with updates User Document.
	  */
	  _userSchema2.default.statics.editToMemberCart = function (_ref3) {
	    var userId = _ref3.userId,
	        products = _ref3.products;
	    return new _promise2.default(function (resolve, reject) {
	      User.findById(userId).exec().then(function (dbUser) {
	        dbUser.shopping.cart = products;
	        return dbUser.save({ validateBeforeSave: true });
	      }).then(function (updatedUser) {
	        console.log('Updated user shopping cart!');
	        resolve(updatedUser);
	      }).catch(function (error) {
	        console.log('Could not Update User: ' + userId + '. ERROR = ' + error);
	        reject('Could not Update User: ' + userId + '. ERROR = ' + error);
	      });
	    });
	  };

	  var User = db.model('User', _userSchema2.default);
	  return User;
	};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var Schema = __webpack_require__(10).Schema;

	var ObjectId = exports.ObjectId = Schema.Types.ObjectId;
	var userSchema = new Schema({
	  error: {
	    hard: {
	      type: Boolean,
	      default: false
	    },
	    soft: {
	      type: Boolean,
	      default: false
	    },
	    message: {
	      type: String,
	      default: ''
	    }
	  },
	  name: {
	    first: { type: String },
	    last: { type: String },
	    display: { type: String }
	  },
	  pictures: {
	    small: { type: String },
	    large: { type: String },
	    default: {
	      type: String,
	      default: '/images/default-user.png'
	    }
	  },
	  authentication: {
	    signedUp: { type: Date },
	    password: { type: String },
	    createdAt: { type: Date },
	    totalLogins: { type: Number },
	    logins: [{
	      date: { type: Date, default: new Date() },
	      device: { type: String, default: 'computer' }
	    }],
	    ageVerified: { type: Boolean, default: false },
	    auth0Identities: [{
	      provider: { type: String },
	      user_id: { type: String },
	      connection: { type: String },
	      isSocial: { type: Boolean }
	    }]
	  },
	  contactInfo: {
	    email: { type: String },
	    phone: { type: String },
	    locale: { type: String },
	    timezone: { type: Number },
	    location: {
	      ipAddress: { type: String },
	      lat: { type: String },
	      long: { type: String },
	      country: { type: String }
	    },
	    devices: [{
	      hardware: { type: String },
	      os: { type: String }
	    }],
	    socialNetworks: [{
	      name: { type: String },
	      link: { type: String }
	    }]
	  },
	  shopping: {
	    cart: [{
	      qty: { type: Number },
	      productId: [{ type: ObjectId, ref: 'Product' }]
	    }],
	    transactions: [{ type: ObjectId, ref: 'Transaction' }]
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
	    bio: { type: String },
	    gender: { type: String }
	  },
	  marketHero: {
	    tags: [{
	      name: { type: String },
	      date: { type: Date }
	    }]
	  },
	  socialProfileBlob: {
	    line: { type: String },
	    facebook: { type: String },
	    google: { type: String },
	    twitter: { type: String },
	    linkedin: { type: String }
	  }
	}, {
	  bufferCommands: true
	});
	exports.default = userSchema;

/***/ }),
/* 19 */
/***/ (function(module, exports) {

	module.exports = require("dotenv");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

	module.exports = require("babel-polyfill");

/***/ })
/******/ ])));