import React, { useState } from "react";
import { BiSolidTrash } from "react-icons/bi";
import { TbFilter2Edit } from "react-icons/tb";
import { MdOutlinePlaylistAddCheck } from "react-icons/md";
import { MdOutlineAddCircleOutline } from "react-icons/md";

const Content = () => {
  let [items, setItems] = useState([
    {
      id: 1,
      label: "HTML & CSS",
      checked: true,
    },
    {
      id: 2,
      label: "JavaScript",
      checked: true,
    },
    {
      id: 3,
      label: "ReactJS",
      checked: false,
    },
  ]);

  let [newItem, setNewItem] = useState("");
  let [isEditing, setIsEditing] = useState(false);
  let [currentElementId, setCurrentEleId] = useState(null);

  let handleChecked = (id) => {
    let newListItems = items.map((item) => {
      return item.id == id ? { ...item, checked: !item.checked } : item;
    });
    setItems(newListItems);
  };

  let handleUpdate = (id) => {
    let listItem = items.find((item) => item.id === id);
    setNewItem(listItem.label);
    setIsEditing(true);
    setCurrentEleId(id);
  };

  let handleDelete = (id) => {
    let newItems = items
      .filter((item) => item.id !== id)
      .map((item, index) => {
        return { ...item, id: index + 1 };
      });
    setItems(newItems);
  };

  let handleAddorSave = () => {
    if (isEditing) {
      let newItems = items.map((item) => {
        return item.id === currentElementId
          ? { ...item, label: newItem }
          : item;
      });
      setItems(newItems);
      setCurrentEleId(null);
      setNewItem("");
      setIsEditing(false);
    } else {
      setItems([
        ...items,
        { id: items.length + 1, label: newItem, checked: false },
      ]);
      setNewItem("");
    }
  };

  return (
    <main>
      {/* <Shop /> */}
      <div>
        <input
          type="text"
          value={newItem}
          placeholder="Add New Item"
          onChange={(e) => {
            setNewItem(e.target.value);
          }}
        />
        <button onClick={handleAddorSave}>
          {isEditing ? (
            <MdOutlinePlaylistAddCheck color="green" />
          ) : (
            <MdOutlineAddCircleOutline color="blue" />
          )}
        </button>
      </div>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.id} className="item">
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => handleChecked(item.id)}
              />
              <label>{item.label}</label>
              <TbFilter2Edit
                className="edit"
                tabIndex={0}
                role="button"
                onClick={() => handleUpdate(item.id)}
              />
              <BiSolidTrash
                className="delete"
                tabIndex={0}
                role="button"
                onClick={() => handleDelete(item.id)}
              />
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Content;
