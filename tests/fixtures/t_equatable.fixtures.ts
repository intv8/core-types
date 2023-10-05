/**
 * Test fixtures for the TEquatable interface.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

import { TEquatable } from '../../mod.ts';

class EquatableTest implements TEquatable<EquatableTest> {
  constructor(public readonly name: string) {}

  public equalTo(other: EquatableTest): boolean {
    return this.name === other.name;
  }
}

const foo = new EquatableTest('foo');
const bar = new EquatableTest('bar');
const baz = new EquatableTest('baz');

export const fixtures = [
  [foo, foo, true],
  [foo, bar, false],
  [foo, baz, false],
  [bar, foo, false],
  [bar, bar, true],
  [bar, baz, false],
  [baz, foo, false],
  [baz, bar, false],
  [baz, baz, true],
] as const;
