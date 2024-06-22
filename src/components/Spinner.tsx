export const Spinner = () => {
	return (
		<div className="border border-blue-300 shadow rounded-md p-4 my-9  w-full mx-auto">
			<div className="animate-pulse flex space-x-4">
				<div className="rounded-full bg-slate-700 h-24 w-24"></div>
				<div className="flex-1  py-1 flex">
					<div className="space-y-3">
						<div className="h-2 bg-slate-700 rounded w-40"></div>
						<div className="h-2 bg-slate-700 rounded w-40"></div>
					</div>
					<div className="h-2 bg-slate-700 rounded"></div>
				</div>
			</div>
		</div>
	);
};
