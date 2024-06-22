import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { getById } from "../../api.js";
import { sumFunc } from "../../utils.js";
// import { IGdData } from "../../interface.js";
export const Card = ({ data }: any) => {
	const [grade, setGrade] = useState<number>(0);

	const fetchData = async (studentId: any) => {
		const grades = await getById("grades/students", studentId);
		setGrade(
			grades?.data?.length > 0
				? sumFunc(grades?.data) / grades?.data?.length
				: 0
		);
	};

	useEffect(() => {
		return () => {
			fetchData(data._id);
		};
	}, []);
	// const AVG =
	return (
		<Link to={`/user/${data._id}`}>
			<motion.div
				initial={{ opacity: 0, scale: 0.5 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.5 }}
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.9 }}
				className="grid grid-cols-2 text-2xl my-9  bg-opacity-5 bg-white rounded-md gap-5 h-28 overflow-hidden hover:shadow-md items-center pr-5 hover:shadow-slate-800 transition duration-300 ease-in-out">
				<div className="flex items-center flex-initial w-auto">
					<img
						src={`${data.avartar}`}
						alt="Student"
						className="h-32 w-32  mr-5 object-cover"
					/>
					<div className="">
						<h3 className="text-xl">{data.name}</h3>
						<p className="text-sm bg-slate-900 bg-opacity-20 p-2 rounded">
							Guild Audit
						</p>
					</div>
				</div>
				{/* <p className='ml-auto text-centers'>{data.accumilativeGrades}</p> */}

				<div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
					<div
						className={`${
							grade > 50 ? "bg-green-400" : "bg-red-400"
						} text-xs font-medium text-gray-900 text-center p-0.5 leading-none rounded-full`}
						style={{ width: `${grade}%` }}>
						{`${grade}%`}
					</div>
				</div>
			</motion.div>
		</Link>
	);
};
