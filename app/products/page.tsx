"use client";

import { useState } from "react";
import ProductBanner from "@/components/products/ProductBanner";
import ProductList from "@/components/products/ProductList";
import { ChevronDown } from "lucide-react";

function Page() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Tüm Ürünler");

  const options = [
    "Tüm Ürünler",
    "Belt Conveyor",
    "Roller Conveyor",
    "Screw Conveyor",
    "Chain Conveyor",
    "Özel Tasarımlar",
  ];

  const handleSelect = (option: any) => {
    setSelected(option);
    setOpen(false);
  };

  return (
    <div>
      <ProductBanner />

      <div className="my-20 text-center px-10">
        <p className="text-[40px] font-bold tracking-wide mb-6">
          Tüm Ürünlerimiz
        </p>

        {/* DROPDOWN */}
        <div className="relative inline-block text-left">
          <button
            onClick={() => setOpen(!open)}
            className="inline-flex items-center justify-between w-64 px-5 py-3 text-lg font-medium bg-white border border-gray-300 rounded-2xl shadow-sm hover:bg-gray-50 transition focus:outline-none"
          >
            {selected}
            <ChevronDown
              className={`ml-2 h-5 w-5 transition-transform duration-200 ${
                open ? "rotate-180" : ""
              }`}
            />
          </button>

          {open && (
            <div className="absolute z-20 mt-2 w-64 bg-white border border-gray-200 rounded-2xl shadow-lg backdrop-blur-lg">
              {options.map((option, index) => (
                <div
                  key={index}
                  onClick={() => handleSelect(option)}
                  className="px-5 py-3 text-left hover:bg-gray-100 cursor-pointer text-gray-700 transition"
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <ProductList />
    </div>
  );
}

export default Page;
