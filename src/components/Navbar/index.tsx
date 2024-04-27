import { Wrapper } from "./styles";
import { NavbarProps } from "./type";

//  전체 nav
const Navbar = ({ children, className, ...props }: NavbarProps) => {
  return (
    <Wrapper className={className} {...props}>
      {children}
    </Wrapper>
  );
};

export default Navbar;
