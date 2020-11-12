import React, { useCallback } from "react";
import { useNavigation } from "@react-navigation/native";

import { useAuth } from "../../hooks/auth";
import { Container } from "./styles";

const Dashboard: React.FC = () => {
  const { signOut, user } = useAuth();

  return <Container></Container>;
};

export default Dashboard;
