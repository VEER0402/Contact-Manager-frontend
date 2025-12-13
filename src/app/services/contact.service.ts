import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface Contact {
  id?: number;
  name: string;
  email?: string;
  phone?: string;
  company?: string;
  note?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private baseUrl = environment.apiBaseUrl + '/contacts';

  constructor(private http: HttpClient) {
    console.log('ContactService constructor called');
  }

  // ✅ GET ALL CONTACTS
  getContacts(): Observable<Contact[]> {
    console.log('getContacts() API called');
    return this.http.get<Contact[]>(this.baseUrl);
  }

  // CREATE
  create(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(this.baseUrl, contact);
  }

  // UPDATE
  update(id: number, contact: Contact): Observable<Contact> {
    return this.http.put<Contact>(`${this.baseUrl}/${id}`, contact);
  }

  // DELETE
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
