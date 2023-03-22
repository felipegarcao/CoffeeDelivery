import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input({ ...rest }: InputProps) {
  return (
    <input {...rest} type="text" className="mt-4 border-base-input text-sm rounded focus:ring-yellow-dark focus:outline-none focus:border-yellow-dark block w-full p-2.5 bg-base-button shadow-sm focus:ring-1" />
  )
}