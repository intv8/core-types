/**
 * Test fixtures for the PropertyComparer interface.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

import { ComparisonResult, PropertyComparer } from '../../mod.ts';

interface TestObject {
  foo: string;
  bar: string;
  baz: string;
}

const foo = new PropertyComparer<TestObject>('foo');
const bar = new PropertyComparer<TestObject>('bar');
const baz = new PropertyComparer<TestObject>('baz');

const a: TestObject = {
  foo: 'foo',
  bar: 'bar',
  baz: 'baz',
} as const;

const b: TestObject = {
  foo: 'bar',
  bar: 'foo',
  baz: 'baz',
} as const;

const c: TestObject = {
  foo: 'baz',
  bar: 'baz',
  baz: 'baz',
} as const;

export const fixtures = [
  [
    foo,
    a,
    a,
    false,
    ComparisonResult.Equal,
  ],
  [
    foo,
    a,
    b,
    false,
    ComparisonResult.Greater,
  ],
  [
    foo,
    a,
    c,
    false,
    ComparisonResult.Greater,
  ],
  [
    foo,
    a,
    a,
    true,
    ComparisonResult.Equal,
  ],
  [
    foo,
    a,
    b,
    true,
    ComparisonResult.Lesser,
  ],
  [
    foo,
    a,
    c,
    true,
    ComparisonResult.Lesser,
  ],
  [
    bar,
    a,
    a,
    false,
    ComparisonResult.Equal,
  ],
  [
    bar,
    a,
    b,
    false,
    ComparisonResult.Lesser,
  ],
  [
    bar,
    a,
    c,
    false,
    ComparisonResult.Lesser,
  ],
  [
    bar,
    a,
    a,
    true,
    ComparisonResult.Equal,
  ],
  [
    bar,
    a,
    b,
    true,
    ComparisonResult.Greater,
  ],
  [
    bar,
    a,
    c,
    true,
    ComparisonResult.Greater,
  ],
  [
    baz,
    a,
    a,
    false,
    ComparisonResult.Equal,
  ],
  [
    baz,
    a,
    b,
    false,
    ComparisonResult.Equal,
  ],
  [
    baz,
    a,
    c,
    false,
    ComparisonResult.Equal,
  ],
  [
    baz,
    a,
    a,
    true,
    ComparisonResult.Equal,
  ],
  [
    baz,
    a,
    b,
    true,
    ComparisonResult.Equal,
  ],
  [
    baz,
    a,
    c,
    true,
    ComparisonResult.Equal,
  ],
] as const;
