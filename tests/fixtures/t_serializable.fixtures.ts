/**
 * Test fixtures for the TSerializable interface.
 *
 * @copyright 2022 integer11. All rights reserved. MIT license.
 */

import { TSerializable } from '../../mod.ts';

type AuditInfo = {
  name: string;
  timestamp: number;
  action: string;
};

type DetailedAuditInfo = {
  name: string;
  date: string;
  action: string;
};

class SerializableTest implements TSerializable<DetailedAuditInfo> {
  #auditInfo: AuditInfo;

  constructor(name: string, timestamp: number, action: string) {
    this.#auditInfo = { name, timestamp, action };
  }

  serialize(): DetailedAuditInfo {
    const { action, name, timestamp } = this.#auditInfo;
    const date = new Date(timestamp);

    const detailedAuditInfo: DetailedAuditInfo = {
      name,
      date: date.toISOString(),
      action,
    };

    return detailedAuditInfo;
  }
}

export const fixtures = [
  [new SerializableTest('John Doe', 1609459200000, 'created'), {
    name: 'John Doe',
    date: '2021-01-01T00:00:00.000Z',
    action: 'created',
  }],
  [new SerializableTest('Jane Doe', 1609545600000, 'updated'), {
    name: 'Jane Doe',
    date: '2021-01-02T00:00:00.000Z',
    action: 'updated',
  }],
  [new SerializableTest('John Doe', 1609632000000, 'deleted'), {
    name: 'John Doe',
    date: '2021-01-03T00:00:00.000Z',
    action: 'deleted',
  }],
] as const;
