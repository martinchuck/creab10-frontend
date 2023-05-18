import * as React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Registered() {
  
  return (
    <div className="bg-white px-10 py-20 rounded-3xl border-2 border-gray-200">
      <h1 className="text-5xl font-semibold">Registrate</h1>
      <p className="font-medium text-lg text-gray-500 mt-4">
        Crea tu cuenta en pocos pasos.
      </p>
      <form>
        <div className="mt-8">
          <div>
            <label className="text-lg font-medium">Nombre</label> {/* Quité el atributo type, ya que no es válido en la etiqueta label */}
            <input
              className="w-full border-2 border-gray-100 rounded-xl  px-14 py-4 ... mt-1 bg-transparent"
              
              name="firstName"
       
            />
          </div>

          <div>
            <label className="text-lg font-medium">Apellido</label> {/* Quité el atributo type, ya que no es válido en la etiqueta label */}
            <input
              className="w-full border-2 border-gray-100 rounded-xl px-14 py-4 mt-1 bg-transparent"
              
              name="lastName"
    
            />
          </div>

          <div>
            <label className="text-lg font-medium">Correo</label> {/* Quité el atributo type, ya que no es válido en la etiqueta label */}
            <input
              className="w-full border-2 border-gray-100 rounded-xl px-14 py-4 mt-1 bg-transparent"
              
              name="email"

            />
          </div>

          <div>
            <label className="text-lg font-medium">Contraseña</label>
            <input
              className="w-full border-2 border-gray-100 rounded-xl px-14 py-4 mt-1 bg-transparent"
              type="password"
              
              name="password"

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
