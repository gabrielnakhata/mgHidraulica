"use client";

import {usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Loader from "./Loader";

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Simular loading quando há mudança de rota (opcional)
    setIsLoading(false);
  }, [pathname]);

  return (
    <>
      {isLoading && <Loader />}
      {children}
    </>
  );
}
