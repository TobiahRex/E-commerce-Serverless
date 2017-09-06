/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */
!(function() {
  'use strict';
  function t(t, e) {
    return (e = { exports: {} }), t(e, e.exports), e.exports;
  }
  window.tram = (function(t) {
    function e(t, e) {
      return new I.Bare().init(t, e);
    }
    function n(t) {
      return t.replace(/[A-Z]/g, function(t) {
        return '-' + t.toLowerCase();
      });
    }
    function i(t) {
      var e = parseInt(t.slice(1), 16);
      return [(e >> 16) & 255, (e >> 8) & 255, 255 & e];
    }
    function r(t, e, n) {
      return '#' + ((1 << 24) | (t << 16) | (e << 8) | n).toString(16).slice(1);
    }
    function o() {}
    function a(t, e) {
      c('Type warning: Expected: [' + t + '] Got: [' + typeof e + '] ' + e);
    }
    function s(t, e, n) {
      c('Units do not match [' + t + ']: ' + e + ', ' + n);
    }
    function u(t, e, n) {
      if ((void 0 !== e && (n = e), void 0 === t)) return n;
      var i = n;
      return J.test(t) || !K.test(t)
        ? (i = parseInt(t, 10))
        : K.test(t) && (i = 1e3 * parseFloat(t)), 0 > i && (i = 0), i === i ? i : n;
    }
    function c(t) {
      Y.debug && window && window.console.warn(t);
    }
    function l(t) {
      for (var e = -1, n = t ? t.length : 0, i = []; ++e < n; ) {
        var r = t[e];
        r && i.push(r);
      }
      return i;
    }
    var h = (function(t, e, n) {
      function i(t) {
        return 'object' == typeof t;
      }
      function r(t) {
        return 'function' == typeof t;
      }
      function o() {}
      function a(s, u) {
        function c() {
          var t = new l();
          return r(t.init) && t.init.apply(t, arguments), t;
        }
        function l() {}
        u === n && ((u = s), (s = Object)), (c.Bare = l);
        var h, f = (o[t] = s[t]), d = (l[t] = c[t] = new o());
        return (d.constructor = c), (c.mixin = function(e) {
          return (l[t] = c[t] = a(c, e)[t]), c;
        }), (c.open = function(t) {
          if (((h = {}), r(t) ? (h = t.call(c, d, f, c, s)) : i(t) && (h = t), i(h)))
            for (var n in h)
              e.call(h, n) && (d[n] = h[n]);
          return r(d.init) || (d.init = s), c;
        }), c.open(u);
      }
      return a;
    })('prototype', {}.hasOwnProperty),
      f = {
        ease: [
          'ease',
          function(t, e, n, i) {
            var r = (t /= i) * t, o = r * t;
            return e + n * (-2.75 * o * r + 11 * r * r + -15.5 * o + 8 * r + 0.25 * t);
          },
        ],
        'ease-in': [
          'ease-in',
          function(t, e, n, i) {
            var r = (t /= i) * t, o = r * t;
            return e + n * (-1 * o * r + 3 * r * r + -3 * o + 2 * r);
          },
        ],
        'ease-out': [
          'ease-out',
          function(t, e, n, i) {
            var r = (t /= i) * t, o = r * t;
            return e + n * (0.3 * o * r + -1.6 * r * r + 2.2 * o + -1.8 * r + 1.9 * t);
          },
        ],
        'ease-in-out': [
          'ease-in-out',
          function(t, e, n, i) {
            var r = (t /= i) * t, o = r * t;
            return e + n * (2 * o * r + -5 * r * r + 2 * o + 2 * r);
          },
        ],
        linear: [
          'linear',
          function(t, e, n, i) {
            return n * t / i + e;
          },
        ],
        'ease-in-quad': [
          'cubic-bezier(0.550, 0.085, 0.680, 0.530)',
          function(t, e, n, i) {
            return n * (t /= i) * t + e;
          },
        ],
        'ease-out-quad': [
          'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
          function(t, e, n, i) {
            return -n * (t /= i) * (t - 2) + e;
          },
        ],
        'ease-in-out-quad': [
          'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
          function(t, e, n, i) {
            return (t /= i / 2) < 1 ? n / 2 * t * t + e : -n / 2 * (--t * (t - 2) - 1) + e;
          },
        ],
        'ease-in-cubic': [
          'cubic-bezier(0.550, 0.055, 0.675, 0.190)',
          function(t, e, n, i) {
            return n * (t /= i) * t * t + e;
          },
        ],
        'ease-out-cubic': [
          'cubic-bezier(0.215, 0.610, 0.355, 1)',
          function(t, e, n, i) {
            return n * ((t = t / i - 1) * t * t + 1) + e;
          },
        ],
        'ease-in-out-cubic': [
          'cubic-bezier(0.645, 0.045, 0.355, 1)',
          function(t, e, n, i) {
            return (t /= i / 2) < 1 ? n / 2 * t * t * t + e : n / 2 * ((t -= 2) * t * t + 2) + e;
          },
        ],
        'ease-in-quart': [
          'cubic-bezier(0.895, 0.030, 0.685, 0.220)',
          function(t, e, n, i) {
            return n * (t /= i) * t * t * t + e;
          },
        ],
        'ease-out-quart': [
          'cubic-bezier(0.165, 0.840, 0.440, 1)',
          function(t, e, n, i) {
            return -n * ((t = t / i - 1) * t * t * t - 1) + e;
          },
        ],
        'ease-in-out-quart': [
          'cubic-bezier(0.770, 0, 0.175, 1)',
          function(t, e, n, i) {
            return (t /= i / 2) < 1
              ? n / 2 * t * t * t * t + e
              : -n / 2 * ((t -= 2) * t * t * t - 2) + e;
          },
        ],
        'ease-in-quint': [
          'cubic-bezier(0.755, 0.050, 0.855, 0.060)',
          function(t, e, n, i) {
            return n * (t /= i) * t * t * t * t + e;
          },
        ],
        'ease-out-quint': [
          'cubic-bezier(0.230, 1, 0.320, 1)',
          function(t, e, n, i) {
            return n * ((t = t / i - 1) * t * t * t * t + 1) + e;
          },
        ],
        'ease-in-out-quint': [
          'cubic-bezier(0.860, 0, 0.070, 1)',
          function(t, e, n, i) {
            return (t /= i / 2) < 1
              ? n / 2 * t * t * t * t * t + e
              : n / 2 * ((t -= 2) * t * t * t * t + 2) + e;
          },
        ],
        'ease-in-sine': [
          'cubic-bezier(0.470, 0, 0.745, 0.715)',
          function(t, e, n, i) {
            return -n * Math.cos(t / i * (Math.PI / 2)) + n + e;
          },
        ],
        'ease-out-sine': [
          'cubic-bezier(0.390, 0.575, 0.565, 1)',
          function(t, e, n, i) {
            return n * Math.sin(t / i * (Math.PI / 2)) + e;
          },
        ],
        'ease-in-out-sine': [
          'cubic-bezier(0.445, 0.050, 0.550, 0.950)',
          function(t, e, n, i) {
            return -n / 2 * (Math.cos(Math.PI * t / i) - 1) + e;
          },
        ],
        'ease-in-expo': [
          'cubic-bezier(0.950, 0.050, 0.795, 0.035)',
          function(t, e, n, i) {
            return 0 === t ? e : n * Math.pow(2, 10 * (t / i - 1)) + e;
          },
        ],
        'ease-out-expo': [
          'cubic-bezier(0.190, 1, 0.220, 1)',
          function(t, e, n, i) {
            return t === i ? e + n : n * (1 - Math.pow(2, -10 * t / i)) + e;
          },
        ],
        'ease-in-out-expo': [
          'cubic-bezier(1, 0, 0, 1)',
          function(t, e, n, i) {
            return 0 === t
              ? e
              : t === i
                  ? e + n
                  : (t /= i / 2) < 1
                      ? n / 2 * Math.pow(2, 10 * (t - 1)) + e
                      : n / 2 * (2 - Math.pow(2, -10 * --t)) + e;
          },
        ],
        'ease-in-circ': [
          'cubic-bezier(0.600, 0.040, 0.980, 0.335)',
          function(t, e, n, i) {
            return -n * (Math.sqrt(1 - (t /= i) * t) - 1) + e;
          },
        ],
        'ease-out-circ': [
          'cubic-bezier(0.075, 0.820, 0.165, 1)',
          function(t, e, n, i) {
            return n * Math.sqrt(1 - (t = t / i - 1) * t) + e;
          },
        ],
        'ease-in-out-circ': [
          'cubic-bezier(0.785, 0.135, 0.150, 0.860)',
          function(t, e, n, i) {
            return (t /= i / 2) < 1
              ? -n / 2 * (Math.sqrt(1 - t * t) - 1) + e
              : n / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + e;
          },
        ],
        'ease-in-back': [
          'cubic-bezier(0.600, -0.280, 0.735, 0.045)',
          function(t, e, n, i, r) {
            return void 0 === r && (r = 1.70158), n * (t /= i) * t * ((r + 1) * t - r) + e;
          },
        ],
        'ease-out-back': [
          'cubic-bezier(0.175, 0.885, 0.320, 1.275)',
          function(t, e, n, i, r) {
            return void 0 === r && (r = 1.70158), n *
              ((t = t / i - 1) * t * ((r + 1) * t + r) + 1) +
              e;
          },
        ],
        'ease-in-out-back': [
          'cubic-bezier(0.680, -0.550, 0.265, 1.550)',
          function(t, e, n, i, r) {
            return void 0 === r && (r = 1.70158), (t /= i / 2) < 1
              ? n / 2 * t * t * ((1 + (r *= 1.525)) * t - r) + e
              : n / 2 * ((t -= 2) * t * ((1 + (r *= 1.525)) * t + r) + 2) + e;
          },
        ],
      },
      d = {
        'ease-in-back': 'cubic-bezier(0.600, 0, 0.735, 0.045)',
        'ease-out-back': 'cubic-bezier(0.175, 0.885, 0.320, 1)',
        'ease-in-out-back': 'cubic-bezier(0.680, 0, 0.265, 1)',
      },
      p = document,
      v = window,
      w = 'bkwld-tram',
      m = /[\-\.0-9]/g,
      g = /[A-Z]/,
      b = 'number',
      y = /^(rgb|#)/,
      x = /(em|cm|mm|in|pt|pc|px)$/,
      _ = /(em|cm|mm|in|pt|pc|px|%)$/,
      k = /(deg|rad|turn)$/,
      z = 'unitless',
      E = /(all|none) 0s ease 0s/,
      T = /^(width|height)$/,
      O = ' ',
      q = p.createElement('a'),
      A = ['Webkit', 'Moz', 'O', 'ms'],
      j = ['-webkit-', '-moz-', '-o-', '-ms-'],
      $ = function(t) {
        if (t in q.style) return { dom: t, css: t };
        var e, n, i = '', r = t.split('-');
        for (e = 0; e < r.length; e++)
          i += r[e].charAt(0).toUpperCase() + r[e].slice(1);
        for (e = 0; e < A.length; e++)
          if ((n = A[e] + i) in q.style) return { dom: n, css: j[e] + t };
      },
      M = (e.support = {
        bind: Function.prototype.bind,
        transform: $('transform'),
        transition: $('transition'),
        backface: $('backface-visibility'),
        timing: $('transition-timing-function'),
      });
    if (M.transition) {
      var B = M.timing.dom;
      if (((q.style[B] = f['ease-in-back'][0]), !q.style[B])) for (var R in d) f[R][0] = d[R];
    }
    var L = (e.frame = (function() {
      var t =
        v.requestAnimationFrame ||
        v.webkitRequestAnimationFrame ||
        v.mozRequestAnimationFrame ||
        v.oRequestAnimationFrame ||
        v.msRequestAnimationFrame;
      return t && M.bind
        ? t.bind(v)
        : function(t) {
            v.setTimeout(t, 16);
          };
    })()),
      S = (e.now = (function() {
        var t = v.performance, e = t && (t.now || t.webkitNow || t.msNow || t.mozNow);
        return e && M.bind
          ? e.bind(t)
          : Date.now ||
              function() {
                return +new Date();
              };
      })()),
      D = h(function(e) {
        function i(t, e) {
          var n = l(('' + t).split(O)), i = n[0];
          e = e || {};
          var r = V[i];
          if (!r) return c('Unsupported property: ' + i);
          if (!e.weak || !this.props[i]) {
            var o = r[0], a = this.props[i];
            return a || (a = this.props[i] = new o.Bare()), a.init(this.$el, n, r, e), a;
          }
        }
        function r(t, e, n) {
          if (t) {
            var r = typeof t;
            if (
              (e ||
                (this.timer && this.timer.destroy(), (this.queue = [
                ]), (this.active = !1)), 'number' == r && e)
            )
              return (this.timer = new U({
                duration: t,
                context: this,
                complete: o,
              })), void (this.active = !0);
            if ('string' == r && e) {
              switch (t) {
                case 'hide':
                  s.call(this);
                  break;
                case 'stop':
                  a.call(this);
                  break;
                case 'redraw':
                  h.call(this);
                  break;
                default:
                  i.call(this, t, n && n[1]);
              }
              return o.call(this);
            }
            if ('function' == r) return void t.call(this, this);
            if ('object' == r) {
              var c = 0;
              d.call(
                this,
                t,
                function(t, e) {
                  t.span > c && (c = t.span), t.stop(), t.animate(e);
                },
                function(t) {
                  'wait' in t && (c = u(t.wait, 0));
                },
              ), f.call(this), c > 0 &&
                ((this.timer = new U({ duration: c, context: this })), (this.active = !0), e &&
                  (this.timer.complete = o));
              var l = this, p = !1, v = {};
              L(function() {
                d.call(l, t, function(t) {
                  t.active && ((p = !0), (v[t.name] = t.nextStyle));
                }), p && l.$el.css(v);
              });
            }
          }
        }
        function o() {
          if ((this.timer && this.timer.destroy(), (this.active = !1), this.queue.length)) {
            var t = this.queue.shift();
            r.call(this, t.options, !0, t.args);
          }
        }
        function a(t) {
          this.timer && this.timer.destroy(), (this.queue = []), (this.active = !1);
          var e;
          'string' == typeof t
            ? ((e = {}), (e[t] = 1))
            : (e = 'object' == typeof t && null != t
                ? t
                : this.props), d.call(this, e, p), f.call(this);
        }
        function s() {
          a.call(this), (this.el.style.display = 'none');
        }
        function h() {
          this.el.offsetHeight;
        }
        function f() {
          var t, e, n = [];
          this.upstream && n.push(this.upstream);
          for (t in this.props) (e = this.props[t]).active && n.push(e.string);
          (n = n.join(
            ',',
          )), this.style !== n && ((this.style = n), (this.el.style[M.transition.dom] = n));
        }
        function d(t, e, r) {
          var o, a, s, u, c = e !== p, l = {};
          for (o in t) (s =
              t[
                o
              ]), o in Q ? (l.transform || (l.transform = {}), (l.transform[o] = s)) : (g.test(o) && (o = n(o)), o in V ? (l[o] = s) : (u || (u = {}), (u[o] = s)));
          for (o in l) {
            if (((s = l[o]), !(a = this.props[o]))) {
              if (!c) continue;
              a = i.call(this, o);
            }
            e.call(this, a, s);
          }
          r && u && r.call(this, u);
        }
        function p(t) {
          t.stop();
        }
        function v(t, e) {
          t.set(e);
        }
        function m(t) {
          this.$el.css(t);
        }
        function b(t, n) {
          e[t] = function() {
            return this.children
              ? y.call(this, n, arguments)
              : (this.el && n.apply(this, arguments), this);
          };
        }
        function y(t, e) {
          var n, i = this.children.length;
          for (n = 0; i > n; n++) t.apply(this.children[n], e);
          return this;
        }
        (e.init = function(e) {
          if (
            ((this.$el = t(e)), (this.el = this.$el[0]), (this.props = {}), (this.queue = [
            ]), (this.style = ''), (this.active = !1), Y.keepInherited && !Y.fallback)
          ) {
            var n = Z(this.el, 'transition');
            n && !E.test(n) && (this.upstream = n);
          }
          M.backface && Y.hideBackface && G(this.el, M.backface.css, 'hidden');
        }), b('add', i), b('start', r), b('wait', function(t) {
          (t = u(
            t,
            0,
          )), this.active ? this.queue.push({ options: t }) : ((this.timer = new U({ duration: t, context: this, complete: o })), (this.active = !0));
        }), b('then', function(t) {
          return this.active
            ? (this.queue.push({ options: t, args: arguments }), void (this.timer.complete = o))
            : c('No active transition timer. Use start() or wait() before then().');
        }), b('next', o), b('stop', a), b('set', function(t) {
          a.call(this, t), d.call(this, t, v, m);
        }), b('show', function(t) {
          'string' != typeof t && (t = 'block'), (this.el.style.display = t);
        }), b('hide', s), b('redraw', h), b('destroy', function() {
          a.call(this), t.removeData(this.el, w), (this.$el = this.el = null);
        });
      }),
      I = h(D, function(e) {
        function n(e, n) {
          var i = t.data(e, w) || t.data(e, w, new D.Bare());
          return i.el || i.init(e), n ? i.start(n) : i;
        }
        e.init = function(e, i) {
          var r = t(e);
          if (!r.length) return this;
          if (1 === r.length) return n(r[0], i);
          var o = [];
          return r.each(function(t, e) {
            o.push(n(e, i));
          }), (this.children = o), this;
        };
      }),
      C = h(function(t) {
        function e() {
          var t = this.get();
          this.update('auto');
          var e = this.get();
          return this.update(t), e;
        }
        function n(t, e, n) {
          return void 0 !== e && (n = e), t in f ? t : n;
        }
        function i(t) {
          var e = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(t);
          return (e ? r(e[1], e[2], e[3]) : t).replace(/#(\w)(\w)(\w)$/, '#$1$1$2$2$3$3');
        }
        var o = { duration: 500, ease: 'ease', delay: 0 };
        (t.init = function(t, e, i, r) {
          (this.$el = t), (this.el = t[0]);
          var a = e[0];
          i[2] && (a = i[2]), W[a] && (a = W[a]), (this.name = a), (this.type =
            i[1]), (this.duration = u(e[1], this.duration, o.duration)), (this.ease = n(
            e[2],
            this.ease,
            o.ease,
          )), (this.delay = u(e[3], this.delay, o.delay)), (this.span =
            this.duration +
            this.delay), (this.active = !1), (this.nextStyle = null), (this.auto = T.test(
            this.name,
          )), (this.unit = r.unit || this.unit || Y.defaultUnit), (this.angle =
            r.angle || this.angle || Y.defaultAngle), Y.fallback || r.fallback
            ? (this.animate = this.fallback)
            : ((this.animate = this.transition), (this.string =
                this.name +
                O +
                this.duration +
                'ms' +
                ('ease' != this.ease ? O + f[this.ease][0] : '') +
                (this.delay ? O + this.delay + 'ms' : '')));
        }), (t.set = function(t) {
          (t = this.convert(t, this.type)), this.update(t), this.redraw();
        }), (t.transition = function(t) {
          (this.active = !0), (t = this.convert(t, this.type)), this.auto &&
            ('auto' == this.el.style[this.name] &&
              (this.update(this.get()), this.redraw()), 'auto' == t &&
              (t = e.call(this))), (this.nextStyle = t);
        }), (t.fallback = function(t) {
          var n = this.el.style[this.name] || this.convert(this.get(), this.type);
          (t = this.convert(t, this.type)), this.auto &&
            ('auto' == n && (n = this.convert(this.get(), this.type)), 'auto' == t &&
              (t = e.call(this))), (this.tween = new H({
            from: n,
            to: t,
            duration: this.duration,
            delay: this.delay,
            ease: this.ease,
            update: this.update,
            context: this,
          }));
        }), (t.get = function() {
          return Z(this.el, this.name);
        }), (t.update = function(t) {
          G(this.el, this.name, t);
        }), (t.stop = function() {
          (this.active || this.nextStyle) &&
            ((this.active = !1), (this.nextStyle = null), G(this.el, this.name, this.get()));
          var t = this.tween;
          t && t.context && t.destroy();
        }), (t.convert = function(t, e) {
          if ('auto' == t && this.auto) return t;
          var n, r = 'number' == typeof t, o = 'string' == typeof t;
          switch (e) {
            case b:
              if (r) return t;
              if (o && '' === t.replace(m, '')) return +t;
              n = 'number(unitless)';
              break;
            case y:
              if (o) {
                if ('' === t && this.original) return this.original;
                if (e.test(t)) return '#' == t.charAt(0) && 7 == t.length ? t : i(t);
              }
              n = 'hex or rgb string';
              break;
            case x:
              if (r) return t + this.unit;
              if (o && e.test(t)) return t;
              n = 'number(px) or string(unit)';
              break;
            case _:
              if (r) return t + this.unit;
              if (o && e.test(t)) return t;
              n = 'number(px) or string(unit or %)';
              break;
            case k:
              if (r) return t + this.angle;
              if (o && e.test(t)) return t;
              n = 'number(deg) or string(angle)';
              break;
            case z:
              if (r) return t;
              if (o && _.test(t)) return t;
              n = 'number(unitless) or string(unit or %)';
          }
          return a(n, t), t;
        }), (t.redraw = function() {
          this.el.offsetHeight;
        });
      }),
      F = h(C, function(t, e) {
        t.init = function() {
          e.init.apply(this, arguments), this.original ||
            (this.original = this.convert(this.get(), y));
        };
      }),
      N = h(C, function(t, e) {
        (t.init = function() {
          e.init.apply(this, arguments), (this.animate = this.fallback);
        }), (t.get = function() {
          return this.$el[this.name]();
        }), (t.update = function(t) {
          this.$el[this.name](t);
        });
      }),
      P = h(C, function(t, e) {
        function n(t, e) {
          var n, i, r, o, a;
          for (n in t) (o =
              Q[
                n
              ]), (r = o[0]), (i = o[1] || n), (a = this.convert(t[n], r)), e.call(this, i, a, r);
        }
        (t.init = function() {
          e.init.apply(this, arguments), this.current ||
            ((this.current = {}), Q.perspective &&
              Y.perspective &&
              ((this.current.perspective = Y.perspective), G(
                this.el,
                this.name,
                this.style(this.current),
              ), this.redraw()));
        }), (t.set = function(t) {
          n.call(this, t, function(t, e) {
            this.current[t] = e;
          }), G(this.el, this.name, this.style(this.current)), this.redraw();
        }), (t.transition = function(t) {
          var e = this.values(t);
          this.tween = new X({
            current: this.current,
            values: e,
            duration: this.duration,
            delay: this.delay,
            ease: this.ease,
          });
          var n, i = {};
          for (n in this.current)
            i[n] = n in e ? e[n] : this.current[n];
          (this.active = !0), (this.nextStyle = this.style(i));
        }), (t.fallback = function(t) {
          var e = this.values(t);
          this.tween = new X({
            current: this.current,
            values: e,
            duration: this.duration,
            delay: this.delay,
            ease: this.ease,
            update: this.update,
            context: this,
          });
        }), (t.update = function() {
          G(this.el, this.name, this.style(this.current));
        }), (t.style = function(t) {
          var e, n = '';
          for (e in t)
            n += e + '(' + t[e] + ') ';
          return n;
        }), (t.values = function(t) {
          var e, i = {};
          return n.call(this, t, function(t, n, r) {
            (i[
              t
            ] = n), void 0 === this.current[t] && ((e = 0), ~t.indexOf('scale') && (e = 1), (this.current[t] = this.convert(e, r)));
          }), i;
        });
      }),
      H = h(function(e) {
        function n(t) {
          1 === d.push(t) && L(a);
        }
        function a() {
          var t, e, n, i = d.length;
          if (i) for (L(a), (e = S()), (t = i); t--; ) (n = d[t]) && n.render(e);
        }
        function u(e) {
          var n, i = t.inArray(e, d);
          i >= 0 && ((n = d.slice(i + 1)), (d.length = i), n.length && (d = d.concat(n)));
        }
        function c(t) {
          return Math.round(t * p) / p;
        }
        function l(t, e, n) {
          return r(t[0] + n * (e[0] - t[0]), t[1] + n * (e[1] - t[1]), t[2] + n * (e[2] - t[2]));
        }
        var h = { ease: f.ease[1], from: 0, to: 1 };
        (e.init = function(t) {
          (this.duration = t.duration || 0), (this.delay = t.delay || 0);
          var e = t.ease || h.ease;
          f[e] && (e = f[e][1]), 'function' != typeof e &&
            (e = h.ease), (this.ease = e), (this.update = t.update || o), (this.complete =
            t.complete || o), (this.context = t.context || this), (this.name = t.name);
          var n = t.from, i = t.to;
          void 0 === n && (n = h.from), void 0 === i && (i = h.to), (this.unit =
            t.unit || ''), 'number' == typeof n && 'number' == typeof i
            ? ((this.begin = n), (this.change = i - n))
            : this.format(i, n), (this.value = this.begin + this.unit), (this.start = S()), !1 !==
            t.autoplay && this.play();
        }), (e.play = function() {
          this.active || (this.start || (this.start = S()), (this.active = !0), n(this));
        }), (e.stop = function() {
          this.active && ((this.active = !1), u(this));
        }), (e.render = function(t) {
          var e, n = t - this.start;
          if (this.delay) {
            if (n <= this.delay) return;
            n -= this.delay;
          }
          if (n < this.duration) {
            var i = this.ease(n, 0, 1, this.duration);
            return (e = this.startRGB
              ? l(this.startRGB, this.endRGB, i)
              : c(this.begin + i * this.change)), (this.value =
              e + this.unit), void this.update.call(this.context, this.value);
          }
          (e = this.endHex || this.begin + this.change), (this.value =
            e + this.unit), this.update.call(this.context, this.value), this.complete.call(
            this.context,
          ), this.destroy();
        }), (e.format = function(t, e) {
          if (((e += ''), '#' == (t += '').charAt(0)))
            return (this.startRGB = i(e)), (this.endRGB = i(
              t,
            )), (this.endHex = t), (this.begin = 0), void (this.change = 1);
          if (!this.unit) {
            var n = e.replace(m, '');
            n !== t.replace(m, '') && s('tween', e, t), (this.unit = n);
          }
          (e = parseFloat(e)), (t = parseFloat(t)), (this.begin = this.value = e), (this.change =
            t - e);
        }), (e.destroy = function() {
          this.stop(), (this.context = null), (this.ease = this.update = this.complete = o);
        });
        var d = [], p = 1e3;
      }),
      U = h(H, function(t) {
        (t.init = function(t) {
          (this.duration = t.duration || 0), (this.complete = t.complete || o), (this.context =
            t.context), this.play();
        }), (t.render = function(t) {
          t - this.start < this.duration || (this.complete.call(this.context), this.destroy());
        });
      }),
      X = h(H, function(t, e) {
        (t.init = function(t) {
          (this.context = t.context), (this.update = t.update), (this.tweens = []), (this.current =
            t.current);
          var e, n;
          for (e in t.values)
            (n = t.values[e]), this.current[e] !== n &&
              this.tweens.push(
                new H({
                  name: e,
                  from: this.current[e],
                  to: n,
                  duration: t.duration,
                  delay: t.delay,
                  ease: t.ease,
                  autoplay: !1,
                }),
              );
          this.play();
        }), (t.render = function(t) {
          var e, n, i = !1;
          for (e = this.tweens.length; e--; )
            (n = this.tweens[e]).context &&
              (n.render(t), (this.current[n.name] = n.value), (i = !0));
          return i ? void (this.update && this.update.call(this.context)) : this.destroy();
        }), (t.destroy = function() {
          if ((e.destroy.call(this), this.tweens)) {
            var t;
            for (t = this.tweens.length; t--; )
              this.tweens[t].destroy();
            (this.tweens = null), (this.current = null);
          }
        });
      }),
      Y = (e.config = {
        debug: !1,
        defaultUnit: 'px',
        defaultAngle: 'deg',
        keepInherited: !1,
        hideBackface: !1,
        perspective: '',
        fallback: !M.transition,
        agentTests: [],
      });
    (e.fallback = function(t) {
      if (!M.transition) return (Y.fallback = !0);
      Y.agentTests.push('(' + t + ')');
      var e = new RegExp(Y.agentTests.join('|'), 'i');
      Y.fallback = e.test(navigator.userAgent);
    }), e.fallback('6.0.[2-5] Safari'), (e.tween = function(t) {
      return new H(t);
    }), (e.delay = function(t, e, n) {
      return new U({ complete: e, duration: t, context: n });
    }), (t.fn.tram = function(t) {
      return e.call(null, this, t);
    });
    var G = t.style,
      Z = t.css,
      W = { transform: M.transform && M.transform.css },
      V = {
        color: [F, y],
        background: [F, y, 'background-color'],
        'outline-color': [F, y],
        'border-color': [F, y],
        'border-top-color': [F, y],
        'border-right-color': [F, y],
        'border-bottom-color': [F, y],
        'border-left-color': [F, y],
        'border-width': [C, x],
        'border-top-width': [C, x],
        'border-right-width': [C, x],
        'border-bottom-width': [C, x],
        'border-left-width': [C, x],
        'border-spacing': [C, x],
        'letter-spacing': [C, x],
        margin: [C, x],
        'margin-top': [C, x],
        'margin-right': [C, x],
        'margin-bottom': [C, x],
        'margin-left': [C, x],
        padding: [C, x],
        'padding-top': [C, x],
        'padding-right': [C, x],
        'padding-bottom': [C, x],
        'padding-left': [C, x],
        'outline-width': [C, x],
        opacity: [C, b],
        top: [C, _],
        right: [C, _],
        bottom: [C, _],
        left: [C, _],
        'font-size': [C, _],
        'text-indent': [C, _],
        'word-spacing': [C, _],
        width: [C, _],
        'min-width': [C, _],
        'max-width': [C, _],
        height: [C, _],
        'min-height': [C, _],
        'max-height': [C, _],
        'line-height': [C, z],
        'scroll-top': [N, b, 'scrollTop'],
        'scroll-left': [N, b, 'scrollLeft'],
      },
      Q = {};
    M.transform &&
      ((V.transform = [P]), (Q = {
        x: [_, 'translateX'],
        y: [_, 'translateY'],
        rotate: [k],
        rotateX: [k],
        rotateY: [k],
        scale: [b],
        scaleX: [b],
        scaleY: [b],
        skew: [k],
        skewX: [k],
        skewY: [k],
      })), M.transform &&
      M.backface &&
      ((Q.z = [_, 'translateZ']), (Q.rotateZ = [k]), (Q.scaleZ = [b]), (Q.perspective = [x]));
    var J = /ms/, K = /s|\./;
    return (t.tram = e);
  })(window.jQuery);
  var e = {},
    n = t(function(t) {
      var n = window.$,
        i =
          e &&
          n.tram; /*!
   * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
   * _.each
   * _.map
   * _.find
   * _.filter
   * _.any
   * _.contains
   * _.delay
   * _.defer
   * _.throttle (webflow)
   * _.debounce
   * _.keys
   * _.has
   * _.now
   *
   * http://underscorejs.org
   * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   * Underscore may be freely distributed under the MIT license.
   * @license MIT
   */
      t.exports = (function() {
        var t = {};
        t.VERSION = '1.6.0-Webflow';
        var e = {},
          n = Array.prototype,
          r = Object.prototype,
          o = Function.prototype,
          a = (n.push, n.slice),
          s = (n.concat, r.toString, r.hasOwnProperty),
          u = n.forEach,
          c = n.map,
          l = (n.reduce, n.reduceRight, n.filter),
          h = (n.every, n.some),
          f = n.indexOf,
          d = (n.lastIndexOf, Array.isArray, Object.keys),
          p = (o.bind, (t.each = t.forEach = function(n, i, r) {
            if (null == n) return n;
            if (u && n.forEach === u) n.forEach(i, r);
            else if (n.length === +n.length) {
              for (var o = 0, a = n.length; o < a; o++)
                if (i.call(r, n[o], o, n) === e) return;
            } else
              for (var s = t.keys(n), o = 0, a = s.length; o < a; o++)
                if (i.call(r, n[s[o]], s[o], n) === e) return;
            return n;
          }));
        (t.map = t.collect = function(t, e, n) {
          var i = [];
          return null == t
            ? i
            : c && t.map === c
                ? t.map(e, n)
                : (p(t, function(t, r, o) {
                    i.push(e.call(n, t, r, o));
                  }), i);
        }), (t.find = t.detect = function(t, e, n) {
          var i;
          return v(t, function(t, r, o) {
            if (e.call(n, t, r, o)) return (i = t), !0;
          }), i;
        }), (t.filter = t.select = function(t, e, n) {
          var i = [];
          return null == t
            ? i
            : l && t.filter === l
                ? t.filter(e, n)
                : (p(t, function(t, r, o) {
                    e.call(n, t, r, o) && i.push(t);
                  }), i);
        });
        var v = (t.some = t.any = function(n, i, r) {
          i || (i = t.identity);
          var o = !1;
          return null == n
            ? o
            : h && n.some === h
                ? n.some(i, r)
                : (p(n, function(t, n, a) {
                    if (o || (o = i.call(r, t, n, a))) return e;
                  }), !!o);
        });
        (t.contains = t.include = function(t, e) {
          return (
            null != t &&
            (f && t.indexOf === f
              ? -1 != t.indexOf(e)
              : v(t, function(t) {
                  return t === e;
                }))
          );
        }), (t.delay = function(t, e) {
          var n = a.call(arguments, 2);
          return setTimeout(function() {
            return t.apply(null, n);
          }, e);
        }), (t.defer = function(e) {
          return t.delay.apply(t, [e, 1].concat(a.call(arguments, 1)));
        }), (t.throttle = function(t) {
          var e, n, r;
          return function() {
            e ||
              ((e = !0), (n = arguments), (r = this), i.frame(function() {
                (e = !1), t.apply(r, n);
              }));
          };
        }), (t.debounce = function(e, n, i) {
          var r,
            o,
            a,
            s,
            u,
            c = function() {
              var l = t.now() - s;
              l < n
                ? (r = setTimeout(c, n - l))
                : ((r = null), i || ((u = e.apply(a, o)), (a = o = null)));
            };
          return function() {
            (a = this), (o = arguments), (s = t.now());
            var l = i && !r;
            return r || (r = setTimeout(c, n)), l && ((u = e.apply(a, o)), (a = o = null)), u;
          };
        }), (t.defaults = function(e) {
          if (!t.isObject(e)) return e;
          for (var n = 1, i = arguments.length; n < i; n++) {
            var r = arguments[n];
            for (var o in r)
              void 0 === e[o] && (e[o] = r[o]);
          }
          return e;
        }), (t.keys = function(e) {
          if (!t.isObject(e)) return [];
          if (d) return d(e);
          var n = [];
          for (var i in e)
            t.has(e, i) && n.push(i);
          return n;
        }), (t.has = function(t, e) {
          return s.call(t, e);
        }), (t.isObject = function(t) {
          return t === Object(t);
        }), (t.now =
          Date.now ||
          function() {
            return new Date().getTime();
          }), (t.templateSettings = {
          evaluate: /<%([\s\S]+?)%>/g,
          interpolate: /<%=([\s\S]+?)%>/g,
          escape: /<%-([\s\S]+?)%>/g,
        });
        var w = /(.)^/,
          m = { "'": "'", '\\': '\\', '\r': 'r', '\n': 'n', '\u2028': 'u2028', '\u2029': 'u2029' },
          g = /\\|'|\r|\n|\u2028|\u2029/g,
          b = function(t) {
            return '\\' + m[t];
          };
        return (t.template = function(e, n, i) {
          !n && i && (n = i), (n = t.defaults({}, n, t.templateSettings));
          var r = RegExp(
            [(n.escape || w).source, (n.interpolate || w).source, (n.evaluate || w).source].join(
              '|',
            ) + '|$',
            'g',
          ),
            o = 0,
            a = "__p+='";
          e.replace(r, function(t, n, i, r, s) {
            return (a += e
              .slice(o, s)
              .replace(
                g,
                b,
              )), (o = s + t.length), n ? (a += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'") : i ? (a += "'+\n((__t=(" + i + "))==null?'':__t)+\n'") : r && (a += "';\n" + r + "\n__p+='"), t;
          }), (a += "';\n"), n.variable || (a = 'with(obj||{}){\n' + a + '}\n'), (a =
            "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" +
            a +
            'return __p;\n');
          try {
            var s = new Function(n.variable || 'obj', '_', a);
          } catch (t) {
            throw ((t.source = a), t);
          }
          var u = function(e) {
            return s.call(this, e, t);
          },
            c = n.variable || 'obj';
          return (u.source = 'function(' + c + '){\n' + a + '}'), u;
        }), t;
      })();
    }),
    i = n && 'object' == typeof n && 'default' in n ? n.default : n,
    r = t(function(t) {
      function n(t) {
        h.env() &&
          (g(t.design) && w.on('__wf_design', t.design), g(t.preview) &&
            w.on(
              '__wf_preview',
              t.preview,
            )), g(t.destroy) && w.on('__wf_destroy', t.destroy), t.ready && g(t.ready) && r(t);
      }
      function r(t) {
        x ? t.ready() : b.contains(d, t.ready) || d.push(t.ready);
      }
      function o(t) {
        g(t.design) &&
          w.off(
            '__wf_design',
            t.design,
          ), g(t.preview) && w.off('__wf_preview', t.preview), g(t.destroy) && w.off('__wf_destroy', t.destroy), t.ready && g(t.ready) && a(t);
      }
      function a(t) {
        d = b.filter(d, function(e) {
          return e !== t.ready;
        });
      }
      function s(t, e) {
        var n = [], i = {};
        return (i.up = b.throttle(function(t) {
          b.each(n, function(e) {
            e(t);
          });
        })), t && e && t.on(e, i.up), (i.on = function(t) {
          'function' == typeof t && (b.contains(n, t) || n.push(t));
        }), (i.off = function(t) {
          n = arguments.length
            ? b.filter(n, function(e) {
                return e !== t;
              })
            : [];
        }), i;
      }
      function u(t) {
        g(t) && t();
      }
      function c() {
        (_ = !1), b.each(f, n);
      }
      function l() {
        j &&
          (j.reject(), w.off('load', j.resolve)), (j = new v.Deferred()), w.on('load', j.resolve);
      }
      var h = {},
        f = {},
        d = [],
        p = window.Webflow || [],
        v = window.jQuery,
        w = v(window),
        m = v(document),
        g = v.isFunction,
        b = (h._ = i),
        y = e && v.tram,
        x = !1,
        _ = !1;
      (y.config.hideBackface = !1), (y.config.keepInherited = !0), (h.define = function(t, e, i) {
        f[t] && o(f[t]);
        var r = (f[t] = e(v, b, i) || {});
        return n(r), r;
      }), (h.require = function(t) {
        return f[t];
      }), (h.push = function(t) {
        x ? g(t) && t() : p.push(t);
      }), (h.env = function(t) {
        var e = window.__wf_design, n = void 0 !== e;
        return t
          ? 'design' === t
              ? n && e
              : 'preview' === t
                  ? n && !e
                  : 'slug' === t
                      ? n && window.__wf_slug
                      : 'editor' === t
                          ? window.WebflowEditor
                          : 'test' === t
                              ? window.__wf_test
                              : 'frame' === t ? window !== window.top : void 0
          : n;
      });
      var k = navigator.userAgent.toLowerCase(),
        z = navigator.appVersion.toLowerCase(),
        E = (h.env.touch =
          'ontouchstart' in window ||
          (window.DocumentTouch && document instanceof window.DocumentTouch)),
        T = (h.env.chrome =
          /chrome/.test(k) &&
          /Google/.test(navigator.vendor) &&
          parseInt(z.match(/chrome\/(\d+)\./)[1], 10)),
        O = (h.env.ios = /(ipod|iphone|ipad)/.test(k));
      h.env.safari = /safari/.test(k) && !T && !O;
      var q;
      E &&
        m.on('touchstart mousedown', function(t) {
          q = t.target;
        }), (h.validClick = E
        ? function(t) {
            return t === q || v.contains(t, q);
          }
        : function() {
            return !0;
          });
      var A = 'resize.webflow orientationchange.webflow load.webflow';
      (h.resize = s(
        w,
        A,
      )), (h.scroll = s(w, 'scroll.webflow resize.webflow orientationchange.webflow load.webflow')), (h.redraw = s()), (h.location = function(
        t,
      ) {
        window.location = t;
      }), h.env() && (h.location = function() {}), (h.ready = function() {
        (x = !0), _ ? c() : b.each(d, u), b.each(p, u), h.resize.up();
      });
      var j;
      (h.load = function(t) {
        j.then(t);
      }), (h.destroy = function(t) {
        (t = t || {}), (_ = !0), w.triggerHandler('__wf_destroy'), null != t.domready &&
          (x = t.domready), b.each(f, o), h.resize.off(), h.scroll.off(), h.redraw.off(), (d = [
        ]), (p = []), 'pending' === j.state() && l();
      }), v(h.ready), l(), (t.exports = window.Webflow = h);
    }),
    o = r && 'object' == typeof r && 'default' in r ? r.default : r,
    a = (t(function(t) {
      var e = o;
      e.define(
        'brand',
        (t.exports = function(t) {
          function n() {
            var e = t('<a class="w-webflow-badge"></a>').attr(
              'href',
              'https://webflow.com?utm_campaign=brandjs',
            ),
              n = t('<img>')
                .attr(
                  'src',
                  'https://d1otoma47x30pg.cloudfront.net/img/webflow-badge-icon.60efbf6ec9.svg',
                )
                .css({ marginRight: '8px', width: '16px' }),
              i = t('<img>').attr(
                'src',
                'https://d1otoma47x30pg.cloudfront.net/img/webflow-badge-text.6faa6a38cd.svg',
              );
            return e.append(n, i), e[0];
          }
          function i() {
            var t = s.children(u), n = t.length && t.get(0) === r, i = e.env('editor');
            n ? i && t.remove() : (t.length && t.remove(), i || s.append(r));
          }
          var r,
            o = {},
            a = t('html'),
            s = t('body'),
            u = '.w-webflow-badge',
            c = window.location,
            l = /PhantomJS/i.test(navigator.userAgent);
          return (o.ready = function() {
            var t = a.attr('data-wf-status'), e = a.attr('data-wf-domain') || '';
            /\.webflow\.io$/i.test(e) && c.hostname !== e && (t = !0), t &&
              !l &&
              ((r = r || n()), i(), setTimeout(i, 500));
          }), o;
        }),
      );
    }), t(function(t) {
      function e(t, e) {
        var n = document.createEvent('CustomEvent');
        n.initCustomEvent(e, !0, !0, null), t.dispatchEvent(n);
      }
      var n = window.jQuery,
        i = {},
        r = [],
        o = {
          reset: function(t, e) {
            e.__wf_intro = null;
          },
          intro: function(t, r) {
            r.__wf_intro ||
              ((r.__wf_intro = !0), n(r).triggerHandler(i.types.INTRO), e(r, 'COMPONENT_ACTIVE'));
          },
          outro: function(t, r) {
            r.__wf_intro &&
              ((r.__wf_intro = null), n(r).triggerHandler(i.types.OUTRO), e(
                r,
                'COMPONENT_INACTIVE',
              ));
          },
        };
      (i.triggers = {
      }), (i.types = { INTRO: 'w-ix-intro.w-ix', OUTRO: 'w-ix-outro.w-ix' }), (i.init = function() {
        for (var t = r.length, e = 0; e < t; e++) {
          var a = r[e];
          a[0](0, a[1]);
        }
        (r = []), n.extend(i.triggers, o);
      }), (i.async = function() {
        for (var t in o) {
          var e = o[t];
          o.hasOwnProperty(t) &&
            (i.triggers[t] = function(t, n) {
              r.push([e, n]);
            });
        }
      }), i.async(), (t.exports = i);
    })),
    s = a && 'object' == typeof a && 'default' in a ? a.default : a;
  t(function(t) {
    var e = o, n = s;
    e.define(
      'ix',
      (t.exports = function(t, i) {
        function r(t) {
          t &&
            ((O = {}), i.each(t, function(t) {
              O[t.slug] = t.value;
            }), o());
        }
        function o() {
          a(), n.init(), e.redraw.up();
        }
        function a() {
          var n = t('[data-ix]');
          n.length &&
            (n.each(c), n.each(s), q.length && (e.scroll.on(l), setTimeout(l, 1)), A.length &&
              e.load(h), j.length && setTimeout(f, $));
        }
        function s(r, o) {
          var a = t(o), s = a.attr('data-ix'), c = O[s];
          if (c) {
            var l = c.triggers;
            l &&
              (g.style(a, c.style), i.each(l, function(t) {
                function i() {
                  d(t, a, { group: 'A' });
                }
                function r() {
                  d(t, a, { group: 'B' });
                }
                var o = {}, s = t.type, c = t.stepsB && t.stepsB.length;
                if ('load' !== s) {
                  if ('click' === s)
                    return a.on('click' + y, function(n) {
                      e.validClick(n.currentTarget) &&
                        ('#' === a.attr('href') && n.preventDefault(), d(t, a, {
                          group: o.clicked ? 'B' : 'A',
                        }), c && (o.clicked = !o.clicked));
                    }), void (T = T.add(a));
                  if ('hover' === s)
                    return a.on('mouseenter' + y, i), a.on('mouseleave' + y, r), void (T = T.add(
                      a,
                    ));
                  if ('scroll' !== s) {
                    var l = M[s];
                    if (l) {
                      var h = a.closest(l);
                      return h.on(n.types.INTRO, i).on(n.types.OUTRO, r), void (T = T.add(h));
                    }
                  } else
                    q.push({
                      el: a,
                      trigger: t,
                      state: { active: !1 },
                      offsetTop: u(t.offsetTop),
                      offsetBot: u(t.offsetBot),
                    });
                } else t.preload && !k ? A.push(i) : j.push(i);
              }));
          }
        }
        function u(t) {
          if (!t) return 0;
          t = String(t);
          var e = parseInt(t, 10);
          return e !== e ? 0 : (t.indexOf('%') > 0 && (e /= 100) >= 1 && (e = 0.999), e);
        }
        function c(e, n) {
          t(n).off(y);
        }
        function l() {
          for (var t = b.scrollTop(), e = b.height(), n = q.length, i = 0; i < n; i++) {
            var r = q[i],
              o = r.el,
              a = r.trigger,
              s = a.stepsB && a.stepsB.length,
              u = r.state,
              c = o.offset().top,
              l = o.outerHeight(),
              h = r.offsetTop,
              f = r.offsetBot;
            h < 1 && h > 0 && (h *= e), f < 1 && f > 0 && (f *= e);
            var p = c + l - h >= t && c + f <= t + e;
            p !== u.active &&
              ((!1 !== p || s) && ((u.active = p), d(a, o, { group: p ? 'A' : 'B' })));
          }
        }
        function h() {
          for (var t = A.length, e = 0; e < t; e++)
            A[e]();
        }
        function f() {
          for (var t = j.length, e = 0; e < t; e++)
            j[e]();
        }
        function d(e, n, i, r) {
          function o() {
            if (c) return d(e, n, i, !0);
            'auto' === v.width && f.set({ width: 'auto' }), 'auto' === v.height &&
              f.set({ height: 'auto' }), a && a();
          }
          var a = (i = i || {}).done, s = e.preserve3d;
          if (!w || i.force) {
            var u = i.group || 'A', c = e['loop' + u], l = e['steps' + u];
            if (l && l.length) {
              if ((l.length < 2 && (c = !1), !r)) {
                var h = e.selector;
                h &&
                  ((n = e.descend ? n.find(h) : e.siblings ? n.siblings(h) : t(h)), k &&
                    n.attr('data-ix-affect', 1)), z && n.addClass('w-ix-emptyfix'), s &&
                  n.css('transform-style', 'preserve-3d');
              }
              for (var f = x(n), v = { omit3d: !s }, m = 0; m < l.length; m++)
                p(f, l[m], v);
              v.start ? f.then(o) : o();
            }
          }
        }
        function p(t, n, i) {
          var r = 'add', o = 'start';
          i.start && (r = o = 'then');
          var a = n.transition;
          if (a) {
            a = a.split(',');
            for (var s = 0; s < a.length; s++) {
              var u = a[s];
              t[r](u);
            }
          }
          var c = v(n, i) || {};
          if (
            (null != c.width && (i.width = c.width), null != c.height &&
              (i.height = c.height), null == a)
          ) {
            i.start
              ? t.then(function() {
                  var n = this.queue;
                  this.set(
                    c,
                  ), c.display && (t.redraw(), e.redraw.up()), (this.queue = n), this.next();
                })
              : (t.set(c), c.display && (t.redraw(), e.redraw.up()));
            var l = c.wait;
            null != l && (t.wait(l), (i.start = !0));
          } else {
            if (c.display) {
              var h = c.display;
              delete c.display, i.start
                ? t.then(function() {
                    var t = this.queue;
                    this.set({ display: h }).redraw(), e.redraw.up(), (this.queue = t), this.next();
                  })
                : (t.set({ display: h }).redraw(), e.redraw.up());
            }
            t[o](c), (i.start = !0);
          }
        }
        function v(t, e) {
          var n = e && e.omit3d, i = {}, r = !1;
          for (var o in t)
            'transition' !== o &&
              'keysort' !== o &&
              (!n || ('z' !== o && 'rotateX' !== o && 'rotateY' !== o && 'scaleZ' !== o)) &&
              ((i[o] = t[o]), (r = !0));
          return r ? i : null;
        }
        var w,
          m,
          g = {},
          b = t(window),
          y = '.w-ix',
          x = t.tram,
          _ = e.env,
          k = _(),
          z = _.chrome && _.chrome < 35,
          E = 'none 0s ease 0s',
          T = t(),
          O = {},
          q = [],
          A = [],
          j = [],
          $ = 1,
          M = {
            tabs: '.w-tab-link, .w-tab-pane',
            dropdown: '.w-dropdown',
            slider: '.w-slide',
            navbar: '.w-nav',
          };
        return (g.init = function(t) {
          setTimeout(function() {
            r(t);
          }, 1);
        }), (g.preview = function() {
          (w = !1), ($ = 100), setTimeout(function() {
            r(window.__wf_ix);
          }, 1);
        }), (g.design = function() {
          (w = !0), g.destroy();
        }), (g.destroy = function() {
          (m = !0), T.each(c), e.scroll.off(l), n.async(), (q = []), (A = []), (j = []);
        }), (g.ready = function() {
          if (k) return _('design') ? g.design() : g.preview();
          O && m && ((m = !1), o());
        }), (g.run = d), (g.style = k
          ? function(e, n) {
              var i = x(e);
              if (!t.isEmptyObject(n)) {
                e.css('transition', '');
                var r = e.css('transition');
                r === E && (r = i.upstream = null), (i.upstream = E), i.set(v(n)), (i.upstream = r);
              }
            }
          : function(t, e) {
              x(t).set(v(e));
            }), g;
      }),
    );
  }), t(function(t) {
    var e = o;
    e.define(
      'links',
      (t.exports = function(t, n) {
        function i(e) {
          var n = (a && e.getAttribute('href-disabled')) || e.getAttribute('href');
          if (((d.href = n), !(n.indexOf(':') >= 0))) {
            var i = t(e);
            if (0 === n.indexOf('#') && v.test(n)) {
              var r = t(n);
              r.length && s.push({ link: i, sec: r, active: !1 });
            } else if ('#' !== n) {
              var c = d.href === f.href || n === u || (w.test(n) && m.test(u));
              o(i, p, c);
            }
          }
        }
        function r() {
          var t = l.scrollTop(), e = l.height();
          n.each(s, function(n) {
            var i = n.link,
              r = n.sec,
              a = r.offset().top,
              s = r.outerHeight(),
              u = 0.5 * e,
              c = r.is(':visible') && a + s - u >= t && a + u <= t + e;
            n.active !== c && ((n.active = c), o(i, p, c));
          });
        }
        function o(t, e, n) {
          var i = t.hasClass(e);
          (n && i) || ((n || i) && (n ? t.addClass(e) : t.removeClass(e)));
        }
        var a,
          s,
          u,
          c = {},
          l = t(window),
          h = e.env(),
          f = window.location,
          d = document.createElement('a'),
          p = 'w--current',
          v = /^#[\w:.-]+$/,
          w = /index\.(html|php)$/,
          m = /\/$/;
        return (c.ready = c.design = c.preview = function() {
          (a = h && e.env('design')), (u = e.env('slug') || f.pathname || ''), e.scroll.off(
            r,
          ), (s = []);
          for (var t = document.links, n = 0; n < t.length; ++n)
            i(t[n]);
          s.length && (e.scroll.on(r), r());
        }), c;
      }),
    );
  }), t(function(t) {
    var e = o;
    e.define(
      'scroll',
      (t.exports = function(t) {
        function n(n, r) {
          if (l.test(n)) {
            var o = t('#' + n);
            if (o.length) {
              r && (r.preventDefault(), r.stopPropagation()), u.hash === n ||
                !c ||
                !c.pushState ||
                (e.env.chrome && 'file:' === u.protocol) ||
                ((c.state && c.state.hash) !== n && c.pushState({ hash: n }, '', '#' + n));
              var a = e.env('editor') ? '.w-editor-body' : 'body',
                h = t('header, ' + a + ' > .header, ' + a + ' > .w-nav:not([data-no-scroll])'),
                f = 'fixed' === h.css('position') ? h.outerHeight() : 0;
              s.setTimeout(function() {
                i(o, f);
              }, r ? 0 : 300);
            }
          }
        }
        function i(e, n) {
          var i = t(s).scrollTop(), o = e.offset().top - n;
          if ('mid' === e.data('scroll')) {
            var a = t(s).height() - n, u = e.outerHeight();
            u < a && (o -= Math.round((a - u) / 2));
          }
          var c = 1;
          t('body').add(e).each(function() {
            var e = parseFloat(t(this).attr('data-scroll-time'), 10);
            !isNaN(e) && (0 === e || e > 0) && (c = e);
          }), Date.now ||
            (Date.now = function() {
              return new Date().getTime();
            });
          var l = Date.now(),
            h =
              s.requestAnimationFrame ||
              s.mozRequestAnimationFrame ||
              s.webkitRequestAnimationFrame ||
              function(t) {
                s.setTimeout(t, 15);
              },
            f = (472.143 * Math.log(Math.abs(i - o) + 125) - 2e3) * c,
            d = function() {
              var t = Date.now() - l;
              s.scroll(0, r(i, o, t, f)), t <= f && h(d);
            };
          d();
        }
        function r(t, e, n, i) {
          return n > i ? e : t + (e - t) * o(n / i);
        }
        function o(t) {
          return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
        }
        var a = t(document),
          s = window,
          u = s.location,
          c = (function() {
            try {
              return Boolean(s.frameElement);
            } catch (t) {
              return !0;
            }
          })()
            ? null
            : s.history,
          l = /^[a-zA-Z0-9][\w:.-]*$/;
        return {
          ready: function() {
            u.hash && n(u.hash.substring(1));
            var i = u.href.split('#')[0];
            a.on('click', 'a', function(r) {
              if (!(e.env('design') || (window.$.mobile && t(r.currentTarget).hasClass('ui-link'))))
                if ('#' !== this.getAttribute('href')) {
                  var o = this.href.split('#'), a = o[0] === i ? o[1] : null;
                  a && n(a, r);
                } else r.preventDefault();
            });
          },
        };
      }),
    );
  }), t(function(t) {
    o.define(
      'touch',
      (t.exports = function(t) {
        function e(t) {
          function e(t) {
            var e = t.touches;
            (e && e.length > 1) ||
              ((l = !0), (h = !1), e
                ? ((f = !0), (s = e[0].clientX), (u = e[0].clientY))
                : ((s = t.clientX), (u = t.clientY)), (c = s));
          }
          function i(t) {
            if (l) {
              if (f && 'mousemove' === t.type) return t.preventDefault(), void t.stopPropagation();
              var e = t.touches,
                i = e ? e[0].clientX : t.clientX,
                r = e ? e[0].clientY : t.clientY,
                p = i - c;
              (c = i), Math.abs(p) > d &&
                o &&
                '' === String(o()) &&
                (n('swipe', t, { direction: p > 0 ? 'right' : 'left' }), a()), (Math.abs(i - s) >
                10 ||
                Math.abs(r - u) > 10) &&
                (h = !0);
            }
          }
          function r(t) {
            if (l) {
              if (((l = !1), f && 'mouseup' === t.type))
                return t.preventDefault(), t.stopPropagation(), void (f = !1);
              h || n('tap', t);
            }
          }
          function a() {
            l = !1;
          }
          var s,
            u,
            c,
            l = !1,
            h = !1,
            f = !1,
            d = Math.min(Math.round(0.04 * window.innerWidth), 40);
          t.addEventListener('touchstart', e, !1), t.addEventListener(
            'touchmove',
            i,
            !1,
          ), t.addEventListener('touchend', r, !1), t.addEventListener(
            'touchcancel',
            a,
            !1,
          ), t.addEventListener('mousedown', e, !1), t.addEventListener(
            'mousemove',
            i,
            !1,
          ), t.addEventListener('mouseup', r, !1), t.addEventListener(
            'mouseout',
            a,
            !1,
          ), (this.destroy = function() {
            t.removeEventListener('touchstart', e, !1), t.removeEventListener(
              'touchmove',
              i,
              !1,
            ), t.removeEventListener('touchend', r, !1), t.removeEventListener(
              'touchcancel',
              a,
              !1,
            ), t.removeEventListener('mousedown', e, !1), t.removeEventListener(
              'mousemove',
              i,
              !1,
            ), t.removeEventListener('mouseup', r, !1), t.removeEventListener(
              'mouseout',
              a,
              !1,
            ), (t = null);
          });
        }
        function n(e, n, i) {
          var r = t.Event(e, { originalEvent: n });
          t(n.target).trigger(r, i);
        }
        var i = {}, r = !document.addEventListener, o = window.getSelection;
        return r &&
          (t.event.special.tap = { bindType: 'click', delegateType: 'click' }), (i.init = function(
          n,
        ) {
          return r ? null : (n = 'string' == typeof n ? t(n).get(0) : n) ? new e(n) : null;
        }), (i.instance = i.init(document)), i;
      }),
    );
  });
})(); /**
 * ----------------------------------------------------------------------
 * Webflow: Interactions: Init
 */
Webflow.require('ix').init([
  { slug: 'new-interaction', name: 'New Interaction', value: { style: {}, triggers: [] } },
]);
