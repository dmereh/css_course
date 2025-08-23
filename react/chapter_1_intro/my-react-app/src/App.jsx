// export default function App() {
//   return <h1> Deeqa Mereh </h1>;
// }

import { Fragment } from "react";

const name = "Deeqa";
const year = new Date().getFullYear();
export default function App() {
  const items = [{name:"Ali", email: "ali@gmail.com"}, {name: "Mohamed", email: "Mohamed@gmail.com"}, {name: "Hassan", email: "hassan@gmail.com"}];
  return (
    <>
      <h1>Welcome, {name}!</h1>
      <p>Year: {year}</p>
      <ul>
        {items.map((item) => (
          <li key={item.name}>{item.name} the email is {item.email}</li>
        ))}
      </ul>
    </>
  );
}

