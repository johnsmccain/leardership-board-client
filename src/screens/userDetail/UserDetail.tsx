import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { getById } from "../../api.js";
import { sumFunc } from "../../utils.js";
import { IGdData, IStudent } from "../../interface.js";
import Skeleton from "../../components/Skeleton.js";

export const UserDetail = () => {
	const { id } = useParams();
	// console.log(id)
	const [grades, setGrades] = useState<IGdData[]>([]);
	const [student, setStudent] = useState<IStudent>();
	const fetchData = async (studentId: String) => {
		const grades = await getById("grades/students", studentId);
		const students = await getById("students", studentId);
		setGrades(grades.data);
		setStudent(students.data);
	};

	useEffect(() => {
		// console.log(student)
		fetchData(id as String);
	}, []);

	const AVG = grades.length > 0 ? sumFunc(grades) / grades.length : 0;
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 max-sm:p-5  p-9 gap-5 max-md:flex-col w-full h-full container m-auto overflow-hidden ">
			<Tilt
				// initial={{ opacity: 0, scale: 0.5 }}
				// animate={{ opacity: 1, scale: 1 }}
				// transition={{ duration: 0.5 }}
				// whileHover={{ scale: 0.9 }}
				// whileTap={{ scale: 0.9 }}
				className="relative shadow-md w-[70%] max-sm:p-1 max-sm:m-2 max-sm:w-[90%] bg-black bg-opacity-70 h-full  rounded-2xl  flex items-center  m-auto ">
				<div className="">
					<img
						src={student?.avartar}
						alt=""
						className="w-full max-sm:w-[100px]"
					/>
					{/* <img src={``} alt="" className=' w-full'/> */}
				</div>
				<div className=" bottom-0 p-4 max-sm:w-full rounded-tr-lg rounded-bl-md ">
					<div className="max-sm:mb-2">
						<h2 className="text-lg font-bold">{student?.name}</h2>
						<p className="">{student?.handle}</p>
					</div>
					<div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
						<div
							className={`${
								AVG > 50 ? "bg-green-400" : "bg-red-400"
							} text-xs font-medium text-gray-800 text-center p-0.5 leading-none rounded-full`}
							style={{ width: `${AVG}%` }}>
							{`${AVG}%`}
						</div>
					</div>
				</div>
			</Tilt>

			<motion.div className="bg-black bg-opacity-10 p-5 rounded-xl h-full overflow-scroll no-scrollbar">
				<ul className="">
					{grades.length
						? grades.map((gdData: IGdData) => {
								return (
									<motion.li
										initial={{ opacity: 0, scale: 0.5 }}
										animate={{ opacity: 1, scale: 1 }}
										transition={{ duration: 0.5 }}
										// whileHover={{ scale: 1.1 }}
										whileTap={{ scale: 0.9 }}
										key={gdData?._id}
										className="p-2 bg-gray-500 bg-opacity-5 mb-3 rounded-md hover:shadow-lg x">
										<p className="mb-3">{gdData.assignment.topic}</p>
										{/* <span className="">{gdData.grade}</span> */}
										<div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
											<div
												className={`${
													gdData?.score > 50 ? "bg-green-400" : "bg-red-400"
												} text-xs font-medium text-black text-center p-0.5 leading-none rounded-full`}
												style={{ width: `${gdData?.score}%` }}>
												{`${gdData?.score}%`}
											</div>
										</div>
									</motion.li>
								);
						  })
						: [12, 3, 33, 4, 45].map((i: number) => <Skeleton key={i} />)}
				</ul>
			</motion.div>
		</div>
	);
};
