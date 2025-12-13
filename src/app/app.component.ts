
import { Component, OnInit } from '@angular/core';
import { ContactService, Contact } from './services/contact.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  contacts: Contact[] = [];
  isEditMode = false;
editingContactId: number | null = null;


  showAddModal = false;

  newContact: Contact = {
    name: '',
    email: '',
    phone: '',
    company: '',
    note: ''
  };

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.loadContacts();
  }

  loadContacts() {
    this.contactService.getContacts().subscribe(data => {
      this.contacts = data;
    });
  }

  openAddModal() {
    this.showAddModal = true;
  }

  closeAddModal() {
    this.showAddModal = false;
    this.resetForm();
    this.isEditMode = false;
this.editingContactId = null;

  }

  resetForm() {
    this.newContact = {
      name: '',
      email: '',
      phone: '',
      company: '',
      note: ''
    };
  }

  // addContact() {
  //   this.contactService.create(this.newContact).subscribe(() => {
  //     this.loadContacts();
  //     this.closeAddModal();
  //   });
  // }
  addContact() {
  if (this.isEditMode && this.editingContactId) {
    // UPDATE
    this.contactService
      .update(this.editingContactId, this.newContact)
      .subscribe(() => {
        this.loadContacts();
        this.closeAddModal();
        this.isEditMode = false;
        this.editingContactId = null;
      });
  } else {
    // CREATE
    this.contactService.create(this.newContact).subscribe(() => {
      this.loadContacts();
      this.closeAddModal();
    });
  }
}

editContact(contact: Contact) {
  this.showAddModal = true;
  this.isEditMode = true;
  this.editingContactId = contact.id ?? null;

  this.newContact = {
    name: contact.name,
    email: contact.email,
    phone: contact.phone,
    company: contact.company,
    note: contact.note
  };
}



  deleteContact(id: number | undefined) {
    if (!id) return;

    this.contactService.delete(id).subscribe(() => {
      this.loadContacts();
    });
  }
}
