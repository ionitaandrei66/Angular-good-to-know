export interface User {
id: number;
name: string;
role: string;
}

const users: User[] = [
  { id: 1, name: 'Vere', role: 'admin' },
  { id: 2, name: 'Ana', role: 'user' },
];

const usersById = new Map<number, User>(
  users.map(user => [user.id, user])
);

