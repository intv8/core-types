/**
 * Checks validity of type aliases.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

import { assert, describe, it } from '../dev_deps.ts';

import {
  AnonymousObject,
  Codebase,
  Comparer,
  Constructor,
  Defined,
  Dictionary,
  Falsey,
  GenericSoftwareOperation,
  List,
  Native,
  NonPracticableSoftwareOperation,
  Nullish,
  OneOrMany,
  PracticableSoftwareOperation,
  Primitive,
  Scalar,
  SharedSoftwareOperation,
  SoftwareOperation,
} from '../mod.ts';

const _anonObject: AnonymousObject = {
  a: 1,
  b: '2',
  c: true,
  d: {
    e: 3,
    f: '4',
    g: false,
  },
  h: [
    5,
    '6',
    true,
    {
      i: 7,
      j: '8',
      k: false,
    },
  ],
  1: 9,
  2: '10',
  3: true,
  4: {
    5: 11,
    6: '12',
    7: false,
  },
  8: [
    13,
    '14',
    true,
    {
      9: 15,
      10: '16',
      11: false,
    },
  ],
  [Symbol('a')]: 17,
  [Symbol('b')]: '18',
  [Symbol('c')]: true,
  [Symbol('d')]: {
    [Symbol('e')]: 19,
    [Symbol('f')]: '20',
    [Symbol('g')]: false,
  },
  [Symbol('h')]: [
    21,
    '22',
    true,
    {
      [Symbol('i')]: 23,
      [Symbol('j')]: '24',
      [Symbol('k')]: false,
    },
  ],
};

const _scalarBool: Scalar = true;
const _scalarNum: Scalar = 1;
const _scalarStr: Scalar = '2';
const _scalarSym: Scalar = Symbol('a');
const _scalarBigInt: Scalar = BigInt(3);

const _falseyBool: Falsey = false;
const _falseyNum: Falsey = 0;
const _falseyStr: Falsey = '';
const _falseyNull: Falsey = null;
const _falseyUndefined: Falsey = undefined;

const _nullishNull: Nullish = null;
const _nullishUndefined: Nullish = undefined;

const _primitiveBool: Primitive = true;
const _primitiveNum: Primitive = 1;
const _primitiveStr: Primitive = '2';
const _primitiveSym: Primitive = Symbol('a');
const _primitiveBigInt: Primitive = BigInt(3);
const _primitiveUndefined: Primitive = undefined;

class _Ctor {
  constructor() {
    //
  }
}

const _constructor: Constructor<_Ctor> = _Ctor;

const _dictionaryAnyKey: Dictionary<number> = {
  a: 1,
  b: 2,
  c: 3,
};

const _dictionaryKeys: Dictionary<number, 'a' | 'b' | 'c'> = {
  a: 1,
  b: 2,
  c: 3,
};

const _defined: Defined<number> = 1;
let _undefined: Defined<number>;

const _nativeBool: Native = true;
const _nativeNum: Native = 1;
const _nativeStr: Native = '2';
const _nativeSym: Native = Symbol('a');
const _nativeBigInt: Native = BigInt(3);
const _nativeFunc: Native = () => {
  //
};
const _nativeDate: Native = new Date();
const _nativeError: Native = new Error();
const _nativeRegExp: Native = new RegExp('a');
const _nativeArray: Native = [1, 2, 3];
const _nativeObject: Native = _anonObject;

const _list: List<number> = [1, 2, 3];

const _oneOrManyList: OneOrMany<number> = [1, 2, 3];
const _oneOrManyScalar: OneOrMany<number> = 1;

const _codebaseModule: Codebase = 'module';
const _codebasePackage: Codebase = 'package';
const _codebaseLibrary: Codebase = 'library';
const _codebaseApplication: Codebase = 'application';
const _codebaseExtension: Codebase = 'extension';
const _codebaseFramework: Codebase = 'framework';
const _codebasePlugin: Codebase = 'plugin';
const _codebaseAdapter: Codebase = 'adapter';
const _codebaseToolkit: Codebase = 'toolkit';
const _codebaseSdk: Codebase = 'sdk';
const _codebaseApi: Codebase = 'api';
const _codebasePlatform: Codebase = 'platform';
const _codebaseEngine: Codebase = 'engine';
const _codebaseTheme: Codebase = 'theme';

const _genericSoftwareOperationGeneric: GenericSoftwareOperation = 'operation';

const _nonPracticableSoftwareOperationProcess: NonPracticableSoftwareOperation =
  'process';
const _nonPracticableSoftwareOperationEvent: NonPracticableSoftwareOperation =
  'event';

const _practicableSoftwareOperationAction: PracticableSoftwareOperation =
  'action';

const _sharedSoftwareOperationRequest: SharedSoftwareOperation = 'request';
const _sharedSoftwareOperationTask: SharedSoftwareOperation = 'task';
const _sharedSoftwareOperationWorkflow: SharedSoftwareOperation = 'workflow';
const _sharedSoftwareOperationBuild: SharedSoftwareOperation = 'build';
const _sharedSoftwareOperationTrigger: SharedSoftwareOperation = 'trigger';

const _softwareOperationGeneric: SoftwareOperation = 'operation';
const _softwareOperationProcess: SoftwareOperation = 'process';
const _softwareOperationEvent: SoftwareOperation = 'event';
const _softwareOperationAction: SoftwareOperation = 'action';
const _softwareOperationRequest: SoftwareOperation = 'request';
const _softwareOperationTask: SoftwareOperation = 'task';
const _softwareOperationWorkflow: SoftwareOperation = 'workflow';
const _softwareOperationBuild: SoftwareOperation = 'build';
const _softwareOperationTrigger: SoftwareOperation = 'trigger';

const _comparer1: Comparer<number> = (a, b) => a - b;
const _comparer2: Comparer<number> = {
  compare: (a, b) => a - b,
};

describe('type aliases', () => {
  it('should be valid', () => {
    assert(true);
  });
});
