import { GiftGridItem } from './GiftGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

const GifGrid = ({ category }) => {

    const { data:images, loading } = useFetchGifs(category);

    return (
        <>
            <h3>{ category }</h3>

            { loading && <p>Loading...</p> }

            <div className='card-grid'>
                {
                    images.map(image => {
                        return <GiftGridItem 
                            key={image.id}
                            { ...image }
                        />
                    })
                }
            </div>
        </>
    )
}

export default GifGrid
