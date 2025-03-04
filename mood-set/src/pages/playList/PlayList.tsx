import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const PlayList = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div>
      <p>추천</p>
    </div>
  );
};

export default PlayList;
