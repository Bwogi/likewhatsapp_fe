import React from "react";
import { ArrowIcon, CallIcon, ChatIcon, DocumentIcon } from "./svg";

const App = () => {
  return (
    <div className="dark">
      <h1 className="bg-bg_1 dark:bg-dark_bg_1">
        <p className="text-txt_1 dark:text-white">Welcome to the front end</p>
        <p className="customh1">Custom h1 applied to paragraph</p>
      </h1>
      <ArrowIcon />
      <ChatIcon className="fill-blue-600" />
      <DocumentIcon />
      <CallIcon className="fill-bg_1" />
    </div>
  );
};

export default App;
