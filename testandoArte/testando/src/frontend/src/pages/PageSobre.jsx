import FuncionarioModels from "../components/FuncionarioModels";
import React, { useState, useEffect } from 'react';

const [name, setNome] = useState('');
const [office, setCargo] = useState('');
const [photoRoute, setRotafoto] = useState('');

//metodo get
useEffect(() => {
    async function fetchFuncionarios() {
      const response = await fetch(``);
      const data = await response.json();
      setColetores(data);
    }

    fetchColetores();
  }, []);


function PageSobre ( ) {
    return (
        <>

            <div>
                <FuncionarioModels nome={name} cargo={office} rotafoto={photoRoute} />
            </div>
        </>
    );
};

export default PageSobre;
