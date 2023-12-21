'use client';

import React, { useState, useEffect } from 'react';

const Login: React.FC = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const handleLogin = () => {
		// Lógica de autenticação aqui
		console.log('Usuário:', username);
		console.log('Senha:', password);
	};

	return (
		<div>
			<h1>Login</h1>
			<form>
				<label>
					Usuário:
					<input
						type="text"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
				</label>
				<br />
				<label>
					Senha:
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</label>
				<br />
				<button
					type="button"
					onClick={handleLogin}
				>
					Entrar
				</button>
			</form>
		</div>
	);
};

export default Login;
