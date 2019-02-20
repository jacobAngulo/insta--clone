import React from "react";

const withConditionalLoginRender = LogInPage => HomePage => props => {
  if (!localStorage.getItem("user")) {
    return <LogInPage />;
  }
  return <HomePage />;
};

export default withConditionalLoginRender;
