import React, { useState } from 'react';
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'


const GifExpertApp = () => {


    // const categorias = ['One Punch', 'Samurai X', 'Dragon Ball Z']
    const [categorias, setCategorias] = useState(['Dragon Ball'])

    // const handleAdd = () => {
    //     const name = 'Naruto';
    //     setCategorias([...categorias, name]);
    //     setCategorias(category => [...categorias, name]); // category: estado anterior ------ [...categorias, name]: estado nuevo
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategorias }/>
            <hr />

            <ol>

                {
                    categorias.map(category => (
                        <li key={ category }>
                            <GifGrid
                                category={ category }
                            />
                        </li>
                    ))
                }
            </ol>
        </>
    )
}

export default GifExpertApp;
