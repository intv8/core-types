/**
 * Test fixtures for the TServicable interface.
 *
 * @copyright 2022 integer11. All rights reserved. MIT license.
 */

import { TServicable } from '../../mod.ts';

class PersonSvc {
  public readonly name: string = 'PersonAPIService';
}

class GroupSvc {
  public readonly name: string = 'GroupAPIService';
}

type ApiServiceRouterMap = {
  people: PersonSvc;
  groups: GroupSvc;
};

class ApiServiceRouter implements TServicable<ApiServiceRouterMap> {
  service<T extends keyof ApiServiceRouterMap>(
    name: T,
  ): ApiServiceRouterMap[T] {
    switch (name) {
      case 'people':
        return new PersonSvc();
      case 'groups':
        return new GroupSvc();
      default:
        throw new Error(`Unknown service name: ${name}`);
    }
  }
}

export const fixtures = [
  //  [instance, serviceName, expectedServiceName]
  [new ApiServiceRouter(), 'people', 'PersonAPIService'],
  [new ApiServiceRouter(), 'groups', 'GroupAPIService'],
] as const;
