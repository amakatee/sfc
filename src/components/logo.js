/** @jsx jsx */
import { jsx, Image, Text } from 'theme-ui';
import { Link } from 'components/link';

export default function Logo({ src, ...rest }) {
  return (
    <Link
    path="/"
    sx={{
      variant:'links.logo',
      display:'flex',
      cursor:'pointer',
      mr: 15,
      textDecoration:'none',
      color:"black",
      fontSize:'1.2rem',
      letterSpacing:'.7px'
    }} 
    {...rest}
    >
      <Text >SFChina</Text>
      {/* <Image src={src} alt="landing logo" /> */}
      
    </Link>
  );
}
