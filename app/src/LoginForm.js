import { useState } from "react";
import { login, getAccount } from "./apiCalls";

export default function LoginForm({loginHandler}) {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	async function handleLogin() {
		setIsLoading(true);
        const response = await login(username, password);
        const info = await getAccount(response.token);
        loginHandler(info.id, info.username, info.email, info.token, info.reg_date)
		setIsLoading(false);
	}

	return (
		<div>
            <h3>Login</h3>
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
				<label>Password</label>
				<input
					type="password"
					onChange={(e) => {
						setPassword(e.target.value);
					}}
				/>
			</div>
			<input type="submit" value="Submit" onClick={handleLogin} />

			{isLoading && (
				<p>Registrazione in corso</p>
			)}
		</div>
	);
}
