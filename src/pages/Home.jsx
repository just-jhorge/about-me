import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MessageCard from "../components/MessageCard";
import supabase from "../config/supabaseConfig";

const Home = () => {
	const [messages, setMessages] = useState(null);
	const [fetchError, setFetchError] = useState(null);

	useEffect(() => {
		const fetchMessages = async () => {
			const { data, error } = await supabase.from("quotes").select("*");

			if (error) {
				setFetchError("Error fetching message");
				setMessages(null);
			}

			if (data) {
				setMessages(data);
				setFetchError(null);
			}
		};

		fetchMessages();
	}, []);

	return (
		<div>
			{fetchError && <p>{fetchError}</p>}
			{messages && (
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
					{messages.map((message) => (
						<MessageCard key={message.id} message={message} />
					))}
				</div>
			)}
		</div>
	);
};

export default Home;
