import React, { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinusCircle, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import livraison from '../../images/Livreur.png'


function Maritime() {

    const [dest, setDest] = useState("france2");
    const [codeDest, setCodeDest] = useState("");
    const [arriv, setArriv] = useState("");
    const [radio2, setRadio2] = useState("");
    const [ville, setVille] = useState("");
    const [poste, setPoste] = useState("");
    const [rue, setRue] = useState("");
    const [email, setEmail] = useState("");

    const [plusOrMoins, setPlusOrMoins] = useState(0)


    return (
        <>
            <div className="container mx-auto flex flex-col lg:flex-row justify-between gap-4 lg:gap-0">
                <div className="left flex-1 w-full lg:w-3/6 shadow-[0_0_12px_rgba(0,0,0,0.2)]">
                    <form className="bg-white p-10">
                        <div className="">
                            <div className="">
                                <div className="flex flex-col self-start lg:flex-row">
                                    <div className="mb-4 lg:mb-0">
                                        <label className="uppercase text-sm" htmlFor="">Email</label>
                                        <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Votre adresse email" className="sm:text-sm w-full lg:w-[21rem] border border-slate-800 p-3 rounded-sm"/>
                                    </div>
                                    <div className="lg:ml-4">
                                        <label className="uppercase text-sm" htmlFor="">Code Postal</label>
                                        <input type="text" onChange={(e) => { setPoste(e.target.value); }} value={poste} placeholder="Code postal ou ville" className="sm:text-sm w-full lg:w-[21rem] border border-slate-800 p-3 rounded-sm"/>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-10">
                                <div className="flex flex-col self-start lg:flex-row justify-between">
                                    <div className="mb-4 lg:mb-0">
                                        <label className="uppercase text-sm" htmlFor="">Adresse</label>
                                        <input type="text" onChange={(e) => { setRue(e.target.value); }} value={rue} placeholder="Votre adresse" className="sm:text-sm w-full lg:w-[21rem] border border-slate-800 p-3 rounded-sm"/>
                                    </div>
                                    <div className="">
                                        <label className="uppercase text-sm" htmlFor="">Ville</label>
                                        <input type="text" onChange={(e) => { setVille(e.target.value); }} placeholder="Ville ou code postal" className="sm:text-sm w-full lg:w-[21rem] border border-slate-800 p-3 rounded-sm"/>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-10">
                                <span className="text-sm">DE</span>
                                <div className="flex justify-between">
                                    <select  placeholder="Pays" onChange={(e) => setDest(e.target.value)} className="w-full p-3 focus:outline-none bg-zinc-100">
                                        <option value={"France"}>France</option>
                                        <option value={"Côte d'Ivoire"}>Côte d{"'"}Ivoire</option>
                                    </select>
                                </div>
                            </div>
                            <div className="mt-10">
                                <span className="text-sm">À</span>
                                <div className="flex justify-between">
                                    <select placeholder="Pays" onChange={(e) => setArriv(e.target.value)} className="w-full p-3 focus:outline-none bg-zinc-100">
                                        <option value={"Côte D'Ivoire"}>Côte d{"'"}Ivoire</option>
                                        <option value={"France"}>France</option>
                                    </select>
                                </div>
                            </div>
                            <div className="mt-10">
                                <h2 className="text-2xl text-center font-bold">Reception du colis par la structure</h2>
                                <div className="mt-6 mb-6" onChange={setRadio2} value={radio2}>
                                    <ul class="flex flex-col lg:flex-row justify-between items-center w-full text-sm font-medium text-gray-900 bg-white border 
                                        rounded-sm sm:flex dark:text-white gap-4 lg:gap-0">
                                        <li class="w-full border border-gray-600">
                                            <div class="flex items-center ps-3">
                                                <input id="horizontal-list-radio-license" type="radio" value="En agence" name="list-radio" class="w-4 h-4 text-cyan-800 bg-gray-100 border-gray-300 focus:ring-cyan-800 dark:focus:ring-cyantext-cyan-800 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                                                <label for="horizontal-list-radio-license" class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-800">Dépôt en agence</label>
                                            </div>
                                        </li>
                                        <li class="w-full border border-gray-600">
                                            <div class="flex items-center ps-3">
                                                <input id="horizontal-list-radio-id" type="radio" value="Retrait à domicile" name="list-radio" class="w-4 h-4 text-cyan-800 bg-gray-100 border-gray-300 focus:ring-cyan-800 dark:focus:ring-cyantext-cyan-800 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                                                <label for="horizontal-list-radio-id" class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-800">Retrait à domicile</label>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <span className="text-sm">COLIS</span>
                                <div className="mb-6">
                                    <div className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-0">
                                        <textarea name="" id="" placeholder="Description ici..." cols="30" rows="3" className="sm:text-sm py-2 pl-4 border border-slate-800"></textarea>
                                        <select name="" id="" className="w-full lg:w-[20rem] p-3 focus:outline-none border border-slate-800 bg-zinc-100">
                                            <option value="">Carton 200 L</option>
                                            <option value="">Carton 200 L</option>
                                            <option value="">Carton 200 L</option>
                                        </select>
                                        <input type="text" placeholder="Valeur en euro" className="w-full lg:w-[20rem] p-2 border placeholder:text-slate-400 block bg-white border-slate-800 rounded-sm py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-cyan-800 focus:ring-cyan-800 focus:ring-1 sm:text-sm"/>
                                        <button className="rounded-md text-cyan-800">
                                            <div className="">
                                                {plusOrMoins === 0 ? (
                                                    <FontAwesomeIcon className="size-8 ml-2" icon={faPlusCircle}/>
                                                ) : (
                                                    <FontAwesomeIcon className="size-8 ml-2" icon={faMinusCircle}/>
                                                )}
                                            </div>
                                        </button>
                                    </div>
                                    <div className="flex flex-col lg:flex-row justify-between items-center">
                                        <div className="flex flex-col justify-between lg:flex-row mt-6 w-full gap-4 lg:gap-0">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Link href={"/QuoteConfirmationMaritime"}>
                            <button className="w-full bg-cyan-800 text-white font-bold p-2 rounded-md mt-20">Envoyez dès maintenant</button>
                        </Link>
                    </form>
                </div>
                <div className="right bg-orange-100 flex-1 w-full lg:w-3/6">
                    <div className="flex flex-col p-10">
                        <h2 className="text-2xl lg:text-6xl font-bold">Comparer différents transporteur et faites des économies avec CHAP.</h2>
                        <p className="text-sm lg:text-lg mt-10">
                            Envoyez vos colis vers vers l{"'"}Afrique de l{"'"}uest par nos partenaires. Remplissez le formulaire et 
                            attendez notre retour mail si vous ne possédez pas un CHAP, sinon vérifiez l{"'"}onglet devis de votre compte. 
                            Un fois reçu les différentes propositions de nos partenaires, vous pourrez choisir, payer et préparer le colis 
                            pour le transporteur.
                        </p>
                        <div className="lg:-mt-20">
                            <img className="w-[36rem]" src={livraison} alt="Livreur" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Maritime