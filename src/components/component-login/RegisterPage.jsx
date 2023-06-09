import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../shared/api";
import TextField from "@mui/material/TextField";
import { Button, Typography } from "@mui/material";

export default function RegisterPage() {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showRegisterError, setShowRegisterError] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");
  const navigate = useNavigate();

  const handleRegister = async (event) => {
    try {
      event.preventDefault();
      const response = await api.post("http://localhost:3000/auth/register", {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      });
      navigate("/registered");
      console.log(response.data);
    } catch (error) {
      const typeError = error.response.data.message;
      const typeStatusError = error.response.status;
      if (typeStatusError === 409 && typeError === "Email already exists") {
        setShowRegisterError(true);
        setErrorMessage("Este email ya esta registrado.");
        console.log(typeof typeError);
      } else {
        console.log(typeStatusError);
        const ERRORS = {
          "firstName should not be empty": "Debe ingresar un nombre.",
          "lastName should not be empty": "Debe ingresar un apellido.",
          "password must be longer than or equal to 5 characters":
            "La contraseña debe tener mas de 5 caracteres.",
          "password should not be empty": "Debe ingresar una contraseña.",
          "email should not be empty": "Debe ingresar un Email.",
          "email must be an email": "Ingrese un Email valido.",
        };
        const errorMap = typeError.map((message) => ERRORS[message]);
        console.log(errorMap);
        setShowRegisterError(true);
        setErrorMessage(errorMap);
      }
    }
  };

  return (
    <div className="bg-white px-10 py-20 rounded-3xl border-2 border-gray-200">
      <h1 className="text-5xl font-semibold">Registrate</h1>
      <p className="font-medium text-lg text-gray-500 mt-4">
        Crea tu cuenta en pocos pasos.
      </p>
      <form onSubmit={handleRegister}>
        <div className="mt-8">
          <div>
            <TextField
              margin="normal"
              width="50%"
              id="firstName"
              label="Nombre"
              name="firstName"
              autoComplete="firstName"
              autoFocus
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
              InputProps={{
                sx: {
                  borderRadius: "12px",
                  mr: 0.8,
                },
              }}
            />
            <TextField
              margin="normal"
              width="50%"
              id="lastName"
              label="Apellido"
              name="lastName"
              autoComplete="lastName"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
              InputProps={{
                sx: {
                  borderRadius: "12px",
                  ml: 0.8,
                },
              }}
            />
          </div>

          <div>
            <TextField
              margin="normal"
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              InputProps={{
                sx: {
                  borderRadius: "12px",
                },
              }}
            />
          </div>

          <div>
            <TextField
              margin="normal"
              fullWidth
              type="password"
              id="password"
              label="Contraseña"
              name="password"
              autoComplete="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              InputProps={{
                sx: {
                  borderRadius: "12px",
                },
              }}
            />
          </div>

          {showRegisterError && (
            <Typography
              sx={{
                color: "#EF4844",
              }}
            >
              {Array.isArray(errorMessage) ? (
                errorMessage.map((message, index) => (
                  <div key={index}>{message}</div>
                ))
              ) : (
                <div>{errorMessage}</div>
              )}
            </Typography>
          )}

          <div className="mt-8 flex flex-col gap-y-4">
            <Button type="submit"
              onClick={handleRegister}
              className="bg-violet-500 hover:bg-violet-700 hover:scale-[1.01] active:scale-[.95] transition-all py-3 rounded-xl text-white text-lg font-bold"
              sx={{
                backgroundColor: "#8B5CF6",
                color: "#fff",
                borderRadius: "0.75rem",
                padding: "0.75rem 0.75rem",
                fontSize: "1.105rem",
                fontWeight: "bold",
                fontFamily: "applesystem, BlinkMacSystemFont, Segoe UI, Roboto",
                textTransform: "capitalize",
                letterSpacing: 0.1,
                "&:hover": {
                  backgroundColor: "#4F46E5",
                  transform: "scale(1.01)",
                  transition: "all 0.2s ease-in-out",
                },
                "&:active": {
                  transform: "scale(0.95)",
                  transition: "all 0.2s ease-in-out",
                },
              }}
            >
              Registrate
            </Button>

            <div className="mt-8 flex justify-center items-center ">
              <p className="font-medium text-base">¿Ya estas registrado?</p>
              <Link to="/login">
                <button className="text-violet-500 text-base font-medium ml-2">
                  Inicia Sesión
                </button>
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
