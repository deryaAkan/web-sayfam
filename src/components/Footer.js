import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faCodepen, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faAt } from '@fortawesome/free-solid-svg-icons';

export default function Footer({data}) {
    const icons = [
        { icon: faTwitter, className: 'text-[#4731D3] dark:text-[#8F88FF] ' },
        { icon: faCodepen, className: 'text-[#4731D3] dark:text-[#8F88FF] ' },
        { icon: faAt, className: 'text-[#4731D3] dark:text-[#8F88FF] ' },
        { icon: faInstagram, className: 'text-[#4731D3] dark:text-[#8F88FF] ' }
    ];

    return (
        <footer className='CommonThings bg-white text-[#777777] gap-5 dark:bg-[#252128]'>
            <div className='w-1/2 flex flex-col justify-center items-center gap-5'>
                <h3 className='font-bold text-[#4731D3] text-[48px] dark:text-[#8F88FF]'>{data.heading}</h3>
             
                <p className='flex flex-wrap justify-center w-[400px] font-normal text-[24px] dark:text-white'>{data.description}</p>
              
                <a href='https://www.google.com/' className='text-[20px] text-[#4731D3] underline dark:text-[#8F88FF]'>almilasucode@gmail.com</a>
                <div className='flex flex-wrap gap-5'>
                    {icons.map((iconObject, index) => (
                        <FontAwesomeIcon key={index} icon={iconObject.icon} className={iconObject.className} />
                    ))}
                </div>
            </div>
        </footer>
    );
}
