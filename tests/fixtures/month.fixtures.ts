/**
 * Test fixtures for the Month enum.
 *
 * @copyright 2022 integer11. All rights reserved. MIT license.
 */

import { Month } from '../../mod.ts';

export const forwardValidity = [
  [Month.January, 0],
  [Month.February, 1],
  [Month.March, 2],
  [Month.April, 3],
  [Month.May, 4],
  [Month.June, 5],
  [Month.July, 6],
  [Month.August, 7],
  [Month.September, 8],
  [Month.October, 9],
  [Month.November, 10],
  [Month.December, 11],
] as const;

export const reverseValidity = [
  [Month[Month.January], 'January'],
  [Month[Month.February], 'February'],
  [Month[Month.March], 'March'],
  [Month[Month.April], 'April'],
  [Month[Month.May], 'May'],
  [Month[Month.June], 'June'],
  [Month[Month.July], 'July'],
  [Month[Month.August], 'August'],
  [Month[Month.September], 'September'],
  [Month[Month.October], 'October'],
  [Month[Month.November], 'November'],
  [Month[Month.December], 'December'],
] as const;
