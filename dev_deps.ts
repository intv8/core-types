/**
 * This file re-exports external development dependencies used by the partic11e
 * core-types package.
 *
 * @copyright 2022 integer11. All rights reserved. MIT license.
 */

//  Used for creating and setting up the test suite for a feature
export {
  afterAll,
  afterEach,
  beforeAll,
  beforeEach,
  describe,
  it,
} from 'https://deno.land/std@0.196.0/testing/bdd.ts';

//  Used for testing feature conditions or error tests not yet implemented
export {
  assert,
  assertEquals,
  unimplemented,
} from 'https://deno.land/std@0.196.0/assert/mod.ts';

//  Used for observer pattern testing
export {
  assertSpyCalls,
  spy,
  stub,
} from 'https://deno.land/std@0.196.0/testing/mock.ts';
