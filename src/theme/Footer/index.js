import React, { useEffect } from "react";
import Footer from "@theme-original/Footer";

function setGUIDCookie() {
  if (document.cookie.indexOf("tid=") === -1) {
    const guid = crypto.randomUUID();
    const expirationDate = new Date(
      new Date().setFullYear(new Date().getFullYear() + 1)
    ).toUTCString();
    document.cookie = `tid=${guid}; expires=${expirationDate}; SameSite=Lax; path=/`;
  }
}

export default function FooterWrapper(props) {
  useEffect(() => {
    setGUIDCookie();
  });

  return (
    <>
      <Footer {...props} />
    </>
  );
}
