import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { login, loginUser } from "../../../services/auth";

import "./LoginForm.css";
import axios from "axios";

export function LoginForm() {

    const [perfil, setPerfil] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    async function handleLogin() {
        setError("");

    if (!email && !password) {
        setError("Preencha o e-mail e a senha.");
        return;
    }

    if (!email) {
        setError("Informe seu e-mail.");
        return;
    }

    if (!password) {
        setError("Informe sua senha.");
        return;
    }
        try {
            const dados = await loginUser(email, password);

            login(dados.token, dados.role);

            navigate("/dashboard");

        
        } catch (error) {
           
           if (axios.isAxiosError(error)) {
            const status = error.response?.status;

            if (status === 403) {
                setError("E-mail ou senha incorretos. Tente novamente.");
            } else if (status === 500) {
                setError("Erro no servidor. Tente novamente mais tarde.");
            } else {
                setError("Não foi possível realizar o login.");
            }
        } else {
            setError("Ocorreu um erro inesperado.");
        }
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
                
    {error && (
    <div className="login-error"> {error} </div> )}

                {/* Entrar */}
                <button
                    className="login-button"
                    onClick={handleLogin}>
                   
                    Entrar
                </button>

            </div>

        </div>

        
    );
}