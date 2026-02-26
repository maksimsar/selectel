export type MenuItem = { id: string; name: string; price: number };

export type Menu = {
  id: string;
  title: string;
  items: MenuItem[];
};

export type MenuData = {
  menus: Menu[];
};