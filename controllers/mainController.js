const path = require('path')


module.exports = {
    home : (req,res) => res.sendFiles(path.join(__dirname,'..' ,'views', 'home.html')),
    about : (req,res) => res.sendFiles(path.join(__dirname, '..','views', 'about.html'))
}
