const SmoothieCard = ({ message }) => {
	const d = new Date(message.created_at);
	const day = d.getDate();
	const month = d.getMonth();
	const year = d.getFullYear();

	const date = `${day}-${month + 1}-${year}`;

	return (
		<div className="relative flex flex-col items-start justify-between bg-white shadow-md px-3 py-4 rounded-lg">
			<p>{message.message}</p>
			<div className="absolute -top-3 -right-2 bg-blue-800 text-white h-8 w-8 flex items-center justify-center rounded-full">
				{message.rating}
			</div>
			<div className="w-full flex items-end justify-between text-gray-400 text-xs mt-3">
				<p>Anonymous</p>
				<p>{date}</p>
			</div>
		</div>
	);
};

export default SmoothieCard;
