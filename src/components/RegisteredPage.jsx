import * as React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';




export default function RegisteredPage() {



  
  

  return (


    
    <div className="bg-white px-10 py-20 rounded-3xl border-2 border-gray-200">
      <h1 className="text-5xl font-semibold">Tu cuenta se ha creado con exito</h1>
      <p className="font-medium text-lg text-center text-gray-500 mt-4">
        Ya puedes disfrutar de Crea B10.
      </p>
   
        <div className="mt-8">
          

          <div className="mt-8 flex flex-col gap-y-4">
    
            <div className="flex justify-center items-center ">
           <Link to="/login">
           <Button  sx={{
                backgroundColor: "#8B5CF6",
                color: "#fff",
                borderRadius: "0.75rem",
                padding: "0.75rem 0.75rem",
                fontSize: "1.105rem",
                fontWeight: "bold",
                fontFamily: "applesystem, BlinkMacSystemFont, Segoe UI, Roboto",
                textTransform: 'capitalize',
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
              }}>Iniciar Sesión</Button>
           </Link>
        </div>
          </div>
        </div>

    </div>
  );
}
