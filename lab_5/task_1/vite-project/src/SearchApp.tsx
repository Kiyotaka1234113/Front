import React, { useState } from "react";
import { User } from "./types";
import UserCard from "./UserCard";

const INITIAL_DATA: User[] = [
  { name: "Alice", email: "alice@mail.com", age: 25 },
  { name: "Bob", email: "bob@mail.com", age: 30 },
  { name: "Charlie", email: "charlie@mail.com", age: 22 },
  { name: "Diana", email: "diana@mail.com", age: 28 },
  { name: "Eve", email: "eve@mail.com", age: 35 },
];

const SearchApp = () => {
  const [users] = useState<User[]>(INITIAL_DATA);
  const [filteredUsers, setFilteredUsers] = useState<User[]>(INITIAL_DATA);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value;

    setSearchTerm(term);
    setFilteredUsers(
      users.filter((u) =>
        u.name.toLowerCase().includes(term.toLowerCase())
      )
    );
  };

  const handleClear = (_event: React.MouseEvent<HTMLButtonElement>) => {
    setSearchTerm("");
    setFilteredUsers(users);
  };

  return (
    <div>
      <h1>User Search</h1>

      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={handleSearch}
      />

      <button onClick={handleClear}>Clear</button>

      <div style={{ marginTop: "20px" }}>
        {filteredUsers.length === 0 ? (
          <p>No results found</p>
        ) : (
          filteredUsers.map((user) => (
            <UserCard key={user.email} user={user}>
              <p>Status: Active user</p>
            </UserCard>
          ))
        )}
      </div>
    </div>
  );
};

export default SearchApp;
