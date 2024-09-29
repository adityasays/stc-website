import Image from 'next/image';
import logo_white from '../../../public/logo_white.png'
import Link from 'next/link';

export default function Logo() {
  return (
    <Link href={"/"} className='px-4'>
      <Image src={logo_white} alt='main logo' className='h-8 w-fit'/>
    </Link>
  );
}