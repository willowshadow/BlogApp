import React from "react";

export function EmailInput(props: {
  username: string | number | readonly string[] | undefined;
  setUsername: (arg0: string) => void;
}) {
  return (
    <div>
      <label htmlFor="username" className="sr-only">
        Email
      </label>
      <input
        id="email"
        name="email"
        type="text"
        autoComplete="email"
        required
        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
        placeholder="Email"
        value={props.username}
        onChange={(e) => props.setUsername(e.target.value)}
      />
    </div>
  );
}
export function UserNameInput(props: {
  username: string | number | readonly string[] | undefined;
  setUsername: (arg0: string) => void;
}) {
  return (
    <div>
      <label htmlFor="username" className="sr-only">
        Username
      </label>
      <input
        id="username"
        name="username"
        type="text"
        autoComplete="username"
        required
        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
        placeholder="Username"
        value={props.username}
        onChange={(e) => props.setUsername(e.target.value)}
      />
    </div>
  );
}
export function PasswordInput(props: {
  password: string | number | readonly string[] | undefined;
  setPassword: (arg0: string) => void;
  styles?: string | undefined;
}) {
  return (
    <div>
      <label htmlFor="password" className="sr-only">
        Password
      </label>
      <input
        id="password"
        name="password"
        type="password"
        autoComplete="current-password"
        required
        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
        placeholder="Password"
        value={props.password}
        onChange={(e) => props.setPassword(e.target.value)}
      />
    </div>
  );
}

export function PasswordConfirmInput(props: {
  password: string | number | readonly string[] | undefined;
  setPassword: (arg0: string) => void;
  styles?: string | undefined;
}) {
  return (
    <div>
      <label htmlFor="password" className="sr-only">
        Password
      </label>
      <input
        id="passwordConfirm"
        name="password"
        type="password"
        autoComplete="current-password"
        required
        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
        placeholder="Confirm Password"
        value={props.password}
        onChange={(e) => props.setPassword(e.target.value)}
      />
    </div>
  );
}
