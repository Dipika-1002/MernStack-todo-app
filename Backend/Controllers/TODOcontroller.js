const TODOModel = require('../models/TODOModel')
module.exports.getToDo = async(req,res)=> {
    const todo = await TODOModel.find()
    res.send(todo)
}
module.exports.saveToDo = async (req, res) => {
    const { text } = req.body 

    TODOModel

    .create({text})
    .then ((data) => {
        console.log("Added Successfully....");
        console.log(data);
        res.send(data)
    })
}
module.exports.updateTodo = async (req, res) => {
    const {_id, text} = req.body
  TODOModel
  .findByIdAndUpdate(_id, {text})
  .then(() => res.send("Update Successfully"))
  .catch((err) => console.log(err))
}

module.exports.deleteTodo = async (req, res) => {
    const {_id} = req.body
  TODOModel
  .findByIdAndDelete(_id)
  .then(() => res.send("Delete Successfully"))
  .catch((err) => console.log(err))
}