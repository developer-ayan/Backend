const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/Node_Js_Practice")
  .then(() => console.log("Connection succesfull"))
  .catch((err) => console.log(err));

const playlistSchema = new mongoose.Schema({
  name: { type: String, required: true },
  course: String,
  db: String,
});

const Playlist = new mongoose.model("Playlist", playlistSchema)

const createDocument = async ()  => {
  try {
const reactPlaylist = new Playlist({
  course : 'React JS',
  name : 'Front end',
  db : 'mysql',

})
const ExpressPlayList = new Playlist({
  course : 'Express JS',
  name : 'Backend',
  db : 'mongo',
})


const ss = await Playlist.insertMany([reactPlaylist , ExpressPlayList])
console.log("Result ",ss)
  }catch(err){
    console.log(err)
  }
}
// createDocument()

const getDocuments = async () => {
 try {
   const result = await Playlist.find({name : {$in : ['Front end' , 'Backend']}})
   console.log(result)
  }catch (err) {
    console.log(err)
  }
}

getDocuments()