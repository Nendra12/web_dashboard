import { useState } from "react";

function PasswordInput() {
  const [show, setShow] = useState(false);

  return (
    <div className="relative w-130.5">
      <input
        type={show ? "text" : "password"}
        placeholder="**********"
        className="w-full px-5 py-3 pr-12 rounded-xl border border-[#DFEAF2] 
                   text-primary3 focus:outline-none focus:border-[#1814F3]"
      />

      <button
        type="button"
        onClick={() => setShow(!show)}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-primary3 cursor-pointer"
      >
        {show ? (
          <i class="bi bi-eye-slash"></i>
        ) : (
          <i class="bi bi-eye"></i>
        )}
      </button>
    </div>
  );
}

export default PasswordInput;
