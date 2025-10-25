import { Injectable, signal, WritableSignal } from '@angular/core';
import { CapacitorSQLite, SQLiteDBConnection, SQLiteConnection, CapacitorSQLitePlugin } from '@capacitor-community/sqlite';
import { Platform } from '@ionic/angular';

// Define the structure for your expense data
// export interface ExpenseItem {
//   id?: number;
//   category: string; // e.g., 'أعلاف', 'إيجار'
//   amount: number;
//   is_paid_in_full: number; // 1 for true, 0 for false (SQLite uses integers for boolean)
//   created_at: number; // Timestamp for tracking
// }

const DATABASE_NAME = 'expenses_db';

export interface User {
  id: number;
  name: string;
  email: string;
  active: number;
}

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private sqlite: SQLiteConnection = new SQLiteConnection(CapacitorSQLite);
  private db!: SQLiteDBConnection;
  private users: WritableSignal<User[]> = signal<User[]>([]);

  constructor(private platform: Platform) {}

  async initialzPlugin(){
    this.db = await this.sqlite.createConnection(DATABASE_NAME, false, "no-encryption", 1, false);
    await this.db.open();
    const schema =    `
        CREATE TABLE IF NOT EXISTS users (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          category TEXT NOT NULL,
          amount REAL NOT NULL,
          active INTEGER DEFAULT 1
        ); `;
    await this.db.execute(schema);
    await this.loadUsers();
    return true;
  }

  getUsers() {
    return this.users();
  }

  async loadUsers() {
    const users = await this.db.query('SELECT * FROM users;');
    this.users.set(users.values || []);
  }

  async addUser(name: string) {
    console.log('Adding user:', name);
    const query = `INSERT INTO users (name) VALUES ('${name}');`;
    const result = await this.db.query(query);
    console.log('Add user result:', result);
    await this.loadUsers();
    return result;
  }

  async updateUserById(id: number, active: number) {
    const query = `UPDATE users SET active = ${active} WHERE id = ${id};`;
    const result = await this.db.query(query);
    await this.loadUsers();
    return result;
  }

  async deleteUserById(id: number) {
    const query = `DELETE FROM users WHERE id = ${id};`;
    const result = await this.db.query(query);
    await this.loadUsers();
    return result;
  }

 }
