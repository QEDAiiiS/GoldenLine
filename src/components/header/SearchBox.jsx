import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";






        // * ==================  FUNCTION COMPONENT   ===================
export default function SearchBox() {


  // * ==================  MY HOOKS  ===================
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const [suggistions, setSuggistions] = useState([]);
  const location = useLocation();



  // * ==================  HANDLE SUBMIT SEARCH FORM   ===================
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`search?query=${encodeURIComponent(searchTerm.trim())}`);
    }
    setSearchTerm("");
    setSuggistions([]);
  };

  // * ==================  FETCH SUGGISTION  ===================
  useEffect(() => {
    const fetchSuggistion = async () => {
      if (!searchTerm.trim()) {
        setSuggistions([]);
        return;
      }
      try {
        const res = await fetch(
          `https://dummyjson.com/products/search?q=${searchTerm}`
        );
        const data = await res.json();
        setSuggistions(data.products.slice(0, 5) || []);
      } catch (error) {
        setSuggistions([]);
      }
    };

    const debounce = setTimeout(() => {
      fetchSuggistion();
    }, 300);

    return () => clearTimeout(debounce);
  }, [searchTerm]);
  //   console.log(suggistions);

  // * ==================  CLOSE SEARCH SUGGISTIONS  ===================
  useEffect(() => {
    setSuggistions([]);
    setSearchTerm("");
  }, [location]);

  // * ==================  COMPONENT ELEMENTS  ===================
  return (
    <>
      <div className="search-box">

        {/* // * ==================  FORM INPUT   =================== */}
        <form
          onSubmit={handleSubmit}
          className="search_box flex items-center bg-[var(--bg_color)] rounded-[30px] border border-[var(--main_color)]"
        >
          <input
            className="h-[30px] w-[340px] p-2 "
            type="text"
            placeholder="Search For Products"
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
            autoComplete="off"
          />
          <button
            className="h-[30px] w-[60px] bg-[var(--main_color)] font-[18px] cursor-pointer rounded-e-[30px] flex justify-center items-center"
            type="submit"
          >
            <FaSearch fill="var(--white_color)" />
          </button>
        </form>

        {/* // * ==================  SUGGISTIONS  =================== */}
        {suggistions.length > 0 && (
          <ul className="suggitions-list  absolute bg-[var(--bg_color)] w-[25%] p-2 rounded-2xl mt-3">
            {suggistions.map((item) => {
              return (
                <Link to={`/productDetails/${item.id}`}>
                  <li key={item.id} className="w-[100%] flex items-center">
                    <div className=" w-[70px] ">
                      <img src={item.images[0]} className="w-fit" />
                    </div>
                    <span className="w-[70%] text-[var(--main_color)]">
                      {item.title}
                    </span>
                  </li>
                </Link>
              );
            })}
          </ul>
        )}

        
      </div>
    </>
  );
}
