import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})

export class HomePage {
  items: { id: number, name: string, startDate: string, endDate: string, location: string, confirmed: boolean, manager: string }[] = [];
  nextId: number = 1;

  constructor(public navCtrl: NavController) { }

  addItem(name: string, startDate: string, endDate: string, location: string, manager: string): void {
    if (name.trim() && startDate.trim() && endDate.trim() && location.trim() && manager.trim()) {
      this.items.push({
        id: this.nextId++,
        name: name.trim(),
        startDate: startDate.trim(),
        endDate: endDate.trim(),
        location: location.trim(),
        manager: manager.trim(),
        confirmed: false
      });
    } else {
      alert('Todas las casillas deben de ser llenadas');
    }
  }

  toggleConfirmed(id: number): void {
    const item = this.items.find(item => item.id === id);
    if (item) {
      item.confirmed = !item.confirmed;
    }
  }

  removeItem(id: number): void {
    this.items = this.items.filter(item => item.id !== id);
  }
}
