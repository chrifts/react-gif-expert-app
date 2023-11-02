import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One punch']);
    const onAddCategory = (val) => {

        if (categories.includes(val)) return;

        setCategories([val, ...categories]);
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory onNewCategory={onAddCategory} />

            { categories.map(cat => <GifGrid key={cat} category={cat} />) }

        </>
    )
}
