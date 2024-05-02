'use client';

import ProdutoProps from "./interface";
import Image from "next/image";
import "./style.css";
import Button from "../Button";

export default function Produto(props: ProdutoProps) {
    return (
        <div className="external-div">
            <div>
                <Image src={props.imagem} alt={props.nome} width={200} height={200} />
            </div>
            <div>
                <h1 className="text-xl p-1">{props.nome}</h1>
            </div>
            <div>
                <p className="p-1">{props.valor}</p>
            </div>
            <div className="p-1">
                <Button text="COMPRAR" onClick={() => alert("Produto comprado com sucesso!")} />
            </div>
        </div>
    )
}