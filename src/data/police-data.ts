import { BaseData } from './base-data';

const moduleNameAliases: Record<string, string> = {
  CAD: 'Cad',
  Warrants: 'Warrants',
};

/**
 * Compatibility facade for page objects migrated from the legacy PoliceData API.
 * A property such as getAnimalControlModuleValue maps to AnimalControl.json.
 */
export const PoliceData: Record<string, (columnName: string) => string> = new Proxy(
  {},
  {
    get(_target, property: string | symbol) {
      if (typeof property !== 'string') {
        return undefined;
      }

      const match = /^get(.+)ModuleValue$/.exec(property);
      if (!match) {
        return undefined;
      }

      const moduleName = moduleNameAliases[match[1]] || match[1];
      return (columnName: string) => BaseData.getModuleValue(moduleName, columnName);
    },
  },
);
