import img1 from '@/assets/pic1.jpg'
import img2 from '@/assets/pic2.jpg'
import img3 from '@/assets/pic3.jpg'
import img4 from '@/assets/pic4.jpg'
import img5 from '@/assets/pic5.jpg'
import Image from 'next/image';

const PopularDestination = () => {
    return (
        <div>
            <h1 className='text-4xl font-bold'>Popular Destination</h1>
            <div className='p-4 grid grid-cols-3'>
                <Image src={img1} alt='img' width={400} />
                <Image src={img2} alt='img' width={400} />
                <Image src={img3} alt='img' width={400} />
                <Image src={img4} alt='img' width={400} />
                <Image src={img5} alt='img' width={400} />
            </div>
        </div>
    );
};

export default PopularDestination;