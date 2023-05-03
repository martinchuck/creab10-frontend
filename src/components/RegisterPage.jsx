import * as React from "react";
import { Link } from "react-router-dom";
import api from "../shared/api";
import TextField from '@mui/material/TextField';



export default function RegisterPage() {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleRegister = async (event) => {
    event.preventDefault();

    try {
      const response = await api.post("http://localhost:3000/auth/register", {
        firstName: firstName,
        lastName: lastName, 
        email: email,
        password: password,
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  
  

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
                fullWidth
                id="firstName"
                label="Nombre"
                name="firstName"
                autoComplete="firstName"
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
                InputProps={ {
                  sx: {
                    borderRadius: "12px",
                    width: "400px",
                  }
                }}
           />
          </div>

          <div>
          <TextField
              margin="normal"
                fullWidth
                id="lastName"
                label="Apellido"
                name="lastName"
                autoComplete="lastName"
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
                InputProps={ {
                  sx: {
                    borderRadius: "12px",
                  }
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
                InputProps={ {
                  sx: {
                    borderRadius: "12px",
                  }
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
                InputProps={ {
                  sx: {
                    borderRadius: "12px",
                  }
                }}
           />
          </div>

          <div className="mt-8 flex flex-col gap-y-4">
            <button 
              type="submit"
              className="hover:bg-violet-700 hover:scale-[1.01] ease-in-out active:scale-[.95] transition-all py-3 rounded-xl bg-violet-500 text-white text-lg font-bold"
              
            > 
              Registrate
            </button>
            <div className="mt-8 flex justify-center items-center ">
           <p className="font-medium text-base">¿Ya estas registrado?</p>
           <Link to="/login">
           <button  className="text-violet-500 text-base font-medium ml-2">Inicia Sesión</button>
           </Link>
        </div>
          </div>
        </div>
      </form>
    </div>
  );
}
