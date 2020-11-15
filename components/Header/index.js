import { HeaderWrapper, UserImage, Logo } from './styles'


export default function Header() {

  return (
    <HeaderWrapper>

      <Logo src='/renner-logo.svg' alt=""/>

      <UserImage/>
      
    </HeaderWrapper>
  );
}