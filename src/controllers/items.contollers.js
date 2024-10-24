import { PrismaClient } from "@prisma/client";
const client = PrismaClient();

const createItem = async (req, res) => {
  const { title, quantity, price } = req.body;
  try {
    const newItem = await client.items.create({
      data: {
        title,
        quantity,
        price,
      },
    });
    res
      .status(201)
      .json({ message: "contact created successfully", data: newItem });
    console.log(newItem);
  } catch (e) {
    res.status(500).json({ message: "Server Error" });
  }
};

const getAllItems = async (req, res) => {
  try {
    const allItems = await client.items.findMany();
    if (allItems.length <= 0) {
      res.status(200).json({ message: "you don't have any items yet" });
    } else {
      res.status(200).json({ data: allItems });
    }
  } catch (e) {
    res.status(500).json({ message: "Server Error" });
  }
};

const getItem = async (req, res) => {
  const title = req.params.title;

  try {
    const item = await client.items.findFirst({
      where: { title: title },
    });
    if (!item) {
      res
        .status(404)
        .json({ message: `title with title ${title} was not found` });
    } else {
      res.status(200).json({ data: item });
    }
  } catch (e) {
    res.status(500).json({ message: "Server Error" });
  }
};

const updateItem = async (req, res) => {
  const wantedTitle = req.params.title;

  const { title, quantity, price } = req.body;
  try {
    let updatedItem;
    if (title) {
      updatedItem = await client.items.update({
        where: { title: wantedTitle },
        data: { title: title },
      });
    }
    if (quantity) {
      updatedItem = await client.items.update({
        where: { title: wantedTitle },
        data: { quantity: quantity },
      });
    }
    if (price) {
      updatedItem = await client.items.update({
        where: { title: wantedTitle },
        data: { price: price },
      });
    }
    res
      .status(200)
      .json({ message: "item updated successfully!", data: updatedItem });
  } catch (e) {
    res.status(500).json({ message: "Server Error" });
  }
};

const deleteItem = async (req, res) => {
  const title = req.params.title;

  try {
    await client.items.delete({
      where: { title: wantedTitle },
    });
    res.status(200).json({ message: "item deleted succcessfully!" });
  } catch (e) {
    res.status(500).json({ message: "Server Error" });
  }
};

export { createItem, getAllItems, getItem, updateItem, deleteItem };
