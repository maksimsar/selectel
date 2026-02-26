import { Component, computed, signal } from '@angular/core';
import { NgFor, NgIf, CurrencyPipe } from '@angular/common';
import { MenuService } from '../../services/menu.service';
import { Menu, MenuData, MenuItem } from '../../services/menu.types';

@Component({
  selector: 'app-second',
  standalone: true,
  imports: [NgIf, NgFor, CurrencyPipe],
  templateUrl: './second.html',
  styleUrl: './second.css',
})
export class Second {
  data = signal<MenuData | null>(null);

  activeMenuId = signal<string>('menu1');

  selectedByMenu = signal<Record<string, Set<string>>>({});

  menus = computed(() => this.data()?.menus ?? []);

  activeMenu = computed<Menu | null>(() => {
    const menus = this.menus();
    return menus.find(m => m.id === this.activeMenuId()) ?? null;
  });

  // сколько выбрано в текущем меню
  selectedCountInActive = computed(() => {
    const set = this.selectedByMenu()[this.activeMenuId()];
    return set ? set.size : 0;
  });

  // сумма выбранного ТОЛЬКО в текущем меню
  selectedSumInActive = computed(() => {
    const menu = this.activeMenu();
    if (!menu) return 0;

    const selectedSet = this.selectedByMenu()[menu.id];
    if (!selectedSet) return 0;

    let sum = 0;
    for (const item of menu.items) {
      if (selectedSet.has(item.id)) sum += item.price;
    }
    return sum;
  });

  constructor(private menuService: MenuService) {
    this.menuService.load().subscribe({
      next: (d) => {
        this.data.set(d);
        if (d.menus.length > 0) this.activeMenuId.set(d.menus[0].id);
      },
      error: (e) => console.error(e),
    });
  }

  selectMenu(menuId: string) {
    this.activeMenuId.set(menuId);
  }

  isChecked(menuId: string, itemId: string): boolean {
    return this.selectedByMenu()[menuId]?.has(itemId) ?? false;
  }

  toggle(menuId: string, item: MenuItem) {
    const map = this.selectedByMenu();
    const currentSet = map[menuId] ? new Set(map[menuId]) : new Set<string>();

    if (currentSet.has(item.id)) currentSet.delete(item.id);
    else currentSet.add(item.id);

    this.selectedByMenu.set({ ...map, [menuId]: currentSet });
  }
}