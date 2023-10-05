/**
 * Tests TServicable interface.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

import { assertEquals, describe, it } from '../dev_deps.ts';

import { fixtures } from './fixtures/t_servicable.fixtures.ts';

describe('TServicable', () => {
  it('should be valid', () => {
    fixtures.forEach(([instance, group, expected]) => {
      const actual = instance.service(group);

      assertEquals(actual.name, expected);
    });
  });
});
