interface Path {
  path: string | [];
}

declare module "lodash" {
  function head(array: []): [];
  function hasIn(object: object, key: string): boolean;
  function isBoolean(value: any): boolean;
  function toString(value: any): string;
  function split(string: string, separator: string, limit: number): [];
  function hasPath(object: object, path: Path): boolean;
  function filter(array: [], predicate: Function): [];
  function every(array: [], predicate: Function): [];
  function map(array: [], iteratee: Function): [];
}
