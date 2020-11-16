import { HeaderWrapper, UserImage, Logo,Button } from './styles'
import Link from 'next/link';

export default function Header() {

  return (
    <HeaderWrapper>

      <Logo src='/renner-logo.svg' alt=""/>

      <Link href='/club'>
        <Button>Clube de fidelidade</Button>
      </Link>
      
      {/* <UserImage/> */}
      
    </HeaderWrapper>
  );
}