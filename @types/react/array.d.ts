export {};

declare global {
	interface Array<T> {
		findLast: (predicate: (value: T) => boolean) => T | undefined;
		findLastIndex(predicate: (value: T, index: number, obj: T[]) => unknown, thisArg?: any): number;
	}
}
