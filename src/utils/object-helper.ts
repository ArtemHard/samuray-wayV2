import { UsersType } from "../redux/users-reducer";

export const updateOblectInArray = (
  items: UsersType[],
  itemId: number,
  objPropName: "id",
  newObjProps: {
    [key: string]: boolean;
  }
) => {
  // debugger;
  return items.map((u) =>
    u[objPropName] === itemId ? { ...u, ...newObjProps } : u
  );
};
