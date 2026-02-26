import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MenuData } from './menu.types';

@Injectable({ providedIn: 'root' })
export class MenuService {
  constructor(private http: HttpClient) {}

  load() {
    return this.http.get<MenuData>('assets/data.json');
  }
}