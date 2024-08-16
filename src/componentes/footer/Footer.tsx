import React from "react";
import {FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react';

function Footer () {

                return (
                                <>
                                <div className="flex justify-center bg-green-900 text-white">
                                                <div className="container flex flex-col items-center py-4">
                                                                <p className="text-x1 font-bold">GooldFarm | Copyright: Todos os direitos reservados. </p>
                                                                <p className="text-lg">Acesse nossas redes sociais</p>
                                                                <div className="flex-gap-2">
                                                                                <LinkedinLogo size={48} weight="bold"></LinkedinLogo>
                                                                                <InstagramLogo size={48} weight="bold"></InstagramLogo>
                                                                                <FacebookLogo size={48} weight="bold"></FacebookLogo>
                                                                </div>
                                                </div>
                                </div>
                                </>
                )
}

export default Footer