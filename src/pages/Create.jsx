import { useState } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../config/supabaseConfig";

const Create = () => {
	const navigate = useNavigate();
	const [message, setMessage] = useState("");
	const [rating, setRating] = useState("1");

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(rating);

		const { data, error } = await supabase
			.from("quotes")
			.insert([{ message, rating }]);

		if (error) {
			console.log(error);
		}
		if (data) {
			console.log(data);
		}

		// clear fields
		setMessage("");

		setTimeout(() => {
			navigate("/");
		}, 500);
	};

	return (
		<div>
			<form
				onSubmit={handleSubmit}
				className="flex flex-col gap-y-5 items-start justify-center"
			>
				<div className="w-full">
					<label
						className="block mb-2 text-sm font-medium text-gray-900"
						htmlFor="message"
					>
						Message:
					</label>
					<textarea
						rows={4}
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
						id="message"
						value={message}
						onChange={(e) => setMessage(e.target.value)}
						required
					/>
				</div>
				<div className="w-full">
					<label
						htmlFor="rating"
						className="block mb-2 text-sm font-medium text-gray-900"
					>
						Rate Me:
					</label>
					<select
						value={rating}
						onChange={(e) => setRating(e.target.value)}
						id="rating"
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
					>
						<option value="1">1 - Eh 👎🏾</option>
						<option value="2">2 - Whatever 😒 </option>
						<option value="3">3 - Normal 😕</option>
						<option value="4">4 - Awesome 😎</option>
						<option value="5">5 - He Rocks 🤘🏾</option>
					</select>
				</div>

				<div className="w-full">
					<p
						id="helper-text-explanation"
						className="mt-2 text-sm text-gray-500"
					>
						Everything is totally anonymous.
					</p>
				</div>

				<button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
					Post Message
				</button>
			</form>
		</div>
	);
};

export default Create;
