const ListModel = require (`./list.model.js`);

const listModel = new ListModel();

class ListController {
  
  addList(req, res) {
    listModel.saveList(req.body)
      .then(list => res.status(200).send({data : list}))
      .catch(err => res.status(400).send({error: err}));
  }

  getList(req, res) {
    return listModel.getAllList(req.params.ownerName)
      .then(lists => res.status(200).send({data: lists}))
      .catch(err => res.status(400).send({error:err}));
  }

  addItem(req, res) {
    let listName = req.params.listName;
    let itemName = req.body.item.name;
    let itemPrice = req.body.item.price;
    let itemQuantity = req.body.item.quantity;
    if ( (listName === '')
      || (itemName === '') 
      || (itemPrice === null) 
      || (itemQuantity === null)) {
      return  Promise.resolve(res.status(500).send({error: 'empty param'}));
    }
    return listModel.addItemInList(listName, req.body.item)
      .then(list => res.status(200).send({data: list}))
      .catch(err => res.status(400).send({error: err}));
  }

  getItems() {}

  getItem(req, res) {
    return listModel.getItemByName(req.params.listName, req.params.itemName)
      .then(item => res.status(200).send({data: item}))
      .catch(err => res.status(500).send({error: err}));
  }

  updateList() {}

  deleteList() {}

}

module.exports = ListController;