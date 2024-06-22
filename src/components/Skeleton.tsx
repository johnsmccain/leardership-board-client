export default function Skeleton() {
	return (
		<div className="border border-blue-300 shadow rounded-md p-2 w-full mx-auto mt-9">
			<div className="animate-pulse flex space-x-4">
				<div className="flex-1 space-y-6 py-1">
					<div className="h-2 bg-slate-700 rounded w-52"></div>
					<div className="h-2 bg-slate-700 rounded"></div>
				</div>
			</div>
		</div>
	);
}
