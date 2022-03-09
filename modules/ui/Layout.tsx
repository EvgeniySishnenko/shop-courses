import { ReactNode } from "react";
import { NextSeo } from "next-seo";

interface IProps {
  children?: ReactNode;
  title?: string;
}

const Layout = ({ children, title }: IProps): JSX.Element => {
  return (
    <>
      <NextSeo title={title} />
      {children}
    </>
  );
};

export default Layout;
