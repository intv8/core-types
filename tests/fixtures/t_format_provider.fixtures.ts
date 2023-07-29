/**
 * Test fixtures for the TFormatProvider interface.
 *
 * @copyright 2022 integer11. All rights reserved. MIT license.
 */

import { TFormatProvider } from '../../mod.ts';

class FormatProviderTest implements TFormatProvider {
  public format(value: Date): string {
    const date = value.getDate();
    const month = value.getMonth() + 1;
    const year = value.getFullYear();
    const digitHours = value.getHours();
    const digitMinutes = value.getMinutes();

    const hours = digitHours < 10 ? `0${digitHours}` : digitHours;
    const minutes = digitMinutes < 10 ? `0${digitMinutes}` : digitMinutes;

    return `${month}/${date}/${year} ${hours}:${minutes}`;
  }
}

export const instance = new FormatProviderTest();

export const fixtures = [
  [instance, new Date(2020, 0, 1, 0, 0), '1/1/2020 00:00'],
  [instance, new Date(2021, 1, 2, 3, 15), '2/2/2021 03:15'],
  [instance, new Date(2022, 2, 3, 6, 30), '3/3/2022 06:30'],
  [instance, new Date(2023, 3, 4, 9, 45), '4/4/2023 09:45'],
  [instance, new Date(2024, 4, 5, 12, 0), '5/5/2024 12:00'],
  [instance, new Date(2025, 5, 6, 15, 15), '6/6/2025 15:15'],
  [instance, new Date(2026, 6, 7, 18, 30), '7/7/2026 18:30'],
  [instance, new Date(2027, 7, 8, 21, 45), '8/8/2027 21:45'],
  [instance, new Date(2028, 8, 9, 23, 59), '9/9/2028 23:59'],
] as const;
