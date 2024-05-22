import logo from "./logo.svg";
import "./App.css";
import RegistrazioneForm from "./RegistrazioneForm";
import LoginForm from "./LoginForm";
import { useState } from "react";

function App() {
	const [showRegisterForm, setShowRegisterForm] = useState(false);
	const [showLoginForm, setShowLoginForm] = useState(false);
	const [isLogged, setIsLogged] = useState(false);
	const [userInfo, setUserInfo] = useState(["", "", "", "", ""]);

	function showInfo(id, username, email, token, reg_date) {
		setIsLogged(true);
		setUserInfo([id, username, email, token, reg_date]);
	}

	function showRegister() {
		if (showRegisterForm) {
			setShowRegisterForm(false);
		} else {
			setShowRegisterForm(true);
			setShowLoginForm(false);
		}
	}

	function showLogin() {
		if (showLoginForm) {
			setShowLoginForm(false);
		} else {
			setShowLoginForm(true);
			setShowRegisterForm(false);
		}
	}

	return (
		<div className="App">
			<h2>Verifica</h2>
			{isLogged ? (
				<>
					<table>
						<tbody>
							<tr>
								<td>Id</td>
								<td>{userInfo[0]}</td>
							</tr>
							<tr>
								<td>Username</td>
								<td>{userInfo[0]}</td>
							</tr>
							<tr>
								<td>Email</td>
								<td>{userInfo[2]}</td>
							</tr>
							<tr>
								<td>Token</td>
								<td>{userInfo[3]}</td>
							</tr>
							<tr>
								<td>Data Registrazione</td>
								<td>{userInfo[4]}</td>
							</tr>
						</tbody>
					</table>
				</>
			) : (
				<>
					<input
						type="button"
						value="Registrazione"
						onClick={showRegister}
					/>
					{showRegisterForm && <RegistrazioneForm />}

					<br />
					<input type="button" value="Login" onClick={showLogin} />
					{showLoginForm && <LoginForm loginHandler={showInfo} />}
				</>
			)}
		</div>
	);
}

export default App;
