import { useEffect } from "react";

export default function ItopsyPage() {
  useEffect(() => {
    window.location.href = "https://itopsy.com";
  }, []);

  return null;
}
