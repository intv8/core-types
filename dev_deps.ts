/**
 * This file re-exports external development dependencies used by the intv8
 * core-types package.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

export {
  afterAll,
  afterEach,
  beforeAll,
  beforeEach,
  describe,
  it,
} from 'https://deno.land/std@0.203.0/testing/bdd.ts';

export {
  assert,
  assertEquals,
  unimplemented,
} from 'https://deno.land/std@0.203.0/assert/mod.ts';

export {
  assertSpyCalls,
  spy,
  stub,
} from 'https://deno.land/std@0.203.0/testing/mock.ts';
