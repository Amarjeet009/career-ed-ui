import { get } from "@/lib/http";


const MENU_DATA_URL = 'api/v1/menu?role=student';

const MenuItemService = {
  getMenuItems: () => {
    return get(MENU_DATA_URL).then(data => data.items).catch(error => {
      console.error("Error fetching menu items:", error);
      throw error;
    });
  },
};

export default MenuItemService;
