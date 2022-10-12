import React from "react";
import "../styles.css";

export default function InfosUsuario(){
  const nomeUsuario = "Criador de Conteúdo" //nome do autor
  return(
    <div className="info-usuarios">
      <img src="https://i.picsum.photos/id/1005/5760/3840.jpg?hmac=2acSJCOwz9q_dKtDZdSB-OIK1HUcwBeXco_RMMTUgfY " alt="" />
      <p>{nomeUsuario}</p>
    </div>
  )
}