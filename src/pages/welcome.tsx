import React from 'react';
import Header from "@src/components/Header"

interface WelcomeProps {}

const Welcome: React.FunctionComponent<WelcomeProps> = ({}) => {
  return (
    <div className="root">
      <Header />
    </div>
  );
};

export default Welcome;
