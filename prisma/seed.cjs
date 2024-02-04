'use strict';
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function (thisArg, body) {
    var _ = {
        label: 0,
        sent: function () {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: [],
      },
      f,
      y,
      t,
      g;
    return (
      (g = { next: verb(0), throw: verb(1), return: verb(2) }),
      typeof Symbol === 'function' &&
        (g[Symbol.iterator] = function () {
          return this;
        }),
      g
    );
    function verb(n) {
      return function (v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError('Generator is already executing.');
      while ((g && ((g = 0), op[0] && (_ = 0)), _))
        try {
          if (((f = 1), y && (t = op[0] & 2 ? y['return'] : op[0] ? y['throw'] || ((t = y['return']) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)) return t;
          if (((y = 0), t)) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (!((t = _.trys), (t = t.length > 0 && t[t.length - 1])) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
Object.defineProperty(exports, '__esModule', { value: true });
var client_1 = require('@prisma/client');
var prisma = new client_1.PrismaClient();
function seed() {
  return __awaiter(this, void 0, void 0, function () {
    return __generator(this, function (_a) {
      getJokes();
      return [2 /*return*/];
    });
  });
}
seed();
function getJokes() {
  return __awaiter(this, void 0, void 0, function () {
    var createMany1, createMany2, createMany3;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [
            4 /*yield*/,
            prisma.movies.createMany({
              data: [
                { myId: 1, name: 'Tokyo Story' },
                { myId: 2, name: 'Seven Samurai' },
                { myId: 877, name: 'Blade Runner 2049' },
                { myId: 878, name: 'Shazam!' },
                { myId: 879, name: 'American Masters' },
              ],
              skipDuplicates: true, // Skip 'Bobo'
            }),
          ];
        case 1:
          createMany1 = _a.sent();
          return [
            4 /*yield*/,
            prisma.actors.createMany({
              data: [
                { myId: 1, name: 'Bess Flowers' },
                { myId: 2, name: 'Sam Harris' },
                { myId: 3, name: 'Bert Stevens' },
                { myId: 4, name: 'William H. OBrien' },
                { myId: 5, name: 'Ward Bond' },
                { myId: 5787, name: 'Abe Vigoda' },
                { myId: 5788, name: 'Abel Gance' },
                { myId: 5789, name: 'Abdelghafour Elaaziz' },
                { myId: 5790, name: 'Aaron Eckhart' },
              ],
              skipDuplicates: true, // Skip 'Bobo'
            }),
          ];
        case 2:
          createMany2 = _a.sent();
          return [
            4 /*yield*/,
            prisma.assoc.createMany({
              data: [
                { myId: 1, movie: 1, actor: 53 },
                { myId: 2, movie: 1, actor: 1927 },
                { myId: 3, movie: 1, actor: 573 },
                { myId: 16046, movie: 879, actor: 4670 },
                { myId: 16047, movie: 879, actor: 2515 },
              ],
              skipDuplicates: true, // Skip 'Bobo'
            }),
          ];
        case 3:
          createMany3 = _a.sent();
          return [2 /*return*/];
      }
    });
  });
}
