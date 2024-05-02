const __vite__fileDeps=["./index-C5zDbQ-w.js","./index-D2iACFfx.js","./index-D-Tlm5BR.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import { p as process$1, r as require$$0$2, g as global, B as Buffer, a as getAugmentedNamespace, b as getDefaultExportFromCjs, c as commonjsGlobal, _ as __vitePreload } from "./index-D2iACFfx.js";
import { r as require$$1, e as eventsExports, U as Ug } from "./___vite-browser-external_commonjs-proxy-BiKT4qMq.js";
var chacha20poly1305 = {};
var chacha = {};
var binary = {};
var int = {};
(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  function imulShim(a3, b3) {
    var ah = a3 >>> 16 & 65535, al = a3 & 65535;
    var bh = b3 >>> 16 & 65535, bl = b3 & 65535;
    return al * bl + (ah * bl + al * bh << 16 >>> 0) | 0;
  }
  exports.mul = Math.imul || imulShim;
  function add(a3, b3) {
    return a3 + b3 | 0;
  }
  exports.add = add;
  function sub(a3, b3) {
    return a3 - b3 | 0;
  }
  exports.sub = sub;
  function rotl(x2, n2) {
    return x2 << n2 | x2 >>> 32 - n2;
  }
  exports.rotl = rotl;
  function rotr(x2, n2) {
    return x2 << 32 - n2 | x2 >>> n2;
  }
  exports.rotr = rotr;
  function isIntegerShim(n2) {
    return typeof n2 === "number" && isFinite(n2) && Math.floor(n2) === n2;
  }
  exports.isInteger = Number.isInteger || isIntegerShim;
  exports.MAX_SAFE_INTEGER = 9007199254740991;
  exports.isSafeInteger = function(n2) {
    return exports.isInteger(n2) && (n2 >= -exports.MAX_SAFE_INTEGER && n2 <= exports.MAX_SAFE_INTEGER);
  };
})(int);
Object.defineProperty(binary, "__esModule", { value: true });
var int_1 = int;
function readInt16BE(array, offset) {
  if (offset === void 0) {
    offset = 0;
  }
  return (array[offset + 0] << 8 | array[offset + 1]) << 16 >> 16;
}
binary.readInt16BE = readInt16BE;
function readUint16BE(array, offset) {
  if (offset === void 0) {
    offset = 0;
  }
  return (array[offset + 0] << 8 | array[offset + 1]) >>> 0;
}
binary.readUint16BE = readUint16BE;
function readInt16LE(array, offset) {
  if (offset === void 0) {
    offset = 0;
  }
  return (array[offset + 1] << 8 | array[offset]) << 16 >> 16;
}
binary.readInt16LE = readInt16LE;
function readUint16LE(array, offset) {
  if (offset === void 0) {
    offset = 0;
  }
  return (array[offset + 1] << 8 | array[offset]) >>> 0;
}
binary.readUint16LE = readUint16LE;
function writeUint16BE(value, out, offset) {
  if (out === void 0) {
    out = new Uint8Array(2);
  }
  if (offset === void 0) {
    offset = 0;
  }
  out[offset + 0] = value >>> 8;
  out[offset + 1] = value >>> 0;
  return out;
}
binary.writeUint16BE = writeUint16BE;
binary.writeInt16BE = writeUint16BE;
function writeUint16LE(value, out, offset) {
  if (out === void 0) {
    out = new Uint8Array(2);
  }
  if (offset === void 0) {
    offset = 0;
  }
  out[offset + 0] = value >>> 0;
  out[offset + 1] = value >>> 8;
  return out;
}
binary.writeUint16LE = writeUint16LE;
binary.writeInt16LE = writeUint16LE;
function readInt32BE(array, offset) {
  if (offset === void 0) {
    offset = 0;
  }
  return array[offset] << 24 | array[offset + 1] << 16 | array[offset + 2] << 8 | array[offset + 3];
}
binary.readInt32BE = readInt32BE;
function readUint32BE(array, offset) {
  if (offset === void 0) {
    offset = 0;
  }
  return (array[offset] << 24 | array[offset + 1] << 16 | array[offset + 2] << 8 | array[offset + 3]) >>> 0;
}
binary.readUint32BE = readUint32BE;
function readInt32LE(array, offset) {
  if (offset === void 0) {
    offset = 0;
  }
  return array[offset + 3] << 24 | array[offset + 2] << 16 | array[offset + 1] << 8 | array[offset];
}
binary.readInt32LE = readInt32LE;
function readUint32LE(array, offset) {
  if (offset === void 0) {
    offset = 0;
  }
  return (array[offset + 3] << 24 | array[offset + 2] << 16 | array[offset + 1] << 8 | array[offset]) >>> 0;
}
binary.readUint32LE = readUint32LE;
function writeUint32BE(value, out, offset) {
  if (out === void 0) {
    out = new Uint8Array(4);
  }
  if (offset === void 0) {
    offset = 0;
  }
  out[offset + 0] = value >>> 24;
  out[offset + 1] = value >>> 16;
  out[offset + 2] = value >>> 8;
  out[offset + 3] = value >>> 0;
  return out;
}
binary.writeUint32BE = writeUint32BE;
binary.writeInt32BE = writeUint32BE;
function writeUint32LE(value, out, offset) {
  if (out === void 0) {
    out = new Uint8Array(4);
  }
  if (offset === void 0) {
    offset = 0;
  }
  out[offset + 0] = value >>> 0;
  out[offset + 1] = value >>> 8;
  out[offset + 2] = value >>> 16;
  out[offset + 3] = value >>> 24;
  return out;
}
binary.writeUint32LE = writeUint32LE;
binary.writeInt32LE = writeUint32LE;
function readInt64BE(array, offset) {
  if (offset === void 0) {
    offset = 0;
  }
  var hi = readInt32BE(array, offset);
  var lo = readInt32BE(array, offset + 4);
  return hi * 4294967296 + lo - (lo >> 31) * 4294967296;
}
binary.readInt64BE = readInt64BE;
function readUint64BE(array, offset) {
  if (offset === void 0) {
    offset = 0;
  }
  var hi = readUint32BE(array, offset);
  var lo = readUint32BE(array, offset + 4);
  return hi * 4294967296 + lo;
}
binary.readUint64BE = readUint64BE;
function readInt64LE(array, offset) {
  if (offset === void 0) {
    offset = 0;
  }
  var lo = readInt32LE(array, offset);
  var hi = readInt32LE(array, offset + 4);
  return hi * 4294967296 + lo - (lo >> 31) * 4294967296;
}
binary.readInt64LE = readInt64LE;
function readUint64LE(array, offset) {
  if (offset === void 0) {
    offset = 0;
  }
  var lo = readUint32LE(array, offset);
  var hi = readUint32LE(array, offset + 4);
  return hi * 4294967296 + lo;
}
binary.readUint64LE = readUint64LE;
function writeUint64BE(value, out, offset) {
  if (out === void 0) {
    out = new Uint8Array(8);
  }
  if (offset === void 0) {
    offset = 0;
  }
  writeUint32BE(value / 4294967296 >>> 0, out, offset);
  writeUint32BE(value >>> 0, out, offset + 4);
  return out;
}
binary.writeUint64BE = writeUint64BE;
binary.writeInt64BE = writeUint64BE;
function writeUint64LE(value, out, offset) {
  if (out === void 0) {
    out = new Uint8Array(8);
  }
  if (offset === void 0) {
    offset = 0;
  }
  writeUint32LE(value >>> 0, out, offset);
  writeUint32LE(value / 4294967296 >>> 0, out, offset + 4);
  return out;
}
binary.writeUint64LE = writeUint64LE;
binary.writeInt64LE = writeUint64LE;
function readUintBE(bitLength, array, offset) {
  if (offset === void 0) {
    offset = 0;
  }
  if (bitLength % 8 !== 0) {
    throw new Error("readUintBE supports only bitLengths divisible by 8");
  }
  if (bitLength / 8 > array.length - offset) {
    throw new Error("readUintBE: array is too short for the given bitLength");
  }
  var result = 0;
  var mul = 1;
  for (var i2 = bitLength / 8 + offset - 1; i2 >= offset; i2--) {
    result += array[i2] * mul;
    mul *= 256;
  }
  return result;
}
binary.readUintBE = readUintBE;
function readUintLE(bitLength, array, offset) {
  if (offset === void 0) {
    offset = 0;
  }
  if (bitLength % 8 !== 0) {
    throw new Error("readUintLE supports only bitLengths divisible by 8");
  }
  if (bitLength / 8 > array.length - offset) {
    throw new Error("readUintLE: array is too short for the given bitLength");
  }
  var result = 0;
  var mul = 1;
  for (var i2 = offset; i2 < offset + bitLength / 8; i2++) {
    result += array[i2] * mul;
    mul *= 256;
  }
  return result;
}
binary.readUintLE = readUintLE;
function writeUintBE(bitLength, value, out, offset) {
  if (out === void 0) {
    out = new Uint8Array(bitLength / 8);
  }
  if (offset === void 0) {
    offset = 0;
  }
  if (bitLength % 8 !== 0) {
    throw new Error("writeUintBE supports only bitLengths divisible by 8");
  }
  if (!int_1.isSafeInteger(value)) {
    throw new Error("writeUintBE value must be an integer");
  }
  var div = 1;
  for (var i2 = bitLength / 8 + offset - 1; i2 >= offset; i2--) {
    out[i2] = value / div & 255;
    div *= 256;
  }
  return out;
}
binary.writeUintBE = writeUintBE;
function writeUintLE(bitLength, value, out, offset) {
  if (out === void 0) {
    out = new Uint8Array(bitLength / 8);
  }
  if (offset === void 0) {
    offset = 0;
  }
  if (bitLength % 8 !== 0) {
    throw new Error("writeUintLE supports only bitLengths divisible by 8");
  }
  if (!int_1.isSafeInteger(value)) {
    throw new Error("writeUintLE value must be an integer");
  }
  var div = 1;
  for (var i2 = offset; i2 < offset + bitLength / 8; i2++) {
    out[i2] = value / div & 255;
    div *= 256;
  }
  return out;
}
binary.writeUintLE = writeUintLE;
function readFloat32BE(array, offset) {
  if (offset === void 0) {
    offset = 0;
  }
  var view = new DataView(array.buffer, array.byteOffset, array.byteLength);
  return view.getFloat32(offset);
}
binary.readFloat32BE = readFloat32BE;
function readFloat32LE(array, offset) {
  if (offset === void 0) {
    offset = 0;
  }
  var view = new DataView(array.buffer, array.byteOffset, array.byteLength);
  return view.getFloat32(offset, true);
}
binary.readFloat32LE = readFloat32LE;
function readFloat64BE(array, offset) {
  if (offset === void 0) {
    offset = 0;
  }
  var view = new DataView(array.buffer, array.byteOffset, array.byteLength);
  return view.getFloat64(offset);
}
binary.readFloat64BE = readFloat64BE;
function readFloat64LE(array, offset) {
  if (offset === void 0) {
    offset = 0;
  }
  var view = new DataView(array.buffer, array.byteOffset, array.byteLength);
  return view.getFloat64(offset, true);
}
binary.readFloat64LE = readFloat64LE;
function writeFloat32BE(value, out, offset) {
  if (out === void 0) {
    out = new Uint8Array(4);
  }
  if (offset === void 0) {
    offset = 0;
  }
  var view = new DataView(out.buffer, out.byteOffset, out.byteLength);
  view.setFloat32(offset, value);
  return out;
}
binary.writeFloat32BE = writeFloat32BE;
function writeFloat32LE(value, out, offset) {
  if (out === void 0) {
    out = new Uint8Array(4);
  }
  if (offset === void 0) {
    offset = 0;
  }
  var view = new DataView(out.buffer, out.byteOffset, out.byteLength);
  view.setFloat32(offset, value, true);
  return out;
}
binary.writeFloat32LE = writeFloat32LE;
function writeFloat64BE(value, out, offset) {
  if (out === void 0) {
    out = new Uint8Array(8);
  }
  if (offset === void 0) {
    offset = 0;
  }
  var view = new DataView(out.buffer, out.byteOffset, out.byteLength);
  view.setFloat64(offset, value);
  return out;
}
binary.writeFloat64BE = writeFloat64BE;
function writeFloat64LE(value, out, offset) {
  if (out === void 0) {
    out = new Uint8Array(8);
  }
  if (offset === void 0) {
    offset = 0;
  }
  var view = new DataView(out.buffer, out.byteOffset, out.byteLength);
  view.setFloat64(offset, value, true);
  return out;
}
binary.writeFloat64LE = writeFloat64LE;
var wipe$1 = {};
Object.defineProperty(wipe$1, "__esModule", { value: true });
function wipe(array) {
  for (var i2 = 0; i2 < array.length; i2++) {
    array[i2] = 0;
  }
  return array;
}
wipe$1.wipe = wipe;
Object.defineProperty(chacha, "__esModule", { value: true });
var binary_1 = binary;
var wipe_1$3 = wipe$1;
var ROUNDS = 20;
function core(out, input, key) {
  var j0 = 1634760805;
  var j1 = 857760878;
  var j2 = 2036477234;
  var j3 = 1797285236;
  var j4 = key[3] << 24 | key[2] << 16 | key[1] << 8 | key[0];
  var j5 = key[7] << 24 | key[6] << 16 | key[5] << 8 | key[4];
  var j6 = key[11] << 24 | key[10] << 16 | key[9] << 8 | key[8];
  var j7 = key[15] << 24 | key[14] << 16 | key[13] << 8 | key[12];
  var j8 = key[19] << 24 | key[18] << 16 | key[17] << 8 | key[16];
  var j9 = key[23] << 24 | key[22] << 16 | key[21] << 8 | key[20];
  var j10 = key[27] << 24 | key[26] << 16 | key[25] << 8 | key[24];
  var j11 = key[31] << 24 | key[30] << 16 | key[29] << 8 | key[28];
  var j12 = input[3] << 24 | input[2] << 16 | input[1] << 8 | input[0];
  var j13 = input[7] << 24 | input[6] << 16 | input[5] << 8 | input[4];
  var j14 = input[11] << 24 | input[10] << 16 | input[9] << 8 | input[8];
  var j15 = input[15] << 24 | input[14] << 16 | input[13] << 8 | input[12];
  var x0 = j0;
  var x1 = j1;
  var x2 = j2;
  var x3 = j3;
  var x4 = j4;
  var x5 = j5;
  var x6 = j6;
  var x7 = j7;
  var x8 = j8;
  var x9 = j9;
  var x10 = j10;
  var x11 = j11;
  var x12 = j12;
  var x13 = j13;
  var x14 = j14;
  var x15 = j15;
  for (var i2 = 0; i2 < ROUNDS; i2 += 2) {
    x0 = x0 + x4 | 0;
    x12 ^= x0;
    x12 = x12 >>> 32 - 16 | x12 << 16;
    x8 = x8 + x12 | 0;
    x4 ^= x8;
    x4 = x4 >>> 32 - 12 | x4 << 12;
    x1 = x1 + x5 | 0;
    x13 ^= x1;
    x13 = x13 >>> 32 - 16 | x13 << 16;
    x9 = x9 + x13 | 0;
    x5 ^= x9;
    x5 = x5 >>> 32 - 12 | x5 << 12;
    x2 = x2 + x6 | 0;
    x14 ^= x2;
    x14 = x14 >>> 32 - 16 | x14 << 16;
    x10 = x10 + x14 | 0;
    x6 ^= x10;
    x6 = x6 >>> 32 - 12 | x6 << 12;
    x3 = x3 + x7 | 0;
    x15 ^= x3;
    x15 = x15 >>> 32 - 16 | x15 << 16;
    x11 = x11 + x15 | 0;
    x7 ^= x11;
    x7 = x7 >>> 32 - 12 | x7 << 12;
    x2 = x2 + x6 | 0;
    x14 ^= x2;
    x14 = x14 >>> 32 - 8 | x14 << 8;
    x10 = x10 + x14 | 0;
    x6 ^= x10;
    x6 = x6 >>> 32 - 7 | x6 << 7;
    x3 = x3 + x7 | 0;
    x15 ^= x3;
    x15 = x15 >>> 32 - 8 | x15 << 8;
    x11 = x11 + x15 | 0;
    x7 ^= x11;
    x7 = x7 >>> 32 - 7 | x7 << 7;
    x1 = x1 + x5 | 0;
    x13 ^= x1;
    x13 = x13 >>> 32 - 8 | x13 << 8;
    x9 = x9 + x13 | 0;
    x5 ^= x9;
    x5 = x5 >>> 32 - 7 | x5 << 7;
    x0 = x0 + x4 | 0;
    x12 ^= x0;
    x12 = x12 >>> 32 - 8 | x12 << 8;
    x8 = x8 + x12 | 0;
    x4 ^= x8;
    x4 = x4 >>> 32 - 7 | x4 << 7;
    x0 = x0 + x5 | 0;
    x15 ^= x0;
    x15 = x15 >>> 32 - 16 | x15 << 16;
    x10 = x10 + x15 | 0;
    x5 ^= x10;
    x5 = x5 >>> 32 - 12 | x5 << 12;
    x1 = x1 + x6 | 0;
    x12 ^= x1;
    x12 = x12 >>> 32 - 16 | x12 << 16;
    x11 = x11 + x12 | 0;
    x6 ^= x11;
    x6 = x6 >>> 32 - 12 | x6 << 12;
    x2 = x2 + x7 | 0;
    x13 ^= x2;
    x13 = x13 >>> 32 - 16 | x13 << 16;
    x8 = x8 + x13 | 0;
    x7 ^= x8;
    x7 = x7 >>> 32 - 12 | x7 << 12;
    x3 = x3 + x4 | 0;
    x14 ^= x3;
    x14 = x14 >>> 32 - 16 | x14 << 16;
    x9 = x9 + x14 | 0;
    x4 ^= x9;
    x4 = x4 >>> 32 - 12 | x4 << 12;
    x2 = x2 + x7 | 0;
    x13 ^= x2;
    x13 = x13 >>> 32 - 8 | x13 << 8;
    x8 = x8 + x13 | 0;
    x7 ^= x8;
    x7 = x7 >>> 32 - 7 | x7 << 7;
    x3 = x3 + x4 | 0;
    x14 ^= x3;
    x14 = x14 >>> 32 - 8 | x14 << 8;
    x9 = x9 + x14 | 0;
    x4 ^= x9;
    x4 = x4 >>> 32 - 7 | x4 << 7;
    x1 = x1 + x6 | 0;
    x12 ^= x1;
    x12 = x12 >>> 32 - 8 | x12 << 8;
    x11 = x11 + x12 | 0;
    x6 ^= x11;
    x6 = x6 >>> 32 - 7 | x6 << 7;
    x0 = x0 + x5 | 0;
    x15 ^= x0;
    x15 = x15 >>> 32 - 8 | x15 << 8;
    x10 = x10 + x15 | 0;
    x5 ^= x10;
    x5 = x5 >>> 32 - 7 | x5 << 7;
  }
  binary_1.writeUint32LE(x0 + j0 | 0, out, 0);
  binary_1.writeUint32LE(x1 + j1 | 0, out, 4);
  binary_1.writeUint32LE(x2 + j2 | 0, out, 8);
  binary_1.writeUint32LE(x3 + j3 | 0, out, 12);
  binary_1.writeUint32LE(x4 + j4 | 0, out, 16);
  binary_1.writeUint32LE(x5 + j5 | 0, out, 20);
  binary_1.writeUint32LE(x6 + j6 | 0, out, 24);
  binary_1.writeUint32LE(x7 + j7 | 0, out, 28);
  binary_1.writeUint32LE(x8 + j8 | 0, out, 32);
  binary_1.writeUint32LE(x9 + j9 | 0, out, 36);
  binary_1.writeUint32LE(x10 + j10 | 0, out, 40);
  binary_1.writeUint32LE(x11 + j11 | 0, out, 44);
  binary_1.writeUint32LE(x12 + j12 | 0, out, 48);
  binary_1.writeUint32LE(x13 + j13 | 0, out, 52);
  binary_1.writeUint32LE(x14 + j14 | 0, out, 56);
  binary_1.writeUint32LE(x15 + j15 | 0, out, 60);
}
function streamXOR(key, nonce, src2, dst, nonceInplaceCounterLength) {
  if (nonceInplaceCounterLength === void 0) {
    nonceInplaceCounterLength = 0;
  }
  if (key.length !== 32) {
    throw new Error("ChaCha: key size must be 32 bytes");
  }
  if (dst.length < src2.length) {
    throw new Error("ChaCha: destination is shorter than source");
  }
  var nc;
  var counterLength;
  if (nonceInplaceCounterLength === 0) {
    if (nonce.length !== 8 && nonce.length !== 12) {
      throw new Error("ChaCha nonce must be 8 or 12 bytes");
    }
    nc = new Uint8Array(16);
    counterLength = nc.length - nonce.length;
    nc.set(nonce, counterLength);
  } else {
    if (nonce.length !== 16) {
      throw new Error("ChaCha nonce with counter must be 16 bytes");
    }
    nc = nonce;
    counterLength = nonceInplaceCounterLength;
  }
  var block = new Uint8Array(64);
  for (var i2 = 0; i2 < src2.length; i2 += 64) {
    core(block, nc, key);
    for (var j2 = i2; j2 < i2 + 64 && j2 < src2.length; j2++) {
      dst[j2] = src2[j2] ^ block[j2 - i2];
    }
    incrementCounter(nc, 0, counterLength);
  }
  wipe_1$3.wipe(block);
  if (nonceInplaceCounterLength === 0) {
    wipe_1$3.wipe(nc);
  }
  return dst;
}
chacha.streamXOR = streamXOR;
function stream(key, nonce, dst, nonceInplaceCounterLength) {
  if (nonceInplaceCounterLength === void 0) {
    nonceInplaceCounterLength = 0;
  }
  wipe_1$3.wipe(dst);
  return streamXOR(key, nonce, dst, dst, nonceInplaceCounterLength);
}
chacha.stream = stream;
function incrementCounter(counter, pos, len) {
  var carry = 1;
  while (len--) {
    carry = carry + (counter[pos] & 255) | 0;
    counter[pos] = carry & 255;
    carry >>>= 8;
    pos++;
  }
  if (carry > 0) {
    throw new Error("ChaCha: counter overflow");
  }
}
var poly1305 = {};
var constantTime = {};
Object.defineProperty(constantTime, "__esModule", { value: true });
function select(subject, resultIfOne, resultIfZero) {
  return ~(subject - 1) & resultIfOne | subject - 1 & resultIfZero;
}
constantTime.select = select;
function lessOrEqual(a3, b3) {
  return (a3 | 0) - (b3 | 0) - 1 >>> 31 & 1;
}
constantTime.lessOrEqual = lessOrEqual;
function compare(a3, b3) {
  if (a3.length !== b3.length) {
    return 0;
  }
  var result = 0;
  for (var i2 = 0; i2 < a3.length; i2++) {
    result |= a3[i2] ^ b3[i2];
  }
  return 1 & result - 1 >>> 8;
}
constantTime.compare = compare;
function equal(a3, b3) {
  if (a3.length === 0 || b3.length === 0) {
    return false;
  }
  return compare(a3, b3) !== 0;
}
constantTime.equal = equal;
(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  var constant_time_12 = constantTime;
  var wipe_12 = wipe$1;
  exports.DIGEST_LENGTH = 16;
  var Poly1305 = (
    /** @class */
    function() {
      function Poly13052(key) {
        this.digestLength = exports.DIGEST_LENGTH;
        this._buffer = new Uint8Array(16);
        this._r = new Uint16Array(10);
        this._h = new Uint16Array(10);
        this._pad = new Uint16Array(8);
        this._leftover = 0;
        this._fin = 0;
        this._finished = false;
        var t0 = key[0] | key[1] << 8;
        this._r[0] = t0 & 8191;
        var t1 = key[2] | key[3] << 8;
        this._r[1] = (t0 >>> 13 | t1 << 3) & 8191;
        var t2 = key[4] | key[5] << 8;
        this._r[2] = (t1 >>> 10 | t2 << 6) & 7939;
        var t3 = key[6] | key[7] << 8;
        this._r[3] = (t2 >>> 7 | t3 << 9) & 8191;
        var t4 = key[8] | key[9] << 8;
        this._r[4] = (t3 >>> 4 | t4 << 12) & 255;
        this._r[5] = t4 >>> 1 & 8190;
        var t5 = key[10] | key[11] << 8;
        this._r[6] = (t4 >>> 14 | t5 << 2) & 8191;
        var t6 = key[12] | key[13] << 8;
        this._r[7] = (t5 >>> 11 | t6 << 5) & 8065;
        var t7 = key[14] | key[15] << 8;
        this._r[8] = (t6 >>> 8 | t7 << 8) & 8191;
        this._r[9] = t7 >>> 5 & 127;
        this._pad[0] = key[16] | key[17] << 8;
        this._pad[1] = key[18] | key[19] << 8;
        this._pad[2] = key[20] | key[21] << 8;
        this._pad[3] = key[22] | key[23] << 8;
        this._pad[4] = key[24] | key[25] << 8;
        this._pad[5] = key[26] | key[27] << 8;
        this._pad[6] = key[28] | key[29] << 8;
        this._pad[7] = key[30] | key[31] << 8;
      }
      Poly13052.prototype._blocks = function(m2, mpos, bytes) {
        var hibit = this._fin ? 0 : 1 << 11;
        var h0 = this._h[0], h1 = this._h[1], h22 = this._h[2], h32 = this._h[3], h4 = this._h[4], h5 = this._h[5], h6 = this._h[6], h7 = this._h[7], h8 = this._h[8], h9 = this._h[9];
        var r0 = this._r[0], r1 = this._r[1], r2 = this._r[2], r3 = this._r[3], r4 = this._r[4], r5 = this._r[5], r6 = this._r[6], r7 = this._r[7], r8 = this._r[8], r9 = this._r[9];
        while (bytes >= 16) {
          var t0 = m2[mpos + 0] | m2[mpos + 1] << 8;
          h0 += t0 & 8191;
          var t1 = m2[mpos + 2] | m2[mpos + 3] << 8;
          h1 += (t0 >>> 13 | t1 << 3) & 8191;
          var t2 = m2[mpos + 4] | m2[mpos + 5] << 8;
          h22 += (t1 >>> 10 | t2 << 6) & 8191;
          var t3 = m2[mpos + 6] | m2[mpos + 7] << 8;
          h32 += (t2 >>> 7 | t3 << 9) & 8191;
          var t4 = m2[mpos + 8] | m2[mpos + 9] << 8;
          h4 += (t3 >>> 4 | t4 << 12) & 8191;
          h5 += t4 >>> 1 & 8191;
          var t5 = m2[mpos + 10] | m2[mpos + 11] << 8;
          h6 += (t4 >>> 14 | t5 << 2) & 8191;
          var t6 = m2[mpos + 12] | m2[mpos + 13] << 8;
          h7 += (t5 >>> 11 | t6 << 5) & 8191;
          var t7 = m2[mpos + 14] | m2[mpos + 15] << 8;
          h8 += (t6 >>> 8 | t7 << 8) & 8191;
          h9 += t7 >>> 5 | hibit;
          var c2 = 0;
          var d0 = c2;
          d0 += h0 * r0;
          d0 += h1 * (5 * r9);
          d0 += h22 * (5 * r8);
          d0 += h32 * (5 * r7);
          d0 += h4 * (5 * r6);
          c2 = d0 >>> 13;
          d0 &= 8191;
          d0 += h5 * (5 * r5);
          d0 += h6 * (5 * r4);
          d0 += h7 * (5 * r3);
          d0 += h8 * (5 * r2);
          d0 += h9 * (5 * r1);
          c2 += d0 >>> 13;
          d0 &= 8191;
          var d1 = c2;
          d1 += h0 * r1;
          d1 += h1 * r0;
          d1 += h22 * (5 * r9);
          d1 += h32 * (5 * r8);
          d1 += h4 * (5 * r7);
          c2 = d1 >>> 13;
          d1 &= 8191;
          d1 += h5 * (5 * r6);
          d1 += h6 * (5 * r5);
          d1 += h7 * (5 * r4);
          d1 += h8 * (5 * r3);
          d1 += h9 * (5 * r2);
          c2 += d1 >>> 13;
          d1 &= 8191;
          var d2 = c2;
          d2 += h0 * r2;
          d2 += h1 * r1;
          d2 += h22 * r0;
          d2 += h32 * (5 * r9);
          d2 += h4 * (5 * r8);
          c2 = d2 >>> 13;
          d2 &= 8191;
          d2 += h5 * (5 * r7);
          d2 += h6 * (5 * r6);
          d2 += h7 * (5 * r5);
          d2 += h8 * (5 * r4);
          d2 += h9 * (5 * r3);
          c2 += d2 >>> 13;
          d2 &= 8191;
          var d3 = c2;
          d3 += h0 * r3;
          d3 += h1 * r2;
          d3 += h22 * r1;
          d3 += h32 * r0;
          d3 += h4 * (5 * r9);
          c2 = d3 >>> 13;
          d3 &= 8191;
          d3 += h5 * (5 * r8);
          d3 += h6 * (5 * r7);
          d3 += h7 * (5 * r6);
          d3 += h8 * (5 * r5);
          d3 += h9 * (5 * r4);
          c2 += d3 >>> 13;
          d3 &= 8191;
          var d4 = c2;
          d4 += h0 * r4;
          d4 += h1 * r3;
          d4 += h22 * r2;
          d4 += h32 * r1;
          d4 += h4 * r0;
          c2 = d4 >>> 13;
          d4 &= 8191;
          d4 += h5 * (5 * r9);
          d4 += h6 * (5 * r8);
          d4 += h7 * (5 * r7);
          d4 += h8 * (5 * r6);
          d4 += h9 * (5 * r5);
          c2 += d4 >>> 13;
          d4 &= 8191;
          var d5 = c2;
          d5 += h0 * r5;
          d5 += h1 * r4;
          d5 += h22 * r3;
          d5 += h32 * r2;
          d5 += h4 * r1;
          c2 = d5 >>> 13;
          d5 &= 8191;
          d5 += h5 * r0;
          d5 += h6 * (5 * r9);
          d5 += h7 * (5 * r8);
          d5 += h8 * (5 * r7);
          d5 += h9 * (5 * r6);
          c2 += d5 >>> 13;
          d5 &= 8191;
          var d6 = c2;
          d6 += h0 * r6;
          d6 += h1 * r5;
          d6 += h22 * r4;
          d6 += h32 * r3;
          d6 += h4 * r2;
          c2 = d6 >>> 13;
          d6 &= 8191;
          d6 += h5 * r1;
          d6 += h6 * r0;
          d6 += h7 * (5 * r9);
          d6 += h8 * (5 * r8);
          d6 += h9 * (5 * r7);
          c2 += d6 >>> 13;
          d6 &= 8191;
          var d7 = c2;
          d7 += h0 * r7;
          d7 += h1 * r6;
          d7 += h22 * r5;
          d7 += h32 * r4;
          d7 += h4 * r3;
          c2 = d7 >>> 13;
          d7 &= 8191;
          d7 += h5 * r2;
          d7 += h6 * r1;
          d7 += h7 * r0;
          d7 += h8 * (5 * r9);
          d7 += h9 * (5 * r8);
          c2 += d7 >>> 13;
          d7 &= 8191;
          var d8 = c2;
          d8 += h0 * r8;
          d8 += h1 * r7;
          d8 += h22 * r6;
          d8 += h32 * r5;
          d8 += h4 * r4;
          c2 = d8 >>> 13;
          d8 &= 8191;
          d8 += h5 * r3;
          d8 += h6 * r2;
          d8 += h7 * r1;
          d8 += h8 * r0;
          d8 += h9 * (5 * r9);
          c2 += d8 >>> 13;
          d8 &= 8191;
          var d9 = c2;
          d9 += h0 * r9;
          d9 += h1 * r8;
          d9 += h22 * r7;
          d9 += h32 * r6;
          d9 += h4 * r5;
          c2 = d9 >>> 13;
          d9 &= 8191;
          d9 += h5 * r4;
          d9 += h6 * r3;
          d9 += h7 * r2;
          d9 += h8 * r1;
          d9 += h9 * r0;
          c2 += d9 >>> 13;
          d9 &= 8191;
          c2 = (c2 << 2) + c2 | 0;
          c2 = c2 + d0 | 0;
          d0 = c2 & 8191;
          c2 = c2 >>> 13;
          d1 += c2;
          h0 = d0;
          h1 = d1;
          h22 = d2;
          h32 = d3;
          h4 = d4;
          h5 = d5;
          h6 = d6;
          h7 = d7;
          h8 = d8;
          h9 = d9;
          mpos += 16;
          bytes -= 16;
        }
        this._h[0] = h0;
        this._h[1] = h1;
        this._h[2] = h22;
        this._h[3] = h32;
        this._h[4] = h4;
        this._h[5] = h5;
        this._h[6] = h6;
        this._h[7] = h7;
        this._h[8] = h8;
        this._h[9] = h9;
      };
      Poly13052.prototype.finish = function(mac, macpos) {
        if (macpos === void 0) {
          macpos = 0;
        }
        var g3 = new Uint16Array(10);
        var c2;
        var mask;
        var f3;
        var i2;
        if (this._leftover) {
          i2 = this._leftover;
          this._buffer[i2++] = 1;
          for (; i2 < 16; i2++) {
            this._buffer[i2] = 0;
          }
          this._fin = 1;
          this._blocks(this._buffer, 0, 16);
        }
        c2 = this._h[1] >>> 13;
        this._h[1] &= 8191;
        for (i2 = 2; i2 < 10; i2++) {
          this._h[i2] += c2;
          c2 = this._h[i2] >>> 13;
          this._h[i2] &= 8191;
        }
        this._h[0] += c2 * 5;
        c2 = this._h[0] >>> 13;
        this._h[0] &= 8191;
        this._h[1] += c2;
        c2 = this._h[1] >>> 13;
        this._h[1] &= 8191;
        this._h[2] += c2;
        g3[0] = this._h[0] + 5;
        c2 = g3[0] >>> 13;
        g3[0] &= 8191;
        for (i2 = 1; i2 < 10; i2++) {
          g3[i2] = this._h[i2] + c2;
          c2 = g3[i2] >>> 13;
          g3[i2] &= 8191;
        }
        g3[9] -= 1 << 13;
        mask = (c2 ^ 1) - 1;
        for (i2 = 0; i2 < 10; i2++) {
          g3[i2] &= mask;
        }
        mask = ~mask;
        for (i2 = 0; i2 < 10; i2++) {
          this._h[i2] = this._h[i2] & mask | g3[i2];
        }
        this._h[0] = (this._h[0] | this._h[1] << 13) & 65535;
        this._h[1] = (this._h[1] >>> 3 | this._h[2] << 10) & 65535;
        this._h[2] = (this._h[2] >>> 6 | this._h[3] << 7) & 65535;
        this._h[3] = (this._h[3] >>> 9 | this._h[4] << 4) & 65535;
        this._h[4] = (this._h[4] >>> 12 | this._h[5] << 1 | this._h[6] << 14) & 65535;
        this._h[5] = (this._h[6] >>> 2 | this._h[7] << 11) & 65535;
        this._h[6] = (this._h[7] >>> 5 | this._h[8] << 8) & 65535;
        this._h[7] = (this._h[8] >>> 8 | this._h[9] << 5) & 65535;
        f3 = this._h[0] + this._pad[0];
        this._h[0] = f3 & 65535;
        for (i2 = 1; i2 < 8; i2++) {
          f3 = (this._h[i2] + this._pad[i2] | 0) + (f3 >>> 16) | 0;
          this._h[i2] = f3 & 65535;
        }
        mac[macpos + 0] = this._h[0] >>> 0;
        mac[macpos + 1] = this._h[0] >>> 8;
        mac[macpos + 2] = this._h[1] >>> 0;
        mac[macpos + 3] = this._h[1] >>> 8;
        mac[macpos + 4] = this._h[2] >>> 0;
        mac[macpos + 5] = this._h[2] >>> 8;
        mac[macpos + 6] = this._h[3] >>> 0;
        mac[macpos + 7] = this._h[3] >>> 8;
        mac[macpos + 8] = this._h[4] >>> 0;
        mac[macpos + 9] = this._h[4] >>> 8;
        mac[macpos + 10] = this._h[5] >>> 0;
        mac[macpos + 11] = this._h[5] >>> 8;
        mac[macpos + 12] = this._h[6] >>> 0;
        mac[macpos + 13] = this._h[6] >>> 8;
        mac[macpos + 14] = this._h[7] >>> 0;
        mac[macpos + 15] = this._h[7] >>> 8;
        this._finished = true;
        return this;
      };
      Poly13052.prototype.update = function(m2) {
        var mpos = 0;
        var bytes = m2.length;
        var want;
        if (this._leftover) {
          want = 16 - this._leftover;
          if (want > bytes) {
            want = bytes;
          }
          for (var i2 = 0; i2 < want; i2++) {
            this._buffer[this._leftover + i2] = m2[mpos + i2];
          }
          bytes -= want;
          mpos += want;
          this._leftover += want;
          if (this._leftover < 16) {
            return this;
          }
          this._blocks(this._buffer, 0, 16);
          this._leftover = 0;
        }
        if (bytes >= 16) {
          want = bytes - bytes % 16;
          this._blocks(m2, mpos, want);
          mpos += want;
          bytes -= want;
        }
        if (bytes) {
          for (var i2 = 0; i2 < bytes; i2++) {
            this._buffer[this._leftover + i2] = m2[mpos + i2];
          }
          this._leftover += bytes;
        }
        return this;
      };
      Poly13052.prototype.digest = function() {
        if (this._finished) {
          throw new Error("Poly1305 was finished");
        }
        var mac = new Uint8Array(16);
        this.finish(mac);
        return mac;
      };
      Poly13052.prototype.clean = function() {
        wipe_12.wipe(this._buffer);
        wipe_12.wipe(this._r);
        wipe_12.wipe(this._h);
        wipe_12.wipe(this._pad);
        this._leftover = 0;
        this._fin = 0;
        this._finished = true;
        return this;
      };
      return Poly13052;
    }()
  );
  exports.Poly1305 = Poly1305;
  function oneTimeAuth(key, data) {
    var h4 = new Poly1305(key);
    h4.update(data);
    var digest = h4.digest();
    h4.clean();
    return digest;
  }
  exports.oneTimeAuth = oneTimeAuth;
  function equal2(a3, b3) {
    if (a3.length !== exports.DIGEST_LENGTH || b3.length !== exports.DIGEST_LENGTH) {
      return false;
    }
    return constant_time_12.equal(a3, b3);
  }
  exports.equal = equal2;
})(poly1305);
(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  var chacha_1 = chacha;
  var poly1305_1 = poly1305;
  var wipe_12 = wipe$1;
  var binary_12 = binary;
  var constant_time_12 = constantTime;
  exports.KEY_LENGTH = 32;
  exports.NONCE_LENGTH = 12;
  exports.TAG_LENGTH = 16;
  var ZEROS = new Uint8Array(16);
  var ChaCha20Poly1305 = (
    /** @class */
    function() {
      function ChaCha20Poly13052(key) {
        this.nonceLength = exports.NONCE_LENGTH;
        this.tagLength = exports.TAG_LENGTH;
        if (key.length !== exports.KEY_LENGTH) {
          throw new Error("ChaCha20Poly1305 needs 32-byte key");
        }
        this._key = new Uint8Array(key);
      }
      ChaCha20Poly13052.prototype.seal = function(nonce, plaintext, associatedData, dst) {
        if (nonce.length > 16) {
          throw new Error("ChaCha20Poly1305: incorrect nonce length");
        }
        var counter = new Uint8Array(16);
        counter.set(nonce, counter.length - nonce.length);
        var authKey = new Uint8Array(32);
        chacha_1.stream(this._key, counter, authKey, 4);
        var resultLength = plaintext.length + this.tagLength;
        var result;
        if (dst) {
          if (dst.length !== resultLength) {
            throw new Error("ChaCha20Poly1305: incorrect destination length");
          }
          result = dst;
        } else {
          result = new Uint8Array(resultLength);
        }
        chacha_1.streamXOR(this._key, counter, plaintext, result, 4);
        this._authenticate(result.subarray(result.length - this.tagLength, result.length), authKey, result.subarray(0, result.length - this.tagLength), associatedData);
        wipe_12.wipe(counter);
        return result;
      };
      ChaCha20Poly13052.prototype.open = function(nonce, sealed, associatedData, dst) {
        if (nonce.length > 16) {
          throw new Error("ChaCha20Poly1305: incorrect nonce length");
        }
        if (sealed.length < this.tagLength) {
          return null;
        }
        var counter = new Uint8Array(16);
        counter.set(nonce, counter.length - nonce.length);
        var authKey = new Uint8Array(32);
        chacha_1.stream(this._key, counter, authKey, 4);
        var calculatedTag = new Uint8Array(this.tagLength);
        this._authenticate(calculatedTag, authKey, sealed.subarray(0, sealed.length - this.tagLength), associatedData);
        if (!constant_time_12.equal(calculatedTag, sealed.subarray(sealed.length - this.tagLength, sealed.length))) {
          return null;
        }
        var resultLength = sealed.length - this.tagLength;
        var result;
        if (dst) {
          if (dst.length !== resultLength) {
            throw new Error("ChaCha20Poly1305: incorrect destination length");
          }
          result = dst;
        } else {
          result = new Uint8Array(resultLength);
        }
        chacha_1.streamXOR(this._key, counter, sealed.subarray(0, sealed.length - this.tagLength), result, 4);
        wipe_12.wipe(counter);
        return result;
      };
      ChaCha20Poly13052.prototype.clean = function() {
        wipe_12.wipe(this._key);
        return this;
      };
      ChaCha20Poly13052.prototype._authenticate = function(tagOut, authKey, ciphertext, associatedData) {
        var h4 = new poly1305_1.Poly1305(authKey);
        if (associatedData) {
          h4.update(associatedData);
          if (associatedData.length % 16 > 0) {
            h4.update(ZEROS.subarray(associatedData.length % 16));
          }
        }
        h4.update(ciphertext);
        if (ciphertext.length % 16 > 0) {
          h4.update(ZEROS.subarray(ciphertext.length % 16));
        }
        var length = new Uint8Array(8);
        if (associatedData) {
          binary_12.writeUint64LE(associatedData.length, length);
        }
        h4.update(length);
        binary_12.writeUint64LE(ciphertext.length, length);
        h4.update(length);
        var tag = h4.digest();
        for (var i2 = 0; i2 < tag.length; i2++) {
          tagOut[i2] = tag[i2];
        }
        h4.clean();
        wipe_12.wipe(tag);
        wipe_12.wipe(length);
      };
      return ChaCha20Poly13052;
    }()
  );
  exports.ChaCha20Poly1305 = ChaCha20Poly1305;
})(chacha20poly1305);
var hkdf = {};
var hmac$1 = {};
var hash = {};
Object.defineProperty(hash, "__esModule", { value: true });
function isSerializableHash(h4) {
  return typeof h4.saveState !== "undefined" && typeof h4.restoreState !== "undefined" && typeof h4.cleanSavedState !== "undefined";
}
hash.isSerializableHash = isSerializableHash;
Object.defineProperty(hmac$1, "__esModule", { value: true });
var hash_1 = hash;
var constant_time_1 = constantTime;
var wipe_1$2 = wipe$1;
var HMAC = (
  /** @class */
  function() {
    function HMAC2(hash2, key) {
      this._finished = false;
      this._inner = new hash2();
      this._outer = new hash2();
      this.blockSize = this._outer.blockSize;
      this.digestLength = this._outer.digestLength;
      var pad = new Uint8Array(this.blockSize);
      if (key.length > this.blockSize) {
        this._inner.update(key).finish(pad).clean();
      } else {
        pad.set(key);
      }
      for (var i2 = 0; i2 < pad.length; i2++) {
        pad[i2] ^= 54;
      }
      this._inner.update(pad);
      for (var i2 = 0; i2 < pad.length; i2++) {
        pad[i2] ^= 54 ^ 92;
      }
      this._outer.update(pad);
      if (hash_1.isSerializableHash(this._inner) && hash_1.isSerializableHash(this._outer)) {
        this._innerKeyedState = this._inner.saveState();
        this._outerKeyedState = this._outer.saveState();
      }
      wipe_1$2.wipe(pad);
    }
    HMAC2.prototype.reset = function() {
      if (!hash_1.isSerializableHash(this._inner) || !hash_1.isSerializableHash(this._outer)) {
        throw new Error("hmac: can't reset() because hash doesn't implement restoreState()");
      }
      this._inner.restoreState(this._innerKeyedState);
      this._outer.restoreState(this._outerKeyedState);
      this._finished = false;
      return this;
    };
    HMAC2.prototype.clean = function() {
      if (hash_1.isSerializableHash(this._inner)) {
        this._inner.cleanSavedState(this._innerKeyedState);
      }
      if (hash_1.isSerializableHash(this._outer)) {
        this._outer.cleanSavedState(this._outerKeyedState);
      }
      this._inner.clean();
      this._outer.clean();
    };
    HMAC2.prototype.update = function(data) {
      this._inner.update(data);
      return this;
    };
    HMAC2.prototype.finish = function(out) {
      if (this._finished) {
        this._outer.finish(out);
        return this;
      }
      this._inner.finish(out);
      this._outer.update(out.subarray(0, this.digestLength)).finish(out);
      this._finished = true;
      return this;
    };
    HMAC2.prototype.digest = function() {
      var out = new Uint8Array(this.digestLength);
      this.finish(out);
      return out;
    };
    HMAC2.prototype.saveState = function() {
      if (!hash_1.isSerializableHash(this._inner)) {
        throw new Error("hmac: can't saveState() because hash doesn't implement it");
      }
      return this._inner.saveState();
    };
    HMAC2.prototype.restoreState = function(savedState) {
      if (!hash_1.isSerializableHash(this._inner) || !hash_1.isSerializableHash(this._outer)) {
        throw new Error("hmac: can't restoreState() because hash doesn't implement it");
      }
      this._inner.restoreState(savedState);
      this._outer.restoreState(this._outerKeyedState);
      this._finished = false;
      return this;
    };
    HMAC2.prototype.cleanSavedState = function(savedState) {
      if (!hash_1.isSerializableHash(this._inner)) {
        throw new Error("hmac: can't cleanSavedState() because hash doesn't implement it");
      }
      this._inner.cleanSavedState(savedState);
    };
    return HMAC2;
  }()
);
hmac$1.HMAC = HMAC;
function hmac(hash2, key, data) {
  var h4 = new HMAC(hash2, key);
  h4.update(data);
  var digest = h4.digest();
  h4.clean();
  return digest;
}
hmac$1.hmac = hmac;
hmac$1.equal = constant_time_1.equal;
Object.defineProperty(hkdf, "__esModule", { value: true });
var hmac_1 = hmac$1;
var wipe_1$1 = wipe$1;
var HKDF = (
  /** @class */
  function() {
    function HKDF2(hash2, key, salt, info) {
      if (salt === void 0) {
        salt = new Uint8Array(0);
      }
      this._counter = new Uint8Array(1);
      this._hash = hash2;
      this._info = info;
      var okm = hmac_1.hmac(this._hash, salt, key);
      this._hmac = new hmac_1.HMAC(hash2, okm);
      this._buffer = new Uint8Array(this._hmac.digestLength);
      this._bufpos = this._buffer.length;
    }
    HKDF2.prototype._fillBuffer = function() {
      this._counter[0]++;
      var ctr = this._counter[0];
      if (ctr === 0) {
        throw new Error("hkdf: cannot expand more");
      }
      this._hmac.reset();
      if (ctr > 1) {
        this._hmac.update(this._buffer);
      }
      if (this._info) {
        this._hmac.update(this._info);
      }
      this._hmac.update(this._counter);
      this._hmac.finish(this._buffer);
      this._bufpos = 0;
    };
    HKDF2.prototype.expand = function(length) {
      var out = new Uint8Array(length);
      for (var i2 = 0; i2 < out.length; i2++) {
        if (this._bufpos === this._buffer.length) {
          this._fillBuffer();
        }
        out[i2] = this._buffer[this._bufpos++];
      }
      return out;
    };
    HKDF2.prototype.clean = function() {
      this._hmac.clean();
      wipe_1$1.wipe(this._buffer);
      wipe_1$1.wipe(this._counter);
      this._bufpos = 0;
    };
    return HKDF2;
  }()
);
var HKDF_1 = hkdf.HKDF = HKDF;
var random = {};
var system = {};
var browser$2 = {};
Object.defineProperty(browser$2, "__esModule", { value: true });
browser$2.BrowserRandomSource = void 0;
const QUOTA = 65536;
class BrowserRandomSource {
  constructor() {
    this.isAvailable = false;
    this.isInstantiated = false;
    const browserCrypto = typeof self !== "undefined" ? self.crypto || self.msCrypto : null;
    if (browserCrypto && browserCrypto.getRandomValues !== void 0) {
      this._crypto = browserCrypto;
      this.isAvailable = true;
      this.isInstantiated = true;
    }
  }
  randomBytes(length) {
    if (!this.isAvailable || !this._crypto) {
      throw new Error("Browser random byte generator is not available.");
    }
    const out = new Uint8Array(length);
    for (let i2 = 0; i2 < out.length; i2 += QUOTA) {
      this._crypto.getRandomValues(out.subarray(i2, i2 + Math.min(out.length - i2, QUOTA)));
    }
    return out;
  }
}
browser$2.BrowserRandomSource = BrowserRandomSource;
function commonjsRequire(path) {
  throw new Error('Could not dynamically require "' + path + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var node = {};
Object.defineProperty(node, "__esModule", { value: true });
node.NodeRandomSource = void 0;
const wipe_1 = wipe$1;
class NodeRandomSource {
  constructor() {
    this.isAvailable = false;
    this.isInstantiated = false;
    if (typeof commonjsRequire !== "undefined") {
      const nodeCrypto = require$$1;
      if (nodeCrypto && nodeCrypto.randomBytes) {
        this._crypto = nodeCrypto;
        this.isAvailable = true;
        this.isInstantiated = true;
      }
    }
  }
  randomBytes(length) {
    if (!this.isAvailable || !this._crypto) {
      throw new Error("Node.js random byte generator is not available.");
    }
    let buffer = this._crypto.randomBytes(length);
    if (buffer.length !== length) {
      throw new Error("NodeRandomSource: got fewer bytes than requested");
    }
    const out = new Uint8Array(length);
    for (let i2 = 0; i2 < out.length; i2++) {
      out[i2] = buffer[i2];
    }
    (0, wipe_1.wipe)(buffer);
    return out;
  }
}
node.NodeRandomSource = NodeRandomSource;
Object.defineProperty(system, "__esModule", { value: true });
system.SystemRandomSource = void 0;
const browser_1 = browser$2;
const node_1 = node;
class SystemRandomSource {
  constructor() {
    this.isAvailable = false;
    this.name = "";
    this._source = new browser_1.BrowserRandomSource();
    if (this._source.isAvailable) {
      this.isAvailable = true;
      this.name = "Browser";
      return;
    }
    this._source = new node_1.NodeRandomSource();
    if (this._source.isAvailable) {
      this.isAvailable = true;
      this.name = "Node";
      return;
    }
  }
  randomBytes(length) {
    if (!this.isAvailable) {
      throw new Error("System random byte generator is not available.");
    }
    return this._source.randomBytes(length);
  }
}
system.SystemRandomSource = SystemRandomSource;
(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.randomStringForEntropy = exports.randomString = exports.randomUint32 = exports.randomBytes = exports.defaultRandomSource = void 0;
  const system_1 = system;
  const binary_12 = binary;
  const wipe_12 = wipe$1;
  exports.defaultRandomSource = new system_1.SystemRandomSource();
  function randomBytes(length, prng = exports.defaultRandomSource) {
    return prng.randomBytes(length);
  }
  exports.randomBytes = randomBytes;
  function randomUint32(prng = exports.defaultRandomSource) {
    const buf = randomBytes(4, prng);
    const result = (0, binary_12.readUint32LE)(buf);
    (0, wipe_12.wipe)(buf);
    return result;
  }
  exports.randomUint32 = randomUint32;
  const ALPHANUMERIC = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  function randomString(length, charset = ALPHANUMERIC, prng = exports.defaultRandomSource) {
    if (charset.length < 2) {
      throw new Error("randomString charset is too short");
    }
    if (charset.length > 256) {
      throw new Error("randomString charset is too long");
    }
    let out = "";
    const charsLen = charset.length;
    const maxByte = 256 - 256 % charsLen;
    while (length > 0) {
      const buf = randomBytes(Math.ceil(length * 256 / maxByte), prng);
      for (let i2 = 0; i2 < buf.length && length > 0; i2++) {
        const randomByte = buf[i2];
        if (randomByte < maxByte) {
          out += charset.charAt(randomByte % charsLen);
          length--;
        }
      }
      (0, wipe_12.wipe)(buf);
    }
    return out;
  }
  exports.randomString = randomString;
  function randomStringForEntropy(bits, charset = ALPHANUMERIC, prng = exports.defaultRandomSource) {
    const length = Math.ceil(bits / (Math.log(charset.length) / Math.LN2));
    return randomString(length, charset, prng);
  }
  exports.randomStringForEntropy = randomStringForEntropy;
})(random);
var sha256 = {};
(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  var binary_12 = binary;
  var wipe_12 = wipe$1;
  exports.DIGEST_LENGTH = 32;
  exports.BLOCK_SIZE = 64;
  var SHA256 = (
    /** @class */
    function() {
      function SHA2562() {
        this.digestLength = exports.DIGEST_LENGTH;
        this.blockSize = exports.BLOCK_SIZE;
        this._state = new Int32Array(8);
        this._temp = new Int32Array(64);
        this._buffer = new Uint8Array(128);
        this._bufferLength = 0;
        this._bytesHashed = 0;
        this._finished = false;
        this.reset();
      }
      SHA2562.prototype._initState = function() {
        this._state[0] = 1779033703;
        this._state[1] = 3144134277;
        this._state[2] = 1013904242;
        this._state[3] = 2773480762;
        this._state[4] = 1359893119;
        this._state[5] = 2600822924;
        this._state[6] = 528734635;
        this._state[7] = 1541459225;
      };
      SHA2562.prototype.reset = function() {
        this._initState();
        this._bufferLength = 0;
        this._bytesHashed = 0;
        this._finished = false;
        return this;
      };
      SHA2562.prototype.clean = function() {
        wipe_12.wipe(this._buffer);
        wipe_12.wipe(this._temp);
        this.reset();
      };
      SHA2562.prototype.update = function(data, dataLength) {
        if (dataLength === void 0) {
          dataLength = data.length;
        }
        if (this._finished) {
          throw new Error("SHA256: can't update because hash was finished.");
        }
        var dataPos = 0;
        this._bytesHashed += dataLength;
        if (this._bufferLength > 0) {
          while (this._bufferLength < this.blockSize && dataLength > 0) {
            this._buffer[this._bufferLength++] = data[dataPos++];
            dataLength--;
          }
          if (this._bufferLength === this.blockSize) {
            hashBlocks(this._temp, this._state, this._buffer, 0, this.blockSize);
            this._bufferLength = 0;
          }
        }
        if (dataLength >= this.blockSize) {
          dataPos = hashBlocks(this._temp, this._state, data, dataPos, dataLength);
          dataLength %= this.blockSize;
        }
        while (dataLength > 0) {
          this._buffer[this._bufferLength++] = data[dataPos++];
          dataLength--;
        }
        return this;
      };
      SHA2562.prototype.finish = function(out) {
        if (!this._finished) {
          var bytesHashed = this._bytesHashed;
          var left = this._bufferLength;
          var bitLenHi = bytesHashed / 536870912 | 0;
          var bitLenLo = bytesHashed << 3;
          var padLength = bytesHashed % 64 < 56 ? 64 : 128;
          this._buffer[left] = 128;
          for (var i2 = left + 1; i2 < padLength - 8; i2++) {
            this._buffer[i2] = 0;
          }
          binary_12.writeUint32BE(bitLenHi, this._buffer, padLength - 8);
          binary_12.writeUint32BE(bitLenLo, this._buffer, padLength - 4);
          hashBlocks(this._temp, this._state, this._buffer, 0, padLength);
          this._finished = true;
        }
        for (var i2 = 0; i2 < this.digestLength / 4; i2++) {
          binary_12.writeUint32BE(this._state[i2], out, i2 * 4);
        }
        return this;
      };
      SHA2562.prototype.digest = function() {
        var out = new Uint8Array(this.digestLength);
        this.finish(out);
        return out;
      };
      SHA2562.prototype.saveState = function() {
        if (this._finished) {
          throw new Error("SHA256: cannot save finished state");
        }
        return {
          state: new Int32Array(this._state),
          buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
          bufferLength: this._bufferLength,
          bytesHashed: this._bytesHashed
        };
      };
      SHA2562.prototype.restoreState = function(savedState) {
        this._state.set(savedState.state);
        this._bufferLength = savedState.bufferLength;
        if (savedState.buffer) {
          this._buffer.set(savedState.buffer);
        }
        this._bytesHashed = savedState.bytesHashed;
        this._finished = false;
        return this;
      };
      SHA2562.prototype.cleanSavedState = function(savedState) {
        wipe_12.wipe(savedState.state);
        if (savedState.buffer) {
          wipe_12.wipe(savedState.buffer);
        }
        savedState.bufferLength = 0;
        savedState.bytesHashed = 0;
      };
      return SHA2562;
    }()
  );
  exports.SHA256 = SHA256;
  var K2 = new Int32Array([
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
    3329325298
  ]);
  function hashBlocks(w3, v3, p3, pos, len) {
    while (len >= 64) {
      var a3 = v3[0];
      var b3 = v3[1];
      var c2 = v3[2];
      var d2 = v3[3];
      var e = v3[4];
      var f3 = v3[5];
      var g3 = v3[6];
      var h4 = v3[7];
      for (var i2 = 0; i2 < 16; i2++) {
        var j2 = pos + i2 * 4;
        w3[i2] = binary_12.readUint32BE(p3, j2);
      }
      for (var i2 = 16; i2 < 64; i2++) {
        var u3 = w3[i2 - 2];
        var t1 = (u3 >>> 17 | u3 << 32 - 17) ^ (u3 >>> 19 | u3 << 32 - 19) ^ u3 >>> 10;
        u3 = w3[i2 - 15];
        var t2 = (u3 >>> 7 | u3 << 32 - 7) ^ (u3 >>> 18 | u3 << 32 - 18) ^ u3 >>> 3;
        w3[i2] = (t1 + w3[i2 - 7] | 0) + (t2 + w3[i2 - 16] | 0);
      }
      for (var i2 = 0; i2 < 64; i2++) {
        var t1 = (((e >>> 6 | e << 32 - 6) ^ (e >>> 11 | e << 32 - 11) ^ (e >>> 25 | e << 32 - 25)) + (e & f3 ^ ~e & g3) | 0) + (h4 + (K2[i2] + w3[i2] | 0) | 0) | 0;
        var t2 = ((a3 >>> 2 | a3 << 32 - 2) ^ (a3 >>> 13 | a3 << 32 - 13) ^ (a3 >>> 22 | a3 << 32 - 22)) + (a3 & b3 ^ a3 & c2 ^ b3 & c2) | 0;
        h4 = g3;
        g3 = f3;
        f3 = e;
        e = d2 + t1 | 0;
        d2 = c2;
        c2 = b3;
        b3 = a3;
        a3 = t1 + t2 | 0;
      }
      v3[0] += a3;
      v3[1] += b3;
      v3[2] += c2;
      v3[3] += d2;
      v3[4] += e;
      v3[5] += f3;
      v3[6] += g3;
      v3[7] += h4;
      pos += 64;
      len -= 64;
    }
    return pos;
  }
  function hash2(data) {
    var h4 = new SHA256();
    h4.update(data);
    var digest = h4.digest();
    h4.clean();
    return digest;
  }
  exports.hash = hash2;
})(sha256);
var x25519 = {};
(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.sharedKey = exports.generateKeyPair = exports.generateKeyPairFromSeed = exports.scalarMultBase = exports.scalarMult = exports.SHARED_KEY_LENGTH = exports.SECRET_KEY_LENGTH = exports.PUBLIC_KEY_LENGTH = void 0;
  const random_1 = random;
  const wipe_12 = wipe$1;
  exports.PUBLIC_KEY_LENGTH = 32;
  exports.SECRET_KEY_LENGTH = 32;
  exports.SHARED_KEY_LENGTH = 32;
  function gf(init) {
    const r = new Float64Array(16);
    if (init) {
      for (let i2 = 0; i2 < init.length; i2++) {
        r[i2] = init[i2];
      }
    }
    return r;
  }
  const _9 = new Uint8Array(32);
  _9[0] = 9;
  const _121665 = gf([56129, 1]);
  function car25519(o) {
    let c2 = 1;
    for (let i2 = 0; i2 < 16; i2++) {
      let v3 = o[i2] + c2 + 65535;
      c2 = Math.floor(v3 / 65536);
      o[i2] = v3 - c2 * 65536;
    }
    o[0] += c2 - 1 + 37 * (c2 - 1);
  }
  function sel25519(p3, q2, b3) {
    const c2 = ~(b3 - 1);
    for (let i2 = 0; i2 < 16; i2++) {
      const t = c2 & (p3[i2] ^ q2[i2]);
      p3[i2] ^= t;
      q2[i2] ^= t;
    }
  }
  function pack25519(o, n2) {
    const m2 = gf();
    const t = gf();
    for (let i2 = 0; i2 < 16; i2++) {
      t[i2] = n2[i2];
    }
    car25519(t);
    car25519(t);
    car25519(t);
    for (let j2 = 0; j2 < 2; j2++) {
      m2[0] = t[0] - 65517;
      for (let i2 = 1; i2 < 15; i2++) {
        m2[i2] = t[i2] - 65535 - (m2[i2 - 1] >> 16 & 1);
        m2[i2 - 1] &= 65535;
      }
      m2[15] = t[15] - 32767 - (m2[14] >> 16 & 1);
      const b3 = m2[15] >> 16 & 1;
      m2[14] &= 65535;
      sel25519(t, m2, 1 - b3);
    }
    for (let i2 = 0; i2 < 16; i2++) {
      o[2 * i2] = t[i2] & 255;
      o[2 * i2 + 1] = t[i2] >> 8;
    }
  }
  function unpack25519(o, n2) {
    for (let i2 = 0; i2 < 16; i2++) {
      o[i2] = n2[2 * i2] + (n2[2 * i2 + 1] << 8);
    }
    o[15] &= 32767;
  }
  function add(o, a3, b3) {
    for (let i2 = 0; i2 < 16; i2++) {
      o[i2] = a3[i2] + b3[i2];
    }
  }
  function sub(o, a3, b3) {
    for (let i2 = 0; i2 < 16; i2++) {
      o[i2] = a3[i2] - b3[i2];
    }
  }
  function mul(o, a3, b3) {
    let v3, c2, t0 = 0, t1 = 0, t2 = 0, t3 = 0, t4 = 0, t5 = 0, t6 = 0, t7 = 0, t8 = 0, t9 = 0, t10 = 0, t11 = 0, t12 = 0, t13 = 0, t14 = 0, t15 = 0, t16 = 0, t17 = 0, t18 = 0, t19 = 0, t20 = 0, t21 = 0, t22 = 0, t23 = 0, t24 = 0, t25 = 0, t26 = 0, t27 = 0, t28 = 0, t29 = 0, t30 = 0, b0 = b3[0], b1 = b3[1], b22 = b3[2], b32 = b3[3], b4 = b3[4], b5 = b3[5], b6 = b3[6], b7 = b3[7], b8 = b3[8], b9 = b3[9], b10 = b3[10], b11 = b3[11], b12 = b3[12], b13 = b3[13], b14 = b3[14], b15 = b3[15];
    v3 = a3[0];
    t0 += v3 * b0;
    t1 += v3 * b1;
    t2 += v3 * b22;
    t3 += v3 * b32;
    t4 += v3 * b4;
    t5 += v3 * b5;
    t6 += v3 * b6;
    t7 += v3 * b7;
    t8 += v3 * b8;
    t9 += v3 * b9;
    t10 += v3 * b10;
    t11 += v3 * b11;
    t12 += v3 * b12;
    t13 += v3 * b13;
    t14 += v3 * b14;
    t15 += v3 * b15;
    v3 = a3[1];
    t1 += v3 * b0;
    t2 += v3 * b1;
    t3 += v3 * b22;
    t4 += v3 * b32;
    t5 += v3 * b4;
    t6 += v3 * b5;
    t7 += v3 * b6;
    t8 += v3 * b7;
    t9 += v3 * b8;
    t10 += v3 * b9;
    t11 += v3 * b10;
    t12 += v3 * b11;
    t13 += v3 * b12;
    t14 += v3 * b13;
    t15 += v3 * b14;
    t16 += v3 * b15;
    v3 = a3[2];
    t2 += v3 * b0;
    t3 += v3 * b1;
    t4 += v3 * b22;
    t5 += v3 * b32;
    t6 += v3 * b4;
    t7 += v3 * b5;
    t8 += v3 * b6;
    t9 += v3 * b7;
    t10 += v3 * b8;
    t11 += v3 * b9;
    t12 += v3 * b10;
    t13 += v3 * b11;
    t14 += v3 * b12;
    t15 += v3 * b13;
    t16 += v3 * b14;
    t17 += v3 * b15;
    v3 = a3[3];
    t3 += v3 * b0;
    t4 += v3 * b1;
    t5 += v3 * b22;
    t6 += v3 * b32;
    t7 += v3 * b4;
    t8 += v3 * b5;
    t9 += v3 * b6;
    t10 += v3 * b7;
    t11 += v3 * b8;
    t12 += v3 * b9;
    t13 += v3 * b10;
    t14 += v3 * b11;
    t15 += v3 * b12;
    t16 += v3 * b13;
    t17 += v3 * b14;
    t18 += v3 * b15;
    v3 = a3[4];
    t4 += v3 * b0;
    t5 += v3 * b1;
    t6 += v3 * b22;
    t7 += v3 * b32;
    t8 += v3 * b4;
    t9 += v3 * b5;
    t10 += v3 * b6;
    t11 += v3 * b7;
    t12 += v3 * b8;
    t13 += v3 * b9;
    t14 += v3 * b10;
    t15 += v3 * b11;
    t16 += v3 * b12;
    t17 += v3 * b13;
    t18 += v3 * b14;
    t19 += v3 * b15;
    v3 = a3[5];
    t5 += v3 * b0;
    t6 += v3 * b1;
    t7 += v3 * b22;
    t8 += v3 * b32;
    t9 += v3 * b4;
    t10 += v3 * b5;
    t11 += v3 * b6;
    t12 += v3 * b7;
    t13 += v3 * b8;
    t14 += v3 * b9;
    t15 += v3 * b10;
    t16 += v3 * b11;
    t17 += v3 * b12;
    t18 += v3 * b13;
    t19 += v3 * b14;
    t20 += v3 * b15;
    v3 = a3[6];
    t6 += v3 * b0;
    t7 += v3 * b1;
    t8 += v3 * b22;
    t9 += v3 * b32;
    t10 += v3 * b4;
    t11 += v3 * b5;
    t12 += v3 * b6;
    t13 += v3 * b7;
    t14 += v3 * b8;
    t15 += v3 * b9;
    t16 += v3 * b10;
    t17 += v3 * b11;
    t18 += v3 * b12;
    t19 += v3 * b13;
    t20 += v3 * b14;
    t21 += v3 * b15;
    v3 = a3[7];
    t7 += v3 * b0;
    t8 += v3 * b1;
    t9 += v3 * b22;
    t10 += v3 * b32;
    t11 += v3 * b4;
    t12 += v3 * b5;
    t13 += v3 * b6;
    t14 += v3 * b7;
    t15 += v3 * b8;
    t16 += v3 * b9;
    t17 += v3 * b10;
    t18 += v3 * b11;
    t19 += v3 * b12;
    t20 += v3 * b13;
    t21 += v3 * b14;
    t22 += v3 * b15;
    v3 = a3[8];
    t8 += v3 * b0;
    t9 += v3 * b1;
    t10 += v3 * b22;
    t11 += v3 * b32;
    t12 += v3 * b4;
    t13 += v3 * b5;
    t14 += v3 * b6;
    t15 += v3 * b7;
    t16 += v3 * b8;
    t17 += v3 * b9;
    t18 += v3 * b10;
    t19 += v3 * b11;
    t20 += v3 * b12;
    t21 += v3 * b13;
    t22 += v3 * b14;
    t23 += v3 * b15;
    v3 = a3[9];
    t9 += v3 * b0;
    t10 += v3 * b1;
    t11 += v3 * b22;
    t12 += v3 * b32;
    t13 += v3 * b4;
    t14 += v3 * b5;
    t15 += v3 * b6;
    t16 += v3 * b7;
    t17 += v3 * b8;
    t18 += v3 * b9;
    t19 += v3 * b10;
    t20 += v3 * b11;
    t21 += v3 * b12;
    t22 += v3 * b13;
    t23 += v3 * b14;
    t24 += v3 * b15;
    v3 = a3[10];
    t10 += v3 * b0;
    t11 += v3 * b1;
    t12 += v3 * b22;
    t13 += v3 * b32;
    t14 += v3 * b4;
    t15 += v3 * b5;
    t16 += v3 * b6;
    t17 += v3 * b7;
    t18 += v3 * b8;
    t19 += v3 * b9;
    t20 += v3 * b10;
    t21 += v3 * b11;
    t22 += v3 * b12;
    t23 += v3 * b13;
    t24 += v3 * b14;
    t25 += v3 * b15;
    v3 = a3[11];
    t11 += v3 * b0;
    t12 += v3 * b1;
    t13 += v3 * b22;
    t14 += v3 * b32;
    t15 += v3 * b4;
    t16 += v3 * b5;
    t17 += v3 * b6;
    t18 += v3 * b7;
    t19 += v3 * b8;
    t20 += v3 * b9;
    t21 += v3 * b10;
    t22 += v3 * b11;
    t23 += v3 * b12;
    t24 += v3 * b13;
    t25 += v3 * b14;
    t26 += v3 * b15;
    v3 = a3[12];
    t12 += v3 * b0;
    t13 += v3 * b1;
    t14 += v3 * b22;
    t15 += v3 * b32;
    t16 += v3 * b4;
    t17 += v3 * b5;
    t18 += v3 * b6;
    t19 += v3 * b7;
    t20 += v3 * b8;
    t21 += v3 * b9;
    t22 += v3 * b10;
    t23 += v3 * b11;
    t24 += v3 * b12;
    t25 += v3 * b13;
    t26 += v3 * b14;
    t27 += v3 * b15;
    v3 = a3[13];
    t13 += v3 * b0;
    t14 += v3 * b1;
    t15 += v3 * b22;
    t16 += v3 * b32;
    t17 += v3 * b4;
    t18 += v3 * b5;
    t19 += v3 * b6;
    t20 += v3 * b7;
    t21 += v3 * b8;
    t22 += v3 * b9;
    t23 += v3 * b10;
    t24 += v3 * b11;
    t25 += v3 * b12;
    t26 += v3 * b13;
    t27 += v3 * b14;
    t28 += v3 * b15;
    v3 = a3[14];
    t14 += v3 * b0;
    t15 += v3 * b1;
    t16 += v3 * b22;
    t17 += v3 * b32;
    t18 += v3 * b4;
    t19 += v3 * b5;
    t20 += v3 * b6;
    t21 += v3 * b7;
    t22 += v3 * b8;
    t23 += v3 * b9;
    t24 += v3 * b10;
    t25 += v3 * b11;
    t26 += v3 * b12;
    t27 += v3 * b13;
    t28 += v3 * b14;
    t29 += v3 * b15;
    v3 = a3[15];
    t15 += v3 * b0;
    t16 += v3 * b1;
    t17 += v3 * b22;
    t18 += v3 * b32;
    t19 += v3 * b4;
    t20 += v3 * b5;
    t21 += v3 * b6;
    t22 += v3 * b7;
    t23 += v3 * b8;
    t24 += v3 * b9;
    t25 += v3 * b10;
    t26 += v3 * b11;
    t27 += v3 * b12;
    t28 += v3 * b13;
    t29 += v3 * b14;
    t30 += v3 * b15;
    t0 += 38 * t16;
    t1 += 38 * t17;
    t2 += 38 * t18;
    t3 += 38 * t19;
    t4 += 38 * t20;
    t5 += 38 * t21;
    t6 += 38 * t22;
    t7 += 38 * t23;
    t8 += 38 * t24;
    t9 += 38 * t25;
    t10 += 38 * t26;
    t11 += 38 * t27;
    t12 += 38 * t28;
    t13 += 38 * t29;
    t14 += 38 * t30;
    c2 = 1;
    v3 = t0 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t0 = v3 - c2 * 65536;
    v3 = t1 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t1 = v3 - c2 * 65536;
    v3 = t2 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t2 = v3 - c2 * 65536;
    v3 = t3 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t3 = v3 - c2 * 65536;
    v3 = t4 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t4 = v3 - c2 * 65536;
    v3 = t5 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t5 = v3 - c2 * 65536;
    v3 = t6 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t6 = v3 - c2 * 65536;
    v3 = t7 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t7 = v3 - c2 * 65536;
    v3 = t8 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t8 = v3 - c2 * 65536;
    v3 = t9 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t9 = v3 - c2 * 65536;
    v3 = t10 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t10 = v3 - c2 * 65536;
    v3 = t11 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t11 = v3 - c2 * 65536;
    v3 = t12 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t12 = v3 - c2 * 65536;
    v3 = t13 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t13 = v3 - c2 * 65536;
    v3 = t14 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t14 = v3 - c2 * 65536;
    v3 = t15 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t15 = v3 - c2 * 65536;
    t0 += c2 - 1 + 37 * (c2 - 1);
    c2 = 1;
    v3 = t0 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t0 = v3 - c2 * 65536;
    v3 = t1 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t1 = v3 - c2 * 65536;
    v3 = t2 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t2 = v3 - c2 * 65536;
    v3 = t3 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t3 = v3 - c2 * 65536;
    v3 = t4 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t4 = v3 - c2 * 65536;
    v3 = t5 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t5 = v3 - c2 * 65536;
    v3 = t6 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t6 = v3 - c2 * 65536;
    v3 = t7 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t7 = v3 - c2 * 65536;
    v3 = t8 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t8 = v3 - c2 * 65536;
    v3 = t9 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t9 = v3 - c2 * 65536;
    v3 = t10 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t10 = v3 - c2 * 65536;
    v3 = t11 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t11 = v3 - c2 * 65536;
    v3 = t12 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t12 = v3 - c2 * 65536;
    v3 = t13 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t13 = v3 - c2 * 65536;
    v3 = t14 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t14 = v3 - c2 * 65536;
    v3 = t15 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t15 = v3 - c2 * 65536;
    t0 += c2 - 1 + 37 * (c2 - 1);
    o[0] = t0;
    o[1] = t1;
    o[2] = t2;
    o[3] = t3;
    o[4] = t4;
    o[5] = t5;
    o[6] = t6;
    o[7] = t7;
    o[8] = t8;
    o[9] = t9;
    o[10] = t10;
    o[11] = t11;
    o[12] = t12;
    o[13] = t13;
    o[14] = t14;
    o[15] = t15;
  }
  function square(o, a3) {
    mul(o, a3, a3);
  }
  function inv25519(o, inp) {
    const c2 = gf();
    for (let i2 = 0; i2 < 16; i2++) {
      c2[i2] = inp[i2];
    }
    for (let i2 = 253; i2 >= 0; i2--) {
      square(c2, c2);
      if (i2 !== 2 && i2 !== 4) {
        mul(c2, c2, inp);
      }
    }
    for (let i2 = 0; i2 < 16; i2++) {
      o[i2] = c2[i2];
    }
  }
  function scalarMult(n2, p3) {
    const z2 = new Uint8Array(32);
    const x2 = new Float64Array(80);
    const a3 = gf(), b3 = gf(), c2 = gf(), d2 = gf(), e = gf(), f3 = gf();
    for (let i2 = 0; i2 < 31; i2++) {
      z2[i2] = n2[i2];
    }
    z2[31] = n2[31] & 127 | 64;
    z2[0] &= 248;
    unpack25519(x2, p3);
    for (let i2 = 0; i2 < 16; i2++) {
      b3[i2] = x2[i2];
    }
    a3[0] = d2[0] = 1;
    for (let i2 = 254; i2 >= 0; --i2) {
      const r = z2[i2 >>> 3] >>> (i2 & 7) & 1;
      sel25519(a3, b3, r);
      sel25519(c2, d2, r);
      add(e, a3, c2);
      sub(a3, a3, c2);
      add(c2, b3, d2);
      sub(b3, b3, d2);
      square(d2, e);
      square(f3, a3);
      mul(a3, c2, a3);
      mul(c2, b3, e);
      add(e, a3, c2);
      sub(a3, a3, c2);
      square(b3, a3);
      sub(c2, d2, f3);
      mul(a3, c2, _121665);
      add(a3, a3, d2);
      mul(c2, c2, a3);
      mul(a3, d2, f3);
      mul(d2, b3, x2);
      square(b3, e);
      sel25519(a3, b3, r);
      sel25519(c2, d2, r);
    }
    for (let i2 = 0; i2 < 16; i2++) {
      x2[i2 + 16] = a3[i2];
      x2[i2 + 32] = c2[i2];
      x2[i2 + 48] = b3[i2];
      x2[i2 + 64] = d2[i2];
    }
    const x32 = x2.subarray(32);
    const x16 = x2.subarray(16);
    inv25519(x32, x32);
    mul(x16, x16, x32);
    const q2 = new Uint8Array(32);
    pack25519(q2, x16);
    return q2;
  }
  exports.scalarMult = scalarMult;
  function scalarMultBase(n2) {
    return scalarMult(n2, _9);
  }
  exports.scalarMultBase = scalarMultBase;
  function generateKeyPairFromSeed(seed) {
    if (seed.length !== exports.SECRET_KEY_LENGTH) {
      throw new Error(`x25519: seed must be ${exports.SECRET_KEY_LENGTH} bytes`);
    }
    const secretKey = new Uint8Array(seed);
    const publicKey = scalarMultBase(secretKey);
    return {
      publicKey,
      secretKey
    };
  }
  exports.generateKeyPairFromSeed = generateKeyPairFromSeed;
  function generateKeyPair2(prng) {
    const seed = (0, random_1.randomBytes)(32, prng);
    const result = generateKeyPairFromSeed(seed);
    (0, wipe_12.wipe)(seed);
    return result;
  }
  exports.generateKeyPair = generateKeyPair2;
  function sharedKey(mySecretKey, theirPublicKey, rejectZero = false) {
    if (mySecretKey.length !== exports.PUBLIC_KEY_LENGTH) {
      throw new Error("X25519: incorrect secret key length");
    }
    if (theirPublicKey.length !== exports.PUBLIC_KEY_LENGTH) {
      throw new Error("X25519: incorrect public key length");
    }
    const result = scalarMult(mySecretKey, theirPublicKey);
    if (rejectZero) {
      let zeros = 0;
      for (let i2 = 0; i2 < result.length; i2++) {
        zeros |= result[i2];
      }
      if (zeros === 0) {
        throw new Error("X25519: invalid shared key");
      }
    }
    return result;
  }
  exports.sharedKey = sharedKey;
})(x25519);
function asUint8Array(buf) {
  if (globalThis.Buffer != null) {
    return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength);
  }
  return buf;
}
function allocUnsafe(size = 0) {
  if (globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null) {
    return asUint8Array(globalThis.Buffer.allocUnsafe(size));
  }
  return new Uint8Array(size);
}
function concat(arrays, length) {
  if (!length) {
    length = arrays.reduce((acc, curr) => acc + curr.length, 0);
  }
  const output = allocUnsafe(length);
  let offset = 0;
  for (const arr of arrays) {
    output.set(arr, offset);
    offset += arr.length;
  }
  return asUint8Array(output);
}
function base(ALPHABET, name) {
  if (ALPHABET.length >= 255) {
    throw new TypeError("Alphabet too long");
  }
  var BASE_MAP = new Uint8Array(256);
  for (var j2 = 0; j2 < BASE_MAP.length; j2++) {
    BASE_MAP[j2] = 255;
  }
  for (var i2 = 0; i2 < ALPHABET.length; i2++) {
    var x2 = ALPHABET.charAt(i2);
    var xc = x2.charCodeAt(0);
    if (BASE_MAP[xc] !== 255) {
      throw new TypeError(x2 + " is ambiguous");
    }
    BASE_MAP[xc] = i2;
  }
  var BASE = ALPHABET.length;
  var LEADER = ALPHABET.charAt(0);
  var FACTOR = Math.log(BASE) / Math.log(256);
  var iFACTOR = Math.log(256) / Math.log(BASE);
  function encode2(source) {
    if (source instanceof Uint8Array)
      ;
    else if (ArrayBuffer.isView(source)) {
      source = new Uint8Array(source.buffer, source.byteOffset, source.byteLength);
    } else if (Array.isArray(source)) {
      source = Uint8Array.from(source);
    }
    if (!(source instanceof Uint8Array)) {
      throw new TypeError("Expected Uint8Array");
    }
    if (source.length === 0) {
      return "";
    }
    var zeroes = 0;
    var length = 0;
    var pbegin = 0;
    var pend = source.length;
    while (pbegin !== pend && source[pbegin] === 0) {
      pbegin++;
      zeroes++;
    }
    var size = (pend - pbegin) * iFACTOR + 1 >>> 0;
    var b58 = new Uint8Array(size);
    while (pbegin !== pend) {
      var carry = source[pbegin];
      var i3 = 0;
      for (var it1 = size - 1; (carry !== 0 || i3 < length) && it1 !== -1; it1--, i3++) {
        carry += 256 * b58[it1] >>> 0;
        b58[it1] = carry % BASE >>> 0;
        carry = carry / BASE >>> 0;
      }
      if (carry !== 0) {
        throw new Error("Non-zero carry");
      }
      length = i3;
      pbegin++;
    }
    var it2 = size - length;
    while (it2 !== size && b58[it2] === 0) {
      it2++;
    }
    var str = LEADER.repeat(zeroes);
    for (; it2 < size; ++it2) {
      str += ALPHABET.charAt(b58[it2]);
    }
    return str;
  }
  function decodeUnsafe(source) {
    if (typeof source !== "string") {
      throw new TypeError("Expected String");
    }
    if (source.length === 0) {
      return new Uint8Array();
    }
    var psz = 0;
    if (source[psz] === " ") {
      return;
    }
    var zeroes = 0;
    var length = 0;
    while (source[psz] === LEADER) {
      zeroes++;
      psz++;
    }
    var size = (source.length - psz) * FACTOR + 1 >>> 0;
    var b256 = new Uint8Array(size);
    while (source[psz]) {
      var carry = BASE_MAP[source.charCodeAt(psz)];
      if (carry === 255) {
        return;
      }
      var i3 = 0;
      for (var it3 = size - 1; (carry !== 0 || i3 < length) && it3 !== -1; it3--, i3++) {
        carry += BASE * b256[it3] >>> 0;
        b256[it3] = carry % 256 >>> 0;
        carry = carry / 256 >>> 0;
      }
      if (carry !== 0) {
        throw new Error("Non-zero carry");
      }
      length = i3;
      psz++;
    }
    if (source[psz] === " ") {
      return;
    }
    var it4 = size - length;
    while (it4 !== size && b256[it4] === 0) {
      it4++;
    }
    var vch = new Uint8Array(zeroes + (size - it4));
    var j3 = zeroes;
    while (it4 !== size) {
      vch[j3++] = b256[it4++];
    }
    return vch;
  }
  function decode2(string2) {
    var buffer = decodeUnsafe(string2);
    if (buffer) {
      return buffer;
    }
    throw new Error(`Non-${name} character`);
  }
  return {
    encode: encode2,
    decodeUnsafe,
    decode: decode2
  };
}
var src = base;
var _brrp__multiformats_scope_baseX = src;
const coerce = (o) => {
  if (o instanceof Uint8Array && o.constructor.name === "Uint8Array")
    return o;
  if (o instanceof ArrayBuffer)
    return new Uint8Array(o);
  if (ArrayBuffer.isView(o)) {
    return new Uint8Array(o.buffer, o.byteOffset, o.byteLength);
  }
  throw new Error("Unknown type, must be binary type");
};
const fromString$1 = (str) => new TextEncoder().encode(str);
const toString$1 = (b3) => new TextDecoder().decode(b3);
class Encoder {
  constructor(name, prefix, baseEncode) {
    this.name = name;
    this.prefix = prefix;
    this.baseEncode = baseEncode;
  }
  encode(bytes) {
    if (bytes instanceof Uint8Array) {
      return `${this.prefix}${this.baseEncode(bytes)}`;
    } else {
      throw Error("Unknown type, must be binary type");
    }
  }
}
class Decoder {
  constructor(name, prefix, baseDecode) {
    this.name = name;
    this.prefix = prefix;
    if (prefix.codePointAt(0) === void 0) {
      throw new Error("Invalid prefix character");
    }
    this.prefixCodePoint = prefix.codePointAt(0);
    this.baseDecode = baseDecode;
  }
  decode(text) {
    if (typeof text === "string") {
      if (text.codePointAt(0) !== this.prefixCodePoint) {
        throw Error(`Unable to decode multibase string ${JSON.stringify(text)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
      }
      return this.baseDecode(text.slice(this.prefix.length));
    } else {
      throw Error("Can only multibase decode strings");
    }
  }
  or(decoder) {
    return or$2(this, decoder);
  }
}
class ComposedDecoder {
  constructor(decoders) {
    this.decoders = decoders;
  }
  or(decoder) {
    return or$2(this, decoder);
  }
  decode(input) {
    const prefix = input[0];
    const decoder = this.decoders[prefix];
    if (decoder) {
      return decoder.decode(input);
    } else {
      throw RangeError(`Unable to decode multibase string ${JSON.stringify(input)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
    }
  }
}
const or$2 = (left, right) => new ComposedDecoder({
  ...left.decoders || { [left.prefix]: left },
  ...right.decoders || { [right.prefix]: right }
});
class Codec {
  constructor(name, prefix, baseEncode, baseDecode) {
    this.name = name;
    this.prefix = prefix;
    this.baseEncode = baseEncode;
    this.baseDecode = baseDecode;
    this.encoder = new Encoder(name, prefix, baseEncode);
    this.decoder = new Decoder(name, prefix, baseDecode);
  }
  encode(input) {
    return this.encoder.encode(input);
  }
  decode(input) {
    return this.decoder.decode(input);
  }
}
const from = ({ name, prefix, encode: encode2, decode: decode2 }) => new Codec(name, prefix, encode2, decode2);
const baseX = ({ prefix, name, alphabet: alphabet2 }) => {
  const { encode: encode2, decode: decode2 } = _brrp__multiformats_scope_baseX(alphabet2, name);
  return from({
    prefix,
    name,
    encode: encode2,
    decode: (text) => coerce(decode2(text))
  });
};
const decode$2 = (string2, alphabet2, bitsPerChar, name) => {
  const codes = {};
  for (let i2 = 0; i2 < alphabet2.length; ++i2) {
    codes[alphabet2[i2]] = i2;
  }
  let end = string2.length;
  while (string2[end - 1] === "=") {
    --end;
  }
  const out = new Uint8Array(end * bitsPerChar / 8 | 0);
  let bits = 0;
  let buffer = 0;
  let written = 0;
  for (let i2 = 0; i2 < end; ++i2) {
    const value = codes[string2[i2]];
    if (value === void 0) {
      throw new SyntaxError(`Non-${name} character`);
    }
    buffer = buffer << bitsPerChar | value;
    bits += bitsPerChar;
    if (bits >= 8) {
      bits -= 8;
      out[written++] = 255 & buffer >> bits;
    }
  }
  if (bits >= bitsPerChar || 255 & buffer << 8 - bits) {
    throw new SyntaxError("Unexpected end of data");
  }
  return out;
};
const encode$1 = (data, alphabet2, bitsPerChar) => {
  const pad = alphabet2[alphabet2.length - 1] === "=";
  const mask = (1 << bitsPerChar) - 1;
  let out = "";
  let bits = 0;
  let buffer = 0;
  for (let i2 = 0; i2 < data.length; ++i2) {
    buffer = buffer << 8 | data[i2];
    bits += 8;
    while (bits > bitsPerChar) {
      bits -= bitsPerChar;
      out += alphabet2[mask & buffer >> bits];
    }
  }
  if (bits) {
    out += alphabet2[mask & buffer << bitsPerChar - bits];
  }
  if (pad) {
    while (out.length * bitsPerChar & 7) {
      out += "=";
    }
  }
  return out;
};
const rfc4648 = ({ name, prefix, bitsPerChar, alphabet: alphabet2 }) => {
  return from({
    prefix,
    name,
    encode(input) {
      return encode$1(input, alphabet2, bitsPerChar);
    },
    decode(input) {
      return decode$2(input, alphabet2, bitsPerChar, name);
    }
  });
};
const identity = from({
  prefix: "\0",
  name: "identity",
  encode: (buf) => toString$1(buf),
  decode: (str) => fromString$1(str)
});
const identityBase = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  identity
}, Symbol.toStringTag, { value: "Module" }));
const base2 = rfc4648({
  prefix: "0",
  name: "base2",
  alphabet: "01",
  bitsPerChar: 1
});
const base2$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base2
}, Symbol.toStringTag, { value: "Module" }));
const base8 = rfc4648({
  prefix: "7",
  name: "base8",
  alphabet: "01234567",
  bitsPerChar: 3
});
const base8$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base8
}, Symbol.toStringTag, { value: "Module" }));
const base10 = baseX({
  prefix: "9",
  name: "base10",
  alphabet: "0123456789"
});
const base10$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base10
}, Symbol.toStringTag, { value: "Module" }));
const base16 = rfc4648({
  prefix: "f",
  name: "base16",
  alphabet: "0123456789abcdef",
  bitsPerChar: 4
});
const base16upper = rfc4648({
  prefix: "F",
  name: "base16upper",
  alphabet: "0123456789ABCDEF",
  bitsPerChar: 4
});
const base16$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base16,
  base16upper
}, Symbol.toStringTag, { value: "Module" }));
const base32 = rfc4648({
  prefix: "b",
  name: "base32",
  alphabet: "abcdefghijklmnopqrstuvwxyz234567",
  bitsPerChar: 5
});
const base32upper = rfc4648({
  prefix: "B",
  name: "base32upper",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
  bitsPerChar: 5
});
const base32pad = rfc4648({
  prefix: "c",
  name: "base32pad",
  alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
  bitsPerChar: 5
});
const base32padupper = rfc4648({
  prefix: "C",
  name: "base32padupper",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
  bitsPerChar: 5
});
const base32hex = rfc4648({
  prefix: "v",
  name: "base32hex",
  alphabet: "0123456789abcdefghijklmnopqrstuv",
  bitsPerChar: 5
});
const base32hexupper = rfc4648({
  prefix: "V",
  name: "base32hexupper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
  bitsPerChar: 5
});
const base32hexpad = rfc4648({
  prefix: "t",
  name: "base32hexpad",
  alphabet: "0123456789abcdefghijklmnopqrstuv=",
  bitsPerChar: 5
});
const base32hexpadupper = rfc4648({
  prefix: "T",
  name: "base32hexpadupper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
  bitsPerChar: 5
});
const base32z = rfc4648({
  prefix: "h",
  name: "base32z",
  alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
  bitsPerChar: 5
});
const base32$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base32,
  base32hex,
  base32hexpad,
  base32hexpadupper,
  base32hexupper,
  base32pad,
  base32padupper,
  base32upper,
  base32z
}, Symbol.toStringTag, { value: "Module" }));
const base36 = baseX({
  prefix: "k",
  name: "base36",
  alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
});
const base36upper = baseX({
  prefix: "K",
  name: "base36upper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
});
const base36$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base36,
  base36upper
}, Symbol.toStringTag, { value: "Module" }));
const base58btc = baseX({
  name: "base58btc",
  prefix: "z",
  alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
});
const base58flickr = baseX({
  name: "base58flickr",
  prefix: "Z",
  alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
});
const base58 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base58btc,
  base58flickr
}, Symbol.toStringTag, { value: "Module" }));
const base64 = rfc4648({
  prefix: "m",
  name: "base64",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  bitsPerChar: 6
});
const base64pad = rfc4648({
  prefix: "M",
  name: "base64pad",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  bitsPerChar: 6
});
const base64url = rfc4648({
  prefix: "u",
  name: "base64url",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
  bitsPerChar: 6
});
const base64urlpad = rfc4648({
  prefix: "U",
  name: "base64urlpad",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
  bitsPerChar: 6
});
const base64$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base64,
  base64pad,
  base64url,
  base64urlpad
}, Symbol.toStringTag, { value: "Module" }));
const alphabet = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂");
const alphabetBytesToChars = alphabet.reduce((p3, c2, i2) => {
  p3[i2] = c2;
  return p3;
}, []);
const alphabetCharsToBytes = alphabet.reduce((p3, c2, i2) => {
  p3[c2.codePointAt(0)] = i2;
  return p3;
}, []);
function encode(data) {
  return data.reduce((p3, c2) => {
    p3 += alphabetBytesToChars[c2];
    return p3;
  }, "");
}
function decode$1(str) {
  const byts = [];
  for (const char of str) {
    const byt = alphabetCharsToBytes[char.codePointAt(0)];
    if (byt === void 0) {
      throw new Error(`Non-base256emoji character: ${char}`);
    }
    byts.push(byt);
  }
  return new Uint8Array(byts);
}
const base256emoji = from({
  prefix: "🚀",
  name: "base256emoji",
  encode,
  decode: decode$1
});
const base256emoji$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base256emoji
}, Symbol.toStringTag, { value: "Module" }));
new TextEncoder();
new TextDecoder();
const bases = {
  ...identityBase,
  ...base2$1,
  ...base8$1,
  ...base10$1,
  ...base16$1,
  ...base32$1,
  ...base36$1,
  ...base58,
  ...base64$1,
  ...base256emoji$1
};
function createCodec(name, prefix, encode2, decode2) {
  return {
    name,
    prefix,
    encoder: {
      name,
      prefix,
      encode: encode2
    },
    decoder: { decode: decode2 }
  };
}
const string = createCodec("utf8", "u", (buf) => {
  const decoder = new TextDecoder("utf8");
  return "u" + decoder.decode(buf);
}, (str) => {
  const encoder = new TextEncoder();
  return encoder.encode(str.substring(1));
});
const ascii = createCodec("ascii", "a", (buf) => {
  let string2 = "a";
  for (let i2 = 0; i2 < buf.length; i2++) {
    string2 += String.fromCharCode(buf[i2]);
  }
  return string2;
}, (str) => {
  str = str.substring(1);
  const buf = allocUnsafe(str.length);
  for (let i2 = 0; i2 < str.length; i2++) {
    buf[i2] = str.charCodeAt(i2);
  }
  return buf;
});
const BASES = {
  utf8: string,
  "utf-8": string,
  hex: bases.base16,
  latin1: ascii,
  ascii,
  binary: ascii,
  ...bases
};
function fromString(string2, encoding = "utf8") {
  const base3 = BASES[encoding];
  if (!base3) {
    throw new Error(`Unsupported encoding "${encoding}"`);
  }
  if ((encoding === "utf8" || encoding === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null) {
    return asUint8Array(globalThis.Buffer.from(string2, "utf-8"));
  }
  return base3.decoder.decode(`${base3.prefix}${string2}`);
}
function toString(array, encoding = "utf8") {
  const base3 = BASES[encoding];
  if (!base3) {
    throw new Error(`Unsupported encoding "${encoding}"`);
  }
  if ((encoding === "utf8" || encoding === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null) {
    return globalThis.Buffer.from(array.buffer, array.byteOffset, array.byteLength).toString("utf8");
  }
  return base3.encoder.encode(array).substring(1);
}
var __spreadArray = function(to, from2, pack) {
  if (pack || arguments.length === 2)
    for (var i2 = 0, l2 = from2.length, ar2; i2 < l2; i2++) {
      if (ar2 || !(i2 in from2)) {
        if (!ar2)
          ar2 = Array.prototype.slice.call(from2, 0, i2);
        ar2[i2] = from2[i2];
      }
    }
  return to.concat(ar2 || Array.prototype.slice.call(from2));
};
var BrowserInfo = (
  /** @class */
  /* @__PURE__ */ function() {
    function BrowserInfo2(name, version, os2) {
      this.name = name;
      this.version = version;
      this.os = os2;
      this.type = "browser";
    }
    return BrowserInfo2;
  }()
);
var NodeInfo = (
  /** @class */
  /* @__PURE__ */ function() {
    function NodeInfo2(version) {
      this.version = version;
      this.type = "node";
      this.name = "node";
      this.os = process$1.platform;
    }
    return NodeInfo2;
  }()
);
var SearchBotDeviceInfo = (
  /** @class */
  /* @__PURE__ */ function() {
    function SearchBotDeviceInfo2(name, version, os2, bot) {
      this.name = name;
      this.version = version;
      this.os = os2;
      this.bot = bot;
      this.type = "bot-device";
    }
    return SearchBotDeviceInfo2;
  }()
);
var BotInfo = (
  /** @class */
  /* @__PURE__ */ function() {
    function BotInfo2() {
      this.type = "bot";
      this.bot = true;
      this.name = "bot";
      this.version = null;
      this.os = null;
    }
    return BotInfo2;
  }()
);
var ReactNativeInfo = (
  /** @class */
  /* @__PURE__ */ function() {
    function ReactNativeInfo2() {
      this.type = "react-native";
      this.name = "react-native";
      this.version = null;
      this.os = null;
    }
    return ReactNativeInfo2;
  }()
);
var SEARCHBOX_UA_REGEX = /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/;
var SEARCHBOT_OS_REGEX = /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/;
var REQUIRED_VERSION_PARTS = 3;
var userAgentRules = [
  ["aol", /AOLShield\/([0-9\._]+)/],
  ["edge", /Edge\/([0-9\._]+)/],
  ["edge-ios", /EdgiOS\/([0-9\._]+)/],
  ["yandexbrowser", /YaBrowser\/([0-9\._]+)/],
  ["kakaotalk", /KAKAOTALK\s([0-9\.]+)/],
  ["samsung", /SamsungBrowser\/([0-9\.]+)/],
  ["silk", /\bSilk\/([0-9._-]+)\b/],
  ["miui", /MiuiBrowser\/([0-9\.]+)$/],
  ["beaker", /BeakerBrowser\/([0-9\.]+)/],
  ["edge-chromium", /EdgA?\/([0-9\.]+)/],
  [
    "chromium-webview",
    /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/
  ],
  ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
  ["phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/],
  ["crios", /CriOS\/([0-9\.]+)(:?\s|$)/],
  ["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/],
  ["fxios", /FxiOS\/([0-9\.]+)/],
  ["opera-mini", /Opera Mini.*Version\/([0-9\.]+)/],
  ["opera", /Opera\/([0-9\.]+)(?:\s|$)/],
  ["opera", /OPR\/([0-9\.]+)(:?\s|$)/],
  ["pie", /^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],
  ["pie", /^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/],
  ["netfront", /^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],
  ["ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
  ["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
  ["ie", /MSIE\s(7\.0)/],
  ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/],
  ["android", /Android\s([0-9\.]+)/],
  ["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/],
  ["safari", /Version\/([0-9\._]+).*Safari/],
  ["facebook", /FB[AS]V\/([0-9\.]+)/],
  ["instagram", /Instagram\s([0-9\.]+)/],
  ["ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/],
  ["ios-webview", /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
  ["curl", /^curl\/([0-9\.]+)$/],
  ["searchbot", SEARCHBOX_UA_REGEX]
];
var operatingSystemRules = [
  ["iOS", /iP(hone|od|ad)/],
  ["Android OS", /Android/],
  ["BlackBerry OS", /BlackBerry|BB10/],
  ["Windows Mobile", /IEMobile/],
  ["Amazon OS", /Kindle/],
  ["Windows 3.11", /Win16/],
  ["Windows 95", /(Windows 95)|(Win95)|(Windows_95)/],
  ["Windows 98", /(Windows 98)|(Win98)/],
  ["Windows 2000", /(Windows NT 5.0)|(Windows 2000)/],
  ["Windows XP", /(Windows NT 5.1)|(Windows XP)/],
  ["Windows Server 2003", /(Windows NT 5.2)/],
  ["Windows Vista", /(Windows NT 6.0)/],
  ["Windows 7", /(Windows NT 6.1)/],
  ["Windows 8", /(Windows NT 6.2)/],
  ["Windows 8.1", /(Windows NT 6.3)/],
  ["Windows 10", /(Windows NT 10.0)/],
  ["Windows ME", /Windows ME/],
  ["Windows CE", /Windows CE|WinCE|Microsoft Pocket Internet Explorer/],
  ["Open BSD", /OpenBSD/],
  ["Sun OS", /SunOS/],
  ["Chrome OS", /CrOS/],
  ["Linux", /(Linux)|(X11)/],
  ["Mac OS", /(Mac_PowerPC)|(Macintosh)/],
  ["QNX", /QNX/],
  ["BeOS", /BeOS/],
  ["OS/2", /OS\/2/]
];
function detect(userAgent) {
  if (typeof document === "undefined" && typeof navigator !== "undefined" && navigator.product === "ReactNative") {
    return new ReactNativeInfo();
  }
  if (typeof navigator !== "undefined") {
    return parseUserAgent(navigator.userAgent);
  }
  return getNodeVersion();
}
function matchUserAgent(ua) {
  return ua !== "" && userAgentRules.reduce(function(matched, _a) {
    var browser2 = _a[0], regex = _a[1];
    if (matched) {
      return matched;
    }
    var uaMatch = regex.exec(ua);
    return !!uaMatch && [browser2, uaMatch];
  }, false);
}
function parseUserAgent(ua) {
  var matchedRule = matchUserAgent(ua);
  if (!matchedRule) {
    return null;
  }
  var name = matchedRule[0], match = matchedRule[1];
  if (name === "searchbot") {
    return new BotInfo();
  }
  var versionParts = match[1] && match[1].split(".").join("_").split("_").slice(0, 3);
  if (versionParts) {
    if (versionParts.length < REQUIRED_VERSION_PARTS) {
      versionParts = __spreadArray(__spreadArray([], versionParts, true), createVersionParts(REQUIRED_VERSION_PARTS - versionParts.length), true);
    }
  } else {
    versionParts = [];
  }
  var version = versionParts.join(".");
  var os2 = detectOS(ua);
  var searchBotMatch = SEARCHBOT_OS_REGEX.exec(ua);
  if (searchBotMatch && searchBotMatch[1]) {
    return new SearchBotDeviceInfo(name, version, os2, searchBotMatch[1]);
  }
  return new BrowserInfo(name, version, os2);
}
function detectOS(ua) {
  for (var ii = 0, count = operatingSystemRules.length; ii < count; ii++) {
    var _a = operatingSystemRules[ii], os2 = _a[0], regex = _a[1];
    var match = regex.exec(ua);
    if (match) {
      return os2;
    }
  }
  return null;
}
function getNodeVersion() {
  var isNode = typeof process$1 !== "undefined" && process$1.version;
  return isNode ? new NodeInfo(process$1.version.slice(1)) : null;
}
function createVersionParts(count) {
  var output = [];
  for (var ii = 0; ii < count; ii++) {
    output.push("0");
  }
  return output;
}
var cjs$4 = {};
var utils = {};
var delay = {};
var hasRequiredDelay;
function requireDelay() {
  if (hasRequiredDelay)
    return delay;
  hasRequiredDelay = 1;
  Object.defineProperty(delay, "__esModule", { value: true });
  delay.delay = void 0;
  function delay$1(timeout) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, timeout);
    });
  }
  delay.delay = delay$1;
  return delay;
}
var convert = {};
var constants$1 = {};
var misc = {};
var hasRequiredMisc;
function requireMisc() {
  if (hasRequiredMisc)
    return misc;
  hasRequiredMisc = 1;
  Object.defineProperty(misc, "__esModule", { value: true });
  misc.ONE_THOUSAND = misc.ONE_HUNDRED = void 0;
  misc.ONE_HUNDRED = 100;
  misc.ONE_THOUSAND = 1e3;
  return misc;
}
var time = {};
var hasRequiredTime;
function requireTime() {
  if (hasRequiredTime)
    return time;
  hasRequiredTime = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ONE_YEAR = exports.FOUR_WEEKS = exports.THREE_WEEKS = exports.TWO_WEEKS = exports.ONE_WEEK = exports.THIRTY_DAYS = exports.SEVEN_DAYS = exports.FIVE_DAYS = exports.THREE_DAYS = exports.ONE_DAY = exports.TWENTY_FOUR_HOURS = exports.TWELVE_HOURS = exports.SIX_HOURS = exports.THREE_HOURS = exports.ONE_HOUR = exports.SIXTY_MINUTES = exports.THIRTY_MINUTES = exports.TEN_MINUTES = exports.FIVE_MINUTES = exports.ONE_MINUTE = exports.SIXTY_SECONDS = exports.THIRTY_SECONDS = exports.TEN_SECONDS = exports.FIVE_SECONDS = exports.ONE_SECOND = void 0;
    exports.ONE_SECOND = 1;
    exports.FIVE_SECONDS = 5;
    exports.TEN_SECONDS = 10;
    exports.THIRTY_SECONDS = 30;
    exports.SIXTY_SECONDS = 60;
    exports.ONE_MINUTE = exports.SIXTY_SECONDS;
    exports.FIVE_MINUTES = exports.ONE_MINUTE * 5;
    exports.TEN_MINUTES = exports.ONE_MINUTE * 10;
    exports.THIRTY_MINUTES = exports.ONE_MINUTE * 30;
    exports.SIXTY_MINUTES = exports.ONE_MINUTE * 60;
    exports.ONE_HOUR = exports.SIXTY_MINUTES;
    exports.THREE_HOURS = exports.ONE_HOUR * 3;
    exports.SIX_HOURS = exports.ONE_HOUR * 6;
    exports.TWELVE_HOURS = exports.ONE_HOUR * 12;
    exports.TWENTY_FOUR_HOURS = exports.ONE_HOUR * 24;
    exports.ONE_DAY = exports.TWENTY_FOUR_HOURS;
    exports.THREE_DAYS = exports.ONE_DAY * 3;
    exports.FIVE_DAYS = exports.ONE_DAY * 5;
    exports.SEVEN_DAYS = exports.ONE_DAY * 7;
    exports.THIRTY_DAYS = exports.ONE_DAY * 30;
    exports.ONE_WEEK = exports.SEVEN_DAYS;
    exports.TWO_WEEKS = exports.ONE_WEEK * 2;
    exports.THREE_WEEKS = exports.ONE_WEEK * 3;
    exports.FOUR_WEEKS = exports.ONE_WEEK * 4;
    exports.ONE_YEAR = exports.ONE_DAY * 365;
  })(time);
  return time;
}
var hasRequiredConstants$1;
function requireConstants$1() {
  if (hasRequiredConstants$1)
    return constants$1;
  hasRequiredConstants$1 = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    const tslib_1 = require$$0$2;
    tslib_1.__exportStar(requireMisc(), exports);
    tslib_1.__exportStar(requireTime(), exports);
  })(constants$1);
  return constants$1;
}
var hasRequiredConvert;
function requireConvert() {
  if (hasRequiredConvert)
    return convert;
  hasRequiredConvert = 1;
  Object.defineProperty(convert, "__esModule", { value: true });
  convert.fromMiliseconds = convert.toMiliseconds = void 0;
  const constants_1 = requireConstants$1();
  function toMiliseconds(seconds) {
    return seconds * constants_1.ONE_THOUSAND;
  }
  convert.toMiliseconds = toMiliseconds;
  function fromMiliseconds(miliseconds) {
    return Math.floor(miliseconds / constants_1.ONE_THOUSAND);
  }
  convert.fromMiliseconds = fromMiliseconds;
  return convert;
}
var hasRequiredUtils;
function requireUtils() {
  if (hasRequiredUtils)
    return utils;
  hasRequiredUtils = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    const tslib_1 = require$$0$2;
    tslib_1.__exportStar(requireDelay(), exports);
    tslib_1.__exportStar(requireConvert(), exports);
  })(utils);
  return utils;
}
var watch$2 = {};
var hasRequiredWatch$1;
function requireWatch$1() {
  if (hasRequiredWatch$1)
    return watch$2;
  hasRequiredWatch$1 = 1;
  Object.defineProperty(watch$2, "__esModule", { value: true });
  watch$2.Watch = void 0;
  class Watch {
    constructor() {
      this.timestamps = /* @__PURE__ */ new Map();
    }
    start(label) {
      if (this.timestamps.has(label)) {
        throw new Error(`Watch already started for label: ${label}`);
      }
      this.timestamps.set(label, { started: Date.now() });
    }
    stop(label) {
      const timestamp = this.get(label);
      if (typeof timestamp.elapsed !== "undefined") {
        throw new Error(`Watch already stopped for label: ${label}`);
      }
      const elapsed = Date.now() - timestamp.started;
      this.timestamps.set(label, { started: timestamp.started, elapsed });
    }
    get(label) {
      const timestamp = this.timestamps.get(label);
      if (typeof timestamp === "undefined") {
        throw new Error(`No timestamp found for label: ${label}`);
      }
      return timestamp;
    }
    elapsed(label) {
      const timestamp = this.get(label);
      const elapsed = timestamp.elapsed || Date.now() - timestamp.started;
      return elapsed;
    }
  }
  watch$2.Watch = Watch;
  watch$2.default = Watch;
  return watch$2;
}
var types$1 = {};
var watch$1 = {};
var hasRequiredWatch;
function requireWatch() {
  if (hasRequiredWatch)
    return watch$1;
  hasRequiredWatch = 1;
  Object.defineProperty(watch$1, "__esModule", { value: true });
  watch$1.IWatch = void 0;
  class IWatch {
  }
  watch$1.IWatch = IWatch;
  return watch$1;
}
var hasRequiredTypes$1;
function requireTypes$1() {
  if (hasRequiredTypes$1)
    return types$1;
  hasRequiredTypes$1 = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    const tslib_1 = require$$0$2;
    tslib_1.__exportStar(requireWatch(), exports);
  })(types$1);
  return types$1;
}
(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  const tslib_1 = require$$0$2;
  tslib_1.__exportStar(requireUtils(), exports);
  tslib_1.__exportStar(requireWatch$1(), exports);
  tslib_1.__exportStar(requireTypes$1(), exports);
  tslib_1.__exportStar(requireConstants$1(), exports);
})(cjs$4);
var cjs$3 = {};
Object.defineProperty(cjs$3, "__esModule", { value: true });
cjs$3.getLocalStorage = cjs$3.getLocalStorageOrThrow = cjs$3.getCrypto = cjs$3.getCryptoOrThrow = getLocation_1 = cjs$3.getLocation = cjs$3.getLocationOrThrow = getNavigator_1 = cjs$3.getNavigator = cjs$3.getNavigatorOrThrow = getDocument_1 = cjs$3.getDocument = cjs$3.getDocumentOrThrow = cjs$3.getFromWindowOrThrow = cjs$3.getFromWindow = void 0;
function getFromWindow(name) {
  let res = void 0;
  if (typeof window !== "undefined" && typeof window[name] !== "undefined") {
    res = window[name];
  }
  return res;
}
cjs$3.getFromWindow = getFromWindow;
function getFromWindowOrThrow(name) {
  const res = getFromWindow(name);
  if (!res) {
    throw new Error(`${name} is not defined in Window`);
  }
  return res;
}
cjs$3.getFromWindowOrThrow = getFromWindowOrThrow;
function getDocumentOrThrow() {
  return getFromWindowOrThrow("document");
}
cjs$3.getDocumentOrThrow = getDocumentOrThrow;
function getDocument() {
  return getFromWindow("document");
}
var getDocument_1 = cjs$3.getDocument = getDocument;
function getNavigatorOrThrow() {
  return getFromWindowOrThrow("navigator");
}
cjs$3.getNavigatorOrThrow = getNavigatorOrThrow;
function getNavigator() {
  return getFromWindow("navigator");
}
var getNavigator_1 = cjs$3.getNavigator = getNavigator;
function getLocationOrThrow() {
  return getFromWindowOrThrow("location");
}
cjs$3.getLocationOrThrow = getLocationOrThrow;
function getLocation() {
  return getFromWindow("location");
}
var getLocation_1 = cjs$3.getLocation = getLocation;
function getCryptoOrThrow() {
  return getFromWindowOrThrow("crypto");
}
cjs$3.getCryptoOrThrow = getCryptoOrThrow;
function getCrypto() {
  return getFromWindow("crypto");
}
cjs$3.getCrypto = getCrypto;
function getLocalStorageOrThrow() {
  return getFromWindowOrThrow("localStorage");
}
cjs$3.getLocalStorageOrThrow = getLocalStorageOrThrow;
function getLocalStorage() {
  return getFromWindow("localStorage");
}
cjs$3.getLocalStorage = getLocalStorage;
var cjs$2 = {};
Object.defineProperty(cjs$2, "__esModule", { value: true });
var getWindowMetadata_1 = cjs$2.getWindowMetadata = void 0;
const window_getters_1 = cjs$3;
function getWindowMetadata() {
  let doc;
  let loc;
  try {
    doc = window_getters_1.getDocumentOrThrow();
    loc = window_getters_1.getLocationOrThrow();
  } catch (e) {
    return null;
  }
  function getIcons() {
    const links = doc.getElementsByTagName("link");
    const icons2 = [];
    for (let i2 = 0; i2 < links.length; i2++) {
      const link = links[i2];
      const rel = link.getAttribute("rel");
      if (rel) {
        if (rel.toLowerCase().indexOf("icon") > -1) {
          const href = link.getAttribute("href");
          if (href) {
            if (href.toLowerCase().indexOf("https:") === -1 && href.toLowerCase().indexOf("http:") === -1 && href.indexOf("//") !== 0) {
              let absoluteHref = loc.protocol + "//" + loc.host;
              if (href.indexOf("/") === 0) {
                absoluteHref += href;
              } else {
                const path = loc.pathname.split("/");
                path.pop();
                const finalPath = path.join("/");
                absoluteHref += finalPath + "/" + href;
              }
              icons2.push(absoluteHref);
            } else if (href.indexOf("//") === 0) {
              const absoluteUrl = loc.protocol + href;
              icons2.push(absoluteUrl);
            } else {
              icons2.push(href);
            }
          }
        }
      }
    }
    return icons2;
  }
  function getWindowMetadataOfAny(...args) {
    const metaTags = doc.getElementsByTagName("meta");
    for (let i2 = 0; i2 < metaTags.length; i2++) {
      const tag = metaTags[i2];
      const attributes = ["itemprop", "property", "name"].map((target) => tag.getAttribute(target)).filter((attr) => {
        if (attr) {
          return args.includes(attr);
        }
        return false;
      });
      if (attributes.length && attributes) {
        const content = tag.getAttribute("content");
        if (content) {
          return content;
        }
      }
    }
    return "";
  }
  function getName() {
    let name2 = getWindowMetadataOfAny("name", "og:site_name", "og:title", "twitter:title");
    if (!name2) {
      name2 = doc.title;
    }
    return name2;
  }
  function getDescription() {
    const description2 = getWindowMetadataOfAny("description", "og:description", "twitter:description", "keywords");
    return description2;
  }
  const name = getName();
  const description = getDescription();
  const url = loc.origin;
  const icons = getIcons();
  const meta = {
    description,
    url,
    icons,
    name
  };
  return meta;
}
getWindowMetadata_1 = cjs$2.getWindowMetadata = getWindowMetadata;
var queryString = {};
var strictUriEncode = (str) => encodeURIComponent(str).replace(/[!'()*]/g, (x2) => `%${x2.charCodeAt(0).toString(16).toUpperCase()}`);
var token = "%[a-f0-9]{2}";
var singleMatcher = new RegExp("(" + token + ")|([^%]+?)", "gi");
var multiMatcher = new RegExp("(" + token + ")+", "gi");
function decodeComponents(components, split) {
  try {
    return [decodeURIComponent(components.join(""))];
  } catch (err) {
  }
  if (components.length === 1) {
    return components;
  }
  split = split || 1;
  var left = components.slice(0, split);
  var right = components.slice(split);
  return Array.prototype.concat.call([], decodeComponents(left), decodeComponents(right));
}
function decode(input) {
  try {
    return decodeURIComponent(input);
  } catch (err) {
    var tokens = input.match(singleMatcher) || [];
    for (var i2 = 1; i2 < tokens.length; i2++) {
      input = decodeComponents(tokens, i2).join("");
      tokens = input.match(singleMatcher) || [];
    }
    return input;
  }
}
function customDecodeURIComponent(input) {
  var replaceMap = {
    "%FE%FF": "��",
    "%FF%FE": "��"
  };
  var match = multiMatcher.exec(input);
  while (match) {
    try {
      replaceMap[match[0]] = decodeURIComponent(match[0]);
    } catch (err) {
      var result = decode(match[0]);
      if (result !== match[0]) {
        replaceMap[match[0]] = result;
      }
    }
    match = multiMatcher.exec(input);
  }
  replaceMap["%C2"] = "�";
  var entries = Object.keys(replaceMap);
  for (var i2 = 0; i2 < entries.length; i2++) {
    var key = entries[i2];
    input = input.replace(new RegExp(key, "g"), replaceMap[key]);
  }
  return input;
}
var decodeUriComponent = function(encodedURI) {
  if (typeof encodedURI !== "string") {
    throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof encodedURI + "`");
  }
  try {
    encodedURI = encodedURI.replace(/\+/g, " ");
    return decodeURIComponent(encodedURI);
  } catch (err) {
    return customDecodeURIComponent(encodedURI);
  }
};
var splitOnFirst = (string2, separator) => {
  if (!(typeof string2 === "string" && typeof separator === "string")) {
    throw new TypeError("Expected the arguments to be of type `string`");
  }
  if (separator === "") {
    return [string2];
  }
  const separatorIndex = string2.indexOf(separator);
  if (separatorIndex === -1) {
    return [string2];
  }
  return [
    string2.slice(0, separatorIndex),
    string2.slice(separatorIndex + separator.length)
  ];
};
var filterObj = function(obj, predicate) {
  var ret = {};
  var keys2 = Object.keys(obj);
  var isArr = Array.isArray(predicate);
  for (var i2 = 0; i2 < keys2.length; i2++) {
    var key = keys2[i2];
    var val = obj[key];
    if (isArr ? predicate.indexOf(key) !== -1 : predicate(key, val, obj)) {
      ret[key] = val;
    }
  }
  return ret;
};
(function(exports) {
  const strictUriEncode$1 = strictUriEncode;
  const decodeComponent = decodeUriComponent;
  const splitOnFirst$1 = splitOnFirst;
  const filterObject = filterObj;
  const isNullOrUndefined = (value) => value === null || value === void 0;
  const encodeFragmentIdentifier = Symbol("encodeFragmentIdentifier");
  function encoderForArrayFormat(options) {
    switch (options.arrayFormat) {
      case "index":
        return (key) => (result, value) => {
          const index = result.length;
          if (value === void 0 || options.skipNull && value === null || options.skipEmptyString && value === "") {
            return result;
          }
          if (value === null) {
            return [...result, [encode2(key, options), "[", index, "]"].join("")];
          }
          return [
            ...result,
            [encode2(key, options), "[", encode2(index, options), "]=", encode2(value, options)].join("")
          ];
        };
      case "bracket":
        return (key) => (result, value) => {
          if (value === void 0 || options.skipNull && value === null || options.skipEmptyString && value === "") {
            return result;
          }
          if (value === null) {
            return [...result, [encode2(key, options), "[]"].join("")];
          }
          return [...result, [encode2(key, options), "[]=", encode2(value, options)].join("")];
        };
      case "colon-list-separator":
        return (key) => (result, value) => {
          if (value === void 0 || options.skipNull && value === null || options.skipEmptyString && value === "") {
            return result;
          }
          if (value === null) {
            return [...result, [encode2(key, options), ":list="].join("")];
          }
          return [...result, [encode2(key, options), ":list=", encode2(value, options)].join("")];
        };
      case "comma":
      case "separator":
      case "bracket-separator": {
        const keyValueSep = options.arrayFormat === "bracket-separator" ? "[]=" : "=";
        return (key) => (result, value) => {
          if (value === void 0 || options.skipNull && value === null || options.skipEmptyString && value === "") {
            return result;
          }
          value = value === null ? "" : value;
          if (result.length === 0) {
            return [[encode2(key, options), keyValueSep, encode2(value, options)].join("")];
          }
          return [[result, encode2(value, options)].join(options.arrayFormatSeparator)];
        };
      }
      default:
        return (key) => (result, value) => {
          if (value === void 0 || options.skipNull && value === null || options.skipEmptyString && value === "") {
            return result;
          }
          if (value === null) {
            return [...result, encode2(key, options)];
          }
          return [...result, [encode2(key, options), "=", encode2(value, options)].join("")];
        };
    }
  }
  function parserForArrayFormat(options) {
    let result;
    switch (options.arrayFormat) {
      case "index":
        return (key, value, accumulator) => {
          result = /\[(\d*)\]$/.exec(key);
          key = key.replace(/\[\d*\]$/, "");
          if (!result) {
            accumulator[key] = value;
            return;
          }
          if (accumulator[key] === void 0) {
            accumulator[key] = {};
          }
          accumulator[key][result[1]] = value;
        };
      case "bracket":
        return (key, value, accumulator) => {
          result = /(\[\])$/.exec(key);
          key = key.replace(/\[\]$/, "");
          if (!result) {
            accumulator[key] = value;
            return;
          }
          if (accumulator[key] === void 0) {
            accumulator[key] = [value];
            return;
          }
          accumulator[key] = [].concat(accumulator[key], value);
        };
      case "colon-list-separator":
        return (key, value, accumulator) => {
          result = /(:list)$/.exec(key);
          key = key.replace(/:list$/, "");
          if (!result) {
            accumulator[key] = value;
            return;
          }
          if (accumulator[key] === void 0) {
            accumulator[key] = [value];
            return;
          }
          accumulator[key] = [].concat(accumulator[key], value);
        };
      case "comma":
      case "separator":
        return (key, value, accumulator) => {
          const isArray = typeof value === "string" && value.includes(options.arrayFormatSeparator);
          const isEncodedArray = typeof value === "string" && !isArray && decode2(value, options).includes(options.arrayFormatSeparator);
          value = isEncodedArray ? decode2(value, options) : value;
          const newValue = isArray || isEncodedArray ? value.split(options.arrayFormatSeparator).map((item) => decode2(item, options)) : value === null ? value : decode2(value, options);
          accumulator[key] = newValue;
        };
      case "bracket-separator":
        return (key, value, accumulator) => {
          const isArray = /(\[\])$/.test(key);
          key = key.replace(/\[\]$/, "");
          if (!isArray) {
            accumulator[key] = value ? decode2(value, options) : value;
            return;
          }
          const arrayValue = value === null ? [] : value.split(options.arrayFormatSeparator).map((item) => decode2(item, options));
          if (accumulator[key] === void 0) {
            accumulator[key] = arrayValue;
            return;
          }
          accumulator[key] = [].concat(accumulator[key], arrayValue);
        };
      default:
        return (key, value, accumulator) => {
          if (accumulator[key] === void 0) {
            accumulator[key] = value;
            return;
          }
          accumulator[key] = [].concat(accumulator[key], value);
        };
    }
  }
  function validateArrayFormatSeparator(value) {
    if (typeof value !== "string" || value.length !== 1) {
      throw new TypeError("arrayFormatSeparator must be single character string");
    }
  }
  function encode2(value, options) {
    if (options.encode) {
      return options.strict ? strictUriEncode$1(value) : encodeURIComponent(value);
    }
    return value;
  }
  function decode2(value, options) {
    if (options.decode) {
      return decodeComponent(value);
    }
    return value;
  }
  function keysSorter(input) {
    if (Array.isArray(input)) {
      return input.sort();
    }
    if (typeof input === "object") {
      return keysSorter(Object.keys(input)).sort((a3, b3) => Number(a3) - Number(b3)).map((key) => input[key]);
    }
    return input;
  }
  function removeHash(input) {
    const hashStart = input.indexOf("#");
    if (hashStart !== -1) {
      input = input.slice(0, hashStart);
    }
    return input;
  }
  function getHash(url) {
    let hash2 = "";
    const hashStart = url.indexOf("#");
    if (hashStart !== -1) {
      hash2 = url.slice(hashStart);
    }
    return hash2;
  }
  function extract(input) {
    input = removeHash(input);
    const queryStart = input.indexOf("?");
    if (queryStart === -1) {
      return "";
    }
    return input.slice(queryStart + 1);
  }
  function parseValue(value, options) {
    if (options.parseNumbers && !Number.isNaN(Number(value)) && (typeof value === "string" && value.trim() !== "")) {
      value = Number(value);
    } else if (options.parseBooleans && value !== null && (value.toLowerCase() === "true" || value.toLowerCase() === "false")) {
      value = value.toLowerCase() === "true";
    }
    return value;
  }
  function parse(query, options) {
    options = Object.assign({
      decode: true,
      sort: true,
      arrayFormat: "none",
      arrayFormatSeparator: ",",
      parseNumbers: false,
      parseBooleans: false
    }, options);
    validateArrayFormatSeparator(options.arrayFormatSeparator);
    const formatter = parserForArrayFormat(options);
    const ret = /* @__PURE__ */ Object.create(null);
    if (typeof query !== "string") {
      return ret;
    }
    query = query.trim().replace(/^[?#&]/, "");
    if (!query) {
      return ret;
    }
    for (const param of query.split("&")) {
      if (param === "") {
        continue;
      }
      let [key, value] = splitOnFirst$1(options.decode ? param.replace(/\+/g, " ") : param, "=");
      value = value === void 0 ? null : ["comma", "separator", "bracket-separator"].includes(options.arrayFormat) ? value : decode2(value, options);
      formatter(decode2(key, options), value, ret);
    }
    for (const key of Object.keys(ret)) {
      const value = ret[key];
      if (typeof value === "object" && value !== null) {
        for (const k2 of Object.keys(value)) {
          value[k2] = parseValue(value[k2], options);
        }
      } else {
        ret[key] = parseValue(value, options);
      }
    }
    if (options.sort === false) {
      return ret;
    }
    return (options.sort === true ? Object.keys(ret).sort() : Object.keys(ret).sort(options.sort)).reduce((result, key) => {
      const value = ret[key];
      if (Boolean(value) && typeof value === "object" && !Array.isArray(value)) {
        result[key] = keysSorter(value);
      } else {
        result[key] = value;
      }
      return result;
    }, /* @__PURE__ */ Object.create(null));
  }
  exports.extract = extract;
  exports.parse = parse;
  exports.stringify = (object, options) => {
    if (!object) {
      return "";
    }
    options = Object.assign({
      encode: true,
      strict: true,
      arrayFormat: "none",
      arrayFormatSeparator: ","
    }, options);
    validateArrayFormatSeparator(options.arrayFormatSeparator);
    const shouldFilter = (key) => options.skipNull && isNullOrUndefined(object[key]) || options.skipEmptyString && object[key] === "";
    const formatter = encoderForArrayFormat(options);
    const objectCopy = {};
    for (const key of Object.keys(object)) {
      if (!shouldFilter(key)) {
        objectCopy[key] = object[key];
      }
    }
    const keys2 = Object.keys(objectCopy);
    if (options.sort !== false) {
      keys2.sort(options.sort);
    }
    return keys2.map((key) => {
      const value = object[key];
      if (value === void 0) {
        return "";
      }
      if (value === null) {
        return encode2(key, options);
      }
      if (Array.isArray(value)) {
        if (value.length === 0 && options.arrayFormat === "bracket-separator") {
          return encode2(key, options) + "[]";
        }
        return value.reduce(formatter(key), []).join("&");
      }
      return encode2(key, options) + "=" + encode2(value, options);
    }).filter((x2) => x2.length > 0).join("&");
  };
  exports.parseUrl = (url, options) => {
    options = Object.assign({
      decode: true
    }, options);
    const [url_, hash2] = splitOnFirst$1(url, "#");
    return Object.assign(
      {
        url: url_.split("?")[0] || "",
        query: parse(extract(url), options)
      },
      options && options.parseFragmentIdentifier && hash2 ? { fragmentIdentifier: decode2(hash2, options) } : {}
    );
  };
  exports.stringifyUrl = (object, options) => {
    options = Object.assign({
      encode: true,
      strict: true,
      [encodeFragmentIdentifier]: true
    }, options);
    const url = removeHash(object.url).split("?")[0] || "";
    const queryFromUrl = exports.extract(object.url);
    const parsedQueryFromUrl = exports.parse(queryFromUrl, { sort: false });
    const query = Object.assign(parsedQueryFromUrl, object.query);
    let queryString2 = exports.stringify(query, options);
    if (queryString2) {
      queryString2 = `?${queryString2}`;
    }
    let hash2 = getHash(object.url);
    if (object.fragmentIdentifier) {
      hash2 = `#${options[encodeFragmentIdentifier] ? encode2(object.fragmentIdentifier, options) : object.fragmentIdentifier}`;
    }
    return `${url}${queryString2}${hash2}`;
  };
  exports.pick = (input, filter, options) => {
    options = Object.assign({
      parseFragmentIdentifier: true,
      [encodeFragmentIdentifier]: false
    }, options);
    const { url, query, fragmentIdentifier } = exports.parseUrl(input, options);
    return exports.stringifyUrl({
      url,
      query: filterObject(query, filter),
      fragmentIdentifier
    }, options);
  };
  exports.exclude = (input, filter, options) => {
    const exclusionFilter = Array.isArray(filter) ? (key) => !filter.includes(key) : (key, value) => !filter(key, value);
    return exports.pick(input, exclusionFilter, options);
  };
})(queryString);
const C = { waku: { publish: "waku_publish", batchPublish: "waku_batchPublish", subscribe: "waku_subscribe", batchSubscribe: "waku_batchSubscribe", subscription: "waku_subscription", unsubscribe: "waku_unsubscribe", batchUnsubscribe: "waku_batchUnsubscribe", batchFetchMessages: "waku_batchFetchMessages" }, irn: { publish: "irn_publish", batchPublish: "irn_batchPublish", subscribe: "irn_subscribe", batchSubscribe: "irn_batchSubscribe", subscription: "irn_subscription", unsubscribe: "irn_unsubscribe", batchUnsubscribe: "irn_batchUnsubscribe", batchFetchMessages: "irn_batchFetchMessages" }, iridium: { publish: "iridium_publish", batchPublish: "iridium_batchPublish", subscribe: "iridium_subscribe", batchSubscribe: "iridium_batchSubscribe", subscription: "iridium_subscription", unsubscribe: "iridium_unsubscribe", batchUnsubscribe: "iridium_batchUnsubscribe", batchFetchMessages: "iridium_batchFetchMessages" } };
const K$1 = ":";
function ve(e) {
  const [n2, t] = e.split(K$1);
  return { namespace: n2, reference: t };
}
function Un(e, n2 = []) {
  const t = [];
  return Object.keys(e).forEach((r) => {
    if (n2.length && !n2.includes(r))
      return;
    const o = e[r];
    t.push(...o.accounts);
  }), t;
}
function L$2(e, n2) {
  return e.includes(":") ? [e] : n2.chains || [];
}
const J$1 = "base10", p$3 = "base16", F$2 = "base64pad", H$1 = "utf8", Q$3 = 0, _$3 = 1, Dn = 0, Te = 1, Z$1 = 12, X$1 = 32;
function kn() {
  const e = x25519.generateKeyPair();
  return { privateKey: toString(e.secretKey, p$3), publicKey: toString(e.publicKey, p$3) };
}
function Vn$1() {
  const e = random.randomBytes(X$1);
  return toString(e, p$3);
}
function Mn(e, n2) {
  const t = x25519.sharedKey(fromString(e, p$3), fromString(n2, p$3), true), r = new HKDF_1(sha256.SHA256, t).expand(X$1);
  return toString(r, p$3);
}
function Kn(e) {
  const n2 = sha256.hash(fromString(e, p$3));
  return toString(n2, p$3);
}
function Ln(e) {
  const n2 = sha256.hash(fromString(e, H$1));
  return toString(n2, p$3);
}
function Pe(e) {
  return fromString(`${e}`, J$1);
}
function j$2(e) {
  return Number(toString(e, J$1));
}
function xn(e) {
  const n2 = Pe(typeof e.type < "u" ? e.type : Q$3);
  if (j$2(n2) === _$3 && typeof e.senderPublicKey > "u")
    throw new Error("Missing sender public key for type 1 envelope");
  const t = typeof e.senderPublicKey < "u" ? fromString(e.senderPublicKey, p$3) : void 0, r = typeof e.iv < "u" ? fromString(e.iv, p$3) : random.randomBytes(Z$1), o = new chacha20poly1305.ChaCha20Poly1305(fromString(e.symKey, p$3)).seal(r, fromString(e.message, H$1));
  return Re({ type: n2, sealed: o, iv: r, senderPublicKey: t });
}
function Fn(e) {
  const n2 = new chacha20poly1305.ChaCha20Poly1305(fromString(e.symKey, p$3)), { sealed: t, iv: r } = ee$1(e.encoded), o = n2.open(r, t);
  if (o === null)
    throw new Error("Failed to decrypt");
  return toString(o, H$1);
}
function Re(e) {
  if (j$2(e.type) === _$3) {
    if (typeof e.senderPublicKey > "u")
      throw new Error("Missing sender public key for type 1 envelope");
    return toString(concat([e.type, e.senderPublicKey, e.iv, e.sealed]), F$2);
  }
  return toString(concat([e.type, e.iv, e.sealed]), F$2);
}
function ee$1(e) {
  const n2 = fromString(e, F$2), t = n2.slice(Dn, Te), r = Te;
  if (j$2(t) === _$3) {
    const d2 = r + X$1, l2 = d2 + Z$1, c2 = n2.slice(r, d2), u3 = n2.slice(d2, l2), a3 = n2.slice(l2);
    return { type: t, sealed: a3, iv: u3, senderPublicKey: c2 };
  }
  const o = r + Z$1, s = n2.slice(r, o), i2 = n2.slice(o);
  return { type: t, sealed: i2, iv: s };
}
function Hn(e, n2) {
  const t = ee$1(e);
  return Ae({ type: j$2(t.type), senderPublicKey: typeof t.senderPublicKey < "u" ? toString(t.senderPublicKey, p$3) : void 0, receiverPublicKey: n2 == null ? void 0 : n2.receiverPublicKey });
}
function Ae(e) {
  const n2 = (e == null ? void 0 : e.type) || Q$3;
  if (n2 === _$3) {
    if (typeof (e == null ? void 0 : e.senderPublicKey) > "u")
      throw new Error("missing sender public key");
    if (typeof (e == null ? void 0 : e.receiverPublicKey) > "u")
      throw new Error("missing receiver public key");
  }
  return { type: n2, senderPublicKey: e == null ? void 0 : e.senderPublicKey, receiverPublicKey: e == null ? void 0 : e.receiverPublicKey };
}
function qn(e) {
  return e.type === _$3 && typeof e.senderPublicKey == "string" && typeof e.receiverPublicKey == "string";
}
var Bn = Object.defineProperty, Ue$1 = Object.getOwnPropertySymbols, Gn = Object.prototype.hasOwnProperty, Wn = Object.prototype.propertyIsEnumerable, _e = (e, n2, t) => n2 in e ? Bn(e, n2, { enumerable: true, configurable: true, writable: true, value: t }) : e[n2] = t, $e$1 = (e, n2) => {
  for (var t in n2 || (n2 = {}))
    Gn.call(n2, t) && _e(e, t, n2[t]);
  if (Ue$1)
    for (var t of Ue$1(n2))
      Wn.call(n2, t) && _e(e, t, n2[t]);
  return e;
};
const Ce = "ReactNative", m$1 = { reactNative: "react-native", node: "node", browser: "browser", unknown: "unknown" }, De$1 = "js";
function te$1() {
  return typeof process$1 < "u" && typeof process$1.versions < "u" && typeof process$1.versions.node < "u";
}
function $$2() {
  return !getDocument_1() && !!getNavigator_1() && navigator.product === Ce;
}
function D$4() {
  return !te$1() && !!getNavigator_1() && !!getDocument_1();
}
function R$2() {
  return $$2() ? m$1.reactNative : te$1() ? m$1.node : D$4() ? m$1.browser : m$1.unknown;
}
function Jn() {
  var e;
  try {
    return $$2() && typeof global < "u" && typeof (global == null ? void 0 : global.Application) < "u" ? (e = global.Application) == null ? void 0 : e.applicationId : void 0;
  } catch {
    return;
  }
}
function ke$1(e, n2) {
  let t = queryString.parse(e);
  return t = $e$1($e$1({}, t), n2), e = queryString.stringify(t), e;
}
function Qn() {
  return getWindowMetadata_1() || { name: "", description: "", url: "", icons: [""] };
}
function Ve$1() {
  if (R$2() === m$1.reactNative && typeof global < "u" && typeof (global == null ? void 0 : global.Platform) < "u") {
    const { OS: t, Version: r } = global.Platform;
    return [t, r].join("-");
  }
  const e = detect();
  if (e === null)
    return "unknown";
  const n2 = e.os ? e.os.replace(" ", "").toLowerCase() : "unknown";
  return e.type === "browser" ? [n2, e.name, e.version].join("-") : [n2, e.version].join("-");
}
function Me$1() {
  var e;
  const n2 = R$2();
  return n2 === m$1.browser ? [n2, ((e = getLocation_1()) == null ? void 0 : e.host) || "unknown"].join(":") : n2;
}
function Ke$1(e, n2, t) {
  const r = Ve$1(), o = Me$1();
  return [[e, n2].join("-"), [De$1, t].join("-"), r, o].join("/");
}
function Xn({ protocol: e, version: n2, relayUrl: t, sdkVersion: r, auth: o, projectId: s, useOnCloseEvent: i2, bundleId: d2 }) {
  const l2 = t.split("?"), c2 = Ke$1(e, n2, r), u3 = { auth: o, ua: c2, projectId: s, useOnCloseEvent: i2 || void 0, origin: d2 || void 0 }, a3 = ke$1(l2[1] || "", u3);
  return l2[0] + "?" + a3;
}
function O$3(e, n2) {
  return e.filter((t) => n2.includes(t)).length === e.length;
}
function rt$1(e) {
  return Object.fromEntries(e.entries());
}
function ot$1(e) {
  return new Map(Object.entries(e));
}
function at$1(e = cjs$4.FIVE_MINUTES, n2) {
  const t = cjs$4.toMiliseconds(e || cjs$4.FIVE_MINUTES);
  let r, o, s;
  return { resolve: (i2) => {
    s && r && (clearTimeout(s), r(i2));
  }, reject: (i2) => {
    s && o && (clearTimeout(s), o(i2));
  }, done: () => new Promise((i2, d2) => {
    s = setTimeout(() => {
      d2(new Error(n2));
    }, t), r = i2, o = d2;
  }) };
}
function ut$1(e, n2, t) {
  return new Promise(async (r, o) => {
    const s = setTimeout(() => o(new Error(t)), n2);
    try {
      const i2 = await e;
      r(i2);
    } catch (i2) {
      o(i2);
    }
    clearTimeout(s);
  });
}
function re(e, n2) {
  if (typeof n2 == "string" && n2.startsWith(`${e}:`))
    return n2;
  if (e.toLowerCase() === "topic") {
    if (typeof n2 != "string")
      throw new Error('Value must be "string" for expirer target type: topic');
    return `topic:${n2}`;
  } else if (e.toLowerCase() === "id") {
    if (typeof n2 != "number")
      throw new Error('Value must be "number" for expirer target type: id');
    return `id:${n2}`;
  }
  throw new Error(`Unknown expirer target type: ${e}`);
}
function lt$1(e) {
  return re("topic", e);
}
function dt$1(e) {
  return re("id", e);
}
function ft$2(e) {
  const [n2, t] = e.split(":"), r = { id: void 0, topic: void 0 };
  if (n2 === "topic" && typeof t == "string")
    r.topic = t;
  else if (n2 === "id" && Number.isInteger(Number(t)))
    r.id = Number(t);
  else
    throw new Error(`Invalid target, expected id:number or topic:string, got ${n2}:${t}`);
  return r;
}
function pt$1(e, n2) {
  return cjs$4.fromMiliseconds(Date.now() + cjs$4.toMiliseconds(e));
}
function mt$1(e) {
  return Date.now() >= cjs$4.toMiliseconds(e);
}
function yt$1(e, n2) {
  return `${e}${n2 ? `:${n2}` : ""}`;
}
function S$3(e = [], n2 = []) {
  return [.../* @__PURE__ */ new Set([...e, ...n2])];
}
async function gt$1({ id: e, topic: n2, wcDeepLink: t }) {
  try {
    if (!t)
      return;
    const r = typeof t == "string" ? JSON.parse(t) : t;
    let o = r == null ? void 0 : r.href;
    if (typeof o != "string")
      return;
    o.endsWith("/") && (o = o.slice(0, -1));
    const s = `${o}/wc?requestId=${e}&sessionTopic=${n2}`, i2 = R$2();
    i2 === m$1.browser ? s.startsWith("https://") ? window.open(s, "_blank", "noreferrer noopener") : window.open(s, "_self", "noreferrer noopener") : i2 === m$1.reactNative && typeof (global == null ? void 0 : global.Linking) < "u" && await global.Linking.openURL(s);
  } catch (r) {
    console.error(r);
  }
}
async function ht$1(e, n2) {
  try {
    return await e.getItem(n2) || (D$4() ? localStorage.getItem(n2) : void 0);
  } catch (t) {
    console.error(t);
  }
}
const He$1 = "irn";
function vt$1(e) {
  return (e == null ? void 0 : e.relay) || { protocol: He$1 };
}
function Et$1(e) {
  const n2 = C[e];
  if (typeof n2 > "u")
    throw new Error(`Relay Protocol not supported: ${e}`);
  return n2;
}
var bt$1 = Object.defineProperty, Nt$1 = Object.defineProperties, Ot$1 = Object.getOwnPropertyDescriptors, qe$1 = Object.getOwnPropertySymbols, St$1 = Object.prototype.hasOwnProperty, wt$1 = Object.prototype.propertyIsEnumerable, Be$1 = (e, n2, t) => n2 in e ? bt$1(e, n2, { enumerable: true, configurable: true, writable: true, value: t }) : e[n2] = t, It$1 = (e, n2) => {
  for (var t in n2 || (n2 = {}))
    St$1.call(n2, t) && Be$1(e, t, n2[t]);
  if (qe$1)
    for (var t of qe$1(n2))
      wt$1.call(n2, t) && Be$1(e, t, n2[t]);
  return e;
}, Tt$1 = (e, n2) => Nt$1(e, Ot$1(n2));
function Ge$1(e, n2 = "-") {
  const t = {}, r = "relay" + n2;
  return Object.keys(e).forEach((o) => {
    if (o.startsWith(r)) {
      const s = o.replace(r, ""), i2 = e[o];
      t[s] = i2;
    }
  }), t;
}
function Pt$1(e) {
  e = e.includes("wc://") ? e.replace("wc://", "") : e, e = e.includes("wc:") ? e.replace("wc:", "") : e;
  const n2 = e.indexOf(":"), t = e.indexOf("?") !== -1 ? e.indexOf("?") : void 0, r = e.substring(0, n2), o = e.substring(n2 + 1, t).split("@"), s = typeof t < "u" ? e.substring(t) : "", i2 = queryString.parse(s);
  return { protocol: r, topic: We$1(o[0]), version: parseInt(o[1], 10), symKey: i2.symKey, relay: Ge$1(i2), expiryTimestamp: i2.expiryTimestamp ? parseInt(i2.expiryTimestamp, 10) : void 0 };
}
function We$1(e) {
  return e.startsWith("//") ? e.substring(2) : e;
}
function ze(e, n2 = "-") {
  const t = "relay", r = {};
  return Object.keys(e).forEach((o) => {
    const s = t + n2 + o;
    e[o] && (r[s] = e[o]);
  }), r;
}
function Rt$1(e) {
  return `${e.protocol}:${e.topic}@${e.version}?` + queryString.stringify(Tt$1(It$1({ symKey: e.symKey }, ze(e.relay)), { expiryTimestamp: e.expiryTimestamp }));
}
function A(e) {
  const n2 = [];
  return e.forEach((t) => {
    const [r, o] = t.split(":");
    n2.push(`${r}:${o}`);
  }), n2;
}
function Qe$1(e) {
  const n2 = [];
  return Object.values(e).forEach((t) => {
    n2.push(...A(t.accounts));
  }), n2;
}
function Ze$1(e, n2) {
  const t = [];
  return Object.values(e).forEach((r) => {
    A(r.accounts).includes(n2) && t.push(...r.methods);
  }), t;
}
function Xe$1(e, n2) {
  const t = [];
  return Object.values(e).forEach((r) => {
    A(r.accounts).includes(n2) && t.push(...r.events);
  }), t;
}
function oe$1(e) {
  return e.includes(":");
}
function en(e) {
  return oe$1(e) ? e.split(":")[0] : e;
}
const nn = { INVALID_METHOD: { message: "Invalid method.", code: 1001 }, INVALID_EVENT: { message: "Invalid event.", code: 1002 }, INVALID_UPDATE_REQUEST: { message: "Invalid update request.", code: 1003 }, INVALID_EXTEND_REQUEST: { message: "Invalid extend request.", code: 1004 }, INVALID_SESSION_SETTLE_REQUEST: { message: "Invalid session settle request.", code: 1005 }, UNAUTHORIZED_METHOD: { message: "Unauthorized method.", code: 3001 }, UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 }, UNAUTHORIZED_UPDATE_REQUEST: { message: "Unauthorized update request.", code: 3003 }, UNAUTHORIZED_EXTEND_REQUEST: { message: "Unauthorized extend request.", code: 3004 }, USER_REJECTED: { message: "User rejected.", code: 5e3 }, USER_REJECTED_CHAINS: { message: "User rejected chains.", code: 5001 }, USER_REJECTED_METHODS: { message: "User rejected methods.", code: 5002 }, USER_REJECTED_EVENTS: { message: "User rejected events.", code: 5003 }, UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 }, UNSUPPORTED_METHODS: { message: "Unsupported methods.", code: 5101 }, UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 }, UNSUPPORTED_ACCOUNTS: { message: "Unsupported accounts.", code: 5103 }, UNSUPPORTED_NAMESPACE_KEY: { message: "Unsupported namespace key.", code: 5104 }, USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 }, SESSION_SETTLEMENT_FAILED: { message: "Session settlement failed.", code: 7e3 }, WC_METHOD_UNSUPPORTED: { message: "Unsupported wc_ method.", code: 10001 } }, tn = { NOT_INITIALIZED: { message: "Not initialized.", code: 1 }, NO_MATCHING_KEY: { message: "No matching key.", code: 2 }, RESTORE_WILL_OVERRIDE: { message: "Restore will override.", code: 3 }, RESUBSCRIBED: { message: "Resubscribed.", code: 4 }, MISSING_OR_INVALID: { message: "Missing or invalid.", code: 5 }, EXPIRED: { message: "Expired.", code: 6 }, UNKNOWN_TYPE: { message: "Unknown type.", code: 7 }, MISMATCHED_TOPIC: { message: "Mismatched topic.", code: 8 }, NON_CONFORMING_NAMESPACES: { message: "Non conforming namespaces.", code: 9 } };
function N$2(e, n2) {
  const { message: t, code: r } = tn[e];
  return { message: n2 ? `${t} ${n2}` : t, code: r };
}
function U$2(e, n2) {
  const { message: t, code: r } = nn[e];
  return { message: n2 ? `${t} ${n2}` : t, code: r };
}
function k$2(e, n2) {
  return Array.isArray(e) ? true : false;
}
function B$1(e) {
  return Object.getPrototypeOf(e) === Object.prototype && Object.keys(e).length;
}
function w$4(e) {
  return typeof e > "u";
}
function g$5(e, n2) {
  return n2 && w$4(e) ? true : typeof e == "string" && !!e.trim().length;
}
function G$2(e, n2) {
  return typeof e == "number" && !isNaN(e);
}
function Mt$1(e, n2) {
  const { requiredNamespaces: t } = n2, r = Object.keys(e.namespaces), o = Object.keys(t);
  let s = true;
  return O$3(o, r) ? (r.forEach((i2) => {
    const { accounts: d2, methods: l2, events: c2 } = e.namespaces[i2], u3 = A(d2), a3 = t[i2];
    (!O$3(L$2(i2, a3), u3) || !O$3(a3.methods, l2) || !O$3(a3.events, c2)) && (s = false);
  }), s) : false;
}
function V$1(e) {
  return g$5(e, false) && e.includes(":") ? e.split(":").length === 2 : false;
}
function rn(e) {
  if (g$5(e, false) && e.includes(":")) {
    const n2 = e.split(":");
    if (n2.length === 3) {
      const t = n2[0] + ":" + n2[1];
      return !!n2[2] && V$1(t);
    }
  }
  return false;
}
function Kt$1(e) {
  if (g$5(e, false))
    try {
      return typeof new URL(e) < "u";
    } catch {
      return false;
    }
  return false;
}
function Lt$1(e) {
  var n2;
  return (n2 = e == null ? void 0 : e.proposer) == null ? void 0 : n2.publicKey;
}
function xt$1(e) {
  return e == null ? void 0 : e.topic;
}
function Ft$1(e, n2) {
  let t = null;
  return g$5(e == null ? void 0 : e.publicKey, false) || (t = N$2("MISSING_OR_INVALID", `${n2} controller public key should be a string`)), t;
}
function ie(e) {
  let n2 = true;
  return k$2(e) ? e.length && (n2 = e.every((t) => g$5(t, false))) : n2 = false, n2;
}
function on(e, n2, t) {
  let r = null;
  return k$2(n2) && n2.length ? n2.forEach((o) => {
    r || V$1(o) || (r = U$2("UNSUPPORTED_CHAINS", `${t}, chain ${o} should be a string and conform to "namespace:chainId" format`));
  }) : V$1(e) || (r = U$2("UNSUPPORTED_CHAINS", `${t}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)), r;
}
function sn(e, n2, t) {
  let r = null;
  return Object.entries(e).forEach(([o, s]) => {
    if (r)
      return;
    const i2 = on(o, L$2(o, s), `${n2} ${t}`);
    i2 && (r = i2);
  }), r;
}
function cn(e, n2) {
  let t = null;
  return k$2(e) ? e.forEach((r) => {
    t || rn(r) || (t = U$2("UNSUPPORTED_ACCOUNTS", `${n2}, account ${r} should be a string and conform to "namespace:chainId:address" format`));
  }) : t = U$2("UNSUPPORTED_ACCOUNTS", `${n2}, accounts should be an array of strings conforming to "namespace:chainId:address" format`), t;
}
function an(e, n2) {
  let t = null;
  return Object.values(e).forEach((r) => {
    if (t)
      return;
    const o = cn(r == null ? void 0 : r.accounts, `${n2} namespace`);
    o && (t = o);
  }), t;
}
function un(e, n2) {
  let t = null;
  return ie(e == null ? void 0 : e.methods) ? ie(e == null ? void 0 : e.events) || (t = U$2("UNSUPPORTED_EVENTS", `${n2}, events should be an array of strings or empty array for no events`)) : t = U$2("UNSUPPORTED_METHODS", `${n2}, methods should be an array of strings or empty array for no methods`), t;
}
function ce$2(e, n2) {
  let t = null;
  return Object.values(e).forEach((r) => {
    if (t)
      return;
    const o = un(r, `${n2}, namespace`);
    o && (t = o);
  }), t;
}
function Ht$1(e, n2, t) {
  let r = null;
  if (e && B$1(e)) {
    const o = ce$2(e, n2);
    o && (r = o);
    const s = sn(e, n2, t);
    s && (r = s);
  } else
    r = N$2("MISSING_OR_INVALID", `${n2}, ${t} should be an object with data`);
  return r;
}
function ln(e, n2) {
  let t = null;
  if (e && B$1(e)) {
    const r = ce$2(e, n2);
    r && (t = r);
    const o = an(e, n2);
    o && (t = o);
  } else
    t = N$2("MISSING_OR_INVALID", `${n2}, namespaces should be an object with data`);
  return t;
}
function dn(e) {
  return g$5(e.protocol, true);
}
function qt$1(e, n2) {
  let t = false;
  return !e ? t = true : e && k$2(e) && e.length && e.forEach((r) => {
    t = dn(r);
  }), t;
}
function Bt$1(e) {
  return typeof e == "number";
}
function Gt$1(e) {
  return typeof e < "u" && typeof e !== null;
}
function Wt(e) {
  return !(!e || typeof e != "object" || !e.code || !G$2(e.code) || !e.message || !g$5(e.message, false));
}
function zt$1(e) {
  return !(w$4(e) || !g$5(e.method, false));
}
function Yt$1(e) {
  return !(w$4(e) || w$4(e.result) && w$4(e.error) || !G$2(e.id) || !g$5(e.jsonrpc, false));
}
function Jt$1(e) {
  return !(w$4(e) || !g$5(e.name, false));
}
function Qt(e, n2) {
  return !(!V$1(n2) || !Qe$1(e).includes(n2));
}
function Zt(e, n2, t) {
  return g$5(t, false) ? Ze$1(e, n2).includes(t) : false;
}
function Xt(e, n2, t) {
  return g$5(t, false) ? Xe$1(e, n2).includes(t) : false;
}
function fn(e, n2, t) {
  let r = null;
  const o = er$1(e), s = nr$1(n2), i2 = Object.keys(o), d2 = Object.keys(s), l2 = pn(Object.keys(e)), c2 = pn(Object.keys(n2)), u3 = l2.filter((a3) => !c2.includes(a3));
  return u3.length && (r = N$2("NON_CONFORMING_NAMESPACES", `${t} namespaces keys don't satisfy requiredNamespaces.
      Required: ${u3.toString()}
      Received: ${Object.keys(n2).toString()}`)), O$3(i2, d2) || (r = N$2("NON_CONFORMING_NAMESPACES", `${t} namespaces chains don't satisfy required namespaces.
      Required: ${i2.toString()}
      Approved: ${d2.toString()}`)), Object.keys(n2).forEach((a3) => {
    if (!a3.includes(":") || r)
      return;
    const b3 = A(n2[a3].accounts);
    b3.includes(a3) || (r = N$2("NON_CONFORMING_NAMESPACES", `${t} namespaces accounts don't satisfy namespace accounts for ${a3}
        Required: ${a3}
        Approved: ${b3.toString()}`));
  }), i2.forEach((a3) => {
    r || (O$3(o[a3].methods, s[a3].methods) ? O$3(o[a3].events, s[a3].events) || (r = N$2("NON_CONFORMING_NAMESPACES", `${t} namespaces events don't satisfy namespace events for ${a3}`)) : r = N$2("NON_CONFORMING_NAMESPACES", `${t} namespaces methods don't satisfy namespace methods for ${a3}`));
  }), r;
}
function er$1(e) {
  const n2 = {};
  return Object.keys(e).forEach((t) => {
    var r;
    t.includes(":") ? n2[t] = e[t] : (r = e[t].chains) == null || r.forEach((o) => {
      n2[o] = { methods: e[t].methods, events: e[t].events };
    });
  }), n2;
}
function pn(e) {
  return [...new Set(e.map((n2) => n2.includes(":") ? n2.split(":")[0] : n2))];
}
function nr$1(e) {
  const n2 = {};
  return Object.keys(e).forEach((t) => {
    if (t.includes(":"))
      n2[t] = e[t];
    else {
      const r = A(e[t].accounts);
      r == null ? void 0 : r.forEach((o) => {
        n2[o] = { accounts: e[t].accounts.filter((s) => s.includes(`${o}:`)), methods: e[t].methods, events: e[t].events };
      });
    }
  }), n2;
}
function tr$1(e, n2) {
  return G$2(e) && e <= n2.max && e >= n2.min;
}
function rr$1() {
  const e = R$2();
  return new Promise((n2) => {
    switch (e) {
      case m$1.browser:
        n2(mn());
        break;
      case m$1.reactNative:
        n2(yn());
        break;
      case m$1.node:
        n2(gn());
        break;
      default:
        n2(true);
    }
  });
}
function mn() {
  return D$4() && (navigator == null ? void 0 : navigator.onLine);
}
async function yn() {
  if ($$2() && typeof global < "u" && global != null && global.NetInfo) {
    const e = await (global == null ? void 0 : global.NetInfo.fetch());
    return e == null ? void 0 : e.isConnected;
  }
  return true;
}
function gn() {
  return true;
}
function or$1(e) {
  switch (R$2()) {
    case m$1.browser:
      hn(e);
      break;
    case m$1.reactNative:
      vn(e);
      break;
  }
}
function hn(e) {
  !$$2() && D$4() && (window.addEventListener("online", () => e(true)), window.addEventListener("offline", () => e(false)));
}
function vn(e) {
  var _a;
  $$2() && typeof global < "u" && global != null && global.NetInfo && ((_a = global) == null ? void 0 : _a.NetInfo.addEventListener((n2) => e(n2 == null ? void 0 : n2.isConnected)));
}
const ae$1 = {};
let sr$1 = class sr {
  static get(n2) {
    return ae$1[n2];
  }
  static set(n2, t) {
    ae$1[n2] = t;
  }
  static delete(n2) {
    delete ae$1[n2];
  }
};
const suspectProtoRx = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/;
const suspectConstructorRx = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
const JsonSigRx = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function jsonParseTransform(key, value) {
  if (key === "__proto__" || key === "constructor" && value && typeof value === "object" && "prototype" in value) {
    warnKeyDropped(key);
    return;
  }
  return value;
}
function warnKeyDropped(key) {
  console.warn(`[destr] Dropping "${key}" key to prevent prototype pollution.`);
}
function destr(value, options = {}) {
  if (typeof value !== "string") {
    return value;
  }
  const _value = value.trim();
  if (
    // eslint-disable-next-line unicorn/prefer-at
    value[0] === '"' && value.endsWith('"') && !value.includes("\\")
  ) {
    return _value.slice(1, -1);
  }
  if (_value.length <= 9) {
    const _lval = _value.toLowerCase();
    if (_lval === "true") {
      return true;
    }
    if (_lval === "false") {
      return false;
    }
    if (_lval === "undefined") {
      return void 0;
    }
    if (_lval === "null") {
      return null;
    }
    if (_lval === "nan") {
      return Number.NaN;
    }
    if (_lval === "infinity") {
      return Number.POSITIVE_INFINITY;
    }
    if (_lval === "-infinity") {
      return Number.NEGATIVE_INFINITY;
    }
  }
  if (!JsonSigRx.test(value)) {
    if (options.strict) {
      throw new SyntaxError("[destr] Invalid JSON");
    }
    return value;
  }
  try {
    if (suspectProtoRx.test(value) || suspectConstructorRx.test(value)) {
      if (options.strict) {
        throw new Error("[destr] Possible prototype pollution");
      }
      return JSON.parse(value, jsonParseTransform);
    }
    return JSON.parse(value);
  } catch (error) {
    if (options.strict) {
      throw error;
    }
    return value;
  }
}
function wrapToPromise(value) {
  if (!value || typeof value.then !== "function") {
    return Promise.resolve(value);
  }
  return value;
}
function asyncCall(function_, ...arguments_) {
  try {
    return wrapToPromise(function_(...arguments_));
  } catch (error) {
    return Promise.reject(error);
  }
}
function isPrimitive(value) {
  const type = typeof value;
  return value === null || type !== "object" && type !== "function";
}
function isPureObject(value) {
  const proto = Object.getPrototypeOf(value);
  return !proto || proto.isPrototypeOf(Object);
}
function stringify(value) {
  if (isPrimitive(value)) {
    return String(value);
  }
  if (isPureObject(value) || Array.isArray(value)) {
    return JSON.stringify(value);
  }
  if (typeof value.toJSON === "function") {
    return stringify(value.toJSON());
  }
  throw new Error("[unstorage] Cannot stringify value!");
}
function checkBufferSupport() {
  if (typeof Buffer === void 0) {
    throw new TypeError("[unstorage] Buffer is not supported!");
  }
}
const BASE64_PREFIX = "base64:";
function serializeRaw(value) {
  if (typeof value === "string") {
    return value;
  }
  checkBufferSupport();
  const base642 = Buffer.from(value).toString("base64");
  return BASE64_PREFIX + base642;
}
function deserializeRaw(value) {
  if (typeof value !== "string") {
    return value;
  }
  if (!value.startsWith(BASE64_PREFIX)) {
    return value;
  }
  checkBufferSupport();
  return Buffer.from(value.slice(BASE64_PREFIX.length), "base64");
}
function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "");
}
function joinKeys(...keys2) {
  return normalizeKey(keys2.join(":"));
}
function normalizeBaseKey(base3) {
  base3 = normalizeKey(base3);
  return base3 ? base3 + ":" : "";
}
function defineDriver(factory) {
  return factory;
}
const DRIVER_NAME = "memory";
const memory = defineDriver(() => {
  const data = /* @__PURE__ */ new Map();
  return {
    name: DRIVER_NAME,
    options: {},
    hasItem(key) {
      return data.has(key);
    },
    getItem(key) {
      return data.get(key) ?? null;
    },
    getItemRaw(key) {
      return data.get(key) ?? null;
    },
    setItem(key, value) {
      data.set(key, value);
    },
    setItemRaw(key, value) {
      data.set(key, value);
    },
    removeItem(key) {
      data.delete(key);
    },
    getKeys() {
      return Array.from(data.keys());
    },
    clear() {
      data.clear();
    },
    dispose() {
      data.clear();
    }
  };
});
function createStorage(options = {}) {
  const context = {
    mounts: { "": options.driver || memory() },
    mountpoints: [""],
    watching: false,
    watchListeners: [],
    unwatch: {}
  };
  const getMount = (key) => {
    for (const base3 of context.mountpoints) {
      if (key.startsWith(base3)) {
        return {
          base: base3,
          relativeKey: key.slice(base3.length),
          driver: context.mounts[base3]
        };
      }
    }
    return {
      base: "",
      relativeKey: key,
      driver: context.mounts[""]
    };
  };
  const getMounts = (base3, includeParent) => {
    return context.mountpoints.filter(
      (mountpoint) => mountpoint.startsWith(base3) || includeParent && base3.startsWith(mountpoint)
    ).map((mountpoint) => ({
      relativeBase: base3.length > mountpoint.length ? base3.slice(mountpoint.length) : void 0,
      mountpoint,
      driver: context.mounts[mountpoint]
    }));
  };
  const onChange = (event, key) => {
    if (!context.watching) {
      return;
    }
    key = normalizeKey(key);
    for (const listener of context.watchListeners) {
      listener(event, key);
    }
  };
  const startWatch = async () => {
    if (context.watching) {
      return;
    }
    context.watching = true;
    for (const mountpoint in context.mounts) {
      context.unwatch[mountpoint] = await watch(
        context.mounts[mountpoint],
        onChange,
        mountpoint
      );
    }
  };
  const stopWatch = async () => {
    if (!context.watching) {
      return;
    }
    for (const mountpoint in context.unwatch) {
      await context.unwatch[mountpoint]();
    }
    context.unwatch = {};
    context.watching = false;
  };
  const runBatch = (items, commonOptions, cb) => {
    const batches = /* @__PURE__ */ new Map();
    const getBatch = (mount) => {
      let batch = batches.get(mount.base);
      if (!batch) {
        batch = {
          driver: mount.driver,
          base: mount.base,
          items: []
        };
        batches.set(mount.base, batch);
      }
      return batch;
    };
    for (const item of items) {
      const isStringItem = typeof item === "string";
      const key = normalizeKey(isStringItem ? item : item.key);
      const value = isStringItem ? void 0 : item.value;
      const options2 = isStringItem || !item.options ? commonOptions : { ...commonOptions, ...item.options };
      const mount = getMount(key);
      getBatch(mount).items.push({
        key,
        value,
        relativeKey: mount.relativeKey,
        options: options2
      });
    }
    return Promise.all([...batches.values()].map((batch) => cb(batch))).then(
      (r) => r.flat()
    );
  };
  const storage = {
    // Item
    hasItem(key, opts = {}) {
      key = normalizeKey(key);
      const { relativeKey, driver } = getMount(key);
      return asyncCall(driver.hasItem, relativeKey, opts);
    },
    getItem(key, opts = {}) {
      key = normalizeKey(key);
      const { relativeKey, driver } = getMount(key);
      return asyncCall(driver.getItem, relativeKey, opts).then(
        (value) => destr(value)
      );
    },
    getItems(items, commonOptions) {
      return runBatch(items, commonOptions, (batch) => {
        if (batch.driver.getItems) {
          return asyncCall(
            batch.driver.getItems,
            batch.items.map((item) => ({
              key: item.relativeKey,
              options: item.options
            })),
            commonOptions
          ).then(
            (r) => r.map((item) => ({
              key: joinKeys(batch.base, item.key),
              value: destr(item.value)
            }))
          );
        }
        return Promise.all(
          batch.items.map((item) => {
            return asyncCall(
              batch.driver.getItem,
              item.relativeKey,
              item.options
            ).then((value) => ({
              key: item.key,
              value: destr(value)
            }));
          })
        );
      });
    },
    getItemRaw(key, opts = {}) {
      key = normalizeKey(key);
      const { relativeKey, driver } = getMount(key);
      if (driver.getItemRaw) {
        return asyncCall(driver.getItemRaw, relativeKey, opts);
      }
      return asyncCall(driver.getItem, relativeKey, opts).then(
        (value) => deserializeRaw(value)
      );
    },
    async setItem(key, value, opts = {}) {
      if (value === void 0) {
        return storage.removeItem(key);
      }
      key = normalizeKey(key);
      const { relativeKey, driver } = getMount(key);
      if (!driver.setItem) {
        return;
      }
      await asyncCall(driver.setItem, relativeKey, stringify(value), opts);
      if (!driver.watch) {
        onChange("update", key);
      }
    },
    async setItems(items, commonOptions) {
      await runBatch(items, commonOptions, async (batch) => {
        if (batch.driver.setItems) {
          return asyncCall(
            batch.driver.setItems,
            batch.items.map((item) => ({
              key: item.relativeKey,
              value: stringify(item.value),
              options: item.options
            })),
            commonOptions
          );
        }
        if (!batch.driver.setItem) {
          return;
        }
        await Promise.all(
          batch.items.map((item) => {
            return asyncCall(
              batch.driver.setItem,
              item.relativeKey,
              stringify(item.value),
              item.options
            );
          })
        );
      });
    },
    async setItemRaw(key, value, opts = {}) {
      if (value === void 0) {
        return storage.removeItem(key, opts);
      }
      key = normalizeKey(key);
      const { relativeKey, driver } = getMount(key);
      if (driver.setItemRaw) {
        await asyncCall(driver.setItemRaw, relativeKey, value, opts);
      } else if (driver.setItem) {
        await asyncCall(driver.setItem, relativeKey, serializeRaw(value), opts);
      } else {
        return;
      }
      if (!driver.watch) {
        onChange("update", key);
      }
    },
    async removeItem(key, opts = {}) {
      if (typeof opts === "boolean") {
        opts = { removeMeta: opts };
      }
      key = normalizeKey(key);
      const { relativeKey, driver } = getMount(key);
      if (!driver.removeItem) {
        return;
      }
      await asyncCall(driver.removeItem, relativeKey, opts);
      if (opts.removeMeta || opts.removeMata) {
        await asyncCall(driver.removeItem, relativeKey + "$", opts);
      }
      if (!driver.watch) {
        onChange("remove", key);
      }
    },
    // Meta
    async getMeta(key, opts = {}) {
      if (typeof opts === "boolean") {
        opts = { nativeOnly: opts };
      }
      key = normalizeKey(key);
      const { relativeKey, driver } = getMount(key);
      const meta = /* @__PURE__ */ Object.create(null);
      if (driver.getMeta) {
        Object.assign(meta, await asyncCall(driver.getMeta, relativeKey, opts));
      }
      if (!opts.nativeOnly) {
        const value = await asyncCall(
          driver.getItem,
          relativeKey + "$",
          opts
        ).then((value_) => destr(value_));
        if (value && typeof value === "object") {
          if (typeof value.atime === "string") {
            value.atime = new Date(value.atime);
          }
          if (typeof value.mtime === "string") {
            value.mtime = new Date(value.mtime);
          }
          Object.assign(meta, value);
        }
      }
      return meta;
    },
    setMeta(key, value, opts = {}) {
      return this.setItem(key + "$", value, opts);
    },
    removeMeta(key, opts = {}) {
      return this.removeItem(key + "$", opts);
    },
    // Keys
    async getKeys(base3, opts = {}) {
      base3 = normalizeBaseKey(base3);
      const mounts = getMounts(base3, true);
      let maskedMounts = [];
      const allKeys = [];
      for (const mount of mounts) {
        const rawKeys = await asyncCall(
          mount.driver.getKeys,
          mount.relativeBase,
          opts
        );
        const keys2 = rawKeys.map((key) => mount.mountpoint + normalizeKey(key)).filter((key) => !maskedMounts.some((p3) => key.startsWith(p3)));
        allKeys.push(...keys2);
        maskedMounts = [
          mount.mountpoint,
          ...maskedMounts.filter((p3) => !p3.startsWith(mount.mountpoint))
        ];
      }
      return base3 ? allKeys.filter((key) => key.startsWith(base3) && !key.endsWith("$")) : allKeys.filter((key) => !key.endsWith("$"));
    },
    // Utils
    async clear(base3, opts = {}) {
      base3 = normalizeBaseKey(base3);
      await Promise.all(
        getMounts(base3, false).map(async (m2) => {
          if (m2.driver.clear) {
            return asyncCall(m2.driver.clear, m2.relativeBase, opts);
          }
          if (m2.driver.removeItem) {
            const keys2 = await m2.driver.getKeys(m2.relativeBase || "", opts);
            return Promise.all(
              keys2.map((key) => m2.driver.removeItem(key, opts))
            );
          }
        })
      );
    },
    async dispose() {
      await Promise.all(
        Object.values(context.mounts).map((driver) => dispose(driver))
      );
    },
    async watch(callback) {
      await startWatch();
      context.watchListeners.push(callback);
      return async () => {
        context.watchListeners = context.watchListeners.filter(
          (listener) => listener !== callback
        );
        if (context.watchListeners.length === 0) {
          await stopWatch();
        }
      };
    },
    async unwatch() {
      context.watchListeners = [];
      await stopWatch();
    },
    // Mount
    mount(base3, driver) {
      base3 = normalizeBaseKey(base3);
      if (base3 && context.mounts[base3]) {
        throw new Error(`already mounted at ${base3}`);
      }
      if (base3) {
        context.mountpoints.push(base3);
        context.mountpoints.sort((a3, b3) => b3.length - a3.length);
      }
      context.mounts[base3] = driver;
      if (context.watching) {
        Promise.resolve(watch(driver, onChange, base3)).then((unwatcher) => {
          context.unwatch[base3] = unwatcher;
        }).catch(console.error);
      }
      return storage;
    },
    async unmount(base3, _dispose = true) {
      base3 = normalizeBaseKey(base3);
      if (!base3 || !context.mounts[base3]) {
        return;
      }
      if (context.watching && base3 in context.unwatch) {
        context.unwatch[base3]();
        delete context.unwatch[base3];
      }
      if (_dispose) {
        await dispose(context.mounts[base3]);
      }
      context.mountpoints = context.mountpoints.filter((key) => key !== base3);
      delete context.mounts[base3];
    },
    getMount(key = "") {
      key = normalizeKey(key) + ":";
      const m2 = getMount(key);
      return {
        driver: m2.driver,
        base: m2.base
      };
    },
    getMounts(base3 = "", opts = {}) {
      base3 = normalizeKey(base3);
      const mounts = getMounts(base3, opts.parents);
      return mounts.map((m2) => ({
        driver: m2.driver,
        base: m2.mountpoint
      }));
    }
  };
  return storage;
}
function watch(driver, onChange, base3) {
  return driver.watch ? driver.watch((event, key) => onChange(event, base3 + key)) : () => {
  };
}
async function dispose(driver) {
  if (typeof driver.dispose === "function") {
    await asyncCall(driver.dispose);
  }
}
function promisifyRequest(request) {
  return new Promise((resolve, reject) => {
    request.oncomplete = request.onsuccess = () => resolve(request.result);
    request.onabort = request.onerror = () => reject(request.error);
  });
}
function createStore(dbName, storeName) {
  const request = indexedDB.open(dbName);
  request.onupgradeneeded = () => request.result.createObjectStore(storeName);
  const dbp = promisifyRequest(request);
  return (txMode, callback) => dbp.then((db) => callback(db.transaction(storeName, txMode).objectStore(storeName)));
}
let defaultGetStoreFunc;
function defaultGetStore() {
  if (!defaultGetStoreFunc) {
    defaultGetStoreFunc = createStore("keyval-store", "keyval");
  }
  return defaultGetStoreFunc;
}
function get(key, customStore = defaultGetStore()) {
  return customStore("readonly", (store) => promisifyRequest(store.get(key)));
}
function set$1(key, value, customStore = defaultGetStore()) {
  return customStore("readwrite", (store) => {
    store.put(value, key);
    return promisifyRequest(store.transaction);
  });
}
function del(key, customStore = defaultGetStore()) {
  return customStore("readwrite", (store) => {
    store.delete(key);
    return promisifyRequest(store.transaction);
  });
}
function clear(customStore = defaultGetStore()) {
  return customStore("readwrite", (store) => {
    store.clear();
    return promisifyRequest(store.transaction);
  });
}
function eachCursor(store, callback) {
  store.openCursor().onsuccess = function() {
    if (!this.result)
      return;
    callback(this.result);
    this.result.continue();
  };
  return promisifyRequest(store.transaction);
}
function keys(customStore = defaultGetStore()) {
  return customStore("readonly", (store) => {
    if (store.getAllKeys) {
      return promisifyRequest(store.getAllKeys());
    }
    const items = [];
    return eachCursor(store, (cursor) => items.push(cursor.key)).then(() => items);
  });
}
const JSONStringify = (data) => JSON.stringify(data, (_3, value) => typeof value === "bigint" ? value.toString() + "n" : value);
const JSONParse = (json) => {
  const numbersBiggerThanMaxInt = /([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g;
  const serializedData = json.replace(numbersBiggerThanMaxInt, '$1"$2n"$3');
  return JSON.parse(serializedData, (_3, value) => {
    const isCustomFormatBigInt = typeof value === "string" && value.match(/^\d+n$/);
    if (isCustomFormatBigInt)
      return BigInt(value.substring(0, value.length - 1));
    return value;
  });
};
function safeJsonParse(value) {
  if (typeof value !== "string") {
    throw new Error(`Cannot safe json parse value of type ${typeof value}`);
  }
  try {
    return JSONParse(value);
  } catch (_a) {
    return value;
  }
}
function safeJsonStringify(value) {
  return typeof value === "string" ? value : JSONStringify(value) || "";
}
const x$1 = "idb-keyval";
var z$2 = (i2 = {}) => {
  const t = i2.base && i2.base.length > 0 ? `${i2.base}:` : "", e = (s) => t + s;
  let n2;
  return i2.dbName && i2.storeName && (n2 = createStore(i2.dbName, i2.storeName)), { name: x$1, options: i2, async hasItem(s) {
    return !(typeof await get(e(s), n2) > "u");
  }, async getItem(s) {
    return await get(e(s), n2) ?? null;
  }, setItem(s, a3) {
    return set$1(e(s), a3, n2);
  }, removeItem(s) {
    return del(e(s), n2);
  }, getKeys() {
    return keys(n2);
  }, clear() {
    return clear(n2);
  } };
};
const D$3 = "WALLET_CONNECT_V2_INDEXED_DB", E$3 = "keyvaluestorage";
let _$2 = class _ {
  constructor() {
    this.indexedDb = createStorage({ driver: z$2({ dbName: D$3, storeName: E$3 }) });
  }
  async getKeys() {
    return this.indexedDb.getKeys();
  }
  async getEntries() {
    return (await this.indexedDb.getItems(await this.indexedDb.getKeys())).map((t) => [t.key, t.value]);
  }
  async getItem(t) {
    const e = await this.indexedDb.getItem(t);
    if (e !== null)
      return e;
  }
  async setItem(t, e) {
    await this.indexedDb.setItem(t, safeJsonStringify(e));
  }
  async removeItem(t) {
    await this.indexedDb.removeItem(t);
  }
};
var l = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, c$1 = { exports: {} };
(function() {
  let i2;
  function t() {
  }
  i2 = t, i2.prototype.getItem = function(e) {
    return this.hasOwnProperty(e) ? String(this[e]) : null;
  }, i2.prototype.setItem = function(e, n2) {
    this[e] = String(n2);
  }, i2.prototype.removeItem = function(e) {
    delete this[e];
  }, i2.prototype.clear = function() {
    const e = this;
    Object.keys(e).forEach(function(n2) {
      e[n2] = void 0, delete e[n2];
    });
  }, i2.prototype.key = function(e) {
    return e = e || 0, Object.keys(this)[e];
  }, i2.prototype.__defineGetter__("length", function() {
    return Object.keys(this).length;
  }), typeof l < "u" && l.localStorage ? c$1.exports = l.localStorage : typeof window < "u" && window.localStorage ? c$1.exports = window.localStorage : c$1.exports = new t();
})();
function k$1(i2) {
  var t;
  return [i2[0], safeJsonParse((t = i2[1]) != null ? t : "")];
}
class K {
  constructor() {
    this.localStorage = c$1.exports;
  }
  async getKeys() {
    return Object.keys(this.localStorage);
  }
  async getEntries() {
    return Object.entries(this.localStorage).map(k$1);
  }
  async getItem(t) {
    const e = this.localStorage.getItem(t);
    if (e !== null)
      return safeJsonParse(e);
  }
  async setItem(t, e) {
    this.localStorage.setItem(t, safeJsonStringify(e));
  }
  async removeItem(t) {
    this.localStorage.removeItem(t);
  }
}
const N$1 = "wc_storage_version", y$3 = 1, O$2 = async (i2, t, e) => {
  const n2 = N$1, s = await t.getItem(n2);
  if (s && s >= y$3) {
    e(t);
    return;
  }
  const a3 = await i2.getKeys();
  if (!a3.length) {
    e(t);
    return;
  }
  const m2 = [];
  for (; a3.length; ) {
    const r = a3.shift();
    if (!r)
      continue;
    const o = r.toLowerCase();
    if (o.includes("wc@") || o.includes("walletconnect") || o.includes("wc_") || o.includes("wallet_connect")) {
      const f3 = await i2.getItem(r);
      await t.setItem(r, f3), m2.push(r);
    }
  }
  await t.setItem(n2, y$3), e(t), j$1(i2, m2);
}, j$1 = async (i2, t) => {
  t.length && t.forEach(async (e) => {
    await i2.removeItem(e);
  });
};
let h$2 = class h {
  constructor() {
    this.initialized = false, this.setInitialized = (e) => {
      this.storage = e, this.initialized = true;
    };
    const t = new K();
    this.storage = t;
    try {
      const e = new _$2();
      O$2(t, e, this.setInitialized);
    } catch {
      this.initialized = true;
    }
  }
  async getKeys() {
    return await this.initialize(), this.storage.getKeys();
  }
  async getEntries() {
    return await this.initialize(), this.storage.getEntries();
  }
  async getItem(t) {
    return await this.initialize(), this.storage.getItem(t);
  }
  async setItem(t, e) {
    return await this.initialize(), this.storage.setItem(t, e);
  }
  async removeItem(t) {
    return await this.initialize(), this.storage.removeItem(t);
  }
  async initialize() {
    this.initialized || await new Promise((t) => {
      const e = setInterval(() => {
        this.initialized && (clearInterval(e), t());
      }, 20);
    });
  }
};
var cjs$1 = {};
var heartbeat$2 = {};
var types = {};
var heartbeat$1 = {};
let IEvents$1 = class IEvents {
};
const esm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  IEvents: IEvents$1
}, Symbol.toStringTag, { value: "Module" }));
const require$$0$1 = /* @__PURE__ */ getAugmentedNamespace(esm);
var hasRequiredHeartbeat$2;
function requireHeartbeat$2() {
  if (hasRequiredHeartbeat$2)
    return heartbeat$1;
  hasRequiredHeartbeat$2 = 1;
  Object.defineProperty(heartbeat$1, "__esModule", { value: true });
  heartbeat$1.IHeartBeat = void 0;
  const events_1 = require$$0$1;
  class IHeartBeat extends events_1.IEvents {
    constructor(opts) {
      super();
    }
  }
  heartbeat$1.IHeartBeat = IHeartBeat;
  return heartbeat$1;
}
var hasRequiredTypes;
function requireTypes() {
  if (hasRequiredTypes)
    return types;
  hasRequiredTypes = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    const tslib_1 = require$$0$2;
    tslib_1.__exportStar(requireHeartbeat$2(), exports);
  })(types);
  return types;
}
var constants = {};
var heartbeat = {};
var hasRequiredHeartbeat$1;
function requireHeartbeat$1() {
  if (hasRequiredHeartbeat$1)
    return heartbeat;
  hasRequiredHeartbeat$1 = 1;
  Object.defineProperty(heartbeat, "__esModule", { value: true });
  heartbeat.HEARTBEAT_EVENTS = heartbeat.HEARTBEAT_INTERVAL = void 0;
  const time_1 = cjs$4;
  heartbeat.HEARTBEAT_INTERVAL = time_1.FIVE_SECONDS;
  heartbeat.HEARTBEAT_EVENTS = {
    pulse: "heartbeat_pulse"
  };
  return heartbeat;
}
var hasRequiredConstants;
function requireConstants() {
  if (hasRequiredConstants)
    return constants;
  hasRequiredConstants = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    const tslib_1 = require$$0$2;
    tslib_1.__exportStar(requireHeartbeat$1(), exports);
  })(constants);
  return constants;
}
var hasRequiredHeartbeat;
function requireHeartbeat() {
  if (hasRequiredHeartbeat)
    return heartbeat$2;
  hasRequiredHeartbeat = 1;
  Object.defineProperty(heartbeat$2, "__esModule", { value: true });
  heartbeat$2.HeartBeat = void 0;
  const tslib_1 = require$$0$2;
  const events_1 = eventsExports;
  const time_1 = cjs$4;
  const types_1 = requireTypes();
  const constants_1 = requireConstants();
  class HeartBeat extends types_1.IHeartBeat {
    constructor(opts) {
      super(opts);
      this.events = new events_1.EventEmitter();
      this.interval = constants_1.HEARTBEAT_INTERVAL;
      this.interval = (opts === null || opts === void 0 ? void 0 : opts.interval) || constants_1.HEARTBEAT_INTERVAL;
    }
    static init(opts) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const heartbeat2 = new HeartBeat(opts);
        yield heartbeat2.init();
        return heartbeat2;
      });
    }
    init() {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield this.initialize();
      });
    }
    stop() {
      clearInterval(this.intervalRef);
    }
    on(event, listener) {
      this.events.on(event, listener);
    }
    once(event, listener) {
      this.events.once(event, listener);
    }
    off(event, listener) {
      this.events.off(event, listener);
    }
    removeListener(event, listener) {
      this.events.removeListener(event, listener);
    }
    initialize() {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        this.intervalRef = setInterval(() => this.pulse(), time_1.toMiliseconds(this.interval));
      });
    }
    pulse() {
      this.events.emit(constants_1.HEARTBEAT_EVENTS.pulse);
    }
  }
  heartbeat$2.HeartBeat = HeartBeat;
  return heartbeat$2;
}
(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  const tslib_1 = require$$0$2;
  tslib_1.__exportStar(requireHeartbeat(), exports);
  tslib_1.__exportStar(requireTypes(), exports);
  tslib_1.__exportStar(requireConstants(), exports);
})(cjs$1);
function tryStringify(o) {
  try {
    return JSON.stringify(o);
  } catch (e) {
    return '"[Circular]"';
  }
}
var quickFormatUnescaped = format$1;
function format$1(f3, args, opts) {
  var ss2 = opts && opts.stringify || tryStringify;
  var offset = 1;
  if (typeof f3 === "object" && f3 !== null) {
    var len = args.length + offset;
    if (len === 1)
      return f3;
    var objects = new Array(len);
    objects[0] = ss2(f3);
    for (var index = 1; index < len; index++) {
      objects[index] = ss2(args[index]);
    }
    return objects.join(" ");
  }
  if (typeof f3 !== "string") {
    return f3;
  }
  var argLen = args.length;
  if (argLen === 0)
    return f3;
  var str = "";
  var a3 = 1 - offset;
  var lastPos = -1;
  var flen = f3 && f3.length || 0;
  for (var i2 = 0; i2 < flen; ) {
    if (f3.charCodeAt(i2) === 37 && i2 + 1 < flen) {
      lastPos = lastPos > -1 ? lastPos : 0;
      switch (f3.charCodeAt(i2 + 1)) {
        case 100:
        case 102:
          if (a3 >= argLen)
            break;
          if (args[a3] == null)
            break;
          if (lastPos < i2)
            str += f3.slice(lastPos, i2);
          str += Number(args[a3]);
          lastPos = i2 + 2;
          i2++;
          break;
        case 105:
          if (a3 >= argLen)
            break;
          if (args[a3] == null)
            break;
          if (lastPos < i2)
            str += f3.slice(lastPos, i2);
          str += Math.floor(Number(args[a3]));
          lastPos = i2 + 2;
          i2++;
          break;
        case 79:
        case 111:
        case 106:
          if (a3 >= argLen)
            break;
          if (args[a3] === void 0)
            break;
          if (lastPos < i2)
            str += f3.slice(lastPos, i2);
          var type = typeof args[a3];
          if (type === "string") {
            str += "'" + args[a3] + "'";
            lastPos = i2 + 2;
            i2++;
            break;
          }
          if (type === "function") {
            str += args[a3].name || "<anonymous>";
            lastPos = i2 + 2;
            i2++;
            break;
          }
          str += ss2(args[a3]);
          lastPos = i2 + 2;
          i2++;
          break;
        case 115:
          if (a3 >= argLen)
            break;
          if (lastPos < i2)
            str += f3.slice(lastPos, i2);
          str += String(args[a3]);
          lastPos = i2 + 2;
          i2++;
          break;
        case 37:
          if (lastPos < i2)
            str += f3.slice(lastPos, i2);
          str += "%";
          lastPos = i2 + 2;
          i2++;
          a3--;
          break;
      }
      ++a3;
    }
    ++i2;
  }
  if (lastPos === -1)
    return f3;
  else if (lastPos < flen) {
    str += f3.slice(lastPos);
  }
  return str;
}
const format = quickFormatUnescaped;
var browser$1 = pino;
const _console = pfGlobalThisOrFallback().console || {};
const stdSerializers = {
  mapHttpRequest: mock,
  mapHttpResponse: mock,
  wrapRequestSerializer: passthrough,
  wrapResponseSerializer: passthrough,
  wrapErrorSerializer: passthrough,
  req: mock,
  res: mock,
  err: asErrValue
};
function shouldSerialize(serialize, serializers) {
  if (Array.isArray(serialize)) {
    const hasToFilter = serialize.filter(function(k2) {
      return k2 !== "!stdSerializers.err";
    });
    return hasToFilter;
  } else if (serialize === true) {
    return Object.keys(serializers);
  }
  return false;
}
function pino(opts) {
  opts = opts || {};
  opts.browser = opts.browser || {};
  const transmit2 = opts.browser.transmit;
  if (transmit2 && typeof transmit2.send !== "function") {
    throw Error("pino: transmit option must have a send function");
  }
  const proto = opts.browser.write || _console;
  if (opts.browser.write)
    opts.browser.asObject = true;
  const serializers = opts.serializers || {};
  const serialize = shouldSerialize(opts.browser.serialize, serializers);
  let stdErrSerialize = opts.browser.serialize;
  if (Array.isArray(opts.browser.serialize) && opts.browser.serialize.indexOf("!stdSerializers.err") > -1)
    stdErrSerialize = false;
  const levels = ["error", "fatal", "warn", "info", "debug", "trace"];
  if (typeof proto === "function") {
    proto.error = proto.fatal = proto.warn = proto.info = proto.debug = proto.trace = proto;
  }
  if (opts.enabled === false)
    opts.level = "silent";
  const level = opts.level || "info";
  const logger = Object.create(proto);
  if (!logger.log)
    logger.log = noop;
  Object.defineProperty(logger, "levelVal", {
    get: getLevelVal
  });
  Object.defineProperty(logger, "level", {
    get: getLevel,
    set: setLevel
  });
  const setOpts = {
    transmit: transmit2,
    serialize,
    asObject: opts.browser.asObject,
    levels,
    timestamp: getTimeFunction(opts)
  };
  logger.levels = pino.levels;
  logger.level = level;
  logger.setMaxListeners = logger.getMaxListeners = logger.emit = logger.addListener = logger.on = logger.prependListener = logger.once = logger.prependOnceListener = logger.removeListener = logger.removeAllListeners = logger.listeners = logger.listenerCount = logger.eventNames = logger.write = logger.flush = noop;
  logger.serializers = serializers;
  logger._serialize = serialize;
  logger._stdErrSerialize = stdErrSerialize;
  logger.child = child;
  if (transmit2)
    logger._logEvent = createLogEventShape();
  function getLevelVal() {
    return this.level === "silent" ? Infinity : this.levels.values[this.level];
  }
  function getLevel() {
    return this._level;
  }
  function setLevel(level2) {
    if (level2 !== "silent" && !this.levels.values[level2]) {
      throw Error("unknown level " + level2);
    }
    this._level = level2;
    set(setOpts, logger, "error", "log");
    set(setOpts, logger, "fatal", "error");
    set(setOpts, logger, "warn", "error");
    set(setOpts, logger, "info", "log");
    set(setOpts, logger, "debug", "log");
    set(setOpts, logger, "trace", "log");
  }
  function child(bindings, childOptions) {
    if (!bindings) {
      throw new Error("missing bindings for child Pino");
    }
    childOptions = childOptions || {};
    if (serialize && bindings.serializers) {
      childOptions.serializers = bindings.serializers;
    }
    const childOptionsSerializers = childOptions.serializers;
    if (serialize && childOptionsSerializers) {
      var childSerializers = Object.assign({}, serializers, childOptionsSerializers);
      var childSerialize = opts.browser.serialize === true ? Object.keys(childSerializers) : serialize;
      delete bindings.serializers;
      applySerializers([bindings], childSerialize, childSerializers, this._stdErrSerialize);
    }
    function Child(parent) {
      this._childLevel = (parent._childLevel | 0) + 1;
      this.error = bind(parent, bindings, "error");
      this.fatal = bind(parent, bindings, "fatal");
      this.warn = bind(parent, bindings, "warn");
      this.info = bind(parent, bindings, "info");
      this.debug = bind(parent, bindings, "debug");
      this.trace = bind(parent, bindings, "trace");
      if (childSerializers) {
        this.serializers = childSerializers;
        this._serialize = childSerialize;
      }
      if (transmit2) {
        this._logEvent = createLogEventShape(
          [].concat(parent._logEvent.bindings, bindings)
        );
      }
    }
    Child.prototype = this;
    return new Child(this);
  }
  return logger;
}
pino.levels = {
  values: {
    fatal: 60,
    error: 50,
    warn: 40,
    info: 30,
    debug: 20,
    trace: 10
  },
  labels: {
    10: "trace",
    20: "debug",
    30: "info",
    40: "warn",
    50: "error",
    60: "fatal"
  }
};
pino.stdSerializers = stdSerializers;
pino.stdTimeFunctions = Object.assign({}, { nullTime, epochTime, unixTime, isoTime });
function set(opts, logger, level, fallback) {
  const proto = Object.getPrototypeOf(logger);
  logger[level] = logger.levelVal > logger.levels.values[level] ? noop : proto[level] ? proto[level] : _console[level] || _console[fallback] || noop;
  wrap(opts, logger, level);
}
function wrap(opts, logger, level) {
  if (!opts.transmit && logger[level] === noop)
    return;
  logger[level] = /* @__PURE__ */ function(write) {
    return function LOG() {
      const ts2 = opts.timestamp();
      const args = new Array(arguments.length);
      const proto = Object.getPrototypeOf && Object.getPrototypeOf(this) === _console ? _console : this;
      for (var i2 = 0; i2 < args.length; i2++)
        args[i2] = arguments[i2];
      if (opts.serialize && !opts.asObject) {
        applySerializers(args, this._serialize, this.serializers, this._stdErrSerialize);
      }
      if (opts.asObject)
        write.call(proto, asObject(this, level, args, ts2));
      else
        write.apply(proto, args);
      if (opts.transmit) {
        const transmitLevel = opts.transmit.level || logger.level;
        const transmitValue = pino.levels.values[transmitLevel];
        const methodValue = pino.levels.values[level];
        if (methodValue < transmitValue)
          return;
        transmit(this, {
          ts: ts2,
          methodLevel: level,
          methodValue,
          transmitLevel,
          transmitValue: pino.levels.values[opts.transmit.level || logger.level],
          send: opts.transmit.send,
          val: logger.levelVal
        }, args);
      }
    };
  }(logger[level]);
}
function asObject(logger, level, args, ts2) {
  if (logger._serialize)
    applySerializers(args, logger._serialize, logger.serializers, logger._stdErrSerialize);
  const argsCloned = args.slice();
  let msg = argsCloned[0];
  const o = {};
  if (ts2) {
    o.time = ts2;
  }
  o.level = pino.levels.values[level];
  let lvl = (logger._childLevel | 0) + 1;
  if (lvl < 1)
    lvl = 1;
  if (msg !== null && typeof msg === "object") {
    while (lvl-- && typeof argsCloned[0] === "object") {
      Object.assign(o, argsCloned.shift());
    }
    msg = argsCloned.length ? format(argsCloned.shift(), argsCloned) : void 0;
  } else if (typeof msg === "string")
    msg = format(argsCloned.shift(), argsCloned);
  if (msg !== void 0)
    o.msg = msg;
  return o;
}
function applySerializers(args, serialize, serializers, stdErrSerialize) {
  for (const i2 in args) {
    if (stdErrSerialize && args[i2] instanceof Error) {
      args[i2] = pino.stdSerializers.err(args[i2]);
    } else if (typeof args[i2] === "object" && !Array.isArray(args[i2])) {
      for (const k2 in args[i2]) {
        if (serialize && serialize.indexOf(k2) > -1 && k2 in serializers) {
          args[i2][k2] = serializers[k2](args[i2][k2]);
        }
      }
    }
  }
}
function bind(parent, bindings, level) {
  return function() {
    const args = new Array(1 + arguments.length);
    args[0] = bindings;
    for (var i2 = 1; i2 < args.length; i2++) {
      args[i2] = arguments[i2 - 1];
    }
    return parent[level].apply(this, args);
  };
}
function transmit(logger, opts, args) {
  const send = opts.send;
  const ts2 = opts.ts;
  const methodLevel = opts.methodLevel;
  const methodValue = opts.methodValue;
  const val = opts.val;
  const bindings = logger._logEvent.bindings;
  applySerializers(
    args,
    logger._serialize || Object.keys(logger.serializers),
    logger.serializers,
    logger._stdErrSerialize === void 0 ? true : logger._stdErrSerialize
  );
  logger._logEvent.ts = ts2;
  logger._logEvent.messages = args.filter(function(arg) {
    return bindings.indexOf(arg) === -1;
  });
  logger._logEvent.level.label = methodLevel;
  logger._logEvent.level.value = methodValue;
  send(methodLevel, logger._logEvent, val);
  logger._logEvent = createLogEventShape(bindings);
}
function createLogEventShape(bindings) {
  return {
    ts: 0,
    messages: [],
    bindings: bindings || [],
    level: { label: "", value: 0 }
  };
}
function asErrValue(err) {
  const obj = {
    type: err.constructor.name,
    msg: err.message,
    stack: err.stack
  };
  for (const key in err) {
    if (obj[key] === void 0) {
      obj[key] = err[key];
    }
  }
  return obj;
}
function getTimeFunction(opts) {
  if (typeof opts.timestamp === "function") {
    return opts.timestamp;
  }
  if (opts.timestamp === false) {
    return nullTime;
  }
  return epochTime;
}
function mock() {
  return {};
}
function passthrough(a3) {
  return a3;
}
function noop() {
}
function nullTime() {
  return false;
}
function epochTime() {
  return Date.now();
}
function unixTime() {
  return Math.round(Date.now() / 1e3);
}
function isoTime() {
  return new Date(Date.now()).toISOString();
}
function pfGlobalThisOrFallback() {
  function defd(o) {
    return typeof o !== "undefined" && o;
  }
  try {
    if (typeof globalThis !== "undefined")
      return globalThis;
    Object.defineProperty(Object.prototype, "globalThis", {
      get: function() {
        delete Object.prototype.globalThis;
        return this.globalThis = this;
      },
      configurable: true
    });
    return globalThis;
  } catch (e) {
    return defd(self) || defd(window) || defd(this) || {};
  }
}
const Hg = /* @__PURE__ */ getDefaultExportFromCjs(browser$1);
const c = { level: "info" }, n$1 = "custom_context";
var x = Object.defineProperty, S$2 = Object.defineProperties, _$1 = Object.getOwnPropertyDescriptors, p$2 = Object.getOwnPropertySymbols, T = Object.prototype.hasOwnProperty, z$1 = Object.prototype.propertyIsEnumerable, f$2 = (r, e, t) => e in r ? x(r, e, { enumerable: true, configurable: true, writable: true, value: t }) : r[e] = t, i = (r, e) => {
  for (var t in e || (e = {}))
    T.call(e, t) && f$2(r, t, e[t]);
  if (p$2)
    for (var t of p$2(e))
      z$1.call(e, t) && f$2(r, t, e[t]);
  return r;
}, g$4 = (r, e) => S$2(r, _$1(e));
function k(r) {
  return g$4(i({}, r), { level: (r == null ? void 0 : r.level) || c.level });
}
function v$3(r, e = n$1) {
  return r[e] || "";
}
function b$2(r, e, t = n$1) {
  return r[t] = e, r;
}
function y$2(r, e = n$1) {
  let t = "";
  return typeof r.bindings > "u" ? t = v$3(r, e) : t = r.bindings().context || "", t;
}
function w$3(r, e, t = n$1) {
  const o = y$2(r, t);
  return o.trim() ? `${o}/${e}` : e;
}
function E$2(r, e, t = n$1) {
  const o = w$3(r, e, t), a3 = r.child({ context: o });
  return b$2(a3, o, t);
}
class n extends IEvents$1 {
  constructor(s) {
    super(), this.opts = s, this.protocol = "wc", this.version = 2;
  }
}
let h$1 = class h2 extends IEvents$1 {
  constructor(s, t) {
    super(), this.core = s, this.logger = t, this.records = /* @__PURE__ */ new Map();
  }
};
let a$1 = class a {
  constructor(s, t) {
    this.logger = s, this.core = t;
  }
};
let u$1 = class u extends IEvents$1 {
  constructor(s, t) {
    super(), this.relayer = s, this.logger = t;
  }
};
let g$3 = class g extends IEvents$1 {
  constructor(s) {
    super();
  }
};
let p$1 = class p {
  constructor(s, t, o, M2) {
    this.core = s, this.logger = t, this.name = o;
  }
};
class d extends IEvents$1 {
  constructor(s, t) {
    super(), this.relayer = s, this.logger = t;
  }
}
let E$1 = class E extends IEvents$1 {
  constructor(s, t) {
    super(), this.core = s, this.logger = t;
  }
};
let y$1 = class y {
  constructor(s, t) {
    this.projectId = s, this.logger = t;
  }
};
let v$2 = class v {
  constructor(s, t) {
    this.projectId = s, this.logger = t;
  }
};
let b$1 = class b {
  constructor(s) {
    this.opts = s, this.protocol = "wc", this.version = 2;
  }
};
let w$2 = class w {
  constructor(s) {
    this.client = s;
  }
};
var ed25519 = {};
var sha512 = {};
(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  var binary_12 = binary;
  var wipe_12 = wipe$1;
  exports.DIGEST_LENGTH = 64;
  exports.BLOCK_SIZE = 128;
  var SHA512 = (
    /** @class */
    function() {
      function SHA5122() {
        this.digestLength = exports.DIGEST_LENGTH;
        this.blockSize = exports.BLOCK_SIZE;
        this._stateHi = new Int32Array(8);
        this._stateLo = new Int32Array(8);
        this._tempHi = new Int32Array(16);
        this._tempLo = new Int32Array(16);
        this._buffer = new Uint8Array(256);
        this._bufferLength = 0;
        this._bytesHashed = 0;
        this._finished = false;
        this.reset();
      }
      SHA5122.prototype._initState = function() {
        this._stateHi[0] = 1779033703;
        this._stateHi[1] = 3144134277;
        this._stateHi[2] = 1013904242;
        this._stateHi[3] = 2773480762;
        this._stateHi[4] = 1359893119;
        this._stateHi[5] = 2600822924;
        this._stateHi[6] = 528734635;
        this._stateHi[7] = 1541459225;
        this._stateLo[0] = 4089235720;
        this._stateLo[1] = 2227873595;
        this._stateLo[2] = 4271175723;
        this._stateLo[3] = 1595750129;
        this._stateLo[4] = 2917565137;
        this._stateLo[5] = 725511199;
        this._stateLo[6] = 4215389547;
        this._stateLo[7] = 327033209;
      };
      SHA5122.prototype.reset = function() {
        this._initState();
        this._bufferLength = 0;
        this._bytesHashed = 0;
        this._finished = false;
        return this;
      };
      SHA5122.prototype.clean = function() {
        wipe_12.wipe(this._buffer);
        wipe_12.wipe(this._tempHi);
        wipe_12.wipe(this._tempLo);
        this.reset();
      };
      SHA5122.prototype.update = function(data, dataLength) {
        if (dataLength === void 0) {
          dataLength = data.length;
        }
        if (this._finished) {
          throw new Error("SHA512: can't update because hash was finished.");
        }
        var dataPos = 0;
        this._bytesHashed += dataLength;
        if (this._bufferLength > 0) {
          while (this._bufferLength < exports.BLOCK_SIZE && dataLength > 0) {
            this._buffer[this._bufferLength++] = data[dataPos++];
            dataLength--;
          }
          if (this._bufferLength === this.blockSize) {
            hashBlocks(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, this.blockSize);
            this._bufferLength = 0;
          }
        }
        if (dataLength >= this.blockSize) {
          dataPos = hashBlocks(this._tempHi, this._tempLo, this._stateHi, this._stateLo, data, dataPos, dataLength);
          dataLength %= this.blockSize;
        }
        while (dataLength > 0) {
          this._buffer[this._bufferLength++] = data[dataPos++];
          dataLength--;
        }
        return this;
      };
      SHA5122.prototype.finish = function(out) {
        if (!this._finished) {
          var bytesHashed = this._bytesHashed;
          var left = this._bufferLength;
          var bitLenHi = bytesHashed / 536870912 | 0;
          var bitLenLo = bytesHashed << 3;
          var padLength = bytesHashed % 128 < 112 ? 128 : 256;
          this._buffer[left] = 128;
          for (var i2 = left + 1; i2 < padLength - 8; i2++) {
            this._buffer[i2] = 0;
          }
          binary_12.writeUint32BE(bitLenHi, this._buffer, padLength - 8);
          binary_12.writeUint32BE(bitLenLo, this._buffer, padLength - 4);
          hashBlocks(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, padLength);
          this._finished = true;
        }
        for (var i2 = 0; i2 < this.digestLength / 8; i2++) {
          binary_12.writeUint32BE(this._stateHi[i2], out, i2 * 8);
          binary_12.writeUint32BE(this._stateLo[i2], out, i2 * 8 + 4);
        }
        return this;
      };
      SHA5122.prototype.digest = function() {
        var out = new Uint8Array(this.digestLength);
        this.finish(out);
        return out;
      };
      SHA5122.prototype.saveState = function() {
        if (this._finished) {
          throw new Error("SHA256: cannot save finished state");
        }
        return {
          stateHi: new Int32Array(this._stateHi),
          stateLo: new Int32Array(this._stateLo),
          buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
          bufferLength: this._bufferLength,
          bytesHashed: this._bytesHashed
        };
      };
      SHA5122.prototype.restoreState = function(savedState) {
        this._stateHi.set(savedState.stateHi);
        this._stateLo.set(savedState.stateLo);
        this._bufferLength = savedState.bufferLength;
        if (savedState.buffer) {
          this._buffer.set(savedState.buffer);
        }
        this._bytesHashed = savedState.bytesHashed;
        this._finished = false;
        return this;
      };
      SHA5122.prototype.cleanSavedState = function(savedState) {
        wipe_12.wipe(savedState.stateHi);
        wipe_12.wipe(savedState.stateLo);
        if (savedState.buffer) {
          wipe_12.wipe(savedState.buffer);
        }
        savedState.bufferLength = 0;
        savedState.bytesHashed = 0;
      };
      return SHA5122;
    }()
  );
  exports.SHA512 = SHA512;
  var K2 = new Int32Array([
    1116352408,
    3609767458,
    1899447441,
    602891725,
    3049323471,
    3964484399,
    3921009573,
    2173295548,
    961987163,
    4081628472,
    1508970993,
    3053834265,
    2453635748,
    2937671579,
    2870763221,
    3664609560,
    3624381080,
    2734883394,
    310598401,
    1164996542,
    607225278,
    1323610764,
    1426881987,
    3590304994,
    1925078388,
    4068182383,
    2162078206,
    991336113,
    2614888103,
    633803317,
    3248222580,
    3479774868,
    3835390401,
    2666613458,
    4022224774,
    944711139,
    264347078,
    2341262773,
    604807628,
    2007800933,
    770255983,
    1495990901,
    1249150122,
    1856431235,
    1555081692,
    3175218132,
    1996064986,
    2198950837,
    2554220882,
    3999719339,
    2821834349,
    766784016,
    2952996808,
    2566594879,
    3210313671,
    3203337956,
    3336571891,
    1034457026,
    3584528711,
    2466948901,
    113926993,
    3758326383,
    338241895,
    168717936,
    666307205,
    1188179964,
    773529912,
    1546045734,
    1294757372,
    1522805485,
    1396182291,
    2643833823,
    1695183700,
    2343527390,
    1986661051,
    1014477480,
    2177026350,
    1206759142,
    2456956037,
    344077627,
    2730485921,
    1290863460,
    2820302411,
    3158454273,
    3259730800,
    3505952657,
    3345764771,
    106217008,
    3516065817,
    3606008344,
    3600352804,
    1432725776,
    4094571909,
    1467031594,
    275423344,
    851169720,
    430227734,
    3100823752,
    506948616,
    1363258195,
    659060556,
    3750685593,
    883997877,
    3785050280,
    958139571,
    3318307427,
    1322822218,
    3812723403,
    1537002063,
    2003034995,
    1747873779,
    3602036899,
    1955562222,
    1575990012,
    2024104815,
    1125592928,
    2227730452,
    2716904306,
    2361852424,
    442776044,
    2428436474,
    593698344,
    2756734187,
    3733110249,
    3204031479,
    2999351573,
    3329325298,
    3815920427,
    3391569614,
    3928383900,
    3515267271,
    566280711,
    3940187606,
    3454069534,
    4118630271,
    4000239992,
    116418474,
    1914138554,
    174292421,
    2731055270,
    289380356,
    3203993006,
    460393269,
    320620315,
    685471733,
    587496836,
    852142971,
    1086792851,
    1017036298,
    365543100,
    1126000580,
    2618297676,
    1288033470,
    3409855158,
    1501505948,
    4234509866,
    1607167915,
    987167468,
    1816402316,
    1246189591
  ]);
  function hashBlocks(wh, wl, hh, hl, m2, pos, len) {
    var ah0 = hh[0], ah1 = hh[1], ah2 = hh[2], ah3 = hh[3], ah4 = hh[4], ah5 = hh[5], ah6 = hh[6], ah7 = hh[7], al0 = hl[0], al1 = hl[1], al2 = hl[2], al3 = hl[3], al4 = hl[4], al5 = hl[5], al6 = hl[6], al7 = hl[7];
    var h4, l2;
    var th, tl;
    var a3, b3, c2, d2;
    while (len >= 128) {
      for (var i2 = 0; i2 < 16; i2++) {
        var j2 = 8 * i2 + pos;
        wh[i2] = binary_12.readUint32BE(m2, j2);
        wl[i2] = binary_12.readUint32BE(m2, j2 + 4);
      }
      for (var i2 = 0; i2 < 80; i2++) {
        var bh0 = ah0;
        var bh1 = ah1;
        var bh2 = ah2;
        var bh3 = ah3;
        var bh4 = ah4;
        var bh5 = ah5;
        var bh6 = ah6;
        var bh7 = ah7;
        var bl0 = al0;
        var bl1 = al1;
        var bl2 = al2;
        var bl3 = al3;
        var bl4 = al4;
        var bl5 = al5;
        var bl6 = al6;
        var bl7 = al7;
        h4 = ah7;
        l2 = al7;
        a3 = l2 & 65535;
        b3 = l2 >>> 16;
        c2 = h4 & 65535;
        d2 = h4 >>> 16;
        h4 = (ah4 >>> 14 | al4 << 32 - 14) ^ (ah4 >>> 18 | al4 << 32 - 18) ^ (al4 >>> 41 - 32 | ah4 << 32 - (41 - 32));
        l2 = (al4 >>> 14 | ah4 << 32 - 14) ^ (al4 >>> 18 | ah4 << 32 - 18) ^ (ah4 >>> 41 - 32 | al4 << 32 - (41 - 32));
        a3 += l2 & 65535;
        b3 += l2 >>> 16;
        c2 += h4 & 65535;
        d2 += h4 >>> 16;
        h4 = ah4 & ah5 ^ ~ah4 & ah6;
        l2 = al4 & al5 ^ ~al4 & al6;
        a3 += l2 & 65535;
        b3 += l2 >>> 16;
        c2 += h4 & 65535;
        d2 += h4 >>> 16;
        h4 = K2[i2 * 2];
        l2 = K2[i2 * 2 + 1];
        a3 += l2 & 65535;
        b3 += l2 >>> 16;
        c2 += h4 & 65535;
        d2 += h4 >>> 16;
        h4 = wh[i2 % 16];
        l2 = wl[i2 % 16];
        a3 += l2 & 65535;
        b3 += l2 >>> 16;
        c2 += h4 & 65535;
        d2 += h4 >>> 16;
        b3 += a3 >>> 16;
        c2 += b3 >>> 16;
        d2 += c2 >>> 16;
        th = c2 & 65535 | d2 << 16;
        tl = a3 & 65535 | b3 << 16;
        h4 = th;
        l2 = tl;
        a3 = l2 & 65535;
        b3 = l2 >>> 16;
        c2 = h4 & 65535;
        d2 = h4 >>> 16;
        h4 = (ah0 >>> 28 | al0 << 32 - 28) ^ (al0 >>> 34 - 32 | ah0 << 32 - (34 - 32)) ^ (al0 >>> 39 - 32 | ah0 << 32 - (39 - 32));
        l2 = (al0 >>> 28 | ah0 << 32 - 28) ^ (ah0 >>> 34 - 32 | al0 << 32 - (34 - 32)) ^ (ah0 >>> 39 - 32 | al0 << 32 - (39 - 32));
        a3 += l2 & 65535;
        b3 += l2 >>> 16;
        c2 += h4 & 65535;
        d2 += h4 >>> 16;
        h4 = ah0 & ah1 ^ ah0 & ah2 ^ ah1 & ah2;
        l2 = al0 & al1 ^ al0 & al2 ^ al1 & al2;
        a3 += l2 & 65535;
        b3 += l2 >>> 16;
        c2 += h4 & 65535;
        d2 += h4 >>> 16;
        b3 += a3 >>> 16;
        c2 += b3 >>> 16;
        d2 += c2 >>> 16;
        bh7 = c2 & 65535 | d2 << 16;
        bl7 = a3 & 65535 | b3 << 16;
        h4 = bh3;
        l2 = bl3;
        a3 = l2 & 65535;
        b3 = l2 >>> 16;
        c2 = h4 & 65535;
        d2 = h4 >>> 16;
        h4 = th;
        l2 = tl;
        a3 += l2 & 65535;
        b3 += l2 >>> 16;
        c2 += h4 & 65535;
        d2 += h4 >>> 16;
        b3 += a3 >>> 16;
        c2 += b3 >>> 16;
        d2 += c2 >>> 16;
        bh3 = c2 & 65535 | d2 << 16;
        bl3 = a3 & 65535 | b3 << 16;
        ah1 = bh0;
        ah2 = bh1;
        ah3 = bh2;
        ah4 = bh3;
        ah5 = bh4;
        ah6 = bh5;
        ah7 = bh6;
        ah0 = bh7;
        al1 = bl0;
        al2 = bl1;
        al3 = bl2;
        al4 = bl3;
        al5 = bl4;
        al6 = bl5;
        al7 = bl6;
        al0 = bl7;
        if (i2 % 16 === 15) {
          for (var j2 = 0; j2 < 16; j2++) {
            h4 = wh[j2];
            l2 = wl[j2];
            a3 = l2 & 65535;
            b3 = l2 >>> 16;
            c2 = h4 & 65535;
            d2 = h4 >>> 16;
            h4 = wh[(j2 + 9) % 16];
            l2 = wl[(j2 + 9) % 16];
            a3 += l2 & 65535;
            b3 += l2 >>> 16;
            c2 += h4 & 65535;
            d2 += h4 >>> 16;
            th = wh[(j2 + 1) % 16];
            tl = wl[(j2 + 1) % 16];
            h4 = (th >>> 1 | tl << 32 - 1) ^ (th >>> 8 | tl << 32 - 8) ^ th >>> 7;
            l2 = (tl >>> 1 | th << 32 - 1) ^ (tl >>> 8 | th << 32 - 8) ^ (tl >>> 7 | th << 32 - 7);
            a3 += l2 & 65535;
            b3 += l2 >>> 16;
            c2 += h4 & 65535;
            d2 += h4 >>> 16;
            th = wh[(j2 + 14) % 16];
            tl = wl[(j2 + 14) % 16];
            h4 = (th >>> 19 | tl << 32 - 19) ^ (tl >>> 61 - 32 | th << 32 - (61 - 32)) ^ th >>> 6;
            l2 = (tl >>> 19 | th << 32 - 19) ^ (th >>> 61 - 32 | tl << 32 - (61 - 32)) ^ (tl >>> 6 | th << 32 - 6);
            a3 += l2 & 65535;
            b3 += l2 >>> 16;
            c2 += h4 & 65535;
            d2 += h4 >>> 16;
            b3 += a3 >>> 16;
            c2 += b3 >>> 16;
            d2 += c2 >>> 16;
            wh[j2] = c2 & 65535 | d2 << 16;
            wl[j2] = a3 & 65535 | b3 << 16;
          }
        }
      }
      h4 = ah0;
      l2 = al0;
      a3 = l2 & 65535;
      b3 = l2 >>> 16;
      c2 = h4 & 65535;
      d2 = h4 >>> 16;
      h4 = hh[0];
      l2 = hl[0];
      a3 += l2 & 65535;
      b3 += l2 >>> 16;
      c2 += h4 & 65535;
      d2 += h4 >>> 16;
      b3 += a3 >>> 16;
      c2 += b3 >>> 16;
      d2 += c2 >>> 16;
      hh[0] = ah0 = c2 & 65535 | d2 << 16;
      hl[0] = al0 = a3 & 65535 | b3 << 16;
      h4 = ah1;
      l2 = al1;
      a3 = l2 & 65535;
      b3 = l2 >>> 16;
      c2 = h4 & 65535;
      d2 = h4 >>> 16;
      h4 = hh[1];
      l2 = hl[1];
      a3 += l2 & 65535;
      b3 += l2 >>> 16;
      c2 += h4 & 65535;
      d2 += h4 >>> 16;
      b3 += a3 >>> 16;
      c2 += b3 >>> 16;
      d2 += c2 >>> 16;
      hh[1] = ah1 = c2 & 65535 | d2 << 16;
      hl[1] = al1 = a3 & 65535 | b3 << 16;
      h4 = ah2;
      l2 = al2;
      a3 = l2 & 65535;
      b3 = l2 >>> 16;
      c2 = h4 & 65535;
      d2 = h4 >>> 16;
      h4 = hh[2];
      l2 = hl[2];
      a3 += l2 & 65535;
      b3 += l2 >>> 16;
      c2 += h4 & 65535;
      d2 += h4 >>> 16;
      b3 += a3 >>> 16;
      c2 += b3 >>> 16;
      d2 += c2 >>> 16;
      hh[2] = ah2 = c2 & 65535 | d2 << 16;
      hl[2] = al2 = a3 & 65535 | b3 << 16;
      h4 = ah3;
      l2 = al3;
      a3 = l2 & 65535;
      b3 = l2 >>> 16;
      c2 = h4 & 65535;
      d2 = h4 >>> 16;
      h4 = hh[3];
      l2 = hl[3];
      a3 += l2 & 65535;
      b3 += l2 >>> 16;
      c2 += h4 & 65535;
      d2 += h4 >>> 16;
      b3 += a3 >>> 16;
      c2 += b3 >>> 16;
      d2 += c2 >>> 16;
      hh[3] = ah3 = c2 & 65535 | d2 << 16;
      hl[3] = al3 = a3 & 65535 | b3 << 16;
      h4 = ah4;
      l2 = al4;
      a3 = l2 & 65535;
      b3 = l2 >>> 16;
      c2 = h4 & 65535;
      d2 = h4 >>> 16;
      h4 = hh[4];
      l2 = hl[4];
      a3 += l2 & 65535;
      b3 += l2 >>> 16;
      c2 += h4 & 65535;
      d2 += h4 >>> 16;
      b3 += a3 >>> 16;
      c2 += b3 >>> 16;
      d2 += c2 >>> 16;
      hh[4] = ah4 = c2 & 65535 | d2 << 16;
      hl[4] = al4 = a3 & 65535 | b3 << 16;
      h4 = ah5;
      l2 = al5;
      a3 = l2 & 65535;
      b3 = l2 >>> 16;
      c2 = h4 & 65535;
      d2 = h4 >>> 16;
      h4 = hh[5];
      l2 = hl[5];
      a3 += l2 & 65535;
      b3 += l2 >>> 16;
      c2 += h4 & 65535;
      d2 += h4 >>> 16;
      b3 += a3 >>> 16;
      c2 += b3 >>> 16;
      d2 += c2 >>> 16;
      hh[5] = ah5 = c2 & 65535 | d2 << 16;
      hl[5] = al5 = a3 & 65535 | b3 << 16;
      h4 = ah6;
      l2 = al6;
      a3 = l2 & 65535;
      b3 = l2 >>> 16;
      c2 = h4 & 65535;
      d2 = h4 >>> 16;
      h4 = hh[6];
      l2 = hl[6];
      a3 += l2 & 65535;
      b3 += l2 >>> 16;
      c2 += h4 & 65535;
      d2 += h4 >>> 16;
      b3 += a3 >>> 16;
      c2 += b3 >>> 16;
      d2 += c2 >>> 16;
      hh[6] = ah6 = c2 & 65535 | d2 << 16;
      hl[6] = al6 = a3 & 65535 | b3 << 16;
      h4 = ah7;
      l2 = al7;
      a3 = l2 & 65535;
      b3 = l2 >>> 16;
      c2 = h4 & 65535;
      d2 = h4 >>> 16;
      h4 = hh[7];
      l2 = hl[7];
      a3 += l2 & 65535;
      b3 += l2 >>> 16;
      c2 += h4 & 65535;
      d2 += h4 >>> 16;
      b3 += a3 >>> 16;
      c2 += b3 >>> 16;
      d2 += c2 >>> 16;
      hh[7] = ah7 = c2 & 65535 | d2 << 16;
      hl[7] = al7 = a3 & 65535 | b3 << 16;
      pos += 128;
      len -= 128;
    }
    return pos;
  }
  function hash2(data) {
    var h4 = new SHA512();
    h4.update(data);
    var digest = h4.digest();
    h4.clean();
    return digest;
  }
  exports.hash = hash2;
})(sha512);
(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.convertSecretKeyToX25519 = exports.convertPublicKeyToX25519 = exports.verify = exports.sign = exports.extractPublicKeyFromSecretKey = exports.generateKeyPair = exports.generateKeyPairFromSeed = exports.SEED_LENGTH = exports.SECRET_KEY_LENGTH = exports.PUBLIC_KEY_LENGTH = exports.SIGNATURE_LENGTH = void 0;
  const random_1 = random;
  const sha512_1 = sha512;
  const wipe_12 = wipe$1;
  exports.SIGNATURE_LENGTH = 64;
  exports.PUBLIC_KEY_LENGTH = 32;
  exports.SECRET_KEY_LENGTH = 64;
  exports.SEED_LENGTH = 32;
  function gf(init) {
    const r = new Float64Array(16);
    if (init) {
      for (let i2 = 0; i2 < init.length; i2++) {
        r[i2] = init[i2];
      }
    }
    return r;
  }
  const _9 = new Uint8Array(32);
  _9[0] = 9;
  const gf0 = gf();
  const gf1 = gf([1]);
  const D2 = gf([
    30883,
    4953,
    19914,
    30187,
    55467,
    16705,
    2637,
    112,
    59544,
    30585,
    16505,
    36039,
    65139,
    11119,
    27886,
    20995
  ]);
  const D22 = gf([
    61785,
    9906,
    39828,
    60374,
    45398,
    33411,
    5274,
    224,
    53552,
    61171,
    33010,
    6542,
    64743,
    22239,
    55772,
    9222
  ]);
  const X2 = gf([
    54554,
    36645,
    11616,
    51542,
    42930,
    38181,
    51040,
    26924,
    56412,
    64982,
    57905,
    49316,
    21502,
    52590,
    14035,
    8553
  ]);
  const Y = gf([
    26200,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214
  ]);
  const I2 = gf([
    41136,
    18958,
    6951,
    50414,
    58488,
    44335,
    6150,
    12099,
    55207,
    15867,
    153,
    11085,
    57099,
    20417,
    9344,
    11139
  ]);
  function set25519(r, a3) {
    for (let i2 = 0; i2 < 16; i2++) {
      r[i2] = a3[i2] | 0;
    }
  }
  function car25519(o) {
    let c2 = 1;
    for (let i2 = 0; i2 < 16; i2++) {
      let v3 = o[i2] + c2 + 65535;
      c2 = Math.floor(v3 / 65536);
      o[i2] = v3 - c2 * 65536;
    }
    o[0] += c2 - 1 + 37 * (c2 - 1);
  }
  function sel25519(p3, q2, b3) {
    const c2 = ~(b3 - 1);
    for (let i2 = 0; i2 < 16; i2++) {
      const t = c2 & (p3[i2] ^ q2[i2]);
      p3[i2] ^= t;
      q2[i2] ^= t;
    }
  }
  function pack25519(o, n2) {
    const m2 = gf();
    const t = gf();
    for (let i2 = 0; i2 < 16; i2++) {
      t[i2] = n2[i2];
    }
    car25519(t);
    car25519(t);
    car25519(t);
    for (let j2 = 0; j2 < 2; j2++) {
      m2[0] = t[0] - 65517;
      for (let i2 = 1; i2 < 15; i2++) {
        m2[i2] = t[i2] - 65535 - (m2[i2 - 1] >> 16 & 1);
        m2[i2 - 1] &= 65535;
      }
      m2[15] = t[15] - 32767 - (m2[14] >> 16 & 1);
      const b3 = m2[15] >> 16 & 1;
      m2[14] &= 65535;
      sel25519(t, m2, 1 - b3);
    }
    for (let i2 = 0; i2 < 16; i2++) {
      o[2 * i2] = t[i2] & 255;
      o[2 * i2 + 1] = t[i2] >> 8;
    }
  }
  function verify32(x2, y3) {
    let d2 = 0;
    for (let i2 = 0; i2 < 32; i2++) {
      d2 |= x2[i2] ^ y3[i2];
    }
    return (1 & d2 - 1 >>> 8) - 1;
  }
  function neq25519(a3, b3) {
    const c2 = new Uint8Array(32);
    const d2 = new Uint8Array(32);
    pack25519(c2, a3);
    pack25519(d2, b3);
    return verify32(c2, d2);
  }
  function par25519(a3) {
    const d2 = new Uint8Array(32);
    pack25519(d2, a3);
    return d2[0] & 1;
  }
  function unpack25519(o, n2) {
    for (let i2 = 0; i2 < 16; i2++) {
      o[i2] = n2[2 * i2] + (n2[2 * i2 + 1] << 8);
    }
    o[15] &= 32767;
  }
  function add(o, a3, b3) {
    for (let i2 = 0; i2 < 16; i2++) {
      o[i2] = a3[i2] + b3[i2];
    }
  }
  function sub(o, a3, b3) {
    for (let i2 = 0; i2 < 16; i2++) {
      o[i2] = a3[i2] - b3[i2];
    }
  }
  function mul(o, a3, b3) {
    let v3, c2, t0 = 0, t1 = 0, t2 = 0, t3 = 0, t4 = 0, t5 = 0, t6 = 0, t7 = 0, t8 = 0, t9 = 0, t10 = 0, t11 = 0, t12 = 0, t13 = 0, t14 = 0, t15 = 0, t16 = 0, t17 = 0, t18 = 0, t19 = 0, t20 = 0, t21 = 0, t22 = 0, t23 = 0, t24 = 0, t25 = 0, t26 = 0, t27 = 0, t28 = 0, t29 = 0, t30 = 0, b0 = b3[0], b1 = b3[1], b22 = b3[2], b32 = b3[3], b4 = b3[4], b5 = b3[5], b6 = b3[6], b7 = b3[7], b8 = b3[8], b9 = b3[9], b10 = b3[10], b11 = b3[11], b12 = b3[12], b13 = b3[13], b14 = b3[14], b15 = b3[15];
    v3 = a3[0];
    t0 += v3 * b0;
    t1 += v3 * b1;
    t2 += v3 * b22;
    t3 += v3 * b32;
    t4 += v3 * b4;
    t5 += v3 * b5;
    t6 += v3 * b6;
    t7 += v3 * b7;
    t8 += v3 * b8;
    t9 += v3 * b9;
    t10 += v3 * b10;
    t11 += v3 * b11;
    t12 += v3 * b12;
    t13 += v3 * b13;
    t14 += v3 * b14;
    t15 += v3 * b15;
    v3 = a3[1];
    t1 += v3 * b0;
    t2 += v3 * b1;
    t3 += v3 * b22;
    t4 += v3 * b32;
    t5 += v3 * b4;
    t6 += v3 * b5;
    t7 += v3 * b6;
    t8 += v3 * b7;
    t9 += v3 * b8;
    t10 += v3 * b9;
    t11 += v3 * b10;
    t12 += v3 * b11;
    t13 += v3 * b12;
    t14 += v3 * b13;
    t15 += v3 * b14;
    t16 += v3 * b15;
    v3 = a3[2];
    t2 += v3 * b0;
    t3 += v3 * b1;
    t4 += v3 * b22;
    t5 += v3 * b32;
    t6 += v3 * b4;
    t7 += v3 * b5;
    t8 += v3 * b6;
    t9 += v3 * b7;
    t10 += v3 * b8;
    t11 += v3 * b9;
    t12 += v3 * b10;
    t13 += v3 * b11;
    t14 += v3 * b12;
    t15 += v3 * b13;
    t16 += v3 * b14;
    t17 += v3 * b15;
    v3 = a3[3];
    t3 += v3 * b0;
    t4 += v3 * b1;
    t5 += v3 * b22;
    t6 += v3 * b32;
    t7 += v3 * b4;
    t8 += v3 * b5;
    t9 += v3 * b6;
    t10 += v3 * b7;
    t11 += v3 * b8;
    t12 += v3 * b9;
    t13 += v3 * b10;
    t14 += v3 * b11;
    t15 += v3 * b12;
    t16 += v3 * b13;
    t17 += v3 * b14;
    t18 += v3 * b15;
    v3 = a3[4];
    t4 += v3 * b0;
    t5 += v3 * b1;
    t6 += v3 * b22;
    t7 += v3 * b32;
    t8 += v3 * b4;
    t9 += v3 * b5;
    t10 += v3 * b6;
    t11 += v3 * b7;
    t12 += v3 * b8;
    t13 += v3 * b9;
    t14 += v3 * b10;
    t15 += v3 * b11;
    t16 += v3 * b12;
    t17 += v3 * b13;
    t18 += v3 * b14;
    t19 += v3 * b15;
    v3 = a3[5];
    t5 += v3 * b0;
    t6 += v3 * b1;
    t7 += v3 * b22;
    t8 += v3 * b32;
    t9 += v3 * b4;
    t10 += v3 * b5;
    t11 += v3 * b6;
    t12 += v3 * b7;
    t13 += v3 * b8;
    t14 += v3 * b9;
    t15 += v3 * b10;
    t16 += v3 * b11;
    t17 += v3 * b12;
    t18 += v3 * b13;
    t19 += v3 * b14;
    t20 += v3 * b15;
    v3 = a3[6];
    t6 += v3 * b0;
    t7 += v3 * b1;
    t8 += v3 * b22;
    t9 += v3 * b32;
    t10 += v3 * b4;
    t11 += v3 * b5;
    t12 += v3 * b6;
    t13 += v3 * b7;
    t14 += v3 * b8;
    t15 += v3 * b9;
    t16 += v3 * b10;
    t17 += v3 * b11;
    t18 += v3 * b12;
    t19 += v3 * b13;
    t20 += v3 * b14;
    t21 += v3 * b15;
    v3 = a3[7];
    t7 += v3 * b0;
    t8 += v3 * b1;
    t9 += v3 * b22;
    t10 += v3 * b32;
    t11 += v3 * b4;
    t12 += v3 * b5;
    t13 += v3 * b6;
    t14 += v3 * b7;
    t15 += v3 * b8;
    t16 += v3 * b9;
    t17 += v3 * b10;
    t18 += v3 * b11;
    t19 += v3 * b12;
    t20 += v3 * b13;
    t21 += v3 * b14;
    t22 += v3 * b15;
    v3 = a3[8];
    t8 += v3 * b0;
    t9 += v3 * b1;
    t10 += v3 * b22;
    t11 += v3 * b32;
    t12 += v3 * b4;
    t13 += v3 * b5;
    t14 += v3 * b6;
    t15 += v3 * b7;
    t16 += v3 * b8;
    t17 += v3 * b9;
    t18 += v3 * b10;
    t19 += v3 * b11;
    t20 += v3 * b12;
    t21 += v3 * b13;
    t22 += v3 * b14;
    t23 += v3 * b15;
    v3 = a3[9];
    t9 += v3 * b0;
    t10 += v3 * b1;
    t11 += v3 * b22;
    t12 += v3 * b32;
    t13 += v3 * b4;
    t14 += v3 * b5;
    t15 += v3 * b6;
    t16 += v3 * b7;
    t17 += v3 * b8;
    t18 += v3 * b9;
    t19 += v3 * b10;
    t20 += v3 * b11;
    t21 += v3 * b12;
    t22 += v3 * b13;
    t23 += v3 * b14;
    t24 += v3 * b15;
    v3 = a3[10];
    t10 += v3 * b0;
    t11 += v3 * b1;
    t12 += v3 * b22;
    t13 += v3 * b32;
    t14 += v3 * b4;
    t15 += v3 * b5;
    t16 += v3 * b6;
    t17 += v3 * b7;
    t18 += v3 * b8;
    t19 += v3 * b9;
    t20 += v3 * b10;
    t21 += v3 * b11;
    t22 += v3 * b12;
    t23 += v3 * b13;
    t24 += v3 * b14;
    t25 += v3 * b15;
    v3 = a3[11];
    t11 += v3 * b0;
    t12 += v3 * b1;
    t13 += v3 * b22;
    t14 += v3 * b32;
    t15 += v3 * b4;
    t16 += v3 * b5;
    t17 += v3 * b6;
    t18 += v3 * b7;
    t19 += v3 * b8;
    t20 += v3 * b9;
    t21 += v3 * b10;
    t22 += v3 * b11;
    t23 += v3 * b12;
    t24 += v3 * b13;
    t25 += v3 * b14;
    t26 += v3 * b15;
    v3 = a3[12];
    t12 += v3 * b0;
    t13 += v3 * b1;
    t14 += v3 * b22;
    t15 += v3 * b32;
    t16 += v3 * b4;
    t17 += v3 * b5;
    t18 += v3 * b6;
    t19 += v3 * b7;
    t20 += v3 * b8;
    t21 += v3 * b9;
    t22 += v3 * b10;
    t23 += v3 * b11;
    t24 += v3 * b12;
    t25 += v3 * b13;
    t26 += v3 * b14;
    t27 += v3 * b15;
    v3 = a3[13];
    t13 += v3 * b0;
    t14 += v3 * b1;
    t15 += v3 * b22;
    t16 += v3 * b32;
    t17 += v3 * b4;
    t18 += v3 * b5;
    t19 += v3 * b6;
    t20 += v3 * b7;
    t21 += v3 * b8;
    t22 += v3 * b9;
    t23 += v3 * b10;
    t24 += v3 * b11;
    t25 += v3 * b12;
    t26 += v3 * b13;
    t27 += v3 * b14;
    t28 += v3 * b15;
    v3 = a3[14];
    t14 += v3 * b0;
    t15 += v3 * b1;
    t16 += v3 * b22;
    t17 += v3 * b32;
    t18 += v3 * b4;
    t19 += v3 * b5;
    t20 += v3 * b6;
    t21 += v3 * b7;
    t22 += v3 * b8;
    t23 += v3 * b9;
    t24 += v3 * b10;
    t25 += v3 * b11;
    t26 += v3 * b12;
    t27 += v3 * b13;
    t28 += v3 * b14;
    t29 += v3 * b15;
    v3 = a3[15];
    t15 += v3 * b0;
    t16 += v3 * b1;
    t17 += v3 * b22;
    t18 += v3 * b32;
    t19 += v3 * b4;
    t20 += v3 * b5;
    t21 += v3 * b6;
    t22 += v3 * b7;
    t23 += v3 * b8;
    t24 += v3 * b9;
    t25 += v3 * b10;
    t26 += v3 * b11;
    t27 += v3 * b12;
    t28 += v3 * b13;
    t29 += v3 * b14;
    t30 += v3 * b15;
    t0 += 38 * t16;
    t1 += 38 * t17;
    t2 += 38 * t18;
    t3 += 38 * t19;
    t4 += 38 * t20;
    t5 += 38 * t21;
    t6 += 38 * t22;
    t7 += 38 * t23;
    t8 += 38 * t24;
    t9 += 38 * t25;
    t10 += 38 * t26;
    t11 += 38 * t27;
    t12 += 38 * t28;
    t13 += 38 * t29;
    t14 += 38 * t30;
    c2 = 1;
    v3 = t0 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t0 = v3 - c2 * 65536;
    v3 = t1 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t1 = v3 - c2 * 65536;
    v3 = t2 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t2 = v3 - c2 * 65536;
    v3 = t3 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t3 = v3 - c2 * 65536;
    v3 = t4 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t4 = v3 - c2 * 65536;
    v3 = t5 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t5 = v3 - c2 * 65536;
    v3 = t6 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t6 = v3 - c2 * 65536;
    v3 = t7 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t7 = v3 - c2 * 65536;
    v3 = t8 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t8 = v3 - c2 * 65536;
    v3 = t9 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t9 = v3 - c2 * 65536;
    v3 = t10 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t10 = v3 - c2 * 65536;
    v3 = t11 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t11 = v3 - c2 * 65536;
    v3 = t12 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t12 = v3 - c2 * 65536;
    v3 = t13 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t13 = v3 - c2 * 65536;
    v3 = t14 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t14 = v3 - c2 * 65536;
    v3 = t15 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t15 = v3 - c2 * 65536;
    t0 += c2 - 1 + 37 * (c2 - 1);
    c2 = 1;
    v3 = t0 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t0 = v3 - c2 * 65536;
    v3 = t1 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t1 = v3 - c2 * 65536;
    v3 = t2 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t2 = v3 - c2 * 65536;
    v3 = t3 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t3 = v3 - c2 * 65536;
    v3 = t4 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t4 = v3 - c2 * 65536;
    v3 = t5 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t5 = v3 - c2 * 65536;
    v3 = t6 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t6 = v3 - c2 * 65536;
    v3 = t7 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t7 = v3 - c2 * 65536;
    v3 = t8 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t8 = v3 - c2 * 65536;
    v3 = t9 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t9 = v3 - c2 * 65536;
    v3 = t10 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t10 = v3 - c2 * 65536;
    v3 = t11 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t11 = v3 - c2 * 65536;
    v3 = t12 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t12 = v3 - c2 * 65536;
    v3 = t13 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t13 = v3 - c2 * 65536;
    v3 = t14 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t14 = v3 - c2 * 65536;
    v3 = t15 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t15 = v3 - c2 * 65536;
    t0 += c2 - 1 + 37 * (c2 - 1);
    o[0] = t0;
    o[1] = t1;
    o[2] = t2;
    o[3] = t3;
    o[4] = t4;
    o[5] = t5;
    o[6] = t6;
    o[7] = t7;
    o[8] = t8;
    o[9] = t9;
    o[10] = t10;
    o[11] = t11;
    o[12] = t12;
    o[13] = t13;
    o[14] = t14;
    o[15] = t15;
  }
  function square(o, a3) {
    mul(o, a3, a3);
  }
  function inv25519(o, i2) {
    const c2 = gf();
    let a3;
    for (a3 = 0; a3 < 16; a3++) {
      c2[a3] = i2[a3];
    }
    for (a3 = 253; a3 >= 0; a3--) {
      square(c2, c2);
      if (a3 !== 2 && a3 !== 4) {
        mul(c2, c2, i2);
      }
    }
    for (a3 = 0; a3 < 16; a3++) {
      o[a3] = c2[a3];
    }
  }
  function pow2523(o, i2) {
    const c2 = gf();
    let a3;
    for (a3 = 0; a3 < 16; a3++) {
      c2[a3] = i2[a3];
    }
    for (a3 = 250; a3 >= 0; a3--) {
      square(c2, c2);
      if (a3 !== 1) {
        mul(c2, c2, i2);
      }
    }
    for (a3 = 0; a3 < 16; a3++) {
      o[a3] = c2[a3];
    }
  }
  function edadd(p3, q2) {
    const a3 = gf(), b3 = gf(), c2 = gf(), d2 = gf(), e = gf(), f3 = gf(), g3 = gf(), h4 = gf(), t = gf();
    sub(a3, p3[1], p3[0]);
    sub(t, q2[1], q2[0]);
    mul(a3, a3, t);
    add(b3, p3[0], p3[1]);
    add(t, q2[0], q2[1]);
    mul(b3, b3, t);
    mul(c2, p3[3], q2[3]);
    mul(c2, c2, D22);
    mul(d2, p3[2], q2[2]);
    add(d2, d2, d2);
    sub(e, b3, a3);
    sub(f3, d2, c2);
    add(g3, d2, c2);
    add(h4, b3, a3);
    mul(p3[0], e, f3);
    mul(p3[1], h4, g3);
    mul(p3[2], g3, f3);
    mul(p3[3], e, h4);
  }
  function cswap(p3, q2, b3) {
    for (let i2 = 0; i2 < 4; i2++) {
      sel25519(p3[i2], q2[i2], b3);
    }
  }
  function pack(r, p3) {
    const tx = gf(), ty = gf(), zi = gf();
    inv25519(zi, p3[2]);
    mul(tx, p3[0], zi);
    mul(ty, p3[1], zi);
    pack25519(r, ty);
    r[31] ^= par25519(tx) << 7;
  }
  function scalarmult(p3, q2, s) {
    set25519(p3[0], gf0);
    set25519(p3[1], gf1);
    set25519(p3[2], gf1);
    set25519(p3[3], gf0);
    for (let i2 = 255; i2 >= 0; --i2) {
      const b3 = s[i2 / 8 | 0] >> (i2 & 7) & 1;
      cswap(p3, q2, b3);
      edadd(q2, p3);
      edadd(p3, p3);
      cswap(p3, q2, b3);
    }
  }
  function scalarbase(p3, s) {
    const q2 = [gf(), gf(), gf(), gf()];
    set25519(q2[0], X2);
    set25519(q2[1], Y);
    set25519(q2[2], gf1);
    mul(q2[3], X2, Y);
    scalarmult(p3, q2, s);
  }
  function generateKeyPairFromSeed(seed) {
    if (seed.length !== exports.SEED_LENGTH) {
      throw new Error(`ed25519: seed must be ${exports.SEED_LENGTH} bytes`);
    }
    const d2 = (0, sha512_1.hash)(seed);
    d2[0] &= 248;
    d2[31] &= 127;
    d2[31] |= 64;
    const publicKey = new Uint8Array(32);
    const p3 = [gf(), gf(), gf(), gf()];
    scalarbase(p3, d2);
    pack(publicKey, p3);
    const secretKey = new Uint8Array(64);
    secretKey.set(seed);
    secretKey.set(publicKey, 32);
    return {
      publicKey,
      secretKey
    };
  }
  exports.generateKeyPairFromSeed = generateKeyPairFromSeed;
  function generateKeyPair2(prng) {
    const seed = (0, random_1.randomBytes)(32, prng);
    const result = generateKeyPairFromSeed(seed);
    (0, wipe_12.wipe)(seed);
    return result;
  }
  exports.generateKeyPair = generateKeyPair2;
  function extractPublicKeyFromSecretKey(secretKey) {
    if (secretKey.length !== exports.SECRET_KEY_LENGTH) {
      throw new Error(`ed25519: secret key must be ${exports.SECRET_KEY_LENGTH} bytes`);
    }
    return new Uint8Array(secretKey.subarray(32));
  }
  exports.extractPublicKeyFromSecretKey = extractPublicKeyFromSecretKey;
  const L2 = new Float64Array([
    237,
    211,
    245,
    92,
    26,
    99,
    18,
    88,
    214,
    156,
    247,
    162,
    222,
    249,
    222,
    20,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    16
  ]);
  function modL(r, x2) {
    let carry;
    let i2;
    let j2;
    let k2;
    for (i2 = 63; i2 >= 32; --i2) {
      carry = 0;
      for (j2 = i2 - 32, k2 = i2 - 12; j2 < k2; ++j2) {
        x2[j2] += carry - 16 * x2[i2] * L2[j2 - (i2 - 32)];
        carry = Math.floor((x2[j2] + 128) / 256);
        x2[j2] -= carry * 256;
      }
      x2[j2] += carry;
      x2[i2] = 0;
    }
    carry = 0;
    for (j2 = 0; j2 < 32; j2++) {
      x2[j2] += carry - (x2[31] >> 4) * L2[j2];
      carry = x2[j2] >> 8;
      x2[j2] &= 255;
    }
    for (j2 = 0; j2 < 32; j2++) {
      x2[j2] -= carry * L2[j2];
    }
    for (i2 = 0; i2 < 32; i2++) {
      x2[i2 + 1] += x2[i2] >> 8;
      r[i2] = x2[i2] & 255;
    }
  }
  function reduce(r) {
    const x2 = new Float64Array(64);
    for (let i2 = 0; i2 < 64; i2++) {
      x2[i2] = r[i2];
    }
    for (let i2 = 0; i2 < 64; i2++) {
      r[i2] = 0;
    }
    modL(r, x2);
  }
  function sign(secretKey, message) {
    const x2 = new Float64Array(64);
    const p3 = [gf(), gf(), gf(), gf()];
    const d2 = (0, sha512_1.hash)(secretKey.subarray(0, 32));
    d2[0] &= 248;
    d2[31] &= 127;
    d2[31] |= 64;
    const signature = new Uint8Array(64);
    signature.set(d2.subarray(32), 32);
    const hs2 = new sha512_1.SHA512();
    hs2.update(signature.subarray(32));
    hs2.update(message);
    const r = hs2.digest();
    hs2.clean();
    reduce(r);
    scalarbase(p3, r);
    pack(signature, p3);
    hs2.reset();
    hs2.update(signature.subarray(0, 32));
    hs2.update(secretKey.subarray(32));
    hs2.update(message);
    const h4 = hs2.digest();
    reduce(h4);
    for (let i2 = 0; i2 < 32; i2++) {
      x2[i2] = r[i2];
    }
    for (let i2 = 0; i2 < 32; i2++) {
      for (let j2 = 0; j2 < 32; j2++) {
        x2[i2 + j2] += h4[i2] * d2[j2];
      }
    }
    modL(signature.subarray(32), x2);
    return signature;
  }
  exports.sign = sign;
  function unpackneg(r, p3) {
    const t = gf(), chk = gf(), num = gf(), den = gf(), den2 = gf(), den4 = gf(), den6 = gf();
    set25519(r[2], gf1);
    unpack25519(r[1], p3);
    square(num, r[1]);
    mul(den, num, D2);
    sub(num, num, r[2]);
    add(den, r[2], den);
    square(den2, den);
    square(den4, den2);
    mul(den6, den4, den2);
    mul(t, den6, num);
    mul(t, t, den);
    pow2523(t, t);
    mul(t, t, num);
    mul(t, t, den);
    mul(t, t, den);
    mul(r[0], t, den);
    square(chk, r[0]);
    mul(chk, chk, den);
    if (neq25519(chk, num)) {
      mul(r[0], r[0], I2);
    }
    square(chk, r[0]);
    mul(chk, chk, den);
    if (neq25519(chk, num)) {
      return -1;
    }
    if (par25519(r[0]) === p3[31] >> 7) {
      sub(r[0], gf0, r[0]);
    }
    mul(r[3], r[0], r[1]);
    return 0;
  }
  function verify(publicKey, message, signature) {
    const t = new Uint8Array(32);
    const p3 = [gf(), gf(), gf(), gf()];
    const q2 = [gf(), gf(), gf(), gf()];
    if (signature.length !== exports.SIGNATURE_LENGTH) {
      throw new Error(`ed25519: signature must be ${exports.SIGNATURE_LENGTH} bytes`);
    }
    if (unpackneg(q2, publicKey)) {
      return false;
    }
    const hs2 = new sha512_1.SHA512();
    hs2.update(signature.subarray(0, 32));
    hs2.update(publicKey);
    hs2.update(message);
    const h4 = hs2.digest();
    reduce(h4);
    scalarmult(p3, q2, h4);
    scalarbase(q2, signature.subarray(32));
    edadd(p3, q2);
    pack(t, p3);
    if (verify32(signature, t)) {
      return false;
    }
    return true;
  }
  exports.verify = verify;
  function convertPublicKeyToX25519(publicKey) {
    let q2 = [gf(), gf(), gf(), gf()];
    if (unpackneg(q2, publicKey)) {
      throw new Error("Ed25519: invalid public key");
    }
    let a3 = gf();
    let b3 = gf();
    let y3 = q2[1];
    add(a3, gf1, y3);
    sub(b3, gf1, y3);
    inv25519(b3, b3);
    mul(a3, a3, b3);
    let z2 = new Uint8Array(32);
    pack25519(z2, a3);
    return z2;
  }
  exports.convertPublicKeyToX25519 = convertPublicKeyToX25519;
  function convertSecretKeyToX25519(secretKey) {
    const d2 = (0, sha512_1.hash)(secretKey.subarray(0, 32));
    d2[0] &= 248;
    d2[31] &= 127;
    d2[31] |= 64;
    const o = new Uint8Array(d2.subarray(0, 32));
    (0, wipe_12.wipe)(d2);
    return o;
  }
  exports.convertSecretKeyToX25519 = convertSecretKeyToX25519;
})(ed25519);
const JWT_IRIDIUM_ALG = "EdDSA";
const JWT_IRIDIUM_TYP = "JWT";
const JWT_DELIMITER = ".";
const JWT_ENCODING = "base64url";
const JSON_ENCODING = "utf8";
const DATA_ENCODING = "utf8";
const DID_DELIMITER = ":";
const DID_PREFIX = "did";
const DID_METHOD = "key";
const MULTICODEC_ED25519_ENCODING = "base58btc";
const MULTICODEC_ED25519_BASE = "z";
const MULTICODEC_ED25519_HEADER = "K36";
const KEY_PAIR_SEED_LENGTH = 32;
function encodeJSON(val) {
  return toString(fromString(safeJsonStringify(val), JSON_ENCODING), JWT_ENCODING);
}
function encodeIss(publicKey) {
  const header = fromString(MULTICODEC_ED25519_HEADER, MULTICODEC_ED25519_ENCODING);
  const multicodec = MULTICODEC_ED25519_BASE + toString(concat([header, publicKey]), MULTICODEC_ED25519_ENCODING);
  return [DID_PREFIX, DID_METHOD, multicodec].join(DID_DELIMITER);
}
function encodeSig(bytes) {
  return toString(bytes, JWT_ENCODING);
}
function encodeData(params) {
  return fromString([encodeJSON(params.header), encodeJSON(params.payload)].join(JWT_DELIMITER), DATA_ENCODING);
}
function encodeJWT(params) {
  return [
    encodeJSON(params.header),
    encodeJSON(params.payload),
    encodeSig(params.signature)
  ].join(JWT_DELIMITER);
}
function generateKeyPair(seed = random.randomBytes(KEY_PAIR_SEED_LENGTH)) {
  return ed25519.generateKeyPairFromSeed(seed);
}
async function signJWT(sub, aud, ttl, keyPair, iat = cjs$4.fromMiliseconds(Date.now())) {
  const header = { alg: JWT_IRIDIUM_ALG, typ: JWT_IRIDIUM_TYP };
  const iss = encodeIss(keyPair.publicKey);
  const exp = iat + ttl;
  const payload = { iss, sub, aud, iat, exp };
  const data = encodeData({ header, payload });
  const signature = ed25519.sign(keyPair.secretKey, data);
  return encodeJWT({ header, payload, signature });
}
const PARSE_ERROR = "PARSE_ERROR";
const INVALID_REQUEST = "INVALID_REQUEST";
const METHOD_NOT_FOUND = "METHOD_NOT_FOUND";
const INVALID_PARAMS = "INVALID_PARAMS";
const INTERNAL_ERROR = "INTERNAL_ERROR";
const SERVER_ERROR = "SERVER_ERROR";
const RESERVED_ERROR_CODES = [-32700, -32600, -32601, -32602, -32603];
const STANDARD_ERROR_MAP = {
  [PARSE_ERROR]: { code: -32700, message: "Parse error" },
  [INVALID_REQUEST]: { code: -32600, message: "Invalid Request" },
  [METHOD_NOT_FOUND]: { code: -32601, message: "Method not found" },
  [INVALID_PARAMS]: { code: -32602, message: "Invalid params" },
  [INTERNAL_ERROR]: { code: -32603, message: "Internal error" },
  [SERVER_ERROR]: { code: -32e3, message: "Server error" }
};
const DEFAULT_ERROR = SERVER_ERROR;
function isReservedErrorCode(code) {
  return RESERVED_ERROR_CODES.includes(code);
}
function getError(type) {
  if (!Object.keys(STANDARD_ERROR_MAP).includes(type)) {
    return STANDARD_ERROR_MAP[DEFAULT_ERROR];
  }
  return STANDARD_ERROR_MAP[type];
}
function getErrorByCode(code) {
  const match = Object.values(STANDARD_ERROR_MAP).find((e) => e.code === code);
  if (!match) {
    return STANDARD_ERROR_MAP[DEFAULT_ERROR];
  }
  return match;
}
function parseConnectionError(e, url, type) {
  return e.message.includes("getaddrinfo ENOTFOUND") || e.message.includes("connect ECONNREFUSED") ? new Error(`Unavailable ${type} RPC url at ${url}`) : e;
}
var cjs = {};
var crypto$1 = {};
var hasRequiredCrypto;
function requireCrypto() {
  if (hasRequiredCrypto)
    return crypto$1;
  hasRequiredCrypto = 1;
  Object.defineProperty(crypto$1, "__esModule", { value: true });
  crypto$1.isBrowserCryptoAvailable = crypto$1.getSubtleCrypto = crypto$1.getBrowerCrypto = void 0;
  function getBrowerCrypto() {
    return (commonjsGlobal === null || commonjsGlobal === void 0 ? void 0 : commonjsGlobal.crypto) || (commonjsGlobal === null || commonjsGlobal === void 0 ? void 0 : commonjsGlobal.msCrypto) || {};
  }
  crypto$1.getBrowerCrypto = getBrowerCrypto;
  function getSubtleCrypto() {
    const browserCrypto = getBrowerCrypto();
    return browserCrypto.subtle || browserCrypto.webkitSubtle;
  }
  crypto$1.getSubtleCrypto = getSubtleCrypto;
  function isBrowserCryptoAvailable() {
    return !!getBrowerCrypto() && !!getSubtleCrypto();
  }
  crypto$1.isBrowserCryptoAvailable = isBrowserCryptoAvailable;
  return crypto$1;
}
var env = {};
var hasRequiredEnv;
function requireEnv() {
  if (hasRequiredEnv)
    return env;
  hasRequiredEnv = 1;
  Object.defineProperty(env, "__esModule", { value: true });
  env.isBrowser = env.isNode = env.isReactNative = void 0;
  function isReactNative() {
    return typeof document === "undefined" && typeof navigator !== "undefined" && navigator.product === "ReactNative";
  }
  env.isReactNative = isReactNative;
  function isNode() {
    return typeof process$1 !== "undefined" && typeof process$1.versions !== "undefined" && typeof process$1.versions.node !== "undefined";
  }
  env.isNode = isNode;
  function isBrowser() {
    return !isReactNative() && !isNode();
  }
  env.isBrowser = isBrowser;
  return env;
}
(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  const tslib_1 = require$$0$2;
  tslib_1.__exportStar(requireCrypto(), exports);
  tslib_1.__exportStar(requireEnv(), exports);
})(cjs);
function payloadId(entropy = 3) {
  const date = Date.now() * Math.pow(10, entropy);
  const extra = Math.floor(Math.random() * Math.pow(10, entropy));
  return date + extra;
}
function getBigIntRpcId(entropy = 6) {
  return BigInt(payloadId(entropy));
}
function formatJsonRpcRequest(method, params, id) {
  return {
    id: id || payloadId(),
    jsonrpc: "2.0",
    method,
    params
  };
}
function formatJsonRpcResult(id, result) {
  return {
    id,
    jsonrpc: "2.0",
    result
  };
}
function formatJsonRpcError(id, error, data) {
  return {
    id,
    jsonrpc: "2.0",
    error: formatErrorMessage(error)
  };
}
function formatErrorMessage(error, data) {
  if (typeof error === "undefined") {
    return getError(INTERNAL_ERROR);
  }
  if (typeof error === "string") {
    error = Object.assign(Object.assign({}, getError(SERVER_ERROR)), { message: error });
  }
  if (isReservedErrorCode(error.code)) {
    error = getErrorByCode(error.code);
  }
  return error;
}
class IEvents2 {
}
class IBaseJsonRpcProvider extends IEvents2 {
  constructor() {
    super();
  }
}
class IJsonRpcProvider extends IBaseJsonRpcProvider {
  constructor(connection) {
    super();
  }
}
const HTTP_REGEX = "^https?:";
const WS_REGEX = "^wss?:";
function getUrlProtocol(url) {
  const matches = url.match(new RegExp(/^\w+:/, "gi"));
  if (!matches || !matches.length)
    return;
  return matches[0];
}
function matchRegexProtocol(url, regex) {
  const protocol = getUrlProtocol(url);
  if (typeof protocol === "undefined")
    return false;
  return new RegExp(regex).test(protocol);
}
function isHttpUrl(url) {
  return matchRegexProtocol(url, HTTP_REGEX);
}
function isWsUrl(url) {
  return matchRegexProtocol(url, WS_REGEX);
}
function isLocalhostUrl(url) {
  return new RegExp("wss?://localhost(:d{2,5})?").test(url);
}
function isJsonRpcPayload(payload) {
  return typeof payload === "object" && "id" in payload && "jsonrpc" in payload && payload.jsonrpc === "2.0";
}
function isJsonRpcRequest(payload) {
  return isJsonRpcPayload(payload) && "method" in payload;
}
function isJsonRpcResponse(payload) {
  return isJsonRpcPayload(payload) && (isJsonRpcResult(payload) || isJsonRpcError(payload));
}
function isJsonRpcResult(payload) {
  return "result" in payload;
}
function isJsonRpcError(payload) {
  return "error" in payload;
}
class JsonRpcProvider extends IJsonRpcProvider {
  constructor(connection) {
    super(connection);
    this.events = new eventsExports.EventEmitter();
    this.hasRegisteredEventListeners = false;
    this.connection = this.setConnection(connection);
    if (this.connection.connected) {
      this.registerEventListeners();
    }
  }
  async connect(connection = this.connection) {
    await this.open(connection);
  }
  async disconnect() {
    await this.close();
  }
  on(event, listener) {
    this.events.on(event, listener);
  }
  once(event, listener) {
    this.events.once(event, listener);
  }
  off(event, listener) {
    this.events.off(event, listener);
  }
  removeListener(event, listener) {
    this.events.removeListener(event, listener);
  }
  async request(request, context) {
    return this.requestStrict(formatJsonRpcRequest(request.method, request.params || [], request.id || getBigIntRpcId().toString()), context);
  }
  async requestStrict(request, context) {
    return new Promise(async (resolve, reject) => {
      if (!this.connection.connected) {
        try {
          await this.open();
        } catch (e) {
          reject(e);
        }
      }
      this.events.on(`${request.id}`, (response) => {
        if (isJsonRpcError(response)) {
          reject(response.error);
        } else {
          resolve(response.result);
        }
      });
      try {
        await this.connection.send(request, context);
      } catch (e) {
        reject(e);
      }
    });
  }
  setConnection(connection = this.connection) {
    return connection;
  }
  onPayload(payload) {
    this.events.emit("payload", payload);
    if (isJsonRpcResponse(payload)) {
      this.events.emit(`${payload.id}`, payload);
    } else {
      this.events.emit("message", {
        type: payload.method,
        data: payload.params
      });
    }
  }
  onClose(event) {
    if (event && event.code === 3e3) {
      this.events.emit("error", new Error(`WebSocket connection closed abnormally with code: ${event.code} ${event.reason ? `(${event.reason})` : ""}`));
    }
    this.events.emit("disconnect");
  }
  async open(connection = this.connection) {
    if (this.connection === connection && this.connection.connected)
      return;
    if (this.connection.connected)
      this.close();
    if (typeof connection === "string") {
      await this.connection.open(connection);
      connection = this.connection;
    }
    this.connection = this.setConnection(connection);
    await this.connection.open();
    this.registerEventListeners();
    this.events.emit("connect");
  }
  async close() {
    await this.connection.close();
  }
  registerEventListeners() {
    if (this.hasRegisteredEventListeners)
      return;
    this.connection.on("payload", (payload) => this.onPayload(payload));
    this.connection.on("close", (event) => this.onClose(event));
    this.connection.on("error", (error) => this.events.emit("error", error));
    this.connection.on("register_error", (error) => this.onClose());
    this.hasRegisteredEventListeners = true;
  }
}
const w$1 = () => typeof WebSocket < "u" ? WebSocket : typeof global < "u" && typeof global.WebSocket < "u" ? global.WebSocket : typeof window < "u" && typeof window.WebSocket < "u" ? window.WebSocket : typeof self < "u" && typeof self.WebSocket < "u" ? self.WebSocket : require("ws"), b2 = () => typeof WebSocket < "u" || typeof global < "u" && typeof global.WebSocket < "u" || typeof window < "u" && typeof window.WebSocket < "u" || typeof self < "u" && typeof self.WebSocket < "u", a2 = (c2) => c2.split("?")[0], h3 = 10, S$1 = w$1();
let f$1 = class f {
  constructor(e) {
    if (this.url = e, this.events = new eventsExports.EventEmitter(), this.registering = false, !isWsUrl(e))
      throw new Error(`Provided URL is not compatible with WebSocket connection: ${e}`);
    this.url = e;
  }
  get connected() {
    return typeof this.socket < "u";
  }
  get connecting() {
    return this.registering;
  }
  on(e, t) {
    this.events.on(e, t);
  }
  once(e, t) {
    this.events.once(e, t);
  }
  off(e, t) {
    this.events.off(e, t);
  }
  removeListener(e, t) {
    this.events.removeListener(e, t);
  }
  async open(e = this.url) {
    await this.register(e);
  }
  async close() {
    return new Promise((e, t) => {
      if (typeof this.socket > "u") {
        t(new Error("Connection already closed"));
        return;
      }
      this.socket.onclose = (n2) => {
        this.onClose(n2), e();
      }, this.socket.close();
    });
  }
  async send(e) {
    typeof this.socket > "u" && (this.socket = await this.register());
    try {
      this.socket.send(safeJsonStringify(e));
    } catch (t) {
      this.onError(e.id, t);
    }
  }
  register(e = this.url) {
    if (!isWsUrl(e))
      throw new Error(`Provided URL is not compatible with WebSocket connection: ${e}`);
    if (this.registering) {
      const t = this.events.getMaxListeners();
      return (this.events.listenerCount("register_error") >= t || this.events.listenerCount("open") >= t) && this.events.setMaxListeners(t + 1), new Promise((n2, o) => {
        this.events.once("register_error", (s) => {
          this.resetMaxListeners(), o(s);
        }), this.events.once("open", () => {
          if (this.resetMaxListeners(), typeof this.socket > "u")
            return o(new Error("WebSocket connection is missing or invalid"));
          n2(this.socket);
        });
      });
    }
    return this.url = e, this.registering = true, new Promise((t, n2) => {
      const o = new URLSearchParams(e).get("origin"), s = cjs.isReactNative() ? { headers: { origin: o } } : { rejectUnauthorized: !isLocalhostUrl(e) }, i2 = new S$1(e, [], s);
      b2() ? i2.onerror = (r) => {
        const l2 = r;
        n2(this.emitError(l2.error));
      } : i2.on("error", (r) => {
        n2(this.emitError(r));
      }), i2.onopen = () => {
        this.onOpen(i2), t(i2);
      };
    });
  }
  onOpen(e) {
    e.onmessage = (t) => this.onPayload(t), e.onclose = (t) => this.onClose(t), this.socket = e, this.registering = false, this.events.emit("open");
  }
  onClose(e) {
    this.socket = void 0, this.registering = false, this.events.emit("close", e);
  }
  onPayload(e) {
    if (typeof e.data > "u")
      return;
    const t = typeof e.data == "string" ? safeJsonParse(e.data) : e.data;
    this.events.emit("payload", t);
  }
  onError(e, t) {
    const n2 = this.parseError(t), o = n2.message || n2.toString(), s = formatJsonRpcError(e, o);
    this.events.emit("payload", s);
  }
  parseError(e, t = this.url) {
    return parseConnectionError(e, a2(t), "WS");
  }
  resetMaxListeners() {
    this.events.getMaxListeners() > h3 && this.events.setMaxListeners(h3);
  }
  emitError(e) {
    const t = this.parseError(new Error((e == null ? void 0 : e.message) || `WebSocket connection failed for host: ${a2(this.url)}`));
    return this.events.emit("register_error", t), t;
  }
};
var lodash_isequal = { exports: {} };
lodash_isequal.exports;
(function(module, exports) {
  var LARGE_ARRAY_SIZE = 200;
  var HASH_UNDEFINED = "__lodash_hash_undefined__";
  var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
  var MAX_SAFE_INTEGER = 9007199254740991;
  var argsTag = "[object Arguments]", arrayTag = "[object Array]", asyncTag = "[object AsyncFunction]", boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag = "[object Map]", numberTag = "[object Number]", nullTag = "[object Null]", objectTag = "[object Object]", promiseTag = "[object Promise]", proxyTag = "[object Proxy]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]", undefinedTag = "[object Undefined]", weakMapTag = "[object WeakMap]";
  var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
  var reIsHostCtor = /^\[object .+?Constructor\]$/;
  var reIsUint = /^(?:0|[1-9]\d*)$/;
  var typedArrayTags = {};
  typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
  typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
  var freeGlobal = typeof commonjsGlobal == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
  var freeSelf = typeof self == "object" && self && self.Object === Object && self;
  var root = freeGlobal || freeSelf || Function("return this")();
  var freeExports = exports && !exports.nodeType && exports;
  var freeModule = freeExports && true && module && !module.nodeType && module;
  var moduleExports = freeModule && freeModule.exports === freeExports;
  var freeProcess = moduleExports && freeGlobal.process;
  var nodeUtil = function() {
    try {
      return freeProcess && freeProcess.binding && freeProcess.binding("util");
    } catch (e) {
    }
  }();
  var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
  function arrayFilter(array, predicate) {
    var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
    while (++index < length) {
      var value = array[index];
      if (predicate(value, index, array)) {
        result[resIndex++] = value;
      }
    }
    return result;
  }
  function arrayPush(array, values) {
    var index = -1, length = values.length, offset = array.length;
    while (++index < length) {
      array[offset + index] = values[index];
    }
    return array;
  }
  function arraySome(array, predicate) {
    var index = -1, length = array == null ? 0 : array.length;
    while (++index < length) {
      if (predicate(array[index], index, array)) {
        return true;
      }
    }
    return false;
  }
  function baseTimes(n2, iteratee) {
    var index = -1, result = Array(n2);
    while (++index < n2) {
      result[index] = iteratee(index);
    }
    return result;
  }
  function baseUnary(func) {
    return function(value) {
      return func(value);
    };
  }
  function cacheHas(cache, key) {
    return cache.has(key);
  }
  function getValue(object, key) {
    return object == null ? void 0 : object[key];
  }
  function mapToArray(map) {
    var index = -1, result = Array(map.size);
    map.forEach(function(value, key) {
      result[++index] = [key, value];
    });
    return result;
  }
  function overArg(func, transform) {
    return function(arg) {
      return func(transform(arg));
    };
  }
  function setToArray(set2) {
    var index = -1, result = Array(set2.size);
    set2.forEach(function(value) {
      result[++index] = value;
    });
    return result;
  }
  var arrayProto = Array.prototype, funcProto = Function.prototype, objectProto = Object.prototype;
  var coreJsData = root["__core-js_shared__"];
  var funcToString = funcProto.toString;
  var hasOwnProperty = objectProto.hasOwnProperty;
  var maskSrcKey = function() {
    var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
    return uid ? "Symbol(src)_1." + uid : "";
  }();
  var nativeObjectToString = objectProto.toString;
  var reIsNative = RegExp(
    "^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  var Buffer2 = moduleExports ? root.Buffer : void 0, Symbol2 = root.Symbol, Uint8Array2 = root.Uint8Array, propertyIsEnumerable = objectProto.propertyIsEnumerable, splice = arrayProto.splice, symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
  var nativeGetSymbols = Object.getOwnPropertySymbols, nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : void 0, nativeKeys = overArg(Object.keys, Object);
  var DataView2 = getNative(root, "DataView"), Map2 = getNative(root, "Map"), Promise2 = getNative(root, "Promise"), Set2 = getNative(root, "Set"), WeakMap = getNative(root, "WeakMap"), nativeCreate = getNative(Object, "create");
  var dataViewCtorString = toSource(DataView2), mapCtorString = toSource(Map2), promiseCtorString = toSource(Promise2), setCtorString = toSource(Set2), weakMapCtorString = toSource(WeakMap);
  var symbolProto = Symbol2 ? Symbol2.prototype : void 0, symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
  function Hash(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }
  function hashClear() {
    this.__data__ = nativeCreate ? nativeCreate(null) : {};
    this.size = 0;
  }
  function hashDelete(key) {
    var result = this.has(key) && delete this.__data__[key];
    this.size -= result ? 1 : 0;
    return result;
  }
  function hashGet(key) {
    var data = this.__data__;
    if (nativeCreate) {
      var result = data[key];
      return result === HASH_UNDEFINED ? void 0 : result;
    }
    return hasOwnProperty.call(data, key) ? data[key] : void 0;
  }
  function hashHas(key) {
    var data = this.__data__;
    return nativeCreate ? data[key] !== void 0 : hasOwnProperty.call(data, key);
  }
  function hashSet(key, value) {
    var data = this.__data__;
    this.size += this.has(key) ? 0 : 1;
    data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
    return this;
  }
  Hash.prototype.clear = hashClear;
  Hash.prototype["delete"] = hashDelete;
  Hash.prototype.get = hashGet;
  Hash.prototype.has = hashHas;
  Hash.prototype.set = hashSet;
  function ListCache(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }
  function listCacheClear() {
    this.__data__ = [];
    this.size = 0;
  }
  function listCacheDelete(key) {
    var data = this.__data__, index = assocIndexOf(data, key);
    if (index < 0) {
      return false;
    }
    var lastIndex = data.length - 1;
    if (index == lastIndex) {
      data.pop();
    } else {
      splice.call(data, index, 1);
    }
    --this.size;
    return true;
  }
  function listCacheGet(key) {
    var data = this.__data__, index = assocIndexOf(data, key);
    return index < 0 ? void 0 : data[index][1];
  }
  function listCacheHas(key) {
    return assocIndexOf(this.__data__, key) > -1;
  }
  function listCacheSet(key, value) {
    var data = this.__data__, index = assocIndexOf(data, key);
    if (index < 0) {
      ++this.size;
      data.push([key, value]);
    } else {
      data[index][1] = value;
    }
    return this;
  }
  ListCache.prototype.clear = listCacheClear;
  ListCache.prototype["delete"] = listCacheDelete;
  ListCache.prototype.get = listCacheGet;
  ListCache.prototype.has = listCacheHas;
  ListCache.prototype.set = listCacheSet;
  function MapCache(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }
  function mapCacheClear() {
    this.size = 0;
    this.__data__ = {
      "hash": new Hash(),
      "map": new (Map2 || ListCache)(),
      "string": new Hash()
    };
  }
  function mapCacheDelete(key) {
    var result = getMapData(this, key)["delete"](key);
    this.size -= result ? 1 : 0;
    return result;
  }
  function mapCacheGet(key) {
    return getMapData(this, key).get(key);
  }
  function mapCacheHas(key) {
    return getMapData(this, key).has(key);
  }
  function mapCacheSet(key, value) {
    var data = getMapData(this, key), size = data.size;
    data.set(key, value);
    this.size += data.size == size ? 0 : 1;
    return this;
  }
  MapCache.prototype.clear = mapCacheClear;
  MapCache.prototype["delete"] = mapCacheDelete;
  MapCache.prototype.get = mapCacheGet;
  MapCache.prototype.has = mapCacheHas;
  MapCache.prototype.set = mapCacheSet;
  function SetCache(values) {
    var index = -1, length = values == null ? 0 : values.length;
    this.__data__ = new MapCache();
    while (++index < length) {
      this.add(values[index]);
    }
  }
  function setCacheAdd(value) {
    this.__data__.set(value, HASH_UNDEFINED);
    return this;
  }
  function setCacheHas(value) {
    return this.__data__.has(value);
  }
  SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
  SetCache.prototype.has = setCacheHas;
  function Stack(entries) {
    var data = this.__data__ = new ListCache(entries);
    this.size = data.size;
  }
  function stackClear() {
    this.__data__ = new ListCache();
    this.size = 0;
  }
  function stackDelete(key) {
    var data = this.__data__, result = data["delete"](key);
    this.size = data.size;
    return result;
  }
  function stackGet(key) {
    return this.__data__.get(key);
  }
  function stackHas(key) {
    return this.__data__.has(key);
  }
  function stackSet(key, value) {
    var data = this.__data__;
    if (data instanceof ListCache) {
      var pairs = data.__data__;
      if (!Map2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
        pairs.push([key, value]);
        this.size = ++data.size;
        return this;
      }
      data = this.__data__ = new MapCache(pairs);
    }
    data.set(key, value);
    this.size = data.size;
    return this;
  }
  Stack.prototype.clear = stackClear;
  Stack.prototype["delete"] = stackDelete;
  Stack.prototype.get = stackGet;
  Stack.prototype.has = stackHas;
  Stack.prototype.set = stackSet;
  function arrayLikeKeys(value, inherited) {
    var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
    for (var key in value) {
      if (hasOwnProperty.call(value, key) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
      (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
      isIndex(key, length)))) {
        result.push(key);
      }
    }
    return result;
  }
  function assocIndexOf(array, key) {
    var length = array.length;
    while (length--) {
      if (eq(array[length][0], key)) {
        return length;
      }
    }
    return -1;
  }
  function baseGetAllKeys(object, keysFunc, symbolsFunc) {
    var result = keysFunc(object);
    return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
  }
  function baseGetTag(value) {
    if (value == null) {
      return value === void 0 ? undefinedTag : nullTag;
    }
    return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
  }
  function baseIsArguments(value) {
    return isObjectLike(value) && baseGetTag(value) == argsTag;
  }
  function baseIsEqual(value, other, bitmask, customizer, stack) {
    if (value === other) {
      return true;
    }
    if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
      return value !== value && other !== other;
    }
    return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
  }
  function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
    var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
    objTag = objTag == argsTag ? objectTag : objTag;
    othTag = othTag == argsTag ? objectTag : othTag;
    var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
    if (isSameTag && isBuffer(object)) {
      if (!isBuffer(other)) {
        return false;
      }
      objIsArr = true;
      objIsObj = false;
    }
    if (isSameTag && !objIsObj) {
      stack || (stack = new Stack());
      return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
    }
    if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
      var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
      if (objIsWrapped || othIsWrapped) {
        var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
        stack || (stack = new Stack());
        return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
      }
    }
    if (!isSameTag) {
      return false;
    }
    stack || (stack = new Stack());
    return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
  }
  function baseIsNative(value) {
    if (!isObject(value) || isMasked(value)) {
      return false;
    }
    var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
    return pattern.test(toSource(value));
  }
  function baseIsTypedArray(value) {
    return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
  }
  function baseKeys(object) {
    if (!isPrototype(object)) {
      return nativeKeys(object);
    }
    var result = [];
    for (var key in Object(object)) {
      if (hasOwnProperty.call(object, key) && key != "constructor") {
        result.push(key);
      }
    }
    return result;
  }
  function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
    var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
    if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
      return false;
    }
    var stacked = stack.get(array);
    if (stacked && stack.get(other)) {
      return stacked == other;
    }
    var index = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : void 0;
    stack.set(array, other);
    stack.set(other, array);
    while (++index < arrLength) {
      var arrValue = array[index], othValue = other[index];
      if (customizer) {
        var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
      }
      if (compared !== void 0) {
        if (compared) {
          continue;
        }
        result = false;
        break;
      }
      if (seen) {
        if (!arraySome(other, function(othValue2, othIndex) {
          if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
            return seen.push(othIndex);
          }
        })) {
          result = false;
          break;
        }
      } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
        result = false;
        break;
      }
    }
    stack["delete"](array);
    stack["delete"](other);
    return result;
  }
  function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
    switch (tag) {
      case dataViewTag:
        if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
          return false;
        }
        object = object.buffer;
        other = other.buffer;
      case arrayBufferTag:
        if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array2(object), new Uint8Array2(other))) {
          return false;
        }
        return true;
      case boolTag:
      case dateTag:
      case numberTag:
        return eq(+object, +other);
      case errorTag:
        return object.name == other.name && object.message == other.message;
      case regexpTag:
      case stringTag:
        return object == other + "";
      case mapTag:
        var convert2 = mapToArray;
      case setTag:
        var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
        convert2 || (convert2 = setToArray);
        if (object.size != other.size && !isPartial) {
          return false;
        }
        var stacked = stack.get(object);
        if (stacked) {
          return stacked == other;
        }
        bitmask |= COMPARE_UNORDERED_FLAG;
        stack.set(object, other);
        var result = equalArrays(convert2(object), convert2(other), bitmask, customizer, equalFunc, stack);
        stack["delete"](object);
        return result;
      case symbolTag:
        if (symbolValueOf) {
          return symbolValueOf.call(object) == symbolValueOf.call(other);
        }
    }
    return false;
  }
  function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
    var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
    if (objLength != othLength && !isPartial) {
      return false;
    }
    var index = objLength;
    while (index--) {
      var key = objProps[index];
      if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
        return false;
      }
    }
    var stacked = stack.get(object);
    if (stacked && stack.get(other)) {
      return stacked == other;
    }
    var result = true;
    stack.set(object, other);
    stack.set(other, object);
    var skipCtor = isPartial;
    while (++index < objLength) {
      key = objProps[index];
      var objValue = object[key], othValue = other[key];
      if (customizer) {
        var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
      }
      if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
        result = false;
        break;
      }
      skipCtor || (skipCtor = key == "constructor");
    }
    if (result && !skipCtor) {
      var objCtor = object.constructor, othCtor = other.constructor;
      if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
        result = false;
      }
    }
    stack["delete"](object);
    stack["delete"](other);
    return result;
  }
  function getAllKeys(object) {
    return baseGetAllKeys(object, keys2, getSymbols);
  }
  function getMapData(map, key) {
    var data = map.__data__;
    return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
  }
  function getNative(object, key) {
    var value = getValue(object, key);
    return baseIsNative(value) ? value : void 0;
  }
  function getRawTag(value) {
    var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
    try {
      value[symToStringTag] = void 0;
      var unmasked = true;
    } catch (e) {
    }
    var result = nativeObjectToString.call(value);
    if (unmasked) {
      if (isOwn) {
        value[symToStringTag] = tag;
      } else {
        delete value[symToStringTag];
      }
    }
    return result;
  }
  var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
    if (object == null) {
      return [];
    }
    object = Object(object);
    return arrayFilter(nativeGetSymbols(object), function(symbol) {
      return propertyIsEnumerable.call(object, symbol);
    });
  };
  var getTag = baseGetTag;
  if (DataView2 && getTag(new DataView2(new ArrayBuffer(1))) != dataViewTag || Map2 && getTag(new Map2()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set2 && getTag(new Set2()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
    getTag = function(value) {
      var result = baseGetTag(value), Ctor = result == objectTag ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
      if (ctorString) {
        switch (ctorString) {
          case dataViewCtorString:
            return dataViewTag;
          case mapCtorString:
            return mapTag;
          case promiseCtorString:
            return promiseTag;
          case setCtorString:
            return setTag;
          case weakMapCtorString:
            return weakMapTag;
        }
      }
      return result;
    };
  }
  function isIndex(value, length) {
    length = length == null ? MAX_SAFE_INTEGER : length;
    return !!length && (typeof value == "number" || reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
  }
  function isKeyable(value) {
    var type = typeof value;
    return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
  }
  function isMasked(func) {
    return !!maskSrcKey && maskSrcKey in func;
  }
  function isPrototype(value) {
    var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
    return value === proto;
  }
  function objectToString(value) {
    return nativeObjectToString.call(value);
  }
  function toSource(func) {
    if (func != null) {
      try {
        return funcToString.call(func);
      } catch (e) {
      }
      try {
        return func + "";
      } catch (e) {
      }
    }
    return "";
  }
  function eq(value, other) {
    return value === other || value !== value && other !== other;
  }
  var isArguments = baseIsArguments(/* @__PURE__ */ function() {
    return arguments;
  }()) ? baseIsArguments : function(value) {
    return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
  };
  var isArray = Array.isArray;
  function isArrayLike(value) {
    return value != null && isLength(value.length) && !isFunction(value);
  }
  var isBuffer = nativeIsBuffer || stubFalse;
  function isEqual(value, other) {
    return baseIsEqual(value, other);
  }
  function isFunction(value) {
    if (!isObject(value)) {
      return false;
    }
    var tag = baseGetTag(value);
    return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
  }
  function isLength(value) {
    return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
  }
  function isObject(value) {
    var type = typeof value;
    return value != null && (type == "object" || type == "function");
  }
  function isObjectLike(value) {
    return value != null && typeof value == "object";
  }
  var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
  function keys2(object) {
    return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
  }
  function stubArray() {
    return [];
  }
  function stubFalse() {
    return false;
  }
  module.exports = isEqual;
})(lodash_isequal, lodash_isequal.exports);
var lodash_isequalExports = lodash_isequal.exports;
const Gi = /* @__PURE__ */ getDefaultExportFromCjs(lodash_isequalExports);
function unfetch_module(e, n2) {
  return n2 = n2 || {}, new Promise(function(t, r) {
    var s = new XMLHttpRequest(), o = [], u3 = [], i2 = {}, a3 = function() {
      return { ok: 2 == (s.status / 100 | 0), statusText: s.statusText, status: s.status, url: s.responseURL, text: function() {
        return Promise.resolve(s.responseText);
      }, json: function() {
        return Promise.resolve(s.responseText).then(JSON.parse);
      }, blob: function() {
        return Promise.resolve(new Blob([s.response]));
      }, clone: a3, headers: { keys: function() {
        return o;
      }, entries: function() {
        return u3;
      }, get: function(e2) {
        return i2[e2.toLowerCase()];
      }, has: function(e2) {
        return e2.toLowerCase() in i2;
      } } };
    };
    for (var l2 in s.open(n2.method || "get", e, true), s.onload = function() {
      s.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function(e2, n3, t2) {
        o.push(n3 = n3.toLowerCase()), u3.push([n3, t2]), i2[n3] = i2[n3] ? i2[n3] + "," + t2 : t2;
      }), t(a3());
    }, s.onerror = r, s.withCredentials = "include" == n2.credentials, n2.headers)
      s.setRequestHeader(l2, n2.headers[l2]);
    s.send(n2.body || null);
  });
}
const unfetch_module$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: unfetch_module
}, Symbol.toStringTag, { value: "Module" }));
const require$$0 = /* @__PURE__ */ getAugmentedNamespace(unfetch_module$1);
var browser = self.fetch || (self.fetch = require$$0.default || require$$0);
const Yi = /* @__PURE__ */ getDefaultExportFromCjs(browser);
var define_process_env_default = {};
function Hi(n2, e) {
  if (n2.length >= 255)
    throw new TypeError("Alphabet too long");
  for (var t = new Uint8Array(256), i2 = 0; i2 < t.length; i2++)
    t[i2] = 255;
  for (var s = 0; s < n2.length; s++) {
    var r = n2.charAt(s), o = r.charCodeAt(0);
    if (t[o] !== 255)
      throw new TypeError(r + " is ambiguous");
    t[o] = s;
  }
  var a3 = n2.length, h4 = n2.charAt(0), l2 = Math.log(a3) / Math.log(256), d2 = Math.log(256) / Math.log(a3);
  function p3(u3) {
    if (u3 instanceof Uint8Array || (ArrayBuffer.isView(u3) ? u3 = new Uint8Array(u3.buffer, u3.byteOffset, u3.byteLength) : Array.isArray(u3) && (u3 = Uint8Array.from(u3))), !(u3 instanceof Uint8Array))
      throw new TypeError("Expected Uint8Array");
    if (u3.length === 0)
      return "";
    for (var m2 = 0, z2 = 0, I2 = 0, _3 = u3.length; I2 !== _3 && u3[I2] === 0; )
      I2++, m2++;
    for (var T2 = (_3 - I2) * d2 + 1 >>> 0, f3 = new Uint8Array(T2); I2 !== _3; ) {
      for (var S2 = u3[I2], A2 = 0, C2 = T2 - 1; (S2 !== 0 || A2 < z2) && C2 !== -1; C2--, A2++)
        S2 += 256 * f3[C2] >>> 0, f3[C2] = S2 % a3 >>> 0, S2 = S2 / a3 >>> 0;
      if (S2 !== 0)
        throw new Error("Non-zero carry");
      z2 = A2, I2++;
    }
    for (var x2 = T2 - z2; x2 !== T2 && f3[x2] === 0; )
      x2++;
    for (var j2 = h4.repeat(m2); x2 < T2; ++x2)
      j2 += n2.charAt(f3[x2]);
    return j2;
  }
  function y3(u3) {
    if (typeof u3 != "string")
      throw new TypeError("Expected String");
    if (u3.length === 0)
      return new Uint8Array();
    var m2 = 0;
    if (u3[m2] !== " ") {
      for (var z2 = 0, I2 = 0; u3[m2] === h4; )
        z2++, m2++;
      for (var _3 = (u3.length - m2) * l2 + 1 >>> 0, T2 = new Uint8Array(_3); u3[m2]; ) {
        var f3 = t[u3.charCodeAt(m2)];
        if (f3 === 255)
          return;
        for (var S2 = 0, A2 = _3 - 1; (f3 !== 0 || S2 < I2) && A2 !== -1; A2--, S2++)
          f3 += a3 * T2[A2] >>> 0, T2[A2] = f3 % 256 >>> 0, f3 = f3 / 256 >>> 0;
        if (f3 !== 0)
          throw new Error("Non-zero carry");
        I2 = S2, m2++;
      }
      if (u3[m2] !== " ") {
        for (var C2 = _3 - I2; C2 !== _3 && T2[C2] === 0; )
          C2++;
        for (var x2 = new Uint8Array(z2 + (_3 - C2)), j2 = z2; C2 !== _3; )
          x2[j2++] = T2[C2++];
        return x2;
      }
    }
  }
  function M2(u3) {
    var m2 = y3(u3);
    if (m2)
      return m2;
    throw new Error(`Non-${e} character`);
  }
  return { encode: p3, decodeUnsafe: y3, decode: M2 };
}
var Ji = Hi, Xi = Ji;
const Ne = (n2) => {
  if (n2 instanceof Uint8Array && n2.constructor.name === "Uint8Array")
    return n2;
  if (n2 instanceof ArrayBuffer)
    return new Uint8Array(n2);
  if (ArrayBuffer.isView(n2))
    return new Uint8Array(n2.buffer, n2.byteOffset, n2.byteLength);
  throw new Error("Unknown type, must be binary type");
}, Wi$1 = (n2) => new TextEncoder().encode(n2), Qi = (n2) => new TextDecoder().decode(n2);
class Zi {
  constructor(e, t, i2) {
    this.name = e, this.prefix = t, this.baseEncode = i2;
  }
  encode(e) {
    if (e instanceof Uint8Array)
      return `${this.prefix}${this.baseEncode(e)}`;
    throw Error("Unknown type, must be binary type");
  }
}
class es {
  constructor(e, t, i2) {
    if (this.name = e, this.prefix = t, t.codePointAt(0) === void 0)
      throw new Error("Invalid prefix character");
    this.prefixCodePoint = t.codePointAt(0), this.baseDecode = i2;
  }
  decode(e) {
    if (typeof e == "string") {
      if (e.codePointAt(0) !== this.prefixCodePoint)
        throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
      return this.baseDecode(e.slice(this.prefix.length));
    } else
      throw Error("Can only multibase decode strings");
  }
  or(e) {
    return Ue(this, e);
  }
}
class ts {
  constructor(e) {
    this.decoders = e;
  }
  or(e) {
    return Ue(this, e);
  }
  decode(e) {
    const t = e[0], i2 = this.decoders[t];
    if (i2)
      return i2.decode(e);
    throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
  }
}
const Ue = (n2, e) => new ts({ ...n2.decoders || { [n2.prefix]: n2 }, ...e.decoders || { [e.prefix]: e } });
class is {
  constructor(e, t, i2, s) {
    this.name = e, this.prefix = t, this.baseEncode = i2, this.baseDecode = s, this.encoder = new Zi(e, t, i2), this.decoder = new es(e, t, s);
  }
  encode(e) {
    return this.encoder.encode(e);
  }
  decode(e) {
    return this.decoder.decode(e);
  }
}
const W = ({ name: n2, prefix: e, encode: t, decode: i2 }) => new is(n2, e, t, i2), B = ({ prefix: n2, name: e, alphabet: t }) => {
  const { encode: i2, decode: s } = Xi(t, e);
  return W({ prefix: n2, name: e, encode: i2, decode: (r) => Ne(s(r)) });
}, ss = (n2, e, t, i2) => {
  const s = {};
  for (let d2 = 0; d2 < e.length; ++d2)
    s[e[d2]] = d2;
  let r = n2.length;
  for (; n2[r - 1] === "="; )
    --r;
  const o = new Uint8Array(r * t / 8 | 0);
  let a3 = 0, h4 = 0, l2 = 0;
  for (let d2 = 0; d2 < r; ++d2) {
    const p3 = s[n2[d2]];
    if (p3 === void 0)
      throw new SyntaxError(`Non-${i2} character`);
    h4 = h4 << t | p3, a3 += t, a3 >= 8 && (a3 -= 8, o[l2++] = 255 & h4 >> a3);
  }
  if (a3 >= t || 255 & h4 << 8 - a3)
    throw new SyntaxError("Unexpected end of data");
  return o;
}, rs = (n2, e, t) => {
  const i2 = e[e.length - 1] === "=", s = (1 << t) - 1;
  let r = "", o = 0, a3 = 0;
  for (let h4 = 0; h4 < n2.length; ++h4)
    for (a3 = a3 << 8 | n2[h4], o += 8; o > t; )
      o -= t, r += e[s & a3 >> o];
  if (o && (r += e[s & a3 << t - o]), i2)
    for (; r.length * t & 7; )
      r += "=";
  return r;
}, g$2 = ({ name: n2, prefix: e, bitsPerChar: t, alphabet: i2 }) => W({ prefix: e, name: n2, encode(s) {
  return rs(s, i2, t);
}, decode(s) {
  return ss(s, i2, t, n2);
} }), ns = W({ prefix: "\0", name: "identity", encode: (n2) => Qi(n2), decode: (n2) => Wi$1(n2) });
var os = Object.freeze({ __proto__: null, identity: ns });
const as$1 = g$2({ prefix: "0", name: "base2", alphabet: "01", bitsPerChar: 1 });
var hs$1 = Object.freeze({ __proto__: null, base2: as$1 });
const cs$1 = g$2({ prefix: "7", name: "base8", alphabet: "01234567", bitsPerChar: 3 });
var us$1 = Object.freeze({ __proto__: null, base8: cs$1 });
const ls$1 = B({ prefix: "9", name: "base10", alphabet: "0123456789" });
var ds$1 = Object.freeze({ __proto__: null, base10: ls$1 });
const gs$1 = g$2({ prefix: "f", name: "base16", alphabet: "0123456789abcdef", bitsPerChar: 4 }), ps$1 = g$2({ prefix: "F", name: "base16upper", alphabet: "0123456789ABCDEF", bitsPerChar: 4 });
var Ds = Object.freeze({ __proto__: null, base16: gs$1, base16upper: ps$1 });
const ys = g$2({ prefix: "b", name: "base32", alphabet: "abcdefghijklmnopqrstuvwxyz234567", bitsPerChar: 5 }), ms = g$2({ prefix: "B", name: "base32upper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567", bitsPerChar: 5 }), bs = g$2({ prefix: "c", name: "base32pad", alphabet: "abcdefghijklmnopqrstuvwxyz234567=", bitsPerChar: 5 }), fs = g$2({ prefix: "C", name: "base32padupper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=", bitsPerChar: 5 }), Es = g$2({ prefix: "v", name: "base32hex", alphabet: "0123456789abcdefghijklmnopqrstuv", bitsPerChar: 5 }), ws = g$2({ prefix: "V", name: "base32hexupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV", bitsPerChar: 5 }), vs = g$2({ prefix: "t", name: "base32hexpad", alphabet: "0123456789abcdefghijklmnopqrstuv=", bitsPerChar: 5 }), Is = g$2({ prefix: "T", name: "base32hexpadupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=", bitsPerChar: 5 }), Cs = g$2({ prefix: "h", name: "base32z", alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769", bitsPerChar: 5 });
var Rs = Object.freeze({ __proto__: null, base32: ys, base32upper: ms, base32pad: bs, base32padupper: fs, base32hex: Es, base32hexupper: ws, base32hexpad: vs, base32hexpadupper: Is, base32z: Cs });
const _s = B({ prefix: "k", name: "base36", alphabet: "0123456789abcdefghijklmnopqrstuvwxyz" }), Ts = B({ prefix: "K", name: "base36upper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ" });
var Ss = Object.freeze({ __proto__: null, base36: _s, base36upper: Ts });
const Ps = B({ name: "base58btc", prefix: "z", alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz" }), xs = B({ name: "base58flickr", prefix: "Z", alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ" });
var Os = Object.freeze({ __proto__: null, base58btc: Ps, base58flickr: xs });
const As = g$2({ prefix: "m", name: "base64", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", bitsPerChar: 6 }), zs = g$2({ prefix: "M", name: "base64pad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", bitsPerChar: 6 }), Ns = g$2({ prefix: "u", name: "base64url", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_", bitsPerChar: 6 }), Us = g$2({ prefix: "U", name: "base64urlpad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=", bitsPerChar: 6 });
var Ls = Object.freeze({ __proto__: null, base64: As, base64pad: zs, base64url: Ns, base64urlpad: Us });
const Le = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"), $s = Le.reduce((n2, e, t) => (n2[t] = e, n2), []), Fs = Le.reduce((n2, e, t) => (n2[e.codePointAt(0)] = t, n2), []);
function Ms(n2) {
  return n2.reduce((e, t) => (e += $s[t], e), "");
}
function ks(n2) {
  const e = [];
  for (const t of n2) {
    const i2 = Fs[t.codePointAt(0)];
    if (i2 === void 0)
      throw new Error(`Non-base256emoji character: ${t}`);
    e.push(i2);
  }
  return new Uint8Array(e);
}
const Ks = W({ prefix: "🚀", name: "base256emoji", encode: Ms, decode: ks });
var Bs = Object.freeze({ __proto__: null, base256emoji: Ks }), Vs = Fe, $e = 128, qs = 127, js = ~qs, Gs = Math.pow(2, 31);
function Fe(n2, e, t) {
  e = e || [], t = t || 0;
  for (var i2 = t; n2 >= Gs; )
    e[t++] = n2 & 255 | $e, n2 /= 128;
  for (; n2 & js; )
    e[t++] = n2 & 255 | $e, n2 >>>= 7;
  return e[t] = n2 | 0, Fe.bytes = t - i2 + 1, e;
}
var Ys = he$1, Hs = 128, Me = 127;
function he$1(n2, i2) {
  var t = 0, i2 = i2 || 0, s = 0, r = i2, o, a3 = n2.length;
  do {
    if (r >= a3)
      throw he$1.bytes = 0, new RangeError("Could not decode varint");
    o = n2[r++], t += s < 28 ? (o & Me) << s : (o & Me) * Math.pow(2, s), s += 7;
  } while (o >= Hs);
  return he$1.bytes = r - i2, t;
}
var Js = Math.pow(2, 7), Xs = Math.pow(2, 14), Ws = Math.pow(2, 21), Qs = Math.pow(2, 28), Zs = Math.pow(2, 35), er = Math.pow(2, 42), tr = Math.pow(2, 49), ir = Math.pow(2, 56), sr2 = Math.pow(2, 63), rr = function(n2) {
  return n2 < Js ? 1 : n2 < Xs ? 2 : n2 < Ws ? 3 : n2 < Qs ? 4 : n2 < Zs ? 5 : n2 < er ? 6 : n2 < tr ? 7 : n2 < ir ? 8 : n2 < sr2 ? 9 : 10;
}, nr = { encode: Vs, decode: Ys, encodingLength: rr }, ke = nr;
const Ke = (n2, e, t = 0) => (ke.encode(n2, e, t), e), Be = (n2) => ke.encodingLength(n2), ce$1 = (n2, e) => {
  const t = e.byteLength, i2 = Be(n2), s = i2 + Be(t), r = new Uint8Array(s + t);
  return Ke(n2, r, 0), Ke(t, r, i2), r.set(e, s), new or(n2, t, e, r);
};
class or {
  constructor(e, t, i2, s) {
    this.code = e, this.size = t, this.digest = i2, this.bytes = s;
  }
}
const Ve = ({ name: n2, code: e, encode: t }) => new ar(n2, e, t);
class ar {
  constructor(e, t, i2) {
    this.name = e, this.code = t, this.encode = i2;
  }
  digest(e) {
    if (e instanceof Uint8Array) {
      const t = this.encode(e);
      return t instanceof Uint8Array ? ce$1(this.code, t) : t.then((i2) => ce$1(this.code, i2));
    } else
      throw Error("Unknown type, must be binary type");
  }
}
const qe = (n2) => async (e) => new Uint8Array(await crypto.subtle.digest(n2, e)), hr$1 = Ve({ name: "sha2-256", code: 18, encode: qe("SHA-256") }), cr$1 = Ve({ name: "sha2-512", code: 19, encode: qe("SHA-512") });
var ur = Object.freeze({ __proto__: null, sha256: hr$1, sha512: cr$1 });
const je = 0, lr$1 = "identity", Ge = Ne, dr = (n2) => ce$1(je, Ge(n2)), gr = { code: je, name: lr$1, encode: Ge, digest: dr };
var pr = Object.freeze({ __proto__: null, identity: gr });
new TextEncoder(), new TextDecoder();
const Ye = { ...os, ...hs$1, ...us$1, ...ds$1, ...Ds, ...Rs, ...Ss, ...Os, ...Ls, ...Bs };
({ ...ur, ...pr });
function He(n2) {
  return globalThis.Buffer != null ? new Uint8Array(n2.buffer, n2.byteOffset, n2.byteLength) : n2;
}
function Dr(n2 = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? He(globalThis.Buffer.allocUnsafe(n2)) : new Uint8Array(n2);
}
function Je(n2, e, t, i2) {
  return { name: n2, prefix: e, encoder: { name: n2, prefix: e, encode: t }, decoder: { decode: i2 } };
}
const Xe = Je("utf8", "u", (n2) => "u" + new TextDecoder("utf8").decode(n2), (n2) => new TextEncoder().encode(n2.substring(1))), ue$1 = Je("ascii", "a", (n2) => {
  let e = "a";
  for (let t = 0; t < n2.length; t++)
    e += String.fromCharCode(n2[t]);
  return e;
}, (n2) => {
  n2 = n2.substring(1);
  const e = Dr(n2.length);
  for (let t = 0; t < n2.length; t++)
    e[t] = n2.charCodeAt(t);
  return e;
}), yr = { utf8: Xe, "utf-8": Xe, hex: Ye.base16, latin1: ue$1, ascii: ue$1, binary: ue$1, ...Ye };
function mr(n2, e = "utf8") {
  const t = yr[e];
  if (!t)
    throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? He(globalThis.Buffer.from(n2, "utf-8")) : t.decoder.decode(`${t.prefix}${n2}`);
}
const le$1 = "wc", We = 2, Q$2 = "core", O$1 = `${le$1}@2:${Q$2}:`, Qe = { name: Q$2, logger: "error" }, Ze = { database: ":memory:" }, et = "crypto", de$1 = "client_ed25519_seed", tt = cjs$4.ONE_DAY, it = "keychain", st = "0.3", rt = "messages", nt = "0.3", ot = cjs$4.SIX_HOURS, at = "publisher", ht = "irn", ct = "error", ge$2 = "wss://relay.walletconnect.com", pe$1 = "wss://relay.walletconnect.org", ut = "relayer", D$2 = { message: "relayer_message", message_ack: "relayer_message_ack", connect: "relayer_connect", disconnect: "relayer_disconnect", error: "relayer_error", connection_stalled: "relayer_connection_stalled", transport_closed: "relayer_transport_closed", publish: "relayer_publish" }, lt = "_subscription", P$1 = { payload: "payload", connect: "connect", disconnect: "disconnect", error: "error" }, dt = cjs$4.ONE_SECOND, gt = "2.11.2", pt = 1e4, Dt = "0.3", yt = "WALLETCONNECT_CLIENT_ID", w2 = { created: "subscription_created", deleted: "subscription_deleted", expired: "subscription_expired", disabled: "subscription_disabled", sync: "subscription_sync", resubscribed: "subscription_resubscribed" }, mt = "subscription", bt = "0.3", ft$1 = cjs$4.FIVE_SECONDS * 1e3, Et = "pairing", wt = "0.3", $$1 = { wc_pairingDelete: { req: { ttl: cjs$4.ONE_DAY, prompt: false, tag: 1e3 }, res: { ttl: cjs$4.ONE_DAY, prompt: false, tag: 1001 } }, wc_pairingPing: { req: { ttl: cjs$4.THIRTY_SECONDS, prompt: false, tag: 1002 }, res: { ttl: cjs$4.THIRTY_SECONDS, prompt: false, tag: 1003 } }, unregistered_method: { req: { ttl: cjs$4.ONE_DAY, prompt: false, tag: 0 }, res: { ttl: cjs$4.ONE_DAY, prompt: false, tag: 0 } } }, V = { create: "pairing_create", expire: "pairing_expire", delete: "pairing_delete", ping: "pairing_ping" }, R$1 = { created: "history_created", updated: "history_updated", deleted: "history_deleted", sync: "history_sync" }, vt = "history", It = "0.3", Ct$1 = "expirer", v$1 = { created: "expirer_created", deleted: "expirer_deleted", expired: "expirer_expired", sync: "expirer_sync" }, Rt = "0.3", Z = "verify-api", F$1 = "https://verify.walletconnect.com", ee = "https://verify.walletconnect.org", _t = [F$1, ee], Tt = "echo", St = "https://echo.walletconnect.com";
class Pt {
  constructor(e, t) {
    this.core = e, this.logger = t, this.keychain = /* @__PURE__ */ new Map(), this.name = it, this.version = st, this.initialized = false, this.storagePrefix = O$1, this.init = async () => {
      if (!this.initialized) {
        const i2 = await this.getKeyChain();
        typeof i2 < "u" && (this.keychain = i2), this.initialized = true;
      }
    }, this.has = (i2) => (this.isInitialized(), this.keychain.has(i2)), this.set = async (i2, s) => {
      this.isInitialized(), this.keychain.set(i2, s), await this.persist();
    }, this.get = (i2) => {
      this.isInitialized();
      const s = this.keychain.get(i2);
      if (typeof s > "u") {
        const { message: r } = N$2("NO_MATCHING_KEY", `${this.name}: ${i2}`);
        throw new Error(r);
      }
      return s;
    }, this.del = async (i2) => {
      this.isInitialized(), this.keychain.delete(i2), await this.persist();
    }, this.core = e, this.logger = E$2(t, this.name);
  }
  get context() {
    return y$2(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  async setKeyChain(e) {
    await this.core.storage.setItem(this.storageKey, rt$1(e));
  }
  async getKeyChain() {
    const e = await this.core.storage.getItem(this.storageKey);
    return typeof e < "u" ? ot$1(e) : void 0;
  }
  async persist() {
    await this.setKeyChain(this.keychain);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = N$2("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class xt {
  constructor(e, t, i2) {
    this.core = e, this.logger = t, this.name = et, this.initialized = false, this.init = async () => {
      this.initialized || (await this.keychain.init(), this.initialized = true);
    }, this.hasKeys = (s) => (this.isInitialized(), this.keychain.has(s)), this.getClientId = async () => {
      this.isInitialized();
      const s = await this.getClientSeed(), r = generateKeyPair(s);
      return encodeIss(r.publicKey);
    }, this.generateKeyPair = () => {
      this.isInitialized();
      const s = kn();
      return this.setPrivateKey(s.publicKey, s.privateKey);
    }, this.signJWT = async (s) => {
      this.isInitialized();
      const r = await this.getClientSeed(), o = generateKeyPair(r), a3 = Vn$1(), h4 = tt;
      return await signJWT(a3, s, h4, o);
    }, this.generateSharedKey = (s, r, o) => {
      this.isInitialized();
      const a3 = this.getPrivateKey(s), h4 = Mn(a3, r);
      return this.setSymKey(h4, o);
    }, this.setSymKey = async (s, r) => {
      this.isInitialized();
      const o = r || Kn(s);
      return await this.keychain.set(o, s), o;
    }, this.deleteKeyPair = async (s) => {
      this.isInitialized(), await this.keychain.del(s);
    }, this.deleteSymKey = async (s) => {
      this.isInitialized(), await this.keychain.del(s);
    }, this.encode = async (s, r, o) => {
      this.isInitialized();
      const a3 = Ae(o), h4 = safeJsonStringify(r);
      if (qn(a3)) {
        const y3 = a3.senderPublicKey, M2 = a3.receiverPublicKey;
        s = await this.generateSharedKey(y3, M2);
      }
      const l2 = this.getSymKey(s), { type: d2, senderPublicKey: p3 } = a3;
      return xn({ type: d2, symKey: l2, message: h4, senderPublicKey: p3 });
    }, this.decode = async (s, r, o) => {
      this.isInitialized();
      const a3 = Hn(r, o);
      if (qn(a3)) {
        const h4 = a3.receiverPublicKey, l2 = a3.senderPublicKey;
        s = await this.generateSharedKey(h4, l2);
      }
      try {
        const h4 = this.getSymKey(s), l2 = Fn({ symKey: h4, encoded: r });
        return safeJsonParse(l2);
      } catch (h4) {
        this.logger.error(`Failed to decode message from topic: '${s}', clientId: '${await this.getClientId()}'`), this.logger.error(h4);
      }
    }, this.getPayloadType = (s) => {
      const r = ee$1(s);
      return j$2(r.type);
    }, this.getPayloadSenderPublicKey = (s) => {
      const r = ee$1(s);
      return r.senderPublicKey ? toString(r.senderPublicKey, p$3) : void 0;
    }, this.core = e, this.logger = E$2(t, this.name), this.keychain = i2 || new Pt(this.core, this.logger);
  }
  get context() {
    return y$2(this.logger);
  }
  async setPrivateKey(e, t) {
    return await this.keychain.set(e, t), e;
  }
  getPrivateKey(e) {
    return this.keychain.get(e);
  }
  async getClientSeed() {
    let e = "";
    try {
      e = this.keychain.get(de$1);
    } catch {
      e = Vn$1(), await this.keychain.set(de$1, e);
    }
    return mr(e, "base16");
  }
  getSymKey(e) {
    return this.keychain.get(e);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = N$2("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class Ot extends a$1 {
  constructor(e, t) {
    super(e, t), this.logger = e, this.core = t, this.messages = /* @__PURE__ */ new Map(), this.name = rt, this.version = nt, this.initialized = false, this.storagePrefix = O$1, this.init = async () => {
      if (!this.initialized) {
        this.logger.trace("Initialized");
        try {
          const i2 = await this.getRelayerMessages();
          typeof i2 < "u" && (this.messages = i2), this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({ type: "method", method: "restore", size: this.messages.size });
        } catch (i2) {
          this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(i2);
        } finally {
          this.initialized = true;
        }
      }
    }, this.set = async (i2, s) => {
      this.isInitialized();
      const r = Ln(s);
      let o = this.messages.get(i2);
      return typeof o > "u" && (o = {}), typeof o[r] < "u" || (o[r] = s, this.messages.set(i2, o), await this.persist()), r;
    }, this.get = (i2) => {
      this.isInitialized();
      let s = this.messages.get(i2);
      return typeof s > "u" && (s = {}), s;
    }, this.has = (i2, s) => {
      this.isInitialized();
      const r = this.get(i2), o = Ln(s);
      return typeof r[o] < "u";
    }, this.del = async (i2) => {
      this.isInitialized(), this.messages.delete(i2), await this.persist();
    }, this.logger = E$2(e, this.name), this.core = t;
  }
  get context() {
    return y$2(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  async setRelayerMessages(e) {
    await this.core.storage.setItem(this.storageKey, rt$1(e));
  }
  async getRelayerMessages() {
    const e = await this.core.storage.getItem(this.storageKey);
    return typeof e < "u" ? ot$1(e) : void 0;
  }
  async persist() {
    await this.setRelayerMessages(this.messages);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = N$2("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class vr extends u$1 {
  constructor(e, t) {
    super(e, t), this.relayer = e, this.logger = t, this.events = new eventsExports.EventEmitter(), this.name = at, this.queue = /* @__PURE__ */ new Map(), this.publishTimeout = cjs$4.toMiliseconds(cjs$4.TEN_SECONDS * 2), this.needsTransportRestart = false, this.publish = async (i2, s, r) => {
      var o;
      this.logger.debug("Publishing Payload"), this.logger.trace({ type: "method", method: "publish", params: { topic: i2, message: s, opts: r } });
      try {
        const a3 = (r == null ? void 0 : r.ttl) || ot, h4 = vt$1(r), l2 = (r == null ? void 0 : r.prompt) || false, d2 = (r == null ? void 0 : r.tag) || 0, p3 = (r == null ? void 0 : r.id) || getBigIntRpcId().toString(), y3 = { topic: i2, message: s, opts: { ttl: a3, relay: h4, prompt: l2, tag: d2, id: p3 } }, M2 = setTimeout(() => this.queue.set(p3, y3), this.publishTimeout);
        try {
          await await ut$1(this.rpcPublish(i2, s, a3, h4, l2, d2, p3), this.publishTimeout, `Failed to publish payload, please try again. id:${p3} tag:${d2}`), this.removeRequestFromQueue(p3), this.relayer.events.emit(D$2.publish, y3);
        } catch (u3) {
          if (this.logger.debug("Publishing Payload stalled"), this.needsTransportRestart = true, (o = r == null ? void 0 : r.internal) != null && o.throwOnFailedPublish)
            throw this.removeRequestFromQueue(p3), u3;
          return;
        } finally {
          clearTimeout(M2);
        }
        this.logger.debug("Successfully Published Payload"), this.logger.trace({ type: "method", method: "publish", params: { topic: i2, message: s, opts: r } });
      } catch (a3) {
        throw this.logger.debug("Failed to Publish Payload"), this.logger.error(a3), a3;
      }
    }, this.on = (i2, s) => {
      this.events.on(i2, s);
    }, this.once = (i2, s) => {
      this.events.once(i2, s);
    }, this.off = (i2, s) => {
      this.events.off(i2, s);
    }, this.removeListener = (i2, s) => {
      this.events.removeListener(i2, s);
    }, this.relayer = e, this.logger = E$2(t, this.name), this.registerEventListeners();
  }
  get context() {
    return y$2(this.logger);
  }
  rpcPublish(e, t, i2, s, r, o, a3) {
    var h4, l2, d2, p3;
    const y3 = { method: Et$1(s.protocol).publish, params: { topic: e, message: t, ttl: i2, prompt: r, tag: o }, id: a3 };
    return w$4((h4 = y3.params) == null ? void 0 : h4.prompt) && ((l2 = y3.params) == null || delete l2.prompt), w$4((d2 = y3.params) == null ? void 0 : d2.tag) && ((p3 = y3.params) == null || delete p3.tag), this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "message", direction: "outgoing", request: y3 }), this.relayer.request(y3);
  }
  removeRequestFromQueue(e) {
    this.queue.delete(e);
  }
  checkQueue() {
    this.queue.forEach(async (e) => {
      const { topic: t, message: i2, opts: s } = e;
      await this.publish(t, i2, s);
    });
  }
  registerEventListeners() {
    this.relayer.core.heartbeat.on(cjs$1.HEARTBEAT_EVENTS.pulse, () => {
      if (this.needsTransportRestart) {
        this.needsTransportRestart = false, this.relayer.events.emit(D$2.connection_stalled);
        return;
      }
      this.checkQueue();
    }), this.relayer.on(D$2.message_ack, (e) => {
      this.removeRequestFromQueue(e.id.toString());
    });
  }
}
class Ir {
  constructor() {
    this.map = /* @__PURE__ */ new Map(), this.set = (e, t) => {
      const i2 = this.get(e);
      this.exists(e, t) || this.map.set(e, [...i2, t]);
    }, this.get = (e) => this.map.get(e) || [], this.exists = (e, t) => this.get(e).includes(t), this.delete = (e, t) => {
      if (typeof t > "u") {
        this.map.delete(e);
        return;
      }
      if (!this.map.has(e))
        return;
      const i2 = this.get(e);
      if (!this.exists(e, t))
        return;
      const s = i2.filter((r) => r !== t);
      if (!s.length) {
        this.map.delete(e);
        return;
      }
      this.map.set(e, s);
    }, this.clear = () => {
      this.map.clear();
    };
  }
  get topics() {
    return Array.from(this.map.keys());
  }
}
var Cr = Object.defineProperty, Rr = Object.defineProperties, _r = Object.getOwnPropertyDescriptors, At = Object.getOwnPropertySymbols, Tr = Object.prototype.hasOwnProperty, Sr = Object.prototype.propertyIsEnumerable, zt = (n2, e, t) => e in n2 ? Cr(n2, e, { enumerable: true, configurable: true, writable: true, value: t }) : n2[e] = t, q$1 = (n2, e) => {
  for (var t in e || (e = {}))
    Tr.call(e, t) && zt(n2, t, e[t]);
  if (At)
    for (var t of At(e))
      Sr.call(e, t) && zt(n2, t, e[t]);
  return n2;
}, De = (n2, e) => Rr(n2, _r(e));
class Nt extends d {
  constructor(e, t) {
    super(e, t), this.relayer = e, this.logger = t, this.subscriptions = /* @__PURE__ */ new Map(), this.topicMap = new Ir(), this.events = new eventsExports.EventEmitter(), this.name = mt, this.version = bt, this.pending = /* @__PURE__ */ new Map(), this.cached = [], this.initialized = false, this.pendingSubscriptionWatchLabel = "pending_sub_watch_label", this.pollingInterval = 20, this.storagePrefix = O$1, this.subscribeTimeout = 1e4, this.restartInProgress = false, this.batchSubscribeTopicsLimit = 500, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), this.registerEventListeners(), this.clientId = await this.relayer.core.crypto.getClientId());
    }, this.subscribe = async (i2, s) => {
      await this.restartToComplete(), this.isInitialized(), this.logger.debug("Subscribing Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: i2, opts: s } });
      try {
        const r = vt$1(s), o = { topic: i2, relay: r };
        this.pending.set(i2, o);
        const a3 = await this.rpcSubscribe(i2, r);
        return this.onSubscribe(a3, o), this.logger.debug("Successfully Subscribed Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: i2, opts: s } }), a3;
      } catch (r) {
        throw this.logger.debug("Failed to Subscribe Topic"), this.logger.error(r), r;
      }
    }, this.unsubscribe = async (i2, s) => {
      await this.restartToComplete(), this.isInitialized(), typeof (s == null ? void 0 : s.id) < "u" ? await this.unsubscribeById(i2, s.id, s) : await this.unsubscribeByTopic(i2, s);
    }, this.isSubscribed = async (i2) => {
      if (this.topics.includes(i2))
        return true;
      const s = `${this.pendingSubscriptionWatchLabel}_${i2}`;
      return await new Promise((r, o) => {
        const a3 = new cjs$4.Watch();
        a3.start(s);
        const h4 = setInterval(() => {
          !this.pending.has(i2) && this.topics.includes(i2) && (clearInterval(h4), a3.stop(s), r(true)), a3.elapsed(s) >= ft$1 && (clearInterval(h4), a3.stop(s), o(new Error("Subscription resolution timeout")));
        }, this.pollingInterval);
      }).catch(() => false);
    }, this.on = (i2, s) => {
      this.events.on(i2, s);
    }, this.once = (i2, s) => {
      this.events.once(i2, s);
    }, this.off = (i2, s) => {
      this.events.off(i2, s);
    }, this.removeListener = (i2, s) => {
      this.events.removeListener(i2, s);
    }, this.restart = async () => {
      this.restartInProgress = true, await this.restore(), await this.reset(), this.restartInProgress = false;
    }, this.relayer = e, this.logger = E$2(t, this.name), this.clientId = "";
  }
  get context() {
    return y$2(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.relayer.core.customStoragePrefix + "//" + this.name;
  }
  get length() {
    return this.subscriptions.size;
  }
  get ids() {
    return Array.from(this.subscriptions.keys());
  }
  get values() {
    return Array.from(this.subscriptions.values());
  }
  get topics() {
    return this.topicMap.topics;
  }
  hasSubscription(e, t) {
    let i2 = false;
    try {
      i2 = this.getSubscription(e).topic === t;
    } catch {
    }
    return i2;
  }
  onEnable() {
    this.cached = [], this.initialized = true;
  }
  onDisable() {
    this.cached = this.values, this.subscriptions.clear(), this.topicMap.clear();
  }
  async unsubscribeByTopic(e, t) {
    const i2 = this.topicMap.get(e);
    await Promise.all(i2.map(async (s) => await this.unsubscribeById(e, s, t)));
  }
  async unsubscribeById(e, t, i2) {
    this.logger.debug("Unsubscribing Topic"), this.logger.trace({ type: "method", method: "unsubscribe", params: { topic: e, id: t, opts: i2 } });
    try {
      const s = vt$1(i2);
      await this.rpcUnsubscribe(e, t, s);
      const r = U$2("USER_DISCONNECTED", `${this.name}, ${e}`);
      await this.onUnsubscribe(e, t, r), this.logger.debug("Successfully Unsubscribed Topic"), this.logger.trace({ type: "method", method: "unsubscribe", params: { topic: e, id: t, opts: i2 } });
    } catch (s) {
      throw this.logger.debug("Failed to Unsubscribe Topic"), this.logger.error(s), s;
    }
  }
  async rpcSubscribe(e, t) {
    const i2 = { method: Et$1(t.protocol).subscribe, params: { topic: e } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: i2 });
    try {
      await await ut$1(this.relayer.request(i2), this.subscribeTimeout);
    } catch {
      this.logger.debug("Outgoing Relay Subscribe Payload stalled"), this.relayer.events.emit(D$2.connection_stalled);
    }
    return Ln(e + this.clientId);
  }
  async rpcBatchSubscribe(e) {
    if (!e.length)
      return;
    const t = e[0].relay, i2 = { method: Et$1(t.protocol).batchSubscribe, params: { topics: e.map((s) => s.topic) } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: i2 });
    try {
      return await await ut$1(this.relayer.request(i2), this.subscribeTimeout);
    } catch {
      this.logger.debug("Outgoing Relay Payload stalled"), this.relayer.events.emit(D$2.connection_stalled);
    }
  }
  rpcUnsubscribe(e, t, i2) {
    const s = { method: Et$1(i2.protocol).unsubscribe, params: { topic: e, id: t } };
    return this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: s }), this.relayer.request(s);
  }
  onSubscribe(e, t) {
    this.setSubscription(e, De(q$1({}, t), { id: e })), this.pending.delete(t.topic);
  }
  onBatchSubscribe(e) {
    e.length && e.forEach((t) => {
      this.setSubscription(t.id, q$1({}, t)), this.pending.delete(t.topic);
    });
  }
  async onUnsubscribe(e, t, i2) {
    this.events.removeAllListeners(t), this.hasSubscription(t, e) && this.deleteSubscription(t, i2), await this.relayer.messages.del(e);
  }
  async setRelayerSubscriptions(e) {
    await this.relayer.core.storage.setItem(this.storageKey, e);
  }
  async getRelayerSubscriptions() {
    return await this.relayer.core.storage.getItem(this.storageKey);
  }
  setSubscription(e, t) {
    this.subscriptions.has(e) || (this.logger.debug("Setting subscription"), this.logger.trace({ type: "method", method: "setSubscription", id: e, subscription: t }), this.addSubscription(e, t));
  }
  addSubscription(e, t) {
    this.subscriptions.set(e, q$1({}, t)), this.topicMap.set(t.topic, e), this.events.emit(w2.created, t);
  }
  getSubscription(e) {
    this.logger.debug("Getting subscription"), this.logger.trace({ type: "method", method: "getSubscription", id: e });
    const t = this.subscriptions.get(e);
    if (!t) {
      const { message: i2 } = N$2("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw new Error(i2);
    }
    return t;
  }
  deleteSubscription(e, t) {
    this.logger.debug("Deleting subscription"), this.logger.trace({ type: "method", method: "deleteSubscription", id: e, reason: t });
    const i2 = this.getSubscription(e);
    this.subscriptions.delete(e), this.topicMap.delete(i2.topic, e), this.events.emit(w2.deleted, De(q$1({}, i2), { reason: t }));
  }
  async persist() {
    await this.setRelayerSubscriptions(this.values), this.events.emit(w2.sync);
  }
  async reset() {
    if (this.cached.length) {
      const e = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
      for (let t = 0; t < e; t++) {
        const i2 = this.cached.splice(0, this.batchSubscribeTopicsLimit);
        await this.batchSubscribe(i2);
      }
    }
    this.events.emit(w2.resubscribed);
  }
  async restore() {
    try {
      const e = await this.getRelayerSubscriptions();
      if (typeof e > "u" || !e.length)
        return;
      if (this.subscriptions.size) {
        const { message: t } = N$2("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(t), this.logger.error(`${this.name}: ${JSON.stringify(this.values)}`), new Error(t);
      }
      this.cached = e, this.logger.debug(`Successfully Restored subscriptions for ${this.name}`), this.logger.trace({ type: "method", method: "restore", subscriptions: this.values });
    } catch (e) {
      this.logger.debug(`Failed to Restore subscriptions for ${this.name}`), this.logger.error(e);
    }
  }
  async batchSubscribe(e) {
    if (!e.length)
      return;
    const t = await this.rpcBatchSubscribe(e);
    k$2(t) && this.onBatchSubscribe(t.map((i2, s) => De(q$1({}, e[s]), { id: i2 })));
  }
  async onConnect() {
    this.restartInProgress || (await this.restart(), this.onEnable());
  }
  onDisconnect() {
    this.onDisable();
  }
  async checkPending() {
    if (!this.initialized || this.relayer.transportExplicitlyClosed)
      return;
    const e = [];
    this.pending.forEach((t) => {
      e.push(t);
    }), await this.batchSubscribe(e);
  }
  registerEventListeners() {
    this.relayer.core.heartbeat.on(cjs$1.HEARTBEAT_EVENTS.pulse, async () => {
      await this.checkPending();
    }), this.relayer.on(D$2.connect, async () => {
      await this.onConnect();
    }), this.relayer.on(D$2.disconnect, () => {
      this.onDisconnect();
    }), this.events.on(w2.created, async (e) => {
      const t = w2.created;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, data: e }), await this.persist();
    }), this.events.on(w2.deleted, async (e) => {
      const t = w2.deleted;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, data: e }), await this.persist();
    });
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = N$2("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
  async restartToComplete() {
    this.restartInProgress && await new Promise((e) => {
      const t = setInterval(() => {
        this.restartInProgress || (clearInterval(t), e());
      }, this.pollingInterval);
    });
  }
}
var Pr = Object.defineProperty, Ut = Object.getOwnPropertySymbols, xr = Object.prototype.hasOwnProperty, Or = Object.prototype.propertyIsEnumerable, Lt = (n2, e, t) => e in n2 ? Pr(n2, e, { enumerable: true, configurable: true, writable: true, value: t }) : n2[e] = t, Ar = (n2, e) => {
  for (var t in e || (e = {}))
    xr.call(e, t) && Lt(n2, t, e[t]);
  if (Ut)
    for (var t of Ut(e))
      Or.call(e, t) && Lt(n2, t, e[t]);
  return n2;
};
class $t extends g$3 {
  constructor(e) {
    super(e), this.protocol = "wc", this.version = 2, this.events = new eventsExports.EventEmitter(), this.name = ut, this.transportExplicitlyClosed = false, this.initialized = false, this.connectionAttemptInProgress = false, this.connectionStatusPollingInterval = 20, this.staleConnectionErrors = ["socket hang up", "socket stalled"], this.hasExperiencedNetworkDisruption = false, this.requestsInFlight = /* @__PURE__ */ new Map(), this.request = async (t) => {
      this.logger.debug("Publishing Request Payload");
      const i2 = t.id;
      try {
        await this.toEstablishConnection();
        const s = this.provider.request(t);
        return this.requestsInFlight.set(i2, { promise: s, request: t }), await s;
      } catch (s) {
        throw this.logger.debug("Failed to Publish Request"), this.logger.error(s), s;
      } finally {
        this.requestsInFlight.delete(i2);
      }
    }, this.onPayloadHandler = (t) => {
      this.onProviderPayload(t);
    }, this.onConnectHandler = () => {
      this.events.emit(D$2.connect);
    }, this.onDisconnectHandler = () => {
      this.onProviderDisconnect();
    }, this.onProviderErrorHandler = (t) => {
      this.logger.error(t), this.events.emit(D$2.error, t), this.logger.info("Fatal socket error received, closing transport"), this.transportClose();
    }, this.registerProviderListeners = () => {
      this.provider.on(P$1.payload, this.onPayloadHandler), this.provider.on(P$1.connect, this.onConnectHandler), this.provider.on(P$1.disconnect, this.onDisconnectHandler), this.provider.on(P$1.error, this.onProviderErrorHandler);
    }, this.core = e.core, this.logger = typeof e.logger < "u" && typeof e.logger != "string" ? E$2(e.logger, this.name) : Hg(k({ level: e.logger || ct })), this.messages = new Ot(this.logger, e.core), this.subscriber = new Nt(this, this.logger), this.publisher = new vr(this, this.logger), this.relayUrl = (e == null ? void 0 : e.relayUrl) || ge$2, this.projectId = e.projectId, this.bundleId = Jn(), this.provider = {};
  }
  async init() {
    this.logger.trace("Initialized"), this.registerEventListeners(), await this.createProvider(), await Promise.all([this.messages.init(), this.subscriber.init()]);
    try {
      await this.transportOpen();
    } catch {
      this.logger.warn(`Connection via ${this.relayUrl} failed, attempting to connect via failover domain ${pe$1}...`), await this.restartTransport(pe$1);
    }
    this.initialized = true, setTimeout(async () => {
      this.subscriber.topics.length === 0 && (this.logger.info("No topics subscribed to after init, closing transport"), await this.transportClose(), this.transportExplicitlyClosed = false);
    }, pt);
  }
  get context() {
    return y$2(this.logger);
  }
  get connected() {
    return this.provider.connection.connected;
  }
  get connecting() {
    return this.provider.connection.connecting;
  }
  async publish(e, t, i2) {
    this.isInitialized(), await this.publisher.publish(e, t, i2), await this.recordMessageEvent({ topic: e, message: t, publishedAt: Date.now() });
  }
  async subscribe(e, t) {
    var i2;
    this.isInitialized();
    let s = ((i2 = this.subscriber.topicMap.get(e)) == null ? void 0 : i2[0]) || "";
    if (s)
      return s;
    let r;
    const o = (a3) => {
      a3.topic === e && (this.subscriber.off(w2.created, o), r());
    };
    return await Promise.all([new Promise((a3) => {
      r = a3, this.subscriber.on(w2.created, o);
    }), new Promise(async (a3) => {
      s = await this.subscriber.subscribe(e, t), a3();
    })]), s;
  }
  async unsubscribe(e, t) {
    this.isInitialized(), await this.subscriber.unsubscribe(e, t);
  }
  on(e, t) {
    this.events.on(e, t);
  }
  once(e, t) {
    this.events.once(e, t);
  }
  off(e, t) {
    this.events.off(e, t);
  }
  removeListener(e, t) {
    this.events.removeListener(e, t);
  }
  async transportClose() {
    this.requestsInFlight.size > 0 && (this.logger.debug("Waiting for all in-flight requests to finish before closing transport..."), this.requestsInFlight.forEach(async (e) => {
      await e.promise;
    })), this.transportExplicitlyClosed = true, this.hasExperiencedNetworkDisruption && this.connected ? await ut$1(this.provider.disconnect(), 1e3, "provider.disconnect()").catch(() => this.onProviderDisconnect()) : this.connected && await this.provider.disconnect();
  }
  async transportOpen(e) {
    if (this.transportExplicitlyClosed = false, await this.confirmOnlineStateOrThrow(), !this.connectionAttemptInProgress) {
      e && e !== this.relayUrl && (this.relayUrl = e, await this.transportClose(), await this.createProvider()), this.connectionAttemptInProgress = true;
      try {
        await Promise.all([new Promise((t) => {
          if (!this.initialized)
            return t();
          this.subscriber.once(w2.resubscribed, () => {
            t();
          });
        }), new Promise(async (t, i2) => {
          try {
            await ut$1(this.provider.connect(), 1e4, `Socket stalled when trying to connect to ${this.relayUrl}`);
          } catch (s) {
            i2(s);
            return;
          }
          t();
        })]);
      } catch (t) {
        this.logger.error(t);
        const i2 = t;
        if (!this.isConnectionStalled(i2.message))
          throw t;
        this.provider.events.emit(P$1.disconnect);
      } finally {
        this.connectionAttemptInProgress = false, this.hasExperiencedNetworkDisruption = false;
      }
    }
  }
  async restartTransport(e) {
    await this.confirmOnlineStateOrThrow(), !this.connectionAttemptInProgress && (this.relayUrl = e || this.relayUrl, await this.transportClose(), await this.createProvider(), await this.transportOpen());
  }
  async confirmOnlineStateOrThrow() {
    if (!await rr$1())
      throw new Error("No internet connection detected. Please restart your network and try again.");
  }
  isConnectionStalled(e) {
    return this.staleConnectionErrors.some((t) => e.includes(t));
  }
  async createProvider() {
    this.provider.connection && this.unregisterProviderListeners();
    const e = await this.core.crypto.signJWT(this.relayUrl);
    this.provider = new JsonRpcProvider(new f$1(Xn({ sdkVersion: gt, protocol: this.protocol, version: this.version, relayUrl: this.relayUrl, projectId: this.projectId, auth: e, useOnCloseEvent: true, bundleId: this.bundleId }))), this.registerProviderListeners();
  }
  async recordMessageEvent(e) {
    const { topic: t, message: i2 } = e;
    await this.messages.set(t, i2);
  }
  async shouldIgnoreMessageEvent(e) {
    const { topic: t, message: i2 } = e;
    if (!i2 || i2.length === 0)
      return this.logger.debug(`Ignoring invalid/empty message: ${i2}`), true;
    if (!await this.subscriber.isSubscribed(t))
      return this.logger.debug(`Ignoring message for non-subscribed topic ${t}`), true;
    const s = this.messages.has(t, i2);
    return s && this.logger.debug(`Ignoring duplicate message: ${i2}`), s;
  }
  async onProviderPayload(e) {
    if (this.logger.debug("Incoming Relay Payload"), this.logger.trace({ type: "payload", direction: "incoming", payload: e }), isJsonRpcRequest(e)) {
      if (!e.method.endsWith(lt))
        return;
      const t = e.params, { topic: i2, message: s, publishedAt: r } = t.data, o = { topic: i2, message: s, publishedAt: r };
      this.logger.debug("Emitting Relayer Payload"), this.logger.trace(Ar({ type: "event", event: t.id }, o)), this.events.emit(t.id, o), await this.acknowledgePayload(e), await this.onMessageEvent(o);
    } else
      isJsonRpcResponse(e) && this.events.emit(D$2.message_ack, e);
  }
  async onMessageEvent(e) {
    await this.shouldIgnoreMessageEvent(e) || (this.events.emit(D$2.message, e), await this.recordMessageEvent(e));
  }
  async acknowledgePayload(e) {
    const t = formatJsonRpcResult(e.id, true);
    await this.provider.connection.send(t);
  }
  unregisterProviderListeners() {
    this.provider.off(P$1.payload, this.onPayloadHandler), this.provider.off(P$1.connect, this.onConnectHandler), this.provider.off(P$1.disconnect, this.onDisconnectHandler), this.provider.off(P$1.error, this.onProviderErrorHandler);
  }
  async registerEventListeners() {
    this.events.on(D$2.connection_stalled, () => {
      this.restartTransport().catch((t) => this.logger.error(t));
    });
    let e = await rr$1();
    or$1(async (t) => {
      this.initialized && e !== t && (e = t, t ? await this.restartTransport().catch((i2) => this.logger.error(i2)) : (this.hasExperiencedNetworkDisruption = true, await this.transportClose().catch((i2) => this.logger.error(i2))));
    });
  }
  onProviderDisconnect() {
    this.events.emit(D$2.disconnect), this.attemptToReconnect();
  }
  attemptToReconnect() {
    this.transportExplicitlyClosed || (this.logger.info("attemptToReconnect called. Connecting..."), setTimeout(async () => {
      await this.restartTransport().catch((e) => this.logger.error(e));
    }, cjs$4.toMiliseconds(dt)));
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = N$2("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
  async toEstablishConnection() {
    if (await this.confirmOnlineStateOrThrow(), !this.connected) {
      if (this.connectionAttemptInProgress)
        return await new Promise((e) => {
          const t = setInterval(() => {
            this.connected && (clearInterval(t), e());
          }, this.connectionStatusPollingInterval);
        });
      await this.restartTransport();
    }
  }
}
var zr = Object.defineProperty, Ft = Object.getOwnPropertySymbols, Nr = Object.prototype.hasOwnProperty, Ur = Object.prototype.propertyIsEnumerable, Mt = (n2, e, t) => e in n2 ? zr(n2, e, { enumerable: true, configurable: true, writable: true, value: t }) : n2[e] = t, kt = (n2, e) => {
  for (var t in e || (e = {}))
    Nr.call(e, t) && Mt(n2, t, e[t]);
  if (Ft)
    for (var t of Ft(e))
      Ur.call(e, t) && Mt(n2, t, e[t]);
  return n2;
};
class Kt extends p$1 {
  constructor(e, t, i2, s = O$1, r = void 0) {
    super(e, t, i2, s), this.core = e, this.logger = t, this.name = i2, this.map = /* @__PURE__ */ new Map(), this.version = Dt, this.cached = [], this.initialized = false, this.storagePrefix = O$1, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((o) => {
        this.getKey && o !== null && !w$4(o) ? this.map.set(this.getKey(o), o) : Lt$1(o) ? this.map.set(o.id, o) : xt$1(o) && this.map.set(o.topic, o);
      }), this.cached = [], this.initialized = true);
    }, this.set = async (o, a3) => {
      this.isInitialized(), this.map.has(o) ? await this.update(o, a3) : (this.logger.debug("Setting value"), this.logger.trace({ type: "method", method: "set", key: o, value: a3 }), this.map.set(o, a3), await this.persist());
    }, this.get = (o) => (this.isInitialized(), this.logger.debug("Getting value"), this.logger.trace({ type: "method", method: "get", key: o }), this.getData(o)), this.getAll = (o) => (this.isInitialized(), o ? this.values.filter((a3) => Object.keys(o).every((h4) => Gi(a3[h4], o[h4]))) : this.values), this.update = async (o, a3) => {
      this.isInitialized(), this.logger.debug("Updating value"), this.logger.trace({ type: "method", method: "update", key: o, update: a3 });
      const h4 = kt(kt({}, this.getData(o)), a3);
      this.map.set(o, h4), await this.persist();
    }, this.delete = async (o, a3) => {
      this.isInitialized(), this.map.has(o) && (this.logger.debug("Deleting value"), this.logger.trace({ type: "method", method: "delete", key: o, reason: a3 }), this.map.delete(o), await this.persist());
    }, this.logger = E$2(t, this.name), this.storagePrefix = s, this.getKey = r;
  }
  get context() {
    return y$2(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  get length() {
    return this.map.size;
  }
  get keys() {
    return Array.from(this.map.keys());
  }
  get values() {
    return Array.from(this.map.values());
  }
  async setDataStore(e) {
    await this.core.storage.setItem(this.storageKey, e);
  }
  async getDataStore() {
    return await this.core.storage.getItem(this.storageKey);
  }
  getData(e) {
    const t = this.map.get(e);
    if (!t) {
      const { message: i2 } = N$2("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw this.logger.error(i2), new Error(i2);
    }
    return t;
  }
  async persist() {
    await this.setDataStore(this.values);
  }
  async restore() {
    try {
      const e = await this.getDataStore();
      if (typeof e > "u" || !e.length)
        return;
      if (this.map.size) {
        const { message: t } = N$2("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(t), new Error(t);
      }
      this.cached = e, this.logger.debug(`Successfully Restored value for ${this.name}`), this.logger.trace({ type: "method", method: "restore", value: this.values });
    } catch (e) {
      this.logger.debug(`Failed to Restore value for ${this.name}`), this.logger.error(e);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = N$2("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class Bt {
  constructor(e, t) {
    this.core = e, this.logger = t, this.name = Et, this.version = wt, this.events = new Ug(), this.initialized = false, this.storagePrefix = O$1, this.ignoredPayloadTypes = [_$3], this.registeredMethods = [], this.init = async () => {
      this.initialized || (await this.pairings.init(), await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.initialized = true, this.logger.trace("Initialized"));
    }, this.register = ({ methods: i2 }) => {
      this.isInitialized(), this.registeredMethods = [.../* @__PURE__ */ new Set([...this.registeredMethods, ...i2])];
    }, this.create = async () => {
      this.isInitialized();
      const i2 = Vn$1(), s = await this.core.crypto.setSymKey(i2), r = pt$1(cjs$4.FIVE_MINUTES), o = { protocol: ht }, a3 = { topic: s, expiry: r, relay: o, active: false }, h4 = Rt$1({ protocol: this.core.protocol, version: this.core.version, topic: s, symKey: i2, relay: o, expiryTimestamp: r });
      return await this.pairings.set(s, a3), await this.core.relayer.subscribe(s), this.core.expirer.set(s, r), { topic: s, uri: h4 };
    }, this.pair = async (i2) => {
      this.isInitialized(), this.isValidPair(i2);
      const { topic: s, symKey: r, relay: o, expiryTimestamp: a3 } = Pt$1(i2.uri);
      let h4;
      if (this.pairings.keys.includes(s) && (h4 = this.pairings.get(s), h4.active))
        throw new Error(`Pairing already exists: ${s}. Please try again with a new connection URI.`);
      const l2 = a3 || pt$1(cjs$4.FIVE_MINUTES), d2 = { topic: s, relay: o, expiry: l2, active: false };
      return await this.pairings.set(s, d2), this.core.expirer.set(s, l2), i2.activatePairing && await this.activate({ topic: s }), this.events.emit(V.create, d2), this.core.crypto.keychain.has(s) || (await this.core.crypto.setSymKey(r, s), await this.core.relayer.subscribe(s, { relay: o })), d2;
    }, this.activate = async ({ topic: i2 }) => {
      this.isInitialized();
      const s = pt$1(cjs$4.THIRTY_DAYS);
      await this.pairings.update(i2, { active: true, expiry: s }), this.core.expirer.set(i2, s);
    }, this.ping = async (i2) => {
      this.isInitialized(), await this.isValidPing(i2);
      const { topic: s } = i2;
      if (this.pairings.keys.includes(s)) {
        const r = await this.sendRequest(s, "wc_pairingPing", {}), { done: o, resolve: a3, reject: h4 } = at$1();
        this.events.once(yt$1("pairing_ping", r), ({ error: l2 }) => {
          l2 ? h4(l2) : a3();
        }), await o();
      }
    }, this.updateExpiry = async ({ topic: i2, expiry: s }) => {
      this.isInitialized(), await this.pairings.update(i2, { expiry: s });
    }, this.updateMetadata = async ({ topic: i2, metadata: s }) => {
      this.isInitialized(), await this.pairings.update(i2, { peerMetadata: s });
    }, this.getPairings = () => (this.isInitialized(), this.pairings.values), this.disconnect = async (i2) => {
      this.isInitialized(), await this.isValidDisconnect(i2);
      const { topic: s } = i2;
      this.pairings.keys.includes(s) && (await this.sendRequest(s, "wc_pairingDelete", U$2("USER_DISCONNECTED")), await this.deletePairing(s));
    }, this.sendRequest = async (i2, s, r) => {
      const o = formatJsonRpcRequest(s, r), a3 = await this.core.crypto.encode(i2, o), h4 = $$1[s].req;
      return this.core.history.set(i2, o), this.core.relayer.publish(i2, a3, h4), o.id;
    }, this.sendResult = async (i2, s, r) => {
      const o = formatJsonRpcResult(i2, r), a3 = await this.core.crypto.encode(s, o), h4 = await this.core.history.get(s, i2), l2 = $$1[h4.request.method].res;
      await this.core.relayer.publish(s, a3, l2), await this.core.history.resolve(o);
    }, this.sendError = async (i2, s, r) => {
      const o = formatJsonRpcError(i2, r), a3 = await this.core.crypto.encode(s, o), h4 = await this.core.history.get(s, i2), l2 = $$1[h4.request.method] ? $$1[h4.request.method].res : $$1.unregistered_method.res;
      await this.core.relayer.publish(s, a3, l2), await this.core.history.resolve(o);
    }, this.deletePairing = async (i2, s) => {
      await this.core.relayer.unsubscribe(i2), await Promise.all([this.pairings.delete(i2, U$2("USER_DISCONNECTED")), this.core.crypto.deleteSymKey(i2), s ? Promise.resolve() : this.core.expirer.del(i2)]);
    }, this.cleanup = async () => {
      const i2 = this.pairings.getAll().filter((s) => mt$1(s.expiry));
      await Promise.all(i2.map((s) => this.deletePairing(s.topic)));
    }, this.onRelayEventRequest = (i2) => {
      const { topic: s, payload: r } = i2;
      switch (r.method) {
        case "wc_pairingPing":
          return this.onPairingPingRequest(s, r);
        case "wc_pairingDelete":
          return this.onPairingDeleteRequest(s, r);
        default:
          return this.onUnknownRpcMethodRequest(s, r);
      }
    }, this.onRelayEventResponse = async (i2) => {
      const { topic: s, payload: r } = i2, o = (await this.core.history.get(s, r.id)).request.method;
      switch (o) {
        case "wc_pairingPing":
          return this.onPairingPingResponse(s, r);
        default:
          return this.onUnknownRpcMethodResponse(o);
      }
    }, this.onPairingPingRequest = async (i2, s) => {
      const { id: r } = s;
      try {
        this.isValidPing({ topic: i2 }), await this.sendResult(r, i2, true), this.events.emit(V.ping, { id: r, topic: i2 });
      } catch (o) {
        await this.sendError(r, i2, o), this.logger.error(o);
      }
    }, this.onPairingPingResponse = (i2, s) => {
      const { id: r } = s;
      setTimeout(() => {
        isJsonRpcResult(s) ? this.events.emit(yt$1("pairing_ping", r), {}) : isJsonRpcError(s) && this.events.emit(yt$1("pairing_ping", r), { error: s.error });
      }, 500);
    }, this.onPairingDeleteRequest = async (i2, s) => {
      const { id: r } = s;
      try {
        this.isValidDisconnect({ topic: i2 }), await this.deletePairing(i2), this.events.emit(V.delete, { id: r, topic: i2 });
      } catch (o) {
        await this.sendError(r, i2, o), this.logger.error(o);
      }
    }, this.onUnknownRpcMethodRequest = async (i2, s) => {
      const { id: r, method: o } = s;
      try {
        if (this.registeredMethods.includes(o))
          return;
        const a3 = U$2("WC_METHOD_UNSUPPORTED", o);
        await this.sendError(r, i2, a3), this.logger.error(a3);
      } catch (a3) {
        await this.sendError(r, i2, a3), this.logger.error(a3);
      }
    }, this.onUnknownRpcMethodResponse = (i2) => {
      this.registeredMethods.includes(i2) || this.logger.error(U$2("WC_METHOD_UNSUPPORTED", i2));
    }, this.isValidPair = (i2) => {
      var s;
      if (!Gt$1(i2)) {
        const { message: o } = N$2("MISSING_OR_INVALID", `pair() params: ${i2}`);
        throw new Error(o);
      }
      if (!Kt$1(i2.uri)) {
        const { message: o } = N$2("MISSING_OR_INVALID", `pair() uri: ${i2.uri}`);
        throw new Error(o);
      }
      const r = Pt$1(i2.uri);
      if (!((s = r == null ? void 0 : r.relay) != null && s.protocol)) {
        const { message: o } = N$2("MISSING_OR_INVALID", "pair() uri#relay-protocol");
        throw new Error(o);
      }
      if (!(r != null && r.symKey)) {
        const { message: o } = N$2("MISSING_OR_INVALID", "pair() uri#symKey");
        throw new Error(o);
      }
      if (r != null && r.expiryTimestamp && cjs$4.toMiliseconds(r == null ? void 0 : r.expiryTimestamp) < Date.now()) {
        const { message: o } = N$2("EXPIRED", "pair() URI has expired. Please try again with a new connection URI.");
        throw new Error(o);
      }
    }, this.isValidPing = async (i2) => {
      if (!Gt$1(i2)) {
        const { message: r } = N$2("MISSING_OR_INVALID", `ping() params: ${i2}`);
        throw new Error(r);
      }
      const { topic: s } = i2;
      await this.isValidPairingTopic(s);
    }, this.isValidDisconnect = async (i2) => {
      if (!Gt$1(i2)) {
        const { message: r } = N$2("MISSING_OR_INVALID", `disconnect() params: ${i2}`);
        throw new Error(r);
      }
      const { topic: s } = i2;
      await this.isValidPairingTopic(s);
    }, this.isValidPairingTopic = async (i2) => {
      if (!g$5(i2, false)) {
        const { message: s } = N$2("MISSING_OR_INVALID", `pairing topic should be a string: ${i2}`);
        throw new Error(s);
      }
      if (!this.pairings.keys.includes(i2)) {
        const { message: s } = N$2("NO_MATCHING_KEY", `pairing topic doesn't exist: ${i2}`);
        throw new Error(s);
      }
      if (mt$1(this.pairings.get(i2).expiry)) {
        await this.deletePairing(i2);
        const { message: s } = N$2("EXPIRED", `pairing topic: ${i2}`);
        throw new Error(s);
      }
    }, this.core = e, this.logger = E$2(t, this.name), this.pairings = new Kt(this.core, this.logger, this.name, this.storagePrefix);
  }
  get context() {
    return y$2(this.logger);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = N$2("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
  registerRelayerEvents() {
    this.core.relayer.on(D$2.message, async (e) => {
      const { topic: t, message: i2 } = e;
      if (!this.pairings.keys.includes(t) || this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(i2)))
        return;
      const s = await this.core.crypto.decode(t, i2);
      try {
        isJsonRpcRequest(s) ? (this.core.history.set(t, s), this.onRelayEventRequest({ topic: t, payload: s })) : isJsonRpcResponse(s) && (await this.core.history.resolve(s), await this.onRelayEventResponse({ topic: t, payload: s }), this.core.history.delete(t, s.id));
      } catch (r) {
        this.logger.error(r);
      }
    });
  }
  registerExpirerEvents() {
    this.core.expirer.on(v$1.expired, async (e) => {
      const { topic: t } = ft$2(e.target);
      t && this.pairings.keys.includes(t) && (await this.deletePairing(t, true), this.events.emit(V.expire, { topic: t }));
    });
  }
}
class Vt extends h$1 {
  constructor(e, t) {
    super(e, t), this.core = e, this.logger = t, this.records = /* @__PURE__ */ new Map(), this.events = new eventsExports.EventEmitter(), this.name = vt, this.version = It, this.cached = [], this.initialized = false, this.storagePrefix = O$1, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((i2) => this.records.set(i2.id, i2)), this.cached = [], this.registerEventListeners(), this.initialized = true);
    }, this.set = (i2, s, r) => {
      if (this.isInitialized(), this.logger.debug("Setting JSON-RPC request history record"), this.logger.trace({ type: "method", method: "set", topic: i2, request: s, chainId: r }), this.records.has(s.id))
        return;
      const o = { id: s.id, topic: i2, request: { method: s.method, params: s.params || null }, chainId: r, expiry: pt$1(cjs$4.THIRTY_DAYS) };
      this.records.set(o.id, o), this.events.emit(R$1.created, o);
    }, this.resolve = async (i2) => {
      if (this.isInitialized(), this.logger.debug("Updating JSON-RPC response history record"), this.logger.trace({ type: "method", method: "update", response: i2 }), !this.records.has(i2.id))
        return;
      const s = await this.getRecord(i2.id);
      typeof s.response > "u" && (s.response = isJsonRpcError(i2) ? { error: i2.error } : { result: i2.result }, this.records.set(s.id, s), this.events.emit(R$1.updated, s));
    }, this.get = async (i2, s) => (this.isInitialized(), this.logger.debug("Getting record"), this.logger.trace({ type: "method", method: "get", topic: i2, id: s }), await this.getRecord(s)), this.delete = (i2, s) => {
      this.isInitialized(), this.logger.debug("Deleting record"), this.logger.trace({ type: "method", method: "delete", id: s }), this.values.forEach((r) => {
        if (r.topic === i2) {
          if (typeof s < "u" && r.id !== s)
            return;
          this.records.delete(r.id), this.events.emit(R$1.deleted, r);
        }
      });
    }, this.exists = async (i2, s) => (this.isInitialized(), this.records.has(s) ? (await this.getRecord(s)).topic === i2 : false), this.on = (i2, s) => {
      this.events.on(i2, s);
    }, this.once = (i2, s) => {
      this.events.once(i2, s);
    }, this.off = (i2, s) => {
      this.events.off(i2, s);
    }, this.removeListener = (i2, s) => {
      this.events.removeListener(i2, s);
    }, this.logger = E$2(t, this.name);
  }
  get context() {
    return y$2(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  get size() {
    return this.records.size;
  }
  get keys() {
    return Array.from(this.records.keys());
  }
  get values() {
    return Array.from(this.records.values());
  }
  get pending() {
    const e = [];
    return this.values.forEach((t) => {
      if (typeof t.response < "u")
        return;
      const i2 = { topic: t.topic, request: formatJsonRpcRequest(t.request.method, t.request.params, t.id), chainId: t.chainId };
      return e.push(i2);
    }), e;
  }
  async setJsonRpcRecords(e) {
    await this.core.storage.setItem(this.storageKey, e);
  }
  async getJsonRpcRecords() {
    return await this.core.storage.getItem(this.storageKey);
  }
  getRecord(e) {
    this.isInitialized();
    const t = this.records.get(e);
    if (!t) {
      const { message: i2 } = N$2("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw new Error(i2);
    }
    return t;
  }
  async persist() {
    await this.setJsonRpcRecords(this.values), this.events.emit(R$1.sync);
  }
  async restore() {
    try {
      const e = await this.getJsonRpcRecords();
      if (typeof e > "u" || !e.length)
        return;
      if (this.records.size) {
        const { message: t } = N$2("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(t), new Error(t);
      }
      this.cached = e, this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({ type: "method", method: "restore", records: this.values });
    } catch (e) {
      this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(e);
    }
  }
  registerEventListeners() {
    this.events.on(R$1.created, (e) => {
      const t = R$1.created;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, record: e }), this.persist();
    }), this.events.on(R$1.updated, (e) => {
      const t = R$1.updated;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, record: e }), this.persist();
    }), this.events.on(R$1.deleted, (e) => {
      const t = R$1.deleted;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, record: e }), this.persist();
    }), this.core.heartbeat.on(cjs$1.HEARTBEAT_EVENTS.pulse, () => {
      this.cleanup();
    });
  }
  cleanup() {
    try {
      this.records.forEach((e) => {
        cjs$4.toMiliseconds(e.expiry || 0) - Date.now() <= 0 && (this.logger.info(`Deleting expired history log: ${e.id}`), this.delete(e.topic, e.id));
      });
    } catch (e) {
      this.logger.warn(e);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = N$2("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class qt extends E$1 {
  constructor(e, t) {
    super(e, t), this.core = e, this.logger = t, this.expirations = /* @__PURE__ */ new Map(), this.events = new eventsExports.EventEmitter(), this.name = Ct$1, this.version = Rt, this.cached = [], this.initialized = false, this.storagePrefix = O$1, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((i2) => this.expirations.set(i2.target, i2)), this.cached = [], this.registerEventListeners(), this.initialized = true);
    }, this.has = (i2) => {
      try {
        const s = this.formatTarget(i2);
        return typeof this.getExpiration(s) < "u";
      } catch {
        return false;
      }
    }, this.set = (i2, s) => {
      this.isInitialized();
      const r = this.formatTarget(i2), o = { target: r, expiry: s };
      this.expirations.set(r, o), this.checkExpiry(r, o), this.events.emit(v$1.created, { target: r, expiration: o });
    }, this.get = (i2) => {
      this.isInitialized();
      const s = this.formatTarget(i2);
      return this.getExpiration(s);
    }, this.del = (i2) => {
      if (this.isInitialized(), this.has(i2)) {
        const s = this.formatTarget(i2), r = this.getExpiration(s);
        this.expirations.delete(s), this.events.emit(v$1.deleted, { target: s, expiration: r });
      }
    }, this.on = (i2, s) => {
      this.events.on(i2, s);
    }, this.once = (i2, s) => {
      this.events.once(i2, s);
    }, this.off = (i2, s) => {
      this.events.off(i2, s);
    }, this.removeListener = (i2, s) => {
      this.events.removeListener(i2, s);
    }, this.logger = E$2(t, this.name);
  }
  get context() {
    return y$2(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  get length() {
    return this.expirations.size;
  }
  get keys() {
    return Array.from(this.expirations.keys());
  }
  get values() {
    return Array.from(this.expirations.values());
  }
  formatTarget(e) {
    if (typeof e == "string")
      return lt$1(e);
    if (typeof e == "number")
      return dt$1(e);
    const { message: t } = N$2("UNKNOWN_TYPE", `Target type: ${typeof e}`);
    throw new Error(t);
  }
  async setExpirations(e) {
    await this.core.storage.setItem(this.storageKey, e);
  }
  async getExpirations() {
    return await this.core.storage.getItem(this.storageKey);
  }
  async persist() {
    await this.setExpirations(this.values), this.events.emit(v$1.sync);
  }
  async restore() {
    try {
      const e = await this.getExpirations();
      if (typeof e > "u" || !e.length)
        return;
      if (this.expirations.size) {
        const { message: t } = N$2("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(t), new Error(t);
      }
      this.cached = e, this.logger.debug(`Successfully Restored expirations for ${this.name}`), this.logger.trace({ type: "method", method: "restore", expirations: this.values });
    } catch (e) {
      this.logger.debug(`Failed to Restore expirations for ${this.name}`), this.logger.error(e);
    }
  }
  getExpiration(e) {
    const t = this.expirations.get(e);
    if (!t) {
      const { message: i2 } = N$2("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw this.logger.error(i2), new Error(i2);
    }
    return t;
  }
  checkExpiry(e, t) {
    const { expiry: i2 } = t;
    cjs$4.toMiliseconds(i2) - Date.now() <= 0 && this.expire(e, t);
  }
  expire(e, t) {
    this.expirations.delete(e), this.events.emit(v$1.expired, { target: e, expiration: t });
  }
  checkExpirations() {
    this.core.relayer.connected && this.expirations.forEach((e, t) => this.checkExpiry(t, e));
  }
  registerEventListeners() {
    this.core.heartbeat.on(cjs$1.HEARTBEAT_EVENTS.pulse, () => this.checkExpirations()), this.events.on(v$1.created, (e) => {
      const t = v$1.created;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, data: e }), this.persist();
    }), this.events.on(v$1.expired, (e) => {
      const t = v$1.expired;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, data: e }), this.persist();
    }), this.events.on(v$1.deleted, (e) => {
      const t = v$1.deleted;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, data: e }), this.persist();
    });
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = N$2("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class jt extends y$1 {
  constructor(e, t) {
    super(e, t), this.projectId = e, this.logger = t, this.name = Z, this.initialized = false, this.queue = [], this.verifyDisabled = false, this.init = async (i2) => {
      if (this.verifyDisabled || $$2() || !D$4())
        return;
      const s = this.getVerifyUrl(i2 == null ? void 0 : i2.verifyUrl);
      this.verifyUrl !== s && this.removeIframe(), this.verifyUrl = s;
      try {
        await this.createIframe();
      } catch (r) {
        this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`), this.logger.info(r);
      }
      if (!this.initialized) {
        this.removeIframe(), this.verifyUrl = ee;
        try {
          await this.createIframe();
        } catch (r) {
          this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`), this.logger.info(r), this.verifyDisabled = true;
        }
      }
    }, this.register = async (i2) => {
      this.initialized ? this.sendPost(i2.attestationId) : (this.addToQueue(i2.attestationId), await this.init());
    }, this.resolve = async (i2) => {
      if (this.isDevEnv)
        return "";
      const s = this.getVerifyUrl(i2 == null ? void 0 : i2.verifyUrl);
      let r;
      try {
        r = await this.fetchAttestation(i2.attestationId, s);
      } catch (o) {
        this.logger.info(`failed to resolve attestation: ${i2.attestationId} from url: ${s}`), this.logger.info(o), r = await this.fetchAttestation(i2.attestationId, ee);
      }
      return r;
    }, this.fetchAttestation = async (i2, s) => {
      this.logger.info(`resolving attestation: ${i2} from url: ${s}`);
      const r = this.startAbortTimer(cjs$4.ONE_SECOND * 2), o = await fetch(`${s}/attestation/${i2}`, { signal: this.abortController.signal });
      return clearTimeout(r), o.status === 200 ? await o.json() : void 0;
    }, this.addToQueue = (i2) => {
      this.queue.push(i2);
    }, this.processQueue = () => {
      this.queue.length !== 0 && (this.queue.forEach((i2) => this.sendPost(i2)), this.queue = []);
    }, this.sendPost = (i2) => {
      var s;
      try {
        if (!this.iframe)
          return;
        (s = this.iframe.contentWindow) == null || s.postMessage(i2, "*"), this.logger.info(`postMessage sent: ${i2} ${this.verifyUrl}`);
      } catch {
      }
    }, this.createIframe = async () => {
      let i2;
      const s = (r) => {
        r.data === "verify_ready" && (this.initialized = true, this.processQueue(), window.removeEventListener("message", s), i2());
      };
      await Promise.race([new Promise((r) => {
        if (document.getElementById(Z))
          return r();
        window.addEventListener("message", s);
        const o = document.createElement("iframe");
        o.id = Z, o.src = `${this.verifyUrl}/${this.projectId}`, o.style.display = "none", document.body.append(o), this.iframe = o, i2 = r;
      }), new Promise((r, o) => setTimeout(() => {
        window.removeEventListener("message", s), o("verify iframe load timeout");
      }, cjs$4.toMiliseconds(cjs$4.FIVE_SECONDS)))]);
    }, this.removeIframe = () => {
      this.iframe && (this.iframe.remove(), this.iframe = void 0, this.initialized = false);
    }, this.getVerifyUrl = (i2) => {
      let s = i2 || F$1;
      return _t.includes(s) || (this.logger.info(`verify url: ${s}, not included in trusted list, assigning default: ${F$1}`), s = F$1), s;
    }, this.logger = E$2(t, this.name), this.verifyUrl = F$1, this.abortController = new AbortController(), this.isDevEnv = te$1() && define_process_env_default.IS_VITEST;
  }
  get context() {
    return y$2(this.logger);
  }
  startAbortTimer(e) {
    return this.abortController = new AbortController(), setTimeout(() => this.abortController.abort(), cjs$4.toMiliseconds(e));
  }
}
class Gt extends v$2 {
  constructor(e, t) {
    super(e, t), this.projectId = e, this.logger = t, this.context = Tt, this.registerDeviceToken = async (i2) => {
      const { clientId: s, token: r, notificationType: o, enableEncrypted: a3 = false } = i2, h4 = `${St}/${this.projectId}/clients`;
      await Yi(h4, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ client_id: s, type: o, token: r, always_raw: a3 }) });
    }, this.logger = E$2(t, this.context);
  }
}
var Lr = Object.defineProperty, Yt = Object.getOwnPropertySymbols, $r = Object.prototype.hasOwnProperty, Fr = Object.prototype.propertyIsEnumerable, Ht = (n2, e, t) => e in n2 ? Lr(n2, e, { enumerable: true, configurable: true, writable: true, value: t }) : n2[e] = t, Jt = (n2, e) => {
  for (var t in e || (e = {}))
    $r.call(e, t) && Ht(n2, t, e[t]);
  if (Yt)
    for (var t of Yt(e))
      Fr.call(e, t) && Ht(n2, t, e[t]);
  return n2;
};
class te extends n {
  constructor(e) {
    super(e), this.protocol = le$1, this.version = We, this.name = Q$2, this.events = new eventsExports.EventEmitter(), this.initialized = false, this.on = (i2, s) => this.events.on(i2, s), this.once = (i2, s) => this.events.once(i2, s), this.off = (i2, s) => this.events.off(i2, s), this.removeListener = (i2, s) => this.events.removeListener(i2, s), this.projectId = e == null ? void 0 : e.projectId, this.relayUrl = (e == null ? void 0 : e.relayUrl) || ge$2, this.customStoragePrefix = e != null && e.customStoragePrefix ? `:${e.customStoragePrefix}` : "";
    const t = typeof (e == null ? void 0 : e.logger) < "u" && typeof (e == null ? void 0 : e.logger) != "string" ? e.logger : Hg(k({ level: (e == null ? void 0 : e.logger) || Qe.logger }));
    this.logger = E$2(t, this.name), this.heartbeat = new cjs$1.HeartBeat(), this.crypto = new xt(this, this.logger, e == null ? void 0 : e.keychain), this.history = new Vt(this, this.logger), this.expirer = new qt(this, this.logger), this.storage = e != null && e.storage ? e.storage : new h$2(Jt(Jt({}, Ze), e == null ? void 0 : e.storageOptions)), this.relayer = new $t({ core: this, logger: this.logger, relayUrl: this.relayUrl, projectId: this.projectId }), this.pairing = new Bt(this, this.logger), this.verify = new jt(this.projectId || "", this.logger), this.echoClient = new Gt(this.projectId || "", this.logger);
  }
  static async init(e) {
    const t = new te(e);
    await t.initialize();
    const i2 = await t.crypto.getClientId();
    return await t.storage.setItem(yt, i2), t;
  }
  get context() {
    return y$2(this.logger);
  }
  async start() {
    this.initialized || await this.initialize();
  }
  async initialize() {
    this.logger.trace("Initialized");
    try {
      await this.crypto.init(), await this.history.init(), await this.expirer.init(), await this.relayer.init(), await this.heartbeat.init(), await this.pairing.init(), this.initialized = true, this.logger.info("Core Initialization Success");
    } catch (e) {
      throw this.logger.warn(`Core Initialization Failure at epoch ${Date.now()}`, e), this.logger.error(e.message), e;
    }
  }
}
const Mr = te;
const J = "wc", F = 2, X = "client", G$1 = `${J}@${F}:${X}:`, M$1 = { name: X, logger: "error", controller: false, relayUrl: "wss://relay.walletconnect.com" }, H = "WALLETCONNECT_DEEPLINK_CHOICE", oe = "proposal", ae = "Proposal expired", ce = "session", L$1 = cjs$4.SEVEN_DAYS, le = "engine", R = { wc_sessionPropose: { req: { ttl: cjs$4.FIVE_MINUTES, prompt: true, tag: 1100 }, res: { ttl: cjs$4.FIVE_MINUTES, prompt: false, tag: 1101 } }, wc_sessionSettle: { req: { ttl: cjs$4.FIVE_MINUTES, prompt: false, tag: 1102 }, res: { ttl: cjs$4.FIVE_MINUTES, prompt: false, tag: 1103 } }, wc_sessionUpdate: { req: { ttl: cjs$4.ONE_DAY, prompt: false, tag: 1104 }, res: { ttl: cjs$4.ONE_DAY, prompt: false, tag: 1105 } }, wc_sessionExtend: { req: { ttl: cjs$4.ONE_DAY, prompt: false, tag: 1106 }, res: { ttl: cjs$4.ONE_DAY, prompt: false, tag: 1107 } }, wc_sessionRequest: { req: { ttl: cjs$4.FIVE_MINUTES, prompt: true, tag: 1108 }, res: { ttl: cjs$4.FIVE_MINUTES, prompt: false, tag: 1109 } }, wc_sessionEvent: { req: { ttl: cjs$4.FIVE_MINUTES, prompt: true, tag: 1110 }, res: { ttl: cjs$4.FIVE_MINUTES, prompt: false, tag: 1111 } }, wc_sessionDelete: { req: { ttl: cjs$4.ONE_DAY, prompt: false, tag: 1112 }, res: { ttl: cjs$4.ONE_DAY, prompt: false, tag: 1113 } }, wc_sessionPing: { req: { ttl: cjs$4.THIRTY_SECONDS, prompt: false, tag: 1114 }, res: { ttl: cjs$4.THIRTY_SECONDS, prompt: false, tag: 1115 } } }, U$1 = { min: cjs$4.FIVE_MINUTES, max: cjs$4.SEVEN_DAYS }, I = { idle: "IDLE", active: "ACTIVE" }, pe = "request", he = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest"];
var as = Object.defineProperty, cs = Object.defineProperties, ls = Object.getOwnPropertyDescriptors, de = Object.getOwnPropertySymbols, ps = Object.prototype.hasOwnProperty, hs = Object.prototype.propertyIsEnumerable, ue = (w3, r, e) => r in w3 ? as(w3, r, { enumerable: true, configurable: true, writable: true, value: e }) : w3[r] = e, g$1 = (w3, r) => {
  for (var e in r || (r = {}))
    ps.call(r, e) && ue(w3, e, r[e]);
  if (de)
    for (var e of de(r))
      hs.call(r, e) && ue(w3, e, r[e]);
  return w3;
}, D$1 = (w3, r) => cs(w3, ls(r));
class ds extends w$2 {
  constructor(r) {
    super(r), this.name = le, this.events = new Ug(), this.initialized = false, this.ignoredPayloadTypes = [_$3], this.requestQueue = { state: I.idle, queue: [] }, this.sessionRequestQueue = { state: I.idle, queue: [] }, this.requestQueueDelay = cjs$4.ONE_SECOND, this.init = async () => {
      this.initialized || (await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.registerPairingEvents(), this.client.core.pairing.register({ methods: Object.keys(R) }), this.initialized = true, setTimeout(() => {
        this.sessionRequestQueue.queue = this.getPendingSessionRequests(), this.processSessionRequestQueue();
      }, cjs$4.toMiliseconds(this.requestQueueDelay)));
    }, this.connect = async (e) => {
      await this.isInitialized();
      const s = D$1(g$1({}, e), { requiredNamespaces: e.requiredNamespaces || {}, optionalNamespaces: e.optionalNamespaces || {} });
      await this.isValidConnect(s);
      const { pairingTopic: t, requiredNamespaces: i2, optionalNamespaces: n2, sessionProperties: o, relays: a3 } = s;
      let c2 = t, p3, d2 = false;
      if (c2 && (d2 = this.client.core.pairing.pairings.get(c2).active), !c2 || !d2) {
        const { topic: T2, uri: _3 } = await this.client.core.pairing.create();
        c2 = T2, p3 = _3;
      }
      const h4 = await this.client.core.crypto.generateKeyPair(), N2 = R.wc_sessionPropose.req.ttl || cjs$4.FIVE_MINUTES, m2 = pt$1(N2), f3 = g$1({ requiredNamespaces: i2, optionalNamespaces: n2, relays: a3 ?? [{ protocol: ht }], proposer: { publicKey: h4, metadata: this.client.metadata }, expiryTimestamp: m2 }, o && { sessionProperties: o }), { reject: k2, resolve: O2, done: we } = at$1(N2, ae);
      if (this.events.once(yt$1("session_connect"), async ({ error: T2, session: _3 }) => {
        if (T2)
          k2(T2);
        else if (_3) {
          _3.self.publicKey = h4;
          const B2 = D$1(g$1({}, _3), { requiredNamespaces: f3.requiredNamespaces, optionalNamespaces: f3.optionalNamespaces });
          await this.client.session.set(_3.topic, B2), await this.setExpiry(_3.topic, _3.expiry), c2 && await this.client.core.pairing.updateMetadata({ topic: c2, metadata: _3.peer.metadata }), O2(B2);
        }
      }), !c2) {
        const { message: T2 } = N$2("NO_MATCHING_KEY", `connect() pairing topic: ${c2}`);
        throw new Error(T2);
      }
      const W2 = await this.sendRequest({ topic: c2, method: "wc_sessionPropose", params: f3, throwOnFailedPublish: true });
      return await this.setProposal(W2, g$1({ id: W2 }, f3)), { uri: p3, approval: we };
    }, this.pair = async (e) => (await this.isInitialized(), await this.client.core.pairing.pair(e)), this.approve = async (e) => {
      await this.isInitialized(), await this.isValidApprove(e);
      const { id: s, relayProtocol: t, namespaces: i2, sessionProperties: n2 } = e, o = this.client.proposal.get(s);
      let { pairingTopic: a3, proposer: c2, requiredNamespaces: p3, optionalNamespaces: d2 } = o;
      a3 = a3 || "";
      const h4 = await this.client.core.crypto.generateKeyPair(), N2 = c2.publicKey, m2 = await this.client.core.crypto.generateSharedKey(h4, N2);
      a3 && s && (await this.client.core.pairing.updateMetadata({ topic: a3, metadata: c2.metadata }), await this.sendResult({ id: s, topic: a3, result: { relay: { protocol: t ?? "irn" }, responderPublicKey: h4 } }), await this.client.proposal.delete(s, U$2("USER_DISCONNECTED")), await this.client.core.pairing.activate({ topic: a3 }));
      const f3 = g$1({ relay: { protocol: t ?? "irn" }, namespaces: i2, pairingTopic: a3, controller: { publicKey: h4, metadata: this.client.metadata }, expiry: pt$1(L$1) }, n2 && { sessionProperties: n2 });
      await this.client.core.relayer.subscribe(m2);
      const k2 = D$1(g$1({}, f3), { topic: m2, requiredNamespaces: p3, optionalNamespaces: d2, pairingTopic: a3, acknowledged: false, self: f3.controller, peer: { publicKey: c2.publicKey, metadata: c2.metadata }, controller: h4 });
      await this.client.session.set(m2, k2);
      try {
        await this.sendRequest({ topic: m2, method: "wc_sessionSettle", params: f3, throwOnFailedPublish: true });
      } catch (O2) {
        throw this.client.logger.error(O2), this.client.session.delete(m2, U$2("USER_DISCONNECTED")), await this.client.core.relayer.unsubscribe(m2), O2;
      }
      return await this.setExpiry(m2, pt$1(L$1)), { topic: m2, acknowledged: () => new Promise((O2) => setTimeout(() => O2(this.client.session.get(m2)), 500)) };
    }, this.reject = async (e) => {
      await this.isInitialized(), await this.isValidReject(e);
      const { id: s, reason: t } = e, { pairingTopic: i2 } = this.client.proposal.get(s);
      i2 && (await this.sendError(s, i2, t), await this.client.proposal.delete(s, U$2("USER_DISCONNECTED")));
    }, this.update = async (e) => {
      await this.isInitialized(), await this.isValidUpdate(e);
      const { topic: s, namespaces: t } = e, i2 = await this.sendRequest({ topic: s, method: "wc_sessionUpdate", params: { namespaces: t } }), { done: n2, resolve: o, reject: a3 } = at$1();
      return this.events.once(yt$1("session_update", i2), ({ error: c2 }) => {
        c2 ? a3(c2) : o();
      }), await this.client.session.update(s, { namespaces: t }), { acknowledged: n2 };
    }, this.extend = async (e) => {
      await this.isInitialized(), await this.isValidExtend(e);
      const { topic: s } = e, t = await this.sendRequest({ topic: s, method: "wc_sessionExtend", params: {} }), { done: i2, resolve: n2, reject: o } = at$1();
      return this.events.once(yt$1("session_extend", t), ({ error: a3 }) => {
        a3 ? o(a3) : n2();
      }), await this.setExpiry(s, pt$1(L$1)), { acknowledged: i2 };
    }, this.request = async (e) => {
      await this.isInitialized(), await this.isValidRequest(e);
      const { chainId: s, request: t, topic: i2, expiry: n2 = R.wc_sessionRequest.req.ttl } = e, o = payloadId(), { done: a3, resolve: c2, reject: p3 } = at$1(n2, "Request expired. Please try again.");
      return this.events.once(yt$1("session_request", o), ({ error: d2, result: h4 }) => {
        d2 ? p3(d2) : c2(h4);
      }), await Promise.all([new Promise(async (d2) => {
        await this.sendRequest({ clientRpcId: o, topic: i2, method: "wc_sessionRequest", params: { request: D$1(g$1({}, t), { expiryTimestamp: pt$1(n2) }), chainId: s }, expiry: n2, throwOnFailedPublish: true }).catch((h4) => p3(h4)), this.client.events.emit("session_request_sent", { topic: i2, request: t, chainId: s, id: o }), d2();
      }), new Promise(async (d2) => {
        const h4 = await ht$1(this.client.core.storage, H);
        gt$1({ id: o, topic: i2, wcDeepLink: h4 }), d2();
      }), a3()]).then((d2) => d2[2]);
    }, this.respond = async (e) => {
      await this.isInitialized(), await this.isValidRespond(e);
      const { topic: s, response: t } = e, { id: i2 } = t;
      isJsonRpcResult(t) ? await this.sendResult({ id: i2, topic: s, result: t.result, throwOnFailedPublish: true }) : isJsonRpcError(t) && await this.sendError(i2, s, t.error), this.cleanupAfterResponse(e);
    }, this.ping = async (e) => {
      await this.isInitialized(), await this.isValidPing(e);
      const { topic: s } = e;
      if (this.client.session.keys.includes(s)) {
        const t = await this.sendRequest({ topic: s, method: "wc_sessionPing", params: {} }), { done: i2, resolve: n2, reject: o } = at$1();
        this.events.once(yt$1("session_ping", t), ({ error: a3 }) => {
          a3 ? o(a3) : n2();
        }), await i2();
      } else
        this.client.core.pairing.pairings.keys.includes(s) && await this.client.core.pairing.ping({ topic: s });
    }, this.emit = async (e) => {
      await this.isInitialized(), await this.isValidEmit(e);
      const { topic: s, event: t, chainId: i2 } = e;
      await this.sendRequest({ topic: s, method: "wc_sessionEvent", params: { event: t, chainId: i2 } });
    }, this.disconnect = async (e) => {
      await this.isInitialized(), await this.isValidDisconnect(e);
      const { topic: s } = e;
      if (this.client.session.keys.includes(s))
        await this.sendRequest({ topic: s, method: "wc_sessionDelete", params: U$2("USER_DISCONNECTED"), throwOnFailedPublish: true }), await this.deleteSession({ topic: s, emitEvent: false });
      else if (this.client.core.pairing.pairings.keys.includes(s))
        await this.client.core.pairing.disconnect({ topic: s });
      else {
        const { message: t } = N$2("MISMATCHED_TOPIC", `Session or pairing topic not found: ${s}`);
        throw new Error(t);
      }
    }, this.find = (e) => (this.isInitialized(), this.client.session.getAll().filter((s) => Mt$1(s, e))), this.getPendingSessionRequests = () => this.client.pendingRequest.getAll(), this.cleanupDuplicatePairings = async (e) => {
      if (e.pairingTopic)
        try {
          const s = this.client.core.pairing.pairings.get(e.pairingTopic), t = this.client.core.pairing.pairings.getAll().filter((i2) => {
            var n2, o;
            return ((n2 = i2.peerMetadata) == null ? void 0 : n2.url) && ((o = i2.peerMetadata) == null ? void 0 : o.url) === e.peer.metadata.url && i2.topic && i2.topic !== s.topic;
          });
          if (t.length === 0)
            return;
          this.client.logger.info(`Cleaning up ${t.length} duplicate pairing(s)`), await Promise.all(t.map((i2) => this.client.core.pairing.disconnect({ topic: i2.topic }))), this.client.logger.info("Duplicate pairings clean up finished");
        } catch (s) {
          this.client.logger.error(s);
        }
    }, this.deleteSession = async (e) => {
      const { topic: s, expirerHasDeleted: t = false, emitEvent: i2 = true, id: n2 = 0 } = e, { self: o } = this.client.session.get(s);
      await this.client.core.relayer.unsubscribe(s), await this.client.session.delete(s, U$2("USER_DISCONNECTED")), this.client.core.crypto.keychain.has(o.publicKey) && await this.client.core.crypto.deleteKeyPair(o.publicKey), this.client.core.crypto.keychain.has(s) && await this.client.core.crypto.deleteSymKey(s), t || this.client.core.expirer.del(s), this.client.core.storage.removeItem(H).catch((a3) => this.client.logger.warn(a3)), this.getPendingSessionRequests().forEach((a3) => {
        a3.topic === s && this.deletePendingSessionRequest(a3.id, U$2("USER_DISCONNECTED"));
      }), i2 && this.client.events.emit("session_delete", { id: n2, topic: s });
    }, this.deleteProposal = async (e, s) => {
      await Promise.all([this.client.proposal.delete(e, U$2("USER_DISCONNECTED")), s ? Promise.resolve() : this.client.core.expirer.del(e)]);
    }, this.deletePendingSessionRequest = async (e, s, t = false) => {
      await Promise.all([this.client.pendingRequest.delete(e, s), t ? Promise.resolve() : this.client.core.expirer.del(e)]), this.sessionRequestQueue.queue = this.sessionRequestQueue.queue.filter((i2) => i2.id !== e), t && (this.sessionRequestQueue.state = I.idle, this.client.events.emit("session_request_expire", { id: e }));
    }, this.setExpiry = async (e, s) => {
      this.client.session.keys.includes(e) && await this.client.session.update(e, { expiry: s }), this.client.core.expirer.set(e, s);
    }, this.setProposal = async (e, s) => {
      await this.client.proposal.set(e, s), this.client.core.expirer.set(e, pt$1(R.wc_sessionPropose.req.ttl));
    }, this.setPendingSessionRequest = async (e) => {
      const { id: s, topic: t, params: i2, verifyContext: n2 } = e, o = i2.request.expiryTimestamp || pt$1(R.wc_sessionRequest.req.ttl);
      await this.client.pendingRequest.set(s, { id: s, topic: t, params: i2, verifyContext: n2 }), o && this.client.core.expirer.set(s, o);
    }, this.sendRequest = async (e) => {
      const { topic: s, method: t, params: i2, expiry: n2, relayRpcId: o, clientRpcId: a3, throwOnFailedPublish: c2 } = e, p3 = formatJsonRpcRequest(t, i2, a3);
      if (D$4() && he.includes(t)) {
        const N2 = Ln(JSON.stringify(p3));
        this.client.core.verify.register({ attestationId: N2 });
      }
      const d2 = await this.client.core.crypto.encode(s, p3), h4 = R[t].req;
      return n2 && (h4.ttl = n2), o && (h4.id = o), this.client.core.history.set(s, p3), c2 ? (h4.internal = D$1(g$1({}, h4.internal), { throwOnFailedPublish: true }), await this.client.core.relayer.publish(s, d2, h4)) : this.client.core.relayer.publish(s, d2, h4).catch((N2) => this.client.logger.error(N2)), p3.id;
    }, this.sendResult = async (e) => {
      const { id: s, topic: t, result: i2, throwOnFailedPublish: n2 } = e, o = formatJsonRpcResult(s, i2), a3 = await this.client.core.crypto.encode(t, o), c2 = await this.client.core.history.get(t, s), p3 = R[c2.request.method].res;
      n2 ? (p3.internal = D$1(g$1({}, p3.internal), { throwOnFailedPublish: true }), await this.client.core.relayer.publish(t, a3, p3)) : this.client.core.relayer.publish(t, a3, p3).catch((d2) => this.client.logger.error(d2)), await this.client.core.history.resolve(o);
    }, this.sendError = async (e, s, t) => {
      const i2 = formatJsonRpcError(e, t), n2 = await this.client.core.crypto.encode(s, i2), o = await this.client.core.history.get(s, e), a3 = R[o.request.method].res;
      this.client.core.relayer.publish(s, n2, a3), await this.client.core.history.resolve(i2);
    }, this.cleanup = async () => {
      const e = [], s = [];
      this.client.session.getAll().forEach((t) => {
        let i2 = false;
        mt$1(t.expiry) && (i2 = true), this.client.core.crypto.keychain.has(t.topic) || (i2 = true), i2 && e.push(t.topic);
      }), this.client.proposal.getAll().forEach((t) => {
        mt$1(t.expiryTimestamp) && s.push(t.id);
      }), await Promise.all([...e.map((t) => this.deleteSession({ topic: t })), ...s.map((t) => this.deleteProposal(t))]);
    }, this.onRelayEventRequest = async (e) => {
      this.requestQueue.queue.push(e), await this.processRequestsQueue();
    }, this.processRequestsQueue = async () => {
      if (this.requestQueue.state === I.active) {
        this.client.logger.info("Request queue already active, skipping...");
        return;
      }
      for (this.client.logger.info(`Request queue starting with ${this.requestQueue.queue.length} requests`); this.requestQueue.queue.length > 0; ) {
        this.requestQueue.state = I.active;
        const e = this.requestQueue.queue.shift();
        if (e)
          try {
            this.processRequest(e), await new Promise((s) => setTimeout(s, 300));
          } catch (s) {
            this.client.logger.warn(s);
          }
      }
      this.requestQueue.state = I.idle;
    }, this.processRequest = (e) => {
      const { topic: s, payload: t } = e, i2 = t.method;
      switch (i2) {
        case "wc_sessionPropose":
          return this.onSessionProposeRequest(s, t);
        case "wc_sessionSettle":
          return this.onSessionSettleRequest(s, t);
        case "wc_sessionUpdate":
          return this.onSessionUpdateRequest(s, t);
        case "wc_sessionExtend":
          return this.onSessionExtendRequest(s, t);
        case "wc_sessionPing":
          return this.onSessionPingRequest(s, t);
        case "wc_sessionDelete":
          return this.onSessionDeleteRequest(s, t);
        case "wc_sessionRequest":
          return this.onSessionRequest(s, t);
        case "wc_sessionEvent":
          return this.onSessionEventRequest(s, t);
        default:
          return this.client.logger.info(`Unsupported request method ${i2}`);
      }
    }, this.onRelayEventResponse = async (e) => {
      const { topic: s, payload: t } = e, i2 = (await this.client.core.history.get(s, t.id)).request.method;
      switch (i2) {
        case "wc_sessionPropose":
          return this.onSessionProposeResponse(s, t);
        case "wc_sessionSettle":
          return this.onSessionSettleResponse(s, t);
        case "wc_sessionUpdate":
          return this.onSessionUpdateResponse(s, t);
        case "wc_sessionExtend":
          return this.onSessionExtendResponse(s, t);
        case "wc_sessionPing":
          return this.onSessionPingResponse(s, t);
        case "wc_sessionRequest":
          return this.onSessionRequestResponse(s, t);
        default:
          return this.client.logger.info(`Unsupported response method ${i2}`);
      }
    }, this.onRelayEventUnknownPayload = (e) => {
      const { topic: s } = e, { message: t } = N$2("MISSING_OR_INVALID", `Decoded payload on topic ${s} is not identifiable as a JSON-RPC request or a response.`);
      throw new Error(t);
    }, this.onSessionProposeRequest = async (e, s) => {
      const { params: t, id: i2 } = s;
      try {
        this.isValidConnect(g$1({}, s.params));
        const n2 = t.expiryTimestamp || pt$1(R.wc_sessionPropose.req.ttl), o = g$1({ id: i2, pairingTopic: e, expiryTimestamp: n2 }, t);
        await this.setProposal(i2, o);
        const a3 = Ln(JSON.stringify(s)), c2 = await this.getVerifyContext(a3, o.proposer.metadata);
        this.client.events.emit("session_proposal", { id: i2, params: o, verifyContext: c2 });
      } catch (n2) {
        await this.sendError(i2, e, n2), this.client.logger.error(n2);
      }
    }, this.onSessionProposeResponse = async (e, s) => {
      const { id: t } = s;
      if (isJsonRpcResult(s)) {
        const { result: i2 } = s;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", result: i2 });
        const n2 = this.client.proposal.get(t);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", proposal: n2 });
        const o = n2.proposer.publicKey;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", selfPublicKey: o });
        const a3 = i2.responderPublicKey;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", peerPublicKey: a3 });
        const c2 = await this.client.core.crypto.generateSharedKey(o, a3);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", sessionTopic: c2 });
        const p3 = await this.client.core.relayer.subscribe(c2);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", subscriptionId: p3 }), await this.client.core.pairing.activate({ topic: e });
      } else
        isJsonRpcError(s) && (await this.client.proposal.delete(t, U$2("USER_DISCONNECTED")), this.events.emit(yt$1("session_connect"), { error: s.error }));
    }, this.onSessionSettleRequest = async (e, s) => {
      const { id: t, params: i2 } = s;
      try {
        this.isValidSessionSettleRequest(i2);
        const { relay: n2, controller: o, expiry: a3, namespaces: c2, sessionProperties: p3, pairingTopic: d2 } = s.params, h4 = g$1({ topic: e, relay: n2, expiry: a3, namespaces: c2, acknowledged: true, pairingTopic: d2, requiredNamespaces: {}, optionalNamespaces: {}, controller: o.publicKey, self: { publicKey: "", metadata: this.client.metadata }, peer: { publicKey: o.publicKey, metadata: o.metadata } }, p3 && { sessionProperties: p3 });
        await this.sendResult({ id: s.id, topic: e, result: true }), this.events.emit(yt$1("session_connect"), { session: h4 }), this.cleanupDuplicatePairings(h4);
      } catch (n2) {
        await this.sendError(t, e, n2), this.client.logger.error(n2);
      }
    }, this.onSessionSettleResponse = async (e, s) => {
      const { id: t } = s;
      isJsonRpcResult(s) ? (await this.client.session.update(e, { acknowledged: true }), this.events.emit(yt$1("session_approve", t), {})) : isJsonRpcError(s) && (await this.client.session.delete(e, U$2("USER_DISCONNECTED")), this.events.emit(yt$1("session_approve", t), { error: s.error }));
    }, this.onSessionUpdateRequest = async (e, s) => {
      const { params: t, id: i2 } = s;
      try {
        const n2 = `${e}_session_update`, o = sr$1.get(n2);
        if (o && this.isRequestOutOfSync(o, i2)) {
          this.client.logger.info(`Discarding out of sync request - ${i2}`);
          return;
        }
        this.isValidUpdate(g$1({ topic: e }, t)), await this.client.session.update(e, { namespaces: t.namespaces }), await this.sendResult({ id: i2, topic: e, result: true }), this.client.events.emit("session_update", { id: i2, topic: e, params: t }), sr$1.set(n2, i2);
      } catch (n2) {
        await this.sendError(i2, e, n2), this.client.logger.error(n2);
      }
    }, this.isRequestOutOfSync = (e, s) => parseInt(s.toString().slice(0, -3)) <= parseInt(e.toString().slice(0, -3)), this.onSessionUpdateResponse = (e, s) => {
      const { id: t } = s;
      isJsonRpcResult(s) ? this.events.emit(yt$1("session_update", t), {}) : isJsonRpcError(s) && this.events.emit(yt$1("session_update", t), { error: s.error });
    }, this.onSessionExtendRequest = async (e, s) => {
      const { id: t } = s;
      try {
        this.isValidExtend({ topic: e }), await this.setExpiry(e, pt$1(L$1)), await this.sendResult({ id: t, topic: e, result: true }), this.client.events.emit("session_extend", { id: t, topic: e });
      } catch (i2) {
        await this.sendError(t, e, i2), this.client.logger.error(i2);
      }
    }, this.onSessionExtendResponse = (e, s) => {
      const { id: t } = s;
      isJsonRpcResult(s) ? this.events.emit(yt$1("session_extend", t), {}) : isJsonRpcError(s) && this.events.emit(yt$1("session_extend", t), { error: s.error });
    }, this.onSessionPingRequest = async (e, s) => {
      const { id: t } = s;
      try {
        this.isValidPing({ topic: e }), await this.sendResult({ id: t, topic: e, result: true }), this.client.events.emit("session_ping", { id: t, topic: e });
      } catch (i2) {
        await this.sendError(t, e, i2), this.client.logger.error(i2);
      }
    }, this.onSessionPingResponse = (e, s) => {
      const { id: t } = s;
      setTimeout(() => {
        isJsonRpcResult(s) ? this.events.emit(yt$1("session_ping", t), {}) : isJsonRpcError(s) && this.events.emit(yt$1("session_ping", t), { error: s.error });
      }, 500);
    }, this.onSessionDeleteRequest = async (e, s) => {
      const { id: t } = s;
      try {
        this.isValidDisconnect({ topic: e, reason: s.params }), await Promise.all([new Promise((i2) => {
          this.client.core.relayer.once(D$2.publish, async () => {
            i2(await this.deleteSession({ topic: e, id: t }));
          });
        }), this.sendResult({ id: t, topic: e, result: true }), this.cleanupPendingSentRequestsForTopic({ topic: e, error: U$2("USER_DISCONNECTED") })]);
      } catch (i2) {
        this.client.logger.error(i2);
      }
    }, this.onSessionRequest = async (e, s) => {
      const { id: t, params: i2 } = s;
      try {
        this.isValidRequest(g$1({ topic: e }, i2));
        const n2 = Ln(JSON.stringify(formatJsonRpcRequest("wc_sessionRequest", i2, t))), o = this.client.session.get(e), a3 = await this.getVerifyContext(n2, o.peer.metadata), c2 = { id: t, topic: e, params: i2, verifyContext: a3 };
        await this.setPendingSessionRequest(c2), this.addSessionRequestToSessionRequestQueue(c2), this.processSessionRequestQueue();
      } catch (n2) {
        await this.sendError(t, e, n2), this.client.logger.error(n2);
      }
    }, this.onSessionRequestResponse = (e, s) => {
      const { id: t } = s;
      isJsonRpcResult(s) ? this.events.emit(yt$1("session_request", t), { result: s.result }) : isJsonRpcError(s) && this.events.emit(yt$1("session_request", t), { error: s.error });
    }, this.onSessionEventRequest = async (e, s) => {
      const { id: t, params: i2 } = s;
      try {
        const n2 = `${e}_session_event_${i2.event.name}`, o = sr$1.get(n2);
        if (o && this.isRequestOutOfSync(o, t)) {
          this.client.logger.info(`Discarding out of sync request - ${t}`);
          return;
        }
        this.isValidEmit(g$1({ topic: e }, i2)), this.client.events.emit("session_event", { id: t, topic: e, params: i2 }), sr$1.set(n2, t);
      } catch (n2) {
        await this.sendError(t, e, n2), this.client.logger.error(n2);
      }
    }, this.addSessionRequestToSessionRequestQueue = (e) => {
      this.sessionRequestQueue.queue.push(e);
    }, this.cleanupAfterResponse = (e) => {
      this.deletePendingSessionRequest(e.response.id, { message: "fulfilled", code: 0 }), setTimeout(() => {
        this.sessionRequestQueue.state = I.idle, this.processSessionRequestQueue();
      }, cjs$4.toMiliseconds(this.requestQueueDelay));
    }, this.cleanupPendingSentRequestsForTopic = ({ topic: e, error: s }) => {
      const t = this.client.core.history.pending;
      t.length > 0 && t.filter((i2) => i2.topic === e && i2.request.method === "wc_sessionRequest").forEach((i2) => {
        this.events.emit(yt$1("session_request", i2.request.id), { error: s });
      });
    }, this.processSessionRequestQueue = () => {
      if (this.sessionRequestQueue.state === I.active) {
        this.client.logger.info("session request queue is already active.");
        return;
      }
      const e = this.sessionRequestQueue.queue[0];
      if (!e) {
        this.client.logger.info("session request queue is empty.");
        return;
      }
      try {
        this.sessionRequestQueue.state = I.active, this.client.events.emit("session_request", e);
      } catch (s) {
        this.client.logger.error(s);
      }
    }, this.onPairingCreated = (e) => {
      if (e.active)
        return;
      const s = this.client.proposal.getAll().find((t) => t.pairingTopic === e.topic);
      s && this.onSessionProposeRequest(e.topic, formatJsonRpcRequest("wc_sessionPropose", { requiredNamespaces: s.requiredNamespaces, optionalNamespaces: s.optionalNamespaces, relays: s.relays, proposer: s.proposer, sessionProperties: s.sessionProperties }, s.id));
    }, this.isValidConnect = async (e) => {
      if (!Gt$1(e)) {
        const { message: a3 } = N$2("MISSING_OR_INVALID", `connect() params: ${JSON.stringify(e)}`);
        throw new Error(a3);
      }
      const { pairingTopic: s, requiredNamespaces: t, optionalNamespaces: i2, sessionProperties: n2, relays: o } = e;
      if (w$4(s) || await this.isValidPairingTopic(s), !qt$1(o)) {
        const { message: a3 } = N$2("MISSING_OR_INVALID", `connect() relays: ${o}`);
        throw new Error(a3);
      }
      !w$4(t) && B$1(t) !== 0 && this.validateNamespaces(t, "requiredNamespaces"), !w$4(i2) && B$1(i2) !== 0 && this.validateNamespaces(i2, "optionalNamespaces"), w$4(n2) || this.validateSessionProps(n2, "sessionProperties");
    }, this.validateNamespaces = (e, s) => {
      const t = Ht$1(e, "connect()", s);
      if (t)
        throw new Error(t.message);
    }, this.isValidApprove = async (e) => {
      if (!Gt$1(e))
        throw new Error(N$2("MISSING_OR_INVALID", `approve() params: ${e}`).message);
      const { id: s, namespaces: t, relayProtocol: i2, sessionProperties: n2 } = e;
      await this.isValidProposalId(s);
      const o = this.client.proposal.get(s), a3 = ln(t, "approve()");
      if (a3)
        throw new Error(a3.message);
      const c2 = fn(o.requiredNamespaces, t, "approve()");
      if (c2)
        throw new Error(c2.message);
      if (!g$5(i2, true)) {
        const { message: p3 } = N$2("MISSING_OR_INVALID", `approve() relayProtocol: ${i2}`);
        throw new Error(p3);
      }
      w$4(n2) || this.validateSessionProps(n2, "sessionProperties");
    }, this.isValidReject = async (e) => {
      if (!Gt$1(e)) {
        const { message: i2 } = N$2("MISSING_OR_INVALID", `reject() params: ${e}`);
        throw new Error(i2);
      }
      const { id: s, reason: t } = e;
      if (await this.isValidProposalId(s), !Wt(t)) {
        const { message: i2 } = N$2("MISSING_OR_INVALID", `reject() reason: ${JSON.stringify(t)}`);
        throw new Error(i2);
      }
    }, this.isValidSessionSettleRequest = (e) => {
      if (!Gt$1(e)) {
        const { message: c2 } = N$2("MISSING_OR_INVALID", `onSessionSettleRequest() params: ${e}`);
        throw new Error(c2);
      }
      const { relay: s, controller: t, namespaces: i2, expiry: n2 } = e;
      if (!dn(s)) {
        const { message: c2 } = N$2("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
        throw new Error(c2);
      }
      const o = Ft$1(t, "onSessionSettleRequest()");
      if (o)
        throw new Error(o.message);
      const a3 = ln(i2, "onSessionSettleRequest()");
      if (a3)
        throw new Error(a3.message);
      if (mt$1(n2)) {
        const { message: c2 } = N$2("EXPIRED", "onSessionSettleRequest()");
        throw new Error(c2);
      }
    }, this.isValidUpdate = async (e) => {
      if (!Gt$1(e)) {
        const { message: a3 } = N$2("MISSING_OR_INVALID", `update() params: ${e}`);
        throw new Error(a3);
      }
      const { topic: s, namespaces: t } = e;
      await this.isValidSessionTopic(s);
      const i2 = this.client.session.get(s), n2 = ln(t, "update()");
      if (n2)
        throw new Error(n2.message);
      const o = fn(i2.requiredNamespaces, t, "update()");
      if (o)
        throw new Error(o.message);
    }, this.isValidExtend = async (e) => {
      if (!Gt$1(e)) {
        const { message: t } = N$2("MISSING_OR_INVALID", `extend() params: ${e}`);
        throw new Error(t);
      }
      const { topic: s } = e;
      await this.isValidSessionTopic(s);
    }, this.isValidRequest = async (e) => {
      if (!Gt$1(e)) {
        const { message: a3 } = N$2("MISSING_OR_INVALID", `request() params: ${e}`);
        throw new Error(a3);
      }
      const { topic: s, request: t, chainId: i2, expiry: n2 } = e;
      await this.isValidSessionTopic(s);
      const { namespaces: o } = this.client.session.get(s);
      if (!Qt(o, i2)) {
        const { message: a3 } = N$2("MISSING_OR_INVALID", `request() chainId: ${i2}`);
        throw new Error(a3);
      }
      if (!zt$1(t)) {
        const { message: a3 } = N$2("MISSING_OR_INVALID", `request() ${JSON.stringify(t)}`);
        throw new Error(a3);
      }
      if (!Zt(o, i2, t.method)) {
        const { message: a3 } = N$2("MISSING_OR_INVALID", `request() method: ${t.method}`);
        throw new Error(a3);
      }
      if (n2 && !tr$1(n2, U$1)) {
        const { message: a3 } = N$2("MISSING_OR_INVALID", `request() expiry: ${n2}. Expiry must be a number (in seconds) between ${U$1.min} and ${U$1.max}`);
        throw new Error(a3);
      }
    }, this.isValidRespond = async (e) => {
      var s;
      if (!Gt$1(e)) {
        const { message: n2 } = N$2("MISSING_OR_INVALID", `respond() params: ${e}`);
        throw new Error(n2);
      }
      const { topic: t, response: i2 } = e;
      try {
        await this.isValidSessionTopic(t);
      } catch (n2) {
        throw (s = e == null ? void 0 : e.response) != null && s.id && this.cleanupAfterResponse(e), n2;
      }
      if (!Yt$1(i2)) {
        const { message: n2 } = N$2("MISSING_OR_INVALID", `respond() response: ${JSON.stringify(i2)}`);
        throw new Error(n2);
      }
    }, this.isValidPing = async (e) => {
      if (!Gt$1(e)) {
        const { message: t } = N$2("MISSING_OR_INVALID", `ping() params: ${e}`);
        throw new Error(t);
      }
      const { topic: s } = e;
      await this.isValidSessionOrPairingTopic(s);
    }, this.isValidEmit = async (e) => {
      if (!Gt$1(e)) {
        const { message: o } = N$2("MISSING_OR_INVALID", `emit() params: ${e}`);
        throw new Error(o);
      }
      const { topic: s, event: t, chainId: i2 } = e;
      await this.isValidSessionTopic(s);
      const { namespaces: n2 } = this.client.session.get(s);
      if (!Qt(n2, i2)) {
        const { message: o } = N$2("MISSING_OR_INVALID", `emit() chainId: ${i2}`);
        throw new Error(o);
      }
      if (!Jt$1(t)) {
        const { message: o } = N$2("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(t)}`);
        throw new Error(o);
      }
      if (!Xt(n2, i2, t.name)) {
        const { message: o } = N$2("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(t)}`);
        throw new Error(o);
      }
    }, this.isValidDisconnect = async (e) => {
      if (!Gt$1(e)) {
        const { message: t } = N$2("MISSING_OR_INVALID", `disconnect() params: ${e}`);
        throw new Error(t);
      }
      const { topic: s } = e;
      await this.isValidSessionOrPairingTopic(s);
    }, this.getVerifyContext = async (e, s) => {
      const t = { verified: { verifyUrl: s.verifyUrl || F$1, validation: "UNKNOWN", origin: s.url || "" } };
      try {
        const i2 = await this.client.core.verify.resolve({ attestationId: e, verifyUrl: s.verifyUrl });
        i2 && (t.verified.origin = i2.origin, t.verified.isScam = i2.isScam, t.verified.validation = i2.origin === new URL(s.url).origin ? "VALID" : "INVALID");
      } catch (i2) {
        this.client.logger.info(i2);
      }
      return this.client.logger.info(`Verify context: ${JSON.stringify(t)}`), t;
    }, this.validateSessionProps = (e, s) => {
      Object.values(e).forEach((t) => {
        if (!g$5(t, false)) {
          const { message: i2 } = N$2("MISSING_OR_INVALID", `${s} must be in Record<string, string> format. Received: ${JSON.stringify(t)}`);
          throw new Error(i2);
        }
      });
    };
  }
  async isInitialized() {
    if (!this.initialized) {
      const { message: r } = N$2("NOT_INITIALIZED", this.name);
      throw new Error(r);
    }
    await this.client.core.relayer.confirmOnlineStateOrThrow();
  }
  registerRelayerEvents() {
    this.client.core.relayer.on(D$2.message, async (r) => {
      const { topic: e, message: s } = r;
      if (this.ignoredPayloadTypes.includes(this.client.core.crypto.getPayloadType(s)))
        return;
      const t = await this.client.core.crypto.decode(e, s);
      try {
        isJsonRpcRequest(t) ? (this.client.core.history.set(e, t), this.onRelayEventRequest({ topic: e, payload: t })) : isJsonRpcResponse(t) ? (await this.client.core.history.resolve(t), await this.onRelayEventResponse({ topic: e, payload: t }), this.client.core.history.delete(e, t.id)) : this.onRelayEventUnknownPayload({ topic: e, payload: t });
      } catch (i2) {
        this.client.logger.error(i2);
      }
    });
  }
  registerExpirerEvents() {
    this.client.core.expirer.on(v$1.expired, async (r) => {
      const { topic: e, id: s } = ft$2(r.target);
      if (s && this.client.pendingRequest.keys.includes(s))
        return await this.deletePendingSessionRequest(s, N$2("EXPIRED"), true);
      e ? this.client.session.keys.includes(e) && (await this.deleteSession({ topic: e, expirerHasDeleted: true }), this.client.events.emit("session_expire", { topic: e })) : s && (await this.deleteProposal(s, true), this.client.events.emit("proposal_expire", { id: s }));
    });
  }
  registerPairingEvents() {
    this.client.core.pairing.events.on(V.create, (r) => this.onPairingCreated(r));
  }
  isValidPairingTopic(r) {
    if (!g$5(r, false)) {
      const { message: e } = N$2("MISSING_OR_INVALID", `pairing topic should be a string: ${r}`);
      throw new Error(e);
    }
    if (!this.client.core.pairing.pairings.keys.includes(r)) {
      const { message: e } = N$2("NO_MATCHING_KEY", `pairing topic doesn't exist: ${r}`);
      throw new Error(e);
    }
    if (mt$1(this.client.core.pairing.pairings.get(r).expiry)) {
      const { message: e } = N$2("EXPIRED", `pairing topic: ${r}`);
      throw new Error(e);
    }
  }
  async isValidSessionTopic(r) {
    if (!g$5(r, false)) {
      const { message: e } = N$2("MISSING_OR_INVALID", `session topic should be a string: ${r}`);
      throw new Error(e);
    }
    if (!this.client.session.keys.includes(r)) {
      const { message: e } = N$2("NO_MATCHING_KEY", `session topic doesn't exist: ${r}`);
      throw new Error(e);
    }
    if (mt$1(this.client.session.get(r).expiry)) {
      await this.deleteSession({ topic: r });
      const { message: e } = N$2("EXPIRED", `session topic: ${r}`);
      throw new Error(e);
    }
    if (!this.client.core.crypto.keychain.has(r)) {
      const { message: e } = N$2("MISSING_OR_INVALID", `session topic does not exist in keychain: ${r}`);
      throw await this.deleteSession({ topic: r }), new Error(e);
    }
  }
  async isValidSessionOrPairingTopic(r) {
    if (this.client.session.keys.includes(r))
      await this.isValidSessionTopic(r);
    else if (this.client.core.pairing.pairings.keys.includes(r))
      this.isValidPairingTopic(r);
    else if (g$5(r, false)) {
      const { message: e } = N$2("NO_MATCHING_KEY", `session or pairing topic doesn't exist: ${r}`);
      throw new Error(e);
    } else {
      const { message: e } = N$2("MISSING_OR_INVALID", `session or pairing topic should be a string: ${r}`);
      throw new Error(e);
    }
  }
  async isValidProposalId(r) {
    if (!Bt$1(r)) {
      const { message: e } = N$2("MISSING_OR_INVALID", `proposal id should be a number: ${r}`);
      throw new Error(e);
    }
    if (!this.client.proposal.keys.includes(r)) {
      const { message: e } = N$2("NO_MATCHING_KEY", `proposal id doesn't exist: ${r}`);
      throw new Error(e);
    }
    if (mt$1(this.client.proposal.get(r).expiryTimestamp)) {
      await this.deleteProposal(r);
      const { message: e } = N$2("EXPIRED", `proposal id: ${r}`);
      throw new Error(e);
    }
  }
}
class us extends Kt {
  constructor(r, e) {
    super(r, e, oe, G$1), this.core = r, this.logger = e;
  }
}
let ge$1 = class ge extends Kt {
  constructor(r, e) {
    super(r, e, ce, G$1), this.core = r, this.logger = e;
  }
};
class gs extends Kt {
  constructor(r, e) {
    super(r, e, pe, G$1, (s) => s.id), this.core = r, this.logger = e;
  }
}
let Q$1 = class Q extends b$1 {
  constructor(r) {
    super(r), this.protocol = J, this.version = F, this.name = M$1.name, this.events = new eventsExports.EventEmitter(), this.on = (s, t) => this.events.on(s, t), this.once = (s, t) => this.events.once(s, t), this.off = (s, t) => this.events.off(s, t), this.removeListener = (s, t) => this.events.removeListener(s, t), this.removeAllListeners = (s) => this.events.removeAllListeners(s), this.connect = async (s) => {
      try {
        return await this.engine.connect(s);
      } catch (t) {
        throw this.logger.error(t.message), t;
      }
    }, this.pair = async (s) => {
      try {
        return await this.engine.pair(s);
      } catch (t) {
        throw this.logger.error(t.message), t;
      }
    }, this.approve = async (s) => {
      try {
        return await this.engine.approve(s);
      } catch (t) {
        throw this.logger.error(t.message), t;
      }
    }, this.reject = async (s) => {
      try {
        return await this.engine.reject(s);
      } catch (t) {
        throw this.logger.error(t.message), t;
      }
    }, this.update = async (s) => {
      try {
        return await this.engine.update(s);
      } catch (t) {
        throw this.logger.error(t.message), t;
      }
    }, this.extend = async (s) => {
      try {
        return await this.engine.extend(s);
      } catch (t) {
        throw this.logger.error(t.message), t;
      }
    }, this.request = async (s) => {
      try {
        return await this.engine.request(s);
      } catch (t) {
        throw this.logger.error(t.message), t;
      }
    }, this.respond = async (s) => {
      try {
        return await this.engine.respond(s);
      } catch (t) {
        throw this.logger.error(t.message), t;
      }
    }, this.ping = async (s) => {
      try {
        return await this.engine.ping(s);
      } catch (t) {
        throw this.logger.error(t.message), t;
      }
    }, this.emit = async (s) => {
      try {
        return await this.engine.emit(s);
      } catch (t) {
        throw this.logger.error(t.message), t;
      }
    }, this.disconnect = async (s) => {
      try {
        return await this.engine.disconnect(s);
      } catch (t) {
        throw this.logger.error(t.message), t;
      }
    }, this.find = (s) => {
      try {
        return this.engine.find(s);
      } catch (t) {
        throw this.logger.error(t.message), t;
      }
    }, this.getPendingSessionRequests = () => {
      try {
        return this.engine.getPendingSessionRequests();
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }, this.name = (r == null ? void 0 : r.name) || M$1.name, this.metadata = (r == null ? void 0 : r.metadata) || Qn();
    const e = typeof (r == null ? void 0 : r.logger) < "u" && typeof (r == null ? void 0 : r.logger) != "string" ? r.logger : Hg(k({ level: (r == null ? void 0 : r.logger) || M$1.logger }));
    this.core = (r == null ? void 0 : r.core) || new Mr(r), this.logger = E$2(e, this.name), this.session = new ge$1(this.core, this.logger), this.proposal = new us(this.core, this.logger), this.pendingRequest = new gs(this.core, this.logger), this.engine = new ds(this);
  }
  static async init(r) {
    const e = new Q(r);
    return await e.initialize(), e;
  }
  get context() {
    return y$2(this.logger);
  }
  get pairing() {
    return this.core.pairing.pairings;
  }
  async initialize() {
    this.logger.trace("Initialized");
    try {
      await this.core.start(), await this.session.init(), await this.proposal.init(), await this.pendingRequest.init(), await this.engine.init(), this.core.verify.init({ verifyUrl: this.metadata.verifyUrl }), this.logger.info("SignClient Initialization Success");
    } catch (r) {
      throw this.logger.info("SignClient Initialization Failure"), this.logger.error(r.message), r;
    }
  }
};
var browserPonyfill = { exports: {} };
(function(module, exports) {
  var global2 = typeof self !== "undefined" ? self : commonjsGlobal;
  var __self__ = function() {
    function F2() {
      this.fetch = false;
      this.DOMException = global2.DOMException;
    }
    F2.prototype = global2;
    return new F2();
  }();
  (function(self2) {
    (function(exports2) {
      var support = {
        searchParams: "URLSearchParams" in self2,
        iterable: "Symbol" in self2 && "iterator" in Symbol,
        blob: "FileReader" in self2 && "Blob" in self2 && function() {
          try {
            new Blob();
            return true;
          } catch (e) {
            return false;
          }
        }(),
        formData: "FormData" in self2,
        arrayBuffer: "ArrayBuffer" in self2
      };
      function isDataView(obj) {
        return obj && DataView.prototype.isPrototypeOf(obj);
      }
      if (support.arrayBuffer) {
        var viewClasses = [
          "[object Int8Array]",
          "[object Uint8Array]",
          "[object Uint8ClampedArray]",
          "[object Int16Array]",
          "[object Uint16Array]",
          "[object Int32Array]",
          "[object Uint32Array]",
          "[object Float32Array]",
          "[object Float64Array]"
        ];
        var isArrayBufferView = ArrayBuffer.isView || function(obj) {
          return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1;
        };
      }
      function normalizeName(name) {
        if (typeof name !== "string") {
          name = String(name);
        }
        if (/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(name)) {
          throw new TypeError("Invalid character in header field name");
        }
        return name.toLowerCase();
      }
      function normalizeValue(value) {
        if (typeof value !== "string") {
          value = String(value);
        }
        return value;
      }
      function iteratorFor(items) {
        var iterator = {
          next: function() {
            var value = items.shift();
            return { done: value === void 0, value };
          }
        };
        if (support.iterable) {
          iterator[Symbol.iterator] = function() {
            return iterator;
          };
        }
        return iterator;
      }
      function Headers(headers) {
        this.map = {};
        if (headers instanceof Headers) {
          headers.forEach(function(value, name) {
            this.append(name, value);
          }, this);
        } else if (Array.isArray(headers)) {
          headers.forEach(function(header) {
            this.append(header[0], header[1]);
          }, this);
        } else if (headers) {
          Object.getOwnPropertyNames(headers).forEach(function(name) {
            this.append(name, headers[name]);
          }, this);
        }
      }
      Headers.prototype.append = function(name, value) {
        name = normalizeName(name);
        value = normalizeValue(value);
        var oldValue = this.map[name];
        this.map[name] = oldValue ? oldValue + ", " + value : value;
      };
      Headers.prototype["delete"] = function(name) {
        delete this.map[normalizeName(name)];
      };
      Headers.prototype.get = function(name) {
        name = normalizeName(name);
        return this.has(name) ? this.map[name] : null;
      };
      Headers.prototype.has = function(name) {
        return this.map.hasOwnProperty(normalizeName(name));
      };
      Headers.prototype.set = function(name, value) {
        this.map[normalizeName(name)] = normalizeValue(value);
      };
      Headers.prototype.forEach = function(callback, thisArg) {
        for (var name in this.map) {
          if (this.map.hasOwnProperty(name)) {
            callback.call(thisArg, this.map[name], name, this);
          }
        }
      };
      Headers.prototype.keys = function() {
        var items = [];
        this.forEach(function(value, name) {
          items.push(name);
        });
        return iteratorFor(items);
      };
      Headers.prototype.values = function() {
        var items = [];
        this.forEach(function(value) {
          items.push(value);
        });
        return iteratorFor(items);
      };
      Headers.prototype.entries = function() {
        var items = [];
        this.forEach(function(value, name) {
          items.push([name, value]);
        });
        return iteratorFor(items);
      };
      if (support.iterable) {
        Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
      }
      function consumed(body) {
        if (body.bodyUsed) {
          return Promise.reject(new TypeError("Already read"));
        }
        body.bodyUsed = true;
      }
      function fileReaderReady(reader) {
        return new Promise(function(resolve, reject) {
          reader.onload = function() {
            resolve(reader.result);
          };
          reader.onerror = function() {
            reject(reader.error);
          };
        });
      }
      function readBlobAsArrayBuffer(blob) {
        var reader = new FileReader();
        var promise = fileReaderReady(reader);
        reader.readAsArrayBuffer(blob);
        return promise;
      }
      function readBlobAsText(blob) {
        var reader = new FileReader();
        var promise = fileReaderReady(reader);
        reader.readAsText(blob);
        return promise;
      }
      function readArrayBufferAsText(buf) {
        var view = new Uint8Array(buf);
        var chars = new Array(view.length);
        for (var i2 = 0; i2 < view.length; i2++) {
          chars[i2] = String.fromCharCode(view[i2]);
        }
        return chars.join("");
      }
      function bufferClone(buf) {
        if (buf.slice) {
          return buf.slice(0);
        } else {
          var view = new Uint8Array(buf.byteLength);
          view.set(new Uint8Array(buf));
          return view.buffer;
        }
      }
      function Body() {
        this.bodyUsed = false;
        this._initBody = function(body) {
          this._bodyInit = body;
          if (!body) {
            this._bodyText = "";
          } else if (typeof body === "string") {
            this._bodyText = body;
          } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
            this._bodyBlob = body;
          } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
            this._bodyFormData = body;
          } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
            this._bodyText = body.toString();
          } else if (support.arrayBuffer && support.blob && isDataView(body)) {
            this._bodyArrayBuffer = bufferClone(body.buffer);
            this._bodyInit = new Blob([this._bodyArrayBuffer]);
          } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
            this._bodyArrayBuffer = bufferClone(body);
          } else {
            this._bodyText = body = Object.prototype.toString.call(body);
          }
          if (!this.headers.get("content-type")) {
            if (typeof body === "string") {
              this.headers.set("content-type", "text/plain;charset=UTF-8");
            } else if (this._bodyBlob && this._bodyBlob.type) {
              this.headers.set("content-type", this._bodyBlob.type);
            } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
              this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8");
            }
          }
        };
        if (support.blob) {
          this.blob = function() {
            var rejected = consumed(this);
            if (rejected) {
              return rejected;
            }
            if (this._bodyBlob) {
              return Promise.resolve(this._bodyBlob);
            } else if (this._bodyArrayBuffer) {
              return Promise.resolve(new Blob([this._bodyArrayBuffer]));
            } else if (this._bodyFormData) {
              throw new Error("could not read FormData body as blob");
            } else {
              return Promise.resolve(new Blob([this._bodyText]));
            }
          };
          this.arrayBuffer = function() {
            if (this._bodyArrayBuffer) {
              return consumed(this) || Promise.resolve(this._bodyArrayBuffer);
            } else {
              return this.blob().then(readBlobAsArrayBuffer);
            }
          };
        }
        this.text = function() {
          var rejected = consumed(this);
          if (rejected) {
            return rejected;
          }
          if (this._bodyBlob) {
            return readBlobAsText(this._bodyBlob);
          } else if (this._bodyArrayBuffer) {
            return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer));
          } else if (this._bodyFormData) {
            throw new Error("could not read FormData body as text");
          } else {
            return Promise.resolve(this._bodyText);
          }
        };
        if (support.formData) {
          this.formData = function() {
            return this.text().then(decode2);
          };
        }
        this.json = function() {
          return this.text().then(JSON.parse);
        };
        return this;
      }
      var methods = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
      function normalizeMethod(method) {
        var upcased = method.toUpperCase();
        return methods.indexOf(upcased) > -1 ? upcased : method;
      }
      function Request(input, options) {
        options = options || {};
        var body = options.body;
        if (input instanceof Request) {
          if (input.bodyUsed) {
            throw new TypeError("Already read");
          }
          this.url = input.url;
          this.credentials = input.credentials;
          if (!options.headers) {
            this.headers = new Headers(input.headers);
          }
          this.method = input.method;
          this.mode = input.mode;
          this.signal = input.signal;
          if (!body && input._bodyInit != null) {
            body = input._bodyInit;
            input.bodyUsed = true;
          }
        } else {
          this.url = String(input);
        }
        this.credentials = options.credentials || this.credentials || "same-origin";
        if (options.headers || !this.headers) {
          this.headers = new Headers(options.headers);
        }
        this.method = normalizeMethod(options.method || this.method || "GET");
        this.mode = options.mode || this.mode || null;
        this.signal = options.signal || this.signal;
        this.referrer = null;
        if ((this.method === "GET" || this.method === "HEAD") && body) {
          throw new TypeError("Body not allowed for GET or HEAD requests");
        }
        this._initBody(body);
      }
      Request.prototype.clone = function() {
        return new Request(this, { body: this._bodyInit });
      };
      function decode2(body) {
        var form = new FormData();
        body.trim().split("&").forEach(function(bytes) {
          if (bytes) {
            var split = bytes.split("=");
            var name = split.shift().replace(/\+/g, " ");
            var value = split.join("=").replace(/\+/g, " ");
            form.append(decodeURIComponent(name), decodeURIComponent(value));
          }
        });
        return form;
      }
      function parseHeaders(rawHeaders) {
        var headers = new Headers();
        var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, " ");
        preProcessedHeaders.split(/\r?\n/).forEach(function(line) {
          var parts = line.split(":");
          var key = parts.shift().trim();
          if (key) {
            var value = parts.join(":").trim();
            headers.append(key, value);
          }
        });
        return headers;
      }
      Body.call(Request.prototype);
      function Response(bodyInit, options) {
        if (!options) {
          options = {};
        }
        this.type = "default";
        this.status = options.status === void 0 ? 200 : options.status;
        this.ok = this.status >= 200 && this.status < 300;
        this.statusText = "statusText" in options ? options.statusText : "OK";
        this.headers = new Headers(options.headers);
        this.url = options.url || "";
        this._initBody(bodyInit);
      }
      Body.call(Response.prototype);
      Response.prototype.clone = function() {
        return new Response(this._bodyInit, {
          status: this.status,
          statusText: this.statusText,
          headers: new Headers(this.headers),
          url: this.url
        });
      };
      Response.error = function() {
        var response = new Response(null, { status: 0, statusText: "" });
        response.type = "error";
        return response;
      };
      var redirectStatuses = [301, 302, 303, 307, 308];
      Response.redirect = function(url, status) {
        if (redirectStatuses.indexOf(status) === -1) {
          throw new RangeError("Invalid status code");
        }
        return new Response(null, { status, headers: { location: url } });
      };
      exports2.DOMException = self2.DOMException;
      try {
        new exports2.DOMException();
      } catch (err) {
        exports2.DOMException = function(message, name) {
          this.message = message;
          this.name = name;
          var error = Error(message);
          this.stack = error.stack;
        };
        exports2.DOMException.prototype = Object.create(Error.prototype);
        exports2.DOMException.prototype.constructor = exports2.DOMException;
      }
      function fetch2(input, init) {
        return new Promise(function(resolve, reject) {
          var request = new Request(input, init);
          if (request.signal && request.signal.aborted) {
            return reject(new exports2.DOMException("Aborted", "AbortError"));
          }
          var xhr = new XMLHttpRequest();
          function abortXhr() {
            xhr.abort();
          }
          xhr.onload = function() {
            var options = {
              status: xhr.status,
              statusText: xhr.statusText,
              headers: parseHeaders(xhr.getAllResponseHeaders() || "")
            };
            options.url = "responseURL" in xhr ? xhr.responseURL : options.headers.get("X-Request-URL");
            var body = "response" in xhr ? xhr.response : xhr.responseText;
            resolve(new Response(body, options));
          };
          xhr.onerror = function() {
            reject(new TypeError("Network request failed"));
          };
          xhr.ontimeout = function() {
            reject(new TypeError("Network request failed"));
          };
          xhr.onabort = function() {
            reject(new exports2.DOMException("Aborted", "AbortError"));
          };
          xhr.open(request.method, request.url, true);
          if (request.credentials === "include") {
            xhr.withCredentials = true;
          } else if (request.credentials === "omit") {
            xhr.withCredentials = false;
          }
          if ("responseType" in xhr && support.blob) {
            xhr.responseType = "blob";
          }
          request.headers.forEach(function(value, name) {
            xhr.setRequestHeader(name, value);
          });
          if (request.signal) {
            request.signal.addEventListener("abort", abortXhr);
            xhr.onreadystatechange = function() {
              if (xhr.readyState === 4) {
                request.signal.removeEventListener("abort", abortXhr);
              }
            };
          }
          xhr.send(typeof request._bodyInit === "undefined" ? null : request._bodyInit);
        });
      }
      fetch2.polyfill = true;
      if (!self2.fetch) {
        self2.fetch = fetch2;
        self2.Headers = Headers;
        self2.Request = Request;
        self2.Response = Response;
      }
      exports2.Headers = Headers;
      exports2.Request = Request;
      exports2.Response = Response;
      exports2.fetch = fetch2;
      Object.defineProperty(exports2, "__esModule", { value: true });
      return exports2;
    })({});
  })(__self__);
  __self__.fetch.ponyfill = true;
  delete __self__.fetch.polyfill;
  var ctx = __self__;
  exports = ctx.fetch;
  exports.default = ctx.fetch;
  exports.fetch = ctx.fetch;
  exports.Headers = ctx.Headers;
  exports.Request = ctx.Request;
  exports.Response = ctx.Response;
  module.exports = exports;
})(browserPonyfill, browserPonyfill.exports);
var browserPonyfillExports = browserPonyfill.exports;
const fetch$1 = /* @__PURE__ */ getDefaultExportFromCjs(browserPonyfillExports);
const DEFAULT_HTTP_HEADERS = {
  Accept: "application/json",
  "Content-Type": "application/json"
};
const DEFAULT_HTTP_METHOD = "POST";
const DEFAULT_FETCH_OPTS = {
  headers: DEFAULT_HTTP_HEADERS,
  method: DEFAULT_HTTP_METHOD
};
const EVENT_EMITTER_MAX_LISTENERS_DEFAULT = 10;
class HttpConnection {
  constructor(url, disableProviderPing = false) {
    this.url = url;
    this.disableProviderPing = disableProviderPing;
    this.events = new eventsExports.EventEmitter();
    this.isAvailable = false;
    this.registering = false;
    if (!isHttpUrl(url)) {
      throw new Error(`Provided URL is not compatible with HTTP connection: ${url}`);
    }
    this.url = url;
    this.disableProviderPing = disableProviderPing;
  }
  get connected() {
    return this.isAvailable;
  }
  get connecting() {
    return this.registering;
  }
  on(event, listener) {
    this.events.on(event, listener);
  }
  once(event, listener) {
    this.events.once(event, listener);
  }
  off(event, listener) {
    this.events.off(event, listener);
  }
  removeListener(event, listener) {
    this.events.removeListener(event, listener);
  }
  async open(url = this.url) {
    await this.register(url);
  }
  async close() {
    if (!this.isAvailable) {
      throw new Error("Connection already closed");
    }
    this.onClose();
  }
  async send(payload, context) {
    if (!this.isAvailable) {
      await this.register();
    }
    try {
      const body = safeJsonStringify(payload);
      const res = await fetch$1(this.url, Object.assign(Object.assign({}, DEFAULT_FETCH_OPTS), { body }));
      const data = await res.json();
      this.onPayload({ data });
    } catch (e) {
      this.onError(payload.id, e);
    }
  }
  async register(url = this.url) {
    if (!isHttpUrl(url)) {
      throw new Error(`Provided URL is not compatible with HTTP connection: ${url}`);
    }
    if (this.registering) {
      const currentMaxListeners = this.events.getMaxListeners();
      if (this.events.listenerCount("register_error") >= currentMaxListeners || this.events.listenerCount("open") >= currentMaxListeners) {
        this.events.setMaxListeners(currentMaxListeners + 1);
      }
      return new Promise((resolve, reject) => {
        this.events.once("register_error", (error) => {
          this.resetMaxListeners();
          reject(error);
        });
        this.events.once("open", () => {
          this.resetMaxListeners();
          if (typeof this.isAvailable === "undefined") {
            return reject(new Error("HTTP connection is missing or invalid"));
          }
          resolve();
        });
      });
    }
    this.url = url;
    this.registering = true;
    try {
      if (!this.disableProviderPing) {
        const body = safeJsonStringify({ id: 1, jsonrpc: "2.0", method: "test", params: [] });
        await fetch$1(url, Object.assign(Object.assign({}, DEFAULT_FETCH_OPTS), { body }));
      }
      this.onOpen();
    } catch (e) {
      const error = this.parseError(e);
      this.events.emit("register_error", error);
      this.onClose();
      throw error;
    }
  }
  onOpen() {
    this.isAvailable = true;
    this.registering = false;
    this.events.emit("open");
  }
  onClose() {
    this.isAvailable = false;
    this.registering = false;
    this.events.emit("close");
  }
  onPayload(e) {
    if (typeof e.data === "undefined")
      return;
    const payload = typeof e.data === "string" ? safeJsonParse(e.data) : e.data;
    this.events.emit("payload", payload);
  }
  onError(id, e) {
    const error = this.parseError(e);
    const message = error.message || error.toString();
    const payload = formatJsonRpcError(id, message);
    this.events.emit("payload", payload);
  }
  parseError(e, url = this.url) {
    return parseConnectionError(e, url, "HTTP");
  }
  resetMaxListeners() {
    if (this.events.getMaxListeners() > EVENT_EMITTER_MAX_LISTENERS_DEFAULT) {
      this.events.setMaxListeners(EVENT_EMITTER_MAX_LISTENERS_DEFAULT);
    }
  }
}
const Ia = "error", Fg = "wss://relay.walletconnect.com", Mg = "wc", qg = "universal_provider", xa = `${Mg}@2:${qg}:`, Bg = "https://rpc.walletconnect.com/v1/", Vn = { DEFAULT_CHAIN_CHANGED: "default_chain_changed" };
var ge2 = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Ui = { exports: {} };
/**
* @license
* Lodash <https://lodash.com/>
* Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
* Released under MIT license <https://lodash.com/license>
* Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
* Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
*/
(function(A2, u3) {
  (function() {
    var i2, d2 = "4.17.21", w3 = 200, L2 = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", D2 = "Expected a function", En = "Invalid `variable` option passed into `_.template`", zt2 = "__lodash_hash_undefined__", pr2 = 500, It2 = "__lodash_placeholder__", Ln2 = 1, Fn2 = 2, xt2 = 4, Et2 = 1, ve2 = 2, vn2 = 1, ct2 = 2, qi = 4, Dn2 = 8, yt2 = 16, Hn2 = 32, St2 = 64, Mn2 = 128, Kt2 = 256, dr2 = 512, Da = 30, Ha = "...", Na = 800, $a = 16, Bi = 1, Ua = 2, Wa = 3, ht2 = 1 / 0, kn2 = 9007199254740991, Fa = 17976931348623157e292, _e2 = 0 / 0, Nn = 4294967295, Ma = Nn - 1, qa = Nn >>> 1, Ba = [["ary", Mn2], ["bind", vn2], ["bindKey", ct2], ["curry", Dn2], ["curryRight", yt2], ["flip", dr2], ["partial", Hn2], ["partialRight", St2], ["rearg", Kt2]], Ot2 = "[object Arguments]", me = "[object Array]", Ga = "[object AsyncFunction]", Yt2 = "[object Boolean]", Zt2 = "[object Date]", za = "[object DOMException]", we = "[object Error]", Pe2 = "[object Function]", Gi2 = "[object GeneratorFunction]", yn2 = "[object Map]", Jt2 = "[object Number]", Ka = "[object Null]", qn2 = "[object Object]", zi = "[object Promise]", Ya = "[object Proxy]", Xt2 = "[object RegExp]", Sn = "[object Set]", Qt2 = "[object String]", Ae2 = "[object Symbol]", Za = "[object Undefined]", Vt2 = "[object WeakMap]", Ja = "[object WeakSet]", kt2 = "[object ArrayBuffer]", Rt2 = "[object DataView]", gr2 = "[object Float32Array]", vr2 = "[object Float64Array]", _r2 = "[object Int8Array]", mr2 = "[object Int16Array]", wr = "[object Int32Array]", Pr2 = "[object Uint8Array]", Ar2 = "[object Uint8ClampedArray]", Cr2 = "[object Uint16Array]", Ir2 = "[object Uint32Array]", Xa = /\b__p \+= '';/g, Qa = /\b(__p \+=) '' \+/g, Va = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Ki = /&(?:amp|lt|gt|quot|#39);/g, Yi2 = /[&<>"']/g, ka = RegExp(Ki.source), ja = RegExp(Yi2.source), no = /<%-([\s\S]+?)%>/g, to = /<%([\s\S]+?)%>/g, Zi2 = /<%=([\s\S]+?)%>/g, eo = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, ro = /^\w*$/, io = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, xr2 = /[\\^$.*+?()[\]{}|]/g, so = RegExp(xr2.source), Er = /^\s+/, uo = /\s/, ao = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, oo = /\{\n\/\* \[wrapped with (.+)\] \*/, fo = /,? & /, co = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, ho = /[()=,{}\[\]\/\s]/, lo = /\\(\\)?/g, po = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Ji2 = /\w*$/, go = /^[-+]0x[0-9a-f]+$/i, vo = /^0b[01]+$/i, _o = /^\[object .+?Constructor\]$/, mo = /^0o[0-7]+$/i, wo = /^(?:0|[1-9]\d*)$/, Po = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Ce2 = /($^)/, Ao = /['\n\r\u2028\u2029\\]/g, Ie = "\\ud800-\\udfff", Co = "\\u0300-\\u036f", Io = "\\ufe20-\\ufe2f", xo = "\\u20d0-\\u20ff", Xi2 = Co + Io + xo, Qi2 = "\\u2700-\\u27bf", Vi = "a-z\\xdf-\\xf6\\xf8-\\xff", Eo = "\\xac\\xb1\\xd7\\xf7", yo = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", So = "\\u2000-\\u206f", Oo = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", ki = "A-Z\\xc0-\\xd6\\xd8-\\xde", ji = "\\ufe0e\\ufe0f", ns2 = Eo + yo + So + Oo, yr2 = "['’]", Ro = "[" + Ie + "]", ts2 = "[" + ns2 + "]", xe = "[" + Xi2 + "]", es2 = "\\d+", bo = "[" + Qi2 + "]", rs2 = "[" + Vi + "]", is2 = "[^" + Ie + ns2 + es2 + Qi2 + Vi + ki + "]", Sr2 = "\\ud83c[\\udffb-\\udfff]", To = "(?:" + xe + "|" + Sr2 + ")", ss2 = "[^" + Ie + "]", Or2 = "(?:\\ud83c[\\udde6-\\uddff]){2}", Rr2 = "[\\ud800-\\udbff][\\udc00-\\udfff]", bt2 = "[" + ki + "]", us2 = "\\u200d", as2 = "(?:" + rs2 + "|" + is2 + ")", Lo = "(?:" + bt2 + "|" + is2 + ")", os2 = "(?:" + yr2 + "(?:d|ll|m|re|s|t|ve))?", fs2 = "(?:" + yr2 + "(?:D|LL|M|RE|S|T|VE))?", cs2 = To + "?", hs2 = "[" + ji + "]?", Do = "(?:" + us2 + "(?:" + [ss2, Or2, Rr2].join("|") + ")" + hs2 + cs2 + ")*", Ho = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", No = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", ls2 = hs2 + cs2 + Do, $o = "(?:" + [bo, Or2, Rr2].join("|") + ")" + ls2, Uo = "(?:" + [ss2 + xe + "?", xe, Or2, Rr2, Ro].join("|") + ")", Wo = RegExp(yr2, "g"), Fo = RegExp(xe, "g"), br = RegExp(Sr2 + "(?=" + Sr2 + ")|" + Uo + ls2, "g"), Mo = RegExp([bt2 + "?" + rs2 + "+" + os2 + "(?=" + [ts2, bt2, "$"].join("|") + ")", Lo + "+" + fs2 + "(?=" + [ts2, bt2 + as2, "$"].join("|") + ")", bt2 + "?" + as2 + "+" + os2, bt2 + "+" + fs2, No, Ho, es2, $o].join("|"), "g"), qo = RegExp("[" + us2 + Ie + Xi2 + ji + "]"), Bo = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, Go = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"], zo = -1, B2 = {};
    B2[gr2] = B2[vr2] = B2[_r2] = B2[mr2] = B2[wr] = B2[Pr2] = B2[Ar2] = B2[Cr2] = B2[Ir2] = true, B2[Ot2] = B2[me] = B2[kt2] = B2[Yt2] = B2[Rt2] = B2[Zt2] = B2[we] = B2[Pe2] = B2[yn2] = B2[Jt2] = B2[qn2] = B2[Xt2] = B2[Sn] = B2[Qt2] = B2[Vt2] = false;
    var q2 = {};
    q2[Ot2] = q2[me] = q2[kt2] = q2[Rt2] = q2[Yt2] = q2[Zt2] = q2[gr2] = q2[vr2] = q2[_r2] = q2[mr2] = q2[wr] = q2[yn2] = q2[Jt2] = q2[qn2] = q2[Xt2] = q2[Sn] = q2[Qt2] = q2[Ae2] = q2[Pr2] = q2[Ar2] = q2[Cr2] = q2[Ir2] = true, q2[we] = q2[Pe2] = q2[Vt2] = false;
    var Ko = { À: "A", Á: "A", Â: "A", Ã: "A", Ä: "A", Å: "A", à: "a", á: "a", â: "a", ã: "a", ä: "a", å: "a", Ç: "C", ç: "c", Ð: "D", ð: "d", È: "E", É: "E", Ê: "E", Ë: "E", è: "e", é: "e", ê: "e", ë: "e", Ì: "I", Í: "I", Î: "I", Ï: "I", ì: "i", í: "i", î: "i", ï: "i", Ñ: "N", ñ: "n", Ò: "O", Ó: "O", Ô: "O", Õ: "O", Ö: "O", Ø: "O", ò: "o", ó: "o", ô: "o", õ: "o", ö: "o", ø: "o", Ù: "U", Ú: "U", Û: "U", Ü: "U", ù: "u", ú: "u", û: "u", ü: "u", Ý: "Y", ý: "y", ÿ: "y", Æ: "Ae", æ: "ae", Þ: "Th", þ: "th", ß: "ss", Ā: "A", Ă: "A", Ą: "A", ā: "a", ă: "a", ą: "a", Ć: "C", Ĉ: "C", Ċ: "C", Č: "C", ć: "c", ĉ: "c", ċ: "c", č: "c", Ď: "D", Đ: "D", ď: "d", đ: "d", Ē: "E", Ĕ: "E", Ė: "E", Ę: "E", Ě: "E", ē: "e", ĕ: "e", ė: "e", ę: "e", ě: "e", Ĝ: "G", Ğ: "G", Ġ: "G", Ģ: "G", ĝ: "g", ğ: "g", ġ: "g", ģ: "g", Ĥ: "H", Ħ: "H", ĥ: "h", ħ: "h", Ĩ: "I", Ī: "I", Ĭ: "I", Į: "I", İ: "I", ĩ: "i", ī: "i", ĭ: "i", į: "i", ı: "i", Ĵ: "J", ĵ: "j", Ķ: "K", ķ: "k", ĸ: "k", Ĺ: "L", Ļ: "L", Ľ: "L", Ŀ: "L", Ł: "L", ĺ: "l", ļ: "l", ľ: "l", ŀ: "l", ł: "l", Ń: "N", Ņ: "N", Ň: "N", Ŋ: "N", ń: "n", ņ: "n", ň: "n", ŋ: "n", Ō: "O", Ŏ: "O", Ő: "O", ō: "o", ŏ: "o", ő: "o", Ŕ: "R", Ŗ: "R", Ř: "R", ŕ: "r", ŗ: "r", ř: "r", Ś: "S", Ŝ: "S", Ş: "S", Š: "S", ś: "s", ŝ: "s", ş: "s", š: "s", Ţ: "T", Ť: "T", Ŧ: "T", ţ: "t", ť: "t", ŧ: "t", Ũ: "U", Ū: "U", Ŭ: "U", Ů: "U", Ű: "U", Ų: "U", ũ: "u", ū: "u", ŭ: "u", ů: "u", ű: "u", ų: "u", Ŵ: "W", ŵ: "w", Ŷ: "Y", ŷ: "y", Ÿ: "Y", Ź: "Z", Ż: "Z", Ž: "Z", ź: "z", ż: "z", ž: "z", Ĳ: "IJ", ĳ: "ij", Œ: "Oe", œ: "oe", ŉ: "'n", ſ: "s" }, Yo = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }, Zo = { "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#39;": "'" }, Jo = { "\\": "\\", "'": "'", "\n": "n", "\r": "r", "\u2028": "u2028", "\u2029": "u2029" }, Xo = parseFloat, Qo = parseInt, ps2 = typeof ge2 == "object" && ge2 && ge2.Object === Object && ge2, Vo = typeof self == "object" && self && self.Object === Object && self, k2 = ps2 || Vo || Function("return this")(), Tr2 = u3 && !u3.nodeType && u3, lt2 = Tr2 && true && A2 && !A2.nodeType && A2, ds2 = lt2 && lt2.exports === Tr2, Lr2 = ds2 && ps2.process, _n = function() {
      try {
        var h4 = lt2 && lt2.require && lt2.require("util").types;
        return h4 || Lr2 && Lr2.binding && Lr2.binding("util");
      } catch {
      }
    }(), gs2 = _n && _n.isArrayBuffer, vs2 = _n && _n.isDate, _s2 = _n && _n.isMap, ms2 = _n && _n.isRegExp, ws2 = _n && _n.isSet, Ps2 = _n && _n.isTypedArray;
    function cn2(h4, g3, p3) {
      switch (p3.length) {
        case 0:
          return h4.call(g3);
        case 1:
          return h4.call(g3, p3[0]);
        case 2:
          return h4.call(g3, p3[0], p3[1]);
        case 3:
          return h4.call(g3, p3[0], p3[1], p3[2]);
      }
      return h4.apply(g3, p3);
    }
    function ko(h4, g3, p3, C2) {
      for (var S2 = -1, U2 = h4 == null ? 0 : h4.length; ++S2 < U2; ) {
        var X2 = h4[S2];
        g3(C2, X2, p3(X2), h4);
      }
      return C2;
    }
    function mn2(h4, g3) {
      for (var p3 = -1, C2 = h4 == null ? 0 : h4.length; ++p3 < C2 && g3(h4[p3], p3, h4) !== false; )
        ;
      return h4;
    }
    function jo(h4, g3) {
      for (var p3 = h4 == null ? 0 : h4.length; p3-- && g3(h4[p3], p3, h4) !== false; )
        ;
      return h4;
    }
    function As2(h4, g3) {
      for (var p3 = -1, C2 = h4 == null ? 0 : h4.length; ++p3 < C2; )
        if (!g3(h4[p3], p3, h4))
          return false;
      return true;
    }
    function jn(h4, g3) {
      for (var p3 = -1, C2 = h4 == null ? 0 : h4.length, S2 = 0, U2 = []; ++p3 < C2; ) {
        var X2 = h4[p3];
        g3(X2, p3, h4) && (U2[S2++] = X2);
      }
      return U2;
    }
    function Ee(h4, g3) {
      var p3 = h4 == null ? 0 : h4.length;
      return !!p3 && Tt2(h4, g3, 0) > -1;
    }
    function Dr2(h4, g3, p3) {
      for (var C2 = -1, S2 = h4 == null ? 0 : h4.length; ++C2 < S2; )
        if (p3(g3, h4[C2]))
          return true;
      return false;
    }
    function G2(h4, g3) {
      for (var p3 = -1, C2 = h4 == null ? 0 : h4.length, S2 = Array(C2); ++p3 < C2; )
        S2[p3] = g3(h4[p3], p3, h4);
      return S2;
    }
    function nt2(h4, g3) {
      for (var p3 = -1, C2 = g3.length, S2 = h4.length; ++p3 < C2; )
        h4[S2 + p3] = g3[p3];
      return h4;
    }
    function Hr(h4, g3, p3, C2) {
      var S2 = -1, U2 = h4 == null ? 0 : h4.length;
      for (C2 && U2 && (p3 = h4[++S2]); ++S2 < U2; )
        p3 = g3(p3, h4[S2], S2, h4);
      return p3;
    }
    function nf(h4, g3, p3, C2) {
      var S2 = h4 == null ? 0 : h4.length;
      for (C2 && S2 && (p3 = h4[--S2]); S2--; )
        p3 = g3(p3, h4[S2], S2, h4);
      return p3;
    }
    function Nr2(h4, g3) {
      for (var p3 = -1, C2 = h4 == null ? 0 : h4.length; ++p3 < C2; )
        if (g3(h4[p3], p3, h4))
          return true;
      return false;
    }
    var tf = $r2("length");
    function ef(h4) {
      return h4.split("");
    }
    function rf(h4) {
      return h4.match(co) || [];
    }
    function Cs2(h4, g3, p3) {
      var C2;
      return p3(h4, function(S2, U2, X2) {
        if (g3(S2, U2, X2))
          return C2 = U2, false;
      }), C2;
    }
    function ye(h4, g3, p3, C2) {
      for (var S2 = h4.length, U2 = p3 + (C2 ? 1 : -1); C2 ? U2-- : ++U2 < S2; )
        if (g3(h4[U2], U2, h4))
          return U2;
      return -1;
    }
    function Tt2(h4, g3, p3) {
      return g3 === g3 ? vf(h4, g3, p3) : ye(h4, Is2, p3);
    }
    function sf(h4, g3, p3, C2) {
      for (var S2 = p3 - 1, U2 = h4.length; ++S2 < U2; )
        if (C2(h4[S2], g3))
          return S2;
      return -1;
    }
    function Is2(h4) {
      return h4 !== h4;
    }
    function xs2(h4, g3) {
      var p3 = h4 == null ? 0 : h4.length;
      return p3 ? Wr(h4, g3) / p3 : _e2;
    }
    function $r2(h4) {
      return function(g3) {
        return g3 == null ? i2 : g3[h4];
      };
    }
    function Ur2(h4) {
      return function(g3) {
        return h4 == null ? i2 : h4[g3];
      };
    }
    function Es2(h4, g3, p3, C2, S2) {
      return S2(h4, function(U2, X2, M2) {
        p3 = C2 ? (C2 = false, U2) : g3(p3, U2, X2, M2);
      }), p3;
    }
    function uf(h4, g3) {
      var p3 = h4.length;
      for (h4.sort(g3); p3--; )
        h4[p3] = h4[p3].value;
      return h4;
    }
    function Wr(h4, g3) {
      for (var p3, C2 = -1, S2 = h4.length; ++C2 < S2; ) {
        var U2 = g3(h4[C2]);
        U2 !== i2 && (p3 = p3 === i2 ? U2 : p3 + U2);
      }
      return p3;
    }
    function Fr2(h4, g3) {
      for (var p3 = -1, C2 = Array(h4); ++p3 < h4; )
        C2[p3] = g3(p3);
      return C2;
    }
    function af(h4, g3) {
      return G2(g3, function(p3) {
        return [p3, h4[p3]];
      });
    }
    function ys2(h4) {
      return h4 && h4.slice(0, bs2(h4) + 1).replace(Er, "");
    }
    function hn2(h4) {
      return function(g3) {
        return h4(g3);
      };
    }
    function Mr2(h4, g3) {
      return G2(g3, function(p3) {
        return h4[p3];
      });
    }
    function jt2(h4, g3) {
      return h4.has(g3);
    }
    function Ss2(h4, g3) {
      for (var p3 = -1, C2 = h4.length; ++p3 < C2 && Tt2(g3, h4[p3], 0) > -1; )
        ;
      return p3;
    }
    function Os2(h4, g3) {
      for (var p3 = h4.length; p3-- && Tt2(g3, h4[p3], 0) > -1; )
        ;
      return p3;
    }
    function of(h4, g3) {
      for (var p3 = h4.length, C2 = 0; p3--; )
        h4[p3] === g3 && ++C2;
      return C2;
    }
    var ff = Ur2(Ko), cf = Ur2(Yo);
    function hf(h4) {
      return "\\" + Jo[h4];
    }
    function lf(h4, g3) {
      return h4 == null ? i2 : h4[g3];
    }
    function Lt2(h4) {
      return qo.test(h4);
    }
    function pf(h4) {
      return Bo.test(h4);
    }
    function df(h4) {
      for (var g3, p3 = []; !(g3 = h4.next()).done; )
        p3.push(g3.value);
      return p3;
    }
    function qr(h4) {
      var g3 = -1, p3 = Array(h4.size);
      return h4.forEach(function(C2, S2) {
        p3[++g3] = [S2, C2];
      }), p3;
    }
    function Rs2(h4, g3) {
      return function(p3) {
        return h4(g3(p3));
      };
    }
    function tt2(h4, g3) {
      for (var p3 = -1, C2 = h4.length, S2 = 0, U2 = []; ++p3 < C2; ) {
        var X2 = h4[p3];
        (X2 === g3 || X2 === It2) && (h4[p3] = It2, U2[S2++] = p3);
      }
      return U2;
    }
    function Se(h4) {
      var g3 = -1, p3 = Array(h4.size);
      return h4.forEach(function(C2) {
        p3[++g3] = C2;
      }), p3;
    }
    function gf(h4) {
      var g3 = -1, p3 = Array(h4.size);
      return h4.forEach(function(C2) {
        p3[++g3] = [C2, C2];
      }), p3;
    }
    function vf(h4, g3, p3) {
      for (var C2 = p3 - 1, S2 = h4.length; ++C2 < S2; )
        if (h4[C2] === g3)
          return C2;
      return -1;
    }
    function _f(h4, g3, p3) {
      for (var C2 = p3 + 1; C2--; )
        if (h4[C2] === g3)
          return C2;
      return C2;
    }
    function Dt2(h4) {
      return Lt2(h4) ? wf(h4) : tf(h4);
    }
    function On(h4) {
      return Lt2(h4) ? Pf(h4) : ef(h4);
    }
    function bs2(h4) {
      for (var g3 = h4.length; g3-- && uo.test(h4.charAt(g3)); )
        ;
      return g3;
    }
    var mf = Ur2(Zo);
    function wf(h4) {
      for (var g3 = br.lastIndex = 0; br.test(h4); )
        ++g3;
      return g3;
    }
    function Pf(h4) {
      return h4.match(br) || [];
    }
    function Af(h4) {
      return h4.match(Mo) || [];
    }
    var Cf = function h4(g3) {
      g3 = g3 == null ? k2 : Ht2.defaults(k2.Object(), g3, Ht2.pick(k2, Go));
      var p3 = g3.Array, C2 = g3.Date, S2 = g3.Error, U2 = g3.Function, X2 = g3.Math, M2 = g3.Object, Br = g3.RegExp, If = g3.String, wn = g3.TypeError, Oe = p3.prototype, xf = U2.prototype, Nt2 = M2.prototype, Re2 = g3["__core-js_shared__"], be = xf.toString, F2 = Nt2.hasOwnProperty, Ef = 0, Ts2 = function() {
        var n2 = /[^.]+$/.exec(Re2 && Re2.keys && Re2.keys.IE_PROTO || "");
        return n2 ? "Symbol(src)_1." + n2 : "";
      }(), Te2 = Nt2.toString, yf = be.call(M2), Sf = k2._, Of = Br("^" + be.call(F2).replace(xr2, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), Le2 = ds2 ? g3.Buffer : i2, et2 = g3.Symbol, De2 = g3.Uint8Array, Ls2 = Le2 ? Le2.allocUnsafe : i2, He2 = Rs2(M2.getPrototypeOf, M2), Ds2 = M2.create, Hs2 = Nt2.propertyIsEnumerable, Ne2 = Oe.splice, Ns2 = et2 ? et2.isConcatSpreadable : i2, ne = et2 ? et2.iterator : i2, pt2 = et2 ? et2.toStringTag : i2, $e2 = function() {
        try {
          var n2 = mt2(M2, "defineProperty");
          return n2({}, "", {}), n2;
        } catch {
        }
      }(), Rf = g3.clearTimeout !== k2.clearTimeout && g3.clearTimeout, bf = C2 && C2.now !== k2.Date.now && C2.now, Tf = g3.setTimeout !== k2.setTimeout && g3.setTimeout, Ue2 = X2.ceil, We2 = X2.floor, Gr = M2.getOwnPropertySymbols, Lf = Le2 ? Le2.isBuffer : i2, $s2 = g3.isFinite, Df = Oe.join, Hf = Rs2(M2.keys, M2), Q3 = X2.max, nn2 = X2.min, Nf = C2.now, $f = g3.parseInt, Us2 = X2.random, Uf = Oe.reverse, zr2 = mt2(g3, "DataView"), te2 = mt2(g3, "Map"), Kr = mt2(g3, "Promise"), $t2 = mt2(g3, "Set"), ee2 = mt2(g3, "WeakMap"), re2 = mt2(M2, "create"), Fe2 = ee2 && new ee2(), Ut2 = {}, Wf = wt2(zr2), Ff = wt2(te2), Mf = wt2(Kr), qf = wt2($t2), Bf = wt2(ee2), Me2 = et2 ? et2.prototype : i2, ie2 = Me2 ? Me2.valueOf : i2, Ws2 = Me2 ? Me2.toString : i2;
      function a3(n2) {
        if (Y(n2) && !O2(n2) && !(n2 instanceof N2)) {
          if (n2 instanceof Pn)
            return n2;
          if (F2.call(n2, "__wrapped__"))
            return Fu(n2);
        }
        return new Pn(n2);
      }
      var Wt2 = /* @__PURE__ */ function() {
        function n2() {
        }
        return function(t) {
          if (!K2(t))
            return {};
          if (Ds2)
            return Ds2(t);
          n2.prototype = t;
          var e = new n2();
          return n2.prototype = i2, e;
        };
      }();
      function qe2() {
      }
      function Pn(n2, t) {
        this.__wrapped__ = n2, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = i2;
      }
      a3.templateSettings = { escape: no, evaluate: to, interpolate: Zi2, variable: "", imports: { _: a3 } }, a3.prototype = qe2.prototype, a3.prototype.constructor = a3, Pn.prototype = Wt2(qe2.prototype), Pn.prototype.constructor = Pn;
      function N2(n2) {
        this.__wrapped__ = n2, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = false, this.__iteratees__ = [], this.__takeCount__ = Nn, this.__views__ = [];
      }
      function Gf() {
        var n2 = new N2(this.__wrapped__);
        return n2.__actions__ = un2(this.__actions__), n2.__dir__ = this.__dir__, n2.__filtered__ = this.__filtered__, n2.__iteratees__ = un2(this.__iteratees__), n2.__takeCount__ = this.__takeCount__, n2.__views__ = un2(this.__views__), n2;
      }
      function zf() {
        if (this.__filtered__) {
          var n2 = new N2(this);
          n2.__dir__ = -1, n2.__filtered__ = true;
        } else
          n2 = this.clone(), n2.__dir__ *= -1;
        return n2;
      }
      function Kf() {
        var n2 = this.__wrapped__.value(), t = this.__dir__, e = O2(n2), r = t < 0, s = e ? n2.length : 0, o = rh(0, s, this.__views__), f3 = o.start, c2 = o.end, l2 = c2 - f3, v3 = r ? c2 : f3 - 1, _3 = this.__iteratees__, m2 = _3.length, P2 = 0, I2 = nn2(l2, this.__takeCount__);
        if (!e || !r && s == l2 && I2 == l2)
          return ou(n2, this.__actions__);
        var E3 = [];
        n:
          for (; l2-- && P2 < I2; ) {
            v3 += t;
            for (var b3 = -1, y3 = n2[v3]; ++b3 < m2; ) {
              var H2 = _3[b3], $2 = H2.iteratee, dn2 = H2.type, sn2 = $2(y3);
              if (dn2 == Ua)
                y3 = sn2;
              else if (!sn2) {
                if (dn2 == Bi)
                  continue n;
                break n;
              }
            }
            E3[P2++] = y3;
          }
        return E3;
      }
      N2.prototype = Wt2(qe2.prototype), N2.prototype.constructor = N2;
      function dt2(n2) {
        var t = -1, e = n2 == null ? 0 : n2.length;
        for (this.clear(); ++t < e; ) {
          var r = n2[t];
          this.set(r[0], r[1]);
        }
      }
      function Yf() {
        this.__data__ = re2 ? re2(null) : {}, this.size = 0;
      }
      function Zf(n2) {
        var t = this.has(n2) && delete this.__data__[n2];
        return this.size -= t ? 1 : 0, t;
      }
      function Jf(n2) {
        var t = this.__data__;
        if (re2) {
          var e = t[n2];
          return e === zt2 ? i2 : e;
        }
        return F2.call(t, n2) ? t[n2] : i2;
      }
      function Xf(n2) {
        var t = this.__data__;
        return re2 ? t[n2] !== i2 : F2.call(t, n2);
      }
      function Qf(n2, t) {
        var e = this.__data__;
        return this.size += this.has(n2) ? 0 : 1, e[n2] = re2 && t === i2 ? zt2 : t, this;
      }
      dt2.prototype.clear = Yf, dt2.prototype.delete = Zf, dt2.prototype.get = Jf, dt2.prototype.has = Xf, dt2.prototype.set = Qf;
      function Bn2(n2) {
        var t = -1, e = n2 == null ? 0 : n2.length;
        for (this.clear(); ++t < e; ) {
          var r = n2[t];
          this.set(r[0], r[1]);
        }
      }
      function Vf() {
        this.__data__ = [], this.size = 0;
      }
      function kf(n2) {
        var t = this.__data__, e = Be2(t, n2);
        if (e < 0)
          return false;
        var r = t.length - 1;
        return e == r ? t.pop() : Ne2.call(t, e, 1), --this.size, true;
      }
      function jf(n2) {
        var t = this.__data__, e = Be2(t, n2);
        return e < 0 ? i2 : t[e][1];
      }
      function nc(n2) {
        return Be2(this.__data__, n2) > -1;
      }
      function tc(n2, t) {
        var e = this.__data__, r = Be2(e, n2);
        return r < 0 ? (++this.size, e.push([n2, t])) : e[r][1] = t, this;
      }
      Bn2.prototype.clear = Vf, Bn2.prototype.delete = kf, Bn2.prototype.get = jf, Bn2.prototype.has = nc, Bn2.prototype.set = tc;
      function Gn2(n2) {
        var t = -1, e = n2 == null ? 0 : n2.length;
        for (this.clear(); ++t < e; ) {
          var r = n2[t];
          this.set(r[0], r[1]);
        }
      }
      function ec() {
        this.size = 0, this.__data__ = { hash: new dt2(), map: new (te2 || Bn2)(), string: new dt2() };
      }
      function rc(n2) {
        var t = nr2(this, n2).delete(n2);
        return this.size -= t ? 1 : 0, t;
      }
      function ic(n2) {
        return nr2(this, n2).get(n2);
      }
      function sc(n2) {
        return nr2(this, n2).has(n2);
      }
      function uc(n2, t) {
        var e = nr2(this, n2), r = e.size;
        return e.set(n2, t), this.size += e.size == r ? 0 : 1, this;
      }
      Gn2.prototype.clear = ec, Gn2.prototype.delete = rc, Gn2.prototype.get = ic, Gn2.prototype.has = sc, Gn2.prototype.set = uc;
      function gt2(n2) {
        var t = -1, e = n2 == null ? 0 : n2.length;
        for (this.__data__ = new Gn2(); ++t < e; )
          this.add(n2[t]);
      }
      function ac(n2) {
        return this.__data__.set(n2, zt2), this;
      }
      function oc(n2) {
        return this.__data__.has(n2);
      }
      gt2.prototype.add = gt2.prototype.push = ac, gt2.prototype.has = oc;
      function Rn(n2) {
        var t = this.__data__ = new Bn2(n2);
        this.size = t.size;
      }
      function fc() {
        this.__data__ = new Bn2(), this.size = 0;
      }
      function cc(n2) {
        var t = this.__data__, e = t.delete(n2);
        return this.size = t.size, e;
      }
      function hc(n2) {
        return this.__data__.get(n2);
      }
      function lc(n2) {
        return this.__data__.has(n2);
      }
      function pc(n2, t) {
        var e = this.__data__;
        if (e instanceof Bn2) {
          var r = e.__data__;
          if (!te2 || r.length < w3 - 1)
            return r.push([n2, t]), this.size = ++e.size, this;
          e = this.__data__ = new Gn2(r);
        }
        return e.set(n2, t), this.size = e.size, this;
      }
      Rn.prototype.clear = fc, Rn.prototype.delete = cc, Rn.prototype.get = hc, Rn.prototype.has = lc, Rn.prototype.set = pc;
      function Fs2(n2, t) {
        var e = O2(n2), r = !e && Pt2(n2), s = !e && !r && at2(n2), o = !e && !r && !s && Bt2(n2), f3 = e || r || s || o, c2 = f3 ? Fr2(n2.length, If) : [], l2 = c2.length;
        for (var v3 in n2)
          (t || F2.call(n2, v3)) && !(f3 && (v3 == "length" || s && (v3 == "offset" || v3 == "parent") || o && (v3 == "buffer" || v3 == "byteLength" || v3 == "byteOffset") || Zn(v3, l2))) && c2.push(v3);
        return c2;
      }
      function Ms2(n2) {
        var t = n2.length;
        return t ? n2[ei(0, t - 1)] : i2;
      }
      function dc(n2, t) {
        return tr2(un2(n2), vt2(t, 0, n2.length));
      }
      function gc(n2) {
        return tr2(un2(n2));
      }
      function Yr(n2, t, e) {
        (e !== i2 && !bn(n2[t], e) || e === i2 && !(t in n2)) && zn(n2, t, e);
      }
      function se(n2, t, e) {
        var r = n2[t];
        (!(F2.call(n2, t) && bn(r, e)) || e === i2 && !(t in n2)) && zn(n2, t, e);
      }
      function Be2(n2, t) {
        for (var e = n2.length; e--; )
          if (bn(n2[e][0], t))
            return e;
        return -1;
      }
      function vc(n2, t, e, r) {
        return rt2(n2, function(s, o, f3) {
          t(r, s, e(s), f3);
        }), r;
      }
      function qs2(n2, t) {
        return n2 && Un2(t, V2(t), n2);
      }
      function _c(n2, t) {
        return n2 && Un2(t, on2(t), n2);
      }
      function zn(n2, t, e) {
        t == "__proto__" && $e2 ? $e2(n2, t, { configurable: true, enumerable: true, value: e, writable: true }) : n2[t] = e;
      }
      function Zr(n2, t) {
        for (var e = -1, r = t.length, s = p3(r), o = n2 == null; ++e < r; )
          s[e] = o ? i2 : Si(n2, t[e]);
        return s;
      }
      function vt2(n2, t, e) {
        return n2 === n2 && (e !== i2 && (n2 = n2 <= e ? n2 : e), t !== i2 && (n2 = n2 >= t ? n2 : t)), n2;
      }
      function An(n2, t, e, r, s, o) {
        var f3, c2 = t & Ln2, l2 = t & Fn2, v3 = t & xt2;
        if (e && (f3 = s ? e(n2, r, s, o) : e(n2)), f3 !== i2)
          return f3;
        if (!K2(n2))
          return n2;
        var _3 = O2(n2);
        if (_3) {
          if (f3 = sh(n2), !c2)
            return un2(n2, f3);
        } else {
          var m2 = tn2(n2), P2 = m2 == Pe2 || m2 == Gi2;
          if (at2(n2))
            return hu(n2, c2);
          if (m2 == qn2 || m2 == Ot2 || P2 && !s) {
            if (f3 = l2 || P2 ? {} : bu(n2), !c2)
              return l2 ? Jc(n2, _c(f3, n2)) : Zc(n2, qs2(f3, n2));
          } else {
            if (!q2[m2])
              return s ? n2 : {};
            f3 = uh(n2, m2, c2);
          }
        }
        o || (o = new Rn());
        var I2 = o.get(n2);
        if (I2)
          return I2;
        o.set(n2, f3), sa(n2) ? n2.forEach(function(y3) {
          f3.add(An(y3, t, e, y3, n2, o));
        }) : ra(n2) && n2.forEach(function(y3, H2) {
          f3.set(H2, An(y3, t, e, H2, n2, o));
        });
        var E3 = v3 ? l2 ? pi : li : l2 ? on2 : V2, b3 = _3 ? i2 : E3(n2);
        return mn2(b3 || n2, function(y3, H2) {
          b3 && (H2 = y3, y3 = n2[H2]), se(f3, H2, An(y3, t, e, H2, n2, o));
        }), f3;
      }
      function mc(n2) {
        var t = V2(n2);
        return function(e) {
          return Bs2(e, n2, t);
        };
      }
      function Bs2(n2, t, e) {
        var r = e.length;
        if (n2 == null)
          return !r;
        for (n2 = M2(n2); r--; ) {
          var s = e[r], o = t[s], f3 = n2[s];
          if (f3 === i2 && !(s in n2) || !o(f3))
            return false;
        }
        return true;
      }
      function Gs2(n2, t, e) {
        if (typeof n2 != "function")
          throw new wn(D2);
        return le2(function() {
          n2.apply(i2, e);
        }, t);
      }
      function ue2(n2, t, e, r) {
        var s = -1, o = Ee, f3 = true, c2 = n2.length, l2 = [], v3 = t.length;
        if (!c2)
          return l2;
        e && (t = G2(t, hn2(e))), r ? (o = Dr2, f3 = false) : t.length >= w3 && (o = jt2, f3 = false, t = new gt2(t));
        n:
          for (; ++s < c2; ) {
            var _3 = n2[s], m2 = e == null ? _3 : e(_3);
            if (_3 = r || _3 !== 0 ? _3 : 0, f3 && m2 === m2) {
              for (var P2 = v3; P2--; )
                if (t[P2] === m2)
                  continue n;
              l2.push(_3);
            } else
              o(t, m2, r) || l2.push(_3);
          }
        return l2;
      }
      var rt2 = vu($n), zs2 = vu(Xr, true);
      function wc(n2, t) {
        var e = true;
        return rt2(n2, function(r, s, o) {
          return e = !!t(r, s, o), e;
        }), e;
      }
      function Ge2(n2, t, e) {
        for (var r = -1, s = n2.length; ++r < s; ) {
          var o = n2[r], f3 = t(o);
          if (f3 != null && (c2 === i2 ? f3 === f3 && !pn2(f3) : e(f3, c2)))
            var c2 = f3, l2 = o;
        }
        return l2;
      }
      function Pc(n2, t, e, r) {
        var s = n2.length;
        for (e = R2(e), e < 0 && (e = -e > s ? 0 : s + e), r = r === i2 || r > s ? s : R2(r), r < 0 && (r += s), r = e > r ? 0 : aa(r); e < r; )
          n2[e++] = t;
        return n2;
      }
      function Ks2(n2, t) {
        var e = [];
        return rt2(n2, function(r, s, o) {
          t(r, s, o) && e.push(r);
        }), e;
      }
      function j2(n2, t, e, r, s) {
        var o = -1, f3 = n2.length;
        for (e || (e = oh), s || (s = []); ++o < f3; ) {
          var c2 = n2[o];
          t > 0 && e(c2) ? t > 1 ? j2(c2, t - 1, e, r, s) : nt2(s, c2) : r || (s[s.length] = c2);
        }
        return s;
      }
      var Jr = _u(), Ys2 = _u(true);
      function $n(n2, t) {
        return n2 && Jr(n2, t, V2);
      }
      function Xr(n2, t) {
        return n2 && Ys2(n2, t, V2);
      }
      function ze2(n2, t) {
        return jn(t, function(e) {
          return Jn2(n2[e]);
        });
      }
      function _t2(n2, t) {
        t = st2(t, n2);
        for (var e = 0, r = t.length; n2 != null && e < r; )
          n2 = n2[Wn2(t[e++])];
        return e && e == r ? n2 : i2;
      }
      function Zs2(n2, t, e) {
        var r = t(n2);
        return O2(n2) ? r : nt2(r, e(n2));
      }
      function en2(n2) {
        return n2 == null ? n2 === i2 ? Za : Ka : pt2 && pt2 in M2(n2) ? eh(n2) : gh(n2);
      }
      function Qr(n2, t) {
        return n2 > t;
      }
      function Ac(n2, t) {
        return n2 != null && F2.call(n2, t);
      }
      function Cc(n2, t) {
        return n2 != null && t in M2(n2);
      }
      function Ic(n2, t, e) {
        return n2 >= nn2(t, e) && n2 < Q3(t, e);
      }
      function Vr(n2, t, e) {
        for (var r = e ? Dr2 : Ee, s = n2[0].length, o = n2.length, f3 = o, c2 = p3(o), l2 = 1 / 0, v3 = []; f3--; ) {
          var _3 = n2[f3];
          f3 && t && (_3 = G2(_3, hn2(t))), l2 = nn2(_3.length, l2), c2[f3] = !e && (t || s >= 120 && _3.length >= 120) ? new gt2(f3 && _3) : i2;
        }
        _3 = n2[0];
        var m2 = -1, P2 = c2[0];
        n:
          for (; ++m2 < s && v3.length < l2; ) {
            var I2 = _3[m2], E3 = t ? t(I2) : I2;
            if (I2 = e || I2 !== 0 ? I2 : 0, !(P2 ? jt2(P2, E3) : r(v3, E3, e))) {
              for (f3 = o; --f3; ) {
                var b3 = c2[f3];
                if (!(b3 ? jt2(b3, E3) : r(n2[f3], E3, e)))
                  continue n;
              }
              P2 && P2.push(E3), v3.push(I2);
            }
          }
        return v3;
      }
      function xc(n2, t, e, r) {
        return $n(n2, function(s, o, f3) {
          t(r, e(s), o, f3);
        }), r;
      }
      function ae2(n2, t, e) {
        t = st2(t, n2), n2 = Hu(n2, t);
        var r = n2 == null ? n2 : n2[Wn2(In(t))];
        return r == null ? i2 : cn2(r, n2, e);
      }
      function Js2(n2) {
        return Y(n2) && en2(n2) == Ot2;
      }
      function Ec(n2) {
        return Y(n2) && en2(n2) == kt2;
      }
      function yc(n2) {
        return Y(n2) && en2(n2) == Zt2;
      }
      function oe2(n2, t, e, r, s) {
        return n2 === t ? true : n2 == null || t == null || !Y(n2) && !Y(t) ? n2 !== n2 && t !== t : Sc(n2, t, e, r, oe2, s);
      }
      function Sc(n2, t, e, r, s, o) {
        var f3 = O2(n2), c2 = O2(t), l2 = f3 ? me : tn2(n2), v3 = c2 ? me : tn2(t);
        l2 = l2 == Ot2 ? qn2 : l2, v3 = v3 == Ot2 ? qn2 : v3;
        var _3 = l2 == qn2, m2 = v3 == qn2, P2 = l2 == v3;
        if (P2 && at2(n2)) {
          if (!at2(t))
            return false;
          f3 = true, _3 = false;
        }
        if (P2 && !_3)
          return o || (o = new Rn()), f3 || Bt2(n2) ? Su(n2, t, e, r, s, o) : nh(n2, t, l2, e, r, s, o);
        if (!(e & Et2)) {
          var I2 = _3 && F2.call(n2, "__wrapped__"), E3 = m2 && F2.call(t, "__wrapped__");
          if (I2 || E3) {
            var b3 = I2 ? n2.value() : n2, y3 = E3 ? t.value() : t;
            return o || (o = new Rn()), s(b3, y3, e, r, o);
          }
        }
        return P2 ? (o || (o = new Rn()), th(n2, t, e, r, s, o)) : false;
      }
      function Oc(n2) {
        return Y(n2) && tn2(n2) == yn2;
      }
      function kr(n2, t, e, r) {
        var s = e.length, o = s, f3 = !r;
        if (n2 == null)
          return !o;
        for (n2 = M2(n2); s--; ) {
          var c2 = e[s];
          if (f3 && c2[2] ? c2[1] !== n2[c2[0]] : !(c2[0] in n2))
            return false;
        }
        for (; ++s < o; ) {
          c2 = e[s];
          var l2 = c2[0], v3 = n2[l2], _3 = c2[1];
          if (f3 && c2[2]) {
            if (v3 === i2 && !(l2 in n2))
              return false;
          } else {
            var m2 = new Rn();
            if (r)
              var P2 = r(v3, _3, l2, n2, t, m2);
            if (!(P2 === i2 ? oe2(_3, v3, Et2 | ve2, r, m2) : P2))
              return false;
          }
        }
        return true;
      }
      function Xs2(n2) {
        if (!K2(n2) || ch(n2))
          return false;
        var t = Jn2(n2) ? Of : _o;
        return t.test(wt2(n2));
      }
      function Rc(n2) {
        return Y(n2) && en2(n2) == Xt2;
      }
      function bc(n2) {
        return Y(n2) && tn2(n2) == Sn;
      }
      function Tc(n2) {
        return Y(n2) && ar2(n2.length) && !!B2[en2(n2)];
      }
      function Qs2(n2) {
        return typeof n2 == "function" ? n2 : n2 == null ? fn2 : typeof n2 == "object" ? O2(n2) ? js2(n2[0], n2[1]) : ks2(n2) : ma(n2);
      }
      function jr(n2) {
        if (!he2(n2))
          return Hf(n2);
        var t = [];
        for (var e in M2(n2))
          F2.call(n2, e) && e != "constructor" && t.push(e);
        return t;
      }
      function Lc(n2) {
        if (!K2(n2))
          return dh(n2);
        var t = he2(n2), e = [];
        for (var r in n2)
          r == "constructor" && (t || !F2.call(n2, r)) || e.push(r);
        return e;
      }
      function ni(n2, t) {
        return n2 < t;
      }
      function Vs2(n2, t) {
        var e = -1, r = an2(n2) ? p3(n2.length) : [];
        return rt2(n2, function(s, o, f3) {
          r[++e] = t(s, o, f3);
        }), r;
      }
      function ks2(n2) {
        var t = gi(n2);
        return t.length == 1 && t[0][2] ? Lu(t[0][0], t[0][1]) : function(e) {
          return e === n2 || kr(e, n2, t);
        };
      }
      function js2(n2, t) {
        return _i(n2) && Tu(t) ? Lu(Wn2(n2), t) : function(e) {
          var r = Si(e, n2);
          return r === i2 && r === t ? Oi(e, n2) : oe2(t, r, Et2 | ve2);
        };
      }
      function Ke2(n2, t, e, r, s) {
        n2 !== t && Jr(t, function(o, f3) {
          if (s || (s = new Rn()), K2(o))
            Dc(n2, t, f3, e, Ke2, r, s);
          else {
            var c2 = r ? r(wi(n2, f3), o, f3 + "", n2, t, s) : i2;
            c2 === i2 && (c2 = o), Yr(n2, f3, c2);
          }
        }, on2);
      }
      function Dc(n2, t, e, r, s, o, f3) {
        var c2 = wi(n2, e), l2 = wi(t, e), v3 = f3.get(l2);
        if (v3) {
          Yr(n2, e, v3);
          return;
        }
        var _3 = o ? o(c2, l2, e + "", n2, t, f3) : i2, m2 = _3 === i2;
        if (m2) {
          var P2 = O2(l2), I2 = !P2 && at2(l2), E3 = !P2 && !I2 && Bt2(l2);
          _3 = l2, P2 || I2 || E3 ? O2(c2) ? _3 = c2 : Z2(c2) ? _3 = un2(c2) : I2 ? (m2 = false, _3 = hu(l2, true)) : E3 ? (m2 = false, _3 = lu(l2, true)) : _3 = [] : pe2(l2) || Pt2(l2) ? (_3 = c2, Pt2(c2) ? _3 = oa(c2) : (!K2(c2) || Jn2(c2)) && (_3 = bu(l2))) : m2 = false;
        }
        m2 && (f3.set(l2, _3), s(_3, l2, r, o, f3), f3.delete(l2)), Yr(n2, e, _3);
      }
      function nu(n2, t) {
        var e = n2.length;
        if (e)
          return t += t < 0 ? e : 0, Zn(t, e) ? n2[t] : i2;
      }
      function tu(n2, t, e) {
        t.length ? t = G2(t, function(o) {
          return O2(o) ? function(f3) {
            return _t2(f3, o.length === 1 ? o[0] : o);
          } : o;
        }) : t = [fn2];
        var r = -1;
        t = G2(t, hn2(x2()));
        var s = Vs2(n2, function(o, f3, c2) {
          var l2 = G2(t, function(v3) {
            return v3(o);
          });
          return { criteria: l2, index: ++r, value: o };
        });
        return uf(s, function(o, f3) {
          return Yc(o, f3, e);
        });
      }
      function Hc(n2, t) {
        return eu(n2, t, function(e, r) {
          return Oi(n2, r);
        });
      }
      function eu(n2, t, e) {
        for (var r = -1, s = t.length, o = {}; ++r < s; ) {
          var f3 = t[r], c2 = _t2(n2, f3);
          e(c2, f3) && fe(o, st2(f3, n2), c2);
        }
        return o;
      }
      function Nc(n2) {
        return function(t) {
          return _t2(t, n2);
        };
      }
      function ti(n2, t, e, r) {
        var s = r ? sf : Tt2, o = -1, f3 = t.length, c2 = n2;
        for (n2 === t && (t = un2(t)), e && (c2 = G2(n2, hn2(e))); ++o < f3; )
          for (var l2 = 0, v3 = t[o], _3 = e ? e(v3) : v3; (l2 = s(c2, _3, l2, r)) > -1; )
            c2 !== n2 && Ne2.call(c2, l2, 1), Ne2.call(n2, l2, 1);
        return n2;
      }
      function ru(n2, t) {
        for (var e = n2 ? t.length : 0, r = e - 1; e--; ) {
          var s = t[e];
          if (e == r || s !== o) {
            var o = s;
            Zn(s) ? Ne2.call(n2, s, 1) : si(n2, s);
          }
        }
        return n2;
      }
      function ei(n2, t) {
        return n2 + We2(Us2() * (t - n2 + 1));
      }
      function $c(n2, t, e, r) {
        for (var s = -1, o = Q3(Ue2((t - n2) / (e || 1)), 0), f3 = p3(o); o--; )
          f3[r ? o : ++s] = n2, n2 += e;
        return f3;
      }
      function ri(n2, t) {
        var e = "";
        if (!n2 || t < 1 || t > kn2)
          return e;
        do
          t % 2 && (e += n2), t = We2(t / 2), t && (n2 += n2);
        while (t);
        return e;
      }
      function T2(n2, t) {
        return Pi(Du(n2, t, fn2), n2 + "");
      }
      function Uc(n2) {
        return Ms2(Gt2(n2));
      }
      function Wc(n2, t) {
        var e = Gt2(n2);
        return tr2(e, vt2(t, 0, e.length));
      }
      function fe(n2, t, e, r) {
        if (!K2(n2))
          return n2;
        t = st2(t, n2);
        for (var s = -1, o = t.length, f3 = o - 1, c2 = n2; c2 != null && ++s < o; ) {
          var l2 = Wn2(t[s]), v3 = e;
          if (l2 === "__proto__" || l2 === "constructor" || l2 === "prototype")
            return n2;
          if (s != f3) {
            var _3 = c2[l2];
            v3 = r ? r(_3, l2, c2) : i2, v3 === i2 && (v3 = K2(_3) ? _3 : Zn(t[s + 1]) ? [] : {});
          }
          se(c2, l2, v3), c2 = c2[l2];
        }
        return n2;
      }
      var iu = Fe2 ? function(n2, t) {
        return Fe2.set(n2, t), n2;
      } : fn2, Fc = $e2 ? function(n2, t) {
        return $e2(n2, "toString", { configurable: true, enumerable: false, value: bi(t), writable: true });
      } : fn2;
      function Mc(n2) {
        return tr2(Gt2(n2));
      }
      function Cn(n2, t, e) {
        var r = -1, s = n2.length;
        t < 0 && (t = -t > s ? 0 : s + t), e = e > s ? s : e, e < 0 && (e += s), s = t > e ? 0 : e - t >>> 0, t >>>= 0;
        for (var o = p3(s); ++r < s; )
          o[r] = n2[r + t];
        return o;
      }
      function qc(n2, t) {
        var e;
        return rt2(n2, function(r, s, o) {
          return e = t(r, s, o), !e;
        }), !!e;
      }
      function Ye2(n2, t, e) {
        var r = 0, s = n2 == null ? r : n2.length;
        if (typeof t == "number" && t === t && s <= qa) {
          for (; r < s; ) {
            var o = r + s >>> 1, f3 = n2[o];
            f3 !== null && !pn2(f3) && (e ? f3 <= t : f3 < t) ? r = o + 1 : s = o;
          }
          return s;
        }
        return ii(n2, t, fn2, e);
      }
      function ii(n2, t, e, r) {
        var s = 0, o = n2 == null ? 0 : n2.length;
        if (o === 0)
          return 0;
        t = e(t);
        for (var f3 = t !== t, c2 = t === null, l2 = pn2(t), v3 = t === i2; s < o; ) {
          var _3 = We2((s + o) / 2), m2 = e(n2[_3]), P2 = m2 !== i2, I2 = m2 === null, E3 = m2 === m2, b3 = pn2(m2);
          if (f3)
            var y3 = r || E3;
          else
            v3 ? y3 = E3 && (r || P2) : c2 ? y3 = E3 && P2 && (r || !I2) : l2 ? y3 = E3 && P2 && !I2 && (r || !b3) : I2 || b3 ? y3 = false : y3 = r ? m2 <= t : m2 < t;
          y3 ? s = _3 + 1 : o = _3;
        }
        return nn2(o, Ma);
      }
      function su(n2, t) {
        for (var e = -1, r = n2.length, s = 0, o = []; ++e < r; ) {
          var f3 = n2[e], c2 = t ? t(f3) : f3;
          if (!e || !bn(c2, l2)) {
            var l2 = c2;
            o[s++] = f3 === 0 ? 0 : f3;
          }
        }
        return o;
      }
      function uu(n2) {
        return typeof n2 == "number" ? n2 : pn2(n2) ? _e2 : +n2;
      }
      function ln2(n2) {
        if (typeof n2 == "string")
          return n2;
        if (O2(n2))
          return G2(n2, ln2) + "";
        if (pn2(n2))
          return Ws2 ? Ws2.call(n2) : "";
        var t = n2 + "";
        return t == "0" && 1 / n2 == -ht2 ? "-0" : t;
      }
      function it2(n2, t, e) {
        var r = -1, s = Ee, o = n2.length, f3 = true, c2 = [], l2 = c2;
        if (e)
          f3 = false, s = Dr2;
        else if (o >= w3) {
          var v3 = t ? null : kc(n2);
          if (v3)
            return Se(v3);
          f3 = false, s = jt2, l2 = new gt2();
        } else
          l2 = t ? [] : c2;
        n:
          for (; ++r < o; ) {
            var _3 = n2[r], m2 = t ? t(_3) : _3;
            if (_3 = e || _3 !== 0 ? _3 : 0, f3 && m2 === m2) {
              for (var P2 = l2.length; P2--; )
                if (l2[P2] === m2)
                  continue n;
              t && l2.push(m2), c2.push(_3);
            } else
              s(l2, m2, e) || (l2 !== c2 && l2.push(m2), c2.push(_3));
          }
        return c2;
      }
      function si(n2, t) {
        return t = st2(t, n2), n2 = Hu(n2, t), n2 == null || delete n2[Wn2(In(t))];
      }
      function au(n2, t, e, r) {
        return fe(n2, t, e(_t2(n2, t)), r);
      }
      function Ze2(n2, t, e, r) {
        for (var s = n2.length, o = r ? s : -1; (r ? o-- : ++o < s) && t(n2[o], o, n2); )
          ;
        return e ? Cn(n2, r ? 0 : o, r ? o + 1 : s) : Cn(n2, r ? o + 1 : 0, r ? s : o);
      }
      function ou(n2, t) {
        var e = n2;
        return e instanceof N2 && (e = e.value()), Hr(t, function(r, s) {
          return s.func.apply(s.thisArg, nt2([r], s.args));
        }, e);
      }
      function ui(n2, t, e) {
        var r = n2.length;
        if (r < 2)
          return r ? it2(n2[0]) : [];
        for (var s = -1, o = p3(r); ++s < r; )
          for (var f3 = n2[s], c2 = -1; ++c2 < r; )
            c2 != s && (o[s] = ue2(o[s] || f3, n2[c2], t, e));
        return it2(j2(o, 1), t, e);
      }
      function fu(n2, t, e) {
        for (var r = -1, s = n2.length, o = t.length, f3 = {}; ++r < s; ) {
          var c2 = r < o ? t[r] : i2;
          e(f3, n2[r], c2);
        }
        return f3;
      }
      function ai(n2) {
        return Z2(n2) ? n2 : [];
      }
      function oi(n2) {
        return typeof n2 == "function" ? n2 : fn2;
      }
      function st2(n2, t) {
        return O2(n2) ? n2 : _i(n2, t) ? [n2] : Wu(W2(n2));
      }
      var Bc = T2;
      function ut2(n2, t, e) {
        var r = n2.length;
        return e = e === i2 ? r : e, !t && e >= r ? n2 : Cn(n2, t, e);
      }
      var cu = Rf || function(n2) {
        return k2.clearTimeout(n2);
      };
      function hu(n2, t) {
        if (t)
          return n2.slice();
        var e = n2.length, r = Ls2 ? Ls2(e) : new n2.constructor(e);
        return n2.copy(r), r;
      }
      function fi(n2) {
        var t = new n2.constructor(n2.byteLength);
        return new De2(t).set(new De2(n2)), t;
      }
      function Gc(n2, t) {
        var e = t ? fi(n2.buffer) : n2.buffer;
        return new n2.constructor(e, n2.byteOffset, n2.byteLength);
      }
      function zc(n2) {
        var t = new n2.constructor(n2.source, Ji2.exec(n2));
        return t.lastIndex = n2.lastIndex, t;
      }
      function Kc(n2) {
        return ie2 ? M2(ie2.call(n2)) : {};
      }
      function lu(n2, t) {
        var e = t ? fi(n2.buffer) : n2.buffer;
        return new n2.constructor(e, n2.byteOffset, n2.length);
      }
      function pu(n2, t) {
        if (n2 !== t) {
          var e = n2 !== i2, r = n2 === null, s = n2 === n2, o = pn2(n2), f3 = t !== i2, c2 = t === null, l2 = t === t, v3 = pn2(t);
          if (!c2 && !v3 && !o && n2 > t || o && f3 && l2 && !c2 && !v3 || r && f3 && l2 || !e && l2 || !s)
            return 1;
          if (!r && !o && !v3 && n2 < t || v3 && e && s && !r && !o || c2 && e && s || !f3 && s || !l2)
            return -1;
        }
        return 0;
      }
      function Yc(n2, t, e) {
        for (var r = -1, s = n2.criteria, o = t.criteria, f3 = s.length, c2 = e.length; ++r < f3; ) {
          var l2 = pu(s[r], o[r]);
          if (l2) {
            if (r >= c2)
              return l2;
            var v3 = e[r];
            return l2 * (v3 == "desc" ? -1 : 1);
          }
        }
        return n2.index - t.index;
      }
      function du(n2, t, e, r) {
        for (var s = -1, o = n2.length, f3 = e.length, c2 = -1, l2 = t.length, v3 = Q3(o - f3, 0), _3 = p3(l2 + v3), m2 = !r; ++c2 < l2; )
          _3[c2] = t[c2];
        for (; ++s < f3; )
          (m2 || s < o) && (_3[e[s]] = n2[s]);
        for (; v3--; )
          _3[c2++] = n2[s++];
        return _3;
      }
      function gu(n2, t, e, r) {
        for (var s = -1, o = n2.length, f3 = -1, c2 = e.length, l2 = -1, v3 = t.length, _3 = Q3(o - c2, 0), m2 = p3(_3 + v3), P2 = !r; ++s < _3; )
          m2[s] = n2[s];
        for (var I2 = s; ++l2 < v3; )
          m2[I2 + l2] = t[l2];
        for (; ++f3 < c2; )
          (P2 || s < o) && (m2[I2 + e[f3]] = n2[s++]);
        return m2;
      }
      function un2(n2, t) {
        var e = -1, r = n2.length;
        for (t || (t = p3(r)); ++e < r; )
          t[e] = n2[e];
        return t;
      }
      function Un2(n2, t, e, r) {
        var s = !e;
        e || (e = {});
        for (var o = -1, f3 = t.length; ++o < f3; ) {
          var c2 = t[o], l2 = r ? r(e[c2], n2[c2], c2, e, n2) : i2;
          l2 === i2 && (l2 = n2[c2]), s ? zn(e, c2, l2) : se(e, c2, l2);
        }
        return e;
      }
      function Zc(n2, t) {
        return Un2(n2, vi(n2), t);
      }
      function Jc(n2, t) {
        return Un2(n2, Ou(n2), t);
      }
      function Je2(n2, t) {
        return function(e, r) {
          var s = O2(e) ? ko : vc, o = t ? t() : {};
          return s(e, n2, x2(r, 2), o);
        };
      }
      function Ft2(n2) {
        return T2(function(t, e) {
          var r = -1, s = e.length, o = s > 1 ? e[s - 1] : i2, f3 = s > 2 ? e[2] : i2;
          for (o = n2.length > 3 && typeof o == "function" ? (s--, o) : i2, f3 && rn2(e[0], e[1], f3) && (o = s < 3 ? i2 : o, s = 1), t = M2(t); ++r < s; ) {
            var c2 = e[r];
            c2 && n2(t, c2, r, o);
          }
          return t;
        });
      }
      function vu(n2, t) {
        return function(e, r) {
          if (e == null)
            return e;
          if (!an2(e))
            return n2(e, r);
          for (var s = e.length, o = t ? s : -1, f3 = M2(e); (t ? o-- : ++o < s) && r(f3[o], o, f3) !== false; )
            ;
          return e;
        };
      }
      function _u(n2) {
        return function(t, e, r) {
          for (var s = -1, o = M2(t), f3 = r(t), c2 = f3.length; c2--; ) {
            var l2 = f3[n2 ? c2 : ++s];
            if (e(o[l2], l2, o) === false)
              break;
          }
          return t;
        };
      }
      function Xc(n2, t, e) {
        var r = t & vn2, s = ce2(n2);
        function o() {
          var f3 = this && this !== k2 && this instanceof o ? s : n2;
          return f3.apply(r ? e : this, arguments);
        }
        return o;
      }
      function mu(n2) {
        return function(t) {
          t = W2(t);
          var e = Lt2(t) ? On(t) : i2, r = e ? e[0] : t.charAt(0), s = e ? ut2(e, 1).join("") : t.slice(1);
          return r[n2]() + s;
        };
      }
      function Mt2(n2) {
        return function(t) {
          return Hr(va(ga(t).replace(Wo, "")), n2, "");
        };
      }
      function ce2(n2) {
        return function() {
          var t = arguments;
          switch (t.length) {
            case 0:
              return new n2();
            case 1:
              return new n2(t[0]);
            case 2:
              return new n2(t[0], t[1]);
            case 3:
              return new n2(t[0], t[1], t[2]);
            case 4:
              return new n2(t[0], t[1], t[2], t[3]);
            case 5:
              return new n2(t[0], t[1], t[2], t[3], t[4]);
            case 6:
              return new n2(t[0], t[1], t[2], t[3], t[4], t[5]);
            case 7:
              return new n2(t[0], t[1], t[2], t[3], t[4], t[5], t[6]);
          }
          var e = Wt2(n2.prototype), r = n2.apply(e, t);
          return K2(r) ? r : e;
        };
      }
      function Qc(n2, t, e) {
        var r = ce2(n2);
        function s() {
          for (var o = arguments.length, f3 = p3(o), c2 = o, l2 = qt2(s); c2--; )
            f3[c2] = arguments[c2];
          var v3 = o < 3 && f3[0] !== l2 && f3[o - 1] !== l2 ? [] : tt2(f3, l2);
          if (o -= v3.length, o < e)
            return Iu(n2, t, Xe2, s.placeholder, i2, f3, v3, i2, i2, e - o);
          var _3 = this && this !== k2 && this instanceof s ? r : n2;
          return cn2(_3, this, f3);
        }
        return s;
      }
      function wu(n2) {
        return function(t, e, r) {
          var s = M2(t);
          if (!an2(t)) {
            var o = x2(e, 3);
            t = V2(t), e = function(c2) {
              return o(s[c2], c2, s);
            };
          }
          var f3 = n2(t, e, r);
          return f3 > -1 ? s[o ? t[f3] : f3] : i2;
        };
      }
      function Pu(n2) {
        return Yn(function(t) {
          var e = t.length, r = e, s = Pn.prototype.thru;
          for (n2 && t.reverse(); r--; ) {
            var o = t[r];
            if (typeof o != "function")
              throw new wn(D2);
            if (s && !f3 && je2(o) == "wrapper")
              var f3 = new Pn([], true);
          }
          for (r = f3 ? r : e; ++r < e; ) {
            o = t[r];
            var c2 = je2(o), l2 = c2 == "wrapper" ? di(o) : i2;
            l2 && mi(l2[0]) && l2[1] == (Mn2 | Dn2 | Hn2 | Kt2) && !l2[4].length && l2[9] == 1 ? f3 = f3[je2(l2[0])].apply(f3, l2[3]) : f3 = o.length == 1 && mi(o) ? f3[c2]() : f3.thru(o);
          }
          return function() {
            var v3 = arguments, _3 = v3[0];
            if (f3 && v3.length == 1 && O2(_3))
              return f3.plant(_3).value();
            for (var m2 = 0, P2 = e ? t[m2].apply(this, v3) : _3; ++m2 < e; )
              P2 = t[m2].call(this, P2);
            return P2;
          };
        });
      }
      function Xe2(n2, t, e, r, s, o, f3, c2, l2, v3) {
        var _3 = t & Mn2, m2 = t & vn2, P2 = t & ct2, I2 = t & (Dn2 | yt2), E3 = t & dr2, b3 = P2 ? i2 : ce2(n2);
        function y3() {
          for (var H2 = arguments.length, $2 = p3(H2), dn2 = H2; dn2--; )
            $2[dn2] = arguments[dn2];
          if (I2)
            var sn2 = qt2(y3), gn2 = of($2, sn2);
          if (r && ($2 = du($2, r, s, I2)), o && ($2 = gu($2, o, f3, I2)), H2 -= gn2, I2 && H2 < v3) {
            var J2 = tt2($2, sn2);
            return Iu(n2, t, Xe2, y3.placeholder, e, $2, J2, c2, l2, v3 - H2);
          }
          var Tn = m2 ? e : this, Qn2 = P2 ? Tn[n2] : n2;
          return H2 = $2.length, c2 ? $2 = vh($2, c2) : E3 && H2 > 1 && $2.reverse(), _3 && l2 < H2 && ($2.length = l2), this && this !== k2 && this instanceof y3 && (Qn2 = b3 || ce2(Qn2)), Qn2.apply(Tn, $2);
        }
        return y3;
      }
      function Au(n2, t) {
        return function(e, r) {
          return xc(e, n2, t(r), {});
        };
      }
      function Qe2(n2, t) {
        return function(e, r) {
          var s;
          if (e === i2 && r === i2)
            return t;
          if (e !== i2 && (s = e), r !== i2) {
            if (s === i2)
              return r;
            typeof e == "string" || typeof r == "string" ? (e = ln2(e), r = ln2(r)) : (e = uu(e), r = uu(r)), s = n2(e, r);
          }
          return s;
        };
      }
      function ci(n2) {
        return Yn(function(t) {
          return t = G2(t, hn2(x2())), T2(function(e) {
            var r = this;
            return n2(t, function(s) {
              return cn2(s, r, e);
            });
          });
        });
      }
      function Ve2(n2, t) {
        t = t === i2 ? " " : ln2(t);
        var e = t.length;
        if (e < 2)
          return e ? ri(t, n2) : t;
        var r = ri(t, Ue2(n2 / Dt2(t)));
        return Lt2(t) ? ut2(On(r), 0, n2).join("") : r.slice(0, n2);
      }
      function Vc(n2, t, e, r) {
        var s = t & vn2, o = ce2(n2);
        function f3() {
          for (var c2 = -1, l2 = arguments.length, v3 = -1, _3 = r.length, m2 = p3(_3 + l2), P2 = this && this !== k2 && this instanceof f3 ? o : n2; ++v3 < _3; )
            m2[v3] = r[v3];
          for (; l2--; )
            m2[v3++] = arguments[++c2];
          return cn2(P2, s ? e : this, m2);
        }
        return f3;
      }
      function Cu(n2) {
        return function(t, e, r) {
          return r && typeof r != "number" && rn2(t, e, r) && (e = r = i2), t = Xn2(t), e === i2 ? (e = t, t = 0) : e = Xn2(e), r = r === i2 ? t < e ? 1 : -1 : Xn2(r), $c(t, e, r, n2);
        };
      }
      function ke2(n2) {
        return function(t, e) {
          return typeof t == "string" && typeof e == "string" || (t = xn2(t), e = xn2(e)), n2(t, e);
        };
      }
      function Iu(n2, t, e, r, s, o, f3, c2, l2, v3) {
        var _3 = t & Dn2, m2 = _3 ? f3 : i2, P2 = _3 ? i2 : f3, I2 = _3 ? o : i2, E3 = _3 ? i2 : o;
        t |= _3 ? Hn2 : St2, t &= ~(_3 ? St2 : Hn2), t & qi || (t &= ~(vn2 | ct2));
        var b3 = [n2, t, s, I2, m2, E3, P2, c2, l2, v3], y3 = e.apply(i2, b3);
        return mi(n2) && Nu(y3, b3), y3.placeholder = r, $u(y3, n2, t);
      }
      function hi(n2) {
        var t = X2[n2];
        return function(e, r) {
          if (e = xn2(e), r = r == null ? 0 : nn2(R2(r), 292), r && $s2(e)) {
            var s = (W2(e) + "e").split("e"), o = t(s[0] + "e" + (+s[1] + r));
            return s = (W2(o) + "e").split("e"), +(s[0] + "e" + (+s[1] - r));
          }
          return t(e);
        };
      }
      var kc = $t2 && 1 / Se(new $t2([, -0]))[1] == ht2 ? function(n2) {
        return new $t2(n2);
      } : Di;
      function xu(n2) {
        return function(t) {
          var e = tn2(t);
          return e == yn2 ? qr(t) : e == Sn ? gf(t) : af(t, n2(t));
        };
      }
      function Kn2(n2, t, e, r, s, o, f3, c2) {
        var l2 = t & ct2;
        if (!l2 && typeof n2 != "function")
          throw new wn(D2);
        var v3 = r ? r.length : 0;
        if (v3 || (t &= ~(Hn2 | St2), r = s = i2), f3 = f3 === i2 ? f3 : Q3(R2(f3), 0), c2 = c2 === i2 ? c2 : R2(c2), v3 -= s ? s.length : 0, t & St2) {
          var _3 = r, m2 = s;
          r = s = i2;
        }
        var P2 = l2 ? i2 : di(n2), I2 = [n2, t, e, r, s, _3, m2, o, f3, c2];
        if (P2 && ph(I2, P2), n2 = I2[0], t = I2[1], e = I2[2], r = I2[3], s = I2[4], c2 = I2[9] = I2[9] === i2 ? l2 ? 0 : n2.length : Q3(I2[9] - v3, 0), !c2 && t & (Dn2 | yt2) && (t &= ~(Dn2 | yt2)), !t || t == vn2)
          var E3 = Xc(n2, t, e);
        else
          t == Dn2 || t == yt2 ? E3 = Qc(n2, t, c2) : (t == Hn2 || t == (vn2 | Hn2)) && !s.length ? E3 = Vc(n2, t, e, r) : E3 = Xe2.apply(i2, I2);
        var b3 = P2 ? iu : Nu;
        return $u(b3(E3, I2), n2, t);
      }
      function Eu(n2, t, e, r) {
        return n2 === i2 || bn(n2, Nt2[e]) && !F2.call(r, e) ? t : n2;
      }
      function yu(n2, t, e, r, s, o) {
        return K2(n2) && K2(t) && (o.set(t, n2), Ke2(n2, t, i2, yu, o), o.delete(t)), n2;
      }
      function jc(n2) {
        return pe2(n2) ? i2 : n2;
      }
      function Su(n2, t, e, r, s, o) {
        var f3 = e & Et2, c2 = n2.length, l2 = t.length;
        if (c2 != l2 && !(f3 && l2 > c2))
          return false;
        var v3 = o.get(n2), _3 = o.get(t);
        if (v3 && _3)
          return v3 == t && _3 == n2;
        var m2 = -1, P2 = true, I2 = e & ve2 ? new gt2() : i2;
        for (o.set(n2, t), o.set(t, n2); ++m2 < c2; ) {
          var E3 = n2[m2], b3 = t[m2];
          if (r)
            var y3 = f3 ? r(b3, E3, m2, t, n2, o) : r(E3, b3, m2, n2, t, o);
          if (y3 !== i2) {
            if (y3)
              continue;
            P2 = false;
            break;
          }
          if (I2) {
            if (!Nr2(t, function(H2, $2) {
              if (!jt2(I2, $2) && (E3 === H2 || s(E3, H2, e, r, o)))
                return I2.push($2);
            })) {
              P2 = false;
              break;
            }
          } else if (!(E3 === b3 || s(E3, b3, e, r, o))) {
            P2 = false;
            break;
          }
        }
        return o.delete(n2), o.delete(t), P2;
      }
      function nh(n2, t, e, r, s, o, f3) {
        switch (e) {
          case Rt2:
            if (n2.byteLength != t.byteLength || n2.byteOffset != t.byteOffset)
              return false;
            n2 = n2.buffer, t = t.buffer;
          case kt2:
            return !(n2.byteLength != t.byteLength || !o(new De2(n2), new De2(t)));
          case Yt2:
          case Zt2:
          case Jt2:
            return bn(+n2, +t);
          case we:
            return n2.name == t.name && n2.message == t.message;
          case Xt2:
          case Qt2:
            return n2 == t + "";
          case yn2:
            var c2 = qr;
          case Sn:
            var l2 = r & Et2;
            if (c2 || (c2 = Se), n2.size != t.size && !l2)
              return false;
            var v3 = f3.get(n2);
            if (v3)
              return v3 == t;
            r |= ve2, f3.set(n2, t);
            var _3 = Su(c2(n2), c2(t), r, s, o, f3);
            return f3.delete(n2), _3;
          case Ae2:
            if (ie2)
              return ie2.call(n2) == ie2.call(t);
        }
        return false;
      }
      function th(n2, t, e, r, s, o) {
        var f3 = e & Et2, c2 = li(n2), l2 = c2.length, v3 = li(t), _3 = v3.length;
        if (l2 != _3 && !f3)
          return false;
        for (var m2 = l2; m2--; ) {
          var P2 = c2[m2];
          if (!(f3 ? P2 in t : F2.call(t, P2)))
            return false;
        }
        var I2 = o.get(n2), E3 = o.get(t);
        if (I2 && E3)
          return I2 == t && E3 == n2;
        var b3 = true;
        o.set(n2, t), o.set(t, n2);
        for (var y3 = f3; ++m2 < l2; ) {
          P2 = c2[m2];
          var H2 = n2[P2], $2 = t[P2];
          if (r)
            var dn2 = f3 ? r($2, H2, P2, t, n2, o) : r(H2, $2, P2, n2, t, o);
          if (!(dn2 === i2 ? H2 === $2 || s(H2, $2, e, r, o) : dn2)) {
            b3 = false;
            break;
          }
          y3 || (y3 = P2 == "constructor");
        }
        if (b3 && !y3) {
          var sn2 = n2.constructor, gn2 = t.constructor;
          sn2 != gn2 && "constructor" in n2 && "constructor" in t && !(typeof sn2 == "function" && sn2 instanceof sn2 && typeof gn2 == "function" && gn2 instanceof gn2) && (b3 = false);
        }
        return o.delete(n2), o.delete(t), b3;
      }
      function Yn(n2) {
        return Pi(Du(n2, i2, Bu), n2 + "");
      }
      function li(n2) {
        return Zs2(n2, V2, vi);
      }
      function pi(n2) {
        return Zs2(n2, on2, Ou);
      }
      var di = Fe2 ? function(n2) {
        return Fe2.get(n2);
      } : Di;
      function je2(n2) {
        for (var t = n2.name + "", e = Ut2[t], r = F2.call(Ut2, t) ? e.length : 0; r--; ) {
          var s = e[r], o = s.func;
          if (o == null || o == n2)
            return s.name;
        }
        return t;
      }
      function qt2(n2) {
        var t = F2.call(a3, "placeholder") ? a3 : n2;
        return t.placeholder;
      }
      function x2() {
        var n2 = a3.iteratee || Ti;
        return n2 = n2 === Ti ? Qs2 : n2, arguments.length ? n2(arguments[0], arguments[1]) : n2;
      }
      function nr2(n2, t) {
        var e = n2.__data__;
        return fh(t) ? e[typeof t == "string" ? "string" : "hash"] : e.map;
      }
      function gi(n2) {
        for (var t = V2(n2), e = t.length; e--; ) {
          var r = t[e], s = n2[r];
          t[e] = [r, s, Tu(s)];
        }
        return t;
      }
      function mt2(n2, t) {
        var e = lf(n2, t);
        return Xs2(e) ? e : i2;
      }
      function eh(n2) {
        var t = F2.call(n2, pt2), e = n2[pt2];
        try {
          n2[pt2] = i2;
          var r = true;
        } catch {
        }
        var s = Te2.call(n2);
        return r && (t ? n2[pt2] = e : delete n2[pt2]), s;
      }
      var vi = Gr ? function(n2) {
        return n2 == null ? [] : (n2 = M2(n2), jn(Gr(n2), function(t) {
          return Hs2.call(n2, t);
        }));
      } : Hi2, Ou = Gr ? function(n2) {
        for (var t = []; n2; )
          nt2(t, vi(n2)), n2 = He2(n2);
        return t;
      } : Hi2, tn2 = en2;
      (zr2 && tn2(new zr2(new ArrayBuffer(1))) != Rt2 || te2 && tn2(new te2()) != yn2 || Kr && tn2(Kr.resolve()) != zi || $t2 && tn2(new $t2()) != Sn || ee2 && tn2(new ee2()) != Vt2) && (tn2 = function(n2) {
        var t = en2(n2), e = t == qn2 ? n2.constructor : i2, r = e ? wt2(e) : "";
        if (r)
          switch (r) {
            case Wf:
              return Rt2;
            case Ff:
              return yn2;
            case Mf:
              return zi;
            case qf:
              return Sn;
            case Bf:
              return Vt2;
          }
        return t;
      });
      function rh(n2, t, e) {
        for (var r = -1, s = e.length; ++r < s; ) {
          var o = e[r], f3 = o.size;
          switch (o.type) {
            case "drop":
              n2 += f3;
              break;
            case "dropRight":
              t -= f3;
              break;
            case "take":
              t = nn2(t, n2 + f3);
              break;
            case "takeRight":
              n2 = Q3(n2, t - f3);
              break;
          }
        }
        return { start: n2, end: t };
      }
      function ih(n2) {
        var t = n2.match(oo);
        return t ? t[1].split(fo) : [];
      }
      function Ru(n2, t, e) {
        t = st2(t, n2);
        for (var r = -1, s = t.length, o = false; ++r < s; ) {
          var f3 = Wn2(t[r]);
          if (!(o = n2 != null && e(n2, f3)))
            break;
          n2 = n2[f3];
        }
        return o || ++r != s ? o : (s = n2 == null ? 0 : n2.length, !!s && ar2(s) && Zn(f3, s) && (O2(n2) || Pt2(n2)));
      }
      function sh(n2) {
        var t = n2.length, e = new n2.constructor(t);
        return t && typeof n2[0] == "string" && F2.call(n2, "index") && (e.index = n2.index, e.input = n2.input), e;
      }
      function bu(n2) {
        return typeof n2.constructor == "function" && !he2(n2) ? Wt2(He2(n2)) : {};
      }
      function uh(n2, t, e) {
        var r = n2.constructor;
        switch (t) {
          case kt2:
            return fi(n2);
          case Yt2:
          case Zt2:
            return new r(+n2);
          case Rt2:
            return Gc(n2, e);
          case gr2:
          case vr2:
          case _r2:
          case mr2:
          case wr:
          case Pr2:
          case Ar2:
          case Cr2:
          case Ir2:
            return lu(n2, e);
          case yn2:
            return new r();
          case Jt2:
          case Qt2:
            return new r(n2);
          case Xt2:
            return zc(n2);
          case Sn:
            return new r();
          case Ae2:
            return Kc(n2);
        }
      }
      function ah(n2, t) {
        var e = t.length;
        if (!e)
          return n2;
        var r = e - 1;
        return t[r] = (e > 1 ? "& " : "") + t[r], t = t.join(e > 2 ? ", " : " "), n2.replace(ao, `{
/* [wrapped with ` + t + `] */
`);
      }
      function oh(n2) {
        return O2(n2) || Pt2(n2) || !!(Ns2 && n2 && n2[Ns2]);
      }
      function Zn(n2, t) {
        var e = typeof n2;
        return t = t ?? kn2, !!t && (e == "number" || e != "symbol" && wo.test(n2)) && n2 > -1 && n2 % 1 == 0 && n2 < t;
      }
      function rn2(n2, t, e) {
        if (!K2(e))
          return false;
        var r = typeof t;
        return (r == "number" ? an2(e) && Zn(t, e.length) : r == "string" && t in e) ? bn(e[t], n2) : false;
      }
      function _i(n2, t) {
        if (O2(n2))
          return false;
        var e = typeof n2;
        return e == "number" || e == "symbol" || e == "boolean" || n2 == null || pn2(n2) ? true : ro.test(n2) || !eo.test(n2) || t != null && n2 in M2(t);
      }
      function fh(n2) {
        var t = typeof n2;
        return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? n2 !== "__proto__" : n2 === null;
      }
      function mi(n2) {
        var t = je2(n2), e = a3[t];
        if (typeof e != "function" || !(t in N2.prototype))
          return false;
        if (n2 === e)
          return true;
        var r = di(e);
        return !!r && n2 === r[0];
      }
      function ch(n2) {
        return !!Ts2 && Ts2 in n2;
      }
      var hh = Re2 ? Jn2 : Ni;
      function he2(n2) {
        var t = n2 && n2.constructor, e = typeof t == "function" && t.prototype || Nt2;
        return n2 === e;
      }
      function Tu(n2) {
        return n2 === n2 && !K2(n2);
      }
      function Lu(n2, t) {
        return function(e) {
          return e == null ? false : e[n2] === t && (t !== i2 || n2 in M2(e));
        };
      }
      function lh(n2) {
        var t = sr3(n2, function(r) {
          return e.size === pr2 && e.clear(), r;
        }), e = t.cache;
        return t;
      }
      function ph(n2, t) {
        var e = n2[1], r = t[1], s = e | r, o = s < (vn2 | ct2 | Mn2), f3 = r == Mn2 && e == Dn2 || r == Mn2 && e == Kt2 && n2[7].length <= t[8] || r == (Mn2 | Kt2) && t[7].length <= t[8] && e == Dn2;
        if (!(o || f3))
          return n2;
        r & vn2 && (n2[2] = t[2], s |= e & vn2 ? 0 : qi);
        var c2 = t[3];
        if (c2) {
          var l2 = n2[3];
          n2[3] = l2 ? du(l2, c2, t[4]) : c2, n2[4] = l2 ? tt2(n2[3], It2) : t[4];
        }
        return c2 = t[5], c2 && (l2 = n2[5], n2[5] = l2 ? gu(l2, c2, t[6]) : c2, n2[6] = l2 ? tt2(n2[5], It2) : t[6]), c2 = t[7], c2 && (n2[7] = c2), r & Mn2 && (n2[8] = n2[8] == null ? t[8] : nn2(n2[8], t[8])), n2[9] == null && (n2[9] = t[9]), n2[0] = t[0], n2[1] = s, n2;
      }
      function dh(n2) {
        var t = [];
        if (n2 != null)
          for (var e in M2(n2))
            t.push(e);
        return t;
      }
      function gh(n2) {
        return Te2.call(n2);
      }
      function Du(n2, t, e) {
        return t = Q3(t === i2 ? n2.length - 1 : t, 0), function() {
          for (var r = arguments, s = -1, o = Q3(r.length - t, 0), f3 = p3(o); ++s < o; )
            f3[s] = r[t + s];
          s = -1;
          for (var c2 = p3(t + 1); ++s < t; )
            c2[s] = r[s];
          return c2[t] = e(f3), cn2(n2, this, c2);
        };
      }
      function Hu(n2, t) {
        return t.length < 2 ? n2 : _t2(n2, Cn(t, 0, -1));
      }
      function vh(n2, t) {
        for (var e = n2.length, r = nn2(t.length, e), s = un2(n2); r--; ) {
          var o = t[r];
          n2[r] = Zn(o, e) ? s[o] : i2;
        }
        return n2;
      }
      function wi(n2, t) {
        if (!(t === "constructor" && typeof n2[t] == "function") && t != "__proto__")
          return n2[t];
      }
      var Nu = Uu(iu), le2 = Tf || function(n2, t) {
        return k2.setTimeout(n2, t);
      }, Pi = Uu(Fc);
      function $u(n2, t, e) {
        var r = t + "";
        return Pi(n2, ah(r, _h(ih(r), e)));
      }
      function Uu(n2) {
        var t = 0, e = 0;
        return function() {
          var r = Nf(), s = $a - (r - e);
          if (e = r, s > 0) {
            if (++t >= Na)
              return arguments[0];
          } else
            t = 0;
          return n2.apply(i2, arguments);
        };
      }
      function tr2(n2, t) {
        var e = -1, r = n2.length, s = r - 1;
        for (t = t === i2 ? r : t; ++e < t; ) {
          var o = ei(e, s), f3 = n2[o];
          n2[o] = n2[e], n2[e] = f3;
        }
        return n2.length = t, n2;
      }
      var Wu = lh(function(n2) {
        var t = [];
        return n2.charCodeAt(0) === 46 && t.push(""), n2.replace(io, function(e, r, s, o) {
          t.push(s ? o.replace(lo, "$1") : r || e);
        }), t;
      });
      function Wn2(n2) {
        if (typeof n2 == "string" || pn2(n2))
          return n2;
        var t = n2 + "";
        return t == "0" && 1 / n2 == -ht2 ? "-0" : t;
      }
      function wt2(n2) {
        if (n2 != null) {
          try {
            return be.call(n2);
          } catch {
          }
          try {
            return n2 + "";
          } catch {
          }
        }
        return "";
      }
      function _h(n2, t) {
        return mn2(Ba, function(e) {
          var r = "_." + e[0];
          t & e[1] && !Ee(n2, r) && n2.push(r);
        }), n2.sort();
      }
      function Fu(n2) {
        if (n2 instanceof N2)
          return n2.clone();
        var t = new Pn(n2.__wrapped__, n2.__chain__);
        return t.__actions__ = un2(n2.__actions__), t.__index__ = n2.__index__, t.__values__ = n2.__values__, t;
      }
      function mh(n2, t, e) {
        (e ? rn2(n2, t, e) : t === i2) ? t = 1 : t = Q3(R2(t), 0);
        var r = n2 == null ? 0 : n2.length;
        if (!r || t < 1)
          return [];
        for (var s = 0, o = 0, f3 = p3(Ue2(r / t)); s < r; )
          f3[o++] = Cn(n2, s, s += t);
        return f3;
      }
      function wh(n2) {
        for (var t = -1, e = n2 == null ? 0 : n2.length, r = 0, s = []; ++t < e; ) {
          var o = n2[t];
          o && (s[r++] = o);
        }
        return s;
      }
      function Ph() {
        var n2 = arguments.length;
        if (!n2)
          return [];
        for (var t = p3(n2 - 1), e = arguments[0], r = n2; r--; )
          t[r - 1] = arguments[r];
        return nt2(O2(e) ? un2(e) : [e], j2(t, 1));
      }
      var Ah = T2(function(n2, t) {
        return Z2(n2) ? ue2(n2, j2(t, 1, Z2, true)) : [];
      }), Ch = T2(function(n2, t) {
        var e = In(t);
        return Z2(e) && (e = i2), Z2(n2) ? ue2(n2, j2(t, 1, Z2, true), x2(e, 2)) : [];
      }), Ih = T2(function(n2, t) {
        var e = In(t);
        return Z2(e) && (e = i2), Z2(n2) ? ue2(n2, j2(t, 1, Z2, true), i2, e) : [];
      });
      function xh(n2, t, e) {
        var r = n2 == null ? 0 : n2.length;
        return r ? (t = e || t === i2 ? 1 : R2(t), Cn(n2, t < 0 ? 0 : t, r)) : [];
      }
      function Eh(n2, t, e) {
        var r = n2 == null ? 0 : n2.length;
        return r ? (t = e || t === i2 ? 1 : R2(t), t = r - t, Cn(n2, 0, t < 0 ? 0 : t)) : [];
      }
      function yh(n2, t) {
        return n2 && n2.length ? Ze2(n2, x2(t, 3), true, true) : [];
      }
      function Sh(n2, t) {
        return n2 && n2.length ? Ze2(n2, x2(t, 3), true) : [];
      }
      function Oh(n2, t, e, r) {
        var s = n2 == null ? 0 : n2.length;
        return s ? (e && typeof e != "number" && rn2(n2, t, e) && (e = 0, r = s), Pc(n2, t, e, r)) : [];
      }
      function Mu(n2, t, e) {
        var r = n2 == null ? 0 : n2.length;
        if (!r)
          return -1;
        var s = e == null ? 0 : R2(e);
        return s < 0 && (s = Q3(r + s, 0)), ye(n2, x2(t, 3), s);
      }
      function qu(n2, t, e) {
        var r = n2 == null ? 0 : n2.length;
        if (!r)
          return -1;
        var s = r - 1;
        return e !== i2 && (s = R2(e), s = e < 0 ? Q3(r + s, 0) : nn2(s, r - 1)), ye(n2, x2(t, 3), s, true);
      }
      function Bu(n2) {
        var t = n2 == null ? 0 : n2.length;
        return t ? j2(n2, 1) : [];
      }
      function Rh(n2) {
        var t = n2 == null ? 0 : n2.length;
        return t ? j2(n2, ht2) : [];
      }
      function bh(n2, t) {
        var e = n2 == null ? 0 : n2.length;
        return e ? (t = t === i2 ? 1 : R2(t), j2(n2, t)) : [];
      }
      function Th(n2) {
        for (var t = -1, e = n2 == null ? 0 : n2.length, r = {}; ++t < e; ) {
          var s = n2[t];
          r[s[0]] = s[1];
        }
        return r;
      }
      function Gu(n2) {
        return n2 && n2.length ? n2[0] : i2;
      }
      function Lh(n2, t, e) {
        var r = n2 == null ? 0 : n2.length;
        if (!r)
          return -1;
        var s = e == null ? 0 : R2(e);
        return s < 0 && (s = Q3(r + s, 0)), Tt2(n2, t, s);
      }
      function Dh(n2) {
        var t = n2 == null ? 0 : n2.length;
        return t ? Cn(n2, 0, -1) : [];
      }
      var Hh = T2(function(n2) {
        var t = G2(n2, ai);
        return t.length && t[0] === n2[0] ? Vr(t) : [];
      }), Nh = T2(function(n2) {
        var t = In(n2), e = G2(n2, ai);
        return t === In(e) ? t = i2 : e.pop(), e.length && e[0] === n2[0] ? Vr(e, x2(t, 2)) : [];
      }), $h = T2(function(n2) {
        var t = In(n2), e = G2(n2, ai);
        return t = typeof t == "function" ? t : i2, t && e.pop(), e.length && e[0] === n2[0] ? Vr(e, i2, t) : [];
      });
      function Uh(n2, t) {
        return n2 == null ? "" : Df.call(n2, t);
      }
      function In(n2) {
        var t = n2 == null ? 0 : n2.length;
        return t ? n2[t - 1] : i2;
      }
      function Wh(n2, t, e) {
        var r = n2 == null ? 0 : n2.length;
        if (!r)
          return -1;
        var s = r;
        return e !== i2 && (s = R2(e), s = s < 0 ? Q3(r + s, 0) : nn2(s, r - 1)), t === t ? _f(n2, t, s) : ye(n2, Is2, s, true);
      }
      function Fh(n2, t) {
        return n2 && n2.length ? nu(n2, R2(t)) : i2;
      }
      var Mh = T2(zu);
      function zu(n2, t) {
        return n2 && n2.length && t && t.length ? ti(n2, t) : n2;
      }
      function qh(n2, t, e) {
        return n2 && n2.length && t && t.length ? ti(n2, t, x2(e, 2)) : n2;
      }
      function Bh(n2, t, e) {
        return n2 && n2.length && t && t.length ? ti(n2, t, i2, e) : n2;
      }
      var Gh = Yn(function(n2, t) {
        var e = n2 == null ? 0 : n2.length, r = Zr(n2, t);
        return ru(n2, G2(t, function(s) {
          return Zn(s, e) ? +s : s;
        }).sort(pu)), r;
      });
      function zh(n2, t) {
        var e = [];
        if (!(n2 && n2.length))
          return e;
        var r = -1, s = [], o = n2.length;
        for (t = x2(t, 3); ++r < o; ) {
          var f3 = n2[r];
          t(f3, r, n2) && (e.push(f3), s.push(r));
        }
        return ru(n2, s), e;
      }
      function Ai(n2) {
        return n2 == null ? n2 : Uf.call(n2);
      }
      function Kh(n2, t, e) {
        var r = n2 == null ? 0 : n2.length;
        return r ? (e && typeof e != "number" && rn2(n2, t, e) ? (t = 0, e = r) : (t = t == null ? 0 : R2(t), e = e === i2 ? r : R2(e)), Cn(n2, t, e)) : [];
      }
      function Yh(n2, t) {
        return Ye2(n2, t);
      }
      function Zh(n2, t, e) {
        return ii(n2, t, x2(e, 2));
      }
      function Jh(n2, t) {
        var e = n2 == null ? 0 : n2.length;
        if (e) {
          var r = Ye2(n2, t);
          if (r < e && bn(n2[r], t))
            return r;
        }
        return -1;
      }
      function Xh(n2, t) {
        return Ye2(n2, t, true);
      }
      function Qh(n2, t, e) {
        return ii(n2, t, x2(e, 2), true);
      }
      function Vh(n2, t) {
        var e = n2 == null ? 0 : n2.length;
        if (e) {
          var r = Ye2(n2, t, true) - 1;
          if (bn(n2[r], t))
            return r;
        }
        return -1;
      }
      function kh(n2) {
        return n2 && n2.length ? su(n2) : [];
      }
      function jh(n2, t) {
        return n2 && n2.length ? su(n2, x2(t, 2)) : [];
      }
      function nl(n2) {
        var t = n2 == null ? 0 : n2.length;
        return t ? Cn(n2, 1, t) : [];
      }
      function tl(n2, t, e) {
        return n2 && n2.length ? (t = e || t === i2 ? 1 : R2(t), Cn(n2, 0, t < 0 ? 0 : t)) : [];
      }
      function el(n2, t, e) {
        var r = n2 == null ? 0 : n2.length;
        return r ? (t = e || t === i2 ? 1 : R2(t), t = r - t, Cn(n2, t < 0 ? 0 : t, r)) : [];
      }
      function rl(n2, t) {
        return n2 && n2.length ? Ze2(n2, x2(t, 3), false, true) : [];
      }
      function il(n2, t) {
        return n2 && n2.length ? Ze2(n2, x2(t, 3)) : [];
      }
      var sl = T2(function(n2) {
        return it2(j2(n2, 1, Z2, true));
      }), ul = T2(function(n2) {
        var t = In(n2);
        return Z2(t) && (t = i2), it2(j2(n2, 1, Z2, true), x2(t, 2));
      }), al = T2(function(n2) {
        var t = In(n2);
        return t = typeof t == "function" ? t : i2, it2(j2(n2, 1, Z2, true), i2, t);
      });
      function ol(n2) {
        return n2 && n2.length ? it2(n2) : [];
      }
      function fl(n2, t) {
        return n2 && n2.length ? it2(n2, x2(t, 2)) : [];
      }
      function cl(n2, t) {
        return t = typeof t == "function" ? t : i2, n2 && n2.length ? it2(n2, i2, t) : [];
      }
      function Ci(n2) {
        if (!(n2 && n2.length))
          return [];
        var t = 0;
        return n2 = jn(n2, function(e) {
          if (Z2(e))
            return t = Q3(e.length, t), true;
        }), Fr2(t, function(e) {
          return G2(n2, $r2(e));
        });
      }
      function Ku(n2, t) {
        if (!(n2 && n2.length))
          return [];
        var e = Ci(n2);
        return t == null ? e : G2(e, function(r) {
          return cn2(t, i2, r);
        });
      }
      var hl = T2(function(n2, t) {
        return Z2(n2) ? ue2(n2, t) : [];
      }), ll = T2(function(n2) {
        return ui(jn(n2, Z2));
      }), pl = T2(function(n2) {
        var t = In(n2);
        return Z2(t) && (t = i2), ui(jn(n2, Z2), x2(t, 2));
      }), dl = T2(function(n2) {
        var t = In(n2);
        return t = typeof t == "function" ? t : i2, ui(jn(n2, Z2), i2, t);
      }), gl = T2(Ci);
      function vl(n2, t) {
        return fu(n2 || [], t || [], se);
      }
      function _l(n2, t) {
        return fu(n2 || [], t || [], fe);
      }
      var ml = T2(function(n2) {
        var t = n2.length, e = t > 1 ? n2[t - 1] : i2;
        return e = typeof e == "function" ? (n2.pop(), e) : i2, Ku(n2, e);
      });
      function Yu(n2) {
        var t = a3(n2);
        return t.__chain__ = true, t;
      }
      function wl(n2, t) {
        return t(n2), n2;
      }
      function er2(n2, t) {
        return t(n2);
      }
      var Pl = Yn(function(n2) {
        var t = n2.length, e = t ? n2[0] : 0, r = this.__wrapped__, s = function(o) {
          return Zr(o, n2);
        };
        return t > 1 || this.__actions__.length || !(r instanceof N2) || !Zn(e) ? this.thru(s) : (r = r.slice(e, +e + (t ? 1 : 0)), r.__actions__.push({ func: er2, args: [s], thisArg: i2 }), new Pn(r, this.__chain__).thru(function(o) {
          return t && !o.length && o.push(i2), o;
        }));
      });
      function Al() {
        return Yu(this);
      }
      function Cl() {
        return new Pn(this.value(), this.__chain__);
      }
      function Il() {
        this.__values__ === i2 && (this.__values__ = ua(this.value()));
        var n2 = this.__index__ >= this.__values__.length, t = n2 ? i2 : this.__values__[this.__index__++];
        return { done: n2, value: t };
      }
      function xl() {
        return this;
      }
      function El(n2) {
        for (var t, e = this; e instanceof qe2; ) {
          var r = Fu(e);
          r.__index__ = 0, r.__values__ = i2, t ? s.__wrapped__ = r : t = r;
          var s = r;
          e = e.__wrapped__;
        }
        return s.__wrapped__ = n2, t;
      }
      function yl() {
        var n2 = this.__wrapped__;
        if (n2 instanceof N2) {
          var t = n2;
          return this.__actions__.length && (t = new N2(this)), t = t.reverse(), t.__actions__.push({ func: er2, args: [Ai], thisArg: i2 }), new Pn(t, this.__chain__);
        }
        return this.thru(Ai);
      }
      function Sl() {
        return ou(this.__wrapped__, this.__actions__);
      }
      var Ol = Je2(function(n2, t, e) {
        F2.call(n2, e) ? ++n2[e] : zn(n2, e, 1);
      });
      function Rl(n2, t, e) {
        var r = O2(n2) ? As2 : wc;
        return e && rn2(n2, t, e) && (t = i2), r(n2, x2(t, 3));
      }
      function bl(n2, t) {
        var e = O2(n2) ? jn : Ks2;
        return e(n2, x2(t, 3));
      }
      var Tl = wu(Mu), Ll = wu(qu);
      function Dl(n2, t) {
        return j2(rr2(n2, t), 1);
      }
      function Hl(n2, t) {
        return j2(rr2(n2, t), ht2);
      }
      function Nl(n2, t, e) {
        return e = e === i2 ? 1 : R2(e), j2(rr2(n2, t), e);
      }
      function Zu(n2, t) {
        var e = O2(n2) ? mn2 : rt2;
        return e(n2, x2(t, 3));
      }
      function Ju(n2, t) {
        var e = O2(n2) ? jo : zs2;
        return e(n2, x2(t, 3));
      }
      var $l = Je2(function(n2, t, e) {
        F2.call(n2, e) ? n2[e].push(t) : zn(n2, e, [t]);
      });
      function Ul(n2, t, e, r) {
        n2 = an2(n2) ? n2 : Gt2(n2), e = e && !r ? R2(e) : 0;
        var s = n2.length;
        return e < 0 && (e = Q3(s + e, 0)), or2(n2) ? e <= s && n2.indexOf(t, e) > -1 : !!s && Tt2(n2, t, e) > -1;
      }
      var Wl = T2(function(n2, t, e) {
        var r = -1, s = typeof t == "function", o = an2(n2) ? p3(n2.length) : [];
        return rt2(n2, function(f3) {
          o[++r] = s ? cn2(t, f3, e) : ae2(f3, t, e);
        }), o;
      }), Fl = Je2(function(n2, t, e) {
        zn(n2, e, t);
      });
      function rr2(n2, t) {
        var e = O2(n2) ? G2 : Vs2;
        return e(n2, x2(t, 3));
      }
      function Ml(n2, t, e, r) {
        return n2 == null ? [] : (O2(t) || (t = t == null ? [] : [t]), e = r ? i2 : e, O2(e) || (e = e == null ? [] : [e]), tu(n2, t, e));
      }
      var ql = Je2(function(n2, t, e) {
        n2[e ? 0 : 1].push(t);
      }, function() {
        return [[], []];
      });
      function Bl(n2, t, e) {
        var r = O2(n2) ? Hr : Es2, s = arguments.length < 3;
        return r(n2, x2(t, 4), e, s, rt2);
      }
      function Gl(n2, t, e) {
        var r = O2(n2) ? nf : Es2, s = arguments.length < 3;
        return r(n2, x2(t, 4), e, s, zs2);
      }
      function zl(n2, t) {
        var e = O2(n2) ? jn : Ks2;
        return e(n2, ur2(x2(t, 3)));
      }
      function Kl(n2) {
        var t = O2(n2) ? Ms2 : Uc;
        return t(n2);
      }
      function Yl(n2, t, e) {
        (e ? rn2(n2, t, e) : t === i2) ? t = 1 : t = R2(t);
        var r = O2(n2) ? dc : Wc;
        return r(n2, t);
      }
      function Zl(n2) {
        var t = O2(n2) ? gc : Mc;
        return t(n2);
      }
      function Jl(n2) {
        if (n2 == null)
          return 0;
        if (an2(n2))
          return or2(n2) ? Dt2(n2) : n2.length;
        var t = tn2(n2);
        return t == yn2 || t == Sn ? n2.size : jr(n2).length;
      }
      function Xl(n2, t, e) {
        var r = O2(n2) ? Nr2 : qc;
        return e && rn2(n2, t, e) && (t = i2), r(n2, x2(t, 3));
      }
      var Ql = T2(function(n2, t) {
        if (n2 == null)
          return [];
        var e = t.length;
        return e > 1 && rn2(n2, t[0], t[1]) ? t = [] : e > 2 && rn2(t[0], t[1], t[2]) && (t = [t[0]]), tu(n2, j2(t, 1), []);
      }), ir2 = bf || function() {
        return k2.Date.now();
      };
      function Vl(n2, t) {
        if (typeof t != "function")
          throw new wn(D2);
        return n2 = R2(n2), function() {
          if (--n2 < 1)
            return t.apply(this, arguments);
        };
      }
      function Xu(n2, t, e) {
        return t = e ? i2 : t, t = n2 && t == null ? n2.length : t, Kn2(n2, Mn2, i2, i2, i2, i2, t);
      }
      function Qu(n2, t) {
        var e;
        if (typeof t != "function")
          throw new wn(D2);
        return n2 = R2(n2), function() {
          return --n2 > 0 && (e = t.apply(this, arguments)), n2 <= 1 && (t = i2), e;
        };
      }
      var Ii = T2(function(n2, t, e) {
        var r = vn2;
        if (e.length) {
          var s = tt2(e, qt2(Ii));
          r |= Hn2;
        }
        return Kn2(n2, r, t, e, s);
      }), Vu = T2(function(n2, t, e) {
        var r = vn2 | ct2;
        if (e.length) {
          var s = tt2(e, qt2(Vu));
          r |= Hn2;
        }
        return Kn2(t, r, n2, e, s);
      });
      function ku(n2, t, e) {
        t = e ? i2 : t;
        var r = Kn2(n2, Dn2, i2, i2, i2, i2, i2, t);
        return r.placeholder = ku.placeholder, r;
      }
      function ju(n2, t, e) {
        t = e ? i2 : t;
        var r = Kn2(n2, yt2, i2, i2, i2, i2, i2, t);
        return r.placeholder = ju.placeholder, r;
      }
      function na(n2, t, e) {
        var r, s, o, f3, c2, l2, v3 = 0, _3 = false, m2 = false, P2 = true;
        if (typeof n2 != "function")
          throw new wn(D2);
        t = xn2(t) || 0, K2(e) && (_3 = !!e.leading, m2 = "maxWait" in e, o = m2 ? Q3(xn2(e.maxWait) || 0, t) : o, P2 = "trailing" in e ? !!e.trailing : P2);
        function I2(J2) {
          var Tn = r, Qn2 = s;
          return r = s = i2, v3 = J2, f3 = n2.apply(Qn2, Tn), f3;
        }
        function E3(J2) {
          return v3 = J2, c2 = le2(H2, t), _3 ? I2(J2) : f3;
        }
        function b3(J2) {
          var Tn = J2 - l2, Qn2 = J2 - v3, wa = t - Tn;
          return m2 ? nn2(wa, o - Qn2) : wa;
        }
        function y3(J2) {
          var Tn = J2 - l2, Qn2 = J2 - v3;
          return l2 === i2 || Tn >= t || Tn < 0 || m2 && Qn2 >= o;
        }
        function H2() {
          var J2 = ir2();
          if (y3(J2))
            return $2(J2);
          c2 = le2(H2, b3(J2));
        }
        function $2(J2) {
          return c2 = i2, P2 && r ? I2(J2) : (r = s = i2, f3);
        }
        function dn2() {
          c2 !== i2 && cu(c2), v3 = 0, r = l2 = s = c2 = i2;
        }
        function sn2() {
          return c2 === i2 ? f3 : $2(ir2());
        }
        function gn2() {
          var J2 = ir2(), Tn = y3(J2);
          if (r = arguments, s = this, l2 = J2, Tn) {
            if (c2 === i2)
              return E3(l2);
            if (m2)
              return cu(c2), c2 = le2(H2, t), I2(l2);
          }
          return c2 === i2 && (c2 = le2(H2, t)), f3;
        }
        return gn2.cancel = dn2, gn2.flush = sn2, gn2;
      }
      var kl = T2(function(n2, t) {
        return Gs2(n2, 1, t);
      }), jl = T2(function(n2, t, e) {
        return Gs2(n2, xn2(t) || 0, e);
      });
      function np(n2) {
        return Kn2(n2, dr2);
      }
      function sr3(n2, t) {
        if (typeof n2 != "function" || t != null && typeof t != "function")
          throw new wn(D2);
        var e = function() {
          var r = arguments, s = t ? t.apply(this, r) : r[0], o = e.cache;
          if (o.has(s))
            return o.get(s);
          var f3 = n2.apply(this, r);
          return e.cache = o.set(s, f3) || o, f3;
        };
        return e.cache = new (sr3.Cache || Gn2)(), e;
      }
      sr3.Cache = Gn2;
      function ur2(n2) {
        if (typeof n2 != "function")
          throw new wn(D2);
        return function() {
          var t = arguments;
          switch (t.length) {
            case 0:
              return !n2.call(this);
            case 1:
              return !n2.call(this, t[0]);
            case 2:
              return !n2.call(this, t[0], t[1]);
            case 3:
              return !n2.call(this, t[0], t[1], t[2]);
          }
          return !n2.apply(this, t);
        };
      }
      function tp(n2) {
        return Qu(2, n2);
      }
      var ep = Bc(function(n2, t) {
        t = t.length == 1 && O2(t[0]) ? G2(t[0], hn2(x2())) : G2(j2(t, 1), hn2(x2()));
        var e = t.length;
        return T2(function(r) {
          for (var s = -1, o = nn2(r.length, e); ++s < o; )
            r[s] = t[s].call(this, r[s]);
          return cn2(n2, this, r);
        });
      }), xi = T2(function(n2, t) {
        var e = tt2(t, qt2(xi));
        return Kn2(n2, Hn2, i2, t, e);
      }), ta = T2(function(n2, t) {
        var e = tt2(t, qt2(ta));
        return Kn2(n2, St2, i2, t, e);
      }), rp = Yn(function(n2, t) {
        return Kn2(n2, Kt2, i2, i2, i2, t);
      });
      function ip(n2, t) {
        if (typeof n2 != "function")
          throw new wn(D2);
        return t = t === i2 ? t : R2(t), T2(n2, t);
      }
      function sp(n2, t) {
        if (typeof n2 != "function")
          throw new wn(D2);
        return t = t == null ? 0 : Q3(R2(t), 0), T2(function(e) {
          var r = e[t], s = ut2(e, 0, t);
          return r && nt2(s, r), cn2(n2, this, s);
        });
      }
      function up(n2, t, e) {
        var r = true, s = true;
        if (typeof n2 != "function")
          throw new wn(D2);
        return K2(e) && (r = "leading" in e ? !!e.leading : r, s = "trailing" in e ? !!e.trailing : s), na(n2, t, { leading: r, maxWait: t, trailing: s });
      }
      function ap(n2) {
        return Xu(n2, 1);
      }
      function op(n2, t) {
        return xi(oi(t), n2);
      }
      function fp() {
        if (!arguments.length)
          return [];
        var n2 = arguments[0];
        return O2(n2) ? n2 : [n2];
      }
      function cp(n2) {
        return An(n2, xt2);
      }
      function hp(n2, t) {
        return t = typeof t == "function" ? t : i2, An(n2, xt2, t);
      }
      function lp(n2) {
        return An(n2, Ln2 | xt2);
      }
      function pp(n2, t) {
        return t = typeof t == "function" ? t : i2, An(n2, Ln2 | xt2, t);
      }
      function dp(n2, t) {
        return t == null || Bs2(n2, t, V2(t));
      }
      function bn(n2, t) {
        return n2 === t || n2 !== n2 && t !== t;
      }
      var gp = ke2(Qr), vp = ke2(function(n2, t) {
        return n2 >= t;
      }), Pt2 = Js2(/* @__PURE__ */ function() {
        return arguments;
      }()) ? Js2 : function(n2) {
        return Y(n2) && F2.call(n2, "callee") && !Hs2.call(n2, "callee");
      }, O2 = p3.isArray, _p = gs2 ? hn2(gs2) : Ec;
      function an2(n2) {
        return n2 != null && ar2(n2.length) && !Jn2(n2);
      }
      function Z2(n2) {
        return Y(n2) && an2(n2);
      }
      function mp(n2) {
        return n2 === true || n2 === false || Y(n2) && en2(n2) == Yt2;
      }
      var at2 = Lf || Ni, wp = vs2 ? hn2(vs2) : yc;
      function Pp(n2) {
        return Y(n2) && n2.nodeType === 1 && !pe2(n2);
      }
      function Ap(n2) {
        if (n2 == null)
          return true;
        if (an2(n2) && (O2(n2) || typeof n2 == "string" || typeof n2.splice == "function" || at2(n2) || Bt2(n2) || Pt2(n2)))
          return !n2.length;
        var t = tn2(n2);
        if (t == yn2 || t == Sn)
          return !n2.size;
        if (he2(n2))
          return !jr(n2).length;
        for (var e in n2)
          if (F2.call(n2, e))
            return false;
        return true;
      }
      function Cp(n2, t) {
        return oe2(n2, t);
      }
      function Ip(n2, t, e) {
        e = typeof e == "function" ? e : i2;
        var r = e ? e(n2, t) : i2;
        return r === i2 ? oe2(n2, t, i2, e) : !!r;
      }
      function Ei(n2) {
        if (!Y(n2))
          return false;
        var t = en2(n2);
        return t == we || t == za || typeof n2.message == "string" && typeof n2.name == "string" && !pe2(n2);
      }
      function xp(n2) {
        return typeof n2 == "number" && $s2(n2);
      }
      function Jn2(n2) {
        if (!K2(n2))
          return false;
        var t = en2(n2);
        return t == Pe2 || t == Gi2 || t == Ga || t == Ya;
      }
      function ea(n2) {
        return typeof n2 == "number" && n2 == R2(n2);
      }
      function ar2(n2) {
        return typeof n2 == "number" && n2 > -1 && n2 % 1 == 0 && n2 <= kn2;
      }
      function K2(n2) {
        var t = typeof n2;
        return n2 != null && (t == "object" || t == "function");
      }
      function Y(n2) {
        return n2 != null && typeof n2 == "object";
      }
      var ra = _s2 ? hn2(_s2) : Oc;
      function Ep(n2, t) {
        return n2 === t || kr(n2, t, gi(t));
      }
      function yp(n2, t, e) {
        return e = typeof e == "function" ? e : i2, kr(n2, t, gi(t), e);
      }
      function Sp(n2) {
        return ia(n2) && n2 != +n2;
      }
      function Op(n2) {
        if (hh(n2))
          throw new S2(L2);
        return Xs2(n2);
      }
      function Rp(n2) {
        return n2 === null;
      }
      function bp(n2) {
        return n2 == null;
      }
      function ia(n2) {
        return typeof n2 == "number" || Y(n2) && en2(n2) == Jt2;
      }
      function pe2(n2) {
        if (!Y(n2) || en2(n2) != qn2)
          return false;
        var t = He2(n2);
        if (t === null)
          return true;
        var e = F2.call(t, "constructor") && t.constructor;
        return typeof e == "function" && e instanceof e && be.call(e) == yf;
      }
      var yi = ms2 ? hn2(ms2) : Rc;
      function Tp(n2) {
        return ea(n2) && n2 >= -kn2 && n2 <= kn2;
      }
      var sa = ws2 ? hn2(ws2) : bc;
      function or2(n2) {
        return typeof n2 == "string" || !O2(n2) && Y(n2) && en2(n2) == Qt2;
      }
      function pn2(n2) {
        return typeof n2 == "symbol" || Y(n2) && en2(n2) == Ae2;
      }
      var Bt2 = Ps2 ? hn2(Ps2) : Tc;
      function Lp(n2) {
        return n2 === i2;
      }
      function Dp(n2) {
        return Y(n2) && tn2(n2) == Vt2;
      }
      function Hp(n2) {
        return Y(n2) && en2(n2) == Ja;
      }
      var Np = ke2(ni), $p = ke2(function(n2, t) {
        return n2 <= t;
      });
      function ua(n2) {
        if (!n2)
          return [];
        if (an2(n2))
          return or2(n2) ? On(n2) : un2(n2);
        if (ne && n2[ne])
          return df(n2[ne]());
        var t = tn2(n2), e = t == yn2 ? qr : t == Sn ? Se : Gt2;
        return e(n2);
      }
      function Xn2(n2) {
        if (!n2)
          return n2 === 0 ? n2 : 0;
        if (n2 = xn2(n2), n2 === ht2 || n2 === -ht2) {
          var t = n2 < 0 ? -1 : 1;
          return t * Fa;
        }
        return n2 === n2 ? n2 : 0;
      }
      function R2(n2) {
        var t = Xn2(n2), e = t % 1;
        return t === t ? e ? t - e : t : 0;
      }
      function aa(n2) {
        return n2 ? vt2(R2(n2), 0, Nn) : 0;
      }
      function xn2(n2) {
        if (typeof n2 == "number")
          return n2;
        if (pn2(n2))
          return _e2;
        if (K2(n2)) {
          var t = typeof n2.valueOf == "function" ? n2.valueOf() : n2;
          n2 = K2(t) ? t + "" : t;
        }
        if (typeof n2 != "string")
          return n2 === 0 ? n2 : +n2;
        n2 = ys2(n2);
        var e = vo.test(n2);
        return e || mo.test(n2) ? Qo(n2.slice(2), e ? 2 : 8) : go.test(n2) ? _e2 : +n2;
      }
      function oa(n2) {
        return Un2(n2, on2(n2));
      }
      function Up(n2) {
        return n2 ? vt2(R2(n2), -kn2, kn2) : n2 === 0 ? n2 : 0;
      }
      function W2(n2) {
        return n2 == null ? "" : ln2(n2);
      }
      var Wp = Ft2(function(n2, t) {
        if (he2(t) || an2(t)) {
          Un2(t, V2(t), n2);
          return;
        }
        for (var e in t)
          F2.call(t, e) && se(n2, e, t[e]);
      }), fa = Ft2(function(n2, t) {
        Un2(t, on2(t), n2);
      }), fr = Ft2(function(n2, t, e, r) {
        Un2(t, on2(t), n2, r);
      }), Fp = Ft2(function(n2, t, e, r) {
        Un2(t, V2(t), n2, r);
      }), Mp = Yn(Zr);
      function qp(n2, t) {
        var e = Wt2(n2);
        return t == null ? e : qs2(e, t);
      }
      var Bp = T2(function(n2, t) {
        n2 = M2(n2);
        var e = -1, r = t.length, s = r > 2 ? t[2] : i2;
        for (s && rn2(t[0], t[1], s) && (r = 1); ++e < r; )
          for (var o = t[e], f3 = on2(o), c2 = -1, l2 = f3.length; ++c2 < l2; ) {
            var v3 = f3[c2], _3 = n2[v3];
            (_3 === i2 || bn(_3, Nt2[v3]) && !F2.call(n2, v3)) && (n2[v3] = o[v3]);
          }
        return n2;
      }), Gp = T2(function(n2) {
        return n2.push(i2, yu), cn2(ca, i2, n2);
      });
      function zp(n2, t) {
        return Cs2(n2, x2(t, 3), $n);
      }
      function Kp(n2, t) {
        return Cs2(n2, x2(t, 3), Xr);
      }
      function Yp(n2, t) {
        return n2 == null ? n2 : Jr(n2, x2(t, 3), on2);
      }
      function Zp(n2, t) {
        return n2 == null ? n2 : Ys2(n2, x2(t, 3), on2);
      }
      function Jp(n2, t) {
        return n2 && $n(n2, x2(t, 3));
      }
      function Xp(n2, t) {
        return n2 && Xr(n2, x2(t, 3));
      }
      function Qp(n2) {
        return n2 == null ? [] : ze2(n2, V2(n2));
      }
      function Vp(n2) {
        return n2 == null ? [] : ze2(n2, on2(n2));
      }
      function Si(n2, t, e) {
        var r = n2 == null ? i2 : _t2(n2, t);
        return r === i2 ? e : r;
      }
      function kp(n2, t) {
        return n2 != null && Ru(n2, t, Ac);
      }
      function Oi(n2, t) {
        return n2 != null && Ru(n2, t, Cc);
      }
      var jp = Au(function(n2, t, e) {
        t != null && typeof t.toString != "function" && (t = Te2.call(t)), n2[t] = e;
      }, bi(fn2)), nd = Au(function(n2, t, e) {
        t != null && typeof t.toString != "function" && (t = Te2.call(t)), F2.call(n2, t) ? n2[t].push(e) : n2[t] = [e];
      }, x2), td = T2(ae2);
      function V2(n2) {
        return an2(n2) ? Fs2(n2) : jr(n2);
      }
      function on2(n2) {
        return an2(n2) ? Fs2(n2, true) : Lc(n2);
      }
      function ed(n2, t) {
        var e = {};
        return t = x2(t, 3), $n(n2, function(r, s, o) {
          zn(e, t(r, s, o), r);
        }), e;
      }
      function rd(n2, t) {
        var e = {};
        return t = x2(t, 3), $n(n2, function(r, s, o) {
          zn(e, s, t(r, s, o));
        }), e;
      }
      var id = Ft2(function(n2, t, e) {
        Ke2(n2, t, e);
      }), ca = Ft2(function(n2, t, e, r) {
        Ke2(n2, t, e, r);
      }), sd = Yn(function(n2, t) {
        var e = {};
        if (n2 == null)
          return e;
        var r = false;
        t = G2(t, function(o) {
          return o = st2(o, n2), r || (r = o.length > 1), o;
        }), Un2(n2, pi(n2), e), r && (e = An(e, Ln2 | Fn2 | xt2, jc));
        for (var s = t.length; s--; )
          si(e, t[s]);
        return e;
      });
      function ud(n2, t) {
        return ha(n2, ur2(x2(t)));
      }
      var ad = Yn(function(n2, t) {
        return n2 == null ? {} : Hc(n2, t);
      });
      function ha(n2, t) {
        if (n2 == null)
          return {};
        var e = G2(pi(n2), function(r) {
          return [r];
        });
        return t = x2(t), eu(n2, e, function(r, s) {
          return t(r, s[0]);
        });
      }
      function od(n2, t, e) {
        t = st2(t, n2);
        var r = -1, s = t.length;
        for (s || (s = 1, n2 = i2); ++r < s; ) {
          var o = n2 == null ? i2 : n2[Wn2(t[r])];
          o === i2 && (r = s, o = e), n2 = Jn2(o) ? o.call(n2) : o;
        }
        return n2;
      }
      function fd(n2, t, e) {
        return n2 == null ? n2 : fe(n2, t, e);
      }
      function cd(n2, t, e, r) {
        return r = typeof r == "function" ? r : i2, n2 == null ? n2 : fe(n2, t, e, r);
      }
      var la = xu(V2), pa = xu(on2);
      function hd(n2, t, e) {
        var r = O2(n2), s = r || at2(n2) || Bt2(n2);
        if (t = x2(t, 4), e == null) {
          var o = n2 && n2.constructor;
          s ? e = r ? new o() : [] : K2(n2) ? e = Jn2(o) ? Wt2(He2(n2)) : {} : e = {};
        }
        return (s ? mn2 : $n)(n2, function(f3, c2, l2) {
          return t(e, f3, c2, l2);
        }), e;
      }
      function ld(n2, t) {
        return n2 == null ? true : si(n2, t);
      }
      function pd(n2, t, e) {
        return n2 == null ? n2 : au(n2, t, oi(e));
      }
      function dd(n2, t, e, r) {
        return r = typeof r == "function" ? r : i2, n2 == null ? n2 : au(n2, t, oi(e), r);
      }
      function Gt2(n2) {
        return n2 == null ? [] : Mr2(n2, V2(n2));
      }
      function gd(n2) {
        return n2 == null ? [] : Mr2(n2, on2(n2));
      }
      function vd(n2, t, e) {
        return e === i2 && (e = t, t = i2), e !== i2 && (e = xn2(e), e = e === e ? e : 0), t !== i2 && (t = xn2(t), t = t === t ? t : 0), vt2(xn2(n2), t, e);
      }
      function _d(n2, t, e) {
        return t = Xn2(t), e === i2 ? (e = t, t = 0) : e = Xn2(e), n2 = xn2(n2), Ic(n2, t, e);
      }
      function md(n2, t, e) {
        if (e && typeof e != "boolean" && rn2(n2, t, e) && (t = e = i2), e === i2 && (typeof t == "boolean" ? (e = t, t = i2) : typeof n2 == "boolean" && (e = n2, n2 = i2)), n2 === i2 && t === i2 ? (n2 = 0, t = 1) : (n2 = Xn2(n2), t === i2 ? (t = n2, n2 = 0) : t = Xn2(t)), n2 > t) {
          var r = n2;
          n2 = t, t = r;
        }
        if (e || n2 % 1 || t % 1) {
          var s = Us2();
          return nn2(n2 + s * (t - n2 + Xo("1e-" + ((s + "").length - 1))), t);
        }
        return ei(n2, t);
      }
      var wd = Mt2(function(n2, t, e) {
        return t = t.toLowerCase(), n2 + (e ? da(t) : t);
      });
      function da(n2) {
        return Ri(W2(n2).toLowerCase());
      }
      function ga(n2) {
        return n2 = W2(n2), n2 && n2.replace(Po, ff).replace(Fo, "");
      }
      function Pd(n2, t, e) {
        n2 = W2(n2), t = ln2(t);
        var r = n2.length;
        e = e === i2 ? r : vt2(R2(e), 0, r);
        var s = e;
        return e -= t.length, e >= 0 && n2.slice(e, s) == t;
      }
      function Ad(n2) {
        return n2 = W2(n2), n2 && ja.test(n2) ? n2.replace(Yi2, cf) : n2;
      }
      function Cd(n2) {
        return n2 = W2(n2), n2 && so.test(n2) ? n2.replace(xr2, "\\$&") : n2;
      }
      var Id = Mt2(function(n2, t, e) {
        return n2 + (e ? "-" : "") + t.toLowerCase();
      }), xd = Mt2(function(n2, t, e) {
        return n2 + (e ? " " : "") + t.toLowerCase();
      }), Ed = mu("toLowerCase");
      function yd(n2, t, e) {
        n2 = W2(n2), t = R2(t);
        var r = t ? Dt2(n2) : 0;
        if (!t || r >= t)
          return n2;
        var s = (t - r) / 2;
        return Ve2(We2(s), e) + n2 + Ve2(Ue2(s), e);
      }
      function Sd(n2, t, e) {
        n2 = W2(n2), t = R2(t);
        var r = t ? Dt2(n2) : 0;
        return t && r < t ? n2 + Ve2(t - r, e) : n2;
      }
      function Od(n2, t, e) {
        n2 = W2(n2), t = R2(t);
        var r = t ? Dt2(n2) : 0;
        return t && r < t ? Ve2(t - r, e) + n2 : n2;
      }
      function Rd(n2, t, e) {
        return e || t == null ? t = 0 : t && (t = +t), $f(W2(n2).replace(Er, ""), t || 0);
      }
      function bd(n2, t, e) {
        return (e ? rn2(n2, t, e) : t === i2) ? t = 1 : t = R2(t), ri(W2(n2), t);
      }
      function Td() {
        var n2 = arguments, t = W2(n2[0]);
        return n2.length < 3 ? t : t.replace(n2[1], n2[2]);
      }
      var Ld = Mt2(function(n2, t, e) {
        return n2 + (e ? "_" : "") + t.toLowerCase();
      });
      function Dd(n2, t, e) {
        return e && typeof e != "number" && rn2(n2, t, e) && (t = e = i2), e = e === i2 ? Nn : e >>> 0, e ? (n2 = W2(n2), n2 && (typeof t == "string" || t != null && !yi(t)) && (t = ln2(t), !t && Lt2(n2)) ? ut2(On(n2), 0, e) : n2.split(t, e)) : [];
      }
      var Hd = Mt2(function(n2, t, e) {
        return n2 + (e ? " " : "") + Ri(t);
      });
      function Nd(n2, t, e) {
        return n2 = W2(n2), e = e == null ? 0 : vt2(R2(e), 0, n2.length), t = ln2(t), n2.slice(e, e + t.length) == t;
      }
      function $d(n2, t, e) {
        var r = a3.templateSettings;
        e && rn2(n2, t, e) && (t = i2), n2 = W2(n2), t = fr({}, t, r, Eu);
        var s = fr({}, t.imports, r.imports, Eu), o = V2(s), f3 = Mr2(s, o), c2, l2, v3 = 0, _3 = t.interpolate || Ce2, m2 = "__p += '", P2 = Br((t.escape || Ce2).source + "|" + _3.source + "|" + (_3 === Zi2 ? po : Ce2).source + "|" + (t.evaluate || Ce2).source + "|$", "g"), I2 = "//# sourceURL=" + (F2.call(t, "sourceURL") ? (t.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++zo + "]") + `
`;
        n2.replace(P2, function(y3, H2, $2, dn2, sn2, gn2) {
          return $2 || ($2 = dn2), m2 += n2.slice(v3, gn2).replace(Ao, hf), H2 && (c2 = true, m2 += `' +
__e(` + H2 + `) +
'`), sn2 && (l2 = true, m2 += `';
` + sn2 + `;
__p += '`), $2 && (m2 += `' +
((__t = (` + $2 + `)) == null ? '' : __t) +
'`), v3 = gn2 + y3.length, y3;
        }), m2 += `';
`;
        var E3 = F2.call(t, "variable") && t.variable;
        if (!E3)
          m2 = `with (obj) {
` + m2 + `
}
`;
        else if (ho.test(E3))
          throw new S2(En);
        m2 = (l2 ? m2.replace(Xa, "") : m2).replace(Qa, "$1").replace(Va, "$1;"), m2 = "function(" + (E3 || "obj") + `) {
` + (E3 ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (c2 ? ", __e = _.escape" : "") + (l2 ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + m2 + `return __p
}`;
        var b3 = _a(function() {
          return U2(o, I2 + "return " + m2).apply(i2, f3);
        });
        if (b3.source = m2, Ei(b3))
          throw b3;
        return b3;
      }
      function Ud(n2) {
        return W2(n2).toLowerCase();
      }
      function Wd(n2) {
        return W2(n2).toUpperCase();
      }
      function Fd(n2, t, e) {
        if (n2 = W2(n2), n2 && (e || t === i2))
          return ys2(n2);
        if (!n2 || !(t = ln2(t)))
          return n2;
        var r = On(n2), s = On(t), o = Ss2(r, s), f3 = Os2(r, s) + 1;
        return ut2(r, o, f3).join("");
      }
      function Md(n2, t, e) {
        if (n2 = W2(n2), n2 && (e || t === i2))
          return n2.slice(0, bs2(n2) + 1);
        if (!n2 || !(t = ln2(t)))
          return n2;
        var r = On(n2), s = Os2(r, On(t)) + 1;
        return ut2(r, 0, s).join("");
      }
      function qd(n2, t, e) {
        if (n2 = W2(n2), n2 && (e || t === i2))
          return n2.replace(Er, "");
        if (!n2 || !(t = ln2(t)))
          return n2;
        var r = On(n2), s = Ss2(r, On(t));
        return ut2(r, s).join("");
      }
      function Bd(n2, t) {
        var e = Da, r = Ha;
        if (K2(t)) {
          var s = "separator" in t ? t.separator : s;
          e = "length" in t ? R2(t.length) : e, r = "omission" in t ? ln2(t.omission) : r;
        }
        n2 = W2(n2);
        var o = n2.length;
        if (Lt2(n2)) {
          var f3 = On(n2);
          o = f3.length;
        }
        if (e >= o)
          return n2;
        var c2 = e - Dt2(r);
        if (c2 < 1)
          return r;
        var l2 = f3 ? ut2(f3, 0, c2).join("") : n2.slice(0, c2);
        if (s === i2)
          return l2 + r;
        if (f3 && (c2 += l2.length - c2), yi(s)) {
          if (n2.slice(c2).search(s)) {
            var v3, _3 = l2;
            for (s.global || (s = Br(s.source, W2(Ji2.exec(s)) + "g")), s.lastIndex = 0; v3 = s.exec(_3); )
              var m2 = v3.index;
            l2 = l2.slice(0, m2 === i2 ? c2 : m2);
          }
        } else if (n2.indexOf(ln2(s), c2) != c2) {
          var P2 = l2.lastIndexOf(s);
          P2 > -1 && (l2 = l2.slice(0, P2));
        }
        return l2 + r;
      }
      function Gd(n2) {
        return n2 = W2(n2), n2 && ka.test(n2) ? n2.replace(Ki, mf) : n2;
      }
      var zd = Mt2(function(n2, t, e) {
        return n2 + (e ? " " : "") + t.toUpperCase();
      }), Ri = mu("toUpperCase");
      function va(n2, t, e) {
        return n2 = W2(n2), t = e ? i2 : t, t === i2 ? pf(n2) ? Af(n2) : rf(n2) : n2.match(t) || [];
      }
      var _a = T2(function(n2, t) {
        try {
          return cn2(n2, i2, t);
        } catch (e) {
          return Ei(e) ? e : new S2(e);
        }
      }), Kd = Yn(function(n2, t) {
        return mn2(t, function(e) {
          e = Wn2(e), zn(n2, e, Ii(n2[e], n2));
        }), n2;
      });
      function Yd(n2) {
        var t = n2 == null ? 0 : n2.length, e = x2();
        return n2 = t ? G2(n2, function(r) {
          if (typeof r[1] != "function")
            throw new wn(D2);
          return [e(r[0]), r[1]];
        }) : [], T2(function(r) {
          for (var s = -1; ++s < t; ) {
            var o = n2[s];
            if (cn2(o[0], this, r))
              return cn2(o[1], this, r);
          }
        });
      }
      function Zd(n2) {
        return mc(An(n2, Ln2));
      }
      function bi(n2) {
        return function() {
          return n2;
        };
      }
      function Jd(n2, t) {
        return n2 == null || n2 !== n2 ? t : n2;
      }
      var Xd = Pu(), Qd = Pu(true);
      function fn2(n2) {
        return n2;
      }
      function Ti(n2) {
        return Qs2(typeof n2 == "function" ? n2 : An(n2, Ln2));
      }
      function Vd(n2) {
        return ks2(An(n2, Ln2));
      }
      function kd(n2, t) {
        return js2(n2, An(t, Ln2));
      }
      var jd = T2(function(n2, t) {
        return function(e) {
          return ae2(e, n2, t);
        };
      }), ng = T2(function(n2, t) {
        return function(e) {
          return ae2(n2, e, t);
        };
      });
      function Li(n2, t, e) {
        var r = V2(t), s = ze2(t, r);
        e == null && !(K2(t) && (s.length || !r.length)) && (e = t, t = n2, n2 = this, s = ze2(t, V2(t)));
        var o = !(K2(e) && "chain" in e) || !!e.chain, f3 = Jn2(n2);
        return mn2(s, function(c2) {
          var l2 = t[c2];
          n2[c2] = l2, f3 && (n2.prototype[c2] = function() {
            var v3 = this.__chain__;
            if (o || v3) {
              var _3 = n2(this.__wrapped__), m2 = _3.__actions__ = un2(this.__actions__);
              return m2.push({ func: l2, args: arguments, thisArg: n2 }), _3.__chain__ = v3, _3;
            }
            return l2.apply(n2, nt2([this.value()], arguments));
          });
        }), n2;
      }
      function tg() {
        return k2._ === this && (k2._ = Sf), this;
      }
      function Di() {
      }
      function eg(n2) {
        return n2 = R2(n2), T2(function(t) {
          return nu(t, n2);
        });
      }
      var rg = ci(G2), ig = ci(As2), sg = ci(Nr2);
      function ma(n2) {
        return _i(n2) ? $r2(Wn2(n2)) : Nc(n2);
      }
      function ug(n2) {
        return function(t) {
          return n2 == null ? i2 : _t2(n2, t);
        };
      }
      var ag = Cu(), og = Cu(true);
      function Hi2() {
        return [];
      }
      function Ni() {
        return false;
      }
      function fg() {
        return {};
      }
      function cg() {
        return "";
      }
      function hg() {
        return true;
      }
      function lg(n2, t) {
        if (n2 = R2(n2), n2 < 1 || n2 > kn2)
          return [];
        var e = Nn, r = nn2(n2, Nn);
        t = x2(t), n2 -= Nn;
        for (var s = Fr2(r, t); ++e < n2; )
          t(e);
        return s;
      }
      function pg(n2) {
        return O2(n2) ? G2(n2, Wn2) : pn2(n2) ? [n2] : un2(Wu(W2(n2)));
      }
      function dg(n2) {
        var t = ++Ef;
        return W2(n2) + t;
      }
      var gg = Qe2(function(n2, t) {
        return n2 + t;
      }, 0), vg = hi("ceil"), _g = Qe2(function(n2, t) {
        return n2 / t;
      }, 1), mg = hi("floor");
      function wg(n2) {
        return n2 && n2.length ? Ge2(n2, fn2, Qr) : i2;
      }
      function Pg(n2, t) {
        return n2 && n2.length ? Ge2(n2, x2(t, 2), Qr) : i2;
      }
      function Ag(n2) {
        return xs2(n2, fn2);
      }
      function Cg(n2, t) {
        return xs2(n2, x2(t, 2));
      }
      function Ig(n2) {
        return n2 && n2.length ? Ge2(n2, fn2, ni) : i2;
      }
      function xg(n2, t) {
        return n2 && n2.length ? Ge2(n2, x2(t, 2), ni) : i2;
      }
      var Eg = Qe2(function(n2, t) {
        return n2 * t;
      }, 1), yg = hi("round"), Sg = Qe2(function(n2, t) {
        return n2 - t;
      }, 0);
      function Og(n2) {
        return n2 && n2.length ? Wr(n2, fn2) : 0;
      }
      function Rg(n2, t) {
        return n2 && n2.length ? Wr(n2, x2(t, 2)) : 0;
      }
      return a3.after = Vl, a3.ary = Xu, a3.assign = Wp, a3.assignIn = fa, a3.assignInWith = fr, a3.assignWith = Fp, a3.at = Mp, a3.before = Qu, a3.bind = Ii, a3.bindAll = Kd, a3.bindKey = Vu, a3.castArray = fp, a3.chain = Yu, a3.chunk = mh, a3.compact = wh, a3.concat = Ph, a3.cond = Yd, a3.conforms = Zd, a3.constant = bi, a3.countBy = Ol, a3.create = qp, a3.curry = ku, a3.curryRight = ju, a3.debounce = na, a3.defaults = Bp, a3.defaultsDeep = Gp, a3.defer = kl, a3.delay = jl, a3.difference = Ah, a3.differenceBy = Ch, a3.differenceWith = Ih, a3.drop = xh, a3.dropRight = Eh, a3.dropRightWhile = yh, a3.dropWhile = Sh, a3.fill = Oh, a3.filter = bl, a3.flatMap = Dl, a3.flatMapDeep = Hl, a3.flatMapDepth = Nl, a3.flatten = Bu, a3.flattenDeep = Rh, a3.flattenDepth = bh, a3.flip = np, a3.flow = Xd, a3.flowRight = Qd, a3.fromPairs = Th, a3.functions = Qp, a3.functionsIn = Vp, a3.groupBy = $l, a3.initial = Dh, a3.intersection = Hh, a3.intersectionBy = Nh, a3.intersectionWith = $h, a3.invert = jp, a3.invertBy = nd, a3.invokeMap = Wl, a3.iteratee = Ti, a3.keyBy = Fl, a3.keys = V2, a3.keysIn = on2, a3.map = rr2, a3.mapKeys = ed, a3.mapValues = rd, a3.matches = Vd, a3.matchesProperty = kd, a3.memoize = sr3, a3.merge = id, a3.mergeWith = ca, a3.method = jd, a3.methodOf = ng, a3.mixin = Li, a3.negate = ur2, a3.nthArg = eg, a3.omit = sd, a3.omitBy = ud, a3.once = tp, a3.orderBy = Ml, a3.over = rg, a3.overArgs = ep, a3.overEvery = ig, a3.overSome = sg, a3.partial = xi, a3.partialRight = ta, a3.partition = ql, a3.pick = ad, a3.pickBy = ha, a3.property = ma, a3.propertyOf = ug, a3.pull = Mh, a3.pullAll = zu, a3.pullAllBy = qh, a3.pullAllWith = Bh, a3.pullAt = Gh, a3.range = ag, a3.rangeRight = og, a3.rearg = rp, a3.reject = zl, a3.remove = zh, a3.rest = ip, a3.reverse = Ai, a3.sampleSize = Yl, a3.set = fd, a3.setWith = cd, a3.shuffle = Zl, a3.slice = Kh, a3.sortBy = Ql, a3.sortedUniq = kh, a3.sortedUniqBy = jh, a3.split = Dd, a3.spread = sp, a3.tail = nl, a3.take = tl, a3.takeRight = el, a3.takeRightWhile = rl, a3.takeWhile = il, a3.tap = wl, a3.throttle = up, a3.thru = er2, a3.toArray = ua, a3.toPairs = la, a3.toPairsIn = pa, a3.toPath = pg, a3.toPlainObject = oa, a3.transform = hd, a3.unary = ap, a3.union = sl, a3.unionBy = ul, a3.unionWith = al, a3.uniq = ol, a3.uniqBy = fl, a3.uniqWith = cl, a3.unset = ld, a3.unzip = Ci, a3.unzipWith = Ku, a3.update = pd, a3.updateWith = dd, a3.values = Gt2, a3.valuesIn = gd, a3.without = hl, a3.words = va, a3.wrap = op, a3.xor = ll, a3.xorBy = pl, a3.xorWith = dl, a3.zip = gl, a3.zipObject = vl, a3.zipObjectDeep = _l, a3.zipWith = ml, a3.entries = la, a3.entriesIn = pa, a3.extend = fa, a3.extendWith = fr, Li(a3, a3), a3.add = gg, a3.attempt = _a, a3.camelCase = wd, a3.capitalize = da, a3.ceil = vg, a3.clamp = vd, a3.clone = cp, a3.cloneDeep = lp, a3.cloneDeepWith = pp, a3.cloneWith = hp, a3.conformsTo = dp, a3.deburr = ga, a3.defaultTo = Jd, a3.divide = _g, a3.endsWith = Pd, a3.eq = bn, a3.escape = Ad, a3.escapeRegExp = Cd, a3.every = Rl, a3.find = Tl, a3.findIndex = Mu, a3.findKey = zp, a3.findLast = Ll, a3.findLastIndex = qu, a3.findLastKey = Kp, a3.floor = mg, a3.forEach = Zu, a3.forEachRight = Ju, a3.forIn = Yp, a3.forInRight = Zp, a3.forOwn = Jp, a3.forOwnRight = Xp, a3.get = Si, a3.gt = gp, a3.gte = vp, a3.has = kp, a3.hasIn = Oi, a3.head = Gu, a3.identity = fn2, a3.includes = Ul, a3.indexOf = Lh, a3.inRange = _d, a3.invoke = td, a3.isArguments = Pt2, a3.isArray = O2, a3.isArrayBuffer = _p, a3.isArrayLike = an2, a3.isArrayLikeObject = Z2, a3.isBoolean = mp, a3.isBuffer = at2, a3.isDate = wp, a3.isElement = Pp, a3.isEmpty = Ap, a3.isEqual = Cp, a3.isEqualWith = Ip, a3.isError = Ei, a3.isFinite = xp, a3.isFunction = Jn2, a3.isInteger = ea, a3.isLength = ar2, a3.isMap = ra, a3.isMatch = Ep, a3.isMatchWith = yp, a3.isNaN = Sp, a3.isNative = Op, a3.isNil = bp, a3.isNull = Rp, a3.isNumber = ia, a3.isObject = K2, a3.isObjectLike = Y, a3.isPlainObject = pe2, a3.isRegExp = yi, a3.isSafeInteger = Tp, a3.isSet = sa, a3.isString = or2, a3.isSymbol = pn2, a3.isTypedArray = Bt2, a3.isUndefined = Lp, a3.isWeakMap = Dp, a3.isWeakSet = Hp, a3.join = Uh, a3.kebabCase = Id, a3.last = In, a3.lastIndexOf = Wh, a3.lowerCase = xd, a3.lowerFirst = Ed, a3.lt = Np, a3.lte = $p, a3.max = wg, a3.maxBy = Pg, a3.mean = Ag, a3.meanBy = Cg, a3.min = Ig, a3.minBy = xg, a3.stubArray = Hi2, a3.stubFalse = Ni, a3.stubObject = fg, a3.stubString = cg, a3.stubTrue = hg, a3.multiply = Eg, a3.nth = Fh, a3.noConflict = tg, a3.noop = Di, a3.now = ir2, a3.pad = yd, a3.padEnd = Sd, a3.padStart = Od, a3.parseInt = Rd, a3.random = md, a3.reduce = Bl, a3.reduceRight = Gl, a3.repeat = bd, a3.replace = Td, a3.result = od, a3.round = yg, a3.runInContext = h4, a3.sample = Kl, a3.size = Jl, a3.snakeCase = Ld, a3.some = Xl, a3.sortedIndex = Yh, a3.sortedIndexBy = Zh, a3.sortedIndexOf = Jh, a3.sortedLastIndex = Xh, a3.sortedLastIndexBy = Qh, a3.sortedLastIndexOf = Vh, a3.startCase = Hd, a3.startsWith = Nd, a3.subtract = Sg, a3.sum = Og, a3.sumBy = Rg, a3.template = $d, a3.times = lg, a3.toFinite = Xn2, a3.toInteger = R2, a3.toLength = aa, a3.toLower = Ud, a3.toNumber = xn2, a3.toSafeInteger = Up, a3.toString = W2, a3.toUpper = Wd, a3.trim = Fd, a3.trimEnd = Md, a3.trimStart = qd, a3.truncate = Bd, a3.unescape = Gd, a3.uniqueId = dg, a3.upperCase = zd, a3.upperFirst = Ri, a3.each = Zu, a3.eachRight = Ju, a3.first = Gu, Li(a3, function() {
        var n2 = {};
        return $n(a3, function(t, e) {
          F2.call(a3.prototype, e) || (n2[e] = t);
        }), n2;
      }(), { chain: false }), a3.VERSION = d2, mn2(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(n2) {
        a3[n2].placeholder = a3;
      }), mn2(["drop", "take"], function(n2, t) {
        N2.prototype[n2] = function(e) {
          e = e === i2 ? 1 : Q3(R2(e), 0);
          var r = this.__filtered__ && !t ? new N2(this) : this.clone();
          return r.__filtered__ ? r.__takeCount__ = nn2(e, r.__takeCount__) : r.__views__.push({ size: nn2(e, Nn), type: n2 + (r.__dir__ < 0 ? "Right" : "") }), r;
        }, N2.prototype[n2 + "Right"] = function(e) {
          return this.reverse()[n2](e).reverse();
        };
      }), mn2(["filter", "map", "takeWhile"], function(n2, t) {
        var e = t + 1, r = e == Bi || e == Wa;
        N2.prototype[n2] = function(s) {
          var o = this.clone();
          return o.__iteratees__.push({ iteratee: x2(s, 3), type: e }), o.__filtered__ = o.__filtered__ || r, o;
        };
      }), mn2(["head", "last"], function(n2, t) {
        var e = "take" + (t ? "Right" : "");
        N2.prototype[n2] = function() {
          return this[e](1).value()[0];
        };
      }), mn2(["initial", "tail"], function(n2, t) {
        var e = "drop" + (t ? "" : "Right");
        N2.prototype[n2] = function() {
          return this.__filtered__ ? new N2(this) : this[e](1);
        };
      }), N2.prototype.compact = function() {
        return this.filter(fn2);
      }, N2.prototype.find = function(n2) {
        return this.filter(n2).head();
      }, N2.prototype.findLast = function(n2) {
        return this.reverse().find(n2);
      }, N2.prototype.invokeMap = T2(function(n2, t) {
        return typeof n2 == "function" ? new N2(this) : this.map(function(e) {
          return ae2(e, n2, t);
        });
      }), N2.prototype.reject = function(n2) {
        return this.filter(ur2(x2(n2)));
      }, N2.prototype.slice = function(n2, t) {
        n2 = R2(n2);
        var e = this;
        return e.__filtered__ && (n2 > 0 || t < 0) ? new N2(e) : (n2 < 0 ? e = e.takeRight(-n2) : n2 && (e = e.drop(n2)), t !== i2 && (t = R2(t), e = t < 0 ? e.dropRight(-t) : e.take(t - n2)), e);
      }, N2.prototype.takeRightWhile = function(n2) {
        return this.reverse().takeWhile(n2).reverse();
      }, N2.prototype.toArray = function() {
        return this.take(Nn);
      }, $n(N2.prototype, function(n2, t) {
        var e = /^(?:filter|find|map|reject)|While$/.test(t), r = /^(?:head|last)$/.test(t), s = a3[r ? "take" + (t == "last" ? "Right" : "") : t], o = r || /^find/.test(t);
        s && (a3.prototype[t] = function() {
          var f3 = this.__wrapped__, c2 = r ? [1] : arguments, l2 = f3 instanceof N2, v3 = c2[0], _3 = l2 || O2(f3), m2 = function(H2) {
            var $2 = s.apply(a3, nt2([H2], c2));
            return r && P2 ? $2[0] : $2;
          };
          _3 && e && typeof v3 == "function" && v3.length != 1 && (l2 = _3 = false);
          var P2 = this.__chain__, I2 = !!this.__actions__.length, E3 = o && !P2, b3 = l2 && !I2;
          if (!o && _3) {
            f3 = b3 ? f3 : new N2(this);
            var y3 = n2.apply(f3, c2);
            return y3.__actions__.push({ func: er2, args: [m2], thisArg: i2 }), new Pn(y3, P2);
          }
          return E3 && b3 ? n2.apply(this, c2) : (y3 = this.thru(m2), E3 ? r ? y3.value()[0] : y3.value() : y3);
        });
      }), mn2(["pop", "push", "shift", "sort", "splice", "unshift"], function(n2) {
        var t = Oe[n2], e = /^(?:push|sort|unshift)$/.test(n2) ? "tap" : "thru", r = /^(?:pop|shift)$/.test(n2);
        a3.prototype[n2] = function() {
          var s = arguments;
          if (r && !this.__chain__) {
            var o = this.value();
            return t.apply(O2(o) ? o : [], s);
          }
          return this[e](function(f3) {
            return t.apply(O2(f3) ? f3 : [], s);
          });
        };
      }), $n(N2.prototype, function(n2, t) {
        var e = a3[t];
        if (e) {
          var r = e.name + "";
          F2.call(Ut2, r) || (Ut2[r] = []), Ut2[r].push({ name: t, func: e });
        }
      }), Ut2[Xe2(i2, ct2).name] = [{ name: "wrapper", func: i2 }], N2.prototype.clone = Gf, N2.prototype.reverse = zf, N2.prototype.value = Kf, a3.prototype.at = Pl, a3.prototype.chain = Al, a3.prototype.commit = Cl, a3.prototype.next = Il, a3.prototype.plant = El, a3.prototype.reverse = yl, a3.prototype.toJSON = a3.prototype.valueOf = a3.prototype.value = Sl, a3.prototype.first = a3.prototype.head, ne && (a3.prototype[ne] = xl), a3;
    }, Ht2 = Cf();
    lt2 ? ((lt2.exports = Ht2)._ = Ht2, Tr2._ = Ht2) : k2._ = Ht2;
  }).call(ge2);
})(Ui, Ui.exports);
var Gg = Object.defineProperty, zg = Object.defineProperties, Kg = Object.getOwnPropertyDescriptors, Ea = Object.getOwnPropertySymbols, Yg = Object.prototype.hasOwnProperty, Zg = Object.prototype.propertyIsEnumerable, ya = (A2, u3, i2) => u3 in A2 ? Gg(A2, u3, { enumerable: true, configurable: true, writable: true, value: i2 }) : A2[u3] = i2, cr = (A2, u3) => {
  for (var i2 in u3 || (u3 = {}))
    Yg.call(u3, i2) && ya(A2, i2, u3[i2]);
  if (Ea)
    for (var i2 of Ea(u3))
      Zg.call(u3, i2) && ya(A2, i2, u3[i2]);
  return A2;
}, Jg = (A2, u3) => zg(A2, Kg(u3));
function ft(A2, u3, i2) {
  var d2;
  const w3 = ve(A2);
  return ((d2 = u3.rpcMap) == null ? void 0 : d2[w3.reference]) || `${Bg}?chainId=${w3.namespace}:${w3.reference}&projectId=${i2}`;
}
function Ct(A2) {
  return A2.includes(":") ? A2.split(":")[1] : A2;
}
function Sa(A2) {
  return A2.map((u3) => `${u3.split(":")[0]}:${u3.split(":")[1]}`);
}
function Xg(A2, u3) {
  const i2 = Object.keys(u3.namespaces).filter((w3) => w3.includes(A2));
  if (!i2.length)
    return [];
  const d2 = [];
  return i2.forEach((w3) => {
    const L2 = u3.namespaces[w3].accounts;
    d2.push(...L2);
  }), d2;
}
function Oa(A2 = {}, u3 = {}) {
  const i2 = Ra(A2), d2 = Ra(u3);
  return Ui.exports.merge(i2, d2);
}
function Ra(A2) {
  var u3, i2, d2, w3;
  const L2 = {};
  if (!B$1(A2))
    return L2;
  for (const [D2, En] of Object.entries(A2)) {
    const zt2 = oe$1(D2) ? [D2] : En.chains, pr2 = En.methods || [], It2 = En.events || [], Ln2 = En.rpcMap || {}, Fn2 = en(D2);
    L2[Fn2] = Jg(cr(cr({}, L2[Fn2]), En), { chains: S$3(zt2, (u3 = L2[Fn2]) == null ? void 0 : u3.chains), methods: S$3(pr2, (i2 = L2[Fn2]) == null ? void 0 : i2.methods), events: S$3(It2, (d2 = L2[Fn2]) == null ? void 0 : d2.events), rpcMap: cr(cr({}, Ln2), (w3 = L2[Fn2]) == null ? void 0 : w3.rpcMap) });
  }
  return L2;
}
function Qg(A2) {
  return A2.includes(":") ? A2.split(":")[2] : A2;
}
function Vg(A2) {
  const u3 = {};
  for (const [i2, d2] of Object.entries(A2)) {
    const w3 = d2.methods || [], L2 = d2.events || [], D2 = d2.accounts || [], En = oe$1(i2) ? [i2] : d2.chains ? d2.chains : Sa(d2.accounts);
    u3[i2] = { chains: En, methods: w3, events: L2, accounts: D2 };
  }
  return u3;
}
function Wi(A2) {
  return typeof A2 == "number" ? A2 : A2.includes("0x") ? parseInt(A2, 16) : (A2 = A2.includes(":") ? A2.split(":")[1] : A2, isNaN(Number(A2)) ? A2 : Number(A2));
}
const ba = {}, z = (A2) => ba[A2], Fi = (A2, u3) => {
  ba[A2] = u3;
};
class kg {
  constructor(u3) {
    this.name = "polkadot", this.namespace = u3.namespace, this.events = z("events"), this.client = z("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(u3) {
    this.namespace = Object.assign(this.namespace, u3);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId)
      return this.chainId;
    if (this.namespace.defaultChain)
      return this.namespace.defaultChain;
    const u3 = this.namespace.chains[0];
    if (!u3)
      throw new Error("ChainId not found");
    return u3.split(":")[1];
  }
  request(u3) {
    return this.namespace.methods.includes(u3.request.method) ? this.client.request(u3) : this.getHttpProvider().request(u3.request);
  }
  setDefaultChain(u3, i2) {
    this.httpProviders[u3] || this.setHttpProvider(u3, i2), this.chainId = u3, this.events.emit(Vn.DEFAULT_CHAIN_CHANGED, `${this.name}:${u3}`);
  }
  getAccounts() {
    const u3 = this.namespace.accounts;
    return u3 ? u3.filter((i2) => i2.split(":")[1] === this.chainId.toString()).map((i2) => i2.split(":")[2]) || [] : [];
  }
  createHttpProviders() {
    const u3 = {};
    return this.namespace.chains.forEach((i2) => {
      var d2;
      const w3 = Ct(i2);
      u3[w3] = this.createHttpProvider(w3, (d2 = this.namespace.rpcMap) == null ? void 0 : d2[i2]);
    }), u3;
  }
  getHttpProvider() {
    const u3 = `${this.name}:${this.chainId}`, i2 = this.httpProviders[u3];
    if (typeof i2 > "u")
      throw new Error(`JSON-RPC provider for ${u3} not found`);
    return i2;
  }
  setHttpProvider(u3, i2) {
    const d2 = this.createHttpProvider(u3, i2);
    d2 && (this.httpProviders[u3] = d2);
  }
  createHttpProvider(u3, i2) {
    const d2 = i2 || ft(u3, this.namespace, this.client.core.projectId);
    if (!d2)
      throw new Error(`No RPC url provided for chainId: ${u3}`);
    return new JsonRpcProvider(new HttpConnection(d2, z("disableProviderPing")));
  }
}
class jg {
  constructor(u3) {
    this.name = "eip155", this.namespace = u3.namespace, this.events = z("events"), this.client = z("client"), this.httpProviders = this.createHttpProviders(), this.chainId = parseInt(this.getDefaultChain());
  }
  async request(u3) {
    switch (u3.request.method) {
      case "eth_requestAccounts":
        return this.getAccounts();
      case "eth_accounts":
        return this.getAccounts();
      case "wallet_switchEthereumChain":
        return await this.handleSwitchChain(u3);
      case "eth_chainId":
        return parseInt(this.getDefaultChain());
    }
    return this.namespace.methods.includes(u3.request.method) ? await this.client.request(u3) : this.getHttpProvider().request(u3.request);
  }
  updateNamespace(u3) {
    this.namespace = Object.assign(this.namespace, u3);
  }
  setDefaultChain(u3, i2) {
    this.httpProviders[u3] || this.setHttpProvider(parseInt(u3), i2), this.chainId = parseInt(u3), this.events.emit(Vn.DEFAULT_CHAIN_CHANGED, `${this.name}:${u3}`);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId)
      return this.chainId.toString();
    if (this.namespace.defaultChain)
      return this.namespace.defaultChain;
    const u3 = this.namespace.chains[0];
    if (!u3)
      throw new Error("ChainId not found");
    return u3.split(":")[1];
  }
  createHttpProvider(u3, i2) {
    const d2 = i2 || ft(`${this.name}:${u3}`, this.namespace, this.client.core.projectId);
    if (!d2)
      throw new Error(`No RPC url provided for chainId: ${u3}`);
    return new JsonRpcProvider(new HttpConnection(d2, z("disableProviderPing")));
  }
  setHttpProvider(u3, i2) {
    const d2 = this.createHttpProvider(u3, i2);
    d2 && (this.httpProviders[u3] = d2);
  }
  createHttpProviders() {
    const u3 = {};
    return this.namespace.chains.forEach((i2) => {
      var d2;
      const w3 = parseInt(Ct(i2));
      u3[w3] = this.createHttpProvider(w3, (d2 = this.namespace.rpcMap) == null ? void 0 : d2[i2]);
    }), u3;
  }
  getAccounts() {
    const u3 = this.namespace.accounts;
    return u3 ? [...new Set(u3.filter((i2) => i2.split(":")[1] === this.chainId.toString()).map((i2) => i2.split(":")[2]))] : [];
  }
  getHttpProvider() {
    const u3 = this.chainId, i2 = this.httpProviders[u3];
    if (typeof i2 > "u")
      throw new Error(`JSON-RPC provider for ${u3} not found`);
    return i2;
  }
  async handleSwitchChain(u3) {
    var i2, d2;
    let w3 = u3.request.params ? (i2 = u3.request.params[0]) == null ? void 0 : i2.chainId : "0x0";
    w3 = w3.startsWith("0x") ? w3 : `0x${w3}`;
    const L2 = parseInt(w3, 16);
    if (this.isChainApproved(L2))
      this.setDefaultChain(`${L2}`);
    else if (this.namespace.methods.includes("wallet_switchEthereumChain"))
      await this.client.request({ topic: u3.topic, request: { method: u3.request.method, params: [{ chainId: w3 }] }, chainId: (d2 = this.namespace.chains) == null ? void 0 : d2[0] }), this.setDefaultChain(`${L2}`);
    else
      throw new Error(`Failed to switch to chain 'eip155:${L2}'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method.`);
    return null;
  }
  isChainApproved(u3) {
    return this.namespace.chains.includes(`${this.name}:${u3}`);
  }
}
class nv {
  constructor(u3) {
    this.name = "solana", this.namespace = u3.namespace, this.events = z("events"), this.client = z("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(u3) {
    this.namespace = Object.assign(this.namespace, u3);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(u3) {
    return this.namespace.methods.includes(u3.request.method) ? this.client.request(u3) : this.getHttpProvider().request(u3.request);
  }
  setDefaultChain(u3, i2) {
    this.httpProviders[u3] || this.setHttpProvider(u3, i2), this.chainId = u3, this.events.emit(Vn.DEFAULT_CHAIN_CHANGED, `${this.name}:${u3}`);
  }
  getDefaultChain() {
    if (this.chainId)
      return this.chainId;
    if (this.namespace.defaultChain)
      return this.namespace.defaultChain;
    const u3 = this.namespace.chains[0];
    if (!u3)
      throw new Error("ChainId not found");
    return u3.split(":")[1];
  }
  getAccounts() {
    const u3 = this.namespace.accounts;
    return u3 ? [...new Set(u3.filter((i2) => i2.split(":")[1] === this.chainId.toString()).map((i2) => i2.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const u3 = {};
    return this.namespace.chains.forEach((i2) => {
      var d2;
      const w3 = Ct(i2);
      u3[w3] = this.createHttpProvider(w3, (d2 = this.namespace.rpcMap) == null ? void 0 : d2[i2]);
    }), u3;
  }
  getHttpProvider() {
    const u3 = `${this.name}:${this.chainId}`, i2 = this.httpProviders[u3];
    if (typeof i2 > "u")
      throw new Error(`JSON-RPC provider for ${u3} not found`);
    return i2;
  }
  setHttpProvider(u3, i2) {
    const d2 = this.createHttpProvider(u3, i2);
    d2 && (this.httpProviders[u3] = d2);
  }
  createHttpProvider(u3, i2) {
    const d2 = i2 || ft(u3, this.namespace, this.client.core.projectId);
    if (!d2)
      throw new Error(`No RPC url provided for chainId: ${u3}`);
    return new JsonRpcProvider(new HttpConnection(d2, z("disableProviderPing")));
  }
}
class tv {
  constructor(u3) {
    this.name = "cosmos", this.namespace = u3.namespace, this.events = z("events"), this.client = z("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(u3) {
    this.namespace = Object.assign(this.namespace, u3);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId)
      return this.chainId;
    if (this.namespace.defaultChain)
      return this.namespace.defaultChain;
    const u3 = this.namespace.chains[0];
    if (!u3)
      throw new Error("ChainId not found");
    return u3.split(":")[1];
  }
  request(u3) {
    return this.namespace.methods.includes(u3.request.method) ? this.client.request(u3) : this.getHttpProvider().request(u3.request);
  }
  setDefaultChain(u3, i2) {
    this.httpProviders[u3] || this.setHttpProvider(u3, i2), this.chainId = u3, this.events.emit(Vn.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
  }
  getAccounts() {
    const u3 = this.namespace.accounts;
    return u3 ? [...new Set(u3.filter((i2) => i2.split(":")[1] === this.chainId.toString()).map((i2) => i2.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const u3 = {};
    return this.namespace.chains.forEach((i2) => {
      var d2;
      const w3 = Ct(i2);
      u3[w3] = this.createHttpProvider(w3, (d2 = this.namespace.rpcMap) == null ? void 0 : d2[i2]);
    }), u3;
  }
  getHttpProvider() {
    const u3 = `${this.name}:${this.chainId}`, i2 = this.httpProviders[u3];
    if (typeof i2 > "u")
      throw new Error(`JSON-RPC provider for ${u3} not found`);
    return i2;
  }
  setHttpProvider(u3, i2) {
    const d2 = this.createHttpProvider(u3, i2);
    d2 && (this.httpProviders[u3] = d2);
  }
  createHttpProvider(u3, i2) {
    const d2 = i2 || ft(u3, this.namespace, this.client.core.projectId);
    if (!d2)
      throw new Error(`No RPC url provided for chainId: ${u3}`);
    return new JsonRpcProvider(new HttpConnection(d2, z("disableProviderPing")));
  }
}
class ev {
  constructor(u3) {
    this.name = "cip34", this.namespace = u3.namespace, this.events = z("events"), this.client = z("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(u3) {
    this.namespace = Object.assign(this.namespace, u3);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId)
      return this.chainId;
    if (this.namespace.defaultChain)
      return this.namespace.defaultChain;
    const u3 = this.namespace.chains[0];
    if (!u3)
      throw new Error("ChainId not found");
    return u3.split(":")[1];
  }
  request(u3) {
    return this.namespace.methods.includes(u3.request.method) ? this.client.request(u3) : this.getHttpProvider().request(u3.request);
  }
  setDefaultChain(u3, i2) {
    this.httpProviders[u3] || this.setHttpProvider(u3, i2), this.chainId = u3, this.events.emit(Vn.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
  }
  getAccounts() {
    const u3 = this.namespace.accounts;
    return u3 ? [...new Set(u3.filter((i2) => i2.split(":")[1] === this.chainId.toString()).map((i2) => i2.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const u3 = {};
    return this.namespace.chains.forEach((i2) => {
      const d2 = this.getCardanoRPCUrl(i2), w3 = Ct(i2);
      u3[w3] = this.createHttpProvider(w3, d2);
    }), u3;
  }
  getHttpProvider() {
    const u3 = `${this.name}:${this.chainId}`, i2 = this.httpProviders[u3];
    if (typeof i2 > "u")
      throw new Error(`JSON-RPC provider for ${u3} not found`);
    return i2;
  }
  getCardanoRPCUrl(u3) {
    const i2 = this.namespace.rpcMap;
    if (i2)
      return i2[u3];
  }
  setHttpProvider(u3, i2) {
    const d2 = this.createHttpProvider(u3, i2);
    d2 && (this.httpProviders[u3] = d2);
  }
  createHttpProvider(u3, i2) {
    const d2 = i2 || this.getCardanoRPCUrl(u3);
    if (!d2)
      throw new Error(`No RPC url provided for chainId: ${u3}`);
    return new JsonRpcProvider(new HttpConnection(d2, z("disableProviderPing")));
  }
}
class rv {
  constructor(u3) {
    this.name = "elrond", this.namespace = u3.namespace, this.events = z("events"), this.client = z("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(u3) {
    this.namespace = Object.assign(this.namespace, u3);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(u3) {
    return this.namespace.methods.includes(u3.request.method) ? this.client.request(u3) : this.getHttpProvider().request(u3.request);
  }
  setDefaultChain(u3, i2) {
    this.httpProviders[u3] || this.setHttpProvider(u3, i2), this.chainId = u3, this.events.emit(Vn.DEFAULT_CHAIN_CHANGED, `${this.name}:${u3}`);
  }
  getDefaultChain() {
    if (this.chainId)
      return this.chainId;
    if (this.namespace.defaultChain)
      return this.namespace.defaultChain;
    const u3 = this.namespace.chains[0];
    if (!u3)
      throw new Error("ChainId not found");
    return u3.split(":")[1];
  }
  getAccounts() {
    const u3 = this.namespace.accounts;
    return u3 ? [...new Set(u3.filter((i2) => i2.split(":")[1] === this.chainId.toString()).map((i2) => i2.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const u3 = {};
    return this.namespace.chains.forEach((i2) => {
      var d2;
      const w3 = Ct(i2);
      u3[w3] = this.createHttpProvider(w3, (d2 = this.namespace.rpcMap) == null ? void 0 : d2[i2]);
    }), u3;
  }
  getHttpProvider() {
    const u3 = `${this.name}:${this.chainId}`, i2 = this.httpProviders[u3];
    if (typeof i2 > "u")
      throw new Error(`JSON-RPC provider for ${u3} not found`);
    return i2;
  }
  setHttpProvider(u3, i2) {
    const d2 = this.createHttpProvider(u3, i2);
    d2 && (this.httpProviders[u3] = d2);
  }
  createHttpProvider(u3, i2) {
    const d2 = i2 || ft(u3, this.namespace, this.client.core.projectId);
    if (!d2)
      throw new Error(`No RPC url provided for chainId: ${u3}`);
    return new JsonRpcProvider(new HttpConnection(d2, z("disableProviderPing")));
  }
}
class iv {
  constructor(u3) {
    this.name = "multiversx", this.namespace = u3.namespace, this.events = z("events"), this.client = z("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(u3) {
    this.namespace = Object.assign(this.namespace, u3);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(u3) {
    return this.namespace.methods.includes(u3.request.method) ? this.client.request(u3) : this.getHttpProvider().request(u3.request);
  }
  setDefaultChain(u3, i2) {
    this.httpProviders[u3] || this.setHttpProvider(u3, i2), this.chainId = u3, this.events.emit(Vn.DEFAULT_CHAIN_CHANGED, `${this.name}:${u3}`);
  }
  getDefaultChain() {
    if (this.chainId)
      return this.chainId;
    if (this.namespace.defaultChain)
      return this.namespace.defaultChain;
    const u3 = this.namespace.chains[0];
    if (!u3)
      throw new Error("ChainId not found");
    return u3.split(":")[1];
  }
  getAccounts() {
    const u3 = this.namespace.accounts;
    return u3 ? [...new Set(u3.filter((i2) => i2.split(":")[1] === this.chainId.toString()).map((i2) => i2.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const u3 = {};
    return this.namespace.chains.forEach((i2) => {
      var d2;
      const w3 = Ct(i2);
      u3[w3] = this.createHttpProvider(w3, (d2 = this.namespace.rpcMap) == null ? void 0 : d2[i2]);
    }), u3;
  }
  getHttpProvider() {
    const u3 = `${this.name}:${this.chainId}`, i2 = this.httpProviders[u3];
    if (typeof i2 > "u")
      throw new Error(`JSON-RPC provider for ${u3} not found`);
    return i2;
  }
  setHttpProvider(u3, i2) {
    const d2 = this.createHttpProvider(u3, i2);
    d2 && (this.httpProviders[u3] = d2);
  }
  createHttpProvider(u3, i2) {
    const d2 = i2 || ft(u3, this.namespace, this.client.core.projectId);
    if (!d2)
      throw new Error(`No RPC url provided for chainId: ${u3}`);
    return new JsonRpcProvider(new HttpConnection(d2, z("disableProviderPing")));
  }
}
class sv {
  constructor(u3) {
    this.name = "near", this.namespace = u3.namespace, this.events = z("events"), this.client = z("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(u3) {
    this.namespace = Object.assign(this.namespace, u3);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId)
      return this.chainId;
    if (this.namespace.defaultChain)
      return this.namespace.defaultChain;
    const u3 = this.namespace.chains[0];
    if (!u3)
      throw new Error("ChainId not found");
    return u3.split(":")[1];
  }
  request(u3) {
    return this.namespace.methods.includes(u3.request.method) ? this.client.request(u3) : this.getHttpProvider().request(u3.request);
  }
  setDefaultChain(u3, i2) {
    if (this.chainId = u3, !this.httpProviders[u3]) {
      const d2 = i2 || ft(`${this.name}:${u3}`, this.namespace);
      if (!d2)
        throw new Error(`No RPC url provided for chainId: ${u3}`);
      this.setHttpProvider(u3, d2);
    }
    this.events.emit(Vn.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
  }
  getAccounts() {
    const u3 = this.namespace.accounts;
    return u3 ? u3.filter((i2) => i2.split(":")[1] === this.chainId.toString()).map((i2) => i2.split(":")[2]) || [] : [];
  }
  createHttpProviders() {
    const u3 = {};
    return this.namespace.chains.forEach((i2) => {
      var d2;
      u3[i2] = this.createHttpProvider(i2, (d2 = this.namespace.rpcMap) == null ? void 0 : d2[i2]);
    }), u3;
  }
  getHttpProvider() {
    const u3 = `${this.name}:${this.chainId}`, i2 = this.httpProviders[u3];
    if (typeof i2 > "u")
      throw new Error(`JSON-RPC provider for ${u3} not found`);
    return i2;
  }
  setHttpProvider(u3, i2) {
    const d2 = this.createHttpProvider(u3, i2);
    d2 && (this.httpProviders[u3] = d2);
  }
  createHttpProvider(u3, i2) {
    const d2 = i2 || ft(u3, this.namespace);
    return typeof d2 > "u" ? void 0 : new JsonRpcProvider(new HttpConnection(d2, z("disableProviderPing")));
  }
}
var uv = Object.defineProperty, av = Object.defineProperties, ov = Object.getOwnPropertyDescriptors, Ta = Object.getOwnPropertySymbols, fv = Object.prototype.hasOwnProperty, cv = Object.prototype.propertyIsEnumerable, La = (A2, u3, i2) => u3 in A2 ? uv(A2, u3, { enumerable: true, configurable: true, writable: true, value: i2 }) : A2[u3] = i2, hr = (A2, u3) => {
  for (var i2 in u3 || (u3 = {}))
    fv.call(u3, i2) && La(A2, i2, u3[i2]);
  if (Ta)
    for (var i2 of Ta(u3))
      cv.call(u3, i2) && La(A2, i2, u3[i2]);
  return A2;
}, Mi = (A2, u3) => av(A2, ov(u3));
class lr {
  constructor(u3) {
    this.events = new Ug(), this.rpcProviders = {}, this.shouldAbortPairingAttempt = false, this.maxPairingAttempts = 10, this.disableProviderPing = false, this.providerOpts = u3, this.logger = typeof (u3 == null ? void 0 : u3.logger) < "u" && typeof (u3 == null ? void 0 : u3.logger) != "string" ? u3.logger : Hg(k({ level: (u3 == null ? void 0 : u3.logger) || Ia })), this.disableProviderPing = (u3 == null ? void 0 : u3.disableProviderPing) || false;
  }
  static async init(u3) {
    const i2 = new lr(u3);
    return await i2.initialize(), i2;
  }
  async request(u3, i2, d2) {
    const [w3, L2] = this.validateChain(i2);
    if (!this.session)
      throw new Error("Please call connect() before request()");
    return await this.getProvider(w3).request({ request: hr({}, u3), chainId: `${w3}:${L2}`, topic: this.session.topic, expiry: d2 });
  }
  sendAsync(u3, i2, d2, w3) {
    const L2 = (/* @__PURE__ */ new Date()).getTime();
    this.request(u3, d2, w3).then((D2) => i2(null, formatJsonRpcResult(L2, D2))).catch((D2) => i2(D2, void 0));
  }
  async enable() {
    if (!this.client)
      throw new Error("Sign Client not initialized");
    return this.session || await this.connect({ namespaces: this.namespaces, optionalNamespaces: this.optionalNamespaces, sessionProperties: this.sessionProperties }), await this.requestAccounts();
  }
  async disconnect() {
    var u3;
    if (!this.session)
      throw new Error("Please call connect() before enable()");
    await this.client.disconnect({ topic: (u3 = this.session) == null ? void 0 : u3.topic, reason: U$2("USER_DISCONNECTED") }), await this.cleanup();
  }
  async connect(u3) {
    if (!this.client)
      throw new Error("Sign Client not initialized");
    if (this.setNamespaces(u3), await this.cleanupPendingPairings(), !u3.skipPairing)
      return await this.pair(u3.pairingTopic);
  }
  on(u3, i2) {
    this.events.on(u3, i2);
  }
  once(u3, i2) {
    this.events.once(u3, i2);
  }
  removeListener(u3, i2) {
    this.events.removeListener(u3, i2);
  }
  off(u3, i2) {
    this.events.off(u3, i2);
  }
  get isWalletConnect() {
    return true;
  }
  async pair(u3) {
    this.shouldAbortPairingAttempt = false;
    let i2 = 0;
    do {
      if (this.shouldAbortPairingAttempt)
        throw new Error("Pairing aborted");
      if (i2 >= this.maxPairingAttempts)
        throw new Error("Max auto pairing attempts reached");
      const { uri: d2, approval: w3 } = await this.client.connect({ pairingTopic: u3, requiredNamespaces: this.namespaces, optionalNamespaces: this.optionalNamespaces, sessionProperties: this.sessionProperties });
      d2 && (this.uri = d2, this.events.emit("display_uri", d2)), await w3().then((L2) => {
        this.session = L2;
        const D2 = Vg(L2.namespaces);
        this.namespaces = Oa(this.namespaces, D2), this.persist("namespaces", this.namespaces);
      }).catch((L2) => {
        if (L2.message !== ae)
          throw L2;
        i2++;
      });
    } while (!this.session);
    return this.onConnect(), this.session;
  }
  setDefaultChain(u3, i2) {
    try {
      if (!this.session)
        return;
      const [d2, w3] = this.validateChain(u3);
      this.getProvider(d2).setDefaultChain(w3, i2);
    } catch (d2) {
      if (!/Please call connect/.test(d2.message))
        throw d2;
    }
  }
  async cleanupPendingPairings(u3 = {}) {
    this.logger.info("Cleaning up inactive pairings...");
    const i2 = this.client.pairing.getAll();
    if (k$2(i2)) {
      for (const d2 of i2)
        u3.deletePairings ? this.client.core.expirer.set(d2.topic, 0) : await this.client.core.relayer.subscriber.unsubscribe(d2.topic);
      this.logger.info(`Inactive pairings cleared: ${i2.length}`);
    }
  }
  abortPairingAttempt() {
    this.shouldAbortPairingAttempt = true;
  }
  async checkStorage() {
    if (this.namespaces = await this.getFromStore("namespaces"), this.optionalNamespaces = await this.getFromStore("optionalNamespaces") || {}, this.client.session.length) {
      const u3 = this.client.session.keys.length - 1;
      this.session = this.client.session.get(this.client.session.keys[u3]), this.createProviders();
    }
  }
  async initialize() {
    this.logger.trace("Initialized"), await this.createClient(), await this.checkStorage(), this.registerEventListeners();
  }
  async createClient() {
    this.client = this.providerOpts.client || await Q$1.init({ logger: this.providerOpts.logger || Ia, relayUrl: this.providerOpts.relayUrl || Fg, projectId: this.providerOpts.projectId, metadata: this.providerOpts.metadata, storageOptions: this.providerOpts.storageOptions, storage: this.providerOpts.storage, name: this.providerOpts.name }), this.logger.trace("SignClient Initialized");
  }
  createProviders() {
    if (!this.client)
      throw new Error("Sign Client not initialized");
    if (!this.session)
      throw new Error("Session not initialized. Please call connect() before enable()");
    const u3 = [...new Set(Object.keys(this.session.namespaces).map((i2) => en(i2)))];
    Fi("client", this.client), Fi("events", this.events), Fi("disableProviderPing", this.disableProviderPing), u3.forEach((i2) => {
      if (!this.session)
        return;
      const d2 = Xg(i2, this.session), w3 = Sa(d2), L2 = Oa(this.namespaces, this.optionalNamespaces), D2 = Mi(hr({}, L2[i2]), { accounts: d2, chains: w3 });
      switch (i2) {
        case "eip155":
          this.rpcProviders[i2] = new jg({ namespace: D2 });
          break;
        case "solana":
          this.rpcProviders[i2] = new nv({ namespace: D2 });
          break;
        case "cosmos":
          this.rpcProviders[i2] = new tv({ namespace: D2 });
          break;
        case "polkadot":
          this.rpcProviders[i2] = new kg({ namespace: D2 });
          break;
        case "cip34":
          this.rpcProviders[i2] = new ev({ namespace: D2 });
          break;
        case "elrond":
          this.rpcProviders[i2] = new rv({ namespace: D2 });
          break;
        case "multiversx":
          this.rpcProviders[i2] = new iv({ namespace: D2 });
          break;
        case "near":
          this.rpcProviders[i2] = new sv({ namespace: D2 });
          break;
      }
    });
  }
  registerEventListeners() {
    if (typeof this.client > "u")
      throw new Error("Sign Client is not initialized");
    this.client.on("session_ping", (u3) => {
      this.events.emit("session_ping", u3);
    }), this.client.on("session_event", (u3) => {
      const { params: i2 } = u3, { event: d2 } = i2;
      if (d2.name === "accountsChanged") {
        const w3 = d2.data;
        w3 && k$2(w3) && this.events.emit("accountsChanged", w3.map(Qg));
      } else if (d2.name === "chainChanged") {
        const w3 = i2.chainId, L2 = i2.event.data, D2 = en(w3), En = Wi(w3) !== Wi(L2) ? `${D2}:${Wi(L2)}` : w3;
        this.onChainChanged(En);
      } else
        this.events.emit(d2.name, d2.data);
      this.events.emit("session_event", u3);
    }), this.client.on("session_update", ({ topic: u3, params: i2 }) => {
      var d2;
      const { namespaces: w3 } = i2, L2 = (d2 = this.client) == null ? void 0 : d2.session.get(u3);
      this.session = Mi(hr({}, L2), { namespaces: w3 }), this.onSessionUpdate(), this.events.emit("session_update", { topic: u3, params: i2 });
    }), this.client.on("session_delete", async (u3) => {
      await this.cleanup(), this.events.emit("session_delete", u3), this.events.emit("disconnect", Mi(hr({}, U$2("USER_DISCONNECTED")), { data: u3.topic }));
    }), this.on(Vn.DEFAULT_CHAIN_CHANGED, (u3) => {
      this.onChainChanged(u3, true);
    });
  }
  getProvider(u3) {
    if (!this.rpcProviders[u3])
      throw new Error(`Provider not found: ${u3}`);
    return this.rpcProviders[u3];
  }
  onSessionUpdate() {
    Object.keys(this.rpcProviders).forEach((u3) => {
      var i2;
      this.getProvider(u3).updateNamespace((i2 = this.session) == null ? void 0 : i2.namespaces[u3]);
    });
  }
  setNamespaces(u3) {
    const { namespaces: i2, optionalNamespaces: d2, sessionProperties: w3 } = u3;
    i2 && Object.keys(i2).length && (this.namespaces = i2), d2 && Object.keys(d2).length && (this.optionalNamespaces = d2), this.sessionProperties = w3, this.persist("namespaces", i2), this.persist("optionalNamespaces", d2);
  }
  validateChain(u3) {
    const [i2, d2] = (u3 == null ? void 0 : u3.split(":")) || ["", ""];
    if (!this.namespaces || !Object.keys(this.namespaces).length)
      return [i2, d2];
    if (i2 && !Object.keys(this.namespaces || {}).map((D2) => en(D2)).includes(i2))
      throw new Error(`Namespace '${i2}' is not configured. Please call connect() first with namespace config.`);
    if (i2 && d2)
      return [i2, d2];
    const w3 = en(Object.keys(this.namespaces)[0]), L2 = this.rpcProviders[w3].getDefaultChain();
    return [w3, L2];
  }
  async requestAccounts() {
    const [u3] = this.validateChain();
    return await this.getProvider(u3).requestAccounts();
  }
  onChainChanged(u3, i2 = false) {
    if (!this.namespaces)
      return;
    const [d2, w3] = this.validateChain(u3);
    w3 && (i2 || this.getProvider(d2).setDefaultChain(w3), this.namespaces[d2] ? this.namespaces[d2].defaultChain = w3 : this.namespaces[`${d2}:${w3}`] ? this.namespaces[`${d2}:${w3}`].defaultChain = w3 : this.namespaces[`${d2}:${w3}`] = { defaultChain: w3 }, this.persist("namespaces", this.namespaces), this.events.emit("chainChanged", w3));
  }
  onConnect() {
    this.createProviders(), this.events.emit("connect", { session: this.session });
  }
  async cleanup() {
    this.session = void 0, this.namespaces = void 0, this.optionalNamespaces = void 0, this.sessionProperties = void 0, this.persist("namespaces", void 0), this.persist("optionalNamespaces", void 0), this.persist("sessionProperties", void 0), await this.cleanupPendingPairings({ deletePairings: true });
  }
  persist(u3, i2) {
    this.client.core.storage.setItem(`${xa}/${u3}`, i2);
  }
  async getFromStore(u3) {
    return await this.client.core.storage.getItem(`${xa}/${u3}`);
  }
}
const hv = lr;
const P = "wc", S = "ethereum_provider", $ = `${P}@2:${S}:`, j = "https://rpc.walletconnect.com/v1/", u2 = ["eth_sendTransaction", "personal_sign"], E2 = ["eth_accounts", "eth_requestAccounts", "eth_sendRawTransaction", "eth_sign", "eth_signTransaction", "eth_signTypedData", "eth_signTypedData_v3", "eth_signTypedData_v4", "eth_sendTransaction", "personal_sign", "wallet_switchEthereumChain", "wallet_addEthereumChain", "wallet_getPermissions", "wallet_requestPermissions", "wallet_registerOnboarding", "wallet_watchAsset", "wallet_scanQRCode"], m = ["chainChanged", "accountsChanged"], _2 = ["chainChanged", "accountsChanged", "message", "disconnect", "connect"];
var N = Object.defineProperty, q = Object.defineProperties, D = Object.getOwnPropertyDescriptors, y2 = Object.getOwnPropertySymbols, U = Object.prototype.hasOwnProperty, Q2 = Object.prototype.propertyIsEnumerable, O = (a3, t, s) => t in a3 ? N(a3, t, { enumerable: true, configurable: true, writable: true, value: s }) : a3[t] = s, p2 = (a3, t) => {
  for (var s in t || (t = {}))
    U.call(t, s) && O(a3, s, t[s]);
  if (y2)
    for (var s of y2(t))
      Q2.call(t, s) && O(a3, s, t[s]);
  return a3;
}, M = (a3, t) => q(a3, D(t));
function g2(a3) {
  return Number(a3[0].split(":")[1]);
}
function f2(a3) {
  return `0x${a3.toString(16)}`;
}
function L(a3) {
  const { chains: t, optionalChains: s, methods: i2, optionalMethods: n2, events: e, optionalEvents: h4, rpcMap: c2 } = a3;
  if (!k$2(t))
    throw new Error("Invalid chains");
  const o = { chains: t, methods: i2 || u2, events: e || m, rpcMap: p2({}, t.length ? { [g2(t)]: c2[g2(t)] } : {}) }, r = e == null ? void 0 : e.filter((l2) => !m.includes(l2)), d2 = i2 == null ? void 0 : i2.filter((l2) => !u2.includes(l2));
  if (!s && !h4 && !n2 && !(r != null && r.length) && !(d2 != null && d2.length))
    return { required: t.length ? o : void 0 };
  const C2 = (r == null ? void 0 : r.length) && (d2 == null ? void 0 : d2.length) || !s, I2 = { chains: [...new Set(C2 ? o.chains.concat(s || []) : s)], methods: [...new Set(o.methods.concat(n2 != null && n2.length ? n2 : E2))], events: [...new Set(o.events.concat(h4 != null && h4.length ? h4 : _2))], rpcMap: c2 };
  return { required: t.length ? o : void 0, optional: s.length ? I2 : void 0 };
}
class v2 {
  constructor() {
    this.events = new eventsExports.EventEmitter(), this.namespace = "eip155", this.accounts = [], this.chainId = 1, this.STORAGE_KEY = $, this.on = (t, s) => (this.events.on(t, s), this), this.once = (t, s) => (this.events.once(t, s), this), this.removeListener = (t, s) => (this.events.removeListener(t, s), this), this.off = (t, s) => (this.events.off(t, s), this), this.parseAccount = (t) => this.isCompatibleChainId(t) ? this.parseAccountId(t).address : t, this.signer = {}, this.rpc = {};
  }
  static async init(t) {
    const s = new v2();
    return await s.initialize(t), s;
  }
  async request(t, s) {
    return await this.signer.request(t, this.formatChainId(this.chainId), s);
  }
  sendAsync(t, s, i2) {
    this.signer.sendAsync(t, s, this.formatChainId(this.chainId), i2);
  }
  get connected() {
    return this.signer.client ? this.signer.client.core.relayer.connected : false;
  }
  get connecting() {
    return this.signer.client ? this.signer.client.core.relayer.connecting : false;
  }
  async enable() {
    return this.session || await this.connect(), await this.request({ method: "eth_requestAccounts" });
  }
  async connect(t) {
    if (!this.signer.client)
      throw new Error("Provider not initialized. Call init() first");
    this.loadConnectOpts(t);
    const { required: s, optional: i2 } = L(this.rpc);
    try {
      const n2 = await new Promise(async (h4, c2) => {
        var o;
        this.rpc.showQrModal && ((o = this.modal) == null || o.subscribeModal((r) => {
          !r.open && !this.signer.session && (this.signer.abortPairingAttempt(), c2(new Error("Connection request reset. Please try again.")));
        })), await this.signer.connect(M(p2({ namespaces: p2({}, s && { [this.namespace]: s }) }, i2 && { optionalNamespaces: { [this.namespace]: i2 } }), { pairingTopic: t == null ? void 0 : t.pairingTopic })).then((r) => {
          h4(r);
        }).catch((r) => {
          c2(new Error(r.message));
        });
      });
      if (!n2)
        return;
      const e = Un(n2.namespaces, [this.namespace]);
      this.setChainIds(this.rpc.chains.length ? this.rpc.chains : e), this.setAccounts(e), this.events.emit("connect", { chainId: f2(this.chainId) });
    } catch (n2) {
      throw this.signer.logger.error(n2), n2;
    } finally {
      this.modal && this.modal.closeModal();
    }
  }
  async disconnect() {
    this.session && await this.signer.disconnect(), this.reset();
  }
  get isWalletConnect() {
    return true;
  }
  get session() {
    return this.signer.session;
  }
  registerEventListeners() {
    this.signer.on("session_event", (t) => {
      const { params: s } = t, { event: i2 } = s;
      i2.name === "accountsChanged" ? (this.accounts = this.parseAccounts(i2.data), this.events.emit("accountsChanged", this.accounts)) : i2.name === "chainChanged" ? this.setChainId(this.formatChainId(i2.data)) : this.events.emit(i2.name, i2.data), this.events.emit("session_event", t);
    }), this.signer.on("chainChanged", (t) => {
      const s = parseInt(t);
      this.chainId = s, this.events.emit("chainChanged", f2(this.chainId)), this.persist();
    }), this.signer.on("session_update", (t) => {
      this.events.emit("session_update", t);
    }), this.signer.on("session_delete", (t) => {
      this.reset(), this.events.emit("session_delete", t), this.events.emit("disconnect", M(p2({}, U$2("USER_DISCONNECTED")), { data: t.topic, name: "USER_DISCONNECTED" }));
    }), this.signer.on("display_uri", (t) => {
      var s, i2;
      this.rpc.showQrModal && ((s = this.modal) == null || s.closeModal(), (i2 = this.modal) == null || i2.openModal({ uri: t })), this.events.emit("display_uri", t);
    });
  }
  switchEthereumChain(t) {
    this.request({ method: "wallet_switchEthereumChain", params: [{ chainId: t.toString(16) }] });
  }
  isCompatibleChainId(t) {
    return typeof t == "string" ? t.startsWith(`${this.namespace}:`) : false;
  }
  formatChainId(t) {
    return `${this.namespace}:${t}`;
  }
  parseChainId(t) {
    return Number(t.split(":")[1]);
  }
  setChainIds(t) {
    const s = t.filter((i2) => this.isCompatibleChainId(i2)).map((i2) => this.parseChainId(i2));
    s.length && (this.chainId = s[0], this.events.emit("chainChanged", f2(this.chainId)), this.persist());
  }
  setChainId(t) {
    if (this.isCompatibleChainId(t)) {
      const s = this.parseChainId(t);
      this.chainId = s, this.switchEthereumChain(s);
    }
  }
  parseAccountId(t) {
    const [s, i2, n2] = t.split(":");
    return { chainId: `${s}:${i2}`, address: n2 };
  }
  setAccounts(t) {
    this.accounts = t.filter((s) => this.parseChainId(this.parseAccountId(s).chainId) === this.chainId).map((s) => this.parseAccountId(s).address), this.events.emit("accountsChanged", this.accounts);
  }
  getRpcConfig(t) {
    var s, i2;
    const n2 = (s = t == null ? void 0 : t.chains) != null ? s : [], e = (i2 = t == null ? void 0 : t.optionalChains) != null ? i2 : [], h4 = n2.concat(e);
    if (!h4.length)
      throw new Error("No chains specified in either `chains` or `optionalChains`");
    const c2 = n2.length ? (t == null ? void 0 : t.methods) || u2 : [], o = n2.length ? (t == null ? void 0 : t.events) || m : [], r = (t == null ? void 0 : t.optionalMethods) || [], d2 = (t == null ? void 0 : t.optionalEvents) || [], C2 = (t == null ? void 0 : t.rpcMap) || this.buildRpcMap(h4, t.projectId), I2 = (t == null ? void 0 : t.qrModalOptions) || void 0;
    return { chains: n2 == null ? void 0 : n2.map((l2) => this.formatChainId(l2)), optionalChains: e.map((l2) => this.formatChainId(l2)), methods: c2, events: o, optionalMethods: r, optionalEvents: d2, rpcMap: C2, showQrModal: !!(t != null && t.showQrModal), qrModalOptions: I2, projectId: t.projectId, metadata: t.metadata };
  }
  buildRpcMap(t, s) {
    const i2 = {};
    return t.forEach((n2) => {
      i2[n2] = this.getRpcUrl(n2, s);
    }), i2;
  }
  async initialize(t) {
    if (this.rpc = this.getRpcConfig(t), this.chainId = this.rpc.chains.length ? g2(this.rpc.chains) : g2(this.rpc.optionalChains), this.signer = await hv.init({ projectId: this.rpc.projectId, metadata: this.rpc.metadata, disableProviderPing: t.disableProviderPing, relayUrl: t.relayUrl, storageOptions: t.storageOptions }), this.registerEventListeners(), await this.loadPersistedSession(), this.rpc.showQrModal) {
      let s;
      try {
        const { WalletConnectModal: i2 } = await __vitePreload(() => import("./index-C5zDbQ-w.js").then((n2) => n2.i), true ? __vite__mapDeps([0,1,2]) : void 0, import.meta.url);
        s = i2;
      } catch {
        throw new Error("To use QR modal, please install @walletconnect/modal package");
      }
      if (s)
        try {
          this.modal = new s(p2({ projectId: this.rpc.projectId }, this.rpc.qrModalOptions));
        } catch (i2) {
          throw this.signer.logger.error(i2), new Error("Could not generate WalletConnectModal Instance");
        }
    }
  }
  loadConnectOpts(t) {
    if (!t)
      return;
    const { chains: s, optionalChains: i2, rpcMap: n2 } = t;
    s && k$2(s) && (this.rpc.chains = s.map((e) => this.formatChainId(e)), s.forEach((e) => {
      this.rpc.rpcMap[e] = (n2 == null ? void 0 : n2[e]) || this.getRpcUrl(e);
    })), i2 && k$2(i2) && (this.rpc.optionalChains = [], this.rpc.optionalChains = i2 == null ? void 0 : i2.map((e) => this.formatChainId(e)), i2.forEach((e) => {
      this.rpc.rpcMap[e] = (n2 == null ? void 0 : n2[e]) || this.getRpcUrl(e);
    }));
  }
  getRpcUrl(t, s) {
    var i2;
    return ((i2 = this.rpc.rpcMap) == null ? void 0 : i2[t]) || `${j}?chainId=eip155:${t}&projectId=${s || this.rpc.projectId}`;
  }
  async loadPersistedSession() {
    if (!this.session)
      return;
    const t = await this.signer.client.core.storage.getItem(`${this.STORAGE_KEY}/chainId`), s = this.session.namespaces[`${this.namespace}:${t}`] ? this.session.namespaces[`${this.namespace}:${t}`] : this.session.namespaces[this.namespace];
    this.setChainIds(t ? [this.formatChainId(t)] : s == null ? void 0 : s.accounts), this.setAccounts(s == null ? void 0 : s.accounts);
  }
  reset() {
    this.chainId = 1, this.accounts = [];
  }
  persist() {
    this.session && this.signer.client.core.storage.setItem(`${this.STORAGE_KEY}/chainId`, this.chainId);
  }
  parseAccounts(t) {
    return typeof t == "string" || t instanceof String ? [this.parseAccount(t)] : t.map((s) => this.parseAccount(s));
  }
}
const G = v2;
export {
  G as EthereumProvider,
  _2 as OPTIONAL_EVENTS,
  E2 as OPTIONAL_METHODS,
  m as REQUIRED_EVENTS,
  u2 as REQUIRED_METHODS,
  v2 as default
};
