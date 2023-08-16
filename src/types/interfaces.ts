/**
 * This file exports interfaces used by the the partic11e core-types package
 * and its peer and dependant packages.
 *
 * For type aliases, see ./types.ts.
 *
 * @copyright 2022 integer11. All rights reserved. MIT license.
 */

import { ComparisonResult } from './enums/comparison_result.ts';

/** Provides a property containing the URL to a help page associated with the current class. */
export interface IHelpful {
  /** The URL to a help page associated with the current class. */
  helpUrl: string;
}

/** Provides a mechanism to dispose of resources associated with the current class. */
export interface IDisposable {
  /** Dispose of resources associated with the current instance. */
  dispose(): void;

  /** A value indicating whether the current instance has been disposed. */
  isDisposed: boolean;
}

/**
 * Provides a mechanism to create an instance of a class with the same value as the original instance.
 *
 * @typeparam T Provided for brevity and should always be the current class.
 */
export interface TCloneable<T> {
  /** Creates and returns an instance of a class with the same value as the original. */
  clone(): ThisType<T>;
}

/**
 * Provides a mechanism to compare the current class instance to another instance.
 *
 * @typeparam T The types the current instance can compare to.
 */
export interface TEquatable<T> {
  /** Compare the current instance to an `other` instance to determine equality. */
  equalTo(other: T): boolean;
}

/**
 * Provides a mechanism to compare the current class instance to another instance.
 *
 * @typeparam T The types the current instance can compare to.
 */
export interface TComparable<T> {
  /** Compare the current instance to an `other` instance, optionally reversing the equality check. */
  compareTo(other: T, reverse?: boolean): ComparisonResult;
}

/**
 * Provides a mechanism to format the current class instance as a `string`, optionally using a {@link TFormatProvider}.
 *
 * @typeparam T The types that can format the instance as a `string`.
 */
export interface TFormattable<
  T extends TFormatProvider | string = TFormatProvider | string,
> {
  /** Format the current instance as a `string`, optionally using a {@link TFormatProvider}, `formatProvider`. */
  format(formatProvider?: T): string;
}

/**
 * Provides a mechanism to format a value of type `T` as a `string`.
 *
 * @typeparam T The type of the value to format as a `string`.
 */
// deno-lint-ignore no-explicit-any
export interface TFormatProvider<T extends any = any> {
  /** Format a `value` of type `T` as a `string`. */
  format(value: T): string;
}

/**
 * Provides a mechanism to serialize the current class instance to a value of type `T`.
 *
 * @typeparam T The type to serialize the instance to.
 */
export interface TSerializable<T> {
  /** Serialize the current instance to a value of type `T`. */
  serialize(): T;
}

/**
 * Provides a mechanism to push notifications to subscribed {@link TObserver} instances.
 *
 * @typeparam T The type of the value to push to subscribed {@link TObserver} instances.
 */
export interface TObservable<T> {
  /** Subscribe a `TObserver` to push notifications, returning an `IDisposable` to unsubscribe. */
  subscribe(observer: TObserver<T>): IDisposable;
}

/**
 * Provides a mechanism to receive push notifications from a {@link TObservable}.
 *
 * @typeparam T The type of the value to receive from a {@link TObservable}.
 */
export interface TObserver<T> {
  /** Receive a push notification with new data from a {@link TObservable}. */

  next(value: T): void;

  /** Receive a notification from a {@link TObservable} that an error has occurred. */
  error(error: Error): void;

  /** Receive a notification from a {@link TObservable} that it has finished sending notifications. */
  complete(): void;
}

/**
 * Provides a mechanism to retrieve a service of type `T[S]` by identifier `S`.
 *
 * @typeparam T The service type map, mapping service identifiers to service types.
 */
// deno-lint-ignore no-explicit-any
export interface TServicable<T extends Record<string | number | symbol, any>> {
  /**
   * Retrieve a service of type `T[S]` by identifier `S`.
   *
   * @typeparam S The type of the service identifier.
   */
  service<S extends keyof T>(serviceIdentifier: S): T[S];
}
