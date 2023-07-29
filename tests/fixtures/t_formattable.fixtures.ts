/**
 * Test fixtures for the TFormattable interface.
 *
 * @copyright 2022 integer11. All rights reserved. MIT license.
 */

import { TFormatProvider, TFormattable } from '../../mod.ts';

import { instance } from './t_format_provider.fixtures.ts';

class FormattableTest extends Date implements TFormattable {
  public format(provider?: TFormatProvider<Date>): string {
    if (provider) {
      return provider.format(this);
    } else {
      return this.toString();
    }
  }
}

export const fixtures = [
  [
    new FormattableTest(2020, 0, 1, 0, 0),
    instance,
    '1/1/2020 00:00',
  ],
  [
    new FormattableTest(2021, 1, 2, 3, 15),
    instance,
    '2/2/2021 03:15',
  ],
  [
    new FormattableTest(2022, 2, 3, 6, 30),
    instance,
    '3/3/2022 06:30',
  ],
  [
    new FormattableTest(2023, 3, 4, 9, 45),
    instance,
    '4/4/2023 09:45',
  ],
  [
    new FormattableTest(2024, 4, 5, 12, 0),
    instance,
    '5/5/2024 12:00',
  ],
  [
    new FormattableTest(2025, 5, 6, 15, 15),
    instance,
    '6/6/2025 15:15',
  ],
  [
    new FormattableTest(2026, 6, 7, 18, 30),
    instance,
    '7/7/2026 18:30',
  ],
  [
    new FormattableTest(2027, 7, 8, 21, 45),
    instance,
    '8/8/2027 21:45',
  ],
  [
    new FormattableTest(2028, 8, 9, 23, 59),
    instance,
    '9/9/2028 23:59',
  ],
] as const;
