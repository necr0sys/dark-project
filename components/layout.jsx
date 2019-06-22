import Header from './header';
import {
  normalize,
} from './css-layout';

const Layout = ({ children }) => (
  <div>
    <Header />
    {children}
  </div>
);

export default Layout;
