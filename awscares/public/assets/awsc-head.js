/*! For license information please see awsc-head.js.LICENSE.txt */
!(function () {
  var e = {
      89285: function (e, t) {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 })
      },
      96911: function (e, t) {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 })
      },
      41322: function (e, t) {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 })
      },
      21416: function (e, t) {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 })
      },
      9803: function (e, t) {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.isMsWindow = void 0)
        var n = [
          'decrypt',
          'digest',
          'encrypt',
          'exportKey',
          'generateKey',
          'importKey',
          'sign',
          'verify',
        ]
        t.isMsWindow = function (e) {
          if (
            (function (e) {
              return 'MSInputMethodContext' in e && 'msCrypto' in e
            })(e) &&
            void 0 !== e.msCrypto.subtle
          ) {
            var t = e.msCrypto,
              r = t.getRandomValues,
              o = t.subtle
            return n
              .map(function (e) {
                return o[e]
              })
              .concat(r)
              .every(function (e) {
                return 'function' == typeof e
              })
          }
          return !1
        }
      },
      2336: function (e, t, n) {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 })
        var r = n(5587)
        ;(0, r.__exportStar)(n(89285), t),
          (0, r.__exportStar)(n(96911), t),
          (0, r.__exportStar)(n(41322), t),
          (0, r.__exportStar)(n(21416), t),
          (0, r.__exportStar)(n(9803), t)
      },
      5587: function (e, t, n) {
        'use strict'
        n.r(t),
          n.d(t, {
            __extends: function () {
              return o
            },
            __assign: function () {
              return i
            },
            __rest: function () {
              return a
            },
            __decorate: function () {
              return u
            },
            __param: function () {
              return s
            },
            __metadata: function () {
              return c
            },
            __awaiter: function () {
              return l
            },
            __generator: function () {
              return f
            },
            __createBinding: function () {
              return d
            },
            __exportStar: function () {
              return p
            },
            __values: function () {
              return h
            },
            __read: function () {
              return v
            },
            __spread: function () {
              return g
            },
            __spreadArrays: function () {
              return y
            },
            __await: function () {
              return m
            },
            __asyncGenerator: function () {
              return w
            },
            __asyncDelegator: function () {
              return b
            },
            __asyncValues: function () {
              return S
            },
            __makeTemplateObject: function () {
              return _
            },
            __importStar: function () {
              return E
            },
            __importDefault: function () {
              return A
            },
            __classPrivateFieldGet: function () {
              return O
            },
            __classPrivateFieldSet: function () {
              return C
            },
          })
        var r = function (e, t) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t
              }) ||
            function (e, t) {
              for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            })(e, t)
        }
        function o(e, t) {
          function n() {
            this.constructor = e
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()))
        }
        var i = function () {
          return (i =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
              return e
            }).apply(this, arguments)
        }
        function a(e, t) {
          var n = {}
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              t.indexOf(r) < 0 &&
              (n[r] = e[r])
          if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
            var o = 0
            for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
              t.indexOf(r[o]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
                (n[r[o]] = e[r[o]])
          }
          return n
        }
        function u(e, t, n, r) {
          var o,
            i = arguments.length,
            a =
              i < 3
                ? t
                : null === r
                ? (r = Object.getOwnPropertyDescriptor(t, n))
                : r
          if (
            'object' == typeof Reflect &&
            'function' == typeof Reflect.decorate
          )
            a = Reflect.decorate(e, t, n, r)
          else
            for (var u = e.length - 1; u >= 0; u--)
              (o = e[u]) &&
                (a = (i < 3 ? o(a) : i > 3 ? o(t, n, a) : o(t, n)) || a)
          return i > 3 && a && Object.defineProperty(t, n, a), a
        }
        function s(e, t) {
          return function (n, r) {
            t(n, r, e)
          }
        }
        function c(e, t) {
          if (
            'object' == typeof Reflect &&
            'function' == typeof Reflect.metadata
          )
            return Reflect.metadata(e, t)
        }
        function l(e, t, n, r) {
          return new (n || (n = Promise))(function (o, i) {
            function a(e) {
              try {
                s(r.next(e))
              } catch (e) {
                i(e)
              }
            }
            function u(e) {
              try {
                s(r.throw(e))
              } catch (e) {
                i(e)
              }
            }
            function s(e) {
              var t
              e.done
                ? o(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t)
                      })).then(a, u)
            }
            s((r = r.apply(e, t || [])).next())
          })
        }
        function f(e, t) {
          var n,
            r,
            o,
            i,
            a = {
              label: 0,
              sent: function () {
                if (1 & o[0]) throw o[1]
                return o[1]
              },
              trys: [],
              ops: [],
            }
          return (
            (i = { next: u(0), throw: u(1), return: u(2) }),
            'function' == typeof Symbol &&
              (i[Symbol.iterator] = function () {
                return this
              }),
            i
          )
          function u(i) {
            return function (u) {
              return (function (i) {
                if (n) throw new TypeError('Generator is already executing.')
                for (; a; )
                  try {
                    if (
                      ((n = 1),
                      r &&
                        (o =
                          2 & i[0]
                            ? r.return
                            : i[0]
                            ? r.throw || ((o = r.return) && o.call(r), 0)
                            : r.next) &&
                        !(o = o.call(r, i[1])).done)
                    )
                      return o
                    switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                      case 0:
                      case 1:
                        o = i
                        break
                      case 4:
                        return a.label++, { value: i[1], done: !1 }
                      case 5:
                        a.label++, (r = i[1]), (i = [0])
                        continue
                      case 7:
                        ;(i = a.ops.pop()), a.trys.pop()
                        continue
                      default:
                        if (
                          !((o = a.trys),
                          (o = o.length > 0 && o[o.length - 1]) ||
                            (6 !== i[0] && 2 !== i[0]))
                        ) {
                          a = 0
                          continue
                        }
                        if (
                          3 === i[0] &&
                          (!o || (i[1] > o[0] && i[1] < o[3]))
                        ) {
                          a.label = i[1]
                          break
                        }
                        if (6 === i[0] && a.label < o[1]) {
                          ;(a.label = o[1]), (o = i)
                          break
                        }
                        if (o && a.label < o[2]) {
                          ;(a.label = o[2]), a.ops.push(i)
                          break
                        }
                        o[2] && a.ops.pop(), a.trys.pop()
                        continue
                    }
                    i = t.call(e, a)
                  } catch (e) {
                    ;(i = [6, e]), (r = 0)
                  } finally {
                    n = o = 0
                  }
                if (5 & i[0]) throw i[1]
                return { value: i[0] ? i[1] : void 0, done: !0 }
              })([i, u])
            }
          }
        }
        function d(e, t, n, r) {
          void 0 === r && (r = n), (e[r] = t[n])
        }
        function p(e, t) {
          for (var n in e)
            'default' === n || t.hasOwnProperty(n) || (t[n] = e[n])
        }
        function h(e) {
          var t = 'function' == typeof Symbol && Symbol.iterator,
            n = t && e[t],
            r = 0
          if (n) return n.call(e)
          if (e && 'number' == typeof e.length)
            return {
              next: function () {
                return (
                  e && r >= e.length && (e = void 0),
                  { value: e && e[r++], done: !e }
                )
              },
            }
          throw new TypeError(
            t ? 'Object is not iterable.' : 'Symbol.iterator is not defined.',
          )
        }
        function v(e, t) {
          var n = 'function' == typeof Symbol && e[Symbol.iterator]
          if (!n) return e
          var r,
            o,
            i = n.call(e),
            a = []
          try {
            for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; )
              a.push(r.value)
          } catch (e) {
            o = { error: e }
          } finally {
            try {
              r && !r.done && (n = i.return) && n.call(i)
            } finally {
              if (o) throw o.error
            }
          }
          return a
        }
        function g() {
          for (var e = [], t = 0; t < arguments.length; t++)
            e = e.concat(v(arguments[t]))
          return e
        }
        function y() {
          for (var e = 0, t = 0, n = arguments.length; t < n; t++)
            e += arguments[t].length
          var r = Array(e),
            o = 0
          for (t = 0; t < n; t++)
            for (var i = arguments[t], a = 0, u = i.length; a < u; a++, o++)
              r[o] = i[a]
          return r
        }
        function m(e) {
          return this instanceof m ? ((this.v = e), this) : new m(e)
        }
        function w(e, t, n) {
          if (!Symbol.asyncIterator)
            throw new TypeError('Symbol.asyncIterator is not defined.')
          var r,
            o = n.apply(e, t || []),
            i = []
          return (
            (r = {}),
            a('next'),
            a('throw'),
            a('return'),
            (r[Symbol.asyncIterator] = function () {
              return this
            }),
            r
          )
          function a(e) {
            o[e] &&
              (r[e] = function (t) {
                return new Promise(function (n, r) {
                  i.push([e, t, n, r]) > 1 || u(e, t)
                })
              })
          }
          function u(e, t) {
            try {
              ;(n = o[e](t)).value instanceof m
                ? Promise.resolve(n.value.v).then(s, c)
                : l(i[0][2], n)
            } catch (e) {
              l(i[0][3], e)
            }
            var n
          }
          function s(e) {
            u('next', e)
          }
          function c(e) {
            u('throw', e)
          }
          function l(e, t) {
            e(t), i.shift(), i.length && u(i[0][0], i[0][1])
          }
        }
        function b(e) {
          var t, n
          return (
            (t = {}),
            r('next'),
            r('throw', function (e) {
              throw e
            }),
            r('return'),
            (t[Symbol.iterator] = function () {
              return this
            }),
            t
          )
          function r(r, o) {
            t[r] = e[r]
              ? function (t) {
                  return (n = !n)
                    ? { value: m(e[r](t)), done: 'return' === r }
                    : o
                    ? o(t)
                    : t
                }
              : o
          }
        }
        function S(e) {
          if (!Symbol.asyncIterator)
            throw new TypeError('Symbol.asyncIterator is not defined.')
          var t,
            n = e[Symbol.asyncIterator]
          return n
            ? n.call(e)
            : ((e = h(e)),
              (t = {}),
              r('next'),
              r('throw'),
              r('return'),
              (t[Symbol.asyncIterator] = function () {
                return this
              }),
              t)
          function r(n) {
            t[n] =
              e[n] &&
              function (t) {
                return new Promise(function (r, o) {
                  ;(function (e, t, n, r) {
                    Promise.resolve(r).then(function (t) {
                      e({ value: t, done: n })
                    }, t)
                  })(r, o, (t = e[n](t)).done, t.value)
                })
              }
          }
        }
        function _(e, t) {
          return (
            Object.defineProperty
              ? Object.defineProperty(e, 'raw', { value: t })
              : (e.raw = t),
            e
          )
        }
        function E(e) {
          if (e && e.__esModule) return e
          var t = {}
          if (null != e)
            for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n])
          return (t.default = e), t
        }
        function A(e) {
          return e && e.__esModule ? e : { default: e }
        }
        function O(e, t) {
          if (!t.has(e))
            throw new TypeError(
              'attempted to get private field on non-instance',
            )
          return t.get(e)
        }
        function C(e, t, n) {
          if (!t.has(e))
            throw new TypeError(
              'attempted to set private field on non-instance',
            )
          return t.set(e, n), n
        }
      },
      29307: function (e, t) {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.EMPTY_DATA_SHA_256 = t.SHA_256_HMAC_ALGO = t.SHA_256_HASH = void 0),
          (t.SHA_256_HASH = { name: 'SHA-256' }),
          (t.SHA_256_HMAC_ALGO = { name: 'HMAC', hash: t.SHA_256_HASH }),
          (t.EMPTY_DATA_SHA_256 = new Uint8Array([
            227,
            176,
            196,
            66,
            152,
            252,
            28,
            20,
            154,
            251,
            244,
            200,
            153,
            111,
            185,
            36,
            39,
            174,
            65,
            228,
            100,
            155,
            147,
            76,
            164,
            149,
            153,
            27,
            120,
            82,
            184,
            85,
          ]))
      },
      75473: function (e, t, n) {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.Sha256 = void 0)
        var r = n(53801),
          o = n(71310),
          i = n(31303),
          a = n(80707),
          u = n(2336),
          s = n(86491),
          c = (function () {
            function e(e) {
              ;(0, a.supportsWebCrypto)((0, s.locateWindow)())
                ? (this.hash = new o.Sha256(e))
                : (0, u.isMsWindow)((0, s.locateWindow)())
                ? (this.hash = new r.Sha256(e))
                : (this.hash = new i.Sha256(e))
            }
            return (
              (e.prototype.update = function (e, t) {
                this.hash.update(e, t)
              }),
              (e.prototype.digest = function () {
                return this.hash.digest()
              }),
              e
            )
          })()
        t.Sha256 = c
      },
      53801: function (e, t, n) {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.Sha256 = void 0)
        var r = n(14827),
          o = n(29307),
          i = n(32254),
          a = n(86491),
          u = (function () {
            function e(e) {
              e
                ? ((this.operation = (function (e) {
                    return new Promise(function (t, n) {
                      var r = (0,
                      a.locateWindow)().msCrypto.subtle.importKey(
                        'raw',
                        s(e),
                        o.SHA_256_HMAC_ALGO,
                        !1,
                        ['sign'],
                      )
                      ;(r.oncomplete = function () {
                        r.result && t(r.result),
                          n(
                            new Error(
                              'ImportKey completed without importing key.',
                            ),
                          )
                      }),
                        (r.onerror = function () {
                          n(new Error('ImportKey failed to import key.'))
                        })
                    })
                  })(e).then(function (e) {
                    return (0, a.locateWindow)().msCrypto.subtle.sign(
                      o.SHA_256_HMAC_ALGO,
                      e,
                    )
                  })),
                  this.operation.catch(function () {}))
                : (this.operation = Promise.resolve(
                    (0, a.locateWindow)().msCrypto.subtle.digest('SHA-256'),
                  ))
            }
            return (
              (e.prototype.update = function (e) {
                var t = this
                ;(0, r.isEmptyData)(e) ||
                  ((this.operation = this.operation.then(function (n) {
                    return (
                      (n.onerror = function () {
                        t.operation = Promise.reject(
                          new Error('Error encountered updating hash'),
                        )
                      }),
                      n.process(s(e)),
                      n
                    )
                  })),
                  this.operation.catch(function () {}))
              }),
              (e.prototype.digest = function () {
                return this.operation.then(function (e) {
                  return new Promise(function (t, n) {
                    ;(e.onerror = function () {
                      n(new Error('Error encountered finalizing hash'))
                    }),
                      (e.oncomplete = function () {
                        e.result && t(new Uint8Array(e.result)),
                          n(new Error('Error encountered finalizing hash'))
                      }),
                      e.finish()
                  })
                })
              }),
              e
            )
          })()
        function s(e) {
          return 'string' == typeof e
            ? (0, i.fromUtf8)(e)
            : ArrayBuffer.isView(e)
            ? new Uint8Array(
                e.buffer,
                e.byteOffset,
                e.byteLength / Uint8Array.BYTES_PER_ELEMENT,
              )
            : new Uint8Array(e)
        }
        t.Sha256 = u
      },
      8579: function (e, t, n) {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.WebCryptoSha256 = t.Ie11Sha256 = void 0),
          (0, n(15913).__exportStar)(n(75473), t)
        var r = n(53801)
        Object.defineProperty(t, 'Ie11Sha256', {
          enumerable: !0,
          get: function () {
            return r.Sha256
          },
        })
        var o = n(71310)
        Object.defineProperty(t, 'WebCryptoSha256', {
          enumerable: !0,
          get: function () {
            return o.Sha256
          },
        })
      },
      14827: function (e, t) {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.isEmptyData = void 0),
          (t.isEmptyData = function (e) {
            return 'string' == typeof e ? 0 === e.length : 0 === e.byteLength
          })
      },
      71310: function (e, t, n) {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.Sha256 = void 0)
        var r = n(2551),
          o = n(29307),
          i = n(86491),
          a = (function () {
            function e(e) {
              ;(this.toHash = new Uint8Array(0)),
                void 0 !== e &&
                  ((this.key = new Promise(function (t, n) {
                    ;(0, i.locateWindow)()
                      .crypto.subtle.importKey(
                        'raw',
                        (0, r.convertToBuffer)(e),
                        o.SHA_256_HMAC_ALGO,
                        !1,
                        ['sign'],
                      )
                      .then(t, n)
                  })),
                  this.key.catch(function () {}))
            }
            return (
              (e.prototype.update = function (e) {
                if (!(0, r.isEmptyData)(e)) {
                  var t = (0, r.convertToBuffer)(e),
                    n = new Uint8Array(this.toHash.byteLength + t.byteLength)
                  n.set(this.toHash, 0),
                    n.set(t, this.toHash.byteLength),
                    (this.toHash = n)
                }
              }),
              (e.prototype.digest = function () {
                var e = this
                return this.key
                  ? this.key.then(function (t) {
                      return (0, i.locateWindow)()
                        .crypto.subtle.sign(o.SHA_256_HMAC_ALGO, t, e.toHash)
                        .then(function (e) {
                          return new Uint8Array(e)
                        })
                    })
                  : (0, r.isEmptyData)(this.toHash)
                  ? Promise.resolve(o.EMPTY_DATA_SHA_256)
                  : Promise.resolve()
                      .then(function () {
                        return (0, i.locateWindow)().crypto.subtle.digest(
                          o.SHA_256_HASH,
                          e.toHash,
                        )
                      })
                      .then(function (e) {
                        return Promise.resolve(new Uint8Array(e))
                      })
              }),
              e
            )
          })()
        t.Sha256 = a
      },
      15913: function (e, t, n) {
        'use strict'
        n.r(t),
          n.d(t, {
            __extends: function () {
              return o
            },
            __assign: function () {
              return i
            },
            __rest: function () {
              return a
            },
            __decorate: function () {
              return u
            },
            __param: function () {
              return s
            },
            __metadata: function () {
              return c
            },
            __awaiter: function () {
              return l
            },
            __generator: function () {
              return f
            },
            __createBinding: function () {
              return d
            },
            __exportStar: function () {
              return p
            },
            __values: function () {
              return h
            },
            __read: function () {
              return v
            },
            __spread: function () {
              return g
            },
            __spreadArrays: function () {
              return y
            },
            __await: function () {
              return m
            },
            __asyncGenerator: function () {
              return w
            },
            __asyncDelegator: function () {
              return b
            },
            __asyncValues: function () {
              return S
            },
            __makeTemplateObject: function () {
              return _
            },
            __importStar: function () {
              return E
            },
            __importDefault: function () {
              return A
            },
            __classPrivateFieldGet: function () {
              return O
            },
            __classPrivateFieldSet: function () {
              return C
            },
          })
        var r = function (e, t) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t
              }) ||
            function (e, t) {
              for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            })(e, t)
        }
        function o(e, t) {
          function n() {
            this.constructor = e
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()))
        }
        var i = function () {
          return (i =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
              return e
            }).apply(this, arguments)
        }
        function a(e, t) {
          var n = {}
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              t.indexOf(r) < 0 &&
              (n[r] = e[r])
          if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
            var o = 0
            for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
              t.indexOf(r[o]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
                (n[r[o]] = e[r[o]])
          }
          return n
        }
        function u(e, t, n, r) {
          var o,
            i = arguments.length,
            a =
              i < 3
                ? t
                : null === r
                ? (r = Object.getOwnPropertyDescriptor(t, n))
                : r
          if (
            'object' == typeof Reflect &&
            'function' == typeof Reflect.decorate
          )
            a = Reflect.decorate(e, t, n, r)
          else
            for (var u = e.length - 1; u >= 0; u--)
              (o = e[u]) &&
                (a = (i < 3 ? o(a) : i > 3 ? o(t, n, a) : o(t, n)) || a)
          return i > 3 && a && Object.defineProperty(t, n, a), a
        }
        function s(e, t) {
          return function (n, r) {
            t(n, r, e)
          }
        }
        function c(e, t) {
          if (
            'object' == typeof Reflect &&
            'function' == typeof Reflect.metadata
          )
            return Reflect.metadata(e, t)
        }
        function l(e, t, n, r) {
          return new (n || (n = Promise))(function (o, i) {
            function a(e) {
              try {
                s(r.next(e))
              } catch (e) {
                i(e)
              }
            }
            function u(e) {
              try {
                s(r.throw(e))
              } catch (e) {
                i(e)
              }
            }
            function s(e) {
              var t
              e.done
                ? o(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t)
                      })).then(a, u)
            }
            s((r = r.apply(e, t || [])).next())
          })
        }
        function f(e, t) {
          var n,
            r,
            o,
            i,
            a = {
              label: 0,
              sent: function () {
                if (1 & o[0]) throw o[1]
                return o[1]
              },
              trys: [],
              ops: [],
            }
          return (
            (i = { next: u(0), throw: u(1), return: u(2) }),
            'function' == typeof Symbol &&
              (i[Symbol.iterator] = function () {
                return this
              }),
            i
          )
          function u(i) {
            return function (u) {
              return (function (i) {
                if (n) throw new TypeError('Generator is already executing.')
                for (; a; )
                  try {
                    if (
                      ((n = 1),
                      r &&
                        (o =
                          2 & i[0]
                            ? r.return
                            : i[0]
                            ? r.throw || ((o = r.return) && o.call(r), 0)
                            : r.next) &&
                        !(o = o.call(r, i[1])).done)
                    )
                      return o
                    switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                      case 0:
                      case 1:
                        o = i
                        break
                      case 4:
                        return a.label++, { value: i[1], done: !1 }
                      case 5:
                        a.label++, (r = i[1]), (i = [0])
                        continue
                      case 7:
                        ;(i = a.ops.pop()), a.trys.pop()
                        continue
                      default:
                        if (
                          !((o = a.trys),
                          (o = o.length > 0 && o[o.length - 1]) ||
                            (6 !== i[0] && 2 !== i[0]))
                        ) {
                          a = 0
                          continue
                        }
                        if (
                          3 === i[0] &&
                          (!o || (i[1] > o[0] && i[1] < o[3]))
                        ) {
                          a.label = i[1]
                          break
                        }
                        if (6 === i[0] && a.label < o[1]) {
                          ;(a.label = o[1]), (o = i)
                          break
                        }
                        if (o && a.label < o[2]) {
                          ;(a.label = o[2]), a.ops.push(i)
                          break
                        }
                        o[2] && a.ops.pop(), a.trys.pop()
                        continue
                    }
                    i = t.call(e, a)
                  } catch (e) {
                    ;(i = [6, e]), (r = 0)
                  } finally {
                    n = o = 0
                  }
                if (5 & i[0]) throw i[1]
                return { value: i[0] ? i[1] : void 0, done: !0 }
              })([i, u])
            }
          }
        }
        function d(e, t, n, r) {
          void 0 === r && (r = n), (e[r] = t[n])
        }
        function p(e, t) {
          for (var n in e)
            'default' === n || t.hasOwnProperty(n) || (t[n] = e[n])
        }
        function h(e) {
          var t = 'function' == typeof Symbol && Symbol.iterator,
            n = t && e[t],
            r = 0
          if (n) return n.call(e)
          if (e && 'number' == typeof e.length)
            return {
              next: function () {
                return (
                  e && r >= e.length && (e = void 0),
                  { value: e && e[r++], done: !e }
                )
              },
            }
          throw new TypeError(
            t ? 'Object is not iterable.' : 'Symbol.iterator is not defined.',
          )
        }
        function v(e, t) {
          var n = 'function' == typeof Symbol && e[Symbol.iterator]
          if (!n) return e
          var r,
            o,
            i = n.call(e),
            a = []
          try {
            for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; )
              a.push(r.value)
          } catch (e) {
            o = { error: e }
          } finally {
            try {
              r && !r.done && (n = i.return) && n.call(i)
            } finally {
              if (o) throw o.error
            }
          }
          return a
        }
        function g() {
          for (var e = [], t = 0; t < arguments.length; t++)
            e = e.concat(v(arguments[t]))
          return e
        }
        function y() {
          for (var e = 0, t = 0, n = arguments.length; t < n; t++)
            e += arguments[t].length
          var r = Array(e),
            o = 0
          for (t = 0; t < n; t++)
            for (var i = arguments[t], a = 0, u = i.length; a < u; a++, o++)
              r[o] = i[a]
          return r
        }
        function m(e) {
          return this instanceof m ? ((this.v = e), this) : new m(e)
        }
        function w(e, t, n) {
          if (!Symbol.asyncIterator)
            throw new TypeError('Symbol.asyncIterator is not defined.')
          var r,
            o = n.apply(e, t || []),
            i = []
          return (
            (r = {}),
            a('next'),
            a('throw'),
            a('return'),
            (r[Symbol.asyncIterator] = function () {
              return this
            }),
            r
          )
          function a(e) {
            o[e] &&
              (r[e] = function (t) {
                return new Promise(function (n, r) {
                  i.push([e, t, n, r]) > 1 || u(e, t)
                })
              })
          }
          function u(e, t) {
            try {
              ;(n = o[e](t)).value instanceof m
                ? Promise.resolve(n.value.v).then(s, c)
                : l(i[0][2], n)
            } catch (e) {
              l(i[0][3], e)
            }
            var n
          }
          function s(e) {
            u('next', e)
          }
          function c(e) {
            u('throw', e)
          }
          function l(e, t) {
            e(t), i.shift(), i.length && u(i[0][0], i[0][1])
          }
        }
        function b(e) {
          var t, n
          return (
            (t = {}),
            r('next'),
            r('throw', function (e) {
              throw e
            }),
            r('return'),
            (t[Symbol.iterator] = function () {
              return this
            }),
            t
          )
          function r(r, o) {
            t[r] = e[r]
              ? function (t) {
                  return (n = !n)
                    ? { value: m(e[r](t)), done: 'return' === r }
                    : o
                    ? o(t)
                    : t
                }
              : o
          }
        }
        function S(e) {
          if (!Symbol.asyncIterator)
            throw new TypeError('Symbol.asyncIterator is not defined.')
          var t,
            n = e[Symbol.asyncIterator]
          return n
            ? n.call(e)
            : ((e = h(e)),
              (t = {}),
              r('next'),
              r('throw'),
              r('return'),
              (t[Symbol.asyncIterator] = function () {
                return this
              }),
              t)
          function r(n) {
            t[n] =
              e[n] &&
              function (t) {
                return new Promise(function (r, o) {
                  ;(function (e, t, n, r) {
                    Promise.resolve(r).then(function (t) {
                      e({ value: t, done: n })
                    }, t)
                  })(r, o, (t = e[n](t)).done, t.value)
                })
              }
          }
        }
        function _(e, t) {
          return (
            Object.defineProperty
              ? Object.defineProperty(e, 'raw', { value: t })
              : (e.raw = t),
            e
          )
        }
        function E(e) {
          if (e && e.__esModule) return e
          var t = {}
          if (null != e)
            for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n])
          return (t.default = e), t
        }
        function A(e) {
          return e && e.__esModule ? e : { default: e }
        }
        function O(e, t) {
          if (!t.has(e))
            throw new TypeError(
              'attempted to get private field on non-instance',
            )
          return t.get(e)
        }
        function C(e, t, n) {
          if (!t.has(e))
            throw new TypeError(
              'attempted to set private field on non-instance',
            )
          return t.set(e, n), n
        }
      },
      10753: function (e, t, n) {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.RawSha256 = void 0)
        var r = n(14073),
          o = (function () {
            function e() {
              ;(this.state = Int32Array.from(r.INIT)),
                (this.temp = new Int32Array(64)),
                (this.buffer = new Uint8Array(64)),
                (this.bufferLength = 0),
                (this.bytesHashed = 0),
                (this.finished = !1)
            }
            return (
              (e.prototype.update = function (e) {
                if (this.finished)
                  throw new Error(
                    'Attempted to update an already finished hash.',
                  )
                var t = 0,
                  n = e.byteLength
                if (
                  ((this.bytesHashed += n),
                  8 * this.bytesHashed > r.MAX_HASHABLE_LENGTH)
                )
                  throw new Error('Cannot hash more than 2^53 - 1 bits')
                for (; n > 0; )
                  (this.buffer[this.bufferLength++] = e[t++]),
                    n--,
                    this.bufferLength === r.BLOCK_SIZE &&
                      (this.hashBuffer(), (this.bufferLength = 0))
              }),
              (e.prototype.digest = function () {
                if (!this.finished) {
                  var e = 8 * this.bytesHashed,
                    t = new DataView(
                      this.buffer.buffer,
                      this.buffer.byteOffset,
                      this.buffer.byteLength,
                    ),
                    n = this.bufferLength
                  if (
                    (t.setUint8(this.bufferLength++, 128),
                    n % r.BLOCK_SIZE >= r.BLOCK_SIZE - 8)
                  ) {
                    for (var o = this.bufferLength; o < r.BLOCK_SIZE; o++)
                      t.setUint8(o, 0)
                    this.hashBuffer(), (this.bufferLength = 0)
                  }
                  for (o = this.bufferLength; o < r.BLOCK_SIZE - 8; o++)
                    t.setUint8(o, 0)
                  t.setUint32(r.BLOCK_SIZE - 8, Math.floor(e / 4294967296), !0),
                    t.setUint32(r.BLOCK_SIZE - 4, e),
                    this.hashBuffer(),
                    (this.finished = !0)
                }
                var i = new Uint8Array(r.DIGEST_LENGTH)
                for (o = 0; o < 8; o++)
                  (i[4 * o] = (this.state[o] >>> 24) & 255),
                    (i[4 * o + 1] = (this.state[o] >>> 16) & 255),
                    (i[4 * o + 2] = (this.state[o] >>> 8) & 255),
                    (i[4 * o + 3] = (this.state[o] >>> 0) & 255)
                return i
              }),
              (e.prototype.hashBuffer = function () {
                for (
                  var e = this.buffer,
                    t = this.state,
                    n = t[0],
                    o = t[1],
                    i = t[2],
                    a = t[3],
                    u = t[4],
                    s = t[5],
                    c = t[6],
                    l = t[7],
                    f = 0;
                  f < r.BLOCK_SIZE;
                  f++
                ) {
                  if (f < 16)
                    this.temp[f] =
                      ((255 & e[4 * f]) << 24) |
                      ((255 & e[4 * f + 1]) << 16) |
                      ((255 & e[4 * f + 2]) << 8) |
                      (255 & e[4 * f + 3])
                  else {
                    var d = this.temp[f - 2],
                      p =
                        ((d >>> 17) | (d << 15)) ^
                        ((d >>> 19) | (d << 13)) ^
                        (d >>> 10),
                      h =
                        (((d = this.temp[f - 15]) >>> 7) | (d << 25)) ^
                        ((d >>> 18) | (d << 14)) ^
                        (d >>> 3)
                    this.temp[f] =
                      ((p + this.temp[f - 7]) | 0) +
                      ((h + this.temp[f - 16]) | 0)
                  }
                  var v =
                      ((((((u >>> 6) | (u << 26)) ^
                        ((u >>> 11) | (u << 21)) ^
                        ((u >>> 25) | (u << 7))) +
                        ((u & s) ^ (~u & c))) |
                        0) +
                        ((l + ((r.KEY[f] + this.temp[f]) | 0)) | 0)) |
                      0,
                    g =
                      ((((n >>> 2) | (n << 30)) ^
                        ((n >>> 13) | (n << 19)) ^
                        ((n >>> 22) | (n << 10))) +
                        ((n & o) ^ (n & i) ^ (o & i))) |
                      0
                  ;(l = c),
                    (c = s),
                    (s = u),
                    (u = (a + v) | 0),
                    (a = i),
                    (i = o),
                    (o = n),
                    (n = (v + g) | 0)
                }
                ;(t[0] += n),
                  (t[1] += o),
                  (t[2] += i),
                  (t[3] += a),
                  (t[4] += u),
                  (t[5] += s),
                  (t[6] += c),
                  (t[7] += l)
              }),
              e
            )
          })()
        t.RawSha256 = o
      },
      14073: function (e, t) {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.MAX_HASHABLE_LENGTH = t.INIT = t.KEY = t.DIGEST_LENGTH = t.BLOCK_SIZE = void 0),
          (t.BLOCK_SIZE = 64),
          (t.DIGEST_LENGTH = 32),
          (t.KEY = new Uint32Array([
            1116352408,
            1899447441,
            3049323471,
            3921009573,
            961987163,
            1508970993,
            2453635748,
            2870763221,
            3624381080,
            310598401,
            607225278,
            1426881987,
            1925078388,
            2162078206,
            2614888103,
            3248222580,
            3835390401,
            4022224774,
            264347078,
            604807628,
            770255983,
            1249150122,
            1555081692,
            1996064986,
            2554220882,
            2821834349,
            2952996808,
            3210313671,
            3336571891,
            3584528711,
            113926993,
            338241895,
            666307205,
            773529912,
            1294757372,
            1396182291,
            1695183700,
            1986661051,
            2177026350,
            2456956037,
            2730485921,
            2820302411,
            3259730800,
            3345764771,
            3516065817,
            3600352804,
            4094571909,
            275423344,
            430227734,
            506948616,
            659060556,
            883997877,
            958139571,
            1322822218,
            1537002063,
            1747873779,
            1955562222,
            2024104815,
            2227730452,
            2361852424,
            2428436474,
            2756734187,
            3204031479,
            3329325298,
          ])),
          (t.INIT = [
            1779033703,
            3144134277,
            1013904242,
            2773480762,
            1359893119,
            2600822924,
            528734635,
            1541459225,
          ]),
          (t.MAX_HASHABLE_LENGTH = Math.pow(2, 53) - 1)
      },
      31303: function (e, t, n) {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (0, n(90476).__exportStar)(n(30003), t)
      },
      30003: function (e, t, n) {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.Sha256 = void 0)
        var r = n(90476),
          o = n(14073),
          i = n(10753),
          a = n(2551),
          u = (function () {
            function e(e) {
              if (((this.hash = new i.RawSha256()), e)) {
                this.outer = new i.RawSha256()
                var t = (function (e) {
                    var t = (0, a.convertToBuffer)(e)
                    if (t.byteLength > o.BLOCK_SIZE) {
                      var n = new i.RawSha256()
                      n.update(t), (t = n.digest())
                    }
                    var r = new Uint8Array(o.BLOCK_SIZE)
                    return r.set(t), r
                  })(e),
                  n = new Uint8Array(o.BLOCK_SIZE)
                n.set(t)
                for (var r = 0; r < o.BLOCK_SIZE; r++)
                  (t[r] ^= 54), (n[r] ^= 92)
                this.hash.update(t), this.outer.update(n)
                for (r = 0; r < t.byteLength; r++) t[r] = 0
              }
            }
            return (
              (e.prototype.update = function (e) {
                if (!(0, a.isEmptyData)(e) && !this.error)
                  try {
                    this.hash.update((0, a.convertToBuffer)(e))
                  } catch (e) {
                    this.error = e
                  }
              }),
              (e.prototype.digestSync = function () {
                if (this.error) throw this.error
                return this.outer
                  ? (this.outer.finished ||
                      this.outer.update(this.hash.digest()),
                    this.outer.digest())
                  : this.hash.digest()
              }),
              (e.prototype.digest = function () {
                return (0, r.__awaiter)(this, void 0, void 0, function () {
                  return (0, r.__generator)(this, function (e) {
                    return [2, this.digestSync()]
                  })
                })
              }),
              e
            )
          })()
        t.Sha256 = u
      },
      90476: function (e, t, n) {
        'use strict'
        n.r(t),
          n.d(t, {
            __extends: function () {
              return o
            },
            __assign: function () {
              return i
            },
            __rest: function () {
              return a
            },
            __decorate: function () {
              return u
            },
            __param: function () {
              return s
            },
            __metadata: function () {
              return c
            },
            __awaiter: function () {
              return l
            },
            __generator: function () {
              return f
            },
            __createBinding: function () {
              return d
            },
            __exportStar: function () {
              return p
            },
            __values: function () {
              return h
            },
            __read: function () {
              return v
            },
            __spread: function () {
              return g
            },
            __spreadArrays: function () {
              return y
            },
            __await: function () {
              return m
            },
            __asyncGenerator: function () {
              return w
            },
            __asyncDelegator: function () {
              return b
            },
            __asyncValues: function () {
              return S
            },
            __makeTemplateObject: function () {
              return _
            },
            __importStar: function () {
              return E
            },
            __importDefault: function () {
              return A
            },
            __classPrivateFieldGet: function () {
              return O
            },
            __classPrivateFieldSet: function () {
              return C
            },
          })
        var r = function (e, t) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t
              }) ||
            function (e, t) {
              for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            })(e, t)
        }
        function o(e, t) {
          function n() {
            this.constructor = e
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()))
        }
        var i = function () {
          return (i =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
              return e
            }).apply(this, arguments)
        }
        function a(e, t) {
          var n = {}
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              t.indexOf(r) < 0 &&
              (n[r] = e[r])
          if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
            var o = 0
            for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
              t.indexOf(r[o]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
                (n[r[o]] = e[r[o]])
          }
          return n
        }
        function u(e, t, n, r) {
          var o,
            i = arguments.length,
            a =
              i < 3
                ? t
                : null === r
                ? (r = Object.getOwnPropertyDescriptor(t, n))
                : r
          if (
            'object' == typeof Reflect &&
            'function' == typeof Reflect.decorate
          )
            a = Reflect.decorate(e, t, n, r)
          else
            for (var u = e.length - 1; u >= 0; u--)
              (o = e[u]) &&
                (a = (i < 3 ? o(a) : i > 3 ? o(t, n, a) : o(t, n)) || a)
          return i > 3 && a && Object.defineProperty(t, n, a), a
        }
        function s(e, t) {
          return function (n, r) {
            t(n, r, e)
          }
        }
        function c(e, t) {
          if (
            'object' == typeof Reflect &&
            'function' == typeof Reflect.metadata
          )
            return Reflect.metadata(e, t)
        }
        function l(e, t, n, r) {
          return new (n || (n = Promise))(function (o, i) {
            function a(e) {
              try {
                s(r.next(e))
              } catch (e) {
                i(e)
              }
            }
            function u(e) {
              try {
                s(r.throw(e))
              } catch (e) {
                i(e)
              }
            }
            function s(e) {
              var t
              e.done
                ? o(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t)
                      })).then(a, u)
            }
            s((r = r.apply(e, t || [])).next())
          })
        }
        function f(e, t) {
          var n,
            r,
            o,
            i,
            a = {
              label: 0,
              sent: function () {
                if (1 & o[0]) throw o[1]
                return o[1]
              },
              trys: [],
              ops: [],
            }
          return (
            (i = { next: u(0), throw: u(1), return: u(2) }),
            'function' == typeof Symbol &&
              (i[Symbol.iterator] = function () {
                return this
              }),
            i
          )
          function u(i) {
            return function (u) {
              return (function (i) {
                if (n) throw new TypeError('Generator is already executing.')
                for (; a; )
                  try {
                    if (
                      ((n = 1),
                      r &&
                        (o =
                          2 & i[0]
                            ? r.return
                            : i[0]
                            ? r.throw || ((o = r.return) && o.call(r), 0)
                            : r.next) &&
                        !(o = o.call(r, i[1])).done)
                    )
                      return o
                    switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                      case 0:
                      case 1:
                        o = i
                        break
                      case 4:
                        return a.label++, { value: i[1], done: !1 }
                      case 5:
                        a.label++, (r = i[1]), (i = [0])
                        continue
                      case 7:
                        ;(i = a.ops.pop()), a.trys.pop()
                        continue
                      default:
                        if (
                          !((o = a.trys),
                          (o = o.length > 0 && o[o.length - 1]) ||
                            (6 !== i[0] && 2 !== i[0]))
                        ) {
                          a = 0
                          continue
                        }
                        if (
                          3 === i[0] &&
                          (!o || (i[1] > o[0] && i[1] < o[3]))
                        ) {
                          a.label = i[1]
                          break
                        }
                        if (6 === i[0] && a.label < o[1]) {
                          ;(a.label = o[1]), (o = i)
                          break
                        }
                        if (o && a.label < o[2]) {
                          ;(a.label = o[2]), a.ops.push(i)
                          break
                        }
                        o[2] && a.ops.pop(), a.trys.pop()
                        continue
                    }
                    i = t.call(e, a)
                  } catch (e) {
                    ;(i = [6, e]), (r = 0)
                  } finally {
                    n = o = 0
                  }
                if (5 & i[0]) throw i[1]
                return { value: i[0] ? i[1] : void 0, done: !0 }
              })([i, u])
            }
          }
        }
        function d(e, t, n, r) {
          void 0 === r && (r = n), (e[r] = t[n])
        }
        function p(e, t) {
          for (var n in e)
            'default' === n || t.hasOwnProperty(n) || (t[n] = e[n])
        }
        function h(e) {
          var t = 'function' == typeof Symbol && Symbol.iterator,
            n = t && e[t],
            r = 0
          if (n) return n.call(e)
          if (e && 'number' == typeof e.length)
            return {
              next: function () {
                return (
                  e && r >= e.length && (e = void 0),
                  { value: e && e[r++], done: !e }
                )
              },
            }
          throw new TypeError(
            t ? 'Object is not iterable.' : 'Symbol.iterator is not defined.',
          )
        }
        function v(e, t) {
          var n = 'function' == typeof Symbol && e[Symbol.iterator]
          if (!n) return e
          var r,
            o,
            i = n.call(e),
            a = []
          try {
            for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; )
              a.push(r.value)
          } catch (e) {
            o = { error: e }
          } finally {
            try {
              r && !r.done && (n = i.return) && n.call(i)
            } finally {
              if (o) throw o.error
            }
          }
          return a
        }
        function g() {
          for (var e = [], t = 0; t < arguments.length; t++)
            e = e.concat(v(arguments[t]))
          return e
        }
        function y() {
          for (var e = 0, t = 0, n = arguments.length; t < n; t++)
            e += arguments[t].length
          var r = Array(e),
            o = 0
          for (t = 0; t < n; t++)
            for (var i = arguments[t], a = 0, u = i.length; a < u; a++, o++)
              r[o] = i[a]
          return r
        }
        function m(e) {
          return this instanceof m ? ((this.v = e), this) : new m(e)
        }
        function w(e, t, n) {
          if (!Symbol.asyncIterator)
            throw new TypeError('Symbol.asyncIterator is not defined.')
          var r,
            o = n.apply(e, t || []),
            i = []
          return (
            (r = {}),
            a('next'),
            a('throw'),
            a('return'),
            (r[Symbol.asyncIterator] = function () {
              return this
            }),
            r
          )
          function a(e) {
            o[e] &&
              (r[e] = function (t) {
                return new Promise(function (n, r) {
                  i.push([e, t, n, r]) > 1 || u(e, t)
                })
              })
          }
          function u(e, t) {
            try {
              ;(n = o[e](t)).value instanceof m
                ? Promise.resolve(n.value.v).then(s, c)
                : l(i[0][2], n)
            } catch (e) {
              l(i[0][3], e)
            }
            var n
          }
          function s(e) {
            u('next', e)
          }
          function c(e) {
            u('throw', e)
          }
          function l(e, t) {
            e(t), i.shift(), i.length && u(i[0][0], i[0][1])
          }
        }
        function b(e) {
          var t, n
          return (
            (t = {}),
            r('next'),
            r('throw', function (e) {
              throw e
            }),
            r('return'),
            (t[Symbol.iterator] = function () {
              return this
            }),
            t
          )
          function r(r, o) {
            t[r] = e[r]
              ? function (t) {
                  return (n = !n)
                    ? { value: m(e[r](t)), done: 'return' === r }
                    : o
                    ? o(t)
                    : t
                }
              : o
          }
        }
        function S(e) {
          if (!Symbol.asyncIterator)
            throw new TypeError('Symbol.asyncIterator is not defined.')
          var t,
            n = e[Symbol.asyncIterator]
          return n
            ? n.call(e)
            : ((e = h(e)),
              (t = {}),
              r('next'),
              r('throw'),
              r('return'),
              (t[Symbol.asyncIterator] = function () {
                return this
              }),
              t)
          function r(n) {
            t[n] =
              e[n] &&
              function (t) {
                return new Promise(function (r, o) {
                  ;(function (e, t, n, r) {
                    Promise.resolve(r).then(function (t) {
                      e({ value: t, done: n })
                    }, t)
                  })(r, o, (t = e[n](t)).done, t.value)
                })
              }
          }
        }
        function _(e, t) {
          return (
            Object.defineProperty
              ? Object.defineProperty(e, 'raw', { value: t })
              : (e.raw = t),
            e
          )
        }
        function E(e) {
          if (e && e.__esModule) return e
          var t = {}
          if (null != e)
            for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n])
          return (t.default = e), t
        }
        function A(e) {
          return e && e.__esModule ? e : { default: e }
        }
        function O(e, t) {
          if (!t.has(e))
            throw new TypeError(
              'attempted to get private field on non-instance',
            )
          return t.get(e)
        }
        function C(e, t, n) {
          if (!t.has(e))
            throw new TypeError(
              'attempted to set private field on non-instance',
            )
          return t.set(e, n), n
        }
      },
      80707: function (e, t, n) {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (0, n(37694).__exportStar)(n(55662), t)
      },
      55662: function (e, t, n) {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.supportsZeroByteGCM = t.supportsSubtleCrypto = t.supportsSecureRandom = t.supportsWebCrypto = void 0)
        var r = n(37694),
          o = [
            'decrypt',
            'digest',
            'encrypt',
            'exportKey',
            'generateKey',
            'importKey',
            'sign',
            'verify',
          ]
        function i(e) {
          return (
            'object' == typeof e &&
            'object' == typeof e.crypto &&
            'function' == typeof e.crypto.getRandomValues
          )
        }
        function a(e) {
          return (
            e &&
            o.every(function (t) {
              return 'function' == typeof e[t]
            })
          )
        }
        ;(t.supportsWebCrypto = function (e) {
          return (
            !(!i(e) || 'object' != typeof e.crypto.subtle) && a(e.crypto.subtle)
          )
        }),
          (t.supportsSecureRandom = i),
          (t.supportsSubtleCrypto = a),
          (t.supportsZeroByteGCM = function (e) {
            return (0, r.__awaiter)(this, void 0, void 0, function () {
              var t
              return (0, r.__generator)(this, function (n) {
                switch (n.label) {
                  case 0:
                    if (!a(e)) return [2, !1]
                    n.label = 1
                  case 1:
                    return (
                      n.trys.push([1, 4, , 5]),
                      [
                        4,
                        e.generateKey({ name: 'AES-GCM', length: 128 }, !1, [
                          'encrypt',
                        ]),
                      ]
                    )
                  case 2:
                    return (
                      (t = n.sent()),
                      [
                        4,
                        e.encrypt(
                          {
                            name: 'AES-GCM',
                            iv: new Uint8Array(Array(12)),
                            additionalData: new Uint8Array(Array(16)),
                            tagLength: 128,
                          },
                          t,
                          new Uint8Array(0),
                        ),
                      ]
                    )
                  case 3:
                    return [2, 16 === n.sent().byteLength]
                  case 4:
                    return n.sent(), [2, !1]
                  case 5:
                    return [2]
                }
              })
            })
          })
      },
      37694: function (e, t, n) {
        'use strict'
        n.r(t),
          n.d(t, {
            __extends: function () {
              return o
            },
            __assign: function () {
              return i
            },
            __rest: function () {
              return a
            },
            __decorate: function () {
              return u
            },
            __param: function () {
              return s
            },
            __metadata: function () {
              return c
            },
            __awaiter: function () {
              return l
            },
            __generator: function () {
              return f
            },
            __createBinding: function () {
              return d
            },
            __exportStar: function () {
              return p
            },
            __values: function () {
              return h
            },
            __read: function () {
              return v
            },
            __spread: function () {
              return g
            },
            __spreadArrays: function () {
              return y
            },
            __await: function () {
              return m
            },
            __asyncGenerator: function () {
              return w
            },
            __asyncDelegator: function () {
              return b
            },
            __asyncValues: function () {
              return S
            },
            __makeTemplateObject: function () {
              return _
            },
            __importStar: function () {
              return E
            },
            __importDefault: function () {
              return A
            },
            __classPrivateFieldGet: function () {
              return O
            },
            __classPrivateFieldSet: function () {
              return C
            },
          })
        var r = function (e, t) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t
              }) ||
            function (e, t) {
              for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            })(e, t)
        }
        function o(e, t) {
          function n() {
            this.constructor = e
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()))
        }
        var i = function () {
          return (i =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
              return e
            }).apply(this, arguments)
        }
        function a(e, t) {
          var n = {}
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              t.indexOf(r) < 0 &&
              (n[r] = e[r])
          if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
            var o = 0
            for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
              t.indexOf(r[o]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
                (n[r[o]] = e[r[o]])
          }
          return n
        }
        function u(e, t, n, r) {
          var o,
            i = arguments.length,
            a =
              i < 3
                ? t
                : null === r
                ? (r = Object.getOwnPropertyDescriptor(t, n))
                : r
          if (
            'object' == typeof Reflect &&
            'function' == typeof Reflect.decorate
          )
            a = Reflect.decorate(e, t, n, r)
          else
            for (var u = e.length - 1; u >= 0; u--)
              (o = e[u]) &&
                (a = (i < 3 ? o(a) : i > 3 ? o(t, n, a) : o(t, n)) || a)
          return i > 3 && a && Object.defineProperty(t, n, a), a
        }
        function s(e, t) {
          return function (n, r) {
            t(n, r, e)
          }
        }
        function c(e, t) {
          if (
            'object' == typeof Reflect &&
            'function' == typeof Reflect.metadata
          )
            return Reflect.metadata(e, t)
        }
        function l(e, t, n, r) {
          return new (n || (n = Promise))(function (o, i) {
            function a(e) {
              try {
                s(r.next(e))
              } catch (e) {
                i(e)
              }
            }
            function u(e) {
              try {
                s(r.throw(e))
              } catch (e) {
                i(e)
              }
            }
            function s(e) {
              var t
              e.done
                ? o(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t)
                      })).then(a, u)
            }
            s((r = r.apply(e, t || [])).next())
          })
        }
        function f(e, t) {
          var n,
            r,
            o,
            i,
            a = {
              label: 0,
              sent: function () {
                if (1 & o[0]) throw o[1]
                return o[1]
              },
              trys: [],
              ops: [],
            }
          return (
            (i = { next: u(0), throw: u(1), return: u(2) }),
            'function' == typeof Symbol &&
              (i[Symbol.iterator] = function () {
                return this
              }),
            i
          )
          function u(i) {
            return function (u) {
              return (function (i) {
                if (n) throw new TypeError('Generator is already executing.')
                for (; a; )
                  try {
                    if (
                      ((n = 1),
                      r &&
                        (o =
                          2 & i[0]
                            ? r.return
                            : i[0]
                            ? r.throw || ((o = r.return) && o.call(r), 0)
                            : r.next) &&
                        !(o = o.call(r, i[1])).done)
                    )
                      return o
                    switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                      case 0:
                      case 1:
                        o = i
                        break
                      case 4:
                        return a.label++, { value: i[1], done: !1 }
                      case 5:
                        a.label++, (r = i[1]), (i = [0])
                        continue
                      case 7:
                        ;(i = a.ops.pop()), a.trys.pop()
                        continue
                      default:
                        if (
                          !((o = a.trys),
                          (o = o.length > 0 && o[o.length - 1]) ||
                            (6 !== i[0] && 2 !== i[0]))
                        ) {
                          a = 0
                          continue
                        }
                        if (
                          3 === i[0] &&
                          (!o || (i[1] > o[0] && i[1] < o[3]))
                        ) {
                          a.label = i[1]
                          break
                        }
                        if (6 === i[0] && a.label < o[1]) {
                          ;(a.label = o[1]), (o = i)
                          break
                        }
                        if (o && a.label < o[2]) {
                          ;(a.label = o[2]), a.ops.push(i)
                          break
                        }
                        o[2] && a.ops.pop(), a.trys.pop()
                        continue
                    }
                    i = t.call(e, a)
                  } catch (e) {
                    ;(i = [6, e]), (r = 0)
                  } finally {
                    n = o = 0
                  }
                if (5 & i[0]) throw i[1]
                return { value: i[0] ? i[1] : void 0, done: !0 }
              })([i, u])
            }
          }
        }
        function d(e, t, n, r) {
          void 0 === r && (r = n), (e[r] = t[n])
        }
        function p(e, t) {
          for (var n in e)
            'default' === n || t.hasOwnProperty(n) || (t[n] = e[n])
        }
        function h(e) {
          var t = 'function' == typeof Symbol && Symbol.iterator,
            n = t && e[t],
            r = 0
          if (n) return n.call(e)
          if (e && 'number' == typeof e.length)
            return {
              next: function () {
                return (
                  e && r >= e.length && (e = void 0),
                  { value: e && e[r++], done: !e }
                )
              },
            }
          throw new TypeError(
            t ? 'Object is not iterable.' : 'Symbol.iterator is not defined.',
          )
        }
        function v(e, t) {
          var n = 'function' == typeof Symbol && e[Symbol.iterator]
          if (!n) return e
          var r,
            o,
            i = n.call(e),
            a = []
          try {
            for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; )
              a.push(r.value)
          } catch (e) {
            o = { error: e }
          } finally {
            try {
              r && !r.done && (n = i.return) && n.call(i)
            } finally {
              if (o) throw o.error
            }
          }
          return a
        }
        function g() {
          for (var e = [], t = 0; t < arguments.length; t++)
            e = e.concat(v(arguments[t]))
          return e
        }
        function y() {
          for (var e = 0, t = 0, n = arguments.length; t < n; t++)
            e += arguments[t].length
          var r = Array(e),
            o = 0
          for (t = 0; t < n; t++)
            for (var i = arguments[t], a = 0, u = i.length; a < u; a++, o++)
              r[o] = i[a]
          return r
        }
        function m(e) {
          return this instanceof m ? ((this.v = e), this) : new m(e)
        }
        function w(e, t, n) {
          if (!Symbol.asyncIterator)
            throw new TypeError('Symbol.asyncIterator is not defined.')
          var r,
            o = n.apply(e, t || []),
            i = []
          return (
            (r = {}),
            a('next'),
            a('throw'),
            a('return'),
            (r[Symbol.asyncIterator] = function () {
              return this
            }),
            r
          )
          function a(e) {
            o[e] &&
              (r[e] = function (t) {
                return new Promise(function (n, r) {
                  i.push([e, t, n, r]) > 1 || u(e, t)
                })
              })
          }
          function u(e, t) {
            try {
              ;(n = o[e](t)).value instanceof m
                ? Promise.resolve(n.value.v).then(s, c)
                : l(i[0][2], n)
            } catch (e) {
              l(i[0][3], e)
            }
            var n
          }
          function s(e) {
            u('next', e)
          }
          function c(e) {
            u('throw', e)
          }
          function l(e, t) {
            e(t), i.shift(), i.length && u(i[0][0], i[0][1])
          }
        }
        function b(e) {
          var t, n
          return (
            (t = {}),
            r('next'),
            r('throw', function (e) {
              throw e
            }),
            r('return'),
            (t[Symbol.iterator] = function () {
              return this
            }),
            t
          )
          function r(r, o) {
            t[r] = e[r]
              ? function (t) {
                  return (n = !n)
                    ? { value: m(e[r](t)), done: 'return' === r }
                    : o
                    ? o(t)
                    : t
                }
              : o
          }
        }
        function S(e) {
          if (!Symbol.asyncIterator)
            throw new TypeError('Symbol.asyncIterator is not defined.')
          var t,
            n = e[Symbol.asyncIterator]
          return n
            ? n.call(e)
            : ((e = h(e)),
              (t = {}),
              r('next'),
              r('throw'),
              r('return'),
              (t[Symbol.asyncIterator] = function () {
                return this
              }),
              t)
          function r(n) {
            t[n] =
              e[n] &&
              function (t) {
                return new Promise(function (r, o) {
                  ;(function (e, t, n, r) {
                    Promise.resolve(r).then(function (t) {
                      e({ value: t, done: n })
                    }, t)
                  })(r, o, (t = e[n](t)).done, t.value)
                })
              }
          }
        }
        function _(e, t) {
          return (
            Object.defineProperty
              ? Object.defineProperty(e, 'raw', { value: t })
              : (e.raw = t),
            e
          )
        }
        function E(e) {
          if (e && e.__esModule) return e
          var t = {}
          if (null != e)
            for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n])
          return (t.default = e), t
        }
        function A(e) {
          return e && e.__esModule ? e : { default: e }
        }
        function O(e, t) {
          if (!t.has(e))
            throw new TypeError(
              'attempted to get private field on non-instance',
            )
          return t.get(e)
        }
        function C(e, t, n) {
          if (!t.has(e))
            throw new TypeError(
              'attempted to set private field on non-instance',
            )
          return t.set(e, n), n
        }
      },
      5477: function (e, t, n) {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.convertToBuffer = void 0)
        var r = n(32254),
          o =
            'undefined' != typeof Buffer && Buffer.from
              ? function (e) {
                  return Buffer.from(e, 'utf8')
                }
              : r.fromUtf8
        t.convertToBuffer = function (e) {
          return e instanceof Uint8Array
            ? e
            : 'string' == typeof e
            ? o(e)
            : ArrayBuffer.isView(e)
            ? new Uint8Array(
                e.buffer,
                e.byteOffset,
                e.byteLength / Uint8Array.BYTES_PER_ELEMENT,
              )
            : new Uint8Array(e)
        }
      },
      2551: function (e, t, n) {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.uint32ArrayFrom = t.numToUint8 = t.isEmptyData = t.convertToBuffer = void 0)
        var r = n(5477)
        Object.defineProperty(t, 'convertToBuffer', {
          enumerable: !0,
          get: function () {
            return r.convertToBuffer
          },
        })
        var o = n(35193)
        Object.defineProperty(t, 'isEmptyData', {
          enumerable: !0,
          get: function () {
            return o.isEmptyData
          },
        })
        var i = n(54151)
        Object.defineProperty(t, 'numToUint8', {
          enumerable: !0,
          get: function () {
            return i.numToUint8
          },
        })
        var a = n(17660)
        Object.defineProperty(t, 'uint32ArrayFrom', {
          enumerable: !0,
          get: function () {
            return a.uint32ArrayFrom
          },
        })
      },
      35193: function (e, t) {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.isEmptyData = void 0),
          (t.isEmptyData = function (e) {
            return 'string' == typeof e ? 0 === e.length : 0 === e.byteLength
          })
      },
      54151: function (e, t) {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.numToUint8 = void 0),
          (t.numToUint8 = function (e) {
            return new Uint8Array([
              (4278190080 & e) >> 24,
              (16711680 & e) >> 16,
              (65280 & e) >> 8,
              255 & e,
            ])
          })
      },
      17660: function (e, t) {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.uint32ArrayFrom = void 0),
          (t.uint32ArrayFrom = function (e) {
            if (!Uint32Array.from) {
              for (var t = new Uint32Array(e.length), n = 0; n < e.length; )
                (t[n] = e[n]), (n += 1)
              return t
            }
            return Uint32Array.from(e)
          })
      },
      86491: function (e, t, n) {
        'use strict'
        n.r(t),
          n.d(t, {
            locateWindow: function () {
              return o
            },
          })
        var r = {}
        function o() {
          return 'undefined' != typeof window
            ? window
            : 'undefined' != typeof self
            ? self
            : r
        }
      },
      32254: function (e, t, n) {
        'use strict'
        n.r(t),
          n.d(t, {
            fromUtf8: function () {
              return r
            },
            toUtf8: function () {
              return o
            },
          })
        var r = function (e) {
            return 'function' == typeof TextEncoder
              ? (function (e) {
                  return new TextEncoder().encode(e)
                })(e)
              : (function (e) {
                  for (var t = [], n = 0, r = e.length; n < r; n++) {
                    var o = e.charCodeAt(n)
                    if (o < 128) t.push(o)
                    else if (o < 2048) t.push((o >> 6) | 192, (63 & o) | 128)
                    else if (
                      n + 1 < e.length &&
                      55296 == (64512 & o) &&
                      56320 == (64512 & e.charCodeAt(n + 1))
                    ) {
                      var i =
                        65536 + ((1023 & o) << 10) + (1023 & e.charCodeAt(++n))
                      t.push(
                        (i >> 18) | 240,
                        ((i >> 12) & 63) | 128,
                        ((i >> 6) & 63) | 128,
                        (63 & i) | 128,
                      )
                    } else
                      t.push(
                        (o >> 12) | 224,
                        ((o >> 6) & 63) | 128,
                        (63 & o) | 128,
                      )
                  }
                  return Uint8Array.from(t)
                })(e)
          },
          o = function (e) {
            return 'function' == typeof TextDecoder
              ? (function (e) {
                  return new TextDecoder('utf-8').decode(e)
                })(e)
              : (function (e) {
                  for (var t = '', n = 0, r = e.length; n < r; n++) {
                    var o = e[n]
                    if (o < 128) t += String.fromCharCode(o)
                    else if (192 <= o && o < 224) {
                      var i = e[++n]
                      t += String.fromCharCode(((31 & o) << 6) | (63 & i))
                    } else if (240 <= o && o < 365) {
                      var a =
                        '%' +
                        [o, e[++n], e[++n], e[++n]]
                          .map(function (e) {
                            return e.toString(16)
                          })
                          .join('%')
                      t += decodeURIComponent(a)
                    } else
                      t += String.fromCharCode(
                        ((15 & o) << 12) | ((63 & e[++n]) << 6) | (63 & e[++n]),
                      )
                  }
                  return t
                })(e)
          }
      },
      50311: function (e) {
        e.exports = (function (e) {
          var t = {}
          function n(r) {
            if (t[r]) return t[r].exports
            var o = (t[r] = { i: r, l: !1, exports: {} })
            return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports
          }
          return (
            (n.m = e),
            (n.c = t),
            (n.d = function (e, t, r) {
              n.o(e, t) ||
                Object.defineProperty(e, t, { enumerable: !0, get: r })
            }),
            (n.r = function (e) {
              'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, {
                  value: 'Module',
                }),
                Object.defineProperty(e, '__esModule', { value: !0 })
            }),
            (n.t = function (e, t) {
              if ((1 & t && (e = n(e)), 8 & t)) return e
              if (4 & t && 'object' == typeof e && e && e.__esModule) return e
              var r = Object.create(null)
              if (
                (n.r(r),
                Object.defineProperty(r, 'default', {
                  enumerable: !0,
                  value: e,
                }),
                2 & t && 'string' != typeof e)
              )
                for (var o in e)
                  n.d(
                    r,
                    o,
                    function (t) {
                      return e[t]
                    }.bind(null, o),
                  )
              return r
            }),
            (n.n = function (e) {
              var t =
                e && e.__esModule
                  ? function () {
                      return e.default
                    }
                  : function () {
                      return e
                    }
              return n.d(t, 'a', t), t
            }),
            (n.o = function (e, t) {
              return Object.prototype.hasOwnProperty.call(e, t)
            }),
            (n.p = ''),
            n((n.s = 90))
          )
        })({
          17: function (e, t, n) {
            'use strict'
            ;(t.__esModule = !0), (t.default = void 0)
            var r = n(18),
              o = (function () {
                function e() {}
                return (
                  (e.getFirstMatch = function (e, t) {
                    var n = t.match(e)
                    return (n && n.length > 0 && n[1]) || ''
                  }),
                  (e.getSecondMatch = function (e, t) {
                    var n = t.match(e)
                    return (n && n.length > 1 && n[2]) || ''
                  }),
                  (e.matchAndReturnConst = function (e, t, n) {
                    if (e.test(t)) return n
                  }),
                  (e.getWindowsVersionName = function (e) {
                    switch (e) {
                      case 'NT':
                        return 'NT'
                      case 'XP':
                        return 'XP'
                      case 'NT 5.0':
                        return '2000'
                      case 'NT 5.1':
                        return 'XP'
                      case 'NT 5.2':
                        return '2003'
                      case 'NT 6.0':
                        return 'Vista'
                      case 'NT 6.1':
                        return '7'
                      case 'NT 6.2':
                        return '8'
                      case 'NT 6.3':
                        return '8.1'
                      case 'NT 10.0':
                        return '10'
                      default:
                        return
                    }
                  }),
                  (e.getMacOSVersionName = function (e) {
                    var t = e
                      .split('.')
                      .splice(0, 2)
                      .map(function (e) {
                        return parseInt(e, 10) || 0
                      })
                    if ((t.push(0), 10 === t[0]))
                      switch (t[1]) {
                        case 5:
                          return 'Leopard'
                        case 6:
                          return 'Snow Leopard'
                        case 7:
                          return 'Lion'
                        case 8:
                          return 'Mountain Lion'
                        case 9:
                          return 'Mavericks'
                        case 10:
                          return 'Yosemite'
                        case 11:
                          return 'El Capitan'
                        case 12:
                          return 'Sierra'
                        case 13:
                          return 'High Sierra'
                        case 14:
                          return 'Mojave'
                        case 15:
                          return 'Catalina'
                        default:
                          return
                      }
                  }),
                  (e.getAndroidVersionName = function (e) {
                    var t = e
                      .split('.')
                      .splice(0, 2)
                      .map(function (e) {
                        return parseInt(e, 10) || 0
                      })
                    if ((t.push(0), !(1 === t[0] && t[1] < 5)))
                      return 1 === t[0] && t[1] < 6
                        ? 'Cupcake'
                        : 1 === t[0] && t[1] >= 6
                        ? 'Donut'
                        : 2 === t[0] && t[1] < 2
                        ? 'Eclair'
                        : 2 === t[0] && 2 === t[1]
                        ? 'Froyo'
                        : 2 === t[0] && t[1] > 2
                        ? 'Gingerbread'
                        : 3 === t[0]
                        ? 'Honeycomb'
                        : 4 === t[0] && t[1] < 1
                        ? 'Ice Cream Sandwich'
                        : 4 === t[0] && t[1] < 4
                        ? 'Jelly Bean'
                        : 4 === t[0] && t[1] >= 4
                        ? 'KitKat'
                        : 5 === t[0]
                        ? 'Lollipop'
                        : 6 === t[0]
                        ? 'Marshmallow'
                        : 7 === t[0]
                        ? 'Nougat'
                        : 8 === t[0]
                        ? 'Oreo'
                        : 9 === t[0]
                        ? 'Pie'
                        : void 0
                  }),
                  (e.getVersionPrecision = function (e) {
                    return e.split('.').length
                  }),
                  (e.compareVersions = function (t, n, r) {
                    void 0 === r && (r = !1)
                    var o = e.getVersionPrecision(t),
                      i = e.getVersionPrecision(n),
                      a = Math.max(o, i),
                      u = 0,
                      s = e.map([t, n], function (t) {
                        var n = a - e.getVersionPrecision(t),
                          r = t + new Array(n + 1).join('.0')
                        return e
                          .map(r.split('.'), function (e) {
                            return new Array(20 - e.length).join('0') + e
                          })
                          .reverse()
                      })
                    for (r && (u = a - Math.min(o, i)), a -= 1; a >= u; ) {
                      if (s[0][a] > s[1][a]) return 1
                      if (s[0][a] === s[1][a]) {
                        if (a === u) return 0
                        a -= 1
                      } else if (s[0][a] < s[1][a]) return -1
                    }
                  }),
                  (e.map = function (e, t) {
                    var n,
                      r = []
                    if (Array.prototype.map)
                      return Array.prototype.map.call(e, t)
                    for (n = 0; n < e.length; n += 1) r.push(t(e[n]))
                    return r
                  }),
                  (e.find = function (e, t) {
                    var n, r
                    if (Array.prototype.find)
                      return Array.prototype.find.call(e, t)
                    for (n = 0, r = e.length; n < r; n += 1) {
                      var o = e[n]
                      if (t(o, n)) return o
                    }
                  }),
                  (e.assign = function (e) {
                    for (
                      var t,
                        n,
                        r = e,
                        o = arguments.length,
                        i = new Array(o > 1 ? o - 1 : 0),
                        a = 1;
                      a < o;
                      a++
                    )
                      i[a - 1] = arguments[a]
                    if (Object.assign)
                      return Object.assign.apply(Object, [e].concat(i))
                    var u = function () {
                      var e = i[t]
                      'object' == typeof e &&
                        null !== e &&
                        Object.keys(e).forEach(function (t) {
                          r[t] = e[t]
                        })
                    }
                    for (t = 0, n = i.length; t < n; t += 1) u()
                    return e
                  }),
                  (e.getBrowserAlias = function (e) {
                    return r.BROWSER_ALIASES_MAP[e]
                  }),
                  (e.getBrowserTypeByAlias = function (e) {
                    return r.BROWSER_MAP[e] || ''
                  }),
                  e
                )
              })()
            ;(t.default = o), (e.exports = t.default)
          },
          18: function (e, t, n) {
            'use strict'
            ;(t.__esModule = !0),
              (t.ENGINE_MAP = t.OS_MAP = t.PLATFORMS_MAP = t.BROWSER_MAP = t.BROWSER_ALIASES_MAP = void 0),
              (t.BROWSER_ALIASES_MAP = {
                'Amazon Silk': 'amazon_silk',
                'Android Browser': 'android',
                Bada: 'bada',
                BlackBerry: 'blackberry',
                Chrome: 'chrome',
                Chromium: 'chromium',
                Electron: 'electron',
                Epiphany: 'epiphany',
                Firefox: 'firefox',
                Focus: 'focus',
                Generic: 'generic',
                'Google Search': 'google_search',
                Googlebot: 'googlebot',
                'Internet Explorer': 'ie',
                'K-Meleon': 'k_meleon',
                Maxthon: 'maxthon',
                'Microsoft Edge': 'edge',
                'MZ Browser': 'mz',
                'NAVER Whale Browser': 'naver',
                Opera: 'opera',
                'Opera Coast': 'opera_coast',
                PhantomJS: 'phantomjs',
                Puffin: 'puffin',
                QupZilla: 'qupzilla',
                QQ: 'qq',
                QQLite: 'qqlite',
                Safari: 'safari',
                Sailfish: 'sailfish',
                'Samsung Internet for Android': 'samsung_internet',
                SeaMonkey: 'seamonkey',
                Sleipnir: 'sleipnir',
                Swing: 'swing',
                Tizen: 'tizen',
                'UC Browser': 'uc',
                Vivaldi: 'vivaldi',
                'WebOS Browser': 'webos',
                WeChat: 'wechat',
                'Yandex Browser': 'yandex',
                Roku: 'roku',
              }),
              (t.BROWSER_MAP = {
                amazon_silk: 'Amazon Silk',
                android: 'Android Browser',
                bada: 'Bada',
                blackberry: 'BlackBerry',
                chrome: 'Chrome',
                chromium: 'Chromium',
                electron: 'Electron',
                epiphany: 'Epiphany',
                firefox: 'Firefox',
                focus: 'Focus',
                generic: 'Generic',
                googlebot: 'Googlebot',
                google_search: 'Google Search',
                ie: 'Internet Explorer',
                k_meleon: 'K-Meleon',
                maxthon: 'Maxthon',
                edge: 'Microsoft Edge',
                mz: 'MZ Browser',
                naver: 'NAVER Whale Browser',
                opera: 'Opera',
                opera_coast: 'Opera Coast',
                phantomjs: 'PhantomJS',
                puffin: 'Puffin',
                qupzilla: 'QupZilla',
                qq: 'QQ Browser',
                qqlite: 'QQ Browser Lite',
                safari: 'Safari',
                sailfish: 'Sailfish',
                samsung_internet: 'Samsung Internet for Android',
                seamonkey: 'SeaMonkey',
                sleipnir: 'Sleipnir',
                swing: 'Swing',
                tizen: 'Tizen',
                uc: 'UC Browser',
                vivaldi: 'Vivaldi',
                webos: 'WebOS Browser',
                wechat: 'WeChat',
                yandex: 'Yandex Browser',
              }),
              (t.PLATFORMS_MAP = {
                tablet: 'tablet',
                mobile: 'mobile',
                desktop: 'desktop',
                tv: 'tv',
              }),
              (t.OS_MAP = {
                WindowsPhone: 'Windows Phone',
                Windows: 'Windows',
                MacOS: 'macOS',
                iOS: 'iOS',
                Android: 'Android',
                WebOS: 'WebOS',
                BlackBerry: 'BlackBerry',
                Bada: 'Bada',
                Tizen: 'Tizen',
                Linux: 'Linux',
                ChromeOS: 'Chrome OS',
                PlayStation4: 'PlayStation 4',
                Roku: 'Roku',
              }),
              (t.ENGINE_MAP = {
                EdgeHTML: 'EdgeHTML',
                Blink: 'Blink',
                Trident: 'Trident',
                Presto: 'Presto',
                Gecko: 'Gecko',
                WebKit: 'WebKit',
              })
          },
          90: function (e, t, n) {
            'use strict'
            ;(t.__esModule = !0), (t.default = void 0)
            var r,
              o = (r = n(91)) && r.__esModule ? r : { default: r },
              i = n(18)
            function a(e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n]
                ;(r.enumerable = r.enumerable || !1),
                  (r.configurable = !0),
                  'value' in r && (r.writable = !0),
                  Object.defineProperty(e, r.key, r)
              }
            }
            var u = (function () {
              function e() {}
              var t, n
              return (
                (e.getParser = function (e, t) {
                  if ((void 0 === t && (t = !1), 'string' != typeof e))
                    throw new Error('UserAgent should be a string')
                  return new o.default(e, t)
                }),
                (e.parse = function (e) {
                  return new o.default(e).getResult()
                }),
                (t = e),
                (n = [
                  {
                    key: 'BROWSER_MAP',
                    get: function () {
                      return i.BROWSER_MAP
                    },
                  },
                  {
                    key: 'ENGINE_MAP',
                    get: function () {
                      return i.ENGINE_MAP
                    },
                  },
                  {
                    key: 'OS_MAP',
                    get: function () {
                      return i.OS_MAP
                    },
                  },
                  {
                    key: 'PLATFORMS_MAP',
                    get: function () {
                      return i.PLATFORMS_MAP
                    },
                  },
                ]) && a(t, n),
                e
              )
            })()
            ;(t.default = u), (e.exports = t.default)
          },
          91: function (e, t, n) {
            'use strict'
            ;(t.__esModule = !0), (t.default = void 0)
            var r = s(n(92)),
              o = s(n(93)),
              i = s(n(94)),
              a = s(n(95)),
              u = s(n(17))
            function s(e) {
              return e && e.__esModule ? e : { default: e }
            }
            var c = (function () {
              function e(e, t) {
                if ((void 0 === t && (t = !1), null == e || '' === e))
                  throw new Error("UserAgent parameter can't be empty")
                ;(this._ua = e),
                  (this.parsedResult = {}),
                  !0 !== t && this.parse()
              }
              var t = e.prototype
              return (
                (t.getUA = function () {
                  return this._ua
                }),
                (t.test = function (e) {
                  return e.test(this._ua)
                }),
                (t.parseBrowser = function () {
                  var e = this
                  this.parsedResult.browser = {}
                  var t = u.default.find(r.default, function (t) {
                    if ('function' == typeof t.test) return t.test(e)
                    if (t.test instanceof Array)
                      return t.test.some(function (t) {
                        return e.test(t)
                      })
                    throw new Error("Browser's test function is not valid")
                  })
                  return (
                    t && (this.parsedResult.browser = t.describe(this.getUA())),
                    this.parsedResult.browser
                  )
                }),
                (t.getBrowser = function () {
                  return this.parsedResult.browser
                    ? this.parsedResult.browser
                    : this.parseBrowser()
                }),
                (t.getBrowserName = function (e) {
                  return e
                    ? String(this.getBrowser().name).toLowerCase() || ''
                    : this.getBrowser().name || ''
                }),
                (t.getBrowserVersion = function () {
                  return this.getBrowser().version
                }),
                (t.getOS = function () {
                  return this.parsedResult.os
                    ? this.parsedResult.os
                    : this.parseOS()
                }),
                (t.parseOS = function () {
                  var e = this
                  this.parsedResult.os = {}
                  var t = u.default.find(o.default, function (t) {
                    if ('function' == typeof t.test) return t.test(e)
                    if (t.test instanceof Array)
                      return t.test.some(function (t) {
                        return e.test(t)
                      })
                    throw new Error("Browser's test function is not valid")
                  })
                  return (
                    t && (this.parsedResult.os = t.describe(this.getUA())),
                    this.parsedResult.os
                  )
                }),
                (t.getOSName = function (e) {
                  var t = this.getOS().name
                  return e ? String(t).toLowerCase() || '' : t || ''
                }),
                (t.getOSVersion = function () {
                  return this.getOS().version
                }),
                (t.getPlatform = function () {
                  return this.parsedResult.platform
                    ? this.parsedResult.platform
                    : this.parsePlatform()
                }),
                (t.getPlatformType = function (e) {
                  void 0 === e && (e = !1)
                  var t = this.getPlatform().type
                  return e ? String(t).toLowerCase() || '' : t || ''
                }),
                (t.parsePlatform = function () {
                  var e = this
                  this.parsedResult.platform = {}
                  var t = u.default.find(i.default, function (t) {
                    if ('function' == typeof t.test) return t.test(e)
                    if (t.test instanceof Array)
                      return t.test.some(function (t) {
                        return e.test(t)
                      })
                    throw new Error("Browser's test function is not valid")
                  })
                  return (
                    t &&
                      (this.parsedResult.platform = t.describe(this.getUA())),
                    this.parsedResult.platform
                  )
                }),
                (t.getEngine = function () {
                  return this.parsedResult.engine
                    ? this.parsedResult.engine
                    : this.parseEngine()
                }),
                (t.getEngineName = function (e) {
                  return e
                    ? String(this.getEngine().name).toLowerCase() || ''
                    : this.getEngine().name || ''
                }),
                (t.parseEngine = function () {
                  var e = this
                  this.parsedResult.engine = {}
                  var t = u.default.find(a.default, function (t) {
                    if ('function' == typeof t.test) return t.test(e)
                    if (t.test instanceof Array)
                      return t.test.some(function (t) {
                        return e.test(t)
                      })
                    throw new Error("Browser's test function is not valid")
                  })
                  return (
                    t && (this.parsedResult.engine = t.describe(this.getUA())),
                    this.parsedResult.engine
                  )
                }),
                (t.parse = function () {
                  return (
                    this.parseBrowser(),
                    this.parseOS(),
                    this.parsePlatform(),
                    this.parseEngine(),
                    this
                  )
                }),
                (t.getResult = function () {
                  return u.default.assign({}, this.parsedResult)
                }),
                (t.satisfies = function (e) {
                  var t = this,
                    n = {},
                    r = 0,
                    o = {},
                    i = 0
                  if (
                    (Object.keys(e).forEach(function (t) {
                      var a = e[t]
                      'string' == typeof a
                        ? ((o[t] = a), (i += 1))
                        : 'object' == typeof a && ((n[t] = a), (r += 1))
                    }),
                    r > 0)
                  ) {
                    var a = Object.keys(n),
                      s = u.default.find(a, function (e) {
                        return t.isOS(e)
                      })
                    if (s) {
                      var c = this.satisfies(n[s])
                      if (void 0 !== c) return c
                    }
                    var l = u.default.find(a, function (e) {
                      return t.isPlatform(e)
                    })
                    if (l) {
                      var f = this.satisfies(n[l])
                      if (void 0 !== f) return f
                    }
                  }
                  if (i > 0) {
                    var d = Object.keys(o),
                      p = u.default.find(d, function (e) {
                        return t.isBrowser(e, !0)
                      })
                    if (void 0 !== p) return this.compareVersion(o[p])
                  }
                }),
                (t.isBrowser = function (e, t) {
                  void 0 === t && (t = !1)
                  var n = this.getBrowserName().toLowerCase(),
                    r = e.toLowerCase(),
                    o = u.default.getBrowserTypeByAlias(r)
                  return t && o && (r = o.toLowerCase()), r === n
                }),
                (t.compareVersion = function (e) {
                  var t = [0],
                    n = e,
                    r = !1,
                    o = this.getBrowserVersion()
                  if ('string' == typeof o)
                    return (
                      '>' === e[0] || '<' === e[0]
                        ? ((n = e.substr(1)),
                          '=' === e[1]
                            ? ((r = !0), (n = e.substr(2)))
                            : (t = []),
                          '>' === e[0] ? t.push(1) : t.push(-1))
                        : '=' === e[0]
                        ? (n = e.substr(1))
                        : '~' === e[0] && ((r = !0), (n = e.substr(1))),
                      t.indexOf(u.default.compareVersions(o, n, r)) > -1
                    )
                }),
                (t.isOS = function (e) {
                  return this.getOSName(!0) === String(e).toLowerCase()
                }),
                (t.isPlatform = function (e) {
                  return this.getPlatformType(!0) === String(e).toLowerCase()
                }),
                (t.isEngine = function (e) {
                  return this.getEngineName(!0) === String(e).toLowerCase()
                }),
                (t.is = function (e, t) {
                  return (
                    void 0 === t && (t = !1),
                    this.isBrowser(e, t) || this.isOS(e) || this.isPlatform(e)
                  )
                }),
                (t.some = function (e) {
                  var t = this
                  return (
                    void 0 === e && (e = []),
                    e.some(function (e) {
                      return t.is(e)
                    })
                  )
                }),
                e
              )
            })()
            ;(t.default = c), (e.exports = t.default)
          },
          92: function (e, t, n) {
            'use strict'
            ;(t.__esModule = !0), (t.default = void 0)
            var r,
              o = (r = n(17)) && r.__esModule ? r : { default: r },
              i = /version\/(\d+(\.?_?\d+)+)/i,
              a = [
                {
                  test: [/googlebot/i],
                  describe: function (e) {
                    var t = { name: 'Googlebot' },
                      n =
                        o.default.getFirstMatch(
                          /googlebot\/(\d+(\.\d+))/i,
                          e,
                        ) || o.default.getFirstMatch(i, e)
                    return n && (t.version = n), t
                  },
                },
                {
                  test: [/opera/i],
                  describe: function (e) {
                    var t = { name: 'Opera' },
                      n =
                        o.default.getFirstMatch(i, e) ||
                        o.default.getFirstMatch(
                          /(?:opera)[\s/](\d+(\.?_?\d+)+)/i,
                          e,
                        )
                    return n && (t.version = n), t
                  },
                },
                {
                  test: [/opr\/|opios/i],
                  describe: function (e) {
                    var t = { name: 'Opera' },
                      n =
                        o.default.getFirstMatch(
                          /(?:opr|opios)[\s/](\S+)/i,
                          e,
                        ) || o.default.getFirstMatch(i, e)
                    return n && (t.version = n), t
                  },
                },
                {
                  test: [/SamsungBrowser/i],
                  describe: function (e) {
                    var t = { name: 'Samsung Internet for Android' },
                      n =
                        o.default.getFirstMatch(i, e) ||
                        o.default.getFirstMatch(
                          /(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i,
                          e,
                        )
                    return n && (t.version = n), t
                  },
                },
                {
                  test: [/Whale/i],
                  describe: function (e) {
                    var t = { name: 'NAVER Whale Browser' },
                      n =
                        o.default.getFirstMatch(i, e) ||
                        o.default.getFirstMatch(
                          /(?:whale)[\s/](\d+(?:\.\d+)+)/i,
                          e,
                        )
                    return n && (t.version = n), t
                  },
                },
                {
                  test: [/MZBrowser/i],
                  describe: function (e) {
                    var t = { name: 'MZ Browser' },
                      n =
                        o.default.getFirstMatch(
                          /(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i,
                          e,
                        ) || o.default.getFirstMatch(i, e)
                    return n && (t.version = n), t
                  },
                },
                {
                  test: [/focus/i],
                  describe: function (e) {
                    var t = { name: 'Focus' },
                      n =
                        o.default.getFirstMatch(
                          /(?:focus)[\s/](\d+(?:\.\d+)+)/i,
                          e,
                        ) || o.default.getFirstMatch(i, e)
                    return n && (t.version = n), t
                  },
                },
                {
                  test: [/swing/i],
                  describe: function (e) {
                    var t = { name: 'Swing' },
                      n =
                        o.default.getFirstMatch(
                          /(?:swing)[\s/](\d+(?:\.\d+)+)/i,
                          e,
                        ) || o.default.getFirstMatch(i, e)
                    return n && (t.version = n), t
                  },
                },
                {
                  test: [/coast/i],
                  describe: function (e) {
                    var t = { name: 'Opera Coast' },
                      n =
                        o.default.getFirstMatch(i, e) ||
                        o.default.getFirstMatch(
                          /(?:coast)[\s/](\d+(\.?_?\d+)+)/i,
                          e,
                        )
                    return n && (t.version = n), t
                  },
                },
                {
                  test: [/opt\/\d+(?:.?_?\d+)+/i],
                  describe: function (e) {
                    var t = { name: 'Opera Touch' },
                      n =
                        o.default.getFirstMatch(
                          /(?:opt)[\s/](\d+(\.?_?\d+)+)/i,
                          e,
                        ) || o.default.getFirstMatch(i, e)
                    return n && (t.version = n), t
                  },
                },
                {
                  test: [/yabrowser/i],
                  describe: function (e) {
                    var t = { name: 'Yandex Browser' },
                      n =
                        o.default.getFirstMatch(
                          /(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i,
                          e,
                        ) || o.default.getFirstMatch(i, e)
                    return n && (t.version = n), t
                  },
                },
                {
                  test: [/ucbrowser/i],
                  describe: function (e) {
                    var t = { name: 'UC Browser' },
                      n =
                        o.default.getFirstMatch(i, e) ||
                        o.default.getFirstMatch(
                          /(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i,
                          e,
                        )
                    return n && (t.version = n), t
                  },
                },
                {
                  test: [/Maxthon|mxios/i],
                  describe: function (e) {
                    var t = { name: 'Maxthon' },
                      n =
                        o.default.getFirstMatch(i, e) ||
                        o.default.getFirstMatch(
                          /(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i,
                          e,
                        )
                    return n && (t.version = n), t
                  },
                },
                {
                  test: [/epiphany/i],
                  describe: function (e) {
                    var t = { name: 'Epiphany' },
                      n =
                        o.default.getFirstMatch(i, e) ||
                        o.default.getFirstMatch(
                          /(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i,
                          e,
                        )
                    return n && (t.version = n), t
                  },
                },
                {
                  test: [/puffin/i],
                  describe: function (e) {
                    var t = { name: 'Puffin' },
                      n =
                        o.default.getFirstMatch(i, e) ||
                        o.default.getFirstMatch(
                          /(?:puffin)[\s/](\d+(\.?_?\d+)+)/i,
                          e,
                        )
                    return n && (t.version = n), t
                  },
                },
                {
                  test: [/sleipnir/i],
                  describe: function (e) {
                    var t = { name: 'Sleipnir' },
                      n =
                        o.default.getFirstMatch(i, e) ||
                        o.default.getFirstMatch(
                          /(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i,
                          e,
                        )
                    return n && (t.version = n), t
                  },
                },
                {
                  test: [/k-meleon/i],
                  describe: function (e) {
                    var t = { name: 'K-Meleon' },
                      n =
                        o.default.getFirstMatch(i, e) ||
                        o.default.getFirstMatch(
                          /(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i,
                          e,
                        )
                    return n && (t.version = n), t
                  },
                },
                {
                  test: [/micromessenger/i],
                  describe: function (e) {
                    var t = { name: 'WeChat' },
                      n =
                        o.default.getFirstMatch(
                          /(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i,
                          e,
                        ) || o.default.getFirstMatch(i, e)
                    return n && (t.version = n), t
                  },
                },
                {
                  test: [/qqbrowser/i],
                  describe: function (e) {
                    var t = {
                        name: /qqbrowserlite/i.test(e)
                          ? 'QQ Browser Lite'
                          : 'QQ Browser',
                      },
                      n =
                        o.default.getFirstMatch(
                          /(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i,
                          e,
                        ) || o.default.getFirstMatch(i, e)
                    return n && (t.version = n), t
                  },
                },
                {
                  test: [/msie|trident/i],
                  describe: function (e) {
                    var t = { name: 'Internet Explorer' },
                      n = o.default.getFirstMatch(
                        /(?:msie |rv:)(\d+(\.?_?\d+)+)/i,
                        e,
                      )
                    return n && (t.version = n), t
                  },
                },
                {
                  test: [/\sedg\//i],
                  describe: function (e) {
                    var t = { name: 'Microsoft Edge' },
                      n = o.default.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i, e)
                    return n && (t.version = n), t
                  },
                },
                {
                  test: [/edg([ea]|ios)/i],
                  describe: function (e) {
                    var t = { name: 'Microsoft Edge' },
                      n = o.default.getSecondMatch(
                        /edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i,
                        e,
                      )
                    return n && (t.version = n), t
                  },
                },
                {
                  test: [/vivaldi/i],
                  describe: function (e) {
                    var t = { name: 'Vivaldi' },
                      n = o.default.getFirstMatch(
                        /vivaldi\/(\d+(\.?_?\d+)+)/i,
                        e,
                      )
                    return n && (t.version = n), t
                  },
                },
                {
                  test: [/seamonkey/i],
                  describe: function (e) {
                    var t = { name: 'SeaMonkey' },
                      n = o.default.getFirstMatch(
                        /seamonkey\/(\d+(\.?_?\d+)+)/i,
                        e,
                      )
                    return n && (t.version = n), t
                  },
                },
                {
                  test: [/sailfish/i],
                  describe: function (e) {
                    var t = { name: 'Sailfish' },
                      n = o.default.getFirstMatch(
                        /sailfish\s?browser\/(\d+(\.\d+)?)/i,
                        e,
                      )
                    return n && (t.version = n), t
                  },
                },
                {
                  test: [/silk/i],
                  describe: function (e) {
                    var t = { name: 'Amazon Silk' },
                      n = o.default.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i, e)
                    return n && (t.version = n), t
                  },
                },
                {
                  test: [/phantom/i],
                  describe: function (e) {
                    var t = { name: 'PhantomJS' },
                      n = o.default.getFirstMatch(
                        /phantomjs\/(\d+(\.?_?\d+)+)/i,
                        e,
                      )
                    return n && (t.version = n), t
                  },
                },
                {
                  test: [/slimerjs/i],
                  describe: function (e) {
                    var t = { name: 'SlimerJS' },
                      n = o.default.getFirstMatch(
                        /slimerjs\/(\d+(\.?_?\d+)+)/i,
                        e,
                      )
                    return n && (t.version = n), t
                  },
                },
                {
                  test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
                  describe: function (e) {
                    var t = { name: 'BlackBerry' },
                      n =
                        o.default.getFirstMatch(i, e) ||
                        o.default.getFirstMatch(
                          /blackberry[\d]+\/(\d+(\.?_?\d+)+)/i,
                          e,
                        )
                    return n && (t.version = n), t
                  },
                },
                {
                  test: [/(web|hpw)[o0]s/i],
                  describe: function (e) {
                    var t = { name: 'WebOS Browser' },
                      n =
                        o.default.getFirstMatch(i, e) ||
                        o.default.getFirstMatch(
                          /w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i,
                          e,
                        )
                    return n && (t.version = n), t
                  },
                },
                {
                  test: [/bada/i],
                  describe: function (e) {
                    var t = { name: 'Bada' },
                      n = o.default.getFirstMatch(
                        /dolfin\/(\d+(\.?_?\d+)+)/i,
                        e,
                      )
                    return n && (t.version = n), t
                  },
                },
                {
                  test: [/tizen/i],
                  describe: function (e) {
                    var t = { name: 'Tizen' },
                      n =
                        o.default.getFirstMatch(
                          /(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i,
                          e,
                        ) || o.default.getFirstMatch(i, e)
                    return n && (t.version = n), t
                  },
                },
                {
                  test: [/qupzilla/i],
                  describe: function (e) {
                    var t = { name: 'QupZilla' },
                      n =
                        o.default.getFirstMatch(
                          /(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i,
                          e,
                        ) || o.default.getFirstMatch(i, e)
                    return n && (t.version = n), t
                  },
                },
                {
                  test: [/firefox|iceweasel|fxios/i],
                  describe: function (e) {
                    var t = { name: 'Firefox' },
                      n = o.default.getFirstMatch(
                        /(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i,
                        e,
                      )
                    return n && (t.version = n), t
                  },
                },
                {
                  test: [/electron/i],
                  describe: function (e) {
                    var t = { name: 'Electron' },
                      n = o.default.getFirstMatch(
                        /(?:electron)\/(\d+(\.?_?\d+)+)/i,
                        e,
                      )
                    return n && (t.version = n), t
                  },
                },
                {
                  test: [/MiuiBrowser/i],
                  describe: function (e) {
                    var t = { name: 'Miui' },
                      n = o.default.getFirstMatch(
                        /(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i,
                        e,
                      )
                    return n && (t.version = n), t
                  },
                },
                {
                  test: [/chromium/i],
                  describe: function (e) {
                    var t = { name: 'Chromium' },
                      n =
                        o.default.getFirstMatch(
                          /(?:chromium)[\s/](\d+(\.?_?\d+)+)/i,
                          e,
                        ) || o.default.getFirstMatch(i, e)
                    return n && (t.version = n), t
                  },
                },
                {
                  test: [/chrome|crios|crmo/i],
                  describe: function (e) {
                    var t = { name: 'Chrome' },
                      n = o.default.getFirstMatch(
                        /(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i,
                        e,
                      )
                    return n && (t.version = n), t
                  },
                },
                {
                  test: [/GSA/i],
                  describe: function (e) {
                    var t = { name: 'Google Search' },
                      n = o.default.getFirstMatch(
                        /(?:GSA)\/(\d+(\.?_?\d+)+)/i,
                        e,
                      )
                    return n && (t.version = n), t
                  },
                },
                {
                  test: function (e) {
                    var t = !e.test(/like android/i),
                      n = e.test(/android/i)
                    return t && n
                  },
                  describe: function (e) {
                    var t = { name: 'Android Browser' },
                      n = o.default.getFirstMatch(i, e)
                    return n && (t.version = n), t
                  },
                },
                {
                  test: [/playstation 4/i],
                  describe: function (e) {
                    var t = { name: 'PlayStation 4' },
                      n = o.default.getFirstMatch(i, e)
                    return n && (t.version = n), t
                  },
                },
                {
                  test: [/safari|applewebkit/i],
                  describe: function (e) {
                    var t = { name: 'Safari' },
                      n = o.default.getFirstMatch(i, e)
                    return n && (t.version = n), t
                  },
                },
                {
                  test: [/.*/i],
                  describe: function (e) {
                    var t =
                      -1 !== e.search('\\(')
                        ? /^(.*)\/(.*)[ \t]\((.*)/
                        : /^(.*)\/(.*) /
                    return {
                      name: o.default.getFirstMatch(t, e),
                      version: o.default.getSecondMatch(t, e),
                    }
                  },
                },
              ]
            ;(t.default = a), (e.exports = t.default)
          },
          93: function (e, t, n) {
            'use strict'
            ;(t.__esModule = !0), (t.default = void 0)
            var r,
              o = (r = n(17)) && r.__esModule ? r : { default: r },
              i = n(18),
              a = [
                {
                  test: [/Roku\/DVP/],
                  describe: function (e) {
                    var t = o.default.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i, e)
                    return { name: i.OS_MAP.Roku, version: t }
                  },
                },
                {
                  test: [/windows phone/i],
                  describe: function (e) {
                    var t = o.default.getFirstMatch(
                      /windows phone (?:os)?\s?(\d+(\.\d+)*)/i,
                      e,
                    )
                    return { name: i.OS_MAP.WindowsPhone, version: t }
                  },
                },
                {
                  test: [/windows /i],
                  describe: function (e) {
                    var t = o.default.getFirstMatch(
                        /Windows ((NT|XP)( \d\d?.\d)?)/i,
                        e,
                      ),
                      n = o.default.getWindowsVersionName(t)
                    return {
                      name: i.OS_MAP.Windows,
                      version: t,
                      versionName: n,
                    }
                  },
                },
                {
                  test: [/Macintosh(.*?) FxiOS(.*?)\//],
                  describe: function (e) {
                    var t = { name: i.OS_MAP.iOS },
                      n = o.default.getSecondMatch(/(Version\/)(\d[\d.]+)/, e)
                    return n && (t.version = n), t
                  },
                },
                {
                  test: [/macintosh/i],
                  describe: function (e) {
                    var t = o.default
                        .getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i, e)
                        .replace(/[_\s]/g, '.'),
                      n = o.default.getMacOSVersionName(t),
                      r = { name: i.OS_MAP.MacOS, version: t }
                    return n && (r.versionName = n), r
                  },
                },
                {
                  test: [/(ipod|iphone|ipad)/i],
                  describe: function (e) {
                    var t = o.default
                      .getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i, e)
                      .replace(/[_\s]/g, '.')
                    return { name: i.OS_MAP.iOS, version: t }
                  },
                },
                {
                  test: function (e) {
                    var t = !e.test(/like android/i),
                      n = e.test(/android/i)
                    return t && n
                  },
                  describe: function (e) {
                    var t = o.default.getFirstMatch(
                        /android[\s/-](\d+(\.\d+)*)/i,
                        e,
                      ),
                      n = o.default.getAndroidVersionName(t),
                      r = { name: i.OS_MAP.Android, version: t }
                    return n && (r.versionName = n), r
                  },
                },
                {
                  test: [/(web|hpw)[o0]s/i],
                  describe: function (e) {
                    var t = o.default.getFirstMatch(
                        /(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i,
                        e,
                      ),
                      n = { name: i.OS_MAP.WebOS }
                    return t && t.length && (n.version = t), n
                  },
                },
                {
                  test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
                  describe: function (e) {
                    var t =
                      o.default.getFirstMatch(
                        /rim\stablet\sos\s(\d+(\.\d+)*)/i,
                        e,
                      ) ||
                      o.default.getFirstMatch(
                        /blackberry\d+\/(\d+([_\s]\d+)*)/i,
                        e,
                      ) ||
                      o.default.getFirstMatch(/\bbb(\d+)/i, e)
                    return { name: i.OS_MAP.BlackBerry, version: t }
                  },
                },
                {
                  test: [/bada/i],
                  describe: function (e) {
                    var t = o.default.getFirstMatch(/bada\/(\d+(\.\d+)*)/i, e)
                    return { name: i.OS_MAP.Bada, version: t }
                  },
                },
                {
                  test: [/tizen/i],
                  describe: function (e) {
                    var t = o.default.getFirstMatch(
                      /tizen[/\s](\d+(\.\d+)*)/i,
                      e,
                    )
                    return { name: i.OS_MAP.Tizen, version: t }
                  },
                },
                {
                  test: [/linux/i],
                  describe: function () {
                    return { name: i.OS_MAP.Linux }
                  },
                },
                {
                  test: [/CrOS/],
                  describe: function () {
                    return { name: i.OS_MAP.ChromeOS }
                  },
                },
                {
                  test: [/PlayStation 4/],
                  describe: function (e) {
                    var t = o.default.getFirstMatch(
                      /PlayStation 4[/\s](\d+(\.\d+)*)/i,
                      e,
                    )
                    return { name: i.OS_MAP.PlayStation4, version: t }
                  },
                },
              ]
            ;(t.default = a), (e.exports = t.default)
          },
          94: function (e, t, n) {
            'use strict'
            ;(t.__esModule = !0), (t.default = void 0)
            var r,
              o = (r = n(17)) && r.__esModule ? r : { default: r },
              i = n(18),
              a = [
                {
                  test: [/googlebot/i],
                  describe: function () {
                    return { type: 'bot', vendor: 'Google' }
                  },
                },
                {
                  test: [/huawei/i],
                  describe: function (e) {
                    var t = o.default.getFirstMatch(/(can-l01)/i, e) && 'Nova',
                      n = { type: i.PLATFORMS_MAP.mobile, vendor: 'Huawei' }
                    return t && (n.model = t), n
                  },
                },
                {
                  test: [/nexus\s*(?:7|8|9|10).*/i],
                  describe: function () {
                    return { type: i.PLATFORMS_MAP.tablet, vendor: 'Nexus' }
                  },
                },
                {
                  test: [/ipad/i],
                  describe: function () {
                    return {
                      type: i.PLATFORMS_MAP.tablet,
                      vendor: 'Apple',
                      model: 'iPad',
                    }
                  },
                },
                {
                  test: [/Macintosh(.*?) FxiOS(.*?)\//],
                  describe: function () {
                    return {
                      type: i.PLATFORMS_MAP.tablet,
                      vendor: 'Apple',
                      model: 'iPad',
                    }
                  },
                },
                {
                  test: [/kftt build/i],
                  describe: function () {
                    return {
                      type: i.PLATFORMS_MAP.tablet,
                      vendor: 'Amazon',
                      model: 'Kindle Fire HD 7',
                    }
                  },
                },
                {
                  test: [/silk/i],
                  describe: function () {
                    return { type: i.PLATFORMS_MAP.tablet, vendor: 'Amazon' }
                  },
                },
                {
                  test: [/tablet(?! pc)/i],
                  describe: function () {
                    return { type: i.PLATFORMS_MAP.tablet }
                  },
                },
                {
                  test: function (e) {
                    var t = e.test(/ipod|iphone/i),
                      n = e.test(/like (ipod|iphone)/i)
                    return t && !n
                  },
                  describe: function (e) {
                    var t = o.default.getFirstMatch(/(ipod|iphone)/i, e)
                    return {
                      type: i.PLATFORMS_MAP.mobile,
                      vendor: 'Apple',
                      model: t,
                    }
                  },
                },
                {
                  test: [/nexus\s*[0-6].*/i, /galaxy nexus/i],
                  describe: function () {
                    return { type: i.PLATFORMS_MAP.mobile, vendor: 'Nexus' }
                  },
                },
                {
                  test: [/[^-]mobi/i],
                  describe: function () {
                    return { type: i.PLATFORMS_MAP.mobile }
                  },
                },
                {
                  test: function (e) {
                    return 'blackberry' === e.getBrowserName(!0)
                  },
                  describe: function () {
                    return {
                      type: i.PLATFORMS_MAP.mobile,
                      vendor: 'BlackBerry',
                    }
                  },
                },
                {
                  test: function (e) {
                    return 'bada' === e.getBrowserName(!0)
                  },
                  describe: function () {
                    return { type: i.PLATFORMS_MAP.mobile }
                  },
                },
                {
                  test: function (e) {
                    return 'windows phone' === e.getBrowserName()
                  },
                  describe: function () {
                    return { type: i.PLATFORMS_MAP.mobile, vendor: 'Microsoft' }
                  },
                },
                {
                  test: function (e) {
                    var t = Number(String(e.getOSVersion()).split('.')[0])
                    return 'android' === e.getOSName(!0) && t >= 3
                  },
                  describe: function () {
                    return { type: i.PLATFORMS_MAP.tablet }
                  },
                },
                {
                  test: function (e) {
                    return 'android' === e.getOSName(!0)
                  },
                  describe: function () {
                    return { type: i.PLATFORMS_MAP.mobile }
                  },
                },
                {
                  test: function (e) {
                    return 'macos' === e.getOSName(!0)
                  },
                  describe: function () {
                    return { type: i.PLATFORMS_MAP.desktop, vendor: 'Apple' }
                  },
                },
                {
                  test: function (e) {
                    return 'windows' === e.getOSName(!0)
                  },
                  describe: function () {
                    return { type: i.PLATFORMS_MAP.desktop }
                  },
                },
                {
                  test: function (e) {
                    return 'linux' === e.getOSName(!0)
                  },
                  describe: function () {
                    return { type: i.PLATFORMS_MAP.desktop }
                  },
                },
                {
                  test: function (e) {
                    return 'playstation 4' === e.getOSName(!0)
                  },
                  describe: function () {
                    return { type: i.PLATFORMS_MAP.tv }
                  },
                },
                {
                  test: function (e) {
                    return 'roku' === e.getOSName(!0)
                  },
                  describe: function () {
                    return { type: i.PLATFORMS_MAP.tv }
                  },
                },
              ]
            ;(t.default = a), (e.exports = t.default)
          },
          95: function (e, t, n) {
            'use strict'
            ;(t.__esModule = !0), (t.default = void 0)
            var r,
              o = (r = n(17)) && r.__esModule ? r : { default: r },
              i = n(18),
              a = [
                {
                  test: function (e) {
                    return 'microsoft edge' === e.getBrowserName(!0)
                  },
                  describe: function (e) {
                    if (/\sedg\//i.test(e)) return { name: i.ENGINE_MAP.Blink }
                    var t = o.default.getFirstMatch(
                      /edge\/(\d+(\.?_?\d+)+)/i,
                      e,
                    )
                    return { name: i.ENGINE_MAP.EdgeHTML, version: t }
                  },
                },
                {
                  test: [/trident/i],
                  describe: function (e) {
                    var t = { name: i.ENGINE_MAP.Trident },
                      n = o.default.getFirstMatch(
                        /trident\/(\d+(\.?_?\d+)+)/i,
                        e,
                      )
                    return n && (t.version = n), t
                  },
                },
                {
                  test: function (e) {
                    return e.test(/presto/i)
                  },
                  describe: function (e) {
                    var t = { name: i.ENGINE_MAP.Presto },
                      n = o.default.getFirstMatch(
                        /presto\/(\d+(\.?_?\d+)+)/i,
                        e,
                      )
                    return n && (t.version = n), t
                  },
                },
                {
                  test: function (e) {
                    var t = e.test(/gecko/i),
                      n = e.test(/like gecko/i)
                    return t && !n
                  },
                  describe: function (e) {
                    var t = { name: i.ENGINE_MAP.Gecko },
                      n = o.default.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i, e)
                    return n && (t.version = n), t
                  },
                },
                {
                  test: [/(apple)?webkit\/537\.36/i],
                  describe: function () {
                    return { name: i.ENGINE_MAP.Blink }
                  },
                },
                {
                  test: [/(apple)?webkit/i],
                  describe: function (e) {
                    var t = { name: i.ENGINE_MAP.WebKit },
                      n = o.default.getFirstMatch(
                        /webkit\/(\d+(\.?_?\d+)+)/i,
                        e,
                      )
                    return n && (t.version = n), t
                  },
                },
              ]
            ;(t.default = a), (e.exports = t.default)
          },
        })
      },
      44797: function (e, t) {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.CredentialProvider = void 0)
        var n = (function () {
          function e() {}
          return (
            (e.mockCredentials = function () {
              return function () {
                return Promise.resolve({
                  accessKeyId: 'PLACEHOLDER_ACCESS_KEY_ID',
                  secretAccessKey: 'PLACEHOLDER_SECRET_KEY',
                  sessionToken: 'PLACEHOLDER_SESSION_TOKEN',
                })
              }
            }),
            e
          )
        })()
        t.CredentialProvider = n
      },
      48437: function (e, t, n) {
        'use strict'
        var r =
            (this && this.__awaiter) ||
            function (e, t, n, r) {
              return new (n || (n = Promise))(function (o, i) {
                function a(e) {
                  try {
                    s(r.next(e))
                  } catch (e) {
                    i(e)
                  }
                }
                function u(e) {
                  try {
                    s(r.throw(e))
                  } catch (e) {
                    i(e)
                  }
                }
                function s(e) {
                  var t
                  e.done
                    ? o(e.value)
                    : ((t = e.value),
                      t instanceof n
                        ? t
                        : new n(function (e) {
                            e(t)
                          })).then(a, u)
                }
                s((r = r.apply(e, t || [])).next())
              })
            },
          o =
            (this && this.__generator) ||
            function (e, t) {
              var n,
                r,
                o,
                i,
                a = {
                  label: 0,
                  sent: function () {
                    if (1 & o[0]) throw o[1]
                    return o[1]
                  },
                  trys: [],
                  ops: [],
                }
              return (
                (i = { next: u(0), throw: u(1), return: u(2) }),
                'function' == typeof Symbol &&
                  (i[Symbol.iterator] = function () {
                    return this
                  }),
                i
              )
              function u(i) {
                return function (u) {
                  return (function (i) {
                    if (n)
                      throw new TypeError('Generator is already executing.')
                    for (; a; )
                      try {
                        if (
                          ((n = 1),
                          r &&
                            (o =
                              2 & i[0]
                                ? r.return
                                : i[0]
                                ? r.throw || ((o = r.return) && o.call(r), 0)
                                : r.next) &&
                            !(o = o.call(r, i[1])).done)
                        )
                          return o
                        switch (
                          ((r = 0), o && (i = [2 & i[0], o.value]), i[0])
                        ) {
                          case 0:
                          case 1:
                            o = i
                            break
                          case 4:
                            return a.label++, { value: i[1], done: !1 }
                          case 5:
                            a.label++, (r = i[1]), (i = [0])
                            continue
                          case 7:
                            ;(i = a.ops.pop()), a.trys.pop()
                            continue
                          default:
                            if (
                              !((o = a.trys),
                              (o = o.length > 0 && o[o.length - 1]) ||
                                (6 !== i[0] && 2 !== i[0]))
                            ) {
                              a = 0
                              continue
                            }
                            if (
                              3 === i[0] &&
                              (!o || (i[1] > o[0] && i[1] < o[3]))
                            ) {
                              a.label = i[1]
                              break
                            }
                            if (6 === i[0] && a.label < o[1]) {
                              ;(a.label = o[1]), (o = i)
                              break
                            }
                            if (o && a.label < o[2]) {
                              ;(a.label = o[2]), a.ops.push(i)
                              break
                            }
                            o[2] && a.ops.pop(), a.trys.pop()
                            continue
                        }
                        i = t.call(e, a)
                      } catch (e) {
                        ;(i = [6, e]), (r = 0)
                      } finally {
                        n = o = 0
                      }
                    if (5 & i[0]) throw i[1]
                    return { value: i[0] ? i[1] : void 0, done: !0 }
                  })([i, u])
                }
              }
            }
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.SdkInterceptor = void 0)
        var i = n(75354),
          a = n(1335),
          u = (function () {
            function e() {}
            return (
              (e.interceptSdkClient = function (t, n, r) {
                return e.setupMiddleware(t, n, r), t
              }),
              (e.signerMiddleware = function (e, t) {
                return function (n, u) {
                  return function (u) {
                    return r(this, void 0, void 0, function () {
                      var r
                      return o(this, function (o) {
                        switch (o.label) {
                          case 0:
                            return (
                              (r = u.request),
                              i.HttpRequest.isInstance(r)
                                ? [4, a.Signer.presign(r, t, e)]
                                : [2, n(u)]
                            )
                          case 1:
                            return o.sent(), [2, n(u)]
                        }
                      })
                    })
                  }
                }
              }),
              (e.metricsMiddleware = function (e, t) {
                return function (n, u) {
                  return function (u) {
                    return r(this, void 0, void 0, function () {
                      return o(this, function (r) {
                        return [
                          2,
                          n(u).then(function (n) {
                            if (i.HttpResponse.isInstance(n.response)) {
                              var r = n.response.statusCode,
                                o = r >= 400 ? 1 : 0,
                                u = r < 500 && r >= 400 ? 1 : 0,
                                s = r >= 500 ? 1 : 0
                              a.logger.logMetric({
                                metricName: a.SDK_CALL_ERROR_METRIC,
                                value: o,
                                widgetParams: e,
                                clientParams: t.getClientParams(),
                              }),
                                a.logger.logMetric({
                                  metricName: a.SDK_CALL_4XX_METRIC,
                                  value: u,
                                  widgetParams: e,
                                  clientParams: t.getClientParams(),
                                }),
                                a.logger.logMetric({
                                  metricName: a.SDK_CALL_5XX_METRIC,
                                  value: s,
                                  widgetParams: e,
                                  clientParams: t.getClientParams(),
                                })
                            }
                            return n
                          }),
                        ]
                      })
                    })
                  }
                }
              }),
              (e.setupMiddleware = function (e, t, n) {
                e.middlewareStack.use(this.getPluggable(t, n))
              }),
              (e.getPluggable = function (e, t) {
                var n = this
                return {
                  applyToStack: function (r) {
                    r.addRelativeTo(n.signerMiddleware(e, t), {
                      name: 'console-api-signer',
                      relation: 'after',
                      toMiddleware: 'awsAuthMiddleware',
                    }),
                      r.add(n.metricsMiddleware(e, t), {
                        name: 'console-api-metrics',
                        step: 'deserialize',
                        priority: 'low',
                      })
                  },
                }
              }),
              e
            )
          })()
        t.SdkInterceptor = u
      },
      75660: function (e, t, n) {
        'use strict'
        var r =
            (this && this.__awaiter) ||
            function (e, t, n, r) {
              return new (n || (n = Promise))(function (o, i) {
                function a(e) {
                  try {
                    s(r.next(e))
                  } catch (e) {
                    i(e)
                  }
                }
                function u(e) {
                  try {
                    s(r.throw(e))
                  } catch (e) {
                    i(e)
                  }
                }
                function s(e) {
                  var t
                  e.done
                    ? o(e.value)
                    : ((t = e.value),
                      t instanceof n
                        ? t
                        : new n(function (e) {
                            e(t)
                          })).then(a, u)
                }
                s((r = r.apply(e, t || [])).next())
              })
            },
          o =
            (this && this.__generator) ||
            function (e, t) {
              var n,
                r,
                o,
                i,
                a = {
                  label: 0,
                  sent: function () {
                    if (1 & o[0]) throw o[1]
                    return o[1]
                  },
                  trys: [],
                  ops: [],
                }
              return (
                (i = { next: u(0), throw: u(1), return: u(2) }),
                'function' == typeof Symbol &&
                  (i[Symbol.iterator] = function () {
                    return this
                  }),
                i
              )
              function u(i) {
                return function (u) {
                  return (function (i) {
                    if (n)
                      throw new TypeError('Generator is already executing.')
                    for (; a; )
                      try {
                        if (
                          ((n = 1),
                          r &&
                            (o =
                              2 & i[0]
                                ? r.return
                                : i[0]
                                ? r.throw || ((o = r.return) && o.call(r), 0)
                                : r.next) &&
                            !(o = o.call(r, i[1])).done)
                        )
                          return o
                        switch (
                          ((r = 0), o && (i = [2 & i[0], o.value]), i[0])
                        ) {
                          case 0:
                          case 1:
                            o = i
                            break
                          case 4:
                            return a.label++, { value: i[1], done: !1 }
                          case 5:
                            a.label++, (r = i[1]), (i = [0])
                            continue
                          case 7:
                            ;(i = a.ops.pop()), a.trys.pop()
                            continue
                          default:
                            if (
                              !((o = a.trys),
                              (o = o.length > 0 && o[o.length - 1]) ||
                                (6 !== i[0] && 2 !== i[0]))
                            ) {
                              a = 0
                              continue
                            }
                            if (
                              3 === i[0] &&
                              (!o || (i[1] > o[0] && i[1] < o[3]))
                            ) {
                              a.label = i[1]
                              break
                            }
                            if (6 === i[0] && a.label < o[1]) {
                              ;(a.label = o[1]), (o = i)
                              break
                            }
                            if (o && a.label < o[2]) {
                              ;(a.label = o[2]), a.ops.push(i)
                              break
                            }
                            o[2] && a.ops.pop(), a.trys.pop()
                            continue
                        }
                        i = t.call(e, a)
                      } catch (e) {
                        ;(i = [6, e]), (r = 0)
                      } finally {
                        n = o = 0
                      }
                    if (5 & i[0]) throw i[1]
                    return { value: i[0] ? i[1] : void 0, done: !0 }
                  })([i, u])
                }
              }
            },
          i =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e }
            }
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.createCredentialProviderController = t.getRefreshCredentialsTimeout = t.PRE_EXPIRATION_REFRESH_MARGIN = void 0)
        var a = n(1335),
          u = i(n(51669))
        ;(t.PRE_EXPIRATION_REFRESH_MARGIN = 6e4),
          (t.getRefreshCredentialsTimeout = function (e) {
            var n = a.getTimeUntilCredentialsExpiration(e)
            return Math.max(0, n - t.PRE_EXPIRATION_REFRESH_MARGIN)
          }),
          (t.createCredentialProviderController = function (e) {
            var n = e.fetchCredentials,
              i = u.default(function () {
                return r(void 0, void 0, void 0, function () {
                  var e
                  return o(this, function (r) {
                    switch (r.label) {
                      case 0:
                        return [4, n()]
                      case 1:
                        return (
                          (function (e) {
                            var n = t.getRefreshCredentialsTimeout(e)
                            window.setTimeout(a, n)
                          })((e = r.sent())),
                          [2, e]
                        )
                    }
                  })
                })
              }),
              a = function () {
                i.clear(), i()
              }
            return {
              credentialProvider: function () {
                return r(void 0, void 0, void 0, function () {
                  return o(this, function (e) {
                    switch (e.label) {
                      case 0:
                        return [4, i()]
                      case 1:
                        return [2, e.sent()]
                    }
                  })
                })
              },
              preload: function () {
                r(void 0, void 0, void 0, function () {
                  return o(this, function (e) {
                    switch (e.label) {
                      case 0:
                        return e.trys.push([0, 2, , 3]), [4, i()]
                      case 1:
                      case 2:
                        return e.sent(), [3, 3]
                      case 3:
                        return [2]
                    }
                  })
                })
              },
            }
          })
      },
      25910: function (e, t, n) {
        'use strict'
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, n, r) {
                  void 0 === r && (r = n),
                    Object.defineProperty(e, r, {
                      enumerable: !0,
                      get: function () {
                        return t[n]
                      },
                    })
                }
              : function (e, t, n, r) {
                  void 0 === r && (r = n), (e[r] = t[n])
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var n in e)
                'default' === n || t.hasOwnProperty(n) || r(t, e, n)
            }
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.AWSJanus = void 0)
        var i = n(1335),
          a = n(48437),
          u = n(44797),
          s = n(75660)
        o(n(1335), t)
        var c = n(75660)
        Object.defineProperty(t, 'createCredentialProviderController', {
          enumerable: !0,
          get: function () {
            return c.createCredentialProviderController
          },
        })
        var l = (function () {
          function e() {}
          return (
            (e.buildJanusClient = function (e) {
              return i.JanusClientBuilder.build(e)
            }),
            (e.rebuildJanusClientDevelopmentOnly = function (e) {
              return i.JanusClientBuilder.rebuild(e)
            }),
            (e.interceptSdkClient = function (e, t, n) {
              return (
                void 0 === n && (n = i.JanusClientBuilder.build()),
                a.SdkInterceptor.interceptSdkClient(e, t, n)
              )
            }),
            (e.getPluggable = function (e, t) {
              return (
                void 0 === t && (t = i.JanusClientBuilder.build()),
                a.SdkInterceptor.getPluggable(e, t)
              )
            }),
            (e.credentialProvider = function () {
              return u.CredentialProvider.mockCredentials()
            }),
            (e.getBrowserCredentialsProvider = function (e, t) {
              var n = i.createFetchCredentialsForWidget({
                widgetParams: e,
                janusClient: t,
              })
              return s.createCredentialProviderController({
                fetchCredentials: n,
              })
            }),
            e
          )
        })()
        ;(t.AWSJanus = l), (window.AWSJanusV3SDK = l)
      },
      48857: function (e, t, n) {
        'use strict'
        var r =
            (this && this.__assign) ||
            function () {
              return (r =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var o in (t = arguments[n]))
                      Object.prototype.hasOwnProperty.call(t, o) &&
                        (e[o] = t[o])
                  return e
                }).apply(this, arguments)
            },
          o =
            (this && this.__awaiter) ||
            function (e, t, n, r) {
              return new (n || (n = Promise))(function (o, i) {
                function a(e) {
                  try {
                    s(r.next(e))
                  } catch (e) {
                    i(e)
                  }
                }
                function u(e) {
                  try {
                    s(r.throw(e))
                  } catch (e) {
                    i(e)
                  }
                }
                function s(e) {
                  var t
                  e.done
                    ? o(e.value)
                    : ((t = e.value),
                      t instanceof n
                        ? t
                        : new n(function (e) {
                            e(t)
                          })).then(a, u)
                }
                s((r = r.apply(e, t || [])).next())
              })
            },
          i =
            (this && this.__generator) ||
            function (e, t) {
              var n,
                r,
                o,
                i,
                a = {
                  label: 0,
                  sent: function () {
                    if (1 & o[0]) throw o[1]
                    return o[1]
                  },
                  trys: [],
                  ops: [],
                }
              return (
                (i = { next: u(0), throw: u(1), return: u(2) }),
                'function' == typeof Symbol &&
                  (i[Symbol.iterator] = function () {
                    return this
                  }),
                i
              )
              function u(i) {
                return function (u) {
                  return (function (i) {
                    if (n)
                      throw new TypeError('Generator is already executing.')
                    for (; a; )
                      try {
                        if (
                          ((n = 1),
                          r &&
                            (o =
                              2 & i[0]
                                ? r.return
                                : i[0]
                                ? r.throw || ((o = r.return) && o.call(r), 0)
                                : r.next) &&
                            !(o = o.call(r, i[1])).done)
                        )
                          return o
                        switch (
                          ((r = 0), o && (i = [2 & i[0], o.value]), i[0])
                        ) {
                          case 0:
                          case 1:
                            o = i
                            break
                          case 4:
                            return a.label++, { value: i[1], done: !1 }
                          case 5:
                            a.label++, (r = i[1]), (i = [0])
                            continue
                          case 7:
                            ;(i = a.ops.pop()), a.trys.pop()
                            continue
                          default:
                            if (
                              !((o = a.trys),
                              (o = o.length > 0 && o[o.length - 1]) ||
                                (6 !== i[0] && 2 !== i[0]))
                            ) {
                              a = 0
                              continue
                            }
                            if (
                              3 === i[0] &&
                              (!o || (i[1] > o[0] && i[1] < o[3]))
                            ) {
                              a.label = i[1]
                              break
                            }
                            if (6 === i[0] && a.label < o[1]) {
                              ;(a.label = o[1]), (o = i)
                              break
                            }
                            if (o && a.label < o[2]) {
                              ;(a.label = o[2]), a.ops.push(i)
                              break
                            }
                            o[2] && a.ops.pop(), a.trys.pop()
                            continue
                        }
                        i = t.call(e, a)
                      } catch (e) {
                        ;(i = [6, e]), (r = 0)
                      } finally {
                        n = o = 0
                      }
                    if (5 & i[0]) throw i[1]
                    return { value: i[0] ? i[1] : void 0, done: !0 }
                  })([i, u])
                }
              }
            }
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.createFetchCredentialsForWidget = t.getTimeUntilCredentialsExpiration = void 0)
        var a = n(85370),
          u = n(74289),
          s = n(89232),
          c = n(31980),
          l = n(50922),
          f = n(64058),
          d = n(47886),
          p = n(79621),
          h = n(3985),
          v = n(86662)
        t.getTimeUntilCredentialsExpiration = function (e) {
          var t = e.expiration.getTime() - Date.now()
          return Math.max(0, t)
        }
        t.createFetchCredentialsForWidget = function (e) {
          var n = e.widgetParams,
            g = e.janusClient,
            y = void 0 === g ? d.JanusClientBuilder.build() : g,
            m = !1
          return (
            new s.CookieObserver(u.Cookies.AWS_USERINFO).addChangeListener(
              function () {
                return (m = !0)
              },
            ),
            function () {
              return o(void 0, void 0, void 0, function () {
                var e, o, s, d, g, w, b, S, _, E, A, O, C, T
                return i(this, function (i) {
                  switch (i.label) {
                    case 0:
                      return (e = Date.now()), [4, y.initialize()]
                    case 1:
                      if (
                        (i.sent(),
                        (o = y.getClientParams()),
                        (s = v.buildEndpoint(o, u.EndpointPaths.BROWSERCREDS)),
                        m)
                      )
                        throw (
                          ((d = new l.InvalidCookieError(
                            'aws-userInfo cookie has changed before getting credentials',
                          )),
                          h.logger.logMetric({
                            metricName: 'JanusBE_InvalidCookie',
                            value: 1,
                            error: d,
                            clientParams: o,
                            widgetParams: n,
                          }),
                          d)
                        )
                      ;(g = new Error('Error')),
                        (w = Date.now()),
                        (b = 0),
                        (i.label = 2)
                    case 2:
                      if (!(b <= u.RETRY_COUNT)) return [3, 13]
                      i.label = 3
                    case 3:
                      return (
                        i.trys.push([3, 6, , 12]),
                        (S = c.CookieParser.getCSRFCookieString(o)),
                        [4, a.ConsoleInfoExtractor.extractValidConsoleInfo(o)]
                      )
                    case 4:
                      return (
                        (_ = i.sent()),
                        (E = p.Signer.buildHeaders(n, S, _)),
                        [
                          4,
                          f.HttpClient.executeRequest(u.HttpMethods.POST, s, E),
                        ]
                      )
                    case 5:
                      if (
                        ((A = i.sent()),
                        !(function (e) {
                          for (
                            var t = 0,
                              n = [
                                'accessKeyId',
                                'secretAccessKey',
                                'sessionToken',
                                'expiration',
                              ];
                            t < n.length;
                            t++
                          ) {
                            if ('string' != typeof e[n[t]]) return !1
                          }
                          return !0
                        })((O = JSON.parse(A))))
                      )
                        throw new l.InvalidResponseError(
                          'Browser Credential Response Invalid',
                        )
                      if (
                        ((C = r(r({}, O), {
                          expiration: new Date(O.expiration),
                        })),
                        (function (e) {
                          return t.getTimeUntilCredentialsExpiration(e) <= 0
                        })(C))
                      )
                        throw new l.ExpiredBrowserCredentialsError(
                          'Browser Credentials are Expired',
                        )
                      return (
                        v.logResult({
                          apiStartTime: w,
                          overallStartTime: e,
                          widgetParams: n,
                          clientParams: o,
                          endpoint: u.EndpointPaths.BROWSERCREDS,
                        }),
                        [2, C]
                      )
                    case 6:
                      return (
                        (T = i.sent()),
                        (g = T),
                        'number' != typeof T.statusCode ||
                        v.isHttpStatusCodeRetryable(T.statusCode)
                          ? T instanceof l.InvalidConsoleInfoError
                            ? [3, 13]
                            : [3, 7]
                          : [3, 13]
                      )
                    case 7:
                      return (T instanceof l.InvalidSessionError ||
                        ('number' == typeof T.statusCode &&
                          401 === T.statusCode)) &&
                        0 === b
                        ? [4, y.reinitialize()]
                        : [3, 9]
                    case 8:
                      i.sent(), (i.label = 9)
                    case 9:
                      return b < u.RETRY_COUNT
                        ? (h.logger.logMetric({
                            metricName: 'JanusBER',
                            value: 1,
                            error: T,
                            clientParams: o,
                            widgetParams: n,
                          }),
                          [4, v.retryDelay(b, u.RETRY_DELAY_IN_MS)])
                        : [3, 11]
                    case 10:
                      i.sent(), (i.label = 11)
                    case 11:
                      return [3, 12]
                    case 12:
                      return b++, [3, 2]
                    case 13:
                      throw (
                        (v.logResult({
                          apiStartTime: w,
                          overallStartTime: e,
                          widgetParams: n,
                          clientParams: o,
                          error: g,
                          endpoint: u.EndpointPaths.BROWSERCREDS,
                        }),
                        new Error(
                          'Error getting browserCreds. All retries failed. Last error: ' +
                            g,
                        ))
                      )
                  }
                })
              })
            }
          )
        }
      },
      98824: function (e, t, n) {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.ClientInputParser = void 0)
        var r = n(50922),
          o = n(74289),
          i = (function () {
            function e() {}
            return (
              (e.parseJanusScript = function (e) {
                var t
                if (!e)
                  throw new r.InvalidInputError(
                    'Janus web client script tag not found',
                  )
                var n = e.getAttribute(o.DataParams.JANUS_REGION),
                  i = e.getAttribute(o.DataParams.JANUS_STAGE),
                  a = e.getAttribute(o.DataParams.JANUS_ENDPOINT_OVERRIDE),
                  u = e.getAttribute(o.DataParams.JANUS_CONSOLE_INFO_OVERRIDE),
                  s = e.getAttribute(o.DataParams.JANUS_TEST_POLICY_OVERRIDE)
                return {
                  janusRegion: n || void 0,
                  janusStage: i || void 0,
                  janusEndpointOverride: a || void 0,
                  janusConsoleInfoOverride: null === u ? void 0 : 'true' === u,
                  janusTestPolicyOverride: null === s ? void 0 : 'true' === s,
                  signinStage:
                    (null === (t = e.getAttribute(o.DataParams.SIGNIN_STAGE)) ||
                    void 0 === t
                      ? void 0
                      : t.toLowerCase()) || void 0,
                  vpcId: e.getAttribute(o.DataParams.VPC_ID) || void 0,
                }
              }),
              e
            )
          })()
        t.ClientInputParser = i
      },
      85370: function (e, t, n) {
        'use strict'
        var r =
            (this && this.__awaiter) ||
            function (e, t, n, r) {
              return new (n || (n = Promise))(function (o, i) {
                function a(e) {
                  try {
                    s(r.next(e))
                  } catch (e) {
                    i(e)
                  }
                }
                function u(e) {
                  try {
                    s(r.throw(e))
                  } catch (e) {
                    i(e)
                  }
                }
                function s(e) {
                  var t
                  e.done
                    ? o(e.value)
                    : ((t = e.value),
                      t instanceof n
                        ? t
                        : new n(function (e) {
                            e(t)
                          })).then(a, u)
                }
                s((r = r.apply(e, t || [])).next())
              })
            },
          o =
            (this && this.__generator) ||
            function (e, t) {
              var n,
                r,
                o,
                i,
                a = {
                  label: 0,
                  sent: function () {
                    if (1 & o[0]) throw o[1]
                    return o[1]
                  },
                  trys: [],
                  ops: [],
                }
              return (
                (i = { next: u(0), throw: u(1), return: u(2) }),
                'function' == typeof Symbol &&
                  (i[Symbol.iterator] = function () {
                    return this
                  }),
                i
              )
              function u(i) {
                return function (u) {
                  return (function (i) {
                    if (n)
                      throw new TypeError('Generator is already executing.')
                    for (; a; )
                      try {
                        if (
                          ((n = 1),
                          r &&
                            (o =
                              2 & i[0]
                                ? r.return
                                : i[0]
                                ? r.throw || ((o = r.return) && o.call(r), 0)
                                : r.next) &&
                            !(o = o.call(r, i[1])).done)
                        )
                          return o
                        switch (
                          ((r = 0), o && (i = [2 & i[0], o.value]), i[0])
                        ) {
                          case 0:
                          case 1:
                            o = i
                            break
                          case 4:
                            return a.label++, { value: i[1], done: !1 }
                          case 5:
                            a.label++, (r = i[1]), (i = [0])
                            continue
                          case 7:
                            ;(i = a.ops.pop()), a.trys.pop()
                            continue
                          default:
                            if (
                              !((o = a.trys),
                              (o = o.length > 0 && o[o.length - 1]) ||
                                (6 !== i[0] && 2 !== i[0]))
                            ) {
                              a = 0
                              continue
                            }
                            if (
                              3 === i[0] &&
                              (!o || (i[1] > o[0] && i[1] < o[3]))
                            ) {
                              a.label = i[1]
                              break
                            }
                            if (6 === i[0] && a.label < o[1]) {
                              ;(a.label = o[1]), (o = i)
                              break
                            }
                            if (o && a.label < o[2]) {
                              ;(a.label = o[2]), a.ops.push(i)
                              break
                            }
                            o[2] && a.ops.pop(), a.trys.pop()
                            continue
                        }
                        i = t.call(e, a)
                      } catch (e) {
                        ;(i = [6, e]), (r = 0)
                      } finally {
                        n = o = 0
                      }
                    if (5 & i[0]) throw i[1]
                    return { value: i[0] ? i[1] : void 0, done: !0 }
                  })([i, u])
                }
              }
            },
          i =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e }
            }
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.ConsoleInfoExtractor = void 0)
        var a = i(n(30584)),
          u = n(74289),
          s = n(31980),
          c = n(50922),
          l = n(3985),
          f = n(86662),
          d = n(87234),
          p = (function () {
            function e() {}
            return (
              (e.extractValidConsoleInfo = function (e, t) {
                return r(this, void 0, void 0, function () {
                  var n,
                    r,
                    i,
                    a,
                    p,
                    h,
                    v,
                    g,
                    y,
                    m = this
                  return o(this, function (o) {
                    switch (o.label) {
                      case 0:
                        return e.janusConsoleInfoOverride
                          ? [2, u.DUMMY_DEVELOPER_CONSOLE_INFO]
                          : [3, 1]
                      case 1:
                        return (n = s.CookieParser.getMultipleCookieStrings(
                          u.Cookies.AWS_CONSOLEINFO,
                        )).length < 1
                          ? (l.logger.logMetric({
                              metricName: 'JanusConsoleInfoNone',
                              value: 1,
                              clientParams: e,
                            }),
                            [2, u.DUMMY_UNIVERSAL_CONSOLE_INFO])
                          : [3, 2]
                      case 2:
                        return (
                          l.logger.logMetric({
                            metricName: 'JanusConsoleInfoNone',
                            value: 0,
                            clientParams: e,
                          }),
                          (r = f.getSupportedBrowser(t))
                            ? ((i = s.CookieParser.getCookieString(
                                u.Cookies.AWS_USERINFO_SIGNED,
                              )),
                              (a = this.decodeJwt({ token: i, header: !1 })),
                              (p = this.decodeJwt({ token: i, header: !0 })),
                              (h = p.alg),
                              (v = a.keybase),
                              [
                                4,
                                d.CryptoHasher.generateHalfHash({
                                  supportedBrowser: r,
                                  _window: t,
                                  stringToHash: v,
                                  hashAlgorithm: h,
                                }),
                              ])
                            : (l.logger.logMetric({
                                metricName: 'JanusConsoleInfoUnval',
                                value: 1,
                                clientParams: e,
                              }),
                              [2, n[n.length - 1]])
                        )
                      case 3:
                        if (
                          ((g = o.sent()),
                          !(y = n.filter(function (e) {
                            return m.isValidConsoleInfo(e, g)
                          })[0]))
                        )
                          throw (
                            (l.logger.logMetric({
                              metricName: 'JanusConsoleInfoError',
                              value: 1,
                              clientParams: e,
                            }),
                            new c.InvalidConsoleInfoError(
                              'aws-consoleInfo is invalid for given session',
                            ))
                          )
                        return [2, y]
                    }
                  })
                })
              }),
              (e.isValidConsoleInfo = function (e, t) {
                try {
                  return this.decodeJwt({ token: e, header: !1 }).at_hash === t
                } catch (t) {
                  return (
                    console.warn('aws-consoleInfo cookie malformed: ' + e, t),
                    !1
                  )
                }
              }),
              (e.decodeJwt = function (e) {
                return a.default(e.token, { header: e.header })
              }),
              e
            )
          })()
        t.ConsoleInfoExtractor = p
      },
      74289: function (e, t) {
        'use strict'
        var n
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.MetricPrefixMap = t.UNRETRYABLE_HTTP_ERROR_STATUS_CODES = t.MEZZ_REGION_METATAG_ID = t.DUMMY_DEVELOPER_CONSOLE_INFO = t.DUMMY_UNIVERSAL_CONSOLE_INFO = t.SDK_CALL_5XX_METRIC = t.SDK_CALL_4XX_METRIC = t.SDK_CALL_ERROR_METRIC = t.RETRY_DELAY_IN_MS = t.RETRY_COUNT = t.CLIENT_PARAMS = t.STORAGE_KEY_CP = t.STORAGE_KEY = t.JANUS_BROWSER_PREFIX = t.CONSOLE_PROXY_ENABLED_PARTITIONS = t.WidgetStages = t.SigninStages = t.EndpointPaths = t.HttpMethods = t.JanusStage = t.SdkConfig = t.HttpHeaders = t.DataParams = t.Cookies = void 0),
          (function (e) {
            ;(e.AWS_USERINFO = 'aws-userInfo'),
              (e.AWS_USERINFO_SIGNED = 'aws-userInfo-signed'),
              (e.AWS_CONSOLEINFO = 'aws-consoleInfo'),
              (e.CSRF_TOKEN_V2_PREFIX = 'aws-signer-token')
          })(t.Cookies || (t.Cookies = {})),
          (function (e) {
            ;(e.JANUS_REGION = 'data-janus-region'),
              (e.JANUS_STAGE = 'data-janus-stage'),
              (e.JANUS_ENDPOINT_OVERRIDE = 'data-janus-endpoint-override'),
              (e.JANUS_CONSOLE_INFO_OVERRIDE =
                'data-janus-console-info-override'),
              (e.JANUS_TEST_POLICY_OVERRIDE =
                'data-janus-test-policy-override'),
              (e.SIGNIN_STAGE = 'data-signin-stage'),
              (e.VPC_ID = 'data-vpc-id')
          })(t.DataParams || (t.DataParams = {})),
          (function (e) {
            ;(e.CONTENT_TYPE = 'Content-Type'),
              (e.CONTENT_TYPE_APPLICATION_JSON = 'application/json'),
              (e.X_WIDGET_ID = 'x-widget-id'),
              (e.X_VPC_ID = 'x-vpc-id'),
              (e.X_CSRF_TOKEN = 'x-console-api-token'),
              (e.X_WIDGET_STAGE = 'x-widget-stage'),
              (e.X_CONSOLE_INFO = 'x-console-info'),
              (e.X_AMZ_REQUEST_ID = 'x-amzn-requestid'),
              (e.X_AMZ_REMAPPED_X_AMZ_REQUEST_ID =
                'x-amzn-remapped-x-amzn-requestid'),
              (e.X_WEB_CLIENT_VERSION = 'x-web-client-version'),
              (e.X_AMZ_CONTENT_SHA256 = 'x-amz-content-sha256')
          })(t.HttpHeaders || (t.HttpHeaders = {})),
          (function (e) {
            e[(e.MAX_RETRIES = 3)] = 'MAX_RETRIES'
          })(t.SdkConfig || (t.SdkConfig = {})),
          (function (e) {
            ;(e.BETA = 'beta'), (e.GAMMA = 'gamma'), (e.PROD = 'prod')
          })(t.JanusStage || (t.JanusStage = {})),
          (function (e) {
            e.POST = 'POST'
          })(t.HttpMethods || (t.HttpMethods = {})),
          (function (e) {
            ;(e.BROWSERCREDS = 'browserCreds'),
              (e.PRESIGN = 'presign'),
              (e.CREDENTIAL = 'credential')
          })((n = t.EndpointPaths || (t.EndpointPaths = {}))),
          (function (e) {
            ;(e.PROD = 'prod'), (e.PRODISH = 'prodish')
          })(t.SigninStages || (t.SigninStages = {})),
          (function (e) {
            ;(e.TEST = 'test'), (e.PROD = 'prod')
          })(t.WidgetStages || (t.WidgetStages = {})),
          (t.CONSOLE_PROXY_ENABLED_PARTITIONS = ['aws']),
          (t.JANUS_BROWSER_PREFIX = 'console-api'),
          (t.STORAGE_KEY = t.JANUS_BROWSER_PREFIX + '-cache'),
          (t.STORAGE_KEY_CP = t.JANUS_BROWSER_PREFIX + '-cache-cp'),
          (t.CLIENT_PARAMS = t.JANUS_BROWSER_PREFIX + '-override'),
          (t.RETRY_COUNT = 2),
          (t.RETRY_DELAY_IN_MS = 200),
          (t.SDK_CALL_ERROR_METRIC = 'JanusSDKE'),
          (t.SDK_CALL_4XX_METRIC = 'JanusSDK4xx'),
          (t.SDK_CALL_5XX_METRIC = 'JanusSDK5xx'),
          (t.DUMMY_UNIVERSAL_CONSOLE_INFO = 'UNIVERSAL'),
          (t.DUMMY_DEVELOPER_CONSOLE_INFO = 'DEVELOPER_OVERRIDE'),
          (t.MEZZ_REGION_METATAG_ID = 'awsc-mezz-region'),
          (t.UNRETRYABLE_HTTP_ERROR_STATUS_CODES = [400, 403, 404, 413, 415]),
          (t.MetricPrefixMap = new Map([
            [n.BROWSERCREDS, 'B'],
            [n.PRESIGN, 'P'],
          ]))
      },
      89232: function (e, t, n) {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.CookieObserver = void 0)
        var r = n(31980),
          o = (function () {
            function e(e, t) {
              void 0 === t && (t = 5e3),
                (this.cookieName = e),
                (this.listeners = []),
                (this.lastSeenCookieValue = r.safeGetCookieString(e)),
                setInterval(this.poll.bind(this), t)
            }
            return (
              (e.prototype.addChangeListener = function (e) {
                this.listeners.push(e)
              }),
              (e.prototype.poll = function () {
                var e = r.safeGetCookieString(this.cookieName)
                this.lastSeenCookieValue !== e &&
                  this.listeners.forEach(function (e) {
                    return e()
                  }),
                  (this.lastSeenCookieValue = e)
              }),
              e
            )
          })()
        t.CookieObserver = o
      },
      31980: function (e, t, n) {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.safeGetCookieString = t.CookieParser = void 0)
        var r = n(74289),
          o = n(50922),
          i = new RegExp('([^=]+)=(.*)'),
          a = (function () {
            function e() {}
            return (
              (e.getCookieString = function (e, t) {
                var n = this.getMultipleCookieStrings(e, t)
                if (n.length < 1 || '' === (null == n ? void 0 : n[0]))
                  throw new o.InvalidSessionError(e + ' cookie not found')
                return n[0]
              }),
              (e.getMultipleCookieStrings = function (e, t) {
                return (t || document).cookie
                  .split(/ *; +/)
                  .reduce(function (t, n) {
                    var r = i.exec(n)
                    if (!r || !r[1] || !r[2]) return t
                    var o = r[1].trim(),
                      a = r[2].trim()
                    return o !== e || t.push(a), t
                  }, [])
              }),
              (e.getCSRFCookieString = function (e, t) {
                return this.getCookieString(this.getCSRFCookieName(e), t)
              }),
              (e.getCSRFCookieName = function (e) {
                return r.Cookies.CSRF_TOKEN_V2_PREFIX + '_' + e.janusRegion
              }),
              (e.clearCSRFToken = function (e) {
                var t = this,
                  n = document.cookie.split(';').filter(function (n) {
                    return 0 === n.trim().lastIndexOf(t.getCSRFCookieName(e), 0)
                  })
                n &&
                  n.forEach(function (e) {
                    document.cookie =
                      e.split('=')[0] +
                      '=;expires=Thu, 01 Jan 1970 00:00:01 GMT'
                  })
              }),
              e
            )
          })()
        ;(t.CookieParser = a),
          (t.safeGetCookieString = function (e) {
            try {
              return a.getCookieString(e)
            } catch (e) {
              return
            }
          })
      },
      87234: function (e, t, n) {
        'use strict'
        var r =
            (this && this.__awaiter) ||
            function (e, t, n, r) {
              return new (n || (n = Promise))(function (o, i) {
                function a(e) {
                  try {
                    s(r.next(e))
                  } catch (e) {
                    i(e)
                  }
                }
                function u(e) {
                  try {
                    s(r.throw(e))
                  } catch (e) {
                    i(e)
                  }
                }
                function s(e) {
                  var t
                  e.done
                    ? o(e.value)
                    : ((t = e.value),
                      t instanceof n
                        ? t
                        : new n(function (e) {
                            e(t)
                          })).then(a, u)
                }
                s((r = r.apply(e, t || [])).next())
              })
            },
          o =
            (this && this.__generator) ||
            function (e, t) {
              var n,
                r,
                o,
                i,
                a = {
                  label: 0,
                  sent: function () {
                    if (1 & o[0]) throw o[1]
                    return o[1]
                  },
                  trys: [],
                  ops: [],
                }
              return (
                (i = { next: u(0), throw: u(1), return: u(2) }),
                'function' == typeof Symbol &&
                  (i[Symbol.iterator] = function () {
                    return this
                  }),
                i
              )
              function u(i) {
                return function (u) {
                  return (function (i) {
                    if (n)
                      throw new TypeError('Generator is already executing.')
                    for (; a; )
                      try {
                        if (
                          ((n = 1),
                          r &&
                            (o =
                              2 & i[0]
                                ? r.return
                                : i[0]
                                ? r.throw || ((o = r.return) && o.call(r), 0)
                                : r.next) &&
                            !(o = o.call(r, i[1])).done)
                        )
                          return o
                        switch (
                          ((r = 0), o && (i = [2 & i[0], o.value]), i[0])
                        ) {
                          case 0:
                          case 1:
                            o = i
                            break
                          case 4:
                            return a.label++, { value: i[1], done: !1 }
                          case 5:
                            a.label++, (r = i[1]), (i = [0])
                            continue
                          case 7:
                            ;(i = a.ops.pop()), a.trys.pop()
                            continue
                          default:
                            if (
                              !((o = a.trys),
                              (o = o.length > 0 && o[o.length - 1]) ||
                                (6 !== i[0] && 2 !== i[0]))
                            ) {
                              a = 0
                              continue
                            }
                            if (
                              3 === i[0] &&
                              (!o || (i[1] > o[0] && i[1] < o[3]))
                            ) {
                              a.label = i[1]
                              break
                            }
                            if (6 === i[0] && a.label < o[1]) {
                              ;(a.label = o[1]), (o = i)
                              break
                            }
                            if (o && a.label < o[2]) {
                              ;(a.label = o[2]), a.ops.push(i)
                              break
                            }
                            o[2] && a.ops.pop(), a.trys.pop()
                            continue
                        }
                        i = t.call(e, a)
                      } catch (e) {
                        ;(i = [6, e]), (r = 0)
                      } finally {
                        n = o = 0
                      }
                    if (5 & i[0]) throw i[1]
                    return { value: i[0] ? i[1] : void 0, done: !0 }
                  })([i, u])
                }
              }
            }
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.CryptoHasher = void 0)
        var i = n(50922),
          a = (function () {
            function e() {}
            return (
              (e.generateHalfHash = function (e) {
                return r(this, void 0, void 0, function () {
                  var t, n, r, a, u, s, c, l, f
                  return o(this, function (o) {
                    switch (o.label) {
                      case 0:
                        return (
                          (t = e._window || window),
                          (n = e.supportedBrowser),
                          (r = e.stringToHash),
                          (a = this.resolveSupportedAlgorithm(e.hashAlgorithm)),
                          'modern' !== n
                            ? [3, 2]
                            : [
                                4,
                                this.hashedBuffer({
                                  stringToHash: r,
                                  browserWindow: t,
                                  algorithm: a,
                                }),
                              ]
                        )
                      case 1:
                        return (u = o.sent()), [3, 3]
                      case 2:
                        throw new i.InternalError('Browser not supported!')
                      case 3:
                        for (
                          s = new Uint8Array(u.slice(0, u.byteLength / 2)),
                            c = [],
                            l = 0;
                          l < s.byteLength;
                          l++
                        )
                          c.push(String.fromCharCode(s[l]))
                        return (
                          (f = btoa(c.join(''))), [2, this.base64ToBase64Url(f)]
                        )
                    }
                  })
                })
              }),
              (e.hashedBuffer = function (e) {
                return r(this, void 0, void 0, function () {
                  var t, n, r
                  return o(this, function (o) {
                    switch (o.label) {
                      case 0:
                        return (
                          (t = new TextEncoder()),
                          (n = e.browserWindow.crypto.subtle),
                          (r = t.encode(e.stringToHash)),
                          [4, n.digest(e.algorithm, r)]
                        )
                      case 1:
                        return [2, o.sent()]
                    }
                  })
                })
              }),
              (e.base64ToBase64Url = function (e) {
                return e
                  .replace(/\//g, '_')
                  .replace(/\+/g, '-')
                  .replace(/=+$/, '')
              }),
              (e.resolveSupportedAlgorithm = function (e) {
                var t = e.toUpperCase()
                if ('ES384' === t) return 'SHA-384'
                if ('SHA-384' === t) return t
                throw new i.InternalError(
                  'Hashing algorithm ' + e + ' not supported!',
                )
              }),
              e
            )
          })()
        t.CryptoHasher = a
      },
      64058: function (e, t, n) {
        'use strict'
        var r =
            (this && this.__awaiter) ||
            function (e, t, n, r) {
              return new (n || (n = Promise))(function (o, i) {
                function a(e) {
                  try {
                    s(r.next(e))
                  } catch (e) {
                    i(e)
                  }
                }
                function u(e) {
                  try {
                    s(r.throw(e))
                  } catch (e) {
                    i(e)
                  }
                }
                function s(e) {
                  var t
                  e.done
                    ? o(e.value)
                    : ((t = e.value),
                      t instanceof n
                        ? t
                        : new n(function (e) {
                            e(t)
                          })).then(a, u)
                }
                s((r = r.apply(e, t || [])).next())
              })
            },
          o =
            (this && this.__generator) ||
            function (e, t) {
              var n,
                r,
                o,
                i,
                a = {
                  label: 0,
                  sent: function () {
                    if (1 & o[0]) throw o[1]
                    return o[1]
                  },
                  trys: [],
                  ops: [],
                }
              return (
                (i = { next: u(0), throw: u(1), return: u(2) }),
                'function' == typeof Symbol &&
                  (i[Symbol.iterator] = function () {
                    return this
                  }),
                i
              )
              function u(i) {
                return function (u) {
                  return (function (i) {
                    if (n)
                      throw new TypeError('Generator is already executing.')
                    for (; a; )
                      try {
                        if (
                          ((n = 1),
                          r &&
                            (o =
                              2 & i[0]
                                ? r.return
                                : i[0]
                                ? r.throw || ((o = r.return) && o.call(r), 0)
                                : r.next) &&
                            !(o = o.call(r, i[1])).done)
                        )
                          return o
                        switch (
                          ((r = 0), o && (i = [2 & i[0], o.value]), i[0])
                        ) {
                          case 0:
                          case 1:
                            o = i
                            break
                          case 4:
                            return a.label++, { value: i[1], done: !1 }
                          case 5:
                            a.label++, (r = i[1]), (i = [0])
                            continue
                          case 7:
                            ;(i = a.ops.pop()), a.trys.pop()
                            continue
                          default:
                            if (
                              !((o = a.trys),
                              (o = o.length > 0 && o[o.length - 1]) ||
                                (6 !== i[0] && 2 !== i[0]))
                            ) {
                              a = 0
                              continue
                            }
                            if (
                              3 === i[0] &&
                              (!o || (i[1] > o[0] && i[1] < o[3]))
                            ) {
                              a.label = i[1]
                              break
                            }
                            if (6 === i[0] && a.label < o[1]) {
                              ;(a.label = o[1]), (o = i)
                              break
                            }
                            if (o && a.label < o[2]) {
                              ;(a.label = o[2]), a.ops.push(i)
                              break
                            }
                            o[2] && a.ops.pop(), a.trys.pop()
                            continue
                        }
                        i = t.call(e, a)
                      } catch (e) {
                        ;(i = [6, e]), (r = 0)
                      } finally {
                        n = o = 0
                      }
                    if (5 & i[0]) throw i[1]
                    return { value: i[0] ? i[1] : void 0, done: !0 }
                  })([i, u])
                }
              }
            }
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.HttpClient = void 0)
        var i = n(50922),
          a = n(74289),
          u = (function () {
            function e() {}
            return (
              (e.executeRequest = function (t, n, i, a, u) {
                return r(this, void 0, void 0, function () {
                  return o(this, function (r) {
                    return [
                      2,
                      new Promise(function (r, o) {
                        var s = new XMLHttpRequest()
                        for (var c in (s.open(t, n, !0),
                        (s.timeout = (u && u.timeout) || 1e4),
                        (s.withCredentials = !0),
                        i))
                          s.setRequestHeader(c, i[c])
                        ;(s.ontimeout = function () {
                          o(e.buildError(s, 'Request timed out'))
                        }),
                          (s.onerror = function (t) {
                            o(
                              e.buildError(
                                s,
                                'Request encountered an error: ' +
                                  t.loaded +
                                  ' bytes loaded',
                              ),
                            )
                          }),
                          (s.onabort = function () {
                            o(e.buildError(s, 'Request was aborted'))
                          }),
                          (s.onload = function () {
                            s.status >= 200 && s.status < 300
                              ? r(s.response)
                              : o(e.buildError(s))
                          })
                        try {
                          s.send(a)
                        } catch (t) {
                          o(e.buildError(s, 'Request failed to execute', t))
                        }
                      }),
                    ]
                  })
                })
              }),
              (e.buildHttpErrorContext = function (e) {
                var t,
                  n = e.getResponseHeader(a.HttpHeaders.X_AMZ_REQUEST_ID)
                if (n)
                  return (
                    ((t = {})[a.HttpHeaders.X_AMZ_REQUEST_ID] = n),
                    (t[
                      a.HttpHeaders.X_AMZ_REMAPPED_X_AMZ_REQUEST_ID
                    ] = e.getResponseHeader(
                      a.HttpHeaders.X_AMZ_REMAPPED_X_AMZ_REQUEST_ID,
                    )),
                    t
                  )
              }),
              (e.buildError = function (e, t, n) {
                return new i.HttpError(
                  e.response || t,
                  e.status,
                  this.buildHttpErrorContext(e),
                  n,
                )
              }),
              e
            )
          })()
        t.HttpClient = u
      },
      95075: function (e, t, n) {
        'use strict'
        var r =
            (this && this.__assign) ||
            function () {
              return (r =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var o in (t = arguments[n]))
                      Object.prototype.hasOwnProperty.call(t, o) &&
                        (e[o] = t[o])
                  return e
                }).apply(this, arguments)
            },
          o =
            (this && this.__awaiter) ||
            function (e, t, n, r) {
              return new (n || (n = Promise))(function (o, i) {
                function a(e) {
                  try {
                    s(r.next(e))
                  } catch (e) {
                    i(e)
                  }
                }
                function u(e) {
                  try {
                    s(r.throw(e))
                  } catch (e) {
                    i(e)
                  }
                }
                function s(e) {
                  var t
                  e.done
                    ? o(e.value)
                    : ((t = e.value),
                      t instanceof n
                        ? t
                        : new n(function (e) {
                            e(t)
                          })).then(a, u)
                }
                s((r = r.apply(e, t || [])).next())
              })
            },
          i =
            (this && this.__generator) ||
            function (e, t) {
              var n,
                r,
                o,
                i,
                a = {
                  label: 0,
                  sent: function () {
                    if (1 & o[0]) throw o[1]
                    return o[1]
                  },
                  trys: [],
                  ops: [],
                }
              return (
                (i = { next: u(0), throw: u(1), return: u(2) }),
                'function' == typeof Symbol &&
                  (i[Symbol.iterator] = function () {
                    return this
                  }),
                i
              )
              function u(i) {
                return function (u) {
                  return (function (i) {
                    if (n)
                      throw new TypeError('Generator is already executing.')
                    for (; a; )
                      try {
                        if (
                          ((n = 1),
                          r &&
                            (o =
                              2 & i[0]
                                ? r.return
                                : i[0]
                                ? r.throw || ((o = r.return) && o.call(r), 0)
                                : r.next) &&
                            !(o = o.call(r, i[1])).done)
                        )
                          return o
                        switch (
                          ((r = 0), o && (i = [2 & i[0], o.value]), i[0])
                        ) {
                          case 0:
                          case 1:
                            o = i
                            break
                          case 4:
                            return a.label++, { value: i[1], done: !1 }
                          case 5:
                            a.label++, (r = i[1]), (i = [0])
                            continue
                          case 7:
                            ;(i = a.ops.pop()), a.trys.pop()
                            continue
                          default:
                            if (
                              !((o = a.trys),
                              (o = o.length > 0 && o[o.length - 1]) ||
                                (6 !== i[0] && 2 !== i[0]))
                            ) {
                              a = 0
                              continue
                            }
                            if (
                              3 === i[0] &&
                              (!o || (i[1] > o[0] && i[1] < o[3]))
                            ) {
                              a.label = i[1]
                              break
                            }
                            if (6 === i[0] && a.label < o[1]) {
                              ;(a.label = o[1]), (o = i)
                              break
                            }
                            if (o && a.label < o[2]) {
                              ;(a.label = o[2]), a.ops.push(i)
                              break
                            }
                            o[2] && a.ops.pop(), a.trys.pop()
                            continue
                        }
                        i = t.call(e, a)
                      } catch (e) {
                        ;(i = [6, e]), (r = 0)
                      } finally {
                        n = o = 0
                      }
                    if (5 & i[0]) throw i[1]
                    return { value: i[0] ? i[1] : void 0, done: !0 }
                  })([i, u])
                }
              }
            }
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.JanusClient = t.State = void 0)
        var a,
          u = n(31980),
          s = n(74289),
          c = n(21347),
          l = n(98402),
          f = n(3985),
          d = n(35631)
        !(function (e) {
          ;(e.UNINITIALIZED = 'Uninitialized'),
            (e.INITIALIZED = 'Initialized'),
            (e.INITIALIZING = 'Initializing'),
            (e.REBUILDING = 'Rebuilding')
        })((a = t.State || (t.State = {})))
        var p = (function () {
          function e(e, t) {
            ;(this.clientParams = e),
              (this.initializationState = a.UNINITIALIZED),
              (this.region = this.determineRegion(e, t)),
              (this.initialization = this.initializeSession())
          }
          return (
            (e.prototype.reinitialize = function () {
              return (
                this.initializationState === a.INITIALIZED &&
                  ((this.initializationState = a.INITIALIZING),
                  c.LocalStorage.clear(),
                  (this.initialization = this.initializeSession())),
                this.initialization
              )
            }),
            (e.prototype.getClientParams = function () {
              return r(r({}, this.clientParams), { janusRegion: this.region })
            }),
            (e.prototype.getInitializationState = function () {
              return this.initializationState
            }),
            (e.prototype.initialize = function () {
              return this.initialization
            }),
            (e.prototype.rebuildClient = function (e) {
              this.initializationState = a.REBUILDING
              var t = this.initialization
              return (
                (this.initialization = this.overrideSession(t, e)),
                this.initialization
              )
            }),
            (e.prototype.overrideSession = function (e, t) {
              return o(this, void 0, void 0, function () {
                var n, r, o
                return i(this, function (i) {
                  switch (i.label) {
                    case 0:
                      return i.trys.push([0, 2, , 3]), [4, e]
                    case 1:
                      return i.sent(), [3, 3]
                    case 2:
                      return (
                        (n = i.sent()),
                        console.warn(
                          'Original Janus client initialization failed. ',
                          n,
                        ),
                        [3, 3]
                      )
                    case 3:
                      return (
                        c.LocalStorage.clear(),
                        u.CookieParser.clearCSRFToken(this.getClientParams()),
                        (this.clientParams = t),
                        (this.region = this.determineRegion(t)),
                        (r = u.CookieParser.getCookieString(
                          s.Cookies.AWS_USERINFO,
                        )),
                        (o = this.getClientParams()),
                        [4, c.LocalStorage.hasValidSession(o, r)]
                      )
                    case 4:
                      return i.sent()
                        ? [3, 7]
                        : [4, l.OAuthClient.executeFlow(o)]
                    case 5:
                      return i.sent(), [4, c.LocalStorage.storeSession(o, r)]
                    case 6:
                      i.sent(), (i.label = 7)
                    case 7:
                      return (this.initializationState = a.INITIALIZED), [2]
                  }
                })
              })
            }),
            (e.prototype.initializeSession = function () {
              return o(this, void 0, void 0, function () {
                var e, t
                return i(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return (
                        (e = u.CookieParser.getCookieString(
                          s.Cookies.AWS_USERINFO,
                        )),
                        (t = this.getClientParams()),
                        [4, c.LocalStorage.hasValidSession(t, e)]
                      )
                    case 1:
                      return n.sent()
                        ? [3, 4]
                        : [4, l.OAuthClient.executeFlow(t)]
                    case 2:
                      return n.sent(), [4, c.LocalStorage.storeSession(t, e)]
                    case 3:
                      n.sent(), (n.label = 4)
                    case 4:
                      return (
                        this.initializationState !== a.REBUILDING &&
                          (this.initializationState = a.INITIALIZED),
                        [2]
                      )
                  }
                })
              })
            }),
            (e.prototype.determineRegion = function (e, t) {
              var n,
                r,
                o,
                i,
                a = null == e ? void 0 : e.janusRegion
              if (a) return a
              var u = (null == t ? void 0 : t.document) || document,
                c =
                  null ===
                    (n =
                      null == u
                        ? void 0
                        : u.getElementById(s.MEZZ_REGION_METATAG_ID)) ||
                  void 0 === n
                    ? void 0
                    : n.getAttribute('content')
              if (c) return this.translateMezzRegion(c)
              var l = t || window,
                p =
                  null ===
                    (i =
                      null ===
                        (o =
                          null === (r = null == l ? void 0 : l.top) ||
                          void 0 === r
                            ? void 0
                            : r.document) || void 0 === o
                        ? void 0
                        : o.getElementById(s.MEZZ_REGION_METATAG_ID)) ||
                  void 0 === i
                    ? void 0
                    : i.getAttribute('content')
              return p
                ? this.translateMezzRegion(p)
                : (f.logger.logMetric({
                    metricName: 'JanusRegionFallback',
                    value: 1,
                    clientParams: e,
                  }),
                  d.getDefaultRegion(document.location.host))
            }),
            (e.prototype.translateMezzRegion = function (e) {
              return 'us-s3nw-1' !== e ? e : 'us-west-2'
            }),
            e
          )
        })()
        t.JanusClient = p
      },
      47886: function (e, t, n) {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.JanusClientBuilder = t.WEB_CLIENT_ID = void 0)
        var r = n(95075),
          o = n(98824),
          i = n(92868)
        t.WEB_CLIENT_ID = 'console-api-client-id'
        var a = (function () {
          function e() {}
          return (
            (e.build = function (e, n) {
              if (this.client) return this.client
              var a = n
                  ? o.ClientInputParser.parseJanusScript(
                      n.getElementById(t.WEB_CLIENT_ID),
                    )
                  : e,
                u = i.SessionStorage.getClientParamOverride(a)
              return (this.client = new r.JanusClient(u)), this.client
            }),
            (e.rebuild = function (e, t) {
              return this.client
                ? (this.client.rebuildClient(e), this.client)
                : this.build(e, t)
            }),
            (e._setJanusClient = function (e) {
              this.client = e
            }),
            e
          )
        })()
        t.JanusClientBuilder = a
      },
      21347: function (e, t, n) {
        'use strict'
        var r =
            (this && this.__awaiter) ||
            function (e, t, n, r) {
              return new (n || (n = Promise))(function (o, i) {
                function a(e) {
                  try {
                    s(r.next(e))
                  } catch (e) {
                    i(e)
                  }
                }
                function u(e) {
                  try {
                    s(r.throw(e))
                  } catch (e) {
                    i(e)
                  }
                }
                function s(e) {
                  var t
                  e.done
                    ? o(e.value)
                    : ((t = e.value),
                      t instanceof n
                        ? t
                        : new n(function (e) {
                            e(t)
                          })).then(a, u)
                }
                s((r = r.apply(e, t || [])).next())
              })
            },
          o =
            (this && this.__generator) ||
            function (e, t) {
              var n,
                r,
                o,
                i,
                a = {
                  label: 0,
                  sent: function () {
                    if (1 & o[0]) throw o[1]
                    return o[1]
                  },
                  trys: [],
                  ops: [],
                }
              return (
                (i = { next: u(0), throw: u(1), return: u(2) }),
                'function' == typeof Symbol &&
                  (i[Symbol.iterator] = function () {
                    return this
                  }),
                i
              )
              function u(i) {
                return function (u) {
                  return (function (i) {
                    if (n)
                      throw new TypeError('Generator is already executing.')
                    for (; a; )
                      try {
                        if (
                          ((n = 1),
                          r &&
                            (o =
                              2 & i[0]
                                ? r.return
                                : i[0]
                                ? r.throw || ((o = r.return) && o.call(r), 0)
                                : r.next) &&
                            !(o = o.call(r, i[1])).done)
                        )
                          return o
                        switch (
                          ((r = 0), o && (i = [2 & i[0], o.value]), i[0])
                        ) {
                          case 0:
                          case 1:
                            o = i
                            break
                          case 4:
                            return a.label++, { value: i[1], done: !1 }
                          case 5:
                            a.label++, (r = i[1]), (i = [0])
                            continue
                          case 7:
                            ;(i = a.ops.pop()), a.trys.pop()
                            continue
                          default:
                            if (
                              !((o = a.trys),
                              (o = o.length > 0 && o[o.length - 1]) ||
                                (6 !== i[0] && 2 !== i[0]))
                            ) {
                              a = 0
                              continue
                            }
                            if (
                              3 === i[0] &&
                              (!o || (i[1] > o[0] && i[1] < o[3]))
                            ) {
                              a.label = i[1]
                              break
                            }
                            if (6 === i[0] && a.label < o[1]) {
                              ;(a.label = o[1]), (o = i)
                              break
                            }
                            if (o && a.label < o[2]) {
                              ;(a.label = o[2]), a.ops.push(i)
                              break
                            }
                            o[2] && a.ops.pop(), a.trys.pop()
                            continue
                        }
                        i = t.call(e, a)
                      } catch (e) {
                        ;(i = [6, e]), (r = 0)
                      } finally {
                        n = o = 0
                      }
                    if (5 & i[0]) throw i[1]
                    return { value: i[0] ? i[1] : void 0, done: !0 }
                  })([i, u])
                }
              }
            }
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.LocalStorage = void 0)
        var i = n(74289),
          a = n(31980),
          u = n(87234),
          s = n(3985),
          c = n(35631),
          l = n(86662),
          f = (function () {
            function e() {}
            return (
              (e.hasValidSession = function (e, t, n) {
                return r(this, void 0, void 0, function () {
                  var r, s, f, d, p, h, v
                  return o(this, function (o) {
                    switch (o.label) {
                      case 0:
                        ;(r = n || window),
                          (s = c.isConsoleProxyEnabled(e)
                            ? i.STORAGE_KEY_CP
                            : i.STORAGE_KEY),
                          (o.label = 1)
                      case 1:
                        return (
                          o.trys.push([1, 3, , 4]),
                          (f = r.localStorage.getItem(s))
                            ? ((d = a.CookieParser.getCSRFCookieString(e)),
                              (p = JSON.parse(decodeURIComponent(f))),
                              (h = l.getSupportedBrowser(r)),
                              [
                                4,
                                u.CryptoHasher.generateHalfHash({
                                  stringToHash: t,
                                  hashAlgorithm: this.HASHING_ALGORITHM,
                                  supportedBrowser: h,
                                  _window: n,
                                }),
                              ])
                            : [2, !1]
                        )
                      case 2:
                        return (
                          (v = o.sent()),
                          [
                            2,
                            !!d &&
                              p.region === e.janusRegion &&
                              p.sessionHash === v,
                          ]
                        )
                      case 3:
                        return o.sent(), this.clear(r), [2, !1]
                      case 4:
                        return [2]
                    }
                  })
                })
              }),
              (e.clear = function (e) {
                var t = e || window
                t.localStorage.removeItem(i.STORAGE_KEY),
                  t.localStorage.removeItem(i.STORAGE_KEY_CP)
              }),
              (e.storeSession = function (e, t, n) {
                return r(this, void 0, void 0, function () {
                  var r, a, f, d, p, h, v
                  return o(this, function (o) {
                    switch (o.label) {
                      case 0:
                        return (
                          o.trys.push([0, 2, , 3]),
                          (r = n || window),
                          (a = l.getSupportedBrowser(r)),
                          (f = c.isConsoleProxyEnabled(e)
                            ? i.STORAGE_KEY_CP
                            : i.STORAGE_KEY),
                          [
                            4,
                            u.CryptoHasher.generateHalfHash({
                              stringToHash: t,
                              hashAlgorithm: this.HASHING_ALGORITHM,
                              supportedBrowser: a,
                              _window: r,
                            }),
                          ]
                        )
                      case 1:
                        return (
                          (d = o.sent()),
                          (p = { sessionHash: d, region: e.janusRegion }),
                          (h = encodeURIComponent(JSON.stringify(p))),
                          r.localStorage.setItem(f, h),
                          [3, 3]
                        )
                      case 2:
                        return (
                          (v = o.sent()),
                          s.logger.logMetric({
                            metricName: 'JanusSetCacheError',
                            value: 1,
                            clientParams: e,
                            error: v,
                          }),
                          [3, 3]
                        )
                      case 3:
                        return [2]
                    }
                  })
                })
              }),
              (e.HASHING_ALGORITHM = 'SHA-384'),
              e
            )
          })()
        t.LocalStorage = f
      },
      3985: function (e, t, n) {
        'use strict'
        var r =
          (this && this.__assign) ||
          function () {
            return (r =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var o in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
                return e
              }).apply(this, arguments)
          }
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.logger = t.CLOGLogger = void 0)
        var o = n(74289),
          i = (function () {
            function e() {
              var e
              ;(
                null === (e = window.AWSC) || void 0 === e ? void 0 : e.Clog.log
              )
                ? (this.log = window.AWSC.Clog.log)
                : (console.warn('AWSC.Clog is not available.'),
                  (this.log = function (e) {}))
            }
            return (
              (e.prototype.logMetric = function (e) {
                var t
                this.emitWidgetAwareMetric(e)
                var n =
                  null === (t = null == e ? void 0 : e.widgetParams) ||
                  void 0 === t
                    ? void 0
                    : t.widgetId
                n && this.emitWidgetAwareMetric(r(r({}, e), { widgetId: n }))
              }),
              (e.prototype.emitWidgetAwareMetric = function (t) {
                var n,
                  r = t.widgetId,
                  i = (r ? t.metricName + '_' + r : t.metricName).replace(
                    new RegExp('[^a-zA-Z0-9_]*', 'g'),
                    '',
                  ),
                  a = (
                    '' +
                    ((null === (n = t.clientParams) || void 0 === n
                      ? void 0
                      : n.signinStage) === o.SigninStages.PRODISH
                      ? 'T'
                      : '') +
                    i
                  ).substr(0, e.MAX_METRIC_NAME_LENGTH),
                  u = this.buildDetail(t)
                this.log({ key: a, value: t.value, unit: t.unit, detail: u })
              }),
              (e.prototype.buildDetail = function (e) {
                var t,
                  n = e.error,
                  r = e.widgetId
                    ? null === (t = e.widgetParams) || void 0 === t
                      ? void 0
                      : t.metricLogMetadata
                    : void 0
                if (n || r) {
                  var o,
                    i = {
                      error: this.filterErrorObjectProperties(n),
                      metadata: r,
                    }
                  try {
                    return JSON.stringify(i)
                  } catch (o) {
                    return JSON.stringify({ error: o, metadata: o.message })
                  }
                }
              }),
              (e.prototype.filterErrorObjectProperties = function (e) {
                if (e)
                  try {
                    var t = JSON.stringify(
                      e,
                      Object.getOwnPropertyNames(e).filter(function (e) {
                        return 'stack' !== e
                      }),
                    )
                    return JSON.parse(t)
                  } catch (t) {
                    var n = e
                    return { error: n.name + ' ' + n.message }
                  }
              }),
              (e.MAX_METRIC_NAME_LENGTH = 32),
              e
            )
          })()
        ;(t.CLOGLogger = i), (t.logger = new i())
      },
      98402: function (e, t, n) {
        'use strict'
        var r =
            (this && this.__awaiter) ||
            function (e, t, n, r) {
              return new (n || (n = Promise))(function (o, i) {
                function a(e) {
                  try {
                    s(r.next(e))
                  } catch (e) {
                    i(e)
                  }
                }
                function u(e) {
                  try {
                    s(r.throw(e))
                  } catch (e) {
                    i(e)
                  }
                }
                function s(e) {
                  var t
                  e.done
                    ? o(e.value)
                    : ((t = e.value),
                      t instanceof n
                        ? t
                        : new n(function (e) {
                            e(t)
                          })).then(a, u)
                }
                s((r = r.apply(e, t || [])).next())
              })
            },
          o =
            (this && this.__generator) ||
            function (e, t) {
              var n,
                r,
                o,
                i,
                a = {
                  label: 0,
                  sent: function () {
                    if (1 & o[0]) throw o[1]
                    return o[1]
                  },
                  trys: [],
                  ops: [],
                }
              return (
                (i = { next: u(0), throw: u(1), return: u(2) }),
                'function' == typeof Symbol &&
                  (i[Symbol.iterator] = function () {
                    return this
                  }),
                i
              )
              function u(i) {
                return function (u) {
                  return (function (i) {
                    if (n)
                      throw new TypeError('Generator is already executing.')
                    for (; a; )
                      try {
                        if (
                          ((n = 1),
                          r &&
                            (o =
                              2 & i[0]
                                ? r.return
                                : i[0]
                                ? r.throw || ((o = r.return) && o.call(r), 0)
                                : r.next) &&
                            !(o = o.call(r, i[1])).done)
                        )
                          return o
                        switch (
                          ((r = 0), o && (i = [2 & i[0], o.value]), i[0])
                        ) {
                          case 0:
                          case 1:
                            o = i
                            break
                          case 4:
                            return a.label++, { value: i[1], done: !1 }
                          case 5:
                            a.label++, (r = i[1]), (i = [0])
                            continue
                          case 7:
                            ;(i = a.ops.pop()), a.trys.pop()
                            continue
                          default:
                            if (
                              !((o = a.trys),
                              (o = o.length > 0 && o[o.length - 1]) ||
                                (6 !== i[0] && 2 !== i[0]))
                            ) {
                              a = 0
                              continue
                            }
                            if (
                              3 === i[0] &&
                              (!o || (i[1] > o[0] && i[1] < o[3]))
                            ) {
                              a.label = i[1]
                              break
                            }
                            if (6 === i[0] && a.label < o[1]) {
                              ;(a.label = o[1]), (o = i)
                              break
                            }
                            if (o && a.label < o[2]) {
                              ;(a.label = o[2]), a.ops.push(i)
                              break
                            }
                            o[2] && a.ops.pop(), a.trys.pop()
                            continue
                        }
                        i = t.call(e, a)
                      } catch (e) {
                        ;(i = [6, e]), (r = 0)
                      } finally {
                        n = o = 0
                      }
                    if (5 & i[0]) throw i[1]
                    return { value: i[0] ? i[1] : void 0, done: !0 }
                  })([i, u])
                }
              }
            }
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.OAuthClient = t.OAUTH_SCRIPT_ID = void 0)
        var i = n(86662),
          a = n(74289),
          u = n(50922),
          s = n(31980),
          c = n(3985)
        t.OAUTH_SCRIPT_ID = 'console-api-oauth'
        var l = (function () {
          function e() {}
          return (
            (e.executeFlow = function (e) {
              var t = this,
                n =
                  '' +
                  i.buildEndpoint(e, a.EndpointPaths.CREDENTIAL) +
                  this.buildQueryParams(e),
                r = { retries: a.RETRY_COUNT, delay: a.RETRY_DELAY_IN_MS },
                o = Date.now()
              return this.retry(
                function () {
                  return t.performOAuthDance(n, e)
                },
                e,
                r,
              )
                .then(function () {
                  c.logger.logMetric({
                    metricName: 'JanusOE',
                    value: 0,
                    clientParams: e,
                  })
                })
                .catch(function (t) {
                  throw (
                    (c.logger.logMetric({
                      metricName: 'JanusOE',
                      value: 1,
                      clientParams: e,
                      error: t,
                    }),
                    t)
                  )
                })
                .finally(function () {
                  var t = Date.now() - o
                  c.logger.logMetric({
                    metricName: 'JanusOL',
                    value: t,
                    clientParams: e,
                    unit: 'ms',
                  })
                })
            }),
            (e.performOAuthDance = function (e, n, r, o) {
              var i = this,
                a = o || document
              return new Promise(function (o, c) {
                var l = a.createElement('script')
                ;(l.src = e), (l.id = t.OAUTH_SCRIPT_ID)
                var f = setTimeout(function () {
                  c(
                    new u.OAuthFlowTimeoutError(
                      'Console API Service OAuth flow timed out',
                    ),
                  ),
                    i.removeScript(t.OAUTH_SCRIPT_ID, a)
                }, r || 1e4)
                ;(l.onload = function () {
                  try {
                    s.CookieParser.getCSRFCookieString(n, a)
                  } catch (e) {
                    c(
                      new u.CookieNotFoundError(
                        'Console API Service OAuth flow did not complete successfully',
                        e,
                      ),
                    )
                  }
                  o(),
                    i.removeScript(t.OAUTH_SCRIPT_ID, a),
                    f && clearTimeout(f)
                }),
                  (l.onerror = function () {
                    c(
                      new u.OAuthFlowError(
                        'Error performing Console API Service OAuth flow',
                      ),
                    ),
                      i.removeScript(t.OAUTH_SCRIPT_ID, a),
                      f && clearTimeout(f)
                  }),
                  a.getElementsByTagName('head')[0].appendChild(l)
              })
            }),
            (e.removeScript = function (e, t) {
              var n = t.getElementById(e)
              n && t.getElementsByTagName('head')[0].removeChild(n)
            }),
            (e.retry = function (e, t, n) {
              return r(this, void 0, void 0, function () {
                var r, a, s
                return o(this, function (o) {
                  switch (o.label) {
                    case 0:
                      ;(r = new Error('Error')), (a = 0), (o.label = 1)
                    case 1:
                      if (!(a <= n.retries)) return [3, 8]
                      o.label = 2
                    case 2:
                      return o.trys.push([2, 4, , 5]), [4, e()]
                    case 3:
                      return [2, o.sent()]
                    case 4:
                      return (
                        (s = o.sent()),
                        a < n.retries &&
                          c.logger.logMetric({
                            metricName: 'JanusOER',
                            value: 1,
                            clientParams: t,
                            error: s,
                          }),
                        (r = s),
                        [3, 5]
                      )
                    case 5:
                      return [4, i.retryDelay(a, n.delay)]
                    case 6:
                      o.sent(), (o.label = 7)
                    case 7:
                      return a++, [3, 1]
                    case 8:
                      throw new u.OAuthFailAllRetryError(
                        'All OAuth retries failed.',
                        r,
                      )
                  }
                })
              })
            }),
            (e.buildQueryParams = function (e) {
              var t = [
                e.janusTestPolicyOverride ? 'testPolicyOverride=true' : '',
                e.vpcId ? a.HttpHeaders.X_VPC_ID + '=' + e.vpcId : '',
              ]
                .filter(function (e) {
                  return '' !== e
                })
                .join('&')
              return '' !== t ? '?' + t : ''
            }),
            e
          )
        })()
        t.OAuthClient = l
      },
      83591: function (e, t, n) {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.PresignRequestBuilder = void 0)
        var r = n(74289),
          o = n(50922),
          i = n(86662),
          a = (function () {
            function e() {}
            return (
              (e.buildFromHttpRequest = function (e) {
                var t = i.transformHeaderCase(e.headers, 'Authorization'),
                  n = e.headers[t]
                if (n && n.indexOf(',') > -1) {
                  var r = n.split(',').filter(function (e) {
                      return e.indexOf('Credential=') > -1
                    })[0],
                    a = null == r ? void 0 : r.split('/')
                  if (a && a[3] && a[2])
                    return {
                      service: a[3],
                      region: a[2],
                      method: e.method,
                      path: e.path,
                      protocol: e.protocol,
                      hostname: e.hostname,
                      headers: e.headers,
                      query: e.query,
                      port: e.port,
                      body: this.filterBody(e),
                    }
                }
                throw new o.InternalError(
                  'Invalid Authorization header in http request',
                )
              }),
              (e.filterBody = function (e) {
                var t = i.transformHeaderCase(
                    e.headers,
                    r.HttpHeaders.X_AMZ_CONTENT_SHA256,
                  ),
                  n = e.headers[t]
                if (!n || '' === n) return e.body
              }),
              e
            )
          })()
        t.PresignRequestBuilder = a
      },
      24746: function (e, t, n) {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.PresignedResponseProcessor = void 0)
        var r = n(50922),
          o = n(86662),
          i = (function () {
            function e() {}
            return (
              (e.processResponse = function (e, t) {
                var n = (function (e) {
                  try {
                    return JSON.parse(e)
                  } catch (e) {
                    throw new r.InvalidResponseError(
                      'Error parsing presigned response',
                      e,
                    )
                  }
                })(t)
                if (!n || !n.headers || 0 === Object.keys(n.headers).length)
                  throw new r.InvalidResponseError('Invalid presigned response')
                Object.keys(n.headers).forEach(function (t) {
                  var r = n.headers[t],
                    i = o.transformHeaderCase(e.headers, t)
                  e.headers[i] = r
                })
              }),
              e
            )
          })()
        t.PresignedResponseProcessor = i
      },
      92868: function (e, t, n) {
        'use strict'
        var r =
          (this && this.__assign) ||
          function () {
            return (r =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var o in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
                return e
              }).apply(this, arguments)
          }
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.SessionStorage = void 0)
        var o = n(74289),
          i = (function () {
            function e() {}
            return (
              (e.getClientParamOverride = function (e, t) {
                try {
                  var n = (t || window).sessionStorage.getItem(o.CLIENT_PARAMS),
                    i = n ? JSON.parse(n) : void 0
                  if (!e && !i) return
                  return r(r({}, e || {}), i || {})
                } catch (t) {
                  return e
                }
              }),
              e
            )
          })()
        t.SessionStorage = i
      },
      79621: function (e, t, n) {
        'use strict'
        var r =
            (this && this.__awaiter) ||
            function (e, t, n, r) {
              return new (n || (n = Promise))(function (o, i) {
                function a(e) {
                  try {
                    s(r.next(e))
                  } catch (e) {
                    i(e)
                  }
                }
                function u(e) {
                  try {
                    s(r.throw(e))
                  } catch (e) {
                    i(e)
                  }
                }
                function s(e) {
                  var t
                  e.done
                    ? o(e.value)
                    : ((t = e.value),
                      t instanceof n
                        ? t
                        : new n(function (e) {
                            e(t)
                          })).then(a, u)
                }
                s((r = r.apply(e, t || [])).next())
              })
            },
          o =
            (this && this.__generator) ||
            function (e, t) {
              var n,
                r,
                o,
                i,
                a = {
                  label: 0,
                  sent: function () {
                    if (1 & o[0]) throw o[1]
                    return o[1]
                  },
                  trys: [],
                  ops: [],
                }
              return (
                (i = { next: u(0), throw: u(1), return: u(2) }),
                'function' == typeof Symbol &&
                  (i[Symbol.iterator] = function () {
                    return this
                  }),
                i
              )
              function u(i) {
                return function (u) {
                  return (function (i) {
                    if (n)
                      throw new TypeError('Generator is already executing.')
                    for (; a; )
                      try {
                        if (
                          ((n = 1),
                          r &&
                            (o =
                              2 & i[0]
                                ? r.return
                                : i[0]
                                ? r.throw || ((o = r.return) && o.call(r), 0)
                                : r.next) &&
                            !(o = o.call(r, i[1])).done)
                        )
                          return o
                        switch (
                          ((r = 0), o && (i = [2 & i[0], o.value]), i[0])
                        ) {
                          case 0:
                          case 1:
                            o = i
                            break
                          case 4:
                            return a.label++, { value: i[1], done: !1 }
                          case 5:
                            a.label++, (r = i[1]), (i = [0])
                            continue
                          case 7:
                            ;(i = a.ops.pop()), a.trys.pop()
                            continue
                          default:
                            if (
                              !((o = a.trys),
                              (o = o.length > 0 && o[o.length - 1]) ||
                                (6 !== i[0] && 2 !== i[0]))
                            ) {
                              a = 0
                              continue
                            }
                            if (
                              3 === i[0] &&
                              (!o || (i[1] > o[0] && i[1] < o[3]))
                            ) {
                              a.label = i[1]
                              break
                            }
                            if (6 === i[0] && a.label < o[1]) {
                              ;(a.label = o[1]), (o = i)
                              break
                            }
                            if (o && a.label < o[2]) {
                              ;(a.label = o[2]), a.ops.push(i)
                              break
                            }
                            o[2] && a.ops.pop(), a.trys.pop()
                            continue
                        }
                        i = t.call(e, a)
                      } catch (e) {
                        ;(i = [6, e]), (r = 0)
                      } finally {
                        n = o = 0
                      }
                    if (5 & i[0]) throw i[1]
                    return { value: i[0] ? i[1] : void 0, done: !0 }
                  })([i, u])
                }
              }
            }
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.Signer = void 0)
        var i = n(64058),
          a = n(74289),
          u = n(86662),
          s = n(83591),
          c = n(24746),
          l = n(31980),
          f = n(3985),
          d = n(50922),
          p = n(3525),
          h = n(85370),
          v = (function () {
            function e() {}
            return (
              (e.presign = function (t, n, i) {
                return r(this, void 0, void 0, function () {
                  var r, s, c, p, v, g, y, m
                  return o(this, function (o) {
                    switch (o.label) {
                      case 0:
                        return (r = Date.now()), [4, n.initialize()]
                      case 1:
                        o.sent(),
                          (s = n.getClientParams()),
                          (c = new Error('Error')),
                          (p = Date.now()),
                          (v = 0),
                          (o.label = 2)
                      case 2:
                        if (!(v <= a.RETRY_COUNT)) return [3, 12]
                        o.label = 3
                      case 3:
                        return (
                          o.trys.push([3, 6, , 11]),
                          (g = l.CookieParser.getCSRFCookieString(s)),
                          [4, h.ConsoleInfoExtractor.extractValidConsoleInfo(s)]
                        )
                      case 4:
                        return (
                          (y = o.sent()), [4, e.presignRequest(t, s, i, g, y)]
                        )
                      case 5:
                        return (
                          o.sent(),
                          u.logResult({
                            overallStartTime: r,
                            apiStartTime: p,
                            widgetParams: i,
                            clientParams: s,
                            endpoint: a.EndpointPaths.PRESIGN,
                          }),
                          [2]
                        )
                      case 6:
                        return (
                          (m = o.sent()),
                          (c = m),
                          'number' != typeof m.statusCode ||
                          u.isHttpStatusCodeRetryable(m.statusCode)
                            ? m instanceof d.InvalidConsoleInfoError
                              ? [3, 12]
                              : (m instanceof d.InvalidSessionError ||
                                  ('number' == typeof m.statusCode &&
                                    401 === m.statusCode)) &&
                                0 === v
                              ? [4, n.reinitialize()]
                              : [3, 8]
                            : [3, 12]
                        )
                      case 7:
                        o.sent(), (o.label = 8)
                      case 8:
                        return v < a.RETRY_COUNT
                          ? (f.logger.logMetric({
                              metricName: 'JanusPER',
                              value: 1,
                              error: m,
                              clientParams: s,
                              widgetParams: i,
                            }),
                            [4, u.retryDelay(v, a.RETRY_DELAY_IN_MS)])
                          : [3, 10]
                      case 9:
                        o.sent(), (o.label = 10)
                      case 10:
                        return [3, 11]
                      case 11:
                        return v++, [3, 2]
                      case 12:
                        throw (
                          (u.logResult({
                            overallStartTime: r,
                            apiStartTime: p,
                            widgetParams: i,
                            clientParams: s,
                            error: c,
                            endpoint: a.EndpointPaths.PRESIGN,
                          }),
                          new Error(
                            'Error presigning request. All retries failed. Last error: ' +
                              c,
                          ))
                        )
                    }
                  })
                })
              }),
              (e.presignRequest = function (e, t, n, l, f) {
                return r(this, void 0, void 0, function () {
                  var r, d, p, h, v
                  return o(this, function (o) {
                    switch (o.label) {
                      case 0:
                        return (
                          (r = s.PresignRequestBuilder.buildFromHttpRequest(e)),
                          (d = JSON.stringify(r)),
                          (p = u.buildEndpoint(t, a.EndpointPaths.PRESIGN)),
                          (h = this.buildHeaders(n, l, f)),
                          [
                            4,
                            i.HttpClient.executeRequest(
                              a.HttpMethods.POST,
                              p,
                              h,
                              d,
                            ),
                          ]
                        )
                      case 1:
                        return (
                          (v = o.sent()),
                          c.PresignedResponseProcessor.processResponse(e, v),
                          [2]
                        )
                    }
                  })
                })
              }),
              (e.buildHeaders = function (e, t, n) {
                var r
                return (
                  ((r = {})[a.HttpHeaders.CONTENT_TYPE] =
                    a.HttpHeaders.CONTENT_TYPE_APPLICATION_JSON),
                  (r[a.HttpHeaders.X_WIDGET_ID] = e.widgetId),
                  (r[a.HttpHeaders.X_CSRF_TOKEN] = t),
                  (r[a.HttpHeaders.X_WIDGET_STAGE] =
                    e.widgetStage || a.WidgetStages.PROD),
                  (r[a.HttpHeaders.X_WEB_CLIENT_VERSION] = p.version),
                  (r[a.HttpHeaders.X_CONSOLE_INFO] = n),
                  r
                )
              }),
              e
            )
          })()
        t.Signer = v
      },
      50922: function (e, t, n) {
        'use strict'
        var r,
          o =
            (this && this.__extends) ||
            ((r = function (e, t) {
              return (r =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t
                  }) ||
                function (e, t) {
                  for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                })(e, t)
            }),
            function (e, t) {
              function n() {
                this.constructor = e
              }
              r(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((n.prototype = t.prototype), new n()))
            })
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.ExpiredBrowserCredentialsError = t.OAuthFailAllRetryError = t.CookieNotFoundError = t.OAuthFlowTimeoutError = t.OAuthFlowError = t.InternalError = t.HttpError = t.InvalidResponseError = t.InvalidInputError = t.InvalidSessionError = t.InvalidConsoleInfoError = t.InvalidCookieError = t.JanusWebClientError = void 0)
        var i = n(74289),
          a = (function (e) {
            function t(t, n) {
              var r = e.call(this, t) || this
              return (
                (r.message = t),
                (r.causedBy = n),
                n && (r.stack += '\nCaused by: ' + n.stack),
                (r.message = t),
                (r.causedBy = n),
                r
              )
            }
            return o(t, e), t
          })(Error)
        t.JanusWebClientError = a
        var u = (function (e) {
          function t(n, r) {
            var o = e.call(this, n, r) || this
            return (o.name = t.name), Object.setPrototypeOf(o, t.prototype), o
          }
          return o(t, e), t
        })(a)
        t.InvalidCookieError = u
        var s = (function (e) {
          function t(n, r) {
            var o = e.call(this, n, r) || this
            return (o.name = t.name), Object.setPrototypeOf(o, t.prototype), o
          }
          return o(t, e), t
        })(a)
        t.InvalidConsoleInfoError = s
        var c = (function (e) {
          function t(n, r) {
            var o = e.call(this, n, r) || this
            return (o.name = t.name), Object.setPrototypeOf(o, t.prototype), o
          }
          return o(t, e), t
        })(a)
        t.InvalidSessionError = c
        var l = (function (e) {
          function t(n, r) {
            var o = e.call(this, n, r) || this
            return (o.name = t.name), o
          }
          return o(t, e), t
        })(a)
        t.InvalidInputError = l
        var f = (function (e) {
          function t(n, r) {
            var o = e.call(this, n, r) || this
            return (o.name = t.name), o
          }
          return o(t, e), t
        })(a)
        t.InvalidResponseError = f
        var d = (function (e) {
          function t(n, r, o, a) {
            var u = this
            return (
              o &&
                (n =
                  n +
                  '\n' +
                  i.HttpHeaders.X_AMZ_REQUEST_ID +
                  ':' +
                  o[i.HttpHeaders.X_AMZ_REQUEST_ID] +
                  '\n' +
                  i.HttpHeaders.X_AMZ_REMAPPED_X_AMZ_REQUEST_ID +
                  ':' +
                  o[i.HttpHeaders.X_AMZ_REMAPPED_X_AMZ_REQUEST_ID]),
              ((u = e.call(this, n, a) || this).httpErrorContext = o),
              (u.statusCode = r),
              (u.name = t.name),
              u
            )
          }
          return o(t, e), t
        })(a)
        t.HttpError = d
        var p = (function (e) {
          function t(n, r) {
            var o = e.call(this, n, r) || this
            return (o.name = t.name), o
          }
          return o(t, e), t
        })(a)
        t.InternalError = p
        var h = (function (e) {
          function t(n, r) {
            var o = e.call(this, n, r) || this
            return (o.name = t.name), Object.setPrototypeOf(o, t.prototype), o
          }
          return o(t, e), t
        })(a)
        t.OAuthFlowError = h
        var v = (function (e) {
          function t(n, r) {
            var o = e.call(this, n, r) || this
            return (o.name = t.name), Object.setPrototypeOf(o, t.prototype), o
          }
          return o(t, e), t
        })(a)
        t.OAuthFlowTimeoutError = v
        var g = (function (e) {
          function t(n, r) {
            var o = e.call(this, n, r) || this
            return (o.name = t.name), Object.setPrototypeOf(o, t.prototype), o
          }
          return o(t, e), t
        })(a)
        t.CookieNotFoundError = g
        var y = (function (e) {
          function t(n, r) {
            var o = e.call(this, n, r) || this
            return (o.name = t.name), Object.setPrototypeOf(o, t.prototype), o
          }
          return o(t, e), t
        })(a)
        t.OAuthFailAllRetryError = y
        var m = (function (e) {
          function t(n, r) {
            var o = e.call(this, n, r) || this
            return (o.name = t.name), Object.setPrototypeOf(o, t.prototype), o
          }
          return o(t, e), t
        })(a)
        t.ExpiredBrowserCredentialsError = m
      },
      1335: function (e, t, n) {
        'use strict'
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, n, r) {
                  void 0 === r && (r = n),
                    Object.defineProperty(e, r, {
                      enumerable: !0,
                      get: function () {
                        return t[n]
                      },
                    })
                }
              : function (e, t, n, r) {
                  void 0 === r && (r = n), (e[r] = t[n])
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var n in e)
                'default' === n || t.hasOwnProperty(n) || r(t, e, n)
            }
        Object.defineProperty(t, '__esModule', { value: !0 }),
          o(n(48857), t),
          o(n(98824), t),
          o(n(74289), t),
          o(n(50922), t),
          o(n(47886), t),
          o(n(95075), t),
          o(n(79621), t),
          o(n(3985), t),
          o(n(87584), t)
      },
      35631: function (e, t, n) {
        'use strict'
        var r,
          o,
          i,
          a =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, n, r) {
                  void 0 === r && (r = n),
                    Object.defineProperty(e, r, {
                      enumerable: !0,
                      get: function () {
                        return t[n]
                      },
                    })
                }
              : function (e, t, n, r) {
                  void 0 === r && (r = n), (e[r] = t[n])
                }),
          u =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (e, t) {
                  Object.defineProperty(e, 'default', {
                    enumerable: !0,
                    value: t,
                  })
                }
              : function (e, t) {
                  e.default = t
                }),
          s =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e
              var t = {}
              if (null != e)
                for (var n in e)
                  'default' !== n &&
                    Object.hasOwnProperty.call(e, n) &&
                    a(t, e, n)
              return u(t, e), t
            }
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.getDefaultRegion = t.getJanusDomain = t.getRootPath = t.isConsoleProxyEnabled = t.getPartition = t.determineStage = t.partitionInfoMap = t.regionPartitionMap = void 0)
        var c = n(74289),
          l = s(n(52458))
        function f(e) {
          return e.janusStage || c.JanusStage.PROD
        }
        function d(e) {
          return t.regionPartitionMap[e] || 'aws'
        }
        function p(e) {
          if (f(e) === c.JanusStage.BETA) return !1
          var t = d(e.janusRegion)
          return c.CONSOLE_PROXY_ENABLED_PARTITIONS.some(function (e) {
            return e === t
          })
        }
        ;(t.regionPartitionMap = l),
          (t.partitionInfoMap = {
            aws: {
              subDomain:
                ((r = {}),
                (r[c.JanusStage.BETA] = 'beta.signer.console-api.aws'),
                (r[c.JanusStage.GAMMA] = 'awsc-integ.aws'),
                (r[c.JanusStage.PROD] = 'console.aws'),
                r),
              rootDomain: 'amazon.com',
              defaultRegion: 'us-east-1',
            },
            'aws-cn': {
              subDomain:
                ((o = {}),
                (o[c.JanusStage.BETA] = 'beta.signer.console-api.aws-dev'),
                (o[c.JanusStage.GAMMA] = 'gamma.signer.console-api.aws-dev'),
                (o[c.JanusStage.PROD] = 'prod.signer.console-api.aws-dev'),
                o),
              rootDomain: 'amazonaws.cn',
              defaultRegion: 'cn-north-1',
            },
            'aws-us-gov': {
              subDomain:
                ((i = {}),
                (i[c.JanusStage.BETA] = 'beta.console-api.aws-dev'),
                (i[c.JanusStage.GAMMA] = 'gamma.console-api.aws-dev'),
                (i[c.JanusStage.PROD] = 'prod.console-api.aws-dev'),
                i),
              rootDomain: 'amazonaws-us-gov.com',
              defaultRegion: 'us-gov-west-1',
            },
          }),
          (t.determineStage = f),
          (t.getPartition = d),
          (t.isConsoleProxyEnabled = p),
          (t.getRootPath = function (e) {
            return p(e) ? '/api/' : '/'
          }),
          (t.getJanusDomain = function (e) {
            var n = e.janusRegion,
              r = f(e),
              o = d(n)
            return (
              n +
              '.' +
              t.partitionInfoMap[o].subDomain[r] +
              '.' +
              t.partitionInfoMap[o].rootDomain
            )
          }),
          (t.getDefaultRegion = function (e) {
            for (var n in t.partitionInfoMap) {
              var r = t.partitionInfoMap[n]
              if (e.indexOf(r.rootDomain) >= 0) return r.defaultRegion
            }
            return 'us-east-1'
          })
      },
      87584: function (e, t) {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 })
      },
      86662: function (e, t, n) {
        'use strict'
        var r =
            (this && this.__awaiter) ||
            function (e, t, n, r) {
              return new (n || (n = Promise))(function (o, i) {
                function a(e) {
                  try {
                    s(r.next(e))
                  } catch (e) {
                    i(e)
                  }
                }
                function u(e) {
                  try {
                    s(r.throw(e))
                  } catch (e) {
                    i(e)
                  }
                }
                function s(e) {
                  var t
                  e.done
                    ? o(e.value)
                    : ((t = e.value),
                      t instanceof n
                        ? t
                        : new n(function (e) {
                            e(t)
                          })).then(a, u)
                }
                s((r = r.apply(e, t || [])).next())
              })
            },
          o =
            (this && this.__generator) ||
            function (e, t) {
              var n,
                r,
                o,
                i,
                a = {
                  label: 0,
                  sent: function () {
                    if (1 & o[0]) throw o[1]
                    return o[1]
                  },
                  trys: [],
                  ops: [],
                }
              return (
                (i = { next: u(0), throw: u(1), return: u(2) }),
                'function' == typeof Symbol &&
                  (i[Symbol.iterator] = function () {
                    return this
                  }),
                i
              )
              function u(i) {
                return function (u) {
                  return (function (i) {
                    if (n)
                      throw new TypeError('Generator is already executing.')
                    for (; a; )
                      try {
                        if (
                          ((n = 1),
                          r &&
                            (o =
                              2 & i[0]
                                ? r.return
                                : i[0]
                                ? r.throw || ((o = r.return) && o.call(r), 0)
                                : r.next) &&
                            !(o = o.call(r, i[1])).done)
                        )
                          return o
                        switch (
                          ((r = 0), o && (i = [2 & i[0], o.value]), i[0])
                        ) {
                          case 0:
                          case 1:
                            o = i
                            break
                          case 4:
                            return a.label++, { value: i[1], done: !1 }
                          case 5:
                            a.label++, (r = i[1]), (i = [0])
                            continue
                          case 7:
                            ;(i = a.ops.pop()), a.trys.pop()
                            continue
                          default:
                            if (
                              !((o = a.trys),
                              (o = o.length > 0 && o[o.length - 1]) ||
                                (6 !== i[0] && 2 !== i[0]))
                            ) {
                              a = 0
                              continue
                            }
                            if (
                              3 === i[0] &&
                              (!o || (i[1] > o[0] && i[1] < o[3]))
                            ) {
                              a.label = i[1]
                              break
                            }
                            if (6 === i[0] && a.label < o[1]) {
                              ;(a.label = o[1]), (o = i)
                              break
                            }
                            if (o && a.label < o[2]) {
                              ;(a.label = o[2]), a.ops.push(i)
                              break
                            }
                            o[2] && a.ops.pop(), a.trys.pop()
                            continue
                        }
                        i = t.call(e, a)
                      } catch (e) {
                        ;(i = [6, e]), (r = 0)
                      } finally {
                        n = o = 0
                      }
                    if (5 & i[0]) throw i[1]
                    return { value: i[0] ? i[1] : void 0, done: !0 }
                  })([i, u])
                }
              }
            }
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.logResult = t.isHttpStatusCodeRetryable = t.getSupportedBrowser = t.transformHeaderCase = t.retryDelay = t.buildEndpoint = void 0)
        var i = n(74289),
          a = n(35631),
          u = n(50922),
          s = n(3985)
        ;(t.buildEndpoint = function (e, t) {
          if (e.janusEndpointOverride)
            return 'https://' + e.janusEndpointOverride + '/' + t
          var n = e.signinStage === i.SigninStages.PRODISH ? 'test' : 'prod'
          return (
            'https://' + a.getJanusDomain(e) + a.getRootPath(e) + n + '/' + t
          )
        }),
          (t.retryDelay = function (e, t) {
            return r(this, void 0, void 0, function () {
              var n
              return o(this, function (r) {
                switch (r.label) {
                  case 0:
                    return (
                      (n = Math.random() * Math.pow(2, e) * t),
                      [
                        4,
                        new Promise(function (e) {
                          return setTimeout(e, n)
                        }),
                      ]
                    )
                  case 1:
                    return r.sent(), [2]
                }
              })
            })
          }),
          (t.transformHeaderCase = function (e, t) {
            return (
              Object.keys(e).filter(function (e) {
                return e.toLowerCase() === t.toLowerCase()
              })[0] || t
            )
          }),
          (t.getSupportedBrowser = function (e) {
            var t = e || window
            try {
              if ('crypto' in t && 'TextEncoder' in t && 'btoa' in t) {
                var n = t.crypto
                return 'subtle' in n && 'digest' in n.subtle ? 'modern' : void 0
              }
              return 'msCrypto' in t && 'btoa' in t ? 'IE11' : void 0
            } catch (e) {
              return
            }
          }),
          (t.isHttpStatusCodeRetryable = function (e) {
            return -1 === i.UNRETRYABLE_HTTP_ERROR_STATUS_CODES.indexOf(e)
          }),
          (t.logResult = function (e) {
            var t,
              n = i.MetricPrefixMap.get(e.endpoint),
              r = e.widgetParams
            if (e.error) {
              if (e.error.name === u.HttpError.name) t = e.error.statusCode
              else {
                var o = e.error.name ? e.error.name.replace('Error', '') : ''
                o || (o = 'Unknown'),
                  s.logger.logMetric({
                    metricName:
                      e.endpoint === i.EndpointPaths.PRESIGN
                        ? 'JanusE_' + o
                        : 'Janus' + n + 'E_' + o,
                    value: 1,
                    widgetParams: r,
                    clientParams: e.clientParams,
                  })
              }
              s.logger.logMetric({
                metricName: 'Janus' + n + 'E',
                value: 1,
                widgetParams: r,
                clientParams: e.clientParams,
                error: e.error,
              })
            } else
              (t = 200),
                s.logger.logMetric({
                  metricName: 'Janus' + n + 'E',
                  value: 0,
                  widgetParams: r,
                  clientParams: e.clientParams,
                })
            var a = Date.now(),
              c = a - e.apiStartTime,
              l = a - e.overallStartTime
            s.logger.logMetric({
              metricName: 'Janus' + n + 'L',
              value: c,
              unit: 'ms',
              widgetParams: r,
              clientParams: e.clientParams,
            }),
              s.logger.logMetric({
                metricName:
                  e.endpoint === i.EndpointPaths.PRESIGN
                    ? 'JanusL'
                    : 'Janus' + n + 'OL',
                value: l,
                unit: 'ms',
                widgetParams: r,
                clientParams: e.clientParams,
              }),
              void 0 !== t &&
                (s.logger.logMetric({
                  metricName: 'Janus' + n + t,
                  value: 1,
                  widgetParams: r,
                  clientParams: e.clientParams,
                }),
                ['2', '3', '4', '5'].forEach(function (o) {
                  s.logger.logMetric({
                    metricName: 'Janus' + n + o + 'xx',
                    value: o === t.toString()[0] ? 1 : 0,
                    widgetParams: r,
                    clientParams: e.clientParams,
                  })
                }))
          })
      },
      99597: function (e) {
        function t(e) {
          this.message = e
        }
        ;(t.prototype = new Error()),
          (t.prototype.name = 'InvalidCharacterError'),
          (e.exports =
            ('undefined' != typeof window &&
              window.atob &&
              window.atob.bind(window)) ||
            function (e) {
              var n = String(e).replace(/=+$/, '')
              if (n.length % 4 == 1)
                throw new t(
                  "'atob' failed: The string to be decoded is not correctly encoded.",
                )
              for (
                var r, o, i = 0, a = 0, u = '';
                (o = n.charAt(a++));
                ~o && ((r = i % 4 ? 64 * r + o : o), i++ % 4)
                  ? (u += String.fromCharCode(255 & (r >> ((-2 * i) & 6))))
                  : 0
              )
                o = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='.indexOf(
                  o,
                )
              return u
            })
      },
      23518: function (e, t, n) {
        var r = n(99597)
        e.exports = function (e) {
          var t = e.replace(/-/g, '+').replace(/_/g, '/')
          switch (t.length % 4) {
            case 0:
              break
            case 2:
              t += '=='
              break
            case 3:
              t += '='
              break
            default:
              throw 'Illegal base64url string!'
          }
          try {
            return (function (e) {
              return decodeURIComponent(
                r(e).replace(/(.)/g, function (e, t) {
                  var n = t.charCodeAt(0).toString(16).toUpperCase()
                  return n.length < 2 && (n = '0' + n), '%' + n
                }),
              )
            })(t)
          } catch (e) {
            return r(t)
          }
        }
      },
      30584: function (e, t, n) {
        'use strict'
        var r = n(23518)
        function o(e) {
          this.message = e
        }
        ;(o.prototype = new Error()),
          (o.prototype.name = 'InvalidTokenError'),
          (e.exports = function (e, t) {
            if ('string' != typeof e) throw new o('Invalid token specified')
            var n = !0 === (t = t || {}).header ? 0 : 1
            try {
              return JSON.parse(r(e.split('.')[n]))
            } catch (e) {
              throw new o('Invalid token specified: ' + e.message)
            }
          }),
          (e.exports.InvalidTokenError = o)
      },
      51669: function (e, t, n) {
        'use strict'
        n.r(t),
          n.d(t, {
            default: function () {
              return i
            },
          })
        var r =
          Number.isNaN ||
          function (e) {
            return 'number' == typeof e && e != e
          }
        function o(e, t) {
          if (e.length !== t.length) return !1
          for (var n = 0; n < e.length; n++)
            if (((o = e[n]), (i = t[n]), !(o === i || (r(o) && r(i)))))
              return !1
          var o, i
          return !0
        }
        function i(e, t) {
          void 0 === t && (t = o)
          var n = null
          function r() {
            for (var r = [], o = 0; o < arguments.length; o++)
              r[o] = arguments[o]
            if (n && n.lastThis === this && t(r, n.lastArgs))
              return n.lastResult
            var i = e.apply(this, r)
            return (n = { lastResult: i, lastArgs: r, lastThis: this }), i
          }
          return (
            (r.clear = function () {
              n = null
            }),
            r
          )
        }
      },
      85019: function (e, t, n) {
        'use strict'
        n(98027)(t, '__esModule', { value: !0 }),
          (t.setDiscoverEndpointPromise = t.getDiscoverEndpointPromise = t.getUserSettingsPromise = t.setUserSettingsPromise = t.updateServiceListErrorAndDispatch = t.updateInitialUserServiceListAndDispatch = t.updateFavoriteInitialUserServiceList = t.updateRecentlyVisitedInitialUserServiceList = t.getInitialUserServiceListFromWindow = t.setInitialUserServiceList = t.getCCSInitialError = t.getCCSIsLoading = t.setCCSInitialError = t.setCCSIsLoading = t.getCCSAvailable = void 0)
        var r = n(50503),
          o = n(74559)
        t.getCCSAvailable = function () {
          var e, t
          return null === (e = window.AWSC) ||
            void 0 === e ||
            null === (t = e.CCS) ||
            void 0 === t
            ? void 0
            : t.ccsAvailable
        }
        t.setCCSIsLoading = function (e) {
          var t
          null !== (t = window.AWSC) &&
            void 0 !== t &&
            t.CCS &&
            (window.AWSC.CCS.ccsIsLoading = e)
        }
        var i = function (e) {
          var t
          null !== (t = window.AWSC) &&
            void 0 !== t &&
            t.CCS &&
            (window.AWSC.CCS.ccsInitialError = e)
        }
        t.setCCSInitialError = i
        t.getCCSIsLoading = function () {
          var e, t
          return null === (e = window.AWSC) ||
            void 0 === e ||
            null === (t = e.CCS) ||
            void 0 === t
            ? void 0
            : t.ccsIsLoading
        }
        t.getCCSInitialError = function () {
          var e, t
          return null === (e = window.AWSC) ||
            void 0 === e ||
            null === (t = e.CCS) ||
            void 0 === t
            ? void 0
            : t.ccsInitialError
        }
        var a = function (e) {
          var t
          null !== (t = window.AWSC) &&
            void 0 !== t &&
            t.CCS &&
            (window.AWSC.CCS.initialUserServiceList = e)
        }
        t.setInitialUserServiceList = a
        t.getInitialUserServiceListFromWindow = function () {
          var e, t
          return null === (e = window.AWSC) ||
            void 0 === e ||
            null === (t = e.CCS) ||
            void 0 === t
            ? void 0
            : t.initialUserServiceList
        }
        var u = function (e) {
          var t, n
          null !== (t = window.AWSC) &&
            void 0 !== t &&
            null !== (n = t.CCS) &&
            void 0 !== n &&
            n.initialUserServiceList &&
            (window.AWSC.CCS.initialUserServiceList.recentlyVisitedServiceIdList = e)
        }
        t.updateRecentlyVisitedInitialUserServiceList = u
        var s = function (e) {
          var t, n
          null !== (t = window.AWSC) &&
            void 0 !== t &&
            null !== (n = t.CCS) &&
            void 0 !== n &&
            n.initialUserServiceList &&
            (window.AWSC.CCS.initialUserServiceList.favoriteServiceIdList = e)
        }
        t.updateFavoriteInitialUserServiceList = s
        t.updateInitialUserServiceListAndDispatch = function (e) {
          var t = e.favoriteServiceIdList,
            n = e.recentlyVisitedServiceIdList
          t && n
            ? a({ favoriteServiceIdList: t, recentlyVisitedServiceIdList: n })
            : t
            ? s(t)
            : u(n)
          var i = (0, r.createCustomEvent)(o.SERVICE_LIST_UPDATED_EVENT, {
            detail: {
              favoriteServiceIdList: t,
              recentlyVisitedServiceIdList: n,
            },
          })
          window.dispatchEvent(i)
        }
        t.updateServiceListErrorAndDispatch = function (e) {
          i(e)
          var t = (0, r.createCustomEvent)(o.SERVICE_LIST_ERROR_EVENT, {
            detail: e,
          })
          window.dispatchEvent(t)
        }
        t.setUserSettingsPromise = function (e) {
          var t
          null !== (t = window.AWSC) &&
            void 0 !== t &&
            t.CCS &&
            (window.AWSC.CCS.userSettingsPromise = e)
        }
        t.getUserSettingsPromise = function () {
          var e, t
          return null === (e = window.AWSC) ||
            void 0 === e ||
            null === (t = e.CCS) ||
            void 0 === t
            ? void 0
            : t.userSettingsPromise
        }
        t.getDiscoverEndpointPromise = function () {
          var e, t
          return null === (e = window.AWSC) ||
            void 0 === e ||
            null === (t = e.CCS) ||
            void 0 === t
            ? void 0
            : t.discoverEndpointPromise
        }
        t.setDiscoverEndpointPromise = function (e) {
          window.AWSC.CCS.discoverEndpointPromise = e
        }
      },
      74559: function (e, t, n) {
        'use strict'
        n(98027)(t, '__esModule', { value: !0 }),
          (t.SERVICE_LIST_ERROR_EVENT = t.SERVICE_LIST_UPDATED_EVENT = void 0)
        t.SERVICE_LIST_UPDATED_EVENT = 'ServiceListUpdated'
        t.SERVICE_LIST_ERROR_EVENT = 'ServiceListError'
      },
      50503: function (e, t, n) {
        'use strict'
        n(98027)(t, '__esModule', { value: !0 }), (t.createCustomEvent = void 0)
        t.createCustomEvent = function (e, t) {
          return (function () {
            t = t || { bubbles: !1, cancelable: !1, detail: null }
            var n = document.createEvent('CustomEvent')
            return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n
          })()
        }
      },
      34851: function (e, t, n) {
        'use strict'
        var r, o
        n(98027)(t, '__esModule', { value: !0 }),
          (t.FeatureStatus = t.FeatureFlag = void 0),
          (t.FeatureFlag = r),
          (function (e) {
            ;(e.CCS = 'ccs'),
              (e.ColorTheme = 'color_theme'),
              (e.DefaultLanguage = 'default_language'),
              (e.DefaultRegion = 'default_region'),
              (e.FavoriteBar = 'favorite_bar'),
              (e.Timezone = 'time_zone'),
              (e.UnifiedNavigation = 'unified_navigation'),
              (e.FavoritesInUnifiedSearch = 'favorites_unified_search'),
              (e.LanguageSelectorInNav = 'language_selector_in_nav'),
              (e.KrakenInUnifiedSearch = 'kraken_in_unified_search'),
              (e.VPC = 'vpc'),
              (e.EnabledRegions = 'enabled_regions')
          })(r || (t.FeatureFlag = r = {})),
          (t.FeatureStatus = o),
          (function (e) {
            ;(e.Enabled = 'enabled'), (e.Disabled = 'disabled')
          })(o || (t.FeatureStatus = o = {}))
      },
      98027: function (e, t, n) {
        e.exports = n(60664)
      },
      85864: function (e, t, n) {
        n(69474)
        var r = n(38918).Object,
          o = (e.exports = function (e, t, n) {
            return r.defineProperty(e, t, n)
          })
        r.defineProperty.sham && (o.sham = !0)
      },
      66601: function (e) {
        e.exports = function (e) {
          if ('function' != typeof e)
            throw TypeError(String(e) + ' is not a function')
          return e
        }
      },
      6906: function (e, t, n) {
        var r = n(27038)
        e.exports = function (e) {
          if (!r(e)) throw TypeError(String(e) + ' is not an object')
          return e
        }
      },
      82637: function (e) {
        var t = {}.toString
        e.exports = function (e) {
          return t.call(e).slice(8, -1)
        }
      },
      99898: function (e, t, n) {
        var r = n(99638),
          o = n(49411),
          i = n(53470)
        e.exports = r
          ? function (e, t, n) {
              return o.f(e, t, i(1, n))
            }
          : function (e, t, n) {
              return (e[t] = n), e
            }
      },
      53470: function (e) {
        e.exports = function (e, t) {
          return {
            enumerable: !(1 & e),
            configurable: !(2 & e),
            writable: !(4 & e),
            value: t,
          }
        }
      },
      99638: function (e, t, n) {
        var r = n(86221)
        e.exports = !r(function () {
          return (
            7 !=
            Object.defineProperty({}, 1, {
              get: function () {
                return 7
              },
            })[1]
          )
        })
      },
      27866: function (e, t, n) {
        var r = n(1581),
          o = n(27038),
          i = r.document,
          a = o(i) && o(i.createElement)
        e.exports = function (e) {
          return a ? i.createElement(e) : {}
        }
      },
      18906: function (e, t, n) {
        'use strict'
        var r = n(1581),
          o = n(69744).f,
          i = n(81259),
          a = n(38918),
          u = n(98264),
          s = n(99898),
          c = n(53898),
          l = function (e) {
            var t = function (t, n, r) {
              if (this instanceof e) {
                switch (arguments.length) {
                  case 0:
                    return new e()
                  case 1:
                    return new e(t)
                  case 2:
                    return new e(t, n)
                }
                return new e(t, n, r)
              }
              return e.apply(this, arguments)
            }
            return (t.prototype = e.prototype), t
          }
        e.exports = function (e, t) {
          var n,
            f,
            d,
            p,
            h,
            v,
            g,
            y,
            m = e.target,
            w = e.global,
            b = e.stat,
            S = e.proto,
            _ = w ? r : b ? r[m] : (r[m] || {}).prototype,
            E = w ? a : a[m] || (a[m] = {}),
            A = E.prototype
          for (d in t)
            (n = !i(w ? d : m + (b ? '.' : '#') + d, e.forced) && _ && c(_, d)),
              (h = E[d]),
              n && (v = e.noTargetGet ? (y = o(_, d)) && y.value : _[d]),
              (p = n && v ? v : t[d]),
              (n && typeof h == typeof p) ||
                ((g =
                  e.bind && n
                    ? u(p, r)
                    : e.wrap && n
                    ? l(p)
                    : S && 'function' == typeof p
                    ? u(Function.call, p)
                    : p),
                (e.sham || (p && p.sham) || (h && h.sham)) && s(g, 'sham', !0),
                (E[d] = g),
                S &&
                  (c(a, (f = m + 'Prototype')) || s(a, f, {}),
                  (a[f][d] = p),
                  e.real && A && !A[d] && s(A, d, p)))
        }
      },
      86221: function (e) {
        e.exports = function (e) {
          try {
            return !!e()
          } catch (e) {
            return !0
          }
        }
      },
      98264: function (e, t, n) {
        var r = n(66601)
        e.exports = function (e, t, n) {
          if ((r(e), void 0 === t)) return e
          switch (n) {
            case 0:
              return function () {
                return e.call(t)
              }
            case 1:
              return function (n) {
                return e.call(t, n)
              }
            case 2:
              return function (n, r) {
                return e.call(t, n, r)
              }
            case 3:
              return function (n, r, o) {
                return e.call(t, n, r, o)
              }
          }
          return function () {
            return e.apply(t, arguments)
          }
        }
      },
      1581: function (e, t, n) {
        var r = function (e) {
          return e && e.Math == Math && e
        }
        e.exports =
          r('object' == typeof globalThis && globalThis) ||
          r('object' == typeof window && window) ||
          r('object' == typeof self && self) ||
          r('object' == typeof n.g && n.g) ||
          (function () {
            return this
          })() ||
          Function('return this')()
      },
      53898: function (e) {
        var t = {}.hasOwnProperty
        e.exports = function (e, n) {
          return t.call(e, n)
        }
      },
      44185: function (e, t, n) {
        var r = n(99638),
          o = n(86221),
          i = n(27866)
        e.exports =
          !r &&
          !o(function () {
            return (
              7 !=
              Object.defineProperty(i('div'), 'a', {
                get: function () {
                  return 7
                },
              }).a
            )
          })
      },
      85878: function (e, t, n) {
        var r = n(86221),
          o = n(82637),
          i = ''.split
        e.exports = r(function () {
          return !Object('z').propertyIsEnumerable(0)
        })
          ? function (e) {
              return 'String' == o(e) ? i.call(e, '') : Object(e)
            }
          : Object
      },
      81259: function (e, t, n) {
        var r = n(86221),
          o = /#|\.prototype\./,
          i = function (e, t) {
            var n = u[a(e)]
            return n == c || (n != s && ('function' == typeof t ? r(t) : !!t))
          },
          a = (i.normalize = function (e) {
            return String(e).replace(o, '.').toLowerCase()
          }),
          u = (i.data = {}),
          s = (i.NATIVE = 'N'),
          c = (i.POLYFILL = 'P')
        e.exports = i
      },
      27038: function (e) {
        e.exports = function (e) {
          return 'object' == typeof e ? null !== e : 'function' == typeof e
        }
      },
      49411: function (e, t, n) {
        var r = n(99638),
          o = n(44185),
          i = n(6906),
          a = n(7722),
          u = Object.defineProperty
        t.f = r
          ? u
          : function (e, t, n) {
              if ((i(e), (t = a(t, !0)), i(n), o))
                try {
                  return u(e, t, n)
                } catch (e) {}
              if ('get' in n || 'set' in n)
                throw TypeError('Accessors not supported')
              return 'value' in n && (e[t] = n.value), e
            }
      },
      69744: function (e, t, n) {
        var r = n(99638),
          o = n(44916),
          i = n(53470),
          a = n(95404),
          u = n(7722),
          s = n(53898),
          c = n(44185),
          l = Object.getOwnPropertyDescriptor
        t.f = r
          ? l
          : function (e, t) {
              if (((e = a(e)), (t = u(t, !0)), c))
                try {
                  return l(e, t)
                } catch (e) {}
              if (s(e, t)) return i(!o.f.call(e, t), e[t])
            }
      },
      44916: function (e, t) {
        'use strict'
        var n = {}.propertyIsEnumerable,
          r = Object.getOwnPropertyDescriptor,
          o = r && !n.call({ 1: 2 }, 1)
        t.f = o
          ? function (e) {
              var t = r(this, e)
              return !!t && t.enumerable
            }
          : n
      },
      38918: function (e) {
        e.exports = {}
      },
      41929: function (e) {
        e.exports = function (e) {
          if (null == e) throw TypeError("Can't call method on " + e)
          return e
        }
      },
      95404: function (e, t, n) {
        var r = n(85878),
          o = n(41929)
        e.exports = function (e) {
          return r(o(e))
        }
      },
      7722: function (e, t, n) {
        var r = n(27038)
        e.exports = function (e, t) {
          if (!r(e)) return e
          var n, o
          if (t && 'function' == typeof (n = e.toString) && !r((o = n.call(e))))
            return o
          if ('function' == typeof (n = e.valueOf) && !r((o = n.call(e))))
            return o
          if (
            !t &&
            'function' == typeof (n = e.toString) &&
            !r((o = n.call(e)))
          )
            return o
          throw TypeError("Can't convert object to primitive value")
        }
      },
      69474: function (e, t, n) {
        var r = n(18906),
          o = n(99638)
        r(
          { target: 'Object', stat: !0, forced: !o, sham: !o },
          { defineProperty: n(49411).f },
        )
      },
      60664: function (e, t, n) {
        var r = n(85864)
        e.exports = r
      },
      75354: function (e, t, n) {
        'use strict'
        n.r(t),
          n.d(t, {
            HttpRequest: function () {
              return a
            },
            HttpResponse: function () {
              return r
            },
            isValidHostname: function () {
              return u
            },
          })
        var r = (function () {
          function e(e) {
            ;(this.statusCode = e.statusCode),
              (this.headers = e.headers || {}),
              (this.body = e.body)
          }
          return (
            (e.isInstance = function (e) {
              if (!e) return !1
              var t = e
              return (
                'number' == typeof t.statusCode && 'object' == typeof t.headers
              )
            }),
            e
          )
        })()
        var o = function () {
          return (o =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
              return e
            }).apply(this, arguments)
        }
        Object.create
        function i(e, t) {
          var n = 'function' == typeof Symbol && e[Symbol.iterator]
          if (!n) return e
          var r,
            o,
            i = n.call(e),
            a = []
          try {
            for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; )
              a.push(r.value)
          } catch (e) {
            o = { error: e }
          } finally {
            try {
              r && !r.done && (n = i.return) && n.call(i)
            } finally {
              if (o) throw o.error
            }
          }
          return a
        }
        Object.create
        var a = (function () {
          function e(e) {
            ;(this.method = e.method || 'GET'),
              (this.hostname = e.hostname || 'localhost'),
              (this.port = e.port),
              (this.query = e.query || {}),
              (this.headers = e.headers || {}),
              (this.body = e.body),
              (this.protocol = e.protocol
                ? ':' !== e.protocol.substr(-1)
                  ? e.protocol + ':'
                  : e.protocol
                : 'https:'),
              (this.path = e.path
                ? '/' !== e.path.charAt(0)
                  ? '/' + e.path
                  : e.path
                : '/')
          }
          return (
            (e.isInstance = function (e) {
              if (!e) return !1
              var t = e
              return (
                'method' in t &&
                'protocol' in t &&
                'hostname' in t &&
                'path' in t &&
                'object' == typeof t.query &&
                'object' == typeof t.headers
              )
            }),
            (e.prototype.clone = function () {
              var t,
                n = new e(o(o({}, this), { headers: o({}, this.headers) }))
              return (
                n.query &&
                  (n.query =
                    ((t = n.query),
                    Object.keys(t).reduce(function (e, n) {
                      var r,
                        a = t[n]
                      return o(
                        o({}, e),
                        (((r = {})[n] = Array.isArray(a)
                          ? (function (e, t, n) {
                              if (n || 2 === arguments.length)
                                for (var r, o = 0, i = t.length; o < i; o++)
                                  (!r && o in t) ||
                                    (r ||
                                      (r = Array.prototype.slice.call(t, 0, o)),
                                    (r[o] = t[o]))
                              return e.concat(
                                r || Array.prototype.slice.call(t),
                              )
                            })([], i(a))
                          : a),
                        r),
                      )
                    }, {}))),
                n
              )
            }),
            e
          )
        })()
        function u(e) {
          return /^[a-z0-9][a-z0-9\.\-]*[a-z0-9]$/.test(e)
        }
      },
      67228: function (e) {
        e.exports = function (e, t) {
          ;(null == t || t > e.length) && (t = e.length)
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]
          return r
        }
      },
      23646: function (e, t, n) {
        var r = n(67228)
        e.exports = function (e) {
          if (Array.isArray(e)) return r(e)
        }
      },
      48926: function (e) {
        function t(e, t, n, r, o, i, a) {
          try {
            var u = e[i](a),
              s = u.value
          } catch (e) {
            return void n(e)
          }
          u.done ? t(s) : Promise.resolve(s).then(r, o)
        }
        e.exports = function (e) {
          return function () {
            var n = this,
              r = arguments
            return new Promise(function (o, i) {
              var a = e.apply(n, r)
              function u(e) {
                t(a, o, i, u, s, 'next', e)
              }
              function s(e) {
                t(a, o, i, u, s, 'throw', e)
              }
              u(void 0)
            })
          }
        }
      },
      34575: function (e) {
        e.exports = function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function')
        }
      },
      59713: function (e) {
        e.exports = function (e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          )
        }
      },
      46860: function (e) {
        e.exports = function (e) {
          if ('undefined' != typeof Symbol && Symbol.iterator in Object(e))
            return Array.from(e)
        }
      },
      98206: function (e) {
        e.exports = function () {
          throw new TypeError(
            'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
          )
        }
      },
      319: function (e, t, n) {
        var r = n(23646),
          o = n(46860),
          i = n(60379),
          a = n(98206)
        e.exports = function (e) {
          return r(e) || o(e) || i(e) || a()
        }
      },
      50008: function (e) {
        function t(n) {
          return (
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? (e.exports = t = function (e) {
                  return typeof e
                })
              : (e.exports = t = function (e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e
                }),
            t(n)
          )
        }
        e.exports = t
      },
      60379: function (e, t, n) {
        var r = n(67228)
        e.exports = function (e, t) {
          if (e) {
            if ('string' == typeof e) return r(e, t)
            var n = Object.prototype.toString.call(e).slice(8, -1)
            return (
              'Object' === n && e.constructor && (n = e.constructor.name),
              'Map' === n || 'Set' === n
                ? Array.from(e)
                : 'Arguments' === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? r(e, t)
                : void 0
            )
          }
        }
      },
      87757: function (e, t, n) {
        e.exports = n(35666)
      },
      50986: function (e, t, n) {
        'use strict'
        n.d(t, {
          Y: function () {
            return r
          },
        })
        var r = window.ConsoleNavService.initializeModel
        t.Z = window.ConsoleNavService.Model
      },
      25879: function (e, t, n) {
        'use strict'
        var r = function (e) {
          window.performance.mark(e)
        }
        r('headScriptInitPerformanceMark')
        n(57665),
          n(44366),
          n(76280),
          n(47834),
          n(82472),
          n(98145),
          n(74345),
          n(31672),
          n(59461),
          n(94165)
        var o = 'URLSearchParams' in self,
          i = 'Symbol' in self && 'iterator' in Symbol,
          a =
            'FileReader' in self &&
            'Blob' in self &&
            (function () {
              try {
                return new Blob(), !0
              } catch (e) {
                return !1
              }
            })(),
          u = 'FormData' in self,
          s = 'ArrayBuffer' in self
        if (s)
          var c = [
              '[object Int8Array]',
              '[object Uint8Array]',
              '[object Uint8ClampedArray]',
              '[object Int16Array]',
              '[object Uint16Array]',
              '[object Int32Array]',
              '[object Uint32Array]',
              '[object Float32Array]',
              '[object Float64Array]',
            ],
            l =
              ArrayBuffer.isView ||
              function (e) {
                return e && c.indexOf(Object.prototype.toString.call(e)) > -1
              }
        function f(e) {
          if (
            ('string' != typeof e && (e = String(e)),
            /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e))
          )
            throw new TypeError('Invalid character in header field name')
          return e.toLowerCase()
        }
        function d(e) {
          return 'string' != typeof e && (e = String(e)), e
        }
        function p(e) {
          var t = {
            next: function () {
              var t = e.shift()
              return { done: void 0 === t, value: t }
            },
          }
          return (
            i &&
              (t[Symbol.iterator] = function () {
                return t
              }),
            t
          )
        }
        function h(e) {
          ;(this.map = {}),
            e instanceof h
              ? e.forEach(function (e, t) {
                  this.append(t, e)
                }, this)
              : Array.isArray(e)
              ? e.forEach(function (e) {
                  this.append(e[0], e[1])
                }, this)
              : e &&
                Object.getOwnPropertyNames(e).forEach(function (t) {
                  this.append(t, e[t])
                }, this)
        }
        function v(e) {
          if (e.bodyUsed) return Promise.reject(new TypeError('Already read'))
          e.bodyUsed = !0
        }
        function g(e) {
          return new Promise(function (t, n) {
            ;(e.onload = function () {
              t(e.result)
            }),
              (e.onerror = function () {
                n(e.error)
              })
          })
        }
        function y(e) {
          var t = new FileReader(),
            n = g(t)
          return t.readAsArrayBuffer(e), n
        }
        function m(e) {
          if (e.slice) return e.slice(0)
          var t = new Uint8Array(e.byteLength)
          return t.set(new Uint8Array(e)), t.buffer
        }
        function w() {
          return (
            (this.bodyUsed = !1),
            (this._initBody = function (e) {
              var t
              ;(this._bodyInit = e),
                e
                  ? 'string' == typeof e
                    ? (this._bodyText = e)
                    : a && Blob.prototype.isPrototypeOf(e)
                    ? (this._bodyBlob = e)
                    : u && FormData.prototype.isPrototypeOf(e)
                    ? (this._bodyFormData = e)
                    : o && URLSearchParams.prototype.isPrototypeOf(e)
                    ? (this._bodyText = e.toString())
                    : s && a && (t = e) && DataView.prototype.isPrototypeOf(t)
                    ? ((this._bodyArrayBuffer = m(e.buffer)),
                      (this._bodyInit = new Blob([this._bodyArrayBuffer])))
                    : s && (ArrayBuffer.prototype.isPrototypeOf(e) || l(e))
                    ? (this._bodyArrayBuffer = m(e))
                    : (this._bodyText = e = Object.prototype.toString.call(e))
                  : (this._bodyText = ''),
                this.headers.get('content-type') ||
                  ('string' == typeof e
                    ? this.headers.set(
                        'content-type',
                        'text/plain;charset=UTF-8',
                      )
                    : this._bodyBlob && this._bodyBlob.type
                    ? this.headers.set('content-type', this._bodyBlob.type)
                    : o &&
                      URLSearchParams.prototype.isPrototypeOf(e) &&
                      this.headers.set(
                        'content-type',
                        'application/x-www-form-urlencoded;charset=UTF-8',
                      ))
            }),
            a &&
              ((this.blob = function () {
                var e = v(this)
                if (e) return e
                if (this._bodyBlob) return Promise.resolve(this._bodyBlob)
                if (this._bodyArrayBuffer)
                  return Promise.resolve(new Blob([this._bodyArrayBuffer]))
                if (this._bodyFormData)
                  throw new Error('could not read FormData body as blob')
                return Promise.resolve(new Blob([this._bodyText]))
              }),
              (this.arrayBuffer = function () {
                return this._bodyArrayBuffer
                  ? v(this) || Promise.resolve(this._bodyArrayBuffer)
                  : this.blob().then(y)
              })),
            (this.text = function () {
              var e,
                t,
                n,
                r = v(this)
              if (r) return r
              if (this._bodyBlob)
                return (
                  (e = this._bodyBlob),
                  (t = new FileReader()),
                  (n = g(t)),
                  t.readAsText(e),
                  n
                )
              if (this._bodyArrayBuffer)
                return Promise.resolve(
                  (function (e) {
                    for (
                      var t = new Uint8Array(e), n = new Array(t.length), r = 0;
                      r < t.length;
                      r++
                    )
                      n[r] = String.fromCharCode(t[r])
                    return n.join('')
                  })(this._bodyArrayBuffer),
                )
              if (this._bodyFormData)
                throw new Error('could not read FormData body as text')
              return Promise.resolve(this._bodyText)
            }),
            u &&
              (this.formData = function () {
                return this.text().then(_)
              }),
            (this.json = function () {
              return this.text().then(JSON.parse)
            }),
            this
          )
        }
        ;(h.prototype.append = function (e, t) {
          ;(e = f(e)), (t = d(t))
          var n = this.map[e]
          this.map[e] = n ? n + ', ' + t : t
        }),
          (h.prototype.delete = function (e) {
            delete this.map[f(e)]
          }),
          (h.prototype.get = function (e) {
            return (e = f(e)), this.has(e) ? this.map[e] : null
          }),
          (h.prototype.has = function (e) {
            return this.map.hasOwnProperty(f(e))
          }),
          (h.prototype.set = function (e, t) {
            this.map[f(e)] = d(t)
          }),
          (h.prototype.forEach = function (e, t) {
            for (var n in this.map)
              this.map.hasOwnProperty(n) && e.call(t, this.map[n], n, this)
          }),
          (h.prototype.keys = function () {
            var e = []
            return (
              this.forEach(function (t, n) {
                e.push(n)
              }),
              p(e)
            )
          }),
          (h.prototype.values = function () {
            var e = []
            return (
              this.forEach(function (t) {
                e.push(t)
              }),
              p(e)
            )
          }),
          (h.prototype.entries = function () {
            var e = []
            return (
              this.forEach(function (t, n) {
                e.push([n, t])
              }),
              p(e)
            )
          }),
          i && (h.prototype[Symbol.iterator] = h.prototype.entries)
        var b = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']
        function S(e, t) {
          var n,
            r,
            o = (t = t || {}).body
          if (e instanceof S) {
            if (e.bodyUsed) throw new TypeError('Already read')
            ;(this.url = e.url),
              (this.credentials = e.credentials),
              t.headers || (this.headers = new h(e.headers)),
              (this.method = e.method),
              (this.mode = e.mode),
              (this.signal = e.signal),
              o || null == e._bodyInit || ((o = e._bodyInit), (e.bodyUsed = !0))
          } else this.url = String(e)
          if (
            ((this.credentials =
              t.credentials || this.credentials || 'same-origin'),
            (!t.headers && this.headers) || (this.headers = new h(t.headers)),
            (this.method =
              ((n = t.method || this.method || 'GET'),
              (r = n.toUpperCase()),
              b.indexOf(r) > -1 ? r : n)),
            (this.mode = t.mode || this.mode || null),
            (this.signal = t.signal || this.signal),
            (this.referrer = null),
            ('GET' === this.method || 'HEAD' === this.method) && o)
          )
            throw new TypeError('Body not allowed for GET or HEAD requests')
          this._initBody(o)
        }
        function _(e) {
          var t = new FormData()
          return (
            e
              .trim()
              .split('&')
              .forEach(function (e) {
                if (e) {
                  var n = e.split('='),
                    r = n.shift().replace(/\+/g, ' '),
                    o = n.join('=').replace(/\+/g, ' ')
                  t.append(decodeURIComponent(r), decodeURIComponent(o))
                }
              }),
            t
          )
        }
        function E(e, t) {
          t || (t = {}),
            (this.type = 'default'),
            (this.status = void 0 === t.status ? 200 : t.status),
            (this.ok = this.status >= 200 && this.status < 300),
            (this.statusText = 'statusText' in t ? t.statusText : 'OK'),
            (this.headers = new h(t.headers)),
            (this.url = t.url || ''),
            this._initBody(e)
        }
        ;(S.prototype.clone = function () {
          return new S(this, { body: this._bodyInit })
        }),
          w.call(S.prototype),
          w.call(E.prototype),
          (E.prototype.clone = function () {
            return new E(this._bodyInit, {
              status: this.status,
              statusText: this.statusText,
              headers: new h(this.headers),
              url: this.url,
            })
          }),
          (E.error = function () {
            var e = new E(null, { status: 0, statusText: '' })
            return (e.type = 'error'), e
          })
        var A = [301, 302, 303, 307, 308]
        E.redirect = function (e, t) {
          if (-1 === A.indexOf(t)) throw new RangeError('Invalid status code')
          return new E(null, { status: t, headers: { location: e } })
        }
        var O = self.DOMException
        try {
          new O()
        } catch (e) {
          ;((O = function (e, t) {
            ;(this.message = e), (this.name = t)
            var n = Error(e)
            this.stack = n.stack
          }).prototype = Object.create(Error.prototype)),
            (O.prototype.constructor = O)
        }
        function C(e, t) {
          return new Promise(function (n, r) {
            var o = new S(e, t)
            if (o.signal && o.signal.aborted)
              return r(new O('Aborted', 'AbortError'))
            var i = new XMLHttpRequest()
            function u() {
              i.abort()
            }
            ;(i.onload = function () {
              var e,
                t,
                r = {
                  status: i.status,
                  statusText: i.statusText,
                  headers:
                    ((e = i.getAllResponseHeaders() || ''),
                    (t = new h()),
                    e
                      .replace(/\r?\n[\t ]+/g, ' ')
                      .split(/\r?\n/)
                      .forEach(function (e) {
                        var n = e.split(':'),
                          r = n.shift().trim()
                        if (r) {
                          var o = n.join(':').trim()
                          t.append(r, o)
                        }
                      }),
                    t),
                }
              r.url =
                'responseURL' in i
                  ? i.responseURL
                  : r.headers.get('X-Request-URL')
              var o = 'response' in i ? i.response : i.responseText
              n(new E(o, r))
            }),
              (i.onerror = function () {
                r(new TypeError('Network request failed'))
              }),
              (i.ontimeout = function () {
                r(new TypeError('Network request failed'))
              }),
              (i.onabort = function () {
                r(new O('Aborted', 'AbortError'))
              }),
              i.open(o.method, o.url, !0),
              'include' === o.credentials
                ? (i.withCredentials = !0)
                : 'omit' === o.credentials && (i.withCredentials = !1),
              'responseType' in i && a && (i.responseType = 'blob'),
              o.headers.forEach(function (e, t) {
                i.setRequestHeader(t, e)
              }),
              o.signal &&
                (o.signal.addEventListener('abort', u),
                (i.onreadystatechange = function () {
                  4 === i.readyState && o.signal.removeEventListener('abort', u)
                })),
              i.send(void 0 === o._bodyInit ? null : o._bodyInit)
          })
        }
        ;(C.polyfill = !0),
          self.fetch ||
            ((self.fetch = C),
            (self.Headers = h),
            (self.Request = S),
            (self.Response = E))
        n(82526),
          n(41817),
          n(32165),
          n(92222),
          n(34553),
          n(89554),
          n(91038),
          n(66992),
          n(47042),
          n(2707),
          n(19601),
          n(36210),
          n(41539),
          n(74916),
          n(39714),
          n(78783),
          n(15306),
          n(64765),
          n(54747),
          n(33948)
        var T,
          R,
          P,
          I = n(34851),
          x =
            (n(57327),
            n(33321),
            n(69070),
            n(38880),
            n(49337),
            n(47941),
            n(59713)),
          L = n.n(x),
          M =
            (n(24603),
            function (e) {
              var t = n(50986).Z
              return Boolean(t && t.servicesById && t.servicesById[e])
            })
        n(69600), n(23157), n(60285)
        function N(e, t) {
          var n
          if ('undefined' == typeof Symbol || null == e[Symbol.iterator]) {
            if (
              Array.isArray(e) ||
              (n = (function (e, t) {
                if (!e) return
                if ('string' == typeof e) return k(e, t)
                var n = Object.prototype.toString.call(e).slice(8, -1)
                'Object' === n && e.constructor && (n = e.constructor.name)
                if ('Map' === n || 'Set' === n) return Array.from(e)
                if (
                  'Arguments' === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                )
                  return k(e, t)
              })(e)) ||
              (t && e && 'number' == typeof e.length)
            ) {
              n && (e = n)
              var r = 0,
                o = function () {}
              return {
                s: o,
                n: function () {
                  return r >= e.length
                    ? { done: !0 }
                    : { done: !1, value: e[r++] }
                },
                e: function (e) {
                  throw e
                },
                f: o,
              }
            }
            throw new TypeError(
              'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
            )
          }
          var i,
            a = !0,
            u = !1
          return {
            s: function () {
              n = e[Symbol.iterator]()
            },
            n: function () {
              var e = n.next()
              return (a = e.done), e
            },
            e: function (e) {
              ;(u = !0), (i = e)
            },
            f: function () {
              try {
                a || null == n.return || n.return()
              } finally {
                if (u) throw i
              }
            },
          }
        }
        function k(e, t) {
          ;(null == t || t > e.length) && (t = e.length)
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]
          return r
        }
        var D,
          j = {},
          F = function (e) {
            return e || ''
          },
          B = function (e) {
            return F(e)
              .replace(/</g, '%3C')
              .replace(/>/g, '%3E')
              .replace(/"/g, '%22')
              .replace(/'/g, '%27')
          },
          U = function (e) {
            var t = ''
            return (
              e.globalSubdomain
                ? (t += e.globalSubdomain + '.')
                : e.regionSubdomain && (t += e.regionSubdomain + '.'),
              (t += e.baseDomain)
            )
          },
          H = function (e) {
            var t =
              e.protocolPrefix +
              U(e) +
              F(e.pathname) +
              F(e.requestParameters) +
              F(e.hashArgs)
            return B(t)
          },
          G = function () {
            return {
              protocolPrefix: D.protocolPrefix,
              baseDomain: D.baseDomain,
              regionSubdomain: D.regionSubdomain,
              pathname: D.pathname,
              requestParameters: D.requestParameters,
              hashArgs: D.hashArgs,
            }
          },
          z = function (e, t) {
            return t
              ? (e && '?' !== e
                  ? -1 === e.indexOf('?region=') && -1 === e.indexOf('&region=')
                    ? (e += '&region=' + t)
                    : (e = e.replace(/([&?])region=([^&#]*)/, '$1region=' + t))
                  : (e = '?region=' + t),
                e)
              : e
          },
          W = function (e, t) {
            var n = ''
            return e && e[t] && (n = t), n
          },
          q = function (e) {
            if (e)
              try {
                return new URL(decodeURIComponent(e)).pathname
              } catch (e) {
                console.error(
                  'source query parameter is reserved for enable region logic by navigation',
                )
              }
          },
          V = function (e, t, n, r) {
            var o,
              i,
              a = G()
            return (
              t && (i = t.id),
              n && ((a.requestParameters = ''), (a.hashArgs = '')),
              e &&
                (e.globalSubdomain && (a.globalSubdomain = e.globalSubdomain),
                e.url && (a.pathname = e.url),
                e.cregionsById && (o = e.cregionsById)),
              (a.regionSubdomain = W(o, i)),
              (a.requestParameters = z(a.requestParameters, i)),
              se.filter && (a.baseDomain = se.filter(a.baseDomain)),
              r &&
                ((a.pathname =
                  (function (e) {
                    if (e.requestParameters) {
                      var t,
                        n = N(e.requestParameters.substring(1).split('&'))
                      try {
                        for (n.s(); !(t = n.n()).done; ) {
                          var r = t.value
                          if (r.startsWith('source'))
                            return q(r.substring(r.indexOf('=') + 1))
                        }
                      } catch (e) {
                        n.e(e)
                      } finally {
                        n.f()
                      }
                    }
                  })(a) || D.pathname),
                t &&
                  !t.optIn &&
                  (function (e) {
                    if (e.requestParameters) {
                      var t = e.requestParameters.substring(1).split('&')
                      ;(t = t.filter(function (e) {
                        return !(
                          e.startsWith('optInRegion') ||
                          e.startsWith('source') ||
                          e.startsWith('dest') ||
                          e.startsWith('regionLabel')
                        )
                      })),
                        (e.requestParameters = '?' + t.join('&'))
                    }
                  })(a)),
              a
            )
          },
          J = function (e, t, n, r) {
            return e && e.external_link ? e.url : H(V(e, t, n, r))
          },
          K = function (e) {
            var t,
              n,
              r = e.host,
              o = /([^.]+)\.(.*)/.exec(r)
            return (
              o && 3 === o.length && (P[o[1]] || j[o[1]])
                ? ((t = o[1]), (n = o[2]))
                : ((t = ''), (n = r)),
              {
                protocolPrefix: 'https://',
                baseDomain: n,
                regionSubdomain: t,
                pathname: e.pathname,
                requestParameters: e.search,
                hashArgs: e.hash,
              }
            )
          },
          X = function (e) {
            return J(e, R, !0, !1)
          },
          Y = function () {
            return D.baseDomain
          },
          Z = function (e, t, n, r, o) {
            if (((T = t), (R = n), (P = r || {}), o)) {
              j = {}
              for (var i = 0; i < o.length; i++) j[o[i]] = !0
            }
            D = K(e)
          },
          $ = {
            init: Z,
            decomposeLocation: K,
            newUrlInfo: G,
            valueOf: F,
            xssEscape: B,
            recomposeUrl: H,
            recomposeUrlDomain: U,
            updateRequestParamsWithRegion: z,
            updateDomainWithRegion: W,
            getUrlInfo: V,
            getServiceDomain: function (e) {
              return U(V(e, R, !0, !1))
            },
            getServiceLinkHref: X,
            getRegionLinkHref: function (e) {
              return J(T, e, !1, !0)
            },
            getRegionlessDomain: Y,
            getRegionInDomain: function () {
              return D.regionSubdomain
            },
            getAbsoluteUrl: function (e, t) {
              if (e && 'http' === e.substring(0, 4)) return e
              if (t) {
                var n,
                  r = /^([^#]+)#(.*)$/.exec(e)
                if (r) {
                  var o = r[1]
                  ;(n = r[2]), (e = o)
                }
                ;(e =
                  '?' === e.charAt(e.length - 1)
                    ? e.substr(0, e.length - 1)
                    : e),
                  (e = X({ url: e, cregionsById: t.cregionsById })),
                  n && (e = ''.concat(e, '#').concat(n))
              } else e = 'https://'.concat(Y()).concat(e)
              return e
            },
          }
        window.AWSC ? (window.AWSC.NavUrl = $) : (window.AWSC = { NavUrl: $ })
        var Q, ee
        function te(e, t) {
          var n
          if ('undefined' == typeof Symbol || null == e[Symbol.iterator]) {
            if (
              Array.isArray(e) ||
              (n = (function (e, t) {
                if (!e) return
                if ('string' == typeof e) return ne(e, t)
                var n = Object.prototype.toString.call(e).slice(8, -1)
                'Object' === n && e.constructor && (n = e.constructor.name)
                if ('Map' === n || 'Set' === n) return Array.from(e)
                if (
                  'Arguments' === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                )
                  return ne(e, t)
              })(e)) ||
              (t && e && 'number' == typeof e.length)
            ) {
              n && (e = n)
              var r = 0,
                o = function () {}
              return {
                s: o,
                n: function () {
                  return r >= e.length
                    ? { done: !0 }
                    : { done: !1, value: e[r++] }
                },
                e: function (e) {
                  throw e
                },
                f: o,
              }
            }
            throw new TypeError(
              'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
            )
          }
          var i,
            a = !0,
            u = !1
          return {
            s: function () {
              n = e[Symbol.iterator]()
            },
            n: function () {
              var e = n.next()
              return (a = e.done), e
            },
            e: function (e) {
              ;(u = !0), (i = e)
            },
            f: function () {
              try {
                a || null == n.return || n.return()
              } finally {
                if (u) throw i
              }
            },
          }
        }
        function ne(e, t) {
          ;(null == t || t > e.length) && (t = e.length)
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]
          return r
        }
        var re = function () {
          ;(Q = null), (ee = !1)
        }
        re()
        var oe = function () {
            return window.location.pathname.indexOf('phd') > 0
          },
          ie = function () {
            return At.features && At.features.phd
          },
          ae = function () {
            ee = !0
          },
          ue = function () {
            var e,
              t = ie()
            if (t.consoleDomainByPhdDomain) {
              var n,
                r = te(t.consoleDomainByPhdDomain)
              try {
                for (r.s(); !(n = r.n()).done; ) {
                  var o = n.value,
                    i = o.matchPHD,
                    a = o.resolveConsole
                  if (new RegExp(i).test(window.location.host)) return a
                }
              } catch (e) {
                r.e(e)
              } finally {
                r.f()
              }
            }
            return (
              ((e = ie()) && e.defaultConsoleDomain) || window.top.location.host
            )
          },
          se = {
            getPhdDomain: function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : { useDeprecated: !1 },
                t = e.useDeprecated,
                n = ie()
              if (n && n.isPhdMenuDisplayed && n.phdDomainByConsoleDomain) {
                var r,
                  o = te(n.phdDomainByConsoleDomain)
                try {
                  for (o.s(); !(r = o.n()).done; ) {
                    var i = r.value,
                      a = i.matchConsole,
                      u = i.resolvePHD,
                      s = i.resolvePHDDeprecated,
                      c = new RegExp(a)
                    if (c.test(window.location.host))
                      return oe() || t ? s || 'phd.aws.amazon.com' : u
                  }
                } catch (e) {
                  o.e(e)
                } finally {
                  o.f()
                }
              }
              return ae(), Y()
            },
            filterConsoleDomain: function (e) {
              if (
                ((r = window.location.pathname),
                /^\/health\/.*/.test(r) || '/health' === r || oe())
              ) {
                var t = ue(),
                  n = JSON.parse(JSON.stringify(e))
                return (n.hostname = t), (n.host = t), n
              }
              var r
              return e
            },
          },
          ce = {
            init: re,
            addPhdDataLoadedListener: function (e) {
              Q = e
            },
            disableMezzPoll: ae,
            domain: se,
            isMenuDisplayed: function () {
              var e = ie()
              return e && e.isPhdMenuDisplayed && M('phd')
            },
            isMezzPollDisabled: function () {
              return ee
            },
            updateMenuContent: function (e) {
              ae(), Q(e, Date.now())
            },
          }
        window.AWSC ? (window.AWSC.PHD = ce) : (window.AWSC = { PHD: ce })
        function le(e, t) {
          var n = Object.keys(e)
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e)
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
              })),
              n.push.apply(n, r)
          }
          return n
        }
        function fe(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {}
            t % 2
              ? le(Object(n), !0).forEach(function (t) {
                  L()(e, t, n[t])
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : le(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  )
                })
          }
          return e
        }
        var de = {
          getLocation: function () {
            var e, t, n
            return (
              window.ConsoleNavService && window.ConsoleNavService.Overrides
                ? (((e = fe(
                    fe(
                      {},
                      (e = {
                        protocol: 'https:',
                        port: '',
                        hostname: null,
                        pathname: null,
                        search: '',
                        hash: '',
                        href: '',
                      }),
                    ),
                    window.ConsoleNavService.Overrides,
                  )).host = e.hostname + (e.port ? ':' + e.port : '')),
                  (e.href =
                    ((t =
                      e.protocol +
                      '//' +
                      e.host +
                      (e.pathname ? e.pathname : '') +
                      e.search +
                      e.hash),
                    ((n = document.createElement('a')).href = t),
                    n.href)))
                : (e = window.top.location),
              se.filterConsoleDomain(e)
            )
          },
        }
        window.ConsoleNavService
          ? (window.ConsoleNavService.Location = de)
          : (window.ConsoleNavService = { Location: de })
        var pe,
          he = de,
          ve =
            (n(9653),
            n(44363),
            n(4723),
            function (e) {
              return (function (e) {
                return e.replace(/^[/]/, '').replace(/[/]$/, '')
              })(e).split('/')
            }),
          ge = function (e, t) {
            for (var n = 0; n < e.length && n < t.length && e[n] === t[n]; ) n++
            return n
          },
          ye = '',
          me = ''
        function we() {
          return (
            '1' ===
            (ye ||
              (ye =
                null ===
                  (e = document.querySelector('meta#awsc-widget-next')) ||
                void 0 === e
                  ? void 0
                  : e.getAttribute('content')),
            ye)
          )
          var e
        }
        function be() {
          var e, t
          return (
            (null ===
              (me ||
                (me =
                  null ===
                    (t = document.querySelector('meta#awsc-mezz-stage')) ||
                  void 0 === t
                    ? void 0
                    : t.getAttribute('content')),
              (e = me)) || void 0 === e
              ? void 0
              : e.toLowerCase()) === pe.PREPROD
          )
        }
        !(function (e) {
          ;(e.PROD = 'prod'), (e.PREPROD = 'preprod')
        })(pe || (pe = {}))
        n(26833), n(88674), n(32023)
        var Se = 'awsc-nav-account-menu-button',
          _e = 'awsc-nav-regions-menu-button',
          Ee = 'aws-services-list-button',
          Ae = 'awsc-nav-support-menu-button'
        function Oe(e, t) {
          var n
          if ('undefined' == typeof Symbol || null == e[Symbol.iterator]) {
            if (
              Array.isArray(e) ||
              (n = (function (e, t) {
                if (!e) return
                if ('string' == typeof e) return Ce(e, t)
                var n = Object.prototype.toString.call(e).slice(8, -1)
                'Object' === n && e.constructor && (n = e.constructor.name)
                if ('Map' === n || 'Set' === n) return Array.from(e)
                if (
                  'Arguments' === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                )
                  return Ce(e, t)
              })(e)) ||
              (t && e && 'number' == typeof e.length)
            ) {
              n && (e = n)
              var r = 0,
                o = function () {}
              return {
                s: o,
                n: function () {
                  return r >= e.length
                    ? { done: !0 }
                    : { done: !1, value: e[r++] }
                },
                e: function (e) {
                  throw e
                },
                f: o,
              }
            }
            throw new TypeError(
              'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
            )
          }
          var i,
            a = !0,
            u = !1
          return {
            s: function () {
              n = e[Symbol.iterator]()
            },
            n: function () {
              var e = n.next()
              return (a = e.done), e
            },
            e: function (e) {
              ;(u = !0), (i = e)
            },
            f: function () {
              try {
                a || null == n.return || n.return()
              } finally {
                if (u) throw i
              }
            },
          }
        }
        function Ce(e, t) {
          ;(null == t || t > e.length) && (t = e.length)
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]
          return r
        }
        var Te = {},
          Re = function (e) {
            if (e) Te[e] = []
            else {
              var t,
                n = Oe(Object.getOwnPropertyNames(Te))
              try {
                for (n.s(); !(t = n.n()).done; ) {
                  var r = t.value
                  delete Te[r]
                }
              } catch (e) {
                n.e(e)
              } finally {
                n.f()
              }
            }
          },
          Pe = function (e) {
            return Te[e] || (Te[e] = []), Te[e]
          },
          Ie = function (e, t) {
            Pe(e).push(t)
          },
          xe = function (e, t) {
            for (var n = Pe(e), r = 0; r < n.length; r++)
              try {
                n[r].apply(null, t)
              } catch (e) {}
          },
          Le = function (e, t) {
            return (function () {
              t = t || { bubbles: !1, cancelable: !1, detail: null }
              var n = document.createEvent('CustomEvent')
              return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n
            })()
          }
        var Me,
          Ne,
          ke = function (e) {
            for (
              var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
              r < t;
              r++
            )
              n[r - 1] = arguments[r]
            if (0 === n.length) return !1
            for (var o = 0; o < n.length; o++) {
              if (!e || !Object.hasOwnProperty.call(e, n[o])) return !1
              e = e[n[o]]
            }
            return !0
          },
          De = function (e) {
            var t,
              n,
              r,
              o,
              i = e.eventName,
              a = e.eventValue,
              u = e.eventContext,
              s = e.eventDetail
            ;(null === (t = window) ||
            void 0 === t ||
            null === (n = t.panorama) ||
            void 0 === n
              ? void 0
              : n.enabled) &&
              (null === (r = window) ||
              void 0 === r ||
              null === (o = r.panorama) ||
              void 0 === o
                ? void 0
                : o.clogEnabled) &&
              'function' == typeof window.panorama &&
              window.panorama('trackCustomEvent', {
                eventSource: 'clog',
                eventName: i,
                eventContext: u,
                eventDetail: s,
                eventValue: a,
                timestamp: Date.now(),
              })
          },
          je = function (e) {
            try {
              return document.head.querySelector('meta[name="' + e + '"]')
            } catch (e) {
              return console.error(e), null
            }
          },
          Fe = function (e, t) {
            ;(function (e) {
              var t = je(e)
              return (
                t ||
                  ((t = document.createElement('meta')).setAttribute('name', e),
                  t.setAttribute('id', e),
                  document.head.appendChild(t)),
                t
              )
            })(e).setAttribute('content', t)
          },
          Be = function () {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
              /[xy]/g,
              function (e) {
                var t = (16 * Math.random()) | 0
                return ('x' === e ? t : (3 & t) | 8).toString(16)
              },
            )
          },
          Ue = 'awsc-footer-privacy-policy',
          He = 'awsc-footer-terms-of-use',
          Ge = 'awsc-footer-language-selector-button',
          ze =
            (''.concat('awsc-footer-language-item', '-en'),
            ''.concat('awsc-footer-language-item', '-en-GB'),
            ''.concat('awsc-footer-language-item', '-de'),
            ''.concat('awsc-footer-language-item', '-es'),
            ''.concat('awsc-footer-language-item', '-fr'),
            ''.concat('awsc-footer-language-item', '-ja'),
            ''.concat('awsc-footer-language-item', '-en'),
            ''.concat('awsc-footer-language-item', '-it'),
            ''.concat('awsc-footer-language-item', '-pt-BR'),
            ''.concat('awsc-footer-language-item', '-ko'),
            ''.concat('awsc-footer-language-item', '-zh-CN'),
            ''.concat('awsc-footer-language-item', '-zh-TW'),
            'awsc-phd__bell-icon'),
          We = 'awsc-phd-open-issues',
          qe = 'awsc-phd-scheduled-changes',
          Ve = 'awsc-phd-other-notifications',
          Je = 'awsc-phd-event-log',
          Ke = [],
          Xe = 'unified-nav-widget',
          Ye = 'nav_services',
          Ze = 'nav_phd',
          $e = 'nav_account',
          Qe = 'nav_region_select',
          et = 'nav_support',
          tt = 'nav_language_selector',
          nt = 'nav_terms_of_use',
          rt = 'nav_privacy',
          ot =
            ((Me = {}),
            L()(Me, Ee, Ye),
            L()(Me, 'more-menu__' + Se, $e),
            L()(Me, 'more-menu__' + _e, Qe),
            L()(Me, 'more-menu__' + Ae, et),
            L()(Me, ze, Ze),
            L()(Me, Ge, tt),
            L()(Me, Ue, rt),
            L()(Me, He, nt),
            (Ne = {}),
            L()(Ne, He, 'click_ngn_terms_of_use_link'),
            L()(Ne, Ue, 'click_ngn_privacy_link'),
            L()(Ne, We, 'click_ngn_open_issue'),
            L()(Ne, qe, 'click_ngn_scheduled_change'),
            L()(Ne, Ve, 'click_ngn_other_notification'),
            L()(Ne, Je, 'click_ngn_event_log'),
            function () {
              var e, t
              return (
                (null === (e = window) ||
                void 0 === e ||
                null === (t = e.panorama) ||
                void 0 === t
                  ? void 0
                  : t.enabled) && 'function' == typeof window.panorama
              )
            }),
          it = function (e, t, n) {
            var r,
              o = n ? [[n]] : []
            ot()
              ? (r = window).panorama.apply(r, [e, t].concat(o))
              : Ke.length < 100 &&
                Ke.push(function () {
                  var n
                  return (n = window).panorama.apply(n, [e, t].concat(o))
                })
          },
          at = function (e, t, n, r) {
            it(
              'trackWidgetOpsEvents',
              {
                metricList: [
                  {
                    metricName: e,
                    metricValue: t,
                    metricDetail: n,
                    metricUnit: r,
                  },
                ],
              },
              Xe,
            )
          }
        window.addEventListener('onPanoramaLoad', function (e) {
          e.detail &&
            e.detail.enabled &&
            Ke.length > 0 &&
            Ke.forEach(function (e) {
              ot() && e()
            }),
            (Ke = [])
        })
        var ut
        n(27852),
          (ut = {}),
          L()(ut, I.FeatureFlag.CCS, I.FeatureStatus.Disabled),
          L()(ut, I.FeatureFlag.ColorTheme, I.FeatureStatus.Disabled),
          L()(ut, I.FeatureFlag.DefaultLanguage, I.FeatureStatus.Disabled),
          L()(ut, I.FeatureFlag.DefaultRegion, I.FeatureStatus.Disabled),
          L()(ut, I.FeatureFlag.FavoriteBar, I.FeatureStatus.Disabled),
          L()(ut, I.FeatureFlag.Timezone, I.FeatureStatus.Disabled),
          L()(ut, I.FeatureFlag.UnifiedNavigation, I.FeatureStatus.Disabled),
          L()(
            ut,
            I.FeatureFlag.FavoritesInUnifiedSearch,
            I.FeatureStatus.Disabled,
          ),
          L()(
            ut,
            I.FeatureFlag.LanguageSelectorInNav,
            I.FeatureStatus.Disabled,
          ),
          L()(ut, I.FeatureFlag.EnabledRegions, I.FeatureStatus.Disabled),
          n(85827)
        function st(e, t) {
          var n = Object.keys(e)
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e)
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
              })),
              n.push.apply(n, r)
          }
          return n
        }
        var ct,
          lt = function (e, t) {
            return function (n) {
              var r = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = null != arguments[t] ? arguments[t] : {}
                  t % 2
                    ? st(Object(n), !0).forEach(function (t) {
                        L()(e, t, n[t])
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        e,
                        Object.getOwnPropertyDescriptors(n),
                      )
                    : st(Object(n)).forEach(function (t) {
                        Object.defineProperty(
                          e,
                          t,
                          Object.getOwnPropertyDescriptor(n, t),
                        )
                      })
                }
                return e
              })({ type: e }, n)
              if (t) {
                var o = t(r)
                o && Object.assign(r, o)
              }
              return r
            }
          }
        !(function (e) {
          ;(e.DropdownStateSet = 'GLOBAL_NAVIGATION_DROPDOWN_STATE_SET'),
            (e.FavoriteServiceIdsSet =
              'GLOBAL_NAVIGATION_FAVORITE_SERVICE_IDS_SET'),
            (e.FavoritesBarServiceDisplayModeSet =
              'GLOBAL_NAVIGATION_FAVORITES_BAR_SERVICE_DISPLAY_MODE_SET'),
            (e.FavoriteServiceSource =
              'GLOBAL_NAVIGATION_FAVORITE_SERVICE_SOURCE'),
            (e.FeatureTourDisable = 'GLOBAL_NAVIGATION_FEATURE_TOUR_DISABLE'),
            (e.FeatureTourStopActiveSet =
              'GLOBAL_NAVIGATION_FEATURE_TOUR_STOP_ACTIVE_SET'),
            (e.FeatureTourStopActiveDismiss =
              'GLOBAL_NAVIGATION_FEATURE_TOUR_STOP_ACTIVE_DISMISS'),
            (e.Initialize = 'GLOBAL_NAVIGATION_INIT'),
            (e.SetColorTheme = 'GLOBAL_NAVIGATION_SET_COLOR_THEME'),
            (e.InitializeFAC = 'GLOBAL_NAVIGATION_INITIALIZE_FAC'),
            (e.ToggleFAC = 'GLOBAL_NAVIGATION_TOGGLE_FAC'),
            (e.ToggleRegionChangeFlashbar =
              'GLOBAL_NAVIGATION_TOGGLE_REGION_CHANGE_FLASHBAR'),
            (e.ToggleRegionChangeAfterSearchFlashbar =
              'GLOBAL_NAVIGATION_TOGGLE_REGION_CHANGE_AFTER_SEARCH_FLASHBAR'),
            (e.UpdateFavoriteServiceIdListFromCCS =
              'GLOBAL_NAVIGATION_UPDATE_FAVORITE_LIST_FROM_CCS'),
            (e.RenderFavoriteListErrorStatus =
              'GLOBAL_NAVIGATION_RENDER_FAVORITE_LIST_ERROR_STATUS'),
            (e.RenderFavoriteBarErrorStatus =
              'GLOBAL_NAVIGATION_RENDER_FAVORITE_BAR_ERROR_STATUS'),
            (e.RenderRecentlyVisitedListErrorStatus =
              'GLOBAL_NAVIGATION_RENDER_RECENTLY_VISITED_LIST_ERROR_STATUS'),
            (e.UpdateRecentlyVisitedIdListFromCCS =
              'GLOBAL_NAVIGATION_UPDATE_RECENT_LIST_FROM_CCS'),
            (e.AddServiceToRecentList =
              'GLOBAL_NAVIGATION_ADD_SERVICE_TO_RECENT_LIST'),
            (e.CCSInitialApiCallFailed =
              'GLOBAL_NAVIGATION_CCS_INITIAL_API_CALL_FAILED'),
            (e.SetSelectedServicesMenuItem =
              'GLOBAL_NAVIGATION_SET_SELECTED_SERVICES_MENU_ITEM'),
            (e.SetSearchDropdownState =
              'GLOBAL_NAVIGATION_SET_SEARCH_DROPDOWN_STATE'),
            (e.UpdateScallopState = 'UPDATE_SCALLOP_STATE'),
            (e.SetNavCurrentService = 'SET_NAV_CURRENT_SERVICE_STATE'),
            (e.SetNavCurrentRegion = 'SET_NAV_CURRENT_REGION_STATE'),
            (e.UpdateNavRegionsLoadingState =
              'UPDATE_NAV_REGIONS_LOADING_STATE'),
            (e.UpdateNavRegions = 'UPDATE_NAV_REGIONS_STATE')
        })(ct || (ct = {}))
        lt(ct.DropdownStateSet),
          lt(ct.FavoriteServiceIdsSet),
          lt(ct.FavoriteServiceSource),
          lt(ct.FavoritesBarServiceDisplayModeSet),
          lt(ct.FeatureTourDisable),
          lt(ct.FeatureTourStopActiveSet),
          lt(ct.FeatureTourStopActiveDismiss),
          lt(ct.Initialize),
          lt(ct.SetColorTheme),
          lt(ct.InitializeFAC),
          lt(ct.ToggleFAC),
          lt(ct.ToggleRegionChangeFlashbar),
          lt(ct.ToggleRegionChangeAfterSearchFlashbar),
          lt(ct.SetSelectedServicesMenuItem),
          lt(ct.UpdateScallopState),
          lt(ct.SetSearchDropdownState)
        var ft = function (e, t) {
            var n = e.length
            if (n !== t.length) return !1
            for (var r = 0; r < n; r++) {
              if (e[r] !== t[r]) return !1
            }
            return !0
          },
          dt = function (e) {
            var t, n
            return function () {
              return (
                (void 0 !== t && !1 !== ft(arguments, t)) ||
                  ((t = arguments), (n = e.apply(this, arguments))),
                n
              )
            }
          },
          pt = {},
          ht = function () {
            var e = document.head.querySelector(
              'meta[name='.concat('awsc-mezz-fac', ']'),
            )
            if (e && e.hasAttribute('content'))
              try {
                ;(pt = Object.assign(
                  pt,
                  JSON.parse(e.getAttribute('content')),
                )),
                  we() &&
                    (Object.keys(pt).forEach(function (e) {
                      e.endsWith('_ia') || delete pt[e]
                    }),
                    Object.keys(pt).forEach(function (e) {
                      if (e.endsWith('_ia')) {
                        var t = e.slice(0, -'_ia'.length)
                        pt[t] = pt[e]
                      }
                    })),
                  Object.keys(pt).forEach(function (e) {
                    e.endsWith('_ia') && delete pt[e]
                  })
              } catch (e) {
                console.error(e)
              }
          },
          vt = function (e) {
            return pt[e] === I.FeatureStatus.Enabled
          },
          gt = dt(function () {
            var e
            return (
              (null ===
                (e = document.querySelector(
                  '['.concat('data-nav-build-version', ']'),
                )) || void 0 === e
                ? void 0
                : e.getAttribute('data-nav-build-version')) || 'X.X.X'
            )
          })
        ht()
        function yt(e, t) {
          var n
          if ('undefined' == typeof Symbol || null == e[Symbol.iterator]) {
            if (
              Array.isArray(e) ||
              (n = (function (e, t) {
                if (!e) return
                if ('string' == typeof e) return mt(e, t)
                var n = Object.prototype.toString.call(e).slice(8, -1)
                'Object' === n && e.constructor && (n = e.constructor.name)
                if ('Map' === n || 'Set' === n) return Array.from(e)
                if (
                  'Arguments' === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                )
                  return mt(e, t)
              })(e)) ||
              (t && e && 'number' == typeof e.length)
            ) {
              n && (e = n)
              var r = 0,
                o = function () {}
              return {
                s: o,
                n: function () {
                  return r >= e.length
                    ? { done: !0 }
                    : { done: !1, value: e[r++] }
                },
                e: function (e) {
                  throw e
                },
                f: o,
              }
            }
            throw new TypeError(
              'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
            )
          }
          var i,
            a = !0,
            u = !1
          return {
            s: function () {
              n = e[Symbol.iterator]()
            },
            n: function () {
              var e = n.next()
              return (a = e.done), e
            },
            e: function (e) {
              ;(u = !0), (i = e)
            },
            f: function () {
              try {
                a || null == n.return || n.return()
              } finally {
                if (u) throw i
              }
            },
          }
        }
        function mt(e, t) {
          ;(null == t || t > e.length) && (t = e.length)
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]
          return r
        }
        var wt,
          bt = !1,
          St = {}
        !(function (e) {
          ;(e.String = 'string'), (e.Object = 'object')
        })(wt || (wt = {}))
        var _t = function (e, t) {
            var n = document.head.querySelector('meta[name="' + e + '"]')
            if (n) {
              var r = n.getAttribute('content')
              if (t === wt.String) return r
              if (r)
                try {
                  return JSON.parse(r)
                } catch (e) {
                  return {}
                }
            }
            return null
          },
          Et = function (e) {
            if (
              (!bt || e) &&
              (function () {
                for (var e in Object.getOwnPropertyNames(St)) delete St[e]
                var t = _t('awsc-mezz-data'),
                  n = _t('awsc-nav-features')
                n || ((n = {}), console.warn('Mezzanine FAC tag is empty'))
                var r = _t('icon-domain', wt.String),
                  o = _t('awsc-footer-bool')
                return (
                  !(!t || !n) &&
                  (Object.assign(St, t),
                  (St.features = n),
                  (St.features.iconDomain = r),
                  (St.features.removeExtraFooterPadding = !!o),
                  St.features.phd && (St.features.phd.isPhdMenuDisplayed = !0),
                  we() &&
                    St.services &&
                    St.services.push({
                      id: 'upc',
                      url: '/settings/home',
                      regions: [
                        'af-south-1',
                        'eu-north-1',
                        'ap-south-1',
                        'eu-west-3',
                        'eu-west-2',
                        'eu-south-1',
                        'eu-west-1',
                        'ap-northeast-3',
                        'ap-northeast-2',
                        'me-south-1',
                        'ap-northeast-1',
                        'sa-east-1',
                        'ca-central-1',
                        'ap-east-1',
                        'ap-southeast-1',
                        'ap-southeast-2',
                        'eu-central-1',
                        'us-east-1',
                        'us-east-2',
                        'us-west-1',
                        'us-west-2',
                      ],
                      cregions: [
                        'af-south-1',
                        'eu-north-1',
                        'ap-south-1',
                        'eu-west-3',
                        'eu-west-2',
                        'eu-south-1',
                        'eu-west-1',
                        'ap-northeast-3',
                        'ap-northeast-2',
                        'me-south-1',
                        'ap-northeast-1',
                        'sa-east-1',
                        'ca-central-1',
                        'ap-east-1',
                        'ap-southeast-1',
                        'ap-southeast-2',
                        'eu-central-1',
                        'us-east-2',
                        'us-west-1',
                        'us-west-2',
                      ],
                      unlisted: !0,
                      history: !1,
                      external_link: !1,
                      icon:
                        'icon/2f9e567efb6a38663162f65eaac2d73b-a5b206b41fc122e3f51a6cbd57afc88b.svg',
                      label: 'Unified Settings',
                      description: 'Set your unified settings',
                      caption: 'Set your unified settings',
                    }),
                  !0)
                )
              })()
            ) {
              bt = !0
              var t = St.services,
                n = he.getLocation(),
                r = n.protocol + '//' + n.host,
                o = {},
                i = {},
                a = {},
                u = {},
                s = {},
                c = []
              St.homeService = (function (e, t) {
                for (
                  var n = e.services ? e.services.length : 0, r = 0;
                  r < n;
                  r++
                )
                  if (e.services[r].id === t) return e.services[r]
                return null
              })(St, 'home')
              var l,
                f,
                d,
                p,
                h = n.pathname,
                v = /.*?[&?]region=([^&]*).*/,
                g = '',
                y = St.homeService,
                m = [],
                w = 0
              ;(St.servicesById = i),
                (St.serviceIdNavIdMapping = a),
                (St.servicesByUrl = u),
                (St.globalSubdomains = c),
                (St.urlPrefix = r)
              for (
                var b, S, _ = St.regions ? St.regions.length : 0, E = 0;
                E < _;
                E++
              )
                (f = St.regions[E]),
                  (o[f.id] = f),
                  (f.label = f.name + ' (' + f.location + ')')
              ;(St.regionsById = o),
                (l = n.search.replace(v, '$1')) ||
                  (l = window.location.search.replace(v, '$1')),
                St.regionsById[l] && (g = l),
                (St.currentRegionId = g),
                (St.currentRegion = St.regionsById[g]),
                (St.currentRegionMezzId = (function () {
                  var e,
                    t =
                      null ===
                        (e = document.querySelector('meta#awsc-mezz-region')) ||
                      void 0 === e
                        ? void 0
                        : e.getAttribute('content')
                  return 'us-s3nw-1' === t ? null : t
                })()),
                (St.currentRegionMezz = St.regionsById[St.currentRegionMezzId]),
                vt(I.FeatureFlag.VPC) &&
                  (St.vpcData =
                    ((b = document.querySelector(
                      'meta[name="awsc-session-data"',
                    )),
                    (S = b ? b.getAttribute('content') : '{}'),
                    JSON.parse(S))),
                (St.currentService = { id: '', regions: St.regionsById })
              var A = function (e, t) {
                ;(i[e.id] = e),
                  (u[e.url] = e),
                  e.unlisted
                    ? ((w += 1), delete e.caption)
                    : e !== y && (m.push(e), (e.index = t - w)),
                  e.url || (e.url = '/' + e.id + '/home'),
                  e.newService || (e.newService = !1),
                  e.previewService || (e.previewService = !1),
                  e.betaService || (e.betaService = !1),
                  e.regions,
                  e.globalSubdomain && c.push(e.globalSubdomain),
                  'global' === e.regions || e.globalSubdomain
                    ? (e.global = !0)
                    : (function (e, t, n) {
                        var r
                        Array.isArray(t.regions) &&
                          t.regions.forEach(function (t) {
                            ;(r =
                              'number' == typeof t
                                ? e.regions[t]
                                : e.regionsById[t]),
                              (n[r.id] = r)
                          }),
                          (t.regionIds = t.regions),
                          (t.regions = n)
                      })(St, e, (o = {})),
                  (o = {}),
                  e.cregions || (e.cregions = [])
                for (
                  var n = e.cregions ? e.cregions.length : 0, r = 0;
                  r < n;
                  r++
                )
                  (d = e.cregions[r]),
                    (f =
                      'number' == typeof d ? St.regions[d] : St.regionsById[d]),
                    (o[f.id] = f)
                ;(e.cregionIds = e.cregions),
                  (e.cregionsById = o),
                  e.unlisted ||
                    (function (e) {
                      ;((null == e ? void 0 : e.service_ids) || []).forEach(
                        function (t) {
                          a[t] = e.id
                        },
                      )
                    })(e)
              }
              0 ===
                document.head.querySelectorAll('meta[name="awsc-mezz-data"]')
                  .length && A(y || {})
              for (
                var O = t ? t.length : 0,
                  C = (function (e) {
                    var t,
                      n = /(?:https:\/\/[^/]+)?(\/[^?#]+)/,
                      r = Number.MAX_SAFE_INTEGER,
                      o = 0,
                      i = !1,
                      a = ve(e)
                    return {
                      addService: function (u) {
                        var s = u.serviceId,
                          c = u.serviceUrl,
                          l = u.setCurrenServiceCallback
                        if (s && !i) {
                          var f = c.match(n)[1]
                          if (f === e) return (t = s), l(), void (i = !0)
                          var d = ve(f),
                            p = d.length,
                            h = ge(a, d)
                          ;(h > o || (h > 0 && h === o && p < r)) &&
                            ((t = s), (r = p), (o = h), l())
                        }
                      },
                      getCurrentServiceId: function () {
                        return t
                      },
                    }
                  })(h),
                  T = function (e) {
                    var n = t[e]
                    A(n, e)
                    C.addService({
                      serviceId: n.id,
                      serviceUrl: n.url,
                      setCurrenServiceCallback: function () {
                        St.currentService = n
                      },
                    })
                  },
                  R = 0;
                R < O;
                R++
              )
                T(R)
              ;(t = St.services = m).sort(function (e, t) {
                var n = e.label.toLowerCase(),
                  r = t.label.toLowerCase()
                return n < r ? -1 : n > r ? 1 : 0
              }),
                (function () {
                  if (
                    St &&
                    St.servicesById &&
                    St.servicesById['resource-groups']
                  ) {
                    var e = St.servicesById['resource-groups']
                    if (
                      ((e.label = 'Resource Groups & Tag Editor'),
                      (e.history = !0),
                      St.serviceCategories)
                    ) {
                      var t = St.serviceCategories.findIndex(function (e) {
                        return 'management_tools' === e.id
                      })
                      t >= 0 &&
                        St.serviceCategories[t].serviceIds.indexOf(
                          'resource-groups',
                        ) < 0 &&
                        St.serviceCategories[t].serviceIds.push(
                          'resource-groups',
                        )
                    }
                  }
                })(),
                (St.serviceCategoriesById = s)
              var P,
                x,
                L,
                M,
                N,
                k,
                D = yt(St.serviceCategories || [])
              try {
                for (D.s(); !(P = D.n()).done; ) {
                  var j = P.value
                  ;(s[j.id] = j), (j.services = [])
                  var F,
                    B = yt(j.serviceIds)
                  try {
                    for (B.s(); !(F = B.n()).done; ) {
                      var U = F.value
                      ;(p = i[U]) && ((p.category = j), j.services.push(p))
                    }
                  } catch (e) {
                    B.e(e)
                  } finally {
                    B.f()
                  }
                }
              } catch (e) {
                D.e(e)
              } finally {
                D.f()
              }
              St.sprite =
                ((x = St.serviceSpriteIdOrder),
                (L = {
                  iconSizeToSpriteTop: {
                    sm: -44,
                    med: -24,
                    xl: -60,
                    default: 0,
                  },
                  columnWidth: 32,
                }),
                (M = {}),
                (N = function (e) {
                  return e in L.iconSizeToSpriteTop
                    ? L.iconSizeToSpriteTop[e]
                    : L.iconSizeToSpriteTop.default
                }),
                (k = function (e) {
                  return M[e] * L.columnWidth
                }),
                (function () {
                  for (var e = x ? x.length : 0, t = 0; t < e; t++) M[x[t]] = t
                })(),
                {
                  getServiceIconLeftOffset: k,
                  getServiceIconCssPosition: function (e, t) {
                    var n = N(t)
                    return '-' + k(e) + 'px ' + n + 'px'
                  },
                  getServiceIconTopOffset: N,
                })
              var H = C.getCurrentServiceId()
              ;(St.currentService.id = H),
                Fe('awsc-mezz-service', H || 'unavailable')
              if (!H) {
                var G = window.location,
                  z = G.protocol,
                  W = G.hostname,
                  q = G.pathname,
                  V = ''.concat(z, '//').concat(W).concat(q),
                  J = JSON.stringify({
                    url: V,
                    servicesLength: O,
                    actualPathName: h,
                  })
                it('trackOperationalEvents', {
                  metricList: [
                    {
                      metricName: 'mezzServiceIdUnavailable',
                      metricValue: 1,
                      metricDetails: J,
                    },
                  ],
                }),
                  at('mezzServiceIdUnavailable', 1, J)
              }
              at('mezzServiceIdUnavailable', 0),
                Z(
                  n,
                  St.currentService,
                  St.currentRegion,
                  St.regionsById,
                  St.globalSubdomains,
                )
            }
          }
        window.ConsoleNavService
          ? ((window.ConsoleNavService.Model = St),
            (window.ConsoleNavService.initializeModel = Et))
          : (window.ConsoleNavService = { Model: St, initializeModel: Et })
        var At = St,
          Ot = n(50986)
        ;(0, Ot.Y)(!0)
        n(91058), n(70189)
        var Ct,
          Tt = n(50008),
          Rt = n.n(Tt),
          Pt =
            (n(73210),
            dt(function (e) {
              for (
                var t = document.cookie.length > 0 ? e.split(';') : [],
                  n = t.length,
                  r = {},
                  o = 0;
                o < n;
                o++
              ) {
                var i = t[o].split('='),
                  a = i[0].trim(),
                  u = i[1]
                r[a] = { raw: u }
              }
              return {
                getCookie: function (e) {
                  var t = r[e]
                  if (!t) return null
                  var n = t.unescaped
                  if (void 0 === n) {
                    var o = t.raw
                    n = t.unescaped = unescape(o.trim())
                  }
                  return n
                },
              }
            })),
          It = function (e) {
            var t = document.cookie
            return Pt(t).getCookie(e)
          },
          xt = {},
          Lt = function (e) {
            var t = xt[e]
            return void 0 === t && (t = xt[e] = It(e) || null), t
          }
        function Mt(e, t) {
          var n
          if ('undefined' == typeof Symbol || null == e[Symbol.iterator]) {
            if (
              Array.isArray(e) ||
              (n = (function (e, t) {
                if (!e) return
                if ('string' == typeof e) return Nt(e, t)
                var n = Object.prototype.toString.call(e).slice(8, -1)
                'Object' === n && e.constructor && (n = e.constructor.name)
                if ('Map' === n || 'Set' === n) return Array.from(e)
                if (
                  'Arguments' === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                )
                  return Nt(e, t)
              })(e)) ||
              (t && e && 'number' == typeof e.length)
            ) {
              n && (e = n)
              var r = 0,
                o = function () {}
              return {
                s: o,
                n: function () {
                  return r >= e.length
                    ? { done: !0 }
                    : { done: !1, value: e[r++] }
                },
                e: function (e) {
                  throw e
                },
                f: o,
              }
            }
            throw new TypeError(
              'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
            )
          }
          var i,
            a = !0,
            u = !1
          return {
            s: function () {
              n = e[Symbol.iterator]()
            },
            n: function () {
              var e = n.next()
              return (a = e.done), e
            },
            e: function (e) {
              ;(u = !0), (i = e)
            },
            f: function () {
              try {
                a || null == n.return || n.return()
              } finally {
                if (u) throw i
              }
            },
          }
        }
        function Nt(e, t) {
          ;(null == t || t > e.length) && (t = e.length)
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]
          return r
        }
        var kt,
          Dt,
          jt = [],
          Ft = [],
          Bt = [],
          Ut = [],
          Ht = [],
          Gt = Be(),
          zt = function () {},
          Wt = '',
          qt = !1,
          Vt = null,
          Jt = !1,
          Kt = !1,
          Xt = !1,
          Yt = 0,
          Zt = 0,
          $t = 0,
          Qt = 0,
          en = 0,
          tn = 0,
          nn = 0,
          rn = 0,
          on = null,
          an = !1,
          un = new Set([
            'anyPanoALFail',
            'anyPanoALSent',
            'clickToCustomerReady',
            'clogPing',
            'clogSixthSenseCanaryMetric',
            'customerReady',
            'fst',
            'initialLoad',
            'loadFinished',
            'pageReady',
            'panoALFail',
            'panoALFailureLatency',
            'panoALFalse',
            'panoALParamsUnavailable',
            'panoALParseError',
            'panoALSent',
            'panoALSuccessLatency',
            'panoALSuccessful',
            'panoALTimeoutExceeded',
            'panoALTrue',
            'panoFacUnavailable',
            'panoInitLoad',
            'panoZeroRetriesLeft',
            'totalPanoALRetries',
          ]),
          sn = new Set([
            'me-central-1',
            'eu-south-2',
            'ap-southeast-4',
            'ap-south-2',
            'eu-central-2',
            'il-central-1',
          ]),
          cn = [
            'ResizeObserver loop limit exceeded',
            'ResizeObserver loop completed with undelivered notifications.',
          ],
          ln = {
            CLOG_ERROR_MESSAGE_BLOCKED: -3,
            CLOG_ERROR_MESSAGE_THROTTLED: -2,
            CLOG_ERROR_MESSAGE_TOO_LARGE: -1,
            CLOG_SUCCESS: 0,
          },
          fn =
            ((Ct = {}),
            L()(Ct, ln.CLOG_SUCCESS, 'Success'),
            L()(
              Ct,
              ln.CLOG_ERROR_MESSAGE_TOO_LARGE,
              'Exceeded CLOG max message size of 2000000 bytes',
            ),
            L()(
              Ct,
              ln.CLOG_ERROR_MESSAGE_THROTTLED,
              'CLOG log rejected the message due to the message queue being full.  Queue size is 100',
            ),
            L()(
              Ct,
              ln.CLOG_ERROR_MESSAGE_BLOCKED,
              'CLOG log rejected the message due to interference with your browser extension',
            ),
            Ct),
          dn = function () {
            return 2e6
          },
          pn = function (e) {
            kt = e
          },
          hn = function (e) {
            Dt = e
          },
          vn = function (e, t) {
            var n
            return (
              'number' == typeof (n = 'function' == typeof e ? e(t) : e) &&
                (n = n.toString()),
              t &&
                !n &&
                (n = (function () {
                  var e = window.location.pathname.replace(/\//g, '_')
                  if (('_' === e[0] && (e = e.substr(1)), !e)) return '_'
                  var t,
                    n,
                    r = window.location.hash,
                    o = e.indexOf('_')
                  return (
                    (e = e.substring(o + 1)),
                    (t = r.match(/^#?s=(.+)/))
                      ? 'Home' === (n = t[1]) && (n = '')
                      : (t = r.match(/^#?([^:]+):.*/)) && (n = t[1]),
                    n && (e += '_' + n),
                    e
                  )
                })()),
              n && (n = n.replace(/[^a-zA-Z0-9_]/g, '')),
              n
            )
          },
          gn = function (e) {
            en++,
              (e.status !== ln.CLOG_ERROR_MESSAGE_TOO_LARGE &&
                e.status !== ln.CLOG_ERROR_MESSAGE_THROTTLED) ||
                Qt++
          },
          yn = function (e, t, n) {
            var r = n()
            return (
              void 0 !== e.key &&
                ('string' == typeof t && (t = parseInt(t, 10)),
                (r = n('&k', t, '=', e.key)),
                void 0 !== e.value &&
                  null !== e.value &&
                  (r += n('&m', t, '=', e.value)),
                void 0 !== e.detail &&
                  null !== e.detail &&
                  (r += n('&d', t, '=', e.detail)),
                e.pageId && (r += n('&p', t, '=', e.pageId)),
                e.unit && (r += n('&u', t, '=', e.unit)),
                e.logLevel && (r += n('&l', t, '=', e.logLevel)),
                e.category && (r += n('&c', t, '=', e.category))),
              r
            )
          },
          mn = function (e, t) {
            return parseInt(
              yn(e, t, function () {
                for (
                  var e = 0, t = arguments.length, n = new Array(t), r = 0;
                  r < t;
                  r++
                )
                  n[r] = arguments[r]
                for (var o = 0, i = n; o < i.length; o++) {
                  var a = i[o]
                  a !== n && null !== a && (e += a.toString().length)
                }
                return e
              }),
              10,
            )
          },
          wn = function (e, t, n, r, o, i, a) {
            try {
              return bn(e, t, n, r, o, i, a)
            } catch (e) {
              return {
                status: ln.CLOG_ERROR_MESSAGE_BLOCKED,
                message: fn[ln.CLOG_ERROR_MESSAGE_BLOCKED],
              }
            }
          },
          bn = function e(t, n, r, o, i, a, u) {
            var s,
              c = window
            c.AWSC || (c.AWSC = {}),
              c.AWSC.Clog ||
                ((c.AWSC.Clog = {}), (c.AWSC.Clog.bufferedQueue = Ht))
            var l = c.AWSC.Clog.bufferedQueue
            'object' === Rt()(t)
              ? (s = t)
              : ((s = { key: t }),
                void 0 !== n && (s.value = n),
                void 0 !== r && (s.detail = r),
                i && (s.unit = i),
                a && (s.metricType = a),
                u && (s.logLevel = u)),
              s.pageId && (o = s.pageId),
              o || (o = Dt),
              (s.pageId = vn(o, s.metricType))
            var f = mn(s, 1e9)
            if (f > 2e6) {
              var d = {
                  key: 'clogMessageSizeLimitExceeded',
                  value: f,
                  detail:
                    'Message of size ' +
                    f +
                    ' was given, but the limit is 2000000',
                  pageId: s.pageId,
                },
                p = mn(d, 1e9)
              if (p > 2e6) {
                var h = p - 2e6,
                  v = d.pageId.length - h
                d.pageId = d.pageId.substring(0, v)
              }
              return (
                e(d.key, d.value, d.detail, d.pageId),
                {
                  status: ln.CLOG_ERROR_MESSAGE_TOO_LARGE,
                  message: fn[ln.CLOG_ERROR_MESSAGE_TOO_LARGE],
                }
              )
            }
            switch (s.logLevel) {
              case 'INFO':
                e('INFO', 1, void 0, s.pageId),
                  Jt || ((Jt = !0), e('custInfo', 1, void 0, s.pageId))
                break
              case 'WARN':
                e('WARN', 1, void 0, s.pageId),
                  Kt || ((Kt = !0), e('custWarn', 1, void 0, s.pageId))
                break
              case 'FATAL':
                e('FATAL', 1, void 0, s.pageId),
                  Xt || ((Xt = !0), e('custFatal', 1, void 0, s.pageId))
            }
            var g = jt[jt.length - 1],
              y = ln.CLOG_SUCCESS,
              m = 'string' == typeof s.key && un.has(s.key)
            return (
              s.key
                ? (g &&
                  g.key === s.key &&
                  g.detail === s.detail &&
                  g.pageId === s.pageId &&
                  g.unit === s.unit &&
                  g.category === s.category &&
                  1 === s.value
                    ? ((g.value += 1),
                      rn++,
                      ke(window, 'AWSC', 'Clog') &&
                        (window.AWSC.Clog.totalDedupes = rn))
                    : m || jt.length < 100
                    ? (jt.push(s),
                      c.panorama && null !== on
                        ? on
                          ? an
                            ? De({
                                eventName: s.key,
                                eventContext: JSON.stringify({
                                  pageId: s.pageId,
                                  unit: s.unit,
                                  metricType: s.metricType,
                                  logLevel: s.logLevel,
                                }),
                                eventDetail: s.detail || '',
                                eventValue: '0' == s.value ? '0' : s.value,
                              })
                            : l.push({ metric: s, ts: Date.now() })
                          : (l = [])
                        : l.push({ metric: s, ts: Date.now() }))
                    : ((y = ln.CLOG_ERROR_MESSAGE_THROTTLED), ++Yt),
                  Zt++,
                  zt && zt())
                : $t++,
              { status: y, message: fn[y] }
            )
          },
          Sn = function (e, t, n) {
            gn(wn('jsError', e, t, n)),
              gn(
                wn({
                  key: 'jsError_ngn',
                  value: e,
                  detail: t,
                  pageId: n,
                  metricType: 'custom',
                }),
              ),
              qt ||
                (gn(wn('custJsError', 1)),
                gn(
                  wn({
                    key: 'custJsError_ngn',
                    value: 1,
                    metricType: 'custom',
                  }),
                ),
                (qt = !0))
          },
          _n = function (e, t, n) {
            ;(function (e) {
              return /eval|debugger|[a-zA-Z]*-extension/i.test(e)
            })(t) ||
              (!(function (e) {
                try {
                  return cn.indexOf(e) >= 0
                } catch (e) {
                  return !1
                }
              })(e)
                ? Sn(1, 'MSG:' + e + ' URL:' + t + ' LN:' + n)
                : wn('ignoredJsError', 1, e))
          },
          En = {
            clearLogQueue: function () {
              jt.length = 0
            },
            curItem: function () {
              return jt[0]
            },
            dequeue: function () {
              return jt.shift()
            },
            extractProxyRequestID: function () {
              if (null === Vt) {
                var e = document.querySelector(
                  'meta[name="awsc-proxy-request-id"]',
                )
                Vt = e ? e.getAttribute('content') : ''
              }
              return Vt
            },
            getCustomerReadyLogsThrottledCount: function () {
              return tn
            },
            getEndpoint: function () {
              return kt || Wt || ''
            },
            getJsErrorLogsThrottledCount: function () {
              return Qt
            },
            getLogQueueSize: function () {
              return jt.length
            },
            getNoKeyErrorCount: function () {
              return $t
            },
            getThrottledLogsCount: function () {
              return Yt
            },
            getTotalCustomerReadyLogsCount: function () {
              return nn
            },
            getTotalJsErrorLogsCount: function () {
              return en
            },
            getTotalLogsCount: function () {
              return Zt
            },
            imgArgsString: function (e, t) {
              return yn(e, t, function () {
                for (
                  var e = '', t = arguments.length, n = new Array(t), r = 0;
                  r < t;
                  r++
                )
                  n[r] = arguments[r]
                for (var o = 0, i = n; o < i.length; o++) {
                  var a = i[o]
                  null != a && (e += a.toString())
                }
                return e
              })
            },
            imgArgsStringLen: mn,
            incCustomerReadyLogsThrottledCount: function () {
              tn++
            },
            incTotalCustomerReadyLogsCount: function () {
              nn++
            },
            onEnqueue: function (e) {
              zt = e
            },
            prequeue: function (e, t, n, r) {
              var o = jt.length
              wn(e, t, n, r), jt.length > o && jt.unshift(jt.pop())
            },
          }
        wn('clogPing', 1, Gt),
          (function () {
            try {
              var e = (function (e) {
                  if (
                    /([a-z]*)-([a-z]*)-(\d).(console|awsc-integ|awsc-preprod).aws.amazon.com/.test(
                      e,
                    )
                  ) {
                    var t = e.match(/(console|awsc-integ|awsc-preprod)/g)
                    return t && 'console' === t[0] ? 'Prod' : 'NonProd'
                  }
                })(window.location.hostname),
                t = 'us-east-1'
              try {
                t = je('awsc-mezz-region').getAttribute('content')
              } catch (e) {
                t = 'us-east-1'
              }
              if (!e || 'Prod' !== e || sn.has(t)) return
              var n = It('aws-userInfo') || '',
                r = It('aws-userInfo-signed') || '',
                o = Be(),
                i = je('awsc-mezz-service').getAttribute('content'),
                a = It('metrics-req-cat'),
                u = window.location.href,
                s = It('aws-vid') || ''
              if (!i) return
              var c = {
                  consoleRegion: t,
                  domain: e,
                  eventType: 'clogLoad',
                  eventContext: 'clog',
                  eventDetail: '',
                  eventValue: '1',
                  eventSource: 'panorama',
                  modality: 'web',
                  pageUrlPath: u,
                  requestUri: u,
                  requestId: Be(),
                  service: i,
                  tabId: Gt,
                  timestamp: Date.now(),
                },
                l = {
                  appEntity: 'aws-console',
                  awsUserInfo: n,
                  awsUserInfoSigned: r,
                  visitorInfo: s,
                  consoleRegion: t,
                  consoleService: i,
                  batchRequestId: o,
                  batchRequest: [c],
                },
                f = new XMLHttpRequest()
              f.open('POST', '/panoramaroute', !0),
                f.setRequestHeader(
                  'Content-Type',
                  'application/json; charset=UTF-8',
                ),
                a && f.setRequestHeader('metrics-req-cat', 'canary'),
                f.send(JSON.stringify(l))
            } catch (e) {
              wn('panoClogLoadError', 1), console.error(e)
            }
          })(),
          (window.onerror = function (e, t, n) {
            _n(e, t, n)
            var r,
              o = Mt(Ft)
            try {
              for (o.s(); !(r = o.n()).done; ) {
                ;(0, r.value)(e, t, n)
              }
            } catch (e) {
              o.e(e)
            } finally {
              o.f()
            }
            return !1
          }),
          (window.error = function (e) {
            var t
            ;(t = e).message ? Sn(1, t.message) : Sn(1, t.toString())
            var n,
              r = Mt(Bt)
            try {
              for (r.s(); !(n = r.n()).done; ) {
                ;(0, n.value)(e)
              }
            } catch (e) {
              r.e(e)
            } finally {
              r.f()
            }
            return !1
          }),
          (window.onbeforeunload = function (e) {
            var t, n, r
            zt(!0)
            var o,
              i = Mt(Ut)
            try {
              for (i.s(); !(o = i.n()).done; ) {
                ;(t = (0, o.value)(e)),
                  (n =
                    'string' == typeof e.returnValue && '' !== e.returnValue
                      ? e.returnValue
                      : void 0),
                  void 0 === t && n && (t = n),
                  void 0 !== t && (r = t)
              }
            } catch (e) {
              i.e(e)
            } finally {
              i.f()
            }
            return void 0 !== r && (e.returnValue = r), r
          }),
          (window.onerror.sbh = !0),
          (window.error.sbh = !0),
          (window.onbeforeunload.sbh = !0),
          window.addEventListener('onPanoramaLoad', function (e) {
            on = !(!e.detail || !e.detail.enabled)
          }),
          window.addEventListener('onClogPluginLoad', function (e) {
            e.detail && e.detail.enabled && (an = !0)
          }),
          window.AWSConsoleMetrics &&
            window.AWSConsoleMetrics.pageId &&
            hn(window.AWSConsoleMetrics.pageId)
        var An = document.getElementById('awsc-alternate-host')
        An && pn('https://' + An.textContent)
        var On = {
          addErrorHandler: function (e) {
            Bt.push(e)
          },
          addOnBeforeUnloadHandler: function (e) {
            Ut.push(e)
          },
          addOnErrorHandler: function (e) {
            Ft.push(e)
          },
          log: wn,
          maxMessageSize: dn,
          setDefaultEndpoint: function (e) {
            Wt = e
          },
          setEndpointOverride: pn,
          setPageId: hn,
          resetProxyRID: function () {
            Vt = null
          },
          statusCodes: ln,
          system: En,
          bufferedQueue: Ht,
          tabId: Gt,
        }
        ;(window.AWSCLog = On),
          window.AWSC ? (window.AWSC.Clog = On) : (window.AWSC = { Clog: On })
        var Cn,
          Tn = On,
          Rn = window.ConsoleNavService.Location.getLocation,
          Pn = (window.ConsoleNavService.Location, window.AWSC.Clog),
          In =
            (Pn.addErrorHandler,
            Pn.addOnBeforeUnloadHandler,
            Pn.addOnErrorHandler,
            Pn.log),
          xn = Pn.maxMessageSize,
          Ln =
            (Pn.setDefaultEndpoint,
            Pn.setEndpointOverride,
            Pn.setPageId,
            Pn.statusCodes),
          Mn = Pn.system,
          Nn = (Pn.resetProxyRID, Mn.curItem),
          kn = Mn.imgArgsStringLen,
          Dn = Mn.imgArgsString,
          jn = Mn.dequeue,
          Fn = Mn.getEndpoint,
          Bn = Mn.extractProxyRequestID,
          Un = Mn.prequeue,
          Hn = Mn.onEnqueue,
          Gn = Mn.clearLogQueue,
          zn = Mn.getThrottledLogsCount,
          Wn = Mn.getTotalLogsCount,
          qn = Mn.getLogQueueSize,
          Vn = Mn.getNoKeyErrorCount,
          Jn = Mn.getJsErrorLogsThrottledCount,
          Kn = Mn.getTotalJsErrorLogsCount,
          Xn = Mn.getTotalCustomerReadyLogsCount,
          Yn = Mn.getCustomerReadyLogsThrottledCount,
          Zn =
            '/p/log/1/' +
            encodeURIComponent(Rn().pathname.split('/')[1]) +
            '/1/OP/',
          $n = 0,
          Qn = 0,
          er = !0,
          tr = !1,
          nr = !1,
          rr = !1,
          or = function () {
            for (
              var e, t = '', n = '', r = 0, o = 0, i = Zn.length, a = 0;
              Nn() && i < 1900 && a < xn();

            )
              if (((e = Nn()), Zn.length + kn(e, r) > 1900)) {
                if (!((a += kn(e, o)) <= xn())) break
                ;(n += Dn(jn(), o)), (o += 1)
              } else {
                if (!((i += kn(e, r)) < 1900)) break
                ;(t += Dn(jn(), r)), (r += 1)
              }
            t && ir(Zn + t),
              n && ar(Zn, n),
              window.clearTimeout(Cn),
              (Cn = setTimeout(ur, 2e3))
          },
          ir = function (e) {
            var t = encodeURI(Fn() + e + '&cb=' + Date.now() + sr())
            er && (new window.Image().src = t)
            ;($n = Date.now()), (Qn += 1)
          },
          ar = function (e, t) {
            if (((e = Fn() + e), (t += sr()), er))
              try {
                var n = new XMLHttpRequest()
                n.open('POST', e, !0),
                  (n.withCredentials = !0),
                  n.setRequestHeader('Content-Type', 'text/plain'),
                  n.send(encodeURI(t))
              } catch (e) {}
            ;($n = Date.now()), (Qn += 1)
          }
        function ur(e) {
          if (rr) return !0
          if (
            ((rr = !0),
            !(
              nr ||
              (window.onerror.sbh &&
                window.error.sbh &&
                window.onbeforeunload.sbh)
            ))
          ) {
            var t = 'Event handlers modified:'
            window.onerror.sbh || (t += 'onerror '),
              window.error.sbh || (t += 'error '),
              window.onbeforeunload.sbh || (t += 'onbeforeunload '),
              Un('clogWarn', 1, t),
              (nr = !0)
          }
          if (Nn()) {
            var n = Date.now()
            Qn > 20
              ? (tr || (ir(Zn + '&k1=clogMaxCalls&m1=1'), (tr = !0)),
                (Cn = setTimeout(ur, 2e3)))
              : $n < n - 2e3 || !0 === e
              ? or()
              : (Cn = setTimeout(ur, 2e3))
          }
          return (rr = !1), !0
        }
        var sr = function () {
          var e = Bn(),
            t = ''
          return e && (t = '&proxy-rid=' + e), t
        }
        setInterval(function () {
          Qn >= 1 && (Qn -= 1)
        }, 1e4),
          window.addEventListener(
            'load',
            function () {
              ur() && (Hn(ur), Nn() && ur(!0))
            },
            !1,
          ),
          window.addEventListener(
            'beforeunload',
            function () {
              if (
                ke(window, 'AWSC', 'Clog') &&
                !1 === ke(window, 'AWSC', 'Clog', 'unloaded')
              )
                window.AWSC.Clog.unloaded = !1
              else {
                for (var e = 0; e < 3; e++) Nn() && or()
                !(function () {
                  Gn()
                  var e = ke(window, 'AWSC', 'Clog', 'bufferedQueue')
                      ? window.AWSC.Clog.bufferedQueue.length
                      : 0,
                    t = ke(window, 'AWSC', 'Clog', 'totalDedupes')
                      ? window.AWSC.Clog.totalDedupes
                      : 0,
                    n = ke(window, 'AWSC', 'Clog', 'numPanoramaRequests')
                      ? window.AWSC.Clog.numPanoramaRequests
                      : 0
                  if (
                    ke(
                      window,
                      'panorama',
                      'q',
                      'trackerDictionary',
                      'cf',
                      'getTrackerStats',
                    ) &&
                    'function' ==
                      typeof window.panorama.q.trackerDictionary.cf
                        .getTrackerStats
                  ) {
                    var r = window.panorama.q.trackerDictionary.cf.getTrackerStats(),
                      o = r.numClogCaptured,
                      i = r.numClogSeen,
                      a = r.numClogThrottled,
                      u = r.retries
                    ;(o = o ? o + e + 15 : 0),
                      (a = a || 0),
                      (u = u || 0),
                      Un('numClogSeen', (i = i ? i + e + 15 : 0)),
                      Un('numClogThrottled', a),
                      Un('numClogCaptured', o),
                      Un('numPanoramaRetries', u),
                      Un('numInClogBuffer', e + 15),
                      Un('numPanoramaRequests', n)
                  }
                  Un('totalDedupes', t),
                    Un('throttledLogsCount', zn()),
                    Un('unFlushedLogsCount', qn()),
                    Un('noKeyErrorCount', Vn()),
                    Un('jsErrorLogsThrottledCount', Jn()),
                    Un('totalJsErrorLogsCount', Kn()),
                    Un('totalCustomerReadyLogsCount', Xn()),
                    Un('customerReadyLogsThrottledCount', Yn()),
                    Un('totalLogsCount', Wn()),
                    or()
                })(),
                  (window.AWSC.Clog.unloaded = !0)
              }
            },
            !1,
          )
        var cr = window.AWSC.Clog,
          lr = function () {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
              t[n] = arguments[n]
            xe('beforexhropen', t)
          },
          fr = function () {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
              t[n] = arguments[n]
            xe('afterxhrdone', t)
          },
          dr = function () {
            Re('beforexhropen'), Re('afterxhrdone')
          },
          pr = function () {
            var e = window.XMLHttpRequest.prototype
            e &&
              (e.extendxhr ||
                ((e.extendxhr = !0),
                (e.callAfterDone = function () {
                  4 === this.readyState && fr(this)
                }),
                (e.originalOpen = e.open),
                (e.open = function () {
                  var t = this,
                    n = Array.prototype.slice.apply(arguments)
                  ;(t.urlcalled = n[1]),
                    lr(t),
                    t.addEventListener
                      ? t.addEventListener(
                          'readystatechange',
                          e.callAfterDone,
                          !1,
                        )
                      : window.attachEvent &&
                        ((t.oldOnreadystatechange = t.onreadystatechange),
                        (t.onreadystatechange = function () {
                          t.oldOnreadystatechange &&
                            t.oldOnreadystatechange.apply(t, n),
                            t.callAfterDone()
                        })),
                    e.originalOpen.apply(t, n)
                })))
          }
        pr()
        var hr = {
            addBeforeXhrOpenListener: function (e) {
              Ie('beforexhropen', e)
            },
            addAfterXhrDoneListener: function (e) {
              Ie('afterxhrdone', e)
            },
            fireBeforeXhrOpen: lr,
            fireAfterXhrDone: fr,
            resetXhrListeners: dr,
            init: pr,
          },
          vr = 0,
          gr = function (e) {
            e.startTime = new Date().getTime()
          },
          yr = function (e) {
            if (e.urlcalled && e.urlcalled.indexOf('panoramaroute') < 0) {
              var t = new Date().getTime() - e.startTime
              cr.log({ key: 'ajaxStatus' + e.status, value: t, unit: 'ms' })
            } else
              vr++,
                ke(window, 'AWSC', 'Clog') &&
                  (window.AWSC.Clog.numPanoramaRequests = vr)
          },
          mr = window.performance
            ? window.performance.timing
            : { navigationStart: Date.now(), responseStart: Date.now() },
          wr = { clickTime: mr.navigationStart, startTime: mr.responseStart },
          br = {},
          Sr = {},
          _r = {},
          Er = {},
          Ar = wr.startTime,
          Or = wr.clickTime,
          Cr = 0,
          Tr = 0,
          Rr = 0,
          Pr = !1,
          Ir = !1,
          xr = !0,
          Lr = function (e, t, n) {
            var r = cr.log(t, n, '', '', 'ms', e)
            'customerReady' === t &&
              (Mn.incTotalCustomerReadyLogsCount(),
              !r ||
                (r.status !== Ln.CLOG_ERROR_MESSAGE_TOO_LARGE &&
                  r.status !== Ln.CLOG_ERROR_MESSAGE_THROTTLED) ||
                Mn.incCustomerReadyLogsThrottledCount())
          },
          Mr = function (e, t) {
            Lr('pageload', e, t - wr.startTime)
          },
          Nr = function (e, t) {
            0 !== wr.clickTime && Lr('pageload', e, t - wr.clickTime)
          },
          kr = function (e, t) {
            Lr('custom', e, t)
          },
          Dr = function (e) {
            if (Object.prototype.hasOwnProperty.call(Sr, e)) {
              for (var t in Sr[e]) if (!1 === Sr[e][t]) return !1
              return !0
            }
          },
          jr = function (e) {
            if (!e.urlcalled) return !1
            return /feedback\/custsat\/1\/popquestion/.test(e.urlcalled)
          },
          Fr = function (e) {
            jr(e) || (Tr++, xr && ((xr = !1), Mr('pageReady', Date.now())))
          },
          Br = function (e) {
            0 !== Tr ||
              e !== Rr ||
              Pr ||
              (Lr('pageload', 'loadFinished', Rr - wr.startTime),
              (function () {
                for (var e in mr)
                  if (Object.prototype.hasOwnProperty.call(mr, e)) {
                    var t = mr[e] - mr.navigationStart
                    cr.log(e, t, '', '', 'ms')
                  }
              })(),
              (Pr = !0))
          },
          Ur = function (e) {
            if (!jr(e) && 0 === --Tr) {
              var t = Date.now()
              ;(Rr = t),
                setTimeout(function () {
                  Br(t)
                }, 100)
            }
          },
          Hr = function (e) {
            br[e] = Date.now()
          },
          Gr = function (e) {
            var t = br[e]
            t && (delete br[e], kr(e, Date.now() - t))
          },
          zr = function () {
            Hr('pageTransition'), Hr('customerReadyPageTransition')
          },
          Wr = function (e) {
            var t = Date.now()
            if (e && Sr)
              for (var n in Sr)
                Object.prototype.hasOwnProperty.call(Sr[n], e) &&
                  !1 === Sr[n][e] &&
                  ((Sr[n][e] = !0),
                  Dr(n) &&
                    (Er[n] ? Nr(n, t) : Mr(n, t),
                    'customerReady' === n && (Ir = !0),
                    delete Sr[n],
                    delete Er[n]))
          },
          qr = function (e) {
            if ('object' !== Rt()(e)) throw new Error('Invalid argument.')
            if (!Object.prototype.hasOwnProperty.call(e, 'metricName'))
              throw new Error('Must have a metricName in the argument object')
            var t = e.metricName
            if (
              !Object.prototype.hasOwnProperty.call(e, 'events') ||
              e.events.length < 1
            )
              throw new Error(
                'setMetricEvents requires at least one event in "events" array',
              )
            var n = e.events
            if (t in _r)
              throw new Error(
                t + ' events may not be set more than once per page load',
              )
            if (((Er[t] = !1), 'click' === e.startTime)) {
              if (0 === wr.clickTime) return void delete Er[t]
              Er[t] = !0
            }
            ;(_r[t] = !0), (Sr[t] = {})
            for (var r = 0; r < n.length; r++) Sr[t][n[r]] = !1
          },
          Vr = {
            customerReady: function (e) {
              if (e) Wr(e)
              else if (Ir)
                Gr('pageTransition'), Gr('customerReadyPageTransition')
              else {
                Ir = !0
                var t = Date.now()
                Mr('customerReady', t),
                  Mr('customerReadyPageTransition', t),
                  Nr('clickToCustomerReady', t)
              }
            },
            discardTimer: function (e) {
              delete br[e]
            },
            hasPageTransition: !0,
            initialLoadFlag: !1,
            isInitialLoadPending: !1,
            metricEvent: Wr,
            setCustomerReadyEvents: function (e) {
              qr({ metricName: 'customerReady', events: e }),
                qr({
                  metricName: 'clickToCustomerReady',
                  startTime: 'click',
                  events: e,
                })
            },
            setMetricEvents: qr,
            stop: Gr,
            submitCustomTimer: function (e, t) {
              'string' == typeof t && (t = parseInt(t, 10)), kr(e, t)
            },
            start: Hr,
          },
          Jr = function () {
            dr(),
              (Cr = 0),
              (Tr = 0),
              (Rr = 0),
              (Pr = !1),
              (Ir = !1),
              (xr = !0),
              (!wr.startTime || wr.startTime < 14068764e5) &&
                ((wr.startTime = Date.now()), (wr.clickTime = 0), (Cr = 1)),
              ke(window, 'AWSC', 'Clog') &&
                !1 === ke(window, 'AWSC', 'Clog', 'loaded') &&
                (cr.log('fst', Cr),
                Mr('initialLoad', Date.now()),
                (window.AWSC.Clog.loaded = !0)),
              hr.addBeforeXhrOpenListener(Fr),
              hr.addAfterXhrDoneListener(Ur),
              cr &&
                hr &&
                (hr.addBeforeXhrOpenListener(gr),
                hr.addAfterXhrDoneListener(yr)),
              window.addEventListener('hashchange', zr),
              (window.metricsTimer = Vr)
          }
        Jr(),
          window.AWSC
            ? ((window.AWSC.Timer = Vr),
              (window.AWSC.clickTime = Or),
              (window.AWSC.startTime = Ar))
            : (window.AWSC = { Timer: Vr, clickTime: Or, startTime: Ar })
        var Kr = n(34575),
          Xr = n.n(Kr),
          Yr = window.AWSC.Timer,
          Zr =
            (Yr.customerReady,
            Yr.discardTimer,
            Yr.hasPageTransition,
            Yr.initialLoadFlag,
            Yr.isInitialLoadPending,
            Yr.metricEvent,
            Yr.setCustomerReadyEvents,
            Yr.setMetricEvents,
            Yr.stop),
          $r = (Yr.submitCustomTimer, Yr.start),
          Qr = window.AWSC,
          eo = (Qr.clickTime, Qr.startTime, window.AWSC.Timer)
        Jr()
        var to,
          no,
          ro,
          oo = function () {},
          io = 6e4,
          ao = document.getElementById('awsc-auth-test-timeout')
        null != ao && (io = parseInt(ao.innerHTML, 10))
        var uo = {
            getMbtc: function () {
              return ro
            },
            loadScript: function (e, t) {
              var n = document.createElement('script')
              ;(n.src = e),
                (n.type = 'text/javascript'),
                t && n.addEventListener('error', t),
                document.body.appendChild(n)
            },
            initPlatformAuth: function (e) {
              ;(to = e.location),
                (ro = (function (e) {
                  var t = 1,
                    n = 0
                  if (!e) return 0
                  for (var r = 0; r < e.length; ++r)
                    n = (n + (t = (t + e.charCodeAt(r)) % 65521)) % 65521
                  return (n << 15) | t
                })(e.userInfo)),
                (no = e.phdAuthDomain)
            },
            addAuthReadyCallback: function (e, t) {
              fo(t).push(e)
            },
            addAuthErrorCallback: function (e, t) {
              fo(t).pushError(e)
            },
            onAuth: function (e) {
              fo(e).receiveAuthSignal()
            },
          },
          so = function (e) {
            return (
              !(!window.AWSC || 'boolean' != typeof window.AWSC[e]) &&
              window.AWSC[e]
            )
          },
          co = function e(t) {
            Xr()(this, e),
              L()(this, 'push', void 0),
              L()(this, 'pushError', void 0),
              L()(this, 'receiveAuthSignal', void 0),
              L()(this, 'resetAuthStateSignal', void 0)
            var n,
              r,
              o,
              i,
              a,
              u,
              s = t.authPath,
              c = t.signalFlagName,
              l = t.clientMetricsTimerName,
              f = t.timeout,
              d = t.domainCallback,
              p = [],
              h = [],
              v = !1,
              g = function (e) {
                p.push(e)
              },
              y = function (e) {
                h.push(e)
              },
              m = function (e) {
                setTimeout(e, 0)
              },
              w = function () {
                if (to) {
                  eo.start(l)
                  var e = d ? d() : to.host
                  uo.loadScript('https://' + e + s + '?state=hashArgs', u),
                    (i = oo)
                }
                f &&
                  !n &&
                  (n = setTimeout(function () {
                    return u()
                  }, f))
              },
              b = function () {
                v ? ((r = oo), (o = m)) : ((r = m), (o = oo)),
                  (i = oo),
                  (a = oo),
                  (u = oo),
                  (p.length = 0),
                  (h.length = 0)
              },
              S = function () {
                eo.stop(l),
                  clearTimeout(n),
                  (function () {
                    for (var e = 0; e < p.length; e++) setTimeout(p[e], 0)
                  })(),
                  b()
              },
              _ = function () {
                ;(v = !0),
                  (function () {
                    if (h.length)
                      for (var e = 0; e < h.length; e++) setTimeout(h[e], 0)
                  })(),
                  b()
              },
              E = function () {
                ;(r = g),
                  (o = y),
                  (i = w),
                  (a = S),
                  (u = _),
                  (p.length = 0),
                  (h.length = 0)
              },
              A = function () {
                so(c) && b()
              }
            ;(this.push = function (e) {
              A(), r(e), i()
            }),
              (this.pushError = function (e) {
                A(), o(e)
              }),
              (this.receiveAuthSignal = function () {
                a()
              }),
              (this.resetAuthStateSignal = function () {
                E()
              }),
              so(c) ? b() : E()
          },
          lo = {
            p: new co({
              authPath: '/p/auth',
              signalFlagName: 'auth',
              clientMetricsTimerName: 'awsc-p-auth',
              timeout: io,
            }),
            phd: new co({
              authPath: '/phd/auth',
              signalFlagName: 'phd_auth',
              clientMetricsTimerName: 'awsc-phd-auth',
              timeout: 2e4,
              domainCallback: function () {
                return no
              },
            }),
          },
          fo = function (e) {
            return e || (e = 'p'), lo[e]
          },
          po = uo.onAuth
        window.AWSC
          ? ((window.AWSC.Auth = uo), (window.AWSC.onAuth = po))
          : (window.AWSC = { Auth: uo, onAuth: po })
        var ho = !1,
          vo = {
            configure: function (e) {
              ho = e.debug || !1
            },
            record: function (e, t, n) {
              var r = { key: e, value: 1, pageId: t, category: 'biz' }
              void 0 !== n && (r.detail = JSON.stringify(n)),
                ho && console.log('Calling log with ', r),
                Tn.log(r)
            },
          },
          go = vo,
          yo = /([^a-zA-Z0-9_]+)/g,
          mo = !1,
          wo = function (e) {
            return e.replace(yo, '')
          },
          bo = {
            configure: function (e) {
              ;(mo = e.debug || !1), go.configure({ debug: mo })
            },
            trackView: function (e) {
              bo.trackEvent('view', e)
            },
            trackClick: function (e) {
              bo.trackEvent('click', e)
            },
            trackEvent: function (e, t) {
              var n = wo(t.id),
                r = wo(t.context)
              go.record(e + '_' + n, r, t.metaData)
            },
          }
        window.AWSC
          ? (window.AWSC.Analytics = bo)
          : (window.AWSC = { Analytics: bo })
        var So,
          _o = n(87757),
          Eo = n.n(_o),
          Ao = (n(35666), n(48926)),
          Oo = n.n(Ao),
          Co = (n(21249), window.AWSC.NavUrl),
          To =
            (Co.init,
            Co.decomposeLocation,
            Co.newUrlInfo,
            Co.valueOf,
            Co.xssEscape,
            Co.recomposeUrl,
            Co.recomposeUrlDomain,
            Co.updateRequestParamsWithRegion,
            Co.updateDomainWithRegion,
            Co.getUrlInfo,
            Co.getServiceDomain,
            Co.getServiceLinkHref),
          Ro = (Co.getRegionLinkHref, Co.getRegionlessDomain),
          Po = Co.getRegionInDomain,
          Io =
            (Co.getAbsoluteUrl,
            window.AWSC.NavUrl,
            function (e, t, n, r, o, i) {
              var a = new Date()
              a.setTime(a.getTime()), n && (n = 1e3 * n * 60 * 60 * 24)
              var u = new Date(a.getTime() + n)
              document.cookie =
                e +
                '=' +
                escape(t) +
                (n ? ';expires=' + u.toUTCString() : '') +
                (r ? ';path=' + r : '') +
                (o ? ';domain=' + o : '') +
                (i ? ';secure' : '')
            }),
          xo = function () {
            return '.' + Ro()
          },
          Lo = function (e, t) {
            switch (t) {
              case 'left':
                for (; ' ' === e.substring(0, 1); ) e = e.substring(1)
                break
              case 'right':
                for (; ' ' === e.substring(e.length - 1); )
                  e = e.substring(0, e.length - 1)
            }
            return e
          },
          Mo = function (e) {
            return Lo(e, 'left')
          },
          No = function (e) {
            return Lo(e, 'right')
          },
          ko = {
            setCookie: Io,
            getCookie: It,
            getNavCookieDomain: xo,
            setNavCookie: function (e, t, n) {
              Io(e, t, (n = n || 360), '/', xo(), !0)
            },
            forceReload: function () {
              window.location.reload(!0)
            },
            string: {
              trimLeft: Mo,
              trimRight: No,
              trimDirection: Lo,
              trim: function (e) {
                return Mo(No(e))
              },
              wrapWordsOnBoundaries: function (e, t) {
                if ('string' != typeof e || 'string' != typeof t || '' === t)
                  return e || ''
                var n = [],
                  r = new RegExp(t)
                if (!r.exec(e)) return e
                for (var o = e; o; ) {
                  var i = r.exec(o)
                  if (null === i) break
                  var a = o.substring(0, i.index),
                    u = i[0]
                  n.push({ word: No(a), boundary: No(u) }),
                    (o = o.substring(i.index + u.length))
                }
                return (
                  o.length > 0 && n.push({ word: o, boundary: '' }),
                  n
                    .filter(function (e) {
                      return e.word.length + e.boundary.length > 0
                    })
                    .map(function (e) {
                      return (
                        '<span class="word">' +
                        (e.word + (e.boundary ? e.boundary : '')) +
                        '</span>'
                      )
                    })
                    .join(' ')
                )
              },
            },
          },
          Do = {
            checkWhitelist: function (e, t) {
              var n = t.whitelist || [],
                r = t.blacklist || [],
                o = !0
              return (
                n.length > 0 && (o = n.indexOf(e) > -1),
                r.indexOf(e) > -1 && (o = !1),
                o
              )
            },
          },
          jo =
            'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
          Fo = function (e) {
            e = e.replace(/\r\n/g, '\n')
            for (var t = '', n = 0; n < e.length; n++) {
              var r = e.charCodeAt(n)
              r < 128
                ? (t += String.fromCharCode(r))
                : r > 127 && r < 2048
                ? ((t += String.fromCharCode((r >> 6) | 192)),
                  (t += String.fromCharCode((63 & r) | 128)))
                : ((t += String.fromCharCode((r >> 12) | 224)),
                  (t += String.fromCharCode(((r >> 6) & 63) | 128)),
                  (t += String.fromCharCode((63 & r) | 128)))
            }
            return t
          },
          Bo = {
            _keyStr: jo,
            encode64: function (e) {
              var t,
                n,
                r,
                o,
                i,
                a,
                u,
                s = '',
                c = 0
              for (e = Fo(e); c < e.length; )
                (o = (t = e.charCodeAt(c++)) >> 2),
                  (i = ((3 & t) << 4) | ((n = e.charCodeAt(c++)) >> 4)),
                  (a = ((15 & n) << 2) | ((r = e.charCodeAt(c++)) >> 6)),
                  (u = 63 & r),
                  isNaN(n) ? (a = u = 64) : isNaN(r) && (u = 64),
                  (s +=
                    jo.charAt(o) + jo.charAt(i) + jo.charAt(a) + jo.charAt(u))
              return s
            },
            _utf8Encode: Fo,
          },
          Uo = function () {
            ko.setCookie('noflush_awscnm', '', -1, '/', '', !1)
          },
          Ho = function () {
            var e, t, n
            if (((e = Lt('noflush_awscnm')) || (e = Lt('awscnm')), e))
              try {
                t = JSON.parse(e)
              } catch (e) {}
            t ||
              ((n = {}),
              L()(n, 'hist', []),
              L()(n, 'sc', []),
              L()(n, 'tm', 'tm-both'),
              L()(n, 'ea', !0),
              L()(n, 'consoleFlags', []),
              (t = n))
            return t
          },
          Go = Ho(),
          zo = function () {
            return Go || Ho()
          },
          Wo = function () {
            var e = JSON.stringify(Go)
            ko.setNavCookie('noflush_awscnm', e)
          },
          qo = {
            cookieName: 'noflush_awscnm',
            oldCookieName: 'awscnm',
            histPrefName: 'hist',
            shortcutPrefName: 'sc',
            toolbarModePrefName: 'tm',
            enableAnimPrefName: 'ea',
            servicesMenuViewPrefName: 'smvp',
            consoleFlagsPrefName: 'consoleFlags',
            favoritesBarOpenPrefName: 'favoritesBarOpen',
            favoritesBarServiceDisplayModePrefName:
              'favoritesBarServiceDisplayMode',
            open: function () {
              Uo(),
                zo(),
                Wo(),
                Lt('awscnm') &&
                  ko.setCookie(
                    'awscnm',
                    '',
                    0,
                    '/',
                    ko.getNavCookieDomain(),
                    !0,
                  )
            },
            _deletePrefsCookieWithRegionalizedDomain: Uo,
            _getUserSettings: zo,
            save: Wo,
            set: function (e, t) {
              ;((Go = zo())[e] = t), Wo()
            },
            get: function (e) {
              return zo()[e]
            },
            userSettings: Go,
          },
          Vo = dt(function (e) {
            if (!e) return {}
            try {
              return JSON.parse(e)
            } catch (e) {
              return {}
            }
          })
        function Jo(e, t) {
          var n = Object.keys(e)
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e)
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
              })),
              n.push.apply(n, r)
          }
          return n
        }
        !(function (e) {
          ;(e.Federated = 'federated'), (e.Iam = 'iam'), (e.Root = 'root')
        })(So || (So = {}))
        var Ko = dt(function (e) {
            if (e && e.arn) {
              if (
                e.arn.match(':federated-user/') ||
                e.arn.match(':assumed-role/')
              )
                return So.Federated
              if (e.arn.match(':user/')) return So.Iam
            }
            return So.Root
          }),
          Xo = function () {
            var e,
              t = ((e = Lt('aws-userInfo')), Vo(e))
            return Ko(t)
          },
          Yo = Xo,
          Zo = function (e, t) {
            t = (function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {}
                t % 2
                  ? Jo(Object(n), !0).forEach(function (t) {
                      L()(e, t, n[t])
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      e,
                      Object.getOwnPropertyDescriptors(n),
                    )
                  : Jo(Object(n)).forEach(function (t) {
                      Object.defineProperty(
                        e,
                        t,
                        Object.getOwnPropertyDescriptor(n, t),
                      )
                    })
              }
              return e
            })(
              {
                extraClass: !1,
                includeDescription: !1,
                setHref: !0,
                iconSize: 'med',
              },
              t,
            )
            var n = To(e),
              r = Ot.Z.sprite,
              o =
                'none' === t.iconSize
                  ? ''
                  : '<span class="service-icon-wrapper"><span class="service-icon service-icon-navbar service-icon-size-' +
                    t.iconSize +
                    ' service-icon-svc-' +
                    e.id +
                    '" style="background-position: ' +
                    r.getServiceIconCssPosition(e.id, t.iconSize) +
                    '">&nbsp;</span><span class="service-icon service-icon-menu service-icon-size-lg service-icon-svc-' +
                    e.id +
                    '" style="background-position: ' +
                    r.getServiceIconCssPosition(e.id, 'lg') +
                    '">&nbsp;</span></span>'
            return (
              '<li data-service-id="' +
              e.id +
              '" data-service-href="' +
              n +
              '" class="service-link service-link-' +
              e.id +
              (t.extraClass ? ' ' + t.extraClass : '') +
              (e.newService ? ' new-service' : '') +
              (e.external_link ? ' awsc-external-service' : '') +
              (e.previewService ? ' preview-service' : '') +
              (e.betaService ? ' beta-service' : '') +
              (e.unlisted ? ' unlisted-service' : '') +
              '"><a' +
              (t.setHref ? ' href="' + n + '"' : '') +
              (e.external_link ? ' target="_blank"' : ' target="_top"') +
              '>' +
              o +
              '<span class="service-label">' +
              e.label +
              '</span>' +
              (t.includeDescription
                ? '<div class="service-desc">' + e.description + '</div>'
                : '') +
              '</a><div class="nav-menu-separator">&nbsp;</div></li>'
            )
          },
          $o = function () {
            document.body.classList.remove('x-panel')
          },
          Qo = function () {
            return qo.get('smvp') && 'az' === qo.get('smvp') ? 'az' : 'group'
          },
          ei = function (e) {
            for (
              var t = 0,
                n = {},
                r = '<ul style="width:20%" class="services-a-z">',
                o = 0;
              o < e.length;
              o++
            )
              for (var i = 0; i < e[o].services.length; i++) {
                var a = e[o].services[i].label.charAt(0).toUpperCase()
                Object.prototype.hasOwnProperty.call(n, a) ||
                  ((n[a] = []), t++),
                  n[a].push(e[o].services[i]),
                  t++
              }
            var u = []
            for (var s in n)
              Object.prototype.hasOwnProperty.call(n, s) &&
                n[s].sort(function (e, t) {
                  var n = e.label.toUpperCase(),
                    r = t.label.toUpperCase()
                  return n < r ? -1 : n > r
                }),
                u.push(s)
            u.sort()
            for (
              var c = Math.round((1.2 * t) / 5), l = c, f = r, d = 0;
              d < u.length;
              d++
            ) {
              l < n[u[d]].length + 1 && ((f += '</ul>'), (f += r), (l = c)),
                (f += '<li class="awsc-header">' + u[d] + '</li>'),
                l--
              for (var p = 0; p < n[u[d]].length; p++)
                (f += Zo(n[u[d]][p], {
                  iconSize: 'none',
                  extraClass: 'service-item',
                })),
                  l--
            }
            return (f += '</ul>')
          },
          ti = function (e) {
            if (!e) return ''
            for (
              var t = 0,
                n = '<ul style="width:25%" class="services-group">',
                r = 0;
              r < e.length;
              r++
            )
              t++, (t += e[r].services.length)
            for (
              var o = Math.round((1.2 * t) / 4), i = o, a = n, u = 0;
              u < e.length;
              u++
            ) {
              i < e[u].services.length + 1 &&
                ((a += '</ul>'), (a += n), (i = o)),
                (a +=
                  '<li class="awsc-header ico-' +
                  e[u].id +
                  '">' +
                  e[u].label +
                  '</li>'),
                i--
              for (var s = 0; s < e[u].services.length; s++)
                (a += Zo(e[u].services[s], {
                  iconSize: 'none',
                  extraClass: 'service-item',
                })),
                  i--
            }
            return (a += '</ul>')
          },
          ni = function (e) {
            document
              .querySelectorAll(
                '#awsgnav #servicesMenuContent .awsc-services-search-filter',
              )
              .forEach(function (e) {
                return e.classList.remove('active')
              }),
              document
                .querySelector(
                  '.awsc-services-search-filter[data-filter-type=' + e + ']',
                )
                .classList.add('active')
            var t =
              'az' === e
                ? ei(Ot.Z.serviceCategories)
                : ti(Ot.Z.serviceCategories)
            document.querySelector(
              '#awsgnav #servicesMenuContent #awsc-services-container',
            ).innerHTML = t
          },
          ri = function () {
            var e = Qo()
            ni(e)
          },
          oi = function (e) {
            qo.set('smvp', e), qo.save()
          },
          ii = function (e) {
            return (
              e || (e = Yo()),
              e === So.Federated ? 'Federated' : e === So.Iam ? 'IAM' : 'Root'
            )
          },
          ai = function (e) {
            var t = Array.from(
                document.querySelectorAll('#awsgnav .exclude-federated a'),
              ),
              n = Array.from(
                document.querySelectorAll(
                  '#awsgnav .nav-shortcut-option.exclude-federated',
                ),
              )
            e || (e = Yo())
            var r = document.querySelector('#user-identity-type')
            r && (r.textContent = '${navservice.account_type_label}' + ii(e)),
              document.body.classList.remove('user-type-root'),
              document.body.classList.remove('user-type-iam'),
              document.body.classList.remove('user-type-federated'),
              document.body.classList.add('user-type-' + e),
              e === So.Federated
                ? (t.forEach(function (e) {
                    e.getAttribute('orig-href') ||
                      e.setAttribute('orig-href', e.href),
                      e.setAttribute('href', '#'),
                      e.setAttribute(
                        'title',
                        '${navservice.this_service_is_currently_unsupported_for_federated_users}',
                      ),
                      e.setAttribute('disabled', 'true'),
                      e.addEventListener(
                        'click.navmenu-disable-federated',
                        function () {
                          return !1
                        },
                      )
                  }),
                  n.forEach(function (e) {
                    return e.classList.add('nav-shortcut-option-disabled')
                  }))
                : (t.forEach(function (e) {
                    var t = e.getAttribute('orig-href')
                    t && e.setAttribute('href', t),
                      e.setAttribute('title', 'false'),
                      e.setAttribute('disabled', 'false'),
                      e.removeEventListener(
                        'click.navmenu-disable-federated',
                        void 0,
                      )
                  }),
                  n.forEach(function (e) {
                    return e.classList.remove('nav-shortcut-option-disabled')
                  }))
          },
          ui = new (function e() {
            var t = this
            Xr()(this, e),
              L()(this, 'userName', ''),
              L()(this, 'setLogoutUrl', function (e) {
                document.querySelector('#aws-console-logout').href = e
              }),
              L()(this, 'setUserName', function (e, n) {
                var r
                ;(r = 'string' == typeof (r = e) ? r : ''),
                  (e = decodeURIComponent(r.trim())
                    .replace(/^federated-user\//, '')
                    .replace(/^assumed-role\//, '')
                    .replace(/&#\d{1,5};/g, function (e) {
                      var t = document.createElement('div')
                      return (t.textContent = e), t.textContent
                    })),
                  n !== So.Root &&
                    n !== So.Iam &&
                    n !== So.Federated &&
                    (n = null),
                  (t.userName = e),
                  (di.userType = n),
                  ai(n)
                var o = document.querySelector(
                  '#nav-usernameMenu .nav-elt-label',
                )
                if (o) {
                  var i = o.querySelector('#nav-usernameMenu .nav-elt-label')
                  ;(i.textContent = e), (i.title = e)
                }
                qo.open()
              }),
              L()(this, 'getUserName', function () {
                return t.userName
              }),
              L()(this, 'renderFooter', function () {})
          })(),
          si = function (e) {
            ;(document.querySelectorAll('meta#awsc-mezz-ui-quantum').length >
              0 ||
              !0 === window.awscMezzUIQuantum ||
              !0 === e) &&
              document.body.classList.add('console-ui-quantum')
          }
        si()
        var ci = { overrides: { quantumOverrides: si } },
          li = {
            MyOrganizationLink: {
              renderMyOrgMenuItem: function () {
                var e = Ot.Z.servicesById && Ot.Z.servicesById.organizations
                return e
                  ? '<a class="awsc-relative-url" data-awsc-service-id="' +
                      e.id +
                      '" id="awsc-organizations-console" href="' +
                      e.url +
                      '" target="_top">${navservice.optional_menu_items.my_organization}</a>'
                  : ''
              },
            },
            ServiceQuotasLink: {
              renderServiceQuotasMenuItem: function () {
                var e = Ot.Z.servicesById && Ot.Z.servicesById.servicequotas
                return e
                  ? '<a class="awsc-relative-url" data-awsc-service-id="' +
                      e.id +
                      '" id="awsc-servicequotas-console" href="' +
                      e.url +
                      '" target="_top">${navservice.optional_menu_items.service_quota_label}</a>'
                  : ''
              },
            },
          },
          fi = {
            _UI: Do,
            B64Encoder: Bo,
            Builder: function () {
              return ui
            },
            BuilderInstance: ui,
            done: !0,
            findUserIdentityType: Xo,
            getLocation: Rn,
            getServicesMenuViewPreference: Qo,
            isPhdConsole: function () {
              return Ot.Z.currentService && 'phd' === Ot.Z.currentService.id
            },
            isResearchTreatment: function () {
              return (
                '1' ===
                document.querySelector('#awsc-research').getAttribute('content')
              )
            },
            isServiceAvailable: M,
            loadColumns: function (e, t, n) {
              if (t && 0 !== t.length) {
                for (
                  var r = 0,
                    o = 0,
                    i = Math.floor(e.length / t.length),
                    a = e.length % t.length,
                    u = '',
                    s = 0;
                  s < e.length;
                  s++
                ) {
                  var c = i + (r < a ? 1 : 0)
                  ;(u += n(e[s])),
                    ++o >= c &&
                      ((document.querySelector(t[r]).innerHTML = u),
                      (u = ''),
                      (o = 0),
                      (r += 1))
                }
                '' !== u && (document.querySelector(t[r]).innerHTML = u)
              }
            },
            loadColumnsAlphabetically: ei,
            loadColumnsCategorically: ti,
            Model: Ot.Z,
            mezz: !1,
            newServiceLinkHtml: Zo,
            Prefs: qo,
            removePanelHacks: $o,
            serializeLocation: function (e) {
              return (
                void 0 === e && (e = Rn()),
                e.protocol + '//' + e.host + e.pathname + e.search + e.hash
              )
            },
            setNavServicesMenuFilter: function () {
              document
                .querySelector('#servicesMenuContent')
                .addEventListener('click', function (e) {
                  e.preventDefault()
                  var t = document
                    .querySelector('.awsc-services-search-filter')
                    .getAttribute('data-filter-type')
                  oi(t), ri()
                })
            },
            setNavServicesMenuSearch: function () {},
            setServiceNavMenuFromPreference: ri,
            setServicesMenuViewPreference: oi,
            setupServiceNavMenu: ni,
            UI: ci,
            updateNavForUserType: ai,
            userIdentityType: Yo,
            userIdentityTypeLabel: ii,
            Username: li,
            userType: Yo(),
            Util: ko,
          }
        !(function () {
          if (
            ((fi.mezz =
              document.querySelectorAll('meta[name="awsc-mezz"]').length > 0),
            fi.mezz)
          )
            fi.removePanelHacks = function () {}
          else {
            var e = Ot.Z.currentService
            e &&
              (document.body.classList.add('x-panel'),
              e.id && document.body.classList.add('console-' + e.id),
              e.group && document.body.classList.add('console-group-' + e.id),
              'gwt' === e.group &&
                document
                  .querySelector('#consoleNavHeader')
                  .previousElementSibling.classList.add(
                    'content-panel__awsgnav',
                  )),
              document.querySelectorAll('#badRegionSection').length && $o()
          }
        })()
        var di = fi,
          pi = function () {
            return (e = window.location.search), new URLSearchParams(e)
            var e
          }
        function hi(e, t) {
          var n
          if ('undefined' == typeof Symbol || null == e[Symbol.iterator]) {
            if (
              Array.isArray(e) ||
              (n = (function (e, t) {
                if (!e) return
                if ('string' == typeof e) return vi(e, t)
                var n = Object.prototype.toString.call(e).slice(8, -1)
                'Object' === n && e.constructor && (n = e.constructor.name)
                if ('Map' === n || 'Set' === n) return Array.from(e)
                if (
                  'Arguments' === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                )
                  return vi(e, t)
              })(e)) ||
              (t && e && 'number' == typeof e.length)
            ) {
              n && (e = n)
              var r = 0,
                o = function () {}
              return {
                s: o,
                n: function () {
                  return r >= e.length
                    ? { done: !0 }
                    : { done: !1, value: e[r++] }
                },
                e: function (e) {
                  throw e
                },
                f: o,
              }
            }
            throw new TypeError(
              'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
            )
          }
          var i,
            a = !0,
            u = !1
          return {
            s: function () {
              n = e[Symbol.iterator]()
            },
            n: function () {
              var e = n.next()
              return (a = e.done), e
            },
            e: function (e) {
              ;(u = !0), (i = e)
            },
            f: function () {
              try {
                a || null == n.return || n.return()
              } finally {
                if (u) throw i
              }
            },
          }
        }
        function vi(e, t) {
          ;(null == t || t > e.length) && (t = e.length)
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]
          return r
        }
        Ot.Z.features
        var gi,
          yi,
          mi,
          wi = function () {
            var e = document.head.querySelector(
                'meta[name="'.concat('awsc-console-supported-locales', '"]'),
              ),
              t = e ? e.getAttribute('content') : '{"consoleLanguages": []}'
            return JSON.parse(t)
          },
          bi = wi(),
          Si = function (e) {
            return (
              {
                en_UK: 'en-GB',
                pt_BR: 'pt-BR',
                zh_CN: 'zh-CN',
                zh_TW: 'zh-TW',
                in: 'id',
              }[e.localeId] || e.localeId
            )
          },
          _i = function () {
            var e,
              t = {},
              n = hi(bi.consoleLanguages)
            try {
              for (n.s(); !(e = n.n()).done; ) {
                var r = e.value
                t[Si(r)] = r.localeDisplayName
              }
            } catch (e) {
              n.e(e)
            } finally {
              n.f()
            }
            return t
          },
          Ei = _i(),
          Ai = function (e) {
            return Ei[e]
          },
          Oi = function () {
            var e,
              t = ((e = 'locale'), pi().get(e))
            if (t && Ai(t)) return t
            var n = It('noflush_locale')
            if (n && Ai(n)) return n
            var r = document.getElementById('awsc-mezz-locale')
            if (r) {
              var o = r.getAttribute('content')
              if (o && Ai(o)) return o
            }
            return 'en'
          },
          Ci = function () {
            return gi || (gi = Oi()), gi
          },
          Ti = function (e) {
            return void 0 === e ? (e = '') : e
          },
          Ri = function (e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : window.fetch,
              n = 'https://console.aws.amazon.com/aperture/feedback/submit',
              r = n
            if (t)
              return t(r, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: It('aws-userInfo-signed'),
                },
                body: JSON.stringify(e),
                keepalive: !0,
              })
          },
          Pi = (function () {
            var e = Oo()(
              Eo().mark(function e(t) {
                var n
                return Eo().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (o = void 0),
                          (i = void 0),
                          (a = void 0),
                          (u = void 0),
                          (s = void 0),
                          (c = void 0),
                          (l = void 0),
                          (o = Ti(null == (r = t) ? void 0 : r.feedbackId)),
                          (i = Ti(null == r ? void 0 : r.feedback)),
                          (a = Ti(null == r ? void 0 : r.location)),
                          (u = Ti(null == r ? void 0 : r.rating)),
                          (s = Ti(null == r ? void 0 : r.topic)),
                          (c = Ti(null == r ? void 0 : r.subject)),
                          (l = Ti(null == r ? void 0 : r.simFolderId)),
                          (n = {
                            customerResponses: [
                              {
                                question: 'Type',
                                pii: !1,
                                response: {
                                  responseType: 'select',
                                  responseValue: s,
                                },
                              },
                              {
                                question: 'Enter your message below',
                                pii: !1,
                                response: {
                                  responseType: 'textArea',
                                  responseValue: i,
                                },
                              },
                              {
                                question:
                                  'Are you satisfied with your experience?',
                                pii: !1,
                                response: {
                                  responseType: 'radio',
                                  responseValue: u,
                                },
                              },
                            ],
                            legacyFeedbackId: o,
                            legacyFeedbackSimFolderId:
                              null == l ? '' : ''.concat(l),
                            locale: Ii(Ci()),
                            location: a,
                            reference: c,
                            category: 'LegacyFeedback',
                            name: 'NavFooterFeedbackForm',
                            version: '1.0.0',
                          }),
                          (e.next = 3),
                          Ri(n)
                        )
                      case 3:
                        return e.abrupt('return', e.sent)
                      case 4:
                      case 'end':
                        return e.stop()
                    }
                  var r, o, i, a, u, s, c, l
                }, e)
              }),
            )
            return function (t) {
              return e.apply(this, arguments)
            }
          })(),
          Ii = function (e) {
            var t = 'en_US',
              n = {
                de: 'de_DE',
                en: 'en_US',
                'en-gb': 'en_GB',
                es: 'es_ES',
                fr: 'fr_FR',
                id: 'id_ID',
                it: 'it_IT',
                ja: 'ja_JP',
                ko: 'ko_KR',
                'pt-BR': 'pt_BR',
                'zh-CN': 'zh_CN',
                'zh-TW': 'zh_TW',
              }
            for (var r in n) r === e && (t = n[r])
            return t
          },
          xi = {
            POSITIVE: 'positive',
            NEGATIVE: 'negative',
            NEUTRAL: 'neutral',
          },
          Li = {
            GENERAL_FEEDBACK: 'General feedback',
            FEATURE_REQUEST: 'Feature request',
            REPORT_AN_ISSUE: 'Report an issue',
            CONTACT_SUPPORT: 'Support/Account/Billing',
            UI_FEEDBACK: 'UI feedback',
          },
          Mi = function () {
            return yi
          },
          Ni = function (e) {
            return e !== xi.POSITIVE && e !== xi.NEGATIVE && (e = xi.NEUTRAL), e
          },
          ki = function (e) {
            var t = e.toUpperCase().replace(/ /g, '_')
            return Li[t] ? e : Li.GENERAL_FEEDBACK
          },
          Di = function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : '',
              t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : '',
              n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : '',
              r =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : '',
              o =
                arguments.length > 4 && void 0 !== arguments[4]
                  ? arguments[4]
                  : '',
              i =
                arguments.length > 5 && void 0 !== arguments[5]
                  ? arguments[5]
                  : '',
              a =
                arguments.length > 6 && void 0 !== arguments[6]
                  ? arguments[6]
                  : '',
              u =
                arguments.length > 7 && void 0 !== arguments[7]
                  ? arguments[7]
                  : '',
              s = Mi() || '',
              c =
                'https://us-east-1.console.aws.amazon.com/feedback/submit-feedback'
            return (
              u && (u = u.substring(0, 1024)),
              {
                postUrl: c,
                subject: e,
                rating: Ni(n),
                feedback: t,
                location: r,
                simFolderId: s,
                feedbackId: Be(),
                topic: ki(o),
                sourceFormId: i,
                sourceFormVersion: a,
                customData: u,
              }
            )
          },
          ji = {
            setFolder: function (e) {
              yi = e
            },
            getFolder: Mi,
            submitFeedback: function (e, t, n, r, o) {
              var i, a
              if (((a = e), 'object' === Rt()(a))) {
                var u = e
                i = Di(
                  u.subject,
                  u.feedbackValue,
                  u.ratingValue,
                  u.location,
                  u.topic,
                  u.sourceFormId,
                  u.sourceFormVersion,
                  u.customData,
                )
              } else {
                i = Di(e, t, n, r, o)
              }
              return Pi(i), i
            },
            setEndpoint: function (e) {
              mi = e
            },
            getEndpoint: function () {
              return mi
            },
            feedbackRatingValues: xi,
            feedbackTopicValues: Li,
            MAX_CUSTOM_DATA_SIZE: 1024,
          }
        window.AWSC
          ? (window.AWSC.Feedback = ji)
          : (window.AWSC = { Feedback: ji })
        var Fi = window.AWSC.Auth,
          Bi =
            (Fi.addAuthErrorCallback,
            Fi.addAuthReadyCallback,
            Fi.getMbtc,
            Fi.initPlatformAuth),
          Ui = (Fi.onAuth, window.AWSC.Auth)
        Jr()
        var Hi,
          Gi,
          zi,
          Wi = !1,
          qi = function () {},
          Vi = qi,
          Ji = qi,
          Ki = function (e, t, n) {
            Ui.addAuthReadyCallback(function () {
              return (function (e, t, n) {
                !0 !== zi &&
                  ($r('awsc-p-pref'),
                  window
                    .fetch(
                      'https://'.concat(Gi, '/p/pref/1?mbtc=').concat(Hi),
                      {
                        method: 'POST',
                        headers: {
                          'Content-Type': 'application/x-www-form-urlencoded',
                        },
                        body: JSON.stringify({
                          Partition: e.partition,
                          Name: e.name,
                          Value: e.value,
                        }),
                        credentials: 'include',
                      },
                    )
                    .then(function (e) {
                      return e.json()
                    })
                    .then(function (e) {
                      Zr('awsc-p-pref'), t && t(e)
                    })
                    .catch(function () {
                      if ((Zr('awsc-p-pref'), n)) {
                        for (
                          var e = arguments.length, t = new Array(e), r = 0;
                          r < e;
                          r++
                        )
                          t[r] = arguments[r]
                        n.apply(null, t)
                      }
                    }))
              })(e, t, n)
            })
          },
          Xi = function (e, t, n) {
            Ui.addAuthReadyCallback(function () {
              return (function (e, t, n) {
                !0 !== zi &&
                  ($r('awsc-p-pref'),
                  window
                    .fetch(
                      'https://'
                        .concat(Gi, '/p/pref/1/')
                        .concat(e.partition, '/')
                        .concat(e.name, '?mbtc=')
                        .concat(Hi),
                      {
                        method: 'GET',
                        headers: { 'Content-Type': 'application/json' },
                        credentials: 'include',
                      },
                    )
                    .then(function (e) {
                      return e.json()
                    })
                    .then(function (e) {
                      Zr('awsc-p-pref'), t && t(e)
                    })
                    .catch(function () {
                      if ((Zr('awsc-p-pref'), n)) {
                        for (
                          var e = arguments.length, t = new Array(e), r = 0;
                          r < e;
                          r++
                        )
                          t[r] = arguments[r]
                        n.apply(null, t)
                      }
                    }))
              })(e, t, n)
            })
          },
          Yi = {
            initUserPrefs: function (e) {
              ;(Hi = Ui.getMbtc()) && e && e.enabled && e.endpoint
                ? ((Gi = e.endpoint),
                  (Vi = Ki),
                  (Ji = Xi),
                  (zi = e.authonly) || (Wi = !0))
                : ((Vi = qi), (Ji = qi), (Wi = !1))
            },
            getPref: function (e, t, n) {
              Ji(e, t, n)
            },
            setPref: function (e, t, n) {
              Vi(e, t, n)
            },
            isAvailable: function () {
              return Wi
            },
          }
        window.AWSC
          ? (window.AWSC.UserPrefs = Yi)
          : (window.AWSC = { UserPrefs: Yi })
        var Zi = n(85019),
          $i =
            (n(26541),
            n(43371),
            n(319),
            function (e, t) {
              return ($i =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t
                  }) ||
                function (e, t) {
                  for (var n in t)
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                })(e, t)
            })
        function Qi(e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError(
              'Class extends value ' +
                String(t) +
                ' is not a constructor or null',
            )
          function n() {
            this.constructor = e
          }
          $i(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()))
        }
        var ea = function () {
          return (ea =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
              return e
            }).apply(this, arguments)
        }
        function ta(e, t) {
          var n = {}
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              t.indexOf(r) < 0 &&
              (n[r] = e[r])
          if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
            var o = 0
            for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
              t.indexOf(r[o]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
                (n[r[o]] = e[r[o]])
          }
          return n
        }
        function na(e, t, n, r) {
          return new (n || (n = Promise))(function (o, i) {
            function a(e) {
              try {
                s(r.next(e))
              } catch (e) {
                i(e)
              }
            }
            function u(e) {
              try {
                s(r.throw(e))
              } catch (e) {
                i(e)
              }
            }
            function s(e) {
              var t
              e.done
                ? o(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t)
                      })).then(a, u)
            }
            s((r = r.apply(e, t || [])).next())
          })
        }
        function ra(e, t) {
          var n,
            r,
            o,
            i,
            a = {
              label: 0,
              sent: function () {
                if (1 & o[0]) throw o[1]
                return o[1]
              },
              trys: [],
              ops: [],
            }
          return (
            (i = { next: u(0), throw: u(1), return: u(2) }),
            'function' == typeof Symbol &&
              (i[Symbol.iterator] = function () {
                return this
              }),
            i
          )
          function u(i) {
            return function (u) {
              return (function (i) {
                if (n) throw new TypeError('Generator is already executing.')
                for (; a; )
                  try {
                    if (
                      ((n = 1),
                      r &&
                        (o =
                          2 & i[0]
                            ? r.return
                            : i[0]
                            ? r.throw || ((o = r.return) && o.call(r), 0)
                            : r.next) &&
                        !(o = o.call(r, i[1])).done)
                    )
                      return o
                    switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                      case 0:
                      case 1:
                        o = i
                        break
                      case 4:
                        return a.label++, { value: i[1], done: !1 }
                      case 5:
                        a.label++, (r = i[1]), (i = [0])
                        continue
                      case 7:
                        ;(i = a.ops.pop()), a.trys.pop()
                        continue
                      default:
                        if (
                          !((o = a.trys),
                          (o = o.length > 0 && o[o.length - 1]) ||
                            (6 !== i[0] && 2 !== i[0]))
                        ) {
                          a = 0
                          continue
                        }
                        if (
                          3 === i[0] &&
                          (!o || (i[1] > o[0] && i[1] < o[3]))
                        ) {
                          a.label = i[1]
                          break
                        }
                        if (6 === i[0] && a.label < o[1]) {
                          ;(a.label = o[1]), (o = i)
                          break
                        }
                        if (o && a.label < o[2]) {
                          ;(a.label = o[2]), a.ops.push(i)
                          break
                        }
                        o[2] && a.ops.pop(), a.trys.pop()
                        continue
                    }
                    i = t.call(e, a)
                  } catch (e) {
                    ;(i = [6, e]), (r = 0)
                  } finally {
                    n = o = 0
                  }
                if (5 & i[0]) throw i[1]
                return { value: i[0] ? i[1] : void 0, done: !0 }
              })([i, u])
            }
          }
        }
        Object.create
        function oa(e) {
          var t = 'function' == typeof Symbol && Symbol.iterator,
            n = t && e[t],
            r = 0
          if (n) return n.call(e)
          if (e && 'number' == typeof e.length)
            return {
              next: function () {
                return (
                  e && r >= e.length && (e = void 0),
                  { value: e && e[r++], done: !e }
                )
              },
            }
          throw new TypeError(
            t ? 'Object is not iterable.' : 'Symbol.iterator is not defined.',
          )
        }
        function ia(e, t) {
          var n = 'function' == typeof Symbol && e[Symbol.iterator]
          if (!n) return e
          var r,
            o,
            i = n.call(e),
            a = []
          try {
            for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; )
              a.push(r.value)
          } catch (e) {
            o = { error: e }
          } finally {
            try {
              r && !r.done && (n = i.return) && n.call(i)
            } finally {
              if (o) throw o.error
            }
          }
          return a
        }
        function aa(e, t, n) {
          if (n || 2 === arguments.length)
            for (var r, o = 0, i = t.length; o < i; o++)
              (!r && o in t) ||
                (r || (r = Array.prototype.slice.call(t, 0, o)), (r[o] = t[o]))
          return e.concat(r || Array.prototype.slice.call(t))
        }
        Object.create
        var ua,
          sa = '3.0.2',
          ca = n(8579)
        !(function (e) {
          ;(e.ENV = 'env'), (e.CONFIG = 'shared config entry')
        })(ua || (ua = {}))
        var la = function (e) {
            if ('function' == typeof e) return e
            var t = Promise.resolve(e)
            return function () {
              return t
            }
          },
          fa = function (e) {
            var t,
              n = la(e.useDualstackEndpoint),
              r = e.endpoint,
              o = e.useFipsEndpoint,
              i = e.urlParser
            return ea(ea({}, e), {
              tls: null === (t = e.tls) || void 0 === t || t,
              endpoint: r
                ? la('string' == typeof r ? i(r) : r)
                : function () {
                    return (function (e) {
                      return na(void 0, void 0, void 0, function () {
                        var t, n, r, o, i, a, u
                        return ra(this, function (s) {
                          switch (s.label) {
                            case 0:
                              return (
                                (t = e.tls),
                                (n = void 0 === t || t),
                                [4, e.region()]
                              )
                            case 1:
                              if (
                                ((r = s.sent()),
                                !new RegExp(
                                  /^([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9])$/,
                                ).test(r))
                              )
                                throw new Error(
                                  'Invalid region in client config',
                                )
                              return [4, e.useDualstackEndpoint()]
                            case 2:
                              return (o = s.sent()), [4, e.useFipsEndpoint()]
                            case 3:
                              return (
                                (i = s.sent()),
                                [
                                  4,
                                  e.regionInfoProvider(r, {
                                    useDualstackEndpoint: o,
                                    useFipsEndpoint: i,
                                  }),
                                ]
                              )
                            case 4:
                              if (
                                !(a = (null !== (u = s.sent()) && void 0 !== u
                                  ? u
                                  : {}
                                ).hostname)
                              )
                                throw new Error(
                                  'Cannot resolve hostname from client config',
                                )
                              return [
                                2,
                                e.urlParser(
                                  ''
                                    .concat(n ? 'https:' : 'http:', '//')
                                    .concat(a),
                                ),
                              ]
                          }
                        })
                      })
                    })(
                      ea(ea({}, e), {
                        useDualstackEndpoint: n,
                        useFipsEndpoint: o,
                      }),
                    )
                  },
              isCustomEndpoint: !!r,
              useDualstackEndpoint: n,
            })
          },
          da = function (e) {
            return (
              'string' == typeof e &&
              (e.startsWith('fips-') || e.endsWith('-fips'))
            )
          },
          pa = function (e) {
            return da(e)
              ? ['fips-aws-global', 'aws-fips'].includes(e)
                ? 'us-east-1'
                : e.replace(/fips-(dkr-|prod-)?|-fips/, '')
              : e
          },
          ha = function (e, t) {
            var n
            void 0 === e && (e = [])
            var r = t.useFipsEndpoint,
              o = t.useDualstackEndpoint
            return null ===
              (n = e.find(function (e) {
                var t = e.tags
                return r === t.includes('fips') && o === t.includes('dualstack')
              })) || void 0 === n
              ? void 0
              : n.hostname
          },
          va = function (e, t) {
            var n,
              r,
              o,
              i,
              a,
              u,
              s = t.useFipsEndpoint,
              c = void 0 !== s && s,
              l = t.useDualstackEndpoint,
              f = void 0 !== l && l,
              d = t.signingService,
              p = t.regionHash,
              h = t.partitionHash,
              v = (function (e, t) {
                var n,
                  r = t.partitionHash
                return null !==
                  (n = Object.keys(r || {}).find(function (t) {
                    return r[t].regions.includes(e)
                  })) && void 0 !== n
                  ? n
                  : 'aws'
              })(e, { partitionHash: h }),
              g =
                e in p
                  ? e
                  : null !==
                      (r =
                        null === (n = h[v]) || void 0 === n
                          ? void 0
                          : n.endpoint) && void 0 !== r
                  ? r
                  : e,
              y = { useFipsEndpoint: c, useDualstackEndpoint: f },
              m = (function (e, t) {
                var n = t.regionHostname,
                  r = t.partitionHostname
                return n || (r ? r.replace('{region}', e) : void 0)
              })(g, {
                regionHostname: ha(
                  null === (o = p[g]) || void 0 === o ? void 0 : o.variants,
                  y,
                ),
                partitionHostname: ha(
                  null === (i = h[v]) || void 0 === i ? void 0 : i.variants,
                  y,
                ),
              })
            if (void 0 === m)
              throw new Error(
                'Endpoint resolution failed for: '.concat({
                  resolvedRegion: g,
                  useFipsEndpoint: c,
                  useDualstackEndpoint: f,
                }),
              )
            var w = (function (e, t) {
              var n = t.signingRegion,
                r = t.regionRegex,
                o = t.useFipsEndpoint
              if (n) return n
              if (o) {
                var i = r
                    .replace('\\\\', '\\')
                    .replace(/^\^/g, '\\.')
                    .replace(/\$$/g, '\\.'),
                  a = e.match(i)
                if (a) return a[0].slice(1, -1)
              }
            })(m, {
              signingRegion:
                null === (a = p[g]) || void 0 === a ? void 0 : a.signingRegion,
              regionRegex: h[v].regionRegex,
              useFipsEndpoint: c,
            })
            return ea(
              ea(
                { partition: v, signingService: d, hostname: m },
                w && { signingRegion: w },
              ),
              (null === (u = p[g]) || void 0 === u
                ? void 0
                : u.signingService) && { signingService: p[g].signingService },
            )
          },
          ga = (function () {
            function e(e) {
              ;(this.method = e.method || 'GET'),
                (this.hostname = e.hostname || 'localhost'),
                (this.port = e.port),
                (this.query = e.query || {}),
                (this.headers = e.headers || {}),
                (this.body = e.body),
                (this.protocol = e.protocol
                  ? ':' !== e.protocol.slice(-1)
                    ? ''.concat(e.protocol, ':')
                    : e.protocol
                  : 'https:'),
                (this.path = e.path
                  ? '/' !== e.path.charAt(0)
                    ? '/'.concat(e.path)
                    : e.path
                  : '/')
            }
            return (
              (e.isInstance = function (e) {
                if (!e) return !1
                var t = e
                return (
                  'method' in t &&
                  'protocol' in t &&
                  'hostname' in t &&
                  'path' in t &&
                  'object' == typeof t.query &&
                  'object' == typeof t.headers
                )
              }),
              (e.prototype.clone = function () {
                var t,
                  n = new e(ea(ea({}, this), { headers: ea({}, this.headers) }))
                return (
                  n.query &&
                    (n.query =
                      ((t = n.query),
                      Object.keys(t).reduce(function (e, n) {
                        var r,
                          o = t[n]
                        return ea(
                          ea({}, e),
                          (((r = {})[n] = Array.isArray(o)
                            ? aa([], ia(o), !1)
                            : o),
                          r),
                        )
                      }, {}))),
                  n
                )
              }),
              e
            )
          })()
        var ya = (function () {
            function e(e) {
              ;(this.statusCode = e.statusCode),
                (this.headers = e.headers || {}),
                (this.body = e.body)
            }
            return (
              (e.isInstance = function (e) {
                if (!e) return !1
                var t = e
                return (
                  'number' == typeof t.statusCode &&
                  'object' == typeof t.headers
                )
              }),
              e
            )
          })(),
          ma = function (e) {
            return encodeURIComponent(e).replace(/[!'()*]/g, wa)
          },
          wa = function (e) {
            return '%'.concat(e.charCodeAt(0).toString(16).toUpperCase())
          }
        for (
          var ba = (function () {
              function e(e) {
                var t = this
                'function' == typeof e
                  ? (this.configProvider = function () {
                      return na(t, void 0, void 0, function () {
                        return ra(this, function (t) {
                          switch (t.label) {
                            case 0:
                              return [4, e()]
                            case 1:
                              return [2, t.sent() || {}]
                          }
                        })
                      })
                    })
                  : (this.config = null != e ? e : {})
              }
              return (
                (e.prototype.destroy = function () {}),
                (e.prototype.handle = function (e, t) {
                  var n = (void 0 === t ? {} : t).abortSignal
                  return na(this, void 0, void 0, function () {
                    var t, r, o, i, a, u, s, c, l, f, d, p
                    return ra(this, function (h) {
                      switch (h.label) {
                        case 0:
                          return this.config || !this.configProvider
                            ? [3, 2]
                            : ((t = this), [4, this.configProvider()])
                        case 1:
                          ;(t.config = h.sent()), (h.label = 2)
                        case 2:
                          return (
                            (r = this.config.requestTimeout),
                            (null == n ? void 0 : n.aborted)
                              ? (((o = new Error('Request aborted')).name =
                                  'AbortError'),
                                [2, Promise.reject(o)])
                              : ((i = e.path),
                                e.query &&
                                  (a = (function (e) {
                                    var t,
                                      n,
                                      r = []
                                    try {
                                      for (
                                        var o = oa(Object.keys(e).sort()),
                                          i = o.next();
                                        !i.done;
                                        i = o.next()
                                      ) {
                                        var a = i.value,
                                          u = e[a]
                                        if (((a = ma(a)), Array.isArray(u)))
                                          for (
                                            var s = 0, c = u.length;
                                            s < c;
                                            s++
                                          )
                                            r.push(
                                              ''
                                                .concat(a, '=')
                                                .concat(ma(u[s])),
                                            )
                                        else {
                                          var l = a
                                          ;(u || 'string' == typeof u) &&
                                            (l += '='.concat(ma(u))),
                                            r.push(l)
                                        }
                                      }
                                    } catch (e) {
                                      t = { error: e }
                                    } finally {
                                      try {
                                        i &&
                                          !i.done &&
                                          (n = o.return) &&
                                          n.call(o)
                                      } finally {
                                        if (t) throw t.error
                                      }
                                    }
                                    return r.join('&')
                                  })(e.query)) &&
                                  (i += '?'.concat(a)),
                                (u = e.port),
                                (s = e.method),
                                (c = ''
                                  .concat(e.protocol, '//')
                                  .concat(e.hostname)
                                  .concat(u ? ':'.concat(u) : '')
                                  .concat(i)),
                                (l =
                                  'GET' === s || 'HEAD' === s
                                    ? void 0
                                    : e.body),
                                (f = {
                                  body: l,
                                  headers: new Headers(e.headers),
                                  method: s,
                                }),
                                'undefined' != typeof AbortController &&
                                  (f.signal = n),
                                (d = new Request(c, f)),
                                (p = [
                                  fetch(d).then(function (e) {
                                    var t,
                                      n,
                                      r = e.headers,
                                      o = {}
                                    try {
                                      for (
                                        var i = oa(r.entries()), a = i.next();
                                        !a.done;
                                        a = i.next()
                                      ) {
                                        var u = a.value
                                        o[u[0]] = u[1]
                                      }
                                    } catch (e) {
                                      t = { error: e }
                                    } finally {
                                      try {
                                        a &&
                                          !a.done &&
                                          (n = i.return) &&
                                          n.call(i)
                                      } finally {
                                        if (t) throw t.error
                                      }
                                    }
                                    return void 0 !== e.body
                                      ? {
                                          response: new ya({
                                            headers: o,
                                            statusCode: e.status,
                                            body: e.body,
                                          }),
                                        }
                                      : e.blob().then(function (t) {
                                          return {
                                            response: new ya({
                                              headers: o,
                                              statusCode: e.status,
                                              body: t,
                                            }),
                                          }
                                        })
                                  }),
                                  ((v = r),
                                  void 0 === v && (v = 0),
                                  new Promise(function (e, t) {
                                    v &&
                                      setTimeout(function () {
                                        var e = new Error(
                                          'Request did not complete within '.concat(
                                            v,
                                            ' ms',
                                          ),
                                        )
                                        ;(e.name = 'TimeoutError'), t(e)
                                      }, v)
                                  })),
                                ]),
                                n &&
                                  p.push(
                                    new Promise(function (e, t) {
                                      n.onabort = function () {
                                        var e = new Error('Request aborted')
                                        ;(e.name = 'AbortError'), t(e)
                                      }
                                    }),
                                  ),
                                [2, Promise.race(p)])
                          )
                      }
                      var v
                    })
                  })
                }),
                e
              )
            })(),
            Sa = {},
            _a = new Array(64),
            Ea = 0,
            Aa = 'A'.charCodeAt(0),
            Oa = 'Z'.charCodeAt(0);
          Ea + Aa <= Oa;
          Ea++
        ) {
          var Ca = String.fromCharCode(Ea + Aa)
          ;(Sa[Ca] = Ea), (_a[Ea] = Ca)
        }
        for (
          Ea = 0, Aa = 'a'.charCodeAt(0), Oa = 'z'.charCodeAt(0);
          Ea + Aa <= Oa;
          Ea++
        ) {
          Ca = String.fromCharCode(Ea + Aa)
          var Ta = Ea + 26
          ;(Sa[Ca] = Ta), (_a[Ta] = Ca)
        }
        for (Ea = 0; Ea < 10; Ea++) {
          Sa[Ea.toString(10)] = Ea + 52
          ;(Ca = Ea.toString(10)), (Ta = Ea + 52)
          ;(Sa[Ca] = Ta), (_a[Ta] = Ca)
        }
        ;(Sa['+'] = 62), (_a[62] = '+'), (Sa['/'] = 63), (_a[63] = '/')
        function Ra(e) {
          var t = (e.length / 4) * 3
          '==' === e.slice(-2) ? (t -= 2) : '=' === e.slice(-1) && t--
          for (
            var n = new ArrayBuffer(t), r = new DataView(n), o = 0;
            o < e.length;
            o += 4
          ) {
            for (var i = 0, a = 0, u = o, s = o + 3; u <= s; u++)
              if ('=' !== e[u]) {
                if (!(e[u] in Sa))
                  throw new TypeError(
                    'Invalid character '.concat(e[u], ' in base64 string.'),
                  )
                ;(i |= Sa[e[u]] << (6 * (s - u))), (a += 6)
              } else i >>= 6
            var c = (o / 4) * 3
            i >>= a % 8
            for (var l = Math.floor(a / 8), f = 0; f < l; f++) {
              var d = 8 * (l - f - 1)
              r.setUint8(c + f, (i & (255 << d)) >> d)
            }
          }
          return new Uint8Array(n)
        }
        function Pa(e) {
          for (var t = '', n = 0; n < e.length; n += 3) {
            for (
              var r = 0, o = 0, i = n, a = Math.min(n + 3, e.length);
              i < a;
              i++
            )
              (r |= e[i] << (8 * (a - i - 1))), (o += 8)
            var u = Math.ceil(o / 6)
            r <<= 6 * u - o
            for (var s = 1; s <= u; s++) {
              var c = 6 * (u - s)
              t += _a[(r & (63 << c)) >> c]
            }
            t += '=='.slice(0, 4 - u)
          }
          return t
        }
        var Ia = function (e) {
          return 'function' == typeof Blob && e instanceof Blob
            ? (function (e) {
                return na(this, void 0, void 0, function () {
                  var t, n
                  return ra(this, function (r) {
                    switch (r.label) {
                      case 0:
                        return [4, xa(e)]
                      case 1:
                        return (
                          (t = r.sent()), (n = Ra(t)), [2, new Uint8Array(n)]
                        )
                    }
                  })
                })
              })(e)
            : (function (e) {
                return na(this, void 0, void 0, function () {
                  var t, n, r, o, i, a, u
                  return ra(this, function (s) {
                    switch (s.label) {
                      case 0:
                        ;(t = new Uint8Array(0)),
                          (n = e.getReader()),
                          (r = !1),
                          (s.label = 1)
                      case 1:
                        return r ? [3, 3] : [4, n.read()]
                      case 2:
                        return (
                          (o = s.sent()),
                          (i = o.done),
                          (a = o.value) &&
                            ((u = t),
                            (t = new Uint8Array(u.length + a.length)).set(u),
                            t.set(a, u.length)),
                          (r = i),
                          [3, 1]
                        )
                      case 3:
                        return [2, t]
                    }
                  })
                })
              })(e)
        }
        function xa(e) {
          return new Promise(function (t, n) {
            var r = new FileReader()
            ;(r.onloadend = function () {
              var e
              if (2 !== r.readyState)
                return n(new Error('Reader aborted too early'))
              var o = null !== (e = r.result) && void 0 !== e ? e : '',
                i = o.indexOf(','),
                a = i > -1 ? i + 1 : o.length
              t(o.substring(a))
            }),
              (r.onabort = function () {
                return n(new Error('Read aborted'))
              }),
              (r.onerror = function () {
                return n(r.error)
              }),
              r.readAsDataURL(e)
          })
        }
        var La
        !(function (e) {
          ;(e.STANDARD = 'standard'), (e.ADAPTIVE = 'adaptive')
        })(La || (La = {}))
        var Ma,
          Na = La.STANDARD,
          ka = [
            'AuthFailure',
            'InvalidSignatureException',
            'RequestExpired',
            'RequestInTheFuture',
            'RequestTimeTooSkewed',
            'SignatureDoesNotMatch',
          ],
          Da = [
            'BandwidthLimitExceeded',
            'EC2ThrottledException',
            'LimitExceededException',
            'PriorRequestNotComplete',
            'ProvisionedThroughputExceededException',
            'RequestLimitExceeded',
            'RequestThrottled',
            'RequestThrottledException',
            'SlowDown',
            'ThrottledException',
            'Throttling',
            'ThrottlingException',
            'TooManyRequestsException',
            'TransactionInProgressException',
          ],
          ja = [
            'AbortError',
            'TimeoutError',
            'RequestTimeout',
            'RequestTimeoutException',
          ],
          Fa = [500, 502, 503, 504],
          Ba = function (e) {
            var t, n
            return (
              429 ===
                (null === (t = e.$metadata) || void 0 === t
                  ? void 0
                  : t.httpStatusCode) ||
              Da.includes(e.name) ||
              1 ==
                (null === (n = e.$retryable) || void 0 === n
                  ? void 0
                  : n.throttling)
            )
          },
          Ua = (function () {
            function e(e) {
              var t, n, r, o, i
              ;(this.currentCapacity = 0),
                (this.enabled = !1),
                (this.lastMaxRate = 0),
                (this.measuredTxRate = 0),
                (this.requestCount = 0),
                (this.lastTimestamp = 0),
                (this.timeWindow = 0),
                (this.beta =
                  null !== (t = null == e ? void 0 : e.beta) && void 0 !== t
                    ? t
                    : 0.7),
                (this.minCapacity =
                  null !== (n = null == e ? void 0 : e.minCapacity) &&
                  void 0 !== n
                    ? n
                    : 1),
                (this.minFillRate =
                  null !== (r = null == e ? void 0 : e.minFillRate) &&
                  void 0 !== r
                    ? r
                    : 0.5),
                (this.scaleConstant =
                  null !== (o = null == e ? void 0 : e.scaleConstant) &&
                  void 0 !== o
                    ? o
                    : 0.4),
                (this.smooth =
                  null !== (i = null == e ? void 0 : e.smooth) && void 0 !== i
                    ? i
                    : 0.8)
              var a = this.getCurrentTimeInSeconds()
              ;(this.lastThrottleTime = a),
                (this.lastTxRateBucket = Math.floor(
                  this.getCurrentTimeInSeconds(),
                )),
                (this.fillRate = this.minFillRate),
                (this.maxCapacity = this.minCapacity)
            }
            return (
              (e.prototype.getCurrentTimeInSeconds = function () {
                return Date.now() / 1e3
              }),
              (e.prototype.getSendToken = function () {
                return na(this, void 0, void 0, function () {
                  return ra(this, function (e) {
                    return [2, this.acquireTokenBucket(1)]
                  })
                })
              }),
              (e.prototype.acquireTokenBucket = function (e) {
                return na(this, void 0, void 0, function () {
                  var t
                  return ra(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return this.enabled
                          ? (this.refillTokenBucket(),
                            e > this.currentCapacity
                              ? ((t =
                                  ((e - this.currentCapacity) / this.fillRate) *
                                  1e3),
                                [
                                  4,
                                  new Promise(function (e) {
                                    return setTimeout(e, t)
                                  }),
                                ])
                              : [3, 2])
                          : [2]
                      case 1:
                        n.sent(), (n.label = 2)
                      case 2:
                        return (
                          (this.currentCapacity = this.currentCapacity - e), [2]
                        )
                    }
                  })
                })
              }),
              (e.prototype.refillTokenBucket = function () {
                var e = this.getCurrentTimeInSeconds()
                if (this.lastTimestamp) {
                  var t = (e - this.lastTimestamp) * this.fillRate
                  ;(this.currentCapacity = Math.min(
                    this.maxCapacity,
                    this.currentCapacity + t,
                  )),
                    (this.lastTimestamp = e)
                } else this.lastTimestamp = e
              }),
              (e.prototype.updateClientSendingRate = function (e) {
                var t
                if ((this.updateMeasuredRate(), Ba(e))) {
                  var n = this.enabled
                    ? Math.min(this.measuredTxRate, this.fillRate)
                    : this.measuredTxRate
                  ;(this.lastMaxRate = n),
                    this.calculateTimeWindow(),
                    (this.lastThrottleTime = this.getCurrentTimeInSeconds()),
                    (t = this.cubicThrottle(n)),
                    this.enableTokenBucket()
                } else
                  this.calculateTimeWindow(),
                    (t = this.cubicSuccess(this.getCurrentTimeInSeconds()))
                var r = Math.min(t, 2 * this.measuredTxRate)
                this.updateTokenBucketRate(r)
              }),
              (e.prototype.calculateTimeWindow = function () {
                this.timeWindow = this.getPrecise(
                  Math.pow(
                    (this.lastMaxRate * (1 - this.beta)) / this.scaleConstant,
                    1 / 3,
                  ),
                )
              }),
              (e.prototype.cubicThrottle = function (e) {
                return this.getPrecise(e * this.beta)
              }),
              (e.prototype.cubicSuccess = function (e) {
                return this.getPrecise(
                  this.scaleConstant *
                    Math.pow(e - this.lastThrottleTime - this.timeWindow, 3) +
                    this.lastMaxRate,
                )
              }),
              (e.prototype.enableTokenBucket = function () {
                this.enabled = !0
              }),
              (e.prototype.updateTokenBucketRate = function (e) {
                this.refillTokenBucket(),
                  (this.fillRate = Math.max(e, this.minFillRate)),
                  (this.maxCapacity = Math.max(e, this.minCapacity)),
                  (this.currentCapacity = Math.min(
                    this.currentCapacity,
                    this.maxCapacity,
                  ))
              }),
              (e.prototype.updateMeasuredRate = function () {
                var e = this.getCurrentTimeInSeconds(),
                  t = Math.floor(2 * e) / 2
                if ((this.requestCount++, t > this.lastTxRateBucket)) {
                  var n = this.requestCount / (t - this.lastTxRateBucket)
                  ;(this.measuredTxRate = this.getPrecise(
                    n * this.smooth + this.measuredTxRate * (1 - this.smooth),
                  )),
                    (this.requestCount = 0),
                    (this.lastTxRateBucket = t)
                }
              }),
              (e.prototype.getPrecise = function (e) {
                return parseFloat(e.toFixed(8))
              }),
              e
            )
          })(),
          Ha = new Uint8Array(16)
        function Ga() {
          if (
            !Ma &&
            !(Ma =
              ('undefined' != typeof crypto &&
                crypto.getRandomValues &&
                crypto.getRandomValues.bind(crypto)) ||
              ('undefined' != typeof msCrypto &&
                'function' == typeof msCrypto.getRandomValues &&
                msCrypto.getRandomValues.bind(msCrypto)))
          )
            throw new Error(
              'crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported',
            )
          return Ma(Ha)
        }
        var za = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i
        for (
          var Wa = function (e) {
              return 'string' == typeof e && za.test(e)
            },
            qa = [],
            Va = 0;
          Va < 256;
          ++Va
        )
          qa.push((Va + 256).toString(16).substr(1))
        var Ja = function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0,
            n = (
              qa[e[t + 0]] +
              qa[e[t + 1]] +
              qa[e[t + 2]] +
              qa[e[t + 3]] +
              '-' +
              qa[e[t + 4]] +
              qa[e[t + 5]] +
              '-' +
              qa[e[t + 6]] +
              qa[e[t + 7]] +
              '-' +
              qa[e[t + 8]] +
              qa[e[t + 9]] +
              '-' +
              qa[e[t + 10]] +
              qa[e[t + 11]] +
              qa[e[t + 12]] +
              qa[e[t + 13]] +
              qa[e[t + 14]] +
              qa[e[t + 15]]
            ).toLowerCase()
          if (!Wa(n)) throw TypeError('Stringified UUID is invalid')
          return n
        }
        var Ka = function (e, t, n) {
            var r = (e = e || {}).random || (e.rng || Ga)()
            if (((r[6] = (15 & r[6]) | 64), (r[8] = (63 & r[8]) | 128), t)) {
              n = n || 0
              for (var o = 0; o < 16; ++o) t[n + o] = r[o]
              return t
            }
            return Ja(r)
          },
          Xa = function (e, t) {
            return Math.floor(Math.min(2e4, Math.random() * Math.pow(2, t) * e))
          },
          Ya = function (e) {
            return (
              !!e &&
              ((function (e) {
                return void 0 !== e.$retryable
              })(e) ||
                (function (e) {
                  return ka.includes(e.name)
                })(e) ||
                Ba(e) ||
                (function (e) {
                  var t
                  return (
                    ja.includes(e.name) ||
                    Fa.includes(
                      (null === (t = e.$metadata) || void 0 === t
                        ? void 0
                        : t.httpStatusCode) || 0,
                    )
                  )
                })(e))
            )
          },
          Za = (function () {
            function e(e, t) {
              var n, r, o
              ;(this.maxAttemptsProvider = e),
                (this.mode = La.STANDARD),
                (this.retryDecider =
                  null !== (n = null == t ? void 0 : t.retryDecider) &&
                  void 0 !== n
                    ? n
                    : Ya),
                (this.delayDecider =
                  null !== (r = null == t ? void 0 : t.delayDecider) &&
                  void 0 !== r
                    ? r
                    : Xa),
                (this.retryQuota =
                  null !== (o = null == t ? void 0 : t.retryQuota) &&
                  void 0 !== o
                    ? o
                    : (function (e, t) {
                        var n,
                          r,
                          o,
                          i = e,
                          a =
                            null !==
                              (n = null == t ? void 0 : t.noRetryIncrement) &&
                            void 0 !== n
                              ? n
                              : 1,
                          u =
                            null !== (r = null == t ? void 0 : t.retryCost) &&
                            void 0 !== r
                              ? r
                              : 5,
                          s =
                            null !==
                              (o = null == t ? void 0 : t.timeoutRetryCost) &&
                            void 0 !== o
                              ? o
                              : 10,
                          c = e,
                          l = function (e) {
                            return 'TimeoutError' === e.name ? s : u
                          },
                          f = function (e) {
                            return l(e) <= c
                          }
                        return Object.freeze({
                          hasRetryTokens: f,
                          retrieveRetryTokens: function (e) {
                            if (!f(e))
                              throw new Error('No retry token available')
                            var t = l(e)
                            return (c -= t), t
                          },
                          releaseRetryTokens: function (e) {
                            ;(c += null != e ? e : a), (c = Math.min(c, i))
                          },
                        })
                      })(500))
            }
            return (
              (e.prototype.shouldRetry = function (e, t, n) {
                return (
                  t < n &&
                  this.retryDecider(e) &&
                  this.retryQuota.hasRetryTokens(e)
                )
              }),
              (e.prototype.getMaxAttempts = function () {
                return na(this, void 0, void 0, function () {
                  var e
                  return ra(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return (
                          t.trys.push([0, 2, , 3]),
                          [4, this.maxAttemptsProvider()]
                        )
                      case 1:
                        return (e = t.sent()), [3, 3]
                      case 2:
                        return t.sent(), (e = 3), [3, 3]
                      case 3:
                        return [2, e]
                    }
                  })
                })
              }),
              (e.prototype.retry = function (e, t, n) {
                return na(this, void 0, void 0, function () {
                  var r, o, i, a, u, s, c, l
                  return ra(this, function (f) {
                    switch (f.label) {
                      case 0:
                        return (o = 0), (i = 0), [4, this.getMaxAttempts()]
                      case 1:
                        ;(a = f.sent()),
                          (u = t.request),
                          ga.isInstance(u) &&
                            (u.headers['amz-sdk-invocation-id'] = Ka()),
                          (s = function () {
                            var s, l, f, d, p, h
                            return ra(this, function (v) {
                              switch (v.label) {
                                case 0:
                                  return (
                                    v.trys.push([0, 4, , 7]),
                                    ga.isInstance(u) &&
                                      (u.headers[
                                        'amz-sdk-request'
                                      ] = 'attempt='
                                        .concat(o + 1, '; max=')
                                        .concat(a)),
                                    (null == n ? void 0 : n.beforeRequest)
                                      ? [4, n.beforeRequest()]
                                      : [3, 2]
                                  )
                                case 1:
                                  v.sent(), (v.label = 2)
                                case 2:
                                  return [4, e(t)]
                                case 3:
                                  return (
                                    (s = v.sent()),
                                    (l = s.response),
                                    (f = s.output),
                                    (null == n ? void 0 : n.afterRequest) &&
                                      n.afterRequest(l),
                                    c.retryQuota.releaseRetryTokens(r),
                                    (f.$metadata.attempts = o + 1),
                                    (f.$metadata.totalRetryDelay = i),
                                    [2, { value: { response: l, output: f } }]
                                  )
                                case 4:
                                  return (
                                    (d = v.sent()),
                                    (p = $a(d)),
                                    o++,
                                    c.shouldRetry(p, o, a)
                                      ? ((r = c.retryQuota.retrieveRetryTokens(
                                          p,
                                        )),
                                        (h = c.delayDecider(
                                          Ba(p) ? 500 : 100,
                                          o,
                                        )),
                                        (i += h),
                                        [
                                          4,
                                          new Promise(function (e) {
                                            return setTimeout(e, h)
                                          }),
                                        ])
                                      : [3, 6]
                                  )
                                case 5:
                                  return v.sent(), [2, 'continue']
                                case 6:
                                  throw (
                                    (p.$metadata || (p.$metadata = {}),
                                    (p.$metadata.attempts = o),
                                    (p.$metadata.totalRetryDelay = i),
                                    p)
                                  )
                                case 7:
                                  return [2]
                              }
                            })
                          }),
                          (c = this),
                          (f.label = 2)
                      case 2:
                        return [5, s()]
                      case 3:
                        return 'object' == typeof (l = f.sent())
                          ? [2, l.value]
                          : [3, 2]
                      case 4:
                        return [2]
                    }
                  })
                })
              }),
              e
            )
          })(),
          $a = function (e) {
            return e instanceof Error
              ? e
              : e instanceof Object
              ? Object.assign(new Error(), e)
              : 'string' == typeof e
              ? new Error(e)
              : new Error('AWS SDK error wrapper for '.concat(e))
          },
          Qa = (function (e) {
            function t(t, n) {
              var r = this,
                o = null != n ? n : {},
                i = o.rateLimiter,
                a = ta(o, ['rateLimiter'])
              return (
                ((r = e.call(this, t, a) || this).rateLimiter =
                  null != i ? i : new Ua()),
                (r.mode = La.ADAPTIVE),
                r
              )
            }
            return (
              Qi(t, e),
              (t.prototype.retry = function (t, n) {
                return na(this, void 0, void 0, function () {
                  var r = this
                  return ra(this, function (o) {
                    return [
                      2,
                      e.prototype.retry.call(this, t, n, {
                        beforeRequest: function () {
                          return na(r, void 0, void 0, function () {
                            return ra(this, function (e) {
                              return [2, this.rateLimiter.getSendToken()]
                            })
                          })
                        },
                        afterRequest: function (e) {
                          r.rateLimiter.updateClientSendingRate(e)
                        },
                      }),
                    ]
                  })
                })
              }),
              t
            )
          })(Za),
          eu = {
            name: 'retryMiddleware',
            tags: ['RETRY'],
            step: 'finalizeRequest',
            priority: 'high',
            override: !0,
          },
          tu = function (e) {
            return {
              applyToStack: function (t) {
                t.add(
                  (function (e) {
                    return function (t, n) {
                      return function (r) {
                        return na(void 0, void 0, void 0, function () {
                          var o
                          return ra(this, function (i) {
                            switch (i.label) {
                              case 0:
                                return [4, e.retryStrategy()]
                              case 1:
                                return (
                                  (null == (o = i.sent()) ? void 0 : o.mode) &&
                                    (n.userAgent = aa(
                                      aa([], ia(n.userAgent || []), !1),
                                      [['cfg/retry-mode', o.mode]],
                                      !1,
                                    )),
                                  [2, o.retry(t, r)]
                                )
                            }
                          })
                        })
                      }
                    }
                  })(e),
                  eu,
                )
              },
            }
          },
          nu = function (e) {
            if ('string' == typeof e) {
              for (var t = e.length, n = t - 1; n >= 0; n--) {
                var r = e.charCodeAt(n)
                r > 127 && r <= 2047 ? t++ : r > 2047 && r <= 65535 && (t += 2)
              }
              return t
            }
            if ('number' == typeof e.byteLength) return e.byteLength
            if ('number' == typeof e.size) return e.size
            throw new Error('Body Length computation failed for '.concat(e))
          },
          ru = n(50311),
          ou = n.n(ru),
          iu = function (e) {
            var t = e.serviceId,
              n = e.clientVersion
            return function () {
              return na(void 0, void 0, void 0, function () {
                var e, r, o, i, a, u, s, c, l
                return ra(this, function (f) {
                  return (
                    (e =
                      'undefined' != typeof window &&
                      (null ===
                        (o =
                          null === window || void 0 === window
                            ? void 0
                            : window.navigator) || void 0 === o
                        ? void 0
                        : o.userAgent)
                        ? ou().parse(window.navigator.userAgent)
                        : void 0),
                    (r = [
                      ['aws-sdk-js', n],
                      [
                        'os/'.concat(
                          (null === (i = null == e ? void 0 : e.os) ||
                          void 0 === i
                            ? void 0
                            : i.name) || 'other',
                        ),
                        null === (a = null == e ? void 0 : e.os) || void 0 === a
                          ? void 0
                          : a.version,
                      ],
                      ['lang/js'],
                      [
                        'md/browser',
                        ''
                          .concat(
                            null !==
                              (s =
                                null === (u = null == e ? void 0 : e.browser) ||
                                void 0 === u
                                  ? void 0
                                  : u.name) && void 0 !== s
                              ? s
                              : 'unknown',
                            '_',
                          )
                          .concat(
                            null !==
                              (l =
                                null === (c = null == e ? void 0 : e.browser) ||
                                void 0 === c
                                  ? void 0
                                  : c.version) && void 0 !== l
                              ? l
                              : 'unknown',
                          ),
                      ],
                    ]),
                    t && r.push(['api/'.concat(t), n]),
                    [2, r]
                  )
                })
              })
            }
          },
          au = n(32254),
          uu = {},
          su = {
            aws: {
              regions: [
                'af-south-1',
                'ap-east-1',
                'ap-northeast-1',
                'ap-northeast-2',
                'ap-northeast-3',
                'ap-south-1',
                'ap-southeast-1',
                'ap-southeast-2',
                'ap-southeast-3',
                'ca-central-1',
                'eu-central-1',
                'eu-north-1',
                'eu-south-1',
                'eu-west-1',
                'eu-west-2',
                'eu-west-3',
                'me-south-1',
                'sa-east-1',
                'us-east-1',
                'us-east-2',
                'us-west-1',
                'us-west-2',
              ],
              regionRegex: '^(us|eu|ap|sa|ca|me|af)\\-\\w+\\-\\d+$',
              variants: [
                {
                  hostname: 'console-control.{region}.amazonaws.com',
                  tags: [],
                },
                {
                  hostname: 'console-control-fips.{region}.amazonaws.com',
                  tags: ['fips'],
                },
                {
                  hostname: 'console-control-fips.{region}.api.aws',
                  tags: ['dualstack', 'fips'],
                },
                {
                  hostname: 'console-control.{region}.api.aws',
                  tags: ['dualstack'],
                },
              ],
            },
            'aws-cn': {
              regions: ['cn-north-1', 'cn-northwest-1'],
              regionRegex: '^cn\\-\\w+\\-\\d+$',
              variants: [
                {
                  hostname: 'console-control.{region}.amazonaws.com.cn',
                  tags: [],
                },
                {
                  hostname: 'console-control-fips.{region}.amazonaws.com.cn',
                  tags: ['fips'],
                },
                {
                  hostname:
                    'console-control-fips.{region}.api.amazonwebservices.com.cn',
                  tags: ['dualstack', 'fips'],
                },
                {
                  hostname:
                    'console-control.{region}.api.amazonwebservices.com.cn',
                  tags: ['dualstack'],
                },
              ],
            },
            'aws-iso': {
              regions: ['us-iso-east-1', 'us-iso-west-1'],
              regionRegex: '^us\\-iso\\-\\w+\\-\\d+$',
              variants: [
                { hostname: 'console-control.{region}.c2s.ic.gov', tags: [] },
                {
                  hostname: 'console-control-fips.{region}.c2s.ic.gov',
                  tags: ['fips'],
                },
              ],
            },
            'aws-iso-b': {
              regions: ['us-isob-east-1'],
              regionRegex: '^us\\-isob\\-\\w+\\-\\d+$',
              variants: [
                {
                  hostname: 'console-control.{region}.sc2s.sgov.gov',
                  tags: [],
                },
                {
                  hostname: 'console-control-fips.{region}.sc2s.sgov.gov',
                  tags: ['fips'],
                },
              ],
            },
            'aws-us-gov': {
              regions: ['us-gov-east-1', 'us-gov-west-1'],
              regionRegex: '^us\\-gov\\-\\w+\\-\\d+$',
              variants: [
                {
                  hostname: 'console-control.{region}.amazonaws.com',
                  tags: [],
                },
                {
                  hostname: 'console-control-fips.{region}.amazonaws.com',
                  tags: ['fips'],
                },
                {
                  hostname: 'console-control-fips.{region}.api.aws',
                  tags: ['dualstack', 'fips'],
                },
                {
                  hostname: 'console-control.{region}.api.aws',
                  tags: ['dualstack'],
                },
              ],
            },
          },
          cu = function (e, t) {
            return na(void 0, void 0, void 0, function () {
              return ra(this, function (n) {
                return [
                  2,
                  va(
                    e,
                    ea(ea({}, t), {
                      signingService: 'console-control',
                      regionHash: uu,
                      partitionHash: su,
                    }),
                  ),
                ]
              })
            })
          }
        var lu = function (e) {
            var t,
              n = new URL(e),
              r = n.hostname,
              o = n.pathname,
              i = n.port,
              a = n.protocol,
              u = n.search
            return (
              u &&
                (t = (function (e) {
                  var t,
                    n,
                    r = {}
                  if ((e = e.replace(/^\?/, '')))
                    try {
                      for (
                        var o = oa(e.split('&')), i = o.next();
                        !i.done;
                        i = o.next()
                      ) {
                        var a = ia(i.value.split('='), 2),
                          u = a[0],
                          s = a[1],
                          c = void 0 === s ? null : s
                        ;(u = decodeURIComponent(u)),
                          c && (c = decodeURIComponent(c)),
                          u in r
                            ? Array.isArray(r[u])
                              ? r[u].push(c)
                              : (r[u] = [r[u], c])
                            : (r[u] = c)
                      }
                    } catch (e) {
                      t = { error: e }
                    } finally {
                      try {
                        i && !i.done && (n = o.return) && n.call(o)
                      } finally {
                        if (t) throw t.error
                      }
                    }
                  return r
                })(u)),
              {
                hostname: r,
                port: i ? parseInt(i) : void 0,
                protocol: a,
                path: o,
                query: t,
              }
            )
          },
          fu = function () {
            var e = [],
              t = [],
              n = new Set(),
              r = function (n) {
                return (
                  e.forEach(function (e) {
                    n.add(e.middleware, ea({}, e))
                  }),
                  t.forEach(function (e) {
                    n.addRelativeTo(e.middleware, ea({}, e))
                  }),
                  n
                )
              },
              o = function (e) {
                var t = []
                return (
                  e.before.forEach(function (e) {
                    0 === e.before.length && 0 === e.after.length
                      ? t.push(e)
                      : t.push.apply(t, aa([], ia(o(e)), !1))
                  }),
                  t.push(e),
                  e.after.reverse().forEach(function (e) {
                    0 === e.before.length && 0 === e.after.length
                      ? t.push(e)
                      : t.push.apply(t, aa([], ia(o(e)), !1))
                  }),
                  t
                )
              },
              i = function () {
                var n,
                  r = [],
                  i = [],
                  a = {}
                return (
                  e.forEach(function (e) {
                    var t = ea(ea({}, e), { before: [], after: [] })
                    t.name && (a[t.name] = t), r.push(t)
                  }),
                  t.forEach(function (e) {
                    var t = ea(ea({}, e), { before: [], after: [] })
                    t.name && (a[t.name] = t), i.push(t)
                  }),
                  i.forEach(function (e) {
                    if (e.toMiddleware) {
                      var t = a[e.toMiddleware]
                      if (void 0 === t)
                        throw new Error(
                          ''
                            .concat(
                              e.toMiddleware,
                              ' is not found when adding ',
                            )
                            .concat(e.name || 'anonymous', ' middleware ')
                            .concat(e.relation, ' ')
                            .concat(e.toMiddleware),
                        )
                      'after' === e.relation && t.after.push(e),
                        'before' === e.relation && t.before.push(e)
                    }
                  }),
                  ((n = r),
                  n.sort(function (e, t) {
                    return (
                      du[t.step] - du[e.step] ||
                      pu[t.priority || 'normal'] - pu[e.priority || 'normal']
                    )
                  }))
                    .map(o)
                    .reduce(function (e, t) {
                      return e.push.apply(e, aa([], ia(t), !1)), e
                    }, [])
                    .map(function (e) {
                      return e.middleware
                    })
                )
              },
              a = {
                add: function (t, r) {
                  void 0 === r && (r = {})
                  var o = r.name,
                    i = r.override,
                    a = ea(
                      { step: 'initialize', priority: 'normal', middleware: t },
                      r,
                    )
                  if (o) {
                    if (n.has(o)) {
                      if (!i)
                        throw new Error(
                          "Duplicate middleware name '".concat(o, "'"),
                        )
                      var u = e.findIndex(function (e) {
                          return e.name === o
                        }),
                        s = e[u]
                      if (s.step !== a.step || s.priority !== a.priority)
                        throw new Error(
                          '"'
                            .concat(o, '" middleware with ')
                            .concat(s.priority, ' priority in ')
                            .concat(s.step, ' step cannot be ') +
                            'overridden by same-name middleware with '
                              .concat(a.priority, ' priority in ')
                              .concat(a.step, ' step.'),
                        )
                      e.splice(u, 1)
                    }
                    n.add(o)
                  }
                  e.push(a)
                },
                addRelativeTo: function (e, r) {
                  var o = r.name,
                    i = r.override,
                    a = ea({ middleware: e }, r)
                  if (o) {
                    if (n.has(o)) {
                      if (!i)
                        throw new Error(
                          "Duplicate middleware name '".concat(o, "'"),
                        )
                      var u = t.findIndex(function (e) {
                          return e.name === o
                        }),
                        s = t[u]
                      if (
                        s.toMiddleware !== a.toMiddleware ||
                        s.relation !== a.relation
                      )
                        throw new Error(
                          '"'
                            .concat(o, '" middleware ')
                            .concat(s.relation, ' "')
                            .concat(
                              s.toMiddleware,
                              '" middleware cannot be overridden ',
                            ) +
                            'by same-name middleware '
                              .concat(a.relation, ' "')
                              .concat(a.toMiddleware, '" middleware.'),
                        )
                      t.splice(u, 1)
                    }
                    n.add(o)
                  }
                  t.push(a)
                },
                clone: function () {
                  return r(fu())
                },
                use: function (e) {
                  e.applyToStack(a)
                },
                remove: function (r) {
                  return 'string' == typeof r
                    ? (function (r) {
                        var o = !1,
                          i = function (e) {
                            return (
                              !e.name ||
                              e.name !== r ||
                              ((o = !0), n.delete(r), !1)
                            )
                          }
                        return (e = e.filter(i)), (t = t.filter(i)), o
                      })(r)
                    : (function (r) {
                        var o = !1,
                          i = function (e) {
                            return (
                              e.middleware !== r ||
                              ((o = !0), e.name && n.delete(e.name), !1)
                            )
                          }
                        return (e = e.filter(i)), (t = t.filter(i)), o
                      })(r)
                },
                removeByTag: function (r) {
                  var o = !1,
                    i = function (e) {
                      var t = e.tags,
                        i = e.name
                      return (
                        !t || !t.includes(r) || (i && n.delete(i), (o = !0), !1)
                      )
                    }
                  return (e = e.filter(i)), (t = t.filter(i)), o
                },
                concat: function (e) {
                  var t = r(fu())
                  return t.use(e), t
                },
                applyToStack: r,
                resolve: function (e, t) {
                  var n, r
                  try {
                    for (
                      var o = oa(i().reverse()), a = o.next();
                      !a.done;
                      a = o.next()
                    ) {
                      e = (0, a.value)(e, t)
                    }
                  } catch (e) {
                    n = { error: e }
                  } finally {
                    try {
                      a && !a.done && (r = o.return) && r.call(o)
                    } finally {
                      if (n) throw n.error
                    }
                  }
                  return e
                },
              }
            return a
          },
          du = {
            initialize: 5,
            serialize: 4,
            build: 3,
            finalizeRequest: 2,
            deserialize: 1,
          },
          pu = { high: 3, normal: 2, low: 1 },
          hu = (function () {
            function e(e) {
              ;(this.middlewareStack = fu()), (this.config = e)
            }
            return (
              (e.prototype.send = function (e, t, n) {
                var r = 'function' != typeof t ? t : void 0,
                  o = 'function' == typeof t ? t : n,
                  i = e.resolveMiddleware(this.middlewareStack, this.config, r)
                if (!o)
                  return i(e).then(function (e) {
                    return e.output
                  })
                i(e)
                  .then(
                    function (e) {
                      return o(null, e.output)
                    },
                    function (e) {
                      return o(e)
                    },
                  )
                  .catch(function () {})
              }),
              (e.prototype.destroy = function () {
                this.config.requestHandler.destroy &&
                  this.config.requestHandler.destroy()
              }),
              e
            )
          })(),
          vu = function () {
            this.middlewareStack = fu()
          },
          gu =
            (Math.ceil(Math.pow(2, 127) * (2 - Math.pow(2, -23))),
            function (e) {
              if (null != e) {
                if (Number.isInteger(e) && !Number.isNaN(e)) return e
                throw new TypeError('Expected integer, got '.concat(typeof e))
              }
            }),
          yu = function (e, t) {
            if (null == e) {
              if (t)
                throw new TypeError('Expected a non-null value for '.concat(t))
              throw new TypeError('Expected a non-null value')
            }
            return e
          },
          mu = function (e) {
            if (null != e) {
              if ('object' == typeof e && !Array.isArray(e)) return e
              throw new TypeError('Expected object, got '.concat(typeof e))
            }
          },
          wu = function (e) {
            if (null != e) {
              if ('string' == typeof e) return e
              throw new TypeError('Expected string, got '.concat(typeof e))
            }
          }
        var bu = function (e) {
            switch (e) {
              case 'standard':
                return { retryMode: 'standard', connectionTimeout: 3100 }
              case 'in-region':
                return { retryMode: 'standard', connectionTimeout: 1100 }
              case 'cross-region':
                return { retryMode: 'standard', connectionTimeout: 3100 }
              case 'mobile':
                return { retryMode: 'standard', connectionTimeout: 3e4 }
              default:
                return {}
            }
          },
          Su = (function (e) {
            function t(n) {
              var r = e.call(this, n.message) || this
              return (
                Object.setPrototypeOf(r, t.prototype),
                (r.name = n.name),
                (r.$fault = n.$fault),
                (r.$metadata = n.$metadata),
                r
              )
            }
            return Qi(t, e), t
          })(Error),
          _u = function () {
            var e = Object.getPrototypeOf(this).constructor,
              t = Function.bind.apply(String, aa([null], ia(arguments), !1)),
              n = new t()
            return Object.setPrototypeOf(n, e.prototype), n
          }
        ;(_u.prototype = Object.create(String.prototype, {
          constructor: {
            value: _u,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
          Object.setPrototypeOf(_u, String)
        ;(function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this
          }
          Qi(t, e),
            (t.prototype.deserializeJSON = function () {
              return JSON.parse(e.prototype.toString.call(this))
            }),
            (t.prototype.toJSON = function () {
              return e.prototype.toString.call(this)
            }),
            (t.fromObject = function (e) {
              return e instanceof t
                ? e
                : new t(
                    e instanceof String || 'string' == typeof e
                      ? e
                      : JSON.stringify(e),
                  )
            })
        })(_u),
          (function (e) {
            function t(n, r) {
              void 0 === r && (r = !0)
              var o = e.call(this, n, r) || this
              return (
                (o.tryNextLink = r),
                (o.name = 'CredentialsProviderError'),
                Object.setPrototypeOf(o, t.prototype),
                o
              )
            }
            Qi(t, e)
          })(
            (function (e) {
              function t(n, r) {
                void 0 === r && (r = !0)
                var o = e.call(this, n) || this
                return (
                  (o.tryNextLink = r),
                  (o.name = 'ProviderError'),
                  Object.setPrototypeOf(o, t.prototype),
                  o
                )
              }
              return (
                Qi(t, e),
                (t.from = function (e, t) {
                  return (
                    void 0 === t && (t = !0),
                    Object.assign(new this(e.message, t), e)
                  )
                }),
                t
              )
            })(Error),
          )
        var Eu = function (e, t, n) {
            var r,
              o,
              i,
              a = !1,
              u = function () {
                return na(void 0, void 0, void 0, function () {
                  return ra(this, function (t) {
                    switch (t.label) {
                      case 0:
                        o || (o = e()), (t.label = 1)
                      case 1:
                        return t.trys.push([1, , 3, 4]), [4, o]
                      case 2:
                        return (r = t.sent()), (i = !0), (a = !1), [3, 4]
                      case 3:
                        return (o = void 0), [7]
                      case 4:
                        return [2, r]
                    }
                  })
                })
              }
            return void 0 === t
              ? function (e) {
                  return na(void 0, void 0, void 0, function () {
                    return ra(this, function (t) {
                      switch (t.label) {
                        case 0:
                          return i && !(null == e ? void 0 : e.forceRefresh)
                            ? [3, 2]
                            : [4, u()]
                        case 1:
                          ;(r = t.sent()), (t.label = 2)
                        case 2:
                          return [2, r]
                      }
                    })
                  })
                }
              : function (e) {
                  return na(void 0, void 0, void 0, function () {
                    return ra(this, function (o) {
                      switch (o.label) {
                        case 0:
                          return i && !(null == e ? void 0 : e.forceRefresh)
                            ? [3, 2]
                            : [4, u()]
                        case 1:
                          ;(r = o.sent()), (o.label = 2)
                        case 2:
                          return a
                            ? [2, r]
                            : n && !n(r)
                            ? ((a = !0), [2, r])
                            : t(r)
                            ? [4, u()]
                            : [3, 4]
                        case 3:
                          return o.sent(), [2, r]
                        case 4:
                          return [2, r]
                      }
                    })
                  })
                }
          },
          Au = ['in-region', 'cross-region', 'mobile', 'standard', 'legacy'],
          Ou = function () {
            var e,
              t,
              n =
                'undefined' != typeof window &&
                (null ===
                  (e =
                    null === window || void 0 === window
                      ? void 0
                      : window.navigator) || void 0 === e
                  ? void 0
                  : e.userAgent)
                  ? ou().parse(window.navigator.userAgent)
                  : void 0,
              r =
                null === (t = null == n ? void 0 : n.platform) || void 0 === t
                  ? void 0
                  : t.type
            return 'tablet' === r || 'mobile' === r
          },
          Cu = function (e) {
            var t,
              n,
              r,
              o,
              i,
              a,
              u,
              s,
              c,
              l,
              f,
              d,
              p,
              h,
              v,
              g,
              y = (function (e) {
                var t = (void 0 === e ? {} : e).defaultsMode
                return Eu(function () {
                  return na(void 0, void 0, void 0, function () {
                    var e, n
                    return ra(this, function (r) {
                      switch (r.label) {
                        case 0:
                          return 'function' != typeof t ? [3, 2] : [4, t()]
                        case 1:
                          return (n = r.sent()), [3, 3]
                        case 2:
                          ;(n = t), (r.label = 3)
                        case 3:
                          switch (null == (e = n) ? void 0 : e.toLowerCase()) {
                            case 'auto':
                              return [
                                2,
                                Promise.resolve(Ou() ? 'mobile' : 'standard'),
                              ]
                            case 'mobile':
                            case 'in-region':
                            case 'cross-region':
                            case 'standard':
                            case 'legacy':
                              return [
                                2,
                                Promise.resolve(
                                  null == e ? void 0 : e.toLocaleLowerCase(),
                                ),
                              ]
                            case void 0:
                              return [2, Promise.resolve('legacy')]
                            default:
                              throw new Error(
                                'Invalid parameter for "defaultsMode", expect '
                                  .concat(Au.join(', '), ', got ')
                                  .concat(e),
                              )
                          }
                          return [2]
                      }
                    })
                  })
                })
              })(e),
              m = function () {
                return y().then(bu)
              },
              w = (function (e) {
                var t, n, r, o, i
                return {
                  apiVersion: '2020-09-09',
                  disableHostPrefix:
                    null !== (t = null == e ? void 0 : e.disableHostPrefix) &&
                    void 0 !== t &&
                    t,
                  logger:
                    null !== (n = null == e ? void 0 : e.logger) && void 0 !== n
                      ? n
                      : {},
                  regionInfoProvider:
                    null !== (r = null == e ? void 0 : e.regionInfoProvider) &&
                    void 0 !== r
                      ? r
                      : cu,
                  serviceId:
                    null !== (o = null == e ? void 0 : e.serviceId) &&
                    void 0 !== o
                      ? o
                      : 'awsconsolecontrol',
                  urlParser:
                    null !== (i = null == e ? void 0 : e.urlParser) &&
                    void 0 !== i
                      ? i
                      : lu,
                }
              })(e)
            return ea(ea(ea({}, w), e), {
              runtime: 'browser',
              defaultsMode: y,
              base64Decoder:
                null !== (t = null == e ? void 0 : e.base64Decoder) &&
                void 0 !== t
                  ? t
                  : Ra,
              base64Encoder:
                null !== (n = null == e ? void 0 : e.base64Encoder) &&
                void 0 !== n
                  ? n
                  : Pa,
              bodyLengthChecker:
                null !== (r = null == e ? void 0 : e.bodyLengthChecker) &&
                void 0 !== r
                  ? r
                  : nu,
              credentialDefaultProvider:
                null !==
                  (o = null == e ? void 0 : e.credentialDefaultProvider) &&
                void 0 !== o
                  ? o
                  : function (e) {
                      return function () {
                        return Promise.reject(
                          new Error('Credential is missing'),
                        )
                      }
                    },
              defaultUserAgentProvider:
                null !==
                  (i = null == e ? void 0 : e.defaultUserAgentProvider) &&
                void 0 !== i
                  ? i
                  : iu({ serviceId: w.serviceId, clientVersion: sa }),
              maxAttempts:
                null !== (a = null == e ? void 0 : e.maxAttempts) &&
                void 0 !== a
                  ? a
                  : 3,
              region:
                null !== (u = null == e ? void 0 : e.region) && void 0 !== u
                  ? u
                  : ((g = 'Region is missing'),
                    function () {
                      return Promise.reject(g)
                    }),
              requestHandler:
                null !== (s = null == e ? void 0 : e.requestHandler) &&
                void 0 !== s
                  ? s
                  : new ba(m),
              retryMode:
                null !== (c = null == e ? void 0 : e.retryMode) && void 0 !== c
                  ? c
                  : function () {
                      return na(void 0, void 0, void 0, function () {
                        return ra(this, function (e) {
                          switch (e.label) {
                            case 0:
                              return [4, m()]
                            case 1:
                              return [2, e.sent().retryMode || Na]
                          }
                        })
                      })
                    },
              sha256:
                null !== (l = null == e ? void 0 : e.sha256) && void 0 !== l
                  ? l
                  : ca.Sha256,
              streamCollector:
                null !== (f = null == e ? void 0 : e.streamCollector) &&
                void 0 !== f
                  ? f
                  : Ia,
              useDualstackEndpoint:
                null !== (d = null == e ? void 0 : e.useDualstackEndpoint) &&
                void 0 !== d
                  ? d
                  : function () {
                      return Promise.resolve(!1)
                    },
              useFipsEndpoint:
                null !== (p = null == e ? void 0 : e.useFipsEndpoint) &&
                void 0 !== p
                  ? p
                  : function () {
                      return Promise.resolve(!1)
                    },
              utf8Decoder:
                null !== (h = null == e ? void 0 : e.utf8Decoder) &&
                void 0 !== h
                  ? h
                  : au.fromUtf8,
              utf8Encoder:
                null !== (v = null == e ? void 0 : e.utf8Encoder) &&
                void 0 !== v
                  ? v
                  : au.toUtf8,
            })
          }
        var Tu = {
            step: 'build',
            tags: ['SET_CONTENT_LENGTH', 'CONTENT_LENGTH'],
            name: 'contentLengthMiddleware',
            override: !0,
          },
          Ru = function (e) {
            return {
              applyToStack: function (t) {
                t.add(
                  (function (e) {
                    var t = this
                    return function (n) {
                      return function (r) {
                        return na(t, void 0, void 0, function () {
                          var t, o, i, a, u
                          return ra(this, function (s) {
                            if (
                              ((t = r.request),
                              ga.isInstance(t) &&
                                ((o = t.body),
                                (i = t.headers),
                                o &&
                                  -1 ===
                                    Object.keys(i)
                                      .map(function (e) {
                                        return e.toLowerCase()
                                      })
                                      .indexOf('content-length')))
                            )
                              try {
                                ;(a = e(o)),
                                  (t.headers = ea(
                                    ea({}, t.headers),
                                    (((u = {})['content-length'] = String(a)),
                                    u),
                                  ))
                              } catch (e) {}
                            return [2, n(ea(ea({}, r), { request: t }))]
                          })
                        })
                      }
                    }
                  })(e.bodyLengthChecker),
                  Tu,
                )
              },
            }
          }
        for (
          var Pu = {
              name: 'hostHeaderMiddleware',
              step: 'build',
              priority: 'low',
              tags: ['HOST'],
              override: !0,
            },
            Iu = function (e) {
              return {
                applyToStack: function (t) {
                  t.add(
                    (function (e) {
                      return function (t) {
                        return function (n) {
                          return na(void 0, void 0, void 0, function () {
                            var r, o
                            return ra(this, function (i) {
                              return ga.isInstance(n.request)
                                ? ((r = n.request),
                                  (o = (e.requestHandler.metadata || {})
                                    .handlerProtocol),
                                  (void 0 === o ? '' : o).indexOf('h2') >= 0 &&
                                  !r.headers[':authority']
                                    ? (delete r.headers.host,
                                      (r.headers[':authority'] = ''))
                                    : r.headers.host ||
                                      (r.headers.host = r.hostname),
                                  [2, t(n)])
                                : [2, t(n)]
                            })
                          })
                        }
                      }
                    })(e),
                    Pu,
                  )
                },
              }
            },
            xu = {
              name: 'loggerMiddleware',
              tags: ['LOGGER'],
              step: 'initialize',
              override: !0,
            },
            Lu = function (e) {
              return {
                applyToStack: function (e) {
                  e.add(function (e, t) {
                    return function (n) {
                      return na(void 0, void 0, void 0, function () {
                        var r, o, i, a, u, s, c, l, f
                        return ra(this, function (d) {
                          switch (d.label) {
                            case 0:
                              return (
                                (r = t.clientName),
                                (o = t.commandName),
                                (i = t.inputFilterSensitiveLog),
                                (a = t.logger),
                                (u = t.outputFilterSensitiveLog),
                                [4, e(n)]
                              )
                            case 1:
                              return (
                                (s = d.sent()),
                                a
                                  ? ('function' == typeof a.info &&
                                      ((c = s.output),
                                      (l = c.$metadata),
                                      (f = ta(c, ['$metadata'])),
                                      a.info({
                                        clientName: r,
                                        commandName: o,
                                        input: i(n.input),
                                        output: u(f),
                                        metadata: l,
                                      })),
                                    [2, s])
                                  : [2, s]
                              )
                          }
                        })
                      })
                    }
                  }, xu)
                },
              }
            },
            Mu = {},
            Nu = {},
            ku = 0;
          ku < 256;
          ku++
        ) {
          var Du = ku.toString(16).toLowerCase()
          1 === Du.length && (Du = '0'.concat(Du)), (Mu[ku] = Du), (Nu[Du] = ku)
        }
        function ju(e) {
          for (var t = '', n = 0; n < e.byteLength; n++) t += Mu[e[n]]
          return t
        }
        var Fu = 'X-Amz-Date'.toLowerCase(),
          Bu = ['authorization', Fu, 'date'],
          Uu = 'X-Amz-Signature'.toLowerCase(),
          Hu = 'X-Amz-Security-Token'.toLowerCase(),
          Gu = {
            authorization: !0,
            'cache-control': !0,
            connection: !0,
            expect: !0,
            from: !0,
            'keep-alive': !0,
            'max-forwards': !0,
            pragma: !0,
            referer: !0,
            te: !0,
            trailer: !0,
            'transfer-encoding': !0,
            upgrade: !0,
            'user-agent': !0,
            'x-amzn-trace-id': !0,
          },
          zu = /^proxy-/,
          Wu = /^sec-/,
          qu = 'AWS4-HMAC-SHA256-PAYLOAD',
          Vu = {},
          Ju = [],
          Ku = function (e, t, n) {
            return ''
              .concat(e, '/')
              .concat(t, '/')
              .concat(n, '/')
              .concat('aws4_request')
          },
          Xu = function (e, t, n) {
            var r = new e(t)
            return r.update(n), r.digest()
          },
          Yu = function (e, t, n) {
            var r,
              o,
              i = e.headers,
              a = {}
            try {
              for (
                var u = oa(Object.keys(i).sort()), s = u.next();
                !s.done;
                s = u.next()
              ) {
                var c = s.value,
                  l = c.toLowerCase()
                ;((l in Gu ||
                  (null == t ? void 0 : t.has(l)) ||
                  zu.test(l) ||
                  Wu.test(l)) &&
                  (!n || (n && !n.has(l)))) ||
                  (a[l] = i[c].trim().replace(/\s+/g, ' '))
              }
            } catch (e) {
              r = { error: e }
            } finally {
              try {
                s && !s.done && (o = u.return) && o.call(u)
              } finally {
                if (r) throw r.error
              }
            }
            return a
          },
          Zu = function (e, t) {
            var n = e.headers,
              r = e.body
            return na(void 0, void 0, void 0, function () {
              var e, o, i, a, u, s, c
              return ra(this, function (l) {
                switch (l.label) {
                  case 0:
                    try {
                      for (
                        e = oa(Object.keys(n)), o = e.next();
                        !o.done;
                        o = e.next()
                      )
                        if (
                          'x-amz-content-sha256' === (i = o.value).toLowerCase()
                        )
                          return [2, n[i]]
                    } catch (e) {
                      s = { error: e }
                    } finally {
                      try {
                        o && !o.done && (c = e.return) && c.call(e)
                      } finally {
                        if (s) throw s.error
                      }
                    }
                    return null != r
                      ? [3, 1]
                      : [
                          2,
                          'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855',
                        ]
                  case 1:
                    return 'string' == typeof r ||
                      ArrayBuffer.isView(r) ||
                      ((f = r),
                      ('function' == typeof ArrayBuffer &&
                        f instanceof ArrayBuffer) ||
                        '[object ArrayBuffer]' ===
                          Object.prototype.toString.call(f))
                      ? ((a = new t()).update(r), (u = ju), [4, a.digest()])
                      : [3, 3]
                  case 2:
                    return [2, u.apply(void 0, [l.sent()])]
                  case 3:
                    return [2, 'UNSIGNED-PAYLOAD']
                }
                var f
              })
            })
          },
          $u = function (e) {
            var t = e.headers,
              n = e.query,
              r = ta(e, ['headers', 'query'])
            return ea(ea({}, r), {
              headers: ea({}, t),
              query: n ? Qu(n) : void 0,
            })
          },
          Qu = function (e) {
            return Object.keys(e).reduce(function (t, n) {
              var r,
                o = e[n]
              return ea(
                ea({}, t),
                (((r = {})[n] = Array.isArray(o) ? aa([], ia(o), !1) : o), r),
              )
            }, {})
          },
          es = function (e) {
            var t, n
            e = 'function' == typeof e.clone ? e.clone() : $u(e)
            try {
              for (
                var r = oa(Object.keys(e.headers)), o = r.next();
                !o.done;
                o = r.next()
              ) {
                var i = o.value
                Bu.indexOf(i.toLowerCase()) > -1 && delete e.headers[i]
              }
            } catch (e) {
              t = { error: e }
            } finally {
              try {
                o && !o.done && (n = r.return) && n.call(r)
              } finally {
                if (t) throw t.error
              }
            }
            return e
          },
          ts = function (e) {
            return 'number' == typeof e
              ? new Date(1e3 * e)
              : 'string' == typeof e
              ? Number(e)
                ? new Date(1e3 * Number(e))
                : new Date(e)
              : e
          },
          ns = (function () {
            function e(e) {
              var t = e.applyChecksum,
                n = e.credentials,
                r = e.region,
                o = e.service,
                i = e.sha256,
                a = e.uriEscapePath,
                u = void 0 === a || a
              ;(this.service = o),
                (this.sha256 = i),
                (this.uriEscapePath = u),
                (this.applyChecksum = 'boolean' != typeof t || t),
                (this.regionProvider = la(r)),
                (this.credentialProvider = la(n))
            }
            return (
              (e.prototype.presign = function (e, t) {
                return (
                  void 0 === t && (t = {}),
                  na(this, void 0, void 0, function () {
                    var n,
                      r,
                      o,
                      i,
                      a,
                      u,
                      s,
                      c,
                      l,
                      f,
                      d,
                      p,
                      h,
                      v,
                      g,
                      y,
                      m,
                      w,
                      b,
                      S,
                      _,
                      E,
                      A,
                      O
                    return ra(this, function (C) {
                      switch (C.label) {
                        case 0:
                          return (
                            (n = t.signingDate),
                            (r = void 0 === n ? new Date() : n),
                            (o = t.expiresIn),
                            (i = void 0 === o ? 3600 : o),
                            (a = t.unsignableHeaders),
                            (u = t.unhoistableHeaders),
                            (s = t.signableHeaders),
                            (c = t.signingRegion),
                            (l = t.signingService),
                            [4, this.credentialProvider()]
                          )
                        case 1:
                          return (
                            (f = C.sent()),
                            null == c ? [3, 2] : ((p = c), [3, 4])
                          )
                        case 2:
                          return [4, this.regionProvider()]
                        case 3:
                          ;(p = C.sent()), (C.label = 4)
                        case 4:
                          return (
                            (d = p),
                            (h = rs(r)),
                            (v = h.longDate),
                            (g = h.shortDate),
                            i > 604800
                              ? [
                                  2,
                                  Promise.reject(
                                    'Signature version 4 presigned URLs must have an expiration date less than one week in the future',
                                  ),
                                ]
                              : ((y = Ku(g, d, null != l ? l : this.service)),
                                (m = (function (e, t) {
                                  var n, r, o
                                  void 0 === t && (t = {})
                                  var i =
                                      'function' == typeof e.clone
                                        ? e.clone()
                                        : $u(e),
                                    a = i.headers,
                                    u = i.query,
                                    s = void 0 === u ? {} : u
                                  try {
                                    for (
                                      var c = oa(Object.keys(a)), l = c.next();
                                      !l.done;
                                      l = c.next()
                                    ) {
                                      var f = l.value,
                                        d = f.toLowerCase()
                                      'x-amz-' !== d.slice(0, 6) ||
                                        (null === (o = t.unhoistableHeaders) ||
                                        void 0 === o
                                          ? void 0
                                          : o.has(d)) ||
                                        ((s[f] = a[f]), delete a[f])
                                    }
                                  } catch (e) {
                                    n = { error: e }
                                  } finally {
                                    try {
                                      l &&
                                        !l.done &&
                                        (r = c.return) &&
                                        r.call(c)
                                    } finally {
                                      if (n) throw n.error
                                    }
                                  }
                                  return ea(ea({}, e), { headers: a, query: s })
                                })(es(e), { unhoistableHeaders: u })),
                                f.sessionToken &&
                                  (m.query['X-Amz-Security-Token'] =
                                    f.sessionToken),
                                (m.query['X-Amz-Algorithm'] =
                                  'AWS4-HMAC-SHA256'),
                                (m.query['X-Amz-Credential'] = ''
                                  .concat(f.accessKeyId, '/')
                                  .concat(y)),
                                (m.query['X-Amz-Date'] = v),
                                (m.query['X-Amz-Expires'] = i.toString(10)),
                                (w = Yu(m, a, s)),
                                (m.query['X-Amz-SignedHeaders'] = os(w)),
                                (b = m.query),
                                (S = 'X-Amz-Signature'),
                                (_ = this.getSignature),
                                (E = [v, y, this.getSigningKey(f, d, g, l)]),
                                (A = this.createCanonicalRequest),
                                (O = [m, w]),
                                [4, Zu(e, this.sha256)])
                          )
                        case 5:
                          return [
                            4,
                            _.apply(
                              this,
                              E.concat([A.apply(this, O.concat([C.sent()]))]),
                            ),
                          ]
                        case 6:
                          return (b[S] = C.sent()), [2, m]
                      }
                    })
                  })
                )
              }),
              (e.prototype.sign = function (e, t) {
                return na(this, void 0, void 0, function () {
                  return ra(this, function (n) {
                    return 'string' == typeof e
                      ? [2, this.signString(e, t)]
                      : e.headers && e.payload
                      ? [2, this.signEvent(e, t)]
                      : [2, this.signRequest(e, t)]
                  })
                })
              }),
              (e.prototype.signEvent = function (e, t) {
                var n = e.headers,
                  r = e.payload,
                  o = t.signingDate,
                  i = void 0 === o ? new Date() : o,
                  a = t.priorSignature,
                  u = t.signingRegion,
                  s = t.signingService
                return na(this, void 0, void 0, function () {
                  var e, t, o, c, l, f, d, p, h, v, g
                  return ra(this, function (y) {
                    switch (y.label) {
                      case 0:
                        return null == u ? [3, 1] : ((t = u), [3, 3])
                      case 1:
                        return [4, this.regionProvider()]
                      case 2:
                        ;(t = y.sent()), (y.label = 3)
                      case 3:
                        return (
                          (e = t),
                          (o = rs(i)),
                          (c = o.shortDate),
                          (l = o.longDate),
                          (f = Ku(c, e, null != s ? s : this.service)),
                          [4, Zu({ headers: {}, body: r }, this.sha256)]
                        )
                      case 4:
                        return (
                          (d = y.sent()),
                          (p = new this.sha256()).update(n),
                          (v = ju),
                          [4, p.digest()]
                        )
                      case 5:
                        return (
                          (h = v.apply(void 0, [y.sent()])),
                          (g = [qu, l, f, a, h, d].join('\n')),
                          [
                            2,
                            this.signString(g, {
                              signingDate: i,
                              signingRegion: e,
                              signingService: s,
                            }),
                          ]
                        )
                    }
                  })
                })
              }),
              (e.prototype.signString = function (e, t) {
                var n = void 0 === t ? {} : t,
                  r = n.signingDate,
                  o = void 0 === r ? new Date() : r,
                  i = n.signingRegion,
                  a = n.signingService
                return na(this, void 0, void 0, function () {
                  var t, n, r, u, s, c, l, f
                  return ra(this, function (d) {
                    switch (d.label) {
                      case 0:
                        return [4, this.credentialProvider()]
                      case 1:
                        return (
                          (t = d.sent()), null == i ? [3, 2] : ((r = i), [3, 4])
                        )
                      case 2:
                        return [4, this.regionProvider()]
                      case 3:
                        ;(r = d.sent()), (d.label = 4)
                      case 4:
                        return (
                          (n = r),
                          (u = rs(o).shortDate),
                          (l = (c = this.sha256).bind),
                          [4, this.getSigningKey(t, n, u, a)]
                        )
                      case 5:
                        return (
                          (s = new (l.apply(c, [void 0, d.sent()]))()).update(
                            e,
                          ),
                          (f = ju),
                          [4, s.digest()]
                        )
                      case 6:
                        return [2, f.apply(void 0, [d.sent()])]
                    }
                  })
                })
              }),
              (e.prototype.signRequest = function (e, t) {
                var n = void 0 === t ? {} : t,
                  r = n.signingDate,
                  o = void 0 === r ? new Date() : r,
                  i = n.signableHeaders,
                  a = n.unsignableHeaders,
                  u = n.signingRegion,
                  s = n.signingService
                return na(this, void 0, void 0, function () {
                  var t, n, r, c, l, f, d, p, h, v, g
                  return ra(this, function (y) {
                    switch (y.label) {
                      case 0:
                        return [4, this.credentialProvider()]
                      case 1:
                        return (
                          (t = y.sent()), null == u ? [3, 2] : ((r = u), [3, 4])
                        )
                      case 2:
                        return [4, this.regionProvider()]
                      case 3:
                        ;(r = y.sent()), (y.label = 4)
                      case 4:
                        return (
                          (n = r),
                          (c = es(e)),
                          (l = rs(o)),
                          (f = l.longDate),
                          (d = l.shortDate),
                          (p = Ku(d, n, null != s ? s : this.service)),
                          (c.headers[Fu] = f),
                          t.sessionToken && (c.headers[Hu] = t.sessionToken),
                          [4, Zu(c, this.sha256)]
                        )
                      case 5:
                        return (
                          (h = y.sent()),
                          !(function (e, t) {
                            var n, r
                            e = e.toLowerCase()
                            try {
                              for (
                                var o = oa(Object.keys(t)), i = o.next();
                                !i.done;
                                i = o.next()
                              ) {
                                if (e === i.value.toLowerCase()) return !0
                              }
                            } catch (e) {
                              n = { error: e }
                            } finally {
                              try {
                                i && !i.done && (r = o.return) && r.call(o)
                              } finally {
                                if (n) throw n.error
                              }
                            }
                            return !1
                          })('x-amz-content-sha256', c.headers) &&
                            this.applyChecksum &&
                            (c.headers['x-amz-content-sha256'] = h),
                          (v = Yu(c, a, i)),
                          [
                            4,
                            this.getSignature(
                              f,
                              p,
                              this.getSigningKey(t, n, d, s),
                              this.createCanonicalRequest(c, v, h),
                            ),
                          ]
                        )
                      case 6:
                        return (
                          (g = y.sent()),
                          (c.headers.authorization =
                            ''.concat('AWS4-HMAC-SHA256', ' ') +
                            'Credential='
                              .concat(t.accessKeyId, '/')
                              .concat(p, ', ') +
                            'SignedHeaders='.concat(os(v), ', ') +
                            'Signature='.concat(g)),
                          [2, c]
                        )
                    }
                  })
                })
              }),
              (e.prototype.createCanonicalRequest = function (e, t, n) {
                var r = Object.keys(t).sort()
                return ''
                  .concat(e.method, '\n')
                  .concat(this.getCanonicalPath(e), '\n')
                  .concat(
                    (function (e) {
                      var t,
                        n,
                        r = e.query,
                        o = void 0 === r ? {} : r,
                        i = [],
                        a = {},
                        u = function (e) {
                          if (e.toLowerCase() === Uu) return 'continue'
                          i.push(e)
                          var t = o[e]
                          'string' == typeof t
                            ? (a[e] = ''.concat(ma(e), '=').concat(ma(t)))
                            : Array.isArray(t) &&
                              (a[e] = t
                                .slice(0)
                                .sort()
                                .reduce(function (t, n) {
                                  return t.concat([
                                    ''.concat(ma(e), '=').concat(ma(n)),
                                  ])
                                }, [])
                                .join('&'))
                        }
                      try {
                        for (
                          var s = oa(Object.keys(o).sort()), c = s.next();
                          !c.done;
                          c = s.next()
                        ) {
                          u(c.value)
                        }
                      } catch (e) {
                        t = { error: e }
                      } finally {
                        try {
                          c && !c.done && (n = s.return) && n.call(s)
                        } finally {
                          if (t) throw t.error
                        }
                      }
                      return i
                        .map(function (e) {
                          return a[e]
                        })
                        .filter(function (e) {
                          return e
                        })
                        .join('&')
                    })(e),
                    '\n',
                  )
                  .concat(
                    r
                      .map(function (e) {
                        return ''.concat(e, ':').concat(t[e])
                      })
                      .join('\n'),
                    '\n\n',
                  )
                  .concat(r.join(';'), '\n')
                  .concat(n)
              }),
              (e.prototype.createStringToSign = function (e, t, n) {
                return na(this, void 0, void 0, function () {
                  var r, o
                  return ra(this, function (i) {
                    switch (i.label) {
                      case 0:
                        return (
                          (r = new this.sha256()).update(n), [4, r.digest()]
                        )
                      case 1:
                        return (
                          (o = i.sent()),
                          [
                            2,
                            ''
                              .concat('AWS4-HMAC-SHA256', '\n')
                              .concat(e, '\n')
                              .concat(t, '\n')
                              .concat(ju(o)),
                          ]
                        )
                    }
                  })
                })
              }),
              (e.prototype.getCanonicalPath = function (e) {
                var t,
                  n,
                  r = e.path
                if (this.uriEscapePath) {
                  var o = []
                  try {
                    for (
                      var i = oa(r.split('/')), a = i.next();
                      !a.done;
                      a = i.next()
                    ) {
                      var u = a.value
                      0 !== (null == u ? void 0 : u.length) &&
                        '.' !== u &&
                        ('..' === u ? o.pop() : o.push(u))
                    }
                  } catch (e) {
                    t = { error: e }
                  } finally {
                    try {
                      a && !a.done && (n = i.return) && n.call(i)
                    } finally {
                      if (t) throw t.error
                    }
                  }
                  var s = ''
                    .concat((null == r ? void 0 : r.startsWith('/')) ? '/' : '')
                    .concat(o.join('/'))
                    .concat(
                      o.length > 0 && (null == r ? void 0 : r.endsWith('/'))
                        ? '/'
                        : '',
                    )
                  return encodeURIComponent(s).replace(/%2F/g, '/')
                }
                return r
              }),
              (e.prototype.getSignature = function (e, t, n, r) {
                return na(this, void 0, void 0, function () {
                  var o, i, a, u, s
                  return ra(this, function (c) {
                    switch (c.label) {
                      case 0:
                        return [4, this.createStringToSign(e, t, r)]
                      case 1:
                        return (
                          (o = c.sent()), (u = (a = this.sha256).bind), [4, n]
                        )
                      case 2:
                        return (
                          (i = new (u.apply(a, [void 0, c.sent()]))()).update(
                            o,
                          ),
                          (s = ju),
                          [4, i.digest()]
                        )
                      case 3:
                        return [2, s.apply(void 0, [c.sent()])]
                    }
                  })
                })
              }),
              (e.prototype.getSigningKey = function (e, t, n, r) {
                return (function (e, t, n, r, o) {
                  return na(void 0, void 0, void 0, function () {
                    var i, a, u, s, c, l, f, d, p
                    return ra(this, function (h) {
                      switch (h.label) {
                        case 0:
                          return [4, Xu(e, t.secretAccessKey, t.accessKeyId)]
                        case 1:
                          if (
                            ((i = h.sent()),
                            (a = ''
                              .concat(n, ':')
                              .concat(r, ':')
                              .concat(o, ':')
                              .concat(ju(i), ':')
                              .concat(t.sessionToken)) in Vu)
                          )
                            return [2, Vu[a]]
                          for (Ju.push(a); Ju.length > 50; )
                            delete Vu[Ju.shift()]
                          ;(u = 'AWS4'.concat(t.secretAccessKey)), (h.label = 2)
                        case 2:
                          h.trys.push([2, 7, 8, 9]),
                            (s = oa([n, r, o, 'aws4_request'])),
                            (c = s.next()),
                            (h.label = 3)
                        case 3:
                          return c.done
                            ? [3, 6]
                            : ((l = c.value), [4, Xu(e, u, l)])
                        case 4:
                          ;(u = h.sent()), (h.label = 5)
                        case 5:
                          return (c = s.next()), [3, 3]
                        case 6:
                          return [3, 9]
                        case 7:
                          return (f = h.sent()), (d = { error: f }), [3, 9]
                        case 8:
                          try {
                            c && !c.done && (p = s.return) && p.call(s)
                          } finally {
                            if (d) throw d.error
                          }
                          return [7]
                        case 9:
                          return [2, (Vu[a] = u)]
                      }
                    })
                  })
                })(this.sha256, e, n, t, r || this.service)
              }),
              e
            )
          })(),
          rs = function (e) {
            var t,
              n = ((t = e),
              ts(t)
                .toISOString()
                .replace(/\.\d{3}Z$/, 'Z')).replace(/[\-:]/g, '')
            return { longDate: n, shortDate: n.slice(0, 8) }
          },
          os = function (e) {
            return Object.keys(e).sort().join(';')
          },
          is = function (e) {
            if ('object' == typeof e) {
              var t = Promise.resolve(e)
              return function () {
                return t
              }
            }
            return e
          },
          as = function (e) {
            return 'function' == typeof e
              ? Eu(
                  e,
                  function (e) {
                    return (
                      void 0 !== e.expiration &&
                      e.expiration.getTime() - Date.now() < 3e5
                    )
                  },
                  function (e) {
                    return void 0 !== e.expiration
                  },
                )
              : is(e)
          },
          us = function (e) {
            return new Date(Date.now() + e)
          },
          ss = function (e, t) {
            var n = Date.parse(e)
            return (function (e, t) {
              return Math.abs(us(t).getTime() - e) >= 3e5
            })(n, t)
              ? n - Date.now()
              : t
          },
          cs = function (e) {
            var t, n, r
            return ya.isInstance(e)
              ? null !==
                  (n =
                    null === (t = e.headers) || void 0 === t
                      ? void 0
                      : t.date) && void 0 !== n
                ? n
                : null === (r = e.headers) || void 0 === r
                ? void 0
                : r.Date
              : void 0
          },
          ls = {
            name: 'awsAuthMiddleware',
            tags: ['SIGNATURE', 'AWSAUTH'],
            relation: 'after',
            toMiddleware: 'retryMiddleware',
            override: !0,
          },
          fs = function (e) {
            return {
              applyToStack: function (t) {
                t.addRelativeTo(
                  (function (e) {
                    return function (t, n) {
                      return function (r) {
                        return na(this, void 0, void 0, function () {
                          var o, i, a, u, s, c
                          return ra(this, function (l) {
                            switch (l.label) {
                              case 0:
                                return ga.isInstance(r.request)
                                  ? [4, e.signer()]
                                  : [2, t(r)]
                              case 1:
                                return (
                                  (o = l.sent()),
                                  (a = t),
                                  (u = [ea({}, r)]),
                                  (c = {}),
                                  [
                                    4,
                                    o.sign(r.request, {
                                      signingDate: us(e.systemClockOffset),
                                      signingRegion: n.signing_region,
                                      signingService: n.signing_service,
                                    }),
                                  ]
                                )
                              case 2:
                                return [
                                  4,
                                  a
                                    .apply(void 0, [
                                      ea.apply(
                                        void 0,
                                        u.concat([((c.request = l.sent()), c)]),
                                      ),
                                    ])
                                    .catch(function (t) {
                                      var n,
                                        r =
                                          null !== (n = t.ServerTime) &&
                                          void 0 !== n
                                            ? n
                                            : cs(t.$response)
                                      throw (
                                        (r &&
                                          (e.systemClockOffset = ss(
                                            r,
                                            e.systemClockOffset,
                                          )),
                                        t)
                                      )
                                    }),
                                ]
                              case 3:
                                return (
                                  (i = l.sent()),
                                  (s = cs(i.response)) &&
                                    (e.systemClockOffset = ss(
                                      s,
                                      e.systemClockOffset,
                                    )),
                                  [2, i]
                                )
                            }
                          })
                        })
                      }
                    }
                  })(e),
                  ls,
                )
              },
            }
          }
        var ds,
          ps,
          hs,
          vs,
          gs,
          ys,
          ms,
          ws,
          bs,
          Ss,
          _s,
          Es,
          As,
          Os,
          Cs,
          Ts,
          Rs,
          Ps,
          Is,
          xs,
          Ls,
          Ms,
          Ns,
          ks,
          Ds,
          js,
          Fs,
          Bs,
          Us,
          Hs,
          Gs = /[^\!\#\$\%\&\'\*\+\-\.\^\_\`\|\~\d\w]/g,
          zs = function (e) {
            var t = ia(e, 2),
              n = t[0],
              r = t[1],
              o = n.indexOf('/'),
              i = n.substring(0, o),
              a = n.substring(o + 1)
            return (
              'api' === i && (a = a.toLowerCase()),
              [i, a, r]
                .filter(function (e) {
                  return e && e.length > 0
                })
                .map(function (e) {
                  return null == e ? void 0 : e.replace(Gs, '_')
                })
                .join('/')
            )
          },
          Ws = {
            name: 'getUserAgentMiddleware',
            step: 'build',
            priority: 'low',
            tags: ['SET_USER_AGENT', 'USER_AGENT'],
            override: !0,
          },
          qs = function (e) {
            return {
              applyToStack: function (t) {
                var n
                t.add(
                  ((n = e),
                  function (e, t) {
                    return function (r) {
                      return na(void 0, void 0, void 0, function () {
                        var o, i, a, u, s, c, l, f, d
                        return ra(this, function (p) {
                          switch (p.label) {
                            case 0:
                              return (
                                (o = r.request),
                                ga.isInstance(o)
                                  ? ((i = o.headers),
                                    (a =
                                      (null ===
                                        (f =
                                          null == t ? void 0 : t.userAgent) ||
                                      void 0 === f
                                        ? void 0
                                        : f.map(zs)) || []),
                                    [4, n.defaultUserAgentProvider()])
                                  : [2, e(r)]
                              )
                            case 1:
                              return (
                                (u = p.sent().map(zs)),
                                (s =
                                  (null ===
                                    (d =
                                      null == n ? void 0 : n.customUserAgent) ||
                                  void 0 === d
                                    ? void 0
                                    : d.map(zs)) || []),
                                (c = aa(
                                  aa(aa([], ia(u), !1), ia(a), !1),
                                  ia(s),
                                  !1,
                                ).join(' ')),
                                (l = aa(
                                  aa(
                                    [],
                                    ia(
                                      u.filter(function (e) {
                                        return e.startsWith('aws-sdk-')
                                      }),
                                    ),
                                    !1,
                                  ),
                                  ia(s),
                                  !1,
                                ).join(' ')),
                                'browser' !== n.runtime
                                  ? (l &&
                                      (i['x-amz-user-agent'] = i[
                                        'x-amz-user-agent'
                                      ]
                                        ? ''
                                            .concat(i['user-agent'], ' ')
                                            .concat(l)
                                        : l),
                                    (i['user-agent'] = c))
                                  : (i['x-amz-user-agent'] = c),
                                [2, e(ea(ea({}, r), { request: o }))]
                              )
                          }
                        })
                      })
                    }
                  }),
                  Ws,
                )
              },
            }
          },
          Vs = (function (e) {
            function t(t) {
              var n,
                r,
                o,
                i = this,
                a = (function (e) {
                  var t = e.region,
                    n = e.useFipsEndpoint
                  if (!t) throw new Error('Region is missing')
                  return ea(ea({}, e), {
                    region: function () {
                      return na(void 0, void 0, void 0, function () {
                        var e
                        return ra(this, function (n) {
                          switch (n.label) {
                            case 0:
                              return 'string' == typeof t
                                ? [2, pa(t)]
                                : [4, t()]
                            case 1:
                              return (e = n.sent()), [2, pa(e)]
                          }
                        })
                      })
                    },
                    useFipsEndpoint: function () {
                      return na(void 0, void 0, void 0, function () {
                        var e
                        return ra(this, function (r) {
                          switch (r.label) {
                            case 0:
                              return 'string' != typeof t
                                ? [3, 1]
                                : ((e = t), [3, 3])
                            case 1:
                              return [4, t()]
                            case 2:
                              ;(e = r.sent()), (r.label = 3)
                            case 3:
                              return da(e)
                                ? [2, !0]
                                : [
                                    2,
                                    'boolean' == typeof n
                                      ? Promise.resolve(n)
                                      : n(),
                                  ]
                          }
                        })
                      })
                    },
                  })
                })(Cu(t)),
                u = fa(a),
                s = (function (e) {
                  return ea(ea({}, e), {
                    customUserAgent:
                      'string' == typeof e.customUserAgent
                        ? [[e.customUserAgent]]
                        : e.customUserAgent,
                  })
                })(
                  (function (e) {
                    var t,
                      n = e.credentials
                        ? as(e.credentials)
                        : e.credentialDefaultProvider(e),
                      r = e.signingEscapePath,
                      o = void 0 === r || r,
                      i = e.systemClockOffset,
                      a = void 0 === i ? e.systemClockOffset || 0 : i,
                      u = e.sha256
                    return (
                      (t = e.signer
                        ? is(e.signer)
                        : function () {
                            return is(e.region)()
                              .then(function (t) {
                                return na(void 0, void 0, void 0, function () {
                                  var n, r, o, i
                                  return ra(this, function (a) {
                                    switch (a.label) {
                                      case 0:
                                        return (
                                          (r = (n = e).regionInfoProvider),
                                          (o = [t]),
                                          (i = {}),
                                          [4, e.useFipsEndpoint()]
                                        )
                                      case 1:
                                        return (
                                          (i.useFipsEndpoint = a.sent()),
                                          [4, e.useDualstackEndpoint()]
                                        )
                                      case 2:
                                        return [
                                          4,
                                          r.apply(
                                            n,
                                            o.concat([
                                              ((i.useDualstackEndpoint = a.sent()),
                                              i),
                                            ]),
                                          ),
                                        ]
                                      case 3:
                                        return [2, [a.sent() || {}, t]]
                                    }
                                  })
                                })
                              })
                              .then(function (t) {
                                var r = ia(t, 2),
                                  i = r[0],
                                  a = r[1],
                                  s = i.signingRegion,
                                  c = i.signingService
                                ;(e.signingRegion = e.signingRegion || s || a),
                                  (e.signingName =
                                    e.signingName || c || e.serviceId)
                                var l = ea(ea({}, e), {
                                  credentials: n,
                                  region: e.signingRegion,
                                  service: e.signingName,
                                  sha256: u,
                                  uriEscapePath: o,
                                })
                                return new (e.signerConstructor || ns)(l)
                              })
                          }),
                      ea(ea({}, e), {
                        systemClockOffset: a,
                        signingEscapePath: o,
                        credentials: n,
                        signer: t,
                      })
                    )
                  })(
                    ((o = la(
                      null !== (r = (n = u).maxAttempts) && void 0 !== r
                        ? r
                        : 3,
                    )),
                    ea(ea({}, n), {
                      maxAttempts: o,
                      retryStrategy: function () {
                        return na(void 0, void 0, void 0, function () {
                          return ra(this, function (e) {
                            switch (e.label) {
                              case 0:
                                return n.retryStrategy
                                  ? [2, n.retryStrategy]
                                  : [4, la(n.retryMode)()]
                              case 1:
                                return e.sent() === La.ADAPTIVE
                                  ? [2, new Qa(o)]
                                  : [2, new Za(o)]
                            }
                          })
                        })
                      },
                    })),
                  ),
                )
              return (
                ((i = e.call(this, s) || this).config = s),
                i.middlewareStack.use(tu(i.config)),
                i.middlewareStack.use(Ru(i.config)),
                i.middlewareStack.use(Iu(i.config)),
                i.middlewareStack.use(Lu(i.config)),
                i.middlewareStack.use(fs(i.config)),
                i.middlewareStack.use(qs(i.config)),
                i
              )
            }
            return (
              Qi(t, e),
              (t.prototype.destroy = function () {
                e.prototype.destroy.call(this)
              }),
              t
            )
          })(hu),
          Js = (function (e) {
            function t(n) {
              var r = e.call(this, n) || this
              return Object.setPrototypeOf(r, t.prototype), r
            }
            return Qi(t, e), t
          })(Su)
        !(function (e) {
          e.filterSensitiveLog = function (e) {
            return ea({}, e)
          }
        })(ds || (ds = {})),
          (function (e) {
            e.filterSensitiveLog = function (e) {
              return ea({}, e)
            }
          })(ps || (ps = {})),
          (function (e) {
            ;(e.COLOR_THEME = 'colorTheme'),
              (e.DEFAULT_REGION = 'defaultRegion'),
              (e.FAVORITES_CONSOLE = 'favoritesConsole'),
              (e.FAVORITE_BAR_DISPLAY = 'favoriteBarDisplay'),
              (e.GLOBAL_REGION_OPT_IN_STATE = 'globalRegionOptInState'),
              (e.LOCALE = 'locale'),
              (e.RECENTS_CONSOLE = 'recentsConsole'),
              (e.TIMEZONE = 'timezone'),
              (e.UNIFIED_EXPERIENCE_LAST_WIDGET_ANNOUNCEMENT_DISMISSED_TIMESTAMP =
                'unifiedExperienceLastWidgetAnnouncementDismissedTimestamp'),
              (e.UNIFIED_EXPERIENCE_OPT_IN_STATE_CONSOLE_HOME =
                'unifiedExperienceOptInStateConsoleHome')
          })(hs || (hs = {})),
          (function (e) {
            e.filterSensitiveLog = function (e) {
              return ea({}, e)
            }
          })(vs || (vs = {})),
          (function (e) {
            ;(e.DARK = 'dark'), (e.DEFAULT = 'default'), (e.LIGHT = 'light')
          })(gs || (gs = {})),
          (function (e) {
            e.filterSensitiveLog = function (e) {
              return ea({}, e)
            }
          })(ys || (ys = {})),
          (function (e) {
            ;(e.AKL = 'ap-southeast-6'),
              (e.ALE = 'us-isof-south-1'),
              (e.APA = 'us-iso-west-1'),
              (e.ARN = 'eu-north-1'),
              (e.BAH = 'me-south-1'),
              (e.BJS = 'cn-north-1'),
              (e.BKK = 'ap-southeast-7'),
              (e.BOM = 'ap-south-1'),
              (e.CDG = 'eu-west-3'),
              (e.CGK = 'ap-southeast-3'),
              (e.CMH = 'us-east-2'),
              (e.CPT = 'af-south-1'),
              (e.DCA = 'us-iso-east-1'),
              (e.DUB = 'eu-west-1'),
              (e.DXB = 'me-central-1'),
              (e.FFZ = 'us-isob-west-1'),
              (e.FRA = 'eu-central-1'),
              (e.GRU = 'sa-east-1'),
              (e.HKG = 'ap-east-1'),
              (e.HYD = 'ap-south-2'),
              (e.IAD = 'us-east-1'),
              (e.ICN = 'ap-northeast-2'),
              (e.KIX = 'ap-northeast-3'),
              (e.KUL = 'ap-southeast-5'),
              (e.LCK = 'us-isob-east-1'),
              (e.LHR = 'eu-west-2'),
              (e.LTW = 'us-isof-east-1'),
              (e.MEL = 'ap-southeast-4'),
              (e.MXP = 'eu-south-1'),
              (e.NCL = 'eu-isoe-west-1'),
              (e.NRT = 'ap-northeast-1'),
              (e.OSU = 'us-gov-east-1'),
              (e.PDT = 'us-gov-west-1'),
              (e.PDX = 'us-west-2'),
              (e.QRO = 'mx-central-1'),
              (e.SFO = 'us-west-1'),
              (e.SIN = 'ap-southeast-1'),
              (e.SYD = 'ap-southeast-2'),
              (e.TLV = 'il-central-1'),
              (e.TPE = 'ap-east-2'),
              (e.YUL = 'ca-central-1'),
              (e.YYC = 'ca-west-1'),
              (e.ZAZ = 'eu-south-2'),
              (e.ZHY = 'cn-northwest-1'),
              (e.ZRH = 'eu-central-2')
          })(ms || (ms = {})),
          (function (e) {
            e.filterSensitiveLog = function (e) {
              return ea({}, e)
            }
          })(ws || (ws = {})),
          (function (e) {
            ;(e.ICON_AND_NAME = 'iconAndName'), (e.ICON_ONLY = 'iconOnly')
          })(bs || (bs = {})),
          (function (e) {
            e.filterSensitiveLog = function (e) {
              return ea({}, e)
            }
          })(Ss || (Ss = {})),
          (function (e) {
            e.filterSensitiveLog = function (e) {
              return ea({}, e)
            }
          })(_s || (_s = {})),
          (function (e) {
            e.filterSensitiveLog = function (e) {
              return ea({}, e)
            }
          })(Es || (Es = {})),
          (function (e) {
            ;(e.OPTED_IN = 'optedIn'), (e.OPTED_OUT = 'optedOut')
          })(As || (As = {})),
          (function (e) {
            e.filterSensitiveLog = function (e) {
              return ea({}, e)
            }
          })(Os || (Os = {})),
          (function (e) {
            e.filterSensitiveLog = function (e) {
              return ea({}, e)
            }
          })(Cs || (Cs = {})),
          (function (e) {
            e.filterSensitiveLog = function (e) {
              return ea({}, e)
            }
          })(Ts || (Ts = {})),
          (function (e) {
            e.filterSensitiveLog = function (e) {
              return ea({}, e)
            }
          })(Rs || (Rs = {})),
          (function (e) {
            ;(e.LOCAL = 'local'), (e.UTC = 'utc')
          })(Ps || (Ps = {})),
          (function (e) {
            e.filterSensitiveLog = function (e) {
              return ea({}, e)
            }
          })(Is || (Is = {})),
          (function (e) {
            e.filterSensitiveLog = function (e) {
              return ea({}, e)
            }
          })(xs || (xs = {})),
          (function (e) {
            ;(e.OPTED_IN = 'optedIn'), (e.OPTED_OUT = 'optedOut')
          })(Ls || (Ls = {})),
          (function (e) {
            e.filterSensitiveLog = function (e) {
              return ea({}, e)
            }
          })(Ms || (Ms = {})),
          (function (e) {
            e.filterSensitiveLog = function (e) {
              return ea({}, e)
            }
          })(Ns || (Ns = {})),
          (function (e) {
            e.filterSensitiveLog = function (e) {
              return ea({}, e)
            }
          })(ks || (ks = {})),
          (function (e) {
            e.filterSensitiveLog = function (e) {
              return ea({}, e)
            }
          })(Ds || (Ds = {})),
          (function (e) {
            ;(e.COLOR_THEME = 'colorTheme'),
              (e.DEFAULT_REGION = 'defaultRegion'),
              (e.GLOBAL_REGION_OPTIN_STATE = 'globalRegionOptInState'),
              (e.LOCALE = 'locale'),
              (e.UNIFIED_EXPERIENCE_LAST_WIDGET_ANNOUNCEMENT_DISMISSED_TIMESTAMP =
                'unifiedExperienceLastWidgetAnnouncementDismissedTimestamp'),
              (e.UNIFIED_EXPERIENCE_OPT_IN_STATE_CONSOLE_HOME =
                'unifiedExperienceOptInStateConsoleHome')
          })(js || (js = {})),
          (function (e) {
            e.filterSensitiveLog = function (e) {
              return ea({}, e)
            }
          })(Fs || (Fs = {})),
          (function (e) {
            e.filterSensitiveLog = function (e) {
              return ea({}, e)
            }
          })(Bs || (Bs = {})),
          (function (e) {
            e.filterSensitiveLog = function (e) {
              return ea({}, e)
            }
          })(Us || (Us = {})),
          (function (e) {
            e.filterSensitiveLog = function (e) {
              return ea({}, e)
            }
          })(Hs || (Hs = {}))
        var Ks, Xs, Ys, Zs, $s, Qs, ec, tc, nc, rc, oc, ic, ac, uc
        ;(function (e) {
          function t(n) {
            var r =
              e.call(
                this,
                ea({ name: 'BadRequestException', $fault: 'client' }, n),
              ) || this
            return (
              (r.name = 'BadRequestException'),
              (r.$fault = 'client'),
              Object.setPrototypeOf(r, t.prototype),
              (r.code = n.code),
              r
            )
          }
          Qi(t, e)
        })(Js),
          (function (e) {
            function t(n) {
              var r =
                e.call(
                  this,
                  ea({ name: 'InternalServiceException', $fault: 'server' }, n),
                ) || this
              return (
                (r.name = 'InternalServiceException'),
                (r.$fault = 'server'),
                Object.setPrototypeOf(r, t.prototype),
                (r.code = n.code),
                r
              )
            }
            Qi(t, e)
          })(Js)
        !(function (e) {
          e.FAVORITES_CONSOLE = 'favoritesConsole'
        })(Ks || (Ks = {})),
          (function (e) {
            e.filterSensitiveLog = function (e) {
              return ea({}, e)
            }
          })(Xs || (Xs = {})),
          (function (e) {
            e.filterSensitiveLog = function (e) {
              return ea({}, e)
            }
          })(Ys || (Ys = {})),
          (function (e) {
            e.filterSensitiveLog = function (e) {
              return ea({}, e)
            }
          })(Zs || (Zs = {})),
          (function (e) {
            e.filterSensitiveLog = function (e) {
              return ea({}, e)
            }
          })($s || ($s = {})),
          (function (e) {
            e.RECENTS_CONSOLE = 'recentsConsole'
          })(Qs || (Qs = {})),
          (function (e) {
            e.filterSensitiveLog = function (e) {
              return ea({}, e)
            }
          })(ec || (ec = {})),
          (function (e) {
            e.filterSensitiveLog = function (e) {
              return ea({}, e)
            }
          })(tc || (tc = {})),
          (function (e) {
            e.filterSensitiveLog = function (e) {
              return ea({}, e)
            }
          })(nc || (nc = {})),
          (function (e) {
            e.filterSensitiveLog = function (e) {
              return ea({}, e)
            }
          })(rc || (rc = {})),
          (function (e) {
            e.filterSensitiveLog = function (e) {
              return ea({}, e)
            }
          })(oc || (oc = {})),
          (function (e) {
            e.filterSensitiveLog = function (e) {
              return ea({}, e)
            }
          })(ic || (ic = {})),
          (function (e) {
            e.filterSensitiveLog = function (e) {
              return ea({}, e)
            }
          })(ac || (ac = {})),
          (function (e) {
            e.filterSensitiveLog = function (e) {
              return ea({}, e)
            }
          })(uc || (uc = {}))
        var sc = function (e, t) {
            return na(void 0, void 0, void 0, function () {
              var n, r, o, i, a
              return ra(this, function (u) {
                switch (u.label) {
                  case 0:
                    return (r = [ea({}, e)]), (a = {}), [4, Tc(e.body, t)]
                  case 1:
                    throw (
                      ((n = ea.apply(
                        void 0,
                        r.concat([((a.body = u.sent()), a)]),
                      )),
                      'UnknownError',
                      (o = Rc(e, n.body)),
                      (i = n.body),
                      (function (e, t) {
                        void 0 === t && (t = {}),
                          Object.entries(t)
                            .filter(function (e) {
                              return void 0 !== ia(e, 2)[1]
                            })
                            .forEach(function (t) {
                              var n = ia(t, 2),
                                r = n[0],
                                o = n[1]
                              ;(null != e[r] && '' !== e[r]) || (e[r] = o)
                            })
                        var n = e.message || e.Message || 'UnknownError'
                        return (e.message = n), delete e.Message, e
                      })(
                        new Js({
                          name: i.code || i.Code || o,
                          $fault: 'client',
                          $metadata: Oc(e),
                        }),
                        i,
                      ))
                    )
                }
              })
            })
          },
          cc = function (e, t) {
            return e
              .filter(function (e) {
                return null != e
              })
              .map(function (e) {
                return null === e ? null : e
              })
          },
          lc = function (e, t) {
            return e
              .filter(function (e) {
                return null != e
              })
              .map(function (e) {
                return null === e ? null : e
              })
          },
          fc = function (e, t) {
            return { value: wu(e.value) }
          },
          dc = function (e, t) {
            return { value: wu(e.value) }
          },
          pc = function (e, t) {
            return { value: wu(e.value) }
          },
          hc = function (e, t) {
            return (e || [])
              .filter(function (e) {
                return null != e
              })
              .map(function (e) {
                return null === e
                  ? null
                  : (function (e, t) {
                      return { type: wu(e.type), value: wu(e.value) }
                    })(e)
              })
          },
          vc = function (e, t) {
            return {
              value:
                void 0 !== e.value && null !== e.value ? hc(e.value) : void 0,
            }
          },
          gc = function (e, t) {
            return { value: wu(e.value) }
          },
          yc = function (e, t) {
            return { value: wu(e.value) }
          },
          mc = function (e, t) {
            return (e || [])
              .filter(function (e) {
                return null != e
              })
              .map(function (e) {
                return null === e
                  ? null
                  : (function (e, t) {
                      return { type: wu(e.type), value: wu(e.value) }
                    })(e)
              })
          },
          wc = function (e, t) {
            return {
              value:
                void 0 !== e.value && null !== e.value ? mc(e.value) : void 0,
            }
          },
          bc = function (e, t) {
            return {
              colorTheme:
                void 0 !== e.colorTheme && null !== e.colorTheme
                  ? fc(e.colorTheme)
                  : void 0,
              defaultRegion:
                void 0 !== e.defaultRegion && null !== e.defaultRegion
                  ? dc(e.defaultRegion, t)
                  : void 0,
              favoriteBarDisplay:
                void 0 !== e.favoriteBarDisplay && null !== e.favoriteBarDisplay
                  ? pc(e.favoriteBarDisplay)
                  : void 0,
              favoritesConsole:
                void 0 !== e.favoritesConsole && null !== e.favoritesConsole
                  ? vc(e.favoritesConsole, t)
                  : void 0,
              globalRegionOptInState:
                void 0 !== e.globalRegionOptInState &&
                null !== e.globalRegionOptInState
                  ? gc(e.globalRegionOptInState, t)
                  : void 0,
              locale:
                void 0 !== e.locale && null !== e.locale
                  ? yc(e.locale, t)
                  : void 0,
              recentsConsole:
                void 0 !== e.recentsConsole && null !== e.recentsConsole
                  ? wc(e.recentsConsole, t)
                  : void 0,
              timezone:
                void 0 !== e.timezone && null !== e.timezone
                  ? _c(e.timezone, t)
                  : void 0,
              unifiedExperienceLastWidgetAnnouncementDismissedTimestamp:
                void 0 !==
                  e.unifiedExperienceLastWidgetAnnouncementDismissedTimestamp &&
                null !==
                  e.unifiedExperienceLastWidgetAnnouncementDismissedTimestamp
                  ? Ec(
                      e.unifiedExperienceLastWidgetAnnouncementDismissedTimestamp,
                      t,
                    )
                  : void 0,
              unifiedExperienceOptInStateConsoleHome:
                void 0 !== e.unifiedExperienceOptInStateConsoleHome &&
                null !== e.unifiedExperienceOptInStateConsoleHome
                  ? Ac(e.unifiedExperienceOptInStateConsoleHome, t)
                  : void 0,
            }
          },
          Sc = function (e, t) {
            return {
              account:
                void 0 !== e.account && null !== e.account
                  ? bc(e.account, t)
                  : void 0,
              userAccount:
                void 0 !== e.userAccount && null !== e.userAccount
                  ? bc(e.userAccount, t)
                  : void 0,
            }
          },
          _c = function (e, t) {
            return { value: wu(e.value) }
          },
          Ec = function (e, t) {
            return { value: gu(e.value) }
          },
          Ac = function (e, t) {
            return { value: wu(e.value) }
          },
          Oc = function (e) {
            var t
            return {
              httpStatusCode: e.statusCode,
              requestId:
                null !== (t = e.headers['x-amzn-requestid']) && void 0 !== t
                  ? t
                  : e.headers['x-amzn-request-id'],
              extendedRequestId: e.headers['x-amz-id-2'],
              cfId: e.headers['x-amz-cf-id'],
            }
          },
          Cc = function (e, t) {
            return (
              void 0 === e && (e = new Uint8Array()),
              e instanceof Uint8Array
                ? Promise.resolve(e)
                : t.streamCollector(e) || Promise.resolve(new Uint8Array())
            )
          },
          Tc = function (e, t) {
            return (function (e, t) {
              return Cc(e, t).then(function (e) {
                return t.utf8Encoder(e)
              })
            })(e, t).then(function (e) {
              return e.length ? JSON.parse(e) : {}
            })
          },
          Rc = function (e, t) {
            var n,
              r,
              o = function (e) {
                var t = e
                return (
                  t.indexOf(':') >= 0 && (t = t.split(':')[0]),
                  t.indexOf('#') >= 0 && (t = t.split('#')[1]),
                  t
                )
              },
              i =
                ((n = e.headers),
                (r = 'x-amzn-errortype'),
                Object.keys(n).find(function (e) {
                  return e.toLowerCase() === r.toLowerCase()
                }))
            return void 0 !== i
              ? o(e.headers[i])
              : void 0 !== t.code
              ? o(t.code)
              : void 0 !== t.__type
              ? o(t.__type)
              : ''
          },
          Pc = {
            name: 'deserializerMiddleware',
            step: 'deserialize',
            tags: ['DESERIALIZER'],
            override: !0,
          },
          Ic = {
            name: 'serializerMiddleware',
            step: 'serialize',
            tags: ['SERIALIZER'],
            override: !0,
          }
        function xc(e, t, n) {
          return {
            applyToStack: function (r) {
              r.add(
                (function (e, t) {
                  return function (n, r) {
                    return function (r) {
                      return na(void 0, void 0, void 0, function () {
                        var o, i, a
                        return ra(this, function (u) {
                          switch (u.label) {
                            case 0:
                              return [4, n(r)]
                            case 1:
                              ;(o = u.sent().response), (u.label = 2)
                            case 2:
                              return u.trys.push([2, 4, , 5]), [4, t(o, e)]
                            case 3:
                              return (
                                (i = u.sent()), [2, { response: o, output: i }]
                              )
                            case 4:
                              throw (
                                ((a = u.sent()),
                                Object.defineProperty(a, '$response', {
                                  value: o,
                                }),
                                a)
                              )
                            case 5:
                              return [2]
                          }
                        })
                      })
                    }
                  }
                })(e, n),
                Pc,
              ),
                r.add(
                  (function (e, t) {
                    return function (n, r) {
                      return function (r) {
                        return na(void 0, void 0, void 0, function () {
                          var o
                          return ra(this, function (i) {
                            switch (i.label) {
                              case 0:
                                return [4, t(r.input, e)]
                              case 1:
                                return (
                                  (o = i.sent()),
                                  [2, n(ea(ea({}, r), { request: o }))]
                                )
                            }
                          })
                        })
                      }
                    }
                  })(e, t),
                  Ic,
                )
            },
          }
        }
        var Lc,
          Mc,
          Nc = (function (e) {
            function t(t) {
              var n = e.call(this) || this
              return (n.input = t), n
            }
            return (
              Qi(t, e),
              (t.prototype.resolveMiddleware = function (e, t, n) {
                this.middlewareStack.use(
                  xc(t, this.serialize, this.deserialize),
                )
                var r = e.concat(this.middlewareStack),
                  o = {
                    logger: t.logger,
                    clientName: 'AwsconsolecontrolClient',
                    commandName: 'GetCallerSettingsCommand',
                    inputFilterSensitiveLog: vs.filterSensitiveLog,
                    outputFilterSensitiveLog: Ds.filterSensitiveLog,
                  },
                  i = t.requestHandler
                return r.resolve(function (e) {
                  return i.handle(e.request, n || {})
                }, o)
              }),
              (t.prototype.serialize = function (e, t) {
                return (function (e, t) {
                  return na(void 0, void 0, void 0, function () {
                    var n, r, o, i, a, u, s, c, l
                    return ra(this, function (f) {
                      switch (f.label) {
                        case 0:
                          return [4, t.endpoint()]
                        case 1:
                          return (
                            (n = f.sent()),
                            (r = n.hostname),
                            (o = n.protocol),
                            (i = void 0 === o ? 'https' : o),
                            (a = n.port),
                            (u = n.path),
                            (s = { 'content-type': 'application/json' }),
                            (c =
                              ''.concat(
                                (null == u ? void 0 : u.endsWith('/'))
                                  ? u.slice(0, -1)
                                  : u || '',
                              ) + '/GetCallerSettings'),
                            (l = JSON.stringify(
                              ea(
                                ea(
                                  {},
                                  void 0 !== e.scopes &&
                                    null !== e.scopes && {
                                      scopes: cc(e.scopes, t),
                                    },
                                ),
                                void 0 !== e.settingNames &&
                                  null !== e.settingNames && {
                                    settingNames: lc(e.settingNames, t),
                                  },
                              ),
                            )),
                            [
                              2,
                              new ga({
                                protocol: i,
                                hostname: r,
                                port: a,
                                method: 'POST',
                                headers: s,
                                path: c,
                                body: l,
                              }),
                            ]
                          )
                      }
                    })
                  })
                })(e, t)
              }),
              (t.prototype.deserialize = function (e, t) {
                return (function (e, t) {
                  return na(void 0, void 0, void 0, function () {
                    var n, r, o, i
                    return ra(this, function (a) {
                      switch (a.label) {
                        case 0:
                          return 200 !== e.statusCode && e.statusCode >= 300
                            ? [2, sc(e, t)]
                            : ((n = {
                                $metadata: Oc(e),
                                settingsByScope: void 0,
                              }),
                              (o = yu),
                              (i = mu),
                              [4, Tc(e.body, t)])
                        case 1:
                          return (
                            void 0 !==
                              (r = o.apply(void 0, [
                                i.apply(void 0, [a.sent()]),
                                'body',
                              ])).settingsByScope &&
                              null !== r.settingsByScope &&
                              (n.settingsByScope = Sc(r.settingsByScope, t)),
                            [2, Promise.resolve(n)]
                          )
                      }
                    })
                  })
                })(e, t)
              }),
              t
            )
          })(vu),
          kc = n(25910)
        !(function (e) {
          ;(e.ADD_FAVORITE_LIST = 'addFavoriteList'),
            (e.DELETE_FAVORITE_LIST = 'deleteFavoriteList'),
            (e.REPOSITION_FAVORITE_LIST = 'repositionFavoriteList'),
            (e.RECENTLY_VISITED_LIST = 'recentlyVisitedList')
        })(Lc || (Lc = {})),
          (function (e) {
            ;(e.APPEND_FAVORITE = 'append'),
              (e.DELETE_FAVORITE = 'delete'),
              (e.INSERT_BEFORE = 'insertBefore')
          })(Mc || (Mc = {}))
        var Dc = dt(function () {
            return kc.AWSJanus.buildJanusClient({
              signinStage: be()
                ? kc.SigninStages.PRODISH
                : kc.SigninStages.PROD,
            })
          }),
          jc = function (e) {
            var t = e.metricName,
              n = e.error,
              r = e.metricValue,
              o = void 0 === r ? 1 : r,
              i = e.metricDetail,
              a = e.metricUnit,
              u = void 0 === a ? '' : a,
              s = e.logLevel,
              c = e.metricContext,
              l = e.metricType,
              f = { navVersion: gt() }
            i && (f.data = i), n && (f.error = n)
            var d = JSON.stringify(f)
            return at(t, o, d, u), cr.log(t, o, d, c, u, l, s)
          }
        var Fc = {
            widgetId: 'ngn_ccs',
            metricLogMetadata: { navVersion: gt() },
          },
          Bc = (function () {
            var e = Oo()(
              Eo().mark(function e() {
                var t, n, r
                return Eo().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            'https://global.ccs.amazonaws.com',
                            (e.prev = 1),
                            (t = window.performance.now()),
                            (e.next = 5),
                            fetch(
                              ''.concat(
                                'https://global.ccs.amazonaws.com',
                                '/DiscoverEndpoint',
                              ),
                              {
                                method: 'GET',
                                headers: { accept: 'application/json' },
                              },
                            )
                          )
                        case 5:
                          return (
                            (n = e.sent),
                            (r = window.performance.now()),
                            jc({
                              metricName: 'CCSdiscoverEndpointResponseTime',
                              metricValue: r - t,
                              metricUnit: 'ms',
                            }),
                            jc({
                              metricName: 'CCSDiscoverEndpoint',
                              metricValue: 0,
                            }),
                            e.abrupt('return', n.json())
                          )
                        case 13:
                          throw (
                            ((e.prev = 13),
                            (e.t0 = e.catch(1)),
                            jc({
                              metricName: 'CCSDiscoverEndpoint',
                              metricValue: 1,
                              error: e.t0,
                            }),
                            e.t0)
                          )
                        case 17:
                        case 'end':
                          return e.stop()
                      }
                  },
                  e,
                  null,
                  [[1, 13]],
                )
              }),
            )
            return function () {
              return e.apply(this, arguments)
            }
          })(),
          Uc = (function () {
            var e = Oo()(
              Eo().mark(function e() {
                var t, n, r
                return Eo().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (t = di.Model.currentRegionId || 'us-east-1'),
                            (n = 'us-east-1.ccs.amazonaws.com'),
                            (e.prev = 2),
                            (e.next = 5),
                            (0, Zi.getDiscoverEndpointPromise)()
                          )
                        case 5:
                          ;(r = e.sent),
                            (n = r.endpoint),
                            (t = n.split('.')[0]),
                            (e.next = 13)
                          break
                        case 10:
                          ;(e.prev = 10),
                            (e.t0 = e.catch(2)),
                            (0, Zi.setCCSIsLoading)(!1)
                        case 13:
                          return e.abrupt(
                            'return',
                            kc.AWSJanus.interceptSdkClient(
                              new Vs({
                                region: t,
                                endpoint: 'https://'.concat(n),
                                credentialDefaultProvider:
                                  kc.AWSJanus.credentialProvider,
                              }),
                              Fc,
                              Dc(),
                            ),
                          )
                        case 14:
                        case 'end':
                          return e.stop()
                      }
                  },
                  e,
                  null,
                  [[2, 10]],
                )
              }),
            )
            return function () {
              return e.apply(this, arguments)
            }
          })(),
          Hc = Object.freeze([hs.LOCALE, hs.COLOR_THEME])
        var Gc,
          zc = (function () {
            var e = Oo()(
              Eo().mark(function e() {
                var t, n, r, o
                return Eo().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.prev = 0), (e.next = 3), Uc()
                        case 3:
                          return (
                            (t = e.sent),
                            (n = window.performance.now()),
                            (e.next = 7),
                            t.send(
                              new Nc({
                                scopes: ['userAccount'],
                                settingNames: [
                                  hs.FAVORITES_CONSOLE,
                                  hs.RECENTS_CONSOLE,
                                  hs.FAVORITE_BAR_DISPLAY,
                                ].concat(Hc),
                              }),
                            )
                          )
                        case 7:
                          return (
                            (r = e.sent),
                            (o = window.performance.now()),
                            jc({
                              metricName: 'CCSGetSettingsResponseTime',
                              metricValue: o - n,
                              metricUnit: 'ms',
                            }),
                            jc({
                              metricName: 'CCSGetSettingsError',
                              metricValue: 0,
                            }),
                            e.abrupt('return', r)
                          )
                        case 15:
                          throw (
                            ((e.prev = 15),
                            (e.t0 = e.catch(0)),
                            jc({
                              metricName: 'CCSGetSettingsError',
                              metricValue: 1,
                              error: e.t0,
                            }),
                            e.t0)
                          )
                        case 19:
                        case 'end':
                          return e.stop()
                      }
                  },
                  e,
                  null,
                  [[0, 15]],
                )
              }),
            )
            return function () {
              return e.apply(this, arguments)
            }
          })(),
          Wc = {
            ccsAvailable:
              !!(null === Ot.Z ||
              void 0 === Ot.Z ||
              null === (Gc = Ot.Z.servicesById) ||
              void 0 === Gc
                ? void 0
                : Gc.upc) && vt(I.FeatureFlag.CCS),
          }
        window.AWSC ? (window.AWSC.CCS = Wc) : (window.AWSC = { CCS: Wc }),
          Wc.ccsAvailable &&
            (function () {
              var e = Bc()
              ;(0, Zi.setDiscoverEndpointPromise)(e)
              var t = zc()
              ;(0, Zi.setUserSettingsPromise)(t), (0, Zi.setCCSIsLoading)(!0)
            })()
        var qc = window.AWSC.PHD,
          Vc =
            (qc.init,
            qc.addPhdDataLoadedListener,
            qc.disableMezzPoll,
            qc.domain),
          Jc =
            (qc.isMenuDisplayed,
            qc.isMezzPollDisabled,
            qc.updateMenuContent,
            window.AWSC.PHD,
            window.AWSC.UserPrefs),
          Kc = Jc.initUserPrefs,
          Xc =
            (Jc.resetAuth,
            Jc.getPref,
            Jc.setPref,
            Jc.isAvailable,
            window.AWSC.UserPrefs,
            Ot.Z.features),
          Yc = (void 0 === Xc ? {} : Xc).userPrefs,
          Zc = void 0 === Yc ? {} : Yc,
          $c = Ro(),
          Qc = $c,
          el = $c
        if (Zc.enabled) {
          var tl = Po()
          Zc.regions.includes(tl) && (el = tl + '.' + el)
        }
        ;(Bi({
          location: { host: el },
          userInfo: Lt('aws-userInfo'),
          rAuthDomain: Qc,
          phdAuthDomain: Vc.getPhdDomain({ useDeprecated: !0 }),
        }),
        Zc.enabled) && Kc({ enabled: Zc.enabled, endpoint: el })
        var nl,
          rl,
          ol,
          il,
          al,
          ul,
          sl = []
        ;(rl = 'aws-userInfo'),
          (ol = function () {
            window.dispatchEvent(Le('auth-change-detected')),
              In('awsc-auth-change-detection', 1)
          }),
          (nl = setInterval(function () {
            var e = It(rl)
            sl[rl]
              ? e !== sl[rl] && ((sl[rl] = e), clearInterval(nl), ol())
              : (sl[rl] = e)
          }, 5e3)),
          window.addEventListener('cancel-auth-change-detect', function () {
            clearInterval(nl)
          }),
          r('headScriptFinishPerformanceMark'),
          (il = 'headScriptFinishPerformanceMeasure'),
          (al = 'headScriptInitPerformanceMark'),
          (ul = 'headScriptFinishPerformanceMark'),
          window.performance.measure(il, al, ul)
        var cl,
          ll,
          fl,
          dl =
            ((cl = 'headScriptFinishPerformanceMeasure'),
            (fl = window.performance.getEntriesByName(cl))
              ? null === (ll = fl[0]) || void 0 === ll
                ? void 0
                : ll.duration
              : Date.now())
        jc({
          metricName: 'headScriptInitToFinish',
          metricValue: dl,
          metricUnit: 'ms',
        })
      },
      94165: function () {
        var e = !!document.head.querySelector('meta[name="awsc-widget-nav"]')
        !(function () {
          if (!e) {
            var t = document.createElement('meta')
            ;(t.id = 'awsc-widget-nav'),
              (t.name = 'awsc-widget-nav'),
              (t.content = '1'),
              document.head.appendChild(t)
          }
        })()
      },
      44366: function (e, t, n) {
        n(69070),
          n(32023),
          Array.prototype.includes ||
            Object.defineProperty(Array.prototype, 'includes', {
              configurable: !0,
              value: function (e, t) {
                if (null == this)
                  throw new TypeError('"this" is null or not defined')
                var n = Object(this),
                  r = n.length >>> 0
                if (0 === r) return !1
                var o,
                  i,
                  a = 0 | t,
                  u = Math.max(a >= 0 ? a : r - Math.abs(a), 0)
                for (; u < r; ) {
                  if (
                    (o = n[u]) === (i = e) ||
                    ('number' == typeof o &&
                      'number' == typeof i &&
                      isNaN(o) &&
                      isNaN(i))
                  )
                    return !0
                  u++
                }
                return !1
              },
            })
      },
      57665: function () {
        Array.prototype.indexOf ||
          (Array.prototype.indexOf = function (e, t) {
            'use strict'
            var n
            if (null == this)
              throw new TypeError('"this" is null or not defined')
            var r = Object(this),
              o = r.length >>> 0
            if (0 === o) return -1
            var i = 0 | t
            if (i >= o) return -1
            for (n = Math.max(i >= 0 ? i : o - Math.abs(i), 0); n < o; n++)
              if (n in r && r[n] === e) return n
            return -1
          })
      },
      63662: function (e, t, n) {
        n(51532), n(41539), n(78783), n(33948)
        var r = n(40857)
        e.exports = r.Map
      },
      88188: function (e, t, n) {
        n(70189), n(41539), n(78783), n(33948)
        var r = n(40857)
        e.exports = r.Set
      },
      76280: function (e, t, n) {
        n(63662),
          n(8582),
          n(24838),
          n(10072),
          n(99137),
          n(71957),
          n(96306),
          n(103),
          n(90618),
          n(74592),
          n(88440),
          n(58276),
          n(35082),
          n(12813),
          n(18222),
          n(38563),
          n(50336),
          n(7512),
          n(87713),
          n(74442)
      },
      47834: function (e, t, n) {
        n(88188),
          n(46006),
          n(69916),
          n(88921),
          n(96248),
          n(11477),
          n(13599),
          n(64362),
          n(15389),
          n(90401),
          n(45164),
          n(91238),
          n(54837),
          n(87485),
          n(56767),
          n(76651),
          n(61437),
          n(35285),
          n(39865)
      },
      13099: function (e) {
        e.exports = function (e) {
          if ('function' != typeof e)
            throw TypeError(String(e) + ' is not a function')
          return e
        }
      },
      96077: function (e, t, n) {
        var r = n(70111)
        e.exports = function (e) {
          if (!r(e) && null !== e)
            throw TypeError("Can't set " + String(e) + ' as a prototype')
          return e
        }
      },
      51223: function (e, t, n) {
        var r = n(5112),
          o = n(70030),
          i = n(68880),
          a = r('unscopables'),
          u = Array.prototype
        null == u[a] && i(u, a, o(null)),
          (e.exports = function (e) {
            u[a][e] = !0
          })
      },
      31530: function (e, t, n) {
        'use strict'
        var r = n(28710).charAt
        e.exports = function (e, t, n) {
          return t + (n ? r(e, t).length : 1)
        }
      },
      25787: function (e) {
        e.exports = function (e, t, n) {
          if (!(e instanceof t))
            throw TypeError('Incorrect ' + (n ? n + ' ' : '') + 'invocation')
          return e
        }
      },
      19670: function (e, t, n) {
        var r = n(70111)
        e.exports = function (e) {
          if (!r(e)) throw TypeError(String(e) + ' is not an object')
          return e
        }
      },
      90260: function (e, t, n) {
        'use strict'
        var r,
          o = n(19781),
          i = n(17854),
          a = n(70111),
          u = n(86656),
          s = n(70648),
          c = n(68880),
          l = n(31320),
          f = n(3070).f,
          d = n(79518),
          p = n(27674),
          h = n(5112),
          v = n(69711),
          g = i.DataView,
          y = g && g.prototype,
          m = i.Int8Array,
          w = m && m.prototype,
          b = i.Uint8ClampedArray,
          S = b && b.prototype,
          _ = m && d(m),
          E = w && d(w),
          A = Object.prototype,
          O = A.isPrototypeOf,
          C = h('toStringTag'),
          T = v('TYPED_ARRAY_TAG'),
          R = !(!i.ArrayBuffer || !g),
          P = R && !!p && 'Opera' !== s(i.opera),
          I = !1,
          x = {
            Int8Array: 1,
            Uint8Array: 1,
            Uint8ClampedArray: 1,
            Int16Array: 2,
            Uint16Array: 2,
            Int32Array: 4,
            Uint32Array: 4,
            Float32Array: 4,
            Float64Array: 8,
          },
          L = function (e) {
            return a(e) && u(x, s(e))
          }
        for (r in x) i[r] || (P = !1)
        if (
          (!P || 'function' != typeof _ || _ === Function.prototype) &&
          ((_ = function () {
            throw TypeError('Incorrect invocation')
          }),
          P)
        )
          for (r in x) i[r] && p(i[r], _)
        if ((!P || !E || E === A) && ((E = _.prototype), P))
          for (r in x) i[r] && p(i[r].prototype, E)
        if ((P && d(S) !== E && p(S, E), o && !u(E, C)))
          for (r in ((I = !0),
          f(E, C, {
            get: function () {
              return a(this) ? this[T] : void 0
            },
          }),
          x))
            i[r] && c(i[r], T, r)
        R && p && d(y) !== A && p(y, A),
          (e.exports = {
            NATIVE_ARRAY_BUFFER: R,
            NATIVE_ARRAY_BUFFER_VIEWS: P,
            TYPED_ARRAY_TAG: I && T,
            aTypedArray: function (e) {
              if (L(e)) return e
              throw TypeError('Target is not a typed array')
            },
            aTypedArrayConstructor: function (e) {
              if (p) {
                if (O.call(_, e)) return e
              } else
                for (var t in x)
                  if (u(x, r)) {
                    var n = i[t]
                    if (n && (e === n || O.call(n, e))) return e
                  }
              throw TypeError('Target is not a typed array constructor')
            },
            exportProto: function (e, t, n) {
              if (o) {
                if (n)
                  for (var r in x) {
                    var a = i[r]
                    a && u(a.prototype, e) && delete a.prototype[e]
                  }
                ;(E[e] && !n) || l(E, e, n ? t : (P && w[e]) || t)
              }
            },
            exportStatic: function (e, t, n) {
              var r, a
              if (o) {
                if (p) {
                  if (n) for (r in x) (a = i[r]) && u(a, e) && delete a[e]
                  if (_[e] && !n) return
                  try {
                    return l(_, e, n ? t : (P && m[e]) || t)
                  } catch (e) {}
                }
                for (r in x) !(a = i[r]) || (a[e] && !n) || l(a, e, t)
              }
            },
            isView: function (e) {
              var t = s(e)
              return 'DataView' === t || u(x, t)
            },
            isTypedArray: L,
            TypedArray: _,
            TypedArrayPrototype: E,
          })
      },
      13331: function (e, t, n) {
        'use strict'
        var r = n(17854),
          o = n(19781),
          i = n(90260).NATIVE_ARRAY_BUFFER,
          a = n(68880),
          u = n(12248),
          s = n(47293),
          c = n(25787),
          l = n(99958),
          f = n(17466),
          d = n(57067),
          p = n(8006).f,
          h = n(3070).f,
          v = n(21285),
          g = n(58003),
          y = n(29909),
          m = y.get,
          w = y.set,
          b = r.ArrayBuffer,
          S = b,
          _ = r.DataView,
          E = r.Math,
          A = r.RangeError,
          O = E.abs,
          C = E.pow,
          T = E.floor,
          R = E.log,
          P = E.LN2,
          I = function (e, t, n) {
            var r,
              o,
              i,
              a = new Array(n),
              u = 8 * n - t - 1,
              s = (1 << u) - 1,
              c = s >> 1,
              l = 23 === t ? C(2, -24) - C(2, -77) : 0,
              f = e < 0 || (0 === e && 1 / e < 0) ? 1 : 0,
              d = 0
            for (
              (e = O(e)) != e || e === 1 / 0
                ? ((o = e != e ? 1 : 0), (r = s))
                : ((r = T(R(e) / P)),
                  e * (i = C(2, -r)) < 1 && (r--, (i *= 2)),
                  (e += r + c >= 1 ? l / i : l * C(2, 1 - c)) * i >= 2 &&
                    (r++, (i /= 2)),
                  r + c >= s
                    ? ((o = 0), (r = s))
                    : r + c >= 1
                    ? ((o = (e * i - 1) * C(2, t)), (r += c))
                    : ((o = e * C(2, c - 1) * C(2, t)), (r = 0)));
              t >= 8;
              a[d++] = 255 & o, o /= 256, t -= 8
            );
            for (
              r = (r << t) | o, u += t;
              u > 0;
              a[d++] = 255 & r, r /= 256, u -= 8
            );
            return (a[--d] |= 128 * f), a
          },
          x = function (e, t) {
            var n,
              r = e.length,
              o = 8 * r - t - 1,
              i = (1 << o) - 1,
              a = i >> 1,
              u = o - 7,
              s = r - 1,
              c = e[s--],
              l = 127 & c
            for (c >>= 7; u > 0; l = 256 * l + e[s], s--, u -= 8);
            for (
              n = l & ((1 << -u) - 1), l >>= -u, u += t;
              u > 0;
              n = 256 * n + e[s], s--, u -= 8
            );
            if (0 === l) l = 1 - a
            else {
              if (l === i) return n ? NaN : c ? -1 / 0 : 1 / 0
              ;(n += C(2, t)), (l -= a)
            }
            return (c ? -1 : 1) * n * C(2, l - t)
          },
          L = function (e) {
            return (e[3] << 24) | (e[2] << 16) | (e[1] << 8) | e[0]
          },
          M = function (e) {
            return [255 & e]
          },
          N = function (e) {
            return [255 & e, (e >> 8) & 255]
          },
          k = function (e) {
            return [255 & e, (e >> 8) & 255, (e >> 16) & 255, (e >> 24) & 255]
          },
          D = function (e) {
            return I(e, 23, 4)
          },
          j = function (e) {
            return I(e, 52, 8)
          },
          F = function (e, t) {
            h(e.prototype, t, {
              get: function () {
                return m(this)[t]
              },
            })
          },
          B = function (e, t, n, r) {
            var o = d(+n),
              i = m(e)
            if (o + t > i.byteLength) throw A('Wrong index')
            var a = m(i.buffer).bytes,
              u = o + i.byteOffset,
              s = a.slice(u, u + t)
            return r ? s : s.reverse()
          },
          U = function (e, t, n, r, o, i) {
            var a = d(+n),
              u = m(e)
            if (a + t > u.byteLength) throw A('Wrong index')
            for (
              var s = m(u.buffer).bytes, c = a + u.byteOffset, l = r(+o), f = 0;
              f < t;
              f++
            )
              s[c + f] = l[i ? f : t - f - 1]
          }
        if (i) {
          if (
            !s(function () {
              b(1)
            }) ||
            !s(function () {
              new b(-1)
            }) ||
            s(function () {
              return new b(), new b(1.5), new b(NaN), 'ArrayBuffer' != b.name
            })
          ) {
            for (
              var H,
                G = ((S = function (e) {
                  return c(this, S), new b(d(e))
                }).prototype = b.prototype),
                z = p(b),
                W = 0;
              z.length > W;

            )
              (H = z[W++]) in S || a(S, H, b[H])
            G.constructor = S
          }
          var q = new _(new S(2)),
            V = _.prototype.setInt8
          q.setInt8(0, 2147483648),
            q.setInt8(1, 2147483649),
            (!q.getInt8(0) && q.getInt8(1)) ||
              u(
                _.prototype,
                {
                  setInt8: function (e, t) {
                    V.call(this, e, (t << 24) >> 24)
                  },
                  setUint8: function (e, t) {
                    V.call(this, e, (t << 24) >> 24)
                  },
                },
                { unsafe: !0 },
              )
        } else
          (S = function (e) {
            c(this, S, 'ArrayBuffer')
            var t = d(e)
            w(this, { bytes: v.call(new Array(t), 0), byteLength: t }),
              o || (this.byteLength = t)
          }),
            (_ = function (e, t, n) {
              c(this, _, 'DataView'), c(e, S, 'DataView')
              var r = m(e).byteLength,
                i = l(t)
              if (i < 0 || i > r) throw A('Wrong offset')
              if (i + (n = void 0 === n ? r - i : f(n)) > r)
                throw A('Wrong length')
              w(this, { buffer: e, byteLength: n, byteOffset: i }),
                o ||
                  ((this.buffer = e),
                  (this.byteLength = n),
                  (this.byteOffset = i))
            }),
            o &&
              (F(S, 'byteLength'),
              F(_, 'buffer'),
              F(_, 'byteLength'),
              F(_, 'byteOffset')),
            u(_.prototype, {
              getInt8: function (e) {
                return (B(this, 1, e)[0] << 24) >> 24
              },
              getUint8: function (e) {
                return B(this, 1, e)[0]
              },
              getInt16: function (e) {
                var t = B(
                  this,
                  2,
                  e,
                  arguments.length > 1 ? arguments[1] : void 0,
                )
                return (((t[1] << 8) | t[0]) << 16) >> 16
              },
              getUint16: function (e) {
                var t = B(
                  this,
                  2,
                  e,
                  arguments.length > 1 ? arguments[1] : void 0,
                )
                return (t[1] << 8) | t[0]
              },
              getInt32: function (e) {
                return L(
                  B(this, 4, e, arguments.length > 1 ? arguments[1] : void 0),
                )
              },
              getUint32: function (e) {
                return (
                  L(
                    B(this, 4, e, arguments.length > 1 ? arguments[1] : void 0),
                  ) >>> 0
                )
              },
              getFloat32: function (e) {
                return x(
                  B(this, 4, e, arguments.length > 1 ? arguments[1] : void 0),
                  23,
                )
              },
              getFloat64: function (e) {
                return x(
                  B(this, 8, e, arguments.length > 1 ? arguments[1] : void 0),
                  52,
                )
              },
              setInt8: function (e, t) {
                U(this, 1, e, M, t)
              },
              setUint8: function (e, t) {
                U(this, 1, e, M, t)
              },
              setInt16: function (e, t) {
                U(
                  this,
                  2,
                  e,
                  N,
                  t,
                  arguments.length > 2 ? arguments[2] : void 0,
                )
              },
              setUint16: function (e, t) {
                U(
                  this,
                  2,
                  e,
                  N,
                  t,
                  arguments.length > 2 ? arguments[2] : void 0,
                )
              },
              setInt32: function (e, t) {
                U(
                  this,
                  4,
                  e,
                  k,
                  t,
                  arguments.length > 2 ? arguments[2] : void 0,
                )
              },
              setUint32: function (e, t) {
                U(
                  this,
                  4,
                  e,
                  k,
                  t,
                  arguments.length > 2 ? arguments[2] : void 0,
                )
              },
              setFloat32: function (e, t) {
                U(
                  this,
                  4,
                  e,
                  D,
                  t,
                  arguments.length > 2 ? arguments[2] : void 0,
                )
              },
              setFloat64: function (e, t) {
                U(
                  this,
                  8,
                  e,
                  j,
                  t,
                  arguments.length > 2 ? arguments[2] : void 0,
                )
              },
            })
        g(S, 'ArrayBuffer'),
          g(_, 'DataView'),
          (e.exports = { ArrayBuffer: S, DataView: _ })
      },
      21285: function (e, t, n) {
        'use strict'
        var r = n(47908),
          o = n(51400),
          i = n(17466)
        e.exports = function (e) {
          for (
            var t = r(this),
              n = i(t.length),
              a = arguments.length,
              u = o(a > 1 ? arguments[1] : void 0, n),
              s = a > 2 ? arguments[2] : void 0,
              c = void 0 === s ? n : o(s, n);
            c > u;

          )
            t[u++] = e
          return t
        }
      },
      18533: function (e, t, n) {
        'use strict'
        var r = n(42092).forEach,
          o = n(36637)
        e.exports = o('forEach')
          ? function (e) {
              return r(this, e, arguments.length > 1 ? arguments[1] : void 0)
            }
          : [].forEach
      },
      48457: function (e, t, n) {
        'use strict'
        var r = n(30244),
          o = n(47908),
          i = n(53411),
          a = n(97659),
          u = n(17466),
          s = n(86135),
          c = n(71246)
        e.exports = function (e) {
          var t,
            n,
            l,
            f,
            d,
            p = o(e),
            h = 'function' == typeof this ? this : Array,
            v = arguments.length,
            g = v > 1 ? arguments[1] : void 0,
            y = void 0 !== g,
            m = 0,
            w = c(p)
          if (
            (y && (g = r(g, v > 2 ? arguments[2] : void 0, 2)),
            null == w || (h == Array && a(w)))
          )
            for (n = new h((t = u(p.length))); t > m; m++)
              s(n, m, y ? g(p[m], m) : p[m])
          else
            for (
              d = (f = w.call(p)).next, n = new h();
              !(l = d.call(f)).done;
              m++
            )
              s(n, m, y ? i(f, g, [l.value, m], !0) : l.value)
          return (n.length = m), n
        }
      },
      41318: function (e, t, n) {
        var r = n(45656),
          o = n(17466),
          i = n(51400),
          a = function (e) {
            return function (t, n, a) {
              var u,
                s = r(t),
                c = o(s.length),
                l = i(a, c)
              if (e && n != n) {
                for (; c > l; ) if ((u = s[l++]) != u) return !0
              } else
                for (; c > l; l++)
                  if ((e || l in s) && s[l] === n) return e || l || 0
              return !e && -1
            }
          }
        e.exports = { includes: a(!0), indexOf: a(!1) }
      },
      42092: function (e, t, n) {
        var r = n(30244),
          o = n(68361),
          i = n(47908),
          a = n(17466),
          u = n(65417),
          s = [].push,
          c = function (e) {
            var t = 1 == e,
              n = 2 == e,
              c = 3 == e,
              l = 4 == e,
              f = 6 == e,
              d = 5 == e || f
            return function (p, h, v, g) {
              for (
                var y,
                  m,
                  w = i(p),
                  b = o(w),
                  S = r(h, v, 3),
                  _ = a(b.length),
                  E = 0,
                  A = g || u,
                  O = t ? A(p, _) : n ? A(p, 0) : void 0;
                _ > E;
                E++
              )
                if ((d || E in b) && ((m = S((y = b[E]), E, w)), e))
                  if (t) O[E] = m
                  else if (m)
                    switch (e) {
                      case 3:
                        return !0
                      case 5:
                        return y
                      case 6:
                        return E
                      case 2:
                        s.call(O, y)
                    }
                  else if (l) return !1
              return f ? -1 : c || l ? l : O
            }
          }
        e.exports = {
          forEach: c(0),
          map: c(1),
          filter: c(2),
          some: c(3),
          every: c(4),
          find: c(5),
          findIndex: c(6),
        }
      },
      81194: function (e, t, n) {
        var r = n(47293),
          o = n(5112),
          i = n(2101),
          a = o('species')
        e.exports = function (e) {
          return (
            i >= 51 ||
            !r(function () {
              var t = []
              return (
                ((t.constructor = {})[a] = function () {
                  return { foo: 1 }
                }),
                1 !== t[e](Boolean).foo
              )
            })
          )
        }
      },
      53671: function (e, t, n) {
        var r = n(13099),
          o = n(47908),
          i = n(68361),
          a = n(17466),
          u = function (e) {
            return function (t, n, u, s) {
              r(n)
              var c = o(t),
                l = i(c),
                f = a(c.length),
                d = e ? f - 1 : 0,
                p = e ? -1 : 1
              if (u < 2)
                for (;;) {
                  if (d in l) {
                    ;(s = l[d]), (d += p)
                    break
                  }
                  if (((d += p), e ? d < 0 : f <= d))
                    throw TypeError(
                      'Reduce of empty array with no initial value',
                    )
                }
              for (; e ? d >= 0 : f > d; d += p)
                d in l && (s = n(s, l[d], d, c))
              return s
            }
          }
        e.exports = { left: u(!1), right: u(!0) }
      },
      65417: function (e, t, n) {
        var r = n(70111),
          o = n(43157),
          i = n(5112)('species')
        e.exports = function (e, t) {
          var n
          return (
            o(e) &&
              ('function' != typeof (n = e.constructor) ||
              (n !== Array && !o(n.prototype))
                ? r(n) && null === (n = n[i]) && (n = void 0)
                : (n = void 0)),
            new (void 0 === n ? Array : n)(0 === t ? 0 : t)
          )
        }
      },
      12269: function (e, t, n) {
        'use strict'
        var r = n(13099),
          o = n(19670),
          i = n(35005)('Promise'),
          a = [].push,
          u = function (e) {
            var t = 0 == e,
              n = 1 == e,
              u = 2 == e,
              s = 3 == e
            return function (e, c) {
              o(e)
              var l = r(e.next),
                f = t ? [] : void 0
              return (
                t || r(c),
                new i(function (r, d) {
                  var p = function () {
                    try {
                      i.resolve(o(l.call(e))).then(function (e) {
                        try {
                          if (o(e).done) r(t ? f : !s && (u || void 0))
                          else {
                            var l = e.value
                            t
                              ? (a.call(f, l), p())
                              : i.resolve(c(l)).then(function (e) {
                                  n
                                    ? p()
                                    : u
                                    ? e
                                      ? p()
                                      : r(!1)
                                    : e
                                    ? r(s || l)
                                    : p()
                                }, d)
                          }
                        } catch (e) {
                          d(e)
                        }
                      }, d)
                    } catch (e) {
                      d(e)
                    }
                  }
                  p()
                })
              )
            }
          }
        e.exports = {
          toArray: u(0),
          forEach: u(1),
          every: u(2),
          some: u(3),
          find: u(4),
        }
      },
      30244: function (e, t, n) {
        var r = n(13099)
        e.exports = function (e, t, n) {
          if ((r(e), void 0 === t)) return e
          switch (n) {
            case 0:
              return function () {
                return e.call(t)
              }
            case 1:
              return function (n) {
                return e.call(t, n)
              }
            case 2:
              return function (n, r) {
                return e.call(t, n, r)
              }
            case 3:
              return function (n, r, o) {
                return e.call(t, n, r, o)
              }
          }
          return function () {
            return e.apply(t, arguments)
          }
        }
      },
      53411: function (e, t, n) {
        var r = n(19670)
        e.exports = function (e, t, n, o) {
          try {
            return o ? t(r(n)[0], n[1]) : t(n)
          } catch (t) {
            var i = e.return
            throw (void 0 !== i && r(i.call(e)), t)
          }
        }
      },
      17072: function (e, t, n) {
        var r = n(5112)('iterator'),
          o = !1
        try {
          var i = 0,
            a = {
              next: function () {
                return { done: !!i++ }
              },
              return: function () {
                o = !0
              },
            }
          ;(a[r] = function () {
            return this
          }),
            Array.from(a, function () {
              throw 2
            })
        } catch (e) {}
        e.exports = function (e, t) {
          if (!t && !o) return !1
          var n = !1
          try {
            var i = {}
            ;(i[r] = function () {
              return {
                next: function () {
                  return { done: (n = !0) }
                },
              }
            }),
              e(i)
          } catch (e) {}
          return n
        }
      },
      84326: function (e) {
        var t = {}.toString
        e.exports = function (e) {
          return t.call(e).slice(8, -1)
        }
      },
      70648: function (e, t, n) {
        var r = n(84326),
          o = n(5112)('toStringTag'),
          i =
            'Arguments' ==
            r(
              (function () {
                return arguments
              })(),
            )
        e.exports = function (e) {
          var t, n, a
          return void 0 === e
            ? 'Undefined'
            : null === e
            ? 'Null'
            : 'string' ==
              typeof (n = (function (e, t) {
                try {
                  return e[t]
                } catch (e) {}
              })((t = Object(e)), o))
            ? n
            : i
            ? r(t)
            : 'Object' == (a = r(t)) && 'function' == typeof t.callee
            ? 'Arguments'
            : a
        }
      },
      31501: function (e, t, n) {
        'use strict'
        var r = n(19670),
          o = n(13099)
        e.exports = function () {
          for (
            var e = r(this), t = o(e.add), n = 0, i = arguments.length;
            n < i;
            n++
          )
            t.call(e, arguments[n])
          return e
        }
      },
      34092: function (e, t, n) {
        'use strict'
        var r = n(19670),
          o = n(13099)
        e.exports = function () {
          for (
            var e,
              t = r(this),
              n = o(t.delete),
              i = !0,
              a = 0,
              u = arguments.length;
            a < u;
            a++
          )
            (e = n.call(t, arguments[a])), (i = i && e)
          return !!i
        }
      },
      27296: function (e, t, n) {
        'use strict'
        var r = n(13099),
          o = n(30244),
          i = n(20408)
        e.exports = function (e) {
          var t,
            n,
            a,
            u,
            s = arguments.length,
            c = s > 1 ? arguments[1] : void 0
          return (
            r(this),
            (t = void 0 !== c) && r(c),
            null == e
              ? new this()
              : ((n = []),
                t
                  ? ((a = 0),
                    (u = o(c, s > 2 ? arguments[2] : void 0, 2)),
                    i(e, function (e) {
                      n.push(u(e, a++))
                    }))
                  : i(e, n.push, n),
                new this(n))
          )
        }
      },
      82044: function (e) {
        'use strict'
        e.exports = function () {
          for (var e = arguments.length, t = new Array(e); e--; )
            t[e] = arguments[e]
          return new this(t)
        }
      },
      95631: function (e, t, n) {
        'use strict'
        var r = n(3070).f,
          o = n(70030),
          i = n(12248),
          a = n(30244),
          u = n(25787),
          s = n(20408),
          c = n(70654),
          l = n(96340),
          f = n(19781),
          d = n(62423).fastKey,
          p = n(29909),
          h = p.set,
          v = p.getterFor
        e.exports = {
          getConstructor: function (e, t, n, c) {
            var l = e(function (e, r) {
                u(e, l, t),
                  h(e, {
                    type: t,
                    index: o(null),
                    first: void 0,
                    last: void 0,
                    size: 0,
                  }),
                  f || (e.size = 0),
                  null != r && s(r, e[c], e, n)
              }),
              p = v(t),
              g = function (e, t, n) {
                var r,
                  o,
                  i = p(e),
                  a = y(e, t)
                return (
                  a
                    ? (a.value = n)
                    : ((i.last = a = {
                        index: (o = d(t, !0)),
                        key: t,
                        value: n,
                        previous: (r = i.last),
                        next: void 0,
                        removed: !1,
                      }),
                      i.first || (i.first = a),
                      r && (r.next = a),
                      f ? i.size++ : e.size++,
                      'F' !== o && (i.index[o] = a)),
                  e
                )
              },
              y = function (e, t) {
                var n,
                  r = p(e),
                  o = d(t)
                if ('F' !== o) return r.index[o]
                for (n = r.first; n; n = n.next) if (n.key == t) return n
              }
            return (
              i(l.prototype, {
                clear: function () {
                  for (var e = p(this), t = e.index, n = e.first; n; )
                    (n.removed = !0),
                      n.previous && (n.previous = n.previous.next = void 0),
                      delete t[n.index],
                      (n = n.next)
                  ;(e.first = e.last = void 0),
                    f ? (e.size = 0) : (this.size = 0)
                },
                delete: function (e) {
                  var t = p(this),
                    n = y(this, e)
                  if (n) {
                    var r = n.next,
                      o = n.previous
                    delete t.index[n.index],
                      (n.removed = !0),
                      o && (o.next = r),
                      r && (r.previous = o),
                      t.first == n && (t.first = r),
                      t.last == n && (t.last = o),
                      f ? t.size-- : this.size--
                  }
                  return !!n
                },
                forEach: function (e) {
                  for (
                    var t,
                      n = p(this),
                      r = a(e, arguments.length > 1 ? arguments[1] : void 0, 3);
                    (t = t ? t.next : n.first);

                  )
                    for (r(t.value, t.key, this); t && t.removed; )
                      t = t.previous
                },
                has: function (e) {
                  return !!y(this, e)
                },
              }),
              i(
                l.prototype,
                n
                  ? {
                      get: function (e) {
                        var t = y(this, e)
                        return t && t.value
                      },
                      set: function (e, t) {
                        return g(this, 0 === e ? 0 : e, t)
                      },
                    }
                  : {
                      add: function (e) {
                        return g(this, (e = 0 === e ? 0 : e), e)
                      },
                    },
              ),
              f &&
                r(l.prototype, 'size', {
                  get: function () {
                    return p(this).size
                  },
                }),
              l
            )
          },
          setStrong: function (e, t, n) {
            var r = t + ' Iterator',
              o = v(t),
              i = v(r)
            c(
              e,
              t,
              function (e, t) {
                h(this, {
                  type: r,
                  target: e,
                  state: o(e),
                  kind: t,
                  last: void 0,
                })
              },
              function () {
                for (var e = i(this), t = e.kind, n = e.last; n && n.removed; )
                  n = n.previous
                return e.target && (e.last = n = n ? n.next : e.state.first)
                  ? 'keys' == t
                    ? { value: n.key, done: !1 }
                    : 'values' == t
                    ? { value: n.value, done: !1 }
                    : { value: [n.key, n.value], done: !1 }
                  : ((e.target = void 0), { value: void 0, done: !0 })
              },
              n ? 'entries' : 'values',
              !n,
              !0,
            ),
              l(t)
          },
        }
      },
      77710: function (e, t, n) {
        'use strict'
        var r = n(82109),
          o = n(17854),
          i = n(54705),
          a = n(31320),
          u = n(62423),
          s = n(20408),
          c = n(25787),
          l = n(70111),
          f = n(47293),
          d = n(17072),
          p = n(58003),
          h = n(79587)
        e.exports = function (e, t, n, v, g) {
          var y = o[e],
            m = y && y.prototype,
            w = y,
            b = v ? 'set' : 'add',
            S = {},
            _ = function (e) {
              var t = m[e]
              a(
                m,
                e,
                'add' == e
                  ? function (e) {
                      return t.call(this, 0 === e ? 0 : e), this
                    }
                  : 'delete' == e
                  ? function (e) {
                      return !(g && !l(e)) && t.call(this, 0 === e ? 0 : e)
                    }
                  : 'get' == e
                  ? function (e) {
                      return g && !l(e) ? void 0 : t.call(this, 0 === e ? 0 : e)
                    }
                  : 'has' == e
                  ? function (e) {
                      return !(g && !l(e)) && t.call(this, 0 === e ? 0 : e)
                    }
                  : function (e, n) {
                      return t.call(this, 0 === e ? 0 : e, n), this
                    },
              )
            }
          if (
            i(
              e,
              'function' != typeof y ||
                !(
                  g ||
                  (m.forEach &&
                    !f(function () {
                      new y().entries().next()
                    }))
                ),
            )
          )
            (w = n.getConstructor(t, e, v, b)), (u.REQUIRED = !0)
          else if (i(e, !0)) {
            var E = new w(),
              A = E[b](g ? {} : -0, 1) != E,
              O = f(function () {
                E.has(1)
              }),
              C = d(function (e) {
                new y(e)
              }),
              T =
                !g &&
                f(function () {
                  for (var e = new y(), t = 5; t--; ) e[b](t, t)
                  return !e.has(-0)
                })
            C ||
              (((w = t(function (t, n) {
                c(t, w, e)
                var r = h(new y(), t, w)
                return null != n && s(n, r[b], r, v), r
              })).prototype = m),
              (m.constructor = w)),
              (O || T) && (_('delete'), _('has'), v && _('get')),
              (T || A) && _(b),
              g && m.clear && delete m.clear
          }
          return (
            (S[e] = w),
            r({ global: !0, forced: w != y }, S),
            p(w, e),
            g || n.setStrong(w, e, v),
            w
          )
        }
      },
      99920: function (e, t, n) {
        var r = n(86656),
          o = n(53887),
          i = n(31236),
          a = n(3070)
        e.exports = function (e, t) {
          for (var n = o(t), u = a.f, s = i.f, c = 0; c < n.length; c++) {
            var l = n[c]
            r(e, l) || u(e, l, s(t, l))
          }
        }
      },
      84964: function (e, t, n) {
        var r = n(5112)('match')
        e.exports = function (e) {
          var t = /./
          try {
            '/./'[e](t)
          } catch (n) {
            try {
              return (t[r] = !1), '/./'[e](t)
            } catch (e) {}
          }
          return !1
        }
      },
      49920: function (e, t, n) {
        var r = n(47293)
        e.exports = !r(function () {
          function e() {}
          return (
            (e.prototype.constructor = null),
            Object.getPrototypeOf(new e()) !== e.prototype
          )
        })
      },
      24994: function (e, t, n) {
        'use strict'
        var r = n(13383).IteratorPrototype,
          o = n(70030),
          i = n(79114),
          a = n(58003),
          u = n(97497),
          s = function () {
            return this
          }
        e.exports = function (e, t, n) {
          var c = t + ' Iterator'
          return (
            (e.prototype = o(r, { next: i(1, n) })),
            a(e, c, !1, !0),
            (u[c] = s),
            e
          )
        }
      },
      68880: function (e, t, n) {
        var r = n(19781),
          o = n(3070),
          i = n(79114)
        e.exports = r
          ? function (e, t, n) {
              return o.f(e, t, i(1, n))
            }
          : function (e, t, n) {
              return (e[t] = n), e
            }
      },
      79114: function (e) {
        e.exports = function (e, t) {
          return {
            enumerable: !(1 & e),
            configurable: !(2 & e),
            writable: !(4 & e),
            value: t,
          }
        }
      },
      86135: function (e, t, n) {
        'use strict'
        var r = n(57593),
          o = n(3070),
          i = n(79114)
        e.exports = function (e, t, n) {
          var a = r(t)
          a in e ? o.f(e, a, i(0, n)) : (e[a] = n)
        }
      },
      70654: function (e, t, n) {
        'use strict'
        var r = n(82109),
          o = n(24994),
          i = n(79518),
          a = n(27674),
          u = n(58003),
          s = n(68880),
          c = n(31320),
          l = n(5112),
          f = n(31913),
          d = n(97497),
          p = n(13383),
          h = p.IteratorPrototype,
          v = p.BUGGY_SAFARI_ITERATORS,
          g = l('iterator'),
          y = function () {
            return this
          }
        e.exports = function (e, t, n, l, p, m, w) {
          o(n, t, l)
          var b,
            S,
            _,
            E = function (e) {
              if (e === p && R) return R
              if (!v && e in C) return C[e]
              switch (e) {
                case 'keys':
                case 'values':
                case 'entries':
                  return function () {
                    return new n(this, e)
                  }
              }
              return function () {
                return new n(this)
              }
            },
            A = t + ' Iterator',
            O = !1,
            C = e.prototype,
            T = C[g] || C['@@iterator'] || (p && C[p]),
            R = (!v && T) || E(p),
            P = ('Array' == t && C.entries) || T
          if (
            (P &&
              ((b = i(P.call(new e()))),
              h !== Object.prototype &&
                b.next &&
                (f ||
                  i(b) === h ||
                  (a ? a(b, h) : 'function' != typeof b[g] && s(b, g, y)),
                u(b, A, !0, !0),
                f && (d[A] = y))),
            'values' == p &&
              T &&
              'values' !== T.name &&
              ((O = !0),
              (R = function () {
                return T.call(this)
              })),
            (f && !w) || C[g] === R || s(C, g, R),
            (d[t] = R),
            p)
          )
            if (
              ((S = {
                values: E('values'),
                keys: m ? R : E('keys'),
                entries: E('entries'),
              }),
              w)
            )
              for (_ in S) (v || O || !(_ in C)) && c(C, _, S[_])
            else r({ target: t, proto: !0, forced: v || O }, S)
          return S
        }
      },
      97235: function (e, t, n) {
        var r = n(40857),
          o = n(86656),
          i = n(96805),
          a = n(3070).f
        e.exports = function (e) {
          var t = r.Symbol || (r.Symbol = {})
          o(t, e) || a(t, e, { value: i.f(e) })
        }
      },
      19781: function (e, t, n) {
        var r = n(47293)
        e.exports = !r(function () {
          return (
            7 !=
            Object.defineProperty({}, 'a', {
              get: function () {
                return 7
              },
            }).a
          )
        })
      },
      80317: function (e, t, n) {
        var r = n(17854),
          o = n(70111),
          i = r.document,
          a = o(i) && o(i.createElement)
        e.exports = function (e) {
          return a ? i.createElement(e) : {}
        }
      },
      48324: function (e) {
        e.exports = {
          CSSRuleList: 0,
          CSSStyleDeclaration: 0,
          CSSValueList: 0,
          ClientRectList: 0,
          DOMRectList: 0,
          DOMStringList: 0,
          DOMTokenList: 1,
          DataTransferItemList: 0,
          FileList: 0,
          HTMLAllCollection: 0,
          HTMLCollection: 0,
          HTMLFormElement: 0,
          HTMLSelectElement: 0,
          MediaList: 0,
          MimeTypeArray: 0,
          NamedNodeMap: 0,
          NodeList: 1,
          PaintRequestList: 0,
          Plugin: 0,
          PluginArray: 0,
          SVGLengthList: 0,
          SVGNumberList: 0,
          SVGPathSegList: 0,
          SVGPointList: 0,
          SVGStringList: 0,
          SVGTransformList: 0,
          SourceBufferList: 0,
          StyleSheetList: 0,
          TextTrackCueList: 0,
          TextTrackList: 0,
          TouchList: 0,
        }
      },
      80748: function (e) {
        e.exports = [
          'constructor',
          'hasOwnProperty',
          'isPrototypeOf',
          'propertyIsEnumerable',
          'toLocaleString',
          'toString',
          'valueOf',
        ]
      },
      82109: function (e, t, n) {
        var r = n(17854),
          o = n(31236).f,
          i = n(68880),
          a = n(31320),
          u = n(83505),
          s = n(99920),
          c = n(54705)
        e.exports = function (e, t) {
          var n,
            l,
            f,
            d,
            p,
            h = e.target,
            v = e.global,
            g = e.stat
          if ((n = v ? r : g ? r[h] || u(h, {}) : (r[h] || {}).prototype))
            for (l in t) {
              if (
                ((d = t[l]),
                (f = e.noTargetGet ? (p = o(n, l)) && p.value : n[l]),
                !c(v ? l : h + (g ? '.' : '#') + l, e.forced) && void 0 !== f)
              ) {
                if (typeof d == typeof f) continue
                s(d, f)
              }
              ;(e.sham || (f && f.sham)) && i(d, 'sham', !0), a(n, l, d, e)
            }
        }
      },
      47293: function (e) {
        e.exports = function (e) {
          try {
            return !!e()
          } catch (e) {
            return !0
          }
        }
      },
      27007: function (e, t, n) {
        'use strict'
        var r = n(68880),
          o = n(31320),
          i = n(47293),
          a = n(5112),
          u = n(22261),
          s = a('species'),
          c = !i(function () {
            var e = /./
            return (
              (e.exec = function () {
                var e = []
                return (e.groups = { a: '7' }), e
              }),
              '7' !== ''.replace(e, '$<a>')
            )
          }),
          l = !i(function () {
            var e = /(?:)/,
              t = e.exec
            e.exec = function () {
              return t.apply(this, arguments)
            }
            var n = 'ab'.split(e)
            return 2 !== n.length || 'a' !== n[0] || 'b' !== n[1]
          })
        e.exports = function (e, t, n, f) {
          var d = a(e),
            p = !i(function () {
              var t = {}
              return (
                (t[d] = function () {
                  return 7
                }),
                7 != ''[e](t)
              )
            }),
            h =
              p &&
              !i(function () {
                var t = !1,
                  n = /a/
                return (
                  'split' === e &&
                    (((n = {}).constructor = {}),
                    (n.constructor[s] = function () {
                      return n
                    }),
                    (n.flags = ''),
                    (n[d] = /./[d])),
                  (n.exec = function () {
                    return (t = !0), null
                  }),
                  n[d](''),
                  !t
                )
              })
          if (!p || !h || ('replace' === e && !c) || ('split' === e && !l)) {
            var v = /./[d],
              g = n(d, ''[e], function (e, t, n, r, o) {
                return t.exec === u
                  ? p && !o
                    ? { done: !0, value: v.call(t, n, r) }
                    : { done: !0, value: e.call(n, t, r) }
                  : { done: !1 }
              }),
              y = g[0],
              m = g[1]
            o(String.prototype, e, y),
              o(
                RegExp.prototype,
                d,
                2 == t
                  ? function (e, t) {
                      return m.call(e, this, t)
                    }
                  : function (e) {
                      return m.call(e, this)
                    },
              ),
              f && r(RegExp.prototype[d], 'sham', !0)
          }
        }
      },
      8711: function (e, t, n) {
        var r = n(47293),
          o = n(81361)
        e.exports = function (e) {
          return r(function () {
            return !!o[e]() || '​᠎' != '​᠎'[e]() || o[e].name !== e
          })
        }
      },
      76677: function (e, t, n) {
        var r = n(47293)
        e.exports = !r(function () {
          return Object.isExtensible(Object.preventExtensions({}))
        })
      },
      92521: function (e, t, n) {
        var r = n(72309)
        e.exports = r('native-function-to-string', Function.toString)
      },
      35005: function (e, t, n) {
        var r = n(40857),
          o = n(17854),
          i = function (e) {
            return 'function' == typeof e ? e : void 0
          }
        e.exports = function (e, t) {
          return arguments.length < 2
            ? i(r[e]) || i(o[e])
            : (r[e] && r[e][t]) || (o[e] && o[e][t])
        }
      },
      71246: function (e, t, n) {
        var r = n(70648),
          o = n(97497),
          i = n(5112)('iterator')
        e.exports = function (e) {
          if (null != e) return e[i] || e['@@iterator'] || o[r(e)]
        }
      },
      18554: function (e, t, n) {
        var r = n(19670),
          o = n(71246)
        e.exports = function (e) {
          var t = o(e)
          if ('function' != typeof t)
            throw TypeError(String(e) + ' is not iterable')
          return r(t.call(e))
        }
      },
      54647: function (e, t, n) {
        var r = n(31913),
          o = n(18554)
        e.exports = r
          ? o
          : function (e) {
              return Map.prototype.entries.call(e)
            }
      },
      96767: function (e, t, n) {
        var r = n(31913),
          o = n(18554)
        e.exports = r
          ? o
          : function (e) {
              return Set.prototype.values.call(e)
            }
      },
      17854: function (e, t, n) {
        var r = function (e) {
          return e && e.Math == Math && e
        }
        e.exports =
          r('object' == typeof globalThis && globalThis) ||
          r('object' == typeof window && window) ||
          r('object' == typeof self && self) ||
          r('object' == typeof n.g && n.g) ||
          Function('return this')()
      },
      86656: function (e) {
        var t = {}.hasOwnProperty
        e.exports = function (e, n) {
          return t.call(e, n)
        }
      },
      3501: function (e) {
        e.exports = {}
      },
      842: function (e, t, n) {
        var r = n(17854)
        e.exports = function (e, t) {
          var n = r.console
          n && n.error && (1 === arguments.length ? n.error(e) : n.error(e, t))
        }
      },
      60490: function (e, t, n) {
        var r = n(35005)
        e.exports = r('document', 'documentElement')
      },
      64664: function (e, t, n) {
        var r = n(19781),
          o = n(47293),
          i = n(80317)
        e.exports =
          !r &&
          !o(function () {
            return (
              7 !=
              Object.defineProperty(i('div'), 'a', {
                get: function () {
                  return 7
                },
              }).a
            )
          })
      },
      68361: function (e, t, n) {
        var r = n(47293),
          o = n(84326),
          i = ''.split
        e.exports = r(function () {
          return !Object('z').propertyIsEnumerable(0)
        })
          ? function (e) {
              return 'String' == o(e) ? i.call(e, '') : Object(e)
            }
          : Object
      },
      79587: function (e, t, n) {
        var r = n(70111),
          o = n(27674)
        e.exports = function (e, t, n) {
          var i, a
          return (
            o &&
              'function' == typeof (i = t.constructor) &&
              i !== n &&
              r((a = i.prototype)) &&
              a !== n.prototype &&
              o(e, a),
            e
          )
        }
      },
      62423: function (e, t, n) {
        var r = n(3501),
          o = n(70111),
          i = n(86656),
          a = n(3070).f,
          u = n(69711),
          s = n(76677),
          c = u('meta'),
          l = 0,
          f =
            Object.isExtensible ||
            function () {
              return !0
            },
          d = function (e) {
            a(e, c, { value: { objectID: 'O' + ++l, weakData: {} } })
          },
          p = (e.exports = {
            REQUIRED: !1,
            fastKey: function (e, t) {
              if (!o(e))
                return 'symbol' == typeof e
                  ? e
                  : ('string' == typeof e ? 'S' : 'P') + e
              if (!i(e, c)) {
                if (!f(e)) return 'F'
                if (!t) return 'E'
                d(e)
              }
              return e[c].objectID
            },
            getWeakData: function (e, t) {
              if (!i(e, c)) {
                if (!f(e)) return !0
                if (!t) return !1
                d(e)
              }
              return e[c].weakData
            },
            onFreeze: function (e) {
              return s && p.REQUIRED && f(e) && !i(e, c) && d(e), e
            },
          })
        r[c] = !0
      },
      29909: function (e, t, n) {
        var r,
          o,
          i,
          a = n(68536),
          u = n(17854),
          s = n(70111),
          c = n(68880),
          l = n(86656),
          f = n(6200),
          d = n(3501),
          p = u.WeakMap
        if (a) {
          var h = new p(),
            v = h.get,
            g = h.has,
            y = h.set
          ;(r = function (e, t) {
            return y.call(h, e, t), t
          }),
            (o = function (e) {
              return v.call(h, e) || {}
            }),
            (i = function (e) {
              return g.call(h, e)
            })
        } else {
          var m = f('state')
          ;(d[m] = !0),
            (r = function (e, t) {
              return c(e, m, t), t
            }),
            (o = function (e) {
              return l(e, m) ? e[m] : {}
            }),
            (i = function (e) {
              return l(e, m)
            })
        }
        e.exports = {
          set: r,
          get: o,
          has: i,
          enforce: function (e) {
            return i(e) ? o(e) : r(e, {})
          },
          getterFor: function (e) {
            return function (t) {
              var n
              if (!s(t) || (n = o(t)).type !== e)
                throw TypeError('Incompatible receiver, ' + e + ' required')
              return n
            }
          },
        }
      },
      97659: function (e, t, n) {
        var r = n(5112),
          o = n(97497),
          i = r('iterator'),
          a = Array.prototype
        e.exports = function (e) {
          return void 0 !== e && (o.Array === e || a[i] === e)
        }
      },
      43157: function (e, t, n) {
        var r = n(84326)
        e.exports =
          Array.isArray ||
          function (e) {
            return 'Array' == r(e)
          }
      },
      54705: function (e, t, n) {
        var r = n(47293),
          o = /#|\.prototype\./,
          i = function (e, t) {
            var n = u[a(e)]
            return n == c || (n != s && ('function' == typeof t ? r(t) : !!t))
          },
          a = (i.normalize = function (e) {
            return String(e).replace(o, '.').toLowerCase()
          }),
          u = (i.data = {}),
          s = (i.NATIVE = 'N'),
          c = (i.POLYFILL = 'P')
        e.exports = i
      },
      39747: function (e, t, n) {
        var r = n(20227)
        e.exports = /(iphone|ipod|ipad).*applewebkit/i.test(r)
      },
      70111: function (e) {
        e.exports = function (e) {
          return 'object' == typeof e ? null !== e : 'function' == typeof e
        }
      },
      31913: function (e) {
        e.exports = !1
      },
      47850: function (e, t, n) {
        var r = n(70111),
          o = n(84326),
          i = n(5112)('match')
        e.exports = function (e) {
          var t
          return r(e) && (void 0 !== (t = e[i]) ? !!t : 'RegExp' == o(e))
        }
      },
      20408: function (e, t, n) {
        var r = n(19670),
          o = n(97659),
          i = n(17466),
          a = n(30244),
          u = n(71246),
          s = n(53411),
          c = function (e, t) {
            ;(this.stopped = e), (this.result = t)
          }
        ;(e.exports = function (e, t, n, l, f) {
          var d,
            p,
            h,
            v,
            g,
            y,
            m,
            w = a(t, n, l ? 2 : 1)
          if (f) d = e
          else {
            if ('function' != typeof (p = u(e)))
              throw TypeError('Target is not iterable')
            if (o(p)) {
              for (h = 0, v = i(e.length); v > h; h++)
                if (
                  (g = l ? w(r((m = e[h]))[0], m[1]) : w(e[h])) &&
                  g instanceof c
                )
                  return g
              return new c(!1)
            }
            d = p.call(e)
          }
          for (y = d.next; !(m = y.call(d)).done; )
            if (
              'object' == typeof (g = s(d, w, m.value, l)) &&
              g &&
              g instanceof c
            )
              return g
          return new c(!1)
        }).stop = function (e) {
          return new c(!0, e)
        }
      },
      13383: function (e, t, n) {
        'use strict'
        var r,
          o,
          i,
          a = n(79518),
          u = n(68880),
          s = n(86656),
          c = n(5112),
          l = n(31913),
          f = c('iterator'),
          d = !1
        ;[].keys &&
          ('next' in (i = [].keys())
            ? (o = a(a(i))) !== Object.prototype && (r = o)
            : (d = !0)),
          null == r && (r = {}),
          l ||
            s(r, f) ||
            u(r, f, function () {
              return this
            }),
          (e.exports = { IteratorPrototype: r, BUGGY_SAFARI_ITERATORS: d })
      },
      97497: function (e) {
        e.exports = {}
      },
      8154: function (e, t, n) {
        'use strict'
        var r = n(19670)
        e.exports = function (e, t) {
          var n,
            o = r(this),
            i = arguments.length > 2 ? arguments[2] : void 0
          if ('function' != typeof t && 'function' != typeof i)
            throw TypeError('At least one callback required')
          return (
            o.has(e)
              ? ((n = o.get(e)),
                'function' == typeof t && ((n = t(n)), o.set(e, n)))
              : 'function' == typeof i && ((n = i()), o.set(e, n)),
            n
          )
        }
      },
      95948: function (e, t, n) {
        var r,
          o,
          i,
          a,
          u,
          s,
          c,
          l,
          f = n(17854),
          d = n(31236).f,
          p = n(84326),
          h = n(20261).set,
          v = n(39747),
          g = f.MutationObserver || f.WebKitMutationObserver,
          y = f.process,
          m = f.Promise,
          w = 'process' == p(y),
          b = d(f, 'queueMicrotask'),
          S = b && b.value
        S ||
          ((r = function () {
            var e, t
            for (w && (e = y.domain) && e.exit(); o; ) {
              ;(t = o.fn), (o = o.next)
              try {
                t()
              } catch (e) {
                throw (o ? a() : (i = void 0), e)
              }
            }
            ;(i = void 0), e && e.enter()
          }),
          w
            ? (a = function () {
                y.nextTick(r)
              })
            : g && !v
            ? ((u = !0),
              (s = document.createTextNode('')),
              new g(r).observe(s, { characterData: !0 }),
              (a = function () {
                s.data = u = !u
              }))
            : m && m.resolve
            ? ((c = m.resolve(void 0)),
              (l = c.then),
              (a = function () {
                l.call(c, r)
              }))
            : (a = function () {
                h.call(f, r)
              })),
          (e.exports =
            S ||
            function (e) {
              var t = { fn: e, next: void 0 }
              i && (i.next = t), o || ((o = t), a()), (i = t)
            })
      },
      13366: function (e, t, n) {
        var r = n(17854)
        e.exports = r.Promise
      },
      30133: function (e, t, n) {
        var r = n(47293)
        e.exports =
          !!Object.getOwnPropertySymbols &&
          !r(function () {
            return !String(Symbol())
          })
      },
      590: function (e, t, n) {
        var r = n(47293),
          o = n(5112),
          i = n(31913),
          a = o('iterator')
        e.exports = !r(function () {
          var e = new URL('b?a=1&b=2&c=3', 'http://a'),
            t = e.searchParams,
            n = ''
          return (
            (e.pathname = 'c%20d'),
            t.forEach(function (e, r) {
              t.delete('b'), (n += r + e)
            }),
            (i && !e.toJSON) ||
              !t.sort ||
              'http://a/c%20d?a=1&c=3' !== e.href ||
              '3' !== t.get('c') ||
              'a=1' !== String(new URLSearchParams('?a=1')) ||
              !t[a] ||
              'a' !== new URL('https://a@b').username ||
              'b' !==
                new URLSearchParams(new URLSearchParams('a=b')).get('a') ||
              'xn--e1aybc' !== new URL('http://тест').host ||
              '#%D0%B1' !== new URL('http://a#б').hash ||
              'a1c3' !== n ||
              'x' !== new URL('http://x', void 0).host
          )
        })
      },
      68536: function (e, t, n) {
        var r = n(17854),
          o = n(92521),
          i = r.WeakMap
        e.exports = 'function' == typeof i && /native code/.test(o.call(i))
      },
      78523: function (e, t, n) {
        'use strict'
        var r = n(13099),
          o = function (e) {
            var t, n
            ;(this.promise = new e(function (e, r) {
              if (void 0 !== t || void 0 !== n)
                throw TypeError('Bad Promise constructor')
              ;(t = e), (n = r)
            })),
              (this.resolve = r(t)),
              (this.reject = r(n))
          }
        e.exports.f = function (e) {
          return new o(e)
        }
      },
      3929: function (e, t, n) {
        var r = n(47850)
        e.exports = function (e) {
          if (r(e))
            throw TypeError("The method doesn't accept regular expressions")
          return e
        }
      },
      21574: function (e, t, n) {
        'use strict'
        var r = n(19781),
          o = n(47293),
          i = n(81956),
          a = n(25181),
          u = n(55296),
          s = n(47908),
          c = n(68361),
          l = Object.assign
        e.exports =
          !l ||
          o(function () {
            var e = {},
              t = {},
              n = Symbol()
            return (
              (e[n] = 7),
              'abcdefghijklmnopqrst'.split('').forEach(function (e) {
                t[e] = e
              }),
              7 != l({}, e)[n] || 'abcdefghijklmnopqrst' != i(l({}, t)).join('')
            )
          })
            ? function (e, t) {
                for (
                  var n = s(e), o = arguments.length, l = 1, f = a.f, d = u.f;
                  o > l;

                )
                  for (
                    var p,
                      h = c(arguments[l++]),
                      v = f ? i(h).concat(f(h)) : i(h),
                      g = v.length,
                      y = 0;
                    g > y;

                  )
                    (p = v[y++]), (r && !d.call(h, p)) || (n[p] = h[p])
                return n
              }
            : l
      },
      70030: function (e, t, n) {
        var r = n(19670),
          o = n(36048),
          i = n(80748),
          a = n(3501),
          u = n(60490),
          s = n(80317),
          c = n(6200)('IE_PROTO'),
          l = function () {},
          f = function () {
            var e,
              t = s('iframe'),
              n = i.length
            for (
              t.style.display = 'none',
                u.appendChild(t),
                t.src = String('javascript:'),
                (e = t.contentWindow.document).open(),
                e.write('<script>document.F=Object</script>'),
                e.close(),
                f = e.F;
              n--;

            )
              delete f.prototype[i[n]]
            return f()
          }
        ;(e.exports =
          Object.create ||
          function (e, t) {
            var n
            return (
              null !== e
                ? ((l.prototype = r(e)),
                  (n = new l()),
                  (l.prototype = null),
                  (n[c] = e))
                : (n = f()),
              void 0 === t ? n : o(n, t)
            )
          }),
          (a[c] = !0)
      },
      36048: function (e, t, n) {
        var r = n(19781),
          o = n(3070),
          i = n(19670),
          a = n(81956)
        e.exports = r
          ? Object.defineProperties
          : function (e, t) {
              i(e)
              for (var n, r = a(t), u = r.length, s = 0; u > s; )
                o.f(e, (n = r[s++]), t[n])
              return e
            }
      },
      3070: function (e, t, n) {
        var r = n(19781),
          o = n(64664),
          i = n(19670),
          a = n(57593),
          u = Object.defineProperty
        t.f = r
          ? u
          : function (e, t, n) {
              if ((i(e), (t = a(t, !0)), i(n), o))
                try {
                  return u(e, t, n)
                } catch (e) {}
              if ('get' in n || 'set' in n)
                throw TypeError('Accessors not supported')
              return 'value' in n && (e[t] = n.value), e
            }
      },
      31236: function (e, t, n) {
        var r = n(19781),
          o = n(55296),
          i = n(79114),
          a = n(45656),
          u = n(57593),
          s = n(86656),
          c = n(64664),
          l = Object.getOwnPropertyDescriptor
        t.f = r
          ? l
          : function (e, t) {
              if (((e = a(e)), (t = u(t, !0)), c))
                try {
                  return l(e, t)
                } catch (e) {}
              if (s(e, t)) return i(!o.f.call(e, t), e[t])
            }
      },
      1156: function (e, t, n) {
        var r = n(45656),
          o = n(8006).f,
          i = {}.toString,
          a =
            'object' == typeof window && window && Object.getOwnPropertyNames
              ? Object.getOwnPropertyNames(window)
              : []
        e.exports.f = function (e) {
          return a && '[object Window]' == i.call(e)
            ? (function (e) {
                try {
                  return o(e)
                } catch (e) {
                  return a.slice()
                }
              })(e)
            : o(r(e))
        }
      },
      8006: function (e, t, n) {
        var r = n(16324),
          o = n(80748).concat('length', 'prototype')
        t.f =
          Object.getOwnPropertyNames ||
          function (e) {
            return r(e, o)
          }
      },
      25181: function (e, t) {
        t.f = Object.getOwnPropertySymbols
      },
      79518: function (e, t, n) {
        var r = n(86656),
          o = n(47908),
          i = n(6200),
          a = n(49920),
          u = i('IE_PROTO'),
          s = Object.prototype
        e.exports = a
          ? Object.getPrototypeOf
          : function (e) {
              return (
                (e = o(e)),
                r(e, u)
                  ? e[u]
                  : 'function' == typeof e.constructor &&
                    e instanceof e.constructor
                  ? e.constructor.prototype
                  : e instanceof Object
                  ? s
                  : null
              )
            }
      },
      16324: function (e, t, n) {
        var r = n(86656),
          o = n(45656),
          i = n(41318).indexOf,
          a = n(3501)
        e.exports = function (e, t) {
          var n,
            u = o(e),
            s = 0,
            c = []
          for (n in u) !r(a, n) && r(u, n) && c.push(n)
          for (; t.length > s; ) r(u, (n = t[s++])) && (~i(c, n) || c.push(n))
          return c
        }
      },
      81956: function (e, t, n) {
        var r = n(16324),
          o = n(80748)
        e.exports =
          Object.keys ||
          function (e) {
            return r(e, o)
          }
      },
      55296: function (e, t) {
        'use strict'
        var n = {}.propertyIsEnumerable,
          r = Object.getOwnPropertyDescriptor,
          o = r && !n.call({ 1: 2 }, 1)
        t.f = o
          ? function (e) {
              var t = r(this, e)
              return !!t && t.enumerable
            }
          : n
      },
      27674: function (e, t, n) {
        var r = n(19670),
          o = n(96077)
        e.exports =
          Object.setPrototypeOf ||
          ('__proto__' in {}
            ? (function () {
                var e,
                  t = !1,
                  n = {}
                try {
                  ;(e = Object.getOwnPropertyDescriptor(
                    Object.prototype,
                    '__proto__',
                  ).set).call(n, []),
                    (t = n instanceof Array)
                } catch (e) {}
                return function (n, i) {
                  return r(n), o(i), t ? e.call(n, i) : (n.__proto__ = i), n
                }
              })()
            : void 0)
      },
      44699: function (e, t, n) {
        var r = n(19781),
          o = n(81956),
          i = n(45656),
          a = n(55296).f,
          u = function (e) {
            return function (t) {
              for (
                var n, u = i(t), s = o(u), c = s.length, l = 0, f = [];
                c > l;

              )
                (n = s[l++]),
                  (r && !a.call(u, n)) || f.push(e ? [n, u[n]] : u[n])
              return f
            }
          }
        e.exports = { entries: u(!0), values: u(!1) }
      },
      90288: function (e, t, n) {
        'use strict'
        var r = n(70648),
          o = {}
        ;(o[n(5112)('toStringTag')] = 'z'),
          (e.exports =
            '[object z]' !== String(o)
              ? function () {
                  return '[object ' + r(this) + ']'
                }
              : o.toString)
      },
      53887: function (e, t, n) {
        var r = n(35005),
          o = n(8006),
          i = n(25181),
          a = n(19670)
        e.exports =
          r('Reflect', 'ownKeys') ||
          function (e) {
            var t = o.f(a(e)),
              n = i.f
            return n ? t.concat(n(e)) : t
          }
      },
      88620: function (e, t, n) {
        var r = n(17854),
          o = n(53111).trim,
          i = n(81361),
          a = r.parseInt,
          u = /^[+-]?0[Xx]/,
          s = 8 !== a(i + '08') || 22 !== a(i + '0x16')
        e.exports = s
          ? function (e, t) {
              var n = o(String(e))
              return a(n, t >>> 0 || (u.test(n) ? 16 : 10))
            }
          : a
      },
      40857: function (e, t, n) {
        e.exports = n(17854)
      },
      12534: function (e) {
        e.exports = function (e) {
          try {
            return { error: !1, value: e() }
          } catch (e) {
            return { error: !0, value: e }
          }
        }
      },
      69478: function (e, t, n) {
        var r = n(19670),
          o = n(70111),
          i = n(78523)
        e.exports = function (e, t) {
          if ((r(e), o(t) && t.constructor === e)) return t
          var n = i.f(e)
          return (0, n.resolve)(t), n.promise
        }
      },
      33611: function (e) {
        'use strict'
        var t = /[^\0-\u007E]/,
          n = /[.\u3002\uFF0E\uFF61]/g,
          r = 'Overflow: input needs wider integers to process',
          o = Math.floor,
          i = String.fromCharCode,
          a = function (e) {
            return e + 22 + 75 * (e < 26)
          },
          u = function (e, t, n) {
            var r = 0
            for (e = n ? o(e / 700) : e >> 1, e += o(e / t); e > 455; r += 36)
              e = o(e / 35)
            return o(r + (36 * e) / (e + 38))
          },
          s = function (e) {
            var t,
              n,
              s = [],
              c = (e = (function (e) {
                for (var t = [], n = 0, r = e.length; n < r; ) {
                  var o = e.charCodeAt(n++)
                  if (o >= 55296 && o <= 56319 && n < r) {
                    var i = e.charCodeAt(n++)
                    56320 == (64512 & i)
                      ? t.push(((1023 & o) << 10) + (1023 & i) + 65536)
                      : (t.push(o), n--)
                  } else t.push(o)
                }
                return t
              })(e)).length,
              l = 128,
              f = 0,
              d = 72
            for (t = 0; t < e.length; t++) (n = e[t]) < 128 && s.push(i(n))
            var p = s.length,
              h = p
            for (p && s.push('-'); h < c; ) {
              var v = 2147483647
              for (t = 0; t < e.length; t++) (n = e[t]) >= l && n < v && (v = n)
              var g = h + 1
              if (v - l > o((2147483647 - f) / g)) throw RangeError(r)
              for (f += (v - l) * g, l = v, t = 0; t < e.length; t++) {
                if ((n = e[t]) < l && ++f > 2147483647) throw RangeError(r)
                if (n == l) {
                  for (var y = f, m = 36; ; m += 36) {
                    var w = m <= d ? 1 : m >= d + 26 ? 26 : m - d
                    if (y < w) break
                    var b = y - w,
                      S = 36 - w
                    s.push(i(a(w + (b % S)))), (y = o(b / S))
                  }
                  s.push(i(a(y))), (d = u(f, g, h == p)), (f = 0), ++h
                }
              }
              ++f, ++l
            }
            return s.join('')
          }
        e.exports = function (e) {
          var r,
            o,
            i = [],
            a = e.toLowerCase().replace(n, '.').split('.')
          for (r = 0; r < a.length; r++)
            (o = a[r]), i.push(t.test(o) ? 'xn--' + s(o) : o)
          return i.join('.')
        }
      },
      12248: function (e, t, n) {
        var r = n(31320)
        e.exports = function (e, t, n) {
          for (var o in t) r(e, o, t[o], n)
          return e
        }
      },
      31320: function (e, t, n) {
        var r = n(17854),
          o = n(72309),
          i = n(68880),
          a = n(86656),
          u = n(83505),
          s = n(92521),
          c = n(29909),
          l = c.get,
          f = c.enforce,
          d = String(s).split('toString')
        o('inspectSource', function (e) {
          return s.call(e)
        }),
          (e.exports = function (e, t, n, o) {
            var s = !!o && !!o.unsafe,
              c = !!o && !!o.enumerable,
              l = !!o && !!o.noTargetGet
            'function' == typeof n &&
              ('string' != typeof t || a(n, 'name') || i(n, 'name', t),
              (f(n).source = d.join('string' == typeof t ? t : ''))),
              e !== r
                ? (s ? !l && e[t] && (c = !0) : delete e[t],
                  c ? (e[t] = n) : i(e, t, n))
                : c
                ? (e[t] = n)
                : u(t, n)
          })(Function.prototype, 'toString', function () {
            return ('function' == typeof this && l(this).source) || s.call(this)
          })
      },
      97651: function (e, t, n) {
        var r = n(84326),
          o = n(22261)
        e.exports = function (e, t) {
          var n = e.exec
          if ('function' == typeof n) {
            var i = n.call(e, t)
            if ('object' != typeof i)
              throw TypeError(
                'RegExp exec method returned something other than an Object or null',
              )
            return i
          }
          if ('RegExp' !== r(e))
            throw TypeError('RegExp#exec called on incompatible receiver')
          return o.call(e, t)
        }
      },
      22261: function (e, t, n) {
        'use strict'
        var r,
          o,
          i = n(67066),
          a = RegExp.prototype.exec,
          u = String.prototype.replace,
          s = a,
          c =
            ((r = /a/),
            (o = /b*/g),
            a.call(r, 'a'),
            a.call(o, 'a'),
            0 !== r.lastIndex || 0 !== o.lastIndex),
          l = void 0 !== /()??/.exec('')[1]
        ;(c || l) &&
          (s = function (e) {
            var t,
              n,
              r,
              o,
              s = this
            return (
              l && (n = new RegExp('^' + s.source + '$(?!\\s)', i.call(s))),
              c && (t = s.lastIndex),
              (r = a.call(s, e)),
              c && r && (s.lastIndex = s.global ? r.index + r[0].length : t),
              l &&
                r &&
                r.length > 1 &&
                u.call(r[0], n, function () {
                  for (o = 1; o < arguments.length - 2; o++)
                    void 0 === arguments[o] && (r[o] = void 0)
                }),
              r
            )
          }),
          (e.exports = s)
      },
      67066: function (e, t, n) {
        'use strict'
        var r = n(19670)
        e.exports = function () {
          var e = r(this),
            t = ''
          return (
            e.global && (t += 'g'),
            e.ignoreCase && (t += 'i'),
            e.multiline && (t += 'm'),
            e.dotAll && (t += 's'),
            e.unicode && (t += 'u'),
            e.sticky && (t += 'y'),
            t
          )
        }
      },
      84488: function (e) {
        e.exports = function (e) {
          if (null == e) throw TypeError("Can't call method on " + e)
          return e
        }
      },
      46465: function (e) {
        e.exports = function (e, t) {
          return e === t || (e != e && t != t)
        }
      },
      81150: function (e) {
        e.exports =
          Object.is ||
          function (e, t) {
            return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t
          }
      },
      83505: function (e, t, n) {
        var r = n(17854),
          o = n(68880)
        e.exports = function (e, t) {
          try {
            o(r, e, t)
          } catch (n) {
            r[e] = t
          }
          return t
        }
      },
      96340: function (e, t, n) {
        'use strict'
        var r = n(35005),
          o = n(3070),
          i = n(5112),
          a = n(19781),
          u = i('species')
        e.exports = function (e) {
          var t = r(e),
            n = o.f
          a &&
            t &&
            !t[u] &&
            n(t, u, {
              configurable: !0,
              get: function () {
                return this
              },
            })
        }
      },
      58003: function (e, t, n) {
        var r = n(3070).f,
          o = n(86656),
          i = n(5112)('toStringTag')
        e.exports = function (e, t, n) {
          e &&
            !o((e = n ? e : e.prototype), i) &&
            r(e, i, { configurable: !0, value: t })
        }
      },
      6200: function (e, t, n) {
        var r = n(72309),
          o = n(69711),
          i = r('keys')
        e.exports = function (e) {
          return i[e] || (i[e] = o(e))
        }
      },
      5465: function (e, t, n) {
        var r = n(17854),
          o = n(83505),
          i = r['__core-js_shared__'] || o('__core-js_shared__', {})
        e.exports = i
      },
      72309: function (e, t, n) {
        var r = n(31913),
          o = n(5465)
        ;(e.exports = function (e, t) {
          return o[e] || (o[e] = void 0 !== t ? t : {})
        })('versions', []).push({
          version: '3.4.1',
          mode: r ? 'pure' : 'global',
          copyright: '© 2019 Denis Pushkarev (zloirock.ru)',
        })
      },
      36637: function (e, t, n) {
        'use strict'
        var r = n(47293)
        e.exports = function (e, t) {
          var n = [][e]
          return (
            !n ||
            !r(function () {
              n.call(
                null,
                t ||
                  function () {
                    throw 1
                  },
                1,
              )
            })
          )
        }
      },
      36707: function (e, t, n) {
        var r = n(19670),
          o = n(13099),
          i = n(5112)('species')
        e.exports = function (e, t) {
          var n,
            a = r(e).constructor
          return void 0 === a || null == (n = r(a)[i]) ? t : o(n)
        }
      },
      28710: function (e, t, n) {
        var r = n(99958),
          o = n(84488),
          i = function (e) {
            return function (t, n) {
              var i,
                a,
                u = String(o(t)),
                s = r(n),
                c = u.length
              return s < 0 || s >= c
                ? e
                  ? ''
                  : void 0
                : (i = u.charCodeAt(s)) < 55296 ||
                  i > 56319 ||
                  s + 1 === c ||
                  (a = u.charCodeAt(s + 1)) < 56320 ||
                  a > 57343
                ? e
                  ? u.charAt(s)
                  : i
                : e
                ? u.slice(s, s + 2)
                : a - 56320 + ((i - 55296) << 10) + 65536
            }
          }
        e.exports = { codeAt: i(!1), charAt: i(!0) }
      },
      53111: function (e, t, n) {
        var r = n(84488),
          o = '[' + n(81361) + ']',
          i = RegExp('^' + o + o + '*'),
          a = RegExp(o + o + '*$'),
          u = function (e) {
            return function (t) {
              var n = String(r(t))
              return (
                1 & e && (n = n.replace(i, '')),
                2 & e && (n = n.replace(a, '')),
                n
              )
            }
          }
        e.exports = { start: u(1), end: u(2), trim: u(3) }
      },
      20261: function (e, t, n) {
        var r,
          o,
          i,
          a = n(17854),
          u = n(47293),
          s = n(84326),
          c = n(30244),
          l = n(60490),
          f = n(80317),
          d = n(39747),
          p = a.location,
          h = a.setImmediate,
          v = a.clearImmediate,
          g = a.process,
          y = a.MessageChannel,
          m = a.Dispatch,
          w = 0,
          b = {},
          S = function (e) {
            if (b.hasOwnProperty(e)) {
              var t = b[e]
              delete b[e], t()
            }
          },
          _ = function (e) {
            return function () {
              S(e)
            }
          },
          E = function (e) {
            S(e.data)
          },
          A = function (e) {
            a.postMessage(e + '', p.protocol + '//' + p.host)
          }
        ;(h && v) ||
          ((h = function (e) {
            for (var t = [], n = 1; arguments.length > n; )
              t.push(arguments[n++])
            return (
              (b[++w] = function () {
                ;('function' == typeof e ? e : Function(e)).apply(void 0, t)
              }),
              r(w),
              w
            )
          }),
          (v = function (e) {
            delete b[e]
          }),
          'process' == s(g)
            ? (r = function (e) {
                g.nextTick(_(e))
              })
            : m && m.now
            ? (r = function (e) {
                m.now(_(e))
              })
            : y && !d
            ? ((i = (o = new y()).port2),
              (o.port1.onmessage = E),
              (r = c(i.postMessage, i, 1)))
            : !a.addEventListener ||
              'function' != typeof postMessage ||
              a.importScripts ||
              u(A)
            ? (r =
                'onreadystatechange' in f('script')
                  ? function (e) {
                      l.appendChild(
                        f('script'),
                      ).onreadystatechange = function () {
                        l.removeChild(this), S(e)
                      }
                    }
                  : function (e) {
                      setTimeout(_(e), 0)
                    })
            : ((r = A), a.addEventListener('message', E, !1))),
          (e.exports = { set: h, clear: v })
      },
      51400: function (e, t, n) {
        var r = n(99958),
          o = Math.max,
          i = Math.min
        e.exports = function (e, t) {
          var n = r(e)
          return n < 0 ? o(n + t, 0) : i(n, t)
        }
      },
      57067: function (e, t, n) {
        var r = n(99958),
          o = n(17466)
        e.exports = function (e) {
          if (void 0 === e) return 0
          var t = r(e),
            n = o(t)
          if (t !== n) throw RangeError('Wrong length or index')
          return n
        }
      },
      45656: function (e, t, n) {
        var r = n(68361),
          o = n(84488)
        e.exports = function (e) {
          return r(o(e))
        }
      },
      99958: function (e) {
        var t = Math.ceil,
          n = Math.floor
        e.exports = function (e) {
          return isNaN((e = +e)) ? 0 : (e > 0 ? n : t)(e)
        }
      },
      17466: function (e, t, n) {
        var r = n(99958),
          o = Math.min
        e.exports = function (e) {
          return e > 0 ? o(r(e), 9007199254740991) : 0
        }
      },
      47908: function (e, t, n) {
        var r = n(84488)
        e.exports = function (e) {
          return Object(r(e))
        }
      },
      84590: function (e, t, n) {
        var r = n(73002)
        e.exports = function (e, t) {
          var n = r(e)
          if (n % t) throw RangeError('Wrong offset')
          return n
        }
      },
      73002: function (e, t, n) {
        var r = n(99958)
        e.exports = function (e) {
          var t = r(e)
          if (t < 0) throw RangeError("The argument can't be less than 0")
          return t
        }
      },
      57593: function (e, t, n) {
        var r = n(70111)
        e.exports = function (e, t) {
          if (!r(e)) return e
          var n, o
          if (t && 'function' == typeof (n = e.toString) && !r((o = n.call(e))))
            return o
          if ('function' == typeof (n = e.valueOf) && !r((o = n.call(e))))
            return o
          if (
            !t &&
            'function' == typeof (n = e.toString) &&
            !r((o = n.call(e)))
          )
            return o
          throw TypeError("Can't convert object to primitive value")
        }
      },
      19843: function (e, t, n) {
        'use strict'
        var r = n(82109),
          o = n(17854),
          i = n(19781),
          a = n(6500),
          u = n(90260),
          s = n(13331),
          c = n(25787),
          l = n(79114),
          f = n(68880),
          d = n(17466),
          p = n(57067),
          h = n(84590),
          v = n(57593),
          g = n(86656),
          y = n(70648),
          m = n(70111),
          w = n(70030),
          b = n(27674),
          S = n(8006).f,
          _ = n(97321),
          E = n(42092).forEach,
          A = n(96340),
          O = n(3070),
          C = n(31236),
          T = n(29909),
          R = n(79587),
          P = T.get,
          I = T.set,
          x = O.f,
          L = C.f,
          M = Math.round,
          N = o.RangeError,
          k = s.ArrayBuffer,
          D = s.DataView,
          j = u.NATIVE_ARRAY_BUFFER_VIEWS,
          F = u.TYPED_ARRAY_TAG,
          B = u.TypedArray,
          U = u.TypedArrayPrototype,
          H = u.aTypedArrayConstructor,
          G = u.isTypedArray,
          z = function (e, t) {
            for (var n = 0, r = t.length, o = new (H(e))(r); r > n; )
              o[n] = t[n++]
            return o
          },
          W = function (e, t) {
            x(e, t, {
              get: function () {
                return P(this)[t]
              },
            })
          },
          q = function (e) {
            var t
            return (
              e instanceof k ||
              'ArrayBuffer' == (t = y(e)) ||
              'SharedArrayBuffer' == t
            )
          },
          V = function (e, t) {
            return (
              G(e) && 'symbol' != typeof t && t in e && String(+t) == String(t)
            )
          },
          J = function (e, t) {
            return V(e, (t = v(t, !0))) ? l(2, e[t]) : L(e, t)
          },
          K = function (e, t, n) {
            return !(V(e, (t = v(t, !0))) && m(n) && g(n, 'value')) ||
              g(n, 'get') ||
              g(n, 'set') ||
              n.configurable ||
              (g(n, 'writable') && !n.writable) ||
              (g(n, 'enumerable') && !n.enumerable)
              ? x(e, t, n)
              : ((e[t] = n.value), e)
          }
        i
          ? (j ||
              ((C.f = J),
              (O.f = K),
              W(U, 'buffer'),
              W(U, 'byteOffset'),
              W(U, 'byteLength'),
              W(U, 'length')),
            r(
              { target: 'Object', stat: !0, forced: !j },
              { getOwnPropertyDescriptor: J, defineProperty: K },
            ),
            (e.exports = function (e, t, n, i) {
              var u = e + (i ? 'Clamped' : '') + 'Array',
                s = 'get' + e,
                l = 'set' + e,
                v = o[u],
                g = v,
                y = g && g.prototype,
                O = {},
                C = function (e, n) {
                  x(e, n, {
                    get: function () {
                      return (function (e, n) {
                        var r = P(e)
                        return r.view[s](n * t + r.byteOffset, !0)
                      })(this, n)
                    },
                    set: function (e) {
                      return (function (e, n, r) {
                        var o = P(e)
                        i && (r = (r = M(r)) < 0 ? 0 : r > 255 ? 255 : 255 & r),
                          o.view[l](n * t + o.byteOffset, r, !0)
                      })(this, n, e)
                    },
                    enumerable: !0,
                  })
                }
              j
                ? a &&
                  ((g = n(function (e, n, r, o) {
                    return (
                      c(e, g, u),
                      R(
                        m(n)
                          ? q(n)
                            ? void 0 !== o
                              ? new v(n, h(r, t), o)
                              : void 0 !== r
                              ? new v(n, h(r, t))
                              : new v(n)
                            : G(n)
                            ? z(g, n)
                            : _.call(g, n)
                          : new v(p(n)),
                        e,
                        g,
                      )
                    )
                  })),
                  b && b(g, B),
                  E(S(v), function (e) {
                    e in g || f(g, e, v[e])
                  }),
                  (g.prototype = y))
                : ((g = n(function (e, n, r, o) {
                    c(e, g, u)
                    var i,
                      a,
                      s,
                      l = 0,
                      f = 0
                    if (m(n)) {
                      if (!q(n)) return G(n) ? z(g, n) : _.call(g, n)
                      ;(i = n), (f = h(r, t))
                      var v = n.byteLength
                      if (void 0 === o) {
                        if (v % t) throw N('Wrong length')
                        if ((a = v - f) < 0) throw N('Wrong length')
                      } else if ((a = d(o) * t) + f > v) throw N('Wrong length')
                      s = a / t
                    } else (s = p(n)), (i = new k((a = s * t)))
                    for (
                      I(e, {
                        buffer: i,
                        byteOffset: f,
                        byteLength: a,
                        length: s,
                        view: new D(i),
                      });
                      l < s;

                    )
                      C(e, l++)
                  })),
                  b && b(g, B),
                  (y = g.prototype = w(U))),
                y.constructor !== g && f(y, 'constructor', g),
                F && f(y, F, u),
                (O[u] = g),
                r({ global: !0, forced: g != v, sham: !j }, O),
                'BYTES_PER_ELEMENT' in g || f(g, 'BYTES_PER_ELEMENT', t),
                'BYTES_PER_ELEMENT' in y || f(y, 'BYTES_PER_ELEMENT', t),
                A(u)
            }))
          : (e.exports = function () {})
      },
      97321: function (e, t, n) {
        var r = n(47908),
          o = n(17466),
          i = n(71246),
          a = n(97659),
          u = n(30244),
          s = n(90260).aTypedArrayConstructor
        e.exports = function (e) {
          var t,
            n,
            c,
            l,
            f,
            d,
            p = r(e),
            h = arguments.length,
            v = h > 1 ? arguments[1] : void 0,
            g = void 0 !== v,
            y = i(p)
          if (null != y && !a(y))
            for (d = (f = y.call(p)).next, p = []; !(l = d.call(f)).done; )
              p.push(l.value)
          for (
            g && h > 2 && (v = u(v, arguments[2], 2)),
              n = o(p.length),
              c = new (s(this))(n),
              t = 0;
            n > t;
            t++
          )
            c[t] = g ? v(p[t], t) : p[t]
          return c
        }
      },
      6500: function (e, t, n) {
        var r = n(17854),
          o = n(47293),
          i = n(17072),
          a = n(90260).NATIVE_ARRAY_BUFFER_VIEWS,
          u = r.ArrayBuffer,
          s = r.Int8Array
        e.exports =
          !a ||
          !o(function () {
            s(1)
          }) ||
          !o(function () {
            new s(-1)
          }) ||
          !i(function (e) {
            new s(), new s(null), new s(1.5), new s(e)
          }, !0) ||
          o(function () {
            return 1 !== new s(new u(2), 1, void 0).length
          })
      },
      69711: function (e) {
        var t = 0,
          n = Math.random()
        e.exports = function (e) {
          return (
            'Symbol(' +
            String(void 0 === e ? '' : e) +
            ')_' +
            (++t + n).toString(36)
          )
        }
      },
      20227: function (e, t, n) {
        var r = n(35005)
        e.exports = r('navigator', 'userAgent') || ''
      },
      2101: function (e, t, n) {
        var r,
          o,
          i = n(17854),
          a = n(20227),
          u = i.process,
          s = u && u.versions,
          c = s && s.v8
        c
          ? (o = (r = c.split('.'))[0] + r[1])
          : a &&
            (!(r = a.match(/Edge\/(\d+)/)) || r[1] >= 74) &&
            (r = a.match(/Chrome\/(\d+)/)) &&
            (o = r[1]),
          (e.exports = o && +o)
      },
      5112: function (e, t, n) {
        var r = n(17854),
          o = n(72309),
          i = n(69711),
          a = n(30133),
          u = r.Symbol,
          s = o('wks')
        e.exports = function (e) {
          return s[e] || (s[e] = (a && u[e]) || (a ? u : i)('Symbol.' + e))
        }
      },
      81361: function (e) {
        e.exports = '\t\n\v\f\r                　\u2028\u2029\ufeff'
      },
      96805: function (e, t, n) {
        t.f = n(5112)
      },
      92222: function (e, t, n) {
        'use strict'
        var r = n(82109),
          o = n(47293),
          i = n(43157),
          a = n(70111),
          u = n(47908),
          s = n(17466),
          c = n(86135),
          l = n(65417),
          f = n(81194),
          d = n(5112),
          p = n(2101),
          h = d('isConcatSpreadable'),
          v =
            p >= 51 ||
            !o(function () {
              var e = []
              return (e[h] = !1), e.concat()[0] !== e
            }),
          g = f('concat'),
          y = function (e) {
            if (!a(e)) return !1
            var t = e[h]
            return void 0 !== t ? !!t : i(e)
          }
        r(
          { target: 'Array', proto: !0, forced: !v || !g },
          {
            concat: function (e) {
              var t,
                n,
                r,
                o,
                i,
                a = u(this),
                f = l(a, 0),
                d = 0
              for (t = -1, r = arguments.length; t < r; t++)
                if (y((i = -1 === t ? a : arguments[t]))) {
                  if (d + (o = s(i.length)) > 9007199254740991)
                    throw TypeError('Maximum allowed index exceeded')
                  for (n = 0; n < o; n++, d++) n in i && c(f, d, i[n])
                } else {
                  if (d >= 9007199254740991)
                    throw TypeError('Maximum allowed index exceeded')
                  c(f, d++, i)
                }
              return (f.length = d), f
            },
          },
        )
      },
      26541: function (e, t, n) {
        'use strict'
        var r = n(82109),
          o = n(42092).every
        r(
          { target: 'Array', proto: !0, forced: n(36637)('every') },
          {
            every: function (e) {
              return o(this, e, arguments.length > 1 ? arguments[1] : void 0)
            },
          },
        )
      },
      57327: function (e, t, n) {
        'use strict'
        var r = n(82109),
          o = n(42092).filter
        r(
          { target: 'Array', proto: !0, forced: !n(81194)('filter') },
          {
            filter: function (e) {
              return o(this, e, arguments.length > 1 ? arguments[1] : void 0)
            },
          },
        )
      },
      34553: function (e, t, n) {
        'use strict'
        var r = n(82109),
          o = n(42092).findIndex,
          i = n(51223),
          a = !0
        'findIndex' in [] &&
          Array(1).findIndex(function () {
            a = !1
          }),
          r(
            { target: 'Array', proto: !0, forced: a },
            {
              findIndex: function (e) {
                return o(this, e, arguments.length > 1 ? arguments[1] : void 0)
              },
            },
          ),
          i('findIndex')
      },
      89554: function (e, t, n) {
        'use strict'
        var r = n(82109),
          o = n(18533)
        r(
          { target: 'Array', proto: !0, forced: [].forEach != o },
          { forEach: o },
        )
      },
      91038: function (e, t, n) {
        var r = n(82109),
          o = n(48457)
        r(
          {
            target: 'Array',
            stat: !0,
            forced: !n(17072)(function (e) {
              Array.from(e)
            }),
          },
          { from: o },
        )
      },
      66992: function (e, t, n) {
        'use strict'
        var r = n(45656),
          o = n(51223),
          i = n(97497),
          a = n(29909),
          u = n(70654),
          s = a.set,
          c = a.getterFor('Array Iterator')
        ;(e.exports = u(
          Array,
          'Array',
          function (e, t) {
            s(this, { type: 'Array Iterator', target: r(e), index: 0, kind: t })
          },
          function () {
            var e = c(this),
              t = e.target,
              n = e.kind,
              r = e.index++
            return !t || r >= t.length
              ? ((e.target = void 0), { value: void 0, done: !0 })
              : 'keys' == n
              ? { value: r, done: !1 }
              : 'values' == n
              ? { value: t[r], done: !1 }
              : { value: [r, t[r]], done: !1 }
          },
          'values',
        )),
          (i.Arguments = i.Array),
          o('keys'),
          o('values'),
          o('entries')
      },
      69600: function (e, t, n) {
        'use strict'
        var r = n(82109),
          o = n(68361),
          i = n(45656),
          a = n(36637),
          u = [].join,
          s = o != Object,
          c = a('join', ',')
        r(
          { target: 'Array', proto: !0, forced: s || c },
          {
            join: function (e) {
              return u.call(i(this), void 0 === e ? ',' : e)
            },
          },
        )
      },
      21249: function (e, t, n) {
        'use strict'
        var r = n(82109),
          o = n(42092).map
        r(
          { target: 'Array', proto: !0, forced: !n(81194)('map') },
          {
            map: function (e) {
              return o(this, e, arguments.length > 1 ? arguments[1] : void 0)
            },
          },
        )
      },
      85827: function (e, t, n) {
        'use strict'
        var r = n(82109),
          o = n(53671).left
        r(
          { target: 'Array', proto: !0, forced: n(36637)('reduce') },
          {
            reduce: function (e) {
              return o(
                this,
                e,
                arguments.length,
                arguments.length > 1 ? arguments[1] : void 0,
              )
            },
          },
        )
      },
      47042: function (e, t, n) {
        'use strict'
        var r = n(82109),
          o = n(70111),
          i = n(43157),
          a = n(51400),
          u = n(17466),
          s = n(45656),
          c = n(86135),
          l = n(81194),
          f = n(5112)('species'),
          d = [].slice,
          p = Math.max
        r(
          { target: 'Array', proto: !0, forced: !l('slice') },
          {
            slice: function (e, t) {
              var n,
                r,
                l,
                h = s(this),
                v = u(h.length),
                g = a(e, v),
                y = a(void 0 === t ? v : t, v)
              if (
                i(h) &&
                ('function' != typeof (n = h.constructor) ||
                (n !== Array && !i(n.prototype))
                  ? o(n) && null === (n = n[f]) && (n = void 0)
                  : (n = void 0),
                n === Array || void 0 === n)
              )
                return d.call(h, g, y)
              for (
                r = new (void 0 === n ? Array : n)(p(y - g, 0)), l = 0;
                g < y;
                g++, l++
              )
                g in h && c(r, l, h[g])
              return (r.length = l), r
            },
          },
        )
      },
      2707: function (e, t, n) {
        'use strict'
        var r = n(82109),
          o = n(13099),
          i = n(47908),
          a = n(47293),
          u = n(36637),
          s = [],
          c = s.sort,
          l = a(function () {
            s.sort(void 0)
          }),
          f = a(function () {
            s.sort(null)
          }),
          d = u('sort')
        r(
          { target: 'Array', proto: !0, forced: l || !f || d },
          {
            sort: function (e) {
              return void 0 === e ? c.call(i(this)) : c.call(i(this), o(e))
            },
          },
        )
      },
      51532: function (e, t, n) {
        'use strict'
        var r = n(77710),
          o = n(95631)
        e.exports = r(
          'Map',
          function (e) {
            return function () {
              return e(this, arguments.length ? arguments[0] : void 0)
            }
          },
          o,
          !0,
        )
      },
      9653: function (e, t, n) {
        'use strict'
        var r = n(19781),
          o = n(17854),
          i = n(54705),
          a = n(31320),
          u = n(86656),
          s = n(84326),
          c = n(79587),
          l = n(57593),
          f = n(47293),
          d = n(70030),
          p = n(8006).f,
          h = n(31236).f,
          v = n(3070).f,
          g = n(53111).trim,
          y = o.Number,
          m = y.prototype,
          w = 'Number' == s(d(m)),
          b = function (e) {
            var t,
              n,
              r,
              o,
              i,
              a,
              u,
              s,
              c = l(e, !1)
            if ('string' == typeof c && c.length > 2)
              if (43 === (t = (c = g(c)).charCodeAt(0)) || 45 === t) {
                if (88 === (n = c.charCodeAt(2)) || 120 === n) return NaN
              } else if (48 === t) {
                switch (c.charCodeAt(1)) {
                  case 66:
                  case 98:
                    ;(r = 2), (o = 49)
                    break
                  case 79:
                  case 111:
                    ;(r = 8), (o = 55)
                    break
                  default:
                    return +c
                }
                for (a = (i = c.slice(2)).length, u = 0; u < a; u++)
                  if ((s = i.charCodeAt(u)) < 48 || s > o) return NaN
                return parseInt(i, r)
              }
            return +c
          }
        if (i('Number', !y(' 0o1') || !y('0b1') || y('+0x1'))) {
          for (
            var S,
              _ = function (e) {
                var t = arguments.length < 1 ? 0 : e,
                  n = this
                return n instanceof _ &&
                  (w
                    ? f(function () {
                        m.valueOf.call(n)
                      })
                    : 'Number' != s(n))
                  ? c(new y(b(t)), n, _)
                  : b(t)
              },
              E = r
                ? p(y)
                : 'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'.split(
                    ',',
                  ),
              A = 0;
            E.length > A;
            A++
          )
            u(y, (S = E[A])) && !u(_, S) && v(_, S, h(y, S))
          ;(_.prototype = m), (m.constructor = _), a(o, 'Number', _)
        }
      },
      44363: function (e, t, n) {
        n(82109)(
          { target: 'Number', stat: !0 },
          { MAX_SAFE_INTEGER: 9007199254740991 },
        )
      },
      19601: function (e, t, n) {
        var r = n(82109),
          o = n(21574)
        r(
          { target: 'Object', stat: !0, forced: Object.assign !== o },
          { assign: o },
        )
      },
      33321: function (e, t, n) {
        var r = n(82109),
          o = n(19781)
        r(
          { target: 'Object', stat: !0, forced: !o, sham: !o },
          { defineProperties: n(36048) },
        )
      },
      69070: function (e, t, n) {
        var r = n(82109),
          o = n(19781)
        r(
          { target: 'Object', stat: !0, forced: !o, sham: !o },
          { defineProperty: n(3070).f },
        )
      },
      43371: function (e, t, n) {
        var r = n(82109),
          o = n(76677),
          i = n(47293),
          a = n(70111),
          u = n(62423).onFreeze,
          s = Object.freeze
        r(
          {
            target: 'Object',
            stat: !0,
            forced: i(function () {
              s(1)
            }),
            sham: !o,
          },
          {
            freeze: function (e) {
              return s && a(e) ? s(u(e)) : e
            },
          },
        )
      },
      38880: function (e, t, n) {
        var r = n(82109),
          o = n(47293),
          i = n(45656),
          a = n(31236).f,
          u = n(19781),
          s = o(function () {
            a(1)
          })
        r(
          { target: 'Object', stat: !0, forced: !u || s, sham: !u },
          {
            getOwnPropertyDescriptor: function (e, t) {
              return a(i(e), t)
            },
          },
        )
      },
      49337: function (e, t, n) {
        var r = n(82109),
          o = n(19781),
          i = n(53887),
          a = n(45656),
          u = n(31236),
          s = n(86135)
        r(
          { target: 'Object', stat: !0, sham: !o },
          {
            getOwnPropertyDescriptors: function (e) {
              for (
                var t, n, r = a(e), o = u.f, c = i(r), l = {}, f = 0;
                c.length > f;

              )
                void 0 !== (n = o(r, (t = c[f++]))) && s(l, t, n)
              return l
            },
          },
        )
      },
      36210: function (e, t, n) {
        var r = n(82109),
          o = n(47293),
          i = n(1156).f
        r(
          {
            target: 'Object',
            stat: !0,
            forced: o(function () {
              return !Object.getOwnPropertyNames(1)
            }),
          },
          { getOwnPropertyNames: i },
        )
      },
      47941: function (e, t, n) {
        var r = n(82109),
          o = n(47908),
          i = n(81956)
        r(
          {
            target: 'Object',
            stat: !0,
            forced: n(47293)(function () {
              i(1)
            }),
          },
          {
            keys: function (e) {
              return i(o(e))
            },
          },
        )
      },
      41539: function (e, t, n) {
        var r = n(31320),
          o = n(90288),
          i = Object.prototype
        o !== i.toString && r(i, 'toString', o, { unsafe: !0 })
      },
      26833: function (e, t, n) {
        var r = n(82109),
          o = n(44699).values
        r(
          { target: 'Object', stat: !0 },
          {
            values: function (e) {
              return o(e)
            },
          },
        )
      },
      91058: function (e, t, n) {
        var r = n(82109),
          o = n(88620)
        r({ global: !0, forced: parseInt != o }, { parseInt: o })
      },
      88674: function (e, t, n) {
        'use strict'
        var r,
          o,
          i,
          a,
          u = n(82109),
          s = n(31913),
          c = n(17854),
          l = n(35005),
          f = n(13366),
          d = n(31320),
          p = n(12248),
          h = n(72309),
          v = n(58003),
          g = n(96340),
          y = n(70111),
          m = n(13099),
          w = n(25787),
          b = n(84326),
          S = n(20408),
          _ = n(17072),
          E = n(36707),
          A = n(20261).set,
          O = n(95948),
          C = n(69478),
          T = n(842),
          R = n(78523),
          P = n(12534),
          I = n(29909),
          x = n(54705),
          L = n(5112),
          M = n(2101),
          N = L('species'),
          k = 'Promise',
          D = I.get,
          j = I.set,
          F = I.getterFor(k),
          B = f,
          U = c.TypeError,
          H = c.document,
          G = c.process,
          z = h('inspectSource'),
          W = l('fetch'),
          q = R.f,
          V = q,
          J = 'process' == b(G),
          K = !!(H && H.createEvent && c.dispatchEvent),
          X = x(k, function () {
            var e = z(B) !== String(B)
            if (66 === M) return !0
            if (!e && !J && 'function' != typeof PromiseRejectionEvent)
              return !0
            if (s && !B.prototype.finally) return !0
            if (M >= 51 && /native code/.test(B)) return !1
            var t = B.resolve(1),
              n = function (e) {
                e(
                  function () {},
                  function () {},
                )
              }
            return (
              ((t.constructor = {})[N] = n),
              !(t.then(function () {}) instanceof n)
            )
          }),
          Y =
            X ||
            !_(function (e) {
              B.all(e).catch(function () {})
            }),
          Z = function (e) {
            var t
            return !(!y(e) || 'function' != typeof (t = e.then)) && t
          },
          $ = function (e, t, n) {
            if (!t.notified) {
              t.notified = !0
              var r = t.reactions
              O(function () {
                for (var o = t.value, i = 1 == t.state, a = 0; r.length > a; ) {
                  var u,
                    s,
                    c,
                    l = r[a++],
                    f = i ? l.ok : l.fail,
                    d = l.resolve,
                    p = l.reject,
                    h = l.domain
                  try {
                    f
                      ? (i ||
                          (2 === t.rejection && ne(e, t), (t.rejection = 1)),
                        !0 === f
                          ? (u = o)
                          : (h && h.enter(),
                            (u = f(o)),
                            h && (h.exit(), (c = !0))),
                        u === l.promise
                          ? p(U('Promise-chain cycle'))
                          : (s = Z(u))
                          ? s.call(u, d, p)
                          : d(u))
                      : p(o)
                  } catch (e) {
                    h && !c && h.exit(), p(e)
                  }
                }
                ;(t.reactions = []),
                  (t.notified = !1),
                  n && !t.rejection && ee(e, t)
              })
            }
          },
          Q = function (e, t, n) {
            var r, o
            K
              ? (((r = H.createEvent('Event')).promise = t),
                (r.reason = n),
                r.initEvent(e, !1, !0),
                c.dispatchEvent(r))
              : (r = { promise: t, reason: n }),
              (o = c['on' + e])
                ? o(r)
                : 'unhandledrejection' === e &&
                  T('Unhandled promise rejection', n)
          },
          ee = function (e, t) {
            A.call(c, function () {
              var n,
                r = t.value
              if (
                te(t) &&
                ((n = P(function () {
                  J
                    ? G.emit('unhandledRejection', r, e)
                    : Q('unhandledrejection', e, r)
                })),
                (t.rejection = J || te(t) ? 2 : 1),
                n.error)
              )
                throw n.value
            })
          },
          te = function (e) {
            return 1 !== e.rejection && !e.parent
          },
          ne = function (e, t) {
            A.call(c, function () {
              J
                ? G.emit('rejectionHandled', e)
                : Q('rejectionhandled', e, t.value)
            })
          },
          re = function (e, t, n, r) {
            return function (o) {
              e(t, n, o, r)
            }
          },
          oe = function (e, t, n, r) {
            t.done ||
              ((t.done = !0),
              r && (t = r),
              (t.value = n),
              (t.state = 2),
              $(e, t, !0))
          },
          ie = function (e, t, n, r) {
            if (!t.done) {
              ;(t.done = !0), r && (t = r)
              try {
                if (e === n) throw U("Promise can't be resolved itself")
                var o = Z(n)
                o
                  ? O(function () {
                      var r = { done: !1 }
                      try {
                        o.call(n, re(ie, e, r, t), re(oe, e, r, t))
                      } catch (n) {
                        oe(e, r, n, t)
                      }
                    })
                  : ((t.value = n), (t.state = 1), $(e, t, !1))
              } catch (n) {
                oe(e, { done: !1 }, n, t)
              }
            }
          }
        X &&
          ((B = function (e) {
            w(this, B, k), m(e), r.call(this)
            var t = D(this)
            try {
              e(re(ie, this, t), re(oe, this, t))
            } catch (e) {
              oe(this, t, e)
            }
          }),
          ((r = function (e) {
            j(this, {
              type: k,
              done: !1,
              notified: !1,
              parent: !1,
              reactions: [],
              rejection: !1,
              state: 0,
              value: void 0,
            })
          }).prototype = p(B.prototype, {
            then: function (e, t) {
              var n = F(this),
                r = q(E(this, B))
              return (
                (r.ok = 'function' != typeof e || e),
                (r.fail = 'function' == typeof t && t),
                (r.domain = J ? G.domain : void 0),
                (n.parent = !0),
                n.reactions.push(r),
                0 != n.state && $(this, n, !1),
                r.promise
              )
            },
            catch: function (e) {
              return this.then(void 0, e)
            },
          })),
          (o = function () {
            var e = new r(),
              t = D(e)
            ;(this.promise = e),
              (this.resolve = re(ie, e, t)),
              (this.reject = re(oe, e, t))
          }),
          (R.f = q = function (e) {
            return e === B || e === i ? new o(e) : V(e)
          }),
          s ||
            'function' != typeof f ||
            ((a = f.prototype.then),
            d(
              f.prototype,
              'then',
              function (e, t) {
                var n = this
                return new B(function (e, t) {
                  a.call(n, e, t)
                }).then(e, t)
              },
              { unsafe: !0 },
            ),
            'function' == typeof W &&
              u(
                { global: !0, enumerable: !0, forced: !0 },
                {
                  fetch: function (e) {
                    return C(B, W.apply(c, arguments))
                  },
                },
              ))),
          u({ global: !0, wrap: !0, forced: X }, { Promise: B }),
          v(B, k, !1, !0),
          g(k),
          (i = l(k)),
          u(
            { target: k, stat: !0, forced: X },
            {
              reject: function (e) {
                var t = q(this)
                return t.reject.call(void 0, e), t.promise
              },
            },
          ),
          u(
            { target: k, stat: !0, forced: s || X },
            {
              resolve: function (e) {
                return C(s && this === i ? B : this, e)
              },
            },
          ),
          u(
            { target: k, stat: !0, forced: Y },
            {
              all: function (e) {
                var t = this,
                  n = q(t),
                  r = n.resolve,
                  o = n.reject,
                  i = P(function () {
                    var n = m(t.resolve),
                      i = [],
                      a = 0,
                      u = 1
                    S(e, function (e) {
                      var s = a++,
                        c = !1
                      i.push(void 0),
                        u++,
                        n.call(t, e).then(function (e) {
                          c || ((c = !0), (i[s] = e), --u || r(i))
                        }, o)
                    }),
                      --u || r(i)
                  })
                return i.error && o(i.value), n.promise
              },
              race: function (e) {
                var t = this,
                  n = q(t),
                  r = n.reject,
                  o = P(function () {
                    var o = m(t.resolve)
                    S(e, function (e) {
                      o.call(t, e).then(n.resolve, r)
                    })
                  })
                return o.error && r(o.value), n.promise
              },
            },
          )
      },
      24603: function (e, t, n) {
        var r = n(19781),
          o = n(17854),
          i = n(54705),
          a = n(79587),
          u = n(3070).f,
          s = n(8006).f,
          c = n(47850),
          l = n(67066),
          f = n(31320),
          d = n(47293),
          p = n(96340),
          h = n(5112)('match'),
          v = o.RegExp,
          g = v.prototype,
          y = /a/g,
          m = /a/g,
          w = new v(y) !== y
        if (
          r &&
          i(
            'RegExp',
            !w ||
              d(function () {
                return (
                  (m[h] = !1), v(y) != y || v(m) == m || '/a/i' != v(y, 'i')
                )
              }),
          )
        ) {
          for (
            var b = function (e, t) {
                var n = this instanceof b,
                  r = c(e),
                  o = void 0 === t
                return !n && r && e.constructor === b && o
                  ? e
                  : a(
                      w
                        ? new v(r && !o ? e.source : e, t)
                        : v(
                            (r = e instanceof b) ? e.source : e,
                            r && o ? l.call(e) : t,
                          ),
                      n ? this : g,
                      b,
                    )
              },
              S = function (e) {
                ;(e in b) ||
                  u(b, e, {
                    configurable: !0,
                    get: function () {
                      return v[e]
                    },
                    set: function (t) {
                      v[e] = t
                    },
                  })
              },
              _ = s(v),
              E = 0;
            _.length > E;

          )
            S(_[E++])
          ;(g.constructor = b), (b.prototype = g), f(o, 'RegExp', b)
        }
        p('RegExp')
      },
      74916: function (e, t, n) {
        'use strict'
        var r = n(82109),
          o = n(22261)
        r({ target: 'RegExp', proto: !0, forced: /./.exec !== o }, { exec: o })
      },
      39714: function (e, t, n) {
        'use strict'
        var r = n(31320),
          o = n(19670),
          i = n(47293),
          a = n(67066),
          u = RegExp.prototype,
          s = u.toString,
          c = i(function () {
            return '/a/b' != s.call({ source: 'a', flags: 'b' })
          }),
          l = 'toString' != s.name
        ;(c || l) &&
          r(
            RegExp.prototype,
            'toString',
            function () {
              var e = o(this),
                t = String(e.source),
                n = e.flags
              return (
                '/' +
                t +
                '/' +
                String(
                  void 0 === n && e instanceof RegExp && !('flags' in u)
                    ? a.call(e)
                    : n,
                )
              )
            },
            { unsafe: !0 },
          )
      },
      70189: function (e, t, n) {
        'use strict'
        var r = n(77710),
          o = n(95631)
        e.exports = r(
          'Set',
          function (e) {
            return function () {
              return e(this, arguments.length ? arguments[0] : void 0)
            }
          },
          o,
        )
      },
      27852: function (e, t, n) {
        'use strict'
        var r = n(82109),
          o = n(17466),
          i = n(3929),
          a = n(84488),
          u = n(84964),
          s = ''.endsWith,
          c = Math.min
        r(
          { target: 'String', proto: !0, forced: !u('endsWith') },
          {
            endsWith: function (e) {
              var t = String(a(this))
              i(e)
              var n = arguments.length > 1 ? arguments[1] : void 0,
                r = o(t.length),
                u = void 0 === n ? r : c(o(n), r),
                l = String(e)
              return s ? s.call(t, l, u) : t.slice(u - l.length, u) === l
            },
          },
        )
      },
      32023: function (e, t, n) {
        'use strict'
        var r = n(82109),
          o = n(3929),
          i = n(84488)
        r(
          { target: 'String', proto: !0, forced: !n(84964)('includes') },
          {
            includes: function (e) {
              return !!~String(i(this)).indexOf(
                o(e),
                arguments.length > 1 ? arguments[1] : void 0,
              )
            },
          },
        )
      },
      78783: function (e, t, n) {
        'use strict'
        var r = n(28710).charAt,
          o = n(29909),
          i = n(70654),
          a = o.set,
          u = o.getterFor('String Iterator')
        i(
          String,
          'String',
          function (e) {
            a(this, { type: 'String Iterator', string: String(e), index: 0 })
          },
          function () {
            var e,
              t = u(this),
              n = t.string,
              o = t.index
            return o >= n.length
              ? { value: void 0, done: !0 }
              : ((e = r(n, o)), (t.index += e.length), { value: e, done: !1 })
          },
        )
      },
      4723: function (e, t, n) {
        'use strict'
        var r = n(27007),
          o = n(19670),
          i = n(17466),
          a = n(84488),
          u = n(31530),
          s = n(97651)
        r('match', 1, function (e, t, n) {
          return [
            function (t) {
              var n = a(this),
                r = null == t ? void 0 : t[e]
              return void 0 !== r ? r.call(t, n) : new RegExp(t)[e](String(n))
            },
            function (e) {
              var r = n(t, e, this)
              if (r.done) return r.value
              var a = o(e),
                c = String(this)
              if (!a.global) return s(a, c)
              var l = a.unicode
              a.lastIndex = 0
              for (var f, d = [], p = 0; null !== (f = s(a, c)); ) {
                var h = String(f[0])
                ;(d[p] = h),
                  '' === h && (a.lastIndex = u(c, i(a.lastIndex), l)),
                  p++
              }
              return 0 === p ? null : d
            },
          ]
        })
      },
      15306: function (e, t, n) {
        'use strict'
        var r = n(27007),
          o = n(19670),
          i = n(47908),
          a = n(17466),
          u = n(99958),
          s = n(84488),
          c = n(31530),
          l = n(97651),
          f = Math.max,
          d = Math.min,
          p = Math.floor,
          h = /\$([$&'`]|\d\d?|<[^>]*>)/g,
          v = /\$([$&'`]|\d\d?)/g
        r('replace', 2, function (e, t, n) {
          return [
            function (n, r) {
              var o = s(this),
                i = null == n ? void 0 : n[e]
              return void 0 !== i ? i.call(n, o, r) : t.call(String(o), n, r)
            },
            function (e, i) {
              var s = n(t, e, this, i)
              if (s.done) return s.value
              var p = o(e),
                h = String(this),
                v = 'function' == typeof i
              v || (i = String(i))
              var g = p.global
              if (g) {
                var y = p.unicode
                p.lastIndex = 0
              }
              for (var m = []; ; ) {
                var w = l(p, h)
                if (null === w) break
                if ((m.push(w), !g)) break
                '' === String(w[0]) && (p.lastIndex = c(h, a(p.lastIndex), y))
              }
              for (var b, S = '', _ = 0, E = 0; E < m.length; E++) {
                w = m[E]
                for (
                  var A = String(w[0]),
                    O = f(d(u(w.index), h.length), 0),
                    C = [],
                    T = 1;
                  T < w.length;
                  T++
                )
                  C.push(void 0 === (b = w[T]) ? b : String(b))
                var R = w.groups
                if (v) {
                  var P = [A].concat(C, O, h)
                  void 0 !== R && P.push(R)
                  var I = String(i.apply(void 0, P))
                } else I = r(A, h, O, C, R, i)
                O >= _ && ((S += h.slice(_, O) + I), (_ = O + A.length))
              }
              return S + h.slice(_)
            },
          ]
          function r(e, n, r, o, a, u) {
            var s = r + e.length,
              c = o.length,
              l = v
            return (
              void 0 !== a && ((a = i(a)), (l = h)),
              t.call(u, l, function (t, i) {
                var u
                switch (i.charAt(0)) {
                  case '$':
                    return '$'
                  case '&':
                    return e
                  case '`':
                    return n.slice(0, r)
                  case "'":
                    return n.slice(s)
                  case '<':
                    u = a[i.slice(1, -1)]
                    break
                  default:
                    var l = +i
                    if (0 === l) return t
                    if (l > c) {
                      var f = p(l / 10)
                      return 0 === f
                        ? t
                        : f <= c
                        ? void 0 === o[f - 1]
                          ? i.charAt(1)
                          : o[f - 1] + i.charAt(1)
                        : t
                    }
                    u = o[l - 1]
                }
                return void 0 === u ? '' : u
              })
            )
          }
        })
      },
      64765: function (e, t, n) {
        'use strict'
        var r = n(27007),
          o = n(19670),
          i = n(84488),
          a = n(81150),
          u = n(97651)
        r('search', 1, function (e, t, n) {
          return [
            function (t) {
              var n = i(this),
                r = null == t ? void 0 : t[e]
              return void 0 !== r ? r.call(t, n) : new RegExp(t)[e](String(n))
            },
            function (e) {
              var r = n(t, e, this)
              if (r.done) return r.value
              var i = o(e),
                s = String(this),
                c = i.lastIndex
              a(c, 0) || (i.lastIndex = 0)
              var l = u(i, s)
              return (
                a(i.lastIndex, c) || (i.lastIndex = c),
                null === l ? -1 : l.index
              )
            },
          ]
        })
      },
      23157: function (e, t, n) {
        'use strict'
        var r = n(82109),
          o = n(17466),
          i = n(3929),
          a = n(84488),
          u = n(84964),
          s = ''.startsWith,
          c = Math.min
        r(
          { target: 'String', proto: !0, forced: !u('startsWith') },
          {
            startsWith: function (e) {
              var t = String(a(this))
              i(e)
              var n = o(
                  c(arguments.length > 1 ? arguments[1] : void 0, t.length),
                ),
                r = String(e)
              return s ? s.call(t, r, n) : t.slice(n, n + r.length) === r
            },
          },
        )
      },
      73210: function (e, t, n) {
        'use strict'
        var r = n(82109),
          o = n(53111).trim
        r(
          { target: 'String', proto: !0, forced: n(8711)('trim') },
          {
            trim: function () {
              return o(this)
            },
          },
        )
      },
      41817: function (e, t, n) {
        'use strict'
        var r = n(82109),
          o = n(19781),
          i = n(17854),
          a = n(86656),
          u = n(70111),
          s = n(3070).f,
          c = n(99920),
          l = i.Symbol
        if (
          o &&
          'function' == typeof l &&
          (!('description' in l.prototype) || void 0 !== l().description)
        ) {
          var f = {},
            d = function () {
              var e =
                  arguments.length < 1 || void 0 === arguments[0]
                    ? void 0
                    : String(arguments[0]),
                t = this instanceof d ? new l(e) : void 0 === e ? l() : l(e)
              return '' === e && (f[t] = !0), t
            }
          c(d, l)
          var p = (d.prototype = l.prototype)
          p.constructor = d
          var h = p.toString,
            v = 'Symbol(test)' == String(l('test')),
            g = /^Symbol\((.*)\)[^)]+$/
          s(p, 'description', {
            configurable: !0,
            get: function () {
              var e = u(this) ? this.valueOf() : this,
                t = h.call(e)
              if (a(f, e)) return ''
              var n = v ? t.slice(7, -1) : t.replace(g, '$1')
              return '' === n ? void 0 : n
            },
          }),
            r({ global: !0, forced: !0 }, { Symbol: d })
        }
      },
      32165: function (e, t, n) {
        n(97235)('iterator')
      },
      82526: function (e, t, n) {
        'use strict'
        var r = n(82109),
          o = n(17854),
          i = n(35005),
          a = n(31913),
          u = n(19781),
          s = n(30133),
          c = n(47293),
          l = n(86656),
          f = n(43157),
          d = n(70111),
          p = n(19670),
          h = n(47908),
          v = n(45656),
          g = n(57593),
          y = n(79114),
          m = n(70030),
          w = n(81956),
          b = n(8006),
          S = n(1156),
          _ = n(25181),
          E = n(31236),
          A = n(3070),
          O = n(55296),
          C = n(68880),
          T = n(31320),
          R = n(72309),
          P = n(6200),
          I = n(3501),
          x = n(69711),
          L = n(5112),
          M = n(96805),
          N = n(97235),
          k = n(58003),
          D = n(29909),
          j = n(42092).forEach,
          F = P('hidden'),
          B = L('toPrimitive'),
          U = D.set,
          H = D.getterFor('Symbol'),
          G = Object.prototype,
          z = o.Symbol,
          W = i('JSON', 'stringify'),
          q = E.f,
          V = A.f,
          J = S.f,
          K = O.f,
          X = R('symbols'),
          Y = R('op-symbols'),
          Z = R('string-to-symbol-registry'),
          $ = R('symbol-to-string-registry'),
          Q = R('wks'),
          ee = o.QObject,
          te = !ee || !ee.prototype || !ee.prototype.findChild,
          ne =
            u &&
            c(function () {
              return (
                7 !=
                m(
                  V({}, 'a', {
                    get: function () {
                      return V(this, 'a', { value: 7 }).a
                    },
                  }),
                ).a
              )
            })
              ? function (e, t, n) {
                  var r = q(G, t)
                  r && delete G[t], V(e, t, n), r && e !== G && V(G, t, r)
                }
              : V,
          re = function (e, t) {
            var n = (X[e] = m(z.prototype))
            return (
              U(n, { type: 'Symbol', tag: e, description: t }),
              u || (n.description = t),
              n
            )
          },
          oe =
            s && 'symbol' == typeof z.iterator
              ? function (e) {
                  return 'symbol' == typeof e
                }
              : function (e) {
                  return Object(e) instanceof z
                },
          ie = function (e, t, n) {
            e === G && ie(Y, t, n), p(e)
            var r = g(t, !0)
            return (
              p(n),
              l(X, r)
                ? (n.enumerable
                    ? (l(e, F) && e[F][r] && (e[F][r] = !1),
                      (n = m(n, { enumerable: y(0, !1) })))
                    : (l(e, F) || V(e, F, y(1, {})), (e[F][r] = !0)),
                  ne(e, r, n))
                : V(e, r, n)
            )
          },
          ae = function (e, t) {
            p(e)
            var n = v(t),
              r = w(n).concat(le(n))
            return (
              j(r, function (t) {
                ;(u && !ue.call(n, t)) || ie(e, t, n[t])
              }),
              e
            )
          },
          ue = function (e) {
            var t = g(e, !0),
              n = K.call(this, t)
            return (
              !(this === G && l(X, t) && !l(Y, t)) &&
              (!(n || !l(this, t) || !l(X, t) || (l(this, F) && this[F][t])) ||
                n)
            )
          },
          se = function (e, t) {
            var n = v(e),
              r = g(t, !0)
            if (n !== G || !l(X, r) || l(Y, r)) {
              var o = q(n, r)
              return (
                !o || !l(X, r) || (l(n, F) && n[F][r]) || (o.enumerable = !0), o
              )
            }
          },
          ce = function (e) {
            var t = J(v(e)),
              n = []
            return (
              j(t, function (e) {
                l(X, e) || l(I, e) || n.push(e)
              }),
              n
            )
          },
          le = function (e) {
            var t = e === G,
              n = J(t ? Y : v(e)),
              r = []
            return (
              j(n, function (e) {
                !l(X, e) || (t && !l(G, e)) || r.push(X[e])
              }),
              r
            )
          }
        ;(s ||
          (T(
            (z = function () {
              if (this instanceof z)
                throw TypeError('Symbol is not a constructor')
              var e =
                  arguments.length && void 0 !== arguments[0]
                    ? String(arguments[0])
                    : void 0,
                t = x(e),
                n = function (e) {
                  this === G && n.call(Y, e),
                    l(this, F) && l(this[F], t) && (this[F][t] = !1),
                    ne(this, t, y(1, e))
                }
              return u && te && ne(G, t, { configurable: !0, set: n }), re(t, e)
            }).prototype,
            'toString',
            function () {
              return H(this).tag
            },
          ),
          (O.f = ue),
          (A.f = ie),
          (E.f = se),
          (b.f = S.f = ce),
          (_.f = le),
          u &&
            (V(z.prototype, 'description', {
              configurable: !0,
              get: function () {
                return H(this).description
              },
            }),
            a || T(G, 'propertyIsEnumerable', ue, { unsafe: !0 })),
          (M.f = function (e) {
            return re(L(e), e)
          })),
        r({ global: !0, wrap: !0, forced: !s, sham: !s }, { Symbol: z }),
        j(w(Q), function (e) {
          N(e)
        }),
        r(
          { target: 'Symbol', stat: !0, forced: !s },
          {
            for: function (e) {
              var t = String(e)
              if (l(Z, t)) return Z[t]
              var n = z(t)
              return (Z[t] = n), ($[n] = t), n
            },
            keyFor: function (e) {
              if (!oe(e)) throw TypeError(e + ' is not a symbol')
              if (l($, e)) return $[e]
            },
            useSetter: function () {
              te = !0
            },
            useSimple: function () {
              te = !1
            },
          },
        ),
        r(
          { target: 'Object', stat: !0, forced: !s, sham: !u },
          {
            create: function (e, t) {
              return void 0 === t ? m(e) : ae(m(e), t)
            },
            defineProperty: ie,
            defineProperties: ae,
            getOwnPropertyDescriptor: se,
          },
        ),
        r(
          { target: 'Object', stat: !0, forced: !s },
          { getOwnPropertyNames: ce, getOwnPropertySymbols: le },
        ),
        r(
          {
            target: 'Object',
            stat: !0,
            forced: c(function () {
              _.f(1)
            }),
          },
          {
            getOwnPropertySymbols: function (e) {
              return _.f(h(e))
            },
          },
        ),
        W) &&
          r(
            {
              target: 'JSON',
              stat: !0,
              forced:
                !s ||
                c(function () {
                  var e = z()
                  return (
                    '[null]' != W([e]) ||
                    '{}' != W({ a: e }) ||
                    '{}' != W(Object(e))
                  )
                }),
            },
            {
              stringify: function (e, t, n) {
                for (var r, o = [e], i = 1; arguments.length > i; )
                  o.push(arguments[i++])
                if (((r = t), (d(t) || void 0 !== e) && !oe(e)))
                  return (
                    f(t) ||
                      (t = function (e, t) {
                        if (
                          ('function' == typeof r && (t = r.call(this, e, t)),
                          !oe(t))
                        )
                          return t
                      }),
                    (o[1] = t),
                    W.apply(null, o)
                  )
              },
            },
          )
        z.prototype[B] || C(z.prototype, B, z.prototype.valueOf),
          k(z, 'Symbol'),
          (I[F] = !0)
      },
      74345: function (e, t, n) {
        'use strict'
        var r = n(90260),
          o = n(42092).find,
          i = r.aTypedArray
        r.exportProto('find', function (e) {
          return o(i(this), e, arguments.length > 1 ? arguments[1] : void 0)
        })
      },
      98145: function (e, t, n) {
        'use strict'
        var r = n(6500),
          o = n(90260),
          i = n(97321)
        o.exportStatic('from', i, r)
      },
      82472: function (e, t, n) {
        n(19843)('Uint8', 1, function (e) {
          return function (t, n, r) {
            return e(this, t, n, r)
          }
        })
      },
      31672: function (e, t, n) {
        'use strict'
        var r = n(82109),
          o = n(12269).find
        r(
          { target: 'AsyncIterator', proto: !0, real: !0 },
          {
            find: function (e) {
              return o(this, e)
            },
          },
        )
      },
      59461: function (e, t, n) {
        'use strict'
        var r = n(82109),
          o = n(20408),
          i = n(13099),
          a = n(19670)
        r(
          { target: 'Iterator', proto: !0, real: !0 },
          {
            find: function (e) {
              return (
                a(this),
                i(e),
                o(
                  this,
                  function (t) {
                    if (e(t)) return o.stop(t)
                  },
                  void 0,
                  !1,
                  !0,
                ).result
              )
            },
          },
        )
      },
      10072: function (e, t, n) {
        'use strict'
        var r = n(82109),
          o = n(31913),
          i = n(34092)
        r(
          { target: 'Map', proto: !0, real: !0, forced: o },
          {
            deleteAll: function () {
              return i.apply(this, arguments)
            },
          },
        )
      },
      99137: function (e, t, n) {
        'use strict'
        var r = n(82109),
          o = n(31913),
          i = n(19670),
          a = n(30244),
          u = n(54647),
          s = n(20408)
        r(
          { target: 'Map', proto: !0, real: !0, forced: o },
          {
            every: function (e) {
              var t = i(this),
                n = u(t),
                r = a(e, arguments.length > 1 ? arguments[1] : void 0, 3)
              return !s(
                n,
                function (e, n) {
                  if (!r(n, e, t)) return s.stop()
                },
                void 0,
                !0,
                !0,
              ).stopped
            },
          },
        )
      },
      71957: function (e, t, n) {
        'use strict'
        var r = n(82109),
          o = n(31913),
          i = n(35005),
          a = n(19670),
          u = n(13099),
          s = n(30244),
          c = n(36707),
          l = n(54647),
          f = n(20408)
        r(
          { target: 'Map', proto: !0, real: !0, forced: o },
          {
            filter: function (e) {
              var t = a(this),
                n = l(t),
                r = s(e, arguments.length > 1 ? arguments[1] : void 0, 3),
                o = new (c(t, i('Map')))(),
                d = u(o.set)
              return (
                f(
                  n,
                  function (e, n) {
                    r(n, e, t) && d.call(o, e, n)
                  },
                  void 0,
                  !0,
                  !0,
                ),
                o
              )
            },
          },
        )
      },
      103: function (e, t, n) {
        'use strict'
        var r = n(82109),
          o = n(31913),
          i = n(19670),
          a = n(30244),
          u = n(54647),
          s = n(20408)
        r(
          { target: 'Map', proto: !0, real: !0, forced: o },
          {
            findKey: function (e) {
              var t = i(this),
                n = u(t),
                r = a(e, arguments.length > 1 ? arguments[1] : void 0, 3)
              return s(
                n,
                function (e, n) {
                  if (r(n, e, t)) return s.stop(e)
                },
                void 0,
                !0,
                !0,
              ).result
            },
          },
        )
      },
      96306: function (e, t, n) {
        'use strict'
        var r = n(82109),
          o = n(31913),
          i = n(19670),
          a = n(30244),
          u = n(54647),
          s = n(20408)
        r(
          { target: 'Map', proto: !0, real: !0, forced: o },
          {
            find: function (e) {
              var t = i(this),
                n = u(t),
                r = a(e, arguments.length > 1 ? arguments[1] : void 0, 3)
              return s(
                n,
                function (e, n) {
                  if (r(n, e, t)) return s.stop(n)
                },
                void 0,
                !0,
                !0,
              ).result
            },
          },
        )
      },
      8582: function (e, t, n) {
        n(82109)({ target: 'Map', stat: !0 }, { from: n(27296) })
      },
      90618: function (e, t, n) {
        'use strict'
        var r = n(82109),
          o = n(20408),
          i = n(13099)
        r(
          { target: 'Map', stat: !0 },
          {
            groupBy: function (e, t) {
              var n = new this()
              i(t)
              var r = i(n.has),
                a = i(n.get),
                u = i(n.set)
              return (
                o(e, function (e) {
                  var o = t(e)
                  r.call(n, o) ? a.call(n, o).push(e) : u.call(n, o, [e])
                }),
                n
              )
            },
          },
        )
      },
      74592: function (e, t, n) {
        'use strict'
        var r = n(82109),
          o = n(31913),
          i = n(19670),
          a = n(54647),
          u = n(46465),
          s = n(20408)
        r(
          { target: 'Map', proto: !0, real: !0, forced: o },
          {
            includes: function (e) {
              return s(
                a(i(this)),
                function (t, n) {
                  if (u(n, e)) return s.stop()
                },
                void 0,
                !0,
                !0,
              ).stopped
            },
          },
        )
      },
      88440: function (e, t, n) {
        'use strict'
        var r = n(82109),
          o = n(20408),
          i = n(13099)
        r(
          { target: 'Map', stat: !0 },
          {
            keyBy: function (e, t) {
              var n = new this()
              i(t)
              var r = i(n.set)
              return (
                o(e, function (e) {
                  r.call(n, t(e), e)
                }),
                n
              )
            },
          },
        )
      },
      58276: function (e, t, n) {
        'use strict'
        var r = n(82109),
          o = n(31913),
          i = n(19670),
          a = n(54647),
          u = n(20408)
        r(
          { target: 'Map', proto: !0, real: !0, forced: o },
          {
            keyOf: function (e) {
              return u(
                a(i(this)),
                function (t, n) {
                  if (n === e) return u.stop(t)
                },
                void 0,
                !0,
                !0,
              ).result
            },
          },
        )
      },
      35082: function (e, t, n) {
        'use strict'
        var r = n(82109),
          o = n(31913),
          i = n(35005),
          a = n(19670),
          u = n(13099),
          s = n(30244),
          c = n(36707),
          l = n(54647),
          f = n(20408)
        r(
          { target: 'Map', proto: !0, real: !0, forced: o },
          {
            mapKeys: function (e) {
              var t = a(this),
                n = l(t),
                r = s(e, arguments.length > 1 ? arguments[1] : void 0, 3),
                o = new (c(t, i('Map')))(),
                d = u(o.set)
              return (
                f(
                  n,
                  function (e, n) {
                    d.call(o, r(n, e, t), n)
                  },
                  void 0,
                  !0,
                  !0,
                ),
                o
              )
            },
          },
        )
      },
      12813: function (e, t, n) {
        'use strict'
        var r = n(82109),
          o = n(31913),
          i = n(35005),
          a = n(19670),
          u = n(13099),
          s = n(30244),
          c = n(36707),
          l = n(54647),
          f = n(20408)
        r(
          { target: 'Map', proto: !0, real: !0, forced: o },
          {
            mapValues: function (e) {
              var t = a(this),
                n = l(t),
                r = s(e, arguments.length > 1 ? arguments[1] : void 0, 3),
                o = new (c(t, i('Map')))(),
                d = u(o.set)
              return (
                f(
                  n,
                  function (e, n) {
                    d.call(o, e, r(n, e, t))
                  },
                  void 0,
                  !0,
                  !0,
                ),
                o
              )
            },
          },
        )
      },
      18222: function (e, t, n) {
        'use strict'
        var r = n(82109),
          o = n(31913),
          i = n(19670),
          a = n(13099),
          u = n(20408)
        r(
          { target: 'Map', proto: !0, real: !0, forced: o },
          {
            merge: function (e) {
              for (var t = i(this), n = a(t.set), r = 0; r < arguments.length; )
                u(arguments[r++], n, t, !0)
              return t
            },
          },
        )
      },
      24838: function (e, t, n) {
        n(82109)({ target: 'Map', stat: !0 }, { of: n(82044) })
      },
      38563: function (e, t, n) {
        'use strict'
        var r = n(82109),
          o = n(31913),
          i = n(19670),
          a = n(13099),
          u = n(54647),
          s = n(20408)
        r(
          { target: 'Map', proto: !0, real: !0, forced: o },
          {
            reduce: function (e) {
              var t = i(this),
                n = u(t),
                r = arguments.length < 2,
                o = r ? void 0 : arguments[1]
              if (
                (a(e),
                s(
                  n,
                  function (n, i) {
                    r ? ((r = !1), (o = i)) : (o = e(o, i, n, t))
                  },
                  void 0,
                  !0,
                  !0,
                ),
                r)
              )
                throw TypeError('Reduce of empty map with no initial value')
              return o
            },
          },
        )
      },
      50336: function (e, t, n) {
        'use strict'
        var r = n(82109),
          o = n(31913),
          i = n(19670),
          a = n(30244),
          u = n(54647),
          s = n(20408)
        r(
          { target: 'Map', proto: !0, real: !0, forced: o },
          {
            some: function (e) {
              var t = i(this),
                n = u(t),
                r = a(e, arguments.length > 1 ? arguments[1] : void 0, 3)
              return s(
                n,
                function (e, n) {
                  if (r(n, e, t)) return s.stop()
                },
                void 0,
                !0,
                !0,
              ).stopped
            },
          },
        )
      },
      74442: function (e, t, n) {
        'use strict'
        n(82109)(
          { target: 'Map', proto: !0, real: !0, forced: n(31913) },
          { updateOrInsert: n(8154) },
        )
      },
      7512: function (e, t, n) {
        'use strict'
        var r = n(82109),
          o = n(31913),
          i = n(19670),
          a = n(13099)
        r(
          { target: 'Map', proto: !0, real: !0, forced: o },
          {
            update: function (e, t) {
              var n = i(this),
                r = arguments.length
              a(t)
              var o = n.has(e)
              if (!o && r < 3) throw TypeError('Updating absent value')
              var u = o ? n.get(e) : a(r > 2 ? arguments[2] : void 0)(e, n)
              return n.set(e, t(u, e, n)), n
            },
          },
        )
      },
      87713: function (e, t, n) {
        'use strict'
        n(82109)(
          { target: 'Map', proto: !0, real: !0, forced: n(31913) },
          { upsert: n(8154) },
        )
      },
      88921: function (e, t, n) {
        'use strict'
        var r = n(82109),
          o = n(31913),
          i = n(31501)
        r(
          { target: 'Set', proto: !0, real: !0, forced: o },
          {
            addAll: function () {
              return i.apply(this, arguments)
            },
          },
        )
      },
      96248: function (e, t, n) {
        'use strict'
        var r = n(82109),
          o = n(31913),
          i = n(34092)
        r(
          { target: 'Set', proto: !0, real: !0, forced: o },
          {
            deleteAll: function () {
              return i.apply(this, arguments)
            },
          },
        )
      },
      13599: function (e, t, n) {
        'use strict'
        var r = n(82109),
          o = n(31913),
          i = n(35005),
          a = n(19670),
          u = n(13099),
          s = n(36707),
          c = n(20408)
        r(
          { target: 'Set', proto: !0, real: !0, forced: o },
          {
            difference: function (e) {
              var t = a(this),
                n = new (s(t, i('Set')))(t),
                r = u(n.delete)
              return (
                c(e, function (e) {
                  r.call(n, e)
                }),
                n
              )
            },
          },
        )
      },
      11477: function (e, t, n) {
        'use strict'
        var r = n(82109),
          o = n(31913),
          i = n(19670),
          a = n(30244),
          u = n(96767),
          s = n(20408)
        r(
          { target: 'Set', proto: !0, real: !0, forced: o },
          {
            every: function (e) {
              var t = i(this),
                n = u(t),
                r = a(e, arguments.length > 1 ? arguments[1] : void 0, 3)
              return !s(
                n,
                function (e) {
                  if (!r(e, e, t)) return s.stop()
                },
                void 0,
                !1,
                !0,
              ).stopped
            },
          },
        )
      },
      64362: function (e, t, n) {
        'use strict'
        var r = n(82109),
          o = n(31913),
          i = n(35005),
          a = n(19670),
          u = n(13099),
          s = n(30244),
          c = n(36707),
          l = n(96767),
          f = n(20408)
        r(
          { target: 'Set', proto: !0, real: !0, forced: o },
          {
            filter: function (e) {
              var t = a(this),
                n = l(t),
                r = s(e, arguments.length > 1 ? arguments[1] : void 0, 3),
                o = new (c(t, i('Set')))(),
                d = u(o.add)
              return (
                f(
                  n,
                  function (e) {
                    r(e, e, t) && d.call(o, e)
                  },
                  void 0,
                  !1,
                  !0,
                ),
                o
              )
            },
          },
        )
      },
      15389: function (e, t, n) {
        'use strict'
        var r = n(82109),
          o = n(31913),
          i = n(19670),
          a = n(30244),
          u = n(96767),
          s = n(20408)
        r(
          { target: 'Set', proto: !0, real: !0, forced: o },
          {
            find: function (e) {
              var t = i(this),
                n = u(t),
                r = a(e, arguments.length > 1 ? arguments[1] : void 0, 3)
              return s(
                n,
                function (e) {
                  if (r(e, e, t)) return s.stop(e)
                },
                void 0,
                !1,
                !0,
              ).result
            },
          },
        )
      },
      46006: function (e, t, n) {
        n(82109)({ target: 'Set', stat: !0 }, { from: n(27296) })
      },
      90401: function (e, t, n) {
        'use strict'
        var r = n(82109),
          o = n(31913),
          i = n(35005),
          a = n(19670),
          u = n(13099),
          s = n(36707),
          c = n(20408)
        r(
          { target: 'Set', proto: !0, real: !0, forced: o },
          {
            intersection: function (e) {
              var t = a(this),
                n = new (s(t, i('Set')))(),
                r = u(t.has),
                o = u(n.add)
              return (
                c(e, function (e) {
                  r.call(t, e) && o.call(n, e)
                }),
                n
              )
            },
          },
        )
      },
      45164: function (e, t, n) {
        'use strict'
        var r = n(82109),
          o = n(31913),
          i = n(19670),
          a = n(13099),
          u = n(20408)
        r(
          { target: 'Set', proto: !0, real: !0, forced: o },
          {
            isDisjointFrom: function (e) {
              var t = i(this),
                n = a(t.has)
              return !u(e, function (e) {
                if (!0 === n.call(t, e)) return u.stop()
              }).stopped
            },
          },
        )
      },
      91238: function (e, t, n) {
        'use strict'
        var r = n(82109),
          o = n(31913),
          i = n(35005),
          a = n(19670),
          u = n(13099),
          s = n(18554),
          c = n(20408)
        r(
          { target: 'Set', proto: !0, real: !0, forced: o },
          {
            isSubsetOf: function (e) {
              var t = s(this),
                n = a(e),
                r = n.has
              return (
                'function' != typeof r &&
                  ((n = new (i('Set'))(e)), (r = u(n.has))),
                !c(
                  t,
                  function (e) {
                    if (!1 === r.call(n, e)) return c.stop()
                  },
                  void 0,
                  !1,
                  !0,
                ).stopped
              )
            },
          },
        )
      },
      54837: function (e, t, n) {
        'use strict'
        var r = n(82109),
          o = n(31913),
          i = n(19670),
          a = n(13099),
          u = n(20408)
        r(
          { target: 'Set', proto: !0, real: !0, forced: o },
          {
            isSupersetOf: function (e) {
              var t = i(this),
                n = a(t.has)
              return !u(e, function (e) {
                if (!1 === n.call(t, e)) return u.stop()
              }).stopped
            },
          },
        )
      },
      87485: function (e, t, n) {
        'use strict'
        var r = n(82109),
          o = n(31913),
          i = n(19670),
          a = n(96767),
          u = n(20408)
        r(
          { target: 'Set', proto: !0, real: !0, forced: o },
          {
            join: function (e) {
              var t = i(this),
                n = a(t),
                r = void 0 === e ? ',' : String(e),
                o = []
              return u(n, o.push, o, !1, !0), o.join(r)
            },
          },
        )
      },
      56767: function (e, t, n) {
        'use strict'
        var r = n(82109),
          o = n(31913),
          i = n(35005),
          a = n(19670),
          u = n(13099),
          s = n(30244),
          c = n(36707),
          l = n(96767),
          f = n(20408)
        r(
          { target: 'Set', proto: !0, real: !0, forced: o },
          {
            map: function (e) {
              var t = a(this),
                n = l(t),
                r = s(e, arguments.length > 1 ? arguments[1] : void 0, 3),
                o = new (c(t, i('Set')))(),
                d = u(o.add)
              return (
                f(
                  n,
                  function (e) {
                    d.call(o, r(e, e, t))
                  },
                  void 0,
                  !1,
                  !0,
                ),
                o
              )
            },
          },
        )
      },
      69916: function (e, t, n) {
        n(82109)({ target: 'Set', stat: !0 }, { of: n(82044) })
      },
      76651: function (e, t, n) {
        'use strict'
        var r = n(82109),
          o = n(31913),
          i = n(19670),
          a = n(13099),
          u = n(96767),
          s = n(20408)
        r(
          { target: 'Set', proto: !0, real: !0, forced: o },
          {
            reduce: function (e) {
              var t = i(this),
                n = u(t),
                r = arguments.length < 2,
                o = r ? void 0 : arguments[1]
              if (
                (a(e),
                s(
                  n,
                  function (n) {
                    r ? ((r = !1), (o = n)) : (o = e(o, n, n, t))
                  },
                  void 0,
                  !1,
                  !0,
                ),
                r)
              )
                throw TypeError('Reduce of empty set with no initial value')
              return o
            },
          },
        )
      },
      61437: function (e, t, n) {
        'use strict'
        var r = n(82109),
          o = n(31913),
          i = n(19670),
          a = n(30244),
          u = n(96767),
          s = n(20408)
        r(
          { target: 'Set', proto: !0, real: !0, forced: o },
          {
            some: function (e) {
              var t = i(this),
                n = u(t),
                r = a(e, arguments.length > 1 ? arguments[1] : void 0, 3)
              return s(
                n,
                function (e) {
                  if (r(e, e, t)) return s.stop()
                },
                void 0,
                !1,
                !0,
              ).stopped
            },
          },
        )
      },
      35285: function (e, t, n) {
        'use strict'
        var r = n(82109),
          o = n(31913),
          i = n(35005),
          a = n(19670),
          u = n(13099),
          s = n(36707),
          c = n(20408)
        r(
          { target: 'Set', proto: !0, real: !0, forced: o },
          {
            symmetricDifference: function (e) {
              var t = a(this),
                n = new (s(t, i('Set')))(t),
                r = u(n.delete),
                o = u(n.add)
              return (
                c(e, function (e) {
                  r.call(n, e) || o.call(n, e)
                }),
                n
              )
            },
          },
        )
      },
      39865: function (e, t, n) {
        'use strict'
        var r = n(82109),
          o = n(31913),
          i = n(35005),
          a = n(19670),
          u = n(13099),
          s = n(36707),
          c = n(20408)
        r(
          { target: 'Set', proto: !0, real: !0, forced: o },
          {
            union: function (e) {
              var t = a(this),
                n = new (s(t, i('Set')))(t)
              return c(e, u(n.add), n), n
            },
          },
        )
      },
      54747: function (e, t, n) {
        var r = n(17854),
          o = n(48324),
          i = n(18533),
          a = n(68880)
        for (var u in o) {
          var s = r[u],
            c = s && s.prototype
          if (c && c.forEach !== i)
            try {
              a(c, 'forEach', i)
            } catch (e) {
              c.forEach = i
            }
        }
      },
      33948: function (e, t, n) {
        var r = n(17854),
          o = n(48324),
          i = n(66992),
          a = n(68880),
          u = n(5112),
          s = u('iterator'),
          c = u('toStringTag'),
          l = i.values
        for (var f in o) {
          var d = r[f],
            p = d && d.prototype
          if (p) {
            if (p[s] !== l)
              try {
                a(p, s, l)
              } catch (e) {
                p[s] = l
              }
            if ((p[c] || a(p, c, f), o[f]))
              for (var h in i)
                if (p[h] !== i[h])
                  try {
                    a(p, h, i[h])
                  } catch (e) {
                    p[h] = i[h]
                  }
          }
        }
      },
      41637: function (e, t, n) {
        'use strict'
        n(66992)
        var r = n(82109),
          o = n(35005),
          i = n(590),
          a = n(31320),
          u = n(12248),
          s = n(58003),
          c = n(24994),
          l = n(29909),
          f = n(25787),
          d = n(86656),
          p = n(30244),
          h = n(70648),
          v = n(19670),
          g = n(70111),
          y = n(70030),
          m = n(79114),
          w = n(18554),
          b = n(71246),
          S = n(5112),
          _ = o('fetch'),
          E = o('Headers'),
          A = S('iterator'),
          O = l.set,
          C = l.getterFor('URLSearchParams'),
          T = l.getterFor('URLSearchParamsIterator'),
          R = /\+/g,
          P = Array(4),
          I = function (e) {
            return (
              P[e - 1] ||
              (P[e - 1] = RegExp('((?:%[\\da-f]{2}){' + e + '})', 'gi'))
            )
          },
          x = function (e) {
            try {
              return decodeURIComponent(e)
            } catch (t) {
              return e
            }
          },
          L = function (e) {
            var t = e.replace(R, ' '),
              n = 4
            try {
              return decodeURIComponent(t)
            } catch (e) {
              for (; n; ) t = t.replace(I(n--), x)
              return t
            }
          },
          M = /[!'()~]|%20/g,
          N = {
            '!': '%21',
            "'": '%27',
            '(': '%28',
            ')': '%29',
            '~': '%7E',
            '%20': '+',
          },
          k = function (e) {
            return N[e]
          },
          D = function (e) {
            return encodeURIComponent(e).replace(M, k)
          },
          j = function (e, t) {
            if (t)
              for (var n, r, o = t.split('&'), i = 0; i < o.length; )
                (n = o[i++]).length &&
                  ((r = n.split('=')),
                  e.push({ key: L(r.shift()), value: L(r.join('=')) }))
          },
          F = function (e) {
            ;(this.entries.length = 0), j(this.entries, e)
          },
          B = function (e, t) {
            if (e < t) throw TypeError('Not enough arguments')
          },
          U = c(
            function (e, t) {
              O(this, {
                type: 'URLSearchParamsIterator',
                iterator: w(C(e).entries),
                kind: t,
              })
            },
            'Iterator',
            function () {
              var e = T(this),
                t = e.kind,
                n = e.iterator.next(),
                r = n.value
              return (
                n.done ||
                  (n.value =
                    'keys' === t
                      ? r.key
                      : 'values' === t
                      ? r.value
                      : [r.key, r.value]),
                n
              )
            },
          ),
          H = function () {
            f(this, H, 'URLSearchParams')
            var e,
              t,
              n,
              r,
              o,
              i,
              a,
              u,
              s,
              c = arguments.length > 0 ? arguments[0] : void 0,
              l = this,
              p = []
            if (
              (O(l, {
                type: 'URLSearchParams',
                entries: p,
                updateURL: function () {},
                updateSearchParams: F,
              }),
              void 0 !== c)
            )
              if (g(c))
                if ('function' == typeof (e = b(c)))
                  for (n = (t = e.call(c)).next; !(r = n.call(t)).done; ) {
                    if (
                      (a = (i = (o = w(v(r.value))).next).call(o)).done ||
                      (u = i.call(o)).done ||
                      !i.call(o).done
                    )
                      throw TypeError('Expected sequence with length 2')
                    p.push({ key: a.value + '', value: u.value + '' })
                  }
                else
                  for (s in c) d(c, s) && p.push({ key: s, value: c[s] + '' })
              else
                j(
                  p,
                  'string' == typeof c
                    ? '?' === c.charAt(0)
                      ? c.slice(1)
                      : c
                    : c + '',
                )
          },
          G = H.prototype
        u(
          G,
          {
            append: function (e, t) {
              B(arguments.length, 2)
              var n = C(this)
              n.entries.push({ key: e + '', value: t + '' }), n.updateURL()
            },
            delete: function (e) {
              B(arguments.length, 1)
              for (
                var t = C(this), n = t.entries, r = e + '', o = 0;
                o < n.length;

              )
                n[o].key === r ? n.splice(o, 1) : o++
              t.updateURL()
            },
            get: function (e) {
              B(arguments.length, 1)
              for (
                var t = C(this).entries, n = e + '', r = 0;
                r < t.length;
                r++
              )
                if (t[r].key === n) return t[r].value
              return null
            },
            getAll: function (e) {
              B(arguments.length, 1)
              for (
                var t = C(this).entries, n = e + '', r = [], o = 0;
                o < t.length;
                o++
              )
                t[o].key === n && r.push(t[o].value)
              return r
            },
            has: function (e) {
              B(arguments.length, 1)
              for (var t = C(this).entries, n = e + '', r = 0; r < t.length; )
                if (t[r++].key === n) return !0
              return !1
            },
            set: function (e, t) {
              B(arguments.length, 1)
              for (
                var n,
                  r = C(this),
                  o = r.entries,
                  i = !1,
                  a = e + '',
                  u = t + '',
                  s = 0;
                s < o.length;
                s++
              )
                (n = o[s]).key === a &&
                  (i ? o.splice(s--, 1) : ((i = !0), (n.value = u)))
              i || o.push({ key: a, value: u }), r.updateURL()
            },
            sort: function () {
              var e,
                t,
                n,
                r = C(this),
                o = r.entries,
                i = o.slice()
              for (o.length = 0, n = 0; n < i.length; n++) {
                for (e = i[n], t = 0; t < n; t++)
                  if (o[t].key > e.key) {
                    o.splice(t, 0, e)
                    break
                  }
                t === n && o.push(e)
              }
              r.updateURL()
            },
            forEach: function (e) {
              for (
                var t,
                  n = C(this).entries,
                  r = p(e, arguments.length > 1 ? arguments[1] : void 0, 3),
                  o = 0;
                o < n.length;

              )
                r((t = n[o++]).value, t.key, this)
            },
            keys: function () {
              return new U(this, 'keys')
            },
            values: function () {
              return new U(this, 'values')
            },
            entries: function () {
              return new U(this, 'entries')
            },
          },
          { enumerable: !0 },
        ),
          a(G, A, G.entries),
          a(
            G,
            'toString',
            function () {
              for (var e, t = C(this).entries, n = [], r = 0; r < t.length; )
                (e = t[r++]), n.push(D(e.key) + '=' + D(e.value))
              return n.join('&')
            },
            { enumerable: !0 },
          ),
          s(H, 'URLSearchParams'),
          r({ global: !0, forced: !i }, { URLSearchParams: H }),
          i ||
            'function' != typeof _ ||
            'function' != typeof E ||
            r(
              { global: !0, enumerable: !0, forced: !0 },
              {
                fetch: function (e) {
                  var t,
                    n,
                    r,
                    o = [e]
                  return (
                    arguments.length > 1 &&
                      (g((t = arguments[1])) &&
                        ((n = t.body),
                        'URLSearchParams' === h(n) &&
                          ((r = t.headers ? new E(t.headers) : new E()).has(
                            'content-type',
                          ) ||
                            r.set(
                              'content-type',
                              'application/x-www-form-urlencoded;charset=UTF-8',
                            ),
                          (t = y(t, {
                            body: m(0, String(n)),
                            headers: m(0, r),
                          })))),
                      o.push(t)),
                    _.apply(this, o)
                  )
                },
              },
            ),
          (e.exports = { URLSearchParams: H, getState: C })
      },
      60285: function (e, t, n) {
        'use strict'
        n(78783)
        var r,
          o = n(82109),
          i = n(19781),
          a = n(590),
          u = n(17854),
          s = n(36048),
          c = n(31320),
          l = n(25787),
          f = n(86656),
          d = n(21574),
          p = n(48457),
          h = n(28710).codeAt,
          v = n(33611),
          g = n(58003),
          y = n(41637),
          m = n(29909),
          w = u.URL,
          b = y.URLSearchParams,
          S = y.getState,
          _ = m.set,
          E = m.getterFor('URL'),
          A = Math.floor,
          O = Math.pow,
          C = /[A-Za-z]/,
          T = /[\d+\-.A-Za-z]/,
          R = /\d/,
          P = /^(0x|0X)/,
          I = /^[0-7]+$/,
          x = /^\d+$/,
          L = /^[\dA-Fa-f]+$/,
          M = /[\u0000\u0009\u000A\u000D #%/:?@[\\]]/,
          N = /[\u0000\u0009\u000A\u000D #/:?@[\\]]/,
          k = /^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g,
          D = /[\u0009\u000A\u000D]/g,
          j = function (e, t) {
            var n, r, o
            if ('[' == t.charAt(0)) {
              if (']' != t.charAt(t.length - 1)) return 'Invalid host'
              if (!(n = B(t.slice(1, -1)))) return 'Invalid host'
              e.host = n
            } else if (J(e)) {
              if (((t = v(t)), M.test(t))) return 'Invalid host'
              if (null === (n = F(t))) return 'Invalid host'
              e.host = n
            } else {
              if (N.test(t)) return 'Invalid host'
              for (n = '', r = p(t), o = 0; o < r.length; o++) n += q(r[o], H)
              e.host = n
            }
          },
          F = function (e) {
            var t,
              n,
              r,
              o,
              i,
              a,
              u,
              s = e.split('.')
            if (
              (s.length && '' == s[s.length - 1] && s.pop(), (t = s.length) > 4)
            )
              return e
            for (n = [], r = 0; r < t; r++) {
              if ('' == (o = s[r])) return e
              if (
                ((i = 10),
                o.length > 1 &&
                  '0' == o.charAt(0) &&
                  ((i = P.test(o) ? 16 : 8), (o = o.slice(8 == i ? 1 : 2))),
                '' === o)
              )
                a = 0
              else {
                if (!(10 == i ? x : 8 == i ? I : L).test(o)) return e
                a = parseInt(o, i)
              }
              n.push(a)
            }
            for (r = 0; r < t; r++)
              if (((a = n[r]), r == t - 1)) {
                if (a >= O(256, 5 - t)) return null
              } else if (a > 255) return null
            for (u = n.pop(), r = 0; r < n.length; r++)
              u += n[r] * O(256, 3 - r)
            return u
          },
          B = function (e) {
            var t,
              n,
              r,
              o,
              i,
              a,
              u,
              s = [0, 0, 0, 0, 0, 0, 0, 0],
              c = 0,
              l = null,
              f = 0,
              d = function () {
                return e.charAt(f)
              }
            if (':' == d()) {
              if (':' != e.charAt(1)) return
              ;(f += 2), (l = ++c)
            }
            for (; d(); ) {
              if (8 == c) return
              if (':' != d()) {
                for (t = n = 0; n < 4 && L.test(d()); )
                  (t = 16 * t + parseInt(d(), 16)), f++, n++
                if ('.' == d()) {
                  if (0 == n) return
                  if (((f -= n), c > 6)) return
                  for (r = 0; d(); ) {
                    if (((o = null), r > 0)) {
                      if (!('.' == d() && r < 4)) return
                      f++
                    }
                    if (!R.test(d())) return
                    for (; R.test(d()); ) {
                      if (((i = parseInt(d(), 10)), null === o)) o = i
                      else {
                        if (0 == o) return
                        o = 10 * o + i
                      }
                      if (o > 255) return
                      f++
                    }
                    ;(s[c] = 256 * s[c] + o), (2 != ++r && 4 != r) || c++
                  }
                  if (4 != r) return
                  break
                }
                if (':' == d()) {
                  if ((f++, !d())) return
                } else if (d()) return
                s[c++] = t
              } else {
                if (null !== l) return
                f++, (l = ++c)
              }
            }
            if (null !== l)
              for (a = c - l, c = 7; 0 != c && a > 0; )
                (u = s[c]), (s[c--] = s[l + a - 1]), (s[l + --a] = u)
            else if (8 != c) return
            return s
          },
          U = function (e) {
            var t, n, r, o
            if ('number' == typeof e) {
              for (t = [], n = 0; n < 4; n++)
                t.unshift(e % 256), (e = A(e / 256))
              return t.join('.')
            }
            if ('object' == typeof e) {
              for (
                t = '',
                  r = (function (e) {
                    for (
                      var t = null, n = 1, r = null, o = 0, i = 0;
                      i < 8;
                      i++
                    )
                      0 !== e[i]
                        ? (o > n && ((t = r), (n = o)), (r = null), (o = 0))
                        : (null === r && (r = i), ++o)
                    return o > n && ((t = r), (n = o)), t
                  })(e),
                  n = 0;
                n < 8;
                n++
              )
                (o && 0 === e[n]) ||
                  (o && (o = !1),
                  r === n
                    ? ((t += n ? ':' : '::'), (o = !0))
                    : ((t += e[n].toString(16)), n < 7 && (t += ':')))
              return '[' + t + ']'
            }
            return e
          },
          H = {},
          G = d({}, H, { ' ': 1, '"': 1, '<': 1, '>': 1, '`': 1 }),
          z = d({}, G, { '#': 1, '?': 1, '{': 1, '}': 1 }),
          W = d({}, z, {
            '/': 1,
            ':': 1,
            ';': 1,
            '=': 1,
            '@': 1,
            '[': 1,
            '\\': 1,
            ']': 1,
            '^': 1,
            '|': 1,
          }),
          q = function (e, t) {
            var n = h(e, 0)
            return n > 32 && n < 127 && !f(t, e) ? e : encodeURIComponent(e)
          },
          V = { ftp: 21, file: null, http: 80, https: 443, ws: 80, wss: 443 },
          J = function (e) {
            return f(V, e.scheme)
          },
          K = function (e) {
            return '' != e.username || '' != e.password
          },
          X = function (e) {
            return !e.host || e.cannotBeABaseURL || 'file' == e.scheme
          },
          Y = function (e, t) {
            var n
            return (
              2 == e.length &&
              C.test(e.charAt(0)) &&
              (':' == (n = e.charAt(1)) || (!t && '|' == n))
            )
          },
          Z = function (e) {
            var t
            return (
              e.length > 1 &&
              Y(e.slice(0, 2)) &&
              (2 == e.length ||
                '/' === (t = e.charAt(2)) ||
                '\\' === t ||
                '?' === t ||
                '#' === t)
            )
          },
          $ = function (e) {
            var t = e.path,
              n = t.length
            !n || ('file' == e.scheme && 1 == n && Y(t[0], !0)) || t.pop()
          },
          Q = function (e) {
            return '.' === e || '%2e' === e.toLowerCase()
          },
          ee = {},
          te = {},
          ne = {},
          re = {},
          oe = {},
          ie = {},
          ae = {},
          ue = {},
          se = {},
          ce = {},
          le = {},
          fe = {},
          de = {},
          pe = {},
          he = {},
          ve = {},
          ge = {},
          ye = {},
          me = {},
          we = {},
          be = {},
          Se = function (e, t, n, o) {
            var i,
              a,
              u,
              s,
              c,
              l = n || ee,
              d = 0,
              h = '',
              v = !1,
              g = !1,
              y = !1
            for (
              n ||
                ((e.scheme = ''),
                (e.username = ''),
                (e.password = ''),
                (e.host = null),
                (e.port = null),
                (e.path = []),
                (e.query = null),
                (e.fragment = null),
                (e.cannotBeABaseURL = !1),
                (t = t.replace(k, ''))),
                t = t.replace(D, ''),
                i = p(t);
              d <= i.length;

            ) {
              switch (((a = i[d]), l)) {
                case ee:
                  if (!a || !C.test(a)) {
                    if (n) return 'Invalid scheme'
                    l = ne
                    continue
                  }
                  ;(h += a.toLowerCase()), (l = te)
                  break
                case te:
                  if (a && (T.test(a) || '+' == a || '-' == a || '.' == a))
                    h += a.toLowerCase()
                  else {
                    if (':' != a) {
                      if (n) return 'Invalid scheme'
                      ;(h = ''), (l = ne), (d = 0)
                      continue
                    }
                    if (
                      n &&
                      (J(e) != f(V, h) ||
                        ('file' == h && (K(e) || null !== e.port)) ||
                        ('file' == e.scheme && !e.host))
                    )
                      return
                    if (((e.scheme = h), n))
                      return void (
                        J(e) &&
                        V[e.scheme] == e.port &&
                        (e.port = null)
                      )
                    ;(h = ''),
                      'file' == e.scheme
                        ? (l = pe)
                        : J(e) && o && o.scheme == e.scheme
                        ? (l = re)
                        : J(e)
                        ? (l = ue)
                        : '/' == i[d + 1]
                        ? ((l = oe), d++)
                        : ((e.cannotBeABaseURL = !0), e.path.push(''), (l = me))
                  }
                  break
                case ne:
                  if (!o || (o.cannotBeABaseURL && '#' != a))
                    return 'Invalid scheme'
                  if (o.cannotBeABaseURL && '#' == a) {
                    ;(e.scheme = o.scheme),
                      (e.path = o.path.slice()),
                      (e.query = o.query),
                      (e.fragment = ''),
                      (e.cannotBeABaseURL = !0),
                      (l = be)
                    break
                  }
                  l = 'file' == o.scheme ? pe : ie
                  continue
                case re:
                  if ('/' != a || '/' != i[d + 1]) {
                    l = ie
                    continue
                  }
                  ;(l = se), d++
                  break
                case oe:
                  if ('/' == a) {
                    l = ce
                    break
                  }
                  l = ye
                  continue
                case ie:
                  if (((e.scheme = o.scheme), a == r))
                    (e.username = o.username),
                      (e.password = o.password),
                      (e.host = o.host),
                      (e.port = o.port),
                      (e.path = o.path.slice()),
                      (e.query = o.query)
                  else if ('/' == a || ('\\' == a && J(e))) l = ae
                  else if ('?' == a)
                    (e.username = o.username),
                      (e.password = o.password),
                      (e.host = o.host),
                      (e.port = o.port),
                      (e.path = o.path.slice()),
                      (e.query = ''),
                      (l = we)
                  else {
                    if ('#' != a) {
                      ;(e.username = o.username),
                        (e.password = o.password),
                        (e.host = o.host),
                        (e.port = o.port),
                        (e.path = o.path.slice()),
                        e.path.pop(),
                        (l = ye)
                      continue
                    }
                    ;(e.username = o.username),
                      (e.password = o.password),
                      (e.host = o.host),
                      (e.port = o.port),
                      (e.path = o.path.slice()),
                      (e.query = o.query),
                      (e.fragment = ''),
                      (l = be)
                  }
                  break
                case ae:
                  if (!J(e) || ('/' != a && '\\' != a)) {
                    if ('/' != a) {
                      ;(e.username = o.username),
                        (e.password = o.password),
                        (e.host = o.host),
                        (e.port = o.port),
                        (l = ye)
                      continue
                    }
                    l = ce
                  } else l = se
                  break
                case ue:
                  if (((l = se), '/' != a || '/' != h.charAt(d + 1))) continue
                  d++
                  break
                case se:
                  if ('/' != a && '\\' != a) {
                    l = ce
                    continue
                  }
                  break
                case ce:
                  if ('@' == a) {
                    v && (h = '%40' + h), (v = !0), (u = p(h))
                    for (var m = 0; m < u.length; m++) {
                      var w = u[m]
                      if (':' != w || y) {
                        var b = q(w, W)
                        y ? (e.password += b) : (e.username += b)
                      } else y = !0
                    }
                    h = ''
                  } else if (
                    a == r ||
                    '/' == a ||
                    '?' == a ||
                    '#' == a ||
                    ('\\' == a && J(e))
                  ) {
                    if (v && '' == h) return 'Invalid authority'
                    ;(d -= p(h).length + 1), (h = ''), (l = le)
                  } else h += a
                  break
                case le:
                case fe:
                  if (n && 'file' == e.scheme) {
                    l = ve
                    continue
                  }
                  if (':' != a || g) {
                    if (
                      a == r ||
                      '/' == a ||
                      '?' == a ||
                      '#' == a ||
                      ('\\' == a && J(e))
                    ) {
                      if (J(e) && '' == h) return 'Invalid host'
                      if (n && '' == h && (K(e) || null !== e.port)) return
                      if ((s = j(e, h))) return s
                      if (((h = ''), (l = ge), n)) return
                      continue
                    }
                    '[' == a ? (g = !0) : ']' == a && (g = !1), (h += a)
                  } else {
                    if ('' == h) return 'Invalid host'
                    if ((s = j(e, h))) return s
                    if (((h = ''), (l = de), n == fe)) return
                  }
                  break
                case de:
                  if (!R.test(a)) {
                    if (
                      a == r ||
                      '/' == a ||
                      '?' == a ||
                      '#' == a ||
                      ('\\' == a && J(e)) ||
                      n
                    ) {
                      if ('' != h) {
                        var S = parseInt(h, 10)
                        if (S > 65535) return 'Invalid port'
                        ;(e.port = J(e) && S === V[e.scheme] ? null : S),
                          (h = '')
                      }
                      if (n) return
                      l = ge
                      continue
                    }
                    return 'Invalid port'
                  }
                  h += a
                  break
                case pe:
                  if (((e.scheme = 'file'), '/' == a || '\\' == a)) l = he
                  else {
                    if (!o || 'file' != o.scheme) {
                      l = ye
                      continue
                    }
                    if (a == r)
                      (e.host = o.host),
                        (e.path = o.path.slice()),
                        (e.query = o.query)
                    else if ('?' == a)
                      (e.host = o.host),
                        (e.path = o.path.slice()),
                        (e.query = ''),
                        (l = we)
                    else {
                      if ('#' != a) {
                        Z(i.slice(d).join('')) ||
                          ((e.host = o.host), (e.path = o.path.slice()), $(e)),
                          (l = ye)
                        continue
                      }
                      ;(e.host = o.host),
                        (e.path = o.path.slice()),
                        (e.query = o.query),
                        (e.fragment = ''),
                        (l = be)
                    }
                  }
                  break
                case he:
                  if ('/' == a || '\\' == a) {
                    l = ve
                    break
                  }
                  o &&
                    'file' == o.scheme &&
                    !Z(i.slice(d).join('')) &&
                    (Y(o.path[0], !0)
                      ? e.path.push(o.path[0])
                      : (e.host = o.host)),
                    (l = ye)
                  continue
                case ve:
                  if (a == r || '/' == a || '\\' == a || '?' == a || '#' == a) {
                    if (!n && Y(h)) l = ye
                    else if ('' == h) {
                      if (((e.host = ''), n)) return
                      l = ge
                    } else {
                      if ((s = j(e, h))) return s
                      if (('localhost' == e.host && (e.host = ''), n)) return
                      ;(h = ''), (l = ge)
                    }
                    continue
                  }
                  h += a
                  break
                case ge:
                  if (J(e)) {
                    if (((l = ye), '/' != a && '\\' != a)) continue
                  } else if (n || '?' != a)
                    if (n || '#' != a) {
                      if (a != r && ((l = ye), '/' != a)) continue
                    } else (e.fragment = ''), (l = be)
                  else (e.query = ''), (l = we)
                  break
                case ye:
                  if (
                    a == r ||
                    '/' == a ||
                    ('\\' == a && J(e)) ||
                    (!n && ('?' == a || '#' == a))
                  ) {
                    if (
                      ('..' === (c = (c = h).toLowerCase()) ||
                      '%2e.' === c ||
                      '.%2e' === c ||
                      '%2e%2e' === c
                        ? ($(e),
                          '/' == a || ('\\' == a && J(e)) || e.path.push(''))
                        : Q(h)
                        ? '/' == a || ('\\' == a && J(e)) || e.path.push('')
                        : ('file' == e.scheme &&
                            !e.path.length &&
                            Y(h) &&
                            (e.host && (e.host = ''), (h = h.charAt(0) + ':')),
                          e.path.push(h)),
                      (h = ''),
                      'file' == e.scheme && (a == r || '?' == a || '#' == a))
                    )
                      for (; e.path.length > 1 && '' === e.path[0]; )
                        e.path.shift()
                    '?' == a
                      ? ((e.query = ''), (l = we))
                      : '#' == a && ((e.fragment = ''), (l = be))
                  } else h += q(a, z)
                  break
                case me:
                  '?' == a
                    ? ((e.query = ''), (l = we))
                    : '#' == a
                    ? ((e.fragment = ''), (l = be))
                    : a != r && (e.path[0] += q(a, H))
                  break
                case we:
                  n || '#' != a
                    ? a != r &&
                      ("'" == a && J(e)
                        ? (e.query += '%27')
                        : (e.query += '#' == a ? '%23' : q(a, H)))
                    : ((e.fragment = ''), (l = be))
                  break
                case be:
                  a != r && (e.fragment += q(a, G))
              }
              d++
            }
          },
          _e = function (e) {
            var t,
              n,
              r = l(this, _e, 'URL'),
              o = arguments.length > 1 ? arguments[1] : void 0,
              a = String(e),
              u = _(r, { type: 'URL' })
            if (void 0 !== o)
              if (o instanceof _e) t = E(o)
              else if ((n = Se((t = {}), String(o)))) throw TypeError(n)
            if ((n = Se(u, a, null, t))) throw TypeError(n)
            var s = (u.searchParams = new b()),
              c = S(s)
            c.updateSearchParams(u.query),
              (c.updateURL = function () {
                u.query = String(s) || null
              }),
              i ||
                ((r.href = Ae.call(r)),
                (r.origin = Oe.call(r)),
                (r.protocol = Ce.call(r)),
                (r.username = Te.call(r)),
                (r.password = Re.call(r)),
                (r.host = Pe.call(r)),
                (r.hostname = Ie.call(r)),
                (r.port = xe.call(r)),
                (r.pathname = Le.call(r)),
                (r.search = Me.call(r)),
                (r.searchParams = Ne.call(r)),
                (r.hash = ke.call(r)))
          },
          Ee = _e.prototype,
          Ae = function () {
            var e = E(this),
              t = e.scheme,
              n = e.username,
              r = e.password,
              o = e.host,
              i = e.port,
              a = e.path,
              u = e.query,
              s = e.fragment,
              c = t + ':'
            return (
              null !== o
                ? ((c += '//'),
                  K(e) && (c += n + (r ? ':' + r : '') + '@'),
                  (c += U(o)),
                  null !== i && (c += ':' + i))
                : 'file' == t && (c += '//'),
              (c += e.cannotBeABaseURL
                ? a[0]
                : a.length
                ? '/' + a.join('/')
                : ''),
              null !== u && (c += '?' + u),
              null !== s && (c += '#' + s),
              c
            )
          },
          Oe = function () {
            var e = E(this),
              t = e.scheme,
              n = e.port
            if ('blob' == t)
              try {
                return new URL(t.path[0]).origin
              } catch (e) {
                return 'null'
              }
            return 'file' != t && J(e)
              ? t + '://' + U(e.host) + (null !== n ? ':' + n : '')
              : 'null'
          },
          Ce = function () {
            return E(this).scheme + ':'
          },
          Te = function () {
            return E(this).username
          },
          Re = function () {
            return E(this).password
          },
          Pe = function () {
            var e = E(this),
              t = e.host,
              n = e.port
            return null === t ? '' : null === n ? U(t) : U(t) + ':' + n
          },
          Ie = function () {
            var e = E(this).host
            return null === e ? '' : U(e)
          },
          xe = function () {
            var e = E(this).port
            return null === e ? '' : String(e)
          },
          Le = function () {
            var e = E(this),
              t = e.path
            return e.cannotBeABaseURL ? t[0] : t.length ? '/' + t.join('/') : ''
          },
          Me = function () {
            var e = E(this).query
            return e ? '?' + e : ''
          },
          Ne = function () {
            return E(this).searchParams
          },
          ke = function () {
            var e = E(this).fragment
            return e ? '#' + e : ''
          },
          De = function (e, t) {
            return { get: e, set: t, configurable: !0, enumerable: !0 }
          }
        if (
          (i &&
            s(Ee, {
              href: De(Ae, function (e) {
                var t = E(this),
                  n = String(e),
                  r = Se(t, n)
                if (r) throw TypeError(r)
                S(t.searchParams).updateSearchParams(t.query)
              }),
              origin: De(Oe),
              protocol: De(Ce, function (e) {
                var t = E(this)
                Se(t, String(e) + ':', ee)
              }),
              username: De(Te, function (e) {
                var t = E(this),
                  n = p(String(e))
                if (!X(t)) {
                  t.username = ''
                  for (var r = 0; r < n.length; r++) t.username += q(n[r], W)
                }
              }),
              password: De(Re, function (e) {
                var t = E(this),
                  n = p(String(e))
                if (!X(t)) {
                  t.password = ''
                  for (var r = 0; r < n.length; r++) t.password += q(n[r], W)
                }
              }),
              host: De(Pe, function (e) {
                var t = E(this)
                t.cannotBeABaseURL || Se(t, String(e), le)
              }),
              hostname: De(Ie, function (e) {
                var t = E(this)
                t.cannotBeABaseURL || Se(t, String(e), fe)
              }),
              port: De(xe, function (e) {
                var t = E(this)
                X(t) || ('' == (e = String(e)) ? (t.port = null) : Se(t, e, de))
              }),
              pathname: De(Le, function (e) {
                var t = E(this)
                t.cannotBeABaseURL || ((t.path = []), Se(t, e + '', ge))
              }),
              search: De(Me, function (e) {
                var t = E(this)
                '' == (e = String(e))
                  ? (t.query = null)
                  : ('?' == e.charAt(0) && (e = e.slice(1)),
                    (t.query = ''),
                    Se(t, e, we)),
                  S(t.searchParams).updateSearchParams(t.query)
              }),
              searchParams: De(Ne),
              hash: De(ke, function (e) {
                var t = E(this)
                '' != (e = String(e))
                  ? ('#' == e.charAt(0) && (e = e.slice(1)),
                    (t.fragment = ''),
                    Se(t, e, be))
                  : (t.fragment = null)
              }),
            }),
          c(
            Ee,
            'toJSON',
            function () {
              return Ae.call(this)
            },
            { enumerable: !0 },
          ),
          c(
            Ee,
            'toString',
            function () {
              return Ae.call(this)
            },
            { enumerable: !0 },
          ),
          w)
        ) {
          var je = w.createObjectURL,
            Fe = w.revokeObjectURL
          je &&
            c(_e, 'createObjectURL', function (e) {
              return je.apply(w, arguments)
            }),
            Fe &&
              c(_e, 'revokeObjectURL', function (e) {
                return Fe.apply(w, arguments)
              })
        }
        g(_e, 'URL'), o({ global: !0, forced: !a, sham: !i }, { URL: _e })
      },
      35666: function (e) {
        var t = (function (e) {
          'use strict'
          var t = Object.prototype,
            n = t.hasOwnProperty,
            r = 'function' == typeof Symbol ? Symbol : {},
            o = r.iterator || '@@iterator',
            i = r.asyncIterator || '@@asyncIterator',
            a = r.toStringTag || '@@toStringTag'
          function u(e, t, n, r) {
            var o = t && t.prototype instanceof l ? t : l,
              i = Object.create(o.prototype),
              a = new _(r || [])
            return (
              (i._invoke = (function (e, t, n) {
                var r = 'suspendedStart'
                return function (o, i) {
                  if ('executing' === r)
                    throw new Error('Generator is already running')
                  if ('completed' === r) {
                    if ('throw' === o) throw i
                    return A()
                  }
                  for (n.method = o, n.arg = i; ; ) {
                    var a = n.delegate
                    if (a) {
                      var u = w(a, n)
                      if (u) {
                        if (u === c) continue
                        return u
                      }
                    }
                    if ('next' === n.method) n.sent = n._sent = n.arg
                    else if ('throw' === n.method) {
                      if ('suspendedStart' === r)
                        throw ((r = 'completed'), n.arg)
                      n.dispatchException(n.arg)
                    } else 'return' === n.method && n.abrupt('return', n.arg)
                    r = 'executing'
                    var l = s(e, t, n)
                    if ('normal' === l.type) {
                      if (
                        ((r = n.done ? 'completed' : 'suspendedYield'),
                        l.arg === c)
                      )
                        continue
                      return { value: l.arg, done: n.done }
                    }
                    'throw' === l.type &&
                      ((r = 'completed'), (n.method = 'throw'), (n.arg = l.arg))
                  }
                }
              })(e, n, a)),
              i
            )
          }
          function s(e, t, n) {
            try {
              return { type: 'normal', arg: e.call(t, n) }
            } catch (e) {
              return { type: 'throw', arg: e }
            }
          }
          e.wrap = u
          var c = {}
          function l() {}
          function f() {}
          function d() {}
          var p = {}
          p[o] = function () {
            return this
          }
          var h = Object.getPrototypeOf,
            v = h && h(h(E([])))
          v && v !== t && n.call(v, o) && (p = v)
          var g = (d.prototype = l.prototype = Object.create(p))
          function y(e) {
            ;['next', 'throw', 'return'].forEach(function (t) {
              e[t] = function (e) {
                return this._invoke(t, e)
              }
            })
          }
          function m(e, t) {
            var r
            this._invoke = function (o, i) {
              function a() {
                return new t(function (r, a) {
                  !(function r(o, i, a, u) {
                    var c = s(e[o], e, i)
                    if ('throw' !== c.type) {
                      var l = c.arg,
                        f = l.value
                      return f && 'object' == typeof f && n.call(f, '__await')
                        ? t.resolve(f.__await).then(
                            function (e) {
                              r('next', e, a, u)
                            },
                            function (e) {
                              r('throw', e, a, u)
                            },
                          )
                        : t.resolve(f).then(
                            function (e) {
                              ;(l.value = e), a(l)
                            },
                            function (e) {
                              return r('throw', e, a, u)
                            },
                          )
                    }
                    u(c.arg)
                  })(o, i, r, a)
                })
              }
              return (r = r ? r.then(a, a) : a())
            }
          }
          function w(e, t) {
            var n = e.iterator[t.method]
            if (void 0 === n) {
              if (((t.delegate = null), 'throw' === t.method)) {
                if (
                  e.iterator.return &&
                  ((t.method = 'return'),
                  (t.arg = void 0),
                  w(e, t),
                  'throw' === t.method)
                )
                  return c
                ;(t.method = 'throw'),
                  (t.arg = new TypeError(
                    "The iterator does not provide a 'throw' method",
                  ))
              }
              return c
            }
            var r = s(n, e.iterator, t.arg)
            if ('throw' === r.type)
              return (
                (t.method = 'throw'), (t.arg = r.arg), (t.delegate = null), c
              )
            var o = r.arg
            return o
              ? o.done
                ? ((t[e.resultName] = o.value),
                  (t.next = e.nextLoc),
                  'return' !== t.method &&
                    ((t.method = 'next'), (t.arg = void 0)),
                  (t.delegate = null),
                  c)
                : o
              : ((t.method = 'throw'),
                (t.arg = new TypeError('iterator result is not an object')),
                (t.delegate = null),
                c)
          }
          function b(e) {
            var t = { tryLoc: e[0] }
            1 in e && (t.catchLoc = e[1]),
              2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
              this.tryEntries.push(t)
          }
          function S(e) {
            var t = e.completion || {}
            ;(t.type = 'normal'), delete t.arg, (e.completion = t)
          }
          function _(e) {
            ;(this.tryEntries = [{ tryLoc: 'root' }]),
              e.forEach(b, this),
              this.reset(!0)
          }
          function E(e) {
            if (e) {
              var t = e[o]
              if (t) return t.call(e)
              if ('function' == typeof e.next) return e
              if (!isNaN(e.length)) {
                var r = -1,
                  i = function t() {
                    for (; ++r < e.length; )
                      if (n.call(e, r))
                        return (t.value = e[r]), (t.done = !1), t
                    return (t.value = void 0), (t.done = !0), t
                  }
                return (i.next = i)
              }
            }
            return { next: A }
          }
          function A() {
            return { value: void 0, done: !0 }
          }
          return (
            (f.prototype = g.constructor = d),
            (d.constructor = f),
            (d[a] = f.displayName = 'GeneratorFunction'),
            (e.isGeneratorFunction = function (e) {
              var t = 'function' == typeof e && e.constructor
              return (
                !!t &&
                (t === f || 'GeneratorFunction' === (t.displayName || t.name))
              )
            }),
            (e.mark = function (e) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, d)
                  : ((e.__proto__ = d), a in e || (e[a] = 'GeneratorFunction')),
                (e.prototype = Object.create(g)),
                e
              )
            }),
            (e.awrap = function (e) {
              return { __await: e }
            }),
            y(m.prototype),
            (m.prototype[i] = function () {
              return this
            }),
            (e.AsyncIterator = m),
            (e.async = function (t, n, r, o, i) {
              void 0 === i && (i = Promise)
              var a = new m(u(t, n, r, o), i)
              return e.isGeneratorFunction(n)
                ? a
                : a.next().then(function (e) {
                    return e.done ? e.value : a.next()
                  })
            }),
            y(g),
            (g[a] = 'Generator'),
            (g[o] = function () {
              return this
            }),
            (g.toString = function () {
              return '[object Generator]'
            }),
            (e.keys = function (e) {
              var t = []
              for (var n in e) t.push(n)
              return (
                t.reverse(),
                function n() {
                  for (; t.length; ) {
                    var r = t.pop()
                    if (r in e) return (n.value = r), (n.done = !1), n
                  }
                  return (n.done = !0), n
                }
              )
            }),
            (e.values = E),
            (_.prototype = {
              constructor: _,
              reset: function (e) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = void 0),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = 'next'),
                  (this.arg = void 0),
                  this.tryEntries.forEach(S),
                  !e)
                )
                  for (var t in this)
                    't' === t.charAt(0) &&
                      n.call(this, t) &&
                      !isNaN(+t.slice(1)) &&
                      (this[t] = void 0)
              },
              stop: function () {
                this.done = !0
                var e = this.tryEntries[0].completion
                if ('throw' === e.type) throw e.arg
                return this.rval
              },
              dispatchException: function (e) {
                if (this.done) throw e
                var t = this
                function r(n, r) {
                  return (
                    (a.type = 'throw'),
                    (a.arg = e),
                    (t.next = n),
                    r && ((t.method = 'next'), (t.arg = void 0)),
                    !!r
                  )
                }
                for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                  var i = this.tryEntries[o],
                    a = i.completion
                  if ('root' === i.tryLoc) return r('end')
                  if (i.tryLoc <= this.prev) {
                    var u = n.call(i, 'catchLoc'),
                      s = n.call(i, 'finallyLoc')
                    if (u && s) {
                      if (this.prev < i.catchLoc) return r(i.catchLoc, !0)
                      if (this.prev < i.finallyLoc) return r(i.finallyLoc)
                    } else if (u) {
                      if (this.prev < i.catchLoc) return r(i.catchLoc, !0)
                    } else {
                      if (!s)
                        throw new Error(
                          'try statement without catch or finally',
                        )
                      if (this.prev < i.finallyLoc) return r(i.finallyLoc)
                    }
                  }
                }
              },
              abrupt: function (e, t) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                  var o = this.tryEntries[r]
                  if (
                    o.tryLoc <= this.prev &&
                    n.call(o, 'finallyLoc') &&
                    this.prev < o.finallyLoc
                  ) {
                    var i = o
                    break
                  }
                }
                i &&
                  ('break' === e || 'continue' === e) &&
                  i.tryLoc <= t &&
                  t <= i.finallyLoc &&
                  (i = null)
                var a = i ? i.completion : {}
                return (
                  (a.type = e),
                  (a.arg = t),
                  i
                    ? ((this.method = 'next'), (this.next = i.finallyLoc), c)
                    : this.complete(a)
                )
              },
              complete: function (e, t) {
                if ('throw' === e.type) throw e.arg
                return (
                  'break' === e.type || 'continue' === e.type
                    ? (this.next = e.arg)
                    : 'return' === e.type
                    ? ((this.rval = this.arg = e.arg),
                      (this.method = 'return'),
                      (this.next = 'end'))
                    : 'normal' === e.type && t && (this.next = t),
                  c
                )
              },
              finish: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var n = this.tryEntries[t]
                  if (n.finallyLoc === e)
                    return this.complete(n.completion, n.afterLoc), S(n), c
                }
              },
              catch: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var n = this.tryEntries[t]
                  if (n.tryLoc === e) {
                    var r = n.completion
                    if ('throw' === r.type) {
                      var o = r.arg
                      S(n)
                    }
                    return o
                  }
                }
                throw new Error('illegal catch attempt')
              },
              delegateYield: function (e, t, n) {
                return (
                  (this.delegate = {
                    iterator: E(e),
                    resultName: t,
                    nextLoc: n,
                  }),
                  'next' === this.method && (this.arg = void 0),
                  c
                )
              },
            }),
            e
          )
        })(e.exports)
        try {
          regeneratorRuntime = t
        } catch (e) {
          Function('r', 'regeneratorRuntime = r')(t)
        }
      },
      52458: function (e) {
        'use strict'
        e.exports = JSON.parse(
          '{"cn-north-1":"aws-cn","us-gov-east-1":"aws-us-gov","us-gov-west-1":"aws-us-gov","cn-northwest-1":"aws-cn"}',
        )
      },
      3525: function (e) {
        'use strict'
        e.exports = { version: '1.3.6' }
      },
    },
    t = {}
  function n(r) {
    var o = t[r]
    if (void 0 !== o) return o.exports
    var i = (t[r] = { exports: {} })
    return e[r].call(i.exports, i, i.exports, n), i.exports
  }
  ;(n.n = function (e) {
    var t =
      e && e.__esModule
        ? function () {
            return e.default
          }
        : function () {
            return e
          }
    return n.d(t, { a: t }), t
  }),
    (n.d = function (e, t) {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] })
    }),
    (n.g = (function () {
      if ('object' == typeof globalThis) return globalThis
      try {
        return this || new Function('return this')()
      } catch (e) {
        if ('object' == typeof window) return window
      }
    })()),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    }),
    (n.r = function (e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 })
    })
  n(25879)
})()
