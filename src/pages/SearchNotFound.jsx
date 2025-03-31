import React from "react";
import { Link } from "react-router-dom";
import notfound from '@/assets/images/notfound.webp'
export default function SearchNotFound() {

  return (
    <div className="container flex flex-col items-center justify-center max-h-screen gap-2">
     <img loading="lazy" src={notfound} className="rounded-3xl" alt="" />
      <Link to={'/'} className=" capitalize">
       go to Home
      </Link>
    </div>
  );
}
