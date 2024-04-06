import React from "react";

interface HeaderProps {
  title: string;
  subtitle?: string;
}

const Header = ({ title, subtitle }: HeaderProps) => {
  return (
    <div>
      <h2 className="h2-bold text-dark-600">{title}</h2>
      <p> {subtitle} </p>
    </div>
  );
};

export default Header;
