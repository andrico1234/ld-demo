import { useLDClient } from "launchdarkly-react-client-sdk";
import { useState } from "react";
import { admin, user } from "./users";

export function ChangeUserButton() {
  const [currentUser, setCurrentUser] = useState("admin");
  const client = useLDClient();

  console.log(currentUser);

  console.log(client);

  const toggleUser = () => {
    client.identify(currentUser === "admin" ? user : admin);

    if (currentUser === "admin") return setCurrentUser("user");

    return setCurrentUser("admin");
  };

  const nextUser = currentUser === "admin" ? "user" : "admin";

  return <button onClick={toggleUser}>Switch to {nextUser}</button>;
}
