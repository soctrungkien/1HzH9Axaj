(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('os'), require('fs'), require('path'), require('crypto'), require('child_process')) :
	typeof define === 'function' && define.amd ? define(['exports', 'os', 'fs', 'path', 'crypto', 'child_process'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.fengari_interop = {}, global.require$$1, global.require$$0, global.require$$1$1, global.require$$2, global.require$$5));
})(this, (function (exports, require$$1, require$$0, require$$1$1, require$$2, require$$5) { 'use strict';

	function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

	var require$$1__default = /*#__PURE__*/_interopDefaultLegacy(require$$1);
	var require$$0__default = /*#__PURE__*/_interopDefaultLegacy(require$$0);
	var require$$1__default$1 = /*#__PURE__*/_interopDefaultLegacy(require$$1$1);
	var require$$2__default = /*#__PURE__*/_interopDefaultLegacy(require$$2);
	var require$$5__default = /*#__PURE__*/_interopDefaultLegacy(require$$5);

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function commonjsRequire (path) {
		throw new Error('Could not dynamically require "' + path + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
	}

	var js = {};

	var fengari$1 = {};

	var fengaricore = {};

	var defs$2 = {};

	var luaconf$1 = {};

	const conf = (process.env.FENGARICONF ? JSON.parse(process.env.FENGARICONF) : {});

	const {
	    LUA_VERSION_MAJOR: LUA_VERSION_MAJOR$3,
	    LUA_VERSION_MINOR: LUA_VERSION_MINOR$3,
	    to_luastring: to_luastring$q
	} = defs$2;

	/*
	** LUA_PATH_SEP is the character that separates templates in a path.
	** LUA_PATH_MARK is the string that marks the substitution points in a
	** template.
	** LUA_EXEC_DIR in a Windows path is replaced by the executable's
	** directory.
	*/
	const LUA_PATH_SEP$1  = ";";
	luaconf$1.LUA_PATH_SEP = LUA_PATH_SEP$1;

	const LUA_PATH_MARK$1 = "?";
	luaconf$1.LUA_PATH_MARK = LUA_PATH_MARK$1;

	const LUA_EXEC_DIR$1  = "!";
	luaconf$1.LUA_EXEC_DIR = LUA_EXEC_DIR$1;

	/*
	@@ LUA_PATH_DEFAULT is the default path that Lua uses to look for
	** Lua libraries.
	@@ LUA_JSPATH_DEFAULT is the default path that Lua uses to look for
	** JS libraries.
	** CHANGE them if your machine has a non-conventional directory
	** hierarchy or if you want to install your libraries in
	** non-conventional directories.
	*/
	const LUA_VDIR = LUA_VERSION_MAJOR$3 + "." + LUA_VERSION_MINOR$3;
	luaconf$1.LUA_VDIR = LUA_VDIR;

	if (typeof process === "undefined") {
	    const LUA_DIRSEP = "/";
	    luaconf$1.LUA_DIRSEP = LUA_DIRSEP;

	    const LUA_LDIR = "./lua/" + LUA_VDIR + "/";
	    luaconf$1.LUA_LDIR = LUA_LDIR;

	    const LUA_JSDIR = LUA_LDIR;
	    luaconf$1.LUA_JSDIR = LUA_JSDIR;

	    const LUA_PATH_DEFAULT = to_luastring$q(
	        LUA_LDIR + "?.lua;" + LUA_LDIR + "?/init.lua;" +
	        /* LUA_JSDIR excluded as it is equal to LUA_LDIR */
	        "./?.lua;./?/init.lua"
	    );
	    luaconf$1.LUA_PATH_DEFAULT = LUA_PATH_DEFAULT;

	    const LUA_JSPATH_DEFAULT = to_luastring$q(
	        LUA_JSDIR + "?.js;" + LUA_JSDIR + "loadall.js;./?.js"
	    );
	    luaconf$1.LUA_JSPATH_DEFAULT = LUA_JSPATH_DEFAULT;
	} else if (require$$1__default["default"].platform() === 'win32') {
	    const LUA_DIRSEP = "\\";
	    luaconf$1.LUA_DIRSEP = LUA_DIRSEP;

	    /*
	    ** In Windows, any exclamation mark ('!') in the path is replaced by the
	    ** path of the directory of the executable file of the current process.
	    */
	    const LUA_LDIR = "!\\lua\\";
	    luaconf$1.LUA_LDIR = LUA_LDIR;

	    const LUA_JSDIR = "!\\";
	    luaconf$1.LUA_JSDIR = LUA_JSDIR;

	    const LUA_SHRDIR = "!\\..\\share\\lua\\" + LUA_VDIR + "\\";
	    luaconf$1.LUA_SHRDIR = LUA_SHRDIR;

	    const LUA_PATH_DEFAULT = to_luastring$q(
	        LUA_LDIR + "?.lua;" + LUA_LDIR + "?\\init.lua;" +
	        LUA_JSDIR + "?.lua;" + LUA_JSDIR + "?\\init.lua;" +
	        LUA_SHRDIR + "?.lua;" + LUA_SHRDIR + "?\\init.lua;" +
	        ".\\?.lua;.\\?\\init.lua"
	    );
	    luaconf$1.LUA_PATH_DEFAULT = LUA_PATH_DEFAULT;

	    const LUA_JSPATH_DEFAULT = to_luastring$q(
	        LUA_JSDIR + "?.js;" +
	        LUA_JSDIR + "..\\share\\lua\\" + LUA_VDIR + "\\?.js;" +
	        LUA_JSDIR + "loadall.js;.\\?.js"
	    );
	    luaconf$1.LUA_JSPATH_DEFAULT = LUA_JSPATH_DEFAULT;
	} else {
	    const LUA_DIRSEP = "/";
	    luaconf$1.LUA_DIRSEP = LUA_DIRSEP;

	    const LUA_ROOT = "/usr/local/";
	    luaconf$1.LUA_ROOT = LUA_ROOT;
	    const LUA_ROOT2 = "/usr/";

	    const LUA_LDIR = LUA_ROOT + "share/lua/" + LUA_VDIR + "/";
	    const LUA_LDIR2 = LUA_ROOT2 + "share/lua/" + LUA_VDIR + "/";
	    luaconf$1.LUA_LDIR = LUA_LDIR;

	    const LUA_JSDIR = LUA_LDIR;
	    luaconf$1.LUA_JSDIR = LUA_JSDIR;
	    const LUA_JSDIR2 = LUA_LDIR2;

	    const LUA_PATH_DEFAULT = to_luastring$q(
	        LUA_LDIR + "?.lua;" + LUA_LDIR + "?/init.lua;" +
	        LUA_LDIR2 + "?.lua;" + LUA_LDIR2 + "?/init.lua;" +
	        /* LUA_JSDIR(2) excluded as it is equal to LUA_LDIR(2) */
	        "./?.lua;./?/init.lua"
	    );
	    luaconf$1.LUA_PATH_DEFAULT = LUA_PATH_DEFAULT;

	    const LUA_JSPATH_DEFAULT = to_luastring$q(
	        LUA_JSDIR + "?.js;" + LUA_JSDIR + "loadall.js;" +
	        LUA_JSDIR2 + "?.js;" + LUA_JSDIR2 + "loadall.js;" +
	        "./?.js"
	    );
	    luaconf$1.LUA_JSPATH_DEFAULT = LUA_JSPATH_DEFAULT;
	}

	/*
	@@ LUA_COMPAT_FLOATSTRING makes Lua format integral floats without a
	@@ a float mark ('.0').
	** This macro is not on by default even in compatibility mode,
	** because this is not really an incompatibility.
	*/
	const LUA_COMPAT_FLOATSTRING$1 = conf.LUA_COMPAT_FLOATSTRING || false;

	const LUA_MAXINTEGER$3 = 2147483647;
	const LUA_MININTEGER$3 = -2147483648;

	/*
	@@ LUAI_MAXSTACK limits the size of the Lua stack.
	** CHANGE it if you need a different limit. This limit is arbitrary;
	** its only purpose is to stop Lua from consuming unlimited stack
	** space (and to reserve some numbers for pseudo-indices).
	*/
	const LUAI_MAXSTACK$3 = conf.LUAI_MAXSTACK || 1000000;

	/*
	@@ LUA_IDSIZE gives the maximum size for the description of the source
	@@ of a function in debug information.
	** CHANGE it if you want a different size.
	*/
	const LUA_IDSIZE$1 = conf.LUA_IDSIZE || (60-1); /* fengari uses 1 less than lua as we don't embed the null byte */

	const lua_integer2str$1 = function(n) {
	    return String(n); /* should match behaviour of LUA_INTEGER_FMT */
	};

	const lua_number2str$1 = function(n) {
	    return String(Number(n.toPrecision(14))); /* should match behaviour of LUA_NUMBER_FMT */
	};

	const lua_numbertointeger$2 = function(n) {
	    return n >= LUA_MININTEGER$3 && n < -LUA_MININTEGER$3 ? n : false;
	};

	const LUA_INTEGER_FRMLEN$1 = "";
	const LUA_NUMBER_FRMLEN$1 = "";

	const LUA_INTEGER_FMT$1 = `%${LUA_INTEGER_FRMLEN$1}d`;
	const LUA_NUMBER_FMT$1  = "%.14g";

	const lua_getlocaledecpoint$1 = function() {
	    /* we hard-code the decimal point to '.' as a user cannot change the
	       locale in most JS environments, and in that you can, a multi-byte
	       locale is common.
	    */
	    return 46 /* '.'.charCodeAt(0) */;
	};

	const luai_apicheck$1 = function(l, e) {
	    if (!e) throw Error(e);
	};

	/*
	@@ LUAL_BUFFERSIZE is the buffer size used by the lauxlib buffer system.
	*/
	const LUAL_BUFFERSIZE$1 = conf.LUAL_BUFFERSIZE || 8192;

	// See: http://croquetweak.blogspot.fr/2014/08/deconstructing-floats-frexp-and-ldexp.html
	const frexp$1 = function(value) {
	    if (value === 0) return [value, 0];
	    var data = new DataView(new ArrayBuffer(8));
	    data.setFloat64(0, value);
	    var bits = (data.getUint32(0) >>> 20) & 0x7FF;
	    if (bits === 0) { // denormal
	        data.setFloat64(0, value * Math.pow(2, 64));  // exp + 64
	        bits = ((data.getUint32(0) >>> 20) & 0x7FF) - 64;
	    }
	    var exponent = bits - 1022;
	    var mantissa = ldexp$1(value, -exponent);
	    return [mantissa, exponent];
	};

	const ldexp$1 = function(mantissa, exponent) {
	    var steps = Math.min(3, Math.ceil(Math.abs(exponent) / 1023));
	    var result = mantissa;
	    for (var i = 0; i < steps; i++)
	        result *= Math.pow(2, Math.floor((exponent + i) / steps));
	    return result;
	};

	luaconf$1.LUAI_MAXSTACK          = LUAI_MAXSTACK$3;
	luaconf$1.LUA_COMPAT_FLOATSTRING = LUA_COMPAT_FLOATSTRING$1;
	luaconf$1.LUA_IDSIZE             = LUA_IDSIZE$1;
	luaconf$1.LUA_INTEGER_FMT        = LUA_INTEGER_FMT$1;
	luaconf$1.LUA_INTEGER_FRMLEN     = LUA_INTEGER_FRMLEN$1;
	luaconf$1.LUA_MAXINTEGER         = LUA_MAXINTEGER$3;
	luaconf$1.LUA_MININTEGER         = LUA_MININTEGER$3;
	luaconf$1.LUA_NUMBER_FMT         = LUA_NUMBER_FMT$1;
	luaconf$1.LUA_NUMBER_FRMLEN      = LUA_NUMBER_FRMLEN$1;
	luaconf$1.LUAL_BUFFERSIZE        = LUAL_BUFFERSIZE$1;
	luaconf$1.frexp                  = frexp$1;
	luaconf$1.ldexp                  = ldexp$1;
	luaconf$1.lua_getlocaledecpoint  = lua_getlocaledecpoint$1;
	luaconf$1.lua_integer2str        = lua_integer2str$1;
	luaconf$1.lua_number2str         = lua_number2str$1;
	luaconf$1.lua_numbertointeger    = lua_numbertointeger$2;
	luaconf$1.luai_apicheck          = luai_apicheck$1;

	/*
	 * Fengari specific string conversion functions
	 */

	let luastring_from$1;
	if (typeof Uint8Array.from === "function") {
	    luastring_from$1 = Uint8Array.from.bind(Uint8Array);
	} else {
	    luastring_from$1 = function(a) {
	        let i = 0;
	        let len = a.length;
	        let r = new Uint8Array(len);
	        while (len > i) r[i] = a[i++];
	        return r;
	    };
	}

	let luastring_indexOf$6;
	if (typeof (new Uint8Array().indexOf) === "function") {
	    luastring_indexOf$6 = function(s, v, i) {
	        return s.indexOf(v, i);
	    };
	} else {
	    /* Browsers that don't support Uint8Array.indexOf seem to allow using Array.indexOf on Uint8Array objects e.g. IE11 */
	    let array_indexOf = [].indexOf;
	    if (array_indexOf.call(new Uint8Array(1), 0) !== 0) throw Error("missing .indexOf");
	    luastring_indexOf$6 = function(s, v, i) {
	        return array_indexOf.call(s, v, i);
	    };
	}

	let luastring_of$4;
	if (typeof Uint8Array.of === "function") {
	    luastring_of$4 = Uint8Array.of.bind(Uint8Array);
	} else {
	    luastring_of$4 = function() {
	        return luastring_from$1(arguments);
	    };
	}

	const is_luastring$2 = function(s) {
	    return s instanceof Uint8Array;
	};

	/* test two lua strings for equality */
	const luastring_eq$6 = function(a, b) {
	    if (a !== b) {
	        let len = a.length;
	        if (len !== b.length) return false;
	        /* XXX: Should this be a constant time algorithm? */
	        for (let i=0; i<len; i++)
	            if (a[i] !== b[i]) return false;
	    }
	    return true;
	};

	const unicode_error_message = "cannot convert invalid utf8 to javascript string";
	const to_jsstring$5 = function(value, from, to, replacement_char) {
	    if (!is_luastring$2(value)) throw new TypeError("to_jsstring expects a Uint8Array");

	    if (to === void 0) {
	        to = value.length;
	    } else {
	        to = Math.min(value.length, to);
	    }

	    let str = "";
	    for (let i = (from!==void 0?from:0); i < to;) {
	        let u0 = value[i++];
	        if (u0 < 0x80) {
	            /* single byte sequence */
	            str += String.fromCharCode(u0);
	        } else if (u0 < 0xC2 || u0 > 0xF4) {
	            if (!replacement_char) throw RangeError(unicode_error_message);
	            str += "�";
	        } else if (u0 <= 0xDF) {
	            /* two byte sequence */
	            if (i >= to) {
	                if (!replacement_char) throw RangeError(unicode_error_message);
	                str += "�";
	                continue;
	            }
	            let u1 = value[i++];
	            if ((u1&0xC0) !== 0x80) {
	                if (!replacement_char) throw RangeError(unicode_error_message);
	                str += "�";
	                continue;
	            }
	            str += String.fromCharCode(((u0 & 0x1F) << 6) + (u1 & 0x3F));
	        } else if (u0 <= 0xEF) {
	            /* three byte sequence */
	            if (i+1 >= to) {
	                if (!replacement_char) throw RangeError(unicode_error_message);
	                str += "�";
	                continue;
	            }
	            let u1 = value[i++];
	            if ((u1&0xC0) !== 0x80) {
	                if (!replacement_char) throw RangeError(unicode_error_message);
	                str += "�";
	                continue;
	            }
	            let u2 = value[i++];
	            if ((u2&0xC0) !== 0x80) {
	                if (!replacement_char) throw RangeError(unicode_error_message);
	                str += "�";
	                continue;
	            }
	            let u = ((u0 & 0x0F) << 12) + ((u1 & 0x3F) << 6) + (u2 & 0x3F);
	            if (u <= 0xFFFF) { /* BMP codepoint */
	                str += String.fromCharCode(u);
	            } else { /* Astral codepoint */
	                u -= 0x10000;
	                let s1 = (u >> 10) + 0xD800;
	                let s2 = (u % 0x400) + 0xDC00;
	                str += String.fromCharCode(s1, s2);
	            }
	        } else {
	            /* four byte sequence */
	            if (i+2 >= to) {
	                if (!replacement_char) throw RangeError(unicode_error_message);
	                str += "�";
	                continue;
	            }
	            let u1 = value[i++];
	            if ((u1&0xC0) !== 0x80) {
	                if (!replacement_char) throw RangeError(unicode_error_message);
	                str += "�";
	                continue;
	            }
	            let u2 = value[i++];
	            if ((u2&0xC0) !== 0x80) {
	                if (!replacement_char) throw RangeError(unicode_error_message);
	                str += "�";
	                continue;
	            }
	            let u3 = value[i++];
	            if ((u3&0xC0) !== 0x80) {
	                if (!replacement_char) throw RangeError(unicode_error_message);
	                str += "�";
	                continue;
	            }
	            /* Has to be astral codepoint */
	            let u = ((u0 & 0x07) << 18) + ((u1 & 0x3F) << 12) + ((u2 & 0x3F) << 6) + (u3 & 0x3F);
	            u -= 0x10000;
	            let s1 = (u >> 10) + 0xD800;
	            let s2 = (u % 0x400) + 0xDC00;
	            str += String.fromCharCode(s1, s2);
	        }
	    }
	    return str;
	};

	/* bytes allowed unescaped in a uri */
	const uri_allowed = (";,/?:@&=+$abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789,-_.!~*'()#").split('').reduce(function(uri_allowed, c) {
	    uri_allowed[c.charCodeAt(0)] = true;
	    return uri_allowed;
	}, {});

	/* utility function to convert a lua string to a js string with uri escaping */
	const to_uristring$2 = function(a) {
	    if (!is_luastring$2(a)) throw new TypeError("to_uristring expects a Uint8Array");
	    let s = "";
	    for (let i=0; i<a.length; i++) {
	        let v = a[i];
	        if (uri_allowed[v]) {
	            s += String.fromCharCode(v);
	        } else {
	            s += "%" + (v<0x10?"0":"") + v.toString(16);
	        }
	    }
	    return s;
	};

	const to_luastring_cache = {};

	const to_luastring$p = function(str, cache) {
	    if (typeof str !== "string") throw new TypeError("to_luastring expects a javascript string");

	    if (cache) {
	        let cached = to_luastring_cache[str];
	        if (is_luastring$2(cached)) return cached;
	    }

	    let len = str.length;
	    let outU8Array = Array(len); /* array is at *least* going to be length of string */
	    let outIdx = 0;
	    for (let i = 0; i < len; ++i) {
	        let u = str.charCodeAt(i);
	        if (u <= 0x7F) {
	            outU8Array[outIdx++] = u;
	        } else if (u <= 0x7FF) {
	            outU8Array[outIdx++] = 0xC0 | (u >> 6);
	            outU8Array[outIdx++] = 0x80 | (u & 63);
	        } else {
	            /* This part is to work around possible lack of String.codePointAt */
	            if (u >= 0xD800 && u <= 0xDBFF && (i+1) < len) {
	                /* is first half of surrogate pair */
	                let v = str.charCodeAt(i+1);
	                if (v >= 0xDC00 && v <= 0xDFFF) {
	                    /* is valid low surrogate */
	                    i++;
	                    u = (u - 0xD800) * 0x400 + v + 0x2400;
	                }
	            }
	            if (u <= 0xFFFF) {
	                outU8Array[outIdx++] = 0xE0 | (u >> 12);
	                outU8Array[outIdx++] = 0x80 | ((u >> 6) & 63);
	                outU8Array[outIdx++] = 0x80 | (u & 63);
	            } else {
	                outU8Array[outIdx++] = 0xF0 | (u >> 18);
	                outU8Array[outIdx++] = 0x80 | ((u >> 12) & 63);
	                outU8Array[outIdx++] = 0x80 | ((u >> 6) & 63);
	                outU8Array[outIdx++] = 0x80 | (u & 63);
	            }
	        }
	    }
	    outU8Array = luastring_from$1(outU8Array);

	    if (cache) to_luastring_cache[str] = outU8Array;

	    return outU8Array;
	};

	const from_userstring$4 = function(str) {
	    if (!is_luastring$2(str)) {
	        if (typeof str === "string") {
	            str = to_luastring$p(str);
	        } else {
	            throw new TypeError("expects an array of bytes or javascript string");
	        }
	    }
	    return str;
	};

	defs$2.luastring_from    = luastring_from$1;
	defs$2.luastring_indexOf = luastring_indexOf$6;
	defs$2.luastring_of      = luastring_of$4;
	defs$2.is_luastring      = is_luastring$2;
	defs$2.luastring_eq      = luastring_eq$6;
	defs$2.to_jsstring       = to_jsstring$5;
	defs$2.to_uristring      = to_uristring$2;
	defs$2.to_luastring      = to_luastring$p;
	defs$2.from_userstring   = from_userstring$4;


	/* mark for precompiled code ('<esc>Lua') */
	const LUA_SIGNATURE$4 = to_luastring$p("\x1bLua");

	const LUA_VERSION_MAJOR$2   = "5";
	const LUA_VERSION_MINOR$2   = "3";
	const LUA_VERSION_NUM$2     = 503;
	const LUA_VERSION_RELEASE = "4";

	const LUA_VERSION$1         = "Lua " + LUA_VERSION_MAJOR$2 + "." + LUA_VERSION_MINOR$2;
	const LUA_RELEASE         = LUA_VERSION$1 + "." + LUA_VERSION_RELEASE;
	const LUA_COPYRIGHT       = LUA_RELEASE + "  Copyright (C) 1994-2017 Lua.org, PUC-Rio";
	const LUA_AUTHORS         = "R. Ierusalimschy, L. H. de Figueiredo, W. Celes";

	defs$2.LUA_SIGNATURE       = LUA_SIGNATURE$4;
	defs$2.LUA_VERSION_MAJOR   = LUA_VERSION_MAJOR$2;
	defs$2.LUA_VERSION_MINOR   = LUA_VERSION_MINOR$2;
	defs$2.LUA_VERSION_NUM     = LUA_VERSION_NUM$2;
	defs$2.LUA_VERSION_RELEASE = LUA_VERSION_RELEASE;
	defs$2.LUA_VERSION         = LUA_VERSION$1;
	defs$2.LUA_RELEASE         = LUA_RELEASE;
	defs$2.LUA_COPYRIGHT       = LUA_COPYRIGHT;
	defs$2.LUA_AUTHORS         = LUA_AUTHORS;


	const thread_status = {
	    LUA_OK:        0,
	    LUA_YIELD:     1,
	    LUA_ERRRUN:    2,
	    LUA_ERRSYNTAX: 3,
	    LUA_ERRMEM:    4,
	    LUA_ERRGCMM:   5,
	    LUA_ERRERR:    6
	};

	const constant_types = {
	    LUA_TNONE:          -1,
	    LUA_TNIL:           0,
	    LUA_TBOOLEAN:       1,
	    LUA_TLIGHTUSERDATA: 2,
	    LUA_TNUMBER:        3,
	    LUA_TSTRING:        4,
	    LUA_TTABLE:         5,
	    LUA_TFUNCTION:      6,
	    LUA_TUSERDATA:      7,
	    LUA_TTHREAD:        8,
	    LUA_NUMTAGS:        9
	};

	constant_types.LUA_TSHRSTR = constant_types.LUA_TSTRING | (0 << 4);  /* short strings */
	constant_types.LUA_TLNGSTR = constant_types.LUA_TSTRING | (1 << 4);  /* long strings */

	constant_types.LUA_TNUMFLT = constant_types.LUA_TNUMBER | (0 << 4);  /* float numbers */
	constant_types.LUA_TNUMINT = constant_types.LUA_TNUMBER | (1 << 4);  /* integer numbers */

	constant_types.LUA_TLCL = constant_types.LUA_TFUNCTION | (0 << 4);  /* Lua closure */
	constant_types.LUA_TLCF = constant_types.LUA_TFUNCTION | (1 << 4);  /* light C function */
	constant_types.LUA_TCCL = constant_types.LUA_TFUNCTION | (2 << 4);  /* C closure */

	/*
	** Comparison and arithmetic functions
	*/

	const LUA_OPADD$2  = 0;   /* ORDER TM, ORDER OP */
	const LUA_OPSUB$1  = 1;
	const LUA_OPMUL$1  = 2;
	const LUA_OPMOD$2  = 3;
	const LUA_OPPOW$1  = 4;
	const LUA_OPDIV$2  = 5;
	const LUA_OPIDIV$2 = 6;
	const LUA_OPBAND$2 = 7;
	const LUA_OPBOR$2  = 8;
	const LUA_OPBXOR$2 = 9;
	const LUA_OPSHL$2  = 10;
	const LUA_OPSHR$2  = 11;
	const LUA_OPUNM$3  = 12;
	const LUA_OPBNOT$3 = 13;

	const LUA_OPEQ$2 = 0;
	const LUA_OPLT$3 = 1;
	const LUA_OPLE$1 = 2;

	const LUA_MINSTACK$2 = 20;

	const { LUAI_MAXSTACK: LUAI_MAXSTACK$2 } = luaconf$1;
	const LUA_REGISTRYINDEX$6 = -LUAI_MAXSTACK$2 - 1000;

	const lua_upvalueindex$3 = function(i) {
	    return LUA_REGISTRYINDEX$6 - i;
	};

	/* predefined values in the registry */
	const LUA_RIDX_MAINTHREAD$2 = 1;
	const LUA_RIDX_GLOBALS$2    = 2;
	const LUA_RIDX_LAST       = LUA_RIDX_GLOBALS$2;

	class lua_Debug$4 {
	    constructor() {
	        this.event = NaN;
	        this.name = null;           /* (n) */
	        this.namewhat = null;       /* (n) 'global', 'local', 'field', 'method' */
	        this.what = null;           /* (S) 'Lua', 'C', 'main', 'tail' */
	        this.source = null;         /* (S) */
	        this.currentline = NaN;     /* (l) */
	        this.linedefined = NaN;     /* (S) */
	        this.lastlinedefined = NaN; /* (S) */
	        this.nups = NaN;            /* (u) number of upvalues */
	        this.nparams = NaN;         /* (u) number of parameters */
	        this.isvararg = NaN;        /* (u) */
	        this.istailcall = NaN;      /* (t) */
	        this.short_src = null;      /* (S) */
	        /* private part */
	        this.i_ci = null;           /* active function */
	    }
	}

	/*
	** Event codes
	*/
	const LUA_HOOKCALL$1     = 0;
	const LUA_HOOKRET$1      = 1;
	const LUA_HOOKLINE$1     = 2;
	const LUA_HOOKCOUNT$1    = 3;
	const LUA_HOOKTAILCALL$1 = 4;


	/*
	** Event masks
	*/
	const LUA_MASKCALL$2  = (1 << LUA_HOOKCALL$1);
	const LUA_MASKRET$2   = (1 << LUA_HOOKRET$1);
	const LUA_MASKLINE$4  = (1 << LUA_HOOKLINE$1);
	const LUA_MASKCOUNT$3 = (1 << LUA_HOOKCOUNT$1);

	defs$2.LUA_HOOKCALL            = LUA_HOOKCALL$1;
	defs$2.LUA_HOOKCOUNT           = LUA_HOOKCOUNT$1;
	defs$2.LUA_HOOKLINE            = LUA_HOOKLINE$1;
	defs$2.LUA_HOOKRET             = LUA_HOOKRET$1;
	defs$2.LUA_HOOKTAILCALL        = LUA_HOOKTAILCALL$1;
	defs$2.LUA_MASKCALL            = LUA_MASKCALL$2;
	defs$2.LUA_MASKCOUNT           = LUA_MASKCOUNT$3;
	defs$2.LUA_MASKLINE            = LUA_MASKLINE$4;
	defs$2.LUA_MASKRET             = LUA_MASKRET$2;
	defs$2.LUA_MINSTACK            = LUA_MINSTACK$2;
	defs$2.LUA_MULTRET             = -1;
	defs$2.LUA_OPADD               = LUA_OPADD$2;
	defs$2.LUA_OPBAND              = LUA_OPBAND$2;
	defs$2.LUA_OPBNOT              = LUA_OPBNOT$3;
	defs$2.LUA_OPBOR               = LUA_OPBOR$2;
	defs$2.LUA_OPBXOR              = LUA_OPBXOR$2;
	defs$2.LUA_OPDIV               = LUA_OPDIV$2;
	defs$2.LUA_OPEQ                = LUA_OPEQ$2;
	defs$2.LUA_OPIDIV              = LUA_OPIDIV$2;
	defs$2.LUA_OPLE                = LUA_OPLE$1;
	defs$2.LUA_OPLT                = LUA_OPLT$3;
	defs$2.LUA_OPMOD               = LUA_OPMOD$2;
	defs$2.LUA_OPMUL               = LUA_OPMUL$1;
	defs$2.LUA_OPPOW               = LUA_OPPOW$1;
	defs$2.LUA_OPSHL               = LUA_OPSHL$2;
	defs$2.LUA_OPSHR               = LUA_OPSHR$2;
	defs$2.LUA_OPSUB               = LUA_OPSUB$1;
	defs$2.LUA_OPUNM               = LUA_OPUNM$3;
	defs$2.LUA_REGISTRYINDEX       = LUA_REGISTRYINDEX$6;
	defs$2.LUA_RIDX_GLOBALS        = LUA_RIDX_GLOBALS$2;
	defs$2.LUA_RIDX_LAST           = LUA_RIDX_LAST;
	defs$2.LUA_RIDX_MAINTHREAD     = LUA_RIDX_MAINTHREAD$2;
	defs$2.constant_types          = constant_types;
	defs$2.lua_Debug               = lua_Debug$4;
	defs$2.lua_upvalueindex        = lua_upvalueindex$3;
	defs$2.thread_status           = thread_status;

	/* Fengari specific functions
	 *
	 * This file includes fengari-specific data or and functionality for users to
	 * manipulate fengari's string type.
	 * The fields are exposed to the user on the 'fengari' entry point; however to
	 * avoid a dependency on defs.js from lauxlib.js they are defined in this file.
	 */

	const defs$1 = defs$2;

	const FENGARI_VERSION_MAJOR$1   = "0";
	const FENGARI_VERSION_MINOR$1   = "1";
	const FENGARI_VERSION_NUM$1     = 1;
	const FENGARI_VERSION_RELEASE$1 = "4";
	const FENGARI_VERSION$1         = "Fengari " + FENGARI_VERSION_MAJOR$1 + "." + FENGARI_VERSION_MINOR$1;
	const FENGARI_RELEASE$1         = FENGARI_VERSION$1 + "." + FENGARI_VERSION_RELEASE$1;
	const FENGARI_AUTHORS$1         = "B. Giannangeli, Daurnimator";
	const FENGARI_COPYRIGHT$1       = FENGARI_RELEASE$1 + "  Copyright (C) 2017-2018 " + FENGARI_AUTHORS$1 + "\nBased on: " + defs$1.LUA_COPYRIGHT;

	fengaricore.FENGARI_AUTHORS         = FENGARI_AUTHORS$1;
	fengaricore.FENGARI_COPYRIGHT       = FENGARI_COPYRIGHT$1;
	fengaricore.FENGARI_RELEASE         = FENGARI_RELEASE$1;
	fengaricore.FENGARI_VERSION         = FENGARI_VERSION$1;
	fengaricore.FENGARI_VERSION_MAJOR   = FENGARI_VERSION_MAJOR$1;
	fengaricore.FENGARI_VERSION_MINOR   = FENGARI_VERSION_MINOR$1;
	fengaricore.FENGARI_VERSION_NUM     = FENGARI_VERSION_NUM$1;
	fengaricore.FENGARI_VERSION_RELEASE = FENGARI_VERSION_RELEASE$1;
	fengaricore.is_luastring            = defs$1.is_luastring;
	fengaricore.luastring_eq            = defs$1.luastring_eq;
	fengaricore.luastring_from          = defs$1.luastring_from;
	fengaricore.luastring_indexOf       = defs$1.luastring_indexOf;
	fengaricore.luastring_of            = defs$1.luastring_of;
	fengaricore.to_jsstring             = defs$1.to_jsstring;
	fengaricore.to_luastring            = defs$1.to_luastring;
	fengaricore.to_uristring            = defs$1.to_uristring;
	fengaricore.from_userstring         = defs$1.from_userstring;

	var lua$2 = {};

	var lapi$4 = {};

	var llimits = {};

	const { luai_apicheck } = luaconf$1;

	const lua_assert$c = function(c) {
	    if (!c) throw Error("assertion failed");
	};
	llimits.lua_assert = lua_assert$c;

	llimits.luai_apicheck = luai_apicheck || function(l, e) { return lua_assert$c(e); };

	const api_check$3 = function(l, e, msg) {
	    return luai_apicheck(l, e && msg);
	};
	llimits.api_check = api_check$3;

	const LUAI_MAXCCALLS$2 = 200;
	llimits.LUAI_MAXCCALLS = LUAI_MAXCCALLS$2;

	/* minimum size for string buffer */
	const LUA_MINBUFFER$1 = 32;
	llimits.LUA_MINBUFFER = LUA_MINBUFFER$1;

	const luai_nummod$2 = function(L, a, b) {
	    let m = a % b;
	    if ((m*b) < 0)
	        m += b;
	    return m;
	};
	llimits.luai_nummod = luai_nummod$2;

	// If later integers are more than 32bit, LUA_MAXINTEGER will then be != MAX_INT
	const MAX_INT$3 = 2147483647;
	llimits.MAX_INT = MAX_INT$3;
	const MIN_INT = -2147483648;
	llimits.MIN_INT = MIN_INT;

	var ldebug$8 = {};

	var ldo$a = {};

	var lfunc$6 = {};

	var lobject$c = {};

	var ljstype = {};

	const { luastring_of: luastring_of$3 } = defs$2;

	const luai_ctype_ = luastring_of$3(
	    0x00,  /* EOZ */
	    0x00,  0x00,  0x00,  0x00,  0x00,  0x00,  0x00,  0x00,        /* 0. */
	    0x00,  0x08,  0x08,  0x08,  0x08,  0x08,  0x00,  0x00,
	    0x00,  0x00,  0x00,  0x00,  0x00,  0x00,  0x00,  0x00,        /* 1. */
	    0x00,  0x00,  0x00,  0x00,  0x00,  0x00,  0x00,  0x00,
	    0x0c,  0x04,  0x04,  0x04,  0x04,  0x04,  0x04,  0x04,        /* 2. */
	    0x04,  0x04,  0x04,  0x04,  0x04,  0x04,  0x04,  0x04,
	    0x16,  0x16,  0x16,  0x16,  0x16,  0x16,  0x16,  0x16,        /* 3. */
	    0x16,  0x16,  0x04,  0x04,  0x04,  0x04,  0x04,  0x04,
	    0x04,  0x15,  0x15,  0x15,  0x15,  0x15,  0x15,  0x05,        /* 4. */
	    0x05,  0x05,  0x05,  0x05,  0x05,  0x05,  0x05,  0x05,
	    0x05,  0x05,  0x05,  0x05,  0x05,  0x05,  0x05,  0x05,        /* 5. */
	    0x05,  0x05,  0x05,  0x04,  0x04,  0x04,  0x04,  0x05,
	    0x04,  0x15,  0x15,  0x15,  0x15,  0x15,  0x15,  0x05,        /* 6. */
	    0x05,  0x05,  0x05,  0x05,  0x05,  0x05,  0x05,  0x05,
	    0x05,  0x05,  0x05,  0x05,  0x05,  0x05,  0x05,  0x05,        /* 7. */
	    0x05,  0x05,  0x05,  0x04,  0x04,  0x04,  0x04,  0x00,
	    0x00,  0x00,  0x00,  0x00,  0x00,  0x00,  0x00,  0x00,        /* 8. */
	    0x00,  0x00,  0x00,  0x00,  0x00,  0x00,  0x00,  0x00,
	    0x00,  0x00,  0x00,  0x00,  0x00,  0x00,  0x00,  0x00,        /* 9. */
	    0x00,  0x00,  0x00,  0x00,  0x00,  0x00,  0x00,  0x00,
	    0x00,  0x00,  0x00,  0x00,  0x00,  0x00,  0x00,  0x00,        /* a. */
	    0x00,  0x00,  0x00,  0x00,  0x00,  0x00,  0x00,  0x00,
	    0x00,  0x00,  0x00,  0x00,  0x00,  0x00,  0x00,  0x00,        /* b. */
	    0x00,  0x00,  0x00,  0x00,  0x00,  0x00,  0x00,  0x00,
	    0x00,  0x00,  0x00,  0x00,  0x00,  0x00,  0x00,  0x00,        /* c. */
	    0x00,  0x00,  0x00,  0x00,  0x00,  0x00,  0x00,  0x00,
	    0x00,  0x00,  0x00,  0x00,  0x00,  0x00,  0x00,  0x00,        /* d. */
	    0x00,  0x00,  0x00,  0x00,  0x00,  0x00,  0x00,  0x00,
	    0x00,  0x00,  0x00,  0x00,  0x00,  0x00,  0x00,  0x00,        /* e. */
	    0x00,  0x00,  0x00,  0x00,  0x00,  0x00,  0x00,  0x00,
	    0x00,  0x00,  0x00,  0x00,  0x00,  0x00,  0x00,  0x00,        /* f. */
	    0x00,  0x00,  0x00,  0x00,  0x00,  0x00,  0x00,  0x00
	);

	const ALPHABIT = 0;
	const DIGITBIT = 1;
	const PRINTBIT = 2;
	const SPACEBIT = 3;
	const XDIGITBIT = 4;

	const lisdigit$2 = function(c) {
	    return (luai_ctype_[c+1] & (1<<DIGITBIT)) !== 0;
	};

	const lisxdigit$2 = function(c) {
	    return (luai_ctype_[c+1] & (1<<XDIGITBIT)) !== 0;
	};

	const lisprint$1 = function(c) {
	    return (luai_ctype_[c+1] & (1<<PRINTBIT)) !== 0;
	};

	const lisspace$2 = function(c) {
	    return (luai_ctype_[c+1] & (1<<SPACEBIT)) !== 0;
	};

	const lislalpha$1 = function(c) {
	    return (luai_ctype_[c+1] & (1<<ALPHABIT)) !== 0;
	};

	const lislalnum$1 = function(c) {
	    return (luai_ctype_[c+1] & ((1<<ALPHABIT)|(1<<DIGITBIT))) !== 0;
	};

	ljstype.lisdigit   = lisdigit$2;
	ljstype.lislalnum  = lislalnum$1;
	ljstype.lislalpha  = lislalpha$1;
	ljstype.lisprint   = lisprint$1;
	ljstype.lisspace   = lisspace$2;
	ljstype.lisxdigit  = lisxdigit$2;

	var lstate$8 = {};

	var ltable$9 = {};

	var lstring = {};

	const {
	    is_luastring: is_luastring$1,
	    luastring_eq: luastring_eq$5,
	    luastring_from,
	    to_luastring: to_luastring$o
	} = defs$2;
	const { lua_assert: lua_assert$b } = llimits;

	class TString$1 {

	    constructor(L, str) {
	        this.hash = null;
	        this.realstring = str;
	    }

	    getstr() {
	        return this.realstring;
	    }

	    tsslen() {
	        return this.realstring.length;
	    }

	}

	const luaS_eqlngstr$2 = function(a, b) {
	    lua_assert$b(a instanceof TString$1);
	    lua_assert$b(b instanceof TString$1);
	    return a == b || luastring_eq$5(a.realstring, b.realstring);
	};

	/* converts strings (arrays) to a consistent map key
	   make sure this doesn't conflict with any of the anti-collision strategies in ltable */
	const luaS_hash$1 = function(str) {
	    lua_assert$b(is_luastring$1(str));
	    let len = str.length;
	    let s = "|";
	    for (let i=0; i<len; i++)
	        s += str[i].toString(16);
	    return s;
	};

	const luaS_hashlongstr$3 = function(ts) {
	    lua_assert$b(ts instanceof TString$1);
	    if(ts.hash === null) {
	        ts.hash = luaS_hash$1(ts.getstr());
	    }
	    return ts.hash;
	};

	/* variant that takes ownership of array */
	const luaS_bless$6 = function(L, str) {
	    lua_assert$b(str instanceof Uint8Array);
	    return new TString$1(L, str);
	};

	/* makes a copy */
	const luaS_new$5 = function(L, str) {
	    return luaS_bless$6(L, luastring_from(str));
	};

	/* takes a js string */
	const luaS_newliteral$3 = function(L, str) {
	    return luaS_bless$6(L, to_luastring$o(str));
	};

	lstring.luaS_eqlngstr    = luaS_eqlngstr$2;
	lstring.luaS_hash        = luaS_hash$1;
	lstring.luaS_hashlongstr = luaS_hashlongstr$3;
	lstring.luaS_bless       = luaS_bless$6;
	lstring.luaS_new         = luaS_new$5;
	lstring.luaS_newliteral  = luaS_newliteral$3;
	lstring.TString          = TString$1;

	const {
	    constant_types: {
	        LUA_TBOOLEAN: LUA_TBOOLEAN$b,
	        LUA_TCCL: LUA_TCCL$3,
	        LUA_TLCF: LUA_TLCF$4,
	        LUA_TLCL: LUA_TLCL$3,
	        LUA_TLIGHTUSERDATA: LUA_TLIGHTUSERDATA$6,
	        LUA_TLNGSTR: LUA_TLNGSTR$7,
	        LUA_TNIL: LUA_TNIL$i,
	        LUA_TNUMFLT: LUA_TNUMFLT$6,
	        LUA_TNUMINT: LUA_TNUMINT$6,
	        LUA_TSHRSTR: LUA_TSHRSTR$5,
	        LUA_TTABLE: LUA_TTABLE$f,
	        LUA_TTHREAD: LUA_TTHREAD$4,
	        LUA_TUSERDATA: LUA_TUSERDATA$6
	    },
	    to_luastring: to_luastring$n
	} = defs$2;
	const { lua_assert: lua_assert$a } = llimits;
	const ldebug$7  = ldebug$8;
	const lobject$b = lobject$c;
	const {
	    luaS_hashlongstr: luaS_hashlongstr$2,
	    TString
	} = lstring;
	const lstate$7  = lstate$8;

	/* used to prevent conflicts with lightuserdata keys */
	let lightuserdata_hashes = new WeakMap();
	const get_lightuserdata_hash = function(v) {
	    let hash = lightuserdata_hashes.get(v);
	    if (!hash) {
	        /* Hash should be something unique that is a valid WeakMap key
	           so that it ends up in dead_weak when removed from a table */
	        hash = {};
	        lightuserdata_hashes.set(v, hash);
	    }
	    return hash;
	};

	const table_hash = function(L, key) {
	    switch(key.type) {
	        case LUA_TNIL$i:
	            return ldebug$7.luaG_runerror(L, to_luastring$n("table index is nil", true));
	        case LUA_TNUMFLT$6:
	            if (isNaN(key.value))
	                return ldebug$7.luaG_runerror(L, to_luastring$n("table index is NaN", true));
	            /* fall through */
	        case LUA_TNUMINT$6: /* takes advantage of floats and integers being same in JS */
	        case LUA_TBOOLEAN$b:
	        case LUA_TTABLE$f:
	        case LUA_TLCL$3:
	        case LUA_TLCF$4:
	        case LUA_TCCL$3:
	        case LUA_TUSERDATA$6:
	        case LUA_TTHREAD$4:
	            return key.value;
	        case LUA_TSHRSTR$5:
	        case LUA_TLNGSTR$7:
	            return luaS_hashlongstr$2(key.tsvalue());
	        case LUA_TLIGHTUSERDATA$6: {
	            let v = key.value;
	            switch(typeof v) {
	                case "string":
	                    /* possible conflict with LUA_TSTRING.
	                       prefix this string with "*" so they don't clash */
	                    return "*" + v;
	                case "number":
	                    /* possible conflict with LUA_TNUMBER.
	                       turn into string and prefix with "#" to avoid clash with other strings */
	                    return "#" + v;
	                case "boolean":
	                    /* possible conflict with LUA_TBOOLEAN. use strings ?true and ?false instead */
	                    return v?"?true":"?false";
	                case "function":
	                    /* possible conflict with LUA_TLCF.
	                       indirect via a weakmap */
	                    return get_lightuserdata_hash(v);
	                case "object":
	                    /* v could be a lua_State, CClosure, LClosure, Table or Userdata from this state as returned by lua_topointer */
	                    if ((v instanceof lstate$7.lua_State && v.l_G === L.l_G) ||
	                        v instanceof Table ||
	                        v instanceof lobject$b.Udata ||
	                        v instanceof lobject$b.LClosure ||
	                        v instanceof lobject$b.CClosure) {
	                        /* indirect via a weakmap */
	                        return get_lightuserdata_hash(v);
	                    }
	                    /* fall through */
	                default:
	                    return v;
	            }
	        }
	        default:
	            throw new Error("unknown key type: " + key.type);
	    }
	};

	class Table {
	    constructor(L) {
	        this.id = L.l_G.id_counter++;
	        this.strong = new Map();
	        this.dead_strong = new Map();
	        this.dead_weak = void 0; /* initialised when needed */
	        this.f = void 0; /* first entry */
	        this.l = void 0; /* last entry */
	        this.metatable = null;
	        this.flags = ~0;
	    }
	}

	const invalidateTMcache = function(t) {
	    t.flags = 0;
	};

	const add = function(t, hash, key, value) {
	    t.dead_strong.clear();
	    t.dead_weak = void 0;
	    let prev = null;
	    let entry = {
	        key: key,
	        value: value,
	        p: prev = t.l,
	        n: void 0
	    };
	    if (!t.f) t.f = entry;
	    if (prev) prev.n = entry;
	    t.strong.set(hash, entry);
	    t.l = entry;
	};

	const is_valid_weakmap_key = function(k) {
	    return typeof k === 'object' ? k !== null : typeof k === 'function';
	};

	/* Move out of 'strong' part and into 'dead' part. */
	const mark_dead = function(t, hash) {
	    let e = t.strong.get(hash);
	    if (e) {
	        e.key.setdeadvalue();
	        e.value = void 0;
	        let next = e.n;
	        let prev = e.p;
	        e.p = void 0; /* no need to know previous item any more */
	        if(prev) prev.n = next;
	        if(next) next.p = prev;
	        if(t.f === e) t.f = next;
	        if(t.l === e) t.l = prev;
	        t.strong.delete(hash);
	        if (is_valid_weakmap_key(hash)) {
	            if (!t.dead_weak) t.dead_weak = new WeakMap();
	            t.dead_weak.set(hash, e);
	        } else {
	            /* can't be used as key in weakmap */
	            t.dead_strong.set(hash, e);
	        }
	    }
	};

	const luaH_new = function(L) {
	    return new Table(L);
	};

	const getgeneric = function(t, hash) {
	    let v = t.strong.get(hash);
	    return v ? v.value : lobject$b.luaO_nilobject;
	};

	const luaH_getint = function(t, key) {
	    lua_assert$a(typeof key == "number" && (key|0) === key);
	    return getgeneric(t, key);
	};

	const luaH_getstr = function(t, key) {
	    lua_assert$a(key instanceof TString);
	    return getgeneric(t, luaS_hashlongstr$2(key));
	};

	const luaH_get = function(L, t, key) {
	    lua_assert$a(key instanceof lobject$b.TValue);
	    if (key.ttisnil() || (key.ttisfloat() && isNaN(key.value)))
	        return lobject$b.luaO_nilobject;
	    return getgeneric(t, table_hash(L, key));
	};

	const luaH_setint = function(t, key, value) {
	    lua_assert$a(typeof key == "number" && (key|0) === key && value instanceof lobject$b.TValue);
	    let hash = key; /* table_hash known result */
	    if (value.ttisnil()) {
	        mark_dead(t, hash);
	        return;
	    }
	    let e = t.strong.get(hash);
	    if (e) {
	        let tv = e.value;
	        tv.setfrom(value);
	    } else {
	        let k = new lobject$b.TValue(LUA_TNUMINT$6, key);
	        let v = new lobject$b.TValue(value.type, value.value);
	        add(t, hash, k, v);
	    }
	};

	const luaH_setfrom = function(L, t, key, value) {
	    lua_assert$a(key instanceof lobject$b.TValue);
	    let hash = table_hash(L, key);
	    if (value.ttisnil()) { /* delete */
	        mark_dead(t, hash);
	        return;
	    }

	    let e = t.strong.get(hash);
	    if (e) {
	        e.value.setfrom(value);
	    } else {
	        let k;
	        let kv = key.value;
	        if ((key.ttisfloat() && (kv|0) === kv)) { /* does index fit in an integer? */
	            /* insert it as an integer */
	            k = new lobject$b.TValue(LUA_TNUMINT$6, kv);
	        } else {
	            k = new lobject$b.TValue(key.type, kv);
	        }
	        let v = new lobject$b.TValue(value.type, value.value);
	        add(t, hash, k, v);
	    }
	};

	/*
	** Try to find a boundary in table 't'. A 'boundary' is an integer index
	** such that t[i] is non-nil and t[i+1] is nil (and 0 if t[1] is nil).
	*/
	const luaH_getn = function(t) {
	    let i = 0;
	    let j = t.strong.size + 1; /* use known size of Map to bound search */
	    /* now do a binary search between them */
	    while (j - i > 1) {
	        let m = Math.floor((i+j)/2);
	        if (luaH_getint(t, m).ttisnil()) j = m;
	        else i = m;
	    }
	    return i;
	};

	const luaH_next = function(L, table, keyI) {
	    let keyO = L.stack[keyI];

	    let entry;
	    if (keyO.type === LUA_TNIL$i) {
	        entry = table.f;
	        if (!entry)
	            return false;
	    } else {
	        /* First find current key */
	        let hash = table_hash(L, keyO);
	        /* Look in main part of table */
	        entry = table.strong.get(hash);
	        if (entry) {
	            entry = entry.n;
	            if (!entry)
	                return false;
	        } else {
	            /* Try dead keys */
	            entry = (table.dead_weak && table.dead_weak.get(hash)) || table.dead_strong.get(hash);
	            if (!entry)
	                /* item not in table */
	                return ldebug$7.luaG_runerror(L, to_luastring$n("invalid key to 'next'"));
	            /* Iterate until either out of keys, or until finding a non-dead key */
	            do {
	                entry = entry.n;
	                if (!entry)
	                    return false;
	            } while (entry.key.ttisdeadkey());
	        }
	    }
	    lobject$b.setobj2s(L, keyI, entry.key);
	    lobject$b.setobj2s(L, keyI+1, entry.value);
	    return true;
	};

	ltable$9.invalidateTMcache = invalidateTMcache;
	ltable$9.luaH_get     = luaH_get;
	ltable$9.luaH_getint  = luaH_getint;
	ltable$9.luaH_getn    = luaH_getn;
	ltable$9.luaH_getstr  = luaH_getstr;
	ltable$9.luaH_setfrom = luaH_setfrom;
	ltable$9.luaH_setint  = luaH_setint;
	ltable$9.luaH_new     = luaH_new;
	ltable$9.luaH_next    = luaH_next;
	ltable$9.Table        = Table;

	var ltm$6 = {};

	var lvm$6 = {};

	var lopcodes$3 = {};

	const OpCodes = [
	    "MOVE",
	    "LOADK",
	    "LOADKX",
	    "LOADBOOL",
	    "LOADNIL",
	    "GETUPVAL",
	    "GETTABUP",
	    "GETTABLE",
	    "SETTABUP",
	    "SETUPVAL",
	    "SETTABLE",
	    "NEWTABLE",
	    "SELF",
	    "ADD",
	    "SUB",
	    "MUL",
	    "MOD",
	    "POW",
	    "DIV",
	    "IDIV",
	    "BAND",
	    "BOR",
	    "BXOR",
	    "SHL",
	    "SHR",
	    "UNM",
	    "BNOT",
	    "NOT",
	    "LEN",
	    "CONCAT",
	    "JMP",
	    "EQ",
	    "LT",
	    "LE",
	    "TEST",
	    "TESTSET",
	    "CALL",
	    "TAILCALL",
	    "RETURN",
	    "FORLOOP",
	    "FORPREP",
	    "TFORCALL",
	    "TFORLOOP",
	    "SETLIST",
	    "CLOSURE",
	    "VARARG",
	    "EXTRAARG"
	];

	const OpCodesI$1 = {
	    OP_MOVE:     0,
	    OP_LOADK:    1,
	    OP_LOADKX:   2,
	    OP_LOADBOOL: 3,
	    OP_LOADNIL:  4,
	    OP_GETUPVAL: 5,
	    OP_GETTABUP: 6,
	    OP_GETTABLE: 7,
	    OP_SETTABUP: 8,
	    OP_SETUPVAL: 9,
	    OP_SETTABLE: 10,
	    OP_NEWTABLE: 11,
	    OP_SELF:     12,
	    OP_ADD:      13,
	    OP_SUB:      14,
	    OP_MUL:      15,
	    OP_MOD:      16,
	    OP_POW:      17,
	    OP_DIV:      18,
	    OP_IDIV:     19,
	    OP_BAND:     20,
	    OP_BOR:      21,
	    OP_BXOR:     22,
	    OP_SHL:      23,
	    OP_SHR:      24,
	    OP_UNM:      25,
	    OP_BNOT:     26,
	    OP_NOT:      27,
	    OP_LEN:      28,
	    OP_CONCAT:   29,
	    OP_JMP:      30,
	    OP_EQ:       31,
	    OP_LT:       32,
	    OP_LE:       33,
	    OP_TEST:     34,
	    OP_TESTSET:  35,
	    OP_CALL:     36,
	    OP_TAILCALL: 37,
	    OP_RETURN:   38,
	    OP_FORLOOP:  39,
	    OP_FORPREP:  40,
	    OP_TFORCALL: 41,
	    OP_TFORLOOP: 42,
	    OP_SETLIST:  43,
	    OP_CLOSURE:  44,
	    OP_VARARG:   45,
	    OP_EXTRAARG: 46
	};

	/*
	** masks for instruction properties. The format is:
	** bits 0-1: op mode
	** bits 2-3: C arg mode
	** bits 4-5: B arg mode
	** bit 6: instruction set register A
	** bit 7: operator is a test (next instruction must be a jump)
	*/
	const OpArgN = 0;  /* argument is not used */
	const OpArgU = 1;  /* argument is used */
	const OpArgR = 2;  /* argument is a register or a jump offset */
	const OpArgK = 3;  /* argument is a constant or register/constant */

	/* basic instruction format */
	const iABC  = 0;
	const iABx  = 1;
	const iAsBx = 2;
	const iAx   = 3;

	const luaP_opmodes = [
	    0 << 7 | 1 << 6 | OpArgR << 4 | OpArgN << 2 | iABC,   /* OP_MOVE */
	    0 << 7 | 1 << 6 | OpArgK << 4 | OpArgN << 2 | iABx,   /* OP_LOADK */
	    0 << 7 | 1 << 6 | OpArgN << 4 | OpArgN << 2 | iABx,   /* OP_LOADKX */
	    0 << 7 | 1 << 6 | OpArgU << 4 | OpArgU << 2 | iABC,   /* OP_LOADBOOL */
	    0 << 7 | 1 << 6 | OpArgU << 4 | OpArgN << 2 | iABC,   /* OP_LOADNIL */
	    0 << 7 | 1 << 6 | OpArgU << 4 | OpArgN << 2 | iABC,   /* OP_GETUPVAL */
	    0 << 7 | 1 << 6 | OpArgU << 4 | OpArgK << 2 | iABC,   /* OP_GETTABUP */
	    0 << 7 | 1 << 6 | OpArgR << 4 | OpArgK << 2 | iABC,   /* OP_GETTABLE */
	    0 << 7 | 0 << 6 | OpArgK << 4 | OpArgK << 2 | iABC,   /* OP_SETTABUP */
	    0 << 7 | 0 << 6 | OpArgU << 4 | OpArgN << 2 | iABC,   /* OP_SETUPVAL */
	    0 << 7 | 0 << 6 | OpArgK << 4 | OpArgK << 2 | iABC,   /* OP_SETTABLE */
	    0 << 7 | 1 << 6 | OpArgU << 4 | OpArgU << 2 | iABC,   /* OP_NEWTABLE */
	    0 << 7 | 1 << 6 | OpArgR << 4 | OpArgK << 2 | iABC,   /* OP_SELF */
	    0 << 7 | 1 << 6 | OpArgK << 4 | OpArgK << 2 | iABC,   /* OP_ADD */
	    0 << 7 | 1 << 6 | OpArgK << 4 | OpArgK << 2 | iABC,   /* OP_SUB */
	    0 << 7 | 1 << 6 | OpArgK << 4 | OpArgK << 2 | iABC,   /* OP_MUL */
	    0 << 7 | 1 << 6 | OpArgK << 4 | OpArgK << 2 | iABC,   /* OP_MOD */
	    0 << 7 | 1 << 6 | OpArgK << 4 | OpArgK << 2 | iABC,   /* OP_POW */
	    0 << 7 | 1 << 6 | OpArgK << 4 | OpArgK << 2 | iABC,   /* OP_DIV */
	    0 << 7 | 1 << 6 | OpArgK << 4 | OpArgK << 2 | iABC,   /* OP_IDIV */
	    0 << 7 | 1 << 6 | OpArgK << 4 | OpArgK << 2 | iABC,   /* OP_BAND */
	    0 << 7 | 1 << 6 | OpArgK << 4 | OpArgK << 2 | iABC,   /* OP_BOR */
	    0 << 7 | 1 << 6 | OpArgK << 4 | OpArgK << 2 | iABC,   /* OP_BXOR */
	    0 << 7 | 1 << 6 | OpArgK << 4 | OpArgK << 2 | iABC,   /* OP_SHL */
	    0 << 7 | 1 << 6 | OpArgK << 4 | OpArgK << 2 | iABC,   /* OP_SHR */
	    0 << 7 | 1 << 6 | OpArgR << 4 | OpArgN << 2 | iABC,   /* OP_UNM */
	    0 << 7 | 1 << 6 | OpArgR << 4 | OpArgN << 2 | iABC,   /* OP_BNOT */
	    0 << 7 | 1 << 6 | OpArgR << 4 | OpArgN << 2 | iABC,   /* OP_NOT */
	    0 << 7 | 1 << 6 | OpArgR << 4 | OpArgN << 2 | iABC,   /* OP_LEN */
	    0 << 7 | 1 << 6 | OpArgR << 4 | OpArgR << 2 | iABC,   /* OP_CONCAT */
	    0 << 7 | 0 << 6 | OpArgR << 4 | OpArgN << 2 | iAsBx,  /* OP_JMP */
	    1 << 7 | 0 << 6 | OpArgK << 4 | OpArgK << 2 | iABC,   /* OP_EQ */
	    1 << 7 | 0 << 6 | OpArgK << 4 | OpArgK << 2 | iABC,   /* OP_LT */
	    1 << 7 | 0 << 6 | OpArgK << 4 | OpArgK << 2 | iABC,   /* OP_LE */
	    1 << 7 | 0 << 6 | OpArgN << 4 | OpArgU << 2 | iABC,   /* OP_TEST */
	    1 << 7 | 1 << 6 | OpArgR << 4 | OpArgU << 2 | iABC,   /* OP_TESTSET */
	    0 << 7 | 1 << 6 | OpArgU << 4 | OpArgU << 2 | iABC,   /* OP_CALL */
	    0 << 7 | 1 << 6 | OpArgU << 4 | OpArgU << 2 | iABC,   /* OP_TAILCALL */
	    0 << 7 | 0 << 6 | OpArgU << 4 | OpArgN << 2 | iABC,   /* OP_RETURN */
	    0 << 7 | 1 << 6 | OpArgR << 4 | OpArgN << 2 | iAsBx,  /* OP_FORLOOP */
	    0 << 7 | 1 << 6 | OpArgR << 4 | OpArgN << 2 | iAsBx,  /* OP_FORPREP */
	    0 << 7 | 0 << 6 | OpArgN << 4 | OpArgU << 2 | iABC,   /* OP_TFORCALL */
	    0 << 7 | 1 << 6 | OpArgR << 4 | OpArgN << 2 | iAsBx,  /* OP_TFORLOOP */
	    0 << 7 | 0 << 6 | OpArgU << 4 | OpArgU << 2 | iABC,   /* OP_SETLIST */
	    0 << 7 | 1 << 6 | OpArgU << 4 | OpArgN << 2 | iABx,   /* OP_CLOSURE */
	    0 << 7 | 1 << 6 | OpArgU << 4 | OpArgN << 2 | iABC,   /* OP_VARARG */
	    0 << 7 | 0 << 6 | OpArgU << 4 | OpArgU << 2 | iAx     /* OP_EXTRAARG */
	];

	const getOpMode = function(m) {
	    return luaP_opmodes[m] & 3;
	};

	const getBMode = function(m) {
	    return (luaP_opmodes[m] >> 4) & 3;
	};

	const getCMode = function(m) {
	    return (luaP_opmodes[m] >> 2) & 3;
	};

	const testAMode = function(m) {
	    return luaP_opmodes[m] & (1 << 6);
	};

	const testTMode = function(m) {
	    return luaP_opmodes[m] & (1 << 7);
	};

	const SIZE_C$1     = 9;
	const SIZE_B$1     = 9;
	const SIZE_Bx$1    = (SIZE_C$1 + SIZE_B$1);
	const SIZE_A$1     = 8;
	const SIZE_Ax$1    = (SIZE_C$1 + SIZE_B$1 + SIZE_A$1);
	const SIZE_OP$1    = 6;
	const POS_OP$1     = 0;
	const POS_A$1      = (POS_OP$1 + SIZE_OP$1);
	const POS_C$1      = (POS_A$1 + SIZE_A$1);
	const POS_B$1      = (POS_C$1 + SIZE_C$1);
	const POS_Bx$1     = POS_C$1;
	const POS_Ax$1     = POS_A$1;
	const MAXARG_Bx  = ((1 << SIZE_Bx$1) - 1);
	const MAXARG_sBx$1 = (MAXARG_Bx >> 1); /* 'sBx' is signed */
	const MAXARG_Ax  = ((1<<SIZE_Ax$1)-1);
	const MAXARG_A   = ((1 << SIZE_A$1) - 1);
	const MAXARG_B   = ((1 << SIZE_B$1) - 1);
	const MAXARG_C   = ((1 << SIZE_C$1) - 1);

	/* this bit 1 means constant (0 means register) */
	const BITRK      = (1 << (SIZE_B$1 - 1));

	const MAXINDEXRK = (BITRK - 1);

	/*
	** invalid register that fits in 8 bits
	*/
	const NO_REG     = MAXARG_A;

	/* test whether value is a constant */
	const ISK$1 = function (x) {
	    return x & BITRK;
	};

	/* gets the index of the constant */
	const INDEXK$1 = function (r) {
	    return r & ~BITRK;
	};

	/* code a constant index as a RK value */
	const RKASK = function(x) {
	    return x | BITRK;
	};


	/* creates a mask with 'n' 1 bits at position 'p' */
	const MASK1 = function(n, p) {
	    return ((~((~0)<<(n)))<<(p));
	};

	/* creates a mask with 'n' 0 bits at position 'p' */
	const MASK0 = function(n, p) {
	    return (~MASK1(n, p));
	};

	const GET_OPCODE = function(i) {
	    return i.opcode;
	};

	const SET_OPCODE$1 = function(i, o) {
	    i.code = (i.code & MASK0(SIZE_OP$1, POS_OP$1)) | ((o << POS_OP$1) & MASK1(SIZE_OP$1, POS_OP$1));
	    return fullins(i);
	};

	const setarg = function(i, v, pos, size) {
	    i.code = (i.code & MASK0(size, pos)) | ((v << pos) & MASK1(size, pos));
	    return fullins(i);
	};

	const GETARG_A = function(i) {
	    return i.A;
	};

	const SETARG_A = function(i,v) {
	    return setarg(i, v, POS_A$1, SIZE_A$1);
	};

	const GETARG_B = function(i) {
	    return i.B;
	};

	const SETARG_B$1 = function(i,v) {
	    return setarg(i, v, POS_B$1, SIZE_B$1);
	};

	const GETARG_C = function(i) {
	    return i.C;
	};

	const SETARG_C$1 = function(i,v) {
	    return setarg(i, v, POS_C$1, SIZE_C$1);
	};

	const GETARG_Bx = function(i) {
	    return i.Bx;
	};

	const SETARG_Bx = function(i,v) {
	    return setarg(i, v, POS_Bx$1, SIZE_Bx$1);
	};

	const GETARG_Ax = function(i) {
	    return i.Ax;
	};

	const SETARG_Ax = function(i,v) {
	    return setarg(i, v, POS_Ax$1, SIZE_Ax$1);
	};

	const GETARG_sBx = function(i) {
	    return i.sBx;
	};

	const SETARG_sBx = function(i, b) {
	    return SETARG_Bx(i, b + MAXARG_sBx$1);
	};

	/*
	** Pre-calculate all possible part of the instruction
	*/
	const fullins = function(ins) {
	    if (typeof ins === "number") {
	        return {
	            code:   ins,
	            opcode: (ins >> POS_OP$1) & MASK1(SIZE_OP$1, 0),
	            A:      (ins >> POS_A$1)  & MASK1(SIZE_A$1,  0),
	            B:      (ins >> POS_B$1)  & MASK1(SIZE_B$1,  0),
	            C:      (ins >> POS_C$1)  & MASK1(SIZE_C$1,  0),
	            Bx:     (ins >> POS_Bx$1) & MASK1(SIZE_Bx$1, 0),
	            Ax:     (ins >> POS_Ax$1) & MASK1(SIZE_Ax$1, 0),
	            sBx:    ((ins >> POS_Bx$1) & MASK1(SIZE_Bx$1, 0)) - MAXARG_sBx$1
	        };
	    } else {
	        let i = ins.code;
	        ins.opcode = (i >> POS_OP$1) & MASK1(SIZE_OP$1, 0);
	        ins.A      = (i >> POS_A$1)  & MASK1(SIZE_A$1,  0);
	        ins.B      = (i >> POS_B$1)  & MASK1(SIZE_B$1,  0);
	        ins.C      = (i >> POS_C$1)  & MASK1(SIZE_C$1,  0);
	        ins.Bx     = (i >> POS_Bx$1) & MASK1(SIZE_Bx$1, 0);
	        ins.Ax     = (i >> POS_Ax$1) & MASK1(SIZE_Ax$1, 0);
	        ins.sBx    = ((i >> POS_Bx$1) & MASK1(SIZE_Bx$1, 0)) - MAXARG_sBx$1;
	        return ins;
	    }
	};

	const CREATE_ABC = function(o, a, b, c) {
	    return fullins(o << POS_OP$1 | a << POS_A$1 | b << POS_B$1 | c << POS_C$1);
	};

	const CREATE_ABx = function(o, a, bc) {
	    return fullins(o << POS_OP$1 | a << POS_A$1 | bc << POS_Bx$1);
	};

	const CREATE_Ax = function(o, a) {
	    return fullins(o << POS_OP$1 | a << POS_Ax$1);
	};

	/* number of list items to accumulate before a SETLIST instruction */
	const LFIELDS_PER_FLUSH$2 = 50;

	lopcodes$3.BITRK               = BITRK;
	lopcodes$3.CREATE_ABC          = CREATE_ABC;
	lopcodes$3.CREATE_ABx          = CREATE_ABx;
	lopcodes$3.CREATE_Ax           = CREATE_Ax;
	lopcodes$3.GET_OPCODE          = GET_OPCODE;
	lopcodes$3.GETARG_A            = GETARG_A;
	lopcodes$3.GETARG_B            = GETARG_B;
	lopcodes$3.GETARG_C            = GETARG_C;
	lopcodes$3.GETARG_Bx           = GETARG_Bx;
	lopcodes$3.GETARG_Ax           = GETARG_Ax;
	lopcodes$3.GETARG_sBx          = GETARG_sBx;
	lopcodes$3.INDEXK              = INDEXK$1;
	lopcodes$3.ISK                 = ISK$1;
	lopcodes$3.LFIELDS_PER_FLUSH   = LFIELDS_PER_FLUSH$2;
	lopcodes$3.MAXARG_A            = MAXARG_A;
	lopcodes$3.MAXARG_Ax           = MAXARG_Ax;
	lopcodes$3.MAXARG_B            = MAXARG_B;
	lopcodes$3.MAXARG_Bx           = MAXARG_Bx;
	lopcodes$3.MAXARG_C            = MAXARG_C;
	lopcodes$3.MAXARG_sBx          = MAXARG_sBx$1;
	lopcodes$3.MAXINDEXRK          = MAXINDEXRK;
	lopcodes$3.NO_REG              = NO_REG;
	lopcodes$3.OpArgK              = OpArgK;
	lopcodes$3.OpArgN              = OpArgN;
	lopcodes$3.OpArgR              = OpArgR;
	lopcodes$3.OpArgU              = OpArgU;
	lopcodes$3.OpCodes             = OpCodes;
	lopcodes$3.OpCodesI            = OpCodesI$1;
	lopcodes$3.POS_A               = POS_A$1;
	lopcodes$3.POS_Ax              = POS_Ax$1;
	lopcodes$3.POS_B               = POS_B$1;
	lopcodes$3.POS_Bx              = POS_Bx$1;
	lopcodes$3.POS_C               = POS_C$1;
	lopcodes$3.POS_OP              = POS_OP$1;
	lopcodes$3.RKASK               = RKASK;
	lopcodes$3.SETARG_A            = SETARG_A;
	lopcodes$3.SETARG_Ax           = SETARG_Ax;
	lopcodes$3.SETARG_B            = SETARG_B$1;
	lopcodes$3.SETARG_Bx           = SETARG_Bx;
	lopcodes$3.SETARG_C            = SETARG_C$1;
	lopcodes$3.SETARG_sBx          = SETARG_sBx;
	lopcodes$3.SET_OPCODE          = SET_OPCODE$1;
	lopcodes$3.SIZE_A              = SIZE_A$1;
	lopcodes$3.SIZE_Ax             = SIZE_Ax$1;
	lopcodes$3.SIZE_B              = SIZE_B$1;
	lopcodes$3.SIZE_Bx             = SIZE_Bx$1;
	lopcodes$3.SIZE_C              = SIZE_C$1;
	lopcodes$3.SIZE_OP             = SIZE_OP$1;
	lopcodes$3.fullins             = fullins;
	lopcodes$3.getBMode            = getBMode;
	lopcodes$3.getCMode            = getCMode;
	lopcodes$3.getOpMode           = getOpMode;
	lopcodes$3.iABC                = iABC;
	lopcodes$3.iABx                = iABx;
	lopcodes$3.iAsBx               = iAsBx;
	lopcodes$3.iAx                 = iAx;
	lopcodes$3.testAMode           = testAMode;
	lopcodes$3.testTMode           = testTMode;

	const {
	    LUA_MASKLINE: LUA_MASKLINE$3,
	    LUA_MASKCOUNT: LUA_MASKCOUNT$2,
	    LUA_MULTRET: LUA_MULTRET$7,
	    constant_types: {
	        LUA_TBOOLEAN: LUA_TBOOLEAN$a,
	        LUA_TLCF: LUA_TLCF$3,
	        LUA_TLIGHTUSERDATA: LUA_TLIGHTUSERDATA$5,
	        LUA_TLNGSTR: LUA_TLNGSTR$6,
	        LUA_TNIL: LUA_TNIL$h,
	        LUA_TNUMBER: LUA_TNUMBER$6,
	        LUA_TNUMFLT: LUA_TNUMFLT$5,
	        LUA_TNUMINT: LUA_TNUMINT$5,
	        LUA_TSHRSTR: LUA_TSHRSTR$4,
	        LUA_TTABLE: LUA_TTABLE$e,
	        LUA_TUSERDATA: LUA_TUSERDATA$5
	    },
	    to_luastring: to_luastring$m
	} = defs$2;
	const {
	    INDEXK,
	    ISK,
	    LFIELDS_PER_FLUSH: LFIELDS_PER_FLUSH$1,
	    OpCodesI: {
	        OP_ADD,
	        OP_BAND,
	        OP_BNOT,
	        OP_BOR,
	        OP_BXOR,
	        OP_CALL: OP_CALL$1,
	        OP_CLOSURE: OP_CLOSURE$1,
	        OP_CONCAT,
	        OP_DIV,
	        OP_EQ,
	        OP_EXTRAARG,
	        OP_FORLOOP: OP_FORLOOP$1,
	        OP_FORPREP: OP_FORPREP$1,
	        OP_GETTABLE,
	        OP_GETTABUP,
	        OP_GETUPVAL: OP_GETUPVAL$1,
	        OP_IDIV,
	        OP_JMP,
	        OP_LE,
	        OP_LEN,
	        OP_LOADBOOL,
	        OP_LOADK,
	        OP_LOADKX,
	        OP_LOADNIL,
	        OP_LT,
	        OP_MOD,
	        OP_MOVE: OP_MOVE$1,
	        OP_MUL,
	        OP_NEWTABLE: OP_NEWTABLE$1,
	        OP_NOT,
	        OP_POW,
	        OP_RETURN,
	        OP_SELF,
	        OP_SETLIST,
	        OP_SETTABLE: OP_SETTABLE$1,
	        OP_SETTABUP,
	        OP_SETUPVAL,
	        OP_SHL,
	        OP_SHR,
	        OP_SUB,
	        OP_TAILCALL: OP_TAILCALL$1,
	        OP_TEST,
	        OP_TESTSET,
	        OP_TFORCALL: OP_TFORCALL$1,
	        OP_TFORLOOP: OP_TFORLOOP$1,
	        OP_UNM,
	        OP_VARARG: OP_VARARG$1
	    }
	} = lopcodes$3;
	const {
	    LUA_MAXINTEGER: LUA_MAXINTEGER$2,
	    LUA_MININTEGER: LUA_MININTEGER$2,
	    lua_numbertointeger: lua_numbertointeger$1
	} = luaconf$1;
	const {
	    lua_assert: lua_assert$9,
	    luai_nummod: luai_nummod$1
	} = llimits;
	const lobject$a = lobject$c;
	const lfunc$5   = lfunc$6;
	const lstate$6  = lstate$8;
	const {
	    luaS_bless: luaS_bless$5,
	    luaS_eqlngstr: luaS_eqlngstr$1,
	    luaS_hashlongstr: luaS_hashlongstr$1
	} = lstring;
	const ldo$9     = ldo$a;
	const ltm$5     = ltm$6;
	const ltable$8  = ltable$9;
	const ldebug$6  = ldebug$8;

	/*
	** finish execution of an opcode interrupted by an yield
	*/
	const luaV_finishOp = function(L) {
	    let ci = L.ci;
	    let base = ci.l_base;
	    let inst = ci.l_code[ci.l_savedpc - 1];  /* interrupted instruction */
	    let op = inst.opcode;

	    switch (op) {  /* finish its execution */
	        case OP_ADD: case OP_SUB: case OP_MUL: case OP_DIV: case OP_IDIV:
	        case OP_BAND: case OP_BOR: case OP_BXOR: case OP_SHL: case OP_SHR:
	        case OP_MOD: case OP_POW:
	        case OP_UNM: case OP_BNOT: case OP_LEN:
	        case OP_GETTABUP: case OP_GETTABLE: case OP_SELF: {
	            lobject$a.setobjs2s(L, base + inst.A, L.top-1);
	            delete L.stack[--L.top];
	            break;
	        }
	        case OP_LE: case OP_LT: case OP_EQ: {
	            let res = !L.stack[L.top - 1].l_isfalse();
	            delete L.stack[--L.top];
	            if (ci.callstatus & lstate$6.CIST_LEQ) {  /* "<=" using "<" instead? */
	                lua_assert$9(op === OP_LE);
	                ci.callstatus ^= lstate$6.CIST_LEQ;  /* clear mark */
	                res = !res;  /* negate result */
	            }
	            lua_assert$9(ci.l_code[ci.l_savedpc].opcode === OP_JMP);
	            if (res !== (inst.A ? true : false))  /* condition failed? */
	                ci.l_savedpc++;  /* skip jump instruction */
	            break;
	        }
	        case OP_CONCAT: {
	            let top = L.top - 1;  /* top when 'luaT_trybinTM' was called */
	            let b = inst.B;  /* first element to concatenate */
	            let total = top - 1 - (base + b);  /* yet to concatenate */
	            lobject$a.setobjs2s(L, top - 2, top);  /* put TM result in proper position */
	            if (total > 1) {  /* are there elements to concat? */
	                L.top = top - 1;  /* top is one after last element (at top-2) */
	                luaV_concat(L, total);  /* concat them (may yield again) */
	            }
	            /* move final result to final position */
	            lobject$a.setobjs2s(L, ci.l_base + inst.A, L.top - 1);
	            ldo$9.adjust_top(L, ci.top);  /* restore top */
	            break;
	        }
	        case OP_TFORCALL$1: {
	            lua_assert$9(ci.l_code[ci.l_savedpc].opcode === OP_TFORLOOP$1);
	            ldo$9.adjust_top(L, ci.top);  /* correct top */
	            break;
	        }
	        case OP_CALL$1: {
	            if (inst.C - 1 >= 0)  /* nresults >= 0? */
	                ldo$9.adjust_top(L, ci.top);  /* adjust results */
	            break;
	        }
	    }
	};

	const RA = function(L, base, i) {
	    return base + i.A;
	};

	const RB = function(L, base, i) {
	    return base + i.B;
	};

	// const RC = function(L, base, i) {
	//     return base + i.C;
	// };

	const RKB = function(L, base, k, i) {
	    return ISK(i.B) ? k[INDEXK(i.B)] : L.stack[base + i.B];
	};

	const RKC = function(L, base, k, i) {
	    return ISK(i.C) ? k[INDEXK(i.C)] : L.stack[base + i.C];
	};

	const luaV_execute = function(L) {
	    let ci = L.ci;

	    ci.callstatus |= lstate$6.CIST_FRESH;
	    newframe:
	    for (;;) {
	        lua_assert$9(ci === L.ci);
	        let cl = ci.func.value;
	        let k = cl.p.k;
	        let base = ci.l_base;

	        let i = ci.l_code[ci.l_savedpc++];

	        if (L.hookmask & (LUA_MASKLINE$3 | LUA_MASKCOUNT$2)) {
	            ldebug$6.luaG_traceexec(L);
	        }

	        let ra = RA(L, base, i);
	        let opcode = i.opcode;

	        switch (opcode) {
	            case OP_MOVE$1: {
	                lobject$a.setobjs2s(L, ra, RB(L, base, i));
	                break;
	            }
	            case OP_LOADK: {
	                let konst = k[i.Bx];
	                lobject$a.setobj2s(L, ra, konst);
	                break;
	            }
	            case OP_LOADKX: {
	                lua_assert$9(ci.l_code[ci.l_savedpc].opcode === OP_EXTRAARG);
	                let konst = k[ci.l_code[ci.l_savedpc++].Ax];
	                lobject$a.setobj2s(L, ra, konst);
	                break;
	            }
	            case OP_LOADBOOL: {
	                L.stack[ra].setbvalue(i.B !== 0);

	                if (i.C !== 0)
	                    ci.l_savedpc++; /* skip next instruction (if C) */

	                break;
	            }
	            case OP_LOADNIL: {
	                for (let j = 0; j <= i.B; j++)
	                    L.stack[ra + j].setnilvalue();
	                break;
	            }
	            case OP_GETUPVAL$1: {
	                let b = i.B;
	                lobject$a.setobj2s(L, ra, cl.upvals[b]);
	                break;
	            }
	            case OP_GETTABUP: {
	                let upval = cl.upvals[i.B];
	                let rc = RKC(L, base, k, i);
	                luaV_gettable(L, upval, rc, ra);
	                break;
	            }
	            case OP_GETTABLE: {
	                let rb = L.stack[RB(L, base, i)];
	                let rc = RKC(L, base, k, i);
	                luaV_gettable(L, rb, rc, ra);
	                break;
	            }
	            case OP_SETTABUP: {
	                let upval = cl.upvals[i.A];
	                let rb = RKB(L, base, k, i);
	                let rc = RKC(L, base, k, i);
	                settable(L, upval, rb, rc);
	                break;
	            }
	            case OP_SETUPVAL: {
	                let uv = cl.upvals[i.B];
	                uv.setfrom(L.stack[ra]);
	                break;
	            }
	            case OP_SETTABLE$1: {
	                let table = L.stack[ra];
	                let key = RKB(L, base, k, i);
	                let v = RKC(L, base, k, i);

	                settable(L, table, key, v);
	                break;
	            }
	            case OP_NEWTABLE$1: {
	                L.stack[ra].sethvalue(ltable$8.luaH_new(L));
	                break;
	            }
	            case OP_SELF: {
	                let rb = RB(L, base, i);
	                let rc = RKC(L, base, k, i);
	                lobject$a.setobjs2s(L, ra + 1, rb);
	                luaV_gettable(L, L.stack[rb], rc, ra);
	                break;
	            }
	            case OP_ADD: {
	                let op1 = RKB(L, base, k, i);
	                let op2 = RKC(L, base, k, i);
	                let numberop1, numberop2;

	                if (op1.ttisinteger() && op2.ttisinteger()) {
	                    L.stack[ra].setivalue((op1.value + op2.value)|0);
	                } else if ((numberop1 = tonumber(op1)) !== false && (numberop2 = tonumber(op2)) !== false) {
	                    L.stack[ra].setfltvalue(numberop1 + numberop2);
	                } else {
	                    ltm$5.luaT_trybinTM(L, op1, op2, L.stack[ra], ltm$5.TMS.TM_ADD);
	                }
	                break;
	            }
	            case OP_SUB: {
	                let op1 = RKB(L, base, k, i);
	                let op2 = RKC(L, base, k, i);
	                let numberop1, numberop2;

	                if (op1.ttisinteger() && op2.ttisinteger()) {
	                    L.stack[ra].setivalue((op1.value - op2.value)|0);
	                } else if ((numberop1 = tonumber(op1)) !== false && (numberop2 = tonumber(op2)) !== false) {
	                    L.stack[ra].setfltvalue(numberop1 - numberop2);
	                } else {
	                    ltm$5.luaT_trybinTM(L, op1, op2, L.stack[ra], ltm$5.TMS.TM_SUB);
	                }
	                break;
	            }
	            case OP_MUL: {
	                let op1 = RKB(L, base, k, i);
	                let op2 = RKC(L, base, k, i);
	                let numberop1, numberop2;

	                if (op1.ttisinteger() && op2.ttisinteger()) {
	                    L.stack[ra].setivalue(luaV_imul(op1.value, op2.value));
	                } else if ((numberop1 = tonumber(op1)) !== false && (numberop2 = tonumber(op2)) !== false) {
	                    L.stack[ra].setfltvalue(numberop1 * numberop2);
	                } else {
	                    ltm$5.luaT_trybinTM(L, op1, op2, L.stack[ra], ltm$5.TMS.TM_MUL);
	                }
	                break;
	            }
	            case OP_MOD: {
	                let op1 = RKB(L, base, k, i);
	                let op2 = RKC(L, base, k, i);
	                let numberop1, numberop2;

	                if (op1.ttisinteger() && op2.ttisinteger()) {
	                    L.stack[ra].setivalue(luaV_mod(L, op1.value, op2.value));
	                } else if ((numberop1 = tonumber(op1)) !== false && (numberop2 = tonumber(op2)) !== false) {
	                    L.stack[ra].setfltvalue(luai_nummod$1(L, numberop1, numberop2));
	                } else {
	                    ltm$5.luaT_trybinTM(L, op1, op2, L.stack[ra], ltm$5.TMS.TM_MOD);
	                }
	                break;
	            }
	            case OP_POW: {
	                let op1 = RKB(L, base, k, i);
	                let op2 = RKC(L, base, k, i);
	                let numberop1, numberop2;

	                if ((numberop1 = tonumber(op1)) !== false && (numberop2 = tonumber(op2)) !== false) {
	                    L.stack[ra].setfltvalue(Math.pow(numberop1, numberop2));
	                } else {
	                    ltm$5.luaT_trybinTM(L, op1, op2, L.stack[ra], ltm$5.TMS.TM_POW);
	                }
	                break;
	            }
	            case OP_DIV: {
	                let op1 = RKB(L, base, k, i);
	                let op2 = RKC(L, base, k, i);
	                let numberop1, numberop2;

	                if ((numberop1 = tonumber(op1)) !== false && (numberop2 = tonumber(op2)) !== false) {
	                    L.stack[ra].setfltvalue(numberop1 / numberop2);
	                } else {
	                    ltm$5.luaT_trybinTM(L, op1, op2, L.stack[ra], ltm$5.TMS.TM_DIV);
	                }
	                break;
	            }
	            case OP_IDIV: {
	                let op1 = RKB(L, base, k, i);
	                let op2 = RKC(L, base, k, i);
	                let numberop1, numberop2;

	                if (op1.ttisinteger() && op2.ttisinteger()) {
	                    L.stack[ra].setivalue(luaV_div(L, op1.value, op2.value));
	                } else if ((numberop1 = tonumber(op1)) !== false && (numberop2 = tonumber(op2)) !== false) {
	                    L.stack[ra].setfltvalue(Math.floor(numberop1 / numberop2));
	                } else {
	                    ltm$5.luaT_trybinTM(L, op1, op2, L.stack[ra], ltm$5.TMS.TM_IDIV);
	                }
	                break;
	            }
	            case OP_BAND: {
	                let op1 = RKB(L, base, k, i);
	                let op2 = RKC(L, base, k, i);
	                let numberop1, numberop2;

	                if ((numberop1 = tointeger(op1)) !== false && (numberop2 = tointeger(op2)) !== false) {
	                    L.stack[ra].setivalue(numberop1 & numberop2);
	                } else {
	                    ltm$5.luaT_trybinTM(L, op1, op2, L.stack[ra], ltm$5.TMS.TM_BAND);
	                }
	                break;
	            }
	            case OP_BOR: {
	                let op1 = RKB(L, base, k, i);
	                let op2 = RKC(L, base, k, i);
	                let numberop1, numberop2;

	                if ((numberop1 = tointeger(op1)) !== false && (numberop2 = tointeger(op2)) !== false) {
	                    L.stack[ra].setivalue(numberop1 | numberop2);
	                } else {
	                    ltm$5.luaT_trybinTM(L, op1, op2, L.stack[ra], ltm$5.TMS.TM_BOR);
	                }
	                break;
	            }
	            case OP_BXOR: {
	                let op1 = RKB(L, base, k, i);
	                let op2 = RKC(L, base, k, i);
	                let numberop1, numberop2;

	                if ((numberop1 = tointeger(op1)) !== false && (numberop2 = tointeger(op2)) !== false) {
	                    L.stack[ra].setivalue(numberop1 ^ numberop2);
	                } else {
	                    ltm$5.luaT_trybinTM(L, op1, op2, L.stack[ra], ltm$5.TMS.TM_BXOR);
	                }
	                break;
	            }
	            case OP_SHL: {
	                let op1 = RKB(L, base, k, i);
	                let op2 = RKC(L, base, k, i);
	                let numberop1, numberop2;

	                if ((numberop1 = tointeger(op1)) !== false && (numberop2 = tointeger(op2)) !== false) {
	                    L.stack[ra].setivalue(luaV_shiftl(numberop1, numberop2));
	                } else {
	                    ltm$5.luaT_trybinTM(L, op1, op2, L.stack[ra], ltm$5.TMS.TM_SHL);
	                }
	                break;
	            }
	            case OP_SHR: {
	                let op1 = RKB(L, base, k, i);
	                let op2 = RKC(L, base, k, i);
	                let numberop1, numberop2;

	                if ((numberop1 = tointeger(op1)) !== false && (numberop2 = tointeger(op2)) !== false) {
	                    L.stack[ra].setivalue(luaV_shiftl(numberop1, -numberop2));
	                } else {
	                    ltm$5.luaT_trybinTM(L, op1, op2, L.stack[ra], ltm$5.TMS.TM_SHR);
	                }
	                break;
	            }
	            case OP_UNM: {
	                let op = L.stack[RB(L, base, i)];
	                let numberop;

	                if (op.ttisinteger()) {
	                    L.stack[ra].setivalue((-op.value)|0);
	                } else if ((numberop = tonumber(op)) !== false) {
	                    L.stack[ra].setfltvalue(-numberop);
	                } else {
	                    ltm$5.luaT_trybinTM(L, op, op, L.stack[ra], ltm$5.TMS.TM_UNM);
	                }
	                break;
	            }
	            case OP_BNOT: {
	                let op = L.stack[RB(L, base, i)];

	                if (op.ttisinteger()) {
	                    L.stack[ra].setivalue(~op.value);
	                } else {
	                    ltm$5.luaT_trybinTM(L, op, op, L.stack[ra], ltm$5.TMS.TM_BNOT);
	                }
	                break;
	            }
	            case OP_NOT: {
	                let op = L.stack[RB(L, base, i)];
	                L.stack[ra].setbvalue(op.l_isfalse());
	                break;
	            }
	            case OP_LEN: {
	                luaV_objlen(L, L.stack[ra], L.stack[RB(L, base, i)]);
	                break;
	            }
	            case OP_CONCAT: {
	                let b = i.B;
	                let c = i.C;
	                L.top = base + c + 1; /* mark the end of concat operands */
	                luaV_concat(L, c - b + 1);
	                let rb = base + b;
	                lobject$a.setobjs2s(L, ra, rb);
	                ldo$9.adjust_top(L, ci.top); /* restore top */
	                break;
	            }
	            case OP_JMP: {
	                dojump(L, ci, i, 0);
	                break;
	            }
	            case OP_EQ: {
	                if (luaV_equalobj(L, RKB(L, base, k, i), RKC(L, base, k, i)) !== i.A)
	                    ci.l_savedpc++;
	                else
	                    donextjump(L, ci);
	                break;
	            }
	            case OP_LT: {
	                if (luaV_lessthan(L, RKB(L, base, k, i), RKC(L, base, k, i)) !== i.A)
	                    ci.l_savedpc++;
	                else
	                    donextjump(L, ci);
	                break;
	            }
	            case OP_LE: {
	                if (luaV_lessequal(L, RKB(L, base, k, i), RKC(L, base, k, i)) !== i.A)
	                    ci.l_savedpc++;
	                else
	                    donextjump(L, ci);
	                break;
	            }
	            case OP_TEST: {
	                if (i.C ? L.stack[ra].l_isfalse() : !L.stack[ra].l_isfalse())
	                    ci.l_savedpc++;
	                else
	                    donextjump(L, ci);
	                break;
	            }
	            case OP_TESTSET: {
	                let rbIdx = RB(L, base, i);
	                let rb = L.stack[rbIdx];
	                if (i.C ? rb.l_isfalse() : !rb.l_isfalse())
	                    ci.l_savedpc++;
	                else {
	                    lobject$a.setobjs2s(L, ra, rbIdx);
	                    donextjump(L, ci);
	                }
	                break;
	            }
	            case OP_CALL$1: {
	                let b = i.B;
	                let nresults = i.C - 1;
	                if (b !== 0) ldo$9.adjust_top(L, ra+b);  /* else previous instruction set top */
	                if (ldo$9.luaD_precall(L, ra, nresults)) {
	                    if (nresults >= 0)
	                        ldo$9.adjust_top(L, ci.top);  /* adjust results */
	                } else {
	                    ci = L.ci;
	                    continue newframe;
	                }

	                break;
	            }
	            case OP_TAILCALL$1: {
	                let b = i.B;
	                if (b !== 0) ldo$9.adjust_top(L, ra+b);  /* else previous instruction set top */
	                if (ldo$9.luaD_precall(L, ra, LUA_MULTRET$7)) ; else {
	                    /* tail call: put called frame (n) in place of caller one (o) */
	                    let nci = L.ci;
	                    let oci = nci.previous;
	                    let nfunc = nci.func;
	                    let nfuncOff = nci.funcOff;
	                    let ofuncOff = oci.funcOff;
	                    let lim = nci.l_base + nfunc.value.p.numparams;
	                    if (cl.p.p.length > 0) lfunc$5.luaF_close(L, oci.l_base);
	                    for (let aux = 0; nfuncOff + aux < lim; aux++)
	                        lobject$a.setobjs2s(L, ofuncOff + aux, nfuncOff + aux);
	                    oci.l_base = ofuncOff + (nci.l_base - nfuncOff);
	                    oci.top = ofuncOff + (L.top - nfuncOff);
	                    ldo$9.adjust_top(L, oci.top);  /* correct top */
	                    oci.l_code = nci.l_code;
	                    oci.l_savedpc = nci.l_savedpc;
	                    oci.callstatus |= lstate$6.CIST_TAIL;
	                    oci.next = null;
	                    ci = L.ci = oci;

	                    lua_assert$9(L.top === oci.l_base + L.stack[ofuncOff].value.p.maxstacksize);

	                    continue newframe;
	                }
	                break;
	            }
	            case OP_RETURN: {
	                if (cl.p.p.length > 0) lfunc$5.luaF_close(L, base);
	                let b = ldo$9.luaD_poscall(L, ci, ra, (i.B !== 0 ? i.B - 1 : L.top - ra));

	                if (ci.callstatus & lstate$6.CIST_FRESH)
	                    return; /* external invocation: return */
	                /* invocation via reentry: continue execution */
	                ci = L.ci;
	                if (b) ldo$9.adjust_top(L, ci.top);
	                lua_assert$9(ci.callstatus & lstate$6.CIST_LUA);
	                lua_assert$9(ci.l_code[ci.l_savedpc - 1].opcode === OP_CALL$1);
	                continue newframe;
	            }
	            case OP_FORLOOP$1: {
	                if (L.stack[ra].ttisinteger()) { /* integer loop? */
	                    let step = L.stack[ra + 2].value;
	                    let idx = (L.stack[ra].value + step)|0;
	                    let limit = L.stack[ra + 1].value;

	                    if (0 < step ? idx <= limit : limit <= idx) {
	                        ci.l_savedpc += i.sBx;
	                        L.stack[ra].chgivalue(idx);  /* update internal index... */
	                        L.stack[ra + 3].setivalue(idx);
	                    }
	                } else { /* floating loop */
	                    let step = L.stack[ra + 2].value;
	                    let idx = L.stack[ra].value + step;
	                    let limit = L.stack[ra + 1].value;

	                    if (0 < step ? idx <= limit : limit <= idx) {
	                        ci.l_savedpc += i.sBx;
	                        L.stack[ra].chgfltvalue(idx);  /* update internal index... */
	                        L.stack[ra + 3].setfltvalue(idx);
	                    }
	                }
	                break;
	            }
	            case OP_FORPREP$1: {
	                let init = L.stack[ra];
	                let plimit = L.stack[ra + 1];
	                let pstep = L.stack[ra + 2];
	                let forlim;

	                if (init.ttisinteger() && pstep.ttisinteger() && (forlim = forlimit(plimit, pstep.value))) {
	                    /* all values are integer */
	                    let initv = forlim.stopnow ? 0 : init.value;
	                    plimit.value = forlim.ilimit;
	                    init.value = (initv - pstep.value)|0;
	                } else { /* try making all values floats */
	                    let nlimit, nstep, ninit;
	                    if ((nlimit = tonumber(plimit)) === false)
	                        ldebug$6.luaG_runerror(L, to_luastring$m("'for' limit must be a number", true));
	                    L.stack[ra + 1].setfltvalue(nlimit);
	                    if ((nstep = tonumber(pstep)) === false)
	                        ldebug$6.luaG_runerror(L, to_luastring$m("'for' step must be a number", true));
	                    L.stack[ra + 2].setfltvalue(nstep);
	                    if ((ninit = tonumber(init)) === false)
	                        ldebug$6.luaG_runerror(L, to_luastring$m("'for' initial value must be a number", true));
	                    L.stack[ra].setfltvalue(ninit - nstep);
	                }

	                ci.l_savedpc += i.sBx;
	                break;
	            }
	            case OP_TFORCALL$1: {
	                let cb = ra + 3; /* call base */
	                lobject$a.setobjs2s(L, cb+2, ra+2);
	                lobject$a.setobjs2s(L, cb+1, ra+1);
	                lobject$a.setobjs2s(L, cb, ra);
	                ldo$9.adjust_top(L, cb+3);  /* func. + 2 args (state and index) */
	                ldo$9.luaD_call(L, cb, i.C);
	                ldo$9.adjust_top(L, ci.top);
	                /* go straight to OP_TFORLOOP */
	                i = ci.l_code[ci.l_savedpc++];
	                ra = RA(L, base, i);
	                lua_assert$9(i.opcode === OP_TFORLOOP$1);
	            }
	            /* fall through */
	            case OP_TFORLOOP$1: {
	                if (!L.stack[ra + 1].ttisnil()) { /* continue loop? */
	                    lobject$a.setobjs2s(L, ra, ra + 1); /* save control variable */
	                    ci.l_savedpc += i.sBx; /* jump back */
	                }
	                break;
	            }
	            case OP_SETLIST: {
	                let n = i.B;
	                let c = i.C;

	                if (n === 0) n = L.top - ra - 1;

	                if (c === 0) {
	                    lua_assert$9(ci.l_code[ci.l_savedpc].opcode === OP_EXTRAARG);
	                    c = ci.l_code[ci.l_savedpc++].Ax;
	                }

	                let h = L.stack[ra].value;
	                let last = ((c - 1) * LFIELDS_PER_FLUSH$1) + n;

	                for (; n > 0; n--) {
	                    ltable$8.luaH_setint(h, last--, L.stack[ra + n]);
	                }
	                ldo$9.adjust_top(L, ci.top);  /* correct top (in case of previous open call) */
	                break;
	            }
	            case OP_CLOSURE$1: {
	                let p = cl.p.p[i.Bx];
	                let ncl = getcached(p, cl.upvals, L.stack, base);  /* cached closure */
	                if (ncl === null)  /* no match? */
	                    pushclosure(L, p, cl.upvals, base, ra);  /* create a new one */
	                else
	                    L.stack[ra].setclLvalue(ncl);
	                break;
	            }
	            case OP_VARARG$1: {
	                let b = i.B - 1;
	                let n = base - ci.funcOff - cl.p.numparams - 1;
	                let j;

	                if (n < 0) /* less arguments than parameters? */
	                    n = 0; /* no vararg arguments */

	                if (b < 0) {
	                    b = n;  /* get all var. arguments */
	                    ldo$9.luaD_checkstack(L, n);
	                    ldo$9.adjust_top(L, ra + n);
	                }

	                for (j = 0; j < b && j < n; j++)
	                    lobject$a.setobjs2s(L, ra + j, base - n + j);

	                for (; j < b; j++) /* complete required results with nil */
	                    L.stack[ra + j].setnilvalue();
	                break;
	            }
	            case OP_EXTRAARG: {
	                throw Error("invalid opcode");
	            }
	        }
	    }
	};

	const dojump = function(L, ci, i, e) {
	    let a = i.A;
	    if (a !== 0) lfunc$5.luaF_close(L, ci.l_base + a - 1);
	    ci.l_savedpc += i.sBx + e;
	};

	const donextjump = function(L, ci) {
	    dojump(L, ci, ci.l_code[ci.l_savedpc], 1);
	};


	const luaV_lessthan = function(L, l, r) {
	    if (l.ttisnumber() && r.ttisnumber())
	        return LTnum(l, r) ? 1 : 0;
	    else if (l.ttisstring() && r.ttisstring())
	        return l_strcmp(l.tsvalue(), r.tsvalue()) < 0 ? 1 : 0;
	    else {
	        let res = ltm$5.luaT_callorderTM(L, l, r, ltm$5.TMS.TM_LT);
	        if (res === null)
	            ldebug$6.luaG_ordererror(L, l, r);
	        return res ? 1 : 0;
	    }
	};

	const luaV_lessequal = function(L, l, r) {
	    let res;

	    if (l.ttisnumber() && r.ttisnumber())
	        return LEnum(l, r) ? 1 : 0;
	    else if (l.ttisstring() && r.ttisstring())
	        return l_strcmp(l.tsvalue(), r.tsvalue()) <= 0 ? 1 : 0;
	    else {
	        res = ltm$5.luaT_callorderTM(L, l, r, ltm$5.TMS.TM_LE);
	        if (res !== null)
	            return res ? 1 : 0;
	    }
	    /* try 'lt': */
	    L.ci.callstatus |= lstate$6.CIST_LEQ; /* mark it is doing 'lt' for 'le' */
	    res = ltm$5.luaT_callorderTM(L, r, l, ltm$5.TMS.TM_LT);
	    L.ci.callstatus ^= lstate$6.CIST_LEQ; /* clear mark */
	    if (res === null)
	        ldebug$6.luaG_ordererror(L, l, r);
	    return res ? 0 : 1; /* result is negated */
	};

	const luaV_equalobj = function(L, t1, t2) {
	    if (t1.ttype() !== t2.ttype()) { /* not the same variant? */
	        if (t1.ttnov() !== t2.ttnov() || t1.ttnov() !== LUA_TNUMBER$6)
	            return 0; /* only numbers can be equal with different variants */
	        else { /* two numbers with different variants */
	            /* OPTIMIZATION: instead of calling luaV_tointeger we can just let JS do the comparison */
	            return (t1.value === t2.value) ? 1 : 0;
	        }
	    }

	    let tm;

	    /* values have same type and same variant */
	    switch(t1.ttype()) {
	        case LUA_TNIL$h:
	            return 1;
	        case LUA_TBOOLEAN$a:
	            return t1.value == t2.value ? 1 : 0; // Might be 1 or true
	        case LUA_TLIGHTUSERDATA$5:
	        case LUA_TNUMINT$5:
	        case LUA_TNUMFLT$5:
	        case LUA_TLCF$3:
	            return t1.value === t2.value ? 1 : 0;
	        case LUA_TSHRSTR$4:
	        case LUA_TLNGSTR$6: {
	            return luaS_eqlngstr$1(t1.tsvalue(), t2.tsvalue()) ? 1 : 0;
	        }
	        case LUA_TUSERDATA$5:
	        case LUA_TTABLE$e:
	            if (t1.value === t2.value) return 1;
	            else if (L === null) return 0;

	            tm = ltm$5.fasttm(L, t1.value.metatable, ltm$5.TMS.TM_EQ);
	            if (tm === null)
	                tm = ltm$5.fasttm(L, t2.value.metatable, ltm$5.TMS.TM_EQ);
	            break;
	        default:
	            return t1.value === t2.value ? 1 : 0;
	    }

	    if (tm === null) /* no TM? */
	        return 0;

	    let tv = new lobject$a.TValue(); /* doesn't use the stack */
	    ltm$5.luaT_callTM(L, tm, t1, t2, tv, 1);
	    return tv.l_isfalse() ? 0 : 1;
	};

	const luaV_rawequalobj = function(t1, t2) {
	    return luaV_equalobj(null, t1, t2);
	};

	const forlimit = function(obj, step) {
	    let stopnow = false;
	    let ilimit = luaV_tointeger(obj, step < 0 ? 2 : 1);
	    if (ilimit === false) {
	        let n = tonumber(obj);
	        if (n === false)
	            return false;

	        if (0 < n) {
	            ilimit = LUA_MAXINTEGER$2;
	            if (step < 0) stopnow = true;
	        } else {
	            ilimit = LUA_MININTEGER$2;
	            if (step >= 0) stopnow = true;
	        }
	    }

	    return {
	        stopnow: stopnow,
	        ilimit: ilimit
	    };
	};

	/*
	** try to convert a value to an integer, rounding according to 'mode':
	** mode === 0: accepts only integral values
	** mode === 1: takes the floor of the number
	** mode === 2: takes the ceil of the number
	*/
	const luaV_tointeger = function(obj, mode) {
	    if (obj.ttisfloat()) {
	        let n = obj.value;
	        let f = Math.floor(n);

	        if (n !== f) { /* not an integral value? */
	            if (mode === 0)
	                return false;  /* fails if mode demands integral value */
	            else if (mode > 1)  /* needs ceil? */
	                f += 1;  /* convert floor to ceil (remember: n !== f) */
	        }

	        return lua_numbertointeger$1(f);
	    } else if (obj.ttisinteger()) {
	        return obj.value;
	    } else if (cvt2num(obj)) {
	        let v = new lobject$a.TValue();
	        if (lobject$a.luaO_str2num(obj.svalue(), v) === (obj.vslen() + 1))
	            return luaV_tointeger(v, mode);
	    }

	    return false;
	};

	const tointeger = function(o) {
	    return o.ttisinteger() ? o.value : luaV_tointeger(o, 0);
	};

	const tonumber = function(o) {
	    if (o.ttnov() === LUA_TNUMBER$6)
	        return o.value;

	    if (cvt2num(o)) {  /* string convertible to number? */
	        let v = new lobject$a.TValue();
	        if (lobject$a.luaO_str2num(o.svalue(), v) === (o.vslen() + 1))
	            return v.value;
	    }

	    return false;
	};

	/*
	** Return 'l < r', for numbers.
	** As fengari uses javascript numbers for both floats and integers and has
	** correct semantics, we can just compare values.
	*/
	const LTnum = function(l, r) {
	    return l.value < r.value;
	};

	/*
	** Return 'l <= r', for numbers.
	*/
	const LEnum = function(l, r) {
	    return l.value <= r.value;
	};

	/*
	** Compare two strings 'ls' x 'rs', returning an integer smaller-equal-
	** -larger than zero if 'ls' is smaller-equal-larger than 'rs'.
	*/
	const l_strcmp = function(ls, rs) {
	    let l = luaS_hashlongstr$1(ls);
	    let r = luaS_hashlongstr$1(rs);
	    /* In fengari we assume string hash has same collation as byte values */
	    if (l === r)
	        return 0;
	    else if (l < r)
	        return -1;
	    else
	        return 1;
	};

	/*
	** Main operation 'ra' = #rb'.
	*/
	const luaV_objlen = function(L, ra, rb) {
	    let tm;
	    switch(rb.ttype()) {
	        case LUA_TTABLE$e: {
	            let h = rb.value;
	            tm = ltm$5.fasttm(L, h.metatable, ltm$5.TMS.TM_LEN);
	            if (tm !== null) break; /* metamethod? break switch to call it */
	            ra.setivalue(ltable$8.luaH_getn(h)); /* else primitive len */
	            return;
	        }
	        case LUA_TSHRSTR$4:
	        case LUA_TLNGSTR$6:
	            ra.setivalue(rb.vslen());
	            return;
	        default: {
	            tm = ltm$5.luaT_gettmbyobj(L, rb, ltm$5.TMS.TM_LEN);
	            if (tm.ttisnil())
	                ldebug$6.luaG_typeerror(L, rb, to_luastring$m("get length of", true));
	            break;
	        }
	    }

	    ltm$5.luaT_callTM(L, tm, rb, rb, ra, 1);
	};

	/* Shim taken from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/imul */
	const luaV_imul = Math.imul || function(a, b) {
	    let aHi = (a >>> 16) & 0xffff;
	    let aLo = a & 0xffff;
	    let bHi = (b >>> 16) & 0xffff;
	    let bLo = b & 0xffff;
	    /*
	    ** the shift by 0 fixes the sign on the high part
	    ** the final |0 converts the unsigned value into a signed value
	    */
	    return ((aLo * bLo) + (((aHi * bLo + aLo * bHi) << 16) >>> 0) | 0);
	};

	const luaV_div = function(L, m, n) {
	    if (n === 0)
	        ldebug$6.luaG_runerror(L, to_luastring$m("attempt to divide by zero"));
	    return Math.floor(m / n)|0;
	};

	// % semantic on negative numbers is different in js
	const luaV_mod = function(L, m, n) {
	    if (n === 0)
	        ldebug$6.luaG_runerror(L, to_luastring$m("attempt to perform 'n%%0'"));
	    return (m - Math.floor(m / n) * n)|0;
	};

	const NBITS = 32;

	const luaV_shiftl = function(x, y) {
	    if (y < 0) {  /* shift right? */
	        if (y <= -NBITS) return 0;
	        else return x >>> -y;
	    }
	    else {  /* shift left */
	        if (y >= NBITS) return 0;
	        else return x << y;
	    }
	};

	/*
	** check whether cached closure in prototype 'p' may be reused, that is,
	** whether there is a cached closure with the same upvalues needed by
	** new closure to be created.
	*/
	const getcached = function(p, encup, stack, base) {
	    let c = p.cache;
	    if (c !== null) {  /* is there a cached closure? */
	        let uv = p.upvalues;
	        let nup = uv.length;
	        for (let i = 0; i < nup; i++) {  /* check whether it has right upvalues */
	            let v = uv[i].instack ? stack[base + uv[i].idx] : encup[uv[i].idx];
	            if (c.upvals[i] !== v)
	                return null;  /* wrong upvalue; cannot reuse closure */
	        }
	    }
	    return c;  /* return cached closure (or NULL if no cached closure) */
	};

	/*
	** create a new Lua closure, push it in the stack, and initialize
	** its upvalues.
	*/
	const pushclosure = function(L, p, encup, base, ra) {
	    let nup = p.upvalues.length;
	    let uv = p.upvalues;
	    let ncl = new lobject$a.LClosure(L, nup);
	    ncl.p = p;
	    L.stack[ra].setclLvalue(ncl);
	    for (let i = 0; i < nup; i++) {
	        if (uv[i].instack)
	            ncl.upvals[i] = lfunc$5.luaF_findupval(L, base + uv[i].idx);
	        else
	            ncl.upvals[i] = encup[uv[i].idx];
	    }
	    p.cache = ncl;  /* save it on cache for reuse */
	};

	const cvt2str = function(o) {
	    return o.ttisnumber();
	};

	const cvt2num = function(o) {
	    return o.ttisstring();
	};

	const tostring$1 = function(L, i) {
	    let o = L.stack[i];

	    if (o.ttisstring()) return true;

	    if (cvt2str(o)) {
	        lobject$a.luaO_tostring(L, o);
	        return true;
	    }

	    return false;
	};

	const isemptystr = function(o) {
	    return o.ttisstring() && o.vslen() === 0;
	};

	/* copy strings in stack from top - n up to top - 1 to buffer */
	const copy2buff = function(L, top, n, buff) {
	    let tl = 0;  /* size already copied */
	    do {
	        let tv = L.stack[top-n];
	        let l = tv.vslen();  /* length of string being copied */
	        let s = tv.svalue();
	        buff.set(s, tl);
	        tl += l;
	    } while (--n > 0);
	};

	/*
	** Main operation for concatenation: concat 'total' values in the stack,
	** from 'L->top - total' up to 'L->top - 1'.
	*/
	const luaV_concat = function(L, total) {
	    lua_assert$9(total >= 2);
	    do {
	        let top = L.top;
	        let n = 2; /* number of elements handled in this pass (at least 2) */

	        if (!(L.stack[top-2].ttisstring() || cvt2str(L.stack[top-2])) || !tostring$1(L, top - 1)) {
	            ltm$5.luaT_trybinTM(L, L.stack[top-2], L.stack[top-1], L.stack[top-2], ltm$5.TMS.TM_CONCAT);
	        } else if (isemptystr(L.stack[top-1])) {
	            tostring$1(L, top - 2);
	        } else if (isemptystr(L.stack[top-2])) {
	            lobject$a.setobjs2s(L, top - 2, top - 1);
	        } else {
	            /* at least two non-empty string values; get as many as possible */
	            let tl = L.stack[top-1].vslen();
	            /* collect total length and number of strings */
	            for (n = 1; n < total && tostring$1(L, top - n - 1); n++) {
	                let l = L.stack[top - n - 1].vslen();
	                tl += l;
	            }
	            let buff = new Uint8Array(tl);
	            copy2buff(L, top, n, buff);
	            let ts = luaS_bless$5(L, buff);
	            lobject$a.setsvalue2s(L, top - n, ts);
	        }
	        total -= n - 1; /* got 'n' strings to create 1 new */
	        /* popped 'n' strings and pushed one */
	        for (; L.top > top-(n-1);)
	            delete L.stack[--L.top];
	    } while (total > 1); /* repeat until only 1 result left */
	};

	const MAXTAGLOOP = 2000;

	const luaV_gettable = function(L, t, key, ra) {
	    for (let loop = 0; loop < MAXTAGLOOP; loop++) {
	        let tm;

	        if (!t.ttistable()) {
	            tm = ltm$5.luaT_gettmbyobj(L, t, ltm$5.TMS.TM_INDEX);
	            if (tm.ttisnil())
	                ldebug$6.luaG_typeerror(L, t, to_luastring$m('index', true)); /* no metamethod */
	            /* else will try the metamethod */
	        } else {
	            let slot = ltable$8.luaH_get(L, t.value, key);
	            if (!slot.ttisnil()) {
	                lobject$a.setobj2s(L, ra, slot);
	                return;
	            } else { /* 't' is a table */
	                tm = ltm$5.fasttm(L, t.value.metatable, ltm$5.TMS.TM_INDEX);  /* table's metamethod */
	                if (tm === null) { /* no metamethod? */
	                    L.stack[ra].setnilvalue(); /* result is nil */
	                    return;
	                }
	            }
	            /* else will try the metamethod */
	        }
	        if (tm.ttisfunction()) { /* is metamethod a function? */
	            ltm$5.luaT_callTM(L, tm, t, key, L.stack[ra], 1); /* call it */
	            return;
	        }
	        t = tm;  /* else try to access 'tm[key]' */
	    }

	    ldebug$6.luaG_runerror(L, to_luastring$m("'__index' chain too long; possible loop", true));
	};

	const settable = function(L, t, key, val) {
	    for (let loop = 0; loop < MAXTAGLOOP; loop++) {
	        let tm;
	        if (t.ttistable()) {
	            let h = t.value; /* save 't' table */
	            let slot = ltable$8.luaH_get(L, h, key);
	            if (!slot.ttisnil() || (tm = ltm$5.fasttm(L, h.metatable, ltm$5.TMS.TM_NEWINDEX)) === null) {
	                ltable$8.luaH_setfrom(L, h, key, val);
	                ltable$8.invalidateTMcache(h);
	                return;
	            }
	            /* else will try the metamethod */
	        } else { /* not a table; check metamethod */
	            if ((tm = ltm$5.luaT_gettmbyobj(L, t, ltm$5.TMS.TM_NEWINDEX)).ttisnil())
	                ldebug$6.luaG_typeerror(L, t, to_luastring$m('index', true));
	        }
	        /* try the metamethod */
	        if (tm.ttisfunction()) {
	            ltm$5.luaT_callTM(L, tm, t, key, val, 0);
	            return;
	        }
	        t = tm;  /* else repeat assignment over 'tm' */
	    }

	    ldebug$6.luaG_runerror(L, to_luastring$m("'__newindex' chain too long; possible loop", true));
	};


	lvm$6.cvt2str          = cvt2str;
	lvm$6.cvt2num          = cvt2num;
	lvm$6.luaV_gettable    = luaV_gettable;
	lvm$6.luaV_concat      = luaV_concat;
	lvm$6.luaV_div         = luaV_div;
	lvm$6.luaV_equalobj    = luaV_equalobj;
	lvm$6.luaV_execute     = luaV_execute;
	lvm$6.luaV_finishOp    = luaV_finishOp;
	lvm$6.luaV_imul        = luaV_imul;
	lvm$6.luaV_lessequal   = luaV_lessequal;
	lvm$6.luaV_lessthan    = luaV_lessthan;
	lvm$6.luaV_mod         = luaV_mod;
	lvm$6.luaV_objlen      = luaV_objlen;
	lvm$6.luaV_rawequalobj = luaV_rawequalobj;
	lvm$6.luaV_shiftl      = luaV_shiftl;
	lvm$6.luaV_tointeger   = luaV_tointeger;
	lvm$6.settable         = settable;
	lvm$6.tointeger        = tointeger;
	lvm$6.tonumber         = tonumber;

	const {
	    constant_types: {
	        LUA_TTABLE: LUA_TTABLE$d,
	        LUA_TUSERDATA: LUA_TUSERDATA$4
	    },
	    to_luastring: to_luastring$l
	} = defs$2;
	const { lua_assert: lua_assert$8 } = llimits;
	const lobject$9 = lobject$c;
	const ldo$8     = ldo$a;
	const lstate$5  = lstate$8;
	const {
	    luaS_bless: luaS_bless$4,
	    luaS_new: luaS_new$4
	} = lstring;
	const ltable$7  = ltable$9;
	const ldebug$5  = ldebug$8;
	const lvm$5     = lvm$6;

	const luaT_typenames_ = [
	    "no value",
	    "nil",
	    "boolean",
	    "userdata",
	    "number",
	    "string",
	    "table",
	    "function",
	    "userdata",
	    "thread",
	    "proto" /* this last case is used for tests only */
	].map(e => to_luastring$l(e));

	const ttypename = function(t) {
	    return luaT_typenames_[t + 1];
	};


	/*
	* WARNING: if you change the order of this enumeration,
	* grep "ORDER TM" and "ORDER OP"
	*/
	const TMS = {
	    TM_INDEX:    0,
	    TM_NEWINDEX: 1,
	    TM_GC:       2,
	    TM_MODE:     3,
	    TM_LEN:      4,
	    TM_EQ:       5,  /* last tag method with fast access */
	    TM_ADD:      6,
	    TM_SUB:      7,
	    TM_MUL:      8,
	    TM_MOD:      9,
	    TM_POW:     10,
	    TM_DIV:     11,
	    TM_IDIV:    12,
	    TM_BAND:    13 ,
	    TM_BOR:     14,
	    TM_BXOR:    15,
	    TM_SHL:     16,
	    TM_SHR:     17,
	    TM_UNM:     18,
	    TM_BNOT:    19,
	    TM_LT:      20,
	    TM_LE:      21,
	    TM_CONCAT:  22,
	    TM_CALL:    23,
	    TM_N:       24  /* number of elements in the enum */
	};

	const luaT_init = function(L) {
	    L.l_G.tmname[TMS.TM_INDEX]    = new luaS_new$4(L, to_luastring$l("__index", true));
	    L.l_G.tmname[TMS.TM_NEWINDEX] = new luaS_new$4(L, to_luastring$l("__newindex", true));
	    L.l_G.tmname[TMS.TM_GC]       = new luaS_new$4(L, to_luastring$l("__gc", true));
	    L.l_G.tmname[TMS.TM_MODE]     = new luaS_new$4(L, to_luastring$l("__mode", true));
	    L.l_G.tmname[TMS.TM_LEN]      = new luaS_new$4(L, to_luastring$l("__len", true));
	    L.l_G.tmname[TMS.TM_EQ]       = new luaS_new$4(L, to_luastring$l("__eq", true));
	    L.l_G.tmname[TMS.TM_ADD]      = new luaS_new$4(L, to_luastring$l("__add", true));
	    L.l_G.tmname[TMS.TM_SUB]      = new luaS_new$4(L, to_luastring$l("__sub", true));
	    L.l_G.tmname[TMS.TM_MUL]      = new luaS_new$4(L, to_luastring$l("__mul", true));
	    L.l_G.tmname[TMS.TM_MOD]      = new luaS_new$4(L, to_luastring$l("__mod", true));
	    L.l_G.tmname[TMS.TM_POW]      = new luaS_new$4(L, to_luastring$l("__pow", true));
	    L.l_G.tmname[TMS.TM_DIV]      = new luaS_new$4(L, to_luastring$l("__div", true));
	    L.l_G.tmname[TMS.TM_IDIV]     = new luaS_new$4(L, to_luastring$l("__idiv", true));
	    L.l_G.tmname[TMS.TM_BAND]     = new luaS_new$4(L, to_luastring$l("__band", true));
	    L.l_G.tmname[TMS.TM_BOR]      = new luaS_new$4(L, to_luastring$l("__bor", true));
	    L.l_G.tmname[TMS.TM_BXOR]     = new luaS_new$4(L, to_luastring$l("__bxor", true));
	    L.l_G.tmname[TMS.TM_SHL]      = new luaS_new$4(L, to_luastring$l("__shl", true));
	    L.l_G.tmname[TMS.TM_SHR]      = new luaS_new$4(L, to_luastring$l("__shr", true));
	    L.l_G.tmname[TMS.TM_UNM]      = new luaS_new$4(L, to_luastring$l("__unm", true));
	    L.l_G.tmname[TMS.TM_BNOT]     = new luaS_new$4(L, to_luastring$l("__bnot", true));
	    L.l_G.tmname[TMS.TM_LT]       = new luaS_new$4(L, to_luastring$l("__lt", true));
	    L.l_G.tmname[TMS.TM_LE]       = new luaS_new$4(L, to_luastring$l("__le", true));
	    L.l_G.tmname[TMS.TM_CONCAT]   = new luaS_new$4(L, to_luastring$l("__concat", true));
	    L.l_G.tmname[TMS.TM_CALL]     = new luaS_new$4(L, to_luastring$l("__call", true));
	};

	/*
	** Return the name of the type of an object. For tables and userdata
	** with metatable, use their '__name' metafield, if present.
	*/
	const __name$1 = to_luastring$l('__name', true);
	const luaT_objtypename = function(L, o) {
	    let mt;
	    if ((o.ttistable() && (mt = o.value.metatable) !== null) ||
	        (o.ttisfulluserdata() && (mt = o.value.metatable) !== null)) {
	        let name = ltable$7.luaH_getstr(mt, luaS_bless$4(L, __name$1));
	        if (name.ttisstring())
	            return name.svalue();
	    }
	    return ttypename(o.ttnov());
	};

	const luaT_callTM = function(L, f, p1, p2, p3, hasres) {
	    let func = L.top;

	    lobject$9.pushobj2s(L, f); /* push function (assume EXTRA_STACK) */
	    lobject$9.pushobj2s(L, p1); /* 1st argument */
	    lobject$9.pushobj2s(L, p2); /* 2nd argument */

	    if (!hasres)  /* no result? 'p3' is third argument */
	        lobject$9.pushobj2s(L, p3); /* 3rd argument */

	    if (L.ci.callstatus & lstate$5.CIST_LUA)
	        ldo$8.luaD_call(L, func, hasres);
	    else
	        ldo$8.luaD_callnoyield(L, func, hasres);

	    if (hasres) {  /* if has result, move it to its place */
	        let tv = L.stack[L.top-1];
	        delete L.stack[--L.top];
	        p3.setfrom(tv);
	    }
	};

	const luaT_callbinTM = function(L, p1, p2, res, event) {
	    let tm = luaT_gettmbyobj(L, p1, event);
	    if (tm.ttisnil())
	        tm = luaT_gettmbyobj(L, p2, event);
	    if (tm.ttisnil()) return false;
	    luaT_callTM(L, tm, p1, p2, res, 1);
	    return true;
	};

	const luaT_trybinTM = function(L, p1, p2, res, event) {
	    if (!luaT_callbinTM(L, p1, p2, res, event)) {
	        switch (event) {
	            case TMS.TM_CONCAT:
	                return ldebug$5.luaG_concaterror(L, p1, p2);
	            case TMS.TM_BAND: case TMS.TM_BOR: case TMS.TM_BXOR:
	            case TMS.TM_SHL: case TMS.TM_SHR: case TMS.TM_BNOT: {
	                let n1 = lvm$5.tonumber(p1);
	                let n2 = lvm$5.tonumber(p2);
	                if (n1 !== false && n2 !== false)
	                    return ldebug$5.luaG_tointerror(L, p1, p2);
	                else
	                    return ldebug$5.luaG_opinterror(L, p1, p2, to_luastring$l("perform bitwise operation on", true));
	            }
	            default:
	                return ldebug$5.luaG_opinterror(L, p1, p2, to_luastring$l("perform arithmetic on", true));
	        }
	    }
	};

	const luaT_callorderTM = function(L, p1, p2, event) {
	    let res = new lobject$9.TValue();
	    if (!luaT_callbinTM(L, p1, p2, res, event))
	        return null;
	    else
	        return !res.l_isfalse();
	};

	const fasttm = function(l, et, e) {
	    return et === null ? null :
	        (et.flags & (1 << e)) ? null : luaT_gettm(et, e, l.l_G.tmname[e]);
	};

	const luaT_gettm = function(events, event, ename) {
	    const tm = ltable$7.luaH_getstr(events, ename);
	    lua_assert$8(event <= TMS.TM_EQ);
	    if (tm.ttisnil()) {  /* no tag method? */
	        events.flags |= 1<<event;  /* cache this fact */
	        return null;
	    }
	    else return tm;
	};

	const luaT_gettmbyobj = function(L, o, event) {
	    let mt;
	    switch(o.ttnov()) {
	        case LUA_TTABLE$d:
	        case LUA_TUSERDATA$4:
	            mt = o.value.metatable;
	            break;
	        default:
	            mt = L.l_G.mt[o.ttnov()];
	    }

	    return mt ? ltable$7.luaH_getstr(mt, L.l_G.tmname[event]) : lobject$9.luaO_nilobject;
	};

	ltm$6.fasttm           = fasttm;
	ltm$6.TMS              = TMS;
	ltm$6.luaT_callTM      = luaT_callTM;
	ltm$6.luaT_callbinTM   = luaT_callbinTM;
	ltm$6.luaT_trybinTM    = luaT_trybinTM;
	ltm$6.luaT_callorderTM = luaT_callorderTM;
	ltm$6.luaT_gettm       = luaT_gettm;
	ltm$6.luaT_gettmbyobj  = luaT_gettmbyobj;
	ltm$6.luaT_init        = luaT_init;
	ltm$6.luaT_objtypename = luaT_objtypename;
	ltm$6.ttypename        = ttypename;

	const {
	    LUA_MINSTACK: LUA_MINSTACK$1,
	    LUA_RIDX_GLOBALS: LUA_RIDX_GLOBALS$1,
	    LUA_RIDX_MAINTHREAD: LUA_RIDX_MAINTHREAD$1,
	    constant_types: {
	        LUA_NUMTAGS: LUA_NUMTAGS$2,
	        LUA_TNIL: LUA_TNIL$g,
	        LUA_TTABLE: LUA_TTABLE$c,
	        LUA_TTHREAD: LUA_TTHREAD$3
	    },
	    thread_status: {
	        LUA_OK: LUA_OK$6
	    }
	} = defs$2;
	const lobject$8              = lobject$c;
	const ldo$7                  = ldo$a;
	const lapi$3                 = lapi$4;
	const ltable$6               = ltable$9;
	const ltm$4                  = ltm$6;

	const EXTRA_STACK = 5;

	const BASIC_STACK_SIZE = 2 * LUA_MINSTACK$1;

	class CallInfo {

	    constructor() {
	        this.func = null;
	        this.funcOff = NaN;
	        this.top = NaN;
	        this.previous = null;
	        this.next = null;

	        /* only for Lua functions */
	        this.l_base = NaN; /* base for this function */
	        this.l_code = null; /* reference to this.func.p.code */
	        this.l_savedpc = NaN; /* offset into l_code */
	        /* only for JS functions */
	        this.c_k = null;  /* continuation in case of yields */
	        this.c_old_errfunc = null;
	        this.c_ctx = null;  /* context info. in case of yields */

	        this.nresults = NaN;
	        this.callstatus = NaN;
	    }

	}

	class lua_State {

	    constructor(g) {
	        this.id = g.id_counter++;

	        this.base_ci = new CallInfo(); /* CallInfo for first level (C calling Lua) */
	        this.top = NaN; /* first free slot in the stack */
	        this.stack_last = NaN; /* last free slot in the stack */
	        this.oldpc = NaN; /* last pc traced */

	        /* preinit_thread */
	        this.l_G = g;
	        this.stack = null;
	        this.ci = null;
	        this.errorJmp = null;
	        this.nCcalls = 0;
	        this.hook = null;
	        this.hookmask = 0;
	        this.basehookcount = 0;
	        this.allowhook = 1;
	        this.hookcount = this.basehookcount;
	        this.nny = 1;
	        this.status = LUA_OK$6;
	        this.errfunc = 0;
	    }

	}

	class global_State {

	    constructor() {
	        this.id_counter = 1; /* used to give objects unique ids */
	        this.ids = new WeakMap();

	        this.mainthread = null;
	        this.l_registry = new lobject$8.TValue(LUA_TNIL$g, null);
	        this.panic = null;
	        this.atnativeerror = null;
	        this.version = null;
	        this.tmname = new Array(ltm$4.TMS.TM_N);
	        this.mt = new Array(LUA_NUMTAGS$2);
	    }

	}

	const luaE_extendCI = function(L) {
	    let ci = new CallInfo();
	    L.ci.next = ci;
	    ci.previous = L.ci;
	    ci.next = null;
	    L.ci = ci;
	    return ci;
	};

	const luaE_freeCI = function(L) {
	    let ci = L.ci;
	    ci.next = null;
	};

	const stack_init = function(L1, L) {
	    L1.stack = new Array(BASIC_STACK_SIZE);
	    L1.top = 0;
	    L1.stack_last = BASIC_STACK_SIZE - EXTRA_STACK;
	    /* initialize first ci */
	    let ci = L1.base_ci;
	    ci.next = ci.previous = null;
	    ci.callstatus = 0;
	    ci.funcOff = L1.top;
	    ci.func = L1.stack[L1.top];
	    L1.stack[L1.top++] = new lobject$8.TValue(LUA_TNIL$g, null);
	    ci.top = L1.top + LUA_MINSTACK$1;
	    L1.ci = ci;
	};

	const freestack = function(L) {
	    L.ci = L.base_ci;
	    luaE_freeCI(L);
	    L.stack = null;
	};

	/*
	** Create registry table and its predefined values
	*/
	const init_registry = function(L, g) {
	    let registry = ltable$6.luaH_new(L);
	    g.l_registry.sethvalue(registry);
	    ltable$6.luaH_setint(registry, LUA_RIDX_MAINTHREAD$1, new lobject$8.TValue(LUA_TTHREAD$3, L));
	    ltable$6.luaH_setint(registry, LUA_RIDX_GLOBALS$1, new lobject$8.TValue(LUA_TTABLE$c, ltable$6.luaH_new(L)));
	};

	/*
	** open parts of the state that may cause memory-allocation errors.
	** ('g->version' !== NULL flags that the state was completely build)
	*/
	const f_luaopen = function(L) {
	    let g = L.l_G;
	    stack_init(L);
	    init_registry(L, g);
	    ltm$4.luaT_init(L);
	    g.version = lapi$3.lua_version(null);
	};

	const lua_newthread$1 = function(L) {
	    let g = L.l_G;
	    let L1 = new lua_State(g);
	    L.stack[L.top] = new lobject$8.TValue(LUA_TTHREAD$3, L1);
	    lapi$3.api_incr_top(L);
	    L1.hookmask = L.hookmask;
	    L1.basehookcount = L.basehookcount;
	    L1.hook = L.hook;
	    L1.hookcount = L1.basehookcount;
	    stack_init(L1);
	    return L1;
	};

	const luaE_freethread = function(L, L1) {
	    freestack(L1);
	};

	const lua_newstate$1 = function() {
	    let g = new global_State();
	    let L = new lua_State(g);
	    g.mainthread = L;

	    if (ldo$7.luaD_rawrunprotected(L, f_luaopen, null) !== LUA_OK$6) {
	        L = null;
	    }

	    return L;
	};

	const close_state = function(L) {
	    freestack(L);
	};

	const lua_close$1 = function(L) {
	    L = L.l_G.mainthread;  /* only the main thread can be closed */
	    close_state(L);
	};

	lstate$8.lua_State       = lua_State;
	lstate$8.CallInfo        = CallInfo;
	lstate$8.CIST_OAH        = (1<<0);  /* original value of 'allowhook' */
	lstate$8.CIST_LUA        = (1<<1);  /* call is running a Lua function */
	lstate$8.CIST_HOOKED     = (1<<2);  /* call is running a debug hook */
	lstate$8.CIST_FRESH      = (1<<3);  /* call is running on a fresh invocation of luaV_execute */
	lstate$8.CIST_YPCALL     = (1<<4);  /* call is a yieldable protected call */
	lstate$8.CIST_TAIL       = (1<<5);  /* call was tail called */
	lstate$8.CIST_HOOKYIELD  = (1<<6);  /* last hook called yielded */
	lstate$8.CIST_LEQ        = (1<<7);  /* using __lt for __le */
	lstate$8.CIST_FIN        = (1<<8);   /* call is running a finalizer */
	lstate$8.EXTRA_STACK     = EXTRA_STACK;
	lstate$8.lua_close       = lua_close$1;
	lstate$8.lua_newstate    = lua_newstate$1;
	lstate$8.lua_newthread   = lua_newthread$1;
	lstate$8.luaE_extendCI   = luaE_extendCI;
	lstate$8.luaE_freeCI     = luaE_freeCI;
	lstate$8.luaE_freethread = luaE_freethread;

	const {
	    LUA_OPADD: LUA_OPADD$1,
	    LUA_OPBAND: LUA_OPBAND$1,
	    LUA_OPBNOT: LUA_OPBNOT$2,
	    LUA_OPBOR: LUA_OPBOR$1,
	    LUA_OPBXOR: LUA_OPBXOR$1,
	    LUA_OPDIV: LUA_OPDIV$1,
	    LUA_OPIDIV: LUA_OPIDIV$1,
	    LUA_OPMOD: LUA_OPMOD$1,
	    LUA_OPMUL,
	    LUA_OPPOW,
	    LUA_OPSHL: LUA_OPSHL$1,
	    LUA_OPSHR: LUA_OPSHR$1,
	    LUA_OPSUB,
	    LUA_OPUNM: LUA_OPUNM$2,
	    constant_types: {
	        LUA_NUMTAGS: LUA_NUMTAGS$1,
	        LUA_TBOOLEAN: LUA_TBOOLEAN$9,
	        LUA_TCCL: LUA_TCCL$2,
	        LUA_TFUNCTION: LUA_TFUNCTION$7,
	        LUA_TLCF: LUA_TLCF$2,
	        LUA_TLCL: LUA_TLCL$2,
	        LUA_TLIGHTUSERDATA: LUA_TLIGHTUSERDATA$4,
	        LUA_TLNGSTR: LUA_TLNGSTR$5,
	        LUA_TNIL: LUA_TNIL$f,
	        LUA_TNUMBER: LUA_TNUMBER$5,
	        LUA_TNUMFLT: LUA_TNUMFLT$4,
	        LUA_TNUMINT: LUA_TNUMINT$4,
	        LUA_TSHRSTR: LUA_TSHRSTR$3,
	        LUA_TSTRING: LUA_TSTRING$5,
	        LUA_TTABLE: LUA_TTABLE$b,
	        LUA_TTHREAD: LUA_TTHREAD$2,
	        LUA_TUSERDATA: LUA_TUSERDATA$3
	    },
	    from_userstring: from_userstring$3,
	    luastring_indexOf: luastring_indexOf$5,
	    luastring_of: luastring_of$2,
	    to_jsstring: to_jsstring$4,
	    to_luastring: to_luastring$k
	} = defs$2;
	const {
	    lisdigit: lisdigit$1,
	    lisprint,
	    lisspace: lisspace$1,
	    lisxdigit: lisxdigit$1
	} = ljstype;
	const ldebug$4  = ldebug$8;
	const ldo$6     = ldo$a;
	const lstate$4  = lstate$8;
	const {
	    luaS_bless: luaS_bless$3,
	    luaS_new: luaS_new$3
	} = lstring;
	const ltable$5  = ltable$9;
	const {
	    LUA_COMPAT_FLOATSTRING,
	    ldexp,
	    lua_integer2str,
	    lua_number2str
	} = luaconf$1;
	const lvm$4     = lvm$6;
	const {
	    MAX_INT: MAX_INT$2,
	    luai_nummod,
	    lua_assert: lua_assert$7
	} = llimits;
	const ltm$3     = ltm$6;

	const LUA_TPROTO = LUA_NUMTAGS$1;
	const LUA_TDEADKEY = LUA_NUMTAGS$1+1;

	class TValue$2 {

	    constructor(type, value) {
	        this.type = type;
	        this.value = value;
	    }

	    /* type tag of a TValue (bits 0-3 for tags + variant bits 4-5) */
	    ttype() {
	        return this.type & 0x3F;
	    }

	    /* type tag of a TValue with no variants (bits 0-3) */
	    ttnov() {
	        return this.type & 0x0F;
	    }

	    checktag(t) {
	        return this.type === t;
	    }

	    checktype(t) {
	        return this.ttnov() === t;
	    }

	    ttisnumber() {
	        return this.checktype(LUA_TNUMBER$5);
	    }

	    ttisfloat() {
	        return this.checktag(LUA_TNUMFLT$4);
	    }

	    ttisinteger() {
	        return this.checktag(LUA_TNUMINT$4);
	    }

	    ttisnil() {
	        return this.checktag(LUA_TNIL$f);
	    }

	    ttisboolean() {
	        return this.checktag(LUA_TBOOLEAN$9);
	    }

	    ttislightuserdata() {
	        return this.checktag(LUA_TLIGHTUSERDATA$4);
	    }

	    ttisstring() {
	        return this.checktype(LUA_TSTRING$5);
	    }

	    ttisshrstring() {
	        return this.checktag(LUA_TSHRSTR$3);
	    }

	    ttislngstring() {
	        return this.checktag(LUA_TLNGSTR$5);
	    }

	    ttistable() {
	        return this.checktag(LUA_TTABLE$b);
	    }

	    ttisfunction() {
	        return this.checktype(LUA_TFUNCTION$7);
	    }

	    ttisclosure() {
	        return (this.type & 0x1F) === LUA_TFUNCTION$7;
	    }

	    ttisCclosure() {
	        return this.checktag(LUA_TCCL$2);
	    }

	    ttisLclosure() {
	        return this.checktag(LUA_TLCL$2);
	    }

	    ttislcf() {
	        return this.checktag(LUA_TLCF$2);
	    }

	    ttisfulluserdata() {
	        return this.checktag(LUA_TUSERDATA$3);
	    }

	    ttisthread() {
	        return this.checktag(LUA_TTHREAD$2);
	    }

	    ttisdeadkey() {
	        return this.checktag(LUA_TDEADKEY);
	    }

	    l_isfalse() {
	        return this.ttisnil() || (this.ttisboolean() && this.value === false);
	    }

	    setfltvalue(x) {
	        this.type = LUA_TNUMFLT$4;
	        this.value = x;
	    }

	    chgfltvalue(x) {
	        lua_assert$7(this.type == LUA_TNUMFLT$4);
	        this.value = x;
	    }

	    setivalue(x) {
	        this.type = LUA_TNUMINT$4;
	        this.value = x;
	    }

	    chgivalue(x) {
	        lua_assert$7(this.type == LUA_TNUMINT$4);
	        this.value = x;
	    }

	    setnilvalue() {
	        this.type = LUA_TNIL$f;
	        this.value = null;
	    }

	    setfvalue(x) {
	        this.type = LUA_TLCF$2;
	        this.value = x;
	    }

	    setpvalue(x) {
	        this.type = LUA_TLIGHTUSERDATA$4;
	        this.value = x;
	    }

	    setbvalue(x) {
	        this.type = LUA_TBOOLEAN$9;
	        this.value = x;
	    }

	    setsvalue(x) {
	        this.type = LUA_TLNGSTR$5; /* LUA_TSHRSTR? */
	        this.value = x;
	    }

	    setuvalue(x) {
	        this.type = LUA_TUSERDATA$3;
	        this.value = x;
	    }

	    setthvalue(x) {
	        this.type = LUA_TTHREAD$2;
	        this.value = x;
	    }

	    setclLvalue(x) {
	        this.type = LUA_TLCL$2;
	        this.value = x;
	    }

	    setclCvalue(x) {
	        this.type = LUA_TCCL$2;
	        this.value = x;
	    }

	    sethvalue(x) {
	        this.type = LUA_TTABLE$b;
	        this.value = x;
	    }

	    setdeadvalue() {
	        this.type = LUA_TDEADKEY;
	        this.value = null;
	    }

	    setfrom(tv) { /* in lua C source setobj2t is often used for this */
	        this.type = tv.type;
	        this.value = tv.value;
	    }

	    tsvalue() {
	        lua_assert$7(this.ttisstring());
	        return this.value;
	    }

	    svalue() {
	        return this.tsvalue().getstr();
	    }

	    vslen() {
	        return this.tsvalue().tsslen();
	    }

	    jsstring(from, to) {
	        return to_jsstring$4(this.svalue(), from, to, true);
	    }
	}

	const pushobj2s = function(L, tv) {
	    L.stack[L.top++] = new TValue$2(tv.type, tv.value);
	};
	const pushsvalue2s = function(L, ts) {
	    L.stack[L.top++] = new TValue$2(LUA_TLNGSTR$5, ts);
	};
	/* from stack to (same) stack */
	const setobjs2s = function(L, newidx, oldidx) {
	    L.stack[newidx].setfrom(L.stack[oldidx]);
	};
	/* to stack (not from same stack) */
	const setobj2s = function(L, newidx, oldtv) {
	    L.stack[newidx].setfrom(oldtv);
	};
	const setsvalue2s = function(L, newidx, ts) {
	    L.stack[newidx].setsvalue(ts);
	};

	const luaO_nilobject = new TValue$2(LUA_TNIL$f, null);
	Object.freeze(luaO_nilobject);
	lobject$c.luaO_nilobject = luaO_nilobject;

	class LClosure {

	    constructor(L, n) {
	        this.id = L.l_G.id_counter++;

	        this.p = null;
	        this.nupvalues = n;
	        this.upvals = new Array(n); /* list of upvalues. initialised in luaF_initupvals */
	    }

	}

	class CClosure$1 {

	    constructor(L, f, n) {
	        this.id = L.l_G.id_counter++;

	        this.f = f;
	        this.nupvalues = n;
	        this.upvalue = new Array(n); /* list of upvalues as TValues */
	        while (n--) {
	            this.upvalue[n] = new TValue$2(LUA_TNIL$f, null);
	        }
	    }

	}

	class Udata {

	    constructor(L, size) {
	        this.id = L.l_G.id_counter++;

	        this.metatable = null;
	        this.uservalue = new TValue$2(LUA_TNIL$f, null);
	        this.len = size;
	        this.data = Object.create(null); // ignores size argument
	    }

	}

	/*
	** Description of a local variable for function prototypes
	** (used for debug information)
	*/
	class LocVar {
	    constructor() {
	        this.varname = null;
	        this.startpc = NaN;  /* first point where variable is active */
	        this.endpc = NaN;    /* first point where variable is dead */
	    }
	}

	const RETS = to_luastring$k("...");
	const PRE  = to_luastring$k("[string \"");
	const POS  = to_luastring$k("\"]");

	const luaO_chunkid = function(source, bufflen) {
	    let l = source.length;
	    let out;
	    if (source[0] === 61 /* ('=').charCodeAt(0) */) {  /* 'literal' source */
	        if (l < bufflen) {  /* small enough? */
	            out = new Uint8Array(l-1);
	            out.set(source.subarray(1));
	        } else {  /* truncate it */
	            out = new Uint8Array(bufflen);
	            out.set(source.subarray(1, bufflen+1));
	        }
	    } else if (source[0] === 64 /* ('@').charCodeAt(0) */) {  /* file name */
	        if (l <= bufflen) {  /* small enough? */
	            out = new Uint8Array(l-1);
	            out.set(source.subarray(1));
	        } else {  /* add '...' before rest of name */
	            out = new Uint8Array(bufflen);
	            out.set(RETS);
	            bufflen -= RETS.length;
	            out.set(source.subarray(l - bufflen), RETS.length);
	        }
	    } else {  /* string; format as [string "source"] */
	        out = new Uint8Array(bufflen);
	        let nli = luastring_indexOf$5(source, 10 /* ('\n').charCodeAt(0) */);  /* find first new line (if any) */
	        out.set(PRE);  /* add prefix */
	        let out_i = PRE.length;
	        bufflen -= PRE.length + RETS.length + POS.length;  /* save space for prefix+suffix */
	        if (l < bufflen && nli === -1) {  /* small one-line source? */
	            out.set(source, out_i);  /* keep it */
	            out_i += source.length;
	        } else {
	            if (nli !== -1) l = nli;  /* stop at first newline */
	            if (l > bufflen) l = bufflen;
	            out.set(source.subarray(0, l), out_i);
	            out_i += l;
	            out.set(RETS, out_i);
	            out_i += RETS.length;
	        }
	        out.set(POS, out_i);
	        out_i += POS.length;
	        out = out.subarray(0, out_i);
	    }
	    return out;
	};

	const luaO_hexavalue = function(c) {
	    if (lisdigit$1(c)) return c - 48;
	    else return (c & 0xdf) - 55;
	};

	const UTF8BUFFSZ = 8;

	const luaO_utf8esc = function(buff, x) {
	    let n = 1;  /* number of bytes put in buffer (backwards) */
	    lua_assert$7(x <= 0x10FFFF);
	    if (x < 0x80)  /* ascii? */
	        buff[UTF8BUFFSZ - 1] = x;
	    else {  /* need continuation bytes */
	        let mfb = 0x3f;  /* maximum that fits in first byte */
	        do {
	            buff[UTF8BUFFSZ - (n++)] = 0x80 | (x & 0x3f);
	            x >>= 6;  /* remove added bits */
	            mfb >>= 1;  /* now there is one less bit available in first byte */
	        } while (x > mfb);  /* still needs continuation byte? */
	        buff[UTF8BUFFSZ - n] = (~mfb << 1) | x;  /* add first byte */
	    }
	    return n;
	};

	/* maximum number of significant digits to read (to avoid overflows
	   even with single floats) */
	const MAXSIGDIG = 30;

	/*
	** convert an hexadecimal numeric string to a number, following
	** C99 specification for 'strtod'
	*/
	const lua_strx2number = function(s) {
	    let i = 0;
	    let r = 0.0;  /* result (accumulator) */
	    let sigdig = 0;  /* number of significant digits */
	    let nosigdig = 0;  /* number of non-significant digits */
	    let e = 0;  /* exponent correction */
	    let neg;  /* 1 if number is negative */
	    let hasdot = false;  /* true after seen a dot */
	    while (lisspace$1(s[i])) i++;  /* skip initial spaces */
	    if ((neg = (s[i] === 45 /* ('-').charCodeAt(0) */))) i++;  /* check signal */
	    else if (s[i] === 43 /* ('+').charCodeAt(0) */) i++;
	    if (!(s[i] === 48 /* ('0').charCodeAt(0) */ && (s[i+1] === 120 /* ('x').charCodeAt(0) */ || s[i+1] === 88 /* ('X').charCodeAt(0) */)))  /* check '0x' */
	        return null;  /* invalid format (no '0x') */
	    for (i += 2; ; i++) {  /* skip '0x' and read numeral */
	        if (s[i] === 46 /* ('.').charCodeAt(0) i.e. dot/lua_getlocaledecpoint(); */) {
	            if (hasdot) break;  /* second dot? stop loop */
	            else hasdot = true;
	        } else if (lisxdigit$1(s[i])) {
	            if (sigdig === 0 && s[i] === 48 /* ('0').charCodeAt(0) */)  /* non-significant digit (zero)? */
	                nosigdig++;
	            else if (++sigdig <= MAXSIGDIG)  /* can read it without overflow? */
	                r = (r * 16) + luaO_hexavalue(s[i]);
	            else e++; /* too many digits; ignore, but still count for exponent */
	            if (hasdot) e--;  /* decimal digit? correct exponent */
	        } else break;  /* neither a dot nor a digit */
	    }

	    if (nosigdig + sigdig === 0)  /* no digits? */
	        return null;  /* invalid format */
	    e *= 4;  /* each digit multiplies/divides value by 2^4 */
	    if (s[i] === 112 /* ('p').charCodeAt(0) */ || s[i] === 80 /* ('P').charCodeAt(0) */) {  /* exponent part? */
	        let exp1 = 0;  /* exponent value */
	        let neg1;  /* exponent signal */
	        i++;  /* skip 'p' */
	        if ((neg1 = (s[i] === 45 /* ('-').charCodeAt(0) */))) i++;  /* signal */
	        else if (s[i] === 43 /* ('+').charCodeAt(0) */) i++;
	        if (!lisdigit$1(s[i]))
	            return null;  /* invalid; must have at least one digit */
	        while (lisdigit$1(s[i]))  /* read exponent */
	            exp1 = exp1 * 10 + s[i++] - 48 /* ('0').charCodeAt(0) */;
	        if (neg1) exp1 = -exp1;
	        e += exp1;
	    }
	    if (neg) r = -r;
	    return {
	        n: ldexp(r, e),
	        i: i
	    };
	};

	const lua_str2number = function(s) {
	    try {
	        s = to_jsstring$4(s);
	    } catch (e) {
	        return null;
	    }
	    /* use a regex to validate number and also to get length
	       parseFloat ignores trailing junk */
	    let r = /^[\t\v\f \n\r]*[+-]?(?:[0-9]+\.?[0-9]*|\.[0-9]*)(?:[eE][+-]?[0-9]+)?/.exec(s);
	    if (!r)
	        return null;
	    let flt = parseFloat(r[0]);
	    return !isNaN(flt) ? { n: flt, i: r[0].length } : null;
	};

	const l_str2dloc = function(s, mode) {
	    let result = mode === 'x' ? lua_strx2number(s) : lua_str2number(s); /* try to convert */
	    if (result === null) return null;
	    while (lisspace$1(s[result.i])) result.i++;  /* skip trailing spaces */
	    return (result.i === s.length || s[result.i] === 0) ? result : null;  /* OK if no trailing characters */
	};

	const SIGILS = [
	    46  /* (".").charCodeAt(0) */,
	    120 /* ("x").charCodeAt(0) */,
	    88  /* ("X").charCodeAt(0) */,
	    110 /* ("n").charCodeAt(0) */,
	    78  /* ("N").charCodeAt(0) */
	];
	const modes = {
	    [ 46]: ".",
	    [120]: "x",
	    [ 88]: "x",
	    [110]: "n",
	    [ 78]: "n"
	};
	const l_str2d = function(s) {
	    let l = s.length;
	    let pmode = 0;
	    for (let i=0; i<l; i++) {
	        let v = s[i];
	        if (SIGILS.indexOf(v) !== -1) {
	            pmode = v;
	            break;
	        }
	    }
	    let mode = modes[pmode];
	    if (mode === 'n')  /* reject 'inf' and 'nan' */
	        return null;
	    let end = l_str2dloc(s, mode);  /* try to convert */
	    // if (end === null) {   /* failed? may be a different locale */
	    //     throw new Error("Locale not available to handle number"); // TODO
	    // }
	    return end;
	};

	const MAXBY10  = Math.floor(MAX_INT$2 / 10);
	const MAXLASTD = MAX_INT$2 % 10;

	const l_str2int = function(s) {
	    let i = 0;
	    let a = 0;
	    let empty = true;
	    let neg;

	    while (lisspace$1(s[i])) i++;  /* skip initial spaces */
	    if ((neg = (s[i] === 45 /* ('-').charCodeAt(0) */))) i++;
	    else if (s[i] === 43 /* ('+').charCodeAt(0) */) i++;
	    if (s[i] === 48 /* ('0').charCodeAt(0) */ && (s[i+1] === 120 /* ('x').charCodeAt(0) */ || s[i+1] === 88 /* ('X').charCodeAt(0) */)) {  /* hex? */
	        i += 2;  /* skip '0x' */
	        for (; i < s.length && lisxdigit$1(s[i]); i++) {
	            a = (a * 16 + luaO_hexavalue(s[i]))|0;
	            empty = false;
	        }
	    } else {  /* decimal */
	        for (; i < s.length && lisdigit$1(s[i]); i++) {
	            let d = s[i] - 48 /* ('0').charCodeAt(0) */;
	            if (a >= MAXBY10 && (a > MAXBY10 || d > MAXLASTD + neg))  /* overflow? */
	                return null;  /* do not accept it (as integer) */
	            a = (a * 10 + d)|0;
	            empty = false;
	        }
	    }
	    while (i < s.length && lisspace$1(s[i])) i++;  /* skip trailing spaces */
	    if (empty || (i !== s.length && s[i] !== 0)) return null;  /* something wrong in the numeral */
	    else {
	        return {
	            n: (neg ? -a : a)|0,
	            i: i
	        };
	    }
	};

	const luaO_str2num = function(s, o) {
	    let s2i = l_str2int(s);
	    if (s2i !== null) {   /* try as an integer */
	        o.setivalue(s2i.n);
	        return s2i.i+1;
	    } else {   /* else try as a float */
	        s2i = l_str2d(s);
	        if (s2i !== null) {
	            o.setfltvalue(s2i.n);
	            return s2i.i+1;
	        } else
	            return 0;  /* conversion failed */
	    }
	};

	const luaO_tostring = function(L, obj) {
	    let buff;
	    if (obj.ttisinteger())
	        buff = to_luastring$k(lua_integer2str(obj.value));
	    else {
	        let str = lua_number2str(obj.value);
	        if (!LUA_COMPAT_FLOATSTRING && /^[-0123456789]+$/.test(str)) {  /* looks like an int? */
	            str += '.0'; /* adds '.0' to result: lua_getlocaledecpoint removed as optimisation */
	        }
	        buff = to_luastring$k(str);
	    }
	    obj.setsvalue(luaS_bless$3(L, buff));
	};

	const pushstr = function(L, str) {
	    ldo$6.luaD_inctop(L);
	    setsvalue2s(L, L.top-1, luaS_new$3(L, str));
	};

	const luaO_pushvfstring = function(L, fmt, argp) {
	    let n = 0;
	    let i = 0;
	    let a = 0;
	    let e;
	    for (;;) {
	        e = luastring_indexOf$5(fmt, 37 /* ('%').charCodeAt(0) */, i);
	        if (e == -1) break;
	        pushstr(L, fmt.subarray(i, e));
	        switch(fmt[e+1]) {
	            case 115 /* ('s').charCodeAt(0) */: {
	                let s = argp[a++];
	                if (s === null) s = to_luastring$k("(null)", true);
	                else {
	                    s = from_userstring$3(s);
	                    /* respect null terminator */
	                    let i = luastring_indexOf$5(s, 0);
	                    if (i !== -1)
	                        s = s.subarray(0, i);
	                }
	                pushstr(L, s);
	                break;
	            }
	            case 99 /* ('c').charCodeAt(0) */: {
	                let buff = argp[a++];
	                if (lisprint(buff))
	                    pushstr(L, luastring_of$2(buff));
	                else
	                    luaO_pushfstring(L, to_luastring$k("<\\%d>", true), buff);
	                break;
	            }
	            case 100 /* ('d').charCodeAt(0) */:
	            case 73 /* ('I').charCodeAt(0) */:
	                ldo$6.luaD_inctop(L);
	                L.stack[L.top-1].setivalue(argp[a++]);
	                luaO_tostring(L, L.stack[L.top-1]);
	                break;
	            case 102 /* ('f').charCodeAt(0) */:
	                ldo$6.luaD_inctop(L);
	                L.stack[L.top-1].setfltvalue(argp[a++]);
	                luaO_tostring(L, L.stack[L.top-1]);
	                break;
	            case 112 /* ('p').charCodeAt(0) */: {
	                let v = argp[a++];
	                if (v instanceof lstate$4.lua_State ||
	                    v instanceof ltable$5.Table ||
	                    v instanceof Udata ||
	                    v instanceof LClosure ||
	                    v instanceof CClosure$1) {
	                    pushstr(L, to_luastring$k("0x"+v.id.toString(16)));
	                } else {
	                    switch(typeof v) {
	                        case "undefined":
	                            pushstr(L, to_luastring$k("undefined"));
	                            break;
	                        case "number":  /* before check object as null is an object */
	                            pushstr(L, to_luastring$k("Number("+v+")"));
	                            break;
	                        case "string":  /* before check object as null is an object */
	                            pushstr(L, to_luastring$k("String("+JSON.stringify(v)+")"));
	                            break;
	                        case "boolean":  /* before check object as null is an object */
	                            pushstr(L, to_luastring$k(v?"Boolean(true)":"Boolean(false)"));
	                            break;
	                        case "object":
	                            if (v === null) { /* null is special */
	                                pushstr(L, to_luastring$k("null"));
	                                break;
	                            }
	                            /* fall through */
	                        case "function": {
	                            let id = L.l_G.ids.get(v);
	                            if (!id) {
	                                id = L.l_G.id_counter++;
	                                L.l_G.ids.set(v, id);
	                            }
	                            pushstr(L, to_luastring$k("0x"+id.toString(16)));
	                            break;
	                        }
	                        default:
	                            /* user provided object. no id available */
	                            pushstr(L, to_luastring$k("<id NYI>"));
	                    }
	                }
	                break;
	            }
	            case 85 /* ('U').charCodeAt(0) */: {
	                let buff = new Uint8Array(UTF8BUFFSZ);
	                let l = luaO_utf8esc(buff, argp[a++]);
	                pushstr(L, buff.subarray(UTF8BUFFSZ - l));
	                break;
	            }
	            case 37 /* ('%').charCodeAt(0) */:
	                pushstr(L, to_luastring$k("%", true));
	                break;
	            default:
	                ldebug$4.luaG_runerror(L, to_luastring$k("invalid option '%%%c' to 'lua_pushfstring'"), fmt[e + 1]);
	        }
	        n += 2;
	        i = e + 2;
	    }
	    ldo$6.luaD_checkstack(L, 1);
	    pushstr(L, fmt.subarray(i));
	    if (n > 0) lvm$4.luaV_concat(L, n+1);
	    return L.stack[L.top-1].svalue();
	};

	const luaO_pushfstring = function(L, fmt, ...argp) {
	    return luaO_pushvfstring(L, fmt, argp);
	};


	/*
	** converts an integer to a "floating point byte", represented as
	** (eeeeexxx), where the real value is (1xxx) * 2^(eeeee - 1) if
	** eeeee !== 0 and (xxx) otherwise.
	*/
	const luaO_int2fb = function(x) {
	    let e = 0;  /* exponent */
	    if (x < 8) return x;
	    while (x >= (8 << 4)) {  /* coarse steps */
	        x = (x + 0xf) >> 4;  /* x = ceil(x / 16) */
	        e += 4;
	    }
	    while (x >= (8 << 1)) {  /* fine steps */
	        x = (x + 1) >> 1;  /* x = ceil(x / 2) */
	        e++;
	    }
	    return ((e+1) << 3) | (x - 8);
	};

	const intarith = function(L, op, v1, v2) {
	    switch (op) {
	        case LUA_OPADD$1:  return (v1 + v2)|0;
	        case LUA_OPSUB:  return (v1 - v2)|0;
	        case LUA_OPMUL:  return lvm$4.luaV_imul(v1, v2);
	        case LUA_OPMOD$1:  return lvm$4.luaV_mod(L, v1, v2);
	        case LUA_OPIDIV$1: return lvm$4.luaV_div(L, v1, v2);
	        case LUA_OPBAND$1: return (v1 & v2);
	        case LUA_OPBOR$1:  return (v1 | v2);
	        case LUA_OPBXOR$1: return (v1 ^ v2);
	        case LUA_OPSHL$1:  return lvm$4.luaV_shiftl(v1, v2);
	        case LUA_OPSHR$1:  return lvm$4.luaV_shiftl(v1, -v2);
	        case LUA_OPUNM$2:  return (0 - v1)|0;
	        case LUA_OPBNOT$2: return (~0 ^ v1);
	        default: lua_assert$7(0);
	    }
	};


	const numarith = function(L, op, v1, v2) {
	    switch (op) {
	        case LUA_OPADD$1:  return v1 + v2;
	        case LUA_OPSUB:  return v1 - v2;
	        case LUA_OPMUL:  return v1 * v2;
	        case LUA_OPDIV$1:  return v1 / v2;
	        case LUA_OPPOW:  return Math.pow(v1, v2);
	        case LUA_OPIDIV$1: return Math.floor(v1 / v2);
	        case LUA_OPUNM$2:  return -v1;
	        case LUA_OPMOD$1:  return luai_nummod(L, v1, v2);
	        default: lua_assert$7(0);
	    }
	};

	const luaO_arith = function(L, op, p1, p2, p3) {
	    let res = (typeof p3 === "number") ? L.stack[p3] : p3;  /* FIXME */

	    switch (op) {
	        case LUA_OPBAND$1: case LUA_OPBOR$1: case LUA_OPBXOR$1:
	        case LUA_OPSHL$1: case LUA_OPSHR$1:
	        case LUA_OPBNOT$2: {  /* operate only on integers */
	            let i1, i2;
	            if ((i1 = lvm$4.tointeger(p1)) !== false && (i2 = lvm$4.tointeger(p2)) !== false) {
	                res.setivalue(intarith(L, op, i1, i2));
	                return;
	            }
	            else break;  /* go to the end */
	        }
	        case LUA_OPDIV$1: case LUA_OPPOW: {  /* operate only on floats */
	            let n1, n2;
	            if ((n1 = lvm$4.tonumber(p1)) !== false && (n2 = lvm$4.tonumber(p2)) !== false) {
	                res.setfltvalue(numarith(L, op, n1, n2));
	                return;
	            }
	            else break;  /* go to the end */
	        }
	        default: {  /* other operations */
	            let n1, n2;
	            if (p1.ttisinteger() && p2.ttisinteger()) {
	                res.setivalue(intarith(L, op, p1.value, p2.value));
	                return;
	            }
	            else if ((n1 = lvm$4.tonumber(p1)) !== false && (n2 = lvm$4.tonumber(p2)) !== false) {
	                res.setfltvalue(numarith(L, op, n1, n2));
	                return;
	            }
	            else break;  /* go to the end */
	        }
	    }
	    /* could not perform raw operation; try metamethod */
	    lua_assert$7(L !== null);  /* should not fail when folding (compile time) */
	    ltm$3.luaT_trybinTM(L, p1, p2, p3, (op - LUA_OPADD$1) + ltm$3.TMS.TM_ADD);
	};


	lobject$c.CClosure          = CClosure$1;
	lobject$c.LClosure          = LClosure;
	lobject$c.LUA_TDEADKEY      = LUA_TDEADKEY;
	lobject$c.LUA_TPROTO        = LUA_TPROTO;
	lobject$c.LocVar            = LocVar;
	lobject$c.TValue            = TValue$2;
	lobject$c.Udata             = Udata;
	lobject$c.UTF8BUFFSZ        = UTF8BUFFSZ;
	lobject$c.luaO_arith        = luaO_arith;
	lobject$c.luaO_chunkid      = luaO_chunkid;
	lobject$c.luaO_hexavalue    = luaO_hexavalue;
	lobject$c.luaO_int2fb       = luaO_int2fb;
	lobject$c.luaO_pushfstring  = luaO_pushfstring;
	lobject$c.luaO_pushvfstring = luaO_pushvfstring;
	lobject$c.luaO_str2num      = luaO_str2num;
	lobject$c.luaO_tostring     = luaO_tostring;
	lobject$c.luaO_utf8esc      = luaO_utf8esc;
	lobject$c.numarith          = numarith;
	lobject$c.pushobj2s         = pushobj2s;
	lobject$c.pushsvalue2s      = pushsvalue2s;
	lobject$c.setobjs2s         = setobjs2s;
	lobject$c.setobj2s          = setobj2s;
	lobject$c.setsvalue2s       = setsvalue2s;

	const { constant_types: { LUA_TNIL: LUA_TNIL$e } } = defs$2;
	const lobject$7 = lobject$c;

	class Proto$1 {
	    constructor(L) {
	        this.id = L.l_G.id_counter++;
	        this.k = [];              // constants used by the function
	        this.p = [];              // functions defined inside the function
	        this.code = [];           // opcodes
	        this.cache = null;        // last-created closure with this prototype
	        this.lineinfo = [];       // map from opcodes to source lines (debug information)
	        this.upvalues = [];       // upvalue information
	        this.numparams = 0;       // number of fixed parameters
	        this.is_vararg = false;
	        this.maxstacksize = 0;    // number of registers needed by this function
	        this.locvars = [];        // information about local variables (debug information)
	        this.linedefined = 0;     // debug information
	        this.lastlinedefined = 0; // debug information
	        this.source = null;       // used for debug information
	    }
	}

	const luaF_newLclosure = function(L, n) {
	    return new lobject$7.LClosure(L, n);
	};


	const luaF_findupval = function(L, level) {
	    return L.stack[level];
	};

	const luaF_close = function(L, level) {
	    /* Create new TValues on stack;
	     * any closures will keep referencing old TValues */
	    for (let i=level; i<L.top; i++) {
	        let old = L.stack[i];
	        L.stack[i] = new lobject$7.TValue(old.type, old.value);
	    }
	};

	/*
	** fill a closure with new upvalues
	*/
	const luaF_initupvals = function(L, cl) {
	    for (let i = 0; i < cl.nupvalues; i++)
	        cl.upvals[i] = new lobject$7.TValue(LUA_TNIL$e, null);
	};

	/*
	** Look for n-th local variable at line 'line' in function 'func'.
	** Returns null if not found.
	*/
	const luaF_getlocalname = function(f, local_number, pc) {
	    for (let i = 0; i < f.locvars.length && f.locvars[i].startpc <= pc; i++) {
	        if (pc < f.locvars[i].endpc) {  /* is variable active? */
	            local_number--;
	            if (local_number === 0)
	                return f.locvars[i].varname.getstr();
	        }
	    }
	    return null;  /* not found */
	};

	lfunc$6.MAXUPVAL          = 255;
	lfunc$6.Proto             = Proto$1;
	lfunc$6.luaF_findupval    = luaF_findupval;
	lfunc$6.luaF_close        = luaF_close;
	lfunc$6.luaF_getlocalname = luaF_getlocalname;
	lfunc$6.luaF_initupvals   = luaF_initupvals;
	lfunc$6.luaF_newLclosure  = luaF_newLclosure;

	var lparser$2 = {};

	var lcode = {};

	var llex$4 = {};

	var lzio = {};

	const { lua_assert: lua_assert$6 } = llimits;

	class MBuffer$1 {
	    constructor() {
	        this.buffer = null;
	        this.n = 0;
	    }
	}

	const luaZ_buffer$1 = function(buff) {
	    return buff.buffer.subarray(0, buff.n);
	};

	const luaZ_buffremove$1 = function(buff, i) {
	    buff.n -= i;
	};

	const luaZ_resetbuffer$1 = function(buff) {
	    buff.n = 0;
	};

	const luaZ_resizebuffer$1 = function(L, buff, size) {
	    let newbuff = new Uint8Array(size);
	    if (buff.buffer)
	        newbuff.set(buff.buffer);
	    buff.buffer = newbuff;
	};

	class ZIO$2 {
	    constructor(L, reader, data) {
	        this.L = L;           /* Lua state (for reader) */
	        lua_assert$6(typeof reader == "function", "ZIO requires a reader");
	        this.reader = reader; /* reader function */
	        this.data = data;     /* additional data */
	        this.n = 0;           /* bytes still unread */
	        this.buffer = null;
	        this.off = 0;         /* current position in buffer */
	    }

	    zgetc () {
	        return ((this.n--) > 0) ? this.buffer[this.off++] : luaZ_fill(this);
	    }
	}

	const EOZ$1 = -1;

	const luaZ_fill = function(z) {
	    let buff = z.reader(z.L, z.data);
	    if (buff === null)
	        return EOZ$1;
	    lua_assert$6(buff instanceof Uint8Array, "Should only load binary of array of bytes");
	    let size = buff.length;
	    if (size === 0)
	        return EOZ$1;
	    z.buffer = buff;
	    z.off = 0;
	    z.n = size - 1;
	    return z.buffer[z.off++];
	};

	/* b should be an array-like that will be set to bytes
	 * b_offset is the offset at which to start filling */
	const luaZ_read$1 = function(z, b, b_offset, n) {
	    while (n) {
	        if (z.n === 0) { /* no bytes in buffer? */
	            if (luaZ_fill(z) === EOZ$1)
	                return n; /* no more input; return number of missing bytes */
	            else {
	                z.n++;  /* luaZ_fill consumed first byte; put it back */
	                z.off--;
	            }
	        }
	        let m = (n <= z.n) ? n : z.n; /* min. between n and z->n */
	        for (let i=0; i<m; i++) {
	            b[b_offset++] = z.buffer[z.off++];
	        }
	        z.n -= m;
	        if (z.n === 0) // remove reference to input so it can get freed
	            z.buffer = null;
	        n -= m;
	    }

	    return 0;
	};

	lzio.EOZ               = EOZ$1;
	lzio.luaZ_buffer       = luaZ_buffer$1;
	lzio.luaZ_buffremove   = luaZ_buffremove$1;
	lzio.luaZ_fill         = luaZ_fill;
	lzio.luaZ_read         = luaZ_read$1;
	lzio.luaZ_resetbuffer  = luaZ_resetbuffer$1;
	lzio.luaZ_resizebuffer = luaZ_resizebuffer$1;
	lzio.MBuffer           = MBuffer$1;
	lzio.ZIO               = ZIO$2;

	const {
	    constant_types: { LUA_TBOOLEAN: LUA_TBOOLEAN$8, LUA_TLNGSTR: LUA_TLNGSTR$4 },
	    thread_status: { LUA_ERRSYNTAX: LUA_ERRSYNTAX$2 },
	    to_luastring: to_luastring$j
	} = defs$2;
	const {
	    LUA_MINBUFFER,
	    MAX_INT: MAX_INT$1,
	    lua_assert: lua_assert$5
	} = llimits;
	const ldebug$3   = ldebug$8;
	const ldo$5      = ldo$a;
	const {
	    lisdigit,
	    lislalnum,
	    lislalpha,
	    lisspace,
	    lisxdigit
	} = ljstype;
	const lobject$6  = lobject$c;
	const {
	    luaS_bless: luaS_bless$2,
	    luaS_hash,
	    luaS_hashlongstr,
	    luaS_new: luaS_new$2
	} = lstring;
	const ltable$4   = ltable$9;
	const {
	    EOZ,
	    luaZ_buffer,
	    luaZ_buffremove,
	    luaZ_resetbuffer,
	    luaZ_resizebuffer
	} = lzio;

	const FIRST_RESERVED = 257;

	const LUA_ENV = to_luastring$j("_ENV", true);

	/* terminal symbols denoted by reserved words */
	const TK_AND      = FIRST_RESERVED;
	const TK_BREAK    = FIRST_RESERVED + 1;
	const TK_DO       = FIRST_RESERVED + 2;
	const TK_ELSE     = FIRST_RESERVED + 3;
	const TK_ELSEIF   = FIRST_RESERVED + 4;
	const TK_END      = FIRST_RESERVED + 5;
	const TK_FALSE    = FIRST_RESERVED + 6;
	const TK_FOR      = FIRST_RESERVED + 7;
	const TK_FUNCTION = FIRST_RESERVED + 8;
	const TK_GOTO     = FIRST_RESERVED + 9;
	const TK_IF       = FIRST_RESERVED + 10;
	const TK_IN       = FIRST_RESERVED + 11;
	const TK_LOCAL    = FIRST_RESERVED + 12;
	const TK_NIL      = FIRST_RESERVED + 13;
	const TK_NOT      = FIRST_RESERVED + 14;
	const TK_OR       = FIRST_RESERVED + 15;
	const TK_REPEAT   = FIRST_RESERVED + 16;
	const TK_RETURN   = FIRST_RESERVED + 17;
	const TK_THEN     = FIRST_RESERVED + 18;
	const TK_TRUE     = FIRST_RESERVED + 19;
	const TK_UNTIL    = FIRST_RESERVED + 20;
	const TK_WHILE    = FIRST_RESERVED + 21;
	/* other terminal symbols */
	const TK_IDIV     = FIRST_RESERVED + 22;
	const TK_CONCAT   = FIRST_RESERVED + 23;
	const TK_DOTS     = FIRST_RESERVED + 24;
	const TK_EQ       = FIRST_RESERVED + 25;
	const TK_GE       = FIRST_RESERVED + 26;
	const TK_LE       = FIRST_RESERVED + 27;
	const TK_NE       = FIRST_RESERVED + 28;
	const TK_SHL      = FIRST_RESERVED + 29;
	const TK_SHR      = FIRST_RESERVED + 30;
	const TK_DBCOLON  = FIRST_RESERVED + 31;
	const TK_EOS      = FIRST_RESERVED + 32;
	const TK_FLT      = FIRST_RESERVED + 33;
	const TK_INT      = FIRST_RESERVED + 34;
	const TK_NAME     = FIRST_RESERVED + 35;
	const TK_STRING   = FIRST_RESERVED + 36;

	const RESERVED = {
	    "TK_AND":      TK_AND,
	    "TK_BREAK":    TK_BREAK,
	    "TK_DO":       TK_DO,
	    "TK_ELSE":     TK_ELSE,
	    "TK_ELSEIF":   TK_ELSEIF,
	    "TK_END":      TK_END,
	    "TK_FALSE":    TK_FALSE,
	    "TK_FOR":      TK_FOR,
	    "TK_FUNCTION": TK_FUNCTION,
	    "TK_GOTO":     TK_GOTO,
	    "TK_IF":       TK_IF,
	    "TK_IN":       TK_IN,
	    "TK_LOCAL":    TK_LOCAL,
	    "TK_NIL":      TK_NIL,
	    "TK_NOT":      TK_NOT,
	    "TK_OR":       TK_OR,
	    "TK_REPEAT":   TK_REPEAT,
	    "TK_RETURN":   TK_RETURN,
	    "TK_THEN":     TK_THEN,
	    "TK_TRUE":     TK_TRUE,
	    "TK_UNTIL":    TK_UNTIL,
	    "TK_WHILE":    TK_WHILE,
	    "TK_IDIV":     TK_IDIV,
	    "TK_CONCAT":   TK_CONCAT,
	    "TK_DOTS":     TK_DOTS,
	    "TK_EQ":       TK_EQ,
	    "TK_GE":       TK_GE,
	    "TK_LE":       TK_LE,
	    "TK_NE":       TK_NE,
	    "TK_SHL":      TK_SHL,
	    "TK_SHR":      TK_SHR,
	    "TK_DBCOLON":  TK_DBCOLON,
	    "TK_EOS":      TK_EOS,
	    "TK_FLT":      TK_FLT,
	    "TK_INT":      TK_INT,
	    "TK_NAME":     TK_NAME,
	    "TK_STRING":   TK_STRING
	};

	const luaX_tokens = [
	    "and", "break", "do", "else", "elseif",
	    "end", "false", "for", "function", "goto", "if",
	    "in", "local", "nil", "not", "or", "repeat",
	    "return", "then", "true", "until", "while",
	    "//", "..", "...", "==", ">=", "<=", "~=",
	    "<<", ">>", "::", "<eof>",
	    "<number>", "<integer>", "<name>", "<string>"
	].map((e, i)=>to_luastring$j(e));

	class SemInfo {
	    constructor() {
	        this.r = NaN;
	        this.i = NaN;
	        this.ts = null;
	    }
	}

	class Token {
	    constructor() {
	        this.token = NaN;
	        this.seminfo = new SemInfo();
	    }
	}

	/* state of the lexer plus state of the parser when shared by all
	   functions */
	class LexState {
	    constructor() {
	        this.current = NaN;  /* current character (charint) */
	        this.linenumber = NaN;  /* input line counter */
	        this.lastline = NaN;  /* line of last token 'consumed' */
	        this.t = new Token();  /* current token */
	        this.lookahead = new Token();  /* look ahead token */
	        this.fs = null;  /* current function (parser) */
	        this.L = null;
	        this.z = null; /* input stream */
	        this.buff = null;  /* buffer for tokens */
	        this.h = null;  /* to reuse strings */
	        this.dyd = null;  /* dynamic structures used by the parser */
	        this.source = null;  /* current source name */
	        this.envn = null;  /* environment variable name */
	    }
	}

	const save = function(ls, c) {
	    let b = ls.buff;
	    if (b.n + 1 > b.buffer.length) {
	        if (b.buffer.length >= MAX_INT$1/2)
	            lexerror(ls, to_luastring$j("lexical element too long", true), 0);
	        let newsize = b.buffer.length*2;
	        luaZ_resizebuffer(ls.L, b, newsize);
	    }
	    b.buffer[b.n++] = c < 0 ? 255 + c + 1 : c;
	};

	const luaX_token2str = function(ls, token) {
	    if (token < FIRST_RESERVED) {  /* single-byte symbols? */
	        return lobject$6.luaO_pushfstring(ls.L, to_luastring$j("'%c'", true), token);
	    } else {
	        let s = luaX_tokens[token - FIRST_RESERVED];
	        if (token < TK_EOS)  /* fixed format (symbols and reserved words)? */
	            return lobject$6.luaO_pushfstring(ls.L, to_luastring$j("'%s'", true), s);
	        else  /* names, strings, and numerals */
	            return s;
	    }
	};

	const currIsNewline = function(ls) {
	    return ls.current === 10 /* ('\n').charCodeAt(0) */ || ls.current === 13 /* ('\r').charCodeAt(0) */;
	};

	const next = function(ls) {
	    ls.current = ls.z.zgetc();
	};

	const save_and_next = function(ls) {
	    save(ls, ls.current);
	    next(ls);
	};

	/*
	** creates a new string and anchors it in scanner's table so that
	** it will not be collected until the end of the compilation
	** (by that time it should be anchored somewhere)
	*/
	const TVtrue = new lobject$6.TValue(LUA_TBOOLEAN$8, true);
	const luaX_newstring = function(ls, str) {
	    let L = ls.L;
	    let ts = luaS_new$2(L, str);
	    /* HACK: Workaround lack of ltable 'keyfromval' */
	    let tpair = ls.h.strong.get(luaS_hashlongstr(ts));
	    if (!tpair) { /* not in use yet? */
	        let key = new lobject$6.TValue(LUA_TLNGSTR$4, ts);
	        ltable$4.luaH_setfrom(L, ls.h, key, TVtrue);
	    } else { /* string already present */
	        ts = tpair.key.tsvalue(); /* re-use value previously stored */
	    }
	    return ts;
	};

	/*
	** increment line number and skips newline sequence (any of
	** \n, \r, \n\r, or \r\n)
	*/
	const inclinenumber = function(ls) {
	    let old = ls.current;
	    lua_assert$5(currIsNewline(ls));
	    next(ls);  /* skip '\n' or '\r' */
	    if (currIsNewline(ls) && ls.current !== old)
	        next(ls);  /* skip '\n\r' or '\r\n' */
	    if (++ls.linenumber >= MAX_INT$1)
	        lexerror(ls, to_luastring$j("chunk has too many lines", true), 0);
	};

	const luaX_setinput = function(L, ls, z, source, firstchar) {
	    ls.t = {
	        token: 0,
	        seminfo: new SemInfo()
	    };
	    ls.L = L;
	    ls.current = firstchar;
	    ls.lookahead = {
	        token: TK_EOS,
	        seminfo: new SemInfo()
	    };
	    ls.z = z;
	    ls.fs = null;
	    ls.linenumber = 1;
	    ls.lastline = 1;
	    ls.source = source;
	    ls.envn = luaS_bless$2(L, LUA_ENV);
	    luaZ_resizebuffer(L, ls.buff, LUA_MINBUFFER);  /* initialize buffer */
	};

	const check_next1 = function(ls, c) {
	    if (ls.current === c) {
	        next(ls);
	        return true;
	    }

	    return false;
	};

	/*
	** Check whether current char is in set 'set' (with two chars) and
	** saves it
	*/
	const check_next2 = function(ls, set) {
	    if (ls.current === set[0].charCodeAt(0) || ls.current === set[1].charCodeAt(0)) {
	        save_and_next(ls);
	        return true;
	    }

	    return false;
	};

	const read_numeral = function(ls, seminfo) {
	    let expo = "Ee";
	    let first = ls.current;
	    lua_assert$5(lisdigit(ls.current));
	    save_and_next(ls);
	    if (first === 48 /* ('0').charCodeAt(0) */ && check_next2(ls, "xX"))  /* hexadecimal? */
	        expo = "Pp";

	    for (;;) {
	        if (check_next2(ls, expo))  /* exponent part? */
	            check_next2(ls, "-+");  /* optional exponent sign */
	        if (lisxdigit(ls.current))
	            save_and_next(ls);
	        else if (ls.current === 46 /* ('.').charCodeAt(0) */)
	            save_and_next(ls);
	        else break;
	    }

	    // save(ls, 0);

	    let obj = new lobject$6.TValue();
	    if (lobject$6.luaO_str2num(luaZ_buffer(ls.buff), obj) === 0)  /* format error? */
	        lexerror(ls, to_luastring$j("malformed number", true), TK_FLT);
	    if (obj.ttisinteger()) {
	        seminfo.i = obj.value;
	        return TK_INT;
	    } else {
	        lua_assert$5(obj.ttisfloat());
	        seminfo.r = obj.value;
	        return TK_FLT;
	    }
	};

	const txtToken = function(ls, token) {
	    switch (token) {
	        case TK_NAME: case TK_STRING:
	        case TK_FLT: case TK_INT:
	            // save(ls, 0);
	            return lobject$6.luaO_pushfstring(ls.L, to_luastring$j("'%s'", true), luaZ_buffer(ls.buff));
	        default:
	            return luaX_token2str(ls, token);
	    }
	};

	const lexerror = function(ls, msg, token) {
	    msg = ldebug$3.luaG_addinfo(ls.L, msg, ls.source, ls.linenumber);
	    if (token)
	        lobject$6.luaO_pushfstring(ls.L, to_luastring$j("%s near %s"), msg, txtToken(ls, token));
	    ldo$5.luaD_throw(ls.L, LUA_ERRSYNTAX$2);
	};

	const luaX_syntaxerror = function(ls, msg) {
	    lexerror(ls, msg, ls.t.token);
	};

	/*
	** skip a sequence '[=*[' or ']=*]'; if sequence is well formed, return
	** its number of '='s; otherwise, return a negative number (-1 iff there
	** are no '='s after initial bracket)
	*/
	const skip_sep = function(ls) {
	    let count = 0;
	    let s = ls.current;
	    lua_assert$5(s === 91 /* ('[').charCodeAt(0) */ || s === 93 /* (']').charCodeAt(0) */);
	    save_and_next(ls);
	    while (ls.current === 61 /* ('=').charCodeAt(0) */) {
	        save_and_next(ls);
	        count++;
	    }
	    return ls.current === s ? count : (-count) - 1;
	};

	const read_long_string = function(ls, seminfo, sep) {
	    let line = ls.linenumber;  /* initial line (for error message) */
	    save_and_next(ls);  /* skip 2nd '[' */

	    if (currIsNewline(ls))  /* string starts with a newline? */
	        inclinenumber(ls);  /* skip it */

	    let skip = false;
	    for (; !skip ;) {
	        switch (ls.current) {
	            case EOZ: {  /* error */
	                let what = seminfo ? "string" : "comment";
	                let msg = `unfinished long ${what} (starting at line ${line})`;
	                lexerror(ls, to_luastring$j(msg), TK_EOS);
	                break;
	            }
	            case 93 /* (']').charCodeAt(0) */: {
	                if (skip_sep(ls) === sep) {
	                    save_and_next(ls);  /* skip 2nd ']' */
	                    skip = true;
	                }
	                break;
	            }
	            case 10 /* ('\n').charCodeAt(0) */:
	            case 13 /* ('\r').charCodeAt(0) */: {
	                save(ls, 10 /* ('\n').charCodeAt(0) */);
	                inclinenumber(ls);
	                if (!seminfo) luaZ_resetbuffer(ls.buff);
	                break;
	            }
	            default: {
	                if (seminfo) save_and_next(ls);
	                else next(ls);
	            }
	        }
	    }

	    if (seminfo)
	        seminfo.ts = luaX_newstring(ls, ls.buff.buffer.subarray(2 + sep, ls.buff.n - (2 + sep)));
	};

	const esccheck = function(ls, c, msg) {
	    if (!c) {
	        if (ls.current !== EOZ)
	            save_and_next(ls);  /* add current to buffer for error message */
	        lexerror(ls, msg, TK_STRING);
	    }
	};

	const gethexa = function(ls) {
	    save_and_next(ls);
	    esccheck(ls, lisxdigit(ls.current), to_luastring$j("hexadecimal digit expected", true));
	    return lobject$6.luaO_hexavalue(ls.current);
	};

	const readhexaesc = function(ls) {
	    let r = gethexa(ls);
	    r = (r << 4) + gethexa(ls);
	    luaZ_buffremove(ls.buff, 2);  /* remove saved chars from buffer */
	    return r;
	};

	const readutf8desc = function(ls) {
	    let i = 4;  /* chars to be removed: '\', 'u', '{', and first digit */
	    save_and_next(ls);  /* skip 'u' */
	    esccheck(ls, ls.current === 123 /* ('{').charCodeAt(0) */, to_luastring$j("missing '{'", true));
	    let r = gethexa(ls);  /* must have at least one digit */

	    save_and_next(ls);
	    while (lisxdigit(ls.current)) {
	        i++;
	        r = (r << 4) + lobject$6.luaO_hexavalue(ls.current);
	        esccheck(ls, r <= 0x10FFFF, to_luastring$j("UTF-8 value too large", true));
	        save_and_next(ls);
	    }
	    esccheck(ls, ls.current === 125 /* ('}').charCodeAt(0) */, to_luastring$j("missing '}'", true));
	    next(ls);  /* skip '}' */
	    luaZ_buffremove(ls.buff, i);  /* remove saved chars from buffer */
	    return r;
	};

	const utf8esc = function(ls) {
	    let buff = new Uint8Array(lobject$6.UTF8BUFFSZ);
	    let n = lobject$6.luaO_utf8esc(buff, readutf8desc(ls));
	    for (; n > 0; n--)  /* add 'buff' to string */
	        save(ls, buff[lobject$6.UTF8BUFFSZ - n]);
	};

	const readdecesc = function(ls) {
	    let r = 0;  /* result accumulator */
	    let i;
	    for (i = 0; i < 3 && lisdigit(ls.current); i++) {  /* read up to 3 digits */
	        r = 10 * r + ls.current - 48 /* ('0').charCodeAt(0) */;
	        save_and_next(ls);
	    }
	    esccheck(ls, r <= 255, to_luastring$j("decimal escape too large", true));
	    luaZ_buffremove(ls.buff, i);  /* remove read digits from buffer */
	    return r;
	};

	const read_string = function(ls, del, seminfo) {
	    save_and_next(ls);  /* keep delimiter (for error messages) */

	    while (ls.current !== del) {
	        switch (ls.current) {
	            case EOZ:
	                lexerror(ls, to_luastring$j("unfinished string", true), TK_EOS);
	                break;
	            case 10 /* ('\n').charCodeAt(0) */:
	            case 13 /* ('\r').charCodeAt(0) */:
	                lexerror(ls, to_luastring$j("unfinished string", true), TK_STRING);
	                break;
	            case 92 /* ('\\').charCodeAt(0) */: {  /* escape sequences */
	                save_and_next(ls);  /* keep '\\' for error messages */
	                let will;
	                let c;
	                switch(ls.current) {
	                    case 97 /* ('a').charCodeAt(0) */: c = 7 /* \a isn't valid JS */; will = 'read_save'; break;
	                    case 98 /* ('b').charCodeAt(0) */: c = 8 /* ('\b').charCodeAt(0) */; will = 'read_save'; break;
	                    case 102 /* ('f').charCodeAt(0) */: c = 12 /* ('\f').charCodeAt(0) */; will = 'read_save'; break;
	                    case 110 /* ('n').charCodeAt(0) */: c = 10 /* ('\n').charCodeAt(0) */; will = 'read_save'; break;
	                    case 114 /* ('r').charCodeAt(0) */: c = 13 /* ('\r').charCodeAt(0) */; will = 'read_save'; break;
	                    case 116 /* ('t').charCodeAt(0) */: c = 9 /* ('\t').charCodeAt(0) */; will = 'read_save'; break;
	                    case 118 /* ('v').charCodeAt(0) */: c = 11 /* ('\v').charCodeAt(0) */; will = 'read_save'; break;
	                    case 120 /* ('x').charCodeAt(0) */: c = readhexaesc(ls); will = 'read_save'; break;
	                    case 117 /* ('u').charCodeAt(0) */: utf8esc(ls); will = 'no_save'; break;
	                    case 10 /* ('\n').charCodeAt(0) */:
	                    case 13 /* ('\r').charCodeAt(0) */:
	                        inclinenumber(ls); c = 10 /* ('\n').charCodeAt(0) */; will = 'only_save'; break;
	                    case 92 /* ('\\').charCodeAt(0) */:
	                    case 34 /* ('"').charCodeAt(0) */:
	                    case 39 /* ('\'').charCodeAt(0) */:
	                        c = ls.current; will = 'read_save'; break;
	                    case EOZ: will = 'no_save'; break;  /* will raise an error next loop */
	                    case 122 /* ('z').charCodeAt(0) */: {  /* zap following span of spaces */
	                        luaZ_buffremove(ls.buff, 1);  /* remove '\\' */
	                        next(ls);  /* skip the 'z' */
	                        while (lisspace(ls.current)) {
	                            if (currIsNewline(ls)) inclinenumber(ls);
	                            else next(ls);
	                        }
	                        will = 'no_save'; break;
	                    }
	                    default: {
	                        esccheck(ls, lisdigit(ls.current), to_luastring$j("invalid escape sequence", true));
	                        c = readdecesc(ls);  /* digital escape '\ddd' */
	                        will = 'only_save'; break;
	                    }
	                }

	                if (will === 'read_save')
	                    next(ls);

	                if (will === 'read_save' || will === 'only_save') {
	                    luaZ_buffremove(ls.buff, 1);  /* remove '\\' */
	                    save(ls, c);
	                }

	                break;
	            }
	            default:
	                save_and_next(ls);
	        }
	    }
	    save_and_next(ls);  /* skip delimiter */

	    seminfo.ts = luaX_newstring(ls, ls.buff.buffer.subarray(1, ls.buff.n-1));
	};

	const token_to_index = Object.create(null); /* don't want to return true for e.g. 'hasOwnProperty' */
	luaX_tokens.forEach((e, i)=>token_to_index[luaS_hash(e)] = i);

	const isreserved = function(w) {
	    let kidx = token_to_index[luaS_hashlongstr(w)];
	    return kidx !== void 0 && kidx <= 22;
	};

	const llex$3 = function(ls, seminfo) {
	    luaZ_resetbuffer(ls.buff);
	    for (;;) {
	        lua_assert$5(typeof ls.current == "number"); /* fengari addition */
	        switch (ls.current) {
	            case 10 /* ('\n').charCodeAt(0) */:
	            case 13 /* ('\r').charCodeAt(0) */: {  /* line breaks */
	                inclinenumber(ls);
	                break;
	            }
	            case 32 /* (' ').charCodeAt(0) */:
	            case 12 /* ('\f').charCodeAt(0) */:
	            case 9 /* ('\t').charCodeAt(0) */:
	            case 11 /* ('\v').charCodeAt(0) */: {  /* spaces */
	                next(ls);
	                break;
	            }
	            case 45 /* ('-').charCodeAt(0) */: {  /* '-' or '--' (comment) */
	                next(ls);
	                if (ls.current !== 45 /* ('-').charCodeAt(0) */) return 45 /* ('-').charCodeAt(0) */;
	                /* else is a comment */
	                next(ls);
	                if (ls.current === 91 /* ('[').charCodeAt(0) */) {  /* long comment? */
	                    let sep = skip_sep(ls);
	                    luaZ_resetbuffer(ls.buff);  /* 'skip_sep' may dirty the buffer */
	                    if (sep >= 0) {
	                        read_long_string(ls, null, sep);  /* skip long comment */
	                        luaZ_resetbuffer(ls.buff);  /* previous call may dirty the buff. */
	                        break;
	                    }
	                }

	                /* else short comment */
	                while (!currIsNewline(ls) && ls.current !== EOZ)
	                    next(ls);  /* skip until end of line (or end of file) */
	                break;
	            }
	            case 91 /* ('[').charCodeAt(0) */: {  /* long string or simply '[' */
	                let sep = skip_sep(ls);
	                if (sep >= 0) {
	                    read_long_string(ls, seminfo, sep);
	                    return TK_STRING;
	                } else if (sep !== -1)  /* '[=...' missing second bracket */
	                    lexerror(ls, to_luastring$j("invalid long string delimiter", true), TK_STRING);
	                return 91 /* ('[').charCodeAt(0) */;
	            }
	            case 61 /* ('=').charCodeAt(0) */: {
	                next(ls);
	                if (check_next1(ls, 61 /* ('=').charCodeAt(0) */)) return TK_EQ;
	                else return 61 /* ('=').charCodeAt(0) */;
	            }
	            case 60 /* ('<').charCodeAt(0) */: {
	                next(ls);
	                if (check_next1(ls, 61 /* ('=').charCodeAt(0) */)) return TK_LE;
	                else if (check_next1(ls, 60 /* ('<').charCodeAt(0) */)) return TK_SHL;
	                else return 60 /* ('<').charCodeAt(0) */;
	            }
	            case 62 /* ('>').charCodeAt(0) */: {
	                next(ls);
	                if (check_next1(ls, 61 /* ('=').charCodeAt(0) */)) return TK_GE;
	                else if (check_next1(ls, 62 /* ('>').charCodeAt(0) */)) return TK_SHR;
	                else return 62 /* ('>').charCodeAt(0) */;
	            }
	            case 47 /* ('/').charCodeAt(0) */: {
	                next(ls);
	                if (check_next1(ls, 47 /* ('/').charCodeAt(0) */)) return TK_IDIV;
	                else return 47 /* ('/').charCodeAt(0) */;
	            }
	            case 126 /* ('~').charCodeAt(0) */: {
	                next(ls);
	                if (check_next1(ls, 61 /* ('=').charCodeAt(0) */)) return TK_NE;
	                else return 126 /* ('~').charCodeAt(0) */;
	            }
	            case 58 /* (':').charCodeAt(0) */: {
	                next(ls);
	                if (check_next1(ls, 58 /* (':').charCodeAt(0) */)) return TK_DBCOLON;
	                else return 58 /* (':').charCodeAt(0) */;
	            }
	            case 34 /* ('"').charCodeAt(0) */:
	            case 39 /* ('\'').charCodeAt(0) */: {  /* short literal strings */
	                read_string(ls, ls.current, seminfo);
	                return TK_STRING;
	            }
	            case 46 /* ('.').charCodeAt(0) */: {  /* '.', '..', '...', or number */
	                save_and_next(ls);
	                if (check_next1(ls, 46 /* ('.').charCodeAt(0) */)) {
	                    if (check_next1(ls, 46 /* ('.').charCodeAt(0) */))
	                        return TK_DOTS;   /* '...' */
	                    else return TK_CONCAT;   /* '..' */
	                }
	                else if (!lisdigit(ls.current)) return 46 /* ('.').charCodeAt(0) */;
	                else return read_numeral(ls, seminfo);
	            }
	            case 48 /* ('0').charCodeAt(0) */: case 49 /* ('1').charCodeAt(0) */: case 50 /* ('2').charCodeAt(0) */: case 51 /* ('3').charCodeAt(0) */: case 52 /* ('4').charCodeAt(0) */:
	            case 53 /* ('5').charCodeAt(0) */: case 54 /* ('6').charCodeAt(0) */: case 55 /* ('7').charCodeAt(0) */: case 56 /* ('8').charCodeAt(0) */: case 57 /* ('9').charCodeAt(0) */: {
	                return read_numeral(ls, seminfo);
	            }
	            case EOZ: {
	                return TK_EOS;
	            }
	            default: {
	                if (lislalpha(ls.current)) {  /* identifier or reserved word? */
	                    do {
	                        save_and_next(ls);
	                    } while (lislalnum(ls.current));
	                    let ts = luaX_newstring(ls, luaZ_buffer(ls.buff));
	                    seminfo.ts = ts;
	                    let kidx = token_to_index[luaS_hashlongstr(ts)];
	                    if (kidx !== void 0 && kidx <= 22)  /* reserved word? */
	                        return kidx + FIRST_RESERVED;
	                    else
	                        return TK_NAME;
	                } else {  /* single-char tokens (+ - / ...) */
	                    let c = ls.current;
	                    next(ls);
	                    return c;
	                }
	            }
	        }
	    }
	};

	const luaX_next = function(ls) {
	    ls.lastline = ls.linenumber;
	    if (ls.lookahead.token !== TK_EOS) {  /* is there a look-ahead token? */
	        ls.t.token = ls.lookahead.token;  /* use this one */
	        ls.t.seminfo.i = ls.lookahead.seminfo.i;
	        ls.t.seminfo.r = ls.lookahead.seminfo.r;
	        ls.t.seminfo.ts = ls.lookahead.seminfo.ts;
	        ls.lookahead.token = TK_EOS;  /* and discharge it */
	    } else
	        ls.t.token = llex$3(ls, ls.t.seminfo);  /* read next token */
	};

	const luaX_lookahead = function(ls) {
	    lua_assert$5(ls.lookahead.token === TK_EOS);
	    ls.lookahead.token = llex$3(ls, ls.lookahead.seminfo);
	    return ls.lookahead.token;
	};

	llex$4.FIRST_RESERVED   = FIRST_RESERVED;
	llex$4.LUA_ENV          = LUA_ENV;
	llex$4.LexState         = LexState;
	llex$4.RESERVED         = RESERVED;
	llex$4.isreserved       = isreserved;
	llex$4.luaX_lookahead   = luaX_lookahead;
	llex$4.luaX_newstring   = luaX_newstring;
	llex$4.luaX_next        = luaX_next;
	llex$4.luaX_setinput    = luaX_setinput;
	llex$4.luaX_syntaxerror = luaX_syntaxerror;
	llex$4.luaX_token2str   = luaX_token2str;
	llex$4.luaX_tokens      = luaX_tokens;

	const {
	    LUA_MULTRET: LUA_MULTRET$6,
	    LUA_OPADD,
	    LUA_OPBAND,
	    LUA_OPBNOT: LUA_OPBNOT$1,
	    LUA_OPBOR,
	    LUA_OPBXOR,
	    LUA_OPDIV,
	    LUA_OPIDIV,
	    LUA_OPMOD,
	    LUA_OPSHL,
	    LUA_OPSHR,
	    LUA_OPUNM: LUA_OPUNM$1,
	    constant_types: {
	        LUA_TBOOLEAN: LUA_TBOOLEAN$7,
	        LUA_TLIGHTUSERDATA: LUA_TLIGHTUSERDATA$3,
	        LUA_TLNGSTR: LUA_TLNGSTR$3,
	        LUA_TNIL: LUA_TNIL$d,
	        LUA_TNUMFLT: LUA_TNUMFLT$3,
	        LUA_TNUMINT: LUA_TNUMINT$3,
	        LUA_TTABLE: LUA_TTABLE$a
	    },
	    to_luastring: to_luastring$i
	} = defs$2;
	const { lua_assert: lua_assert$4 } = llimits;
	const llex$2     = llex$4;
	const lobject$5  = lobject$c;
	const lopcodes$2 = lopcodes$3;
	const lparser$1  = lparser$2;
	const ltable$3   = ltable$9;
	const lvm$3      = lvm$6;

	const OpCodesI = lopcodes$2.OpCodesI;
	const TValue$1   = lobject$5.TValue;

	/* Maximum number of registers in a Lua function (must fit in 8 bits) */
	const MAXREGS = 255;

	/*
	** Marks the end of a patch list. It is an invalid value both as an absolute
	** address, and as a list link (would link an element to itself).
	*/
	const NO_JUMP$1 = -1;

	const BinOpr = {
	    OPR_ADD:      0,
	    OPR_SUB:      1,
	    OPR_MUL:      2,
	    OPR_MOD:      3,
	    OPR_POW:      4,
	    OPR_DIV:      5,
	    OPR_IDIV:     6,
	    OPR_BAND:     7,
	    OPR_BOR:      8,
	    OPR_BXOR:     9,
	    OPR_SHL:      10,
	    OPR_SHR:      11,
	    OPR_CONCAT:   12,
	    OPR_EQ:       13,
	    OPR_LT:       14,
	    OPR_LE:       15,
	    OPR_NE:       16,
	    OPR_GT:       17,
	    OPR_GE:       18,
	    OPR_AND:      19,
	    OPR_OR:       20,
	    OPR_NOBINOPR: 21
	};

	const UnOpr = {
	    OPR_MINUS:    0,
	    OPR_BNOT:     1,
	    OPR_NOT:      2,
	    OPR_LEN:      3,
	    OPR_NOUNOPR:  4
	};

	const hasjumps = function(e) {
	    return e.t !== e.f;
	};

	/*
	** If expression is a numeric constant returns either true or a new TValue
	** (depending on 'make_tvalue'). Otherwise, returns false.
	*/
	const tonumeral = function(e, make_tvalue) {
	    let ek = lparser$1.expkind;
	    if (hasjumps(e))
	        return false;  /* not a numeral */
	    switch (e.k) {
	        case ek.VKINT:
	            if (make_tvalue) {
	                return new TValue$1(LUA_TNUMINT$3, e.u.ival);
	            }
	            return true;
	        case ek.VKFLT:
	            if (make_tvalue) {
	                return new TValue$1(LUA_TNUMFLT$3, e.u.nval);
	            }
	            return true;
	        default: return false;
	    }
	};

	/*
	** Create a OP_LOADNIL instruction, but try to optimize: if the previous
	** instruction is also OP_LOADNIL and ranges are compatible, adjust
	** range of previous instruction instead of emitting a new one. (For
	** instance, 'local a; local b' will generate a single opcode.)
	*/
	const luaK_nil$1 = function(fs, from, n) {
	    let previous;
	    let l = from + n - 1;  /* last register to set nil */
	    if (fs.pc > fs.lasttarget) {  /* no jumps to current position? */
	        previous = fs.f.code[fs.pc-1];
	        if (previous.opcode === OpCodesI.OP_LOADNIL) {  /* previous is LOADNIL? */
	            let pfrom = previous.A;  /* get previous range */
	            let pl = pfrom + previous.B;
	            if ((pfrom <= from && from <= pl + 1) ||
	                    (from <= pfrom && pfrom <= l + 1)) {  /* can connect both? */
	                if (pfrom < from) from = pfrom;  /* from = min(from, pfrom) */
	                if (pl > l) l = pl;  /* l = max(l, pl) */
	                lopcodes$2.SETARG_A(previous, from);
	                lopcodes$2.SETARG_B(previous, l - from);
	                return;
	            }
	        }  /* else go through */
	    }
	    luaK_codeABC$1(fs, OpCodesI.OP_LOADNIL, from, n - 1, 0);  /* else no optimization */
	};

	const getinstruction$1 = function(fs, e) {
	    return fs.f.code[e.u.info];
	};

	/*
	** Gets the destination address of a jump instruction. Used to traverse
	** a list of jumps.
	*/
	const getjump = function(fs, pc) {
	    let offset = fs.f.code[pc].sBx;
	    if (offset === NO_JUMP$1)  /* point to itself represents end of list */
	        return NO_JUMP$1;  /* end of list */
	    else
	        return pc + 1 + offset;  /* turn offset into absolute position */
	};

	/*
	** Fix jump instruction at position 'pc' to jump to 'dest'.
	** (Jump addresses are relative in Lua)
	*/
	const fixjump = function(fs, pc, dest) {
	    let jmp = fs.f.code[pc];
	    let offset = dest - (pc + 1);
	    lua_assert$4(dest !== NO_JUMP$1);
	    if (Math.abs(offset) > lopcodes$2.MAXARG_sBx)
	        llex$2.luaX_syntaxerror(fs.ls, to_luastring$i("control structure too long", true));
	    lopcodes$2.SETARG_sBx(jmp, offset);
	};

	/*
	** Concatenate jump-list 'l2' into jump-list 'l1'
	*/
	const luaK_concat$1 = function(fs, l1, l2) {
	    if (l2 === NO_JUMP$1) return l1;  /* nothing to concatenate? */
	    else if (l1 === NO_JUMP$1)  /* no original list? */
	        l1 = l2;
	    else {
	        let list = l1;
	        let next = getjump(fs, list);
	        while (next !== NO_JUMP$1) {  /* find last element */
	            list = next;
	            next = getjump(fs, list);
	        }
	        fixjump(fs, list, l2);
	    }

	    return l1;
	};

	/*
	** Create a jump instruction and return its position, so its destination
	** can be fixed later (with 'fixjump'). If there are jumps to
	** this position (kept in 'jpc'), link them all together so that
	** 'patchlistaux' will fix all them directly to the final destination.
	*/
	const luaK_jump$1 = function (fs) {
	    let jpc = fs.jpc;  /* save list of jumps to here */
	    fs.jpc = NO_JUMP$1;  /* no more jumps to here */
	    let j = luaK_codeAsBx$1(fs, OpCodesI.OP_JMP, 0, NO_JUMP$1);
	    j = luaK_concat$1(fs, j, jpc);  /* keep them on hold */
	    return j;
	};

	const luaK_jumpto$1 = function(fs, t) {
	    return luaK_patchlist$1(fs, luaK_jump$1(fs), t);
	};

	/*
	** Code a 'return' instruction
	*/
	const luaK_ret$1 = function(fs, first, nret) {
	    luaK_codeABC$1(fs, OpCodesI.OP_RETURN, first, nret + 1, 0);
	};

	/*
	** Code a "conditional jump", that is, a test or comparison opcode
	** followed by a jump. Return jump position.
	*/
	const condjump = function(fs, op, A, B, C) {
	    luaK_codeABC$1(fs, op, A, B, C);
	    return luaK_jump$1(fs);
	};

	/*
	** returns current 'pc' and marks it as a jump target (to avoid wrong
	** optimizations with consecutive instructions not in the same basic block).
	*/
	const luaK_getlabel$1 = function(fs) {
	    fs.lasttarget = fs.pc;
	    return fs.pc;
	};

	/*
	** Returns the position of the instruction "controlling" a given
	** jump (that is, its condition), or the jump itself if it is
	** unconditional.
	*/
	const getjumpcontroloffset = function(fs, pc) {
	    if (pc >= 1 && lopcodes$2.testTMode(fs.f.code[pc - 1].opcode))
	        return pc - 1;
	    else
	        return pc;
	};
	const getjumpcontrol = function(fs, pc) {
	    return fs.f.code[getjumpcontroloffset(fs, pc)];
	};

	/*
	** Patch destination register for a TESTSET instruction.
	** If instruction in position 'node' is not a TESTSET, return 0 ("fails").
	** Otherwise, if 'reg' is not 'NO_REG', set it as the destination
	** register. Otherwise, change instruction to a simple 'TEST' (produces
	** no register value)
	*/
	const patchtestreg = function(fs, node, reg) {
	    let pc = getjumpcontroloffset(fs, node);
	    let i = fs.f.code[pc];
	    if (i.opcode !== OpCodesI.OP_TESTSET)
	        return false;  /* cannot patch other instructions */
	    if (reg !== lopcodes$2.NO_REG && reg !== i.B)
	        lopcodes$2.SETARG_A(i, reg);
	    else {
	        /* no register to put value or register already has the value;
	           change instruction to simple test */
	        fs.f.code[pc] = lopcodes$2.CREATE_ABC(OpCodesI.OP_TEST, i.B, 0, i.C);
	    }
	    return true;
	};

	/*
	** Traverse a list of tests ensuring no one produces a value
	*/
	const removevalues = function(fs, list) {
	    for (; list !== NO_JUMP$1; list = getjump(fs, list))
	        patchtestreg(fs, list, lopcodes$2.NO_REG);
	};

	/*
	** Traverse a list of tests, patching their destination address and
	** registers: tests producing values jump to 'vtarget' (and put their
	** values in 'reg'), other tests jump to 'dtarget'.
	*/
	const patchlistaux = function(fs, list, vtarget, reg, dtarget) {
	    while (list !== NO_JUMP$1) {
	        let next = getjump(fs, list);
	        if (patchtestreg(fs, list, reg))
	            fixjump(fs, list, vtarget);
	        else
	            fixjump(fs, list, dtarget);  /* jump to default target */
	        list = next;
	    }
	};

	/*
	** Ensure all pending jumps to current position are fixed (jumping
	** to current position with no values) and reset list of pending
	** jumps
	*/
	const dischargejpc = function(fs) {
	    patchlistaux(fs, fs.jpc, fs.pc, lopcodes$2.NO_REG, fs.pc);
	    fs.jpc = NO_JUMP$1;
	};

	/*
	** Add elements in 'list' to list of pending jumps to "here"
	** (current position)
	*/
	const luaK_patchtohere$1 = function(fs, list) {
	    luaK_getlabel$1(fs);  /* mark "here" as a jump target */
	    fs.jpc = luaK_concat$1(fs, fs.jpc, list);
	};

	/*
	** Path all jumps in 'list' to jump to 'target'.
	** (The assert means that we cannot fix a jump to a forward address
	** because we only know addresses once code is generated.)
	*/
	const luaK_patchlist$1 = function(fs, list, target) {
	    if (target === fs.pc)  /* 'target' is current position? */
	        luaK_patchtohere$1(fs, list);  /* add list to pending jumps */
	    else {
	        lua_assert$4(target < fs.pc);
	        patchlistaux(fs, list, target, lopcodes$2.NO_REG, target);
	    }
	};

	/*
	** Path all jumps in 'list' to close upvalues up to given 'level'
	** (The assertion checks that jumps either were closing nothing
	** or were closing higher levels, from inner blocks.)
	*/
	const luaK_patchclose$1 = function(fs, list, level) {
	    level++;  /* argument is +1 to reserve 0 as non-op */
	    for (; list !== NO_JUMP$1; list = getjump(fs, list)) {
	        let ins = fs.f.code[list];
	        lua_assert$4(ins.opcode === OpCodesI.OP_JMP && (ins.A === 0 || ins.A >= level));
	        lopcodes$2.SETARG_A(ins, level);
	    }
	};

	/*
	** Emit instruction 'i', checking for array sizes and saving also its
	** line information. Return 'i' position.
	*/
	const luaK_code = function(fs, i) {
	    let f = fs.f;
	    dischargejpc(fs);  /* 'pc' will change */
	    /* put new instruction in code array */
	    f.code[fs.pc] = i;
	    f.lineinfo[fs.pc] = fs.ls.lastline;
	    return fs.pc++;
	};

	/*
	** Format and emit an 'iABC' instruction. (Assertions check consistency
	** of parameters versus opcode.)
	*/
	const luaK_codeABC$1 = function(fs, o, a, b, c) {
	    lua_assert$4(lopcodes$2.getOpMode(o) === lopcodes$2.iABC);
	    lua_assert$4(lopcodes$2.getBMode(o) !== lopcodes$2.OpArgN || b === 0);
	    lua_assert$4(lopcodes$2.getCMode(o) !== lopcodes$2.OpArgN || c === 0);
	    lua_assert$4(a <= lopcodes$2.MAXARG_A && b <= lopcodes$2.MAXARG_B && c <= lopcodes$2.MAXARG_C);
	    return luaK_code(fs, lopcodes$2.CREATE_ABC(o, a, b, c));
	};

	/*
	** Format and emit an 'iABx' instruction.
	*/
	const luaK_codeABx$1 = function(fs, o, a, bc) {
	    lua_assert$4(lopcodes$2.getOpMode(o) === lopcodes$2.iABx || lopcodes$2.getOpMode(o) === lopcodes$2.iAsBx);
	    lua_assert$4(lopcodes$2.getCMode(o) === lopcodes$2.OpArgN);
	    lua_assert$4(a <= lopcodes$2.MAXARG_A && bc <= lopcodes$2.MAXARG_Bx);
	    return luaK_code(fs, lopcodes$2.CREATE_ABx(o, a, bc));
	};

	const luaK_codeAsBx$1 = function(fs,o,A,sBx) {
	    return luaK_codeABx$1(fs, o, A, (sBx) + lopcodes$2.MAXARG_sBx);
	};

	/*
	** Emit an "extra argument" instruction (format 'iAx')
	*/
	const codeextraarg = function(fs, a) {
	    lua_assert$4(a <= lopcodes$2.MAXARG_Ax);
	    return luaK_code(fs, lopcodes$2.CREATE_Ax(OpCodesI.OP_EXTRAARG, a));
	};

	/*
	** Emit a "load constant" instruction, using either 'OP_LOADK'
	** (if constant index 'k' fits in 18 bits) or an 'OP_LOADKX'
	** instruction with "extra argument".
	*/
	const luaK_codek$1 = function(fs, reg, k) {
	    if (k <= lopcodes$2.MAXARG_Bx)
	        return luaK_codeABx$1(fs, OpCodesI.OP_LOADK, reg, k);
	    else {
	        let p = luaK_codeABx$1(fs, OpCodesI.OP_LOADKX, reg, 0);
	        codeextraarg(fs, k);
	        return p;
	    }
	};

	/*
	** Check register-stack level, keeping track of its maximum size
	** in field 'maxstacksize'
	*/
	const luaK_checkstack$1 = function(fs, n) {
	    let newstack = fs.freereg + n;
	    if (newstack > fs.f.maxstacksize) {
	        if (newstack >= MAXREGS)
	            llex$2.luaX_syntaxerror(fs.ls, to_luastring$i("function or expression needs too many registers", true));
	        fs.f.maxstacksize = newstack;
	    }
	};

	/*
	** Reserve 'n' registers in register stack
	*/
	const luaK_reserveregs$1 = function(fs, n) {
	    luaK_checkstack$1(fs, n);
	    fs.freereg += n;
	};

	/*
	** Free register 'reg', if it is neither a constant index nor
	** a local variable.
	*/
	const freereg = function(fs, reg) {
	    if (!lopcodes$2.ISK(reg) && reg >= fs.nactvar) {
	        fs.freereg--;
	        lua_assert$4(reg === fs.freereg);
	    }
	};

	/*
	** Free register used by expression 'e' (if any)
	*/
	const freeexp = function(fs, e) {
	    if (e.k === lparser$1.expkind.VNONRELOC)
	        freereg(fs, e.u.info);
	};

	/*
	** Free registers used by expressions 'e1' and 'e2' (if any) in proper
	** order.
	*/
	const freeexps = function(fs, e1, e2) {
	    let r1 = (e1.k === lparser$1.expkind.VNONRELOC) ? e1.u.info : -1;
	    let r2 = (e2.k === lparser$1.expkind.VNONRELOC) ? e2.u.info : -1;
	    if (r1 > r2) {
	        freereg(fs, r1);
	        freereg(fs, r2);
	    }
	    else {
	        freereg(fs, r2);
	        freereg(fs, r1);
	    }
	};


	/*
	** Add constant 'v' to prototype's list of constants (field 'k').
	** Use scanner's table to cache position of constants in constant list
	** and try to reuse constants. Because some values should not be used
	** as keys (nil cannot be a key, integer keys can collapse with float
	** keys), the caller must provide a useful 'key' for indexing the cache.
	*/
	const addk = function(fs, key, v) {
	    let f = fs.f;
	    let idx = ltable$3.luaH_get(fs.L, fs.ls.h, key);  /* index scanner table */
	    if (idx.ttisinteger()) {  /* is there an index there? */
	        let k = idx.value;
	        /* correct value? (warning: must distinguish floats from integers!) */
	        if (k < fs.nk && f.k[k].ttype() === v.ttype() && f.k[k].value === v.value)
	            return k;  /* reuse index */
	    }
	    /* constant not found; create a new entry */
	    let k = fs.nk;
	    ltable$3.luaH_setfrom(fs.L, fs.ls.h, key, new lobject$5.TValue(LUA_TNUMINT$3, k));
	    f.k[k] = v;
	    fs.nk++;
	    return k;
	};

	/*
	** Add a string to list of constants and return its index.
	*/
	const luaK_stringK$1 = function(fs, s) {
	    let o = new TValue$1(LUA_TLNGSTR$3, s);
	    return addk(fs, o, o);  /* use string itself as key */
	};


	/*
	** Add an integer to list of constants and return its index.
	** Integers use userdata as keys to avoid collision with floats with
	** same value.
	*/
	const luaK_intK$1 = function(fs, n) {
	    let k = new TValue$1(LUA_TLIGHTUSERDATA$3, n);
	    let o = new TValue$1(LUA_TNUMINT$3, n);
	    return addk(fs, k, o);
	};

	/*
	** Add a float to list of constants and return its index.
	*/
	const luaK_numberK = function(fs, r) {
	    let o = new TValue$1(LUA_TNUMFLT$3, r);
	    return addk(fs, o, o);  /* use number itself as key */
	};


	/*
	** Add a boolean to list of constants and return its index.
	*/
	const boolK = function(fs, b) {
	    let o = new TValue$1(LUA_TBOOLEAN$7, b);
	    return addk(fs, o, o);  /* use boolean itself as key */
	};


	/*
	** Add nil to list of constants and return its index.
	*/
	const nilK = function(fs) {
	    let v = new TValue$1(LUA_TNIL$d, null);
	    let k = new TValue$1(LUA_TTABLE$a, fs.ls.h);
	    /* cannot use nil as key; instead use table itself to represent nil */
	    return addk(fs, k, v);
	};

	/*
	** Fix an expression to return the number of results 'nresults'.
	** Either 'e' is a multi-ret expression (function call or vararg)
	** or 'nresults' is LUA_MULTRET (as any expression can satisfy that).
	*/
	const luaK_setreturns$1 = function(fs, e, nresults) {
	    let ek = lparser$1.expkind;
	    if (e.k === ek.VCALL) {  /* expression is an open function call? */
	        lopcodes$2.SETARG_C(getinstruction$1(fs, e), nresults + 1);
	    }
	    else if (e.k === ek.VVARARG) {
	        let pc = getinstruction$1(fs, e);
	        lopcodes$2.SETARG_B(pc, nresults + 1);
	        lopcodes$2.SETARG_A(pc, fs.freereg);
	        luaK_reserveregs$1(fs, 1);
	    }
	    else lua_assert$4(nresults === LUA_MULTRET$6);
	};

	const luaK_setmultret$1 = function(fs, e) {
	    luaK_setreturns$1(fs, e, LUA_MULTRET$6);
	};

	/*
	** Fix an expression to return one result.
	** If expression is not a multi-ret expression (function call or
	** vararg), it already returns one result, so nothing needs to be done.
	** Function calls become VNONRELOC expressions (as its result comes
	** fixed in the base register of the call), while vararg expressions
	** become VRELOCABLE (as OP_VARARG puts its results where it wants).
	** (Calls are created returning one result, so that does not need
	** to be fixed.)
	*/
	const luaK_setoneret$1 = function(fs, e) {
	    let ek = lparser$1.expkind;
	    if (e.k === ek.VCALL) {  /* expression is an open function call? */
	        /* already returns 1 value */
	        lua_assert$4(getinstruction$1(fs, e).C === 2);
	        e.k = ek.VNONRELOC;  /* result has fixed position */
	        e.u.info = getinstruction$1(fs, e).A;
	    } else if (e.k === ek.VVARARG) {
	        lopcodes$2.SETARG_B(getinstruction$1(fs, e), 2);
	        e.k = ek.VRELOCABLE;  /* can relocate its simple result */
	    }
	};

	/*
	** Ensure that expression 'e' is not a variable.
	*/
	const luaK_dischargevars$1 = function(fs, e) {
	    let ek = lparser$1.expkind;

	    switch (e.k) {
	        case ek.VLOCAL: {  /* already in a register */
	            e.k =  ek.VNONRELOC;  /* becomes a non-relocatable value */
	            break;
	        }
	        case ek.VUPVAL: {  /* move value to some (pending) register */
	            e.u.info = luaK_codeABC$1(fs, OpCodesI.OP_GETUPVAL, 0, e.u.info, 0);
	            e.k = ek.VRELOCABLE;
	            break;
	        }
	        case ek.VINDEXED: {
	            let op;
	            freereg(fs, e.u.ind.idx);
	            if (e.u.ind.vt === ek.VLOCAL) {  /* is 't' in a register? */
	                freereg(fs, e.u.ind.t);
	                op = OpCodesI.OP_GETTABLE;
	            } else {
	                lua_assert$4(e.u.ind.vt === ek.VUPVAL);
	                op = OpCodesI.OP_GETTABUP;  /* 't' is in an upvalue */
	            }
	            e.u.info = luaK_codeABC$1(fs, op, 0, e.u.ind.t, e.u.ind.idx);
	            e.k = ek.VRELOCABLE;
	            break;
	        }
	        case ek.VVARARG: case ek.VCALL: {
	            luaK_setoneret$1(fs, e);
	            break;
	        }
	    }
	};

	const code_loadbool = function(fs, A, b, jump) {
	    luaK_getlabel$1(fs);  /* those instructions may be jump targets */
	    return luaK_codeABC$1(fs, OpCodesI.OP_LOADBOOL, A, b, jump);
	};

	/*
	** Ensures expression value is in register 'reg' (and therefore
	** 'e' will become a non-relocatable expression).
	*/
	const discharge2reg = function(fs, e, reg) {
	    let ek = lparser$1.expkind;
	    luaK_dischargevars$1(fs, e);
	    switch (e.k) {
	        case ek.VNIL: {
	            luaK_nil$1(fs, reg, 1);
	            break;
	        }
	        case ek.VFALSE: case ek.VTRUE: {
	            luaK_codeABC$1(fs, OpCodesI.OP_LOADBOOL, reg, e.k === ek.VTRUE, 0);
	            break;
	        }
	        case ek.VK: {
	            luaK_codek$1(fs, reg, e.u.info);
	            break;
	        }
	        case ek.VKFLT: {
	            luaK_codek$1(fs, reg, luaK_numberK(fs, e.u.nval));
	            break;
	        }
	        case ek.VKINT: {
	            luaK_codek$1(fs, reg, luaK_intK$1(fs, e.u.ival));
	            break;
	        }
	        case ek.VRELOCABLE: {
	            let pc = getinstruction$1(fs, e);
	            lopcodes$2.SETARG_A(pc, reg);  /* instruction will put result in 'reg' */
	            break;
	        }
	        case ek.VNONRELOC: {
	            if (reg !== e.u.info)
	                luaK_codeABC$1(fs, OpCodesI.OP_MOVE, reg, e.u.info, 0);
	            break;
	        }
	        default: {
	            lua_assert$4(e.k === ek.VJMP);
	            return;  /* nothing to do... */
	        }
	    }
	    e.u.info = reg;
	    e.k = ek.VNONRELOC;
	};

	/*
	** Ensures expression value is in any register.
	*/
	const discharge2anyreg = function(fs, e) {
	    if (e.k !== lparser$1.expkind.VNONRELOC) {  /* no fixed register yet? */
	        luaK_reserveregs$1(fs, 1);  /* get a register */
	        discharge2reg(fs, e, fs.freereg-1);  /* put value there */
	    }
	};

	/*
	** check whether list has any jump that do not produce a value
	** or produce an inverted value
	*/
	const need_value = function(fs, list) {
	    for (; list !== NO_JUMP$1; list = getjump(fs, list)) {
	        let i = getjumpcontrol(fs, list);
	        if (i.opcode !== OpCodesI.OP_TESTSET) return true;
	    }
	    return false;  /* not found */
	};

	/*
	** Ensures final expression result (including results from its jump
	** lists) is in register 'reg'.
	** If expression has jumps, need to patch these jumps either to
	** its final position or to "load" instructions (for those tests
	** that do not produce values).
	*/
	const exp2reg = function(fs, e, reg) {
	    let ek = lparser$1.expkind;
	    discharge2reg(fs, e, reg);
	    if (e.k === ek.VJMP)  /* expression itself is a test? */
	        e.t = luaK_concat$1(fs, e.t, e.u.info);  /* put this jump in 't' list */
	    if (hasjumps(e)) {
	        let final;  /* position after whole expression */
	        let p_f = NO_JUMP$1;  /* position of an eventual LOAD false */
	        let p_t = NO_JUMP$1;  /* position of an eventual LOAD true */
	        if (need_value(fs, e.t) || need_value(fs, e.f)) {
	            let fj = (e.k === ek.VJMP) ? NO_JUMP$1 : luaK_jump$1(fs);
	            p_f = code_loadbool(fs, reg, 0, 1);
	            p_t = code_loadbool(fs, reg, 1, 0);
	            luaK_patchtohere$1(fs, fj);
	        }
	        final = luaK_getlabel$1(fs);
	        patchlistaux(fs, e.f, final, reg, p_f);
	        patchlistaux(fs, e.t, final, reg, p_t);
	    }
	    e.f = e.t = NO_JUMP$1;
	    e.u.info = reg;
	    e.k = ek.VNONRELOC;
	};

	/*
	** Ensures final expression result (including results from its jump
	** lists) is in next available register.
	*/
	const luaK_exp2nextreg$1 = function(fs, e) {
	    luaK_dischargevars$1(fs, e);
	    freeexp(fs, e);
	    luaK_reserveregs$1(fs, 1);
	    exp2reg(fs, e, fs.freereg - 1);
	};


	/*
	** Ensures final expression result (including results from its jump
	** lists) is in some (any) register and return that register.
	*/
	const luaK_exp2anyreg$1 = function(fs, e) {
	    luaK_dischargevars$1(fs, e);
	    if (e.k === lparser$1.expkind.VNONRELOC) {  /* expression already has a register? */
	        if (!hasjumps(e))  /* no jumps? */
	            return e.u.info;  /* result is already in a register */
	        if (e.u.info >= fs.nactvar) {  /* reg. is not a local? */
	            exp2reg(fs, e, e.u.info);  /* put final result in it */
	            return e.u.info;
	        }
	    }
	    luaK_exp2nextreg$1(fs, e);  /* otherwise, use next available register */
	    return e.u.info;
	};

	/*
	** Ensures final expression result is either in a register or in an
	** upvalue.
	*/
	const luaK_exp2anyregup$1 = function(fs, e) {
	    if (e.k !== lparser$1.expkind.VUPVAL || hasjumps(e))
	        luaK_exp2anyreg$1(fs, e);
	};

	/*
	** Ensures final expression result is either in a register or it is
	** a constant.
	*/
	const luaK_exp2val$1 = function(fs, e) {
	    if (hasjumps(e))
	        luaK_exp2anyreg$1(fs, e);
	    else
	        luaK_dischargevars$1(fs, e);
	};

	/*
	** Ensures final expression result is in a valid R/K index
	** (that is, it is either in a register or in 'k' with an index
	** in the range of R/K indices).
	** Returns R/K index.
	*/
	const luaK_exp2RK$1 = function(fs, e) {
	    let ek = lparser$1.expkind;
	    let vk = false;
	    luaK_exp2val$1(fs, e);
	    switch (e.k) {  /* move constants to 'k' */
	        case ek.VTRUE: e.u.info = boolK(fs, true); vk = true; break;
	        case ek.VFALSE: e.u.info = boolK(fs, false); vk = true; break;
	        case ek.VNIL: e.u.info = nilK(fs); vk = true; break;
	        case ek.VKINT: e.u.info = luaK_intK$1(fs, e.u.ival); vk = true; break;
	        case ek.VKFLT: e.u.info = luaK_numberK(fs, e.u.nval); vk = true; break;
	        case ek.VK: vk = true; break;
	    }

	    if (vk) {
	        e.k = ek.VK;
	        if (e.u.info <= lopcodes$2.MAXINDEXRK)  /* constant fits in 'argC'? */
	            return lopcodes$2.RKASK(e.u.info);
	    }

	    /* not a constant in the right range: put it in a register */
	    return luaK_exp2anyreg$1(fs, e);
	};

	/*
	** Generate code to store result of expression 'ex' into variable 'var'.
	*/
	const luaK_storevar$1 = function(fs, vr, ex) {
	    let ek = lparser$1.expkind;
	    switch (vr.k) {
	        case ek.VLOCAL: {
	            freeexp(fs, ex);
	            exp2reg(fs, ex, vr.u.info);  /* compute 'ex' into proper place */
	            return;
	        }
	        case ek.VUPVAL: {
	            let e = luaK_exp2anyreg$1(fs, ex);
	            luaK_codeABC$1(fs, OpCodesI.OP_SETUPVAL, e, vr.u.info, 0);
	            break;
	        }
	        case ek.VINDEXED: {
	            let op = (vr.u.ind.vt === ek.VLOCAL) ? OpCodesI.OP_SETTABLE : OpCodesI.OP_SETTABUP;
	            let e = luaK_exp2RK$1(fs, ex);
	            luaK_codeABC$1(fs, op, vr.u.ind.t, vr.u.ind.idx, e);
	            break;
	        }
	    }
	    freeexp(fs, ex);
	};


	/*
	** Emit SELF instruction (convert expression 'e' into 'e:key(e,').
	*/
	const luaK_self$1 = function(fs, e, key) {
	    luaK_exp2anyreg$1(fs, e);
	    let ereg = e.u.info;  /* register where 'e' was placed */
	    freeexp(fs, e);
	    e.u.info = fs.freereg;  /* base register for op_self */
	    e.k = lparser$1.expkind.VNONRELOC;  /* self expression has a fixed register */
	    luaK_reserveregs$1(fs, 2);  /* function and 'self' produced by op_self */
	    luaK_codeABC$1(fs, OpCodesI.OP_SELF, e.u.info, ereg, luaK_exp2RK$1(fs, key));
	    freeexp(fs, key);
	};

	/*
	** Negate condition 'e' (where 'e' is a comparison).
	*/
	const negatecondition = function(fs, e) {
	    let pc = getjumpcontrol(fs, e.u.info);
	    lua_assert$4(lopcodes$2.testTMode(pc.opcode) && pc.opcode !== OpCodesI.OP_TESTSET && pc.opcode !== OpCodesI.OP_TEST);
	    lopcodes$2.SETARG_A(pc, !(pc.A));
	};

	/*
	** Emit instruction to jump if 'e' is 'cond' (that is, if 'cond'
	** is true, code will jump if 'e' is true.) Return jump position.
	** Optimize when 'e' is 'not' something, inverting the condition
	** and removing the 'not'.
	*/
	const jumponcond = function(fs, e, cond) {
	    if (e.k === lparser$1.expkind.VRELOCABLE) {
	        let ie = getinstruction$1(fs, e);
	        if (ie.opcode === OpCodesI.OP_NOT) {
	            fs.pc--;  /* remove previous OP_NOT */
	            return condjump(fs, OpCodesI.OP_TEST, ie.B, 0, !cond);
	        }
	        /* else go through */
	    }
	    discharge2anyreg(fs, e);
	    freeexp(fs, e);
	    return condjump(fs, OpCodesI.OP_TESTSET, lopcodes$2.NO_REG, e.u.info, cond);
	};

	/*
	** Emit code to go through if 'e' is true, jump otherwise.
	*/
	const luaK_goiftrue$1 = function(fs, e) {
	    let ek = lparser$1.expkind;
	    let pc;  /* pc of new jump */
	    luaK_dischargevars$1(fs, e);
	    switch (e.k) {
	        case ek.VJMP: {  /* condition? */
	            negatecondition(fs, e);  /* jump when it is false */
	            pc = e.u.info;  /* save jump position */
	            break;
	        }
	        case ek.VK: case ek.VKFLT: case ek.VKINT: case ek.VTRUE: {
	            pc = NO_JUMP$1;  /* always true; do nothing */
	            break;
	        }
	        default: {
	            pc = jumponcond(fs, e, 0);  /* jump when false */
	            break;
	        }
	    }
	    e.f = luaK_concat$1(fs, e.f, pc);  /* insert new jump in false list */
	    luaK_patchtohere$1(fs, e.t);  /* true list jumps to here (to go through) */
	    e.t = NO_JUMP$1;
	};

	/*
	** Emit code to go through if 'e' is false, jump otherwise.
	*/
	const luaK_goiffalse$1 = function(fs, e) {
	    let ek = lparser$1.expkind;
	    let pc;  /* pc of new jump */
	    luaK_dischargevars$1(fs, e);
	    switch (e.k) {
	        case ek.VJMP: {
	            pc = e.u.info;  /* already jump if true */
	            break;
	        }
	        case ek.VNIL: case ek.VFALSE: {
	            pc = NO_JUMP$1;  /* always false; do nothing */
	            break;
	        }
	        default: {
	            pc = jumponcond(fs, e, 1);  /* jump if true */
	            break;
	        }
	    }
	    e.t = luaK_concat$1(fs, e.t, pc);  /* insert new jump in 't' list */
	    luaK_patchtohere$1(fs, e.f);  /* false list jumps to here (to go through) */
	    e.f = NO_JUMP$1;
	};

	/*
	** Code 'not e', doing constant folding.
	*/
	const codenot = function(fs, e) {
	    let ek = lparser$1.expkind;
	    luaK_dischargevars$1(fs, e);
	    switch (e.k) {
	        case ek.VNIL: case ek.VFALSE: {
	            e.k = ek.VTRUE;  /* true === not nil === not false */
	            break;
	        }
	        case ek.VK: case ek.VKFLT: case ek.VKINT: case ek.VTRUE: {
	            e.k = ek.VFALSE;  /* false === not "x" === not 0.5 === not 1 === not true */
	            break;
	        }
	        case ek.VJMP: {
	            negatecondition(fs, e);
	            break;
	        }
	        case ek.VRELOCABLE:
	        case ek.VNONRELOC: {
	            discharge2anyreg(fs, e);
	            freeexp(fs, e);
	            e.u.info = luaK_codeABC$1(fs, OpCodesI.OP_NOT, 0, e.u.info, 0);
	            e.k = ek.VRELOCABLE;
	            break;
	        }
	    }
	    /* interchange true and false lists */
	    { let temp = e.f; e.f = e.t; e.t = temp; }
	    removevalues(fs, e.f);  /* values are useless when negated */
	    removevalues(fs, e.t);
	};

	/*
	** Create expression 't[k]'. 't' must have its final result already in a
	** register or upvalue.
	*/
	const luaK_indexed$1 = function(fs, t, k) {
	    let ek = lparser$1.expkind;
	    lua_assert$4(!hasjumps(t) && (lparser$1.vkisinreg(t.k) || t.k === ek.VUPVAL));
	    t.u.ind.t = t.u.info;  /* register or upvalue index */
	    t.u.ind.idx = luaK_exp2RK$1(fs, k);  /* R/K index for key */
	    t.u.ind.vt = (t.k === ek.VUPVAL) ? ek.VUPVAL : ek.VLOCAL;
	    t.k = ek.VINDEXED;
	};

	/*
	** Return false if folding can raise an error.
	** Bitwise operations need operands convertible to integers; division
	** operations cannot have 0 as divisor.
	*/
	const validop = function(op, v1, v2) {
	    switch (op) {
	        case LUA_OPBAND: case LUA_OPBOR: case LUA_OPBXOR:
	        case LUA_OPSHL: case LUA_OPSHR: case LUA_OPBNOT$1: {  /* conversion errors */
	            return (lvm$3.tointeger(v1) !== false && lvm$3.tointeger(v2) !== false);
	        }
	        case LUA_OPDIV: case LUA_OPIDIV: case LUA_OPMOD:  /* division by 0 */
	            return (v2.value !== 0);
	        default: return 1;  /* everything else is valid */
	    }
	};

	/*
	** Try to "constant-fold" an operation; return 1 iff successful.
	** (In this case, 'e1' has the final result.)
	*/
	const constfolding = function(op, e1, e2) {
	    let ek = lparser$1.expkind;
	    let v1, v2;
	    if (!(v1 = tonumeral(e1, true)) || !(v2 = tonumeral(e2, true)) || !validop(op, v1, v2))
	        return 0;  /* non-numeric operands or not safe to fold */
	    let res = new TValue$1(); /* FIXME */
	    lobject$5.luaO_arith(null, op, v1, v2, res);  /* does operation */
	    if (res.ttisinteger()) {
	        e1.k = ek.VKINT;
	        e1.u.ival = res.value;
	    }
	    else {  /* folds neither NaN nor 0.0 (to avoid problems with -0.0) */
	        let n = res.value;
	        if (isNaN(n) || n === 0)
	            return false;
	        e1.k = ek.VKFLT;
	        e1.u.nval = n;
	    }
	    return true;
	};

	/*
	** Emit code for unary expressions that "produce values"
	** (everything but 'not').
	** Expression to produce final result will be encoded in 'e'.
	*/
	const codeunexpval = function(fs, op, e, line) {
	    let r = luaK_exp2anyreg$1(fs, e);  /* opcodes operate only on registers */
	    freeexp(fs, e);
	    e.u.info = luaK_codeABC$1(fs, op, 0, r, 0);  /* generate opcode */
	    e.k = lparser$1.expkind.VRELOCABLE;  /* all those operations are relocatable */
	    luaK_fixline$1(fs, line);
	};

	/*
	** Emit code for binary expressions that "produce values"
	** (everything but logical operators 'and'/'or' and comparison
	** operators).
	** Expression to produce final result will be encoded in 'e1'.
	** Because 'luaK_exp2RK' can free registers, its calls must be
	** in "stack order" (that is, first on 'e2', which may have more
	** recent registers to be released).
	*/
	const codebinexpval = function(fs, op, e1, e2, line) {
	    let rk2 = luaK_exp2RK$1(fs, e2);  /* both operands are "RK" */
	    let rk1 = luaK_exp2RK$1(fs, e1);
	    freeexps(fs, e1, e2);
	    e1.u.info = luaK_codeABC$1(fs, op, 0, rk1, rk2);  /* generate opcode */
	    e1.k = lparser$1.expkind.VRELOCABLE;  /* all those operations are relocatable */
	    luaK_fixline$1(fs, line);
	};


	/*
	** Emit code for comparisons.
	** 'e1' was already put in R/K form by 'luaK_infix'.
	*/
	const codecomp = function(fs, opr, e1, e2) {
	    let ek = lparser$1.expkind;

	    let rk1;
	    if (e1.k === ek.VK)
	        rk1 = lopcodes$2.RKASK(e1.u.info);
	    else {
	        lua_assert$4(e1.k === ek.VNONRELOC);
	        rk1 = e1.u.info;
	    }

	    let rk2 = luaK_exp2RK$1(fs, e2);
	    freeexps(fs, e1, e2);
	    switch (opr) {
	        case BinOpr.OPR_NE: {  /* '(a ~= b)' ==> 'not (a === b)' */
	            e1.u.info = condjump(fs, OpCodesI.OP_EQ, 0, rk1, rk2);
	            break;
	        }
	        case BinOpr.OPR_GT: case BinOpr.OPR_GE: {
	            /* '(a > b)' ==> '(b < a)';  '(a >= b)' ==> '(b <= a)' */
	            let op = (opr - BinOpr.OPR_NE) + OpCodesI.OP_EQ;
	            e1.u.info = condjump(fs, op, 1, rk2, rk1);  /* invert operands */
	            break;
	        }
	        default: {  /* '==', '<', '<=' use their own opcodes */
	            let op = (opr - BinOpr.OPR_EQ) + OpCodesI.OP_EQ;
	            e1.u.info = condjump(fs, op, 1, rk1, rk2);
	            break;
	        }
	    }
	    e1.k = ek.VJMP;
	};

	/*
	** Apply prefix operation 'op' to expression 'e'.
	*/
	const luaK_prefix$1 = function(fs, op, e, line) {
	    let ef = new lparser$1.expdesc();
	    ef.k = lparser$1.expkind.VKINT;
	    ef.u.ival = ef.u.nval = ef.u.info = 0;
	    ef.t = NO_JUMP$1;
	    ef.f = NO_JUMP$1;
	    switch (op) {
	        case UnOpr.OPR_MINUS: case UnOpr.OPR_BNOT:  /* use 'ef' as fake 2nd operand */
	            if (constfolding(op + LUA_OPUNM$1, e, ef))
	                break;
	            /* FALLTHROUGH */
	        case UnOpr.OPR_LEN:
	            codeunexpval(fs, op + OpCodesI.OP_UNM, e, line);
	            break;
	        case UnOpr.OPR_NOT: codenot(fs, e); break;
	    }
	};

	/*
	** Process 1st operand 'v' of binary operation 'op' before reading
	** 2nd operand.
	*/
	const luaK_infix$1 = function(fs, op, v) {
	    switch (op) {
	        case BinOpr.OPR_AND: {
	            luaK_goiftrue$1(fs, v);  /* go ahead only if 'v' is true */
	            break;
	        }
	        case BinOpr.OPR_OR: {
	            luaK_goiffalse$1(fs, v);  /* go ahead only if 'v' is false */
	            break;
	        }
	        case BinOpr.OPR_CONCAT: {
	            luaK_exp2nextreg$1(fs, v);  /* operand must be on the 'stack' */
	            break;
	        }
	        case BinOpr.OPR_ADD: case BinOpr.OPR_SUB:
	        case BinOpr.OPR_MUL: case BinOpr.OPR_DIV: case BinOpr.OPR_IDIV:
	        case BinOpr.OPR_MOD: case BinOpr.OPR_POW:
	        case BinOpr.OPR_BAND: case BinOpr.OPR_BOR: case BinOpr.OPR_BXOR:
	        case BinOpr.OPR_SHL: case BinOpr.OPR_SHR: {
	            if (!tonumeral(v, false))
	                luaK_exp2RK$1(fs, v);
	            /* else keep numeral, which may be folded with 2nd operand */
	            break;
	        }
	        default: {
	            luaK_exp2RK$1(fs, v);
	            break;
	        }
	    }
	};

	/*
	** Finalize code for binary operation, after reading 2nd operand.
	** For '(a .. b .. c)' (which is '(a .. (b .. c))', because
	** concatenation is right associative), merge second CONCAT into first
	** one.
	*/
	const luaK_posfix$1 = function(fs, op, e1, e2, line) {
	    let ek = lparser$1.expkind;
	    switch (op) {
	        case BinOpr.OPR_AND: {
	            lua_assert$4(e1.t === NO_JUMP$1);  /* list closed by 'luK_infix' */
	            luaK_dischargevars$1(fs, e2);
	            e2.f = luaK_concat$1(fs, e2.f, e1.f);
	            e1.to(e2);
	            break;
	        }
	        case BinOpr.OPR_OR: {
	            lua_assert$4(e1.f === NO_JUMP$1);  /* list closed by 'luK_infix' */
	            luaK_dischargevars$1(fs, e2);
	            e2.t = luaK_concat$1(fs, e2.t, e1.t);
	            e1.to(e2);
	            break;
	        }
	        case BinOpr.OPR_CONCAT: {
	            luaK_exp2val$1(fs, e2);
	            let ins = getinstruction$1(fs, e2);
	            if (e2.k === ek.VRELOCABLE && ins.opcode === OpCodesI.OP_CONCAT) {
	                lua_assert$4(e1.u.info === ins.B - 1);
	                freeexp(fs, e1);
	                lopcodes$2.SETARG_B(ins, e1.u.info);
	                e1.k = ek.VRELOCABLE; e1.u.info = e2.u.info;
	            }
	            else {
	                luaK_exp2nextreg$1(fs, e2);  /* operand must be on the 'stack' */
	                codebinexpval(fs, OpCodesI.OP_CONCAT, e1, e2, line);
	            }
	            break;
	        }
	        case BinOpr.OPR_ADD: case BinOpr.OPR_SUB: case BinOpr.OPR_MUL: case BinOpr.OPR_DIV:
	        case BinOpr.OPR_IDIV: case BinOpr.OPR_MOD: case BinOpr.OPR_POW:
	        case BinOpr.OPR_BAND: case BinOpr.OPR_BOR: case BinOpr.OPR_BXOR:
	        case BinOpr.OPR_SHL: case BinOpr.OPR_SHR: {
	            if (!constfolding(op + LUA_OPADD, e1, e2))
	                codebinexpval(fs, op + OpCodesI.OP_ADD, e1, e2, line);
	            break;
	        }
	        case BinOpr.OPR_EQ: case BinOpr.OPR_LT: case BinOpr.OPR_LE:
	        case BinOpr.OPR_NE: case BinOpr.OPR_GT: case BinOpr.OPR_GE: {
	            codecomp(fs, op, e1, e2);
	            break;
	        }
	    }

	    return e1;
	};

	/*
	** Change line information associated with current position.
	*/
	const luaK_fixline$1 = function(fs, line) {
	    fs.f.lineinfo[fs.pc - 1] = line;
	};

	/*
	** Emit a SETLIST instruction.
	** 'base' is register that keeps table;
	** 'nelems' is #table plus those to be stored now;
	** 'tostore' is number of values (in registers 'base + 1',...) to add to
	** table (or LUA_MULTRET to add up to stack top).
	*/
	const luaK_setlist$1 = function(fs, base, nelems, tostore) {
	    let c =  (nelems - 1)/lopcodes$2.LFIELDS_PER_FLUSH + 1;
	    let b = (tostore === LUA_MULTRET$6) ? 0 : tostore;
	    lua_assert$4(tostore !== 0 && tostore <= lopcodes$2.LFIELDS_PER_FLUSH);
	    if (c <= lopcodes$2.MAXARG_C)
	        luaK_codeABC$1(fs, OpCodesI.OP_SETLIST, base, b, c);
	    else if (c <= lopcodes$2.MAXARG_Ax) {
	        luaK_codeABC$1(fs, OpCodesI.OP_SETLIST, base, b, 0);
	        codeextraarg(fs, c);
	    }
	    else
	        llex$2.luaX_syntaxerror(fs.ls, to_luastring$i("constructor too long", true));
	    fs.freereg = base + 1;  /* free registers with list values */
	};


	lcode.BinOpr             = BinOpr;
	lcode.NO_JUMP            = NO_JUMP$1;
	lcode.UnOpr              = UnOpr;
	lcode.getinstruction     = getinstruction$1;
	lcode.luaK_checkstack    = luaK_checkstack$1;
	lcode.luaK_code          = luaK_code;
	lcode.luaK_codeABC       = luaK_codeABC$1;
	lcode.luaK_codeABx       = luaK_codeABx$1;
	lcode.luaK_codeAsBx      = luaK_codeAsBx$1;
	lcode.luaK_codek         = luaK_codek$1;
	lcode.luaK_concat        = luaK_concat$1;
	lcode.luaK_dischargevars = luaK_dischargevars$1;
	lcode.luaK_exp2RK        = luaK_exp2RK$1;
	lcode.luaK_exp2anyreg    = luaK_exp2anyreg$1;
	lcode.luaK_exp2anyregup  = luaK_exp2anyregup$1;
	lcode.luaK_exp2nextreg   = luaK_exp2nextreg$1;
	lcode.luaK_exp2val       = luaK_exp2val$1;
	lcode.luaK_fixline       = luaK_fixline$1;
	lcode.luaK_getlabel      = luaK_getlabel$1;
	lcode.luaK_goiffalse     = luaK_goiffalse$1;
	lcode.luaK_goiftrue      = luaK_goiftrue$1;
	lcode.luaK_indexed       = luaK_indexed$1;
	lcode.luaK_infix         = luaK_infix$1;
	lcode.luaK_intK          = luaK_intK$1;
	lcode.luaK_jump          = luaK_jump$1;
	lcode.luaK_jumpto        = luaK_jumpto$1;
	lcode.luaK_nil           = luaK_nil$1;
	lcode.luaK_numberK       = luaK_numberK;
	lcode.luaK_patchclose    = luaK_patchclose$1;
	lcode.luaK_patchlist     = luaK_patchlist$1;
	lcode.luaK_patchtohere   = luaK_patchtohere$1;
	lcode.luaK_posfix        = luaK_posfix$1;
	lcode.luaK_prefix        = luaK_prefix$1;
	lcode.luaK_reserveregs   = luaK_reserveregs$1;
	lcode.luaK_ret           = luaK_ret$1;
	lcode.luaK_self          = luaK_self$1;
	lcode.luaK_setlist       = luaK_setlist$1;
	lcode.luaK_setmultret    = luaK_setmultret$1;
	lcode.luaK_setoneret     = luaK_setoneret$1;
	lcode.luaK_setreturns    = luaK_setreturns$1;
	lcode.luaK_storevar      = luaK_storevar$1;
	lcode.luaK_stringK       = luaK_stringK$1;

	const {
	    LUA_MULTRET: LUA_MULTRET$5,
	    to_luastring: to_luastring$h
	} = defs$2;
	const {
	    BinOpr: {
	        OPR_ADD,
	        OPR_AND,
	        OPR_BAND,
	        OPR_BOR,
	        OPR_BXOR,
	        OPR_CONCAT,
	        OPR_DIV,
	        OPR_EQ,
	        OPR_GE,
	        OPR_GT,
	        OPR_IDIV,
	        OPR_LE,
	        OPR_LT,
	        OPR_MOD,
	        OPR_MUL,
	        OPR_NE,
	        OPR_NOBINOPR,
	        OPR_OR,
	        OPR_POW,
	        OPR_SHL,
	        OPR_SHR,
	        OPR_SUB
	    },
	    UnOpr: {
	        OPR_BNOT,
	        OPR_LEN,
	        OPR_MINUS,
	        OPR_NOT,
	        OPR_NOUNOPR
	    },
	    NO_JUMP,
	    getinstruction,
	    luaK_checkstack,
	    luaK_codeABC,
	    luaK_codeABx,
	    luaK_codeAsBx,
	    luaK_codek,
	    luaK_concat,
	    luaK_dischargevars,
	    luaK_exp2RK,
	    luaK_exp2anyreg,
	    luaK_exp2anyregup,
	    luaK_exp2nextreg,
	    luaK_exp2val,
	    luaK_fixline,
	    luaK_getlabel,
	    luaK_goiffalse,
	    luaK_goiftrue,
	    luaK_indexed,
	    luaK_infix,
	    luaK_intK,
	    luaK_jump,
	    luaK_jumpto,
	    luaK_nil,
	    luaK_patchclose,
	    luaK_patchlist,
	    luaK_patchtohere,
	    luaK_posfix,
	    luaK_prefix,
	    luaK_reserveregs,
	    luaK_ret,
	    luaK_self,
	    luaK_setlist,
	    luaK_setmultret,
	    luaK_setoneret,
	    luaK_setreturns,
	    luaK_storevar,
	    luaK_stringK
	} = lcode;
	const ldo$4      = ldo$a;
	const lfunc$4    = lfunc$6;
	const llex$1     = llex$4;
	const {
	    LUAI_MAXCCALLS: LUAI_MAXCCALLS$1,
	    MAX_INT,
	    lua_assert: lua_assert$3
	}  = llimits;
	const lobject$4  = lobject$c;
	const {
	    OpCodesI: {
	        OP_CALL,
	        OP_CLOSURE,
	        OP_FORLOOP,
	        OP_FORPREP,
	        OP_GETUPVAL,
	        OP_MOVE,
	        OP_NEWTABLE,
	        OP_SETTABLE,
	        OP_TAILCALL,
	        OP_TFORCALL,
	        OP_TFORLOOP,
	        OP_VARARG
	    },
	    LFIELDS_PER_FLUSH,
	    SETARG_B,
	    SETARG_C,
	    SET_OPCODE
	} = lopcodes$3;
	const {
	    luaS_eqlngstr,
	    luaS_new: luaS_new$1,
	    luaS_newliteral: luaS_newliteral$2
	} = lstring;
	const ltable$2   = ltable$9;
	const Proto    = lfunc$4.Proto;
	const R        = llex$1.RESERVED;

	const MAXVARS = 200;

	const hasmultret = function(k) {
	    return k === expkind.VCALL || k === expkind.VVARARG;
	};

	const eqstr = function(a, b) {
	    /* TODO: use plain equality as strings are cached */
	    return luaS_eqlngstr(a, b);
	};

	class BlockCnt {
	    constructor() {
	        this.previous = null;  /* chain */
	        this.firstlabel = NaN; /* index of first label in this block */
	        this.firstgoto = NaN;  /* index of first pending goto in this block */
	        this.nactvar = NaN;    /* # active locals outside the block */
	        this.upval = NaN;      /* true if some variable in the block is an upvalue */
	        this.isloop = NaN;     /* true if 'block' is a loop */
	    }
	}

	const expkind = {
	    VVOID: 0,        /* when 'expdesc' describes the last expression a list,
	                        this kind means an empty list (so, no expression) */
	    VNIL: 1,         /* constant nil */
	    VTRUE: 2,        /* constant true */
	    VFALSE: 3,       /* constant false */
	    VK: 4,           /* constant in 'k'; info = index of constant in 'k' */
	    VKFLT: 5,        /* floating constant; nval = numerical float value */
	    VKINT: 6,        /* integer constant; nval = numerical integer value */
	    VNONRELOC: 7,    /* expression has its value in a fixed register;
	                        info = result register */
	    VLOCAL: 8,       /* local variable; info = local register */
	    VUPVAL: 9,       /* upvalue variable; info = index of upvalue in 'upvalues' */
	    VINDEXED: 10,    /* indexed variable;
	                        ind.vt = whether 't' is register or upvalue;
	                        ind.t = table register or upvalue;
	                        ind.idx = key's R/K index */
	    VJMP: 11,        /* expression is a test/comparison;
	                        info = pc of corresponding jump instruction */
	    VRELOCABLE: 12,  /* expression can put result in any register;
	                        info = instruction pc */
	    VCALL: 13,       /* expression is a function call; info = instruction pc */
	    VVARARG: 14      /* vararg expression; info = instruction pc */
	};

	const vkisvar = function(k) {
	    return expkind.VLOCAL <= k && k <= expkind.VINDEXED;
	};

	const vkisinreg = function(k) {
	    return k === expkind.VNONRELOC || k === expkind.VLOCAL;
	};

	class expdesc {
	    constructor() {
	        this.k = NaN;
	        this.u = {
	            ival: NaN,    /* for VKINT */
	            nval: NaN,    /* for VKFLT */
	            info: NaN,    /* for generic use */
	            ind: {        /* for indexed variables (VINDEXED) */
	                idx: NaN, /* index (R/K) */
	                t: NaN,   /* table (register or upvalue) */
	                vt: NaN   /* whether 't' is register (VLOCAL) or upvalue (VUPVAL) */
	            }
	        };
	        this.t = NaN;     /* patch list of 'exit when true' */
	        this.f = NaN;     /* patch list of 'exit when false' */
	    }

	    to(e) { // Copy e content to this, cf. luaK_posfix
	        this.k = e.k;
	        this.u = e.u;
	        this.t = e.t;
	        this.f = e.f;
	    }
	}

	class FuncState {
	    constructor() {
	        this.f = null;         /* current function header */
	        this.prev = null;      /* enclosing function */
	        this.ls = null;        /* lexical state */
	        this.bl = null;        /* chain of current blocks */
	        this.pc = NaN;         /* next position to code (equivalent to 'ncode') */
	        this.lasttarget = NaN; /* 'label' of last 'jump label' */
	        this.jpc = NaN;        /* list of pending jumps to 'pc' */
	        this.nk = NaN;         /* number of elements in 'k' */
	        this.np = NaN;         /* number of elements in 'p' */
	        this.firstlocal = NaN; /* index of first local var (in Dyndata array) */
	        this.nlocvars = NaN;   /* number of elements in 'f->locvars' */
	        this.nactvar = NaN;    /* number of active local variables */
	        this.nups = NaN;       /* number of upvalues */
	        this.freereg = NaN;    /* first free register */
	    }
	}

	/* description of active local variable */
	class Vardesc {
	    constructor() {
	        this.idx = NaN;  /* variable index in stack */
	    }
	}


	/* description of pending goto statements and label statements */
	class Labeldesc {
	    constructor() {
	        this.name = null;  /* label identifier */
	        this.pc = NaN;  /* position in code */
	        this.line = NaN;  /* line where it appeared */
	        this.nactvar = NaN;  /* local level where it appears in current block */
	    }
	}


	/* list of labels or gotos */
	class Labellist {
	    constructor() {
	        this.arr = []; /* array */
	        this.n = NaN;  /* number of entries in use */
	        this.size = NaN;  /* array size */
	    }
	}

	/* dynamic structures used by the parser */
	class Dyndata {
	    constructor() {
	        this.actvar = {  /* list of active local variables */
	            arr: [],
	            n: NaN,
	            size: NaN
	        };
	        this.gt = new Labellist();
	        this.label = new Labellist();
	    }
	}

	const semerror = function(ls, msg) {
	    ls.t.token = 0;  /* remove "near <token>" from final message */
	    llex$1.luaX_syntaxerror(ls, msg);
	};

	const error_expected = function(ls, token) {
	    llex$1.luaX_syntaxerror(ls, lobject$4.luaO_pushfstring(ls.L, to_luastring$h("%s expected", true), llex$1.luaX_token2str(ls, token)));
	};

	const errorlimit = function(fs, limit, what) {
	    let L = fs.ls.L;
	    let line = fs.f.linedefined;
	    let where = (line === 0)
	        ? to_luastring$h("main function", true)
	        : lobject$4.luaO_pushfstring(L, to_luastring$h("function at line %d", true), line);
	    let msg = lobject$4.luaO_pushfstring(L, to_luastring$h("too many %s (limit is %d) in %s", true),
	        what, limit, where);
	    llex$1.luaX_syntaxerror(fs.ls, msg);
	};

	const checklimit = function(fs, v, l, what) {
	    if (v > l) errorlimit(fs, l, what);
	};

	const testnext = function(ls, c) {
	    if (ls.t.token === c) {
	        llex$1.luaX_next(ls);
	        return true;
	    }

	    return false;
	};

	const check = function(ls, c) {
	    if (ls.t.token !== c)
	        error_expected(ls, c);
	};

	const checknext = function(ls, c) {
	    check(ls, c);
	    llex$1.luaX_next(ls);
	};

	const check_condition = function(ls, c, msg) {
	    if (!c)
	        llex$1.luaX_syntaxerror(ls, msg);
	};

	const check_match = function(ls, what, who, where) {
	    if (!testnext(ls, what)) {
	        if (where === ls.linenumber)
	            error_expected(ls, what);
	        else
	            llex$1.luaX_syntaxerror(ls, lobject$4.luaO_pushfstring(ls.L,
	                to_luastring$h("%s expected (to close %s at line %d)"),
	                llex$1.luaX_token2str(ls, what), llex$1.luaX_token2str(ls, who), where));
	    }
	};

	const str_checkname = function(ls) {
	    check(ls, R.TK_NAME);
	    let ts = ls.t.seminfo.ts;
	    llex$1.luaX_next(ls);
	    return ts;
	};

	const init_exp = function(e, k, i) {
	    e.f = e.t = NO_JUMP;
	    e.k = k;
	    e.u.info = i;
	};

	const codestring = function(ls, e, s) {
	    init_exp(e, expkind.VK, luaK_stringK(ls.fs, s));
	};

	const checkname = function(ls, e) {
	    codestring(ls, e, str_checkname(ls));
	};

	const registerlocalvar = function(ls, varname) {
	    let fs = ls.fs;
	    let f = fs.f;
	    f.locvars[fs.nlocvars] = new lobject$4.LocVar();
	    f.locvars[fs.nlocvars].varname = varname;
	    return fs.nlocvars++;
	};

	const new_localvar = function(ls, name) {
	    let fs = ls.fs;
	    let dyd = ls.dyd;
	    let reg = registerlocalvar(ls, name);
	    checklimit(fs, dyd.actvar.n + 1 - fs.firstlocal, MAXVARS, to_luastring$h("local variables", true));
	    dyd.actvar.arr[dyd.actvar.n] = new Vardesc();
	    dyd.actvar.arr[dyd.actvar.n].idx = reg;
	    dyd.actvar.n++;
	};

	const new_localvarliteral = function(ls, name) {
	    new_localvar(ls, llex$1.luaX_newstring(ls, to_luastring$h(name, true)));
	};

	const getlocvar = function(fs, i) {
	    let idx = fs.ls.dyd.actvar.arr[fs.firstlocal + i].idx;
	    lua_assert$3(idx < fs.nlocvars);
	    return fs.f.locvars[idx];
	};

	const adjustlocalvars = function(ls, nvars) {
	    let fs = ls.fs;
	    fs.nactvar = fs.nactvar + nvars;
	    for (; nvars; nvars--)
	        getlocvar(fs, fs.nactvar - nvars).startpc = fs.pc;
	};

	const removevars = function(fs, tolevel) {
	    fs.ls.dyd.actvar.n -= fs.nactvar - tolevel;
	    while (fs.nactvar > tolevel)
	        getlocvar(fs, --fs.nactvar).endpc = fs.pc;
	};

	const searchupvalue = function(fs, name) {
	    let up = fs.f.upvalues;
	    for (let i = 0; i < fs.nups; i++) {
	        if (eqstr(up[i].name, name))
	            return i;
	    }
	    return -1;  /* not found */
	};

	const newupvalue = function(fs, name, v) {
	    let f = fs.f;
	    checklimit(fs, fs.nups + 1, lfunc$4.MAXUPVAL, to_luastring$h("upvalues", true));
	    f.upvalues[fs.nups] = {
	        instack: v.k === expkind.VLOCAL,
	        idx: v.u.info,
	        name: name
	    };
	    return fs.nups++;
	};

	const searchvar = function(fs, n) {
	    for (let i = fs.nactvar - 1; i >= 0; i--) {
	        if (eqstr(n, getlocvar(fs, i).varname))
	            return i;
	    }

	    return -1;
	};

	/*
	** Mark block where variable at given level was defined
	** (to emit close instructions later).
	*/
	const markupval = function(fs, level) {
	    let bl = fs.bl;
	    while (bl.nactvar > level)
	        bl = bl.previous;
	    bl.upval = 1;
	};

	/*
	** Find variable with given name 'n'. If it is an upvalue, add this
	** upvalue into all intermediate functions.
	*/
	const singlevaraux = function(fs, n, vr, base) {
	    if (fs === null)  /* no more levels? */
	        init_exp(vr, expkind.VVOID, 0);  /* default is global */
	    else {
	        let v = searchvar(fs, n);  /* look up locals at current level */
	        if (v >= 0) {  /* found? */
	            init_exp(vr, expkind.VLOCAL, v);  /* variable is local */
	            if (!base)
	                markupval(fs, v);  /* local will be used as an upval */
	        } else {  /* not found as local at current level; try upvalues */
	            let idx = searchupvalue(fs, n);  /* try existing upvalues */
	            if (idx < 0) {  /* not found? */
	                singlevaraux(fs.prev, n, vr, 0);  /* try upper levels */
	                if (vr.k === expkind.VVOID)  /* not found? */
	                    return;  /* it is a global */
	                /* else was LOCAL or UPVAL */
	                idx = newupvalue(fs, n, vr);  /* will be a new upvalue */
	            }
	            init_exp(vr, expkind.VUPVAL, idx);  /* new or old upvalue */
	        }
	    }
	};

	const singlevar = function(ls, vr) {
	    let varname = str_checkname(ls);
	    let fs = ls.fs;
	    singlevaraux(fs, varname, vr, 1);
	    if (vr.k === expkind.VVOID) {  /* is global name? */
	        let key = new expdesc();
	        singlevaraux(fs, ls.envn, vr, 1);  /* get environment variable */
	        lua_assert$3(vr.k !== expkind.VVOID);  /* this one must exist */
	        codestring(ls, key, varname);  /* key is variable name */
	        luaK_indexed(fs, vr, key);  /* env[varname] */
	    }
	};

	const adjust_assign = function(ls, nvars, nexps, e) {
	    let fs = ls.fs;
	    let extra = nvars - nexps;
	    if (hasmultret(e.k)) {
	        extra++;  /* includes call itself */
	        if (extra < 0) extra = 0;
	        luaK_setreturns(fs, e, extra);  /* last exp. provides the difference */
	        if (extra > 1) luaK_reserveregs(fs, extra - 1);
	    } else {
	        if (e.k !== expkind.VVOID) luaK_exp2nextreg(fs, e);  /* close last expression */
	        if (extra > 0) {
	            let reg = fs.freereg;
	            luaK_reserveregs(fs, extra);
	            luaK_nil(fs, reg, extra);
	        }
	    }
	    if (nexps > nvars)
	        ls.fs.freereg -= nexps - nvars;  /* remove extra values */
	};

	const enterlevel = function(ls) {
	    let L = ls.L;
	    ++L.nCcalls;
	    checklimit(ls.fs, L.nCcalls, LUAI_MAXCCALLS$1, to_luastring$h("JS levels", true));
	};

	const leavelevel = function(ls) {
	    return ls.L.nCcalls--;
	};

	const closegoto = function(ls, g, label) {
	    let fs = ls.fs;
	    let gl = ls.dyd.gt;
	    let gt = gl.arr[g];
	    lua_assert$3(eqstr(gt.name, label.name));
	    if (gt.nactvar < label.nactvar) {
	        let vname = getlocvar(fs, gt.nactvar).varname;
	        let msg = lobject$4.luaO_pushfstring(ls.L,
	            to_luastring$h("<goto %s> at line %d jumps into the scope of local '%s'"),
	            gt.name.getstr(), gt.line, vname.getstr());
	        semerror(ls, msg);
	    }
	    luaK_patchlist(fs, gt.pc, label.pc);
	    /* remove goto from pending list */
	    for (let i = g; i < gl.n - 1; i++)
	        gl.arr[i] = gl.arr[i + 1];
	    gl.n--;
	};

	/*
	** try to close a goto with existing labels; this solves backward jumps
	*/
	const findlabel = function(ls, g) {
	    let bl = ls.fs.bl;
	    let dyd = ls.dyd;
	    let gt = dyd.gt.arr[g];
	    /* check labels in current block for a match */
	    for (let i = bl.firstlabel; i < dyd.label.n; i++) {
	        let lb = dyd.label.arr[i];
	        if (eqstr(lb.name, gt.name)) {  /* correct label? */
	            if (gt.nactvar > lb.nactvar && (bl.upval || dyd.label.n > bl.firstlabel))
	                luaK_patchclose(ls.fs, gt.pc, lb.nactvar);
	            closegoto(ls, g, lb);  /* close it */
	            return true;
	        }
	    }
	    return false;  /* label not found; cannot close goto */
	};

	const newlabelentry = function(ls, l, name, line, pc) {
	    let n = l.n;
	    l.arr[n] = new Labeldesc();
	    l.arr[n].name = name;
	    l.arr[n].line = line;
	    l.arr[n].nactvar = ls.fs.nactvar;
	    l.arr[n].pc = pc;
	    l.n = n + 1;
	    return n;
	};

	/*
	** check whether new label 'lb' matches any pending gotos in current
	** block; solves forward jumps
	*/
	const findgotos = function(ls, lb) {
	    let gl = ls.dyd.gt;
	    let i = ls.fs.bl.firstgoto;
	    while (i < gl.n) {
	        if (eqstr(gl.arr[i].name, lb.name))
	            closegoto(ls, i, lb);
	        else
	            i++;
	    }
	};

	/*
	** export pending gotos to outer level, to check them against
	** outer labels; if the block being exited has upvalues, and
	** the goto exits the scope of any variable (which can be the
	** upvalue), close those variables being exited.
	*/
	const movegotosout = function(fs, bl) {
	    let i = bl.firstgoto;
	    let gl = fs.ls.dyd.gt;
	    /* correct pending gotos to current block and try to close it
	       with visible labels */
	    while (i < gl.n) {
	        let gt = gl.arr[i];
	        if (gt.nactvar > bl.nactvar) {
	            if (bl.upval)
	                luaK_patchclose(fs, gt.pc, bl.nactvar);
	            gt.nactvar = bl.nactvar;
	        }
	        if (!findlabel(fs.ls, i))
	            i++;  /* move to next one */
	    }
	};

	const enterblock = function(fs, bl, isloop) {
	    bl.isloop = isloop;
	    bl.nactvar = fs.nactvar;
	    bl.firstlabel = fs.ls.dyd.label.n;
	    bl.firstgoto = fs.ls.dyd.gt.n;
	    bl.upval = 0;
	    bl.previous = fs.bl;
	    fs.bl = bl;
	    lua_assert$3(fs.freereg === fs.nactvar);
	};

	/*
	** create a label named 'break' to resolve break statements
	*/
	const breaklabel = function(ls) {
	    let n = luaS_newliteral$2(ls.L, "break");
	    let l = newlabelentry(ls, ls.dyd.label, n, 0, ls.fs.pc);
	    findgotos(ls, ls.dyd.label.arr[l]);
	};

	/*
	** generates an error for an undefined 'goto'; choose appropriate
	** message when label name is a reserved word (which can only be 'break')
	*/
	const undefgoto = function(ls, gt) {
	    let msg = llex$1.isreserved(gt.name)
	        ? "<%s> at line %d not inside a loop"
	        : "no visible label '%s' for <goto> at line %d";
	    msg = lobject$4.luaO_pushfstring(ls.L, to_luastring$h(msg), gt.name.getstr(), gt.line);
	    semerror(ls, msg);
	};

	/*
	** adds a new prototype into list of prototypes
	*/
	const addprototype = function(ls) {
	    let L = ls.L;
	    let clp = new Proto(L);
	    let fs = ls.fs;
	    let f = fs.f;  /* prototype of current function */
	    f.p[fs.np++] = clp;
	    return clp;
	};

	/*
	** codes instruction to create new closure in parent function.
	*/
	const codeclosure = function(ls, v) {
	    let fs = ls.fs.prev;
	    init_exp(v, expkind.VRELOCABLE, luaK_codeABx(fs, OP_CLOSURE, 0, fs.np -1));
	    luaK_exp2nextreg(fs, v);  /* fix it at the last register */
	};

	const open_func = function(ls, fs, bl) {
	    fs.prev = ls.fs;  /* linked list of funcstates */
	    fs.ls = ls;
	    ls.fs = fs;
	    fs.pc = 0;
	    fs.lasttarget = 0;
	    fs.jpc = NO_JUMP;
	    fs.freereg = 0;
	    fs.nk = 0;
	    fs.np = 0;
	    fs.nups = 0;
	    fs.nlocvars = 0;
	    fs.nactvar = 0;
	    fs.firstlocal = ls.dyd.actvar.n;
	    fs.bl = null;
	    let f = fs.f;
	    f.source = ls.source;
	    f.maxstacksize = 2;  /* registers 0/1 are always valid */
	    enterblock(fs, bl, false);
	};

	const leaveblock = function(fs) {
	    let bl = fs.bl;
	    let ls = fs.ls;
	    if (bl.previous && bl.upval) {
	        /* create a 'jump to here' to close upvalues */
	        let j = luaK_jump(fs);
	        luaK_patchclose(fs, j , bl.nactvar);
	        luaK_patchtohere(fs, j);
	    }

	    if (bl.isloop)
	        breaklabel(ls);  /* close pending breaks */

	    fs.bl = bl.previous;
	    removevars(fs, bl.nactvar);
	    lua_assert$3(bl.nactvar === fs.nactvar);
	    fs.freereg = fs.nactvar;  /* free registers */
	    ls.dyd.label.n = bl.firstlabel;  /* remove local labels */
	    if (bl.previous)  /* inner block? */
	        movegotosout(fs, bl);  /* update pending gotos to outer block */
	    else if (bl.firstgoto < ls.dyd.gt.n)  /* pending gotos in outer block? */
	        undefgoto(ls, ls.dyd.gt.arr[bl.firstgoto]);  /* error */
	};

	const close_func = function(ls) {
	    let fs = ls.fs;
	    luaK_ret(fs, 0, 0);  /* final return */
	    leaveblock(fs);
	    lua_assert$3(fs.bl === null);
	    ls.fs = fs.prev;
	};

	/*============================================================*/
	/* GRAMMAR RULES */
	/*============================================================*/

	const block_follow = function(ls, withuntil) {
	    switch (ls.t.token) {
	        case R.TK_ELSE: case R.TK_ELSEIF:
	        case R.TK_END: case R.TK_EOS:
	            return true;
	        case R.TK_UNTIL: return withuntil;
	        default: return false;
	    }
	};

	const statlist = function(ls) {
	    /* statlist -> { stat [';'] } */
	    while (!block_follow(ls, 1)) {
	        if (ls.t.token === R.TK_RETURN) {
	            statement(ls);
	            return;  /* 'return' must be last statement */
	        }
	        statement(ls);
	    }
	};

	const fieldsel = function(ls, v) {
	    /* fieldsel -> ['.' | ':'] NAME */
	    let fs = ls.fs;
	    let key = new expdesc();
	    luaK_exp2anyregup(fs, v);
	    llex$1.luaX_next(ls);  /* skip the dot or colon */
	    checkname(ls, key);
	    luaK_indexed(fs, v, key);
	};

	const yindex = function(ls, v) {
	    /* index -> '[' expr ']' */
	    llex$1.luaX_next(ls);  /* skip the '[' */
	    expr(ls, v);
	    luaK_exp2val(ls.fs, v);
	    checknext(ls, 93 /* (']').charCodeAt(0) */);
	};

	/*
	** {======================================================================
	** Rules for Constructors
	** =======================================================================
	*/

	class ConsControl {
	    constructor() {
	        this.v = new expdesc(); /* last list item read */
	        this.t = new expdesc(); /* table descriptor */
	        this.nh = NaN;          /* total number of 'record' elements */
	        this.na = NaN;          /* total number of array elements */
	        this.tostore = NaN;     /* number of array elements pending to be stored */
	    }
	}

	const recfield = function(ls, cc) {
	    /* recfield -> (NAME | '['exp1']') = exp1 */
	    let fs = ls.fs;
	    let reg = ls.fs.freereg;
	    let key = new expdesc();
	    let val = new expdesc();

	    if (ls.t.token === R.TK_NAME) {
	        checklimit(fs, cc.nh, MAX_INT, to_luastring$h("items in a constructor", true));
	        checkname(ls, key);
	    } else  /* ls->t.token === '[' */
	        yindex(ls, key);
	    cc.nh++;
	    checknext(ls, 61 /* ('=').charCodeAt(0) */);
	    let rkkey = luaK_exp2RK(fs, key);
	    expr(ls, val);
	    luaK_codeABC(fs, OP_SETTABLE, cc.t.u.info, rkkey, luaK_exp2RK(fs, val));
	    fs.freereg = reg;  /* free registers */
	};

	const closelistfield = function(fs, cc) {
	    if (cc.v.k === expkind.VVOID) return;  /* there is no list item */
	    luaK_exp2nextreg(fs, cc.v);
	    cc.v.k = expkind.VVOID;
	    if (cc.tostore === LFIELDS_PER_FLUSH) {
	        luaK_setlist(fs, cc.t.u.info, cc.na, cc.tostore);  /* flush */
	        cc.tostore = 0;  /* no more items pending */
	    }
	};

	const lastlistfield = function(fs, cc) {
	    if (cc.tostore === 0) return;
	    if (hasmultret(cc.v.k)) {
	        luaK_setmultret(fs, cc.v);
	        luaK_setlist(fs, cc.t.u.info, cc.na, LUA_MULTRET$5);
	        cc.na--;  /* do not count last expression (unknown number of elements) */
	    } else {
	        if (cc.v.k !== expkind.VVOID)
	            luaK_exp2nextreg(fs, cc.v);
	        luaK_setlist(fs, cc.t.u.info, cc.na, cc.tostore);
	    }
	};

	const listfield = function(ls, cc) {
	    /* listfield -> exp */
	    expr(ls, cc.v);
	    checklimit(ls.fs, cc.na, MAX_INT, to_luastring$h("items in a constructor", true));
	    cc.na++;
	    cc.tostore++;
	};

	const field = function(ls, cc) {
	    /* field -> listfield | recfield */
	    switch (ls.t.token) {
	        case R.TK_NAME: {  /* may be 'listfield' or 'recfield' */
	            if (llex$1.luaX_lookahead(ls) !== 61 /* ('=').charCodeAt(0) */)  /* expression? */
	                listfield(ls, cc);
	            else
	                recfield(ls, cc);
	            break;
	        }
	        case 91 /* ('[').charCodeAt(0) */: {
	            recfield(ls, cc);
	            break;
	        }
	        default: {
	            listfield(ls, cc);
	            break;
	        }
	    }
	};

	const constructor = function(ls, t) {
	    /* constructor -> '{' [ field { sep field } [sep] ] '}'
	       sep -> ',' | ';' */
	    let fs = ls.fs;
	    let line = ls.linenumber;
	    let pc = luaK_codeABC(fs, OP_NEWTABLE, 0, 0, 0);
	    let cc = new ConsControl();
	    cc.na = cc.nh = cc.tostore = 0;
	    cc.t = t;
	    init_exp(t, expkind.VRELOCABLE, pc);
	    init_exp(cc.v, expkind.VVOID, 0);  /* no value (yet) */
	    luaK_exp2nextreg(ls.fs, t);  /* fix it at stack top */
	    checknext(ls, 123 /* ('{').charCodeAt(0) */);
	    do {
	        lua_assert$3(cc.v.k === expkind.VVOID || cc.tostore > 0);
	        if (ls.t.token === 125 /* ('}').charCodeAt(0) */) break;
	        closelistfield(fs, cc);
	        field(ls, cc);
	    } while (testnext(ls, 44 /* (',').charCodeAt(0) */) || testnext(ls, 59 /* (';').charCodeAt(0) */));
	    check_match(ls, 125 /* ('}').charCodeAt(0) */, 123 /* ('{').charCodeAt(0) */, line);
	    lastlistfield(fs, cc);
	    SETARG_B(fs.f.code[pc], lobject$4.luaO_int2fb(cc.na));  /* set initial array size */
	    SETARG_C(fs.f.code[pc], lobject$4.luaO_int2fb(cc.nh));  /* set initial table size */
	};

	/* }====================================================================== */

	const parlist = function(ls) {
	    /* parlist -> [ param { ',' param } ] */
	    let fs = ls.fs;
	    let f = fs.f;
	    let nparams = 0;
	    f.is_vararg = false;
	    if (ls.t.token !== 41 /* (')').charCodeAt(0) */) {  /* is 'parlist' not empty? */
	        do {
	            switch (ls.t.token) {
	                case R.TK_NAME: {  /* param -> NAME */
	                    new_localvar(ls, str_checkname(ls));
	                    nparams++;
	                    break;
	                }
	                case R.TK_DOTS: {  /* param -> '...' */
	                    llex$1.luaX_next(ls);
	                    f.is_vararg = true;  /* declared vararg */
	                    break;
	                }
	                default: llex$1.luaX_syntaxerror(ls, to_luastring$h("<name> or '...' expected", true));
	            }
	        } while(!f.is_vararg && testnext(ls, 44 /* (',').charCodeAt(0) */));
	    }
	    adjustlocalvars(ls, nparams);
	    f.numparams = fs.nactvar;
	    luaK_reserveregs(fs, fs.nactvar);  /* reserve register for parameters */
	};

	const body = function(ls, e, ismethod, line) {
	    /* body ->  '(' parlist ')' block END */
	    let new_fs = new FuncState();
	    let bl = new BlockCnt();
	    new_fs.f = addprototype(ls);
	    new_fs.f.linedefined = line;
	    open_func(ls, new_fs, bl);
	    checknext(ls, 40 /* ('(').charCodeAt(0) */);
	    if (ismethod) {
	        new_localvarliteral(ls, "self");  /* create 'self' parameter */
	        adjustlocalvars(ls, 1);
	    }
	    parlist(ls);
	    checknext(ls, 41 /* (')').charCodeAt(0) */);
	    statlist(ls);
	    new_fs.f.lastlinedefined = ls.linenumber;
	    check_match(ls, R.TK_END, R.TK_FUNCTION, line);
	    codeclosure(ls, e);
	    close_func(ls);
	};

	const explist = function(ls, v) {
	    /* explist -> expr { ',' expr } */
	    let n = 1;  /* at least one expression */
	    expr(ls, v);
	    while (testnext(ls, 44 /* (',').charCodeAt(0) */)) {
	        luaK_exp2nextreg(ls.fs, v);
	        expr(ls, v);
	        n++;
	    }
	    return n;
	};

	const funcargs = function(ls, f, line) {
	    let fs = ls.fs;
	    let args = new expdesc();
	    switch (ls.t.token) {
	        case 40 /* ('(').charCodeAt(0) */: {  /* funcargs -> '(' [ explist ] ')' */
	            llex$1.luaX_next(ls);
	            if (ls.t.token === 41 /* (')').charCodeAt(0) */)  /* arg list is empty? */
	                args.k = expkind.VVOID;
	            else {
	                explist(ls, args);
	                luaK_setmultret(fs, args);
	            }
	            check_match(ls, 41 /* (')').charCodeAt(0) */, 40 /* ('(').charCodeAt(0) */, line);
	            break;
	        }
	        case 123 /* ('{').charCodeAt(0) */: {  /* funcargs -> constructor */
	            constructor(ls, args);
	            break;
	        }
	        case R.TK_STRING: {  /* funcargs -> STRING */
	            codestring(ls, args, ls.t.seminfo.ts);
	            llex$1.luaX_next(ls);  /* must use 'seminfo' before 'next' */
	            break;
	        }
	        default: {
	            llex$1.luaX_syntaxerror(ls, to_luastring$h("function arguments expected", true));
	        }
	    }
	    lua_assert$3(f.k === expkind.VNONRELOC);
	    let nparams;
	    let base = f.u.info;  /* base register for call */
	    if (hasmultret(args.k))
	        nparams = LUA_MULTRET$5;  /* open call */
	    else {
	        if (args.k !== expkind.VVOID)
	            luaK_exp2nextreg(fs, args);  /* close last argument */
	        nparams = fs.freereg - (base+1);
	    }
	    init_exp(f, expkind.VCALL, luaK_codeABC(fs, OP_CALL, base, nparams+1, 2));
	    luaK_fixline(fs, line);
	    fs.freereg = base + 1; /* call remove function and arguments and leaves (unless changed) one result */
	};

	/*
	** {======================================================================
	** Expression parsing
	** =======================================================================
	*/

	const primaryexp = function(ls, v) {
	    /* primaryexp -> NAME | '(' expr ')' */
	    switch (ls.t.token) {
	        case 40 /* ('(').charCodeAt(0) */: {
	            let line = ls.linenumber;
	            llex$1.luaX_next(ls);
	            expr(ls, v);
	            check_match(ls, 41 /* (')').charCodeAt(0) */, 40 /* ('(').charCodeAt(0) */, line);
	            luaK_dischargevars(ls.fs, v);
	            return;
	        }
	        case R.TK_NAME: {
	            singlevar(ls, v);
	            return;
	        }
	        default: {
	            llex$1.luaX_syntaxerror(ls, to_luastring$h("unexpected symbol", true));
	        }
	    }
	};

	const suffixedexp = function(ls, v) {
	    /* suffixedexp ->
	       primaryexp { '.' NAME | '[' exp ']' | ':' NAME funcargs | funcargs } */
	    let fs = ls.fs;
	    let line = ls.linenumber;
	    primaryexp(ls, v);
	    for (;;) {
	        switch (ls.t.token) {
	            case 46 /* ('.').charCodeAt(0) */: {  /* fieldsel */
	                fieldsel(ls, v);
	                break;
	            }
	            case 91 /* ('[').charCodeAt(0) */: {  /* '[' exp1 ']' */
	                let key = new expdesc();
	                luaK_exp2anyregup(fs, v);
	                yindex(ls, key);
	                luaK_indexed(fs, v, key);
	                break;
	            }
	            case 58 /* (':').charCodeAt(0) */: {  /* ':' NAME funcargs */
	                let key = new expdesc();
	                llex$1.luaX_next(ls);
	                checkname(ls, key);
	                luaK_self(fs, v, key);
	                funcargs(ls, v, line);
	                break;
	            }
	            case 40 /* ('(').charCodeAt(0) */: case R.TK_STRING: case 123 /* ('{').charCodeAt(0) */: {  /* funcargs */
	                luaK_exp2nextreg(fs, v);
	                funcargs(ls, v, line);
	                break;
	            }
	            default: return;
	        }
	    }
	};

	const simpleexp = function(ls, v) {
	    /* simpleexp -> FLT | INT | STRING | NIL | TRUE | FALSE | ... |
	       constructor | FUNCTION body | suffixedexp */
	    switch (ls.t.token) {
	        case R.TK_FLT: {
	            init_exp(v, expkind.VKFLT, 0);
	            v.u.nval = ls.t.seminfo.r;
	            break;
	        }
	        case R.TK_INT: {
	            init_exp(v, expkind.VKINT, 0);
	            v.u.ival = ls.t.seminfo.i;
	            break;
	        }
	        case R.TK_STRING: {
	            codestring(ls, v, ls.t.seminfo.ts);
	            break;
	        }
	        case R.TK_NIL: {
	            init_exp(v, expkind.VNIL, 0);
	            break;
	        }
	        case R.TK_TRUE: {
	            init_exp(v, expkind.VTRUE, 0);
	            break;
	        }
	        case R.TK_FALSE: {
	            init_exp(v, expkind.VFALSE, 0);
	            break;
	        }
	        case R.TK_DOTS: {  /* vararg */
	            let fs = ls.fs;
	            check_condition(ls, fs.f.is_vararg, to_luastring$h("cannot use '...' outside a vararg function", true));
	            init_exp(v, expkind.VVARARG, luaK_codeABC(fs, OP_VARARG, 0, 1, 0));
	            break;
	        }
	        case 123 /* ('{').charCodeAt(0) */: {  /* constructor */
	            constructor(ls, v);
	            return;
	        }
	        case R.TK_FUNCTION: {
	            llex$1.luaX_next(ls);
	            body(ls, v, 0, ls.linenumber);
	            return;
	        }
	        default: {
	            suffixedexp(ls, v);
	            return;
	        }
	    }
	    llex$1.luaX_next(ls);
	};

	const getunopr = function(op) {
	    switch (op) {
	        case R.TK_NOT: return OPR_NOT;
	        case 45 /* ('-').charCodeAt(0) */: return OPR_MINUS;
	        case 126 /* ('~').charCodeAt(0) */: return OPR_BNOT;
	        case 35 /* ('#').charCodeAt(0) */: return OPR_LEN;
	        default: return OPR_NOUNOPR;
	    }
	};

	const getbinopr = function(op) {
	    switch (op) {
	        case 43 /* ('+').charCodeAt(0) */: return OPR_ADD;
	        case 45 /* ('-').charCodeAt(0) */: return OPR_SUB;
	        case 42 /* ('*').charCodeAt(0) */: return OPR_MUL;
	        case 37 /* ('%').charCodeAt(0) */: return OPR_MOD;
	        case 94 /* ('^').charCodeAt(0) */: return OPR_POW;
	        case 47 /* ('/').charCodeAt(0) */: return OPR_DIV;
	        case R.TK_IDIV:   return OPR_IDIV;
	        case 38 /* ('&').charCodeAt(0) */: return OPR_BAND;
	        case 124 /* ('|').charCodeAt(0) */: return OPR_BOR;
	        case 126 /* ('~').charCodeAt(0) */: return OPR_BXOR;
	        case R.TK_SHL:    return OPR_SHL;
	        case R.TK_SHR:    return OPR_SHR;
	        case R.TK_CONCAT: return OPR_CONCAT;
	        case R.TK_NE:     return OPR_NE;
	        case R.TK_EQ:     return OPR_EQ;
	        case 60 /* ('<').charCodeAt(0) */: return OPR_LT;
	        case R.TK_LE:     return OPR_LE;
	        case 62 /* ('>').charCodeAt(0) */: return OPR_GT;
	        case R.TK_GE:     return OPR_GE;
	        case R.TK_AND:    return OPR_AND;
	        case R.TK_OR:     return OPR_OR;
	        default:          return OPR_NOBINOPR;
	    }
	};

	const priority = [  /* ORDER OPR */
	    {left: 10, right: 10}, {left: 10, right: 10},     /* '+' '-' */
	    {left: 11, right: 11}, {left: 11, right: 11},     /* '*' '%' */
	    {left: 14, right: 13},               /* '^' (right associative) */
	    {left: 11, right: 11}, {left: 11, right: 11},     /* '/' '//' */
	    {left: 6, right: 6}, {left: 4, right: 4}, {left: 5, right: 5}, /* '&' '|' '~' */
	    {left: 7, right: 7}, {left: 7, right: 7},         /* '<<' '>>' */
	    {left: 9, right: 8},                 /* '..' (right associative) */
	    {left: 3, right: 3}, {left: 3, right: 3}, {left: 3, right: 3}, /* ==, <, <= */
	    {left: 3, right: 3}, {left: 3, right: 3}, {left: 3, right: 3}, /* ~=, >, >= */
	    {left: 2, right: 2}, {left: 1, right: 1}          /* and, or */
	];

	const UNARY_PRIORITY = 12;

	/*
	** subexpr -> (simpleexp | unop subexpr) { binop subexpr }
	** where 'binop' is any binary operator with a priority higher than 'limit'
	*/
	const subexpr = function(ls, v, limit) {
	    enterlevel(ls);
	    let uop = getunopr(ls.t.token);
	    if (uop !== OPR_NOUNOPR) {
	        let line = ls.linenumber;
	        llex$1.luaX_next(ls);
	        subexpr(ls, v, UNARY_PRIORITY);
	        luaK_prefix(ls.fs, uop, v, line);
	    } else
	        simpleexp(ls, v);
	    /* expand while operators have priorities higher than 'limit' */
	    let op = getbinopr(ls.t.token);
	    while (op !== OPR_NOBINOPR && priority[op].left > limit) {
	        let v2 = new expdesc();
	        let line = ls.linenumber;
	        llex$1.luaX_next(ls);
	        luaK_infix(ls.fs, op, v);
	        /* read sub-expression with higher priority */
	        let nextop = subexpr(ls, v2, priority[op].right);
	        luaK_posfix(ls.fs, op, v, v2, line);
	        op = nextop;
	    }
	    leavelevel(ls);
	    return op;  /* return first untreated operator */
	};

	const expr = function(ls, v) {
	    subexpr(ls, v, 0);
	};

	/* }==================================================================== */



	/*
	** {======================================================================
	** Rules for Statements
	** =======================================================================
	*/

	const block = function(ls) {
	    /* block -> statlist */
	    let fs = ls.fs;
	    let bl = new BlockCnt();
	    enterblock(fs, bl, 0);
	    statlist(ls);
	    leaveblock(fs);
	};

	/*
	** structure to chain all variables in the left-hand side of an
	** assignment
	*/
	class LHS_assign {
	    constructor() {
	        this.prev = null;
	        this.v = new expdesc();  /* variable (global, local, upvalue, or indexed) */
	    }
	}

	/*
	** check whether, in an assignment to an upvalue/local variable, the
	** upvalue/local variable is begin used in a previous assignment to a
	** table. If so, save original upvalue/local value in a safe place and
	** use this safe copy in the previous assignment.
	*/
	const check_conflict = function(ls, lh, v) {
	    let fs = ls.fs;
	    let extra = fs.freereg;  /* eventual position to save local variable */
	    let conflict = false;
	    for (; lh; lh = lh.prev) {  /* check all previous assignments */
	        if (lh.v.k === expkind.VINDEXED) {  /* assigning to a table? */
	            /* table is the upvalue/local being assigned now? */
	            if (lh.v.u.ind.vt === v.k && lh.v.u.ind.t === v.u.info) {
	                conflict = true;
	                lh.v.u.ind.vt = expkind.VLOCAL;
	                lh.v.u.ind.t = extra;  /* previous assignment will use safe copy */
	            }
	            /* index is the local being assigned? (index cannot be upvalue) */
	            if (v.k === expkind.VLOCAL && lh.v.u.ind.idx === v.u.info) {
	                conflict = true;
	                lh.v.u.ind.idx = extra;  /* previous assignment will use safe copy */
	            }
	        }
	    }
	    if (conflict) {
	        /* copy upvalue/local value to a temporary (in position 'extra') */
	        let op = v.k === expkind.VLOCAL ? OP_MOVE : OP_GETUPVAL;
	        luaK_codeABC(fs, op, extra, v.u.info, 0);
	        luaK_reserveregs(fs, 1);
	    }
	};

	const assignment = function(ls, lh, nvars) {
	    let e = new expdesc();
	    check_condition(ls, vkisvar(lh.v.k), to_luastring$h("syntax error", true));
	    if (testnext(ls, 44 /* (',').charCodeAt(0) */)) {  /* assignment -> ',' suffixedexp assignment */
	        let nv = new LHS_assign();
	        nv.prev = lh;
	        suffixedexp(ls, nv.v);
	        if (nv.v.k !== expkind.VINDEXED)
	            check_conflict(ls, lh, nv.v);
	        checklimit(ls.fs, nvars + ls.L.nCcalls, LUAI_MAXCCALLS$1, to_luastring$h("JS levels", true));
	        assignment(ls, nv, nvars + 1);
	    } else {  /* assignment -> '=' explist */
	        checknext(ls, 61 /* ('=').charCodeAt(0) */);
	        let nexps = explist(ls, e);
	        if (nexps !== nvars)
	            adjust_assign(ls, nvars, nexps, e);
	        else {
	            luaK_setoneret(ls.fs, e);  /* close last expression */
	            luaK_storevar(ls.fs, lh.v, e);
	            return;  /* avoid default */
	        }
	    }
	    init_exp(e, expkind.VNONRELOC, ls.fs.freereg-1);  /* default assignment */
	    luaK_storevar(ls.fs, lh.v, e);
	};

	const cond = function(ls) {
	    /* cond -> exp */
	    let v = new expdesc();
	    expr(ls, v);  /* read condition */
	    if (v.k === expkind.VNIL) v.k = expkind.VFALSE;  /* 'falses' are all equal here */
	    luaK_goiftrue(ls.fs, v);
	    return v.f;
	};

	const gotostat = function(ls, pc) {
	    let line = ls.linenumber;
	    let label;
	    if (testnext(ls, R.TK_GOTO))
	        label = str_checkname(ls);
	    else {
	        llex$1.luaX_next(ls);  /* skip break */
	        label = luaS_newliteral$2(ls.L, "break");
	    }
	    let g = newlabelentry(ls, ls.dyd.gt, label, line, pc);
	    findlabel(ls, g);  /* close it if label already defined */
	};

	/* check for repeated labels on the same block */
	const checkrepeated = function(fs, ll, label) {
	    for (let i = fs.bl.firstlabel; i < ll.n; i++) {
	        if (eqstr(label, ll.arr[i].name)) {
	            let msg = lobject$4.luaO_pushfstring(fs.ls.L,
	                to_luastring$h("label '%s' already defined on line %d", true),
	                label.getstr(), ll.arr[i].line);
	            semerror(fs.ls, msg);
	        }
	    }
	};

	/* skip no-op statements */
	const skipnoopstat = function(ls) {
	    while (ls.t.token === 59 /* (';').charCodeAt(0) */ || ls.t.token === R.TK_DBCOLON)
	        statement(ls);
	};

	const labelstat = function(ls, label, line) {
	    /* label -> '::' NAME '::' */
	    let fs = ls.fs;
	    let ll = ls.dyd.label;
	    let l;  /* index of new label being created */
	    checkrepeated(fs, ll, label);  /* check for repeated labels */
	    checknext(ls, R.TK_DBCOLON);  /* skip double colon */
	    /* create new entry for this label */
	    l = newlabelentry(ls, ll, label, line, luaK_getlabel(fs));
	    skipnoopstat(ls);  /* skip other no-op statements */
	    if (block_follow(ls, 0)) {  /* label is last no-op statement in the block? */
	        /* assume that locals are already out of scope */
	        ll.arr[l].nactvar = fs.bl.nactvar;
	    }
	    findgotos(ls, ll.arr[l]);
	};

	const whilestat = function(ls, line) {
	    /* whilestat -> WHILE cond DO block END */
	    let fs = ls.fs;
	    let bl = new BlockCnt();
	    llex$1.luaX_next(ls);  /* skip WHILE */
	    let whileinit = luaK_getlabel(fs);
	    let condexit = cond(ls);
	    enterblock(fs, bl, 1);
	    checknext(ls, R.TK_DO);
	    block(ls);
	    luaK_jumpto(fs, whileinit);
	    check_match(ls, R.TK_END, R.TK_WHILE, line);
	    leaveblock(fs);
	    luaK_patchtohere(fs, condexit);  /* false conditions finish the loop */
	};

	const repeatstat = function(ls, line) {
	    /* repeatstat -> REPEAT block UNTIL cond */
	    let fs = ls.fs;
	    let repeat_init = luaK_getlabel(fs);
	    let bl1 = new BlockCnt();
	    let bl2 = new BlockCnt();
	    enterblock(fs, bl1, 1);  /* loop block */
	    enterblock(fs, bl2, 0);  /* scope block */
	    llex$1.luaX_next(ls);  /* skip REPEAT */
	    statlist(ls);
	    check_match(ls, R.TK_UNTIL, R.TK_REPEAT, line);
	    let condexit = cond(ls);  /* read condition (inside scope block) */
	    if (bl2.upval)  /* upvalues? */
	        luaK_patchclose(fs, condexit, bl2.nactvar);
	    leaveblock(fs);  /* finish scope */
	    luaK_patchlist(fs, condexit, repeat_init);  /* close the loop */
	    leaveblock(fs);  /* finish loop */
	};

	const exp1 = function(ls) {
	    let e = new expdesc();
	    expr(ls, e);
	    luaK_exp2nextreg(ls.fs, e);
	    lua_assert$3(e.k === expkind.VNONRELOC);
	    let reg = e.u.info;
	    return reg;
	};

	const forbody = function(ls, base, line, nvars, isnum) {
	    /* forbody -> DO block */
	    let bl = new BlockCnt();
	    let fs = ls.fs;
	    let endfor;
	    adjustlocalvars(ls, 3);  /* control variables */
	    checknext(ls, R.TK_DO);
	    let prep = isnum ? luaK_codeAsBx(fs, OP_FORPREP, base, NO_JUMP) : luaK_jump(fs);
	    enterblock(fs, bl, 0);  /* scope for declared variables */
	    adjustlocalvars(ls, nvars);
	    luaK_reserveregs(fs, nvars);
	    block(ls);
	    leaveblock(fs);  /* end of scope for declared variables */
	    luaK_patchtohere(fs, prep);
	    if (isnum)  /* end of scope for declared variables */
	        endfor = luaK_codeAsBx(fs, OP_FORLOOP, base, NO_JUMP);
	    else {  /* generic for */
	        luaK_codeABC(fs, OP_TFORCALL, base, 0, nvars);
	        luaK_fixline(fs, line);
	        endfor = luaK_codeAsBx(fs, OP_TFORLOOP, base + 2, NO_JUMP);
	    }
	    luaK_patchlist(fs, endfor, prep + 1);
	    luaK_fixline(fs, line);
	};

	const fornum = function(ls, varname, line) {
	    /* fornum -> NAME = exp1,exp1[,exp1] forbody */
	    let fs = ls.fs;
	    let base = fs.freereg;
	    new_localvarliteral(ls, "(for index)");
	    new_localvarliteral(ls, "(for limit)");
	    new_localvarliteral(ls, "(for step)");
	    new_localvar(ls, varname);
	    checknext(ls, 61 /* ('=').charCodeAt(0) */);
	    exp1(ls);  /* initial value */
	    checknext(ls, 44 /* (',').charCodeAt(0) */);
	    exp1(ls);  /* limit */
	    if (testnext(ls, 44 /* (',').charCodeAt(0) */))
	        exp1(ls);  /* optional step */
	    else {  /* default step = 1 */
	        luaK_codek(fs, fs.freereg, luaK_intK(fs, 1));
	        luaK_reserveregs(fs, 1);
	    }
	    forbody(ls, base, line, 1, 1);
	};

	const forlist = function(ls, indexname) {
	    /* forlist -> NAME {,NAME} IN explist forbody */
	    let fs = ls.fs;
	    let e = new expdesc();
	    let nvars = 4;  /* gen, state, control, plus at least one declared var */
	    let base = fs.freereg;
	    /* create control variables */
	    new_localvarliteral(ls, "(for generator)");
	    new_localvarliteral(ls, "(for state)");
	    new_localvarliteral(ls, "(for control)");
	    /* create declared variables */
	    new_localvar(ls, indexname);
	    while (testnext(ls, 44 /* (',').charCodeAt(0) */)) {
	        new_localvar(ls, str_checkname(ls));
	        nvars++;
	    }
	    checknext(ls, R.TK_IN);
	    let line = ls.linenumber;
	    adjust_assign(ls, 3, explist(ls, e), e);
	    luaK_checkstack(fs, 3);  /* extra space to call generator */
	    forbody(ls, base, line, nvars - 3, 0);
	};

	const forstat = function(ls, line) {
	    /* forstat -> FOR (fornum | forlist) END */
	    let fs = ls.fs;
	    let bl = new BlockCnt();
	    enterblock(fs, bl, 1);  /* scope for loop and control variables */
	    llex$1.luaX_next(ls);  /* skip 'for' */
	    let varname = str_checkname(ls);  /* first variable name */
	    switch (ls.t.token) {
	        case 61 /* ('=').charCodeAt(0) */: fornum(ls, varname, line); break;
	        case 44 /* (',').charCodeAt(0) */: case R.TK_IN: forlist(ls, varname); break;
	        default: llex$1.luaX_syntaxerror(ls, to_luastring$h("'=' or 'in' expected", true));
	    }
	    check_match(ls, R.TK_END, R.TK_FOR, line);
	    leaveblock(fs);  /* loop scope ('break' jumps to this point) */
	};

	const test_then_block = function(ls, escapelist) {
	    /* test_then_block -> [IF | ELSEIF] cond THEN block */
	    let bl = new BlockCnt();
	    let fs = ls.fs;
	    let v = new expdesc();
	    let jf;  /* instruction to skip 'then' code (if condition is false) */

	    llex$1.luaX_next(ls);  /* skip IF or ELSEIF */
	    expr(ls, v);  /* read condition */
	    checknext(ls, R.TK_THEN);

	    if (ls.t.token === R.TK_GOTO || ls.t.token === R.TK_BREAK) {
	        luaK_goiffalse(ls.fs, v);  /* will jump to label if condition is true */
	        enterblock(fs, bl, false);  /* must enter block before 'goto' */
	        gotostat(ls, v.t);   /* handle goto/break */
	        while (testnext(ls, 59 /* (';').charCodeAt(0) */));  /* skip colons */
	        if (block_follow(ls, 0)) {  /* 'goto' is the entire block? */
	            leaveblock(fs);
	            return escapelist;  /* and that is it */
	        } else  /* must skip over 'then' part if condition is false */
	            jf = luaK_jump(fs);
	    } else {  /* regular case (not goto/break) */
	        luaK_goiftrue(ls.fs, v);  /* skip over block if condition is false */
	        enterblock(fs, bl, false);
	        jf = v.f;
	    }

	    statlist(ls);  /* 'then' part */
	    leaveblock(fs);
	    if (ls.t.token === R.TK_ELSE || ls.t.token === R.TK_ELSEIF)  /* followed by 'else'/'elseif'? */
	        escapelist = luaK_concat(fs, escapelist, luaK_jump(fs));  /* must jump over it */
	    luaK_patchtohere(fs, jf);

	    return escapelist;
	};

	const ifstat = function(ls, line) {
	    /* ifstat -> IF cond THEN block {ELSEIF cond THEN block} [ELSE block] END */
	    let fs = ls.fs;
	    let escapelist = NO_JUMP;  /* exit list for finished parts */
	    escapelist = test_then_block(ls, escapelist);  /* IF cond THEN block */
	    while (ls.t.token === R.TK_ELSEIF)
	        escapelist = test_then_block(ls, escapelist);  /* ELSEIF cond THEN block */
	    if (testnext(ls, R.TK_ELSE))
	        block(ls);  /* 'else' part */
	    check_match(ls, R.TK_END, R.TK_IF, line);
	    luaK_patchtohere(fs, escapelist);  /* patch escape list to 'if' end */
	};

	const localfunc = function(ls) {
	    let b = new expdesc();
	    let fs = ls.fs;
	    new_localvar(ls, str_checkname(ls));  /* new local variable */
	    adjustlocalvars(ls, 1);  /* enter its scope */
	    body(ls, b, 0, ls.linenumber);  /* function created in next register */
	    /* debug information will only see the variable after this point! */
	    getlocvar(fs, b.u.info).startpc = fs.pc;
	};

	const localstat = function(ls) {
	    /* stat -> LOCAL NAME {',' NAME} ['=' explist] */
	    let nvars = 0;
	    let nexps;
	    let e = new expdesc();
	    do {
	        new_localvar(ls, str_checkname(ls));
	        nvars++;
	    } while (testnext(ls, 44 /* (',').charCodeAt(0) */));
	    if (testnext(ls, 61 /* ('=').charCodeAt(0) */))
	        nexps = explist(ls, e);
	    else {
	        e.k = expkind.VVOID;
	        nexps = 0;
	    }
	    adjust_assign(ls, nvars, nexps, e);
	    adjustlocalvars(ls, nvars);
	};

	const funcname = function(ls, v) {
	    /* funcname -> NAME {fieldsel} [':' NAME] */
	    let ismethod = 0;
	    singlevar(ls, v);
	    while (ls.t.token === 46 /* ('.').charCodeAt(0) */)
	        fieldsel(ls, v);
	    if (ls.t.token === 58 /* (':').charCodeAt(0) */) {
	        ismethod = 1;
	        fieldsel(ls, v);
	    }
	    return ismethod;
	};

	const funcstat = function(ls, line) {
	    /* funcstat -> FUNCTION funcname body */
	    let v = new expdesc();
	    let b = new expdesc();
	    llex$1.luaX_next(ls);  /* skip FUNCTION */
	    let ismethod = funcname(ls, v);
	    body(ls, b, ismethod, line);
	    luaK_storevar(ls.fs, v, b);
	    luaK_fixline(ls.fs, line);  /* definition "happens" in the first line */
	};

	const exprstat= function(ls) {
	    /* stat -> func | assignment */
	    let fs = ls.fs;
	    let v = new LHS_assign();
	    suffixedexp(ls, v.v);
	    if (ls.t.token === 61 /* ('=').charCodeAt(0) */ || ls.t.token === 44 /* (',').charCodeAt(0) */) { /* stat . assignment ? */
	        v.prev = null;
	        assignment(ls, v, 1);
	    }
	    else {  /* stat -> func */
	        check_condition(ls, v.v.k === expkind.VCALL, to_luastring$h("syntax error", true));
	        SETARG_C(getinstruction(fs, v.v), 1);  /* call statement uses no results */
	    }
	};

	const retstat = function(ls) {
	    /* stat -> RETURN [explist] [';'] */
	    let fs = ls.fs;
	    let e = new expdesc();
	    let first, nret;  /* registers with returned values */
	    if (block_follow(ls, 1) || ls.t.token === 59 /* (';').charCodeAt(0) */)
	        first = nret = 0;  /* return no values */
	    else {
	        nret = explist(ls, e);  /* optional return values */
	        if (hasmultret(e.k)) {
	            luaK_setmultret(fs, e);
	            if (e.k === expkind.VCALL && nret === 1) {  /* tail call? */
	                SET_OPCODE(getinstruction(fs, e), OP_TAILCALL);
	                lua_assert$3(getinstruction(fs, e).A === fs.nactvar);
	            }
	            first = fs.nactvar;
	            nret = LUA_MULTRET$5;  /* return all values */
	        } else {
	            if (nret === 1)  /* only one single value? */
	                first = luaK_exp2anyreg(fs, e);
	            else {
	                luaK_exp2nextreg(fs, e);  /* values must go to the stack */
	                first = fs.nactvar;  /* return all active values */
	                lua_assert$3(nret === fs.freereg - first);
	            }
	        }
	    }
	    luaK_ret(fs, first, nret);
	    testnext(ls, 59 /* (';').charCodeAt(0) */);  /* skip optional semicolon */
	};

	const statement = function(ls) {
	    let line = ls.linenumber;  /* may be needed for error messages */
	    enterlevel(ls);
	    switch(ls.t.token) {
	        case 59 /* (';').charCodeAt(0) */: {  /* stat -> ';' (empty statement) */
	            llex$1.luaX_next(ls);  /* skip ';' */
	            break;
	        }
	        case R.TK_IF: {  /* stat -> ifstat */
	            ifstat(ls, line);
	            break;
	        }
	        case R.TK_WHILE: {  /* stat -> whilestat */
	            whilestat(ls, line);
	            break;
	        }
	        case R.TK_DO: {  /* stat -> DO block END */
	            llex$1.luaX_next(ls);  /* skip DO */
	            block(ls);
	            check_match(ls, R.TK_END, R.TK_DO, line);
	            break;
	        }
	        case R.TK_FOR: {  /* stat -> forstat */
	            forstat(ls, line);
	            break;
	        }
	        case R.TK_REPEAT: {  /* stat -> repeatstat */
	            repeatstat(ls, line);
	            break;
	        }
	        case R.TK_FUNCTION: {  /* stat -> funcstat */
	            funcstat(ls, line);
	            break;
	        }
	        case R.TK_LOCAL: {  /* stat -> localstat */
	            llex$1.luaX_next(ls);  /* skip LOCAL */
	            if (testnext(ls, R.TK_FUNCTION))  /* local function? */
	                localfunc(ls);
	            else
	                localstat(ls);
	            break;
	        }
	        case R.TK_DBCOLON: {  /* stat -> label */
	            llex$1.luaX_next(ls);  /* skip double colon */
	            labelstat(ls, str_checkname(ls), line);
	            break;
	        }
	        case R.TK_RETURN: {  /* skip double colon */
	            llex$1.luaX_next(ls);  /* skip RETURN */
	            retstat(ls);
	            break;
	        }
	        case R.TK_BREAK:   /* stat -> breakstat */
	        case R.TK_GOTO: {  /* stat -> 'goto' NAME */
	            gotostat(ls, luaK_jump(ls.fs));
	            break;
	        }
	        default: {  /* stat -> func | assignment */
	            exprstat(ls);
	            break;
	        }
	    }
	    lua_assert$3(ls.fs.f.maxstacksize >= ls.fs.freereg && ls.fs.freereg >= ls.fs.nactvar);
	    ls.fs.freereg = ls.fs.nactvar;  /* free registers */
	    leavelevel(ls);
	};

	/*
	** compiles the main function, which is a regular vararg function with an
	** upvalue named LUA_ENV
	*/
	const mainfunc = function(ls, fs) {
	    let bl = new BlockCnt();
	    let v = new expdesc();
	    open_func(ls, fs, bl);
	    fs.f.is_vararg = true;  /* main function is always declared vararg */
	    init_exp(v, expkind.VLOCAL, 0);  /* create and... */
	    newupvalue(fs, ls.envn, v);  /* ...set environment upvalue */
	    llex$1.luaX_next(ls);  /* read first token */
	    statlist(ls);  /* parse main body */
	    check(ls, R.TK_EOS);
	    close_func(ls);
	};

	const luaY_parser = function(L, z, buff, dyd, name, firstchar) {
	    let lexstate = new llex$1.LexState();
	    let funcstate = new FuncState();
	    let cl = lfunc$4.luaF_newLclosure(L, 1);  /* create main closure */
	    ldo$4.luaD_inctop(L);
	    L.stack[L.top-1].setclLvalue(cl);
	    lexstate.h = ltable$2.luaH_new(L);  /* create table for scanner */
	    ldo$4.luaD_inctop(L);
	    L.stack[L.top-1].sethvalue(lexstate.h);
	    funcstate.f = cl.p = new Proto(L);
	    funcstate.f.source = luaS_new$1(L, name);
	    lexstate.buff = buff;
	    lexstate.dyd = dyd;
	    dyd.actvar.n = dyd.gt.n = dyd.label.n = 0;
	    llex$1.luaX_setinput(L, lexstate, z, funcstate.f.source, firstchar);
	    mainfunc(lexstate, funcstate);
	    lua_assert$3(!funcstate.prev && funcstate.nups === 1 && !lexstate.fs);
	    /* all scopes should be correctly finished */
	    lua_assert$3(dyd.actvar.n === 0 && dyd.gt.n === 0 && dyd.label.n === 0);
	    delete L.stack[--L.top];  /* remove scanner's table */
	    return cl;  /* closure is on the stack, too */
	};


	lparser$2.Dyndata     = Dyndata;
	lparser$2.expkind     = expkind;
	lparser$2.expdesc     = expdesc;
	lparser$2.luaY_parser = luaY_parser;
	lparser$2.vkisinreg   = vkisinreg;

	var lundump$1 = {};

	const {
	    LUA_SIGNATURE: LUA_SIGNATURE$3,
	    constant_types: {
	        LUA_TBOOLEAN: LUA_TBOOLEAN$6,
	        LUA_TLNGSTR: LUA_TLNGSTR$2,
	        LUA_TNIL: LUA_TNIL$c,
	        LUA_TNUMFLT: LUA_TNUMFLT$2,
	        LUA_TNUMINT: LUA_TNUMINT$2,
	        LUA_TSHRSTR: LUA_TSHRSTR$2
	    },
	    thread_status: { LUA_ERRSYNTAX: LUA_ERRSYNTAX$1 },
	    is_luastring,
	    luastring_eq: luastring_eq$4,
	    to_luastring: to_luastring$g
	} = defs$2;
	const ldo$3      = ldo$a;
	const lfunc$3    = lfunc$6;
	const lobject$3  = lobject$c;
	const {
	    MAXARG_sBx,
	    POS_A,
	    POS_Ax,
	    POS_B,
	    POS_Bx,
	    POS_C,
	    POS_OP,
	    SIZE_A,
	    SIZE_Ax,
	    SIZE_B,
	    SIZE_Bx,
	    SIZE_C,
	    SIZE_OP
	} = lopcodes$3;
	const { lua_assert: lua_assert$2 } = llimits;
	const { luaS_bless: luaS_bless$1 } = lstring;
	const {
	    luaZ_read,
	    ZIO: ZIO$1
	} = lzio;

	let LUAC_DATA$1 = [0x19, 0x93, 13, 10, 0x1a, 10];

	class BytecodeParser {

	    constructor(L, Z, name) {
	        this.intSize = 4;
	        this.size_tSize = 4;
	        this.instructionSize = 4;
	        this.integerSize = 4;
	        this.numberSize = 8;

	        lua_assert$2(Z instanceof ZIO$1, "BytecodeParser only operates on a ZIO");
	        lua_assert$2(is_luastring(name));

	        if (name[0] === 64 /* ('@').charCodeAt(0) */ || name[0] === 61 /* ('=').charCodeAt(0) */)
	            this.name = name.subarray(1);
	        else if (name[0] == LUA_SIGNATURE$3[0])
	            this.name = to_luastring$g("binary string", true);
	        else
	            this.name = name;

	        this.L = L;
	        this.Z = Z;

	        // Used to do buffer to number conversions
	        this.arraybuffer = new ArrayBuffer(
	            Math.max(this.intSize, this.size_tSize, this.instructionSize, this.integerSize, this.numberSize)
	        );
	        this.dv = new DataView(this.arraybuffer);
	        this.u8 = new Uint8Array(this.arraybuffer);
	    }

	    read(size) {
	        let u8 = new Uint8Array(size);
	        if(luaZ_read(this.Z, u8, 0, size) !== 0)
	            this.error("truncated");
	        return u8;
	    }

	    LoadByte() {
	        if (luaZ_read(this.Z, this.u8, 0, 1) !== 0)
	            this.error("truncated");
	        return this.u8[0];
	    }

	    LoadInt() {
	        if (luaZ_read(this.Z, this.u8, 0, this.intSize) !== 0)
	            this.error("truncated");
	        return this.dv.getInt32(0, true);
	    }

	    LoadNumber() {
	        if (luaZ_read(this.Z, this.u8, 0, this.numberSize) !== 0)
	            this.error("truncated");
	        return this.dv.getFloat64(0, true);
	    }

	    LoadInteger() {
	        if (luaZ_read(this.Z, this.u8, 0, this.integerSize) !== 0)
	            this.error("truncated");
	        return this.dv.getInt32(0, true);
	    }

	    LoadSize_t() {
	        return this.LoadInteger();
	    }

	    LoadString() {
	        let size = this.LoadByte();
	        if (size === 0xFF)
	            size = this.LoadSize_t();
	        if (size === 0)
	            return null;
	        return luaS_bless$1(this.L, this.read(size-1));
	    }

	    /* creates a mask with 'n' 1 bits at position 'p' */
	    static MASK1(n, p) {
	        return ((~((~0)<<(n)))<<(p));
	    }

	    LoadCode(f) {
	        let n = this.LoadInt();
	        let p = BytecodeParser;

	        for (let i = 0; i < n; i++) {
	            if (luaZ_read(this.Z, this.u8, 0, this.instructionSize) !== 0)
	                this.error("truncated");
	            let ins = this.dv.getUint32(0, true);
	            f.code[i] = {
	                code:   ins,
	                opcode: (ins >> POS_OP) & p.MASK1(SIZE_OP, 0),
	                A:      (ins >> POS_A)  & p.MASK1(SIZE_A,  0),
	                B:      (ins >> POS_B)  & p.MASK1(SIZE_B,  0),
	                C:      (ins >> POS_C)  & p.MASK1(SIZE_C,  0),
	                Bx:     (ins >> POS_Bx) & p.MASK1(SIZE_Bx, 0),
	                Ax:     (ins >> POS_Ax) & p.MASK1(SIZE_Ax, 0),
	                sBx:    ((ins >> POS_Bx) & p.MASK1(SIZE_Bx, 0)) - MAXARG_sBx
	            };
	        }
	    }

	    LoadConstants(f) {
	        let n = this.LoadInt();

	        for (let i = 0; i < n; i++) {
	            let t = this.LoadByte();

	            switch (t) {
	                case LUA_TNIL$c:
	                    f.k.push(new lobject$3.TValue(LUA_TNIL$c, null));
	                    break;
	                case LUA_TBOOLEAN$6:
	                    f.k.push(new lobject$3.TValue(LUA_TBOOLEAN$6, this.LoadByte() !== 0));
	                    break;
	                case LUA_TNUMFLT$2:
	                    f.k.push(new lobject$3.TValue(LUA_TNUMFLT$2, this.LoadNumber()));
	                    break;
	                case LUA_TNUMINT$2:
	                    f.k.push(new lobject$3.TValue(LUA_TNUMINT$2, this.LoadInteger()));
	                    break;
	                case LUA_TSHRSTR$2:
	                case LUA_TLNGSTR$2:
	                    f.k.push(new lobject$3.TValue(LUA_TLNGSTR$2, this.LoadString()));
	                    break;
	                default:
	                    this.error(`unrecognized constant '${t}'`);
	            }
	        }
	    }

	    LoadProtos(f) {
	        let n = this.LoadInt();

	        for (let i = 0; i < n; i++) {
	            f.p[i] = new lfunc$3.Proto(this.L);
	            this.LoadFunction(f.p[i], f.source);
	        }
	    }

	    LoadUpvalues(f) {
	        let n = this.LoadInt();

	        for (let i = 0; i < n; i++) {
	            f.upvalues[i] = {
	                name:    null,
	                instack: this.LoadByte(),
	                idx:     this.LoadByte()
	            };
	        }
	    }

	    LoadDebug(f) {
	        let n = this.LoadInt();
	        for (let i = 0; i < n; i++)
	            f.lineinfo[i] = this.LoadInt();

	        n = this.LoadInt();
	        for (let i = 0; i < n; i++) {
	            f.locvars[i] = {
	                varname: this.LoadString(),
	                startpc: this.LoadInt(),
	                endpc:   this.LoadInt()
	            };
	        }

	        n = this.LoadInt();
	        for (let i = 0; i < n; i++) {
	            f.upvalues[i].name = this.LoadString();
	        }
	    }

	    LoadFunction(f, psource) {
	        f.source = this.LoadString();
	        if (f.source === null)  /* no source in dump? */
	            f.source = psource;  /* reuse parent's source */
	        f.linedefined = this.LoadInt();
	        f.lastlinedefined = this.LoadInt();
	        f.numparams = this.LoadByte();
	        f.is_vararg = this.LoadByte() !== 0;
	        f.maxstacksize = this.LoadByte();
	        this.LoadCode(f);
	        this.LoadConstants(f);
	        this.LoadUpvalues(f);
	        this.LoadProtos(f);
	        this.LoadDebug(f);
	    }

	    checkliteral(s, msg) {
	        let buff = this.read(s.length);
	        if (!luastring_eq$4(buff, s))
	            this.error(msg);
	    }

	    checkHeader() {
	        this.checkliteral(LUA_SIGNATURE$3.subarray(1), "not a"); /* 1st char already checked */

	        if (this.LoadByte() !== 0x53)
	            this.error("version mismatch in");

	        if (this.LoadByte() !== 0)
	            this.error("format mismatch in");

	        this.checkliteral(LUAC_DATA$1, "corrupted");

	        this.intSize         = this.LoadByte();
	        this.size_tSize      = this.LoadByte();
	        this.instructionSize = this.LoadByte();
	        this.integerSize     = this.LoadByte();
	        this.numberSize      = this.LoadByte();

	        this.checksize(this.intSize, 4, "int");
	        this.checksize(this.size_tSize, 4, "size_t");
	        this.checksize(this.instructionSize, 4, "instruction");
	        this.checksize(this.integerSize, 4, "integer");
	        this.checksize(this.numberSize, 8, "number");

	        if (this.LoadInteger() !== 0x5678)
	            this.error("endianness mismatch in");

	        if (this.LoadNumber() !== 370.5)
	            this.error("float format mismatch in");

	    }

	    error(why) {
	        lobject$3.luaO_pushfstring(this.L, to_luastring$g("%s: %s precompiled chunk"), this.name, to_luastring$g(why));
	        ldo$3.luaD_throw(this.L, LUA_ERRSYNTAX$1);
	    }

	    checksize(byte, size, tname) {
	        if (byte !== size)
	            this.error(`${tname} size mismatch in`);
	    }
	}

	const luaU_undump = function(L, Z, name) {
	    let S = new BytecodeParser(L, Z, name);
	    S.checkHeader();
	    let cl = lfunc$3.luaF_newLclosure(L, S.LoadByte());
	    ldo$3.luaD_inctop(L);
	    L.stack[L.top-1].setclLvalue(cl);
	    cl.p = new lfunc$3.Proto(L);
	    S.LoadFunction(cl.p, null);
	    lua_assert$2(cl.nupvalues === cl.p.upvalues.length);
	    /* luai_verifycode */
	    return cl;
	};

	lundump$1.luaU_undump = luaU_undump;

	const {
	    LUA_HOOKCALL,
	    LUA_HOOKRET,
	    LUA_HOOKTAILCALL,
	    LUA_MASKCALL: LUA_MASKCALL$1,
	    LUA_MASKLINE: LUA_MASKLINE$2,
	    LUA_MASKRET: LUA_MASKRET$1,
	    LUA_MINSTACK,
	    LUA_MULTRET: LUA_MULTRET$4,
	    LUA_SIGNATURE: LUA_SIGNATURE$2,
	    constant_types: {
	        LUA_TCCL: LUA_TCCL$1,
	        LUA_TLCF: LUA_TLCF$1,
	        LUA_TLCL: LUA_TLCL$1,
	        LUA_TNIL: LUA_TNIL$b
	    },
	    thread_status: {
	        LUA_ERRMEM,
	        LUA_ERRERR: LUA_ERRERR$1,
	        LUA_ERRRUN: LUA_ERRRUN$1,
	        LUA_ERRSYNTAX,
	        LUA_OK: LUA_OK$5,
	        LUA_YIELD: LUA_YIELD$3
	    },
	    lua_Debug: lua_Debug$3,
	    luastring_indexOf: luastring_indexOf$4,
	    to_luastring: to_luastring$f
	} = defs$2;
	const lapi$2     = lapi$4;
	const ldebug$2   = ldebug$8;
	const lfunc$2    = lfunc$6;
	const {
	    api_check: api_check$2,
	    lua_assert: lua_assert$1,
	    LUAI_MAXCCALLS
	} = llimits;
	const lobject$2  = lobject$c;
	const lopcodes$1 = lopcodes$3;
	const lparser  = lparser$2;
	const lstate$3   = lstate$8;
	const { luaS_newliteral: luaS_newliteral$1 } = lstring;
	const ltm$2      = ltm$6;
	const { LUAI_MAXSTACK: LUAI_MAXSTACK$1 } = luaconf$1;
	const lundump  = lundump$1;
	const lvm$2      = lvm$6;
	const { MBuffer } = lzio;

	const adjust_top = function(L, newtop) {
	    if (L.top < newtop) {
	        while (L.top < newtop)
	            L.stack[L.top++] = new lobject$2.TValue(LUA_TNIL$b, null);
	    } else {
	        while (L.top > newtop)
	            delete L.stack[--L.top];
	    }
	};

	const seterrorobj = function(L, errcode, oldtop) {
	    let current_top = L.top;

	    /* extend stack so that L.stack[oldtop] is sure to exist */
	    while (L.top < oldtop + 1)
	        L.stack[L.top++] = new lobject$2.TValue(LUA_TNIL$b, null);

	    switch (errcode) {
	        case LUA_ERRMEM: {
	            lobject$2.setsvalue2s(L, oldtop, luaS_newliteral$1(L, "not enough memory"));
	            break;
	        }
	        case LUA_ERRERR$1: {
	            lobject$2.setsvalue2s(L, oldtop, luaS_newliteral$1(L, "error in error handling"));
	            break;
	        }
	        default: {
	            lobject$2.setobjs2s(L, oldtop, current_top - 1);
	        }
	    }

	    while (L.top > oldtop + 1)
	        delete L.stack[--L.top];
	};

	const ERRORSTACKSIZE = LUAI_MAXSTACK$1 + 200;

	const luaD_reallocstack = function(L, newsize) {
	    lua_assert$1(newsize <= LUAI_MAXSTACK$1 || newsize == ERRORSTACKSIZE);
	    lua_assert$1(L.stack_last == L.stack.length - lstate$3.EXTRA_STACK);
	    L.stack.length = newsize;
	    L.stack_last = newsize - lstate$3.EXTRA_STACK;
	};

	const luaD_growstack = function(L, n) {
	    let size = L.stack.length;
	    if (size > LUAI_MAXSTACK$1)
	        luaD_throw(L, LUA_ERRERR$1);
	    else {
	        let needed = L.top + n + lstate$3.EXTRA_STACK;
	        let newsize = 2 * size;
	        if (newsize > LUAI_MAXSTACK$1) newsize = LUAI_MAXSTACK$1;
	        if (newsize < needed) newsize = needed;
	        if (newsize > LUAI_MAXSTACK$1) {  /* stack overflow? */
	            luaD_reallocstack(L, ERRORSTACKSIZE);
	            ldebug$2.luaG_runerror(L, to_luastring$f("stack overflow", true));
	        }
	        else
	            luaD_reallocstack(L, newsize);
	    }
	};

	const luaD_checkstack = function(L, n) {
	    if (L.stack_last - L.top <= n)
	        luaD_growstack(L, n);
	};

	const stackinuse = function(L) {
	    let lim = L.top;
	    for (let ci = L.ci; ci !== null; ci = ci.previous) {
	        if (lim < ci.top) lim = ci.top;
	    }
	    lua_assert$1(lim <= L.stack_last);
	    return lim + 1; /* part of stack in use */
	};

	const luaD_shrinkstack = function(L) {
	    let inuse = stackinuse(L);
	    let goodsize = inuse + Math.floor(inuse / 8) + 2*lstate$3.EXTRA_STACK;
	    if (goodsize > LUAI_MAXSTACK$1)
	        goodsize = LUAI_MAXSTACK$1;  /* respect stack limit */
	    if (L.stack.length > LUAI_MAXSTACK$1)  /* had been handling stack overflow? */
	        lstate$3.luaE_freeCI(L);  /* free all CIs (list grew because of an error) */
	    /* if thread is currently not handling a stack overflow and its
	     good size is smaller than current size, shrink its stack */
	    if (inuse <= (LUAI_MAXSTACK$1 - lstate$3.EXTRA_STACK) && goodsize < L.stack.length)
	        luaD_reallocstack(L, goodsize);
	};

	const luaD_inctop = function(L) {
	    luaD_checkstack(L, 1);
	    L.stack[L.top++] = new lobject$2.TValue(LUA_TNIL$b, null);
	};

	/*
	** Prepares a function call: checks the stack, creates a new CallInfo
	** entry, fills in the relevant information, calls hook if needed.
	** If function is a JS function, does the call, too. (Otherwise, leave
	** the execution ('luaV_execute') to the caller, to allow stackless
	** calls.) Returns true iff function has been executed (JS function).
	*/
	const luaD_precall = function(L, off, nresults) {
	    let func = L.stack[off];

	    switch(func.type) {
	        case LUA_TCCL$1:
	        case LUA_TLCF$1: {
	            let f = func.type === LUA_TCCL$1 ? func.value.f : func.value;

	            luaD_checkstack(L, LUA_MINSTACK);
	            let ci = lstate$3.luaE_extendCI(L);
	            ci.funcOff = off;
	            ci.nresults = nresults;
	            ci.func = func;
	            ci.top = L.top + LUA_MINSTACK;
	            lua_assert$1(ci.top <= L.stack_last);
	            ci.callstatus = 0;
	            if (L.hookmask & LUA_MASKCALL$1)
	                luaD_hook(L, LUA_HOOKCALL, -1);
	            let n = f(L); /* do the actual call */
	            if (typeof n !== "number" || n < 0 || (n|0) !== n)
	                throw Error("invalid return value from JS function (expected integer)");
	            lapi$2.api_checknelems(L, n);

	            luaD_poscall(L, ci, L.top - n, n);

	            return true;
	        }
	        case LUA_TLCL$1: {
	            let base;
	            let p = func.value.p;
	            let n = L.top - off - 1;
	            let fsize = p.maxstacksize;
	            luaD_checkstack(L, fsize);
	            if (p.is_vararg) {
	                base = adjust_varargs(L, p, n);
	            } else {
	                for (; n < p.numparams; n++)
	                    L.stack[L.top++] = new lobject$2.TValue(LUA_TNIL$b, null); // complete missing arguments
	                base = off + 1;
	            }

	            let ci = lstate$3.luaE_extendCI(L);
	            ci.funcOff = off;
	            ci.nresults = nresults;
	            ci.func = func;
	            ci.l_base = base;
	            ci.top = base + fsize;
	            adjust_top(L, ci.top);
	            ci.l_code = p.code;
	            ci.l_savedpc = 0;
	            ci.callstatus = lstate$3.CIST_LUA;
	            if (L.hookmask & LUA_MASKCALL$1)
	                callhook(L, ci);
	            return false;
	        }
	        default:
	            luaD_checkstack(L, 1);
	            tryfuncTM(L, off, func);
	            return luaD_precall(L, off, nresults);
	    }
	};

	const luaD_poscall = function(L, ci, firstResult, nres) {
	    let wanted = ci.nresults;

	    if (L.hookmask & (LUA_MASKRET$1 | LUA_MASKLINE$2)) {
	        if (L.hookmask & LUA_MASKRET$1)
	            luaD_hook(L, LUA_HOOKRET, -1);
	        L.oldpc = ci.previous.l_savedpc;  /* 'oldpc' for caller function */
	    }

	    let res = ci.funcOff;
	    L.ci = ci.previous;
	    L.ci.next = null;
	    return moveresults(L, firstResult, res, nres, wanted);
	};

	const moveresults = function(L, firstResult, res, nres, wanted) {
	    switch (wanted) {
	        case 0:
	            break;
	        case 1: {
	            if (nres === 0)
	                L.stack[res].setnilvalue();
	            else {
	                lobject$2.setobjs2s(L, res, firstResult); /* move it to proper place */
	            }
	            break;
	        }
	        case LUA_MULTRET$4: {
	            for (let i = 0; i < nres; i++)
	                lobject$2.setobjs2s(L, res + i, firstResult + i);
	            for (let i=L.top; i>=(res + nres); i--)
	                delete L.stack[i];
	            L.top = res + nres;
	            return false;
	        }
	        default: {
	            let i;
	            if (wanted <= nres) {
	                for (i = 0; i < wanted; i++)
	                    lobject$2.setobjs2s(L, res + i, firstResult + i);
	            } else {
	                for (i = 0; i < nres; i++)
	                    lobject$2.setobjs2s(L, res + i, firstResult + i);
	                for (; i < wanted; i++) {
	                    if (res+i >= L.top)
	                        L.stack[res + i] = new lobject$2.TValue(LUA_TNIL$b, null);
	                    else
	                        L.stack[res + i].setnilvalue();
	                }
	            }
	            break;
	        }
	    }
	    let newtop = res + wanted; /* top points after the last result */
	    for (let i=L.top; i>=newtop; i--)
	        delete L.stack[i];
	    L.top = newtop;
	    return true;
	};

	/*
	** Call a hook for the given event. Make sure there is a hook to be
	** called. (Both 'L->hook' and 'L->hookmask', which triggers this
	** function, can be changed asynchronously by signals.)
	*/
	const luaD_hook = function(L, event, line) {
	    let hook = L.hook;
	    if (hook && L.allowhook) {  /* make sure there is a hook */
	        let ci = L.ci;
	        let top = L.top;
	        let ci_top = ci.top;
	        let ar = new lua_Debug$3();
	        ar.event = event;
	        ar.currentline = line;
	        ar.i_ci = ci;
	        luaD_checkstack(L, LUA_MINSTACK);  /* ensure minimum stack size */
	        ci.top = L.top + LUA_MINSTACK;
	        lua_assert$1(ci.top <= L.stack_last);
	        L.allowhook = 0;  /* cannot call hooks inside a hook */
	        ci.callstatus |= lstate$3.CIST_HOOKED;
	        hook(L, ar);
	        lua_assert$1(!L.allowhook);
	        L.allowhook = 1;
	        ci.top = ci_top;
	        adjust_top(L, top);
	        ci.callstatus &= ~lstate$3.CIST_HOOKED;
	    }
	};

	const callhook = function(L, ci) {
	    let hook = LUA_HOOKCALL;
	    ci.l_savedpc++;  /* hooks assume 'pc' is already incremented */
	    if ((ci.previous.callstatus & lstate$3.CIST_LUA) &&
	      ci.previous.l_code[ci.previous.l_savedpc - 1].opcode == lopcodes$1.OpCodesI.OP_TAILCALL) {
	        ci.callstatus |= lstate$3.CIST_TAIL;
	        hook = LUA_HOOKTAILCALL;
	    }
	    luaD_hook(L, hook, -1);
	    ci.l_savedpc--;  /* correct 'pc' */
	};

	const adjust_varargs = function(L, p, actual) {
	    let nfixargs = p.numparams;
	    /* move fixed parameters to final position */
	    let fixed = L.top - actual; /* first fixed argument */
	    let base = L.top; /* final position of first argument */

	    let i;
	    for (i = 0; i < nfixargs && i < actual; i++) {
	        lobject$2.pushobj2s(L, L.stack[fixed + i]);
	        L.stack[fixed + i].setnilvalue();
	    }

	    for (; i < nfixargs; i++)
	        L.stack[L.top++] = new lobject$2.TValue(LUA_TNIL$b, null);

	    return base;
	};

	const tryfuncTM = function(L, off, func) {
	    let tm = ltm$2.luaT_gettmbyobj(L, func, ltm$2.TMS.TM_CALL);
	    if (!tm.ttisfunction(tm))
	        ldebug$2.luaG_typeerror(L, func, to_luastring$f("call", true));
	    /* Open a hole inside the stack at 'func' */
	    lobject$2.pushobj2s(L, L.stack[L.top-1]); /* push top of stack again */
	    for (let p = L.top-2; p > off; p--)
	        lobject$2.setobjs2s(L, p, p-1); /* move other items up one */
	    lobject$2.setobj2s(L, off, tm); /* tag method is the new function to be called */
	};

	/*
	** Check appropriate error for stack overflow ("regular" overflow or
	** overflow while handling stack overflow). If 'nCalls' is larger than
	** LUAI_MAXCCALLS (which means it is handling a "regular" overflow) but
	** smaller than 9/8 of LUAI_MAXCCALLS, does not report an error (to
	** allow overflow handling to work)
	*/
	const stackerror = function(L) {
	    if (L.nCcalls === LUAI_MAXCCALLS)
	        ldebug$2.luaG_runerror(L, to_luastring$f("JS stack overflow", true));
	    else if (L.nCcalls >= LUAI_MAXCCALLS + (LUAI_MAXCCALLS >> 3))
	        luaD_throw(L, LUA_ERRERR$1);  /* error while handing stack error */
	};

	/*
	** Call a function (JS or Lua). The function to be called is at func.
	** The arguments are on the stack, right after the function.
	** When returns, all the results are on the stack, starting at the original
	** function position.
	*/
	const luaD_call = function(L, off, nResults) {
	    if (++L.nCcalls >= LUAI_MAXCCALLS)
	        stackerror(L);
	    if (!luaD_precall(L, off, nResults))
	        lvm$2.luaV_execute(L);
	    L.nCcalls--;
	};

	const luaD_throw = function(L, errcode) {
	    if (L.errorJmp) {  /* thread has an error handler? */
	        L.errorJmp.status = errcode;  /* set status */
	        throw L.errorJmp;
	    } else {  /* thread has no error handler */
	        let g = L.l_G;
	        L.status = errcode;  /* mark it as dead */
	        if (g.mainthread.errorJmp) {  /* main thread has a handler? */
	            g.mainthread.stack[g.mainthread.top++] = L.stack[L.top - 1];  /* copy error obj. */
	            luaD_throw(g.mainthread, errcode);  /* re-throw in main thread */
	        } else {  /* no handler at all; abort */
	            let panic = g.panic;
	            if (panic) {  /* panic function? */
	                seterrorobj(L, errcode, L.top);  /* assume EXTRA_STACK */
	                if (L.ci.top < L.top)
	                    L.ci.top = L.top;  /* pushing msg. can break this invariant */
	                panic(L);  /* call panic function (last chance to jump out) */
	            }
	            throw new Error(`Aborted ${errcode}`);
	        }
	    }
	};

	const luaD_rawrunprotected = function(L, f, ud) {
	    let oldnCcalls = L.nCcalls;
	    let lj = {
	        status: LUA_OK$5,
	        previous: L.errorJmp /* chain new error handler */
	    };
	    L.errorJmp = lj;

	    try {
	        f(L, ud);
	    } catch (e) {
	        if (lj.status === LUA_OK$5) {
	            /* error was not thrown via luaD_throw, i.e. it is a JS error */
	            /* run user error handler (if it exists) */
	            let atnativeerror = L.l_G.atnativeerror;
	            if (atnativeerror) {
	                try {
	                    lj.status = LUA_OK$5;

	                    lapi$2.lua_pushcfunction(L, atnativeerror);
	                    lapi$2.lua_pushlightuserdata(L, e);
	                    luaD_callnoyield(L, L.top - 2, 1);

	                    /* Now run the message handler (if it exists) */
	                    /* copy of luaG_errormsg without the throw */
	                    if (L.errfunc !== 0) {  /* is there an error handling function? */
	                        let errfunc = L.errfunc;
	                        lobject$2.pushobj2s(L, L.stack[L.top - 1]); /* move argument */
	                        lobject$2.setobjs2s(L, L.top - 2, errfunc); /* push function */
	                        luaD_callnoyield(L, L.top - 2, 1);
	                    }

	                    lj.status = LUA_ERRRUN$1;
	                } catch(e2) {
	                    if (lj.status === LUA_OK$5) {
	                        /* also failed */
	                        lj.status = -1;
	                    }
	                }
	            } else {
	                lj.status = -1;
	            }
	        }
	    }

	    L.errorJmp = lj.previous;
	    L.nCcalls = oldnCcalls;

	    return lj.status;

	};

	/*
	** Completes the execution of an interrupted C function, calling its
	** continuation function.
	*/
	const finishCcall = function(L, status) {
	    let ci = L.ci;

	    /* must have a continuation and must be able to call it */
	    lua_assert$1(ci.c_k !== null && L.nny === 0);
	    /* error status can only happen in a protected call */
	    lua_assert$1(ci.callstatus & lstate$3.CIST_YPCALL || status === LUA_YIELD$3);

	    if (ci.callstatus & lstate$3.CIST_YPCALL) {  /* was inside a pcall? */
	        ci.callstatus &= ~lstate$3.CIST_YPCALL;  /* continuation is also inside it */
	        L.errfunc = ci.c_old_errfunc;  /* with the same error function */
	    }

	    /* finish 'lua_callk'/'lua_pcall'; CIST_YPCALL and 'errfunc' already
	       handled */
	    if (ci.nresults === LUA_MULTRET$4 && L.ci.top < L.top) L.ci.top = L.top;
	    let c_k = ci.c_k; /* don't want to call as method */
	    let n = c_k(L, status, ci.c_ctx);  /* call continuation function */
	    lapi$2.api_checknelems(L, n);
	    luaD_poscall(L, ci, L.top - n, n);  /* finish 'luaD_precall' */
	};

	/*
	** Executes "full continuation" (everything in the stack) of a
	** previously interrupted coroutine until the stack is empty (or another
	** interruption long-jumps out of the loop). If the coroutine is
	** recovering from an error, 'ud' points to the error status, which must
	** be passed to the first continuation function (otherwise the default
	** status is LUA_YIELD).
	*/
	const unroll = function(L, ud) {
	    if (ud !== null)  /* error status? */
	        finishCcall(L, ud);  /* finish 'lua_pcallk' callee */

	    while (L.ci !== L.base_ci) {  /* something in the stack */
	        if (!(L.ci.callstatus & lstate$3.CIST_LUA))  /* C function? */
	            finishCcall(L, LUA_YIELD$3);  /* complete its execution */
	        else {  /* Lua function */
	            lvm$2.luaV_finishOp(L);  /* finish interrupted instruction */
	            lvm$2.luaV_execute(L);  /* execute down to higher C 'boundary' */
	        }
	    }
	};

	/*
	** Try to find a suspended protected call (a "recover point") for the
	** given thread.
	*/
	const findpcall = function(L) {
	    for (let ci = L.ci; ci !== null; ci = ci.previous) {  /* search for a pcall */
	        if (ci.callstatus & lstate$3.CIST_YPCALL)
	            return ci;
	    }

	    return null;  /* no pending pcall */
	};

	/*
	** Recovers from an error in a coroutine. Finds a recover point (if
	** there is one) and completes the execution of the interrupted
	** 'luaD_pcall'. If there is no recover point, returns zero.
	*/
	const recover = function(L, status) {
	    let ci = findpcall(L);
	    if (ci === null) return 0;  /* no recovery point */
	    /* "finish" luaD_pcall */
	    let oldtop = ci.extra;
	    lfunc$2.luaF_close(L, oldtop);
	    seterrorobj(L, status, oldtop);
	    L.ci = ci;
	    L.allowhook = ci.callstatus & lstate$3.CIST_OAH;  /* restore original 'allowhook' */
	    L.nny = 0;  /* should be zero to be yieldable */
	    luaD_shrinkstack(L);
	    L.errfunc = ci.c_old_errfunc;
	    return 1;  /* continue running the coroutine */
	};

	/*
	** Signal an error in the call to 'lua_resume', not in the execution
	** of the coroutine itself. (Such errors should not be handled by any
	** coroutine error handler and should not kill the coroutine.)
	*/
	const resume_error = function(L, msg, narg) {
	    let ts = luaS_newliteral$1(L, msg);
	    if (narg === 0) {
	        lobject$2.pushsvalue2s(L, ts);
	        api_check$2(L, L.top <= L.ci.top, "stack overflow");
	    } else {
	        /* remove args from the stack */
	        for (let i=1; i<narg; i++)
	            delete L.stack[--L.top];
	        lobject$2.setsvalue2s(L, L.top-1, ts);  /* push error message */
	    }
	    return LUA_ERRRUN$1;
	};

	/*
	** Do the work for 'lua_resume' in protected mode. Most of the work
	** depends on the status of the coroutine: initial state, suspended
	** inside a hook, or regularly suspended (optionally with a continuation
	** function), plus erroneous cases: non-suspended coroutine or dead
	** coroutine.
	*/
	const resume = function(L, n) {
	    let firstArg = L.top - n;  /* first argument */
	    let ci = L.ci;
	    if (L.status === LUA_OK$5) {  /* starting a coroutine? */
	        if (!luaD_precall(L, firstArg - 1, LUA_MULTRET$4))  /* Lua function? */
	            lvm$2.luaV_execute(L);  /* call it */
	    } else {  /* resuming from previous yield */
	        lua_assert$1(L.status === LUA_YIELD$3);
	        L.status = LUA_OK$5;  /* mark that it is running (again) */
	        ci.funcOff = ci.extra;
	        ci.func = L.stack[ci.funcOff];

	        if (ci.callstatus & lstate$3.CIST_LUA)  /* yielded inside a hook? */
	            lvm$2.luaV_execute(L);  /* just continue running Lua code */
	        else {  /* 'common' yield */
	            if (ci.c_k !== null) {  /* does it have a continuation function? */
	                n = ci.c_k(L, LUA_YIELD$3, ci.c_ctx); /* call continuation */
	                lapi$2.api_checknelems(L, n);
	                firstArg = L.top - n;  /* yield results come from continuation */
	            }

	            luaD_poscall(L, ci, firstArg, n);  /* finish 'luaD_precall' */
	        }

	        unroll(L, null);  /* run continuation */
	    }
	};

	const lua_resume$1 = function(L, from, nargs) {
	    let oldnny = L.nny;  /* save "number of non-yieldable" calls */

	    if (L.status === LUA_OK$5) {  /* may be starting a coroutine */
	        if (L.ci !== L.base_ci)  /* not in base level? */
	            return resume_error(L, "cannot resume non-suspended coroutine", nargs);
	    } else if (L.status !== LUA_YIELD$3)
	        return resume_error(L, "cannot resume dead coroutine", nargs);

	    L.nCcalls = from ? from.nCcalls + 1 : 1;
	    if (L.nCcalls >= LUAI_MAXCCALLS)
	        return resume_error(L, "JS stack overflow", nargs);

	    L.nny = 0;  /* allow yields */

	    lapi$2.api_checknelems(L, L.status === LUA_OK$5 ? nargs + 1: nargs);

	    let status = luaD_rawrunprotected(L, resume, nargs);
	    if (status === -1)  /* error calling 'lua_resume'? */
	        status = LUA_ERRRUN$1;
	    else {  /* continue running after recoverable errors */
	        while (status > LUA_YIELD$3 && recover(L, status)) {
	            /* unroll continuation */
	            status = luaD_rawrunprotected(L, unroll, status);
	        }

	        if (status > LUA_YIELD$3) {  /* unrecoverable error? */
	            L.status = status;  /* mark thread as 'dead' */
	            seterrorobj(L, status, L.top);  /* push error message */
	            L.ci.top = L.top;
	        } else
	            lua_assert$1(status === L.status);  /* normal end or yield */
	    }

	    L.nny = oldnny;  /* restore 'nny' */
	    L.nCcalls--;
	    lua_assert$1(L.nCcalls === (from ? from.nCcalls : 0));
	    return status;
	};

	const lua_isyieldable$1 = function(L) {
	    return L.nny === 0;
	};

	const lua_yieldk = function(L, nresults, ctx, k) {
	    let ci = L.ci;
	    lapi$2.api_checknelems(L, nresults);

	    if (L.nny > 0) {
	        if (L !== L.l_G.mainthread)
	            ldebug$2.luaG_runerror(L, to_luastring$f("attempt to yield across a JS-call boundary", true));
	        else
	            ldebug$2.luaG_runerror(L, to_luastring$f("attempt to yield from outside a coroutine", true));
	    }

	    L.status = LUA_YIELD$3;
	    ci.extra = ci.funcOff;  /* save current 'func' */
	    if (ci.callstatus & lstate$3.CIST_LUA)  /* inside a hook? */
	        api_check$2(L, k === null, "hooks cannot continue after yielding");
	    else {
	        ci.c_k = k;
	        if (k !== null)  /* is there a continuation? */
	            ci.c_ctx = ctx;  /* save context */
	        ci.funcOff = L.top - nresults - 1;  /* protect stack below results */
	        ci.func = L.stack[ci.funcOff];
	        luaD_throw(L, LUA_YIELD$3);
	    }

	    lua_assert$1(ci.callstatus & lstate$3.CIST_HOOKED);  /* must be inside a hook */
	    return 0;  /* return to 'luaD_hook' */
	};

	const lua_yield$1 = function(L, n) {
	    lua_yieldk(L, n, 0, null);
	};

	const luaD_pcall = function(L, func, u, old_top, ef) {
	    let old_ci = L.ci;
	    let old_allowhooks = L.allowhook;
	    let old_nny = L.nny;
	    let old_errfunc = L.errfunc;
	    L.errfunc = ef;

	    let status = luaD_rawrunprotected(L, func, u);

	    if (status !== LUA_OK$5) {
	        lfunc$2.luaF_close(L, old_top);
	        seterrorobj(L, status, old_top);
	        L.ci = old_ci;
	        L.allowhook = old_allowhooks;
	        L.nny = old_nny;
	        luaD_shrinkstack(L);
	    }

	    L.errfunc = old_errfunc;

	    return status;
	};

	/*
	** Similar to 'luaD_call', but does not allow yields during the call
	*/
	const luaD_callnoyield = function(L, off, nResults) {
	    L.nny++;
	    luaD_call(L, off, nResults);
	    L.nny--;
	};

	/*
	** Execute a protected parser.
	*/
	class SParser {
	    constructor(z, name, mode) {  /* data to 'f_parser' */
	        this.z = z;
	        this.buff = new MBuffer();  /* dynamic structure used by the scanner */
	        this.dyd = new lparser.Dyndata();  /* dynamic structures used by the parser */
	        this.mode = mode;
	        this.name = name;
	    }
	}

	const checkmode = function(L, mode, x) {
	    if (mode && luastring_indexOf$4(mode, x[0]) === -1) {
	        lobject$2.luaO_pushfstring(L,
	            to_luastring$f("attempt to load a %s chunk (mode is '%s')"), x, mode);
	        luaD_throw(L, LUA_ERRSYNTAX);
	    }
	};

	const f_parser = function(L, p) {
	    let cl;
	    let c = p.z.zgetc();  /* read first character */
	    if (c === LUA_SIGNATURE$2[0]) {
	        checkmode(L, p.mode, to_luastring$f("binary", true));
	        cl = lundump.luaU_undump(L, p.z, p.name);
	    } else {
	        checkmode(L, p.mode, to_luastring$f("text", true));
	        cl = lparser.luaY_parser(L, p.z, p.buff, p.dyd, p.name, c);
	    }

	    lua_assert$1(cl.nupvalues === cl.p.upvalues.length);
	    lfunc$2.luaF_initupvals(L, cl);
	};

	const luaD_protectedparser = function(L, z, name, mode) {
	    let p = new SParser(z, name, mode);
	    L.nny++;  /* cannot yield during parsing */
	    let status = luaD_pcall(L, f_parser, p, L.top, L.errfunc);
	    L.nny--;
	    return status;
	};

	ldo$a.adjust_top           = adjust_top;
	ldo$a.luaD_call            = luaD_call;
	ldo$a.luaD_callnoyield     = luaD_callnoyield;
	ldo$a.luaD_checkstack      = luaD_checkstack;
	ldo$a.luaD_growstack       = luaD_growstack;
	ldo$a.luaD_hook            = luaD_hook;
	ldo$a.luaD_inctop          = luaD_inctop;
	ldo$a.luaD_pcall           = luaD_pcall;
	ldo$a.luaD_poscall         = luaD_poscall;
	ldo$a.luaD_precall         = luaD_precall;
	ldo$a.luaD_protectedparser = luaD_protectedparser;
	ldo$a.luaD_rawrunprotected = luaD_rawrunprotected;
	ldo$a.luaD_reallocstack    = luaD_reallocstack;
	ldo$a.luaD_throw           = luaD_throw;
	ldo$a.lua_isyieldable      = lua_isyieldable$1;
	ldo$a.lua_resume           = lua_resume$1;
	ldo$a.lua_yield            = lua_yield$1;
	ldo$a.lua_yieldk           = lua_yieldk;

	const {
	    LUA_HOOKCOUNT,
	    LUA_HOOKLINE,
	    LUA_MASKCOUNT: LUA_MASKCOUNT$1,
	    LUA_MASKLINE: LUA_MASKLINE$1,
	    constant_types: {
	        LUA_TBOOLEAN: LUA_TBOOLEAN$5,
	        LUA_TNIL: LUA_TNIL$a,
	        LUA_TTABLE: LUA_TTABLE$9
	    },
	    thread_status: {
	        LUA_ERRRUN,
	        LUA_YIELD: LUA_YIELD$2
	    },
	    from_userstring: from_userstring$2,
	    luastring_eq: luastring_eq$3,
	    luastring_indexOf: luastring_indexOf$3,
	    to_luastring: to_luastring$e
	} = defs$2;
	const {
	    api_check: api_check$1,
	    lua_assert
	} = llimits;
	const { LUA_IDSIZE } = luaconf$1;
	const lapi$1     = lapi$4;
	const ldo$2      = ldo$a;
	const lfunc$1    = lfunc$6;
	const llex     = llex$4;
	const lobject$1  = lobject$c;
	const lopcodes = lopcodes$3;
	const lstate$2   = lstate$8;
	const ltable$1   = ltable$9;
	const ltm$1      = ltm$6;
	const lvm$1      = lvm$6;

	const currentpc = function(ci) {
	    lua_assert(ci.callstatus & lstate$2.CIST_LUA);
	    return ci.l_savedpc - 1;
	};

	const currentline = function(ci) {
	    return ci.func.value.p.lineinfo.length !== 0 ? ci.func.value.p.lineinfo[currentpc(ci)] : -1;
	};

	/*
	** If function yielded, its 'func' can be in the 'extra' field. The
	** next function restores 'func' to its correct value for debugging
	** purposes. (It exchanges 'func' and 'extra'; so, when called again,
	** after debugging, it also "re-restores" ** 'func' to its altered value.
	*/
	const swapextra = function(L) {
	    if (L.status === LUA_YIELD$2) {
	        let ci = L.ci;  /* get function that yielded */
	        let temp = ci.funcOff;  /* exchange its 'func' and 'extra' values */
	        ci.func = L.stack[ci.extra];
	        ci.funcOff = ci.extra;
	        ci.extra = temp;
	    }
	};

	const lua_sethook$1 = function(L, func, mask, count) {
	    if (func === null || mask === 0) {  /* turn off hooks? */
	        mask = 0;
	        func = null;
	    }
	    if (L.ci.callstatus & lstate$2.CIST_LUA)
	        L.oldpc = L.ci.l_savedpc;
	    L.hook = func;
	    L.basehookcount = count;
	    L.hookcount = L.basehookcount;
	    L.hookmask = mask;
	};

	const lua_gethook$1 = function(L) {
	    return L.hook;
	};


	const lua_gethookmask$1 = function(L) {
	    return L.hookmask;
	};


	const lua_gethookcount$1 = function(L) {
	    return L.basehookcount;
	};

	const lua_getstack$3 = function(L, level, ar) {
	    let ci;
	    let status;
	    if (level < 0) return 0;  /* invalid (negative) level */
	    for (ci = L.ci; level > 0 && ci !== L.base_ci; ci = ci.previous)
	        level--;
	    if (level === 0 && ci !== L.base_ci) {  /* level found? */
	        status = 1;
	        ar.i_ci = ci;
	    } else
	        status = 0;  /* no such level */
	    return status;
	};

	const upvalname = function(p, uv) {
	    lua_assert(uv < p.upvalues.length);
	    let s = p.upvalues[uv].name;
	    if (s === null) return to_luastring$e("?", true);
	    return s.getstr();
	};

	const findvararg = function(ci, n) {
	    let nparams = ci.func.value.p.numparams;
	    if (n >= ci.l_base - ci.funcOff - nparams)
	        return null;  /* no such vararg */
	    else {
	        return {
	            pos: ci.funcOff + nparams + n,
	            name: to_luastring$e("(*vararg)", true)  /* generic name for any vararg */
	        };
	    }
	};

	const findlocal = function(L, ci, n) {
	    let base, name = null;

	    if (ci.callstatus & lstate$2.CIST_LUA) {
	        if (n < 0)  /* access to vararg values? */
	            return findvararg(ci, -n);
	        else {
	            base = ci.l_base;
	            name = lfunc$1.luaF_getlocalname(ci.func.value.p, n, currentpc(ci));
	        }
	    } else
	        base = ci.funcOff + 1;

	    if (name === null) {  /* no 'standard' name? */
	        let limit = ci === L.ci ? L.top : ci.next.funcOff;
	        if (limit - base >= n && n > 0)  /* is 'n' inside 'ci' stack? */
	            name = to_luastring$e("(*temporary)", true);  /* generic name for any valid slot */
	        else
	            return null;  /* no name */
	    }
	    return {
	        pos: base + (n - 1),
	        name: name
	    };
	};

	const lua_getlocal$1 = function(L, ar, n) {
	    let name;
	    swapextra(L);
	    if (ar === null) {  /* information about non-active function? */
	        if (!L.stack[L.top - 1].ttisLclosure())  /* not a Lua function? */
	            name = null;
	        else  /* consider live variables at function start (parameters) */
	            name = lfunc$1.luaF_getlocalname(L.stack[L.top - 1].value.p, n, 0);
	    } else {  /* active function; get information through 'ar' */
	        let local = findlocal(L, ar.i_ci, n);
	        if (local) {
	            name = local.name;
	            lobject$1.pushobj2s(L, L.stack[local.pos]);
	            api_check$1(L, L.top <= L.ci.top, "stack overflow");
	        } else {
	            name = null;
	        }
	    }
	    swapextra(L);
	    return name;
	};

	const lua_setlocal$1 = function(L, ar, n) {
	    let name;
	    swapextra(L);
	    let local = findlocal(L, ar.i_ci, n);
	    if (local) {
	        name = local.name;
	        lobject$1.setobjs2s(L, local.pos, L.top - 1);
	        delete L.stack[--L.top];  /* pop value */
	    } else {
	        name = null;
	    }
	    swapextra(L);
	    return name;
	};

	const funcinfo = function(ar, cl) {
	    if (cl === null || cl instanceof lobject$1.CClosure) {
	        ar.source = to_luastring$e("=[JS]", true);
	        ar.linedefined = -1;
	        ar.lastlinedefined = -1;
	        ar.what = to_luastring$e("J", true);
	    } else {
	        let p = cl.p;
	        ar.source = p.source ? p.source.getstr() : to_luastring$e("=?", true);
	        ar.linedefined = p.linedefined;
	        ar.lastlinedefined = p.lastlinedefined;
	        ar.what = ar.linedefined === 0 ? to_luastring$e("main", true) : to_luastring$e("Lua", true);
	    }

	    ar.short_src = lobject$1.luaO_chunkid(ar.source, LUA_IDSIZE);
	};

	const collectvalidlines = function(L, f) {
	    if (f === null || f instanceof lobject$1.CClosure) {
	        L.stack[L.top] = new lobject$1.TValue(LUA_TNIL$a, null);
	        lapi$1.api_incr_top(L);
	    } else {
	        let lineinfo = f.p.lineinfo;
	        let t = ltable$1.luaH_new(L);
	        L.stack[L.top] = new lobject$1.TValue(LUA_TTABLE$9, t);
	        lapi$1.api_incr_top(L);
	        let v = new lobject$1.TValue(LUA_TBOOLEAN$5, true);
	        for (let i = 0; i < lineinfo.length; i++)
	            ltable$1.luaH_setint(t, lineinfo[i], v);
	    }
	};

	const getfuncname = function(L, ci) {
	    let r = {
	        name: null,
	        funcname: null
	    };
	    if (ci === null)
	        return null;
	    else if (ci.callstatus & lstate$2.CIST_FIN) {  /* is this a finalizer? */
	        r.name = to_luastring$e("__gc", true);
	        r.funcname = to_luastring$e("metamethod", true);  /* report it as such */
	        return r;
	    }
	    /* calling function is a known Lua function? */
	    else if (!(ci.callstatus & lstate$2.CIST_TAIL) && ci.previous.callstatus & lstate$2.CIST_LUA)
	        return funcnamefromcode(L, ci.previous);
	    else return null;  /* no way to find a name */
	};

	const auxgetinfo = function(L, what, ar, f, ci) {
	    let status = 1;
	    for (; what.length > 0; what = what.subarray(1)) {
	        switch (what[0]) {
	            case 83 /* ('S').charCodeAt(0) */: {
	                funcinfo(ar, f);
	                break;
	            }
	            case 108 /* ('l').charCodeAt(0) */: {
	                ar.currentline = ci && ci.callstatus & lstate$2.CIST_LUA ? currentline(ci) : -1;
	                break;
	            }
	            case 117 /* ('u').charCodeAt(0) */: {
	                ar.nups = f === null ? 0 : f.nupvalues;
	                if (f === null || f instanceof lobject$1.CClosure) {
	                    ar.isvararg = true;
	                    ar.nparams = 0;
	                } else {
	                    ar.isvararg = f.p.is_vararg;
	                    ar.nparams = f.p.numparams;
	                }
	                break;
	            }
	            case 116 /* ('t').charCodeAt(0) */: {
	                ar.istailcall = ci ? ci.callstatus & lstate$2.CIST_TAIL : 0;
	                break;
	            }
	            case 110 /* ('n').charCodeAt(0) */: {
	                let r = getfuncname(L, ci);
	                if (r === null) {
	                    ar.namewhat = to_luastring$e("", true);
	                    ar.name = null;
	                } else {
	                    ar.namewhat = r.funcname;
	                    ar.name = r.name;
	                }
	                break;
	            }
	            case 76 /* ('L').charCodeAt(0) */:
	            case 102 /* ('f').charCodeAt(0) */:  /* handled by lua_getinfo */
	                break;
	            default: status = 0;  /* invalid option */
	        }
	    }

	    return status;
	};

	const lua_getinfo$2 = function(L, what, ar) {
	    what = from_userstring$2(what);
	    let status, cl, ci, func;
	    swapextra(L);
	    if (what[0] === 62 /* ('>').charCodeAt(0) */) {
	        ci = null;
	        func = L.stack[L.top - 1];
	        api_check$1(L, func.ttisfunction(), "function expected");
	        what = what.subarray(1);  /* skip the '>' */
	        L.top--;  /* pop function */
	    } else {
	        ci = ar.i_ci;
	        func = ci.func;
	        lua_assert(ci.func.ttisfunction());
	    }

	    cl = func.ttisclosure() ? func.value : null;
	    status = auxgetinfo(L, what, ar, cl, ci);
	    if (luastring_indexOf$3(what, 102 /* ('f').charCodeAt(0) */) >= 0) {
	        lobject$1.pushobj2s(L, func);
	        api_check$1(L, L.top <= L.ci.top, "stack overflow");
	    }

	    swapextra(L);
	    if (luastring_indexOf$3(what, 76 /* ('L').charCodeAt(0) */) >= 0)
	        collectvalidlines(L, cl);

	    return status;
	};

	const kname = function(p, pc, c) {
	    let r = {
	        name: null,
	        funcname: null
	    };

	    if (lopcodes.ISK(c)) {  /* is 'c' a constant? */
	        let kvalue = p.k[lopcodes.INDEXK(c)];
	        if (kvalue.ttisstring()) {  /* literal constant? */
	            r.name = kvalue.svalue();  /* it is its own name */
	            return r;
	        }
	        /* else no reasonable name found */
	    } else {  /* 'c' is a register */
	        let what = getobjname(p, pc, c); /* search for 'c' */
	        if (what && what.funcname[0] === 99 /* ('c').charCodeAt(0) */) {  /* found a constant name? */
	            return what;  /* 'name' already filled */
	        }
	        /* else no reasonable name found */
	    }
	    r.name = to_luastring$e("?", true);
	    return r;  /* no reasonable name found */
	};

	const filterpc = function(pc, jmptarget) {
	    if (pc < jmptarget)  /* is code conditional (inside a jump)? */
	        return -1;  /* cannot know who sets that register */
	    else return pc;  /* current position sets that register */
	};

	/*
	** try to find last instruction before 'lastpc' that modified register 'reg'
	*/
	const findsetreg = function(p, lastpc, reg) {
	    let setreg = -1;  /* keep last instruction that changed 'reg' */
	    let jmptarget = 0;  /* any code before this address is conditional */
	    let OCi = lopcodes.OpCodesI;
	    for (let pc = 0; pc < lastpc; pc++) {
	        let i = p.code[pc];
	        let a = i.A;
	        switch (i.opcode) {
	            case OCi.OP_LOADNIL: {
	                let b = i.B;
	                if (a <= reg && reg <= a + b)  /* set registers from 'a' to 'a+b' */
	                    setreg = filterpc(pc, jmptarget);
	                break;
	            }
	            case OCi.OP_TFORCALL: {
	                if (reg >= a + 2)  /* affect all regs above its base */
	                    setreg = filterpc(pc, jmptarget);
	                break;
	            }
	            case OCi.OP_CALL:
	            case OCi.OP_TAILCALL: {
	                if (reg >= a)  /* affect all registers above base */
	                    setreg = filterpc(pc, jmptarget);
	                break;
	            }
	            case OCi.OP_JMP: {
	                let b = i.sBx;
	                let dest = pc + 1 + b;
	                /* jump is forward and do not skip 'lastpc'? */
	                if (pc < dest && dest <= lastpc) {
	                    if (dest > jmptarget)
	                        jmptarget = dest;  /* update 'jmptarget' */
	                }
	                break;
	            }
	            default:
	                if (lopcodes.testAMode(i.opcode) && reg === a)
	                    setreg = filterpc(pc, jmptarget);
	                break;
	        }
	    }

	    return setreg;
	};


	const getobjname = function(p, lastpc, reg) {
	    let r = {
	        name: lfunc$1.luaF_getlocalname(p, reg + 1, lastpc),
	        funcname: null
	    };

	    if (r.name) {  /* is a local? */
	        r.funcname = to_luastring$e("local", true);
	        return r;
	    }

	    /* else try symbolic execution */
	    let pc = findsetreg(p, lastpc, reg);
	    let OCi = lopcodes.OpCodesI;
	    if (pc !== -1) {  /* could find instruction? */
	        let i = p.code[pc];
	        switch (i.opcode) {
	            case OCi.OP_MOVE: {
	                let b = i.B;  /* move from 'b' to 'a' */
	                if (b < i.A)
	                    return getobjname(p, pc, b);  /* get name for 'b' */
	                break;
	            }
	            case OCi.OP_GETTABUP:
	            case OCi.OP_GETTABLE: {
	                let k = i.C;  /* key index */
	                let t = i.B;  /* table index */
	                let vn = i.opcode === OCi.OP_GETTABLE ? lfunc$1.luaF_getlocalname(p, t + 1, pc) : upvalname(p, t);
	                r.name = kname(p, pc, k).name;
	                r.funcname = (vn && luastring_eq$3(vn, llex.LUA_ENV)) ? to_luastring$e("global", true) : to_luastring$e("field", true);
	                return r;
	            }
	            case OCi.OP_GETUPVAL: {
	                r.name = upvalname(p, i.B);
	                r.funcname = to_luastring$e("upvalue", true);
	                return r;
	            }
	            case OCi.OP_LOADK:
	            case OCi.OP_LOADKX: {
	                let b = i.opcode === OCi.OP_LOADK ? i.Bx : p.code[pc + 1].Ax;
	                if (p.k[b].ttisstring()) {
	                    r.name = p.k[b].svalue();
	                    r.funcname = to_luastring$e("constant", true);
	                    return r;
	                }
	                break;
	            }
	            case OCi.OP_SELF: {
	                let k = i.C;
	                r.name = kname(p, pc, k).name;
	                r.funcname = to_luastring$e("method", true);
	                return r;
	            }
	        }
	    }

	    return null;
	};

	/*
	** Try to find a name for a function based on the code that called it.
	** (Only works when function was called by a Lua function.)
	** Returns what the name is (e.g., "for iterator", "method",
	** "metamethod") and sets '*name' to point to the name.
	*/
	const funcnamefromcode = function(L, ci) {
	    let r = {
	        name: null,
	        funcname: null
	    };

	    let tm = 0;  /* (initial value avoids warnings) */
	    let p = ci.func.value.p;  /* calling function */
	    let pc = currentpc(ci);  /* calling instruction index */
	    let i = p.code[pc];  /* calling instruction */
	    let OCi = lopcodes.OpCodesI;

	    if (ci.callstatus & lstate$2.CIST_HOOKED) {
	        r.name = to_luastring$e("?", true);
	        r.funcname = to_luastring$e("hook", true);
	        return r;
	    }

	    switch (i.opcode) {
	        case OCi.OP_CALL:
	        case OCi.OP_TAILCALL:
	            return getobjname(p, pc, i.A);  /* get function name */
	        case OCi.OP_TFORCALL:
	            r.name = to_luastring$e("for iterator", true);
	            r.funcname = to_luastring$e("for iterator", true);
	            return r;
	        /* other instructions can do calls through metamethods */
	        case OCi.OP_SELF:
	        case OCi.OP_GETTABUP:
	        case OCi.OP_GETTABLE:
	            tm = ltm$1.TMS.TM_INDEX;
	            break;
	        case OCi.OP_SETTABUP:
	        case OCi.OP_SETTABLE:
	            tm = ltm$1.TMS.TM_NEWINDEX;
	            break;
	        case OCi.OP_ADD:    tm = ltm$1.TMS.TM_ADD;    break;
	        case OCi.OP_SUB:    tm = ltm$1.TMS.TM_SUB;    break;
	        case OCi.OP_MUL:    tm = ltm$1.TMS.TM_MUL;    break;
	        case OCi.OP_MOD:    tm = ltm$1.TMS.TM_MOD;    break;
	        case OCi.OP_POW:    tm = ltm$1.TMS.TM_POW;    break;
	        case OCi.OP_DIV:    tm = ltm$1.TMS.TM_DIV;    break;
	        case OCi.OP_IDIV:   tm = ltm$1.TMS.TM_IDIV;   break;
	        case OCi.OP_BAND:   tm = ltm$1.TMS.TM_BAND;   break;
	        case OCi.OP_BOR:    tm = ltm$1.TMS.TM_BOR;    break;
	        case OCi.OP_BXOR:   tm = ltm$1.TMS.TM_BXOR;   break;
	        case OCi.OP_SHL:    tm = ltm$1.TMS.TM_SHL;    break;
	        case OCi.OP_SHR:    tm = ltm$1.TMS.TM_SHR;    break;
	        case OCi.OP_UNM:    tm = ltm$1.TMS.TM_UNM;    break;
	        case OCi.OP_BNOT:   tm = ltm$1.TMS.TM_BNOT;   break;
	        case OCi.OP_LEN:    tm = ltm$1.TMS.TM_LEN;    break;
	        case OCi.OP_CONCAT: tm = ltm$1.TMS.TM_CONCAT; break;
	        case OCi.OP_EQ:     tm = ltm$1.TMS.TM_EQ;     break;
	        case OCi.OP_LT:     tm = ltm$1.TMS.TM_LT;     break;
	        case OCi.OP_LE:     tm = ltm$1.TMS.TM_LE;     break;
	        default:
	            return null;  /* cannot find a reasonable name */
	    }

	    r.name = L.l_G.tmname[tm].getstr();
	    r.funcname = to_luastring$e("metamethod", true);
	    return r;
	};

	const isinstack = function(L, ci, o) {
	    for (let i = ci.l_base; i < ci.top; i++) {
	        if (L.stack[i] === o)
	            return i;
	    }

	    return false;
	};

	/*
	** Checks whether value 'o' came from an upvalue. (That can only happen
	** with instructions OP_GETTABUP/OP_SETTABUP, which operate directly on
	** upvalues.)
	*/
	const getupvalname = function(L, ci, o) {
	    let c = ci.func.value;
	    for (let i = 0; i < c.nupvalues; i++) {
	        if (c.upvals[i] === o) {
	            return {
	                name: upvalname(c.p, i),
	                funcname: to_luastring$e('upvalue', true)
	            };
	        }
	    }

	    return null;
	};

	const varinfo = function(L, o) {
	    let ci = L.ci;
	    let kind = null;
	    if (ci.callstatus & lstate$2.CIST_LUA) {
	        kind = getupvalname(L, ci, o);  /* check whether 'o' is an upvalue */
	        let stkid = isinstack(L, ci, o);
	        if (!kind && stkid)  /* no? try a register */
	            kind = getobjname(ci.func.value.p, currentpc(ci), stkid - ci.l_base);
	    }

	    return kind ? lobject$1.luaO_pushfstring(L, to_luastring$e(" (%s '%s')", true), kind.funcname, kind.name) : to_luastring$e("", true);
	};

	const luaG_typeerror = function(L, o, op) {
	    let t = ltm$1.luaT_objtypename(L, o);
	    luaG_runerror(L, to_luastring$e("attempt to %s a %s value%s", true), op, t, varinfo(L, o));
	};

	const luaG_concaterror = function(L, p1, p2) {
	    if (p1.ttisstring() || lvm$1.cvt2str(p1)) p1 = p2;
	    luaG_typeerror(L, p1, to_luastring$e('concatenate', true));
	};

	/*
	** Error when both values are convertible to numbers, but not to integers
	*/
	const luaG_opinterror = function(L, p1, p2, msg) {
	    if (lvm$1.tonumber(p1) === false)
	        p2 = p1;
	    luaG_typeerror(L, p2, msg);
	};

	const luaG_ordererror = function(L, p1, p2) {
	    let t1 = ltm$1.luaT_objtypename(L, p1);
	    let t2 = ltm$1.luaT_objtypename(L, p2);
	    if (luastring_eq$3(t1, t2))
	        luaG_runerror(L, to_luastring$e("attempt to compare two %s values", true), t1);
	    else
	        luaG_runerror(L, to_luastring$e("attempt to compare %s with %s", true), t1, t2);
	};

	/* add src:line information to 'msg' */
	const luaG_addinfo = function(L, msg, src, line) {
	    let buff;
	    if (src)
	        buff = lobject$1.luaO_chunkid(src.getstr(), LUA_IDSIZE);
	    else
	        buff = to_luastring$e("?", true);

	    return lobject$1.luaO_pushfstring(L, to_luastring$e("%s:%d: %s", true), buff, line, msg);
	};

	const luaG_runerror = function(L, fmt, ...argp) {
	    let ci = L.ci;
	    let msg = lobject$1.luaO_pushvfstring(L, fmt, argp);
	    if (ci.callstatus & lstate$2.CIST_LUA)  /* if Lua function, add source:line information */
	        luaG_addinfo(L, msg, ci.func.value.p.source, currentline(ci));
	    luaG_errormsg(L);
	};

	const luaG_errormsg = function(L) {
	    if (L.errfunc !== 0) {  /* is there an error handling function? */
	        let errfunc = L.errfunc;
	        lobject$1.pushobj2s(L, L.stack[L.top - 1]); /* move argument */
	        lobject$1.setobjs2s(L, L.top - 2, errfunc); /* push function */
	        ldo$2.luaD_callnoyield(L, L.top - 2, 1);
	    }

	    ldo$2.luaD_throw(L, LUA_ERRRUN);
	};

	/*
	** Error when both values are convertible to numbers, but not to integers
	*/
	const luaG_tointerror = function(L, p1, p2) {
	    let temp = lvm$1.tointeger(p1);
	    if (temp === false)
	        p2 = p1;
	    luaG_runerror(L, to_luastring$e("number%s has no integer representation", true), varinfo(L, p2));
	};

	const luaG_traceexec = function(L) {
	    let ci = L.ci;
	    let mask = L.hookmask;
	    let counthook = (--L.hookcount === 0 && (mask & LUA_MASKCOUNT$1));
	    if (counthook)
	        L.hookcount = L.basehookcount;  /* reset count */
	    else if (!(mask & LUA_MASKLINE$1))
	        return;  /* no line hook and count != 0; nothing to be done */
	    if (ci.callstatus & lstate$2.CIST_HOOKYIELD) {  /* called hook last time? */
	        ci.callstatus &= ~lstate$2.CIST_HOOKYIELD;  /* erase mark */
	        return;  /* do not call hook again (VM yielded, so it did not move) */
	    }
	    if (counthook)
	        ldo$2.luaD_hook(L, LUA_HOOKCOUNT, -1);  /* call count hook */
	    if (mask & LUA_MASKLINE$1) {
	        let p = ci.func.value.p;
	        let npc = ci.l_savedpc - 1; // pcRel(ci.u.l.savedpc, p);
	        let newline = p.lineinfo.length !== 0 ? p.lineinfo[npc] : -1;
	        if (npc === 0 ||  /* call linehook when enter a new function, */
	            ci.l_savedpc <= L.oldpc ||  /* when jump back (loop), or when */
	            newline !== (p.lineinfo.length !== 0 ? p.lineinfo[L.oldpc - 1] : -1))  /* enter a new line */
	            ldo$2.luaD_hook(L, LUA_HOOKLINE, newline);  /* call line hook */
	    }
	    L.oldpc = ci.l_savedpc;
	    if (L.status === LUA_YIELD$2) {  /* did hook yield? */
	        if (counthook)
	            L.hookcount = 1;  /* undo decrement to zero */
	        ci.l_savedpc--;  /* undo increment (resume will increment it again) */
	        ci.callstatus |= lstate$2.CIST_HOOKYIELD;  /* mark that it yielded */
	        ci.funcOff = L.top - 1;  /* protect stack below results */
	        ci.func = L.stack[ci.funcOff];
	        ldo$2.luaD_throw(L, LUA_YIELD$2);
	    }
	};

	ldebug$8.luaG_addinfo     = luaG_addinfo;
	ldebug$8.luaG_concaterror = luaG_concaterror;
	ldebug$8.luaG_errormsg    = luaG_errormsg;
	ldebug$8.luaG_opinterror  = luaG_opinterror;
	ldebug$8.luaG_ordererror  = luaG_ordererror;
	ldebug$8.luaG_runerror    = luaG_runerror;
	ldebug$8.luaG_tointerror  = luaG_tointerror;
	ldebug$8.luaG_traceexec   = luaG_traceexec;
	ldebug$8.luaG_typeerror   = luaG_typeerror;
	ldebug$8.lua_gethook      = lua_gethook$1;
	ldebug$8.lua_gethookcount = lua_gethookcount$1;
	ldebug$8.lua_gethookmask  = lua_gethookmask$1;
	ldebug$8.lua_getinfo      = lua_getinfo$2;
	ldebug$8.lua_getlocal     = lua_getlocal$1;
	ldebug$8.lua_getstack     = lua_getstack$3;
	ldebug$8.lua_sethook      = lua_sethook$1;
	ldebug$8.lua_setlocal     = lua_setlocal$1;

	var ldump = {};

	const {
	    LUA_SIGNATURE: LUA_SIGNATURE$1,
	    LUA_VERSION_MAJOR: LUA_VERSION_MAJOR$1,
	    LUA_VERSION_MINOR: LUA_VERSION_MINOR$1,
	    constant_types: {
	        LUA_TBOOLEAN: LUA_TBOOLEAN$4,
	        LUA_TLNGSTR: LUA_TLNGSTR$1,
	        LUA_TNIL: LUA_TNIL$9,
	        LUA_TNUMFLT: LUA_TNUMFLT$1,
	        LUA_TNUMINT: LUA_TNUMINT$1,
	        LUA_TSHRSTR: LUA_TSHRSTR$1
	    },
	    luastring_of: luastring_of$1
	} = defs$2;

	const LUAC_DATA    = luastring_of$1(25, 147, 13, 10, 26, 10);
	const LUAC_INT     = 0x5678;
	const LUAC_NUM     = 370.5;
	const LUAC_VERSION = Number(LUA_VERSION_MAJOR$1) * 16 + Number(LUA_VERSION_MINOR$1);
	const LUAC_FORMAT  = 0;   /* this is the official format */

	class DumpState {
	    constructor() {
	        this.L = null;
	        this.write = null;
	        this.data = null;
	        this.strip = NaN;
	        this.status = NaN;
	    }
	}

	const DumpBlock = function(b, size, D) {
	    if (D.status === 0 && size > 0)
	        D.status = D.writer(D.L, b, size, D.data);
	};

	const DumpByte = function(y, D) {
	    DumpBlock(luastring_of$1(y), 1, D);
	};

	const DumpInt = function(x, D) {
	    let ab = new ArrayBuffer(4);
	    let dv = new DataView(ab);
	    dv.setInt32(0, x, true);
	    let t = new Uint8Array(ab);
	    DumpBlock(t, 4, D);
	};

	const DumpInteger = function(x, D) {
	    let ab = new ArrayBuffer(4);
	    let dv = new DataView(ab);
	    dv.setInt32(0, x, true);
	    let t = new Uint8Array(ab);
	    DumpBlock(t, 4, D);
	};

	const DumpNumber = function(x, D) {
	    let ab = new ArrayBuffer(8);
	    let dv = new DataView(ab);
	    dv.setFloat64(0, x, true);
	    let t = new Uint8Array(ab);
	    DumpBlock(t, 8, D);
	};

	const DumpString = function(s, D) {
	    if (s === null)
	        DumpByte(0, D);
	    else {
	        let size = s.tsslen() + 1;
	        let str = s.getstr();
	        if (size < 0xFF)
	            DumpByte(size, D);
	        else {
	            DumpByte(0xFF, D);
	            DumpInteger(size, D);
	        }
	        DumpBlock(str, size - 1, D);  /* no need to save '\0' */
	    }
	};

	const DumpCode = function(f, D) {
	    let s = f.code.map(e => e.code);
	    DumpInt(s.length, D);

	    for (let i = 0; i < s.length; i++)
	        DumpInt(s[i], D);
	};

	const DumpConstants = function(f, D) {
	    let n = f.k.length;
	    DumpInt(n, D);
	    for (let i = 0; i < n; i++) {
	        let o = f.k[i];
	        DumpByte(o.ttype(), D);
	        switch (o.ttype()) {
	            case LUA_TNIL$9:
	                break;
	            case LUA_TBOOLEAN$4:
	                DumpByte(o.value ? 1 : 0, D);
	                break;
	            case LUA_TNUMFLT$1:
	                DumpNumber(o.value, D);
	                break;
	            case LUA_TNUMINT$1:
	                DumpInteger(o.value, D);
	                break;
	            case LUA_TSHRSTR$1:
	            case LUA_TLNGSTR$1:
	                DumpString(o.tsvalue(), D);
	                break;
	        }
	    }
	};

	const DumpProtos = function(f, D) {
	    let n = f.p.length;
	    DumpInt(n, D);
	    for (let i = 0; i < n; i++)
	        DumpFunction(f.p[i], f.source, D);
	};

	const DumpUpvalues = function(f, D) {
	    let n = f.upvalues.length;
	    DumpInt(n, D);
	    for (let i = 0; i < n; i++) {
	        DumpByte(f.upvalues[i].instack ? 1 : 0, D);
	        DumpByte(f.upvalues[i].idx, D);
	    }
	};

	const DumpDebug = function(f, D) {
	    let n = D.strip ? 0 : f.lineinfo.length;
	    DumpInt(n, D);
	    for (let i = 0; i < n; i++)
	        DumpInt(f.lineinfo[i], D);
	    n = D.strip ? 0 : f.locvars.length;
	    DumpInt(n, D);
	    for (let i = 0; i < n; i++) {
	        DumpString(f.locvars[i].varname, D);
	        DumpInt(f.locvars[i].startpc, D);
	        DumpInt(f.locvars[i].endpc, D);
	    }
	    n = D.strip ? 0 : f.upvalues.length;
	    DumpInt(n, D);
	    for (let i = 0; i < n; i++)
	        DumpString(f.upvalues[i].name, D);
	};

	const DumpFunction = function(f, psource, D) {
	    if (D.strip || f.source === psource)
	        DumpString(null, D);  /* no debug info or same source as its parent */
	    else
	        DumpString(f.source, D);
	    DumpInt(f.linedefined, D);
	    DumpInt(f.lastlinedefined, D);
	    DumpByte(f.numparams, D);
	    DumpByte(f.is_vararg?1:0, D);
	    DumpByte(f.maxstacksize, D);
	    DumpCode(f, D);
	    DumpConstants(f, D);
	    DumpUpvalues(f, D);
	    DumpProtos(f, D);
	    DumpDebug(f, D);
	};

	const DumpHeader = function(D) {
	    DumpBlock(LUA_SIGNATURE$1, LUA_SIGNATURE$1.length, D);
	    DumpByte(LUAC_VERSION, D);
	    DumpByte(LUAC_FORMAT, D);
	    DumpBlock(LUAC_DATA, LUAC_DATA.length, D);
	    DumpByte(4, D); // intSize
	    DumpByte(4, D); // size_tSize
	    DumpByte(4, D); // instructionSize
	    DumpByte(4, D); // integerSize
	    DumpByte(8, D); // numberSize
	    DumpInteger(LUAC_INT, D);
	    DumpNumber(LUAC_NUM, D);
	};

	/*
	** dump Lua function as precompiled chunk
	*/
	const luaU_dump$1 = function(L, f, w, data, strip) {
	    let D = new DumpState();
	    D.L = L;
	    D.writer = w;
	    D.data = data;
	    D.strip = strip;
	    D.status = 0;
	    DumpHeader(D);
	    DumpByte(f.upvalues.length, D);
	    DumpFunction(f, null, D);
	    return D.status;
	};

	ldump.luaU_dump = luaU_dump$1;

	const {
	    LUA_MULTRET: LUA_MULTRET$3,
	    LUA_OPBNOT,
	    LUA_OPEQ: LUA_OPEQ$1,
	    LUA_OPLE,
	    LUA_OPLT: LUA_OPLT$2,
	    LUA_OPUNM,
	    LUA_REGISTRYINDEX: LUA_REGISTRYINDEX$5,
	    LUA_RIDX_GLOBALS,
	    LUA_VERSION_NUM: LUA_VERSION_NUM$1,
	    constant_types: {
	        LUA_NUMTAGS,
	        LUA_TBOOLEAN: LUA_TBOOLEAN$3,
	        LUA_TCCL,
	        LUA_TFUNCTION: LUA_TFUNCTION$6,
	        LUA_TLCF,
	        LUA_TLCL,
	        LUA_TLIGHTUSERDATA: LUA_TLIGHTUSERDATA$2,
	        LUA_TLNGSTR,
	        LUA_TNIL: LUA_TNIL$8,
	        LUA_TNONE: LUA_TNONE$3,
	        LUA_TNUMFLT,
	        LUA_TNUMINT,
	        LUA_TSHRSTR,
	        LUA_TTABLE: LUA_TTABLE$8,
	        LUA_TTHREAD: LUA_TTHREAD$1,
	        LUA_TUSERDATA: LUA_TUSERDATA$2
	    },
	    thread_status: { LUA_OK: LUA_OK$4 },
	    from_userstring: from_userstring$1,
	    to_luastring: to_luastring$d,
	} = defs$2;
	const { api_check } = llimits;
	const ldebug$1    = ldebug$8;
	const ldo$1       = ldo$a;
	const { luaU_dump } = ldump;
	const lfunc     = lfunc$6;
	const lobject   = lobject$c;
	const lstate$1    = lstate$8;
	const {
	    luaS_bless,
	    luaS_new,
	    luaS_newliteral
	} = lstring;
	const ltm       = ltm$6;
	const { LUAI_MAXSTACK } = luaconf$1;
	const lvm       = lvm$6;
	const ltable    = ltable$9;
	const { ZIO } = lzio;
	const TValue    = lobject.TValue;
	const CClosure  = lobject.CClosure;

	const api_incr_top = function(L) {
	    L.top++;
	    api_check(L, L.top <= L.ci.top, "stack overflow");
	};

	const api_checknelems = function(L, n) {
	    api_check(L, n < (L.top - L.ci.funcOff), "not enough elements in the stack");
	};

	const fengari_argcheck = function(c) {
	    if (!c) throw TypeError("invalid argument");
	};

	const fengari_argcheckinteger = function(n) {
	    fengari_argcheck(typeof n === "number" && (n|0) === n);
	};

	const isvalid = function(o) {
	    return o !== lobject.luaO_nilobject;
	};

	const lua_version$1 = function(L) {
	    if (L === null) return LUA_VERSION_NUM$1;
	    else return L.l_G.version;
	};

	const lua_atpanic$1 = function(L, panicf) {
	    let old = L.l_G.panic;
	    L.l_G.panic = panicf;
	    return old;
	};

	const lua_atnativeerror$1 = function(L, errorf) {
	    let old = L.l_G.atnativeerror;
	    L.l_G.atnativeerror = errorf;
	    return old;
	};

	// Return value for idx on stack
	const index2addr = function(L, idx) {
	    let ci = L.ci;
	    if (idx > 0) {
	        let o = ci.funcOff + idx;
	        api_check(L, idx <= ci.top - (ci.funcOff + 1), "unacceptable index");
	        if (o >= L.top) return lobject.luaO_nilobject;
	        else return L.stack[o];
	    } else if (idx > LUA_REGISTRYINDEX$5) {
	        api_check(L, idx !== 0 && -idx <= L.top, "invalid index");
	        return L.stack[L.top + idx];
	    } else if (idx === LUA_REGISTRYINDEX$5) {
	        return L.l_G.l_registry;
	    } else { /* upvalues */
	        idx = LUA_REGISTRYINDEX$5 - idx;
	        api_check(L, idx <= lfunc.MAXUPVAL + 1, "upvalue index too large");
	        if (ci.func.ttislcf()) /* light C function? */
	            return lobject.luaO_nilobject; /* it has no upvalues */
	        else {
	            return idx <= ci.func.value.nupvalues ? ci.func.value.upvalue[idx - 1] : lobject.luaO_nilobject;
	        }
	    }
	};

	// Like index2addr but returns the index on stack; doesn't allow pseudo indices
	const index2addr_ = function(L, idx) {
	    let ci = L.ci;
	    if (idx > 0) {
	        let o = ci.funcOff + idx;
	        api_check(L, idx <= ci.top - (ci.funcOff + 1), "unacceptable index");
	        if (o >= L.top) return null;
	        else return o;
	    } else if (idx > LUA_REGISTRYINDEX$5) {
	        api_check(L, idx !== 0 && -idx <= L.top, "invalid index");
	        return L.top + idx;
	    } else { /* registry or upvalue */
	        throw Error("attempt to use pseudo-index");
	    }
	};

	const lua_checkstack$4 = function(L, n) {
	    let res;
	    let ci = L.ci;
	    api_check(L, n >= 0, "negative 'n'");
	    if (L.stack_last - L.top > n) /* stack large enough? */
	        res = true;
	    else { /* no; need to grow stack */
	        let inuse = L.top + lstate$1.EXTRA_STACK;
	        if (inuse > LUAI_MAXSTACK - n)  /* can grow without overflow? */
	            res = false;  /* no */
	        else { /* try to grow stack */
	            ldo$1.luaD_growstack(L, n);
	            res = true;
	        }
	    }

	    if (res && ci.top < L.top + n)
	        ci.top = L.top + n;  /* adjust frame top */

	    return res;
	};

	const lua_xmove$2 = function(from, to, n) {
	    if (from === to) return;
	    api_checknelems(from, n);
	    api_check(from, from.l_G === to.l_G, "moving among independent states");
	    api_check(from, to.ci.top - to.top >= n, "stack overflow");
	    from.top -= n;
	    for (let i = 0; i < n; i++) {
	        to.stack[to.top] = new lobject.TValue();
	        lobject.setobj2s(to, to.top, from.stack[from.top + i]);
	        delete from.stack[from.top + i];
	        to.top++;
	    }
	};

	/*
	** basic stack manipulation
	*/

	/*
	** convert an acceptable stack index into an absolute index
	*/
	const lua_absindex$1 = function(L, idx) {
	    return (idx > 0 || idx <= LUA_REGISTRYINDEX$5)
	        ? idx
	        : (L.top - L.ci.funcOff) + idx;
	};

	const lua_gettop$9 = function(L) {
	    return L.top - (L.ci.funcOff + 1);
	};

	const lua_pushvalue$b = function(L, idx) {
	    lobject.pushobj2s(L, index2addr(L, idx));
	    api_check(L, L.top <= L.ci.top, "stack overflow");
	};

	const lua_settop$9 = function(L, idx) {
	    let func = L.ci.funcOff;
	    let newtop;
	    if (idx >= 0) {
	        api_check(L, idx <= L.stack_last - (func + 1), "new top too large");
	        newtop = func + 1 + idx;
	    } else {
	        api_check(L, -(idx + 1) <= L.top - (func + 1), "invalid new top");
	        newtop = L.top + idx + 1; /* 'subtract' index (index is negative) */
	    }
	    ldo$1.adjust_top(L, newtop);
	};

	const lua_pop$b = function(L, n) {
	    lua_settop$9(L, -n - 1);
	};

	const reverse = function(L, from, to) {
	    for (; from < to; from++, to--) {
	        let fromtv = L.stack[from];
	        let temp = new TValue(fromtv.type, fromtv.value);
	        lobject.setobjs2s(L, from, to);
	        lobject.setobj2s(L, to, temp);
	    }
	};

	/*
	** Let x = AB, where A is a prefix of length 'n'. Then,
	** rotate x n === BA. But BA === (A^r . B^r)^r.
	*/
	const lua_rotate$3 = function(L, idx, n) {
	    let t = L.top - 1;
	    let pIdx = index2addr_(L, idx);
	    let p = L.stack[pIdx];
	    api_check(L, isvalid(p) && idx > LUA_REGISTRYINDEX$5, "index not in the stack");
	    api_check(L, (n >= 0 ? n : -n) <= (t - pIdx + 1), "invalid 'n'");
	    let m = n >= 0 ? t - n : pIdx - n - 1;  /* end of prefix */
	    reverse(L, pIdx, m);
	    reverse(L, m + 1, L.top - 1);
	    reverse(L, pIdx, L.top - 1);
	};

	const lua_copy$1 = function(L, fromidx, toidx) {
	    let from = index2addr(L, fromidx);
	    index2addr(L, toidx).setfrom(from);
	};

	const lua_remove$4 = function(L, idx) {
	    lua_rotate$3(L, idx, -1);
	    lua_pop$b(L, 1);
	};

	const lua_insert$6 = function(L, idx) {
	    lua_rotate$3(L, idx, 1);
	};

	const lua_replace$1 = function(L, idx) {
	    lua_copy$1(L, -1, idx);
	    lua_pop$b(L, 1);
	};

	/*
	** push functions (JS -> stack)
	*/

	const lua_pushnil$b = function(L) {
	    L.stack[L.top] = new TValue(LUA_TNIL$8, null);
	    api_incr_top(L);
	};

	const lua_pushnumber$4 = function(L, n) {
	    fengari_argcheck(typeof n === "number");
	    L.stack[L.top] = new TValue(LUA_TNUMFLT, n);
	    api_incr_top(L);
	};

	const lua_pushinteger$a = function(L, n) {
	    fengari_argcheckinteger(n);
	    L.stack[L.top] = new TValue(LUA_TNUMINT, n);
	    api_incr_top(L);
	};

	const lua_pushlstring$3 = function(L, s, len) {
	    fengari_argcheckinteger(len);
	    let ts;
	    if (len === 0) {
	        s = to_luastring$d("", true);
	        ts = luaS_bless(L, s);
	    } else {
	        s = from_userstring$1(s);
	        api_check(L, s.length >= len, "invalid length to lua_pushlstring");
	        ts = luaS_new(L, s.subarray(0, len));
	    }
	    lobject.pushsvalue2s(L, ts);
	    api_check(L, L.top <= L.ci.top, "stack overflow");
	    return ts.value;
	};

	const lua_pushstring$a = function (L, s) {
	    if (s === undefined || s === null) {
	        L.stack[L.top] = new TValue(LUA_TNIL$8, null);
	        L.top++;
	    } else {
	        let ts = luaS_new(L, from_userstring$1(s));
	        lobject.pushsvalue2s(L, ts);
	        s = ts.getstr(); /* internal copy */
	    }
	    api_check(L, L.top <= L.ci.top, "stack overflow");
	    return s;
	};

	const lua_pushvfstring$1 = function (L, fmt, argp) {
	    fmt = from_userstring$1(fmt);
	    return lobject.luaO_pushvfstring(L, fmt, argp);
	};

	const lua_pushfstring$5 = function (L, fmt, ...argp) {
	    fmt = from_userstring$1(fmt);
	    return lobject.luaO_pushvfstring(L, fmt, argp);
	};

	/* Similar to lua_pushstring, but takes a JS string */
	const lua_pushliteral$b = function (L, s) {
	    if (s === undefined || s === null) {
	        L.stack[L.top] = new TValue(LUA_TNIL$8, null);
	        L.top++;
	    } else {
	        fengari_argcheck(typeof s === "string");
	        let ts = luaS_newliteral(L, s);
	        lobject.pushsvalue2s(L, ts);
	        s = ts.getstr(); /* internal copy */
	    }
	    api_check(L, L.top <= L.ci.top, "stack overflow");

	    return s;
	};

	const lua_pushcclosure$4 = function(L, fn, n) {
	    fengari_argcheck(typeof fn === "function");
	    fengari_argcheckinteger(n);
	    if (n === 0)
	        L.stack[L.top] = new TValue(LUA_TLCF, fn);
	    else {
	        api_checknelems(L, n);
	        api_check(L, n <= lfunc.MAXUPVAL, "upvalue index too large");
	        let cl = new CClosure(L, fn, n);
	        for (let i=0; i<n; i++)
	            cl.upvalue[i].setfrom(L.stack[L.top - n + i]);
	        for (let i=1; i<n; i++)
	            delete L.stack[--L.top];
	        if (n>0)
	            --L.top;
	        L.stack[L.top].setclCvalue(cl);
	    }
	    api_incr_top(L);
	};

	const lua_pushjsclosure = lua_pushcclosure$4;

	const lua_pushcfunction$5 = function(L, fn) {
	    lua_pushcclosure$4(L, fn, 0);
	};

	const lua_pushjsfunction = lua_pushcfunction$5;

	const lua_pushboolean$8 = function(L, b) {
	    L.stack[L.top] = new TValue(LUA_TBOOLEAN$3, !!b);
	    api_incr_top(L);
	};

	const lua_pushlightuserdata$4 = function(L, p) {
	    L.stack[L.top] = new TValue(LUA_TLIGHTUSERDATA$2, p);
	    api_incr_top(L);
	};

	const lua_pushthread$1 = function(L) {
	    L.stack[L.top] = new TValue(LUA_TTHREAD$1, L);
	    api_incr_top(L);
	    return L.l_G.mainthread === L;
	};

	const lua_pushglobaltable$2 = function(L) {
	    lua_rawgeti$3(L, LUA_REGISTRYINDEX$5, LUA_RIDX_GLOBALS);
	};

	/*
	** set functions (stack -> Lua)
	*/

	/*
	** t[k] = value at the top of the stack (where 'k' is a string)
	*/
	const auxsetstr = function(L, t, k) {
	    let str = luaS_new(L, from_userstring$1(k));
	    api_checknelems(L, 1);
	    lobject.pushsvalue2s(L, str); /* push 'str' (to make it a TValue) */
	    api_check(L, L.top <= L.ci.top, "stack overflow");
	    lvm.settable(L, t, L.stack[L.top - 1], L.stack[L.top - 2]);
	    /* pop value and key */
	    delete L.stack[--L.top];
	    delete L.stack[--L.top];
	};

	const lua_setglobal$1 = function(L, name) {
	    auxsetstr(L, ltable.luaH_getint(L.l_G.l_registry.value, LUA_RIDX_GLOBALS), name);
	};

	const lua_setmetatable$5 = function(L, objindex) {
	    api_checknelems(L, 1);
	    let mt;
	    let obj = index2addr(L, objindex);
	    if (L.stack[L.top - 1].ttisnil())
	        mt = null;
	    else {
	        api_check(L, L.stack[L.top - 1].ttistable(), "table expected");
	        mt = L.stack[L.top - 1].value;
	    }

	    switch (obj.ttnov()) {
	        case LUA_TUSERDATA$2:
	        case LUA_TTABLE$8: {
	            obj.value.metatable = mt;
	            break;
	        }
	        default: {
	            L.l_G.mt[obj.ttnov()] = mt;
	            break;
	        }
	    }

	    delete L.stack[--L.top];
	    return true;
	};

	const lua_settable$1 = function(L, idx) {
	    api_checknelems(L, 2);
	    let t = index2addr(L, idx);
	    lvm.settable(L, t, L.stack[L.top - 2], L.stack[L.top - 1]);
	    delete L.stack[--L.top];
	    delete L.stack[--L.top];
	};

	const lua_setfield$c = function(L, idx, k) {
	    auxsetstr(L, index2addr(L, idx), k);
	};

	const lua_seti$1 = function(L, idx, n) {
	    fengari_argcheckinteger(n);
	    api_checknelems(L, 1);
	    let t = index2addr(L, idx);
	    L.stack[L.top] = new TValue(LUA_TNUMINT, n);
	    api_incr_top(L);
	    lvm.settable(L, t, L.stack[L.top - 1], L.stack[L.top - 2]);
	    /* pop value and key */
	    delete L.stack[--L.top];
	    delete L.stack[--L.top];
	};

	const lua_rawset$1 = function(L, idx) {
	    api_checknelems(L, 2);
	    let o = index2addr(L, idx);
	    api_check(L, o.ttistable(), "table expected");
	    let k = L.stack[L.top - 2];
	    let v = L.stack[L.top - 1];
	    ltable.luaH_setfrom(L, o.value, k, v);
	    ltable.invalidateTMcache(o.value);
	    delete L.stack[--L.top];
	    delete L.stack[--L.top];
	};

	const lua_rawseti$2 = function(L, idx, n) {
	    fengari_argcheckinteger(n);
	    api_checknelems(L, 1);
	    let o = index2addr(L, idx);
	    api_check(L, o.ttistable(), "table expected");
	    ltable.luaH_setint(o.value, n, L.stack[L.top - 1]);
	    delete L.stack[--L.top];
	};

	const lua_rawsetp$3 = function(L, idx, p) {
	    api_checknelems(L, 1);
	    let o = index2addr(L, idx);
	    api_check(L, o.ttistable(), "table expected");
	    let k = new TValue(LUA_TLIGHTUSERDATA$2, p);
	    let v = L.stack[L.top - 1];
	    ltable.luaH_setfrom(L, o.value, k, v);
	    delete L.stack[--L.top];
	};

	/*
	** get functions (Lua -> stack)
	*/

	const auxgetstr = function(L, t, k) {
	    let str = luaS_new(L, from_userstring$1(k));
	    lobject.pushsvalue2s(L, str);
	    api_check(L, L.top <= L.ci.top, "stack overflow");
	    lvm.luaV_gettable(L, t, L.stack[L.top - 1], L.top - 1);
	    return L.stack[L.top - 1].ttnov();
	};

	const lua_rawgeti$3 = function(L, idx, n) {
	    let t = index2addr(L, idx);
	    fengari_argcheckinteger(n);
	    api_check(L, t.ttistable(), "table expected");
	    lobject.pushobj2s(L, ltable.luaH_getint(t.value, n));
	    api_check(L, L.top <= L.ci.top, "stack overflow");
	    return L.stack[L.top - 1].ttnov();
	};

	const lua_rawgetp$3 = function(L, idx, p) {
	    let t = index2addr(L, idx);
	    api_check(L, t.ttistable(), "table expected");
	    let k = new TValue(LUA_TLIGHTUSERDATA$2, p);
	    lobject.pushobj2s(L, ltable.luaH_get(L, t.value, k));
	    api_check(L, L.top <= L.ci.top, "stack overflow");
	    return L.stack[L.top - 1].ttnov();
	};

	const lua_rawget$3 = function(L, idx) {
	    let t = index2addr(L, idx);
	    api_check(L, t.ttistable(t), "table expected");
	    lobject.setobj2s(L, L.top - 1, ltable.luaH_get(L, t.value, L.stack[L.top - 1]));
	    return L.stack[L.top - 1].ttnov();
	};

	// narray and nrec are mostly useless for this implementation
	const lua_createtable$5 = function(L, narray, nrec) {
	    let t = new lobject.TValue(LUA_TTABLE$8, ltable.luaH_new(L));
	    L.stack[L.top] = t;
	    api_incr_top(L);
	};

	const luaS_newudata = function(L, size) {
	    return new lobject.Udata(L, size);
	};

	const lua_newuserdata$2 = function(L, size) {
	    let u = luaS_newudata(L, size);
	    L.stack[L.top] = new lobject.TValue(LUA_TUSERDATA$2, u);
	    api_incr_top(L);
	    return u.data;
	};

	const aux_upvalue = function(L, fi, n) {
	    fengari_argcheckinteger(n);
	    switch(fi.ttype()) {
	        case LUA_TCCL: {  /* C closure */
	            let f = fi.value;
	            if (!(1 <= n && n <= f.nupvalues)) return null;
	            return {
	                name: to_luastring$d("", true),
	                val: f.upvalue[n-1]
	            };
	        }
	        case LUA_TLCL: {  /* Lua closure */
	            let f = fi.value;
	            let p = f.p;
	            if (!(1 <= n && n <= p.upvalues.length)) return null;
	            let name = p.upvalues[n-1].name;
	            return {
	                name: name ? name.getstr() : to_luastring$d("(*no name)", true),
	                val: f.upvals[n-1]
	            };
	        }
	        default: return null;  /* not a closure */
	    }
	};

	const lua_getupvalue$1 = function(L, funcindex, n) {
	    let up = aux_upvalue(L, index2addr(L, funcindex), n);
	    if (up) {
	        let name = up.name;
	        let val = up.val;
	        lobject.pushobj2s(L, val);
	        api_check(L, L.top <= L.ci.top, "stack overflow");
	        return name;
	    }
	    return null;
	};

	const lua_setupvalue$2 = function(L, funcindex, n) {
	    let fi = index2addr(L, funcindex);
	    api_checknelems(L, 1);
	    let aux = aux_upvalue(L, fi, n);
	    if (aux) {
	        let name = aux.name;
	        let val = aux.val;
	        val.setfrom(L.stack[L.top-1]);
	        delete L.stack[--L.top];
	        return name;
	    }
	    return null;
	};

	const lua_newtable$3 = function(L) {
	    lua_createtable$5(L);
	};

	const lua_register = function(L, n, f) {
	    lua_pushcfunction$5(L, f);
	    lua_setglobal$1(L, n);
	};

	const lua_getmetatable$4 = function(L, objindex) {
	    let obj = index2addr(L, objindex);
	    let mt;
	    let res = false;
	    switch (obj.ttnov()) {
	        case LUA_TTABLE$8:
	        case LUA_TUSERDATA$2:
	            mt = obj.value.metatable;
	            break;
	        default:
	            mt = L.l_G.mt[obj.ttnov()];
	            break;
	    }

	    if (mt !== null && mt !== undefined) {
	        L.stack[L.top] = new TValue(LUA_TTABLE$8, mt);
	        api_incr_top(L);
	        res = true;
	    }

	    return res;
	};

	const lua_getuservalue$1 = function(L, idx) {
	    let o = index2addr(L, idx);
	    api_check(L, o.ttisfulluserdata(), "full userdata expected");
	    let uv = o.value.uservalue;
	    L.stack[L.top] = new TValue(uv.type, uv.value);
	    api_incr_top(L);
	    return L.stack[L.top - 1].ttnov();
	};

	const lua_gettable$2 = function(L, idx) {
	    let t = index2addr(L, idx);
	    lvm.luaV_gettable(L, t, L.stack[L.top - 1], L.top - 1);
	    return L.stack[L.top - 1].ttnov();
	};

	const lua_getfield$5 = function(L, idx, k) {
	    return auxgetstr(L, index2addr(L, idx), k);
	};

	const lua_geti$2 = function(L, idx, n) {
	    let t = index2addr(L, idx);
	    fengari_argcheckinteger(n);
	    L.stack[L.top] = new TValue(LUA_TNUMINT, n);
	    api_incr_top(L);
	    lvm.luaV_gettable(L, t, L.stack[L.top - 1], L.top - 1);
	    return L.stack[L.top - 1].ttnov();
	};

	const lua_getglobal$1 = function(L, name) {
	    return auxgetstr(L, ltable.luaH_getint(L.l_G.l_registry.value, LUA_RIDX_GLOBALS), name);
	};

	/*
	** access functions (stack -> JS)
	*/

	const lua_toboolean$7 = function(L, idx) {
	    let o = index2addr(L, idx);
	    return !o.l_isfalse();
	};

	const lua_tolstring$2 = function(L, idx) {
	    let o = index2addr(L, idx);

	    if (!o.ttisstring()) {
	        if (!lvm.cvt2str(o)) {  /* not convertible? */
	            return null;
	        }
	        lobject.luaO_tostring(L, o);
	    }
	    return o.svalue();
	};

	const lua_tostring$6 =  lua_tolstring$2;

	const lua_tojsstring$3 = function(L, idx) {
	    let o = index2addr(L, idx);

	    if (!o.ttisstring()) {
	        if (!lvm.cvt2str(o)) {  /* not convertible? */
	            return null;
	        }
	        lobject.luaO_tostring(L, o);
	    }
	    return o.jsstring();
	};

	const lua_todataview = function(L, idx) {
	    let u8 = lua_tolstring$2(L, idx);
	    return new DataView(u8.buffer, u8.byteOffset, u8.byteLength);
	};

	const lua_rawlen$2 = function(L, idx) {
	    let o = index2addr(L, idx);
	    switch (o.ttype()) {
	        case LUA_TSHRSTR:
	        case LUA_TLNGSTR:
	            return o.vslen();
	        case LUA_TUSERDATA$2:
	            return o.value.len;
	        case LUA_TTABLE$8:
	            return ltable.luaH_getn(o.value);
	        default:
	            return 0;
	    }
	};

	const lua_tocfunction = function(L, idx) {
	    let o = index2addr(L, idx);
	    if (o.ttislcf() || o.ttisCclosure()) return o.value;
	    else return null;  /* not a C function */
	};

	const lua_tointeger$4 = function(L, idx) {
	    let n = lua_tointegerx$3(L, idx);
	    return n === false ? 0 : n;
	};

	const lua_tointegerx$3 = function(L, idx) {
	    return lvm.tointeger(index2addr(L, idx));
	};

	const lua_tonumber$3 = function(L, idx) {
	    let n = lua_tonumberx$1(L, idx);
	    return n === false ? 0 : n;
	};

	const lua_tonumberx$1 = function(L, idx) {
	    return lvm.tonumber(index2addr(L, idx));
	};

	const lua_touserdata$6 = function(L, idx) {
	    let o = index2addr(L, idx);
	    switch (o.ttnov()) {
	        case LUA_TUSERDATA$2:
	            return o.value.data;
	        case LUA_TLIGHTUSERDATA$2:
	            return o.value;
	        default: return null;
	    }
	};

	const lua_tothread$3 = function(L, idx) {
	    let o = index2addr(L, idx);
	    return o.ttisthread() ? o.value : null;
	};

	const lua_topointer$1 = function(L, idx) {
	    let o = index2addr(L, idx);
	    switch (o.ttype()) {
	        case LUA_TTABLE$8:
	        case LUA_TLCL:
	        case LUA_TCCL:
	        case LUA_TLCF:
	        case LUA_TTHREAD$1:
	        case LUA_TUSERDATA$2: /* note: this differs in behaviour to reference lua implementation */
	        case LUA_TLIGHTUSERDATA$2:
	            return o.value;
	        default:
	            return null;
	    }
	};


	/* A proxy is a function that the same lua value to the given lua state. */

	/* Having a weakmap of created proxies was only way I could think of to provide an 'isproxy' function */
	const seen = new WeakMap();

	/* is the passed object a proxy? is it from the given state? (if passed) */
	const lua_isproxy$1 = function(p, L) {
	    let G = seen.get(p);
	    if (!G)
	        return false;
	    return (L === null) || (L.l_G === G);
	};

	/* Use 'create_proxy' helper function so that 'L' is not in scope */
	const create_proxy = function(G, type, value) {
	    let proxy = function(L) {
	        api_check(L, L instanceof lstate$1.lua_State && G === L.l_G, "must be from same global state");
	        L.stack[L.top] = new TValue(type, value);
	        api_incr_top(L);
	    };
	    seen.set(proxy, G);
	    return proxy;
	};

	const lua_toproxy$2 = function(L, idx) {
	    let tv = index2addr(L, idx);
	    /* pass broken down tv incase it is an upvalue index */
	    return create_proxy(L.l_G, tv.type, tv.value);
	};


	const lua_compare$2 = function(L, index1, index2, op) {
	    let o1 = index2addr(L, index1);
	    let o2 = index2addr(L, index2);

	    let i = 0;

	    if (isvalid(o1) && isvalid(o2)) {
	        switch (op) {
	            case LUA_OPEQ$1: i = lvm.luaV_equalobj(L, o1, o2); break;
	            case LUA_OPLT$2: i = lvm.luaV_lessthan(L, o1, o2); break;
	            case LUA_OPLE: i = lvm.luaV_lessequal(L, o1, o2); break;
	            default: api_check(L, false, "invalid option");
	        }
	    }

	    return i;
	};

	const lua_stringtonumber$1 = function(L, s) {
	    let tv = new TValue();
	    let sz = lobject.luaO_str2num(s, tv);
	    if (sz !== 0) {
	        L.stack[L.top] = tv;
	        api_incr_top(L);
	    }
	    return sz;
	};

	const f_call = function(L, ud) {
	    ldo$1.luaD_callnoyield(L, ud.funcOff, ud.nresults);
	};

	const lua_type$8 = function(L, idx) {
	    let o = index2addr(L, idx);
	    return isvalid(o) ?  o.ttnov() : LUA_TNONE$3;
	};

	const lua_typename$2 = function(L, t) {
	    api_check(L, LUA_TNONE$3 <= t && t < LUA_NUMTAGS, "invalid tag");
	    return ltm.ttypename(t);
	};

	const lua_iscfunction$1 = function(L, idx) {
	    let o = index2addr(L, idx);
	    return o.ttislcf(o) || o.ttisCclosure();
	};

	const lua_isnil$5 = function(L, n) {
	    return lua_type$8(L, n) === LUA_TNIL$8;
	};

	const lua_isboolean$1 = function(L, n) {
	    return lua_type$8(L, n) === LUA_TBOOLEAN$3;
	};

	const lua_isnone$2 = function(L, n) {
	    return lua_type$8(L, n) === LUA_TNONE$3;
	};

	const lua_isnoneornil$5 = function(L, n) {
	    return lua_type$8(L, n) <= 0;
	};

	const lua_istable$1 = function(L, idx) {
	    return index2addr(L, idx).ttistable();
	};

	const lua_isinteger$3 = function(L, idx) {
	    return index2addr(L, idx).ttisinteger();
	};

	const lua_isnumber$1 = function(L, idx) {
	    return lvm.tonumber(index2addr(L, idx)) !== false;
	};

	const lua_isstring$5 = function(L, idx) {
	    let o = index2addr(L, idx);
	    return o.ttisstring() || lvm.cvt2str(o);
	};

	const lua_isuserdata = function(L, idx) {
	    let o = index2addr(L, idx);
	    return o.ttisfulluserdata(o) || o.ttislightuserdata();
	};

	const lua_isthread$1 = function(L, idx) {
	    return lua_type$8(L, idx) === LUA_TTHREAD$1;
	};

	const lua_isfunction$2 = function(L, idx) {
	    return lua_type$8(L, idx) === LUA_TFUNCTION$6;
	};

	const lua_islightuserdata = function(L, idx) {
	    return lua_type$8(L, idx) === LUA_TLIGHTUSERDATA$2;
	};

	const lua_rawequal$2 = function(L, index1, index2) {
	    let o1 = index2addr(L, index1);
	    let o2 = index2addr(L, index2);
	    return isvalid(o1) && isvalid(o2) ? lvm.luaV_equalobj(null, o1, o2) : 0;
	};

	const lua_arith = function(L, op) {
	    if (op !== LUA_OPUNM && op !== LUA_OPBNOT)
	        api_checknelems(L, 2);  /* all other operations expect two operands */
	    else {  /* for unary operations, add fake 2nd operand */
	        api_checknelems(L, 1);
	        lobject.pushobj2s(L, L.stack[L.top-1]);
	        api_check(L, L.top <= L.ci.top, "stack overflow");
	    }
	    /* first operand at top - 2, second at top - 1; result go to top - 2 */
	    lobject.luaO_arith(L, op, L.stack[L.top - 2], L.stack[L.top - 1], L.stack[L.top - 2]);
	    delete L.stack[--L.top];  /* remove second operand */
	};

	/*
	** 'load' and 'call' functions (run Lua code)
	*/

	const default_chunkname = to_luastring$d("?");
	const lua_load$2 = function(L, reader, data, chunkname, mode) {
	    if (!chunkname) chunkname = default_chunkname;
	    else chunkname = from_userstring$1(chunkname);
	    if (mode !== null) mode = from_userstring$1(mode);
	    let z = new ZIO(L, reader, data);
	    let status = ldo$1.luaD_protectedparser(L, z, chunkname, mode);
	    if (status === LUA_OK$4) {  /* no errors? */
	        let f = L.stack[L.top - 1].value; /* get newly created function */
	        if (f.nupvalues >= 1) {  /* does it have an upvalue? */
	            /* get global table from registry */
	            let gt = ltable.luaH_getint(L.l_G.l_registry.value, LUA_RIDX_GLOBALS);
	            /* set global table as 1st upvalue of 'f' (may be LUA_ENV) */
	            f.upvals[0].setfrom(gt);
	        }
	    }
	    return status;
	};

	const lua_dump$1 = function(L, writer, data, strip) {
	    api_checknelems(L, 1);
	    let o = L.stack[L.top -1];
	    if (o.ttisLclosure())
	        return luaU_dump(L, o.value.p, writer, data, strip);
	    return 1;
	};

	const lua_status$1 = function(L) {
	    return L.status;
	};

	const lua_setuservalue$1 = function(L, idx) {
	    api_checknelems(L, 1);
	    let o = index2addr(L, idx);
	    api_check(L, o.ttisfulluserdata(), "full userdata expected");
	    o.value.uservalue.setfrom(L.stack[L.top - 1]);
	    delete L.stack[--L.top];
	};

	const checkresults = function(L,na,nr) {
	    api_check(L, nr === LUA_MULTRET$3 || (L.ci.top - L.top >= (nr) - (na)),
	        "results from function overflow current stack size");
	};

	const lua_callk$2 = function(L, nargs, nresults, ctx, k) {
	    api_check(L, k === null || !(L.ci.callstatus & lstate$1.CIST_LUA), "cannot use continuations inside hooks");
	    api_checknelems(L, nargs + 1);
	    api_check(L, L.status === LUA_OK$4, "cannot do calls on non-normal thread");
	    checkresults(L, nargs, nresults);
	    let func = L.top - (nargs + 1);
	    if (k !== null && L.nny === 0) { /* need to prepare continuation? */
	        L.ci.c_k = k;
	        L.ci.c_ctx = ctx;
	        ldo$1.luaD_call(L, func, nresults);
	    } else { /* no continuation or no yieldable */
	        ldo$1.luaD_callnoyield(L, func, nresults);
	    }

	    if (nresults === LUA_MULTRET$3 && L.ci.top < L.top)
	        L.ci.top = L.top;
	};

	const lua_call$6 = function(L, n, r) {
	    lua_callk$2(L, n, r, 0, null);
	};

	const lua_pcallk$1 = function(L, nargs, nresults, errfunc, ctx, k) {
	    api_check(L, k === null || !(L.ci.callstatus & lstate$1.CIST_LUA), "cannot use continuations inside hooks");
	    api_checknelems(L, nargs + 1);
	    api_check(L, L.status === LUA_OK$4, "cannot do calls on non-normal thread");
	    checkresults(L, nargs, nresults);
	    let status;
	    let func;
	    if (errfunc === 0)
	        func = 0;
	    else {
	        func = index2addr_(L, errfunc);
	    }
	    let funcOff = L.top - (nargs + 1); /* function to be called */
	    if (k === null || L.nny > 0) { /* no continuation or no yieldable? */
	        let c = {
	            funcOff: funcOff,
	            nresults: nresults /* do a 'conventional' protected call */
	        };
	        status = ldo$1.luaD_pcall(L, f_call, c, funcOff, func);
	    } else { /* prepare continuation (call is already protected by 'resume') */
	        let ci = L.ci;
	        ci.c_k = k;  /* prepare continuation (call is already protected by 'resume') */
	        ci.c_ctx = ctx;  /* prepare continuation (call is already protected by 'resume') */
	        /* save information for error recovery */
	        ci.extra = funcOff;
	        ci.c_old_errfunc = L.errfunc;
	        L.errfunc = func;
	        ci.callstatus &= ~lstate$1.CIST_OAH | L.allowhook;
	        ci.callstatus |= lstate$1.CIST_YPCALL;  /* function can do error recovery */
	        ldo$1.luaD_call(L, funcOff, nresults);  /* do the call */
	        ci.callstatus &= ~lstate$1.CIST_YPCALL;
	        L.errfunc = ci.c_old_errfunc;
	        status = LUA_OK$4;
	    }

	    if (nresults === LUA_MULTRET$3 && L.ci.top < L.top)
	        L.ci.top = L.top;

	    return status;
	};

	const lua_pcall$3 = function(L, n, r, f) {
	    return lua_pcallk$1(L, n, r, f, 0, null);
	};

	/*
	** miscellaneous functions
	*/

	const lua_error$3 = function(L) {
	    api_checknelems(L, 1);
	    ldebug$1.luaG_errormsg(L);
	};

	const lua_next$2 = function(L, idx) {
	    let t = index2addr(L, idx);
	    api_check(L, t.ttistable(), "table expected");
	    L.stack[L.top] = new TValue();
	    let more = ltable.luaH_next(L, t.value, L.top - 1);
	    if (more) {
	        api_incr_top(L);
	        return 1;
	    } else {
	        delete L.stack[L.top];
	        delete L.stack[--L.top];
	        return 0;
	    }
	};

	const lua_concat$3 = function(L, n) {
	    api_checknelems(L, n);
	    if (n >= 2)
	        lvm.luaV_concat(L, n);
	    else if (n === 0) {
	        lobject.pushsvalue2s(L, luaS_bless(L, to_luastring$d("", true)));
	        api_check(L, L.top <= L.ci.top, "stack overflow");
	    }
	};

	const lua_len$1 = function(L, idx) {
	    let t = index2addr(L, idx);
	    let tv = new TValue();
	    lvm.luaV_objlen(L, tv, t);
	    L.stack[L.top] = tv;
	    api_incr_top(L);
	};

	const getupvalref = function(L, fidx, n) {
	    let fi = index2addr(L, fidx);
	    api_check(L, fi.ttisLclosure(), "Lua function expected");
	    let f = fi.value;
	    fengari_argcheckinteger(n);
	    api_check(L, 1 <= n && n <= f.p.upvalues.length, "invalid upvalue index");
	    return {
	        f: f,
	        i: n - 1
	    };
	};

	const lua_upvalueid$1 = function(L, fidx, n) {
	    let fi = index2addr(L, fidx);
	    switch (fi.ttype()) {
	        case LUA_TLCL: {  /* lua closure */
	            let ref = getupvalref(L, fidx, n);
	            return ref.f.upvals[ref.i];
	        }
	        case LUA_TCCL: {  /* C closure */
	            let f = fi.value;
	            api_check(L, (n|0) === n && n > 0 && n <= f.nupvalues, "invalid upvalue index");
	            return f.upvalue[n - 1];
	        }
	        default: {
	            api_check(L, false, "closure expected");
	            return null;
	        }
	    }
	};

	const lua_upvaluejoin$1 = function(L, fidx1, n1, fidx2, n2) {
	    let ref1 = getupvalref(L, fidx1, n1);
	    let ref2 = getupvalref(L, fidx2, n2);
	    let up2 = ref2.f.upvals[ref2.i];
	    ref1.f.upvals[ref1.i] = up2;
	};

	// This functions are only there for compatibility purposes
	const lua_gc = function () {};

	const lua_getallocf = function () {
	    console.warn("lua_getallocf is not available");
	    return 0;
	};

	const lua_setallocf = function () {
	    console.warn("lua_setallocf is not available");
	    return 0;
	};

	const lua_getextraspace = function () {
	    console.warn("lua_getextraspace is not available");
	    return 0;
	};

	lapi$4.api_incr_top          = api_incr_top;
	lapi$4.api_checknelems       = api_checknelems;
	lapi$4.lua_absindex          = lua_absindex$1;
	lapi$4.lua_arith             = lua_arith;
	lapi$4.lua_atpanic           = lua_atpanic$1;
	lapi$4.lua_atnativeerror     = lua_atnativeerror$1;
	lapi$4.lua_call              = lua_call$6;
	lapi$4.lua_callk             = lua_callk$2;
	lapi$4.lua_checkstack        = lua_checkstack$4;
	lapi$4.lua_compare           = lua_compare$2;
	lapi$4.lua_concat            = lua_concat$3;
	lapi$4.lua_copy              = lua_copy$1;
	lapi$4.lua_createtable       = lua_createtable$5;
	lapi$4.lua_dump              = lua_dump$1;
	lapi$4.lua_error             = lua_error$3;
	lapi$4.lua_gc                = lua_gc;
	lapi$4.lua_getallocf         = lua_getallocf;
	lapi$4.lua_getextraspace     = lua_getextraspace;
	lapi$4.lua_getfield          = lua_getfield$5;
	lapi$4.lua_getglobal         = lua_getglobal$1;
	lapi$4.lua_geti              = lua_geti$2;
	lapi$4.lua_getmetatable      = lua_getmetatable$4;
	lapi$4.lua_gettable          = lua_gettable$2;
	lapi$4.lua_gettop            = lua_gettop$9;
	lapi$4.lua_getupvalue        = lua_getupvalue$1;
	lapi$4.lua_getuservalue      = lua_getuservalue$1;
	lapi$4.lua_insert            = lua_insert$6;
	lapi$4.lua_isboolean         = lua_isboolean$1;
	lapi$4.lua_iscfunction       = lua_iscfunction$1;
	lapi$4.lua_isfunction        = lua_isfunction$2;
	lapi$4.lua_isinteger         = lua_isinteger$3;
	lapi$4.lua_islightuserdata   = lua_islightuserdata;
	lapi$4.lua_isnil             = lua_isnil$5;
	lapi$4.lua_isnone            = lua_isnone$2;
	lapi$4.lua_isnoneornil       = lua_isnoneornil$5;
	lapi$4.lua_isnumber          = lua_isnumber$1;
	lapi$4.lua_isproxy           = lua_isproxy$1;
	lapi$4.lua_isstring          = lua_isstring$5;
	lapi$4.lua_istable           = lua_istable$1;
	lapi$4.lua_isthread          = lua_isthread$1;
	lapi$4.lua_isuserdata        = lua_isuserdata;
	lapi$4.lua_len               = lua_len$1;
	lapi$4.lua_load              = lua_load$2;
	lapi$4.lua_newtable          = lua_newtable$3;
	lapi$4.lua_newuserdata       = lua_newuserdata$2;
	lapi$4.lua_next              = lua_next$2;
	lapi$4.lua_pcall             = lua_pcall$3;
	lapi$4.lua_pcallk            = lua_pcallk$1;
	lapi$4.lua_pop               = lua_pop$b;
	lapi$4.lua_pushboolean       = lua_pushboolean$8;
	lapi$4.lua_pushcclosure      = lua_pushcclosure$4;
	lapi$4.lua_pushcfunction     = lua_pushcfunction$5;
	lapi$4.lua_pushfstring       = lua_pushfstring$5;
	lapi$4.lua_pushglobaltable   = lua_pushglobaltable$2;
	lapi$4.lua_pushinteger       = lua_pushinteger$a;
	lapi$4.lua_pushjsclosure     = lua_pushjsclosure;
	lapi$4.lua_pushjsfunction    = lua_pushjsfunction;
	lapi$4.lua_pushlightuserdata = lua_pushlightuserdata$4;
	lapi$4.lua_pushliteral       = lua_pushliteral$b;
	lapi$4.lua_pushlstring       = lua_pushlstring$3;
	lapi$4.lua_pushnil           = lua_pushnil$b;
	lapi$4.lua_pushnumber        = lua_pushnumber$4;
	lapi$4.lua_pushstring        = lua_pushstring$a;
	lapi$4.lua_pushthread        = lua_pushthread$1;
	lapi$4.lua_pushvalue         = lua_pushvalue$b;
	lapi$4.lua_pushvfstring      = lua_pushvfstring$1;
	lapi$4.lua_rawequal          = lua_rawequal$2;
	lapi$4.lua_rawget            = lua_rawget$3;
	lapi$4.lua_rawgeti           = lua_rawgeti$3;
	lapi$4.lua_rawgetp           = lua_rawgetp$3;
	lapi$4.lua_rawlen            = lua_rawlen$2;
	lapi$4.lua_rawset            = lua_rawset$1;
	lapi$4.lua_rawseti           = lua_rawseti$2;
	lapi$4.lua_rawsetp           = lua_rawsetp$3;
	lapi$4.lua_register          = lua_register;
	lapi$4.lua_remove            = lua_remove$4;
	lapi$4.lua_replace           = lua_replace$1;
	lapi$4.lua_rotate            = lua_rotate$3;
	lapi$4.lua_setallocf         = lua_setallocf;
	lapi$4.lua_setfield          = lua_setfield$c;
	lapi$4.lua_setglobal         = lua_setglobal$1;
	lapi$4.lua_seti              = lua_seti$1;
	lapi$4.lua_setmetatable      = lua_setmetatable$5;
	lapi$4.lua_settable          = lua_settable$1;
	lapi$4.lua_settop            = lua_settop$9;
	lapi$4.lua_setupvalue        = lua_setupvalue$2;
	lapi$4.lua_setuservalue      = lua_setuservalue$1;
	lapi$4.lua_status            = lua_status$1;
	lapi$4.lua_stringtonumber    = lua_stringtonumber$1;
	lapi$4.lua_toboolean         = lua_toboolean$7;
	lapi$4.lua_tocfunction       = lua_tocfunction;
	lapi$4.lua_todataview        = lua_todataview;
	lapi$4.lua_tointeger         = lua_tointeger$4;
	lapi$4.lua_tointegerx        = lua_tointegerx$3;
	lapi$4.lua_tojsstring        = lua_tojsstring$3;
	lapi$4.lua_tolstring         = lua_tolstring$2;
	lapi$4.lua_tonumber          = lua_tonumber$3;
	lapi$4.lua_tonumberx         = lua_tonumberx$1;
	lapi$4.lua_topointer         = lua_topointer$1;
	lapi$4.lua_toproxy           = lua_toproxy$2;
	lapi$4.lua_tostring          = lua_tostring$6;
	lapi$4.lua_tothread          = lua_tothread$3;
	lapi$4.lua_touserdata        = lua_touserdata$6;
	lapi$4.lua_type              = lua_type$8;
	lapi$4.lua_typename          = lua_typename$2;
	lapi$4.lua_upvalueid         = lua_upvalueid$1;
	lapi$4.lua_upvaluejoin       = lua_upvaluejoin$1;
	lapi$4.lua_version           = lua_version$1;
	lapi$4.lua_xmove             = lua_xmove$2;

	const defs   = defs$2;
	const lapi   = lapi$4;
	const ldebug = ldebug$8;
	const ldo    = ldo$a;
	const lstate = lstate$8;

	lua$2.LUA_AUTHORS             = defs.LUA_AUTHORS;
	lua$2.LUA_COPYRIGHT           = defs.LUA_COPYRIGHT;
	lua$2.LUA_ERRERR              = defs.thread_status.LUA_ERRERR;
	lua$2.LUA_ERRGCMM             = defs.thread_status.LUA_ERRGCMM;
	lua$2.LUA_ERRMEM              = defs.thread_status.LUA_ERRMEM;
	lua$2.LUA_ERRRUN              = defs.thread_status.LUA_ERRRUN;
	lua$2.LUA_ERRSYNTAX           = defs.thread_status.LUA_ERRSYNTAX;
	lua$2.LUA_HOOKCALL            = defs.LUA_HOOKCALL;
	lua$2.LUA_HOOKCOUNT           = defs.LUA_HOOKCOUNT;
	lua$2.LUA_HOOKLINE            = defs.LUA_HOOKLINE;
	lua$2.LUA_HOOKRET             = defs.LUA_HOOKRET;
	lua$2.LUA_HOOKTAILCALL        = defs.LUA_HOOKTAILCALL;
	lua$2.LUA_MASKCALL            = defs.LUA_MASKCALL;
	lua$2.LUA_MASKCOUNT           = defs.LUA_MASKCOUNT;
	lua$2.LUA_MASKLINE            = defs.LUA_MASKLINE;
	lua$2.LUA_MASKRET             = defs.LUA_MASKRET;
	lua$2.LUA_MINSTACK            = defs.LUA_MINSTACK;
	lua$2.LUA_MULTRET             = defs.LUA_MULTRET;
	lua$2.LUA_NUMTAGS             = defs.constant_types.LUA_NUMTAGS;
	lua$2.LUA_OK                  = defs.thread_status.LUA_OK;
	lua$2.LUA_OPADD               = defs.LUA_OPADD;
	lua$2.LUA_OPBAND              = defs.LUA_OPBAND;
	lua$2.LUA_OPBNOT              = defs.LUA_OPBNOT;
	lua$2.LUA_OPBOR               = defs.LUA_OPBOR;
	lua$2.LUA_OPBXOR              = defs.LUA_OPBXOR;
	lua$2.LUA_OPDIV               = defs.LUA_OPDIV;
	lua$2.LUA_OPEQ                = defs.LUA_OPEQ;
	lua$2.LUA_OPIDIV              = defs.LUA_OPIDIV;
	lua$2.LUA_OPLE                = defs.LUA_OPLE;
	lua$2.LUA_OPLT                = defs.LUA_OPLT;
	lua$2.LUA_OPMOD               = defs.LUA_OPMOD;
	lua$2.LUA_OPMUL               = defs.LUA_OPMUL;
	lua$2.LUA_OPPOW               = defs.LUA_OPPOW;
	lua$2.LUA_OPSHL               = defs.LUA_OPSHL;
	lua$2.LUA_OPSHR               = defs.LUA_OPSHR;
	lua$2.LUA_OPSUB               = defs.LUA_OPSUB;
	lua$2.LUA_OPUNM               = defs.LUA_OPUNM;
	lua$2.LUA_REGISTRYINDEX       = defs.LUA_REGISTRYINDEX;
	lua$2.LUA_RELEASE             = defs.LUA_RELEASE;
	lua$2.LUA_RIDX_GLOBALS        = defs.LUA_RIDX_GLOBALS;
	lua$2.LUA_RIDX_LAST           = defs.LUA_RIDX_LAST;
	lua$2.LUA_RIDX_MAINTHREAD     = defs.LUA_RIDX_MAINTHREAD;
	lua$2.LUA_SIGNATURE           = defs.LUA_SIGNATURE;
	lua$2.LUA_TNONE               = defs.constant_types.LUA_TNONE;
	lua$2.LUA_TNIL                = defs.constant_types.LUA_TNIL;
	lua$2.LUA_TBOOLEAN            = defs.constant_types.LUA_TBOOLEAN;
	lua$2.LUA_TLIGHTUSERDATA      = defs.constant_types.LUA_TLIGHTUSERDATA;
	lua$2.LUA_TNUMBER             = defs.constant_types.LUA_TNUMBER;
	lua$2.LUA_TSTRING             = defs.constant_types.LUA_TSTRING;
	lua$2.LUA_TTABLE              = defs.constant_types.LUA_TTABLE;
	lua$2.LUA_TFUNCTION           = defs.constant_types.LUA_TFUNCTION;
	lua$2.LUA_TUSERDATA           = defs.constant_types.LUA_TUSERDATA;
	lua$2.LUA_TTHREAD             = defs.constant_types.LUA_TTHREAD;
	lua$2.LUA_VERSION             = defs.LUA_VERSION;
	lua$2.LUA_VERSION_MAJOR       = defs.LUA_VERSION_MAJOR;
	lua$2.LUA_VERSION_MINOR       = defs.LUA_VERSION_MINOR;
	lua$2.LUA_VERSION_NUM         = defs.LUA_VERSION_NUM;
	lua$2.LUA_VERSION_RELEASE     = defs.LUA_VERSION_RELEASE;
	lua$2.LUA_YIELD               = defs.thread_status.LUA_YIELD;
	lua$2.lua_Debug               = defs.lua_Debug;
	lua$2.lua_upvalueindex        = defs.lua_upvalueindex;
	lua$2.lua_absindex            = lapi.lua_absindex;
	lua$2.lua_arith               = lapi.lua_arith;
	lua$2.lua_atpanic             = lapi.lua_atpanic;
	lua$2.lua_atnativeerror       = lapi.lua_atnativeerror;
	lua$2.lua_call                = lapi.lua_call;
	lua$2.lua_callk               = lapi.lua_callk;
	lua$2.lua_checkstack          = lapi.lua_checkstack;
	lua$2.lua_close               = lstate.lua_close;
	lua$2.lua_compare             = lapi.lua_compare;
	lua$2.lua_concat              = lapi.lua_concat;
	lua$2.lua_copy                = lapi.lua_copy;
	lua$2.lua_createtable         = lapi.lua_createtable;
	lua$2.lua_dump                = lapi.lua_dump;
	lua$2.lua_error               = lapi.lua_error;
	lua$2.lua_gc                  = lapi.lua_gc;
	lua$2.lua_getallocf           = lapi.lua_getallocf;
	lua$2.lua_getextraspace       = lapi.lua_getextraspace;
	lua$2.lua_getfield            = lapi.lua_getfield;
	lua$2.lua_getglobal           = lapi.lua_getglobal;
	lua$2.lua_gethook             = ldebug.lua_gethook;
	lua$2.lua_gethookcount        = ldebug.lua_gethookcount;
	lua$2.lua_gethookmask         = ldebug.lua_gethookmask;
	lua$2.lua_geti                = lapi.lua_geti;
	lua$2.lua_getinfo             = ldebug.lua_getinfo;
	lua$2.lua_getlocal            = ldebug.lua_getlocal;
	lua$2.lua_getmetatable        = lapi.lua_getmetatable;
	lua$2.lua_getstack            = ldebug.lua_getstack;
	lua$2.lua_gettable            = lapi.lua_gettable;
	lua$2.lua_gettop              = lapi.lua_gettop;
	lua$2.lua_getupvalue          = lapi.lua_getupvalue;
	lua$2.lua_getuservalue        = lapi.lua_getuservalue;
	lua$2.lua_insert              = lapi.lua_insert;
	lua$2.lua_isboolean           = lapi.lua_isboolean;
	lua$2.lua_iscfunction         = lapi.lua_iscfunction;
	lua$2.lua_isfunction          = lapi.lua_isfunction;
	lua$2.lua_isinteger           = lapi.lua_isinteger;
	lua$2.lua_islightuserdata     = lapi.lua_islightuserdata;
	lua$2.lua_isnil               = lapi.lua_isnil;
	lua$2.lua_isnone              = lapi.lua_isnone;
	lua$2.lua_isnoneornil         = lapi.lua_isnoneornil;
	lua$2.lua_isnumber            = lapi.lua_isnumber;
	lua$2.lua_isproxy             = lapi.lua_isproxy;
	lua$2.lua_isstring            = lapi.lua_isstring;
	lua$2.lua_istable             = lapi.lua_istable;
	lua$2.lua_isthread            = lapi.lua_isthread;
	lua$2.lua_isuserdata          = lapi.lua_isuserdata;
	lua$2.lua_isyieldable         = ldo.lua_isyieldable;
	lua$2.lua_len                 = lapi.lua_len;
	lua$2.lua_load                = lapi.lua_load;
	lua$2.lua_newstate            = lstate.lua_newstate;
	lua$2.lua_newtable            = lapi.lua_newtable;
	lua$2.lua_newthread           = lstate.lua_newthread;
	lua$2.lua_newuserdata         = lapi.lua_newuserdata;
	lua$2.lua_next                = lapi.lua_next;
	lua$2.lua_pcall               = lapi.lua_pcall;
	lua$2.lua_pcallk              = lapi.lua_pcallk;
	lua$2.lua_pop                 = lapi.lua_pop;
	lua$2.lua_pushboolean         = lapi.lua_pushboolean;
	lua$2.lua_pushcclosure        = lapi.lua_pushcclosure;
	lua$2.lua_pushcfunction       = lapi.lua_pushcfunction;
	lua$2.lua_pushfstring         = lapi.lua_pushfstring;
	lua$2.lua_pushglobaltable     = lapi.lua_pushglobaltable;
	lua$2.lua_pushinteger         = lapi.lua_pushinteger;
	lua$2.lua_pushjsclosure       = lapi.lua_pushjsclosure;
	lua$2.lua_pushjsfunction      = lapi.lua_pushjsfunction;
	lua$2.lua_pushlightuserdata   = lapi.lua_pushlightuserdata;
	lua$2.lua_pushliteral         = lapi.lua_pushliteral;
	lua$2.lua_pushlstring         = lapi.lua_pushlstring;
	lua$2.lua_pushnil             = lapi.lua_pushnil;
	lua$2.lua_pushnumber          = lapi.lua_pushnumber;
	lua$2.lua_pushstring          = lapi.lua_pushstring;
	lua$2.lua_pushthread          = lapi.lua_pushthread;
	lua$2.lua_pushvalue           = lapi.lua_pushvalue;
	lua$2.lua_pushvfstring        = lapi.lua_pushvfstring;
	lua$2.lua_rawequal            = lapi.lua_rawequal;
	lua$2.lua_rawget              = lapi.lua_rawget;
	lua$2.lua_rawgeti             = lapi.lua_rawgeti;
	lua$2.lua_rawgetp             = lapi.lua_rawgetp;
	lua$2.lua_rawlen              = lapi.lua_rawlen;
	lua$2.lua_rawset              = lapi.lua_rawset;
	lua$2.lua_rawseti             = lapi.lua_rawseti;
	lua$2.lua_rawsetp             = lapi.lua_rawsetp;
	lua$2.lua_register            = lapi.lua_register;
	lua$2.lua_remove              = lapi.lua_remove;
	lua$2.lua_replace             = lapi.lua_replace;
	lua$2.lua_resume              = ldo.lua_resume;
	lua$2.lua_rotate              = lapi.lua_rotate;
	lua$2.lua_setallof            = ldo.lua_setallof;
	lua$2.lua_setfield            = lapi.lua_setfield;
	lua$2.lua_setglobal           = lapi.lua_setglobal;
	lua$2.lua_sethook             = ldebug.lua_sethook;
	lua$2.lua_seti                = lapi.lua_seti;
	lua$2.lua_setlocal            = ldebug.lua_setlocal;
	lua$2.lua_setmetatable        = lapi.lua_setmetatable;
	lua$2.lua_settable            = lapi.lua_settable;
	lua$2.lua_settop              = lapi.lua_settop;
	lua$2.lua_setupvalue          = lapi.lua_setupvalue;
	lua$2.lua_setuservalue        = lapi.lua_setuservalue;
	lua$2.lua_status              = lapi.lua_status;
	lua$2.lua_stringtonumber      = lapi.lua_stringtonumber;
	lua$2.lua_toboolean           = lapi.lua_toboolean;
	lua$2.lua_todataview          = lapi.lua_todataview;
	lua$2.lua_tointeger           = lapi.lua_tointeger;
	lua$2.lua_tointegerx          = lapi.lua_tointegerx;
	lua$2.lua_tojsstring          = lapi.lua_tojsstring;
	lua$2.lua_tolstring           = lapi.lua_tolstring;
	lua$2.lua_tonumber            = lapi.lua_tonumber;
	lua$2.lua_tonumberx           = lapi.lua_tonumberx;
	lua$2.lua_topointer           = lapi.lua_topointer;
	lua$2.lua_toproxy             = lapi.lua_toproxy;
	lua$2.lua_tostring            = lapi.lua_tostring;
	lua$2.lua_tothread            = lapi.lua_tothread;
	lua$2.lua_touserdata          = lapi.lua_touserdata;
	lua$2.lua_type                = lapi.lua_type;
	lua$2.lua_typename            = lapi.lua_typename;
	lua$2.lua_upvalueid           = lapi.lua_upvalueid;
	lua$2.lua_upvaluejoin         = lapi.lua_upvaluejoin;
	lua$2.lua_version             = lapi.lua_version;
	lua$2.lua_xmove               = lapi.lua_xmove;
	lua$2.lua_yield               = ldo.lua_yield;
	lua$2.lua_yieldk              = ldo.lua_yieldk;
	lua$2.lua_tocfunction         = lapi.lua_tocfunction;

	var lauxlib$2 = {};

	const {
	    LUAL_BUFFERSIZE
	} = luaconf$1;
	const {
	    LUA_ERRERR,
	    LUA_MULTRET: LUA_MULTRET$2,
	    LUA_REGISTRYINDEX: LUA_REGISTRYINDEX$4,
	    LUA_SIGNATURE,
	    LUA_TBOOLEAN: LUA_TBOOLEAN$2,
	    LUA_TLIGHTUSERDATA: LUA_TLIGHTUSERDATA$1,
	    LUA_TNIL: LUA_TNIL$7,
	    LUA_TNONE: LUA_TNONE$2,
	    LUA_TNUMBER: LUA_TNUMBER$4,
	    LUA_TSTRING: LUA_TSTRING$4,
	    LUA_TTABLE: LUA_TTABLE$7,
	    LUA_VERSION_NUM,
	    lua_Debug: lua_Debug$2,
	    lua_absindex,
	    lua_atpanic,
	    lua_call: lua_call$5,
	    lua_checkstack: lua_checkstack$3,
	    lua_concat: lua_concat$2,
	    lua_copy,
	    lua_createtable: lua_createtable$4,
	    lua_error: lua_error$2,
	    lua_getfield: lua_getfield$4,
	    lua_getinfo: lua_getinfo$1,
	    lua_getmetatable: lua_getmetatable$3,
	    lua_getstack: lua_getstack$2,
	    lua_gettop: lua_gettop$8,
	    lua_insert: lua_insert$5,
	    lua_isinteger: lua_isinteger$2,
	    lua_isnil: lua_isnil$4,
	    lua_isnumber,
	    lua_isstring: lua_isstring$4,
	    lua_istable,
	    lua_len,
	    lua_load: lua_load$1,
	    lua_newstate,
	    lua_newtable: lua_newtable$2,
	    lua_next: lua_next$1,
	    lua_pcall: lua_pcall$2,
	    lua_pop: lua_pop$a,
	    lua_pushboolean: lua_pushboolean$7,
	    lua_pushcclosure: lua_pushcclosure$3,
	    lua_pushcfunction: lua_pushcfunction$4,
	    lua_pushfstring: lua_pushfstring$4,
	    lua_pushinteger: lua_pushinteger$9,
	    lua_pushliteral: lua_pushliteral$a,
	    lua_pushlstring: lua_pushlstring$2,
	    lua_pushnil: lua_pushnil$a,
	    lua_pushstring: lua_pushstring$9,
	    lua_pushvalue: lua_pushvalue$a,
	    lua_pushvfstring,
	    lua_rawequal: lua_rawequal$1,
	    lua_rawget: lua_rawget$2,
	    lua_rawgeti: lua_rawgeti$2,
	    lua_rawlen: lua_rawlen$1,
	    lua_rawseti: lua_rawseti$1,
	    lua_remove: lua_remove$3,
	    lua_setfield: lua_setfield$b,
	    lua_setglobal,
	    lua_setmetatable: lua_setmetatable$4,
	    lua_settop: lua_settop$8,
	    lua_toboolean: lua_toboolean$6,
	    lua_tointeger: lua_tointeger$3,
	    lua_tointegerx: lua_tointegerx$2,
	    lua_tojsstring: lua_tojsstring$2,
	    lua_tolstring: lua_tolstring$1,
	    lua_tonumber: lua_tonumber$2,
	    lua_tonumberx,
	    lua_topointer,
	    lua_tostring: lua_tostring$5,
	    lua_touserdata: lua_touserdata$5,
	    lua_type: lua_type$7,
	    lua_typename: lua_typename$1,
	    lua_version
	} = lua$2;
	const {
	    from_userstring,
	    luastring_eq: luastring_eq$2,
	    to_luastring: to_luastring$c,
	    to_uristring: to_uristring$1
	} = fengaricore;

	/* extra error code for 'luaL_loadfilex' */
	const LUA_ERRFILE = LUA_ERRERR+1;

	/* key, in the registry, for table of loaded modules */
	const LUA_LOADED_TABLE$1 = to_luastring$c("_LOADED");

	/* key, in the registry, for table of preloaded loaders */
	const LUA_PRELOAD_TABLE$1 = to_luastring$c("_PRELOAD");

	const LUA_FILEHANDLE$1 = to_luastring$c("FILE*");

	const LUAL_NUMSIZES  = 4*16 + 8;

	const __name = to_luastring$c("__name");
	const __tostring = to_luastring$c("__tostring");

	const empty = new Uint8Array(0);

	class luaL_Buffer$5 {
	    constructor() {
	        this.L = null;
	        this.b = empty;
	        this.n = 0;
	    }
	}

	const LEVELS1 = 10;  /* size of the first part of the stack */
	const LEVELS2 = 11;  /* size of the second part of the stack */

	/*
	** search for 'objidx' in table at index -1.
	** return 1 + string at top if find a good name.
	*/
	const findfield = function(L, objidx, level) {
	    if (level === 0 || !lua_istable(L, -1))
	        return 0;  /* not found */

	    lua_pushnil$a(L);  /* start 'next' loop */

	    while (lua_next$1(L, -2)) {  /* for each pair in table */
	        if (lua_type$7(L, -2) === LUA_TSTRING$4) {  /* ignore non-string keys */
	            if (lua_rawequal$1(L, objidx, -1)) {  /* found object? */
	                lua_pop$a(L, 1);  /* remove value (but keep name) */
	                return 1;
	            } else if (findfield(L, objidx, level - 1)) {  /* try recursively */
	                lua_remove$3(L, -2);  /* remove table (but keep name) */
	                lua_pushliteral$a(L, ".");
	                lua_insert$5(L, -2);  /* place '.' between the two names */
	                lua_concat$2(L, 3);
	                return 1;
	            }
	        }
	        lua_pop$a(L, 1);  /* remove value */
	    }

	    return 0;  /* not found */
	};

	/*
	** Search for a name for a function in all loaded modules
	*/
	const pushglobalfuncname = function(L, ar) {
	    let top = lua_gettop$8(L);
	    lua_getinfo$1(L, to_luastring$c("f"), ar);  /* push function */
	    lua_getfield$4(L, LUA_REGISTRYINDEX$4, LUA_LOADED_TABLE$1);
	    if (findfield(L, top + 1, 2)) {
	        let name = lua_tostring$5(L, -1);
	        if (name[0] === 95 /* '_'.charCodeAt(0) */ &&
	            name[1] === 71 /* 'G'.charCodeAt(0) */ &&
	            name[2] === 46 /* '.'.charCodeAt(0) */
	        ) {  /* name start with '_G.'? */
	            lua_pushstring$9(L, name.subarray(3));  /* push name without prefix */
	            lua_remove$3(L, -2);  /* remove original name */
	        }
	        lua_copy(L, -1, top + 1);  /* move name to proper place */
	        lua_pop$a(L, 2);  /* remove pushed values */
	        return 1;
	    } else {
	        lua_settop$8(L, top);  /* remove function and global table */
	        return 0;
	    }
	};

	const pushfuncname = function(L, ar) {
	    if (pushglobalfuncname(L, ar)) {  /* try first a global name */
	        lua_pushfstring$4(L, to_luastring$c("function '%s'"), lua_tostring$5(L, -1));
	        lua_remove$3(L, -2);  /* remove name */
	    }
	    else if (ar.namewhat.length !== 0)  /* is there a name from code? */
	        lua_pushfstring$4(L, to_luastring$c("%s '%s'"), ar.namewhat, ar.name);  /* use it */
	    else if (ar.what && ar.what[0] === 109 /* 'm'.charCodeAt(0) */)  /* main? */
	        lua_pushliteral$a(L, "main chunk");
	    else if (ar.what && ar.what[0] === 76 /* 'L'.charCodeAt(0) */)  /* for Lua functions, use <file:line> */
	        lua_pushfstring$4(L, to_luastring$c("function <%s:%d>"), ar.short_src, ar.linedefined);
	    else  /* nothing left... */
	        lua_pushliteral$a(L, "?");
	};

	const lastlevel = function(L) {
	    let ar = new lua_Debug$2();
	    let li = 1;
	    let le = 1;
	    /* find an upper bound */
	    while (lua_getstack$2(L, le, ar)) { li = le; le *= 2; }
	    /* do a binary search */
	    while (li < le) {
	        let m = Math.floor((li + le)/2);
	        if (lua_getstack$2(L, m, ar)) li = m + 1;
	        else le = m;
	    }
	    return le - 1;
	};

	const luaL_traceback$1 = function(L, L1, msg, level) {
	    let ar = new lua_Debug$2();
	    let top = lua_gettop$8(L);
	    let last = lastlevel(L1);
	    let n1 = last - level > LEVELS1 + LEVELS2 ? LEVELS1 : -1;
	    if (msg)
	        lua_pushfstring$4(L, to_luastring$c("%s\n"), msg);
	    luaL_checkstack$4(L, 10, null);
	    lua_pushliteral$a(L, "stack traceback:");
	    while (lua_getstack$2(L1, level++, ar)) {
	        if (n1-- === 0) {  /* too many levels? */
	            lua_pushliteral$a(L, "\n\t...");  /* add a '...' */
	            level = last - LEVELS2 + 1;  /* and skip to last ones */
	        } else {
	            lua_getinfo$1(L1, to_luastring$c("Slnt", true), ar);
	            lua_pushfstring$4(L, to_luastring$c("\n\t%s:"), ar.short_src);
	            if (ar.currentline > 0)
	                lua_pushliteral$a(L, `${ar.currentline}:`);
	            lua_pushliteral$a(L, " in ");
	            pushfuncname(L, ar);
	            if (ar.istailcall)
	                lua_pushliteral$a(L, "\n\t(...tail calls..)");
	            lua_concat$2(L, lua_gettop$8(L) - top);
	        }
	    }
	    lua_concat$2(L, lua_gettop$8(L) - top);
	};

	const panic = function(L) {
	    let msg = "PANIC: unprotected error in call to Lua API (" + lua_tojsstring$2(L, -1) + ")";
	    throw new Error(msg);
	};

	const luaL_argerror$5 = function(L, arg, extramsg) {
	    let ar = new lua_Debug$2();

	    if (!lua_getstack$2(L, 0, ar))  /* no stack frame? */
	        return luaL_error$a(L, to_luastring$c("bad argument #%d (%s)"), arg, extramsg);

	    lua_getinfo$1(L, to_luastring$c("n"), ar);

	    if (luastring_eq$2(ar.namewhat, to_luastring$c("method"))) {
	        arg--;  /* do not count 'self' */
	        if (arg === 0)  /* error is in the self argument itself? */
	            return luaL_error$a(L, to_luastring$c("calling '%s' on bad self (%s)"), ar.name, extramsg);
	    }

	    if (ar.name === null)
	        ar.name = pushglobalfuncname(L, ar) ? lua_tostring$5(L, -1) : to_luastring$c("?");

	    return luaL_error$a(L, to_luastring$c("bad argument #%d to '%s' (%s)"), arg, ar.name, extramsg);
	};

	const typeerror = function(L, arg, tname) {
	    let typearg;
	    if (luaL_getmetafield$2(L, arg, __name) === LUA_TSTRING$4)
	        typearg = lua_tostring$5(L, -1);
	    else if (lua_type$7(L, arg) === LUA_TLIGHTUSERDATA$1)
	        typearg = to_luastring$c("light userdata", true);
	    else
	        typearg = luaL_typename$2(L, arg);

	    let msg = lua_pushfstring$4(L, to_luastring$c("%s expected, got %s"), tname, typearg);
	    return luaL_argerror$5(L, arg, msg);
	};

	const luaL_where$2 = function(L, level) {
	    let ar = new lua_Debug$2();
	    if (lua_getstack$2(L, level, ar)) {
	        lua_getinfo$1(L, to_luastring$c("Sl", true), ar);
	        if (ar.currentline > 0) {
	            lua_pushfstring$4(L, to_luastring$c("%s:%d: "), ar.short_src, ar.currentline);
	            return;
	        }
	    }
	    lua_pushstring$9(L, to_luastring$c(""));
	};

	const luaL_error$a = function(L, fmt, ...argp) {
	    luaL_where$2(L, 1);
	    lua_pushvfstring(L, fmt, argp);
	    lua_concat$2(L, 2);
	    return lua_error$2(L);
	};

	/* Unlike normal lua, we pass in an error object */
	const luaL_fileresult$2 = function(L, stat, fname, e) {
	    if (stat) {
	        lua_pushboolean$7(L, 1);
	        return 1;
	    } else {
	        lua_pushnil$a(L);
	        let message, errno;
	        if (e) {
	            message = e.message;
	            errno = -e.errno;
	        } else {
	            message = "Success"; /* what strerror(0) returns */
	            errno = 0;
	        }
	        if (fname)
	            lua_pushfstring$4(L, to_luastring$c("%s: %s"), fname, to_luastring$c(message));
	        else
	            lua_pushstring$9(L, to_luastring$c(message));
	        lua_pushinteger$9(L, errno);
	        return 3;
	    }
	};

	/* Unlike normal lua, we pass in an error object */
	const luaL_execresult$1 = function(L, e) {
	    let what, stat;
	    if (e === null) {
	        lua_pushboolean$7(L, 1);
	        lua_pushliteral$a(L, "exit");
	        lua_pushinteger$9(L, 0);
	        return 3;
	    } else if (e.status) {
	        what = "exit";
	        stat = e.status;
	    } else if (e.signal) {
	        what = "signal";
	        stat = e.signal;
	    } else {
	        /* XXX: node seems to have e.errno as a string instead of a number */
	        return luaL_fileresult$2(L, 0, null, e);
	    }
	    lua_pushnil$a(L);
	    lua_pushliteral$a(L, what);
	    lua_pushinteger$9(L, stat);
	    return 3;
	};

	const luaL_getmetatable = function(L, n) {
	    return lua_getfield$4(L, LUA_REGISTRYINDEX$4, n);
	};

	const luaL_newmetatable$2 = function(L, tname) {
	    if (luaL_getmetatable(L, tname) !== LUA_TNIL$7)  /* name already in use? */
	        return 0;  /* leave previous value on top, but return 0 */
	    lua_pop$a(L, 1);
	    lua_createtable$4(L, 0, 2);  /* create metatable */
	    lua_pushstring$9(L, tname);
	    lua_setfield$b(L, -2, __name);  /* metatable.__name = tname */
	    lua_pushvalue$a(L, -1);
	    lua_setfield$b(L, LUA_REGISTRYINDEX$4, tname);  /* registry.name = metatable */
	    return 1;

	};

	const luaL_setmetatable$2 = function(L, tname) {
	    luaL_getmetatable(L, tname);
	    lua_setmetatable$4(L, -2);
	};

	const luaL_testudata$2 = function(L, ud, tname) {
	    let p = lua_touserdata$5(L, ud);
	    if (p !== null) {  /* value is a userdata? */
	        if (lua_getmetatable$3(L, ud)) {  /* does it have a metatable? */
	            luaL_getmetatable(L, tname);  /* get correct metatable */
	            if (!lua_rawequal$1(L, -1, -2))  /* not the same? */
	                p = null;  /* value is a userdata with wrong metatable */
	            lua_pop$a(L, 2);  /* remove both metatables */
	            return p;
	        }
	    }
	    return null;  /* value is not a userdata with a metatable */
	};

	const luaL_checkudata$2 = function(L, ud, tname) {
	    let p = luaL_testudata$2(L, ud, tname);
	    if (p === null) typeerror(L, ud, tname);
	    return p;
	};

	const luaL_checkoption$2 = function(L, arg, def, lst) {
	    let name = def !== null ? luaL_optstring$5(L, arg, def) : luaL_checkstring$5(L, arg);
	    for (let i = 0; lst[i]; i++)
	        if (luastring_eq$2(lst[i], name))
	            return i;
	    return luaL_argerror$5(L, arg, lua_pushfstring$4(L, to_luastring$c("invalid option '%s'"), name));
	};

	const tag_error = function(L, arg, tag) {
	    typeerror(L, arg, lua_typename$1(L, tag));
	};

	const luaL_newstate = function() {
	    let L = lua_newstate();
	    if (L) lua_atpanic(L, panic);
	    return L;
	};


	const luaL_typename$2 = function(L, i) {
	    return lua_typename$1(L, lua_type$7(L, i));
	};

	const luaL_argcheck$7 = function(L, cond, arg, extramsg) {
	    if (!cond) luaL_argerror$5(L, arg, extramsg);
	};

	const luaL_checkany$5 = function(L, arg) {
	    if (lua_type$7(L, arg) === LUA_TNONE$2)
	        luaL_argerror$5(L, arg, to_luastring$c("value expected", true));
	};

	const luaL_checktype$6 = function(L, arg, t) {
	    if (lua_type$7(L, arg) !== t)
	        tag_error(L, arg, t);
	};

	const luaL_checklstring$1 = function(L, arg) {
	    let s = lua_tolstring$1(L, arg);
	    if (s === null || s === undefined) tag_error(L, arg, LUA_TSTRING$4);
	    return s;
	};

	const luaL_checkstring$5 = luaL_checklstring$1;

	const luaL_optlstring$2 = function(L, arg, def) {
	    if (lua_type$7(L, arg) <= 0) {
	        return def === null ? null : from_userstring(def);
	    } else return luaL_checklstring$1(L, arg);
	};

	const luaL_optstring$5 = luaL_optlstring$2;

	const interror = function(L, arg) {
	    if (lua_isnumber(L, arg))
	        luaL_argerror$5(L, arg, to_luastring$c("number has no integer representation", true));
	    else
	        tag_error(L, arg, LUA_TNUMBER$4);
	};

	const luaL_checknumber$2 = function(L, arg) {
	    let d = lua_tonumberx(L, arg);
	    if (d === false)
	        tag_error(L, arg, LUA_TNUMBER$4);
	    return d;
	};

	const luaL_optnumber$1 = function(L, arg, def) {
	    return luaL_opt$1(L, luaL_checknumber$2, arg, def);
	};

	const luaL_checkinteger$7 = function(L, arg) {
	    let d = lua_tointegerx$2(L, arg);
	    if (d === false)
	        interror(L, arg);
	    return d;
	};

	const luaL_optinteger$6 = function(L, arg, def) {
	    return luaL_opt$1(L, luaL_checkinteger$7, arg, def);
	};

	const luaL_prepbuffsize$1 = function(B, sz) {
	    let newend = B.n + sz;
	    if (B.b.length < newend) {
	        let newsize = Math.max(B.b.length * 2, newend);  /* double buffer size */
	        let newbuff = new Uint8Array(newsize);  /* create larger buffer */
	        newbuff.set(B.b);  /* copy original content */
	        B.b = newbuff;
	    }
	    return B.b.subarray(B.n, newend);
	};

	const luaL_buffinit$5 = function(L, B) {
	    B.L = L;
	    B.b = empty;
	};

	const luaL_buffinitsize$1 = function(L, B, sz) {
	    luaL_buffinit$5(L, B);
	    return luaL_prepbuffsize$1(B, sz);
	};

	const luaL_prepbuffer = function(B) {
	    return luaL_prepbuffsize$1(B, LUAL_BUFFERSIZE);
	};

	const luaL_addlstring$2 = function(B, s, l) {
	    if (l > 0) {
	        s = from_userstring(s);
	        let b = luaL_prepbuffsize$1(B, l);
	        b.set(s.subarray(0, l));
	        luaL_addsize$1(B, l);
	    }
	};

	const luaL_addstring$2 = function(B, s) {
	    s = from_userstring(s);
	    luaL_addlstring$2(B, s, s.length);
	};

	const luaL_pushresult$5 = function(B) {
	    lua_pushlstring$2(B.L, B.b, B.n);
	    /* delete old buffer */
	    B.n = 0;
	    B.b = empty;
	};

	const luaL_addchar$2 = function(B, c) {
	    luaL_prepbuffsize$1(B, 1);
	    B.b[B.n++] = c;
	};

	const luaL_addsize$1 = function(B, s) {
	    B.n += s;
	};

	const luaL_pushresultsize$1 = function(B, sz) {
	    luaL_addsize$1(B, sz);
	    luaL_pushresult$5(B);
	};

	const luaL_addvalue$4 = function(B) {
	    let L = B.L;
	    let s = lua_tostring$5(L, -1);
	    luaL_addlstring$2(B, s, s.length);
	    lua_pop$a(L, 1);  /* remove value */
	};

	const luaL_opt$1 = function(L, f, n, d) {
	    return lua_type$7(L, n) <= 0 ? d : f(L, n);
	};

	const getS = function(L, ud) {
	    let s = ud.string;
	    ud.string = null;
	    return s;
	};

	const luaL_loadbufferx$1 = function(L, buff, size, name, mode) {
	    return lua_load$1(L, getS, {string: buff}, name, mode);
	};

	const luaL_loadbuffer$1 = function(L, s, sz, n) {
	    return luaL_loadbufferx$1(L, s, sz, n, null);
	};

	const luaL_loadstring = function(L, s) {
	    return luaL_loadbuffer$1(L, s, s.length, s);
	};

	const luaL_dostring = function(L, s) {
	    return (luaL_loadstring(L, s) || lua_pcall$2(L, 0, LUA_MULTRET$2, 0));
	};

	const luaL_getmetafield$2 = function(L, obj, event) {
	    if (!lua_getmetatable$3(L, obj))  /* no metatable? */
	        return LUA_TNIL$7;
	    else {
	        lua_pushstring$9(L, event);
	        let tt = lua_rawget$2(L, -2);
	        if (tt === LUA_TNIL$7)  /* is metafield nil? */
	            lua_pop$a(L, 2);  /* remove metatable and metafield */
	        else
	            lua_remove$3(L, -2);  /* remove only metatable */
	        return tt;  /* return metafield type */
	    }
	};

	const luaL_callmeta = function(L, obj, event) {
	    obj = lua_absindex(L, obj);
	    if (luaL_getmetafield$2(L, obj, event) === LUA_TNIL$7)
	        return false;

	    lua_pushvalue$a(L, obj);
	    lua_call$5(L, 1, 1);

	    return true;
	};

	const luaL_len$2 = function(L, idx) {
	    lua_len(L, idx);
	    let l = lua_tointegerx$2(L, -1);
	    if (l === false)
	        luaL_error$a(L, to_luastring$c("object length is not an integer", true));
	    lua_pop$a(L, 1);  /* remove object */
	    return l;
	};

	const p_I = to_luastring$c("%I");
	const p_f = to_luastring$c("%f");
	const luaL_tolstring$3 = function(L, idx) {
	    if (luaL_callmeta(L, idx, __tostring)) {
	        if (!lua_isstring$4(L, -1))
	            luaL_error$a(L, to_luastring$c("'__tostring' must return a string"));
	    } else {
	        let t = lua_type$7(L, idx);
	        switch(t) {
	            case LUA_TNUMBER$4: {
	                if (lua_isinteger$2(L, idx))
	                    lua_pushfstring$4(L, p_I, lua_tointeger$3(L, idx));
	                else
	                    lua_pushfstring$4(L, p_f, lua_tonumber$2(L, idx));
	                break;
	            }
	            case LUA_TSTRING$4:
	                lua_pushvalue$a(L, idx);
	                break;
	            case LUA_TBOOLEAN$2:
	                lua_pushliteral$a(L, (lua_toboolean$6(L, idx) ? "true" : "false"));
	                break;
	            case LUA_TNIL$7:
	                lua_pushliteral$a(L, "nil");
	                break;
	            default: {
	                let tt = luaL_getmetafield$2(L, idx, __name);
	                let kind = tt === LUA_TSTRING$4 ? lua_tostring$5(L, -1) : luaL_typename$2(L, idx);
	                lua_pushfstring$4(L, to_luastring$c("%s: %p"), kind, lua_topointer(L, idx));
	                if (tt !== LUA_TNIL$7)
	                    lua_remove$3(L, -2);
	                break;
	            }
	        }
	    }

	    return lua_tolstring$1(L, -1);
	};

	/*
	** Stripped-down 'require': After checking "loaded" table, calls 'openf'
	** to open a module, registers the result in 'package.loaded' table and,
	** if 'glb' is true, also registers the result in the global table.
	** Leaves resulting module on the top.
	*/
	const luaL_requiref$2 = function(L, modname, openf, glb) {
	    luaL_getsubtable$1(L, LUA_REGISTRYINDEX$4, LUA_LOADED_TABLE$1);
	    lua_getfield$4(L, -1, modname); /* LOADED[modname] */
	    if (!lua_toboolean$6(L, -1)) {  /* package not already loaded? */
	        lua_pop$a(L, 1);  /* remove field */
	        lua_pushcfunction$4(L, openf);
	        lua_pushstring$9(L, modname);  /* argument to open function */
	        lua_call$5(L, 1, 1);  /* call 'openf' to open module */
	        lua_pushvalue$a(L, -1);  /* make copy of module (call result) */
	        lua_setfield$b(L, -3, modname);  /* LOADED[modname] = module */
	    }
	    lua_remove$3(L, -2);  /* remove LOADED table */
	    if (glb) {
	        lua_pushvalue$a(L, -1);  /* copy of module */
	        lua_setglobal(L, modname);  /* _G[modname] = module */
	    }
	};

	const find_subarray$1 = function(arr, subarr, from_index) {
	    var i = from_index >>> 0,
	        sl = subarr.length,
	        l = arr.length + 1 - sl;

	    loop: for (; i < l; i++) {
	        for (let j = 0; j < sl; j++)
	            if (arr[i+j] !== subarr[j])
	                continue loop;
	        return i;
	    }
	    return -1;
	};

	const luaL_gsub$1 = function(L, s, p, r) {
	    let wild;
	    let b = new luaL_Buffer$5();
	    luaL_buffinit$5(L, b);
	    while ((wild = find_subarray$1(s, p)) >= 0) {
	        luaL_addlstring$2(b, s, wild);  /* push prefix */
	        luaL_addstring$2(b, r);  /* push replacement in place of pattern */
	        s = s.subarray(wild + p.length);  /* continue after 'p' */
	    }
	    luaL_addstring$2(b, s);  /* push last suffix */
	    luaL_pushresult$5(b);
	    return lua_tostring$5(L, -1);
	};

	/*
	** ensure that stack[idx][fname] has a table and push that table
	** into the stack
	*/
	const luaL_getsubtable$1 = function(L, idx, fname) {
	    if (lua_getfield$4(L, idx, fname) === LUA_TTABLE$7)
	        return true;  /* table already there */
	    else {
	        lua_pop$a(L, 1);  /* remove previous result */
	        idx = lua_absindex(L, idx);
	        lua_newtable$2(L);
	        lua_pushvalue$a(L, -1);  /* copy to be left at top */
	        lua_setfield$b(L, idx, fname);  /* assign new table to field */
	        return false;  /* false, because did not find table there */
	    }
	};

	/*
	** set functions from list 'l' into table at top - 'nup'; each
	** function gets the 'nup' elements at the top as upvalues.
	** Returns with only the table at the stack.
	*/
	const luaL_setfuncs$4 = function(L, l, nup) {
	    luaL_checkstack$4(L, nup, to_luastring$c("too many upvalues", true));
	    for (let lib in l) {  /* fill the table with given functions */
	        for (let i = 0; i < nup; i++)  /* copy upvalues to the top */
	            lua_pushvalue$a(L, -nup);
	        lua_pushcclosure$3(L, l[lib], nup);  /* closure with those upvalues */
	        lua_setfield$b(L, -(nup + 2), to_luastring$c(lib));
	    }
	    lua_pop$a(L, nup);  /* remove upvalues */
	};

	/*
	** Ensures the stack has at least 'space' extra slots, raising an error
	** if it cannot fulfill the request. (The error handling needs a few
	** extra slots to format the error message. In case of an error without
	** this extra space, Lua will generate the same 'stack overflow' error,
	** but without 'msg'.)
	*/
	const luaL_checkstack$4 = function(L, space, msg) {
	    if (!lua_checkstack$3(L, space)) {
	        if (msg)
	            luaL_error$a(L, to_luastring$c("stack overflow (%s)"), msg);
	        else
	            luaL_error$a(L, to_luastring$c('stack overflow', true));
	    }
	};

	const luaL_newlibtable = function(L) {
	    lua_createtable$4(L);
	};

	const luaL_newlib$b = function(L, l) {
	    lua_createtable$4(L);
	    luaL_setfuncs$4(L, l, 0);
	};

	/* predefined references */
	const LUA_NOREF  = -2;
	const LUA_REFNIL = -1;

	const luaL_ref = function(L, t) {
	    let ref;
	    if (lua_isnil$4(L, -1)) {
	        lua_pop$a(L, 1);  /* remove from stack */
	        return LUA_REFNIL;  /* 'nil' has a unique fixed reference */
	    }
	    t = lua_absindex(L, t);
	    lua_rawgeti$2(L, t, 0);  /* get first free element */
	    ref = lua_tointeger$3(L, -1);  /* ref = t[freelist] */
	    lua_pop$a(L, 1);  /* remove it from stack */
	    if (ref !== 0) {  /* any free element? */
	        lua_rawgeti$2(L, t, ref);  /* remove it from list */
	        lua_rawseti$1(L, t, 0);  /* (t[freelist] = t[ref]) */
	    }
	    else  /* no free elements */
	        ref = lua_rawlen$1(L, t) + 1;  /* get a new reference */
	    lua_rawseti$1(L, t, ref);
	    return ref;
	};


	const luaL_unref = function(L, t, ref) {
	    if (ref >= 0) {
	        t = lua_absindex(L, t);
	        lua_rawgeti$2(L, t, 0);
	        lua_rawseti$1(L, t, ref);  /* t[ref] = t[freelist] */
	        lua_pushinteger$9(L, ref);
	        lua_rawseti$1(L, t, 0);  /* t[freelist] = ref */
	    }
	};


	const errfile = function(L, what, fnameindex, error) {
	    let serr = error.message;
	    let filename = lua_tostring$5(L, fnameindex).subarray(1);
	    lua_pushfstring$4(L, to_luastring$c("cannot %s %s: %s"), to_luastring$c(what), filename, to_luastring$c(serr));
	    lua_remove$3(L, fnameindex);
	    return LUA_ERRFILE;
	};

	let getc;

	const utf8_bom = [0XEF, 0XBB, 0XBF];  /* UTF-8 BOM mark */
	const skipBOM = function(lf) {
	    lf.n = 0;
	    let c;
	    let p = 0;
	    do {
	        c = getc(lf);
	        if (c === null || c !== utf8_bom[p]) return c;
	        p++;
	        lf.buff[lf.n++] = c;  /* to be read by the parser */
	    } while (p < utf8_bom.length);
	    lf.n = 0;  /* prefix matched; discard it */
	    return getc(lf);  /* return next character */
	};

	/*
	** reads the first character of file 'f' and skips an optional BOM mark
	** in its beginning plus its first line if it starts with '#'. Returns
	** true if it skipped the first line.  In any case, '*cp' has the
	** first "valid" character of the file (after the optional BOM and
	** a first-line comment).
	*/
	const skipcomment = function(lf) {
	    let c = skipBOM(lf);
	    if (c === 35 /* '#'.charCodeAt(0) */) {  /* first line is a comment (Unix exec. file)? */
	        do {  /* skip first line */
	            c = getc(lf);
	        } while (c && c !== 10 /* '\n'.charCodeAt(0) */);

	        return {
	            skipped: true,
	            c: getc(lf)  /* skip end-of-line, if present */
	        };
	    } else {
	        return {
	            skipped: false,
	            c: c
	        };
	    }
	};

	let luaL_loadfilex$1;

	if (typeof process === "undefined") {
	    class LoadF {
	        constructor() {
	            this.n = NaN;  /* number of pre-read characters */
	            this.f = null;  /* file being read */
	            this.buff = new Uint8Array(1024);  /* area for reading file */
	            this.pos = 0;  /* current position in file */
	            this.err = void 0;
	        }
	    }

	    const getF = function(L, ud) {
	        let lf = ud;

	        if (lf.f !== null && lf.n > 0) {  /* are there pre-read characters to be read? */
	            let bytes = lf.n; /* return them (chars already in buffer) */
	            lf.n = 0;  /* no more pre-read characters */
	            lf.f = lf.f.subarray(lf.pos);  /* we won't use lf.buff anymore */
	            return lf.buff.subarray(0, bytes);
	        }

	        let f = lf.f;
	        lf.f = null;
	        return f;
	    };

	    getc = function(lf) {
	        return lf.pos < lf.f.length ? lf.f[lf.pos++] : null;
	    };

	    luaL_loadfilex$1 = function(L, filename, mode) {
	        let lf = new LoadF();
	        let fnameindex = lua_gettop$8(L) + 1;  /* index of filename on the stack */
	        if (filename === null) {
	            throw new Error("Can't read stdin in the browser");
	        } else {
	            lua_pushfstring$4(L, to_luastring$c("@%s"), filename);
	            let path = to_uristring$1(filename);
	            let xhr = new XMLHttpRequest();
	            xhr.open("GET", path, false);
	            /*
	            Synchronous xhr in main thread always returns a js string.
	            Some browsers make console noise if you even attempt to set responseType
	            */
	            if (typeof window === "undefined") {
	                xhr.responseType = "arraybuffer";
	            }
	            xhr.send();
	            if (xhr.status >= 200 && xhr.status <= 299) {
	                if (typeof xhr.response === "string") {
	                    lf.f = to_luastring$c(xhr.response);
	                } else {
	                    lf.f = new Uint8Array(xhr.response);
	                }
	            } else {
	                lf.err = xhr.status;
	                return errfile(L, "open", fnameindex, { message: `${xhr.status}: ${xhr.statusText}` });
	            }
	        }
	        let com = skipcomment(lf);
	        /* check for signature first, as we don't want to add line number corrections in binary case */
	        if (com.c === LUA_SIGNATURE[0] && filename) ; else if (com.skipped) { /* read initial portion */
	            lf.buff[lf.n++] = 10 /* '\n'.charCodeAt(0) */;  /* add line to correct line numbers */
	        }
	        if (com.c !== null)
	            lf.buff[lf.n++] = com.c; /* 'c' is the first character of the stream */
	        let status = lua_load$1(L, getF, lf, lua_tostring$5(L, -1), mode);
	        let readstatus = lf.err;
	        if (readstatus) {
	            lua_settop$8(L, fnameindex);  /* ignore results from 'lua_load' */
	            return errfile(L, "read", fnameindex, readstatus);
	        }
	        lua_remove$3(L, fnameindex);
	        return status;
	    };
	} else {
	    const fs = require$$0__default["default"];

	    class LoadF {
	        constructor() {
	            this.n = NaN;  /* number of pre-read characters */
	            this.f = null;  /* file being read */
	            this.buff = Buffer.alloc(1024);  /* area for reading file */
	            this.pos = 0;  /* current position in file */
	            this.err = void 0;
	        }
	    }

	    const getF = function(L, ud) {
	        let lf = ud;
	        let bytes = 0;
	        if (lf.n > 0) {  /* are there pre-read characters to be read? */
	            bytes = lf.n; /* return them (chars already in buffer) */
	            lf.n = 0;  /* no more pre-read characters */
	        } else {  /* read a block from file */
	            try {
	                bytes = fs.readSync(lf.f, lf.buff, 0, lf.buff.length, lf.pos); /* read block */
	            } catch(e) {
	                lf.err = e;
	                bytes = 0;
	            }
	            lf.pos += bytes;
	        }
	        if (bytes > 0)
	            return lf.buff.subarray(0, bytes);
	        else return null;
	    };

	    getc = function(lf) {
	        let b = Buffer.alloc(1);
	        let bytes;
	        try {
	            bytes = fs.readSync(lf.f, b, 0, 1, lf.pos);
	        } catch(e) {
	            lf.err = e;
	            return null;
	        }
	        lf.pos += bytes;
	        return bytes > 0 ? b.readUInt8() : null;
	    };

	    luaL_loadfilex$1 = function(L, filename, mode) {
	        let lf = new LoadF();
	        let fnameindex = lua_gettop$8(L) + 1;  /* index of filename on the stack */
	        if (filename === null) {
	            lua_pushliteral$a(L, "=stdin");
	            lf.f = process.stdin.fd;
	        } else {
	            lua_pushfstring$4(L, to_luastring$c("@%s"), filename);
	            try {
	                lf.f = fs.openSync(filename, "r");
	            } catch (e) {
	                return errfile(L, "open", fnameindex, e);
	            }
	        }
	        let com = skipcomment(lf);
	        /* check for signature first, as we don't want to add line number corrections in binary case */
	        if (com.c === LUA_SIGNATURE[0] && filename) ; else if (com.skipped) { /* read initial portion */
	            lf.buff[lf.n++] = 10 /* '\n'.charCodeAt(0) */;  /* add line to correct line numbers */
	        }
	        if (com.c !== null)
	            lf.buff[lf.n++] = com.c; /* 'c' is the first character of the stream */
	        let status = lua_load$1(L, getF, lf, lua_tostring$5(L, -1), mode);
	        let readstatus = lf.err;
	        if (filename) try { fs.closeSync(lf.f); } catch(e) {}  /* close file (even in case of errors) */
	        if (readstatus) {
	            lua_settop$8(L, fnameindex);  /* ignore results from 'lua_load' */
	            return errfile(L, "read", fnameindex, readstatus);
	        }
	        lua_remove$3(L, fnameindex);
	        return status;
	    };
	}

	const luaL_loadfile$2 = function(L, filename) {
	    return luaL_loadfilex$1(L, filename, null);
	};

	const luaL_dofile = function(L, filename) {
	    return (luaL_loadfile$2(L, filename) || lua_pcall$2(L, 0, LUA_MULTRET$2, 0));
	};

	const lua_writestringerror$1 = function() {
	    for (let i=0; i<arguments.length; i++) {
	        let a = arguments[i];
	        if (typeof process === "undefined") {
	            /* split along new lines for separate console.error invocations */
	            do {
	                /* regexp uses [\d\D] to work around matching new lines
	                   the 's' flag is non-standard */
	                let r = /([^\n]*)\n?([\d\D]*)/.exec(a);
	                console.error(r[1]);
	                a = r[2];
	            } while (a !== "");
	        } else {
	            process.stderr.write(a);
	        }
	    }
	};

	const luaL_checkversion_ = function(L, ver, sz) {
	    let v = lua_version(L);
	    if (sz != LUAL_NUMSIZES)  /* check numeric types */
	        luaL_error$a(L, to_luastring$c("core and library have incompatible numeric types"));
	    if (v != lua_version(null))
	        luaL_error$a(L, to_luastring$c("multiple Lua VMs detected"));
	    else if (v !== ver)
	        luaL_error$a(L, to_luastring$c("version mismatch: app. needs %f, Lua core provides %f"), ver, v);
	};

	/* There is no point in providing this function... */
	const luaL_checkversion = function(L) {
	    luaL_checkversion_(L, LUA_VERSION_NUM, LUAL_NUMSIZES);
	};

	lauxlib$2.LUA_ERRFILE          = LUA_ERRFILE;
	lauxlib$2.LUA_FILEHANDLE       = LUA_FILEHANDLE$1;
	lauxlib$2.LUA_LOADED_TABLE     = LUA_LOADED_TABLE$1;
	lauxlib$2.LUA_NOREF            = LUA_NOREF;
	lauxlib$2.LUA_PRELOAD_TABLE    = LUA_PRELOAD_TABLE$1;
	lauxlib$2.LUA_REFNIL           = LUA_REFNIL;
	lauxlib$2.luaL_Buffer          = luaL_Buffer$5;
	lauxlib$2.luaL_addchar         = luaL_addchar$2;
	lauxlib$2.luaL_addlstring      = luaL_addlstring$2;
	lauxlib$2.luaL_addsize         = luaL_addsize$1;
	lauxlib$2.luaL_addstring       = luaL_addstring$2;
	lauxlib$2.luaL_addvalue        = luaL_addvalue$4;
	lauxlib$2.luaL_argcheck        = luaL_argcheck$7;
	lauxlib$2.luaL_argerror        = luaL_argerror$5;
	lauxlib$2.luaL_buffinit        = luaL_buffinit$5;
	lauxlib$2.luaL_buffinitsize    = luaL_buffinitsize$1;
	lauxlib$2.luaL_callmeta        = luaL_callmeta;
	lauxlib$2.luaL_checkany        = luaL_checkany$5;
	lauxlib$2.luaL_checkinteger    = luaL_checkinteger$7;
	lauxlib$2.luaL_checklstring    = luaL_checklstring$1;
	lauxlib$2.luaL_checknumber     = luaL_checknumber$2;
	lauxlib$2.luaL_checkoption     = luaL_checkoption$2;
	lauxlib$2.luaL_checkstack      = luaL_checkstack$4;
	lauxlib$2.luaL_checkstring     = luaL_checkstring$5;
	lauxlib$2.luaL_checktype       = luaL_checktype$6;
	lauxlib$2.luaL_checkudata      = luaL_checkudata$2;
	lauxlib$2.luaL_checkversion    = luaL_checkversion;
	lauxlib$2.luaL_checkversion_   = luaL_checkversion_;
	lauxlib$2.luaL_dofile          = luaL_dofile;
	lauxlib$2.luaL_dostring        = luaL_dostring;
	lauxlib$2.luaL_error           = luaL_error$a;
	lauxlib$2.luaL_execresult      = luaL_execresult$1;
	lauxlib$2.luaL_fileresult      = luaL_fileresult$2;
	lauxlib$2.luaL_getmetafield    = luaL_getmetafield$2;
	lauxlib$2.luaL_getmetatable    = luaL_getmetatable;
	lauxlib$2.luaL_getsubtable     = luaL_getsubtable$1;
	lauxlib$2.luaL_gsub            = luaL_gsub$1;
	lauxlib$2.luaL_len             = luaL_len$2;
	lauxlib$2.luaL_loadbuffer      = luaL_loadbuffer$1;
	lauxlib$2.luaL_loadbufferx     = luaL_loadbufferx$1;
	lauxlib$2.luaL_loadfile        = luaL_loadfile$2;
	lauxlib$2.luaL_loadfilex       = luaL_loadfilex$1;
	lauxlib$2.luaL_loadstring      = luaL_loadstring;
	lauxlib$2.luaL_newlib          = luaL_newlib$b;
	lauxlib$2.luaL_newlibtable     = luaL_newlibtable;
	lauxlib$2.luaL_newmetatable    = luaL_newmetatable$2;
	lauxlib$2.luaL_newstate        = luaL_newstate;
	lauxlib$2.luaL_opt             = luaL_opt$1;
	lauxlib$2.luaL_optinteger      = luaL_optinteger$6;
	lauxlib$2.luaL_optlstring      = luaL_optlstring$2;
	lauxlib$2.luaL_optnumber       = luaL_optnumber$1;
	lauxlib$2.luaL_optstring       = luaL_optstring$5;
	lauxlib$2.luaL_prepbuffer      = luaL_prepbuffer;
	lauxlib$2.luaL_prepbuffsize    = luaL_prepbuffsize$1;
	lauxlib$2.luaL_pushresult      = luaL_pushresult$5;
	lauxlib$2.luaL_pushresultsize  = luaL_pushresultsize$1;
	lauxlib$2.luaL_ref             = luaL_ref;
	lauxlib$2.luaL_requiref        = luaL_requiref$2;
	lauxlib$2.luaL_setfuncs        = luaL_setfuncs$4;
	lauxlib$2.luaL_setmetatable    = luaL_setmetatable$2;
	lauxlib$2.luaL_testudata       = luaL_testudata$2;
	lauxlib$2.luaL_tolstring       = luaL_tolstring$3;
	lauxlib$2.luaL_traceback       = luaL_traceback$1;
	lauxlib$2.luaL_typename        = luaL_typename$2;
	lauxlib$2.luaL_unref           = luaL_unref;
	lauxlib$2.luaL_where           = luaL_where$2;
	lauxlib$2.lua_writestringerror = lua_writestringerror$1;

	var lualib$8 = {};

	var lbaselib = {};

	const {
	    LUA_MULTRET: LUA_MULTRET$1,
	    LUA_OK: LUA_OK$3,
	    LUA_TFUNCTION: LUA_TFUNCTION$5,
	    LUA_TNIL: LUA_TNIL$6,
	    LUA_TNONE: LUA_TNONE$1,
	    LUA_TNUMBER: LUA_TNUMBER$3,
	    LUA_TSTRING: LUA_TSTRING$3,
	    LUA_TTABLE: LUA_TTABLE$6,
	    LUA_VERSION,
	    LUA_YIELD: LUA_YIELD$1,
	    lua_call: lua_call$4,
	    lua_callk: lua_callk$1,
	    lua_concat: lua_concat$1,
	    lua_error: lua_error$1,
	    lua_getglobal,
	    lua_geti: lua_geti$1,
	    lua_getmetatable: lua_getmetatable$2,
	    lua_gettop: lua_gettop$7,
	    lua_insert: lua_insert$4,
	    lua_isnil: lua_isnil$3,
	    lua_isnone: lua_isnone$1,
	    lua_isstring: lua_isstring$3,
	    lua_load,
	    lua_next,
	    lua_pcallk,
	    lua_pop: lua_pop$9,
	    lua_pushboolean: lua_pushboolean$6,
	    lua_pushcfunction: lua_pushcfunction$3,
	    lua_pushglobaltable: lua_pushglobaltable$1,
	    lua_pushinteger: lua_pushinteger$8,
	    lua_pushliteral: lua_pushliteral$9,
	    lua_pushnil: lua_pushnil$9,
	    lua_pushstring: lua_pushstring$8,
	    lua_pushvalue: lua_pushvalue$9,
	    lua_rawequal,
	    lua_rawget: lua_rawget$1,
	    lua_rawlen,
	    lua_rawset,
	    lua_remove: lua_remove$2,
	    lua_replace,
	    lua_rotate: lua_rotate$2,
	    lua_setfield: lua_setfield$a,
	    lua_setmetatable: lua_setmetatable$3,
	    lua_settop: lua_settop$7,
	    lua_setupvalue: lua_setupvalue$1,
	    lua_stringtonumber,
	    lua_toboolean: lua_toboolean$5,
	    lua_tolstring,
	    lua_tostring: lua_tostring$4,
	    lua_type: lua_type$6,
	    lua_typename
	} = lua$2;
	const {
	    luaL_argcheck: luaL_argcheck$6,
	    luaL_checkany: luaL_checkany$4,
	    luaL_checkinteger: luaL_checkinteger$6,
	    luaL_checkoption: luaL_checkoption$1,
	    luaL_checkstack: luaL_checkstack$3,
	    luaL_checktype: luaL_checktype$5,
	    luaL_error: luaL_error$9,
	    luaL_getmetafield: luaL_getmetafield$1,
	    luaL_loadbufferx,
	    luaL_loadfile: luaL_loadfile$1,
	    luaL_loadfilex,
	    luaL_optinteger: luaL_optinteger$5,
	    luaL_optstring: luaL_optstring$4,
	    luaL_setfuncs: luaL_setfuncs$3,
	    luaL_tolstring: luaL_tolstring$2,
	    luaL_where: luaL_where$1
	} = lauxlib$2;
	const {
	    to_jsstring: to_jsstring$3,
	    to_luastring: to_luastring$b
	} = fengaricore;

	let lua_writestring;
	let lua_writeline;
	if (typeof process === "undefined") {
	    if (typeof TextDecoder === "function") { /* Older browsers don't have TextDecoder */
	        let buff = "";
	        let decoder = new TextDecoder("utf-8");
	        lua_writestring = function(s) {
	            buff += decoder.decode(s, {stream: true});
	        };
	        let empty = new Uint8Array(0);
	        lua_writeline = function() {
	            buff += decoder.decode(empty);
	            console.log(buff);
	            buff = "";
	        };
	    } else {
	        let buff = [];
	        lua_writestring = function(s) {
	            try {
	                /* If the string is valid utf8, then we can use to_jsstring */
	                s = to_jsstring$3(s);
	            } catch(e) {
	                /* otherwise push copy of raw array */
	                let copy = new Uint8Array(s.length);
	                copy.set(s);
	                s = copy;
	            }
	            buff.push(s);
	        };
	        lua_writeline = function() {
	            console.log.apply(console.log, buff);
	            buff = [];
	        };
	    }
	} else {
	    lua_writestring = function(s) {
	        process.stdout.write(Buffer.from(s));
	    };
	    lua_writeline = function() {
	        process.stdout.write("\n");
	    };
	}
	const luaB_print = function(L) {
	    let n = lua_gettop$7(L); /* number of arguments */
	    lua_getglobal(L, to_luastring$b("tostring", true));
	    for (let i = 1; i <= n; i++) {
	        lua_pushvalue$9(L, -1);  /* function to be called */
	        lua_pushvalue$9(L, i);  /* value to print */
	        lua_call$4(L, 1, 1);
	        let s = lua_tolstring(L, -1);
	        if (s === null)
	            return luaL_error$9(L, to_luastring$b("'tostring' must return a string to 'print'"));
	        if (i > 1) lua_writestring(to_luastring$b("\t"));
	        lua_writestring(s);
	        lua_pop$9(L, 1);
	    }
	    lua_writeline();
	    return 0;
	};

	const luaB_tostring = function(L) {
	    luaL_checkany$4(L, 1);
	    luaL_tolstring$2(L, 1);

	    return 1;
	};

	const luaB_getmetatable = function(L) {
	    luaL_checkany$4(L, 1);
	    if (!lua_getmetatable$2(L, 1)) {
	        lua_pushnil$9(L);
	        return 1;  /* no metatable */
	    }
	    luaL_getmetafield$1(L, 1, to_luastring$b("__metatable", true));
	    return 1;  /* returns either __metatable field (if present) or metatable */
	};

	const luaB_setmetatable = function(L) {
	    let t = lua_type$6(L, 2);
	    luaL_checktype$5(L, 1, LUA_TTABLE$6);
	    luaL_argcheck$6(L, t === LUA_TNIL$6 || t === LUA_TTABLE$6, 2, "nil or table expected");
	    if (luaL_getmetafield$1(L, 1, to_luastring$b("__metatable", true)) !== LUA_TNIL$6)
	        return luaL_error$9(L, to_luastring$b("cannot change a protected metatable"));
	    lua_settop$7(L, 2);
	    lua_setmetatable$3(L, 1);
	    return 1;
	};

	const luaB_rawequal = function(L) {
	    luaL_checkany$4(L, 1);
	    luaL_checkany$4(L, 2);
	    lua_pushboolean$6(L, lua_rawequal(L, 1, 2));
	    return 1;
	};

	const luaB_rawlen = function(L) {
	    let t = lua_type$6(L, 1);
	    luaL_argcheck$6(L, t === LUA_TTABLE$6 || t === LUA_TSTRING$3, 1, "table or string expected");
	    lua_pushinteger$8(L, lua_rawlen(L, 1));
	    return 1;
	};

	const luaB_rawget = function(L) {
	    luaL_checktype$5(L, 1, LUA_TTABLE$6);
	    luaL_checkany$4(L, 2);
	    lua_settop$7(L, 2);
	    lua_rawget$1(L, 1);
	    return 1;
	};

	const luaB_rawset = function(L) {
	    luaL_checktype$5(L, 1, LUA_TTABLE$6);
	    luaL_checkany$4(L, 2);
	    luaL_checkany$4(L, 3);
	    lua_settop$7(L, 3);
	    lua_rawset(L, 1);
	    return 1;
	};

	const opts = [
	    "stop", "restart", "collect",
	    "count", "step", "setpause", "setstepmul",
	    "isrunning"
	].map((e) => to_luastring$b(e));
	const luaB_collectgarbage = function(L) {
	    luaL_checkoption$1(L, 1, "collect", opts);
	    luaL_optinteger$5(L, 2, 0);
	    luaL_error$9(L, to_luastring$b("lua_gc not implemented"));
	};

	const luaB_type = function(L) {
	    let t = lua_type$6(L, 1);
	    luaL_argcheck$6(L, t !== LUA_TNONE$1, 1, "value expected");
	    lua_pushstring$8(L, lua_typename(L, t));
	    return 1;
	};

	const pairsmeta = function(L, method, iszero, iter) {
	    luaL_checkany$4(L, 1);
	    if (luaL_getmetafield$1(L, 1, method) === LUA_TNIL$6) {  /* no metamethod? */
	        lua_pushcfunction$3(L, iter);  /* will return generator, */
	        lua_pushvalue$9(L, 1);  /* state, */
	        if (iszero) lua_pushinteger$8(L, 0);  /* and initial value */
	        else lua_pushnil$9(L);
	    } else {
	        lua_pushvalue$9(L, 1);  /* argument 'self' to metamethod */
	        lua_call$4(L, 1, 3);  /* get 3 values from metamethod */
	    }
	    return 3;
	};

	const luaB_next = function(L) {
	    luaL_checktype$5(L, 1, LUA_TTABLE$6);
	    lua_settop$7(L, 2);  /* create a 2nd argument if there isn't one */
	    if (lua_next(L, 1))
	        return 2;
	    else {
	        lua_pushnil$9(L);
	        return 1;
	    }
	};

	const luaB_pairs = function(L) {
	    return pairsmeta(L, to_luastring$b("__pairs", true), 0, luaB_next);
	};

	/*
	** Traversal function for 'ipairs'
	*/
	const ipairsaux = function(L) {
	    let i = luaL_checkinteger$6(L, 2) + 1;
	    lua_pushinteger$8(L, i);
	    return lua_geti$1(L, 1, i) === LUA_TNIL$6 ? 1 : 2;
	};

	/*
	** 'ipairs' function. Returns 'ipairsaux', given "table", 0.
	** (The given "table" may not be a table.)
	*/
	const luaB_ipairs = function(L) {
	    // Lua 5.2
	    // return pairsmeta(L, "__ipairs", 1, ipairsaux);

	    luaL_checkany$4(L, 1);
	    lua_pushcfunction$3(L, ipairsaux);  /* iteration function */
	    lua_pushvalue$9(L, 1);  /* state */
	    lua_pushinteger$8(L, 0);  /* initial value */
	    return 3;
	};

	const b_str2int = function(s, base) {
	    try {
	        s = to_jsstring$3(s);
	    } catch (e) {
	        return null;
	    }
	    let r = /^[\t\v\f \n\r]*([+-]?)0*([0-9A-Za-z]+)[\t\v\f \n\r]*$/.exec(s);
	    if (!r) return null;
	    let v = parseInt(r[1]+r[2], base);
	    if (isNaN(v)) return null;
	    return v|0;
	};

	const luaB_tonumber = function(L) {
	    if (lua_type$6(L, 2) <= 0) {  /* standard conversion? */
	        luaL_checkany$4(L, 1);
	        if (lua_type$6(L, 1) === LUA_TNUMBER$3) {  /* already a number? */
	            lua_settop$7(L, 1);
	            return 1;
	        } else {
	            let s = lua_tostring$4(L, 1);
	            if (s !== null && lua_stringtonumber(L, s) === s.length+1)
	                return 1;  /* successful conversion to number */
	        }
	    } else {
	        let base = luaL_checkinteger$6(L, 2);
	        luaL_checktype$5(L, 1, LUA_TSTRING$3);  /* no numbers as strings */
	        let s = lua_tostring$4(L, 1);
	        luaL_argcheck$6(L, 2 <= base && base <= 36, 2, "base out of range");
	        let n = b_str2int(s, base);
	        if (n !== null) {
	            lua_pushinteger$8(L, n);
	            return 1;
	        }
	    }

	    lua_pushnil$9(L);
	    return 1;
	};

	const luaB_error = function(L) {
	    let level = luaL_optinteger$5(L, 2, 1);
	    lua_settop$7(L, 1);
	    if (lua_type$6(L, 1) === LUA_TSTRING$3 && level > 0) {
	        luaL_where$1(L, level);  /* add extra information */
	        lua_pushvalue$9(L, 1);
	        lua_concat$1(L, 2);
	    }
	    return lua_error$1(L);
	};

	const luaB_assert = function(L) {
	    if (lua_toboolean$5(L, 1))  /* condition is true? */
	        return lua_gettop$7(L);  /* return all arguments */
	    else {
	        luaL_checkany$4(L, 1);  /* there must be a condition */
	        lua_remove$2(L, 1);  /* remove it */
	        lua_pushliteral$9(L, "assertion failed!");  /* default message */
	        lua_settop$7(L, 1);  /* leave only message (default if no other one) */
	        return luaB_error(L);  /* call 'error' */
	    }
	};

	const luaB_select = function(L) {
	    let n = lua_gettop$7(L);
	    if (lua_type$6(L, 1) === LUA_TSTRING$3 && lua_tostring$4(L, 1)[0] === 35 /* '#'.charCodeAt(0) */) {
	        lua_pushinteger$8(L, n - 1);
	        return 1;
	    } else {
	        let i = luaL_checkinteger$6(L, 1);
	        if (i < 0) i = n + i;
	        else if (i > n) i = n;
	        luaL_argcheck$6(L, 1 <= i, 1, "index out of range");
	        return n - i;
	    }
	};

	/*
	** Continuation function for 'pcall' and 'xpcall'. Both functions
	** already pushed a 'true' before doing the call, so in case of success
	** 'finishpcall' only has to return everything in the stack minus
	** 'extra' values (where 'extra' is exactly the number of items to be
	** ignored).
	*/
	const finishpcall = function(L, status, extra) {
	    if (status !== LUA_OK$3 && status !== LUA_YIELD$1) {  /* error? */
	        lua_pushboolean$6(L, 0);  /* first result (false) */
	        lua_pushvalue$9(L, -2);  /* error message */
	        return 2;  /* return false, msg */
	    } else
	        return lua_gettop$7(L) - extra;
	};

	const luaB_pcall = function(L) {
	    luaL_checkany$4(L, 1);
	    lua_pushboolean$6(L, 1);  /* first result if no errors */
	    lua_insert$4(L, 1);  /* put it in place */
	    let status = lua_pcallk(L, lua_gettop$7(L) - 2, LUA_MULTRET$1, 0, 0, finishpcall);
	    return finishpcall(L, status, 0);
	};

	/*
	** Do a protected call with error handling. After 'lua_rotate', the
	** stack will have <f, err, true, f, [args...]>; so, the function passes
	** 2 to 'finishpcall' to skip the 2 first values when returning results.
	*/
	const luaB_xpcall = function(L) {
	    let n = lua_gettop$7(L);
	    luaL_checktype$5(L, 2, LUA_TFUNCTION$5);  /* check error function */
	    lua_pushboolean$6(L, 1);  /* first result */
	    lua_pushvalue$9(L, 1);  /* function */
	    lua_rotate$2(L, 3, 2);  /* move them below function's arguments */
	    let status = lua_pcallk(L, n - 2, LUA_MULTRET$1, 2, 2, finishpcall);
	    return finishpcall(L, status, 2);
	};

	const load_aux = function(L, status, envidx) {
	    if (status === LUA_OK$3) {
	        if (envidx !== 0) {  /* 'env' parameter? */
	            lua_pushvalue$9(L, envidx);  /* environment for loaded function */
	            if (!lua_setupvalue$1(L, -2, 1))  /* set it as 1st upvalue */
	                lua_pop$9(L, 1);  /* remove 'env' if not used by previous call */
	        }
	        return 1;
	    } else {  /* error (message is on top of the stack) */
	        lua_pushnil$9(L);
	        lua_insert$4(L, -2);  /* put before error message */
	        return 2;  /* return nil plus error message */
	    }
	};

	/*
	** reserved slot, above all arguments, to hold a copy of the returned
	** string to avoid it being collected while parsed. 'load' has four
	** optional arguments (chunk, source name, mode, and environment).
	*/
	const RESERVEDSLOT = 5;

	/*
	** Reader for generic 'load' function: 'lua_load' uses the
	** stack for internal stuff, so the reader cannot change the
	** stack top. Instead, it keeps its resulting string in a
	** reserved slot inside the stack.
	*/
	const generic_reader = function(L, ud) {
	    luaL_checkstack$3(L, 2, "too many nested functions");
	    lua_pushvalue$9(L, 1);  /* get function */
	    lua_call$4(L, 0, 1);  /* call it */
	    if (lua_isnil$3(L, -1)) {
	        lua_pop$9(L, 1);  /* pop result */
	        return null;
	    } else if (!lua_isstring$3(L, -1))
	        luaL_error$9(L, to_luastring$b("reader function must return a string"));
	    lua_replace(L, RESERVEDSLOT);  /* save string in reserved slot */
	    return lua_tostring$4(L, RESERVEDSLOT);
	};

	const luaB_load = function(L) {
	    let s = lua_tostring$4(L, 1);
	    let mode = luaL_optstring$4(L, 3, "bt");
	    let env = !lua_isnone$1(L, 4) ? 4 : 0;  /* 'env' index or 0 if no 'env' */
	    let status;
	    if (s !== null) {  /* loading a string? */
	        let chunkname = luaL_optstring$4(L, 2, s);
	        status = luaL_loadbufferx(L, s, s.length, chunkname, mode);
	    } else {  /* loading from a reader function */
	        let chunkname = luaL_optstring$4(L, 2, "=(load)");
	        luaL_checktype$5(L, 1, LUA_TFUNCTION$5);
	        lua_settop$7(L, RESERVEDSLOT);  /* create reserved slot */
	        status = lua_load(L, generic_reader, null, chunkname, mode);
	    }
	    return load_aux(L, status, env);
	};

	const luaB_loadfile = function(L) {
	    let fname = luaL_optstring$4(L, 1, null);
	    let mode = luaL_optstring$4(L, 2, null);
	    let env = !lua_isnone$1(L, 3) ? 3 : 0;  /* 'env' index or 0 if no 'env' */
	    let status = luaL_loadfilex(L, fname, mode);
	    return load_aux(L, status, env);
	};

	const dofilecont = function(L, d1, d2) {
	    return lua_gettop$7(L) - 1;
	};

	const luaB_dofile = function(L) {
	    let fname = luaL_optstring$4(L, 1, null);
	    lua_settop$7(L, 1);
	    if (luaL_loadfile$1(L, fname) !== LUA_OK$3)
	        return lua_error$1(L);
	    lua_callk$1(L, 0, LUA_MULTRET$1, 0, dofilecont);
	    return dofilecont(L);
	};

	const base_funcs = {
	    "assert":         luaB_assert,
	    "collectgarbage": luaB_collectgarbage,
	    "dofile":         luaB_dofile,
	    "error":          luaB_error,
	    "getmetatable":   luaB_getmetatable,
	    "ipairs":         luaB_ipairs,
	    "load":           luaB_load,
	    "loadfile":       luaB_loadfile,
	    "next":           luaB_next,
	    "pairs":          luaB_pairs,
	    "pcall":          luaB_pcall,
	    "print":          luaB_print,
	    "rawequal":       luaB_rawequal,
	    "rawget":         luaB_rawget,
	    "rawlen":         luaB_rawlen,
	    "rawset":         luaB_rawset,
	    "select":         luaB_select,
	    "setmetatable":   luaB_setmetatable,
	    "tonumber":       luaB_tonumber,
	    "tostring":       luaB_tostring,
	    "type":           luaB_type,
	    "xpcall":         luaB_xpcall
	};

	const luaopen_base$2 = function(L) {
	    /* open lib into global table */
	    lua_pushglobaltable$1(L);
	    luaL_setfuncs$3(L, base_funcs, 0);
	    /* set global _G */
	    lua_pushvalue$9(L, -1);
	    lua_setfield$a(L, -2, to_luastring$b("_G"));
	    /* set global _VERSION */
	    lua_pushliteral$9(L, LUA_VERSION);
	    lua_setfield$a(L, -2, to_luastring$b("_VERSION"));
	    return 1;
	};

	lbaselib.luaopen_base = luaopen_base$2;

	var lcorolib = {};

	const {
	    LUA_OK: LUA_OK$2,
	    LUA_TFUNCTION: LUA_TFUNCTION$4,
	    LUA_TSTRING: LUA_TSTRING$2,
	    LUA_YIELD,
	    lua_Debug: lua_Debug$1,
	    lua_checkstack: lua_checkstack$2,
	    lua_concat,
	    lua_error,
	    lua_getstack: lua_getstack$1,
	    lua_gettop: lua_gettop$6,
	    lua_insert: lua_insert$3,
	    lua_isyieldable,
	    lua_newthread,
	    lua_pop: lua_pop$8,
	    lua_pushboolean: lua_pushboolean$5,
	    lua_pushcclosure: lua_pushcclosure$2,
	    lua_pushliteral: lua_pushliteral$8,
	    lua_pushthread,
	    lua_pushvalue: lua_pushvalue$8,
	    lua_resume,
	    lua_status,
	    lua_tothread: lua_tothread$2,
	    lua_type: lua_type$5,
	    lua_upvalueindex: lua_upvalueindex$2,
	    lua_xmove: lua_xmove$1,
	    lua_yield
	} = lua$2;
	const {
	    luaL_argcheck: luaL_argcheck$5,
	    luaL_checktype: luaL_checktype$4,
	    luaL_newlib: luaL_newlib$a,
	    luaL_where
	} = lauxlib$2;

	const getco = function(L) {
	    let co = lua_tothread$2(L, 1);
	    luaL_argcheck$5(L, co, 1, "thread expected");
	    return co;
	};

	const auxresume = function(L, co, narg) {
	    if (!lua_checkstack$2(co, narg)) {
	        lua_pushliteral$8(L, "too many arguments to resume");
	        return -1;  /* error flag */
	    }

	    if (lua_status(co) === LUA_OK$2 && lua_gettop$6(co) === 0) {
	        lua_pushliteral$8(L, "cannot resume dead coroutine");
	        return -1;  /* error flag */
	    }

	    lua_xmove$1(L, co, narg);
	    let status = lua_resume(co, L, narg);
	    if (status === LUA_OK$2 || status === LUA_YIELD) {
	        let nres = lua_gettop$6(co);
	        if (!lua_checkstack$2(L, nres + 1)) {
	            lua_pop$8(co, nres);  /* remove results anyway */
	            lua_pushliteral$8(L, "too many results to resume");
	            return -1;  /* error flag */
	        }

	        lua_xmove$1(co,  L, nres);  /* move yielded values */
	        return nres;
	    } else {
	        lua_xmove$1(co, L, 1);  /* move error message */
	        return -1;  /* error flag */
	    }
	};

	const luaB_coresume = function(L) {
	    let co = getco(L);
	    let r = auxresume(L, co, lua_gettop$6(L) - 1);
	    if (r < 0) {
	        lua_pushboolean$5(L, 0);
	        lua_insert$3(L, -2);
	        return 2;  /* return false + error message */
	    } else {
	        lua_pushboolean$5(L, 1);
	        lua_insert$3(L, -(r + 1));
	        return r + 1;  /* return true + 'resume' returns */
	    }
	};

	const luaB_auxwrap = function(L) {
	    let co = lua_tothread$2(L, lua_upvalueindex$2(1));
	    let r = auxresume(L, co, lua_gettop$6(L));
	    if (r < 0) {
	        if (lua_type$5(L, -1) === LUA_TSTRING$2) {  /* error object is a string? */
	            luaL_where(L, 1);  /* add extra info */
	            lua_insert$3(L, -2);
	            lua_concat(L, 2);
	        }

	        return lua_error(L);  /* propagate error */
	    }

	    return r;
	};

	const luaB_cocreate = function(L) {
	    luaL_checktype$4(L, 1, LUA_TFUNCTION$4);
	    let NL = lua_newthread(L);
	    lua_pushvalue$8(L, 1);  /* move function to top */
	    lua_xmove$1(L, NL, 1);  /* move function from L to NL */
	    return 1;
	};

	const luaB_cowrap = function(L) {
	    luaB_cocreate(L);
	    lua_pushcclosure$2(L, luaB_auxwrap, 1);
	    return 1;
	};

	const luaB_yield = function(L) {
	    return lua_yield(L, lua_gettop$6(L));
	};

	const luaB_costatus = function(L) {
	    let co = getco(L);
	    if (L === co) lua_pushliteral$8(L, "running");
	    else {
	        switch (lua_status(co)) {
	            case LUA_YIELD:
	                lua_pushliteral$8(L, "suspended");
	                break;
	            case LUA_OK$2: {
	                let ar = new lua_Debug$1();
	                if (lua_getstack$1(co, 0, ar) > 0)  /* does it have frames? */
	                    lua_pushliteral$8(L, "normal");  /* it is running */
	                else if (lua_gettop$6(co) === 0)
	                    lua_pushliteral$8(L, "dead");
	                else
	                    lua_pushliteral$8(L, "suspended");  /* initial state */
	                break;
	            }
	            default:  /* some error occurred */
	                lua_pushliteral$8(L, "dead");
	                break;
	        }
	    }

	    return 1;
	};

	const luaB_yieldable = function(L) {
	    lua_pushboolean$5(L, lua_isyieldable(L));
	    return 1;
	};

	const luaB_corunning = function(L) {
	    lua_pushboolean$5(L, lua_pushthread(L));
	    return 2;
	};

	const co_funcs = {
	    "create":      luaB_cocreate,
	    "isyieldable": luaB_yieldable,
	    "resume":      luaB_coresume,
	    "running":     luaB_corunning,
	    "status":      luaB_costatus,
	    "wrap":        luaB_cowrap,
	    "yield":       luaB_yield
	};

	const luaopen_coroutine$1 = function(L) {
	    luaL_newlib$a(L, co_funcs);
	    return 1;
	};

	lcorolib.luaopen_coroutine = luaopen_coroutine$1;

	var ltablib = {};

	const { LUA_MAXINTEGER: LUA_MAXINTEGER$1 } = luaconf$1;
	const {
	    LUA_OPEQ,
	    LUA_OPLT: LUA_OPLT$1,
	    LUA_TFUNCTION: LUA_TFUNCTION$3,
	    LUA_TNIL: LUA_TNIL$5,
	    LUA_TTABLE: LUA_TTABLE$5,
	    lua_call: lua_call$3,
	    lua_checkstack: lua_checkstack$1,
	    lua_compare: lua_compare$1,
	    lua_createtable: lua_createtable$3,
	    lua_geti,
	    lua_getmetatable: lua_getmetatable$1,
	    lua_gettop: lua_gettop$5,
	    lua_insert: lua_insert$2,
	    lua_isnil: lua_isnil$2,
	    lua_isnoneornil: lua_isnoneornil$4,
	    lua_isstring: lua_isstring$2,
	    lua_pop: lua_pop$7,
	    lua_pushinteger: lua_pushinteger$7,
	    lua_pushnil: lua_pushnil$8,
	    lua_pushstring: lua_pushstring$7,
	    lua_pushvalue: lua_pushvalue$7,
	    lua_rawget,
	    lua_setfield: lua_setfield$9,
	    lua_seti,
	    lua_settop: lua_settop$6,
	    lua_toboolean: lua_toboolean$4,
	    lua_type: lua_type$4
	} = lua$2;
	const {
	    luaL_Buffer: luaL_Buffer$4,
	    luaL_addlstring: luaL_addlstring$1,
	    luaL_addvalue: luaL_addvalue$3,
	    luaL_argcheck: luaL_argcheck$4,
	    luaL_buffinit: luaL_buffinit$4,
	    luaL_checkinteger: luaL_checkinteger$5,
	    luaL_checktype: luaL_checktype$3,
	    luaL_error: luaL_error$8,
	    luaL_len: luaL_len$1,
	    luaL_newlib: luaL_newlib$9,
	    luaL_opt,
	    luaL_optinteger: luaL_optinteger$4,
	    luaL_optlstring: luaL_optlstring$1,
	    luaL_pushresult: luaL_pushresult$4,
	    luaL_typename: luaL_typename$1
	} = lauxlib$2;
	const lualib$7 = lualib$8;
	const { to_luastring: to_luastring$a } = fengaricore;

	/*
	** Operations that an object must define to mimic a table
	** (some functions only need some of them)
	*/
	const TAB_R  = 1;               /* read */
	const TAB_W  = 2;               /* write */
	const TAB_L  = 4;               /* length */
	const TAB_RW = (TAB_R | TAB_W); /* read/write */

	const checkfield = function(L, key, n) {
	    lua_pushstring$7(L, key);
	    return lua_rawget(L, -n) !== LUA_TNIL$5;
	};

	/*
	** Check that 'arg' either is a table or can behave like one (that is,
	** has a metatable with the required metamethods)
	*/
	const checktab = function(L, arg, what) {
	    if (lua_type$4(L, arg) !== LUA_TTABLE$5) {  /* is it not a table? */
	        let n = 1;
	        if (lua_getmetatable$1(L, arg) &&  /* must have metatable */
	            (!(what & TAB_R) || checkfield(L, to_luastring$a("__index", true), ++n)) &&
	            (!(what & TAB_W) || checkfield(L, to_luastring$a("__newindex", true), ++n)) &&
	            (!(what & TAB_L) || checkfield(L, to_luastring$a("__len", true), ++n))) {
	            lua_pop$7(L, n);  /* pop metatable and tested metamethods */
	        }
	        else
	            luaL_checktype$3(L, arg, LUA_TTABLE$5);  /* force an error */
	    }
	};

	const aux_getn = function(L, n, w) {
	    checktab(L, n, w | TAB_L);
	    return luaL_len$1(L, n);
	};

	const addfield = function(L, b, i) {
	    lua_geti(L, 1, i);
	    if (!lua_isstring$2(L, -1))
	        luaL_error$8(L, to_luastring$a("invalid value (%s) at index %d in table for 'concat'"),
	            luaL_typename$1(L, -1), i);

	    luaL_addvalue$3(b);
	};

	const tinsert = function(L) {
	    let e = aux_getn(L, 1, TAB_RW) + 1;  /* first empty element */
	    let pos;
	    switch (lua_gettop$5(L)) {
	        case 2:
	            pos = e;
	            break;
	        case 3: {
	            pos = luaL_checkinteger$5(L, 2);  /* 2nd argument is the position */
	            luaL_argcheck$4(L, 1 <= pos && pos <= e, 2, "position out of bounds");
	            for (let i = e; i > pos; i--) {  /* move up elements */
	                lua_geti(L, 1, i - 1);
	                lua_seti(L, 1, i);  /* t[i] = t[i - 1] */
	            }
	            break;
	        }
	        default: {
	            return luaL_error$8(L, "wrong number of arguments to 'insert'");
	        }
	    }

	    lua_seti(L, 1, pos);  /* t[pos] = v */
	    return 0;
	};

	const tremove = function(L) {
	    let size = aux_getn(L, 1, TAB_RW);
	    let pos = luaL_optinteger$4(L, 2, size);
	    if (pos !== size)  /* validate 'pos' if given */
	        luaL_argcheck$4(L, 1 <= pos && pos <= size + 1, 1, "position out of bounds");
	    lua_geti(L, 1, pos);  /* result = t[pos] */
	    for (; pos < size; pos++) {
	        lua_geti(L, 1, pos + 1);
	        lua_seti(L, 1, pos);  /* t[pos] = t[pos + 1] */
	    }
	    lua_pushnil$8(L);
	    lua_seti(L, 1, pos);  /* t[pos] = nil */
	    return 1;
	};

	/*
	** Copy elements (1[f], ..., 1[e]) into (tt[t], tt[t+1], ...). Whenever
	** possible, copy in increasing order, which is better for rehashing.
	** "possible" means destination after original range, or smaller
	** than origin, or copying to another table.
	*/
	const tmove = function(L) {
	    let f = luaL_checkinteger$5(L, 2);
	    let e = luaL_checkinteger$5(L, 3);
	    let t = luaL_checkinteger$5(L, 4);
	    let tt = !lua_isnoneornil$4(L, 5) ? 5 : 1;  /* destination table */
	    checktab(L, 1, TAB_R);
	    checktab(L, tt, TAB_W);
	    if (e >= f) {  /* otherwise, nothing to move */
	        luaL_argcheck$4(L, f > 0 || e < LUA_MAXINTEGER$1 + f, 3, "too many elements to move");
	        let n = e - f + 1;  /* number of elements to move */
	        luaL_argcheck$4(L, t <= LUA_MAXINTEGER$1 - n + 1, 4, "destination wrap around");

	        if (t > e || t <= f || (tt !== 1 && lua_compare$1(L, 1, tt, LUA_OPEQ) !== 1)) {
	            for (let i = 0; i < n; i++) {
	                lua_geti(L, 1, f + i);
	                lua_seti(L, tt, t + i);
	            }
	        } else {
	            for (let i = n - 1; i >= 0; i--) {
	                lua_geti(L, 1, f + i);
	                lua_seti(L, tt, t + i);
	            }
	        }
	    }

	    lua_pushvalue$7(L, tt);  /* return destination table */
	    return 1;
	};

	const tconcat = function(L) {
	    let last = aux_getn(L, 1, TAB_R);
	    let sep = luaL_optlstring$1(L, 2, "");
	    let lsep = sep.length;
	    let i = luaL_optinteger$4(L, 3, 1);
	    last = luaL_optinteger$4(L, 4, last);

	    let b = new luaL_Buffer$4();
	    luaL_buffinit$4(L, b);

	    for (; i < last; i++) {
	        addfield(L, b, i);
	        luaL_addlstring$1(b, sep, lsep);
	    }

	    if (i === last)
	        addfield(L, b, i);

	    luaL_pushresult$4(b);

	    return 1;
	};

	const pack = function(L) {
	    let n = lua_gettop$5(L);  /* number of elements to pack */
	    lua_createtable$3(L, n, 1);  /* create result table */
	    lua_insert$2(L, 1);  /* put it at index 1 */
	    for (let i = n; i >= 1; i--)  /* assign elements */
	        lua_seti(L, 1, i);
	    lua_pushinteger$7(L, n);
	    lua_setfield$9(L, 1, to_luastring$a("n"));  /* t.n = number of elements */
	    return 1;  /* return table */
	};

	const unpack = function(L) {
	    let i = luaL_optinteger$4(L, 2, 1);
	    let e = luaL_opt(L, luaL_checkinteger$5, 3, luaL_len$1(L, 1));
	    if (i > e) return 0;  /* empty range */
	    let n = e - i;  /* number of elements minus 1 (avoid overflows) */
	    if (n >= Number.MAX_SAFE_INTEGER || !lua_checkstack$1(L, ++n))
	        return luaL_error$8(L, to_luastring$a("too many results to unpack"));
	    for (; i < e; i++)  /* push arg[i..e - 1] (to avoid overflows) */
	        lua_geti(L, 1, i);
	    lua_geti(L, 1, e);  /* push last element */
	    return n;
	};

	const l_randomizePivot = function() {
	    return Math.floor(Math.random()*0x100000000);
	};

	const RANLIMIT = 100;

	const set2 = function(L, i, j) {
	    lua_seti(L, 1, i);
	    lua_seti(L, 1, j);
	};

	const sort_comp = function(L, a, b) {
	    if (lua_isnil$2(L, 2))  /* no function? */
	        return lua_compare$1(L, a, b, LUA_OPLT$1);  /* a < b */
	    else {  /* function */
	        lua_pushvalue$7(L, 2);    /* push function */
	        lua_pushvalue$7(L, a-1);  /* -1 to compensate function */
	        lua_pushvalue$7(L, b-2);  /* -2 to compensate function and 'a' */
	        lua_call$3(L, 2, 1);      /* call function */
	        let res = lua_toboolean$4(L, -1);  /* get result */
	        lua_pop$7(L, 1);          /* pop result */
	        return res;
	    }
	};

	const partition = function(L, lo, up) {
	    let i = lo;  /* will be incremented before first use */
	    let j = up - 1;  /* will be decremented before first use */
	    /* loop invariant: a[lo .. i] <= P <= a[j .. up] */
	    for (;;) {
	        /* next loop: repeat ++i while a[i] < P */
	        while (lua_geti(L, 1, ++i), sort_comp(L, -1, -2)) {
	            if (i == up - 1)  /* a[i] < P  but a[up - 1] == P  ?? */
	                luaL_error$8(L, to_luastring$a("invalid order function for sorting"));
	            lua_pop$7(L, 1);  /* remove a[i] */
	        }
	        /* after the loop, a[i] >= P and a[lo .. i - 1] < P */
	        /* next loop: repeat --j while P < a[j] */
	        while (lua_geti(L, 1, --j), sort_comp(L, -3, -1)) {
	            if (j < i)  /* j < i  but  a[j] > P ?? */
	                luaL_error$8(L, to_luastring$a("invalid order function for sorting"));
	            lua_pop$7(L, 1);  /* remove a[j] */
	        }
	        /* after the loop, a[j] <= P and a[j + 1 .. up] >= P */
	        if (j < i) {  /* no elements out of place? */
	            /* a[lo .. i - 1] <= P <= a[j + 1 .. i .. up] */
	            lua_pop$7(L, 1);  /* pop a[j] */
	            /* swap pivot (a[up - 1]) with a[i] to satisfy pos-condition */
	            set2(L, up - 1, i);
	            return i;
	        }
	        /* otherwise, swap a[i] - a[j] to restore invariant and repeat */
	        set2(L, i, j);
	    }
	};

	const choosePivot = function(lo, up, rnd) {
	    let r4 = Math.floor((up - lo) / 4);  /* range/4 */
	    let p = rnd % (r4 * 2) + (lo + r4);
	    lualib$7.lua_assert(lo + r4 <= p && p <= up - r4);
	    return p;
	};

	const auxsort = function(L, lo, up, rnd) {
	    while (lo < up) {  /* loop for tail recursion */
	        /* sort elements 'lo', 'p', and 'up' */
	        lua_geti(L, 1, lo);
	        lua_geti(L, 1, up);
	        if (sort_comp(L, -1, -2))  /* a[up] < a[lo]? */
	            set2(L, lo, up);  /* swap a[lo] - a[up] */
	        else
	            lua_pop$7(L, 2);  /* remove both values */
	        if (up - lo == 1)  /* only 2 elements? */
	            return;  /* already sorted */
	        let p;  /* Pivot index */
	        if (up - lo < RANLIMIT || rnd === 0)  /* small interval or no randomize? */
	            p = Math.floor((lo + up)/2);  /* middle element is a good pivot */
	        else  /* for larger intervals, it is worth a random pivot */
	            p = choosePivot(lo, up, rnd);
	        lua_geti(L, 1, p);
	        lua_geti(L, 1, lo);
	        if (sort_comp(L, -2, -1))  /* a[p] < a[lo]? */
	            set2(L, p, lo);  /* swap a[p] - a[lo] */
	        else {
	            lua_pop$7(L, 1);  /* remove a[lo] */
	            lua_geti(L, 1, up);
	            if (sort_comp(L, -1, -2))  /* a[up] < a[p]? */
	                set2(L, p, up);  /* swap a[up] - a[p] */
	            else
	                lua_pop$7(L, 2);
	        }
	        if (up - lo == 2)  /* only 3 elements? */
	            return;  /* already sorted */
	        lua_geti(L, 1, p);  /* get middle element (Pivot) */
	        lua_pushvalue$7(L, -1);  /* push Pivot */
	        lua_geti(L, 1, up - 1);  /* push a[up - 1] */
	        set2(L, p, up - 1);  /* swap Pivot (a[p]) with a[up - 1] */
	        p = partition(L, lo, up);
	        let n;
	        /* a[lo .. p - 1] <= a[p] == P <= a[p + 1 .. up] */
	        if (p - lo < up - p) {  /* lower interval is smaller? */
	            auxsort(L, lo, p - 1, rnd);  /* call recursively for lower interval */
	            n = p - lo;  /* size of smaller interval */
	            lo = p + 1;  /* tail call for [p + 1 .. up] (upper interval) */
	        } else {
	            auxsort(L, p + 1, up, rnd);  /* call recursively for upper interval */
	            n = up - p;  /* size of smaller interval */
	            up = p - 1;  /* tail call for [lo .. p - 1]  (lower interval) */
	        }
	        if ((up - lo) / 128 > n) /* partition too imbalanced? */
	            rnd = l_randomizePivot();  /* try a new randomization */
	    }  /* tail call auxsort(L, lo, up, rnd) */
	};

	const sort = function(L) {
	    let n = aux_getn(L, 1, TAB_RW);
	    if (n > 1) {  /* non-trivial interval? */
	        luaL_argcheck$4(L, n < LUA_MAXINTEGER$1, 1, "array too big");
	        if (!lua_isnoneornil$4(L, 2))  /* is there a 2nd argument? */
	            luaL_checktype$3(L, 2, LUA_TFUNCTION$3);  /* must be a function */
	        lua_settop$6(L, 2);  /* make sure there are two arguments */
	        auxsort(L, 1, n, 0);
	    }
	    return 0;
	};

	const tab_funcs = {
	    "concat": tconcat,
	    "insert": tinsert,
	    "move":   tmove,
	    "pack":   pack,
	    "remove": tremove,
	    "sort":   sort,
	    "unpack": unpack
	};

	const luaopen_table$1 = function(L) {
	    luaL_newlib$9(L, tab_funcs);
	    return 1;
	};

	ltablib.luaopen_table = luaopen_table$1;

	var liolib = {};

	const fs$1      = require$$0__default["default"];

	const {
	    LUA_REGISTRYINDEX: LUA_REGISTRYINDEX$3,
	    lua_getfield: lua_getfield$3,
	    lua_gettop: lua_gettop$4,
	    lua_isnone,
	    lua_isnoneornil: lua_isnoneornil$3,
	    lua_newuserdata: lua_newuserdata$1,
	    lua_pop: lua_pop$6,
	    lua_pushliteral: lua_pushliteral$7,
	    lua_pushnil: lua_pushnil$7,
	    lua_pushstring: lua_pushstring$6,
	    lua_pushvalue: lua_pushvalue$6,
	    lua_setfield: lua_setfield$8,
	    lua_tostring: lua_tostring$3,
	    lua_touserdata: lua_touserdata$4
	} = lua$2;
	const {
	    LUA_FILEHANDLE,
	    luaL_checkany: luaL_checkany$3,
	    luaL_checklstring,
	    luaL_checkudata: luaL_checkudata$1,
	    luaL_error: luaL_error$7,
	    luaL_fileresult: luaL_fileresult$1,
	    luaL_newlib: luaL_newlib$8,
	    luaL_newmetatable: luaL_newmetatable$1,
	    luaL_setfuncs: luaL_setfuncs$2,
	    luaL_setmetatable: luaL_setmetatable$1,
	    luaL_testudata: luaL_testudata$1
	} = lauxlib$2;
	const lualib$6 = lualib$8;
	const { to_luastring: to_luastring$9 } = fengaricore;

	const IO_PREFIX = "_IO_";
	const IOPREF_LEN = IO_PREFIX.length;
	const IO_INPUT = to_luastring$9(IO_PREFIX + "input");
	const IO_OUTPUT = to_luastring$9(IO_PREFIX + "output");

	const tolstream = function(L) {
	    return luaL_checkudata$1(L, 1, LUA_FILEHANDLE);
	};

	const isclosed = function(p) {
	    return p.closef === null;
	};

	const io_type = function(L) {
	    luaL_checkany$3(L, 1);
	    let p = luaL_testudata$1(L, 1, LUA_FILEHANDLE);
	    if (p === null)
	        lua_pushnil$7(L);  /* not a file */
	    else if (isclosed(p))
	        lua_pushliteral$7(L, "closed file");
	    else
	        lua_pushliteral$7(L, "file");
	    return 1;
	};

	const f_tostring = function(L) {
	    let p = tolstream(L);
	    if (isclosed(p))
	        lua_pushliteral$7(L, "file (closed)");
	    else
	        lua_pushstring$6(L, to_luastring$9(`file (${p.f.toString()})`));
	    return 1;
	};

	const tofile = function(L) {
	    let p = tolstream(L);
	    if (isclosed(p))
	        luaL_error$7(L, to_luastring$9("attempt to use a closed file"));
	    lualib$6.lua_assert(p.f);
	    return p.f;
	};

	const newprefile = function(L) {
	    let p = lua_newuserdata$1(L);
	    p.f = null;
	    p.closef = null;
	    luaL_setmetatable$1(L, LUA_FILEHANDLE);
	    return p;
	};

	const aux_close = function(L) {
	    let p = tolstream(L);
	    let cf = p.closef;
	    p.closef = null;
	    return cf(L);
	};

	const io_close = function(L) {
	    if (lua_isnone(L, 1))  /* no argument? */
	        lua_getfield$3(L, LUA_REGISTRYINDEX$3, IO_OUTPUT);  /* use standard output */
	    tofile(L);  /* make sure argument is an open stream */
	    return aux_close(L);
	};

	const getiofile = function(L, findex) {
	    lua_getfield$3(L, LUA_REGISTRYINDEX$3, findex);
	    let p = lua_touserdata$4(L, -1);
	    if (isclosed(p))
	        luaL_error$7(L, to_luastring$9("standard %s file is closed"), findex.subarray(IOPREF_LEN));
	    return p.f;
	};

	const g_iofile = function(L, f, mode) {
	    if (!lua_isnoneornil$3(L, 1)) {
	        let filename = lua_tostring$3(L, 1);
	        if (filename)
	            luaL_error$7(L, to_luastring$9("opening files not yet implemented"));
	        else {
	            tofile(L);  /* check that it's a valid file handle */
	            lua_pushvalue$6(L, 1);
	        }
	        lua_setfield$8(L, LUA_REGISTRYINDEX$3, f);
	    }
	    /* return current value */
	    lua_getfield$3(L, LUA_REGISTRYINDEX$3, f);
	    return 1;
	};

	const io_input = function(L) {
	    return g_iofile(L, IO_INPUT);
	};

	const io_output = function(L) {
	    return g_iofile(L, IO_OUTPUT);
	};

	/* node <= 6 doesn't support passing a Uint8Array to fs.writeSync */
	const prepare_string_for_write = process.versions.node > 6 ?
	    (s) => s : // identity function
	    (s) => Buffer.from(s.buffer, s.byteOffset, s.byteLength);

	const g_write = function(L, f, arg) {
	    let nargs = lua_gettop$4(L) - arg;
	    let status = true;
	    let err;
	    for (; nargs--; arg++) {
	        let s = luaL_checklstring(L, arg);
	        try {
	            status = status && (fs$1.writeSync(f.fd, prepare_string_for_write(s), 0, s.length) === s.length);
	        } catch (e) {
	            status = false;
	            err = e;
	        }
	    }
	    if (status) return 1;  /* file handle already on stack top */
	    else return luaL_fileresult$1(L, status, null, err);
	};

	const io_write = function(L) {
	    return g_write(L, getiofile(L, IO_OUTPUT), 1);
	};

	const f_write = function(L) {
	    let f = tofile(L);
	    lua_pushvalue$6(L, 1); /* push file at the stack top (to be returned) */
	    return g_write(L, f, 2);
	};

	const io_flush = function (L) {
	    /* stub, as node doesn't have synchronized buffered IO */
	    getiofile(L, IO_OUTPUT);
	    return luaL_fileresult$1(L, true, null, null);
	};

	const f_flush = function (L) {
	    /* stub, as node doesn't have synchronized buffered IO */
	    tofile(L);
	    return luaL_fileresult$1(L, true, null, null);
	};

	const iolib = {
	    "close": io_close,
	    "flush": io_flush,
	    "input": io_input,
	    "output": io_output,
	    "type": io_type,
	    "write": io_write
	};

	const flib = {
	    "close": io_close,
	    "flush": f_flush,
	    "write": f_write,
	    "__tostring": f_tostring
	};

	const createmeta = function(L) {
	    luaL_newmetatable$1(L, LUA_FILEHANDLE);  /* create metatable for file handles */
	    lua_pushvalue$6(L, -1);  /* push metatable */
	    lua_setfield$8(L, -2, to_luastring$9("__index", true));  /* metatable.__index = metatable */
	    luaL_setfuncs$2(L, flib, 0);  /* add file methods to new metatable */
	    lua_pop$6(L, 1);  /* pop new metatable */
	};

	const io_noclose = function(L) {
	    let p = tolstream(L);
	    p.closef = io_noclose;
	    lua_pushnil$7(L);
	    lua_pushliteral$7(L, "cannot close standard file");
	    return 2;
	};

	const createstdfile = function(L, f, k, fname) {
	    let p = newprefile(L);
	    p.f = f;
	    p.closef = io_noclose;
	    if (k !== null) {
	        lua_pushvalue$6(L, -1);
	        lua_setfield$8(L, LUA_REGISTRYINDEX$3, k);  /* add file to registry */
	    }
	    lua_setfield$8(L, -2, fname);  /* add file to module */
	};

	const luaopen_io = function(L) {
	    luaL_newlib$8(L, iolib);
	    createmeta(L);
	    /* create (and set) default files */
	    createstdfile(L, process.stdin, IO_INPUT, to_luastring$9("stdin"));
	    createstdfile(L, process.stdout, IO_OUTPUT, to_luastring$9("stdout"));
	    createstdfile(L, process.stderr, null, to_luastring$9("stderr"));
	    return 1;
	};

	liolib.luaopen_io = luaopen_io;

	var loslib = {};

	var tmp = {};

	var isWindows = process.platform === 'win32';
	var trailingSlashRe = isWindows ? /[^:]\\$/ : /.\/$/;

	// https://github.com/nodejs/node/blob/3e7a14381497a3b73dda68d05b5130563cdab420/lib/os.js#L25-L43
	var osTmpdir = function () {
		var path;

		if (isWindows) {
			path = process.env.TEMP ||
				process.env.TMP ||
				(process.env.SystemRoot || process.env.windir) + '\\temp';
		} else {
			path = process.env.TMPDIR ||
				process.env.TMP ||
				process.env.TEMP ||
				'/tmp';
		}

		if (trailingSlashRe.test(path)) {
			path = path.slice(0, -1);
		}

		return path;
	};

	/*!
	 * Tmp
	 *
	 * Copyright (c) 2011-2017 KARASZI Istvan <github@spam.raszi.hu>
	 *
	 * MIT Licensed
	 */

	/*
	 * Module dependencies.
	 */
	const fs = require$$0__default["default"];
	const path = require$$1__default$1["default"];
	const crypto = require$$2__default["default"];
	const osTmpDir = osTmpdir;
	const _c = process.binding('constants');

	/*
	 * The working inner variables.
	 */
	const
	  /**
	   * The temporary directory.
	   * @type {string}
	   */
	  tmpDir = osTmpDir(),

	  // the random characters to choose from
	  RANDOM_CHARS = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',

	  TEMPLATE_PATTERN = /XXXXXX/,

	  DEFAULT_TRIES = 3,

	  CREATE_FLAGS = (_c.O_CREAT || _c.fs.O_CREAT) | (_c.O_EXCL || _c.fs.O_EXCL) | (_c.O_RDWR || _c.fs.O_RDWR),

	  EBADF = _c.EBADF || _c.os.errno.EBADF,
	  ENOENT = _c.ENOENT || _c.os.errno.ENOENT,

	  DIR_MODE = 448 /* 0o700 */,
	  FILE_MODE = 384 /* 0o600 */,

	  // this will hold the objects need to be removed on exit
	  _removeObjects = [];

	var
	  _gracefulCleanup = false,
	  _uncaughtException = false;

	/**
	 * Random name generator based on crypto.
	 * Adapted from http://blog.tompawlak.org/how-to-generate-random-values-nodejs-javascript
	 *
	 * @param {number} howMany
	 * @returns {string} the generated random name
	 * @private
	 */
	function _randomChars(howMany) {
	  var
	    value = [],
	    rnd = null;

	  // make sure that we do not fail because we ran out of entropy
	  try {
	    rnd = crypto.randomBytes(howMany);
	  } catch (e) {
	    rnd = crypto.pseudoRandomBytes(howMany);
	  }

	  for (var i = 0; i < howMany; i++) {
	    value.push(RANDOM_CHARS[rnd[i] % RANDOM_CHARS.length]);
	  }

	  return value.join('');
	}

	/**
	 * Checks whether the `obj` parameter is defined or not.
	 *
	 * @param {Object} obj
	 * @returns {boolean} true if the object is undefined
	 * @private
	 */
	function _isUndefined(obj) {
	  return typeof obj === 'undefined';
	}

	/**
	 * Parses the function arguments.
	 *
	 * This function helps to have optional arguments.
	 *
	 * @param {(Options|Function)} options
	 * @param {Function} callback
	 * @returns {Array} parsed arguments
	 * @private
	 */
	function _parseArguments(options, callback) {
	  if (typeof options == 'function') {
	    return [callback || {}, options];
	  }

	  if (_isUndefined(options)) {
	    return [{}, callback];
	  }

	  return [options, callback];
	}

	/**
	 * Generates a new temporary name.
	 *
	 * @param {Object} opts
	 * @returns {string} the new random name according to opts
	 * @private
	 */
	function _generateTmpName(opts) {
	  if (opts.name) {
	    return path.join(opts.dir || tmpDir, opts.name);
	  }

	  // mkstemps like template
	  if (opts.template) {
	    return opts.template.replace(TEMPLATE_PATTERN, _randomChars(6));
	  }

	  // prefix and postfix
	  const name = [
	    opts.prefix || 'tmp-',
	    process.pid,
	    _randomChars(12),
	    opts.postfix || ''
	  ].join('');

	  return path.join(opts.dir || tmpDir, name);
	}

	/**
	 * Gets a temporary file name.
	 *
	 * @param {(Options|tmpNameCallback)} options options or callback
	 * @param {?tmpNameCallback} callback the callback function
	 */
	function tmpName(options, callback) {
	  var
	    args = _parseArguments(options, callback),
	    opts = args[0],
	    cb = args[1],
	    tries = opts.name ? 1 : opts.tries || DEFAULT_TRIES;

	  if (isNaN(tries) || tries < 0)
	    return cb(new Error('Invalid tries'));

	  if (opts.template && !opts.template.match(TEMPLATE_PATTERN))
	    return cb(new Error('Invalid template provided'));

	  (function _getUniqueName() {
	    const name = _generateTmpName(opts);

	    // check whether the path exists then retry if needed
	    fs.stat(name, function (err) {
	      if (!err) {
	        if (tries-- > 0) return _getUniqueName();

	        return cb(new Error('Could not get a unique tmp filename, max tries reached ' + name));
	      }

	      cb(null, name);
	    });
	  }());
	}

	/**
	 * Synchronous version of tmpName.
	 *
	 * @param {Object} options
	 * @returns {string} the generated random name
	 * @throws {Error} if the options are invalid or could not generate a filename
	 */
	function tmpNameSync(options) {
	  var
	    args = _parseArguments(options),
	    opts = args[0],
	    tries = opts.name ? 1 : opts.tries || DEFAULT_TRIES;

	  if (isNaN(tries) || tries < 0)
	    throw new Error('Invalid tries');

	  if (opts.template && !opts.template.match(TEMPLATE_PATTERN))
	    throw new Error('Invalid template provided');

	  do {
	    const name = _generateTmpName(opts);
	    try {
	      fs.statSync(name);
	    } catch (e) {
	      return name;
	    }
	  } while (tries-- > 0);

	  throw new Error('Could not get a unique tmp filename, max tries reached');
	}

	/**
	 * Creates and opens a temporary file.
	 *
	 * @param {(Options|fileCallback)} options the config options or the callback function
	 * @param {?fileCallback} callback
	 */
	function file(options, callback) {
	  var
	    args = _parseArguments(options, callback),
	    opts = args[0],
	    cb = args[1];

	  opts.postfix = (_isUndefined(opts.postfix)) ? '.tmp' : opts.postfix;

	  // gets a temporary filename
	  tmpName(opts, function _tmpNameCreated(err, name) {
	    if (err) return cb(err);

	    // create and open the file
	    fs.open(name, CREATE_FLAGS, opts.mode || FILE_MODE, function _fileCreated(err, fd) {
	      if (err) return cb(err);

	      if (opts.discardDescriptor) {
	        return fs.close(fd, function _discardCallback(err) {
	          if (err) {
	            // Low probability, and the file exists, so this could be
	            // ignored.  If it isn't we certainly need to unlink the
	            // file, and if that fails too its error is more
	            // important.
	            try {
	              fs.unlinkSync(name);
	            } catch (e) {
	              if (!isENOENT(e)) {
	                err = e;
	              }
	            }
	            return cb(err);
	          }
	          cb(null, name, undefined, _prepareTmpFileRemoveCallback(name, -1, opts));
	        });
	      }
	      if (opts.detachDescriptor) {
	        return cb(null, name, fd, _prepareTmpFileRemoveCallback(name, -1, opts));
	      }
	      cb(null, name, fd, _prepareTmpFileRemoveCallback(name, fd, opts));
	    });
	  });
	}

	/**
	 * Synchronous version of file.
	 *
	 * @param {Options} options
	 * @returns {FileSyncObject} object consists of name, fd and removeCallback
	 * @throws {Error} if cannot create a file
	 */
	function fileSync(options) {
	  var
	    args = _parseArguments(options),
	    opts = args[0];

	  opts.postfix = opts.postfix || '.tmp';

	  const discardOrDetachDescriptor = opts.discardDescriptor || opts.detachDescriptor;
	  const name = tmpNameSync(opts);
	  var fd = fs.openSync(name, CREATE_FLAGS, opts.mode || FILE_MODE);
	  if (opts.discardDescriptor) {
	    fs.closeSync(fd); 
	    fd = undefined;
	  }

	  return {
	    name: name,
	    fd: fd,
	    removeCallback: _prepareTmpFileRemoveCallback(name, discardOrDetachDescriptor ? -1 : fd, opts)
	  };
	}

	/**
	 * Removes files and folders in a directory recursively.
	 *
	 * @param {string} root
	 * @private
	 */
	function _rmdirRecursiveSync(root) {
	  const dirs = [root];

	  do {
	    var
	      dir = dirs.pop(),
	      deferred = false,
	      files = fs.readdirSync(dir);

	    for (var i = 0, length = files.length; i < length; i++) {
	      var
	        file = path.join(dir, files[i]),
	        stat = fs.lstatSync(file); // lstat so we don't recurse into symlinked directories

	      if (stat.isDirectory()) {
	        if (!deferred) {
	          deferred = true;
	          dirs.push(dir);
	        }
	        dirs.push(file);
	      } else {
	        fs.unlinkSync(file);
	      }
	    }

	    if (!deferred) {
	      fs.rmdirSync(dir);
	    }
	  } while (dirs.length !== 0);
	}

	/**
	 * Creates a temporary directory.
	 *
	 * @param {(Options|dirCallback)} options the options or the callback function
	 * @param {?dirCallback} callback
	 */
	function dir(options, callback) {
	  var
	    args = _parseArguments(options, callback),
	    opts = args[0],
	    cb = args[1];

	  // gets a temporary filename
	  tmpName(opts, function _tmpNameCreated(err, name) {
	    if (err) return cb(err);

	    // create the directory
	    fs.mkdir(name, opts.mode || DIR_MODE, function _dirCreated(err) {
	      if (err) return cb(err);

	      cb(null, name, _prepareTmpDirRemoveCallback(name, opts));
	    });
	  });
	}

	/**
	 * Synchronous version of dir.
	 *
	 * @param {Options} options
	 * @returns {DirSyncObject} object consists of name and removeCallback
	 * @throws {Error} if it cannot create a directory
	 */
	function dirSync(options) {
	  var
	    args = _parseArguments(options),
	    opts = args[0];

	  const name = tmpNameSync(opts);
	  fs.mkdirSync(name, opts.mode || DIR_MODE);

	  return {
	    name: name,
	    removeCallback: _prepareTmpDirRemoveCallback(name, opts)
	  };
	}

	/**
	 * Prepares the callback for removal of the temporary file.
	 *
	 * @param {string} name the path of the file
	 * @param {number} fd file descriptor
	 * @param {Object} opts
	 * @returns {fileCallback}
	 * @private
	 */
	function _prepareTmpFileRemoveCallback(name, fd, opts) {
	  const removeCallback = _prepareRemoveCallback(function _removeCallback(fdPath) {
	    try {
	      if (0 <= fdPath[0]) {
	        fs.closeSync(fdPath[0]);
	      }
	    }
	    catch (e) {
	      // under some node/windows related circumstances, a temporary file
	      // may have not be created as expected or the file was already closed
	      // by the user, in which case we will simply ignore the error
	      if (!isEBADF(e) && !isENOENT(e)) {
	        // reraise any unanticipated error
	        throw e;
	      }
	    }
	    try {
	      fs.unlinkSync(fdPath[1]);
	    }
	    catch (e) {
	      if (!isENOENT(e)) {
	        // reraise any unanticipated error
	        throw e;
	      }
	    }
	  }, [fd, name]);

	  if (!opts.keep) {
	    _removeObjects.unshift(removeCallback);
	  }

	  return removeCallback;
	}

	/**
	 * Prepares the callback for removal of the temporary directory.
	 *
	 * @param {string} name
	 * @param {Object} opts
	 * @returns {Function} the callback
	 * @private
	 */
	function _prepareTmpDirRemoveCallback(name, opts) {
	  const removeFunction = opts.unsafeCleanup ? _rmdirRecursiveSync : fs.rmdirSync.bind(fs);
	  const removeCallback = _prepareRemoveCallback(removeFunction, name);

	  if (!opts.keep) {
	    _removeObjects.unshift(removeCallback);
	  }

	  return removeCallback;
	}

	/**
	 * Creates a guarded function wrapping the removeFunction call.
	 *
	 * @param {Function} removeFunction
	 * @param {Object} arg
	 * @returns {Function}
	 * @private
	 */
	function _prepareRemoveCallback(removeFunction, arg) {
	  var called = false;

	  return function _cleanupCallback(next) {
	    if (!called) {
	      const index = _removeObjects.indexOf(_cleanupCallback);
	      if (index >= 0) {
	        _removeObjects.splice(index, 1);
	      }

	      called = true;
	      removeFunction(arg);
	    }

	    if (next) next(null);
	  };
	}

	/**
	 * The garbage collector.
	 *
	 * @private
	 */
	function _garbageCollector() {
	  if (_uncaughtException && !_gracefulCleanup) {
	    return;
	  }

	  // the function being called removes itself from _removeObjects,
	  // loop until _removeObjects is empty
	  while (_removeObjects.length) {
	    try {
	      _removeObjects[0].call(null);
	    } catch (e) {
	      // already removed?
	    }
	  }
	}

	/**
	 * Helper for testing against EBADF to compensate changes made to Node 7.x under Windows.
	 */
	function isEBADF(error) {
	  return isExpectedError(error, -EBADF, 'EBADF');
	}

	/**
	 * Helper for testing against ENOENT to compensate changes made to Node 7.x under Windows.
	 */
	function isENOENT(error) {
	  return isExpectedError(error, -ENOENT, 'ENOENT');
	}

	/**
	 * Helper to determine whether the expected error code matches the actual code and errno,
	 * which will differ between the supported node versions.
	 *
	 * - Node >= 7.0:
	 *   error.code {String}
	 *   error.errno {String|Number} any numerical value will be negated
	 *
	 * - Node >= 6.0 < 7.0:
	 *   error.code {String}
	 *   error.errno {Number} negated
	 *
	 * - Node >= 4.0 < 6.0: introduces SystemError
	 *   error.code {String}
	 *   error.errno {Number} negated
	 *
	 * - Node >= 0.10 < 4.0:
	 *   error.code {Number} negated
	 *   error.errno n/a
	 */
	function isExpectedError(error, code, errno) {
	  return error.code == code || error.code == errno;
	}

	/**
	 * Sets the graceful cleanup.
	 *
	 * Also removes the created files and directories when an uncaught exception occurs.
	 */
	function setGracefulCleanup() {
	  _gracefulCleanup = true;
	}

	const version = process.versions.node.split('.').map(function (value) {
	  return parseInt(value, 10);
	});

	if (version[0] === 0 && (version[1] < 9 || version[1] === 9 && version[2] < 5)) {
	  process.addListener('uncaughtException', function _uncaughtExceptionThrown(err) {
	    _uncaughtException = true;
	    _garbageCollector();

	    throw err;
	  });
	}

	process.addListener('exit', function _exit(code) {
	  if (code) _uncaughtException = true;
	  _garbageCollector();
	});

	/**
	 * Configuration options.
	 *
	 * @typedef {Object} Options
	 * @property {?number} tries the number of tries before give up the name generation
	 * @property {?string} template the "mkstemp" like filename template
	 * @property {?string} name fix name
	 * @property {?string} dir the tmp directory to use
	 * @property {?string} prefix prefix for the generated name
	 * @property {?string} postfix postfix for the generated name
	 */

	/**
	 * @typedef {Object} FileSyncObject
	 * @property {string} name the name of the file
	 * @property {string} fd the file descriptor
	 * @property {fileCallback} removeCallback the callback function to remove the file
	 */

	/**
	 * @typedef {Object} DirSyncObject
	 * @property {string} name the name of the directory
	 * @property {fileCallback} removeCallback the callback function to remove the directory
	 */

	/**
	 * @callback tmpNameCallback
	 * @param {?Error} err the error object if anything goes wrong
	 * @param {string} name the temporary file name
	 */

	/**
	 * @callback fileCallback
	 * @param {?Error} err the error object if anything goes wrong
	 * @param {string} name the temporary file name
	 * @param {number} fd the file descriptor
	 * @param {cleanupCallback} fn the cleanup callback function
	 */

	/**
	 * @callback dirCallback
	 * @param {?Error} err the error object if anything goes wrong
	 * @param {string} name the temporary file name
	 * @param {cleanupCallback} fn the cleanup callback function
	 */

	/**
	 * Removes the temporary created file or directory.
	 *
	 * @callback cleanupCallback
	 * @param {simpleCallback} [next] function to call after entry was removed
	 */

	/**
	 * Callback function for function composition.
	 * @see {@link https://github.com/raszi/node-tmp/issues/57|raszi/node-tmp#57}
	 *
	 * @callback simpleCallback
	 */

	// exporting all the needed methods
	tmp.tmpdir = tmpDir;

	tmp.dir = dir;
	tmp.dirSync = dirSync;

	tmp.file = file;
	tmp.fileSync = fileSync;

	tmp.tmpName = tmpName;
	tmp.tmpNameSync = tmpNameSync;

	tmp.setGracefulCleanup = setGracefulCleanup;

	const {
	    LUA_TNIL: LUA_TNIL$4,
	    LUA_TTABLE: LUA_TTABLE$4,
	    lua_close,
	    lua_createtable: lua_createtable$2,
	    lua_getfield: lua_getfield$2,
	    lua_isboolean,
	    lua_isnoneornil: lua_isnoneornil$2,
	    lua_pop: lua_pop$5,
	    lua_pushboolean: lua_pushboolean$4,
	    lua_pushfstring: lua_pushfstring$3,
	    lua_pushinteger: lua_pushinteger$6,
	    lua_pushliteral: lua_pushliteral$6,
	    lua_pushnil: lua_pushnil$6,
	    lua_pushnumber: lua_pushnumber$3,
	    lua_pushstring: lua_pushstring$5,
	    lua_setfield: lua_setfield$7,
	    lua_settop: lua_settop$5,
	    lua_toboolean: lua_toboolean$3,
	    lua_tointegerx: lua_tointegerx$1
	} = lua$2;
	const {
	    luaL_Buffer: luaL_Buffer$3,
	    luaL_addchar: luaL_addchar$1,
	    luaL_addstring: luaL_addstring$1,
	    // luaL_argcheck,
	    luaL_argerror: luaL_argerror$4,
	    luaL_buffinit: luaL_buffinit$3,
	    luaL_checkinteger: luaL_checkinteger$4,
	    luaL_checkstring: luaL_checkstring$4,
	    luaL_checktype: luaL_checktype$2,
	    luaL_error: luaL_error$6,
	    luaL_execresult,
	    luaL_fileresult,
	    luaL_newlib: luaL_newlib$7,
	    luaL_optinteger: luaL_optinteger$3,
	    luaL_optlstring,
	    luaL_optstring: luaL_optstring$3,
	    luaL_pushresult: luaL_pushresult$3
	} = lauxlib$2;
	const {
	    luastring_eq: luastring_eq$1,
	    to_jsstring: to_jsstring$2,
	    to_luastring: to_luastring$8
	} = fengaricore;

	/* options for ANSI C 89 (only 1-char options) */
	// const L_STRFTIMEC89 = to_luastring("aAbBcdHIjmMpSUwWxXyYZ%");
	// const LUA_STRFTIMEOPTIONS = L_STRFTIMEC89;

	/* options for ISO C 99 and POSIX */
	// const L_STRFTIMEC99 = to_luastring("aAbBcCdDeFgGhHIjmMnprRStTuUVwWxXyYzZ%||EcECExEXEyEYOdOeOHOIOmOMOSOuOUOVOwOWOy");  /* two-char options */
	// const LUA_STRFTIMEOPTIONS = L_STRFTIMEC99;

	/* options for Windows */
	// const L_STRFTIMEWIN = to_luastring("aAbBcdHIjmMpSUwWxXyYzZ%||#c#x#d#H#I#j#m#M#S#U#w#W#y#Y");  /* two-char options */
	// const LUA_STRFTIMEOPTIONS = L_STRFTIMEWIN;

	/* options for our own strftime implementation
	  - should be superset of C89 options for compat
	  - missing from C99:
	      - ISO 8601 week specifiers: gGV
	      - > single char specifiers
	  - beyond C99:
	      - %k: TZ extension: space-padded 24-hour
	      - %l: TZ extension: space-padded 12-hour
	      - %P: GNU extension: lower-case am/pm
	*/
	const LUA_STRFTIMEOPTIONS = to_luastring$8("aAbBcCdDeFhHIjklmMnpPrRStTuUwWxXyYzZ%");


	const setfield = function(L, key, value) {
	    lua_pushinteger$6(L, value);
	    lua_setfield$7(L, -2, to_luastring$8(key, true));
	};

	const setallfields = function(L, time, utc) {
	    setfield(L, "sec",   utc ? time.getUTCSeconds()  : time.getSeconds());
	    setfield(L, "min",   utc ? time.getUTCMinutes()  : time.getMinutes());
	    setfield(L, "hour",  utc ? time.getUTCHours()    : time.getHours());
	    setfield(L, "day",   utc ? time.getUTCDate()     : time.getDate());
	    setfield(L, "month", (utc ? time.getUTCMonth()   : time.getMonth()) + 1);
	    setfield(L, "year",  utc ? time.getUTCFullYear() : time.getFullYear());
	    setfield(L, "wday",  (utc ? time.getUTCDay()     : time.getDay()) + 1);
	    setfield(L, "yday", Math.floor((time - (new Date(time.getFullYear(), 0, 0 /* shortcut to correct day by one */))) / 86400000));
	    // setboolfield(L, "isdst", time.get);
	};

	const L_MAXDATEFIELD = (Number.MAX_SAFE_INTEGER / 2);

	const getfield = function(L, key, d, delta) {
	    let t = lua_getfield$2(L, -1, to_luastring$8(key, true));  /* get field and its type */
	    let res = lua_tointegerx$1(L, -1);
	    if (res === false) {  /* field is not an integer? */
	        if (t !== LUA_TNIL$4)  /* some other value? */
	            return luaL_error$6(L, to_luastring$8("field '%s' is not an integer"), key);
	        else if (d < 0)  /* absent field; no default? */
	            return luaL_error$6(L, to_luastring$8("field '%s' missing in date table"), key);
	        res = d;
	    }
	    else {
	        if (!(-L_MAXDATEFIELD <= res && res <= L_MAXDATEFIELD))
	            return luaL_error$6(L, to_luastring$8("field '%s' is out-of-bound"), key);
	        res -= delta;
	    }
	    lua_pop$5(L, 1);
	    return res;
	};


	const locale = {
	    days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ].map((s) => to_luastring$8(s)),
	    shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((s) => to_luastring$8(s)),
	    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"].map((s) => to_luastring$8(s)),
	    shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map((s) => to_luastring$8(s)),
	    AM: to_luastring$8("AM"),
	    PM: to_luastring$8("PM"),
	    am: to_luastring$8("am"),
	    pm: to_luastring$8("pm"),
	    formats: {
	        c: to_luastring$8("%a %b %e %H:%M:%S %Y"),
	        D: to_luastring$8("%m/%d/%y"),
	        F: to_luastring$8("%Y-%m-%d"),
	        R: to_luastring$8("%H:%M"),
	        r: to_luastring$8("%I:%M:%S %p"),
	        T: to_luastring$8("%H:%M:%S"),
	        X: to_luastring$8("%T"),
	        x: to_luastring$8("%D")
	    }
	};

	const week_number = function(date, start_of_week) {
	    // This works by shifting the weekday back by one day if we
	    // are treating Monday as the first day of the week.
	    let weekday = date.getDay();
	    if (start_of_week === 'monday') {
	        if (weekday === 0) // Sunday
	            weekday = 6;
	        else
	            weekday--;
	    }
	    let yday = (date - new Date(date.getFullYear(), 0, 1)) / 86400000;
	    return Math.floor((yday + 7 - weekday) / 7);
	};

	const push_pad_2 = function(b, n, pad) {
	    if (n < 10)
	        luaL_addchar$1(b, pad);
	    luaL_addstring$1(b, to_luastring$8(String(n)));
	};

	const strftime = function(L, b, s, date) {
	    let i = 0;
	    while (i < s.length) {
	        if (s[i] !== 37 /* % */) {  /* not a conversion specifier? */
	            luaL_addchar$1(b, s[i++]);
	        } else {
	            i++;  /* skip '%' */
	            let len = checkoption(L, s, i);
	            /* each `case` has an example output above it for the UTC epoch */
	            switch(s[i]) {
	                // '%'
	                case 37 /* % */:
	                    luaL_addchar$1(b, 37);
	                    break;

	                // 'Thursday'
	                case 65 /* A */:
	                    luaL_addstring$1(b, locale.days[date.getDay()]);
	                    break;

	                // 'January'
	                case 66 /* B */:
	                    luaL_addstring$1(b, locale.months[date.getMonth()]);
	                    break;

	                // '19'
	                case 67 /* C */:
	                    push_pad_2(b, Math.floor(date.getFullYear() / 100), 48 /* 0 */);
	                    break;

	                // '01/01/70'
	                case 68 /* D */:
	                    strftime(L, b, locale.formats.D, date);
	                    break;

	                // '1970-01-01'
	                case 70 /* F */:
	                    strftime(L, b, locale.formats.F, date);
	                    break;

	                // '00'
	                case 72 /* H */:
	                    push_pad_2(b, date.getHours(), 48 /* 0 */);
	                    break;

	                // '12'
	                case 73 /* I */:
	                    push_pad_2(b, (date.getHours() + 11) % 12 + 1, 48 /* 0 */);
	                    break;

	                // '00'
	                case 77 /* M */:
	                    push_pad_2(b, date.getMinutes(), 48 /* 0 */);
	                    break;

	                // 'am'
	                case 80 /* P */:
	                    luaL_addstring$1(b, date.getHours() < 12 ? locale.am : locale.pm);
	                    break;

	                // '00:00'
	                case 82 /* R */:
	                    strftime(L, b, locale.formats.R, date);
	                    break;

	                // '00'
	                case 83 /* S */:
	                    push_pad_2(b, date.getSeconds(), 48 /* 0 */);
	                    break;

	                // '00:00:00'
	                case 84 /* T */:
	                    strftime(L, b, locale.formats.T, date);
	                    break;

	                // '00'
	                case 85 /* U */:
	                    push_pad_2(b, week_number(date, "sunday"), 48 /* 0 */);
	                    break;

	                // '00'
	                case 87 /* W */:
	                    push_pad_2(b, week_number(date, "monday"), 48 /* 0 */);
	                    break;

	                // '16:00:00'
	                case 88 /* X */:
	                    strftime(L, b, locale.formats.X, date);
	                    break;

	                // '1970'
	                case 89 /* Y */:
	                    luaL_addstring$1(b, to_luastring$8(String(date.getFullYear())));
	                    break;

	                // 'GMT'
	                case 90 /* Z */: {
	                    let tzString = date.toString().match(/\(([\w\s]+)\)/);
	                    if (tzString)
	                        luaL_addstring$1(b, to_luastring$8(tzString[1]));
	                    break;
	                }

	                // 'Thu'
	                case 97 /* a */:
	                    luaL_addstring$1(b, locale.shortDays[date.getDay()]);
	                    break;

	                // 'Jan'
	                case 98 /* b */:
	                case 104 /* h */:
	                    luaL_addstring$1(b, locale.shortMonths[date.getMonth()]);
	                    break;

	                // ''
	                case 99 /* c */:
	                    strftime(L, b, locale.formats.c, date);
	                    break;

	                // '01'
	                case 100 /* d */:
	                    push_pad_2(b, date.getDate(), 48 /* 0 */);
	                    break;

	                // ' 1'
	                case 101 /* e */:
	                    push_pad_2(b, date.getDate(), 32 /* space */);
	                    break;

	                // '000'
	                case 106 /* j */: {
	                    let yday = Math.floor((date - new Date(date.getFullYear(), 0, 1)) / 86400000);
	                    if (yday < 100) {
	                        if (yday < 10)
	                            luaL_addchar$1(b, 48 /* 0 */);
	                        luaL_addchar$1(b, 48 /* 0 */);
	                    }
	                    luaL_addstring$1(b, to_luastring$8(String(yday)));
	                    break;
	                }

	                // ' 0'
	                case 107 /* k */:
	                    push_pad_2(b, date.getHours(), 32 /* space */);
	                    break;

	                // '12'
	                case 108 /* l */:
	                    push_pad_2(b, (date.getHours() + 11) % 12 + 1, 32 /* space */);
	                    break;

	                // '01'
	                case 109 /* m */:
	                    push_pad_2(b, date.getMonth() + 1, 48 /* 0 */);
	                    break;

	                // '\n'
	                case 110 /* n */:
	                    luaL_addchar$1(b, 10);
	                    break;

	                // 'AM'
	                case 112 /* p */:
	                    luaL_addstring$1(b, date.getHours() < 12 ? locale.AM : locale.PM);
	                    break;

	                // '12:00:00 AM'
	                case 114 /* r */:
	                    strftime(L, b, locale.formats.r, date);
	                    break;

	                // '0'
	                case 115 /* s */:
	                    luaL_addstring$1(b, to_luastring$8(String(Math.floor(date / 1000))));
	                    break;

	                // '\t'
	                case 116 /* t */:
	                    luaL_addchar$1(b, 8);
	                    break;

	                // '4'
	                case 117 /* u */: {
	                    let day = date.getDay();
	                    luaL_addstring$1(b, to_luastring$8(String(day === 0 ? 7 : day)));
	                    break;
	                }

	                // '4'
	                case 119 /* w */:
	                    luaL_addstring$1(b, to_luastring$8(String(date.getDay())));
	                    break;

	                // '12/31/69'
	                case 120 /* x */:
	                    strftime(L, b, locale.formats.x, date);
	                    break;

	                // '70'
	                case 121 /* y */:
	                    push_pad_2(b, date.getFullYear() % 100, 48 /* 0 */);
	                    break;

	                // '+0000'
	                case 122 /* z */: {
	                    let off = date.getTimezoneOffset();
	                    if (off > 0) {
	                        luaL_addchar$1(b, 45 /* - */);
	                    } else {
	                        off = -off;
	                        luaL_addchar$1(b, 43 /* + */);
	                    }
	                    push_pad_2(b, Math.floor(off/60), 48 /* 0 */);
	                    push_pad_2(b, off % 60, 48 /* 0 */);
	                    break;
	                }
	            }
	            i += len;
	        }
	    }
	};


	const checkoption = function(L, conv, i) {
	    let option = LUA_STRFTIMEOPTIONS;
	    let o = 0;
	    let oplen = 1;  /* length of options being checked */
	    for (; o < option.length && oplen <= (conv.length - i); o += oplen) {
	        if (option[o] === '|'.charCodeAt(0))  /* next block? */
	            oplen++;  /* will check options with next length (+1) */
	        else if (luastring_eq$1(conv.subarray(i, i+oplen), option.subarray(o, o+oplen))) {  /* match? */
	            return oplen;  /* return length */
	        }
	    }
	    luaL_argerror$4(L, 1,
	        lua_pushfstring$3(L, to_luastring$8("invalid conversion specifier '%%%s'"), conv));
	};

	/* maximum size for an individual 'strftime' item */
	// const SIZETIMEFMT = 250;


	const os_date = function(L) {
	    let s = luaL_optlstring(L, 1, "%c");
	    let stm = lua_isnoneornil$2(L, 2) ? new Date() : new Date(l_checktime(L, 2) * 1000);
	    let utc = false;
	    let i = 0;
	    if (s[i] === '!'.charCodeAt(0)) {  /* UTC? */
	        utc = true;
	        i++;  /* skip '!' */
	    }
	    if (s[i] === "*".charCodeAt(0) && s[i+1] === "t".charCodeAt(0)) {
	        lua_createtable$2(L, 0, 9);  /* 9 = number of fields */
	        setallfields(L, stm, utc);
	    } else {
	        let cc = new Uint8Array(4);
	        cc[0] = "%".charCodeAt(0);
	        let b = new luaL_Buffer$3();
	        luaL_buffinit$3(L, b);
	        strftime(L, b, s, stm);
	        luaL_pushresult$3(b);
	    }
	    return 1;
	};

	const os_time = function(L) {
	    let t;
	    if (lua_isnoneornil$2(L, 1))  /* called without args? */
	        t = new Date();  /* get current time */
	    else {
	        luaL_checktype$2(L, 1, LUA_TTABLE$4);
	        lua_settop$5(L, 1);  /* make sure table is at the top */
	        t = new Date(
	            getfield(L, "year", -1, 0),
	            getfield(L, "month", -1, 1),
	            getfield(L, "day", -1, 0),
	            getfield(L, "hour", 12, 0),
	            getfield(L, "min", 0, 0),
	            getfield(L, "sec", 0, 0)
	        );
	        setallfields(L, t);
	    }

	    lua_pushinteger$6(L, Math.floor(t / 1000));
	    return 1;
	};

	const l_checktime = function(L, arg) {
	    let t = luaL_checkinteger$4(L, arg);
	    // luaL_argcheck(L, t, arg, "time out-of-bounds");
	    return t;
	};

	const os_difftime = function(L) {
	    let t1 = l_checktime(L, 1);
	    let t2 = l_checktime(L, 2);
	    lua_pushnumber$3(L, t1 - t2);
	    return 1;
	};

	const syslib = {
	    "date": os_date,
	    "difftime": os_difftime,
	    "time": os_time
	};

	if (typeof process === "undefined") {
	    syslib.clock = function(L) {
	        lua_pushnumber$3(L, performance.now()/1000);
	        return 1;
	    };
	} else {
	    /* Only with Node */
	    const fs = require$$0__default["default"];
	    const tmp$1 = tmp;
	    const child_process = require$$5__default["default"];

	    syslib.exit = function(L) {
	        let status;
	        if (lua_isboolean(L, 1))
	            status = (lua_toboolean$3(L, 1) ? 0 : 1);
	        else
	            status = luaL_optinteger$3(L, 1, 0);
	        if (lua_toboolean$3(L, 2))
	            lua_close(L);
	        if (L) process.exit(status);  /* 'if' to avoid warnings for unreachable 'return' */
	        return 0;
	    };

	    syslib.getenv = function(L) {
	        let key = luaL_checkstring$4(L, 1);
	        key = to_jsstring$2(key); /* https://github.com/nodejs/node/issues/16961 */
	        if (Object.prototype.hasOwnProperty.call(process.env, key)) {
	            lua_pushliteral$6(L, process.env[key]);
	        } else {
	            lua_pushnil$6(L);
	        }
	        return 1;
	    };

	    syslib.clock = function(L) {
	        lua_pushnumber$3(L, process.uptime());
	        return 1;
	    };

	    const lua_tmpname = function() {
	        return tmp$1.tmpNameSync();
	    };

	    syslib.remove = function(L) {
	        let filename = luaL_checkstring$4(L, 1);
	        try {
	            fs.unlinkSync(filename);
	        } catch (e) {
	            if (e.code === 'EISDIR') {
	                try {
	                    fs.rmdirSync(filename);
	                } catch (e) {
	                    return luaL_fileresult(L, false, filename, e);
	                }
	            } else {
	                return luaL_fileresult(L, false, filename, e);
	            }
	        }
	        return luaL_fileresult(L, true);
	    };

	    syslib.rename = function(L) {
	        let fromname = luaL_checkstring$4(L, 1);
	        let toname = luaL_checkstring$4(L, 2);
	        try {
	            fs.renameSync(fromname, toname);
	        } catch (e) {
	            return luaL_fileresult(L, false, false, e);
	        }
	        return luaL_fileresult(L, true);
	    };

	    syslib.tmpname = function(L) {
	        let name = lua_tmpname();
	        if (!name)
	            return luaL_error$6(L, to_luastring$8("unable to generate a unique filename"));
	        lua_pushstring$5(L, to_luastring$8(name));
	        return 1;
	    };

	    syslib.execute = function(L) {
	        let cmd = luaL_optstring$3(L, 1, null);
	        if (cmd !== null) {
	            try {
	                child_process.execSync(
	                    cmd,
	                    {
	                        stdio: [process.stdin, process.stdout, process.stderr]
	                    }
	                );
	            } catch (e) {
	                return luaL_execresult(L, e);
	            }

	            return luaL_execresult(L, null);
	        } else {
	            /* Assume a shell is available.
	               If it's good enough for musl it's good enough for us.
	               http://git.musl-libc.org/cgit/musl/tree/src/process/system.c?id=ac45692a53a1b8d2ede329d91652d43c1fb5dc8d#n22
	            */
	            lua_pushboolean$4(L, 1);
	            return 1;
	        }
	    };
	}

	const luaopen_os$1 = function(L) {
	    luaL_newlib$7(L, syslib);
	    return 1;
	};

	loslib.luaopen_os = luaopen_os$1;

	var lstrlib = {};

	var sprintf$1 = {};

	/* global window, exports, define */

	(function (exports) {
	!function() {

	    var re = {
	        not_string: /[^s]/,
	        not_bool: /[^t]/,
	        not_type: /[^T]/,
	        not_primitive: /[^v]/,
	        number: /[diefg]/,
	        numeric_arg: /[bcdiefguxX]/,
	        json: /[j]/,
	        not_json: /[^j]/,
	        text: /^[^\x25]+/,
	        modulo: /^\x25{2}/,
	        placeholder: /^\x25(?:([1-9]\d*)\$|\(([^)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijostTuvxX])/,
	        key: /^([a-z_][a-z_\d]*)/i,
	        key_access: /^\.([a-z_][a-z_\d]*)/i,
	        index_access: /^\[(\d+)\]/,
	        sign: /^[+-]/
	    };

	    function sprintf(key) {
	        // `arguments` is not an array, but should be fine for this call
	        return sprintf_format(sprintf_parse(key), arguments)
	    }

	    function vsprintf(fmt, argv) {
	        return sprintf.apply(null, [fmt].concat(argv || []))
	    }

	    function sprintf_format(parse_tree, argv) {
	        var cursor = 1, tree_length = parse_tree.length, arg, output = '', i, k, ph, pad, pad_character, pad_length, is_positive, sign;
	        for (i = 0; i < tree_length; i++) {
	            if (typeof parse_tree[i] === 'string') {
	                output += parse_tree[i];
	            }
	            else if (typeof parse_tree[i] === 'object') {
	                ph = parse_tree[i]; // convenience purposes only
	                if (ph.keys) { // keyword argument
	                    arg = argv[cursor];
	                    for (k = 0; k < ph.keys.length; k++) {
	                        if (arg == undefined) {
	                            throw new Error(sprintf('[sprintf] Cannot access property "%s" of undefined value "%s"', ph.keys[k], ph.keys[k-1]))
	                        }
	                        arg = arg[ph.keys[k]];
	                    }
	                }
	                else if (ph.param_no) { // positional argument (explicit)
	                    arg = argv[ph.param_no];
	                }
	                else { // positional argument (implicit)
	                    arg = argv[cursor++];
	                }

	                if (re.not_type.test(ph.type) && re.not_primitive.test(ph.type) && arg instanceof Function) {
	                    arg = arg();
	                }

	                if (re.numeric_arg.test(ph.type) && (typeof arg !== 'number' && isNaN(arg))) {
	                    throw new TypeError(sprintf('[sprintf] expecting number but found %T', arg))
	                }

	                if (re.number.test(ph.type)) {
	                    is_positive = arg >= 0;
	                }

	                switch (ph.type) {
	                    case 'b':
	                        arg = parseInt(arg, 10).toString(2);
	                        break
	                    case 'c':
	                        arg = String.fromCharCode(parseInt(arg, 10));
	                        break
	                    case 'd':
	                    case 'i':
	                        arg = parseInt(arg, 10);
	                        break
	                    case 'j':
	                        arg = JSON.stringify(arg, null, ph.width ? parseInt(ph.width) : 0);
	                        break
	                    case 'e':
	                        arg = ph.precision ? parseFloat(arg).toExponential(ph.precision) : parseFloat(arg).toExponential();
	                        break
	                    case 'f':
	                        arg = ph.precision ? parseFloat(arg).toFixed(ph.precision) : parseFloat(arg);
	                        break
	                    case 'g':
	                        arg = ph.precision ? String(Number(arg.toPrecision(ph.precision))) : parseFloat(arg);
	                        break
	                    case 'o':
	                        arg = (parseInt(arg, 10) >>> 0).toString(8);
	                        break
	                    case 's':
	                        arg = String(arg);
	                        arg = (ph.precision ? arg.substring(0, ph.precision) : arg);
	                        break
	                    case 't':
	                        arg = String(!!arg);
	                        arg = (ph.precision ? arg.substring(0, ph.precision) : arg);
	                        break
	                    case 'T':
	                        arg = Object.prototype.toString.call(arg).slice(8, -1).toLowerCase();
	                        arg = (ph.precision ? arg.substring(0, ph.precision) : arg);
	                        break
	                    case 'u':
	                        arg = parseInt(arg, 10) >>> 0;
	                        break
	                    case 'v':
	                        arg = arg.valueOf();
	                        arg = (ph.precision ? arg.substring(0, ph.precision) : arg);
	                        break
	                    case 'x':
	                        arg = (parseInt(arg, 10) >>> 0).toString(16);
	                        break
	                    case 'X':
	                        arg = (parseInt(arg, 10) >>> 0).toString(16).toUpperCase();
	                        break
	                }
	                if (re.json.test(ph.type)) {
	                    output += arg;
	                }
	                else {
	                    if (re.number.test(ph.type) && (!is_positive || ph.sign)) {
	                        sign = is_positive ? '+' : '-';
	                        arg = arg.toString().replace(re.sign, '');
	                    }
	                    else {
	                        sign = '';
	                    }
	                    pad_character = ph.pad_char ? ph.pad_char === '0' ? '0' : ph.pad_char.charAt(1) : ' ';
	                    pad_length = ph.width - (sign + arg).length;
	                    pad = ph.width ? (pad_length > 0 ? pad_character.repeat(pad_length) : '') : '';
	                    output += ph.align ? sign + arg + pad : (pad_character === '0' ? sign + pad + arg : pad + sign + arg);
	                }
	            }
	        }
	        return output
	    }

	    var sprintf_cache = Object.create(null);

	    function sprintf_parse(fmt) {
	        if (sprintf_cache[fmt]) {
	            return sprintf_cache[fmt]
	        }

	        var _fmt = fmt, match, parse_tree = [], arg_names = 0;
	        while (_fmt) {
	            if ((match = re.text.exec(_fmt)) !== null) {
	                parse_tree.push(match[0]);
	            }
	            else if ((match = re.modulo.exec(_fmt)) !== null) {
	                parse_tree.push('%');
	            }
	            else if ((match = re.placeholder.exec(_fmt)) !== null) {
	                if (match[2]) {
	                    arg_names |= 1;
	                    var field_list = [], replacement_field = match[2], field_match = [];
	                    if ((field_match = re.key.exec(replacement_field)) !== null) {
	                        field_list.push(field_match[1]);
	                        while ((replacement_field = replacement_field.substring(field_match[0].length)) !== '') {
	                            if ((field_match = re.key_access.exec(replacement_field)) !== null) {
	                                field_list.push(field_match[1]);
	                            }
	                            else if ((field_match = re.index_access.exec(replacement_field)) !== null) {
	                                field_list.push(field_match[1]);
	                            }
	                            else {
	                                throw new SyntaxError('[sprintf] failed to parse named argument key')
	                            }
	                        }
	                    }
	                    else {
	                        throw new SyntaxError('[sprintf] failed to parse named argument key')
	                    }
	                    match[2] = field_list;
	                }
	                else {
	                    arg_names |= 2;
	                }
	                if (arg_names === 3) {
	                    throw new Error('[sprintf] mixing positional and named placeholders is not (yet) supported')
	                }

	                parse_tree.push(
	                    {
	                        placeholder: match[0],
	                        param_no:    match[1],
	                        keys:        match[2],
	                        sign:        match[3],
	                        pad_char:    match[4],
	                        align:       match[5],
	                        width:       match[6],
	                        precision:   match[7],
	                        type:        match[8]
	                    }
	                );
	            }
	            else {
	                throw new SyntaxError('[sprintf] unexpected placeholder')
	            }
	            _fmt = _fmt.substring(match[0].length);
	        }
	        return sprintf_cache[fmt] = parse_tree
	    }

	    /**
	     * export to either browser or node.js
	     */
	    /* eslint-disable quote-props */
	    {
	        exports['sprintf'] = sprintf;
	        exports['vsprintf'] = vsprintf;
	    }
	    if (typeof window !== 'undefined') {
	        window['sprintf'] = sprintf;
	        window['vsprintf'] = vsprintf;
	    }
	    /* eslint-enable quote-props */
	}(); // eslint-disable-line
	}(sprintf$1));

	const { sprintf } = sprintf$1;

	const {
	    LUA_INTEGER_FMT,
	    LUA_INTEGER_FRMLEN,
	    LUA_MININTEGER: LUA_MININTEGER$1,
	    LUA_NUMBER_FMT,
	    LUA_NUMBER_FRMLEN,
	    frexp,
	    lua_getlocaledecpoint
	} = luaconf$1;
	const {
	    LUA_TBOOLEAN: LUA_TBOOLEAN$1,
	    LUA_TFUNCTION: LUA_TFUNCTION$2,
	    LUA_TNIL: LUA_TNIL$3,
	    LUA_TNUMBER: LUA_TNUMBER$2,
	    LUA_TSTRING: LUA_TSTRING$1,
	    LUA_TTABLE: LUA_TTABLE$3,
	    lua_call: lua_call$2,
	    lua_createtable: lua_createtable$1,
	    lua_dump,
	    lua_gettable: lua_gettable$1,
	    lua_gettop: lua_gettop$3,
	    lua_isinteger: lua_isinteger$1,
	    lua_isstring: lua_isstring$1,
	    lua_pop: lua_pop$4,
	    lua_pushcclosure: lua_pushcclosure$1,
	    lua_pushinteger: lua_pushinteger$5,
	    lua_pushlightuserdata: lua_pushlightuserdata$3,
	    lua_pushliteral: lua_pushliteral$5,
	    lua_pushlstring: lua_pushlstring$1,
	    lua_pushnil: lua_pushnil$5,
	    lua_pushnumber: lua_pushnumber$2,
	    lua_pushstring: lua_pushstring$4,
	    lua_pushvalue: lua_pushvalue$5,
	    lua_remove: lua_remove$1,
	    lua_setfield: lua_setfield$6,
	    lua_setmetatable: lua_setmetatable$2,
	    lua_settop: lua_settop$4,
	    lua_toboolean: lua_toboolean$2,
	    lua_tointeger: lua_tointeger$2,
	    lua_tonumber: lua_tonumber$1,
	    lua_tostring: lua_tostring$2,
	    lua_touserdata: lua_touserdata$3,
	    lua_type: lua_type$3,
	    lua_upvalueindex: lua_upvalueindex$1
	} = lua$2;
	const {
	    luaL_Buffer: luaL_Buffer$2,
	    luaL_addchar,
	    luaL_addlstring,
	    luaL_addsize,
	    luaL_addstring,
	    luaL_addvalue: luaL_addvalue$2,
	    luaL_argcheck: luaL_argcheck$3,
	    luaL_argerror: luaL_argerror$3,
	    luaL_buffinit: luaL_buffinit$2,
	    luaL_buffinitsize,
	    luaL_checkinteger: luaL_checkinteger$3,
	    luaL_checknumber: luaL_checknumber$1,
	    luaL_checkstack: luaL_checkstack$2,
	    luaL_checkstring: luaL_checkstring$3,
	    luaL_checktype: luaL_checktype$1,
	    luaL_error: luaL_error$5,
	    luaL_newlib: luaL_newlib$6,
	    luaL_optinteger: luaL_optinteger$2,
	    luaL_optstring: luaL_optstring$2,
	    luaL_prepbuffsize,
	    luaL_pushresult: luaL_pushresult$2,
	    luaL_pushresultsize,
	    luaL_tolstring: luaL_tolstring$1,
	    luaL_typename
	} = lauxlib$2;
	const lualib$5 = lualib$8;
	const {
	    luastring_eq,
	    luastring_indexOf: luastring_indexOf$2,
	    to_jsstring: to_jsstring$1,
	    to_luastring: to_luastring$7
	} = fengaricore;

	const sL_ESC  = '%';
	const L_ESC   = sL_ESC.charCodeAt(0);

	/*
	** maximum number of captures that a pattern can do during
	** pattern-matching. This limit is arbitrary, but must fit in
	** an unsigned char.
	*/
	const LUA_MAXCAPTURES = 32;

	// (sizeof(size_t) < sizeof(int) ? MAX_SIZET : (size_t)(INT_MAX))
	const MAXSIZE = 2147483647;

	/* Give natural (i.e. strings end at the first \0) length of a string represented by an array of bytes */
	const strlen = function(s) {
	    let len = luastring_indexOf$2(s, 0);
	    return len > -1 ? len : s.length;
	};

	/* translate a relative string position: negative means back from end */
	const posrelat = function(pos, len) {
	    if (pos >= 0) return pos;
	    else if (0 - pos > len) return 0;
	    else return len + pos + 1;
	};

	const str_sub = function(L) {
	    let s = luaL_checkstring$3(L, 1);
	    let l = s.length;
	    let start = posrelat(luaL_checkinteger$3(L, 2), l);
	    let end = posrelat(luaL_optinteger$2(L, 3, -1), l);
	    if (start < 1) start = 1;
	    if (end > l) end = l;
	    if (start <= end)
	        lua_pushstring$4(L, s.subarray(start - 1, (start - 1) + (end - start + 1)));
	    else lua_pushliteral$5(L, "");
	    return 1;
	};

	const str_len = function(L) {
	    lua_pushinteger$5(L, luaL_checkstring$3(L, 1).length);
	    return 1;
	};

	const str_char = function(L) {
	    let n = lua_gettop$3(L);  /* number of arguments */
	    let b = new luaL_Buffer$2();
	    let p = luaL_buffinitsize(L, b, n);
	    for (let i = 1; i <= n; i++) {
	        let c = luaL_checkinteger$3(L, i);
	        luaL_argcheck$3(L, c >= 0 && c <= 255, "value out of range"); // Strings are 8-bit clean
	        p[i-1] = c;
	    }
	    luaL_pushresultsize(b, n);
	    return 1;
	};

	const writer = function(L, b, size, B) {
	    luaL_addlstring(B, b, size);
	    return 0;
	};

	const str_dump = function(L) {
	    let b = new luaL_Buffer$2();
	    let strip = lua_toboolean$2(L, 2);
	    luaL_checktype$1(L, 1, LUA_TFUNCTION$2);
	    lua_settop$4(L, 1);
	    luaL_buffinit$2(L, b);
	    if (lua_dump(L, writer, b, strip) !== 0)
	        return luaL_error$5(L, to_luastring$7("unable to dump given function"));
	    luaL_pushresult$2(b);
	    return 1;
	};

	const SIZELENMOD = LUA_NUMBER_FRMLEN.length + 1;

	const L_NBFD = 1;

	const num2straux = function(x) {
	    /* if 'inf' or 'NaN', format it like '%g' */
	    if (Object.is(x, Infinity))
	        return to_luastring$7('inf');
	    else if (Object.is(x, -Infinity))
	        return to_luastring$7('-inf');
	    else if (Number.isNaN(x))
	        return to_luastring$7('nan');
	    else if (x === 0) {  /* can be -0... */
	        /* create "0" or "-0" followed by exponent */
	        let zero = sprintf(LUA_NUMBER_FMT + "x0p+0", x);
	        if (Object.is(x, -0))
	            zero = "-" + zero;
	        return to_luastring$7(zero);
	    } else {
	        let buff = "";
	        let fe = frexp(x);  /* 'x' fraction and exponent */
	        let m = fe[0];
	        let e = fe[1];
	        if (m < 0) {  /* is number negative? */
	            buff += '-';  /* add signal */
	            m = -m;  /* make it positive */
	        }
	        buff += "0x";  /* add "0x" */
	        buff += (m * (1<<L_NBFD)).toString(16);
	        e -= L_NBFD;  /* this digit goes before the radix point */
	        buff += sprintf("p%+d", e);  /* add exponent */
	        return to_luastring$7(buff);
	    }
	};

	const lua_number2strx = function(L, fmt, x) {
	    let buff = num2straux(x);
	    if (fmt[SIZELENMOD] === 65 /* 'A'.charCodeAt(0) */) {
	        for (let i = 0; i < buff.length; i++) {
	            let c = buff[i];
	            if (c >= 97) /* toupper */
	                buff[i] = c & 0xdf;
	        }
	    } else if (fmt[SIZELENMOD] !== 97 /* 'a'.charCodeAt(0) */)
	        luaL_error$5(L, to_luastring$7("modifiers for format '%%a'/'%%A' not implemented"));
	    return buff;
	};

	/*
	** Maximum size of each formatted item. This maximum size is produced
	** by format('%.99f', -maxfloat), and is equal to 99 + 3 ('-', '.',
	** and '\0') + number of decimal digits to represent maxfloat (which
	** is maximum exponent + 1). (99+3+1 then rounded to 120 for "extra
	** expenses", such as locale-dependent stuff)
	*/
	// const MAX_ITEM   = 120;// TODO: + l_mathlim(MAX_10_EXP);


	/* valid flags in a format specification */
	const FLAGS = to_luastring$7("-+ #0");

	/*
	** maximum size of each format specification (such as "%-099.99d")
	*/
	// const MAX_FORMAT = 32;

	const isalpha = e => (97 <= e && e <= 122) || (65 <= e && e <= 90);
	const isdigit = e => 48 <= e && e <= 57;
	const iscntrl = e => (0x00 <= e && e <= 0x1f) || e === 0x7f;
	const isgraph = e => 33 <= e && e <= 126;
	const islower = e => 97 <= e && e <= 122;
	const isupper = e => 65 <= e && e <= 90;
	const isalnum = e => (97 <= e && e <= 122) || (65 <= e && e <= 90) || (48 <= e && e <= 57);
	const ispunct = e => isgraph(e) && !isalnum(e);
	const isspace = e => e === 32 || (e >= 9 && e <= 13);
	const isxdigit = e => (48 <= e && e <= 57) || (65 <= e && e <= 70) || (97 <= e && e <= 102);

	const addquoted = function(b, s, len) {
	    luaL_addchar(b, 34 /* '"'.charCodeAt(0) */);
	    let i = 0;
	    while (len--) {
	        if (s[i] === 34 /* '"'.charCodeAt(0) */ ||
	            s[i] === 92 /* '\\'.charCodeAt(0) */ ||
	            s[i] === 10 /* '\n'.charCodeAt(0) */) {
	            luaL_addchar(b, 92 /* '\\'.charCodeAt(0) */);
	            luaL_addchar(b, s[i]);
	        } else if (iscntrl(s[i])) {
	            let buff = ''+s[i];
	            if (isdigit(s[i+1]))
	                buff = '0'.repeat(3-buff.length) + buff; /* pad to 3 '0's */
	            luaL_addstring(b, to_luastring$7("\\" + buff));
	        } else
	            luaL_addchar(b, s[i]);
	        i++;
	    }
	    luaL_addchar(b, 34 /* '"'.charCodeAt(0) */);
	};

	/*
	** Ensures the 'buff' string uses a dot as the radix character.
	*/
	const checkdp = function(buff) {
	    if (luastring_indexOf$2(buff, 46 /* ('.').charCodeAt(0) */) < 0) {  /* no dot? */
	        let point = lua_getlocaledecpoint();  /* try locale point */
	        let ppoint = luastring_indexOf$2(buff, point);
	        if (ppoint) buff[ppoint] = 46 /* ('.').charCodeAt(0) */;  /* change it to a dot */
	    }
	};

	const addliteral = function(L, b, arg) {
	    switch(lua_type$3(L, arg)) {
	        case LUA_TSTRING$1: {
	            let s = lua_tostring$2(L, arg);
	            addquoted(b, s, s.length);
	            break;
	        }
	        case LUA_TNUMBER$2: {
	            let buff;
	            if (!lua_isinteger$1(L, arg)) {  /* float? */
	                let n = lua_tonumber$1(L, arg);  /* write as hexa ('%a') */
	                buff = lua_number2strx(L, to_luastring$7(`%${LUA_INTEGER_FRMLEN}a`), n);
	                checkdp(buff);  /* ensure it uses a dot */
	            } else {  /* integers */
	                let n = lua_tointeger$2(L, arg);
	                let format = (n === LUA_MININTEGER$1)  /* corner case? */
	                    ? "0x%" + LUA_INTEGER_FRMLEN + "x"  /* use hexa */
	                    : LUA_INTEGER_FMT;  /* else use default format */
	                buff = to_luastring$7(sprintf(format, n));
	            }
	            luaL_addstring(b, buff);
	            break;
	        }
	        case LUA_TNIL$3: case LUA_TBOOLEAN$1: {
	            luaL_tolstring$1(L, arg);
	            luaL_addvalue$2(b);
	            break;
	        }
	        default: {
	            luaL_argerror$3(L, arg, to_luastring$7("value has no literal form"));
	        }
	    }
	};

	const scanformat = function(L, strfrmt, i, form) {
	    let p = i;
	    while (strfrmt[p] !== 0 && luastring_indexOf$2(FLAGS, strfrmt[p]) >= 0) p++;  /* skip flags */
	    if (p - i >= FLAGS.length)
	        luaL_error$5(L, to_luastring$7("invalid format (repeated flags)"));
	    if (isdigit(strfrmt[p])) p++;  /* skip width */
	    if (isdigit(strfrmt[p])) p++;  /* (2 digits at most) */
	    if (strfrmt[p] === 46 /* '.'.charCodeAt(0) */) {
	        p++;
	        if (isdigit(strfrmt[p])) p++;  /* skip precision */
	        if (isdigit(strfrmt[p])) p++;  /* (2 digits at most) */
	    }
	    if (isdigit(strfrmt[p]))
	        luaL_error$5(L, to_luastring$7("invalid format (width or precision too long)"));
	    form[0] = 37 /* "%".charCodeAt(0) */;
	    for (let j = 0; j < p - i + 1; j++)
	        form[j+1] = strfrmt[i+j];
	    return p;
	};

	/*
	** add length modifier into formats
	*/
	const addlenmod = function(form, lenmod) {
	    let l = form.length;
	    let lm = lenmod.length;
	    let spec = form[l - 1];
	    for (let i = 0; i < lm; i++)
	        form[i + l - 1] = lenmod[i];
	    form[l + lm - 1] = spec;
	    // form[l + lm] = 0;
	};

	const str_format = function(L) {
	    let top = lua_gettop$3(L);
	    let arg = 1;
	    let strfrmt = luaL_checkstring$3(L, arg);
	    let i = 0;
	    let b = new luaL_Buffer$2();
	    luaL_buffinit$2(L, b);
	    while (i < strfrmt.length) {
	        if (strfrmt[i] !== L_ESC) {
	            luaL_addchar(b, strfrmt[i++]);
	        } else if (strfrmt[++i] === L_ESC) {
	            luaL_addchar(b, strfrmt[i++]); /* %% */
	        } else { /* format item */
	            let form = [];  /* to store the format ('%...') */
	            if (++arg > top)
	                luaL_argerror$3(L, arg, to_luastring$7("no value"));
	            i = scanformat(L, strfrmt, i, form);
	            switch (String.fromCharCode(strfrmt[i++])) {
	                case 'c': {
	                    // sprintf(String.fromCharCode(...form), luaL_checkinteger(L, arg));
	                    luaL_addchar(b, luaL_checkinteger$3(L, arg));
	                    break;
	                }
	                case 'd': case 'i':
	                case 'o': case 'u': case 'x': case 'X': {
	                    let n = luaL_checkinteger$3(L, arg);
	                    addlenmod(form, to_luastring$7(LUA_INTEGER_FRMLEN, true));
	                    luaL_addstring(b, to_luastring$7(sprintf(String.fromCharCode(...form), n)));
	                    break;
	                }
	                case 'a': case 'A': {
	                    addlenmod(form, to_luastring$7(LUA_INTEGER_FRMLEN, true));
	                    luaL_addstring(b, lua_number2strx(L, form, luaL_checknumber$1(L, arg)));
	                    break;
	                }
	                case 'e': case 'E': case 'f':
	                case 'g': case 'G': {
	                    let n = luaL_checknumber$1(L, arg);
	                    addlenmod(form, to_luastring$7(LUA_INTEGER_FRMLEN, true));
	                    luaL_addstring(b, to_luastring$7(sprintf(String.fromCharCode(...form), n)));
	                    break;
	                }
	                case 'q': {
	                    addliteral(L, b, arg);
	                    break;
	                }
	                case 's': {
	                    let s = luaL_tolstring$1(L, arg);
	                    if (form.length <= 2 || form[2] === 0) {  /* no modifiers? */
	                        luaL_addvalue$2(b);  /* keep entire string */
	                    } else {
	                        luaL_argcheck$3(L, s.length === strlen(s), arg, "string contains zeros");
	                        if (luastring_indexOf$2(form, 46 /* '.'.charCodeAt(0) */) < 0 && s.length >= 100) {
	                            /* no precision and string is too long to be formatted */
	                            luaL_addvalue$2(b);  /* keep entire string */
	                        } else {  /* format the string into 'buff' */
	                            // TODO: will fail if s is not valid UTF-8
	                            luaL_addstring(b, to_luastring$7(sprintf(String.fromCharCode(...form), to_jsstring$1(s))));
	                            lua_pop$4(L, 1);  /* remove result from 'luaL_tolstring' */
	                        }
	                    }
	                    break;
	                }
	                default: {  /* also treat cases 'pnLlh' */
	                    return luaL_error$5(L, to_luastring$7("invalid option '%%%c' to 'format'"), strfrmt[i-1]);
	                }
	            }
	        }
	    }
	    luaL_pushresult$2(b);
	    return 1;
	};

	/* value used for padding */
	const LUAL_PACKPADBYTE = 0x00;

	/* maximum size for the binary representation of an integer */
	const MAXINTSIZE = 16;

	const SZINT = 4; // Size of lua_Integer

	/* number of bits in a character */
	const NB = 8;

	/* mask for one character (NB 1's) */
	const MC = ((1 << NB) - 1);

	const MAXALIGN = 8;

	/*
	** information to pack/unpack stuff
	*/
	class Header {
	    constructor(L) {
	        this.L = L;
	        this.islittle = true;
	        this.maxalign = 1;
	    }
	}

	/*
	** options for pack/unpack
	*/
	const Kint       = 0; /* signed integers */
	const Kuint      = 1; /* unsigned integers */
	const Kfloat     = 2; /* floating-point numbers */
	const Kchar      = 3; /* fixed-length strings */
	const Kstring    = 4; /* strings with prefixed length */
	const Kzstr      = 5; /* zero-terminated strings */
	const Kpadding   = 6; /* padding */
	const Kpaddalign = 7; /* padding for alignment */
	const Knop       = 8; /* no-op (configuration or spaces) */

	const digit = isdigit;

	const getnum = function(fmt, df) {
	    if (fmt.off >= fmt.s.length || !digit(fmt.s[fmt.off]))  /* no number? */
	        return df;  /* return default value */
	    else {
	        let a = 0;
	        do {
	            a = a * 10 + (fmt.s[fmt.off++] - 48 /* '0'.charCodeAt(0) */);
	        } while (fmt.off < fmt.s.length && digit(fmt.s[fmt.off]) && a <= (MAXSIZE - 9)/10);
	        return a;
	    }
	};

	/*
	** Read an integer numeral and raises an error if it is larger
	** than the maximum size for integers.
	*/
	const getnumlimit = function(h, fmt, df) {
	    let sz = getnum(fmt, df);
	    if (sz > MAXINTSIZE || sz <= 0)
	        luaL_error$5(h.L, to_luastring$7("integral size (%d) out of limits [1,%d]"), sz, MAXINTSIZE);
	    return sz;
	};

	/*
	** Read and classify next option. 'size' is filled with option's size.
	*/
	const getoption = function(h, fmt) {
	    let r = {
	        opt: fmt.s[fmt.off++],
	        size: 0  /* default */
	    };
	    switch (r.opt) {
	        case 98  /*'b'*/: r.size = 1; r.opt = Kint;   return r; // sizeof(char): 1
	        case 66  /*'B'*/: r.size = 1; r.opt = Kuint;  return r;
	        case 104 /*'h'*/: r.size = 2; r.opt = Kint;   return r; // sizeof(short): 2
	        case 72  /*'H'*/: r.size = 2; r.opt = Kuint;  return r;
	        case 108 /*'l'*/: r.size = 4; r.opt = Kint;   return r; // sizeof(long): 4
	        case 76  /*'L'*/: r.size = 4; r.opt = Kuint;  return r;
	        case 106 /*'j'*/: r.size = 4; r.opt = Kint;   return r; // sizeof(lua_Integer): 4
	        case 74  /*'J'*/: r.size = 4; r.opt = Kuint;  return r;
	        case 84  /*'T'*/: r.size = 4; r.opt = Kuint;  return r; // sizeof(size_t): 4
	        case 102 /*'f'*/: r.size = 4; r.opt = Kfloat; return r; // sizeof(float): 4
	        case 100 /*'d'*/: r.size = 8; r.opt = Kfloat; return r; // sizeof(double): 8
	        case 110 /*'n'*/: r.size = 8; r.opt = Kfloat; return r; // sizeof(lua_Number): 8
	        case 105 /*'i'*/: r.size = getnumlimit(h, fmt, 4); r.opt = Kint;    return r; // sizeof(int): 4
	        case 73  /*'I'*/: r.size = getnumlimit(h, fmt, 4); r.opt = Kuint;   return r;
	        case 115 /*'s'*/: r.size = getnumlimit(h, fmt, 4); r.opt = Kstring; return r;
	        case 99  /*'c'*/: {
	            r.size = getnum(fmt, -1);
	            if (r.size === -1)
	                luaL_error$5(h.L, to_luastring$7("missing size for format option 'c'"));
	            r.opt = Kchar;
	            return r;
	        }
	        case 122 /*'z'*/:             r.opt = Kzstr;      return r;
	        case 120 /*'x'*/: r.size = 1; r.opt = Kpadding;   return r;
	        case 88  /*'X'*/:             r.opt = Kpaddalign; return r;
	        case 32  /*' '*/: break;
	        case 60  /*'<'*/: h.islittle = true; break;
	        case 62  /*'>'*/: h.islittle = false; break;
	        case 61  /*'='*/: h.islittle = true; break;
	        case 33  /*'!'*/: h.maxalign = getnumlimit(h, fmt, MAXALIGN); break;
	        default: luaL_error$5(h.L, to_luastring$7("invalid format option '%c'"), r.opt);
	    }
	    r.opt = Knop;
	    return r;
	};

	/*
	** Read, classify, and fill other details about the next option.
	** 'psize' is filled with option's size, 'notoalign' with its
	** alignment requirements.
	** Local variable 'size' gets the size to be aligned. (Kpadal option
	** always gets its full alignment, other options are limited by
	** the maximum alignment ('maxalign'). Kchar option needs no alignment
	** despite its size.
	*/
	const getdetails = function(h, totalsize, fmt) {
	    let r = {
	        opt: NaN,
	        size: NaN,
	        ntoalign: NaN
	    };

	    let opt = getoption(h, fmt);
	    r.size = opt.size;
	    r.opt = opt.opt;
	    let align = r.size;  /* usually, alignment follows size */
	    if (r.opt === Kpaddalign) {  /* 'X' gets alignment from following option */
	        if (fmt.off >= fmt.s.length || fmt.s[fmt.off] === 0)
	            luaL_argerror$3(h.L, 1, to_luastring$7("invalid next option for option 'X'"));
	        else {
	            let o = getoption(h, fmt);
	            align = o.size;
	            o = o.opt;
	            if (o === Kchar || align === 0)
	                luaL_argerror$3(h.L, 1, to_luastring$7("invalid next option for option 'X'"));
	        }
	    }
	    if (align <= 1 || r.opt === Kchar)  /* need no alignment? */
	        r.ntoalign = 0;
	    else {
	        if (align > h.maxalign)  /* enforce maximum alignment */
	            align = h.maxalign;
	        if ((align & (align -1)) !== 0)  /* is 'align' not a power of 2? */
	            luaL_argerror$3(h.L, 1, to_luastring$7("format asks for alignment not power of 2"));
	        r.ntoalign = (align - (totalsize & (align - 1))) & (align - 1);
	    }
	    return r;
	};

	/*
	** Pack integer 'n' with 'size' bytes and 'islittle' endianness.
	** The final 'if' handles the case when 'size' is larger than
	** the size of a Lua integer, correcting the extra sign-extension
	** bytes if necessary (by default they would be zeros).
	*/
	const packint = function(b, n, islittle, size, neg) {
	    let buff = luaL_prepbuffsize(b, size);
	    buff[islittle ? 0 : size - 1] = n & MC;  /* first byte */
	    for (let i = 1; i < size; i++) {
	        n >>= NB;
	        buff[islittle ? i : size - 1 - i] = n & MC;
	    }
	    if (neg && size > SZINT) {  /* negative number need sign extension? */
	        for (let i = SZINT; i < size; i++)  /* correct extra bytes */
	            buff[islittle ? i : size - 1 - i] = MC;
	    }
	    luaL_addsize(b, size);  /* add result to buffer */
	};

	const str_pack = function(L) {
	    let b = new luaL_Buffer$2();
	    let h = new Header(L);
	    let fmt = {
	        s: luaL_checkstring$3(L, 1),  /* format string */
	        off: 0
	    };
	    let arg = 1;  /* current argument to pack */
	    let totalsize = 0;  /* accumulate total size of result */
	    lua_pushnil$5(L);  /* mark to separate arguments from string buffer */
	    luaL_buffinit$2(L, b);
	    while (fmt.off < fmt.s.length) {
	        let details = getdetails(h, totalsize, fmt);
	        let opt = details.opt;
	        let size = details.size;
	        let ntoalign = details.ntoalign;
	        totalsize += ntoalign + size;
	        while (ntoalign-- > 0)
	            luaL_addchar(b, LUAL_PACKPADBYTE);  /* fill alignment */
	        arg++;
	        switch (opt) {
	            case Kint: {  /* signed integers */
	                let n = luaL_checkinteger$3(L, arg);
	                if (size < SZINT) {  /* need overflow check? */
	                    let lim = 1 << (size * 8) - 1;
	                    luaL_argcheck$3(L, -lim <= n && n < lim, arg, "integer overflow");
	                }
	                packint(b, n, h.islittle, size, n < 0);
	                break;
	            }
	            case Kuint: {  /* unsigned integers */
	                let n = luaL_checkinteger$3(L, arg);
	                if (size < SZINT)
	                    luaL_argcheck$3(L, (n>>>0) < (1 << (size * NB)), arg, "unsigned overflow");
	                packint(b, n>>>0, h.islittle, size, false);
	                break;
	            }
	            case Kfloat: {  /* floating-point options */
	                let buff = luaL_prepbuffsize(b, size);
	                let n = luaL_checknumber$1(L, arg);  /* get argument */
	                let dv = new DataView(buff.buffer, buff.byteOffset, buff.byteLength);
	                if (size === 4) dv.setFloat32(0, n, h.islittle);
	                else dv.setFloat64(0, n, h.islittle);
	                luaL_addsize(b, size);
	                break;
	            }
	            case Kchar: {  /* fixed-size string */
	                let s = luaL_checkstring$3(L, arg);
	                let len = s.length;
	                luaL_argcheck$3(L, len <= size, arg, "string longer than given size");
	                luaL_addlstring(b, s, len);  /* add string */
	                while (len++ < size)  /* pad extra space */
	                    luaL_addchar(b, LUAL_PACKPADBYTE);
	                break;
	            }
	            case Kstring: {  /* strings with length count */
	                let s = luaL_checkstring$3(L, arg);
	                let len = s.length;
	                luaL_argcheck$3(L,
	                    size >= 4 /* sizeof(size_t) */ || len < (1 << (size * NB)),
	                    arg, "string length does not fit in given size");
	                packint(b, len, h.islittle, size, 0);  /* pack length */
	                luaL_addlstring(b, s, len);
	                totalsize += len;
	                break;
	            }
	            case Kzstr: {  /* zero-terminated string */
	                let s = luaL_checkstring$3(L, arg);
	                let len = s.length;
	                luaL_argcheck$3(L, luastring_indexOf$2(s, 0) < 0, arg, "strings contains zeros");
	                luaL_addlstring(b, s, len);
	                luaL_addchar(b, 0);  /* add zero at the end */
	                totalsize += len + 1;
	                break;
	            }
	            case Kpadding: luaL_addchar(b, LUAL_PACKPADBYTE); /* fall through */
	            case Kpaddalign: case Knop:
	                arg--;  /* undo increment */
	                break;
	        }
	    }
	    luaL_pushresult$2(b);
	    return 1;
	};

	const str_reverse = function(L) {
	    let s = luaL_checkstring$3(L, 1);
	    let l = s.length;
	    let r = new Uint8Array(l);
	    for (let i=0; i<l; i++)
	        r[i] = s[l-1-i];
	    lua_pushstring$4(L, r);
	    return 1;
	};

	const str_lower = function(L) {
	    let s = luaL_checkstring$3(L, 1);
	    let l = s.length;
	    let r = new Uint8Array(l);
	    for (let i=0; i<l; i++) {
	        let c = s[i];
	        if (isupper(c))
	            c = c | 0x20;
	        r[i] = c;
	    }
	    lua_pushstring$4(L, r);
	    return 1;
	};

	const str_upper = function(L) {
	    let s = luaL_checkstring$3(L, 1);
	    let l = s.length;
	    let r = new Uint8Array(l);
	    for (let i=0; i<l; i++) {
	        let c = s[i];
	        if (islower(c))
	            c = c & 0xdf;
	        r[i] = c;
	    }
	    lua_pushstring$4(L, r);
	    return 1;
	};

	const str_rep = function(L) {
	    let s = luaL_checkstring$3(L, 1);
	    let l = s.length;
	    let n = luaL_checkinteger$3(L, 2);
	    let sep = luaL_optstring$2(L, 3, "");
	    let lsep = sep.length;
	    if (n <= 0) lua_pushliteral$5(L, "");
	    else if (l + lsep < l || l + lsep > MAXSIZE / n)  /* may overflow? */
	        return luaL_error$5(L, to_luastring$7("resulting string too large"));
	    else {
	        let totallen = n * l + (n - 1) * lsep;
	        let b = new luaL_Buffer$2();
	        let p = luaL_buffinitsize(L, b, totallen);
	        let pi = 0;
	        while (n-- > 1) {  /* first n-1 copies (followed by separator) */
	            p.set(s, pi);
	            pi += l;
	            if (lsep > 0) {  /* empty 'memcpy' is not that cheap */
	                p.set(sep, pi);
	                pi += lsep;
	            }
	        }
	        p.set(s, pi);  /* last copy (not followed by separator) */
	        luaL_pushresultsize(b, totallen);
	    }
	    return 1;
	};

	const str_byte = function(L) {
	    let s = luaL_checkstring$3(L, 1);
	    let l = s.length;
	    let posi = posrelat(luaL_optinteger$2(L, 2, 1), l);
	    let pose = posrelat(luaL_optinteger$2(L, 3, posi), l);

	    if (posi < 1) posi = 1;
	    if (pose > l) pose = l;
	    if (posi > pose) return 0;  /* empty interval; return no values */
	    if (pose - posi >= Number.MAX_SAFE_INTEGER)  /* arithmetic overflow? */
	        return luaL_error$5(L, "string slice too long");

	    let n = (pose - posi) + 1;
	    luaL_checkstack$2(L, n, "string slice too long");
	    for (let i = 0; i < n; i++)
	        lua_pushinteger$5(L, s[posi + i - 1]);
	    return n;
	};

	const str_packsize = function(L) {
	    let h = new Header(L);
	    let fmt = {
	        s: luaL_checkstring$3(L, 1),
	        off: 0
	    };
	    let totalsize = 0;  /* accumulate total size of result */
	    while (fmt.off < fmt.s.length) {
	        let details = getdetails(h, totalsize, fmt);
	        let opt = details.opt;
	        let size = details.size;
	        let ntoalign = details.ntoalign;
	        size += ntoalign;  /* total space used by option */
	        luaL_argcheck$3(L, totalsize <= MAXSIZE - size, 1, "format result too large");
	        totalsize += size;
	        switch (opt) {
	            case Kstring:  /* strings with length count */
	            case Kzstr:    /* zero-terminated string */
	                luaL_argerror$3(L, 1, "variable-length format");
	        }
	    }
	    lua_pushinteger$5(L, totalsize);
	    return 1;
	};

	/*
	** Unpack an integer with 'size' bytes and 'islittle' endianness.
	** If size is smaller than the size of a Lua integer and integer
	** is signed, must do sign extension (propagating the sign to the
	** higher bits); if size is larger than the size of a Lua integer,
	** it must check the unread bytes to see whether they do not cause an
	** overflow.
	*/
	const unpackint = function(L, str, islittle, size, issigned) {
	    let res = 0;
	    let limit = size <= SZINT ? size : SZINT;
	    for (let i = limit - 1; i >= 0; i--) {
	        res <<= NB;
	        res |= str[islittle ? i : size - 1 - i];
	    }
	    if (size < SZINT) {  /* real size smaller than lua_Integer? */
	        if (issigned) {  /* needs sign extension? */
	            let mask = 1 << (size * NB - 1);
	            res = ((res ^ mask) - mask);  /* do sign extension */
	        }
	    } else if (size > SZINT) {  /* must check unread bytes */
	        let mask = !issigned || res >= 0 ? 0 : MC;
	        for (let i = limit; i < size; i++) {
	            if (str[islittle ? i : size - 1 - i] !== mask)
	                luaL_error$5(L, to_luastring$7("%d-byte integer does not fit into Lua Integer"), size);
	        }
	    }
	    return res;
	};

	const unpacknum = function(L, b, islittle, size) {
	    lualib$5.lua_assert(b.length >= size);

	    let dv = new DataView(new ArrayBuffer(size));
	    for (let i = 0; i < size; i++)
	        dv.setUint8(i, b[i], islittle);

	    if (size == 4) return dv.getFloat32(0, islittle);
	    else return dv.getFloat64(0, islittle);
	};

	const str_unpack = function(L) {
	    let h = new Header(L);
	    let fmt = {
	        s: luaL_checkstring$3(L, 1),
	        off: 0
	    };
	    let data = luaL_checkstring$3(L, 2);
	    let ld = data.length;
	    let pos = posrelat(luaL_optinteger$2(L, 3, 1), ld) - 1;
	    let n = 0;  /* number of results */
	    luaL_argcheck$3(L, pos <= ld && pos >= 0, 3, "initial position out of string");
	    while (fmt.off < fmt.s.length) {
	        let details = getdetails(h, pos, fmt);
	        let opt = details.opt;
	        let size = details.size;
	        let ntoalign = details.ntoalign;
	        if (/*ntoalign + size > ~pos ||*/ pos + ntoalign + size > ld)
	            luaL_argerror$3(L, 2, to_luastring$7("data string too short"));
	        pos += ntoalign;  /* skip alignment */
	        /* stack space for item + next position */
	        luaL_checkstack$2(L, 2, "too many results");
	        n++;
	        switch (opt) {
	            case Kint:
	            case Kuint: {
	                let res = unpackint(L, data.subarray(pos), h.islittle, size, opt === Kint);
	                lua_pushinteger$5(L, res);
	                break;
	            }
	            case Kfloat: {
	                let res = unpacknum(L, data.subarray(pos), h.islittle, size);
	                lua_pushnumber$2(L, res);
	                break;
	            }
	            case Kchar: {
	                lua_pushstring$4(L, data.subarray(pos, pos + size));
	                break;
	            }
	            case Kstring: {
	                let len = unpackint(L, data.subarray(pos), h.islittle, size, 0);
	                luaL_argcheck$3(L, pos + len + size <= ld, 2, "data string too short");
	                lua_pushstring$4(L, data.subarray(pos + size, pos + size + len));
	                pos += len;  /* skip string */
	                break;
	            }
	            case Kzstr: {
	                let e = luastring_indexOf$2(data, 0, pos);
	                if (e === -1) e = data.length - pos;
	                lua_pushstring$4(L, data.subarray(pos, e));
	                pos = e + 1;  /* skip string plus final '\0' */
	                break;
	            }
	            case Kpaddalign: case Kpadding: case Knop:
	                n--;  /* undo increment */
	                break;
	        }
	        pos += size;
	    }
	    lua_pushinteger$5(L, pos + 1);  /* next position */
	    return n + 1;
	};

	const CAP_UNFINISHED = -1;
	const CAP_POSITION   = -2;
	const MAXCCALLS      = 200;
	const SPECIALS       = to_luastring$7("^$*+?.([%-");

	class MatchState {
	    constructor(L) {
	        this.src = null;  /* unmodified source string */
	        this.src_init = null;  /* init of source string */
	        this.src_end = null;  /* end ('\0') of source string */
	        this.p = null;  /* unmodified pattern string */
	        this.p_end = null;  /* end ('\0') of pattern */
	        this.L = L;
	        this.matchdepth = NaN;  /* control for recursive depth */
	        this.level = NaN;  /* total number of captures (finished or unfinished) */
	        this.capture = [];
	    }
	}

	const check_capture = function(ms, l) {
	    l = l - 49 /* '1'.charCodeAt(0) */;
	    if (l < 0 || l >= ms.level || ms.capture[l].len === CAP_UNFINISHED)
	        return luaL_error$5(ms.L, to_luastring$7("invalid capture index %%%d"), l + 1);
	    return l;
	};

	const capture_to_close = function(ms) {
	    let level = ms.level;
	    for (level--; level >= 0; level--)
	        if (ms.capture[level].len === CAP_UNFINISHED) return level;
	    return luaL_error$5(ms.L, to_luastring$7("invalid pattern capture"));
	};

	const classend = function(ms, p) {
	    switch(ms.p[p++]) {
	        case L_ESC: {
	            if (p === ms.p_end)
	                luaL_error$5(ms.L, to_luastring$7("malformed pattern (ends with '%%')"));
	            return p + 1;
	        }
	        case 91 /* '['.charCodeAt(0) */: {
	            if (ms.p[p] === 94 /* '^'.charCodeAt(0) */) p++;
	            do {  /* look for a ']' */
	                if (p === ms.p_end)
	                    luaL_error$5(ms.L, to_luastring$7("malformed pattern (missing ']')"));
	                if (ms.p[p++] === L_ESC && p < ms.p_end)
	                    p++;  /* skip escapes (e.g. '%]') */
	            } while (ms.p[p] !== 93 /* ']'.charCodeAt(0) */);
	            return p + 1;
	        }
	        default: {
	            return p;
	        }
	    }
	};

	const match_class = function(c, cl) {
	    switch (cl) {
	        case 97  /* 'a'.charCodeAt(0) */: return  isalpha(c);
	        case 65  /* 'A'.charCodeAt(0) */: return !isalpha(c);
	        case 99  /* 'c'.charCodeAt(0) */: return  iscntrl(c);
	        case 67  /* 'C'.charCodeAt(0) */: return !iscntrl(c);
	        case 100 /* 'd'.charCodeAt(0) */: return  isdigit(c);
	        case 68  /* 'D'.charCodeAt(0) */: return !isdigit(c);
	        case 103 /* 'g'.charCodeAt(0) */: return  isgraph(c);
	        case 71  /* 'G'.charCodeAt(0) */: return !isgraph(c);
	        case 108 /* 'l'.charCodeAt(0) */: return  islower(c);
	        case 76  /* 'L'.charCodeAt(0) */: return !islower(c);
	        case 112 /* 'p'.charCodeAt(0) */: return  ispunct(c);
	        case 80  /* 'P'.charCodeAt(0) */: return !ispunct(c);
	        case 115 /* 's'.charCodeAt(0) */: return  isspace(c);
	        case 83  /* 'S'.charCodeAt(0) */: return !isspace(c);
	        case 117 /* 'u'.charCodeAt(0) */: return  isupper(c);
	        case 85  /* 'U'.charCodeAt(0) */: return !isupper(c);
	        case 119 /* 'w'.charCodeAt(0) */: return  isalnum(c);
	        case 87  /* 'W'.charCodeAt(0) */: return !isalnum(c);
	        case 120 /* 'x'.charCodeAt(0) */: return  isxdigit(c);
	        case 88  /* 'X'.charCodeAt(0) */: return !isxdigit(c);
	        case 122 /* 'z'.charCodeAt(0) */: return (c === 0);  /* deprecated option */
	        case 90  /* 'z'.charCodeAt(0) */: return (c !== 0);  /* deprecated option */
	        default: return (cl === c);
	    }
	};

	const matchbracketclass = function(ms, c, p, ec) {
	    let sig = true;
	    if (ms.p[p + 1] === 94 /* '^'.charCodeAt(0) */) {
	        sig = false;
	        p++;  /* skip the '^' */
	    }
	    while (++p < ec) {
	        if (ms.p[p] === L_ESC) {
	            p++;
	            if (match_class(c, ms.p[p]))
	                return sig;
	        } else if (ms.p[p + 1] === 45 /* '-'.charCodeAt(0) */ && p + 2 < ec) {
	            p += 2;
	            if (ms.p[p - 2] <= c && c <= ms.p[p])
	                return sig;
	        } else if (ms.p[p] === c) return sig;
	    }
	    return !sig;
	};

	const singlematch = function(ms, s, p, ep) {
	    if (s >= ms.src_end)
	        return false;
	    else {
	        let c = ms.src[s];
	        switch (ms.p[p]) {
	            case 46 /* '.'.charCodeAt(0) */: return true;  /* matches any char */
	            case L_ESC: return match_class(c, ms.p[p + 1]);
	            case 91 /* '['.charCodeAt(0) */: return matchbracketclass(ms, c, p, ep - 1);
	            default: return ms.p[p] === c;
	        }
	    }
	};

	const matchbalance = function(ms, s, p) {
	    if (p >= ms.p_end - 1)
	        luaL_error$5(ms.L, to_luastring$7("malformed pattern (missing arguments to '%%b'"));
	    if (ms.src[s] !== ms.p[p])
	        return null;
	    else {
	        let b = ms.p[p];
	        let e = ms.p[p + 1];
	        let cont = 1;
	        while (++s < ms.src_end) {
	            if (ms.src[s] === e) {
	                if (--cont === 0) return s + 1;
	            }
	            else if (ms.src[s] === b) cont++;
	        }
	    }
	    return null;  /* string ends out of balance */
	};

	const max_expand = function(ms, s, p, ep) {
	    let i = 0;  /* counts maximum expand for item */
	    while (singlematch(ms, s + i, p, ep))
	        i++;
	    /* keeps trying to match with the maximum repetitions */
	    while (i >= 0) {
	        let res = match(ms, s + i, ep + 1);
	        if (res) return res;
	        i--;  /* else didn't match; reduce 1 repetition to try again */
	    }
	    return null;
	};

	const min_expand = function(ms, s, p, ep) {
	    for (;;) {
	        let res = match(ms, s, ep + 1);
	        if (res !== null)
	            return res;
	        else if (singlematch(ms, s, p, ep))
	            s++;  /* try with one more repetition */
	        else return null;
	    }
	};

	const start_capture = function(ms, s, p, what) {
	    let level = ms.level;
	    if (level >= LUA_MAXCAPTURES) luaL_error$5(ms.L, to_luastring$7("too many captures"));
	    ms.capture[level] = ms.capture[level] ? ms.capture[level] : {};
	    ms.capture[level].init = s;
	    ms.capture[level].len = what;
	    ms.level = level + 1;
	    let res;
	    if ((res = match(ms, s, p)) === null)  /* match failed? */
	        ms.level--;  /* undo capture */
	    return res;
	};

	const end_capture = function(ms, s, p) {
	    let l = capture_to_close(ms);
	    ms.capture[l].len = s - ms.capture[l].init;  /* close capture */
	    let res;
	    if ((res = match(ms, s, p)) === null)  /* match failed? */
	        ms.capture[l].len = CAP_UNFINISHED;  /* undo capture */
	    return res;
	};

	/* Compare the elements of arrays 'a' and 'b' to see if they contain the same elements */
	const array_cmp = function(a, ai, b, bi, len) {
	    return luastring_eq(a.subarray(ai, ai+len), b.subarray(bi, bi+len));
	};

	const match_capture = function(ms, s, l) {
	    l = check_capture(ms, l);
	    let len = ms.capture[l].len;
	    if ((ms.src_end-s) >= len && array_cmp(ms.src, ms.capture[l].init, ms.src, s, len))
	        return s+len;
	    else return null;
	};

	const match = function(ms, s, p) {
	    let gotodefault = false;
	    let gotoinit = true;

	    if (ms.matchdepth-- === 0)
	        luaL_error$5(ms.L, to_luastring$7("pattern too complex"));

	    while (gotoinit || gotodefault) {
	        gotoinit = false;
	        if (p !== ms.p_end) {  /* end of pattern? */
	            switch (gotodefault ? void 0 : ms.p[p]) {
	                case 40 /* '('.charCodeAt(0) */: {  /* start capture */
	                    if (ms.p[p + 1] === 41 /* ')'.charCodeAt(0) */)  /* position capture? */
	                        s = start_capture(ms, s, p + 2, CAP_POSITION);
	                    else
	                        s = start_capture(ms, s, p + 1, CAP_UNFINISHED);
	                    break;
	                }
	                case 41 /* ')'.charCodeAt(0) */: {  /* end capture */
	                    s = end_capture(ms, s, p + 1);
	                    break;
	                }
	                case 36 /* '$'.charCodeAt(0) */: {
	                    if (p + 1 !== ms.p_end) {  /* is the '$' the last char in pattern? */
	                        gotodefault = true;  /* no; go to default */
	                        break;
	                    }
	                    s = (ms.src.length - s) === 0 ? s : null;  /* check end of string */
	                    break;
	                }
	                case L_ESC: {  /* escaped sequences not in the format class[*+?-]? */
	                    switch (ms.p[p + 1]) {
	                        case 98 /* 'b'.charCodeAt(0) */: {  /* balanced string? */
	                            s = matchbalance(ms, s, p + 2);
	                            if (s !== null) {
	                                p += 4;
	                                gotoinit = true;
	                            }
	                            break;
	                        }
	                        case 102 /* 'f'.charCodeAt(0) */: {  /* frontier? */
	                            p += 2;
	                            if (ms.p[p] !== 91 /* '['.charCodeAt(0) */)
	                                luaL_error$5(ms.L, to_luastring$7("missing '[' after '%%f' in pattern"));
	                            let ep = classend(ms, p);  /* points to what is next */
	                            let previous = s === ms.src_init ? 0 : ms.src[s-1];
	                            if (!matchbracketclass(ms, previous, p, ep - 1) && matchbracketclass(ms, (s===ms.src_end)?0:ms.src[s], p, ep - 1)) {
	                                p = ep; gotoinit = true; break;
	                            }
	                            s = null;  /* match failed */
	                            break;
	                        }
	                        case 48: case 49: case 50: case 51: case 52:
	                        case 53: case 54: case 55: case 56: case 57: {  /* capture results (%0-%9)? */
	                            s = match_capture(ms, s, ms.p[p + 1]);
	                            if (s !== null) {
	                                p += 2; gotoinit = true;
	                            }
	                            break;
	                        }
	                        default: gotodefault = true;
	                    }
	                    break;
	                }
	                default: {  /* pattern class plus optional suffix */
	                    gotodefault = false;
	                    let ep = classend(ms, p);  /* points to optional suffix */
	                    /* does not match at least once? */
	                    if (!singlematch(ms, s, p, ep)) {
	                        if (ms.p[ep] === 42 /* '*'.charCodeAt(0) */ ||
	                            ms.p[ep] === 63 /* '?'.charCodeAt(0) */ ||
	                            ms.p[ep] === 45 /* '-'.charCodeAt(0) */
	                        ) {  /* accept empty? */
	                            p = ep + 1; gotoinit = true; break;
	                        } else  /* '+' or no suffix */
	                            s = null;  /* fail */
	                    } else {  /* matched once */
	                        switch (ms.p[ep]) {  /* handle optional suffix */
	                            case 63 /* '?'.charCodeAt(0) */: {  /* optional */
	                                let res;
	                                if ((res = match(ms, s + 1, ep + 1)) !== null)
	                                    s = res;
	                                else {
	                                    p = ep + 1; gotoinit = true;
	                                }
	                                break;
	                            }
	                            case 43 /* '+'.charCodeAt(0) */:  /* 1 or more repetitions */
	                                s++;  /* 1 match already done */
	                                /* fall through */
	                            case 42 /* '*'.charCodeAt(0) */:  /* 0 or more repetitions */
	                                s = max_expand(ms, s, p, ep);
	                                break;
	                            case 45 /* '-'.charCodeAt(0) */:  /* 0 or more repetitions (minimum) */
	                                s = min_expand(ms, s, p, ep);
	                                break;
	                            default:  /* no suffix */
	                                s++; p = ep; gotoinit = true;
	                        }
	                    }
	                    break;
	                }
	            }
	        }
	    }
	    ms.matchdepth++;
	    return s;
	};

	const push_onecapture = function(ms, i, s, e) {
	    if (i >= ms.level) {
	        if (i === 0)
	            lua_pushlstring$1(ms.L, ms.src.subarray(s, e), e - s);  /* add whole match */
	        else
	            luaL_error$5(ms.L, to_luastring$7("invalid capture index %%%d"), i + 1);
	    } else {
	        let l = ms.capture[i].len;
	        if (l === CAP_UNFINISHED) luaL_error$5(ms.L, to_luastring$7("unfinished capture"));
	        if (l === CAP_POSITION)
	            lua_pushinteger$5(ms.L, ms.capture[i].init - ms.src_init + 1);
	        else
	            lua_pushlstring$1(ms.L, ms.src.subarray(ms.capture[i].init), l);
	    }
	};

	const push_captures = function(ms, s, e) {
	    let nlevels = ms.level === 0 && ms.src.subarray(s) ? 1 : ms.level;
	    luaL_checkstack$2(ms.L, nlevels, "too many captures");
	    for (let i = 0; i < nlevels; i++)
	        push_onecapture(ms, i, s, e);
	    return nlevels;  /* number of strings pushed */
	};

	const nospecials = function(p, l) {
	    for (let i=0; i<l; i++) {
	        if (luastring_indexOf$2(SPECIALS, p[i]) !== -1)
	            return false;
	    }
	    return true;
	};

	const prepstate = function(ms, L, s, ls, p, lp) {
	    ms.L = L;
	    ms.matchdepth = MAXCCALLS;
	    ms.src = s;
	    ms.src_init = 0;
	    ms.src_end = ls;
	    ms.p = p;
	    ms.p_end = lp;
	};

	const reprepstate = function(ms) {
	    ms.level = 0;
	    lualib$5.lua_assert(ms.matchdepth === MAXCCALLS);
	};

	const find_subarray = function(arr, subarr, from_index) {
	    var i = from_index >>> 0,
	        sl = subarr.length;

	    if (sl === 0)
	        return i;

	    for (; (i = arr.indexOf(subarr[0], i)) !== -1; i++) {
	        if (luastring_eq(arr.subarray(i, i+sl), subarr))
	            return i;
	    }

	    return -1;
	};

	const str_find_aux = function(L, find) {
	    let s = luaL_checkstring$3(L, 1);
	    let p = luaL_checkstring$3(L, 2);
	    let ls = s.length;
	    let lp = p.length;
	    let init = posrelat(luaL_optinteger$2(L, 3, 1), ls);
	    if (init < 1) init = 1;
	    else if (init > ls + 1) {  /* start after string's end? */
	        lua_pushnil$5(L);  /* cannot find anything */
	        return 1;
	    }
	    /* explicit request or no special characters? */
	    if (find && (lua_toboolean$2(L, 4) || nospecials(p, lp))) {
	        /* do a plain search */
	        let f = find_subarray(s.subarray(init - 1), p, 0);
	        if (f > -1) {
	            lua_pushinteger$5(L, init + f);
	            lua_pushinteger$5(L, init + f + lp - 1);
	            return 2;
	        }
	    } else {
	        let ms = new MatchState(L);
	        let s1 = init - 1;
	        let anchor = p[0] === 94 /* '^'.charCodeAt(0) */;
	        if (anchor) {
	            p = p.subarray(1); lp--;  /* skip anchor character */
	        }
	        prepstate(ms, L, s, ls, p, lp);
	        do {
	            let res;
	            reprepstate(ms);
	            if ((res = match(ms, s1, 0)) !== null) {
	                if (find) {
	                    lua_pushinteger$5(L, s1 + 1);  /* start */
	                    lua_pushinteger$5(L, res);   /* end */
	                    return push_captures(ms, null, 0) + 2;
	                } else
	                    return push_captures(ms, s1, res);
	            }
	        } while (s1++ < ms.src_end && !anchor);
	    }
	    lua_pushnil$5(L);  /* not found */
	    return 1;
	};

	const str_find = function(L) {
	    return str_find_aux(L, 1);
	};

	const str_match = function(L) {
	    return str_find_aux(L, 0);
	};

	/* state for 'gmatch' */
	class GMatchState {
	    constructor() {
	        this.src = NaN;  /* current position */
	        this.p = NaN;  /* pattern */
	        this.lastmatch = NaN;  /* end of last match */
	        this.ms = new MatchState();  /* match state */
	    }
	}

	const gmatch_aux = function(L) {
	    let gm = lua_touserdata$3(L, lua_upvalueindex$1(3));
	    gm.ms.L = L;
	    for (let src = gm.src; src <= gm.ms.src_end; src++) {
	        reprepstate(gm.ms);
	        let e;
	        if ((e = match(gm.ms, src, gm.p)) !== null && e !== gm.lastmatch) {
	            gm.src = gm.lastmatch = e;
	            return push_captures(gm.ms, src, e);
	        }
	    }
	    return 0;  /* not found */
	};

	const str_gmatch = function(L) {
	    let s = luaL_checkstring$3(L, 1);
	    let p = luaL_checkstring$3(L, 2);
	    let ls = s.length;
	    let lp = p.length;
	    lua_settop$4(L, 2);  /* keep them on closure to avoid being collected */
	    let gm = new GMatchState();
	    lua_pushlightuserdata$3(L, gm);
	    prepstate(gm.ms, L, s, ls, p, lp);
	    gm.src = 0;
	    gm.p = 0;
	    gm.lastmatch = null;
	    lua_pushcclosure$1(L, gmatch_aux, 3);
	    return 1;
	};

	const add_s = function(ms, b, s, e) {
	    let L = ms.L;
	    let news = lua_tostring$2(L, 3);
	    let l = news.length;
	    for (let i = 0; i < l; i++) {
	        if (news[i] !== L_ESC)
	            luaL_addchar(b, news[i]);
	        else {
	            i++;  /* skip ESC */
	            if (!isdigit(news[i])) {
	                if (news[i] !== L_ESC)
	                    luaL_error$5(L, to_luastring$7("invalid use of '%c' in replacement string"), L_ESC);
	                luaL_addchar(b, news[i]);
	            } else if (news[i] === 48 /* '0'.charCodeAt(0) */)
	                luaL_addlstring(b, ms.src.subarray(s, e), e - s);
	            else {
	                push_onecapture(ms, news[i] - 49 /* '1'.charCodeAt(0) */, s, e);
	                luaL_tolstring$1(L, -1);
	                lua_remove$1(L, -2);  /* remove original value */
	                luaL_addvalue$2(b);  /* add capture to accumulated result */
	            }
	        }
	    }
	};

	const add_value = function(ms, b, s, e, tr) {
	    let L = ms.L;
	    switch (tr) {
	        case LUA_TFUNCTION$2: {
	            lua_pushvalue$5(L, 3);
	            let n = push_captures(ms, s, e);
	            lua_call$2(L, n, 1);
	            break;
	        }
	        case LUA_TTABLE$3: {
	            push_onecapture(ms, 0, s, e);
	            lua_gettable$1(L, 3);
	            break;
	        }
	        default: {  /* LUA_TNUMBER or LUA_TSTRING */
	            add_s(ms, b, s, e);
	            return;
	        }
	    }
	    if (!lua_toboolean$2(L, -1)) {  /* nil or false? */
	        lua_pop$4(L, 1);
	        lua_pushlstring$1(L, ms.src.subarray(s, e), e - s);  /* keep original text */
	    } else if (!lua_isstring$1(L, -1))
	        luaL_error$5(L, to_luastring$7("invalid replacement value (a %s)"), luaL_typename(L, -1));
	    luaL_addvalue$2(b);  /* add result to accumulator */
	};

	const str_gsub = function(L) {
	    let src = luaL_checkstring$3(L, 1);  /* subject */
	    let srcl = src.length;
	    let p = luaL_checkstring$3(L, 2);  /* pattern */
	    let lp = p.length;
	    let lastmatch = null;  /* end of last match */
	    let tr = lua_type$3(L, 3);  /* replacement type */
	    let max_s = luaL_optinteger$2(L, 4, srcl + 1);  /* max replacements */
	    let anchor = p[0] === 94 /* '^'.charCodeAt(0) */;
	    let n = 0;  /* replacement count */
	    let ms = new MatchState(L);
	    let b = new luaL_Buffer$2();
	    luaL_argcheck$3(L, tr === LUA_TNUMBER$2 || tr === LUA_TSTRING$1 || tr === LUA_TFUNCTION$2 || tr === LUA_TTABLE$3, 3,
	        "string/function/table expected");
	    luaL_buffinit$2(L, b);
	    if (anchor) {
	        p = p.subarray(1); lp--;  /* skip anchor character */
	    }
	    prepstate(ms, L, src, srcl, p, lp);
	    src = 0; p = 0;
	    while (n < max_s) {
	        let e;
	        reprepstate(ms);
	        if ((e = match(ms, src, p)) !== null && e !== lastmatch) {  /* match? */
	            n++;
	            add_value(ms, b, src, e, tr);  /* add replacement to buffer */
	            src = lastmatch = e;
	        } else if (src < ms.src_end)  /* otherwise, skip one character */
	            luaL_addchar(b, ms.src[src++]);
	        else break;  /* end of subject */
	        if (anchor) break;
	    }
	    luaL_addlstring(b, ms.src.subarray(src, ms.src_end), ms.src_end - src);
	    luaL_pushresult$2(b);
	    lua_pushinteger$5(L, n);  /* number of substitutions */
	    return 2;
	};

	const strlib = {
	    "byte":     str_byte,
	    "char":     str_char,
	    "dump":     str_dump,
	    "find":     str_find,
	    "format":   str_format,
	    "gmatch":   str_gmatch,
	    "gsub":     str_gsub,
	    "len":      str_len,
	    "lower":    str_lower,
	    "match":    str_match,
	    "pack":     str_pack,
	    "packsize": str_packsize,
	    "rep":      str_rep,
	    "reverse":  str_reverse,
	    "sub":      str_sub,
	    "unpack":   str_unpack,
	    "upper":    str_upper
	};

	const createmetatable = function(L) {
	    lua_createtable$1(L, 0, 1);  /* table to be metatable for strings */
	    lua_pushliteral$5(L, "");  /* dummy string */
	    lua_pushvalue$5(L, -2);  /* copy table */
	    lua_setmetatable$2(L, -2);  /* set table as metatable for strings */
	    lua_pop$4(L, 1);  /* pop dummy string */
	    lua_pushvalue$5(L, -2);  /* get string library */
	    lua_setfield$6(L, -2, to_luastring$7("__index", true));  /* metatable.__index = string */
	    lua_pop$4(L, 1);  /* pop metatable */
	};

	const luaopen_string$1 = function(L) {
	    luaL_newlib$6(L, strlib);
	    createmetatable(L);
	    return 1;
	};

	lstrlib.luaopen_string = luaopen_string$1;

	var lutf8lib = {};

	const {
	    lua_gettop: lua_gettop$2,
	    lua_pushcfunction: lua_pushcfunction$2,
	    lua_pushfstring: lua_pushfstring$2,
	    lua_pushinteger: lua_pushinteger$4,
	    lua_pushnil: lua_pushnil$4,
	    lua_pushstring: lua_pushstring$3,
	    lua_pushvalue: lua_pushvalue$4,
	    lua_setfield: lua_setfield$5,
	    lua_tointeger: lua_tointeger$1
	} = lua$2;
	const {
	    luaL_Buffer: luaL_Buffer$1,
	    luaL_addvalue: luaL_addvalue$1,
	    luaL_argcheck: luaL_argcheck$2,
	    luaL_buffinit: luaL_buffinit$1,
	    luaL_checkinteger: luaL_checkinteger$2,
	    luaL_checkstack: luaL_checkstack$1,
	    luaL_checkstring: luaL_checkstring$2,
	    luaL_error: luaL_error$4,
	    luaL_newlib: luaL_newlib$5,
	    luaL_optinteger: luaL_optinteger$1,
	    luaL_pushresult: luaL_pushresult$1
	} = lauxlib$2;
	const {
	    luastring_of,
	    to_luastring: to_luastring$6
	} = fengaricore;

	const MAXUNICODE = 0x10FFFF;

	const iscont = function(p) {
	    let c = p & 0xC0;
	    return c === 0x80;
	};

	/* translate a relative string position: negative means back from end */
	const u_posrelat = function(pos, len) {
	    if (pos >= 0) return pos;
	    else if (0 - pos > len) return 0;
	    else return len + pos + 1;
	};

	/*
	** Decode one UTF-8 sequence, returning NULL if byte sequence is invalid.
	*/
	const limits = [0xFF, 0x7F, 0x7FF, 0xFFFF];
	const utf8_decode = function(s, pos) {
	    let c = s[pos];
	    let res = 0;  /* final result */
	    if (c < 0x80)  /* ascii? */
	        res = c;
	    else {
	        let count = 0;  /* to count number of continuation bytes */
	        while (c & 0x40) {  /* still have continuation bytes? */
	            let cc = s[pos + (++count)];  /* read next byte */
	            if ((cc & 0xC0) !== 0x80)  /* not a continuation byte? */
	                return null;  /* invalid byte sequence */
	            res = (res << 6) | (cc & 0x3F);  /* add lower 6 bits from cont. byte */
	            c <<= 1;  /* to test next bit */
	        }
	        res |= ((c & 0x7F) << (count * 5));  /* add first byte */
	        if (count > 3 || res > MAXUNICODE || res <= limits[count])
	            return null;  /* invalid byte sequence */
	        pos += count;  /* skip continuation bytes read */
	    }

	    return {
	        code: res,
	        pos: pos + 1
	    };
	};

	/*
	** utf8len(s [, i [, j]]) --> number of characters that start in the
	** range [i,j], or nil + current position if 's' is not well formed in
	** that interval
	*/
	const utflen = function(L) {
	    let n = 0;
	    let s = luaL_checkstring$2(L, 1);
	    let len = s.length;
	    let posi = u_posrelat(luaL_optinteger$1(L, 2, 1), len);
	    let posj = u_posrelat(luaL_optinteger$1(L, 3, -1), len);

	    luaL_argcheck$2(L, 1 <= posi && --posi <= len, 2, "initial position out of string");
	    luaL_argcheck$2(L, --posj < len, 3, "final position out of string");

	    while (posi <= posj) {
	        let dec = utf8_decode(s, posi);
	        if (dec === null) { /* conversion error? */
	            lua_pushnil$4(L);  /* return nil ... */
	            lua_pushinteger$4(L, posi + 1);  /* ... and current position */
	            return 2;
	        }
	        posi = dec.pos;
	        n++;
	    }
	    lua_pushinteger$4(L, n);
	    return 1;
	};

	const p_U = to_luastring$6("%U");
	const pushutfchar = function(L, arg) {
	    let code = luaL_checkinteger$2(L, arg);
	    luaL_argcheck$2(L, 0 <= code && code <= MAXUNICODE, arg, "value out of range");
	    lua_pushfstring$2(L, p_U, code);
	};

	/*
	** utfchar(n1, n2, ...)  -> char(n1)..char(n2)...
	*/
	const utfchar = function(L) {
	    let n = lua_gettop$2(L);  /* number of arguments */
	    if (n === 1)  /* optimize common case of single char */
	        pushutfchar(L, 1);
	    else {
	        let b = new luaL_Buffer$1();
	        luaL_buffinit$1(L, b);
	        for (let i = 1; i <= n; i++) {
	            pushutfchar(L, i);
	            luaL_addvalue$1(b);
	        }
	        luaL_pushresult$1(b);
	    }
	    return 1;
	};

	/*
	** offset(s, n, [i])  -> index where n-th character counting from
	**   position 'i' starts; 0 means character at 'i'.
	*/
	const byteoffset = function(L) {
	    let s = luaL_checkstring$2(L, 1);
	    let n = luaL_checkinteger$2(L, 2);
	    let posi = n >= 0 ? 1 : s.length + 1;
	    posi = u_posrelat(luaL_optinteger$1(L, 3, posi), s.length);

	    luaL_argcheck$2(L, 1 <= posi && --posi <= s.length, 3, "position out of range");

	    if (n === 0) {
	        /* find beginning of current byte sequence */
	        while (posi > 0 && iscont(s[posi])) posi--;
	    } else {
	        if (iscont(s[posi]))
	            luaL_error$4(L, "initial position is a continuation byte");

	        if (n < 0) {
	            while (n < 0 && posi > 0) {  /* move back */
	                do {  /* find beginning of previous character */
	                    posi--;
	                } while (posi > 0 && iscont(s[posi]));
	                n++;
	            }
	        } else {
	            n--;  /* do not move for 1st character */
	            while (n > 0 && posi < s.length) {
	                do {  /* find beginning of next character */
	                    posi++;
	                } while (iscont(s[posi]));  /* (cannot pass final '\0') */
	                n--;
	            }
	        }
	    }

	    if (n === 0)  /* did it find given character? */
	        lua_pushinteger$4(L, posi + 1);
	    else  /* no such character */
	        lua_pushnil$4(L);

	    return 1;
	};

	/*
	** codepoint(s, [i, [j]])  -> returns codepoints for all characters
	** that start in the range [i,j]
	*/
	const codepoint = function(L) {
	    let s = luaL_checkstring$2(L, 1);
	    let posi = u_posrelat(luaL_optinteger$1(L, 2, 1), s.length);
	    let pose = u_posrelat(luaL_optinteger$1(L, 3, posi), s.length);

	    luaL_argcheck$2(L, posi >= 1, 2, "out of range");
	    luaL_argcheck$2(L, pose <= s.length, 3, "out of range");

	    if (posi > pose) return 0;  /* empty interval; return no values */
	    if (pose - posi >= Number.MAX_SAFE_INTEGER)
	        return luaL_error$4(L, "string slice too long");
	    let n = (pose - posi) + 1;
	    luaL_checkstack$1(L, n, "string slice too long");
	    n = 0;
	    for (posi -= 1; posi < pose;) {
	        let dec = utf8_decode(s, posi);
	        if (dec === null)
	            return luaL_error$4(L, "invalid UTF-8 code");
	        lua_pushinteger$4(L, dec.code);
	        posi = dec.pos;
	        n++;
	    }
	    return n;
	};

	const iter_aux = function(L) {
	    let s = luaL_checkstring$2(L, 1);
	    let len = s.length;
	    let n = lua_tointeger$1(L, 2) - 1;

	    if (n < 0)  /* first iteration? */
	        n = 0;  /* start from here */
	    else if (n < len) {
	        n++;  /* skip current byte */
	        while (iscont(s[n])) n++;  /* and its continuations */
	    }

	    if (n >= len)
	        return 0;  /* no more codepoints */
	    else {
	        let dec = utf8_decode(s, n);
	        if (dec === null || iscont(s[dec.pos]))
	            return luaL_error$4(L, to_luastring$6("invalid UTF-8 code"));
	        lua_pushinteger$4(L, n + 1);
	        lua_pushinteger$4(L, dec.code);
	        return 2;
	    }
	};

	const iter_codes = function(L) {
	    luaL_checkstring$2(L, 1);
	    lua_pushcfunction$2(L, iter_aux);
	    lua_pushvalue$4(L, 1);
	    lua_pushinteger$4(L, 0);
	    return 3;
	};

	const funcs = {
	    "char":      utfchar,
	    "codepoint": codepoint,
	    "codes":     iter_codes,
	    "len":       utflen,
	    "offset":    byteoffset
	};

	/* pattern to match a single UTF-8 character */
	const UTF8PATT = luastring_of(91, 0, 45, 127, 194, 45, 244, 93, 91, 128, 45, 191, 93, 42);

	const luaopen_utf8$1 = function(L) {
	    luaL_newlib$5(L, funcs);
	    lua_pushstring$3(L, UTF8PATT);
	    lua_setfield$5(L, -2, to_luastring$6("charpattern", true));
	    return 1;
	};

	lutf8lib.luaopen_utf8 = luaopen_utf8$1;

	var lmathlib = {};

	const {
	    LUA_OPLT,
	    LUA_TNUMBER: LUA_TNUMBER$1,
	    lua_compare,
	    lua_gettop: lua_gettop$1,
	    lua_isinteger,
	    lua_isnoneornil: lua_isnoneornil$1,
	    lua_pushboolean: lua_pushboolean$3,
	    lua_pushinteger: lua_pushinteger$3,
	    lua_pushliteral: lua_pushliteral$4,
	    lua_pushnil: lua_pushnil$3,
	    lua_pushnumber: lua_pushnumber$1,
	    lua_pushvalue: lua_pushvalue$3,
	    lua_setfield: lua_setfield$4,
	    lua_settop: lua_settop$3,
	    lua_tointeger,
	    lua_tointegerx,
	    lua_type: lua_type$2
	} = lua$2;
	const {
	    luaL_argcheck: luaL_argcheck$1,
	    luaL_argerror: luaL_argerror$2,
	    luaL_checkany: luaL_checkany$2,
	    luaL_checkinteger: luaL_checkinteger$1,
	    luaL_checknumber,
	    luaL_error: luaL_error$3,
	    luaL_newlib: luaL_newlib$4,
	    luaL_optnumber
	} = lauxlib$2;
	const {
	    LUA_MAXINTEGER,
	    LUA_MININTEGER,
	    lua_numbertointeger
	} = luaconf$1;
	const { to_luastring: to_luastring$5 } = fengaricore;

	let rand_state;
	/* use same parameters as glibc LCG */
	const l_rand = function() {
	    rand_state = (1103515245 * rand_state + 12345) & 0x7fffffff;
	    return rand_state;
	};
	const l_srand = function(x) {
	    rand_state = x|0;
	    if (rand_state === 0)
	        rand_state = 1;
	};

	const math_random = function(L) {
	    let low, up;
	    /* use Math.random until randomseed is called */
	    let r = (rand_state === void 0)?Math.random():(l_rand() / 0x80000000);
	    switch (lua_gettop$1(L)) {  /* check number of arguments */
	        case 0:
	            lua_pushnumber$1(L, r);  /* Number between 0 and 1 */
	            return 1;
	        case 1: {
	            low = 1;
	            up = luaL_checkinteger$1(L, 1);
	            break;
	        }
	        case 2: {
	            low = luaL_checkinteger$1(L, 1);
	            up = luaL_checkinteger$1(L, 2);
	            break;
	        }
	        default: return luaL_error$3(L, "wrong number of arguments");
	    }

	    /* random integer in the interval [low, up] */
	    luaL_argcheck$1(L, low <= up, 1, "interval is empty");
	    luaL_argcheck$1(L, low >= 0 || up <= LUA_MAXINTEGER + low, 1,
	        "interval too large");

	    r *= (up - low) + 1;
	    lua_pushinteger$3(L, Math.floor(r) + low);
	    return 1;
	};

	const math_randomseed = function(L) {
	    l_srand(luaL_checknumber(L, 1));
	    l_rand(); /* discard first value to avoid undesirable correlations */
	    return 0;
	};

	const math_abs = function(L) {
	    if (lua_isinteger(L, 1)) {
	        let n = lua_tointeger(L, 1);
	        if (n < 0) n = (-n)|0;
	        lua_pushinteger$3(L, n);
	    }
	    else
	        lua_pushnumber$1(L, Math.abs(luaL_checknumber(L, 1)));
	    return 1;
	};

	const math_sin = function(L) {
	    lua_pushnumber$1(L, Math.sin(luaL_checknumber(L, 1)));
	    return 1;
	};

	const math_cos = function(L) {
	    lua_pushnumber$1(L, Math.cos(luaL_checknumber(L, 1)));
	    return 1;
	};

	const math_tan = function(L) {
	    lua_pushnumber$1(L, Math.tan(luaL_checknumber(L, 1)));
	    return 1;
	};

	const math_asin = function(L) {
	    lua_pushnumber$1(L, Math.asin(luaL_checknumber(L, 1)));
	    return 1;
	};

	const math_acos = function(L) {
	    lua_pushnumber$1(L, Math.acos(luaL_checknumber(L, 1)));
	    return 1;
	};

	const math_atan = function(L) {
	    let y = luaL_checknumber(L, 1);
	    let x = luaL_optnumber(L, 2, 1);
	    lua_pushnumber$1(L, Math.atan2(y, x));
	    return 1;
	};

	const math_toint = function(L) {
	    let n = lua_tointegerx(L, 1);
	    if (n !== false)
	        lua_pushinteger$3(L, n);
	    else {
	        luaL_checkany$2(L, 1);
	        lua_pushnil$3(L);  /* value is not convertible to integer */
	    }
	    return 1;
	};

	const pushnumint = function(L, d) {
	    let n = lua_numbertointeger(d);
	    if (n !== false)  /* does 'd' fit in an integer? */
	        lua_pushinteger$3(L, n);  /* result is integer */
	    else
	        lua_pushnumber$1(L, d);  /* result is float */
	};

	const math_floor = function(L) {
	    if (lua_isinteger(L, 1))
	        lua_settop$3(L, 1);
	    else
	        pushnumint(L, Math.floor(luaL_checknumber(L, 1)));

	    return 1;
	};

	const math_ceil = function(L) {
	    if (lua_isinteger(L, 1))
	        lua_settop$3(L, 1);
	    else
	        pushnumint(L, Math.ceil(luaL_checknumber(L, 1)));

	    return 1;
	};

	const math_sqrt = function(L) {
	    lua_pushnumber$1(L, Math.sqrt(luaL_checknumber(L, 1)));
	    return 1;
	};

	const math_ult = function(L) {
	    let a = luaL_checkinteger$1(L, 1);
	    let b = luaL_checkinteger$1(L, 2);
	    lua_pushboolean$3(L, (a >= 0)?(b<0 || a<b):(b<0 && a<b));
	    return 1;
	};

	const math_log = function(L) {
	    let x = luaL_checknumber(L, 1);
	    let res;
	    if (lua_isnoneornil$1(L, 2))
	        res = Math.log(x);
	    else {
	        let base = luaL_checknumber(L, 2);
	        if (base === 2)
	            res = Math.log2(x);
	        else if (base === 10)
	            res = Math.log10(x);
	        else
	            res = Math.log(x)/Math.log(base);
	    }
	    lua_pushnumber$1(L, res);
	    return 1;
	};

	const math_exp = function(L) {
	    lua_pushnumber$1(L, Math.exp(luaL_checknumber(L, 1)));
	    return 1;
	};

	const math_deg = function(L) {
	    lua_pushnumber$1(L, luaL_checknumber(L, 1) * (180 / Math.PI));
	    return 1;
	};

	const math_rad = function(L) {
	    lua_pushnumber$1(L, luaL_checknumber(L, 1) * (Math.PI / 180));
	    return 1;
	};

	const math_min = function(L) {
	    let n = lua_gettop$1(L);  /* number of arguments */
	    let imin = 1;  /* index of current minimum value */
	    luaL_argcheck$1(L, n >= 1, 1, "value expected");
	    for (let i = 2; i <= n; i++){
	        if (lua_compare(L, i, imin, LUA_OPLT))
	            imin = i;
	    }
	    lua_pushvalue$3(L, imin);
	    return 1;
	};

	const math_max = function(L) {
	    let n = lua_gettop$1(L);  /* number of arguments */
	    let imax = 1;  /* index of current minimum value */
	    luaL_argcheck$1(L, n >= 1, 1, "value expected");
	    for (let i = 2; i <= n; i++){
	        if (lua_compare(L, imax, i, LUA_OPLT))
	            imax = i;
	    }
	    lua_pushvalue$3(L, imax);
	    return 1;
	};

	const math_type = function(L) {
	    if (lua_type$2(L, 1) === LUA_TNUMBER$1) {
	        if (lua_isinteger(L, 1))
	            lua_pushliteral$4(L, "integer");
	        else
	            lua_pushliteral$4(L, "float");
	    } else {
	        luaL_checkany$2(L, 1);
	        lua_pushnil$3(L);
	    }
	    return 1;
	};

	const math_fmod = function(L) {
	    if (lua_isinteger(L, 1) && lua_isinteger(L, 2)) {
	        let d = lua_tointeger(L, 2);
	        /* no special case needed for -1 in javascript */
	        if (d === 0) {
	            luaL_argerror$2(L, 2, "zero");
	        } else
	            lua_pushinteger$3(L, (lua_tointeger(L, 1) % d)|0);
	    } else {
	        let a = luaL_checknumber(L, 1);
	        let b = luaL_checknumber(L, 2);
	        lua_pushnumber$1(L, a%b);
	    }
	    return 1;
	};

	const math_modf = function(L) {
	    if (lua_isinteger(L, 1)) {
	        lua_settop$3(L, 1);  /* number is its own integer part */
	        lua_pushnumber$1(L, 0);  /* no fractional part */
	    } else {
	        let n = luaL_checknumber(L, 1);
	        let ip = n < 0 ? Math.ceil(n) : Math.floor(n);
	        pushnumint(L, ip);
	        lua_pushnumber$1(L, n === ip ? 0 : n - ip);
	    }
	    return 2;
	};

	const mathlib = {
	    "abs":        math_abs,
	    "acos":       math_acos,
	    "asin":       math_asin,
	    "atan":       math_atan,
	    "ceil":       math_ceil,
	    "cos":        math_cos,
	    "deg":        math_deg,
	    "exp":        math_exp,
	    "floor":      math_floor,
	    "fmod":       math_fmod,
	    "log":        math_log,
	    "max":        math_max,
	    "min":        math_min,
	    "modf":       math_modf,
	    "rad":        math_rad,
	    "random":     math_random,
	    "randomseed": math_randomseed,
	    "sin":        math_sin,
	    "sqrt":       math_sqrt,
	    "tan":        math_tan,
	    "tointeger":  math_toint,
	    "type":       math_type,
	    "ult":        math_ult
	};

	const luaopen_math$1 = function(L) {
	    luaL_newlib$4(L, mathlib);
	    lua_pushnumber$1(L, Math.PI);
	    lua_setfield$4(L, -2, to_luastring$5("pi", true));
	    lua_pushnumber$1(L, Infinity);
	    lua_setfield$4(L, -2, to_luastring$5("huge", true));
	    lua_pushinteger$3(L, LUA_MAXINTEGER);
	    lua_setfield$4(L, -2, to_luastring$5("maxinteger", true));
	    lua_pushinteger$3(L, LUA_MININTEGER);
	    lua_setfield$4(L, -2, to_luastring$5("mininteger", true));
	    return 1;
	};

	lmathlib.luaopen_math = luaopen_math$1;

	var ldblib = {};

	var readlineSync = {};

	/*
	 * readlineSync
	 * https://github.com/anseki/readline-sync
	 *
	 * Copyright (c) 2019 anseki
	 * Licensed under the MIT license.
	 */

	(function (exports) {

	var
	  IS_WIN = process.platform === 'win32',

	  ALGORITHM_CIPHER = 'aes-256-cbc',
	  ALGORITHM_HASH = 'sha256',
	  DEFAULT_ERR_MSG = 'The current environment doesn\'t support interactive reading from TTY.',

	  fs = require$$0__default["default"],
	  TTY = process.binding('tty_wrap').TTY,
	  childProc = require$$5__default["default"],
	  pathUtil = require$$1__default$1["default"],

	  defaultOptions = {
	    /* eslint-disable key-spacing */
	    prompt:             '> ',
	    hideEchoBack:       false,
	    mask:               '*',
	    limit:              [],
	    limitMessage:       'Input another, please.$<( [)limit(])>',
	    defaultInput:       '',
	    trueValue:          [],
	    falseValue:         [],
	    caseSensitive:      false,
	    keepWhitespace:     false,
	    encoding:           'utf8',
	    bufferSize:         1024,
	    print:              void 0,
	    history:            true,
	    cd:                 false,
	    phContent:          void 0,
	    preCheck:           void 0
	    /* eslint-enable key-spacing */
	  },

	  fdR = 'none',
	  isRawMode = false,
	  salt = 0,
	  lastInput = '',
	  inputHistory = [],
	  _DBG_useExt = false,
	  _DBG_checkOptions = false,
	  _DBG_checkMethod = false,
	  fdW, ttyR, extHostPath, extHostArgs, tempdir, rawInput;

	function getHostArgs(options) {
	  // Send any text to crazy Windows shell safely.
	  function encodeArg(arg) {
	    return arg.replace(/[^\w\u0080-\uFFFF]/g, function(chr) {
	      return '#' + chr.charCodeAt(0) + ';';
	    });
	  }

	  return extHostArgs.concat((function(conf) {
	    var args = [];
	    Object.keys(conf).forEach(function(optionName) {
	      if (conf[optionName] === 'boolean') {
	        if (options[optionName]) { args.push('--' + optionName); }
	      } else if (conf[optionName] === 'string') {
	        if (options[optionName]) {
	          args.push('--' + optionName, encodeArg(options[optionName]));
	        }
	      }
	    });
	    return args;
	  })({
	    /* eslint-disable key-spacing */
	    display:        'string',
	    displayOnly:    'boolean',
	    keyIn:          'boolean',
	    hideEchoBack:   'boolean',
	    mask:           'string',
	    limit:          'string',
	    caseSensitive:  'boolean'
	    /* eslint-enable key-spacing */
	  }));
	}

	// piping via files (for Node.js v0.10-)
	function _execFileSync(options, execOptions) {

	  function getTempfile(name) {
	    var suffix = '',
	      filepath, fd;
	    tempdir = tempdir || require$$1__default["default"].tmpdir();

	    while (true) {
	      filepath = pathUtil.join(tempdir, name + suffix);
	      try {
	        fd = fs.openSync(filepath, 'wx');
	      } catch (e) {
	        if (e.code === 'EEXIST') {
	          suffix++;
	          continue;
	        } else {
	          throw e;
	        }
	      }
	      fs.closeSync(fd);
	      break;
	    }
	    return filepath;
	  }

	  var res = {},
	    pathStdout = getTempfile('readline-sync.stdout'),
	    pathStderr = getTempfile('readline-sync.stderr'),
	    pathExit = getTempfile('readline-sync.exit'),
	    pathDone = getTempfile('readline-sync.done'),
	    crypto = require$$2__default["default"],
	    hostArgs, shellPath, shellArgs, exitCode, extMessage, shasum, decipher, password;

	  shasum = crypto.createHash(ALGORITHM_HASH);
	  shasum.update('' + process.pid + (salt++) + Math.random());
	  password = shasum.digest('hex');
	  decipher = crypto.createDecipher(ALGORITHM_CIPHER, password);

	  hostArgs = getHostArgs(options);
	  if (IS_WIN) {
	    shellPath = process.env.ComSpec || 'cmd.exe';
	    process.env.Q = '"'; // The quote (") that isn't escaped.
	    // `()` for ignore space by echo
	    shellArgs = ['/V:ON', '/S', '/C',
	      '(%Q%' + shellPath + '%Q% /V:ON /S /C %Q%' + /* ESLint bug? */ // eslint-disable-line no-path-concat
	        '%Q%' + extHostPath + '%Q%' +
	          hostArgs.map(function(arg) { return ' %Q%' + arg + '%Q%'; }).join('') +
	        ' & (echo !ERRORLEVEL!)>%Q%' + pathExit + '%Q%%Q%) 2>%Q%' + pathStderr + '%Q%' +
	      ' |%Q%' + process.execPath + '%Q% %Q%' + __dirname + '\\encrypt.js%Q%' +
	        ' %Q%' + ALGORITHM_CIPHER + '%Q% %Q%' + password + '%Q%' +
	        ' >%Q%' + pathStdout + '%Q%' +
	      ' & (echo 1)>%Q%' + pathDone + '%Q%'];
	  } else {
	    shellPath = '/bin/sh';
	    shellArgs = ['-c',
	      // Use `()`, not `{}` for `-c` (text param)
	      '("' + extHostPath + '"' + /* ESLint bug? */ // eslint-disable-line no-path-concat
	          hostArgs.map(function(arg) { return " '" + arg.replace(/'/g, "'\\''") + "'"; }).join('') +
	        '; echo $?>"' + pathExit + '") 2>"' + pathStderr + '"' +
	      ' |"' + process.execPath + '" "' + __dirname + '/encrypt.js"' +
	        ' "' + ALGORITHM_CIPHER + '" "' + password + '"' +
	        ' >"' + pathStdout + '"' +
	      '; echo 1 >"' + pathDone + '"'];
	  }
	  if (_DBG_checkMethod) { _DBG_checkMethod('_execFileSync', hostArgs); }
	  try {
	    childProc.spawn(shellPath, shellArgs, execOptions);
	  } catch (e) {
	    res.error = new Error(e.message);
	    res.error.method = '_execFileSync - spawn';
	    res.error.program = shellPath;
	    res.error.args = shellArgs;
	  }

	  while (fs.readFileSync(pathDone, {encoding: options.encoding}).trim() !== '1') {} // eslint-disable-line no-empty
	  if ((exitCode =
	      fs.readFileSync(pathExit, {encoding: options.encoding}).trim()) === '0') {
	    res.input =
	      decipher.update(fs.readFileSync(pathStdout, {encoding: 'binary'}),
	        'hex', options.encoding) +
	      decipher.final(options.encoding);
	  } else {
	    extMessage = fs.readFileSync(pathStderr, {encoding: options.encoding}).trim();
	    res.error = new Error(DEFAULT_ERR_MSG + (extMessage ? '\n' + extMessage : ''));
	    res.error.method = '_execFileSync';
	    res.error.program = shellPath;
	    res.error.args = shellArgs;
	    res.error.extMessage = extMessage;
	    res.error.exitCode = +exitCode;
	  }

	  fs.unlinkSync(pathStdout);
	  fs.unlinkSync(pathStderr);
	  fs.unlinkSync(pathExit);
	  fs.unlinkSync(pathDone);

	  return res;
	}

	function readlineExt(options) {
	  var res = {},
	    execOptions = {env: process.env, encoding: options.encoding},
	    hostArgs, extMessage;

	  if (!extHostPath) {
	    if (IS_WIN) {
	      if (process.env.PSModulePath) { // Windows PowerShell
	        extHostPath = 'powershell.exe';
	        extHostArgs = ['-ExecutionPolicy', 'Bypass',
	          '-File', __dirname + '\\read.ps1']; // eslint-disable-line no-path-concat
	      } else { // Windows Script Host
	        extHostPath = 'cscript.exe';
	        extHostArgs = ['//nologo', __dirname + '\\read.cs.js']; // eslint-disable-line no-path-concat
	      }
	    } else {
	      extHostPath = '/bin/sh';
	      extHostArgs = [__dirname + '/read.sh']; // eslint-disable-line no-path-concat
	    }
	  }
	  if (IS_WIN && !process.env.PSModulePath) { // Windows Script Host
	    // ScriptPW (Win XP and Server2003) needs TTY stream as STDIN.
	    // In this case, If STDIN isn't TTY, an error is thrown.
	    execOptions.stdio = [process.stdin];
	  }

	  if (childProc.execFileSync) {
	    hostArgs = getHostArgs(options);
	    if (_DBG_checkMethod) { _DBG_checkMethod('execFileSync', hostArgs); }
	    try {
	      res.input = childProc.execFileSync(extHostPath, hostArgs, execOptions);
	    } catch (e) { // non-zero exit code
	      extMessage = e.stderr ? (e.stderr + '').trim() : '';
	      res.error = new Error(DEFAULT_ERR_MSG + (extMessage ? '\n' + extMessage : ''));
	      res.error.method = 'execFileSync';
	      res.error.program = extHostPath;
	      res.error.args = hostArgs;
	      res.error.extMessage = extMessage;
	      res.error.exitCode = e.status;
	      res.error.code = e.code;
	      res.error.signal = e.signal;
	    }
	  } else {
	    res = _execFileSync(options, execOptions);
	  }
	  if (!res.error) {
	    res.input = res.input.replace(/^\s*'|'\s*$/g, '');
	    options.display = '';
	  }

	  return res;
	}

	/*
	  display:            string
	  displayOnly:        boolean
	  keyIn:              boolean
	  hideEchoBack:       boolean
	  mask:               string
	  limit:              string (pattern)
	  caseSensitive:      boolean
	  keepWhitespace:     boolean
	  encoding, bufferSize, print
	*/
	function _readlineSync(options) {
	  var input = '',
	    displaySave = options.display,
	    silent = !options.display && options.keyIn && options.hideEchoBack && !options.mask;

	  function tryExt() {
	    var res = readlineExt(options);
	    if (res.error) { throw res.error; }
	    return res.input;
	  }

	  if (_DBG_checkOptions) { _DBG_checkOptions(options); }

	  (function() { // open TTY
	    var fsB, constants, verNum;

	    function getFsB() {
	      if (!fsB) {
	        fsB = process.binding('fs'); // For raw device path
	        constants = process.binding('constants');
	        // for v6.3.0+
	        constants = constants && constants.fs && typeof constants.fs.O_RDWR === 'number'
	          ? constants.fs : constants;
	      }
	      return fsB;
	    }

	    if (typeof fdR !== 'string') { return; }
	    fdR = null;

	    if (IS_WIN) {
	      // iojs-v2.3.2+ input stream can't read first line. (#18)
	      // ** Don't get process.stdin before check! **
	      // Fixed v5.1.0
	      // Fixed v4.2.4
	      // It regressed again in v5.6.0, it is fixed in v6.2.0.
	      verNum = (function(ver) { // getVerNum
	        var nums = ver.replace(/^\D+/, '').split('.');
	        var verNum = 0;
	        if ((nums[0] = +nums[0])) { verNum += nums[0] * 10000; }
	        if ((nums[1] = +nums[1])) { verNum += nums[1] * 100; }
	        if ((nums[2] = +nums[2])) { verNum += nums[2]; }
	        return verNum;
	      })(process.version);
	      if (!(verNum >= 20302 && verNum < 40204 || verNum >= 50000 && verNum < 50100 || verNum >= 50600 && verNum < 60200) &&
	          process.stdin.isTTY) {
	        process.stdin.pause();
	        fdR = process.stdin.fd;
	        ttyR = process.stdin._handle;
	      } else {
	        try {
	          // The stream by fs.openSync('\\\\.\\CON', 'r') can't switch to raw mode.
	          // 'CONIN$' might fail on XP, 2000, 7 (x86).
	          fdR = getFsB().open('CONIN$', constants.O_RDWR, parseInt('0666', 8));
	          ttyR = new TTY(fdR, true);
	        } catch (e) { /* ignore */ }
	      }

	      if (process.stdout.isTTY) {
	        fdW = process.stdout.fd;
	      } else {
	        try {
	          fdW = fs.openSync('\\\\.\\CON', 'w');
	        } catch (e) { /* ignore */ }
	        if (typeof fdW !== 'number') { // Retry
	          try {
	            fdW = getFsB().open('CONOUT$', constants.O_RDWR, parseInt('0666', 8));
	          } catch (e) { /* ignore */ }
	        }
	      }

	    } else {
	      if (process.stdin.isTTY) {
	        process.stdin.pause();
	        try {
	          fdR = fs.openSync('/dev/tty', 'r'); // device file, not process.stdin
	          ttyR = process.stdin._handle;
	        } catch (e) { /* ignore */ }
	      } else {
	        // Node.js v0.12 read() fails.
	        try {
	          fdR = fs.openSync('/dev/tty', 'r');
	          ttyR = new TTY(fdR, false);
	        } catch (e) { /* ignore */ }
	      }

	      if (process.stdout.isTTY) {
	        fdW = process.stdout.fd;
	      } else {
	        try {
	          fdW = fs.openSync('/dev/tty', 'w');
	        } catch (e) { /* ignore */ }
	      }
	    }
	  })();

	  (function() { // try read
	    var isCooked = !options.hideEchoBack && !options.keyIn,
	      atEol, limit, buffer, reqSize, readSize, chunk, line;
	    rawInput = '';

	    // Node.js v0.10- returns an error if same mode is set.
	    function setRawMode(mode) {
	      if (mode === isRawMode) { return true; }
	      if (ttyR.setRawMode(mode) !== 0) { return false; }
	      isRawMode = mode;
	      return true;
	    }

	    if (_DBG_useExt || !ttyR ||
	        typeof fdW !== 'number' && (options.display || !isCooked)) {
	      input = tryExt();
	      return;
	    }

	    if (options.display) {
	      fs.writeSync(fdW, options.display);
	      options.display = '';
	    }
	    if (options.displayOnly) { return; }

	    if (!setRawMode(!isCooked)) {
	      input = tryExt();
	      return;
	    }

	    reqSize = options.keyIn ? 1 : options.bufferSize;
	    // Check `allocUnsafe` to make sure of the new API.
	    buffer = Buffer.allocUnsafe && Buffer.alloc ? Buffer.alloc(reqSize) : new Buffer(reqSize);

	    if (options.keyIn && options.limit) {
	      limit = new RegExp('[^' + options.limit + ']',
	        'g' + (options.caseSensitive ? '' : 'i'));
	    }

	    while (true) {
	      readSize = 0;
	      try {
	        readSize = fs.readSync(fdR, buffer, 0, reqSize);
	      } catch (e) {
	        if (e.code !== 'EOF') {
	          setRawMode(false);
	          input += tryExt();
	          return;
	        }
	      }
	      if (readSize > 0) {
	        chunk = buffer.toString(options.encoding, 0, readSize);
	        rawInput += chunk;
	      } else {
	        chunk = '\n';
	        rawInput += String.fromCharCode(0);
	      }

	      if (chunk && typeof (line = (chunk.match(/^(.*?)[\r\n]/) || [])[1]) === 'string') {
	        chunk = line;
	        atEol = true;
	      }

	      // other ctrl-chars
	      // eslint-disable-next-line no-control-regex
	      if (chunk) { chunk = chunk.replace(/[\x00-\x08\x0b\x0c\x0e-\x1f\x7f]/g, ''); }
	      if (chunk && limit) { chunk = chunk.replace(limit, ''); }

	      if (chunk) {
	        if (!isCooked) {
	          if (!options.hideEchoBack) {
	            fs.writeSync(fdW, chunk);
	          } else if (options.mask) {
	            fs.writeSync(fdW, (new Array(chunk.length + 1)).join(options.mask));
	          }
	        }
	        input += chunk;
	      }

	      if (!options.keyIn && atEol ||
	        options.keyIn && input.length >= reqSize) { break; }
	    }

	    if (!isCooked && !silent) { fs.writeSync(fdW, '\n'); }
	    setRawMode(false);
	  })();

	  if (options.print && !silent) {
	    options.print(
	      displaySave + (
	        options.displayOnly ? '' : (
	          options.hideEchoBack ? (new Array(input.length + 1)).join(options.mask) : input
	        ) + '\n' // must at least write '\n'
	      ),
	      options.encoding);
	  }

	  return options.displayOnly ? '' :
	    (lastInput = options.keepWhitespace || options.keyIn ? input : input.trim());
	}

	function flattenArray(array, validator) {
	  var flatArray = [];
	  function _flattenArray(array) {
	    if (array == null) { return; }
	    if (Array.isArray(array)) {
	      array.forEach(_flattenArray);
	    } else if (!validator || validator(array)) {
	      flatArray.push(array);
	    }
	  }
	  _flattenArray(array);
	  return flatArray;
	}

	function escapePattern(pattern) {
	  return pattern.replace(/[\x00-\x7f]/g, // eslint-disable-line no-control-regex
	    function(s) { return '\\x' + ('00' + s.charCodeAt().toString(16)).substr(-2); });
	}

	// margeOptions(options1, options2 ... )
	// margeOptions(true, options1, options2 ... )
	//    arg1=true : Start from defaultOptions and pick elements of that.
	function margeOptions() {
	  var optionsList = Array.prototype.slice.call(arguments),
	    optionNames, fromDefault;

	  if (optionsList.length && typeof optionsList[0] === 'boolean') {
	    fromDefault = optionsList.shift();
	    if (fromDefault) {
	      optionNames = Object.keys(defaultOptions);
	      optionsList.unshift(defaultOptions);
	    }
	  }

	  return optionsList.reduce(function(options, optionsPart) {
	    if (optionsPart == null) { return options; }

	    // ======== DEPRECATED ========
	    if (optionsPart.hasOwnProperty('noEchoBack') &&
	        !optionsPart.hasOwnProperty('hideEchoBack')) {
	      optionsPart.hideEchoBack = optionsPart.noEchoBack;
	      delete optionsPart.noEchoBack;
	    }
	    if (optionsPart.hasOwnProperty('noTrim') &&
	        !optionsPart.hasOwnProperty('keepWhitespace')) {
	      optionsPart.keepWhitespace = optionsPart.noTrim;
	      delete optionsPart.noTrim;
	    }
	    // ======== /DEPRECATED ========

	    if (!fromDefault) { optionNames = Object.keys(optionsPart); }
	    optionNames.forEach(function(optionName) {
	      var value;
	      if (!optionsPart.hasOwnProperty(optionName)) { return; }
	      value = optionsPart[optionName];
	      /* eslint-disable no-multi-spaces */
	      switch (optionName) {
	        //                    _readlineSync <- *    * -> defaultOptions
	        // ================ string
	        case 'mask':                        // *    *
	        case 'limitMessage':                //      *
	        case 'defaultInput':                //      *
	        case 'encoding':                    // *    *
	          value = value != null ? value + '' : '';
	          if (value && optionName !== 'limitMessage') { value = value.replace(/[\r\n]/g, ''); }
	          options[optionName] = value;
	          break;
	        // ================ number(int)
	        case 'bufferSize':                  // *    *
	          if (!isNaN(value = parseInt(value, 10)) && typeof value === 'number') {
	            options[optionName] = value; // limited updating (number is needed)
	          }
	          break;
	        // ================ boolean
	        case 'displayOnly':                 // *
	        case 'keyIn':                       // *
	        case 'hideEchoBack':                // *    *
	        case 'caseSensitive':               // *    *
	        case 'keepWhitespace':              // *    *
	        case 'history':                     //      *
	        case 'cd':                          //      *
	          options[optionName] = !!value;
	          break;
	        // ================ array
	        case 'limit':                       // *    *     to string for readlineExt
	        case 'trueValue':                   //      *
	        case 'falseValue':                  //      *
	          options[optionName] = flattenArray(value, function(value) {
	            var type = typeof value;
	            return type === 'string' || type === 'number' ||
	              type === 'function' || value instanceof RegExp;
	          }).map(function(value) {
	            return typeof value === 'string' ? value.replace(/[\r\n]/g, '') : value;
	          });
	          break;
	        // ================ function
	        case 'print':                       // *    *
	        case 'phContent':                   //      *
	        case 'preCheck':                    //      *
	          options[optionName] = typeof value === 'function' ? value : void 0;
	          break;
	        // ================ other
	        case 'prompt':                      //      *
	        case 'display':                     // *
	          options[optionName] = value != null ? value : '';
	          break;
	        // no default
	      }
	      /* eslint-enable no-multi-spaces */
	    });
	    return options;
	  }, {});
	}

	function isMatched(res, comps, caseSensitive) {
	  return comps.some(function(comp) {
	    var type = typeof comp;
	    return type === 'string'
	      ? (caseSensitive ? res === comp : res.toLowerCase() === comp.toLowerCase()) :
	      type === 'number' ? parseFloat(res) === comp :
	      type === 'function' ? comp(res) :
	      comp instanceof RegExp ? comp.test(res) : false;
	  });
	}

	function replaceHomePath(path, expand) {
	  var homePath = pathUtil.normalize(
	    IS_WIN ? (process.env.HOMEDRIVE || '') + (process.env.HOMEPATH || '') :
	    process.env.HOME || '').replace(/[/\\]+$/, '');
	  path = pathUtil.normalize(path);
	  return expand ? path.replace(/^~(?=\/|\\|$)/, homePath) :
	    path.replace(new RegExp('^' + escapePattern(homePath) +
	      '(?=\\/|\\\\|$)', IS_WIN ? 'i' : ''), '~');
	}

	function replacePlaceholder(text, generator) {
	  var PTN_INNER = '(?:\\(([\\s\\S]*?)\\))?(\\w+|.-.)(?:\\(([\\s\\S]*?)\\))?',
	    rePlaceholder = new RegExp('(\\$)?(\\$<' + PTN_INNER + '>)', 'g'),
	    rePlaceholderCompat = new RegExp('(\\$)?(\\$\\{' + PTN_INNER + '\\})', 'g');

	  function getPlaceholderText(s, escape, placeholder, pre, param, post) {
	    var text;
	    return escape || typeof (text = generator(param)) !== 'string' ? placeholder :
	      text ? (pre || '') + text + (post || '') : '';
	  }

	  return text.replace(rePlaceholder, getPlaceholderText)
	    .replace(rePlaceholderCompat, getPlaceholderText);
	}

	function array2charlist(array, caseSensitive, collectSymbols) {
	  var group = [],
	    groupClass = -1,
	    charCode = 0,
	    symbols = '',
	    values, suppressed;
	  function addGroup(groups, group) {
	    if (group.length > 3) { // ellipsis
	      groups.push(group[0] + '...' + group[group.length - 1]);
	      suppressed = true;
	    } else if (group.length) {
	      groups = groups.concat(group);
	    }
	    return groups;
	  }

	  values = array.reduce(function(chars, value) {
	    return chars.concat((value + '').split(''));
	  }, []).reduce(function(groups, curChar) {
	    var curGroupClass, curCharCode;
	    if (!caseSensitive) { curChar = curChar.toLowerCase(); }
	    curGroupClass = /^\d$/.test(curChar) ? 1 :
	      /^[A-Z]$/.test(curChar) ? 2 : /^[a-z]$/.test(curChar) ? 3 : 0;
	    if (collectSymbols && curGroupClass === 0) {
	      symbols += curChar;
	    } else {
	      curCharCode = curChar.charCodeAt(0);
	      if (curGroupClass && curGroupClass === groupClass &&
	          curCharCode === charCode + 1) {
	        group.push(curChar);
	      } else {
	        groups = addGroup(groups, group);
	        group = [curChar];
	        groupClass = curGroupClass;
	      }
	      charCode = curCharCode;
	    }
	    return groups;
	  }, []);
	  values = addGroup(values, group); // last group
	  if (symbols) { values.push(symbols); suppressed = true; }
	  return {values: values, suppressed: suppressed};
	}

	function joinChunks(chunks, suppressed) {
	  return chunks.join(chunks.length > 2 ? ', ' : suppressed ? ' / ' : '/');
	}

	function getPhContent(param, options) {
	  var resCharlist = {},
	    text, values, arg;
	  if (options.phContent) {
	    text = options.phContent(param, options);
	  }
	  if (typeof text !== 'string') {
	    switch (param) {
	      case 'hideEchoBack':
	      case 'mask':
	      case 'defaultInput':
	      case 'caseSensitive':
	      case 'keepWhitespace':
	      case 'encoding':
	      case 'bufferSize':
	      case 'history':
	      case 'cd':
	        text = !options.hasOwnProperty(param) ? '' :
	          typeof options[param] === 'boolean' ? (options[param] ? 'on' : 'off') :
	          options[param] + '';
	        break;
	      // case 'prompt':
	      // case 'query':
	      // case 'display':
	      //   text = options.hasOwnProperty('displaySrc') ? options.displaySrc + '' : '';
	      //   break;
	      case 'limit':
	      case 'trueValue':
	      case 'falseValue':
	        values = options[options.hasOwnProperty(param + 'Src') ? param + 'Src' : param];
	        if (options.keyIn) { // suppress
	          resCharlist = array2charlist(values, options.caseSensitive);
	          values = resCharlist.values;
	        } else {
	          values = values.filter(function(value) {
	            var type = typeof value;
	            return type === 'string' || type === 'number';
	          });
	        }
	        text = joinChunks(values, resCharlist.suppressed);
	        break;
	      case 'limitCount':
	      case 'limitCountNotZero':
	        text = options[options.hasOwnProperty('limitSrc') ? 'limitSrc' : 'limit'].length;
	        text = text || param !== 'limitCountNotZero' ? text + '' : '';
	        break;
	      case 'lastInput':
	        text = lastInput;
	        break;
	      case 'cwd':
	      case 'CWD':
	      case 'cwdHome':
	        text = process.cwd();
	        if (param === 'CWD') {
	          text = pathUtil.basename(text);
	        } else if (param === 'cwdHome') {
	          text = replaceHomePath(text);
	        }
	        break;
	      case 'date':
	      case 'time':
	      case 'localeDate':
	      case 'localeTime':
	        text = (new Date())['to' +
	          param.replace(/^./, function(str) { return str.toUpperCase(); }) +
	          'String']();
	        break;
	      default: // with arg
	        if (typeof (arg = (param.match(/^history_m(\d+)$/) || [])[1]) === 'string') {
	          text = inputHistory[inputHistory.length - arg] || '';
	        }
	    }
	  }
	  return text;
	}

	function getPhCharlist(param) {
	  var matches = /^(.)-(.)$/.exec(param),
	    text = '',
	    from, to, code, step;
	  if (!matches) { return null; }
	  from = matches[1].charCodeAt(0);
	  to = matches[2].charCodeAt(0);
	  step = from < to ? 1 : -1;
	  for (code = from; code !== to + step; code += step) { text += String.fromCharCode(code); }
	  return text;
	}

	// cmd "arg" " a r g " "" 'a"r"g' "a""rg" "arg
	function parseCl(cl) {
	  var reToken = new RegExp(/(\s*)(?:("|')(.*?)(?:\2|$)|(\S+))/g),
	    taken = '',
	    args = [],
	    matches, part;
	  cl = cl.trim();
	  while ((matches = reToken.exec(cl))) {
	    part = matches[3] || matches[4] || '';
	    if (matches[1]) {
	      args.push(taken);
	      taken = '';
	    }
	    taken += part;
	  }
	  if (taken) { args.push(taken); }
	  return args;
	}

	function toBool(res, options) {
	  return (
	    (options.trueValue.length &&
	      isMatched(res, options.trueValue, options.caseSensitive)) ? true :
	    (options.falseValue.length &&
	      isMatched(res, options.falseValue, options.caseSensitive)) ? false : res);
	}

	function getValidLine(options) {
	  var res, forceNext, limitMessage,
	    matches, histInput, args, resCheck;

	  function _getPhContent(param) { return getPhContent(param, options); }
	  function addDisplay(text) { options.display += (/[^\r\n]$/.test(options.display) ? '\n' : '') + text; }

	  options.limitSrc = options.limit;
	  options.displaySrc = options.display;
	  options.limit = ''; // for readlineExt
	  options.display = replacePlaceholder(options.display + '', _getPhContent);

	  while (true) {
	    res = _readlineSync(options);
	    forceNext = false;
	    limitMessage = '';

	    if (options.defaultInput && !res) { res = options.defaultInput; }

	    if (options.history) {
	      if ((matches = /^\s*!(?:!|-1)(:p)?\s*$/.exec(res))) { // `!!` `!-1` +`:p`
	        histInput = inputHistory[0] || '';
	        if (matches[1]) { // only display
	          forceNext = true;
	        } else { // replace input
	          res = histInput;
	        }
	        // Show it even if it is empty (NL only).
	        addDisplay(histInput + '\n');
	        if (!forceNext) { // Loop may break
	          options.displayOnly = true;
	          _readlineSync(options);
	          options.displayOnly = false;
	        }
	      } else if (res && res !== inputHistory[inputHistory.length - 1]) {
	        inputHistory = [res];
	      }
	    }

	    if (!forceNext && options.cd && res) {
	      args = parseCl(res);
	      switch (args[0].toLowerCase()) {
	        case 'cd':
	          if (args[1]) {
	            try {
	              process.chdir(replaceHomePath(args[1], true));
	            } catch (e) {
	              addDisplay(e + '');
	            }
	          }
	          forceNext = true;
	          break;
	        case 'pwd':
	          addDisplay(process.cwd());
	          forceNext = true;
	          break;
	        // no default
	      }
	    }

	    if (!forceNext && options.preCheck) {
	      resCheck = options.preCheck(res, options);
	      res = resCheck.res;
	      if (resCheck.forceNext) { forceNext = true; } // Don't switch to false.
	    }

	    if (!forceNext) {
	      if (!options.limitSrc.length ||
	        isMatched(res, options.limitSrc, options.caseSensitive)) { break; }
	      if (options.limitMessage) {
	        limitMessage = replacePlaceholder(options.limitMessage, _getPhContent);
	      }
	    }

	    addDisplay((limitMessage ? limitMessage + '\n' : '') +
	      replacePlaceholder(options.displaySrc + '', _getPhContent));
	  }
	  return toBool(res, options);
	}

	// for dev
	exports._DBG_set_useExt = function(val) { _DBG_useExt = val; };
	exports._DBG_set_checkOptions = function(val) { _DBG_checkOptions = val; };
	exports._DBG_set_checkMethod = function(val) { _DBG_checkMethod = val; };
	exports._DBG_clearHistory = function() { lastInput = ''; inputHistory = []; };

	// ------------------------------------

	exports.setDefaultOptions = function(options) {
	  defaultOptions = margeOptions(true, options);
	  return margeOptions(true); // copy
	};

	exports.question = function(query, options) {
	  /* eslint-disable key-spacing */
	  return getValidLine(margeOptions(margeOptions(true, options), {
	    display:            query
	  }));
	  /* eslint-enable key-spacing */
	};

	exports.prompt = function(options) {
	  var readOptions = margeOptions(true, options);
	  readOptions.display = readOptions.prompt;
	  return getValidLine(readOptions);
	};

	exports.keyIn = function(query, options) {
	  /* eslint-disable key-spacing */
	  var readOptions = margeOptions(margeOptions(true, options), {
	    display:            query,
	    keyIn:              true,
	    keepWhitespace:     true
	  });
	  /* eslint-enable key-spacing */

	  // char list
	  readOptions.limitSrc = readOptions.limit.filter(function(value) {
	    var type = typeof value;
	    return type === 'string' || type === 'number';
	  }).map(function(text) {
	    return replacePlaceholder(text + '', getPhCharlist);
	  });
	  // pattern
	  readOptions.limit = escapePattern(readOptions.limitSrc.join(''));

	  ['trueValue', 'falseValue'].forEach(function(optionName) {
	    readOptions[optionName] = readOptions[optionName].reduce(function(comps, comp) {
	      var type = typeof comp;
	      if (type === 'string' || type === 'number') {
	        comps = comps.concat((comp + '').split(''));
	      } else { comps.push(comp); }
	      return comps;
	    }, []);
	  });

	  readOptions.display = replacePlaceholder(readOptions.display + '',
	    function(param) { return getPhContent(param, readOptions); });

	  return toBool(_readlineSync(readOptions), readOptions);
	};

	// ------------------------------------

	exports.questionEMail = function(query, options) {
	  if (query == null) { query = 'Input e-mail address: '; }
	  /* eslint-disable key-spacing */
	  return exports.question(query, margeOptions({
	    // -------- default
	    hideEchoBack:       false,
	    // http://www.w3.org/TR/html5/forms.html#valid-e-mail-address
	    limit:              /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
	    limitMessage:       'Input valid e-mail address, please.',
	    trueValue:          null,
	    falseValue:         null
	  }, options, {
	    // -------- forced
	    keepWhitespace:     false,
	    cd:                 false
	  }));
	  /* eslint-enable key-spacing */
	};

	exports.questionNewPassword = function(query, options) {
	  /* eslint-disable key-spacing */
	  var resCharlist, min, max,
	    readOptions = margeOptions({
	      // -------- default
	      hideEchoBack:       true,
	      mask:               '*',
	      limitMessage:       'It can include: $<charlist>\n' +
	                            'And the length must be: $<length>',
	      trueValue:          null,
	      falseValue:         null,
	      caseSensitive:      true
	    }, options, {
	      // -------- forced
	      history:            false,
	      cd:                 false,
	      // limit (by charlist etc.),
	      phContent: function(param) {
	        return param === 'charlist' ? resCharlist.text :
	          param === 'length' ? min + '...' + max : null;
	      }
	    }),
	    // added:     charlist, min, max, confirmMessage, unmatchMessage
	    charlist, confirmMessage, unmatchMessage,
	    limit, limitMessage, res1, res2;
	  /* eslint-enable key-spacing */
	  options = options || {};

	  charlist = replacePlaceholder(
	    options.charlist ? options.charlist + '' : '$<!-~>', getPhCharlist);
	  if (isNaN(min = parseInt(options.min, 10)) || typeof min !== 'number') { min = 12; }
	  if (isNaN(max = parseInt(options.max, 10)) || typeof max !== 'number') { max = 24; }
	  limit = new RegExp('^[' + escapePattern(charlist) +
	    ']{' + min + ',' + max + '}$');
	  resCharlist = array2charlist([charlist], readOptions.caseSensitive, true);
	  resCharlist.text = joinChunks(resCharlist.values, resCharlist.suppressed);

	  confirmMessage = options.confirmMessage != null ? options.confirmMessage :
	    'Reinput a same one to confirm it: ';
	  unmatchMessage = options.unmatchMessage != null ? options.unmatchMessage :
	    'It differs from first one.' +
	      ' Hit only the Enter key if you want to retry from first one.';

	  if (query == null) { query = 'Input new password: '; }

	  limitMessage = readOptions.limitMessage;
	  while (!res2) {
	    readOptions.limit = limit;
	    readOptions.limitMessage = limitMessage;
	    res1 = exports.question(query, readOptions);

	    readOptions.limit = [res1, ''];
	    readOptions.limitMessage = unmatchMessage;
	    res2 = exports.question(confirmMessage, readOptions);
	  }

	  return res1;
	};

	function _questionNum(query, options, parser) {
	  var validValue;
	  function getValidValue(value) {
	    validValue = parser(value);
	    return !isNaN(validValue) && typeof validValue === 'number';
	  }
	  /* eslint-disable key-spacing */
	  exports.question(query, margeOptions({
	    // -------- default
	    limitMessage:       'Input valid number, please.'
	  }, options, {
	    // -------- forced
	    limit:              getValidValue,
	    cd:                 false
	    // trueValue, falseValue, caseSensitive, keepWhitespace don't work.
	  }));
	  /* eslint-enable key-spacing */
	  return validValue;
	}
	exports.questionInt = function(query, options) {
	  return _questionNum(query, options, function(value) { return parseInt(value, 10); });
	};
	exports.questionFloat = function(query, options) {
	  return _questionNum(query, options, parseFloat);
	};

	exports.questionPath = function(query, options) {
	  /* eslint-disable key-spacing */
	  var error = '',
	    validPath, // before readOptions
	    readOptions = margeOptions({
	      // -------- default
	      hideEchoBack:       false,
	      limitMessage:       '$<error(\n)>Input valid path, please.' +
	                            '$<( Min:)min>$<( Max:)max>',
	      history:            true,
	      cd:                 true
	    }, options, {
	      // -------- forced
	      keepWhitespace:     false,
	      limit: function(value) {
	        var exists, stat, res;
	        value = replaceHomePath(value, true);
	        error = ''; // for validate
	        // mkdir -p
	        function mkdirParents(dirPath) {
	          dirPath.split(/\/|\\/).reduce(function(parents, dir) {
	            var path = pathUtil.resolve((parents += dir + pathUtil.sep));
	            if (!fs.existsSync(path)) {
	              fs.mkdirSync(path);
	            } else if (!fs.statSync(path).isDirectory()) {
	              throw new Error('Non directory already exists: ' + path);
	            }
	            return parents;
	          }, '');
	        }

	        try {
	          exists = fs.existsSync(value);
	          validPath = exists ? fs.realpathSync(value) : pathUtil.resolve(value);
	          // options.exists default: true, not-bool: no-check
	          if (!options.hasOwnProperty('exists') && !exists ||
	              typeof options.exists === 'boolean' && options.exists !== exists) {
	            error = (exists ? 'Already exists' : 'No such file or directory') +
	              ': ' + validPath;
	            return false;
	          }
	          if (!exists && options.create) {
	            if (options.isDirectory) {
	              mkdirParents(validPath);
	            } else {
	              mkdirParents(pathUtil.dirname(validPath));
	              fs.closeSync(fs.openSync(validPath, 'w')); // touch
	            }
	            validPath = fs.realpathSync(validPath);
	          }
	          if (exists && (options.min || options.max ||
	              options.isFile || options.isDirectory)) {
	            stat = fs.statSync(validPath);
	            // type check first (directory has zero size)
	            if (options.isFile && !stat.isFile()) {
	              error = 'Not file: ' + validPath;
	              return false;
	            } else if (options.isDirectory && !stat.isDirectory()) {
	              error = 'Not directory: ' + validPath;
	              return false;
	            } else if (options.min && stat.size < +options.min ||
	                options.max && stat.size > +options.max) {
	              error = 'Size ' + stat.size + ' is out of range: ' + validPath;
	              return false;
	            }
	          }
	          if (typeof options.validate === 'function' &&
	              (res = options.validate(validPath)) !== true) {
	            if (typeof res === 'string') { error = res; }
	            return false;
	          }
	        } catch (e) {
	          error = e + '';
	          return false;
	        }
	        return true;
	      },
	      // trueValue, falseValue, caseSensitive don't work.
	      phContent: function(param) {
	        return param === 'error' ? error :
	          param !== 'min' && param !== 'max' ? null :
	          options.hasOwnProperty(param) ? options[param] + '' : '';
	      }
	    });
	    // added:     exists, create, min, max, isFile, isDirectory, validate
	  /* eslint-enable key-spacing */
	  options = options || {};

	  if (query == null) { query = 'Input path (you can "cd" and "pwd"): '; }

	  exports.question(query, readOptions);
	  return validPath;
	};

	// props: preCheck, args, hRes, limit
	function getClHandler(commandHandler, options) {
	  var clHandler = {},
	    hIndex = {};
	  if (typeof commandHandler === 'object') {
	    Object.keys(commandHandler).forEach(function(cmd) {
	      if (typeof commandHandler[cmd] === 'function') {
	        hIndex[options.caseSensitive ? cmd : cmd.toLowerCase()] = commandHandler[cmd];
	      }
	    });
	    clHandler.preCheck = function(res) {
	      var cmdKey;
	      clHandler.args = parseCl(res);
	      cmdKey = clHandler.args[0] || '';
	      if (!options.caseSensitive) { cmdKey = cmdKey.toLowerCase(); }
	      clHandler.hRes =
	        cmdKey !== '_' && hIndex.hasOwnProperty(cmdKey)
	          ? hIndex[cmdKey].apply(res, clHandler.args.slice(1)) :
	          hIndex.hasOwnProperty('_') ? hIndex._.apply(res, clHandler.args) : null;
	      return {res: res, forceNext: false};
	    };
	    if (!hIndex.hasOwnProperty('_')) {
	      clHandler.limit = function() { // It's called after preCheck.
	        var cmdKey = clHandler.args[0] || '';
	        if (!options.caseSensitive) { cmdKey = cmdKey.toLowerCase(); }
	        return hIndex.hasOwnProperty(cmdKey);
	      };
	    }
	  } else {
	    clHandler.preCheck = function(res) {
	      clHandler.args = parseCl(res);
	      clHandler.hRes = typeof commandHandler === 'function'
	        ? commandHandler.apply(res, clHandler.args) : true; // true for break loop
	      return {res: res, forceNext: false};
	    };
	  }
	  return clHandler;
	}

	exports.promptCL = function(commandHandler, options) {
	  /* eslint-disable key-spacing */
	  var readOptions = margeOptions({
	      // -------- default
	      hideEchoBack:       false,
	      limitMessage:       'Requested command is not available.',
	      caseSensitive:      false,
	      history:            true
	    }, options),
	    //   -------- forced
	    //   trueValue, falseValue, keepWhitespace don't work.
	    //   preCheck, limit (by clHandler)
	    clHandler = getClHandler(commandHandler, readOptions);
	  /* eslint-enable key-spacing */
	  readOptions.limit = clHandler.limit;
	  readOptions.preCheck = clHandler.preCheck;
	  exports.prompt(readOptions);
	  return clHandler.args;
	};

	exports.promptLoop = function(inputHandler, options) {
	  /* eslint-disable key-spacing */
	  var readOptions = margeOptions({
	    // -------- default
	    hideEchoBack:       false,
	    trueValue:          null,
	    falseValue:         null,
	    caseSensitive:      false,
	    history:            true
	  }, options);
	  /* eslint-enable key-spacing */
	  while (true) { if (inputHandler(exports.prompt(readOptions))) { break; } }
	  // return; // nothing is returned
	};

	exports.promptCLLoop = function(commandHandler, options) {
	  /* eslint-disable key-spacing */
	  var readOptions = margeOptions({
	      // -------- default
	      hideEchoBack:       false,
	      limitMessage:       'Requested command is not available.',
	      caseSensitive:      false,
	      history:            true
	    }, options),
	    //   -------- forced
	    //   trueValue, falseValue, keepWhitespace don't work.
	    //   preCheck, limit (by clHandler)
	    clHandler = getClHandler(commandHandler, readOptions);
	  /* eslint-enable key-spacing */
	  readOptions.limit = clHandler.limit;
	  readOptions.preCheck = clHandler.preCheck;
	  while (true) {
	    exports.prompt(readOptions);
	    if (clHandler.hRes) { break; }
	  }
	  // return; // nothing is returned
	};

	exports.promptSimShell = function(options) {
	  /* eslint-disable key-spacing */
	  return exports.prompt(margeOptions({
	    // -------- default
	    hideEchoBack:       false,
	    history:            true
	  }, options, {
	    // -------- forced
	    prompt:             (function() {
	      return IS_WIN ? '$<cwd>>' :
	        // 'user@host:cwd$ '
	        (process.env.USER || '') +
	        (process.env.HOSTNAME ? '@' + process.env.HOSTNAME.replace(/\..*$/, '') : '') +
	        ':$<cwdHome>$ ';
	    })()
	  }));
	  /* eslint-enable key-spacing */
	};

	function _keyInYN(query, options, limit) {
	  var res;
	  if (query == null) { query = 'Are you sure? '; }
	  if ((!options || options.guide !== false) && (query += '')) {
	    query = query.replace(/\s*:?\s*$/, '') + ' [y/n]: ';
	  }
	  /* eslint-disable key-spacing */
	  res = exports.keyIn(query, margeOptions(options, {
	    // -------- forced
	    hideEchoBack:       false,
	    limit:              limit,
	    trueValue:          'y',
	    falseValue:         'n',
	    caseSensitive:      false
	    // mask doesn't work.
	  }));
	  // added:     guide
	  /* eslint-enable key-spacing */
	  return typeof res === 'boolean' ? res : '';
	}
	exports.keyInYN = function(query, options) { return _keyInYN(query, options); };
	exports.keyInYNStrict = function(query, options) { return _keyInYN(query, options, 'yn'); };

	exports.keyInPause = function(query, options) {
	  if (query == null) { query = 'Continue...'; }
	  if ((!options || options.guide !== false) && (query += '')) {
	    query = query.replace(/\s+$/, '') + ' (Hit any key)';
	  }
	  /* eslint-disable key-spacing */
	  exports.keyIn(query, margeOptions({
	    // -------- default
	    limit:              null
	  }, options, {
	    // -------- forced
	    hideEchoBack:       true,
	    mask:               ''
	  }));
	  // added:     guide
	  /* eslint-enable key-spacing */
	  // return; // nothing is returned
	};

	exports.keyInSelect = function(items, query, options) {
	  /* eslint-disable key-spacing */
	  var readOptions = margeOptions({
	      // -------- default
	      hideEchoBack:       false
	    }, options, {
	      // -------- forced
	      trueValue:          null,
	      falseValue:         null,
	      caseSensitive:      false,
	      // limit (by items),
	      phContent: function(param) {
	        return param === 'itemsCount' ? items.length + '' :
	          param === 'firstItem' ? (items[0] + '').trim() :
	          param === 'lastItem' ? (items[items.length - 1] + '').trim() : null;
	      }
	    }),
	    // added:     guide, cancel
	    keylist = '',
	    key2i = {},
	    charCode = 49 /* '1' */,
	    display = '\n';
	  /* eslint-enable key-spacing */
	  if (!Array.isArray(items) || !items.length || items.length > 35) {
	    throw '`items` must be Array (max length: 35).';
	  }

	  items.forEach(function(item, i) {
	    var key = String.fromCharCode(charCode);
	    keylist += key;
	    key2i[key] = i;
	    display += '[' + key + '] ' + (item + '').trim() + '\n';
	    charCode = charCode === 57 /* '9' */ ? 97 /* 'a' */ : charCode + 1;
	  });
	  if (!options || options.cancel !== false) {
	    keylist += '0';
	    key2i['0'] = -1;
	    display += '[0] ' +
	      (options && options.cancel != null && typeof options.cancel !== 'boolean'
	        ? (options.cancel + '').trim() : 'CANCEL') + '\n';
	  }
	  readOptions.limit = keylist;
	  display += '\n';

	  if (query == null) { query = 'Choose one from list: '; }
	  if ((query += '')) {
	    if (!options || options.guide !== false) {
	      query = query.replace(/\s*:?\s*$/, '') + ' [$<limit>]: ';
	    }
	    display += query;
	  }

	  return key2i[exports.keyIn(display, readOptions).toLowerCase()];
	};

	exports.getRawInput = function() { return rawInput; };

	// ======== DEPRECATED ========
	function _setOption(optionName, args) {
	  var options;
	  if (args.length) { options = {}; options[optionName] = args[0]; }
	  return exports.setDefaultOptions(options)[optionName];
	}
	exports.setPrint = function() { return _setOption('print', arguments); };
	exports.setPrompt = function() { return _setOption('prompt', arguments); };
	exports.setEncoding = function() { return _setOption('encoding', arguments); };
	exports.setMask = function() { return _setOption('mask', arguments); };
	exports.setBufferSize = function() { return _setOption('bufferSize', arguments); };
	}(readlineSync));

	const {
	    LUA_MASKCALL,
	    LUA_MASKCOUNT,
	    LUA_MASKLINE,
	    LUA_MASKRET,
	    LUA_REGISTRYINDEX: LUA_REGISTRYINDEX$2,
	    LUA_TFUNCTION: LUA_TFUNCTION$1,
	    LUA_TNIL: LUA_TNIL$2,
	    LUA_TTABLE: LUA_TTABLE$2,
	    LUA_TUSERDATA: LUA_TUSERDATA$1,
	    lua_Debug,
	    lua_call: lua_call$1,
	    lua_checkstack,
	    lua_gethook,
	    lua_gethookcount,
	    lua_gethookmask,
	    lua_getinfo,
	    lua_getlocal,
	    lua_getmetatable,
	    lua_getstack,
	    lua_getupvalue,
	    lua_getuservalue,
	    lua_insert: lua_insert$1,
	    lua_iscfunction,
	    lua_isfunction: lua_isfunction$1,
	    lua_isnoneornil,
	    lua_isthread,
	    lua_newtable: lua_newtable$1,
	    lua_pcall: lua_pcall$1,
	    lua_pop: lua_pop$3,
	    lua_pushboolean: lua_pushboolean$2,
	    lua_pushfstring: lua_pushfstring$1,
	    lua_pushinteger: lua_pushinteger$2,
	    lua_pushlightuserdata: lua_pushlightuserdata$2,
	    lua_pushliteral: lua_pushliteral$3,
	    lua_pushnil: lua_pushnil$2,
	    lua_pushstring: lua_pushstring$2,
	    lua_pushvalue: lua_pushvalue$2,
	    lua_rawgetp: lua_rawgetp$2,
	    lua_rawsetp: lua_rawsetp$2,
	    lua_rotate: lua_rotate$1,
	    lua_setfield: lua_setfield$3,
	    lua_sethook,
	    lua_setlocal,
	    lua_setmetatable: lua_setmetatable$1,
	    lua_settop: lua_settop$2,
	    lua_setupvalue,
	    lua_setuservalue,
	    lua_tojsstring: lua_tojsstring$1,
	    lua_toproxy: lua_toproxy$1,
	    lua_tostring: lua_tostring$1,
	    lua_tothread: lua_tothread$1,
	    lua_touserdata: lua_touserdata$2,
	    lua_type: lua_type$1,
	    lua_upvalueid,
	    lua_upvaluejoin,
	    lua_xmove
	} = lua$2;
	const {
	    luaL_argcheck,
	    luaL_argerror: luaL_argerror$1,
	    luaL_checkany: luaL_checkany$1,
	    luaL_checkinteger,
	    luaL_checkstring: luaL_checkstring$1,
	    luaL_checktype,
	    luaL_error: luaL_error$2,
	    luaL_loadbuffer,
	    luaL_newlib: luaL_newlib$3,
	    luaL_optinteger,
	    luaL_optstring: luaL_optstring$1,
	    luaL_traceback,
	    lua_writestringerror
	} = lauxlib$2;
	const lualib$4 = lualib$8;
	const {
	    luastring_indexOf: luastring_indexOf$1,
	    to_luastring: to_luastring$4
	} = fengaricore;

	/*
	** If L1 != L, L1 can be in any state, and therefore there are no
	** guarantees about its stack space; any push in L1 must be
	** checked.
	*/
	const checkstack = function(L, L1, n) {
	    if (L !== L1 && !lua_checkstack(L1, n))
	        luaL_error$2(L, to_luastring$4("stack overflow", true));
	};

	const db_getregistry = function(L) {
	    lua_pushvalue$2(L, LUA_REGISTRYINDEX$2);
	    return 1;
	};

	const db_getmetatable = function(L) {
	    luaL_checkany$1(L, 1);
	    if (!lua_getmetatable(L, 1)) {
	        lua_pushnil$2(L);  /* no metatable */
	    }
	    return 1;
	};

	const db_setmetatable = function(L) {
	    const t = lua_type$1(L, 2);
	    luaL_argcheck(L, t == LUA_TNIL$2 || t == LUA_TTABLE$2, 2, "nil or table expected");
	    lua_settop$2(L, 2);
	    lua_setmetatable$1(L, 1);
	    return 1;  /* return 1st argument */
	};

	const db_getuservalue = function(L) {
	    if (lua_type$1(L, 1) !== LUA_TUSERDATA$1)
	        lua_pushnil$2(L);
	    else
	        lua_getuservalue(L, 1);
	    return 1;
	};


	const db_setuservalue = function(L) {
	    luaL_checktype(L, 1, LUA_TUSERDATA$1);
	    luaL_checkany$1(L, 2);
	    lua_settop$2(L, 2);
	    lua_setuservalue(L, 1);
	    return 1;
	};

	/*
	** Auxiliary function used by several library functions: check for
	** an optional thread as function's first argument and set 'arg' with
	** 1 if this argument is present (so that functions can skip it to
	** access their other arguments)
	*/
	const getthread = function(L) {
	    if (lua_isthread(L, 1)) {
	        return {
	            arg: 1,
	            thread: lua_tothread$1(L, 1)
	        };
	    } else {
	        return {
	            arg: 0,
	            thread: L
	        };  /* function will operate over current thread */
	    }
	};

	/*
	** Variations of 'lua_settable', used by 'db_getinfo' to put results
	** from 'lua_getinfo' into result table. Key is always a string;
	** value can be a string, an int, or a boolean.
	*/
	const settabss = function(L, k, v) {
	    lua_pushstring$2(L, v);
	    lua_setfield$3(L, -2, k);
	};

	const settabsi = function(L, k, v) {
	    lua_pushinteger$2(L, v);
	    lua_setfield$3(L, -2, k);
	};

	const settabsb = function(L, k, v) {
	    lua_pushboolean$2(L, v);
	    lua_setfield$3(L, -2, k);
	};


	/*
	** In function 'db_getinfo', the call to 'lua_getinfo' may push
	** results on the stack; later it creates the result table to put
	** these objects. Function 'treatstackoption' puts the result from
	** 'lua_getinfo' on top of the result table so that it can call
	** 'lua_setfield'.
	*/
	const treatstackoption = function(L, L1, fname) {
	    if (L == L1)
	        lua_rotate$1(L, -2, 1);  /* exchange object and table */
	    else
	        lua_xmove(L1, L, 1);  /* move object to the "main" stack */
	    lua_setfield$3(L, -2, fname);  /* put object into table */
	};

	/*
	** Calls 'lua_getinfo' and collects all results in a new table.
	** L1 needs stack space for an optional input (function) plus
	** two optional outputs (function and line table) from function
	** 'lua_getinfo'.
	*/
	const db_getinfo = function(L) {
	    let ar = new lua_Debug();
	    let thread = getthread(L);
	    let arg = thread.arg;
	    let L1 = thread.thread;
	    let options = luaL_optstring$1(L, arg + 2, "flnStu");
	    checkstack(L, L1, 3);
	    if (lua_isfunction$1(L, arg + 1)) {  /* info about a function? */
	        options = lua_pushfstring$1(L, to_luastring$4(">%s"), options);  /* add '>' to 'options' */
	        lua_pushvalue$2(L, arg + 1);  /* move function to 'L1' stack */
	        lua_xmove(L, L1, 1);
	    } else {  /* stack level */
	        if (!lua_getstack(L1, luaL_checkinteger(L, arg + 1), ar)) {
	            lua_pushnil$2(L);  /* level out of range */
	            return 1;
	        }
	    }

	    if (!lua_getinfo(L1, options, ar))
	        luaL_argerror$1(L, arg + 2, "invalid option");
	    lua_newtable$1(L);  /* table to collect results */
	    if (luastring_indexOf$1(options, 83 /* 'S'.charCodeAt(0) */) > -1) {
	        settabss(L, to_luastring$4("source", true), ar.source);
	        settabss(L, to_luastring$4("short_src", true), ar.short_src);
	        settabsi(L, to_luastring$4("linedefined", true), ar.linedefined);
	        settabsi(L, to_luastring$4("lastlinedefined", true), ar.lastlinedefined);
	        settabss(L, to_luastring$4("what", true), ar.what);
	    }
	    if (luastring_indexOf$1(options, 108 /* 'l'.charCodeAt(0) */) > -1)
	        settabsi(L, to_luastring$4("currentline", true), ar.currentline);
	    if (luastring_indexOf$1(options, 117 /* 'u'.charCodeAt(0) */) > -1) {
	        settabsi(L, to_luastring$4("nups", true), ar.nups);
	        settabsi(L, to_luastring$4("nparams", true), ar.nparams);
	        settabsb(L, to_luastring$4("isvararg", true), ar.isvararg);
	    }
	    if (luastring_indexOf$1(options, 110 /* 'n'.charCodeAt(0) */) > -1) {
	        settabss(L, to_luastring$4("name", true), ar.name);
	        settabss(L, to_luastring$4("namewhat", true), ar.namewhat);
	    }
	    if (luastring_indexOf$1(options, 116 /* 't'.charCodeAt(0) */) > -1)
	        settabsb(L, to_luastring$4("istailcall", true), ar.istailcall);
	    if (luastring_indexOf$1(options, 76 /* 'L'.charCodeAt(0) */) > -1)
	        treatstackoption(L, L1, to_luastring$4("activelines", true));
	    if (luastring_indexOf$1(options, 102 /* 'f'.charCodeAt(0) */) > -1)
	        treatstackoption(L, L1, to_luastring$4("func", true));
	    return 1;  /* return table */
	};

	const db_getlocal = function(L) {
	    let thread = getthread(L);
	    let L1 = thread.thread;
	    let arg = thread.arg;
	    let ar = new lua_Debug();
	    let nvar = luaL_checkinteger(L, arg + 2);  /* local-variable index */
	    if (lua_isfunction$1(L, arg + 1)) {
	        lua_pushvalue$2(L, arg + 1);  /* push function */
	        lua_pushstring$2(L, lua_getlocal(L, null, nvar));  /* push local name */
	        return 1;  /* return only name (there is no value) */
	    } else {  /* stack-level argument */
	        let level = luaL_checkinteger(L, arg + 1);
	        if (!lua_getstack(L1, level, ar))  /* out of range? */
	            return luaL_argerror$1(L, arg+1, "level out of range");
	        checkstack(L, L1, 1);
	        let name = lua_getlocal(L1, ar, nvar);
	        if (name) {
	            lua_xmove(L1, L, 1);  /* move local value */
	            lua_pushstring$2(L, name);  /* push name */
	            lua_rotate$1(L, -2, 1);  /* re-order */
	            return 2;
	        }
	        else {
	            lua_pushnil$2(L);  /* no name (nor value) */
	            return 1;
	        }
	    }
	};

	const db_setlocal = function(L) {
	    let thread = getthread(L);
	    let L1 = thread.thread;
	    let arg = thread.arg;
	    let ar = new lua_Debug();
	    let level = luaL_checkinteger(L, arg + 1);
	    let nvar = luaL_checkinteger(L, arg + 2);
	    if (!lua_getstack(L1, level, ar))  /* out of range? */
	        return luaL_argerror$1(L, arg + 1, "level out of range");
	    luaL_checkany$1(L, arg + 3);
	    lua_settop$2(L, arg + 3);
	    checkstack(L, L1, 1);
	    lua_xmove(L, L1, 1);
	    let name = lua_setlocal(L1, ar, nvar);
	    if (name === null)
	        lua_pop$3(L1, 1);  /* pop value (if not popped by 'lua_setlocal') */
	    lua_pushstring$2(L, name);
	    return 1;
	};

	/*
	** get (if 'get' is true) or set an upvalue from a closure
	*/
	const auxupvalue = function(L, get) {
	    let n = luaL_checkinteger(L, 2);  /* upvalue index */
	    luaL_checktype(L, 1, LUA_TFUNCTION$1);  /* closure */
	    let name = get ? lua_getupvalue(L, 1, n) : lua_setupvalue(L, 1, n);
	    if (name === null) return 0;
	    lua_pushstring$2(L, name);
	    lua_insert$1(L, -(get+1));  /* no-op if get is false */
	    return get + 1;
	};


	const db_getupvalue = function(L) {
	    return auxupvalue(L, 1);
	};

	const db_setupvalue = function(L) {
	    luaL_checkany$1(L, 3);
	    return auxupvalue(L, 0);
	};

	/*
	** Check whether a given upvalue from a given closure exists and
	** returns its index
	*/
	const checkupval = function(L, argf, argnup) {
	    let nup = luaL_checkinteger(L, argnup);  /* upvalue index */
	    luaL_checktype(L, argf, LUA_TFUNCTION$1);  /* closure */
	    luaL_argcheck(L, (lua_getupvalue(L, argf, nup) !== null), argnup, "invalid upvalue index");
	    return nup;
	};

	const db_upvalueid = function(L) {
	    let n = checkupval(L, 1, 2);
	    lua_pushlightuserdata$2(L, lua_upvalueid(L, 1, n));
	    return 1;
	};

	const db_upvaluejoin = function(L) {
	    let n1 = checkupval(L, 1, 2);
	    let n2 = checkupval(L, 3, 4);
	    luaL_argcheck(L, !lua_iscfunction(L, 1), 1, "Lua function expected");
	    luaL_argcheck(L, !lua_iscfunction(L, 3), 3, "Lua function expected");
	    lua_upvaluejoin(L, 1, n1, 3, n2);
	    return 0;
	};

	/*
	** The hook table at registry[HOOKKEY] maps threads to their current
	** hook function. (We only need the unique address of 'HOOKKEY'.)
	*/
	const HOOKKEY = to_luastring$4("__hooks__", true);

	const hooknames = ["call", "return", "line", "count", "tail call"].map(e => to_luastring$4(e));

	/*
	** Call hook function registered at hook table for the current
	** thread (if there is one)
	*/
	const hookf = function(L, ar) {
	    lua_rawgetp$2(L, LUA_REGISTRYINDEX$2, HOOKKEY);
	    let hooktable = lua_touserdata$2(L, -1);
	    let proxy = hooktable.get(L);
	    if (proxy) {  /* is there a hook function? */
	        proxy(L);
	        lua_pushstring$2(L, hooknames[ar.event]);  /* push event name */
	        if (ar.currentline >= 0)
	            lua_pushinteger$2(L, ar.currentline);  /* push current line */
	        else lua_pushnil$2(L);
	        lualib$4.lua_assert(lua_getinfo(L, to_luastring$4("lS"), ar));
	        lua_call$1(L, 2, 0);  /* call hook function */
	    }
	};

	/*
	** Convert a string mask (for 'sethook') into a bit mask
	*/
	const makemask = function(smask, count) {
	    let mask = 0;
	    if (luastring_indexOf$1(smask, 99 /* 'c'.charCodeAt(0) */) > -1) mask |= LUA_MASKCALL;
	    if (luastring_indexOf$1(smask, 114 /* 'r'.charCodeAt(0) */) > -1) mask |= LUA_MASKRET;
	    if (luastring_indexOf$1(smask, 108 /* 'l'.charCodeAt(0) */) > -1) mask |= LUA_MASKLINE;
	    if (count > 0) mask |= LUA_MASKCOUNT;
	    return mask;
	};

	/*
	** Convert a bit mask (for 'gethook') into a string mask
	*/
	const unmakemask = function(mask, smask) {
	    let i = 0;
	    if (mask & LUA_MASKCALL) smask[i++] = 99 /* 'c'.charCodeAt(0) */;
	    if (mask & LUA_MASKRET) smask[i++] = 114 /* 'r'.charCodeAt(0) */;
	    if (mask & LUA_MASKLINE) smask[i++] = 108 /* 'l'.charCodeAt(0) */;
	    return smask.subarray(0, i);
	};

	const db_sethook = function(L) {
	    let mask, count, func;
	    let thread = getthread(L);
	    let L1 = thread.thread;
	    let arg = thread.arg;
	    if (lua_isnoneornil(L, arg+1)) {  /* no hook? */
	        lua_settop$2(L, arg+1);
	        func = null; mask = 0; count = 0;  /* turn off hooks */
	    }
	    else {
	        const smask = luaL_checkstring$1(L, arg + 2);
	        luaL_checktype(L, arg+1, LUA_TFUNCTION$1);
	        count = luaL_optinteger(L, arg + 3, 0);
	        func = hookf; mask = makemask(smask, count);
	    }
	    /* as weak tables are not supported; use a JS weak-map */
	    let hooktable;
	    if (lua_rawgetp$2(L, LUA_REGISTRYINDEX$2, HOOKKEY) === LUA_TNIL$2) {
	        hooktable = new WeakMap();
	        lua_pushlightuserdata$2(L, hooktable);
	        lua_rawsetp$2(L, LUA_REGISTRYINDEX$2, HOOKKEY);  /* set it in position */
	    } else {
	        hooktable = lua_touserdata$2(L, -1);
	    }
	    let proxy = lua_toproxy$1(L, arg + 1);  /* value (hook function) */
	    hooktable.set(L1, proxy);
	    lua_sethook(L1, func, mask, count);
	    return 0;
	};

	const db_gethook = function(L) {
	    let thread = getthread(L);
	    let L1 = thread.thread;
	    let buff = new Uint8Array(5);
	    let mask = lua_gethookmask(L1);
	    let hook = lua_gethook(L1);
	    if (hook === null)  /* no hook? */
	        lua_pushnil$2(L);
	    else if (hook !== hookf)  /* external hook? */
	        lua_pushliteral$3(L, "external hook");
	    else {  /* hook table must exist */
	        lua_rawgetp$2(L, LUA_REGISTRYINDEX$2, HOOKKEY);
	        let hooktable = lua_touserdata$2(L, -1);
	        let proxy = hooktable.get(L1);
	        proxy(L);
	    }
	    lua_pushstring$2(L, unmakemask(mask, buff));  /* 2nd result = mask */
	    lua_pushinteger$2(L, lua_gethookcount(L1));  /* 3rd result = count */
	    return 3;
	};

	const db_traceback = function(L) {
	    let thread = getthread(L);
	    let L1 = thread.thread;
	    let arg = thread.arg;
	    let msg = lua_tostring$1(L, arg + 1);
	    if (msg === null && !lua_isnoneornil(L, arg + 1))  /* non-string 'msg'? */
	        lua_pushvalue$2(L, arg + 1);  /* return it untouched */
	    else {
	        let level = luaL_optinteger(L, arg + 2, L === L1 ? 1 : 0);
	        luaL_traceback(L, L1, msg, level);
	    }
	    return 1;
	};

	const dblib = {
	    "gethook":      db_gethook,
	    "getinfo":      db_getinfo,
	    "getlocal":     db_getlocal,
	    "getmetatable": db_getmetatable,
	    "getregistry":  db_getregistry,
	    "getupvalue":   db_getupvalue,
	    "getuservalue": db_getuservalue,
	    "sethook":      db_sethook,
	    "setlocal":     db_setlocal,
	    "setmetatable": db_setmetatable,
	    "setupvalue":   db_setupvalue,
	    "setuservalue": db_setuservalue,
	    "traceback":    db_traceback,
	    "upvalueid":    db_upvalueid,
	    "upvaluejoin":  db_upvaluejoin
	};

	let getinput;
	if (typeof process !== "undefined") { // Only with Node
	    const readlineSync$1 = readlineSync;
	    readlineSync$1.setDefaultOptions({
	        prompt: 'lua_debug> '
	    });
	    getinput = function() {
	        return readlineSync$1.prompt();
	    };
	} else if (typeof window !== "undefined") {
	    /* if in browser use window.prompt. Doesn't work from web workers.
	       See https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt
	    */
	    getinput = function() {
	        let input = prompt("lua_debug>", "");
	        return (input !== null) ? input : "";
	    };
	}
	if (getinput) {
	    dblib.debug = function(L) {
	        for (;;) {
	            let input = getinput();

	            if (input === "cont")
	                return 0;

	            if (input.length === 0)
	                continue;

	            let buffer = to_luastring$4(input);
	            if (luaL_loadbuffer(L, buffer, buffer.length, to_luastring$4("=(debug command)", true))
	                || lua_pcall$1(L, 0, 0, 0)) {
	                lua_writestringerror(lua_tojsstring$1(L, -1), "\n");
	            }
	            lua_settop$2(L, 0);  /* remove eventual returns */
	        }
	    };
	}

	const luaopen_debug$1 = function(L) {
	    luaL_newlib$3(L, dblib);
	    return 1;
	};

	ldblib.luaopen_debug = luaopen_debug$1;

	var loadlib = {};

	const {
	    LUA_DIRSEP,
	    LUA_EXEC_DIR,
	    LUA_JSPATH_DEFAULT,
	    LUA_PATH_DEFAULT,
	    LUA_PATH_MARK,
	    LUA_PATH_SEP
	} = luaconf$1;
	const {
	    LUA_OK: LUA_OK$1,
	    LUA_REGISTRYINDEX: LUA_REGISTRYINDEX$1,
	    LUA_TNIL: LUA_TNIL$1,
	    LUA_TTABLE: LUA_TTABLE$1,
	    lua_callk,
	    lua_createtable,
	    lua_getfield: lua_getfield$1,
	    lua_insert,
	    lua_isfunction,
	    lua_isnil: lua_isnil$1,
	    lua_isstring,
	    lua_newtable,
	    lua_pop: lua_pop$2,
	    lua_pushboolean: lua_pushboolean$1,
	    lua_pushcclosure,
	    lua_pushcfunction: lua_pushcfunction$1,
	    lua_pushfstring,
	    lua_pushglobaltable,
	    lua_pushlightuserdata: lua_pushlightuserdata$1,
	    lua_pushliteral: lua_pushliteral$2,
	    lua_pushlstring,
	    lua_pushnil: lua_pushnil$1,
	    lua_pushstring: lua_pushstring$1,
	    lua_pushvalue: lua_pushvalue$1,
	    lua_rawgeti: lua_rawgeti$1,
	    lua_rawgetp: lua_rawgetp$1,
	    lua_rawseti,
	    lua_rawsetp: lua_rawsetp$1,
	    lua_remove,
	    lua_setfield: lua_setfield$2,
	    lua_setmetatable,
	    lua_settop: lua_settop$1,
	    lua_toboolean: lua_toboolean$1,
	    lua_tostring,
	    lua_touserdata: lua_touserdata$1,
	    lua_upvalueindex
	} = lua$2;
	const {
	    LUA_LOADED_TABLE,
	    LUA_PRELOAD_TABLE,
	    luaL_Buffer,
	    luaL_addvalue,
	    luaL_buffinit,
	    luaL_checkstring,
	    luaL_error: luaL_error$1,
	    luaL_getsubtable,
	    luaL_gsub,
	    luaL_len,
	    luaL_loadfile,
	    luaL_newlib: luaL_newlib$2,
	    luaL_optstring,
	    luaL_pushresult,
	    luaL_setfuncs: luaL_setfuncs$1
	} = lauxlib$2;
	const lualib$3 = lualib$8;
	const {
	    luastring_indexOf,
	    to_jsstring,
	    to_luastring: to_luastring$3,
	    to_uristring
	} = fengaricore;
	const fengari  = fengari$1;

	const global_env$1 = (function() {
	    if (typeof process !== "undefined") {
	        /* node */
	        return commonjsGlobal;
	    } else if (typeof window !== "undefined") {
	        /* browser window */
	        return window;
	    } else if (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope) {
	        /* web worker */
	        return self;
	    } else {
	        /* unknown global env */
	        return (0, eval)('this'); /* use non-strict mode to get global env */
	    }
	})();

	const JSLIBS = to_luastring$3("__JSLIBS__");
	const LUA_PATH_VAR = "LUA_PATH";
	const LUA_JSPATH_VAR = "LUA_JSPATH";

	const LUA_IGMARK = "-";

	/*
	** LUA_CSUBSEP is the character that replaces dots in submodule names
	** when searching for a JS loader.
	** LUA_LSUBSEP is the character that replaces dots in submodule names
	** when searching for a Lua loader.
	*/
	const LUA_CSUBSEP = LUA_DIRSEP;
	const LUA_LSUBSEP = LUA_DIRSEP;

	/* prefix for open functions in JS libraries */
	const LUA_POF = to_luastring$3("luaopen_");

	/* separator for open functions in JS libraries */
	const LUA_OFSEP = to_luastring$3("_");
	const LIB_FAIL = "open";

	const AUXMARK = to_luastring$3("\x01");


	/*
	** load JS library in file 'path'. If 'seeglb', load with all names in
	** the library global.
	** Returns the library; in case of error, returns NULL plus an
	** error string in the stack.
	*/
	let lsys_load;
	if (typeof process === "undefined") {
	    lsys_load = function(L, path, seeglb) {
	        path = to_uristring(path);
	        let xhr = new XMLHttpRequest();
	        xhr.open("GET", path, false);
	        xhr.send();

	        if (xhr.status < 200 || xhr.status >= 300) {
	            lua_pushstring$1(L, to_luastring$3(`${xhr.status}: ${xhr.statusText}`));
	            return null;
	        }

	        let code = xhr.response;
	        /* Add sourceURL comment to get path in debugger+tracebacks */
	        if (!/\/\/[#@] sourceURL=/.test(code))
	            code += " //# sourceURL=" + path;
	        let func;
	        try {
	            func = Function("fengari", code);
	        } catch (e) {
	            lua_pushstring$1(L, to_luastring$3(`${e.name}: ${e.message}`));
	            return null;
	        }
	        let res = func(fengari);
	        if (typeof res === "function" || (typeof res === "object" && res !== null)) {
	            return res;
	        } else if (res === void 0) { /* assume library added symbols to global environment */
	            return global_env$1;
	        } else {
	            lua_pushstring$1(L, to_luastring$3(`library returned unexpected type (${typeof res})`));
	            return null;
	        }
	    };
	} else {
	    const pathlib = require$$1__default$1["default"];
	    lsys_load = function(L, path, seeglb) {
	        path = to_jsstring(path);
	        /* relative paths should be relative to cwd, not this js file */
	        path = pathlib.resolve(process.cwd(), path);
	        try {
	            return commonjsRequire(path);
	        } catch (e) {
	            lua_pushstring$1(L, to_luastring$3(e.message));
	            return null;
	        }
	    };
	}

	/*
	** Try to find a function named 'sym' in library 'lib'.
	** Returns the function; in case of error, returns NULL plus an
	** error string in the stack.
	*/
	const lsys_sym = function(L, lib, sym) {
	    let f = lib[to_jsstring(sym)];

	    if (f && typeof f === 'function')
	        return f;
	    else {
	        lua_pushfstring(L, to_luastring$3("undefined symbol: %s"), sym);
	        return null;
	    }
	};

	/*
	** return registry.LUA_NOENV as a boolean
	*/
	const noenv = function(L) {
	    lua_getfield$1(L, LUA_REGISTRYINDEX$1, to_luastring$3("LUA_NOENV"));
	    let b = lua_toboolean$1(L, -1);
	    lua_pop$2(L, 1);  /* remove value */
	    return b;
	};

	let readable;
	if (typeof process !== "undefined") { // Only with Node
	    const fs = require$$0__default["default"];

	    readable = function(filename) {
	        try {
	            let fd = fs.openSync(filename, 'r');
	            fs.closeSync(fd);
	        } catch (e) {
	            return false;
	        }
	        return true;
	    };
	} else {
	    readable = function(path) {
	        path = to_uristring(path);
	        let xhr = new XMLHttpRequest();
	        /* Following GET request done by searcher_Web will be cached */
	        xhr.open("GET", path, false);
	        xhr.send();

	        return xhr.status >= 200 && xhr.status <= 299;
	    };
	}


	/* error codes for 'lookforfunc' */
	const ERRLIB  = 1;
	const ERRFUNC = 2;

	/*
	** Look for a C function named 'sym' in a dynamically loaded library
	** 'path'.
	** First, check whether the library is already loaded; if not, try
	** to load it.
	** Then, if 'sym' is '*', return true (as library has been loaded).
	** Otherwise, look for symbol 'sym' in the library and push a
	** C function with that symbol.
	** Return 0 and 'true' or a function in the stack; in case of
	** errors, return an error code and an error message in the stack.
	*/
	const lookforfunc = function(L, path, sym) {
	    let reg = checkjslib(L, path);  /* check loaded JS libraries */
	    if (reg === null) {  /* must load library? */
	        reg = lsys_load(L, path, sym[0] === '*'.charCodeAt(0));  /* a global symbols if 'sym'=='*' */
	        if (reg === null) return ERRLIB;  /* unable to load library */
	        addtojslib(L, path, reg);
	    }
	    if (sym[0] === '*'.charCodeAt(0)) {  /* loading only library (no function)? */
	        lua_pushboolean$1(L, 1);  /* return 'true' */
	        return 0;  /* no errors */
	    }
	    else {
	        let f = lsys_sym(L, reg, sym);
	        if (f === null)
	            return ERRFUNC;  /* unable to find function */
	        lua_pushcfunction$1(L, f);  /* else create new function */
	        return 0;  /* no errors */
	    }
	};

	const ll_loadlib = function(L) {
	    let path = luaL_checkstring(L, 1);
	    let init = luaL_checkstring(L, 2);
	    let stat = lookforfunc(L, path, init);
	    if (stat === 0)  /* no errors? */
	        return 1;  /* return the loaded function */
	    else {  /* error; error message is on stack top */
	        lua_pushnil$1(L);
	        lua_insert(L, -2);
	        lua_pushliteral$2(L, (stat === ERRLIB) ? LIB_FAIL : "init");
	        return 3;  /* return nil, error message, and where */
	    }
	};

	const env = (function() {
	    if (typeof process !== "undefined") {
	        /* node */
	        return process.env;
	    } else {
	        return global_env$1;
	    }
	})();

	/*
	** Set a path
	*/
	const setpath = function(L, fieldname, envname, dft) {
	    let nver = `${envname}${lualib$3.LUA_VERSUFFIX}`;
	    lua_pushstring$1(L, to_luastring$3(nver));
	    let path = env[nver];  /* use versioned name */
	    if (path === undefined)  /* no environment variable? */
	        path = env[envname];  /* try unversioned name */
	    if (path === undefined || noenv(L))  /* no environment variable? */
	        lua_pushstring$1(L, dft);  /* use default */
	    else {
	        /* replace ";;" by ";AUXMARK;" and then AUXMARK by default path */
	        path = luaL_gsub(
	            L,
	            to_luastring$3(path),
	            to_luastring$3(LUA_PATH_SEP + LUA_PATH_SEP, true),
	            to_luastring$3(LUA_PATH_SEP + to_jsstring(AUXMARK) + LUA_PATH_SEP, true)
	        );
	        luaL_gsub(L, path, AUXMARK, dft);
	        lua_remove(L, -2); /* remove result from 1st 'gsub' */
	    }
	    lua_setfield$2(L, -3, fieldname);  /* package[fieldname] = path value */
	    lua_pop$2(L, 1);  /* pop versioned variable name */
	};

	/*
	** return registry.JSLIBS[path]
	*/
	const checkjslib = function(L, path) {
	    lua_rawgetp$1(L, LUA_REGISTRYINDEX$1, JSLIBS);
	    lua_getfield$1(L, -1, path);
	    let plib = lua_touserdata$1(L, -1);  /* plib = JSLIBS[path] */
	    lua_pop$2(L, 2);  /* pop JSLIBS table and 'plib' */
	    return plib;
	};

	/*
	** registry.JSLIBS[path] = plib        -- for queries
	** registry.JSLIBS[#JSLIBS + 1] = plib  -- also keep a list of all libraries
	*/
	const addtojslib = function(L, path, plib) {
	    lua_rawgetp$1(L, LUA_REGISTRYINDEX$1, JSLIBS);
	    lua_pushlightuserdata$1(L, plib);
	    lua_pushvalue$1(L, -1);
	    lua_setfield$2(L, -3, path);  /* JSLIBS[path] = plib */
	    lua_rawseti(L, -2, luaL_len(L, -2) + 1);  /* JSLIBS[#JSLIBS + 1] = plib */
	    lua_pop$2(L, 1);  /* pop JSLIBS table */
	};

	const pushnexttemplate = function(L, path) {
	    while (path[0] === LUA_PATH_SEP.charCodeAt(0)) path = path.subarray(1);  /* skip separators */
	    if (path.length === 0) return null;  /* no more templates */
	    let l = luastring_indexOf(path, LUA_PATH_SEP.charCodeAt(0));  /* find next separator */
	    if (l < 0) l = path.length;
	    lua_pushlstring(L, path, l);  /* template */
	    return path.subarray(l);
	};

	const searchpath = function(L, name, path, sep, dirsep) {
	    let msg = new luaL_Buffer();  /* to build error message */
	    luaL_buffinit(L, msg);
	    if (sep[0] !== 0)  /* non-empty separator? */
	        name = luaL_gsub(L, name, sep, dirsep);  /* replace it by 'dirsep' */
	    while ((path = pushnexttemplate(L, path)) !== null) {
	        let filename = luaL_gsub(L, lua_tostring(L, -1), to_luastring$3(LUA_PATH_MARK, true), name);
	        lua_remove(L, -2);  /* remove path template */
	        if (readable(filename))  /* does file exist and is readable? */
	            return filename;  /* return that file name */
	        lua_pushfstring(L, to_luastring$3("\n\tno file '%s'"), filename);
	        lua_remove(L, -2);  /* remove file name */
	        luaL_addvalue(msg);
	    }
	    luaL_pushresult(msg);  /* create error message */
	    return null;  /* not found */
	};

	const ll_searchpath = function(L) {
	    let f = searchpath(
	        L,
	        luaL_checkstring(L, 1),
	        luaL_checkstring(L, 2),
	        luaL_optstring(L, 3, "."),
	        luaL_optstring(L, 4, LUA_DIRSEP)
	    );
	    if (f !== null) return 1;
	    else {  /* error message is on top of the stack */
	        lua_pushnil$1(L);
	        lua_insert(L, -2);
	        return 2;  /* return nil + error message */
	    }
	};

	const findfile = function(L, name, pname, dirsep) {
	    lua_getfield$1(L, lua_upvalueindex(1), pname);
	    let path = lua_tostring(L, -1);
	    if (path === null)
	        luaL_error$1(L, to_luastring$3("'package.%s' must be a string"), pname);
	    return searchpath(L, name, path, to_luastring$3("."), dirsep);
	};

	const checkload = function(L, stat, filename) {
	    if (stat) {  /* module loaded successfully? */
	        lua_pushstring$1(L, filename);  /* will be 2nd argument to module */
	        return 2;  /* return open function and file name */
	    } else
	        return luaL_error$1(L, to_luastring$3("error loading module '%s' from file '%s':\n\t%s"),
	            lua_tostring(L, 1), filename, lua_tostring(L, -1));
	};

	const searcher_Lua = function(L) {
	    let name = luaL_checkstring(L, 1);
	    let filename = findfile(L, name, to_luastring$3("path", true), to_luastring$3(LUA_LSUBSEP, true));
	    if (filename === null) return 1;  /* module not found in this path */
	    return checkload(L, luaL_loadfile(L, filename) === LUA_OK$1, filename);
	};

	/*
	** Try to find a load function for module 'modname' at file 'filename'.
	** First, change '.' to '_' in 'modname'; then, if 'modname' has
	** the form X-Y (that is, it has an "ignore mark"), build a function
	** name "luaopen_X" and look for it. (For compatibility, if that
	** fails, it also tries "luaopen_Y".) If there is no ignore mark,
	** look for a function named "luaopen_modname".
	*/
	const loadfunc = function(L, filename, modname) {
	    let openfunc;
	    modname = luaL_gsub(L, modname, to_luastring$3("."), LUA_OFSEP);
	    let mark = luastring_indexOf(modname, LUA_IGMARK.charCodeAt(0));
	    if (mark >= 0) {
	        openfunc = lua_pushlstring(L, modname, mark);
	        openfunc = lua_pushfstring(L, to_luastring$3("%s%s"), LUA_POF, openfunc);
	        let stat = lookforfunc(L, filename, openfunc);
	        if (stat !== ERRFUNC) return stat;
	        modname = mark + 1;  /* else go ahead and try old-style name */
	    }
	    openfunc = lua_pushfstring(L, to_luastring$3("%s%s"), LUA_POF, modname);
	    return lookforfunc(L, filename, openfunc);
	};

	const searcher_C = function(L) {
	    let name = luaL_checkstring(L, 1);
	    let filename = findfile(L, name, to_luastring$3("jspath", true), to_luastring$3(LUA_CSUBSEP, true));
	    if (filename === null) return 1;  /* module not found in this path */
	    return checkload(L, (loadfunc(L, filename, name) === 0), filename);
	};

	const searcher_Croot = function(L) {
	    let name = luaL_checkstring(L, 1);
	    let p = luastring_indexOf(name, '.'.charCodeAt(0));
	    let stat;
	    if (p < 0) return 0;  /* is root */
	    lua_pushlstring(L, name, p);
	    let filename = findfile(L, lua_tostring(L, -1), to_luastring$3("jspath", true), to_luastring$3(LUA_CSUBSEP, true));
	    if (filename === null) return 1;  /* root not found */
	    if ((stat = loadfunc(L, filename, name)) !== 0) {
	        if (stat != ERRFUNC)
	            return checkload(L, 0, filename);  /* real error */
	        else {  /* open function not found */
	            lua_pushstring$1(L, to_luastring$3("\n\tno module '%s' in file '%s'"), name, filename);
	            return 1;
	        }
	    }
	    lua_pushstring$1(L, filename);  /* will be 2nd argument to module */
	    return 2;
	};

	const searcher_preload = function(L) {
	    let name = luaL_checkstring(L, 1);
	    lua_getfield$1(L, LUA_REGISTRYINDEX$1, LUA_PRELOAD_TABLE);
	    if (lua_getfield$1(L, -1, name) === LUA_TNIL$1)  /* not found? */
	        lua_pushfstring(L, to_luastring$3("\n\tno field package.preload['%s']"), name);
	    return 1;
	};

	const findloader = function(L, name, ctx, k) {
	    let msg = new luaL_Buffer();  /* to build error message */
	    luaL_buffinit(L, msg);
	    /* push 'package.searchers' to index 3 in the stack */
	    if (lua_getfield$1(L, lua_upvalueindex(1), to_luastring$3("searchers", true)) !== LUA_TTABLE$1)
	        luaL_error$1(L, to_luastring$3("'package.searchers' must be a table"));
	    let ctx2 = {name: name, i: 1, msg: msg, ctx: ctx, k: k};
	    return findloader_cont(L, LUA_OK$1, ctx2);
	};

	const findloader_cont = function(L, status, ctx) {
	    /*  iterate over available searchers to find a loader */
	    for (; ; ctx.i++) {
	        if (status === LUA_OK$1) {
	            if (lua_rawgeti$1(L, 3, ctx.i) === LUA_TNIL$1) {  /* no more searchers? */
	                lua_pop$2(L, 1);  /* remove nil */
	                luaL_pushresult(ctx.msg);  /* create error message */
	                luaL_error$1(L, to_luastring$3("module '%s' not found:%s"), ctx.name, lua_tostring(L, -1));
	            }
	            lua_pushstring$1(L, ctx.name);
	            lua_callk(L, 1, 2, ctx, findloader_cont);  /* call it */
	        } else {
	            status = LUA_OK$1;
	        }
	        if (lua_isfunction(L, -2))  /* did it find a loader? */
	            break;  /* module loader found */
	        else if (lua_isstring(L, -2)) {  /* searcher returned error message? */
	            lua_pop$2(L, 1);  /* remove extra return */
	            luaL_addvalue(ctx.msg);  /* concatenate error message */
	        }
	        else
	            lua_pop$2(L, 2);  /* remove both returns */
	    }
	    return ctx.k(L, LUA_OK$1, ctx.ctx);
	};

	const ll_require = function(L) {
	    let name = luaL_checkstring(L, 1);
	    lua_settop$1(L, 1);  /* LOADED table will be at index 2 */
	    lua_getfield$1(L, LUA_REGISTRYINDEX$1, LUA_LOADED_TABLE);
	    lua_getfield$1(L, 2, name);  /* LOADED[name] */
	    if (lua_toboolean$1(L, -1))  /* is it there? */
	        return 1;  /* package is already loaded */
	    /* else must load package */
	    lua_pop$2(L, 1);  /* remove 'getfield' result */
	    let ctx = name;
	    return findloader(L, name, ctx, ll_require_cont);
	};

	const ll_require_cont = function(L, status, ctx) {
	    let name = ctx;
	    lua_pushstring$1(L, name);  /* pass name as argument to module loader */
	    lua_insert(L, -2);  /* name is 1st argument (before search data) */
	    lua_callk(L, 2, 1, ctx, ll_require_cont2);
	    return ll_require_cont2(L, LUA_OK$1, ctx);  /* run loader to load module */
	};

	const ll_require_cont2 = function(L, status, ctx) {
	    let name = ctx;
	    if (!lua_isnil$1(L, -1))  /* non-nil return? */
	        lua_setfield$2(L, 2, name);  /* LOADED[name] = returned value */
	    if (lua_getfield$1(L, 2, name) == LUA_TNIL$1) {   /* module set no value? */
	        lua_pushboolean$1(L, 1);  /* use true as result */
	        lua_pushvalue$1(L, -1);  /* extra copy to be returned */
	        lua_setfield$2(L, 2, name);  /* LOADED[name] = true */
	    }
	    return 1;
	};

	const pk_funcs = {
	    "loadlib": ll_loadlib,
	    "searchpath": ll_searchpath
	};

	const ll_funcs = {
	    "require": ll_require
	};

	const createsearcherstable = function(L) {
	    let searchers = [searcher_preload, searcher_Lua, searcher_C, searcher_Croot, null];
	    /* create 'searchers' table */
	    lua_createtable(L);
	    /* fill it with predefined searchers */
	    for (let i = 0; searchers[i]; i++) {
	        lua_pushvalue$1(L, -2);  /* set 'package' as upvalue for all searchers */
	        lua_pushcclosure(L, searchers[i], 1);
	        lua_rawseti(L, -2, i+1);
	    }
	    lua_setfield$2(L, -2, to_luastring$3("searchers", true));  /* put it in field 'searchers' */
	};

	/*
	** create table JSLIBS to keep track of loaded JS libraries,
	** setting a finalizer to close all libraries when closing state.
	*/
	const createjslibstable = function(L) {
	    lua_newtable(L);  /* create JSLIBS table */
	    lua_createtable(L, 0, 1);  /* create metatable for JSLIBS */
	    lua_setmetatable(L, -2);
	    lua_rawsetp$1(L, LUA_REGISTRYINDEX$1, JSLIBS);  /* set JSLIBS table in registry */
	};

	const luaopen_package$1 = function(L) {
	    createjslibstable(L);
	    luaL_newlib$2(L, pk_funcs);  /* create 'package' table */
	    createsearcherstable(L);
	    /* set paths */
	    setpath(L, to_luastring$3("path", true), LUA_PATH_VAR, LUA_PATH_DEFAULT);
	    setpath(L, to_luastring$3("jspath", true), LUA_JSPATH_VAR, LUA_JSPATH_DEFAULT);
	    /* store config information */
	    lua_pushliteral$2(L, LUA_DIRSEP + "\n" + LUA_PATH_SEP + "\n" + LUA_PATH_MARK + "\n" +
	                        LUA_EXEC_DIR + "\n" + LUA_IGMARK + "\n");
	    lua_setfield$2(L, -2, to_luastring$3("config", true));
	    /* set field 'loaded' */
	    luaL_getsubtable(L, LUA_REGISTRYINDEX$1, LUA_LOADED_TABLE);
	    lua_setfield$2(L, -2, to_luastring$3("loaded", true));
	    /* set field 'preload' */
	    luaL_getsubtable(L, LUA_REGISTRYINDEX$1, LUA_PRELOAD_TABLE);
	    lua_setfield$2(L, -2, to_luastring$3("preload", true));
	    lua_pushglobaltable(L);
	    lua_pushvalue$1(L, -2);  /* set 'package' as upvalue for next lib */
	    luaL_setfuncs$1(L, ll_funcs, 1);  /* open lib into global table */
	    lua_pop$2(L, 1);  /* pop global table */
	    return 1;  /* return 'package' table */
	};

	loadlib.luaopen_package = luaopen_package$1;

	var fengarilib = {};

	const {
	    lua_pushinteger: lua_pushinteger$1,
	    lua_pushliteral: lua_pushliteral$1,
	    lua_setfield: lua_setfield$1
	} = lua$2;
	const {
	    luaL_newlib: luaL_newlib$1
	} = lauxlib$2;
	const {
	    FENGARI_AUTHORS,
	    FENGARI_COPYRIGHT,
	    FENGARI_RELEASE,
	    FENGARI_VERSION,
	    FENGARI_VERSION_MAJOR,
	    FENGARI_VERSION_MINOR,
	    FENGARI_VERSION_NUM,
	    FENGARI_VERSION_RELEASE,
	    to_luastring: to_luastring$2
	} = fengaricore;

	const luaopen_fengari$1 = function(L) {
	    luaL_newlib$1(L, {});
	    lua_pushliteral$1(L, FENGARI_AUTHORS);
	    lua_setfield$1(L, -2, to_luastring$2("AUTHORS"));
	    lua_pushliteral$1(L, FENGARI_COPYRIGHT);
	    lua_setfield$1(L, -2, to_luastring$2("COPYRIGHT"));
	    lua_pushliteral$1(L, FENGARI_RELEASE);
	    lua_setfield$1(L, -2, to_luastring$2("RELEASE"));
	    lua_pushliteral$1(L, FENGARI_VERSION);
	    lua_setfield$1(L, -2, to_luastring$2("VERSION"));
	    lua_pushliteral$1(L, FENGARI_VERSION_MAJOR);
	    lua_setfield$1(L, -2, to_luastring$2("VERSION_MAJOR"));
	    lua_pushliteral$1(L, FENGARI_VERSION_MINOR);
	    lua_setfield$1(L, -2, to_luastring$2("VERSION_MINOR"));
	    lua_pushinteger$1(L, FENGARI_VERSION_NUM);
	    lua_setfield$1(L, -2, to_luastring$2("VERSION_NUM"));
	    lua_pushliteral$1(L, FENGARI_VERSION_RELEASE);
	    lua_setfield$1(L, -2, to_luastring$2("VERSION_RELEASE"));
	    return 1;
	};

	fengarilib.luaopen_fengari = luaopen_fengari$1;

	var linit$1 = {};

	const { lua_pop: lua_pop$1 } = lua$2;
	const { luaL_requiref: luaL_requiref$1 } = lauxlib$2;
	const { to_luastring: to_luastring$1 } = fengaricore;

	const loadedlibs = {};

	/* export before requiring lualib.js */
	const luaL_openlibs = function(L) {
	    /* "require" functions from 'loadedlibs' and set results to global table */
	    for (let lib in loadedlibs) {
	        luaL_requiref$1(L, to_luastring$1(lib), loadedlibs[lib], 1);
	        lua_pop$1(L, 1); /* remove lib */
	    }
	};
	linit$1.luaL_openlibs = luaL_openlibs;

	const lualib$2 = lualib$8;
	const { luaopen_base: luaopen_base$1 }      = lbaselib;
	const { luaopen_coroutine } = lcorolib;
	const { luaopen_debug }     = ldblib;
	const { luaopen_math }      = lmathlib;
	const { luaopen_package }   = loadlib;
	const { luaopen_os }        = loslib;
	const { luaopen_string }    = lstrlib;
	const { luaopen_table }     = ltablib;
	const { luaopen_utf8 }      = lutf8lib;

	loadedlibs["_G"] = luaopen_base$1,
	loadedlibs[lualib$2.LUA_LOADLIBNAME] = luaopen_package;
	loadedlibs[lualib$2.LUA_COLIBNAME] = luaopen_coroutine;
	loadedlibs[lualib$2.LUA_TABLIBNAME] = luaopen_table;
	loadedlibs[lualib$2.LUA_OSLIBNAME] = luaopen_os;
	loadedlibs[lualib$2.LUA_STRLIBNAME] = luaopen_string;
	loadedlibs[lualib$2.LUA_MATHLIBNAME] = luaopen_math;
	loadedlibs[lualib$2.LUA_UTF8LIBNAME] = luaopen_utf8;
	loadedlibs[lualib$2.LUA_DBLIBNAME] = luaopen_debug;
	if (typeof process !== "undefined")
	    loadedlibs[lualib$2.LUA_IOLIBNAME] = liolib.luaopen_io;

	/* Extension: fengari library */
	const { luaopen_fengari } = fengarilib;
	loadedlibs[lualib$2.LUA_FENGARILIBNAME] = luaopen_fengari;

	const {
	    LUA_VERSION_MAJOR,
	    LUA_VERSION_MINOR
	} = lua$2;

	const LUA_VERSUFFIX = "_" + LUA_VERSION_MAJOR + "_" + LUA_VERSION_MINOR;
	lualib$8.LUA_VERSUFFIX = LUA_VERSUFFIX;

	lualib$8.lua_assert = function(c) {};

	lualib$8.luaopen_base = lbaselib.luaopen_base;

	const LUA_COLIBNAME = "coroutine";
	lualib$8.LUA_COLIBNAME = LUA_COLIBNAME;
	lualib$8.luaopen_coroutine = lcorolib.luaopen_coroutine;

	const LUA_TABLIBNAME = "table";
	lualib$8.LUA_TABLIBNAME = LUA_TABLIBNAME;
	lualib$8.luaopen_table = ltablib.luaopen_table;

	if (typeof process !== "undefined") {
	    const LUA_IOLIBNAME = "io";
	    lualib$8.LUA_IOLIBNAME = LUA_IOLIBNAME;
	    lualib$8.luaopen_io = liolib.luaopen_io;
	}

	const LUA_OSLIBNAME = "os";
	lualib$8.LUA_OSLIBNAME = LUA_OSLIBNAME;
	lualib$8.luaopen_os = loslib.luaopen_os;

	const LUA_STRLIBNAME = "string";
	lualib$8.LUA_STRLIBNAME = LUA_STRLIBNAME;
	lualib$8.luaopen_string = lstrlib.luaopen_string;

	const LUA_UTF8LIBNAME = "utf8";
	lualib$8.LUA_UTF8LIBNAME = LUA_UTF8LIBNAME;
	lualib$8.luaopen_utf8 = lutf8lib.luaopen_utf8;

	const LUA_BITLIBNAME = "bit32";
	lualib$8.LUA_BITLIBNAME = LUA_BITLIBNAME;
	// module.exports.luaopen_bit32 = require("./lbitlib.js").luaopen_bit32;

	const LUA_MATHLIBNAME = "math";
	lualib$8.LUA_MATHLIBNAME = LUA_MATHLIBNAME;
	lualib$8.luaopen_math = lmathlib.luaopen_math;

	const LUA_DBLIBNAME = "debug";
	lualib$8.LUA_DBLIBNAME = LUA_DBLIBNAME;
	lualib$8.luaopen_debug = ldblib.luaopen_debug;

	const LUA_LOADLIBNAME = "package";
	lualib$8.LUA_LOADLIBNAME = LUA_LOADLIBNAME;
	lualib$8.luaopen_package = loadlib.luaopen_package;

	const LUA_FENGARILIBNAME = "fengari";
	lualib$8.LUA_FENGARILIBNAME = LUA_FENGARILIBNAME;
	lualib$8.luaopen_fengari = fengarilib.luaopen_fengari;

	const linit = linit$1;
	lualib$8.luaL_openlibs = linit.luaL_openlibs;

	/**
	@license MIT

	Copyright © 2017-2018 Benoit Giannangeli
	Copyright © 2017-2018 Daurnimator
	Copyright © 1994–2017 Lua.org, PUC-Rio.
	*/

	const core = fengaricore;

	fengari$1.FENGARI_AUTHORS         = core.FENGARI_AUTHORS;
	fengari$1.FENGARI_COPYRIGHT       = core.FENGARI_COPYRIGHT;
	fengari$1.FENGARI_RELEASE         = core.FENGARI_RELEASE;
	fengari$1.FENGARI_VERSION         = core.FENGARI_VERSION;
	fengari$1.FENGARI_VERSION_MAJOR   = core.FENGARI_VERSION_MAJOR;
	fengari$1.FENGARI_VERSION_MINOR   = core.FENGARI_VERSION_MINOR;
	fengari$1.FENGARI_VERSION_NUM     = core.FENGARI_VERSION_NUM;
	fengari$1.FENGARI_VERSION_RELEASE = core.FENGARI_VERSION_RELEASE;

	fengari$1.luastring_eq      = core.luastring_eq;
	fengari$1.luastring_indexOf = core.luastring_indexOf;
	fengari$1.luastring_of      = core.luastring_of;
	fengari$1.to_jsstring       = core.to_jsstring;
	fengari$1.to_luastring      = core.to_luastring;
	fengari$1.to_uristring      = core.to_uristring;

	const luaconf = luaconf$1;
	const lua$1     = lua$2;
	const lauxlib$1 = lauxlib$2;
	const lualib$1  = lualib$8;

	fengari$1.luaconf = luaconf;
	fengari$1.lua     = lua$1;
	fengari$1.lauxlib = lauxlib$1;
	fengari$1.lualib  = lualib$1;

	const {
		lua,
		lauxlib,
		lualib,
		to_luastring
	} = fengari$1;
	const {
		LUA_MULTRET,
		LUA_OK,
		LUA_REGISTRYINDEX,
		LUA_RIDX_MAINTHREAD,
		LUA_TBOOLEAN,
		LUA_TFUNCTION,
		LUA_TLIGHTUSERDATA,
		LUA_TNIL,
		LUA_TNONE,
		LUA_TNUMBER,
		LUA_TSTRING,
		LUA_TTABLE,
		LUA_TTHREAD,
		LUA_TUSERDATA,
		lua_atnativeerror,
		lua_call,
		lua_getfield,
		lua_gettable,
		lua_gettop,
		lua_isnil,
		lua_isproxy,
		lua_newuserdata,
		lua_pcall,
		lua_pop,
		lua_pushboolean,
		lua_pushcfunction,
		lua_pushinteger,
		lua_pushlightuserdata,
		lua_pushliteral,
		lua_pushnil,
		lua_pushnumber,
		lua_pushstring,
		lua_pushvalue,
		lua_rawgeti,
		lua_rawgetp,
		lua_rawsetp,
		lua_rotate,
		lua_setfield,
		lua_settable,
		lua_settop,
		lua_toboolean,
		lua_tojsstring,
		lua_tonumber,
		lua_toproxy,
		lua_tothread,
		lua_touserdata,
		lua_type
	} = lua;
	const {
		luaL_argerror,
		luaL_checkany,
		luaL_checkoption,
		luaL_checkstack,
		luaL_checkudata,
		luaL_error,
		luaL_getmetafield,
		luaL_newlib,
		luaL_newmetatable,
		luaL_requiref,
		luaL_setfuncs,
		luaL_setmetatable,
		luaL_testudata,
		luaL_tolstring
	} = lauxlib;
	const {
		luaopen_base
	} = lualib;

	const FENGARI_INTEROP_VERSION_MAJOR   = "0";
	const FENGARI_INTEROP_VERSION_MINOR   = "1";
	const FENGARI_INTEROP_VERSION_NUM     = 1;
	const FENGARI_INTEROP_VERSION_RELEASE = "3";
	const FENGARI_INTEROP_VERSION         = FENGARI_INTEROP_VERSION_MAJOR + "." + FENGARI_INTEROP_VERSION_MINOR;
	const FENGARI_INTEROP_RELEASE         = FENGARI_INTEROP_VERSION + "." + FENGARI_INTEROP_VERSION_RELEASE;

	let custom_inspect_symbol;
	if (typeof process !== "undefined") {
		try { /* for node.js */
			custom_inspect_symbol = require('util').inspect.custom;
		} catch (e) {}
	}

	const global_env = (function(Object) {
		return typeof globalThis === 'object' ?
			globalThis // eslint-disable-line no-undef
			: (this ?
				// compat: strict mode is unsupported
				this
				: ( // Based on https://mathiasbynens.be/notes/globalthis
					Object.defineProperty(Object.prototype, '_', {
						configurable: true,
						get: function () {
							delete Object.prototype._;
							return this;
						}
					})
					/* global _ */
					, _
				)
			);
	}(Object));

	let apply, construct, Reflect_deleteProperty;
	if (typeof Reflect !== "undefined") {
		apply = Reflect.apply;
		construct = Reflect.construct;
		Reflect_deleteProperty = Reflect.deleteProperty;
	} else {
		const fApply = Function.apply;
		const bind = Function.bind;
		apply = function(target, thisArgument, argumentsList) {
			return fApply.call(target, thisArgument, argumentsList);
		};
		construct = function(target, argumentsList /*, newTarget */) {
			switch (argumentsList.length) {
				case 0: return new target();
				case 1: return new target(argumentsList[0]);
				case 2: return new target(argumentsList[0], argumentsList[1]);
				case 3: return new target(argumentsList[0], argumentsList[1], argumentsList[2]);
				case 4: return new target(argumentsList[0], argumentsList[1], argumentsList[2], argumentsList[3]);
			}
			let args = [null];
			args.push.apply(args, argumentsList);
			return new (bind.apply(target, args))();
		};
		/* need to be in non-strict mode */
		Reflect_deleteProperty = Function("t", "k", "delete t[k]");
	}

	/*
	String.concat coerces to string with correct hint for Symbol.toPrimitive
	`this` isn't allowed to be null, so bind the empty string
	*/
	const toString = String.prototype.concat.bind("");

	const isobject = function(o) {
		return typeof o === "object" ? o !== null : typeof o === "function";
	};

	const js_tname = to_luastring("js object");
	const js_library_not_loaded = "js library not loaded into lua_State";

	const testjs = function(L, idx) {
		let u = luaL_testudata(L, idx, js_tname);
		if (u)
			return u.data;
		else
			return void 0;
	};

	const checkjs = function(L, idx) {
		return luaL_checkudata(L, idx, js_tname).data;
	};

	const pushjs = function(L, v) {
		let b = lua_newuserdata(L);
		b.data = v;
		luaL_setmetatable(L, js_tname);
	};

	const getmainthread = function(L) {
		lua_rawgeti(L, LUA_REGISTRYINDEX, LUA_RIDX_MAINTHREAD);
		let mainL = lua_tothread(L, -1);
		lua_pop(L, 1);
		return mainL;
	};

	/* weak map from states to proxy objects (for each object) in that state */
	const states = new WeakMap();

	const push = function(L, v) {
		switch (typeof v) {
			case "undefined":
				lua_pushnil(L);
				break;
			case "number":
				lua_pushnumber(L, v);
				break;
			case "string":
				lua_pushstring(L, to_luastring(v));
				break;
			case "boolean":
				lua_pushboolean(L, v);
				break;
			case "symbol":
				lua_pushlightuserdata(L, v);
				break;
			case "function":
				if (lua_isproxy(v, L)) {
					v(L);
					break;
				}
				/* fall through */
			case "object":
				if (v === null) {
					/* can't use null in a WeakMap; grab from registry */
					if (lua_rawgetp(L, LUA_REGISTRYINDEX, null) !== LUA_TUSERDATA)
						throw Error(js_library_not_loaded);
					break;
				}
				/* fall through */
			default: {
				/* Try and push same object again */
				let objects_seen = states.get(getmainthread(L));
				if (!objects_seen) throw Error(js_library_not_loaded);
				let p = objects_seen.get(v);
				if (p) {
					p(L);
				} else {
					pushjs(L, v);
					p = lua_toproxy(L, -1);
					objects_seen.set(v, p);
				}
			}
		}
	};

	const atnativeerror = function(L) {
		let u = lua_touserdata(L, 1);
		push(L, u);
		return 1;
	};

	const tojs = function(L, idx) {
		switch(lua_type(L, idx)) {
			case LUA_TNONE:
			case LUA_TNIL:
				return void 0;
			case LUA_TBOOLEAN:
				return lua_toboolean(L, idx);
			case LUA_TLIGHTUSERDATA:
				return lua_touserdata(L, idx);
			case LUA_TNUMBER:
				return lua_tonumber(L, idx);
			case LUA_TSTRING:
				return lua_tojsstring(L, idx);
			case LUA_TUSERDATA: {
				let u = testjs(L, idx);
				if (u !== void 0)
					return u;
			}
			/* fall through */
			case LUA_TTABLE:
			case LUA_TFUNCTION:
			case LUA_TTHREAD:
			/* fall through */
			default:
				return wrap(L, lua_toproxy(L, idx));
		}
	};

	/* Calls function on the stack with `nargs` from the stack.
	   On lua error, re-throws as javascript error
	   On success, returns single return value */
	const jscall = function(L, nargs) {
		let status = lua_pcall(L, nargs, 1, 0);
		let r = tojs(L, -1);
		lua_pop(L, 1);
		switch(status) {
			case LUA_OK:
				return r;
			default:
				throw r;
		}
	};

	const invoke = function(L, p, thisarg, args, n_results) {
		if (!isobject(args)) throw new TypeError("`args` argument must be an object");
		let length = +args.length;
		if (!(length >= 0)) length = 0; /* Keep NaN in mind */
		luaL_checkstack(L, 2+length, null);
		let base = lua_gettop(L);
		p(L);
		push(L, thisarg);
		for (let i=0; i<length; i++) {
			push(L, args[i]);
		}
		switch(lua_pcall(L, 1+length, n_results, 0)) {
			case LUA_OK: {
				let nres = lua_gettop(L)-base;
				let res = new Array(nres);
				for (let i=0; i<nres; i++) {
					res[i] = tojs(L, base+i+1);
				}
				lua_settop(L, base);
				return res;
			}
			default: {
				let r = tojs(L, -1);
				lua_settop(L, base);
				throw r;
			}
		}
	};

	const gettable = function(L) {
		lua_gettable(L, 1);
		return 1;
	};

	const get = function(L, p, prop) {
		luaL_checkstack(L, 3, null);
		lua_pushcfunction(L, gettable);
		p(L);
		push(L, prop);
		return jscall(L, 2);
	};

	const has = function(L, p, prop) {
		luaL_checkstack(L, 3, null);
		lua_pushcfunction(L, gettable);
		p(L);
		push(L, prop);
		let status = lua_pcall(L, 2, 1, 0);
		switch(status) {
			case LUA_OK: {
				let r = lua_isnil(L, -1);
				lua_pop(L, 1);
				return !r;
			}
			default: {
				let r = tojs(L, -1);
				lua_pop(L, 1);
				throw r;
			}
		}
	};

	const set = function(L, p, prop, value) {
		luaL_checkstack(L, 4, null);
		lua_pushcfunction(L, function(L) {
			lua_settable(L, 1);
			return 0;
		});
		p(L);
		push(L, prop);
		push(L, value);
		switch(lua_pcall(L, 3, 0, 0)) {
			case LUA_OK:
				return;
			default: {
				let r = tojs(L, -1);
				lua_pop(L, 1);
				throw r;
			}
		}
	};

	const deleteProperty = function(L, p, prop) {
		luaL_checkstack(L, 4, null);
		lua_pushcfunction(L, function(L) {
			lua_settable(L, 1);
			return 0;
		});
		p(L);
		push(L, prop);
		lua_pushnil(L);
		switch(lua_pcall(L, 3, 0, 0)) {
			case LUA_OK:
				return;
			default: {
				let r = tojs(L, -1);
				lua_pop(L, 1);
				throw r;
			}
		}
	};

	const tostring = function(L, p) {
		luaL_checkstack(L, 2, null);
		lua_pushcfunction(L, function(L) {
			luaL_tolstring(L, 1);
			return 1;
		});
		p(L);
		return jscall(L, 1);
	};

	/* implements lua's "Generic For" protocol */
	const iter_next = function() {
		let L = this.L;
		luaL_checkstack(L, 3, null);
		let top = lua_gettop(L);
		this.iter(L);
		this.state(L);
		this.last(L);
		switch(lua_pcall(L, 2, LUA_MULTRET, 0)) {
			case LUA_OK: {
				this.last = lua_toproxy(L, top+1);
				let r;
				if (lua_isnil(L, -1)) {
					r = {
						done: true,
						value: void 0
					};
				} else {
					let n_results = lua_gettop(L) - top;
					let result = new Array(n_results);
					for (let i=0; i<n_results; i++) {
						result[i] = tojs(L, top+i+1);
					}
					r = {
						done: false,
						value: result
					};
				}
				lua_settop(L, top);
				return r;
			}
			default: {
				let e = tojs(L, -1);
				lua_pop(L, 1);
				throw e;
			}
		}
	};

	/* make iteration use pairs() */
	const jsiterator = function(L, p) {
		luaL_checkstack(L, 1, null);
		lua_pushcfunction(L, function(L) {
			luaL_requiref(L, to_luastring("_G"), luaopen_base, 0);
			lua_getfield(L, -1, to_luastring("pairs"));
			p(L);
			lua_call(L, 1, 3);
			return 3;
		});
		switch(lua_pcall(L, 0, 3, 0)) {
			case LUA_OK: {
				let iter = lua_toproxy(L, -3);
				let state = lua_toproxy(L, -2);
				let last = lua_toproxy(L, -1);
				lua_pop(L, 3);
				return {
					L: L,
					iter: iter,
					state: state,
					last: last,
					next: iter_next
				};
			}
			default: {
				let r = tojs(L, -1);
				lua_pop(L, 1);
				throw r;
			}
		}
	};

	const wrap = function(L1, p) {
		const L = getmainthread(L1);
		/* we need `typeof js_proxy` to be "function" so that it's acceptable to native apis */
		let js_proxy = function() {
			/* only get one result */
			return invoke(L, p, this, arguments, 1)[0];
		};
		js_proxy.apply = function(thisarg, args) {
			/* only get one result */
			return invoke(L, p, thisarg, args, 1)[0];
		};
		js_proxy.invoke = function(thisarg, args) {
			return invoke(L, p, thisarg, args, LUA_MULTRET);
		};
		js_proxy.get = function(k) {
			return get(L, p, k);
		};
		js_proxy.has = function(k) {
			return has(L, p, k);
		};
		js_proxy.set = function(k, v) {
			return set(L, p, k, v);
		};
		js_proxy.delete = function(k) {
			return deleteProperty(L, p, k);
		};
		js_proxy.toString = function() {
			return tostring(L, p);
		};
		if (typeof Symbol === "function") {
			js_proxy[Symbol.toStringTag] = "Fengari object";
			js_proxy[Symbol.iterator] = function() {
				return jsiterator(L, p);
			};
			if (Symbol.toPrimitive) {
				js_proxy[Symbol.toPrimitive] = function(hint) {
					if (hint === "string") {
						return tostring(L, p);
					}
				};
			}
		}
		if (custom_inspect_symbol) {
			js_proxy[custom_inspect_symbol] = js_proxy.toString;
		}
		let objects_seen = states.get(L);
		if (!objects_seen) throw Error(js_library_not_loaded);
		objects_seen.set(js_proxy, p);
		return js_proxy;
	};

	const jslib = {
		"new": function(L) {
			let u = tojs(L, 1);
			let nargs = lua_gettop(L)-1;
			let args = new Array(nargs);
			for (let i = 0; i < nargs; i++) {
				args[i] = tojs(L, i+2);
			}
			push(L, construct(u, args));
			return 1;
		},
		"tonumber": function(L) {
			let u = tojs(L, 1);
			lua_pushnumber(L, +u);
			return 1;
		},
		"tostring": function(L) {
			let u = tojs(L, 1);
			lua_pushliteral(L, toString(u));
			return 1;
		},
		"instanceof": function(L) {
			let u1 = tojs(L, 1);
			let u2 = tojs(L, 2);
			lua_pushboolean(L, u1 instanceof u2);
			return 1;
		},
		"typeof": function(L) {
			let u = tojs(L, 1);
			lua_pushliteral(L, typeof u);
			return 1;
		}
	};

	if (typeof Symbol === "function" && Symbol.iterator) {
		const get_iterator = function(L, idx) {
			let u = checkjs(L, idx);
			let getiter = u[Symbol.iterator];
			if (!getiter)
				luaL_argerror(L, idx, to_luastring("object not iterable"));
			let iter = apply(getiter, u, []);
			if (!isobject(iter))
				luaL_argerror(L, idx, to_luastring("Result of the Symbol.iterator method is not an object"));
			return iter;
		};

		const next = function(L) {
			let iter = tojs(L, 1);
			let r = iter.next();
			if (r.done) {
				return 0;
			} else {
				push(L, r.value);
				return 1;
			}
		};

		jslib["of"] = function(L) {
			let iter = get_iterator(L, 1);
			lua_pushcfunction(L, next);
			push(L, iter);
			return 2;
		};
	}

	if (typeof Proxy === "function" && typeof Symbol === "function") {
		const L_symbol = Symbol("lua_State");
		const p_symbol = Symbol("fengari-proxy");

		const proxy_handlers = {
			"apply": function(target, thisarg, args) {
				return invoke(target[L_symbol], target[p_symbol], thisarg, args, 1)[0];
			},
			"construct": function(target, argumentsList) {
				let L = target[L_symbol];
				let p = target[p_symbol];
				let arg_length = argumentsList.length;
				luaL_checkstack(L, 2+arg_length, null);
				p(L);
				let idx = lua_gettop(L);
				if (luaL_getmetafield(L, idx, to_luastring("construct")) === LUA_TNIL) {
					lua_pop(L, 1);
					throw new TypeError("not a constructor");
				}
				lua_rotate(L, idx, 1);
				for (let i=0; i<arg_length; i++) {
					push(L, argumentsList[i]);
				}
				return jscall(L, 1+arg_length);
			},
			"defineProperty": function(target, prop, desc) {
				let L = target[L_symbol];
				let p = target[p_symbol];
				luaL_checkstack(L, 4, null);
				p(L);
				if (luaL_getmetafield(L, -1, to_luastring("defineProperty")) === LUA_TNIL) {
					lua_pop(L, 1);
					return false;
				}
				lua_rotate(L, -2, 1);
				push(L, prop);
				push(L, desc);
				return jscall(L, 3);
			},
			"deleteProperty": function(target, k) {
				return deleteProperty(target[L_symbol], target[p_symbol], k);
			},
			"get": function(target, k) {
				return get(target[L_symbol], target[p_symbol], k);
			},
			"getOwnPropertyDescriptor": function(target, prop) {
				let L = target[L_symbol];
				let p = target[p_symbol];
				luaL_checkstack(L, 3, null);
				p(L);
				if (luaL_getmetafield(L, -1, to_luastring("getOwnPropertyDescriptor")) === LUA_TNIL) {
					lua_pop(L, 1);
					return;
				}
				lua_rotate(L, -2, 1);
				push(L, prop);
				return jscall(L, 2);
			},
			"getPrototypeOf": function(target) {
				let L = target[L_symbol];
				let p = target[p_symbol];
				luaL_checkstack(L, 2, null);
				p(L);
				if (luaL_getmetafield(L, -1, to_luastring("getPrototypeOf")) === LUA_TNIL) {
					lua_pop(L, 1);
					return null;
				}
				lua_rotate(L, -2, 1);
				return jscall(L, 1);
			},
			"has": function(target, k) {
				return has(target[L_symbol], target[p_symbol], k);
			},
			"ownKeys": function(target) {
				let L = target[L_symbol];
				let p = target[p_symbol];
				luaL_checkstack(L, 2, null);
				p(L);
				if (luaL_getmetafield(L, -1, to_luastring("ownKeys")) === LUA_TNIL) {
					lua_pop(L, 1);
					throw Error("ownKeys unknown for fengari object");
				}
				lua_rotate(L, -2, 1);
				return jscall(L, 1);
			},
			"set": function(target, k, v) {
				set(target[L_symbol], target[p_symbol], k, v);
				return true;
			},
			"setPrototypeOf": function(target, prototype) {
				let L = target[L_symbol];
				let p = target[p_symbol];
				luaL_checkstack(L, 3, null);
				p(L);
				if (luaL_getmetafield(L, -1, to_luastring("setPrototypeOf")) === LUA_TNIL) {
					lua_pop(L, 1);
					return false;
				}
				lua_rotate(L, -2, 1);
				push(L, prototype);
				return jscall(L, 2);
			}
		};

		/*
		Functions created with `function(){}` have a non-configurable .prototype
		field. This causes issues with the .ownKeys and .getOwnPropertyDescriptor
		traps.
		However using `.bind()` returns a function without the .prototype property.

		```js
		Reflect.ownKeys((function(){})) // Array [ "prototype", "length", "name" ]
		Reflect.ownKeys((function(){}).bind()) // Array [ "length", "name" ]
		```
		*/
		const raw_function = function() {
			let f = (function(){}).bind();
			delete f.length;
			delete f.name;
			return f;
		};

		/*
		We use Function() here to get prevent transpilers from converting to a
		non-arrow function.
		To avoid setting off strict CSP rules, we only call Function lazily.
		Additionally, we avoid setting the internal name field by never giving the
		new function a name in the block it was defined (and instead delete-ing
		the configurable fields .length and .name in a wrapper function)
		*/
		let make_arrow_function = function() {
			make_arrow_function = Function("return ()=>void 0;");
			return make_arrow_function();
		};
		const raw_arrow_function = function() {
			let f = make_arrow_function();
			delete f.length;
			delete f.name;
			return f;
		};

		/*
		Arrow functions do not have a .prototype field:

		```js
		Reflect.ownKeys((() = >void 0)) // Array [ "length", "name" ]
		```

		However they cannot be used as a constructor:

		```js
		new (new Proxy(() => void 0, { construct: function() { return {}; } })) // TypeError: (intermediate value) is not a constructor
		new (new Proxy(function(){}, { construct: function() { return {}; } })) // {}
		```
		*/
		const createproxy = function(L1, p, type) {
			const L = getmainthread(L1);
			let target;
			switch (type) {
				case "function":
					target = raw_function();
					break;
				case "arrow_function":
					target = raw_arrow_function();
					break;
				case "object":
					target = {};
					break;
				default:
					throw TypeError("invalid type to createproxy");
			}
			target[p_symbol] = p;
			target[L_symbol] = L;
			return new Proxy(target, proxy_handlers);
		};

		const valid_types = ["function", "arrow_function", "object"];
		const valid_types_as_luastring = valid_types.map((v) => to_luastring(v));
		jslib["createproxy"] = function(L) {
			luaL_checkany(L, 1);
			let type = valid_types[luaL_checkoption(L, 2, valid_types_as_luastring[0], valid_types_as_luastring)];
			let fengariProxy = createproxy(L, lua_toproxy(L, 1), type);
			push(L, fengariProxy);
			return 1;
		};
	}

	let jsmt = {
		"__index": function(L) {
			let u = checkjs(L, 1);
			let k = tojs(L, 2);
			push(L, u[k]);
			return 1;
		},
		"__newindex": function(L) {
			let u = checkjs(L, 1);
			let k = tojs(L, 2);
			let v = tojs(L, 3);
			if (v === void 0)
				Reflect_deleteProperty(u, k);
			else
				u[k] = v;
			return 0;
		},
		"__tostring": function(L) {
			let u = checkjs(L, 1);
			let s = toString(u);
			lua_pushstring(L, to_luastring(s));
			return 1;
		},
		"__call": function(L) {
			let u = checkjs(L, 1);
			let nargs = lua_gettop(L)-1;
			let thisarg;
			let args = new Array(Math.max(0, nargs-1));
			if (nargs > 0) {
				thisarg = tojs(L, 2);
				if (nargs-- > 0) {
					for (let i = 0; i < nargs; i++) {
						args[i] = tojs(L, i+3);
					}
				}
			}
			push(L, apply(u, thisarg, args));
			return 1;
		},
		"__pairs": function(L) {
			let u = checkjs(L, 1);
			let f;
			let iter, state, first;
			if (typeof Symbol !== "function" || (f = u[Symbol.for("__pairs")]) === void 0) {
				/* By default, iterate over Object.keys */
				iter = function(last) {
					if (this.index >= this.keys.length)
						return;
					let key = this.keys[this.index++];
					return [key, this.object[key]];
				};
				state = {
					object: u,
					keys: Object.keys(u),
					index: 0,
				};
			} else {
				let r = apply(f, u, []);
				if (r === void 0)
					luaL_error(L, to_luastring("bad '__pairs' result (object with keys 'iter', 'state', 'first' expected)"));
				iter = r.iter;
				if (iter === void 0)
					luaL_error(L, to_luastring("bad '__pairs' result (object.iter is missing)"));
				state = r.state;
				first = r.first;
			}
			lua_pushcfunction(L, function() {
				let state = tojs(L, 1);
				let last = tojs(L, 2);
				let r = apply(iter, state, [last]);
				/* returning undefined indicates end of iteration */
				if (r === void 0)
					return 0;
				/* otherwise it should return an array of results */
				if (!Array.isArray(r))
					luaL_error(L, to_luastring("bad iterator result (Array or undefined expected)"));
				luaL_checkstack(L, r.length, null);
				for (let i=0; i<r.length; i++) {
					push(L, r[i]);
				}
				return r.length;
			});
			push(L, state);
			push(L, first);
			return 3;
		},
		"__len": function(L) {
			let u = checkjs(L, 1);
			let f;
			let r;
			if (typeof Symbol !== "function" || (f = u[Symbol.for("__len")]) === void 0) {
				/* by default use .length field */
				r = u.length;
			} else {
				r = apply(f, u, []);
			}
			push(L, r);
			return 1;
		}
	};

	const luaopen_js = function(L) {
		/* Add weak map to track objects seen */
		states.set(getmainthread(L), new WeakMap());

		lua_atnativeerror(L, atnativeerror);

		luaL_newlib(L, jslib);
		lua_pushliteral(L, FENGARI_INTEROP_VERSION);
		lua_setfield(L, -2, to_luastring("_VERSION"));
		lua_pushinteger(L, FENGARI_INTEROP_VERSION_NUM);
		lua_setfield(L, -2, to_luastring("_VERSION_NUM"));
		lua_pushliteral(L, FENGARI_INTEROP_RELEASE);
		lua_setfield(L, -2, to_luastring("_RELEASE"));

		luaL_newmetatable(L, js_tname);
		luaL_setfuncs(L, jsmt, 0);
		lua_pop(L, 1);

		pushjs(L, null);
		/* Store null object in registry under lightuserdata null */
		lua_pushvalue(L, -1);
		lua_rawsetp(L, LUA_REGISTRYINDEX, null);
		lua_setfield(L, -2, to_luastring("null"));

		push(L, global_env);
		lua_setfield(L, -2, to_luastring("global"));

		return 1;
	};

	var FENGARI_INTEROP_VERSION_1 = js.FENGARI_INTEROP_VERSION = FENGARI_INTEROP_VERSION;
	var FENGARI_INTEROP_VERSION_NUM_1 = js.FENGARI_INTEROP_VERSION_NUM = FENGARI_INTEROP_VERSION_NUM;
	var FENGARI_INTEROP_RELEASE_1 = js.FENGARI_INTEROP_RELEASE = FENGARI_INTEROP_RELEASE;
	var checkjs_1 = js.checkjs = checkjs;
	var testjs_1 = js.testjs = testjs;
	var pushjs_1 = js.pushjs = pushjs;
	var push_1 = js.push = push;
	var tojs_1 = js.tojs = tojs;
	var luaopen_js_1 = js.luaopen_js = luaopen_js;

	exports.FENGARI_INTEROP_RELEASE = FENGARI_INTEROP_RELEASE_1;
	exports.FENGARI_INTEROP_VERSION = FENGARI_INTEROP_VERSION_1;
	exports.FENGARI_INTEROP_VERSION_NUM = FENGARI_INTEROP_VERSION_NUM_1;
	exports.checkjs = checkjs_1;
	exports["default"] = js;
	exports.luaopen_js = luaopen_js_1;
	exports.push = push_1;
	exports.pushjs = pushjs_1;
	exports.testjs = testjs_1;
	exports.tojs = tojs_1;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
