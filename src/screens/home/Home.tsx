import { useEffect, useState } from "react";
import { Card } from "../../components/card/Card";
import { getAll } from "../../api";
import { IGdData } from "../../interface";
import { Spinner } from "../../components/Spinner";
export const Home = () => {
	const [grades, setGrades] = useState([]);
	const fetchData = async () => {
		const grades = await getAll("grades");
		const students = await getAll("students");

		setGrades(grades.data);
		setGrades(students.data);
	};
	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div className="mx-auto max-w-[700px] bg-black bg-opacity-30 rounded-md grid p-5 h-[90%] overflow-hidden  text-amber-50">
			<div className="grid grid-cols-2 text-2xl my-3">
				<h2 className="w-[70%] text-center">Profile</h2>

				<h2 className="text-center">AVG</h2>
			</div>
			<div className=" overflow-y-scroll no-scrollbar">
				{grades.length
					? grades.map((data: IGdData) => <Card data={data} key={data._id} />)
					: [12, 3, 33, 4, 45].map((i: number) => <Spinner key={i} />)}
			</div>
		</div>
	);
};
