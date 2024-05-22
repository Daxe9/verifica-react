import { useState } from "react";
import { signup } from "./apiCalls";

export default function RegistrazioneForm() {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [message, setMessage] = useState("");

	async function handleClick() {
		setIsLoading(true);
		const res = await signup(username, email, password);
		if (res.status) {
			setMessage("Registrazione completa");
		} else {
			setMessage(
				"Registrazione fallita, si prega di cambiare username o email"
			);
		}
		setIsLoading(false);
	}

	return (
		<div>
			<h3>Registrazione</h3>
			<div>
				<label>Username</label>
				<input
					type="text"
					onChange={(e) => {
						setUsername(e.target.value);
					}}
				/>
			</div>
			<div>
				<label>Email</label>
				<input
					type="email"
					onChange={(e) => {
						setEmail(e.target.value);
					}}
				/>
			</div>
			<div>
				<label>Password</label>
				<input
					type="password"
					onChange={(e) => {
						setPassword(e.target.value);
					}}
				/>
			</div>
			<input
				type="submit"
				value="Submit"
				onClick={handleClick}
				disabled={isLoading}
			/>
			{isLoading ? (
				<p>Registrazione in corso</p>
			) : (
				message && <p>{message}</p>
			)}
		</div>
	);
}
