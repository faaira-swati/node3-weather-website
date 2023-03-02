const path = require('path')
const express = require('express')
const hbs = require('hbs')
const forecast = require('./utils/forecast')

const app = express()
const port = process.env.PORT || 3000

//Define paths for express config
const publicDirectoryPath = path.join(__dirname,'../public')
/*  By deafult express looks for views folder to render views but we can customize the path as well*/
const viewsPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')
    
//Setup handlebars engine and views location
app.set('view engine','hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)

//Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('',(req,res) => {
    //render to render hbs tempelate
    res.render('index',{
        title : 'Weather App',
        name : 'Faaira Swati'
    })
})

app.get('/weather',(req,res) =>{
    if(!req.query.locationId){
        return res.send({
            error: 'You must provide a LocationId'
        })
    }
    forecast(req.query.locationId,(error,{Text} = {}) =>{
        if(error){
            return res.send({error})
        }
        res.send({ Data: Text})
    })
})

app.get('/help',(req,res) => {
    //render to render hbs tempelate
    res.render('index',{
        title : 'Help Page',
        name : 'Faaira Swati'
    })
})

app.get('/about',(req,res) => {
    //render to render hbs tempelate
    res.render('index',{
        title : 'About Page',
        name : 'Faaira Swati'
    })
})

app.get('*',(req,res) =>{
     res.render('error',{
        title : '404: Page not found'
     })
})

app.listen(port, () => {
    console.log('Server is up on port'+ port)
})