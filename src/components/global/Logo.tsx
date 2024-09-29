import Image from 'next/image';
import logo_white from '../../../public/logo_white.png';
import Link from 'next/link';

export default function Logo({ width = 110, height = 110, className = '' }) {
  return (
    <Link href="/" className="px-4">
      <Image
        src={logo_white}
        alt="main logo"
        width={width}
        height={height}
        className={className}
      />
    </Link>
  );
}
