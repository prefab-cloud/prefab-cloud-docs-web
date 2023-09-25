import useIsBrowser from "@docusaurus/useIsBrowser";
import React from "react";
import Link from "@docusaurus/Link";

const getCookie = (name: string) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(";").shift();
};

const NavbarCta = () => {
  const isBrowser = useIsBrowser();

  if (isBrowser) {
    const cookieValue = getCookie("hasDashboardSession");
    if (cookieValue === "true") {
      return (
        <Link className="navbar__link" href="https://app.prefab.cloud">
          Dashboard
        </Link>
      );
    }
  }

  return (
    <Link
      className="navbar__link"
      href="https://app.prefab.cloud/users/sign_up"
    >
      Create Account
    </Link>
  );
};

export default NavbarCta;
