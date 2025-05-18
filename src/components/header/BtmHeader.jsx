import React, { useEffect, useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import { PiSignInBold } from "react-icons/pi";
import { FaUserPlus } from "react-icons/fa";



// !   COMPONENT FUNCTION
export default function BtmHeader() {


  const [categories, setCategories] = useState([]);
  const [catListDisplay, setCatListDisplay] = useState(false);


  // !  FETCH CATEGORISE FROM API
  useEffect(() => {
    const getData = async () => {
      let res = await fetch("https://dummyjson.com/products/categories");
      let data = await res.json();
      setCategories(data);
      // ((response)=>response.json())
      // .then((data)=>setCategories(data))
    };
    getData();
  }, []);


  // ! NAVE LINKS 
  const navLinks = [
    { title: "Home", link: "/" },
    { title: "About", link: "/about" },
    { title: "Accessories", link: "/accessories" },
    { title: "Blog", link: "/blog" },
    { title: "Contact", link: "/contact" },
  ];

  const location = useLocation();


  // ! CLSE CATEGORY LIST
  useEffect(()=>{
    setCatListDisplay(false)
  }, [location])

  // ! JSX ELEMENTS
  return (
    <div className="btm_header bg-[var(--main_color)]">
      <div className="container flex items-center justify-between">

        <nav className="nav flex items-center gap-[50px] h-[50px]">

          {/*//! CATEGORY PART  */}
          <div className="category_nav w-[220px] h-[100%] relative">
            <div
              onClick={() => setCatListDisplay(!catListDisplay)}
              className="category_btn h-[100%] w-[100%] flex justify-between items-center px-[15px] cursor-pointer"
            >
              <IoMdMenu fill="var(--white_color)" />
              <p className="text-[var(--white_color)] text-[15px] font-[600]">
                Browse Category
              </p>
              <MdOutlineArrowDropDown fill="var(--white_color)" size={"25px"} />
            </div>

            <div
              style={{ transition: "0.4s ease-in-out" }}
              className={`category_nav_list absolute z-10 top-[100%] left-0 w-[100%] bg-[var(--white_color)] border border-[#999] border-t-0 flex flex-col max-h-[400px] overflow-y-auto  
              ${catListDisplay ? "activeList" : "nonActiveList"}`}
            >
              {categories.map((cat) => (
                <Link
                key={cat.slug}
                  className="  py-[14px] px-[10px] border-b border-[var(--border_color)] text-[14px]"
                  to={`/categoryProducts/${cat.slug}`}
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          </div>

              {/*//! NAV LINKS */}
          <div className="nav_links flex  h-[100%]">
            {navLinks.map((link) => (
              <Link
                key={link.link}
                style={{
                  backgroundColor:
                    location.pathname == link.link ? "#0079ca" : "",
                }}
                className="flex items-center px-[25px]"
                to={link.link}
              >
                {" "}
                <span className="text-[var(--white_color)]">
                  {link.title}
                </span>{" "}
              </Link>
            ))}
          </div>

        </nav>

            {/*//! SIGN IN UP */}
        <div className="sign_icons flex gap-[20px]">
          <Link to={"/"}>
            <PiSignInBold fill="var(--white_color)" size="22px" />
          </Link>
          <Link to={"/"}>
            <FaUserPlus fill="var(--white_color)" size="22px" />
          </Link>
        </div>


      </div>
    </div>
  );
}
