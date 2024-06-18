import { codeBreaker } from "./mastermind/scripts/board";
// const codemaker = require('./mastermind/assets/scripts/board');
global.structuredClone = (val) => JSON.parse(JSON.stringify(val))

describe("Mastermind", () => {
    let codebreaker = [];
    beforeEach(() => {
        window.localStorage.clear();
    })
  let codemaker = [0, 2, 1, 5];
  let code;
  test("Full correct", () => {
    code = [ 0, 2, 1, 5 ];
    expect(codeBreaker(code, codemaker )).toStrictEqual([ [ [ 0, 2, 1, 5 ], [ 2, 2, 2, 2 ], 2, 1 ] ]);
  });
  test("Full fail", () => {
    code = [ 4, 3, 3, 4 ];
    expect(codeBreaker(code, codemaker )).toStrictEqual([ [ [ 4, 3, 3, 4 ], [], 1, 1 ] ]);
  });
  test("Duplicates in key, 3 pass", () => {
    codemaker = [0, 0, 1, 5]
    code = [0, 2, 1, 5 ];
    expect(codeBreaker(code, codemaker )).toStrictEqual([ [ [0, 2, 1, 5 ], [ 2, 2, 2 ], 1, 1 ] ]);
    return
  });
  test("Duplicates in key, 2e, 1p", () => {
    codemaker = [0, 4, 1, 5]
    code = [3, 0, 1, 5 ];
    expect(codeBreaker(code, codemaker )).toStrictEqual([ [ [3, 0, 1, 5 ], [ 2, 2, 1 ], 1, 1 ] ]);
    return
  });
  // test("Duplicates in guess", () => {
  //   code = [0, 2, 1, 0 ];
  //   expect(codeBreaker(code, codemaker )).toStrictEqual([ [ [ 0, 2, 1, 0 ], [ 2, 2, 2], 1, 1 ] ]);
  // });
  // test("Duplicates in both", () => {
  //   code = [0, 2, 1, 5 ];
  //   expect(codeBreaker(code, codemaker )).toStrictEqual([ [ [ 0, 2, 1, 5 ], [ 2, 2, 2, 2 ], 2, 1 ] ]);
  // });
});
