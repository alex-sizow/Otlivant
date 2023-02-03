import Link from "@components/ui/link";
import { TFunction } from "next-i18next";
import React from "react";

interface Props {
  href: string;
  className?: string;
  btnProps: btnProps;
  isAuthorized: boolean;
}

interface btnProps {
  className?: string;
  children: TFunction;
  onClick: React.MouseEventHandler<any>;
}

const AuthMenu: React.FC<Props> = ({
  isAuthorized,
  href,
  className,
  btnProps,
  children,
}) => {
  return isAuthorized ? (
    <Link href={href} className={className}>
      {children}
    </Link>
  ) : (
    <button {...btnProps} />
  );
};

export default AuthMenu;
