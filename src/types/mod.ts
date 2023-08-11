/**
 * This file exports types used by the the partic11e core-types package
 * and its peer and dependant packages.
 *
 * @copyright 2022 integer11. All rights reserved. MIT license.
 */

//  Export enums
export {
  bDayOfWeek,
  bMonth,
  bUriComponent,
  ComparisonResult,
  ConsoleColor,
  ConsoleTextDecoration,
  ControlKeyCode,
  DayOfWeek,
  FunctionKeyCode,
  InputKeyCode,
  KeyCode,
  MediaKeyCode,
  Month,
  NavigationKeyCode,
  NumPadKeyCode,
  VolumeKeyCode,
} from './enums.ts';

//  Export interfaces
export type {
  IDisposable,
  IHelpful,
  TCloneable,
  TComparable,
  TEquatable,
  TFormatProvider,
  TFormattable,
  TObservable,
  TObserver,
  TSerializable,
  TServicable,
} from './interfaces.ts';

//  Export type aliases
export type {
  AnonymousObject,
  Codebase,
  Constructor,
  DecoratorTarget,
  Defined,
  Dictionary,
  Falsey,
  FileSystemEntry,
  GenericSoftwareOperation,
  List,
  Native,
  NonPracticableSoftwareOperation,
  Nullish,
  NumericFormat,
  OneOrMany,
  Parser,
  PracticableSoftwareOperation,
  Primitive,
  Scalar,
  SharedSoftwareOperation,
  SoftwareOperation,
} from './types.ts';
