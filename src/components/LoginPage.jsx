import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../shared/login";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

export default function LoginPage() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showLoginError, setShowLoginError] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    try {
      event.preventDefault();
      await login(email, password);
      navigate("/dashboard");
    } catch (error) {
      const typeError = error.response.data.message;

      const ERRORS = {
        "password must be longer than or equal to 5 characters":
          "Email o contraseña incorrectos.",
        "password should not be empty": "No puede haber campos vacios.",
        "email should not be empty": "No puede haber campos vacios.",
        "email must be an email": "Ingrese un Email valido.",
      };
      const errorMap = typeError.map((message) => ERRORS[message]);
      console.log(errorMap);
      setShowLoginError(true);
      setErrorMessage(errorMap);

      /* console.log(error.response.data.message);
      if (error.response.data.message === "Invalid credentials") {
        setShowLoginError(true);
        setErrorMessage("Email o contraseña incorrectos.");
      } if (typeError.find(item => item === "password should not be empty")) {
        setShowLoginError(true);
        setErrorMessage("No puede haber campos vacios.");
      } */
    }
  };

  return (
    <div className="bg-white px-10 py-20 rounded-3xl border-2 border-gray-200">
      <h1 className="text-5xl font-semibold font-semibold">Crea B10</h1>
      <p
        className="font-medium text-lg
             text-gray-500 mt-4"
      >
        Bienvenido! Por favor ingresa tus credenciales.
      </p>
      <form onSubmit={handleLogin}>
        <div className="mt-8">
          <div>
            <TextField
              margin="normal"
              color="primary"
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
              id="password"
              type="password"
              label="Contraseña"
              name="password"
              autoComplete="current-password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              InputProps={{
                sx: {
                  borderRadius: "12px",
                },
              }}
            />
          </div>

          {showLoginError && (
            <Typography className="text-red-600 text-sm mt-2">
              {errorMessage.map((message, index) => (
                <div key={index}>{message}</div>
              ))}
            </Typography>
          )}

          <div className="mt-8 flex justify-between items-center">
            <div>
              <input type="checkbox" id="remember" />
              <label className="ml-2 font-medium text-base" for="remember">
                Recordar
              </label>
            </div>
            <button className="font-medium text-base text-violet-500">
              ¿Olvidaste la contraseña?
            </button>
          </div>
          <div className="mt-8 flex flex-col gap-y-4">
            <Button
              onClick={handleLogin}
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
              {" "}
              Ingresar{" "}
            </Button>
            <button className="flex rounded-xl py-3 border-2 border-gray-200 items-center justify-center gap-2 hover:scale-[1.01] ease-in-out active:scale-[.95] transition-all">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.26644 9.76453C6.19903 6.93863 8.85469 4.90909 12.0002 4.90909C13.6912 4.90909 15.2184 5.50909 16.4184 6.49091L19.9093 3C17.7821 1.14545 15.0548 0 12.0002 0C7.27031 0 3.19799 2.6983 1.24023 6.65002L5.26644 9.76453Z"
                  fill="#EA4335"
                />
                <path
                  d="M16.0406 18.0142C14.9508 18.718 13.5659 19.0926 11.9998 19.0926C8.86633 19.0926 6.21896 17.0785 5.27682 14.2695L1.2373 17.3366C3.19263 21.2953 7.26484 24.0017 11.9998 24.0017C14.9327 24.0017 17.7352 22.959 19.834 21.0012L16.0406 18.0142Z"
                  fill="#34A853"
                />
                <path
                  d="M19.8342 20.9978C22.0292 18.9503 23.4545 15.9019 23.4545 11.9982C23.4545 11.2891 23.3455 10.5255 23.1818 9.81641H12V14.4528H18.4364C18.1188 16.0119 17.2663 17.2194 16.0407 18.0108L19.8342 20.9978Z"
                  fill="#4A90E2"
                />
                <path
                  d="M5.27698 14.2663C5.03833 13.5547 4.90909 12.7922 4.90909 11.9984C4.90909 11.2167 5.03444 10.4652 5.2662 9.76294L1.23999 6.64844C0.436587 8.25884 0 10.0738 0 11.9984C0 13.918 0.444781 15.7286 1.23746 17.3334L5.27698 14.2663Z"
                  fill="#FBBC05"
                />
              </svg>
              Ingresar con Google
            </button>
          </div>
          <div className="mt-8 flex justify-center items-center ">
            <p className="font-medium text-base">¿No tienes una cuenta?</p>
            <Link to="/register">
              <button className="text-violet-500 text-base font-medium ml-2">
                Registrate
              </button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
