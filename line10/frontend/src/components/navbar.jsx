import React from 'react'
import { MdHome } from "react-icons/md";
import { GiBandageRoll } from "react-icons/gi";
import { SlChemistry } from "react-icons/sl";
import { GrUserWorker } from "react-icons/gr";
import { FaWarehouse } from "react-icons/fa";
import { SiSimpleanalytics } from "react-icons/si";
import { Link } from 'react-router-dom';

const navbar = () => {
    return (
        <div className='flex items-center bg-[#0f1214] text-white p-4 border-spacing-20 align-middle justify-center'>
                <div className='mx-3'>
                    <Link to='/supervisor'>
                        <MdHome color="white" />
                    </Link>
                </div>
                <div className='mx-3'>
                    <Link to='/operator'>
                        <GrUserWorker />
                    </Link>
                </div>
                <div className='mx-3'>
                    <Link to='/feeding'>
                        <FaWarehouse />
                    </Link>
                </div>
                <div className='mx-3'>
                    <Link to='/'>
                        <SiSimpleanalytics />
                    </Link>
                </div>
                <div className='mx-3'>
                    <Link to='/winder'>
                        <GiBandageRoll />
                    </Link>
                </div>
                <div className='mx-3'>
                    <Link to='/lab'>
                        <SlChemistry />
                    </Link>
                </div>
        </div>
    )
}

export default navbar
