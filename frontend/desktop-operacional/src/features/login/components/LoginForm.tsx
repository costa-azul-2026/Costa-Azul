import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { login, loginUser } from "../../../services/auth";

import "./LoginForm.css";

export function LoginForm() {

    const [perfil, setPerfil] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    async function handleLogin() {
        try {
            const dados = await loginUser(email, password);

            login(dados.token, dados.user);

            navigate("/dashboard");

        } catch (error) {
            console.log("Erro ao fazer login:", error);
        }
    }

    return (
        <div className="login-form-page">

            <div className="login-form">

                {/* Título */}
                <h1 className="text-titulo-pequeno font-bold">
                    Acesso ao sistema
                </h1>

                <p className="text-legenda text-center text-gray-600">
                    Selecione seu perfil de gestão e insira suas credenciais
                </p>

                {/* Perfil */}
                <p className="self-start text-legenda mt-18 mb-2">
                    Escolha seu perfil de acesso
                    <span className="text-red-500">*</span>
                </p>

                <div className="flex gap-4 mt-2 w-full justify-center">

                    <button
                        onClick={() => setPerfil("Companhia")}
                        className={
                            perfil === "Companhia"
                                ? "profile-button profile-button--selected"
                                : "profile-button"
                        }
                    >
                        Companhia
                    </button>

                    <button
                        onClick={() => setPerfil("Tripulante")}
                        className={
                            perfil === "Tripulante"
                                ? "profile-button profile-button--selected"
                                : "profile-button"
                        }
                    >
                        Tripulante
                    </button>

                </div>

                {/* Inputs */}
                <div className="flex flex-col gap-4 mt-4 w-full">

                    <div className="flex flex-col">

                        <label
                            htmlFor="email"
                            className="text-legenda mb-1"
                        >
                            Email
                            <span className="text-red-500">*</span>
                        </label>

                        <input
                            type="email"
                            id="email"
                            placeholder="nome.sobrenome@email.corporativo.com"
                            className="login-input"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                    </div>

                    <div className="flex flex-col">

                        <label
                            htmlFor="password"
                            className="text-legenda mb-1"
                        >
                            Senha
                            <span className="text-red-500">*</span>
                        </label>

                        <input
                            type="password"
                            id="password"
                            placeholder="Digite sua senha"
                            className="login-input"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                    </div>

                    <a
                        href="#"
                        className="text-blue-400 hover:underline self-end text-rotulo"
                    >
                        Esqueceu sua senha?
                    </a>

                </div>

                {/* Entrar */}
                <button
                    className="login-button"
                    onClick={handleLogin}
                >
                    Entrar
                </button>

            </div>

        </div>
    );
}