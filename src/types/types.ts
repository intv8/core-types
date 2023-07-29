/**
 * This file exports type aliases used by the the partic11e core-types package
 * and its peer and dependant packages.
 *
 * For type aliases, see ./interfaces.ts.
 *
 * @copyright 2022 integer11. All rights reserved. MIT license.
 */

/** Alias for an object with any number of properties, each of which are of unknown, or unspecified, value. */
export type AnonymousObject = Record<number | string | symbol, unknown>;

/** Alias for types that are scalar, meaning can be represented as a single value. */
export type Scalar = boolean | bigint | number | string | symbol;

/** Alias for types that are falsey, meaning they are `false`, `0`, the empty string, `null`, or `undefined`. */
export type Falsey = false | 0 | '' | null | undefined;

/** Alias for types that are nullish, meaning they are `null` or `undefined`. */
export type Nullish = null | undefined;

/** Alias for types that are immutable and primitive, meaning they are {@link Scalar}, `null`, or `undefined`. */
export type Primitive = Scalar | undefined;

/**
 * Alias for class constructors.
 *
 * @param T - The type of the class.
 */
export type Constructor<T> = new (...args: unknown[]) => T;

/**
 * Alias for a dictionary, or object, with keys of type `K` and values of type `T`.
 *
 * @param T - The type of the values.
 * @param K - The type of the keys.
 */
export type Dictionary<T, K extends keyof AnonymousObject = string> = Record<
  K,
  T
>;

/**
 * Alias for value, that if defined, is of type `T`, otherwise is of type `never`.
 *
 * @param T - The type of the value if defined.
 */
export type Defined<T> = T extends undefined ? never : T;

/** Alias for all of the native types in JavaScript. */
export type Native =
  | Primitive
  // deno-lint-ignore ban-types
  | Function
  | Date
  | Error
  | RegExp
  | AnonymousObject
  | List<unknown>;

/**
 * Alias for a typed array.
 *
 * @param T - The type of the array elements.
 */
export type List<T> = T[];

/**
 * Alias for a value that can be either a single value of type `T`, or a `List` of values of type `T`.
 *
 * @param T - The type of the value(s).
 */
export type OneOrMany<T> = T | List<T>;

/**
 * Specifies the integer11 recognized types of codebases.
 *
 * @see https://partic11e.docs.integer11.org/#/n/codebases
 */
export type Codebase =
  | 'module'
  | 'package'
  | 'library'
  | 'application'
  | 'extension'
  | 'framework'
  | 'plugin'
  | 'adapter'
  | 'toolkit'
  | 'sdk'
  | 'api'
  | 'platform'
  | 'engine'
  | 'theme';

/** Specifies a generic operation. */
export type GenericSoftwareOperation = 'operation';

/**
 * Specifies the types of non-practicable operations.
 *
 * Non-practicable operations are those pre-defined by software authors and
 * initiated by a pre-defined schedule or event.
 *
 * @see https://partic11e.docs.integer11.org/#/n/software-operations?id=philosophy
 */
export type NonPracticableSoftwareOperation =
  | 'process'
  | 'event';

/**
 * Specifies the types of practicable operations.
 *
 * Practicable operations are those that an end-user of an application may be directly involved.
 *
 * @see https://partic11e.docs.integer11.org/#/n/software-operations?id=philosophy
 */
export type PracticableSoftwareOperation = 'action';

/** Specifies the types of operations that can be practicable and non-practicable. */
export type SharedSoftwareOperation =
  | 'request'
  | 'task'
  | 'workflow'
  | 'build'
  | 'trigger';

/** Specifies all the types of software operations. */
export type SoftwareOperation =
  | NonPracticableSoftwareOperation
  | PracticableSoftwareOperation
  | SharedSoftwareOperation
  | GenericSoftwareOperation;

/** Specifies the types of TypeScript decorator targets. */
export type DecoratorTarget =
  | 'class'
  | 'method'
  | 'property'
  | 'parameter'
  | 'accessor';

/** Specifies the types of file system entries. */
export type FileSystemEntry =
  | 'directory'
  | 'file'
  | 'symlink';

/** Specifies the default supported formats for numeric values. */
export type NumericFormat =
  | 'int'
  | 'float'
  | 'time'
  | 'date'
  | 'datetime'
  | 'currency'
  | 'percentage'
  | 'text'
  | 'fraction'
  | 'custom';

/** Specifies the default supported parsers for text. */
export type Parser =
  | 'json'
  | 'yaml'
  | 'toml'
  | 'xml'
  | 'datetime'
  | 'custom';
