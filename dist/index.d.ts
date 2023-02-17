interface Difference {
	type: "CREATE" | "REMOVE" | "CHANGE";
	path: (string | number)[];
	value?: any;
	oldValue?: any;
}
export default function patch(
	obj: Record<string, any> | any[],
	diffs: Difference[]
): Record<string, any> | any[];
export {};
