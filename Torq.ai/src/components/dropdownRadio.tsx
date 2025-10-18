import { useState } from "react";

export default function DropdownHelperRadio() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");

  return (
    <div className="relative inline-block text-left">
      {/* Dropdown toggle button */}
      <button
        id="dropdownHelperRadioButton"
        onClick={() => setOpen(!open)}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 
                   font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center 
                   dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        {selected || "Dropdown radio"}
        <svg
          className="w-2.5 h-2.5 ms-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {/* Dropdown menu */}
      {open && (
        <div
          id="dropdownHelperRadio"
          className="absolute z-10 h-96 overflow-auto bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-60 
                     dark:bg-gray-700 dark:divide-gray-600 mt-2"
        >
          <ul
            className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownHelperRadioButton"
          >
            {[
                { id: 3, label: "Just a curious learner" },
              { id: 4, label: "Teacher" },
              { id: 5, label: "Student" },
              { id: 6, label: "Scientist" },
              { id: 6, label: "Shopkeeper" },
              { id: 6, label: "Engineer" },
              { id: 6, label: "Doctor" },
              { id: 6, label: "Lawyer" },
            ].map((option) => (
              <li key={option.id}>
                <div
                  className="flex p-2 rounded-sm hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer"
                  onClick={() => {
                    setSelected(option.label);
                    setOpen(false);
                  }}
                >
                  <div className="flex items-center h-5">
                    <input
                      id={`helper-radio-${option.id}`}
                      name="helper-radio"
                      type="radio"
                      value={option.label}
                      checked={selected === option.label}
                      onChange={() => setSelected(option.label)}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 
                                 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 
                                 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                  </div>
                  <div className="ms-2 text-sm">
                    <label
                      htmlFor={`helper-radio-${option.id}`}
                      className="font-medium text-gray-900 dark:text-gray-300"
                    >
                      <div>{option.label}</div>
                      <p
                        id={`helper-radio-text-${option.id}`}
                        className="text-xs font-normal text-gray-500 dark:text-gray-300"
                      >
                        this info helps torq to be personalised
                      </p>
                    </label>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
