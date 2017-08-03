const List = require (`./list.db.js`);

class ListModel {

  saveList(params) {
    let newList = new List();

    newList.name = params.name;
    newList.owner = params.owner;
    newList.description = params.description;
    newList.pathImage = params.pathImage;

    return newList.save();
  }

  getAllList(ownerName) {
    return List.find({owner: ownerName}, {});
  }

  addItemInList(listName,newItem) {
    return List.findOneAndUpdate({name: listName}, {$push: {item: newItem}});
  }

  getItemByName(listName, itemName) {
    return List.find({"name": listName, "item.name": itemName});
  }

}

module.exports = ListModel;