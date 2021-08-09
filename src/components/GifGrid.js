import React from 'react'
import { useFetchGifts } from '../hooks/useFetchGifts';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {
    const { data:imgs, loading } = useFetchGifts(category);
    return (
        <>
            <h3>{category}</h3>
            {loading && <p>Loading</p>}
            <div className="card-grid">
                {
                    imgs.map(img =>
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    )
                }
            </div>
        </>
    )
}
