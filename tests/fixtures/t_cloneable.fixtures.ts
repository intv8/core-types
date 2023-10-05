/**
 * Test fixtures for the TCloneable interface.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

import { TCloneable } from '../../mod.ts';

class CloneableTest implements TCloneable<CloneableTest> {
  constructor(public readonly name: string) {}

  public clone(): ThisType<CloneableTest> {
    return new CloneableTest(this.name);
  }
}

export const fixtures = [
  [new CloneableTest('foo'), new CloneableTest('foo')],
  [new CloneableTest('bar'), new CloneableTest('bar')],
  [new CloneableTest('baz'), new CloneableTest('baz')],
] as const;
