var express = require('express');
var cors = require('cors')
var app = express();

app.use(cors())

const campaigns = [
   {
      id: '1',
      title: 'Burger Deal',
      description: '5 Burgers in 599 Deal',
      startDate: '05/28/2020',
      endDate: '05/30/2020',
      dealImage : '/media/avatars/300-20.jpg',
      tenant: 5,
      campaigntype: 'mycamp',
      campaigntags: ["firsttags", "second"],
      coupon: 'NXTTS32444',
      status: 'Approved'
    },
    {
      id: '2',
      title: 'Zinger Deal',
      description: '5 Zinger in 599 Deal',
      startDate: '05/28/2020',
      endDate: '05/30/2020',
      dealImage : '/media/avatars/300-21.jpg',
      tenant: 5,
      campaigntype: 'mycamp',
      campaigntags: ["firsttags", "second"],
      coupon: 'NXTTS32444',
      status: 'Approved'
   },
   {
      id: '3',
      title: 'Pizza Deal',
      description: '5 Pizza in 599 Deal',
      startDate: '05/28/2020',
      endDate: '05/30/2020',
      dealImage : '/media/avatars/300-22.jpg',
      tenant: 5,
      campaigntype: 'mycamp',
      campaigntags: ["firsttags", "second"],
      coupon: 'NXTTS32444',
      status: 'Approved'
   },
   {
      id: '4',
      title: 'Macbook Deal',
      description: '5 Macbook in 59999 Deal',
      startDate: '05/28/2020',
      endDate: '05/30/2020',
      dealImage : '/media/avatars/300-23.jpg',
      tenant: 5,
      campaigntype: 'mycamp',
      campaigntags: ["firsttags", "second"],
      coupon: 'NXTTS32444',
      status: 'Approved'
   },
   {
      id: '5',
      title: 'Bike Deal',
      description: '5 Bike in 599888 Deal',
      startDate: '05/28/2020',
      endDate: '05/30/2020',
      dealImage : '/media/avatars/300-24.jpg',
      tenant: 5,
      campaigntype: 'mycamp',
      campaigntags: ["firsttags", "second"],
      coupon: 'NXTTS32444',
      status: 'Approved'
   },
]

const coupons = [
   {
      id: '1',
      recipient: 'David',
      amount: '$50',
      date: '2022-04-03',
      photo: '/media/avatars/300-23.jpg'
   },
   {
      id: '2',
      recipient: 'William',
      amount: '$100',
      date: '2022-04-03',
      photo: '/media/avatars/300-23.jpg'
   }
]

app.get('/', function (req, res) {
   res.send('Hello World');
})

app.get('/allCampaigns', function (req, res) {
   res.send(campaigns);
})

app.get('/allEvents', function (req, res) {
   res.send(campaigns);
})

app.get('/allRetailers', function (req, res) {
   res.send(campaigns);
})

app.get('/allMenus', function (req, res) {
   res.send(campaigns);
})

app.get('/allCoupons', function (req, res) {
   res.send(coupons);
})

app.delete('/campaigns/:id', function (req, res) {
   res.send(campaigns.filter(x=>x.id !== req.params.id));
})

app.delete('/events/:id', function (req, res) {
   res.send(campaigns.filter(x=>x.id !== req.params.id));
})

app.delete('/retailers/:id', function (req, res) {
   res.send(campaigns.filter(x=>x.id !== req.params.id));
})

app.delete('/menus/:id', function (req, res) {
   res.send(campaigns.filter(x=>x.id !== req.params.id));
})

app.put('/campaigns/:id', function (req, res) {

   res.send(campaigns.filter(x=>x.id !== req.params.id));
})

app.put('/events/:id', function (req, res) {

   res.send(campaigns.filter(x=>x.id !== req.params.id));
})

app.put('/retailers/:id', function (req, res) {

   res.send(campaigns.filter(x=>x.id !== req.params.id));
})

app.put('/menus/:id', function (req, res) {

   res.send(campaigns.filter(x=>x.id !== req.params.id));
})

app.post('/addCampaign', (req, res) => {
    res.send('campaign added');
})

app.post('/addEvent', (req, res) => {
   res.send('event added');
})


app.post('/addRetailer', (req, res) => {
   res.send('retailer added');
})

app.post('/addMenu', (req, res) => {
   res.send('Menu added');
})

app.listen(8080, function () {
   console.log("Example app listening at http://localhost:8080")
})