import React from 'react';
import toast from 'react-hot-toast';

import { FaCartPlus } from 'react-icons/fa';
import { RiMoneyPoundCircleFill } from 'react-icons/ri';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import './Item.css';



const Item = ({ item, FavoratesList, index, addToHearted, hearts }) => {

    const handleHeartClick = () => {
        !hearts[index] ? 
            toast.error(`${ item.name } removed from favourites.`) : 
            toast.success(`${ item.name } added to favourites.`);
        addToHearted(index);
        FavoratesList(item);
    }


    return (
        <div className='menu__item'>
            <div className='img__container'>
                <button 
                    className='heart' 
                    onClick={ () => {
                        handleHeartClick()
                    }}
                >
                    {
                        !hearts[index] ? 
                        <AiFillHeart key={ item.name } /> :
                        <AiOutlineHeart key={ item.name } />
                    }
                </button>
                <div className="overlay" />
                <img 
                    className='plat__img'
                    src={ item.img[0] }
                    alt={ item.name } 
                />

                <div className="plat__info">
                    <h1>{ item.name }</h1>
                    <p>{ item.description }</p>
                    <b>{ item?.category }</b>
                </div>
            </div>
            <div className='btns'>
                <button className='btn'>
                    <FaCartPlus className='icon' />
                    <span>Add to Cart</span>
                </button>

                <button className='btn'>
                    <RiMoneyPoundCircleFill className='icon' />
                    <span>Buy Now</span>
                </button>
                <h2>{ item.price }</h2>
            </div>
        </div>
    );
}

export default Item;