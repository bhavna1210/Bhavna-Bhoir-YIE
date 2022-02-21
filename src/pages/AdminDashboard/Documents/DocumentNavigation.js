import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../YIEUI/Button";

const DocumentNavigation = () => {
  const navigate = useNavigate();
  return (
    <div class="flex pt-5  mx-auto w-3/4 justify-center mb-5" role="group">
      <Button variant="navigation" onClick={() => navigate("/adminDocuments")}>
        Academic
      </Button>
      <Button
        variant="navigation"
        onClick={() => navigate("/adminDocuments/personal")}
      >
        Personal
      </Button>
      <Button
        variant="navigation"
        onClick={() => navigate("/adminDocuments/adminstration")}
      >
        Adminstration
      </Button>
      <Button
        variant="navigation"
        onClick={() => navigate("/adminDocuments/addDocument")}
      >
        Add Document
      </Button>
    </div>
  );
};

export default DocumentNavigation;
