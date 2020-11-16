import { HeaderWrapper, UserImage, Logo,Button } from './styles'
import Link from 'next/link';

export default function Header(props) {

  return (
    <HeaderWrapper>
      <Link href='/'>
        <Logo src='/renner-logo.svg' alt=""/>
      </Link>
      

    {props.button && (
        <Link href='/club'>
        <Button>Clube de fidelidade</Button>
      </Link>
    )}
      
      {/* <UserImage/> */}
      
    </HeaderWrapper>
  );
}