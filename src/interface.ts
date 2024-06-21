
export interface IStudent {
	name: String;
	avg: number;
	avartar: String | any;
	handle: any;
}

export interface IGdData {
	_id: any;
	score: number;
	student: String;
	assignment: {
		topic: String;
	};
}