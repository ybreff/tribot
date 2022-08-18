import { Fragment, useState } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function InputField(props) {
  let { value, name, type, placeholder, autocomplete, onChange, id, heading, required, disabled, valErrors, onKeyPress } = props;
  let errorClass = required && valErrors ? "border border-red-400 text-red-700 focus:outline-none focus:ring-red-400 focus:border-red-400 ring-red-400" : "border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
  return (
    <>
      <div className="space-y-1 mt-6">
        <label
          htmlFor={id}
          className={classNames(
            required
              ? 'required'
              : '',
            'block text-sm font-medium text-gray-700'
          )}
        >
          {heading}
        </label>
        <div className="mt-1 relative">
          <input
            id={id}
            name={name}
            type={type}
            autoComplete={autocomplete}
            placeholder={placeholder}
            value={value}
            disabled={disabled}
            required = {required} 
            onChange={onChange}
            onKeyPress={onKeyPress}
            className={ "appearance-none block w-full px-3 py-2  rounded-md shadow-sm placeholder-gray-400  sm:text-sm " + errorClass }
          />
          <div className="text-red-700 sm:text-sm absolute right-0">{valErrors}</div>
        </div>
      </div>
    </>
  );
}
